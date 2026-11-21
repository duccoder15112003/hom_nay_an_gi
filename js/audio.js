/**
 * HÒM ĂN GÌ - WEB AUDIO SYNTHESIZER
 * Tổng hợp 100% âm thanh bằng Web Audio API thuần (không dùng file MP3/WAV ngoài)
 */

const SoundEngine = (function() {
  let audioCtx = null;
  let masterGain = null;
  let isMuted = false;
  let lastTickTime = 0;
  const MIN_TICK_INTERVAL_MS = 28; // Giới hạn tần suất tick tránh méo tiếng khi reel quay cực nhanh

  // Đọc cài đặt tắt âm từ localStorage
  try {
    const saved = localStorage.getItem('homangi_muted');
    if (saved !== null) {
      isMuted = saved === 'true';
    }
  } catch (e) {
    console.warn('LocalStorage bị chặn, dùng in-memory cho mute state.');
  }

  /**
   * Khởi tạo hoặc kích hoạt AudioContext sau cử chỉ đầu tiên của người dùng
   */
  function ensureAudioContext() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return null;
      audioCtx = new AudioContextClass();

      masterGain = audioCtx.createGain();
      masterGain.gain.setValueAtTime(isMuted ? 0 : 0.3, audioCtx.currentTime);
      masterGain.connect(audioCtx.destination);
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  /**
   * Bật/tắt âm thanh
   */
  function toggleMute() {
    isMuted = !isMuted;
    try {
      localStorage.setItem('homangi_muted', String(isMuted));
    } catch (e) {}

    if (masterGain && audioCtx) {
      const now = audioCtx.currentTime;
      masterGain.gain.cancelScheduledValues(now);
      masterGain.gain.setValueAtTime(isMuted ? 0 : 0.3, now);
    }
    return isMuted;
  }

  function getIsMuted() {
    return isMuted;
  }

  /**
   * Âm click giao diện nhẹ nhàng khi bấm nút
   */
  function playClick() {
    if (isMuted) return;
    const ctx = ensureAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(800, now);
    osc.frequency.exponentialRampToValueAtTime(300, now + 0.04);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

    osc.connect(gain);
    gain.connect(masterGain);

    osc.start(now);
    osc.stop(now + 0.045);
    osc.onended = () => {
      osc.disconnect();
      gain.disconnect();
    };
  }

  /**
   * Âm "tick" cơ học giòn tan khi thẻ đi qua vạch giữa của Reel
   * Có throttle để giữ âm thanh mượt mà ở tốc độ cao
   */
  function playTick(speedRatio = 1) {
    if (isMuted) return;
    const nowMs = performance.now();
    if (nowMs - lastTickTime < MIN_TICK_INTERVAL_MS) {
      return;
    }
    lastTickTime = nowMs;

    const ctx = ensureAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    // Bộ tạo xung tần số cao giả lập lẫy cơ khí
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    // Tần số dao động quanh 1.6kHz - 2.4kHz
    const baseFreq = 1800 + Math.random() * 400;
    osc.type = 'square';
    osc.frequency.setValueAtTime(baseFreq, now);
    osc.frequency.exponentialRampToValueAtTime(baseFreq * 0.4, now + 0.018);

    // Bandpass lọc cho tiếng đanh và khô kiểu cơ học CS:GO
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(2200, now);
    filter.Q.setValueAtTime(3, now);

    const gainVal = Math.min(0.25, 0.15 + speedRatio * 0.1);
    gain.gain.setValueAtTime(gainVal, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.02);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(masterGain);

    osc.start(now);
    osc.stop(now + 0.022);
    osc.onended = () => {
      osc.disconnect();
      filter.disconnect();
      gain.disconnect();
    };
  }

  /**
   * Âm chốt khóa hòm bật ra (Crate Latch Unlock)
   */
  function playCrateLatch() {
    if (isMuted) return;
    const ctx = ensureAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    // Hai tiếng click liên tiếp (lẫy đôi)
    [0, 0.06].forEach((offset, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      const t = now + offset;
      osc.type = 'sine';
      osc.frequency.setValueAtTime(idx === 0 ? 950 : 1300, t);
      osc.frequency.exponentialRampToValueAtTime(300, t + 0.05);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(2500, t);

      gain.gain.setValueAtTime(0.3, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.06);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(masterGain);

      osc.start(t);
      osc.stop(t + 0.065);
      osc.onended = () => {
        osc.disconnect();
        filter.disconnect();
        gain.disconnect();
      };
    });
  }

  /**
   * Âm nắp hòm bật tung (Crate Pop / Heavy Lid Open)
   */
  function playCrateOpen() {
    if (isMuted) return;
    const ctx = ensureAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    // 1. Tiếng va đập trầm (Thud)
    const subOsc = ctx.createOscillator();
    const subGain = ctx.createGain();
    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(120, now);
    subOsc.frequency.exponentialRampToValueAtTime(35, now + 0.25);

    subGain.gain.setValueAtTime(0.5, now);
    subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);

    subOsc.connect(subGain);
    subGain.connect(masterGain);

    subOsc.start(now);
    subOsc.stop(now + 0.3);

    // 2. Tiếng rít gió / hơi mở nắp (Whoosh)
    // Dùng buffer noise nhỏ
    const bufferSize = ctx.sampleRate * 0.35;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = 'bandpass';
    noiseFilter.frequency.setValueAtTime(400, now);
    noiseFilter.frequency.exponentialRampToValueAtTime(1400, now + 0.2);

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.001, now);
    noiseGain.gain.linearRampToValueAtTime(0.25, now + 0.08);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(masterGain);

    noise.start(now);
    noise.stop(now + 0.36);

    noise.onended = () => {
      noise.disconnect();
      noiseFilter.disconnect();
      noiseGain.disconnect();
      subOsc.disconnect();
      subGain.disconnect();
    };
  }

  /**
   * Âm thanh hé lộ kết quả theo độ hiếm của Tier (Tier Reveal Sound)
   * Tier 0 (Xám): Nhẹ nhàng, êm dịu
   * Tier 1 (Xanh): Tươi sáng, 2 nốt
   * Tier 2 (Tím): Hợp âm 3 nốt lấp lánh
   * Tier 3 (Hồng): Synth dồn dập hùng tráng
   * Tier 4 (Đỏ): Rung chấn, hợp âm uy lực
   * Tier 5 (Vàng): Bản giao hưởng đại thắng với chuông vàng ngân vang lấp lánh
   */
  function playReveal(tierId) {
    if (isMuted) return;
    const ctx = ensureAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    switch (tierId) {
      case 0: // Xám: Bình dân
        playSimpleChime(ctx, now, [440, 523.25], 0.25, 'sine');
        break;

      case 1: // Xanh: Quen thuộc
        playArpeggio(ctx, now, [440, 554.37, 659.25], 0.3, 'triangle', 0.07);
        break;

      case 2: // Tím: Đáng thử
        playArpeggio(ctx, now, [440, 523.25, 659.25, 880], 0.4, 'sine', 0.08);
        playShimmer(ctx, now + 0.15, 1200, 0.4);
        break;

      case 3: // Hồng: Hiếm
        playEpicBrass(ctx, now, [349.23, 440, 523.25, 698.46], 0.5);
        playShimmer(ctx, now + 0.2, 1600, 0.6);
        break;

      case 4: // Đỏ: Cực phẩm
        playSubDrop(ctx, now, 80, 30, 0.5);
        playEpicBrass(ctx, now + 0.05, [261.63, 329.63, 392.00, 523.25, 659.25], 0.6);
        playShimmer(ctx, now + 0.3, 2000, 0.8);
        break;

      case 5: // Vàng: Huyền thoại
      default:
        playVictoryFanfare(ctx, now);
        break;
    }
  }

  function playSimpleChime(ctx, startTime, freqs, duration, type = 'sine') {
    freqs.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const t = startTime + idx * 0.06;

      osc.type = type;
      osc.frequency.setValueAtTime(freq, t);

      gain.gain.setValueAtTime(0.2, t);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + duration);

      osc.connect(gain);
      gain.connect(masterGain);

      osc.start(t);
      osc.stop(t + duration + 0.02);
      osc.onended = () => {
        osc.disconnect();
        gain.disconnect();
      };
    });
  }

  function playArpeggio(ctx, startTime, freqs, duration, type, stepDelay) {
    freqs.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const t = startTime + idx * stepDelay;

      osc.type = type;
      osc.frequency.setValueAtTime(freq, t);

      gain.gain.setValueAtTime(0.25, t);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + duration);

      osc.connect(gain);
      gain.connect(masterGain);

      osc.start(t);
      osc.stop(t + duration + 0.02);
      osc.onended = () => {
        osc.disconnect();
        gain.disconnect();
      };
    });
  }

  function playShimmer(ctx, startTime, baseFreq, duration) {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(baseFreq, startTime);
    osc.frequency.linearRampToValueAtTime(baseFreq * 1.5, startTime + duration);

    const filter = ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(1500, startTime);

    gain.gain.setValueAtTime(0.12, startTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(masterGain);

    osc.start(startTime);
    osc.stop(startTime + duration + 0.02);
    osc.onended = () => {
      osc.disconnect();
      filter.disconnect();
      gain.disconnect();
    };
  }

  function playSubDrop(ctx, startTime, startFreq, endFreq, duration) {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(startFreq, startTime);
    osc.frequency.exponentialRampToValueAtTime(endFreq, startTime + duration);

    gain.gain.setValueAtTime(0.6, startTime);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

    osc.connect(gain);
    gain.connect(masterGain);

    osc.start(startTime);
    osc.stop(startTime + duration + 0.02);
    osc.onended = () => {
      osc.disconnect();
      gain.disconnect();
    };
  }

  function playEpicBrass(ctx, startTime, chordFreqs, duration) {
    chordFreqs.forEach(freq => {
      [-4, 4].forEach(detune => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, startTime);
        osc.detune.setValueAtTime(detune, startTime);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(800, startTime);
        filter.frequency.exponentialRampToValueAtTime(2500, startTime + 0.15);

        gain.gain.setValueAtTime(0.001, startTime);
        gain.gain.linearRampToValueAtTime(0.15, startTime + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(masterGain);

        osc.start(startTime);
        osc.stop(startTime + duration + 0.05);
        osc.onended = () => {
          osc.disconnect();
          filter.disconnect();
          gain.disconnect();
        };
      });
    });
  }

  /**
   * Bản giao hưởng chiến thắng đặc biệt cho Tier Huyền Thoại (Gold)
   */
  function playVictoryFanfare(ctx, startTime) {
    // 1. Trống bass & Sub drop rung chuyển
    playSubDrop(ctx, startTime, 110, 35, 0.7);

    // 2. Hợp âm Trưởng thăng hoa tăng dần (C major -> F major -> G major -> C octave)
    const notes = [
      { f: 261.63, t: 0.00 }, // C4
      { f: 329.63, t: 0.08 }, // E4
      { f: 392.00, t: 0.16 }, // G4
      { f: 523.25, t: 0.24 }, // C5
      { f: 659.25, t: 0.32 }, // E5
      { f: 783.99, t: 0.40 }, // G5
      { f: 1046.50, t: 0.48 } // C6
    ];

    notes.forEach(note => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      const t = startTime + note.t;
      const duration = 1.2;

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(note.f, t);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(3500, t);

      gain.gain.setValueAtTime(0.2, t);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + duration);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(masterGain);

      osc.start(t);
      osc.stop(t + duration + 0.05);
      osc.onended = () => {
        osc.disconnect();
        filter.disconnect();
        gain.disconnect();
      };
    });

    // 3. Chuông vàng ngân lấp lánh (Sparkle bells)
    const bellNotes = [1046.5, 1318.5, 1567.98, 2093.0];
    bellNotes.forEach((f, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const t = startTime + 0.5 + i * 0.12;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, t);

      gain.gain.setValueAtTime(0.18, t);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.8);

      osc.connect(gain);
      gain.connect(masterGain);

      osc.start(t);
      osc.stop(t + 0.85);
      osc.onended = () => {
        osc.disconnect();
        gain.disconnect();
      };
    });
  }

  return {
    ensureAudioContext,
    toggleMute,
    getIsMuted,
    playClick,
    playTick,
    playCrateLatch,
    playCrateOpen,
    playReveal
  };
})();

// Hỗ trợ cả trình duyệt và Node
if (typeof window !== 'undefined') {
  window.SoundEngine = SoundEngine;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SoundEngine };
}
