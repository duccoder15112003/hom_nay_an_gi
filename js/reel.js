/**
 * HÒM ĂN GÌ - REEL CONTROLLER & ANIMATION
 * Quản lý dải thẻ cuộn ngang kiểu CS:GO Case Opening, đồng bộ âm thanh Web Audio và hiệu ứng dừng
 */

const ReelManager = (function() {
  let containerEl = null;
  let trackEl = null;
  let needleEl = null;
  let skipBtnEl = null;

  let isSpinning = false;
  let currentCards = [];
  let winningCardData = null;
  let winningCardEl = null;
  let targetTranslateX = 0;
  let rafId = null;
  let lastCrossedIndex = -1;
  let onCompleteCallback = null;
  let currentCardWidth = 140;
  let currentCardGap = 12;

  /**
   * Khởi tạo các phần tử DOM cho Reel
   */
  function init(elements) {
    containerEl = elements.container;
    trackEl = elements.track;
    needleEl = elements.needle;
    skipBtnEl = elements.skipBtn;

    if (skipBtnEl) {
      skipBtnEl.addEventListener('click', () => {
        if (isSpinning) {
          skipAnimation();
        }
      });
    }

    // Lắng nghe resize khi rảnh để cập nhật kích thước
    window.addEventListener('resize', debounce(() => {
      if (!isSpinning && trackEl && trackEl.children.length > 0) {
        measureDimensions();
      }
    }, 150));
  }

  function debounce(fn, delay) {
    let timer = null;
    return function(...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
    };
  }

  /**
   * Đo kích thước thực tế của thẻ và khoảng cách (gap) từ DOM
   */
  function measureDimensions() {
    if (!trackEl || trackEl.children.length === 0) return;
    const firstCard = trackEl.children[0];
    currentCardWidth = firstCard.offsetWidth || 140;

    if (trackEl.children.length > 1) {
      const secondCard = trackEl.children[1];
      const gap = secondCard.offsetLeft - (firstCard.offsetLeft + firstCard.offsetWidth);
      currentCardGap = gap >= 0 ? gap : 12;
    } else {
      currentCardGap = 12;
    }
  }

  /**
   * Xây dựng danh sách 70 thẻ trên Reel
   * Thẻ trúng đặt tại vị trí cố định WIN_INDEX (mặc định 54)
   * Chèn các thẻ hiếm ở lân cận để tạo cảm giác "suýt trúng" (near miss)
   */
  function buildReel(pool, winningResult) {
    if (!pool || pool.length === 0 || !winningResult) return [];

    const totalCards = CONFIG.reelCardCount || 70;
    const winIndex = CONFIG.winningIndex || 54;
    winningCardData = winningResult;

    const cards = new Array(totalCards);
    cards[winIndex] = winningResult.food;

    // Lọc các món hiếm trong pool (Tier >= 3: Hồng, Đỏ, Vàng) để làm near-miss
    const rarePool = pool.filter(f => {
      const tId = f.tierId ?? Engine.calculateTier(f).tierId;
      return tId >= 3;
    });

    // Các vị trí lân cận thẻ thắng để chèn near miss
    const nearMissIndices = [winIndex - 2, winIndex - 1, winIndex + 1, winIndex + 2];

    for (let i = 0; i < totalCards; i++) {
      if (i === winIndex) continue;

      let pickedFood = null;

      // Nếu là vị trí near miss và có món hiếm trong pool -> 65% cơ hội đặt món hiếm
      if (nearMissIndices.includes(i) && rarePool.length > 0 && Math.random() < 0.65) {
        pickedFood = rarePool[Math.floor(Math.random() * rarePool.length)];
      }

      // Nếu chưa chọn được, random theo trọng số tier bình thường
      if (!pickedFood) {
        const res = Engine.pickWinningFood(pool, null);
        pickedFood = res ? res.food : pool[Math.floor(Math.random() * pool.length)];
      }

      // Tránh 2 thẻ giống nhau liền kề nếu pool >= 3
      if (i > 0 && pool.length >= 3) {
        let attempts = 0;
        while (cards[i - 1] && pickedFood.id === cards[i - 1].id && attempts < 10) {
          const res = Engine.pickWinningFood(pool, null);
          pickedFood = res ? res.food : pool[Math.floor(Math.random() * pool.length)];
          attempts++;
        }
      }

      cards[i] = pickedFood;
    }

    currentCards = cards;
    renderCards(cards, winIndex);
    return cards;
  }

  /**
   * Render HTML cho toàn bộ các thẻ trên Reel track
   */
  function renderCards(cards, winIndex) {
    if (!trackEl) return;

    // Xóa thẻ cũ và reset trạng thái
    trackEl.innerHTML = '';
    trackEl.style.transition = 'none';
    trackEl.style.transform = 'translate3d(0, 0, 0)';

    const fragment = document.createDocumentFragment();

    cards.forEach((food, idx) => {
      const tierId = food.tierId ?? Engine.calculateTier(food).tierId;
      const tier = TIERS[tierId] || TIERS[0];

      const card = document.createElement('div');
      card.className = `reel-card tier-${tier.slug}`;
      card.dataset.index = idx;
      card.dataset.id = food.id;
      card.dataset.tier = tierId;
      card.style.setProperty('--tier-color', tier.color);
      card.style.setProperty('--tier-bg', tier.bg);

      if (idx === winIndex) {
        winningCardEl = card;
        card.setAttribute('aria-label', `Món trúng: ${food.name}, độ hiếm ${tier.name}`);
      }

      card.innerHTML = `
        <div class="reel-card-inner">
          <div class="reel-card-glow"></div>
          <div class="reel-card-tier-bar" style="background-color: ${tier.color};"></div>
          <div class="reel-card-img-wrap">
            <img src="${food.image || 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=600&q=80'}" alt="${escapeHtml(food.name)}" class="reel-card-img" loading="lazy" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=600&q=80'">
            <span class="reel-card-tier-tag" style="color: ${tier.color}; border-color: ${tier.color}40; background: rgba(11, 14, 20, 0.88);">
              ${tier.name}
            </span>
          </div>
          <div class="reel-card-meta">
            <div class="reel-card-name" title="${escapeHtml(food.name)}">${escapeHtml(food.name)}</div>
            <div class="reel-card-price">${Engine.formatMoney(food.price)}</div>
          </div>
        </div>
      `;

      fragment.appendChild(card);
    });

    trackEl.appendChild(fragment);

    // Đo lại kích thước chuẩn xác
    requestAnimationFrame(() => {
      measureDimensions();
    });
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

  /**
   * Bắt đầu animation quay Reel với hiệu ứng giảm tốc CS:GO chân thực
   */
  function startSpin(winningResult, callbacks = {}) {
    if (isSpinning) return;
    isSpinning = true;
    onCompleteCallback = callbacks.onComplete || null;

    if (skipBtnEl) {
      skipBtnEl.classList.add('is-visible');
    }

    // Đảm bảo DOM đã layout xong và đo đạc chuẩn
    measureDimensions();

    const winIndex = CONFIG.winningIndex || 54;
    const cardStep = currentCardWidth + currentCardGap;
    const winningCardCenter = winIndex * cardStep + currentCardWidth / 2;
    const containerCenter = (containerEl ? containerEl.offsetWidth : 800) / 2;

    // Lệch ngẫu nhiên ±35% bề rộng thẻ quanh tâm thẻ thắng (không bao giờ sát mép thẻ)
    // Jitter nằm trong khoảng [-0.35 * width, +0.35 * width]
    const jitter = (Math.random() - 0.5) * 0.7 * currentCardWidth;
    targetTranslateX = -(winningCardCenter - containerCenter + jitter);

    // Kiểm tra cấu hình prefers-reduced-motion của người dùng
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const duration = prefersReducedMotion ? (CONFIG.reducedSpinDuration || 1.0) : (CONFIG.spinDuration || 6.5);
    const easing = prefersReducedMotion ? 'cubic-bezier(0.25, 1, 0.5, 1)' : 'cubic-bezier(0.12, 0.72, 0.1, 1)';

    // Reset ticker đếm thẻ qua vạch
    lastCrossedIndex = 0;
    const startTime = performance.now();
    const durationMs = duration * 1000;

    // Áp dụng animation qua CSS transform translate3d
    trackEl.style.transition = `transform ${duration}s ${easing}`;
    trackEl.style.transform = `translate3d(${targetTranslateX}px, 0, 0)`;

    // Khởi chạy loop đọc vị trí thực tế bằng rAF để phát tiếng "tick" cơ khí
    function ticker(now) {
      if (!isSpinning) return;

      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);

      // Đọc ma trận transform hiện tại của track
      const matrix = window.getComputedStyle(trackEl).transform;
      let currentX = 0;
      if (matrix && matrix !== 'none') {
        const values = matrix.split('(')[1].split(')')[0].split(',');
        currentX = parseFloat(values[4]) || 0; // translateX trong matrix 2D
      }

      // Tính thẻ nào đang nằm dưới vạch chỉ giữa
      // needlePosition = containerCenter - currentX
      const needlePos = containerCenter - currentX;
      const cardIndex = Math.floor(needlePos / cardStep);

      if (cardIndex !== lastCrossedIndex && cardIndex >= 0 && cardIndex < currentCards.length) {
        lastCrossedIndex = cardIndex;
        // Tốc độ cao ở đầu, chậm dần ở cuối
        const speedRatio = 1 - progress;
        if (typeof SoundEngine !== 'undefined') {
          SoundEngine.playTick(speedRatio);
        }
      }

      if (progress < 1) {
        rafId = requestAnimationFrame(ticker);
      }
    }

    rafId = requestAnimationFrame(ticker);

    // Bắt sự kiện khi transition kết thúc
    const onTransitionEnd = (e) => {
      if (e.target !== trackEl || e.propertyName !== 'transform') return;
      trackEl.removeEventListener('transitionend', onTransitionEnd);
      finishSpin();
    };

    trackEl.addEventListener('transitionend', onTransitionEnd);
  }

  /**
   * Bỏ qua animation (Skip) theo yêu cầu người dùng
   */
  function skipAnimation() {
    if (!isSpinning) return;

    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }

    trackEl.style.transition = 'none';
    trackEl.style.transform = `translate3d(${targetTranslateX}px, 0, 0)`;

    finishSpin();
  }

  /**
   * Xử lý khi Reel đã dừng hoàn toàn tại thẻ thắng
   */
  function finishSpin() {
    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }

    isSpinning = false;

    if (skipBtnEl) {
      skipBtnEl.classList.remove('is-visible');
    }

    // Làm mờ các thẻ khác, làm nổi bật thẻ trúng với hiệu ứng phát sáng theo tier
    const allCards = trackEl.querySelectorAll('.reel-card');
    allCards.forEach(c => {
      if (c !== winningCardEl) {
        c.classList.add('is-dimmed');
      }
    });

    if (winningCardEl) {
      winningCardEl.classList.add('is-winner');
    }

    // Kích hoạt âm thanh hé lộ kết quả theo tier
    const tierId = winningCardData ? (winningCardData.tierId ?? winningCardData.food.tierId ?? 0) : 0;
    if (typeof SoundEngine !== 'undefined') {
      SoundEngine.playReveal(tierId);
    }

    // Kích hoạt hiệu ứng hình ảnh (rung màn hình, particles, confetti theo tier)
    triggerTierVisuals(tierId);

    // Chờ ~0.8s sau khi dừng để người dùng chiêm ngưỡng thẻ trúng rồi hiện Card kết quả
    setTimeout(() => {
      if (onCompleteCallback && winningCardData) {
        onCompleteCallback(winningCardData);
      }
    }, 850);
  }

  /**
   * Kích hoạt hiệu ứng thị giác theo tier:
   * Tier 3 (Hồng) trở lên: Hạt particles
   * Tier 4 (Đỏ): Rung màn hình nhẹ
   * Tier 5 (Vàng): Confetti toàn màn + tia sáng xoay + banner HUYỀN THOẠI
   */
  function triggerTierVisuals(tierId) {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Flash nhẹ trên khung reel
    if (containerEl) {
      containerEl.classList.add('reel-stop-flash');
      setTimeout(() => containerEl.classList.remove('reel-stop-flash'), 400);
    }

    // Tier 4 (Đỏ): Rung màn hình nhẹ
    if (tierId === 4) {
      document.body.classList.add('screen-shake');
      setTimeout(() => document.body.classList.remove('screen-shake'), 450);
    }

    // Tier 3, 4, 5: Bắn hạt lấp lánh (Particles)
    if (tierId >= 3) {
      spawnParticles(tierId);
    }

    // Tier 5 (Vàng): Confetti nổ lớn
    if (tierId === 5) {
      document.body.classList.add('screen-shake-intense');
      setTimeout(() => document.body.classList.remove('screen-shake-intense'), 600);
      spawnConfetti();
    }
  }

  /**
   * Tạo hiệu ứng hạt bay (Sparkle Particles) quanh thẻ trúng
   */
  function spawnParticles(tierId) {
    const tier = TIERS[tierId] || TIERS[3];
    const particleCount = tierId === 5 ? 40 : (tierId === 4 ? 25 : 15);
    const container = document.getElementById('particles-overlay') || document.body;

    const rect = winningCardEl ? winningCardEl.getBoundingClientRect() : {
      left: window.innerWidth / 2,
      top: window.innerHeight / 2,
      width: 140,
      height: 180
    };

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    for (let i = 0; i < particleCount; i++) {
      const p = document.createElement('div');
      p.className = 'sparkle-particle';
      p.style.backgroundColor = tier.color;
      p.style.boxShadow = `0 0 10px ${tier.color}`;

      const angle = Math.random() * Math.PI * 2;
      const distance = 40 + Math.random() * 120;
      const targetX = Math.cos(angle) * distance;
      const targetY = Math.sin(angle) * distance;

      p.style.left = `${centerX}px`;
      p.style.top = `${centerY}px`;
      p.style.setProperty('--tx', `${targetX}px`);
      p.style.setProperty('--ty', `${targetY}px`);

      container.appendChild(p);

      setTimeout(() => {
        p.remove();
      }, 900);
    }
  }

  /**
   * Tạo pháo hoa Confetti canvas khi mở trúng Tier 5 (Vàng - Huyền thoại)
   */
  function spawnConfetti() {
    let canvas = document.getElementById('confetti-canvas');
    if (!canvas) {
      canvas = document.createElement('canvas');
      canvas.id = 'confetti-canvas';
      canvas.className = 'confetti-fullscreen';
      document.body.appendChild(canvas);
    }

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#eab308', '#f59e0b', '#fbbf24', '#fef08a', '#ef4444', '#f43f5e', '#a855f7', '#ffffff'];
    const pieces = [];
    const count = 120;

    for (let i = 0; i < count; i++) {
      pieces.push({
        x: canvas.width / 2 + (Math.random() - 0.5) * 200,
        y: canvas.height / 2,
        w: 6 + Math.random() * 8,
        h: 10 + Math.random() * 10,
        vx: (Math.random() - 0.5) * 18,
        vy: -12 - Math.random() * 12,
        rotation: Math.random() * 360,
        vRot: (Math.random() - 0.5) * 15,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 1,
        decay: 0.008 + Math.random() * 0.008,
        gravity: 0.45
      });
    }

    let confettiRaf = null;
    function renderConfetti() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let aliveCount = 0;

      pieces.forEach(p => {
        if (p.alpha <= 0) return;
        aliveCount++;

        p.x += p.vx;
        p.vy += p.gravity;
        p.y += p.vy;
        p.vx *= 0.98;
        p.rotation += p.vRot;
        p.alpha -= p.decay;

        ctx.save();
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      });

      if (aliveCount > 0) {
        confettiRaf = requestAnimationFrame(renderConfetti);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        cancelAnimationFrame(confettiRaf);
      }
    }

    confettiRaf = requestAnimationFrame(renderConfetti);
  }

  function getIsSpinning() {
    return isSpinning;
  }

  return {
    init,
    buildReel,
    startSpin,
    skipAnimation,
    measureDimensions,
    getIsSpinning
  };
})();

// Hỗ trợ browser và Node
if (typeof window !== 'undefined') {
  window.ReelManager = ReelManager;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ReelManager };
}
