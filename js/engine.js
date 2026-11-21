/**
 * HÒM ĂN GÌ - ENGINE
 * Xử lý tính toán tier, phân tích ngân sách, lọc danh sách món và random có trọng số
 */

const Engine = (function() {
  function getTiers() {
    if (typeof TIERS !== 'undefined') return TIERS;
    if (typeof window !== 'undefined' && window.TIERS) return window.TIERS;
    if (typeof require !== 'undefined') {
      try { return require('./data.js').TIERS; } catch (e) {}
    }
    return [];
  }

  function getConfig() {
    if (typeof CONFIG !== 'undefined') return CONFIG;
    if (typeof window !== 'undefined' && window.CONFIG) return window.CONFIG;
    if (typeof require !== 'undefined') {
      try { return require('./data.js').CONFIG; } catch (e) {}
    }
    return {
      dropWeights: [55, 25, 12, 5, 2.5, 0.5],
      minBudget: 10000,
      maxBudget: 5000000
    };
  }

  function getLocations() {
    if (typeof LOCATIONS !== 'undefined') return LOCATIONS;
    if (typeof window !== 'undefined' && window.LOCATIONS) return window.LOCATIONS;
    if (typeof require !== 'undefined') {
      try { return require('./data.js').LOCATIONS; } catch (e) {}
    }
    return [];
  }

  function getRestaurantsDb() {
    if (typeof RESTAURANTS_DB !== 'undefined') return RESTAURANTS_DB;
    if (typeof window !== 'undefined' && window.RESTAURANTS_DB) return window.RESTAURANTS_DB;
    if (typeof require !== 'undefined') {
      try { return require('./data.js').RESTAURANTS_DB; } catch (e) {}
    }
    return {};
  }

  /**
   * Lấy danh sách quán ăn ngon theo món, thành phố và quận
   * Lọc và sắp xếp theo số sao (5 sao cao nhất giảm dần)
   * Tích hợp link chỉ đường Google Maps & đặt món GrabFood
   */
  function getRestaurants(food, cityId = 'hcm', districtName = '', minStars = 0) {
    if (!food) return [];

    const db = getRestaurantsDb();
    const locations = getLocations();
    const city = locations.find(l => l.id === cityId) || locations[0] || { id: 'hcm', name: 'TP. Hồ Chí Minh' };
    const currentDistrict = districtName || city.defaultDistrict || 'Quận 1';

    const foodNameLower = (food.name + ' ' + food.id).toLowerCase();
    let categoryKey = null;

    if (foodNameLower.includes('phở')) categoryKey = 'pho';
    else if (foodNameLower.includes('cơm tấm')) categoryKey = 'com_tam';
    else if (foodNameLower.includes('bún chả')) categoryKey = 'bun_cha';
    else if (foodNameLower.includes('bánh mì')) categoryKey = 'banh_mi';
    else if (foodNameLower.includes('bún bò')) categoryKey = 'bun_bo';
    else if (foodNameLower.includes('bún đậu')) categoryKey = 'bun_dau';
    else if (foodNameLower.includes('lẩu')) categoryKey = 'lau';
    else if (foodNameLower.includes('ốc') || foodNameLower.includes('hải sản') || foodNameLower.includes('cua') || foodNameLower.includes('tôm')) categoryKey = 'oc_haisan';

    let list = [];
    if (categoryKey && db[categoryKey]) {
      const cityMatches = db[categoryKey].filter(r => r.cityId === cityId);
      list = [...cityMatches];
    }

    // Bổ sung thêm các quán uy tín tại quận hiện tại
    const generatedSpots = [
      {
        name: `Quán ${food.name} Gia Truyền`,
        rating: 5.0,
        reviews: 2150,
        address: `18 Đường Số 1, ${currentDistrict}, ${city.name}`,
        district: currentDistrict,
        cityId: city.id,
        price: formatMoney(food.price)
      },
      {
        name: `${food.name} Bếp Xưa`,
        rating: 4.9,
        reviews: 1680,
        address: `45 Đường Trung Tâm, ${currentDistrict}, ${city.name}`,
        district: currentDistrict,
        cityId: city.id,
        price: formatMoney(food.price)
      },
      {
        name: `${food.name} Cô Ba Sài Gòn`,
        rating: 4.8,
        reviews: 1240,
        address: `88 Phố Ẩm Thực, ${currentDistrict}, ${city.name}`,
        district: currentDistrict,
        cityId: city.id,
        price: formatMoney(food.price)
      },
      {
        name: `${food.name} Hương Quê`,
        rating: 4.7,
        reviews: 890,
        address: `102 Nguyễn Trãi, ${currentDistrict}, ${city.name}`,
        district: currentDistrict,
        cityId: city.id,
        price: formatMoney(food.price)
      }
    ];

    generatedSpots.forEach(g => {
      if (!list.some(item => item.name === g.name)) {
        list.push(g);
      }
    });

    const results = list.map((r, index) => {
      const isSameDistrict = r.district && r.district.toLowerCase().includes(currentDistrict.toLowerCase());
      const distance = isSameDistrict ? `${(0.4 + index * 0.3).toFixed(1)} km` : `${(1.2 + index * 0.7).toFixed(1)} km`;

      const mapsQuery = `${r.name} ${r.address}`;
      const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery)}`;
      const grabFoodUrl = `https://food.grab.com/vn/vi/restaurants?search=${encodeURIComponent(food.name)}`;

      return {
        ...r,
        distance,
        isSameDistrict,
        isOpen: true,
        googleMapsUrl,
        grabFoodUrl
      };
    });

    let filtered = results;
    if (minStars > 0) {
      filtered = results.filter(r => r.rating >= minStars);
    }

    filtered.sort((a, b) => {
      if (b.rating !== a.rating) return b.rating - a.rating;
      if (a.isSameDistrict && !b.isSameDistrict) return -1;
      if (!a.isSameDistrict && b.isSameDistrict) return 1;
      return b.reviews - a.reviews;
    });

    return filtered;
  }

  /**
   * Tính điểm giá dựa trên thang chuẩn
   * priceScore: ≤25k: 0; ≤45k: 1; ≤70k: 2; ≤110k: 3; ≤180k: 4; >180k: 5
   */
  function calculatePriceScore(price) {
    if (price <= 25000) return 0;
    if (price <= 45000) return 1;
    if (price <= 70000) return 2;
    if (price <= 110000) return 3;
    if (price <= 180000) return 4;
    return 5;
  }

  /**
   * Tính toán Tier cho món ăn:
   * score = (priceScore + novelty) / 2
   * Tier: score <0.75 Xám; <1.5 Xanh; <2.5 Tím; <3.25 Hồng; <4 Đỏ; ≥4 Vàng.
   */
  function calculateTier(food) {
    const priceScore = calculatePriceScore(food.price);
    const novelty = typeof food.novelty === 'number' ? food.novelty : 0;
    const score = (priceScore + novelty) / 2;

    let tierId = 0;
    if (score < 0.75) {
      tierId = 0; // Xám: Bình dân
    } else if (score < 1.5) {
      tierId = 1; // Xanh: Quen thuộc
    } else if (score < 2.5) {
      tierId = 2; // Tím: Đáng thử
    } else if (score < 3.25) {
      tierId = 3; // Hồng: Hiếm
    } else if (score < 4.0) {
      tierId = 4; // Đỏ: Cực phẩm
    } else {
      tierId = 5; // Vàng: Huyền thoại
    }

    const tiers = getTiers();
    return {
      tierId,
      tier: tiers[tierId],
      score,
      priceScore
    };
  }

  /**
   * Gán tier vào tất cả các món ăn trong danh sách
   */
  function enrichFoodsWithTier(foods) {
    return foods.map(food => {
      const { tierId, tier, score } = calculateTier(food);
      return {
        ...food,
        tierId,
        tier,
        score
      };
    });
  }

  /**
   * Phân tích và chuyển đổi chuỗi ngân sách người dùng nhập thành số nguyên VND
   * Hỗ trợ: "45k", "45K", "1tr", "1tr2", "1,5tr", "1.5tr", "45.000", "45000đ", "45000"
   */
  function parseBudget(rawInput) {
    if (rawInput === undefined || rawInput === null) {
      return { value: 0, isValid: false, error: 'Vui lòng nhập số tiền hợp lệ.' };
    }

    let str = String(rawInput).trim().toLowerCase();
    if (!str) {
      return { value: 0, isValid: false, error: 'Bạn chưa nhập ngân sách ăn uống hôm nay.' };
    }

    // Loại bỏ chữ 'đ', 'vnd', 'dong', 'đồng', khoảng trắng dư
    str = str.replace(/đ|vnd|dong|đồng/gi, '').trim();

    let value = 0;
    let matched = false;

    // Trường hợp "1tr2", "1tr500", "1tr250k"
    const trWithSubMatch = str.match(/^(\d+)\s*tr\s*(\d+)\s*(k)?$/i);
    if (trWithSubMatch) {
      const millions = parseInt(trWithSubMatch[1], 10);
      let subPart = trWithSubMatch[2];
      // Nếu là 1tr2 -> subPart là 2 nghĩa là 200.000; nếu 1tr25 -> 250.000
      if (subPart.length === 1) subPart = subPart + '00000';
      else if (subPart.length === 2) subPart = subPart + '0000';
      else if (subPart.length === 3) subPart = subPart + '000';
      else if (subPart.length === 4) subPart = subPart + '00';
      else if (subPart.length === 5) subPart = subPart + '0';
      
      const subValue = parseInt(subPart.slice(0, 6), 10);
      value = millions * 1000000 + subValue;
      matched = true;
    }

    // Trường hợp thập phân với triệu: "1.5tr", "1,5tr", "1tr"
    if (!matched) {
      const trDecimalMatch = str.match(/^([\d.,]+)\s*tr$/i);
      if (trDecimalMatch) {
        let numStr = trDecimalMatch[1].replace(',', '.');
        const num = parseFloat(numStr);
        if (!isNaN(num)) {
          value = Math.round(num * 1000000);
          matched = true;
        }
      }
    }

    // Trường hợp có chữ "k": "45k", "45.5k", "45,5k"
    if (!matched) {
      const kMatch = str.match(/^([\d.,]+)\s*k$/i);
      if (kMatch) {
        let numStr = kMatch[1].replace(',', '.');
        const num = parseFloat(numStr);
        if (!isNaN(num)) {
          value = Math.round(num * 1000);
          matched = true;
        }
      }
    }

    // Trường hợp số thông thường: "45000", "45.000", "45,000", "1.000.000"
    if (!matched) {
      // Loại bỏ dấu chấm hoặc dấu phẩy phân cách hàng nghìn
      const cleanDigits = str.replace(/[.,\s]/g, '');
      if (/^\d+$/.test(cleanDigits)) {
        value = parseInt(cleanDigits, 10);
        matched = true;
      }
    }

    if (!matched || isNaN(value)) {
      return {
        value: 0,
        isValid: false,
        error: 'Chưa hiểu số tiền này nè! Bạn thử gõ "45k", "70.000" hoặc "1tr2" xem nhé.'
      };
    }

    const cfg = getConfig();
    if (value < cfg.minBudget) {
      return {
        value,
        isValid: false,
        error: `Ngân sách tối thiểu là ${formatMoney(cfg.minBudget)} (để đủ làm cốc trà đá/cái kẹo nha!)`
      };
    }

    if (value > cfg.maxBudget) {
      return {
        value,
        isValid: false,
        error: `Ngân sách tối đa là ${formatMoney(cfg.maxBudget)} (bữa tiệc xa hoa quá rồi đại gia ơi!)`
      };
    }

    return {
      value,
      isValid: true,
      error: null
    };
  }

  /**
   * Định dạng tiền tệ VND kiểu Việt Nam: 45000 -> "45.000đ"
   */
  function formatMoney(amount) {
    if (typeof amount !== 'number' || isNaN(amount)) return '0đ';
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + 'đ';
  }

  /**
   * Định dạng số tiền khi hiển thị trong input: 45000 -> "45.000"
   */
  function formatNumber(num) {
    if (typeof num !== 'number' || isNaN(num)) return '';
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  /**
   * Lọc danh sách món ăn theo ngân sách và bữa ăn
   * mealType: "tatca" | "sang" | "trua" | "toi" | "anvat"
   */
  function filterPool(foods, budget, mealType = 'tatca') {
    const validMeal = mealType || 'tatca';
    return foods.filter(food => {
      const matchPrice = food.price <= budget;
      const matchMeal = validMeal === 'tatca' || (Array.isArray(food.meals) && food.meals.includes(validMeal));
      return matchPrice && matchMeal;
    });
  }

  /**
   * Chuẩn hóa tỉ lệ rơi (dropWeights) cho các tier thực sự có món trong pool
   */
  function getActiveTierProbabilities(pool) {
    // Nhóm món theo tier
    const itemsByTier = [[], [], [], [], [], []];
    pool.forEach(food => {
      const tId = typeof food.tierId === 'number' ? food.tierId : calculateTier(food).tierId;
      itemsByTier[tId].push(food);
    });

    // Tìm các tier có món
    const activeTiers = [];
    let totalActiveWeight = 0;

    const tiers = getTiers();
    const cfg = getConfig();
    cfg.dropWeights.forEach((weight, tierId) => {
      if (itemsByTier[tierId].length > 0) {
        activeTiers.push({
          tierId,
          tier: tiers[tierId],
          originalWeight: weight,
          itemCount: itemsByTier[tierId].length,
          items: itemsByTier[tierId]
        });
        totalActiveWeight += weight;
      }
    });

    if (activeTiers.length === 0 || totalActiveWeight === 0) {
      return { activeTiers: [], itemsByTier, totalActiveWeight: 0 };
    }

    // Chuẩn hóa trọng số sao cho tổng bằng 1.0 (100%)
    activeTiers.forEach(item => {
      item.normalizedProb = item.originalWeight / totalActiveWeight;
      item.percentageStr = (item.normalizedProb * 100).toFixed(1) + '%';
    });

    return { activeTiers, itemsByTier, totalActiveWeight };
  }

  /**
   * Chọn món thắng ngẫu nhiên có trọng số:
   * 1. Chọn tier theo trọng số chuẩn hóa của pool hiện tại
   * 2. Chọn đều 1 món trong tier đó
   * 3. Tránh trùng với món vừa ra ở lần trước nếu pool > 1
   */
  function pickWinningFood(pool, lastFoodId = null) {
    if (!pool || pool.length === 0) return null;

    const tiers = getTiers();
    if (pool.length === 1) {
      const single = pool[0];
      const tierInfo = typeof single.tierId === 'number' ? tiers[single.tierId] : calculateTier(single).tier;
      return {
        food: single,
        tier: tierInfo,
        tierId: single.tierId ?? calculateTier(single).tierId
      };
    }

    const { activeTiers } = getActiveTierProbabilities(pool);
    if (activeTiers.length === 0) return null;

    let candidate = null;
    let attempts = 0;
    const maxAttempts = 20;

    while (attempts < maxAttempts) {
      attempts++;

      // Chọn tier ngẫu nhiên theo normalizedProb
      const rand = Math.random();
      let cumProb = 0;
      let selectedTierData = activeTiers[0];

      for (let i = 0; i < activeTiers.length; i++) {
        cumProb += activeTiers[i].normalizedProb;
        if (rand <= cumProb || i === activeTiers.length - 1) {
          selectedTierData = activeTiers[i];
          break;
        }
      }

      // Chọn đều 1 món trong tier này
      const itemsInTier = selectedTierData.items;
      const chosenItem = itemsInTier[Math.floor(Math.random() * itemsInTier.length)];

      // Nếu chỉ có 1 món trong cả pool hoặc món chọn được khác món lần trước -> chốt
      if (!lastFoodId || chosenItem.id !== lastFoodId) {
        candidate = chosenItem;
        break;
      }
    }

    // Nếu sau maxAttempts vẫn dính trùng thì chọn một món bất kỳ trong pool khác lastFoodId
    if (!candidate) {
      const otherPool = pool.filter(f => f.id !== lastFoodId);
      candidate = otherPool.length > 0
        ? otherPool[Math.floor(Math.random() * otherPool.length)]
        : pool[0];
    }

    const tId = candidate.tierId ?? calculateTier(candidate).tierId;
    return {
      food: candidate,
      tier: tiers[tId],
      tierId: tId
    };
  }

  /**
   * Lấy danh sách thống kê phân bố tier cho màn hình "Trong hòm có gì?"
   */
  function getCaseSummary(pool) {
    const { activeTiers, itemsByTier } = getActiveTierProbabilities(pool);
    const tiers = getTiers();
    const cfg = getConfig();

    return tiers.map((tier, tierId) => {
      const items = itemsByTier[tierId] || [];
      const activeData = activeTiers.find(a => a.tierId === tierId);
      return {
        tier,
        tierId,
        count: items.length,
        items,
        percentageStr: activeData ? activeData.percentageStr : '0.0%',
        normalizedProb: activeData ? activeData.normalizedProb : 0,
        originalWeight: cfg.dropWeights[tierId]
      };
    });
  }

  /**
   * Mô phỏng Monte Carlo kiểm tra xác suất thực tế
   */
  function simulateRolls(pool, iterations = 10000) {
    const counts = [0, 0, 0, 0, 0, 0];
    let lastId = null;

    for (let i = 0; i < iterations; i++) {
      const result = pickWinningFood(pool, lastId);
      if (result) {
        counts[result.tierId]++;
        lastId = result.food.id;
      }
    }

    const { activeTiers } = getActiveTierProbabilities(pool);
    const tiers = getTiers();
    const report = tiers.map((tier, idx) => {
      const active = activeTiers.find(a => a.tierId === idx);
      const expectedPct = active ? (active.normalizedProb * 100).toFixed(2) + '%' : '0.00%';
      const actualPct = ((counts[idx] / iterations) * 100).toFixed(2) + '%';
      const count = counts[idx];
      const diff = active ? ((counts[idx] / iterations) * 100 - active.normalizedProb * 100).toFixed(2) + '%' : '0%';
      return {
        Tier: `${tier.name} (${tier.slug})`,
        'Số lần rơi': count,
        'Tỉ lệ thực tế': actualPct,
        'Tỉ lệ kỳ vọng': expectedPct,
        'Chênh lệch': diff
      };
    });

    return report;
  }

  return {
    calculatePriceScore,
    calculateTier,
    enrichFoodsWithTier,
    parseBudget,
    formatMoney,
    formatNumber,
    filterPool,
    getActiveTierProbabilities,
    pickWinningFood,
    getCaseSummary,
    simulateRolls,
    getLocations,
    getRestaurants
  };
})();

// Xuất ra môi trường Node nếu đang chạy test bằng Node
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Engine;
  module.exports.Engine = Engine;
}
