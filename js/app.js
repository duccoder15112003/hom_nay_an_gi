/**
 * HÒM ĂN GÌ - APPLICATION CONTROLLER & STATE MANAGEMENT
 * Quản lý trạng thái, chọn nơi ở, mở hòm, lọc quán ngon 5 sao, Google Maps & GrabFood
 */

(function() {
  // --- TRẠNG THÁI ỨNG DỤNG ---
  const state = {
    budget: CONFIG.defaultBudget || 45000,
    selectedMeal: 'tatca',
    cityId: 'hcm',
    districtName: 'Quận 1',
    minStars: 0,
    lastWinningFoodId: null,
    currentWinningResult: null,
    isOpening: false,
    history: []
  };

  // --- THAM CHIẾU DOM ---
  let dom = {};

  /**
   * Khởi chạy ứng dụng khi DOM sẵn sàng
   */
  document.addEventListener('DOMContentLoaded', () => {
    cacheDom();
    initMealByTime();
    loadPersistedState();
    initReel();
    bindEvents();
    printConsoleWelcome();
  });

  function cacheDom() {
    dom = {
      // Chọn nơi ở
      btnLocationPicker: document.getElementById('btn-location-picker'),
      currentLocationText: document.getElementById('current-location-text'),
      heroLocationText: document.getElementById('hero-location-text'),
      locationModal: document.getElementById('location-modal'),
      locationBackdrop: document.getElementById('location-backdrop'),
      selectCity: document.getElementById('select-city'),
      selectDistrict: document.getElementById('select-district'),
      btnSaveLocation: document.getElementById('btn-save-location'),
      btnCloseLocation: document.getElementById('btn-close-location'),

      // Input ngân sách & Bữa
      budgetInput: document.getElementById('budget-input'),
      budgetError: document.getElementById('budget-error'),
      mealTabs: document.querySelectorAll('.meal-tab'),
      budgetPresets: document.querySelectorAll('.preset-btn'),

      // Nút chính & Hòm
      btnOpen: document.getElementById('btn-open-crate'),
      crateContainer: document.getElementById('crate-showcase'),
      crateLid: document.getElementById('crate-lid'),
      crateBody: document.getElementById('crate-body'),

      // Header actions
      btnSound: document.getElementById('btn-sound-toggle'),
      btnCaseContent: document.getElementById('btn-case-content'),
      btnHistory: document.getElementById('btn-history'),

      // Reel stage
      reelModal: document.getElementById('reel-modal'),
      reelContainer: document.getElementById('reel-container'),
      reelTrack: document.getElementById('reel-track'),
      reelNeedle: document.getElementById('reel-needle'),
      btnSkip: document.getElementById('btn-skip-spin'),

      // Result Modal
      resultModal: document.getElementById('result-modal'),
      resultCardInner: document.getElementById('result-card-inner'),
      resultPhoto: document.getElementById('result-photo'),
      resultTierBadge: document.getElementById('result-tier-badge'),
      resultName: document.getElementById('result-name'),
      resultPrice: document.getElementById('result-price'),
      resultRegionTag: document.getElementById('result-region-tag'),
      resultMealTag: document.getElementById('result-meal-tag'),
      resultDesc: document.getElementById('result-desc'),
      resultLeftover: document.getElementById('result-leftover'),
      restaurantsLocBadge: document.getElementById('restaurants-loc-badge'),
      starFilterBtns: document.querySelectorAll('.star-btn'),
      restaurantList: document.getElementById('result-restaurant-list'),
      btnReopen: document.getElementById('btn-reopen'),
      btnShare: document.getElementById('btn-share'),
      btnChangeBudget: document.getElementById('btn-change-budget'),
      btnCloseResult: document.getElementById('btn-close-result'),

      // History Drawer
      historyDrawer: document.getElementById('history-drawer'),
      historyBackdrop: document.getElementById('history-backdrop'),
      historyList: document.getElementById('history-list'),
      historyTotalCount: document.getElementById('history-total-count'),
      historyRareCount: document.getElementById('history-rare-count'),
      btnClearHistory: document.getElementById('btn-clear-history'),
      btnCloseHistory: document.getElementById('btn-close-history'),

      // Case Content Drawer (Trong hòm có gì)
      caseDrawer: document.getElementById('case-drawer'),
      caseBackdrop: document.getElementById('case-backdrop'),
      caseList: document.getElementById('case-tier-list'),
      caseEligibleCount: document.getElementById('case-eligible-count'),
      btnCloseCase: document.getElementById('btn-close-case'),

      // Empty pool dialog
      emptyDialog: document.getElementById('empty-pool-dialog'),
      emptyMsg: document.getElementById('empty-pool-msg'),
      emptyBtnAddBudget: document.getElementById('empty-btn-add-budget'),
      emptyBtnSwitchMeal: document.getElementById('empty-btn-switch-meal'),
      emptyBtnClose: document.getElementById('empty-btn-close'),

      // Thông báo Toast & Accessibility announcer
      toast: document.getElementById('toast'),
      srAnnouncer: document.getElementById('sr-announcer')
    };
  }

  /**
   * Tự động chọn bữa theo thời gian thực tế của máy
   */
  function initMealByTime() {
    const hour = new Date().getHours();
    let defaultMeal = 'tatca';

    if (hour >= 5 && hour < 11) {
      defaultMeal = 'sang';
    } else if (hour >= 11 && hour < 14) {
      defaultMeal = 'trua';
    } else if (hour >= 14 && hour < 18) {
      defaultMeal = 'anvat';
    } else if (hour >= 18 && hour < 23) {
      defaultMeal = 'toi';
    } else {
      defaultMeal = 'anvat';
    }

    state.selectedMeal = defaultMeal;
    updateMealTabsUi(defaultMeal);
  }

  /**
   * Tải lại các trạng thái đã lưu từ localStorage
   */
  function loadPersistedState() {
    // 1. Nơi ở (thành phố & quận)
    try {
      const savedCity = localStorage.getItem('homangi_city');
      const savedDistrict = localStorage.getItem('homangi_district');
      if (savedCity) state.cityId = savedCity;
      if (savedDistrict) state.districtName = savedDistrict;
    } catch (e) {}

    updateLocationDisplay();

    // 2. Ngân sách lần trước
    try {
      const savedBudget = localStorage.getItem('homangi_budget');
      if (savedBudget) {
        const parsed = parseInt(savedBudget, 10);
        if (!isNaN(parsed) && parsed >= CONFIG.minBudget && parsed <= CONFIG.maxBudget) {
          state.budget = parsed;
        }
      }
    } catch (e) {}

    if (dom.budgetInput) {
      dom.budgetInput.value = Engine.formatNumber(state.budget);
    }

    // 3. Lịch sử mở hòm
    try {
      const savedHistory = localStorage.getItem('homangi_history');
      if (savedHistory) {
        state.history = JSON.parse(savedHistory);
      }
    } catch (e) {
      state.history = [];
    }

    // 4. Âm thanh mute UI
    updateSoundButtonUi(SoundEngine.getIsMuted());
  }

  /**
   * Khởi tạo module Reel
   */
  function initReel() {
    if (dom.reelContainer && dom.reelTrack) {
      ReelManager.init({
        container: dom.reelContainer,
        track: dom.reelTrack,
        needle: dom.reelNeedle,
        skipBtn: dom.btnSkip
      });
    }
  }

  /**
   * Cập nhật nhãn hiển thị địa điểm trên Header và Hero
   */
  function updateLocationDisplay() {
    const locations = Engine.getLocations();
    const city = locations.find(l => l.id === state.cityId) || locations[0] || { name: 'TP.HCM', shortName: 'TP.HCM' };

    const locText = `${city.shortName || city.name} • ${state.districtName}`;
    if (dom.currentLocationText) {
      dom.currentLocationText.textContent = locText;
    }
    if (dom.heroLocationText) {
      dom.heroLocationText.textContent = `${state.districtName}, ${city.shortName || city.name}`;
    }
  }

  /**
   * Gắn các sự kiện tương tác
   */
  function bindEvents() {
    // 1. Địa điểm (Location Modal)
    if (dom.btnLocationPicker) {
      dom.btnLocationPicker.addEventListener('click', openLocationModal);
    }
    if (dom.btnCloseLocation) dom.btnCloseLocation.addEventListener('click', closeLocationModal);
    if (dom.locationBackdrop) dom.locationBackdrop.addEventListener('click', closeLocationModal);
    if (dom.selectCity) {
      dom.selectCity.addEventListener('change', (e) => {
        populateDistrictsSelect(e.target.value);
      });
    }
    if (dom.btnSaveLocation) {
      dom.btnSaveLocation.addEventListener('click', saveLocationSelection);
    }

    // 2. Input ngân sách: tự format hàng nghìn khi gõ
    if (dom.budgetInput) {
      dom.budgetInput.addEventListener('input', handleBudgetInput);
      dom.budgetInput.addEventListener('blur', handleBudgetBlur);
      dom.budgetInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          dom.budgetInput.blur();
          startOpenCrateFlow();
        }
      });
    }

    // 3. Các nút preset nhanh (30k, 50k, 100k, 200k)
    dom.budgetPresets.forEach(btn => {
      btn.addEventListener('click', () => {
        SoundEngine.playClick();
        const amount = parseInt(btn.dataset.amount, 10);
        if (amount) {
          setBudget(amount);
        }
      });
    });

    // 4. Segmented control chọn bữa
    dom.mealTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        SoundEngine.playClick();
        const meal = tab.dataset.meal;
        if (meal) {
          state.selectedMeal = meal;
          updateMealTabsUi(meal);
          clearError();
        }
      });
    });

    // 5. Nút "MỞ HÒM" chính & click vào Hòm
    if (dom.btnOpen) {
      dom.btnOpen.addEventListener('click', () => {
        SoundEngine.ensureAudioContext();
        startOpenCrateFlow();
      });
    }

    if (dom.crateContainer) {
      dom.crateContainer.addEventListener('click', () => {
        SoundEngine.ensureAudioContext();
        startOpenCrateFlow();
      });
      dom.crateContainer.setAttribute('tabindex', '0');
      dom.crateContainer.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          startOpenCrateFlow();
        }
      });
    }

    // 6. Nút Bật/Tắt Âm thanh
    if (dom.btnSound) {
      dom.btnSound.addEventListener('click', () => {
        const isMuted = SoundEngine.toggleMute();
        updateSoundButtonUi(isMuted);
        showToast(isMuted ? 'Đã tắt âm thanh' : 'Đã bật âm thanh');
      });
    }

    // 7. Nút "Trong hòm có gì?"
    if (dom.btnCaseContent) {
      dom.btnCaseContent.addEventListener('click', () => {
        SoundEngine.playClick();
        openCaseDrawer();
      });
    }
    if (dom.btnCloseCase) dom.btnCloseCase.addEventListener('click', closeCaseDrawer);
    if (dom.caseBackdrop) dom.caseBackdrop.addEventListener('click', closeCaseDrawer);

    // 8. Nút Lịch sử
    if (dom.btnHistory) {
      dom.btnHistory.addEventListener('click', () => {
        SoundEngine.playClick();
        openHistoryDrawer();
      });
    }
    if (dom.btnCloseHistory) dom.btnCloseHistory.addEventListener('click', closeHistoryDrawer);
    if (dom.historyBackdrop) dom.historyBackdrop.addEventListener('click', closeHistoryDrawer);
    if (dom.btnClearHistory) dom.btnClearHistory.addEventListener('click', handleClearHistory);

    // 9. Lọc số sao của quán ăn (Star Filter Buttons)
    dom.starFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        SoundEngine.playClick();
        dom.starFilterBtns.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');

        const stars = parseFloat(btn.dataset.stars) || 0;
        state.minStars = stars;

        if (state.currentWinningResult && state.currentWinningResult.food) {
          renderRestaurantsList(state.currentWinningResult.food, stars);
        }
      });
    });

    // 10. Result Card actions
    if (dom.btnReopen) {
      dom.btnReopen.addEventListener('click', () => {
        SoundEngine.playClick();
        closeResultModal();
        setTimeout(() => {
          startOpenCrateFlow();
        }, 150);
      });
    }

    if (dom.btnShare) {
      dom.btnShare.addEventListener('click', handleShareCard);
    }

    if (dom.btnChangeBudget) {
      dom.btnChangeBudget.addEventListener('click', () => {
        SoundEngine.playClick();
        closeResultModal();
        setTimeout(() => {
          if (dom.budgetInput) {
            dom.budgetInput.focus();
            dom.budgetInput.select();
          }
        }, 200);
      });
    }

    if (dom.btnCloseResult) {
      dom.btnCloseResult.addEventListener('click', () => {
        SoundEngine.playClick();
        closeResultModal();
      });
    }

    // 11. Nút xử lý khi Pool rỗng
    if (dom.emptyBtnClose) dom.emptyBtnClose.addEventListener('click', closeEmptyDialog);
    if (dom.emptyBtnAddBudget) {
      dom.emptyBtnAddBudget.addEventListener('click', () => {
        SoundEngine.playClick();
        closeEmptyDialog();
        setBudget(35000);
      });
    }
    if (dom.emptyBtnSwitchMeal) {
      dom.emptyBtnSwitchMeal.addEventListener('click', () => {
        SoundEngine.playClick();
        closeEmptyDialog();
        state.selectedMeal = 'anvat';
        updateMealTabsUi('anvat');
      });
    }

    // 12. Phím tắt ESC
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeLocationModal();
        closeCaseDrawer();
        closeHistoryDrawer();
        closeEmptyDialog();
        if (dom.resultModal && dom.resultModal.classList.contains('is-active')) {
          closeResultModal();
        }
      }
    });
  }

  // --- QUẢN LÝ ĐỊA ĐIỂM (LOCATION PICKER) ---

  function openLocationModal() {
    SoundEngine.playClick();
    populateCitiesSelect();
    populateDistrictsSelect(state.cityId);
    if (dom.locationModal) {
      dom.locationModal.classList.add('is-active');
      dom.locationModal.setAttribute('aria-hidden', 'false');
    }
  }

  function closeLocationModal() {
    if (dom.locationModal) {
      dom.locationModal.classList.remove('is-active');
      dom.locationModal.setAttribute('aria-hidden', 'true');
    }
  }

  function populateCitiesSelect() {
    if (!dom.selectCity) return;
    const locations = Engine.getLocations();
    dom.selectCity.innerHTML = locations.map(loc => `
      <option value="${loc.id}" ${loc.id === state.cityId ? 'selected' : ''}>${loc.name}</option>
    `).join('');
  }

  function populateDistrictsSelect(cityId) {
    if (!dom.selectDistrict) return;
    const locations = Engine.getLocations();
    const city = locations.find(l => l.id === cityId) || locations[0];
    if (!city) return;

    dom.selectDistrict.innerHTML = city.districts.map(dist => `
      <option value="${dist}" ${dist === state.districtName ? 'selected' : ''}>${dist}</option>
    `).join('');
  }

  function saveLocationSelection() {
    if (!dom.selectCity || !dom.selectDistrict) return;
    state.cityId = dom.selectCity.value;
    state.districtName = dom.selectDistrict.value;

    try {
      localStorage.setItem('homangi_city', state.cityId);
      localStorage.setItem('homangi_district', state.districtName);
    } catch (e) {}

    updateLocationDisplay();
    closeLocationModal();
    showToast(`Đã chọn khu vực: ${state.districtName}`);

    // Nếu Result modal đang mở, cập nhật lại ngay danh sách quán
    if (dom.resultModal && dom.resultModal.classList.contains('is-active') && state.currentWinningResult) {
      renderRestaurantsList(state.currentWinningResult.food, state.minStars);
    }
  }

  // --- XỬ LÝ NHẬP NGÂN SÁCH ---

  function handleBudgetInput(e) {
    clearError();
    const raw = e.target.value;

    if (/^\d+$/.test(raw.replace(/[.,]/g, ''))) {
      const cleanNum = raw.replace(/[.,]/g, '');
      const parsed = parseInt(cleanNum, 10);
      if (!isNaN(parsed)) {
        const formatted = Engine.formatNumber(parsed);
        e.target.value = formatted;
      }
    }
  }

  function handleBudgetBlur(e) {
    const val = e.target.value.trim();
    if (!val) {
      setBudget(CONFIG.defaultBudget);
      return;
    }

    const res = Engine.parseBudget(val);
    if (res.isValid) {
      setBudget(res.value);
      clearError();
    } else {
      showError(res.error);
    }
  }

  function setBudget(amount) {
    state.budget = amount;
    if (dom.budgetInput) {
      dom.budgetInput.value = Engine.formatNumber(amount);
    }
    try {
      localStorage.setItem('homangi_budget', String(amount));
    } catch (e) {}
    clearError();
  }

  function showError(msg) {
    if (dom.budgetError) {
      dom.budgetError.textContent = msg;
      dom.budgetError.classList.add('is-visible');
    }
    if (dom.budgetInput) {
      dom.budgetInput.classList.add('is-invalid');
    }
  }

  function clearError() {
    if (dom.budgetError) {
      dom.budgetError.textContent = '';
      dom.budgetError.classList.remove('is-visible');
    }
    if (dom.budgetInput) {
      dom.budgetInput.classList.remove('is-invalid');
    }
  }

  function updateMealTabsUi(activeMeal) {
    dom.mealTabs.forEach(tab => {
      if (tab.dataset.meal === activeMeal) {
        tab.classList.add('is-active');
        tab.setAttribute('aria-selected', 'true');
      } else {
        tab.classList.remove('is-active');
        tab.setAttribute('aria-selected', 'false');
      }
    });
  }

  function updateSoundButtonUi(isMuted) {
    if (!dom.btnSound) return;
    const iconEl = dom.btnSound.querySelector('.icon-sound');
    if (iconEl) {
      iconEl.textContent = isMuted ? '🔇' : '🔊';
    }
    dom.btnSound.setAttribute('aria-label', isMuted ? 'Bật âm thanh' : 'Tắt âm thanh');
  }

  // --- LUỒNG MỞ HÒM (CASE OPENING FLOW) ---

  function startOpenCrateFlow() {
    if (state.isOpening || ReelManager.getIsSpinning()) return;

    const parseRes = Engine.parseBudget(dom.budgetInput.value);
    if (!parseRes.isValid) {
      showError(parseRes.error);
      dom.budgetInput.focus();
      return;
    }
    setBudget(parseRes.value);

    const pool = Engine.filterPool(FOODS, state.budget, state.selectedMeal);

    if (pool.length === 0) {
      showEmptyPoolDialog();
      return;
    }

    state.isOpening = true;
    lockButtons(true);

    const winningResult = Engine.pickWinningFood(pool, state.lastWinningFoodId);
    state.currentWinningResult = winningResult;
    state.lastWinningFoodId = winningResult.food.id;

    ReelManager.buildReel(pool, winningResult);

    animateCrateOpening(() => {
      openReelStage(winningResult);
    });
  }

  function animateCrateOpening(onComplete) {
    if (!dom.crateContainer) {
      onComplete();
      return;
    }

    SoundEngine.playCrateLatch();
    dom.crateContainer.classList.add('crate-shaking');

    setTimeout(() => {
      SoundEngine.playCrateOpen();
      dom.crateContainer.classList.remove('crate-shaking');
      dom.crateContainer.classList.add('crate-opened');

      setTimeout(() => {
        dom.crateContainer.classList.remove('crate-opened');
        onComplete();
      }, 700);
    }, 450);
  }

  function openReelStage(winningResult) {
    if (!dom.reelModal) return;

    dom.reelModal.classList.add('is-active');
    dom.reelModal.setAttribute('aria-hidden', 'false');

    requestAnimationFrame(() => {
      ReelManager.startSpin(winningResult, {
        onComplete: (result) => {
          saveToHistory(result);
          closeReelStage();
          openResultModal(result);
          state.isOpening = false;
          lockButtons(false);
        }
      });
    });
  }

  function closeReelStage() {
    if (dom.reelModal) {
      dom.reelModal.classList.remove('is-active');
      dom.reelModal.setAttribute('aria-hidden', 'true');
    }
  }

  function lockButtons(isLocked) {
    if (dom.btnOpen) {
      dom.btnOpen.disabled = isLocked;
      dom.btnOpen.setAttribute('aria-busy', isLocked ? 'true' : 'false');
    }
    if (dom.budgetInput) {
      dom.budgetInput.disabled = isLocked;
    }
    dom.mealTabs.forEach(t => t.disabled = isLocked);
    dom.budgetPresets.forEach(b => b.disabled = isLocked);
  }

  // --- RESULT MODAL (KẾT QUẢ + QUÁN 5 SAO) ---

  function openResultModal(result) {
    if (!dom.resultModal || !result || !result.food) return;

    const food = result.food;
    const tier = result.tier || TIERS[result.tierId || 0];

    dom.resultModal.style.setProperty('--card-tier-color', tier.color);
    dom.resultModal.style.setProperty('--card-tier-bg', tier.bg);

    if (dom.resultTierBadge) {
      dom.resultTierBadge.textContent = tier.name;
      dom.resultTierBadge.style.color = tier.color;
      dom.resultTierBadge.style.borderColor = `${tier.color}60`;
      dom.resultTierBadge.style.backgroundColor = `${tier.color}25`;
    }

    // Hiển thị ảnh món ăn thực tế
    if (dom.resultPhoto) {
      dom.resultPhoto.src = food.image || 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=600&q=80';
      dom.resultPhoto.alt = food.name;
      dom.resultPhoto.onerror = function() {
        this.onerror = null;
        this.src = 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=600&q=80';
      };
    }

    if (dom.resultName) dom.resultName.textContent = food.name;
    if (dom.resultPrice) dom.resultPrice.textContent = Engine.formatMoney(food.price);

    const regionNames = { bac: 'Miền Bắc', trung: 'Miền Trung', nam: 'Miền Nam', toanquoc: 'Toàn Quốc' };
    const mealNames = { sang: 'Bữa Sáng', trua: 'Bữa Trưa', toi: 'Bữa Tối', anvat: 'Ăn Vặt', tatca: 'Mọi Bữa' };

    if (dom.resultRegionTag) dom.resultRegionTag.textContent = regionNames[food.region] || 'Đặc Sản';
    if (dom.resultMealTag) dom.resultMealTag.textContent = mealNames[state.selectedMeal] || 'Hợp bữa';
    if (dom.resultDesc) dom.resultDesc.textContent = food.desc;

    // Tiền dư
    const leftover = state.budget - food.price;
    if (dom.resultLeftover) {
      if (leftover >= 20000) {
        dom.resultLeftover.innerHTML = `💡 Còn dư <strong>${Engine.formatMoney(leftover)}</strong>, làm thêm ly trà đá / tráng miệng nhé!`;
        dom.resultLeftover.classList.add('is-visible');
      } else {
        dom.resultLeftover.classList.remove('is-visible');
        dom.resultLeftover.innerHTML = '';
      }
    }

    // Reset bộ lọc sao về "Tất cả" khi mở món mới
    state.minStars = 0;
    dom.starFilterBtns.forEach(b => {
      if (b.dataset.stars === '0') b.classList.add('is-active');
      else b.classList.remove('is-active');
    });

    // Render danh sách quán ăn theo số sao và vị trí
    renderRestaurantsList(food, state.minStars);

    // Screen Reader Announcer
    if (dom.srAnnouncer) {
      dom.srAnnouncer.textContent = `Chúc mừng bạn đã mở trúng ${food.name}, độ hiếm ${tier.name}, giá ${Engine.formatMoney(food.price)}`;
    }

    dom.resultModal.classList.add('is-active');
    dom.resultModal.setAttribute('aria-hidden', 'false');

    if (dom.btnReopen) {
      dom.btnReopen.focus();
    }
  }

  function closeResultModal() {
    if (dom.resultModal) {
      dom.resultModal.classList.remove('is-active');
      dom.resultModal.setAttribute('aria-hidden', 'true');
    }
    const confetti = document.getElementById('confetti-canvas');
    if (confetti) {
      confetti.remove();
    }
  }

  /**
   * Render danh sách quán ăn kèm liên kết Google Maps & GrabFood
   */
  function renderRestaurantsList(food, minStars = 0) {
    if (!dom.restaurantList) return;

    if (dom.restaurantsLocBadge) {
      dom.restaurantsLocBadge.textContent = state.districtName;
    }

    const restaurants = Engine.getRestaurants(food, state.cityId, state.districtName, minStars);

    if (restaurants.length === 0) {
      dom.restaurantList.innerHTML = `
        <div class="restaurant-empty">
          <span class="empty-icon">📍</span>
          <span>Không tìm thấy quán nào đạt ${minStars}★ trong khu vực này. Thử chọn <strong>Tất cả</strong> hoặc mở rộng quận khác nhé!</span>
        </div>
      `;
      return;
    }

    let html = '';
    restaurants.forEach(rest => {
      const fullStars = '★'.repeat(Math.floor(rest.rating));
      const isFive = rest.rating === 5.0;

      html += `
        <div class="restaurant-card ${isFive ? 'is-five-star' : ''}">
          <div class="rest-main-info">
            <div class="rest-title-row">
              <h4 class="rest-name">${escapeHtml(rest.name)}</h4>
              <span class="rest-rating-badge ${isFive ? 'badge-five-star' : ''}">
                ${rest.rating.toFixed(1)} ${fullStars}
              </span>
            </div>

            <div class="rest-address-row">
              <span class="rest-distance">📍 ${rest.distance}</span>
              <span class="rest-address" title="${escapeHtml(rest.address)}">${escapeHtml(rest.address)}</span>
            </div>

            <div class="rest-meta-row">
              <span class="rest-reviews">${rest.reviews.toLocaleString('vi-VN')} đánh giá</span>
              <span class="rest-dot">•</span>
              <span class="rest-price">${rest.price}</span>
              <span class="rest-dot">•</span>
              <span class="rest-status">🟢 Đang mở cửa</span>
            </div>
          </div>

          <div class="rest-actions-row">
            <a href="${rest.googleMapsUrl}" target="_blank" rel="noopener noreferrer" class="btn-action btn-maps" title="Mở chỉ đường trên Google Maps">
              <span class="btn-act-icon">🗺️</span>
              <span>Chỉ đường Maps</span>
            </a>
            <a href="${rest.grabFoodUrl}" target="_blank" rel="noopener noreferrer" class="btn-action btn-grab" title="Đặt món giao tận nơi qua GrabFood">
              <span class="btn-act-icon">🛵</span>
              <span>Đặt GrabFood</span>
            </a>
          </div>
        </div>
      `;
    });

    dom.restaurantList.innerHTML = html;
  }

  // --- LỊCH SỬ MỞ HÒM (HISTORY DRAWER) ---

  function saveToHistory(result) {
    if (!result || !result.food) return;

    const entry = {
      id: Date.now(),
      food: result.food,
      tier: result.tier || TIERS[result.tierId || 0],
      tierId: result.tierId,
      budget: state.budget,
      meal: state.selectedMeal,
      cityId: state.cityId,
      districtName: state.districtName,
      timestamp: new Date().toISOString()
    };

    state.history.unshift(entry);
    if (state.history.length > 30) {
      state.history = state.history.slice(0, 30);
    }

    try {
      localStorage.setItem('homangi_history', JSON.stringify(state.history));
    } catch (e) {}
  }

  function openHistoryDrawer() {
    renderHistoryList();
    if (dom.historyDrawer) {
      dom.historyDrawer.classList.add('is-open');
      dom.historyDrawer.setAttribute('aria-hidden', 'false');
    }
  }

  function closeHistoryDrawer() {
    if (dom.historyDrawer) {
      dom.historyDrawer.classList.remove('is-open');
      dom.historyDrawer.setAttribute('aria-hidden', 'true');
    }
  }

  function renderHistoryList() {
    if (!dom.historyList) return;

    const total = state.history.length;
    const rareCount = state.history.filter(h => h.tierId >= 3).length;

    if (dom.historyTotalCount) dom.historyTotalCount.textContent = total;
    if (dom.historyRareCount) dom.historyRareCount.textContent = rareCount;

    if (total === 0) {
      dom.historyList.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">📦</div>
          <div class="empty-state-title">Chưa có lịch sử mở hòm</div>
          <div class="empty-state-sub">Hãy nhập số tiền và bấm Mở Hòm để khám phá món ăn ngon nhé!</div>
        </div>
      `;
      return;
    }

    let html = '';
    state.history.forEach(item => {
      const food = item.food;
      const tier = item.tier || TIERS[item.tierId || 0];
      const timeStr = formatTimeAgo(new Date(item.timestamp));

      html += `
        <div class="history-item tier-${tier.slug}" style="--tier-color: ${tier.color};">
          <img src="${food.image || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80'}" alt="${escapeHtml(food.name)}" class="history-thumb" loading="lazy">
          <div class="history-info">
            <div class="history-name-row">
              <span class="history-name">${escapeHtml(food.name)}</span>
              <span class="history-tier-badge" style="color: ${tier.color}; border-color: ${tier.color}40; background-color: ${tier.color}15;">
                ${tier.name}
              </span>
            </div>
            <div class="history-meta">
              <span class="history-price">${Engine.formatMoney(food.price)}</span>
              <span class="history-dot-sep">•</span>
              <span class="history-time">${timeStr}</span>
            </div>
          </div>
        </div>
      `;
    });

    dom.historyList.innerHTML = html;
  }

  function handleClearHistory() {
    if (state.history.length === 0) return;
    if (confirm('Bạn có chắc chắn muốn xóa toàn bộ lịch sử mở hòm không?')) {
      state.history = [];
      try {
        localStorage.removeItem('homangi_history');
      } catch (e) {}
      renderHistoryList();
      showToast('Đã xóa sạch lịch sử mở hòm.');
    }
  }

  function formatTimeAgo(date) {
    const diffSec = Math.floor((Date.now() - date.getTime()) / 1000);
    if (diffSec < 60) return 'Vừa xong';
    const diffMin = Math.floor(diffSec / 60);
    if (diffMin < 60) return `${diffMin} phút trước`;
    const diffHours = Math.floor(diffMin / 60);
    if (diffHours < 24) return `${diffHours} giờ trước`;
    return date.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit' });
  }

  // --- TRONG HÒM CÓ GÌ? (CASE CONTENTS DRAWER) ---

  function openCaseDrawer() {
    renderCaseContents();
    if (dom.caseDrawer) {
      dom.caseDrawer.classList.add('is-open');
      dom.caseDrawer.setAttribute('aria-hidden', 'false');
    }
  }

  function closeCaseDrawer() {
    if (dom.caseDrawer) {
      dom.caseDrawer.classList.remove('is-open');
      dom.caseDrawer.setAttribute('aria-hidden', 'true');
    }
  }

  function renderCaseContents() {
    if (!dom.caseList) return;

    const pool = Engine.filterPool(FOODS, state.budget, state.selectedMeal);
    if (dom.caseEligibleCount) {
      dom.caseEligibleCount.textContent = `${pool.length} món phù hợp`;
    }

    const summary = Engine.getCaseSummary(pool);
    let html = '';

    summary.forEach(tierData => {
      const tier = tierData.tier;
      const count = tierData.count;
      const pct = tierData.percentageStr;

      html += `
        <div class="case-tier-group tier-${tier.slug}">
          <div class="case-tier-header" style="border-left-color: ${tier.color};">
            <div class="case-tier-title">
              <span class="case-tier-name" style="color: ${tier.color};">★ ${tier.name}</span>
              <span class="case-tier-pct">Tỉ lệ rơi: <strong>${pct}</strong></span>
            </div>
            <span class="case-tier-count">${count} món</span>
          </div>
          <div class="case-items-grid">
            ${count > 0 ? tierData.items.map(f => `
              <div class="case-food-chip" title="${escapeHtml(f.name)} - ${Engine.formatMoney(f.price)}">
                <img src="${f.image || 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=600&q=80'}" alt="${escapeHtml(f.name)}" class="chip-thumb" loading="lazy" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=600&q=80'">
                <span class="chip-name">${escapeHtml(f.name)}</span>
                <span class="chip-price">${Engine.formatMoney(f.price)}</span>
              </div>
            `).join('') : `<div class="case-tier-empty">Không có món nào trong tầm giá này</div>`}
          </div>
        </div>
      `;
    });

    dom.caseList.innerHTML = html;
  }

  // --- XỬ LÝ KHI POOL RỖNG ---

  function showEmptyPoolDialog() {
    if (!dom.emptyDialog) return;

    const mealNames = { sang: 'Bữa Sáng', trua: 'Bữa Trưa', toi: 'Bữa Tối', anvat: 'Ăn Vặt', tatca: 'Mọi Bữa' };
    const mealLabel = mealNames[state.selectedMeal] || state.selectedMeal;

    if (dom.emptyMsg) {
      dom.emptyMsg.textContent = `Ối giời! Với ${Engine.formatMoney(state.budget)} vào ${mealLabel} thì khó tìm quán ăn no bụng quá! Thử tăng ngân sách lên 35k hoặc chuyển sang Ăn Vặt xem sao nhé?`;
    }

    dom.emptyDialog.classList.add('is-active');
  }

  function closeEmptyDialog() {
    if (dom.emptyDialog) {
      dom.emptyDialog.classList.remove('is-active');
    }
  }

  // --- CHIA SẺ & LƯU ẢNH ---

  async function handleShareCard() {
    if (!state.currentWinningResult) return;

    SoundEngine.playClick();
    showToast('Đang tạo ảnh chất lượng cao...');

    const res = await ShareManager.exportResultCard(
      state.currentWinningResult,
      state.budget,
      state.selectedMeal
    );

    if (res.success) {
      if (res.method === 'share') {
        showToast('Đã mở hộp thoại chia sẻ!');
      } else {
        showToast('Đã tải ảnh card món ăn về máy!');
      }
    } else {
      showToast('Có lỗi khi tạo ảnh, bạn thử lại nhé!');
    }
  }

  // --- TIỆN ÍCH CHUNG ---

  let toastTimer = null;
  function showToast(message) {
    if (!dom.toast) return;
    dom.toast.textContent = message;
    dom.toast.classList.add('is-visible');

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      dom.toast.classList.remove('is-visible');
    }, 2800);
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function printConsoleWelcome() {
    console.log('%c🍲 HÒM ĂN GÌ - CS:GO CASE OPENING CHO TÍN ĐỒ ẨM THỰC VIỆT 🍲', 'color: #f59e0b; font-size: 16px; font-weight: bold; background: #111620; padding: 8px 12px; border-radius: 6px;');
    console.log('%cĐang kết nối kho ảnh thực tế và định vị quán ngon 5 sao...', 'color: #94a3b8;');

    const enriched = Engine.enrichFoodsWithTier(FOODS);
    const tierCounts = [0, 0, 0, 0, 0, 0];
    enriched.forEach(f => tierCounts[f.tierId]++);

    const distTable = TIERS.map((tier, idx) => ({
      Tier: `${tier.name} (${tier.slug})`,
      'Số món': tierCounts[idx],
      'Tỉ lệ trong kho': ((tierCounts[idx] / FOODS.length) * 100).toFixed(1) + '%',
      'Xác suất rơi mặc định': `${CONFIG.dropWeights[idx]}%`
    }));
    console.table(distTable);
  }

  window.HomAnGi = {
    state,
    Engine,
    SoundEngine,
    ReelManager,
    ShareManager
  };
})();
