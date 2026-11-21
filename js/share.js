/**
 * HÒM ĂN GÌ - SHARE & CANVAS CARD GENERATOR
 * Vẽ card kết quả lên Canvas độ phân giải cao (1080x1350) và chia sẻ qua Web Share API hoặc tải ảnh PNG
 */

const ShareManager = (function() {
  /**
   * Tạo hình ảnh Canvas và thực hiện chia sẻ hoặc tải về
   * winningData: { food, tier, tierId }
   * budget: số tiền người dùng đã nhập
   * selectedMeal: bữa đã chọn ("sang", "trua", "toi", "anvat", "tatca")
   */
  async function exportResultCard(winningData, budget, selectedMeal) {
    if (!winningData || !winningData.food) return;

    // Đợi font chữ nạp xong để đảm bảo dấu tiếng Việt hiển thị sắc nét, không lỗi font
    if (document.fonts && document.fonts.ready) {
      await document.fonts.ready;
    }

    const canvas = document.createElement('canvas');
    canvas.width = 1080;
    canvas.height = 1350;
    const ctx = canvas.getContext('2d');

    const food = winningData.food;
    const tier = winningData.tier || TIERS[winningData.tierId || 0];
    const tierColor = tier.color || '#9aa4b2';

    // 1. NỀN TỐI GAMING LOOT CRATE
    // Gradient nền chính từ đen sâu (#0a0d14) sang than chì xám (#151a24)
    const bgGrad = ctx.createLinearGradient(0, 0, 0, 1350);
    bgGrad.addColorStop(0, '#0b0e14');
    bgGrad.addColorStop(0.5, '#121722');
    bgGrad.addColorStop(1, '#090c12');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 1080, 1350);

    // 2. VÒNG SÁNG RADIAL THEO MÀU TIER
    const radialGlow = ctx.createRadialGradient(540, 560, 50, 540, 560, 500);
    radialGlow.addColorStop(0, hexToRgba(tierColor, 0.35));
    radialGlow.addColorStop(0.6, hexToRgba(tierColor, 0.08));
    radialGlow.addColorStop(1, 'transparent');
    ctx.fillStyle = radialGlow;
    ctx.fillRect(0, 0, 1080, 1350);

    // 3. HỌA TIẾT CƠ KHÍ & ĐƯỜNG KẺ CS:GO
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 2;
    for (let y = 100; y < 1350; y += 80) {
      ctx.beginPath();
      ctx.moveTo(60, y);
      ctx.lineTo(1020, y);
      ctx.stroke();
    }

    // Khung viền ngoài cùng với góc vát cơ khí
    drawCutCornerRect(ctx, 40, 40, 1000, 1270, 24, 'rgba(255, 255, 255, 0.1)', 2);

    // 4. HEADER: LOGO & TAGLINE
    ctx.fillStyle = '#f59e0b';
    ctx.font = 'bold 36px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('HÒM ĂN GÌ • CASE OPENING', 540, 120);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '500 24px "Be Vietnam Pro", sans-serif';
    ctx.fillText('Giải cứu phân vân • Mở hòm ra món hôm nay', 540, 165);

    // 5. THẺ TRUNG TÂM (MAIN SHOWCASE CARD)
    const cardX = 100;
    const cardY = 220;
    const cardW = 880;
    const cardH = 860;

    // Đổ bóng cho card trung tâm
    ctx.save();
    ctx.shadowColor = hexToRgba(tierColor, 0.5);
    ctx.shadowBlur = 40;
    ctx.shadowOffsetY = 15;

    // Nền card
    const cardBgGrad = ctx.createLinearGradient(cardX, cardY, cardX, cardY + cardH);
    cardBgGrad.addColorStop(0, '#1a202c');
    cardBgGrad.addColorStop(1, '#111620');
    ctx.fillStyle = cardBgGrad;
    drawRoundRect(ctx, cardX, cardY, cardW, cardH, 24);
    ctx.fill();
    ctx.restore();

    // Viền card theo màu Tier
    ctx.strokeStyle = tierColor;
    ctx.lineWidth = 4;
    drawRoundRect(ctx, cardX, cardY, cardW, cardH, 24);
    ctx.stroke();

    // Dải màu tier ở đỉnh thẻ
    ctx.fillStyle = tierColor;
    ctx.fillRect(cardX + 24, cardY, cardW - 48, 8);

    // HUY HIỆU TIER (Rarity Badge Ribbon)
    const badgeW = 340;
    const badgeH = 54;
    const badgeX = 540 - badgeW / 2;
    const badgeY = cardY + 45;

    ctx.fillStyle = hexToRgba(tierColor, 0.2);
    drawRoundRect(ctx, badgeX, badgeY, badgeW, badgeH, 12);
    ctx.fill();
    ctx.strokeStyle = tierColor;
    ctx.lineWidth = 2;
    drawRoundRect(ctx, badgeX, badgeY, badgeW, badgeH, 12);
    ctx.stroke();

    ctx.fillStyle = tierColor;
    ctx.font = 'bold 26px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`★ ${tier.name.toUpperCase()} ★`, 540, badgeY + 36);

    // KHUNG HÌNH ẢNH MÓN ĂN THỰC TẾ
    const photoY = cardY + 115;
    const photoW = 480;
    const photoH = 260;
    const photoX = 540 - photoW / 2;

    let imgLoaded = false;
    if (food.image) {
      try {
        const imgObj = await new Promise((resolve) => {
          const img = new Image();
          img.crossOrigin = 'anonymous';
          img.onload = () => resolve(img);
          img.onerror = () => resolve(null);
          img.src = food.image;
          setTimeout(() => resolve(null), 1500);
        });

        if (imgObj) {
          ctx.save();
          drawRoundRect(ctx, photoX, photoY, photoW, photoH, 18);
          ctx.clip();
          ctx.drawImage(imgObj, photoX, photoY, photoW, photoH);
          ctx.restore();

          ctx.strokeStyle = tierColor;
          ctx.lineWidth = 4;
          drawRoundRect(ctx, photoX, photoY, photoW, photoH, 18);
          ctx.stroke();
          imgLoaded = true;
        }
      } catch (e) {}
    }

    if (!imgLoaded) {
      const emojiCenterY = cardY + 240;
      ctx.fillStyle = hexToRgba(tierColor, 0.15);
      ctx.beginPath();
      ctx.arc(540, emojiCenterY, 90, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = hexToRgba(tierColor, 0.4);
      ctx.lineWidth = 3;
      ctx.stroke();

      ctx.font = '90px "Segoe UI Emoji", "Apple Color Emoji", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(food.emoji || '🍲', 540, emojiCenterY + 5);
      ctx.textBaseline = 'alphabetic';
    }

    // TÊN MÓN ĂN
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 44px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'center';
    drawWrappedText(ctx, food.name, 540, cardY + 420, cardW - 100, 52);

    // GIÁ TIỀN THAM KHẢO
    ctx.fillStyle = '#f59e0b';
    ctx.font = 'bold 40px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(Engine.formatMoney(food.price), 540, cardY + 510);

    // TAGS (Bữa ăn & Vùng miền)
    const regionNames = { bac: 'Miền Bắc', trung: 'Miền Trung', nam: 'Miền Nam', toanquoc: 'Toàn Quốc' };
    const mealNames = { sang: 'Bữa Sáng', trua: 'Bữa Trưa', toi: 'Bữa Tối', anvat: 'Ăn Vặt', tatca: 'Mọi Bữa' };

    const tag1 = regionNames[food.region] || 'Đặc Sản';
    const tag2 = mealNames[selectedMeal] || 'Hợp bữa';

    drawTag(ctx, tag1, 440, cardY + 560, '#38bdf8');
    drawTag(ctx, tag2, 640, cardY + 560, '#a855f7');

    // MÔ TẢ GỢI THÈM
    ctx.fillStyle = '#cbd5e1';
    ctx.font = 'italic 26px "Be Vietnam Pro", sans-serif';
    ctx.textAlign = 'center';
    drawWrappedText(ctx, `"${food.desc}"`, 540, cardY + 655, cardW - 120, 36);

    // DÒNG TIỀN DƯ (NẾU CÓ TIẾT KIỆM)
    const leftover = budget - food.price;
    if (leftover >= 20000) {
      const leftoverBgY = cardY + 750;
      ctx.fillStyle = 'rgba(34, 197, 94, 0.12)';
      drawRoundRect(ctx, cardX + 60, leftoverBgY, cardW - 120, 60, 12);
      ctx.fill();
      ctx.strokeStyle = 'rgba(34, 197, 94, 0.4)';
      ctx.lineWidth = 1.5;
      drawRoundRect(ctx, cardX + 60, leftoverBgY, cardW - 120, 60, 12);
      ctx.stroke();

      ctx.fillStyle = '#4ade80';
      ctx.font = '600 24px "Be Vietnam Pro", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(`💡 Dư ${Engine.formatMoney(leftover)} • Đủ làm thêm ly trà đá / tráng miệng nha!`, 540, leftoverBgY + 38);
    }

    // 6. FOOTER: THÔNG TIN BẢN QUYỀN & WEBSITE
    ctx.fillStyle = '#64748b';
    ctx.font = '500 22px "Be Vietnam Pro", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('homangi.vn • Giá chỉ mang tính tham khảo quán bình dân', 540, 1220);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '600 26px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('Quay là Trúng • Hết Phân Vân', 540, 1260);

    // 7. XUẤT ẢNH HOẶC CHIA SẺ
    try {
      const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
      const fileName = `hom-an-gi-${slugify(food.name)}.png`;

      // Kiểm tra hỗ trợ Web Share API trên thiết bị di động
      if (navigator.canShare && navigator.canShare({ files: [new File([blob], fileName, { type: 'image/png' })] })) {
        const file = new File([blob], fileName, { type: 'image/png' });
        await navigator.share({
          title: `Hôm nay ăn gì? Mở hòm ra ngay ${food.name}!`,
          text: `Mình vừa mở hòm trúng ${food.name} (${tier.name}) với giá ${Engine.formatMoney(food.price)} trên Hòm Ăn Gì!`,
          files: [file]
        });
        return { success: true, method: 'share' };
      } else {
        // Fallback: Tự động tải ảnh PNG về máy
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(() => URL.revokeObjectURL(url), 1000);
        return { success: true, method: 'download' };
      }
    } catch (err) {
      console.error('Lỗi khi xuất hoặc chia sẻ ảnh card:', err);
      return { success: false, error: err };
    }
  }

  // --- HÀM TRỢ GIÚP CANVAS ---

  function drawRoundRect(ctx, x, y, w, h, r) {
    if (w < 2 * r) r = w / 2;
    if (h < 2 * r) r = h / 2;
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }

  function drawCutCornerRect(ctx, x, y, w, h, cut, strokeColor, lineWidth) {
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.moveTo(x + cut, y);
    ctx.lineTo(x + w - cut, y);
    ctx.lineTo(x + w, y + cut);
    ctx.lineTo(x + w, y + h - cut);
    ctx.lineTo(x + w - cut, y + h);
    ctx.lineTo(x + cut, y + h);
    ctx.lineTo(x, y + h - cut);
    ctx.lineTo(x, y + cut);
    ctx.closePath();
    ctx.stroke();
  }

  function drawTag(ctx, text, centerX, centerY, color) {
    ctx.font = '600 22px "Be Vietnam Pro", sans-serif';
    const textW = ctx.measureText(text).width;
    const tagW = textW + 36;
    const tagH = 42;
    const tagX = centerX - tagW / 2;
    const tagY = centerY - tagH / 2;

    ctx.fillStyle = hexToRgba(color, 0.15);
    drawRoundRect(ctx, tagX, tagY, tagW, tagH, 8);
    ctx.fill();

    ctx.strokeStyle = hexToRgba(color, 0.4);
    ctx.lineWidth = 1.5;
    drawRoundRect(ctx, tagX, tagY, tagW, tagH, 8);
    ctx.stroke();

    ctx.fillStyle = color;
    ctx.textAlign = 'center';
    ctx.fillText(text, centerX, centerY + 7);
  }

  function drawWrappedText(ctx, text, x, startY, maxWidth, lineHeight) {
    const words = text.split(' ');
    let line = '';
    let y = startY;

    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const metrics = ctx.measureText(testLine);
      const testWidth = metrics.width;
      if (testWidth > maxWidth && n > 0) {
        ctx.fillText(line.trim(), x, y);
        line = words[n] + ' ';
        y += lineHeight;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line.trim(), x, y);
  }

  function hexToRgba(hex, alpha) {
    if (!hex) return `rgba(255, 255, 255, ${alpha})`;
    let c = hex.replace('#', '');
    if (c.length === 3) {
      c = c[0] + c[0] + c[1] + c[1] + c[2] + c[2];
    }
    const num = parseInt(c, 16);
    return `rgba(${(num >> 16) & 255}, ${(num >> 8) & 255}, ${num & 255}, ${alpha})`;
  }

  function slugify(text) {
    if (!text) return 'mon-an';
    return text
      .toString()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[đĐ]/g, 'd')
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  }

  return {
    exportResultCard
  };
})();

// Hỗ trợ browser và Node
if (typeof window !== 'undefined') {
  window.ShareManager = ShareManager;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ShareManager };
}
