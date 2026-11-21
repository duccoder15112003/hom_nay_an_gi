/**
 * HÒM ĂN GÌ - DATA CONFIGURATION
 * Dữ liệu món ăn với ảnh thực tế chính xác (Unsplash CDN), Tiers, Nơi ở & Quán ăn 5 sao
 */

const CONFIG = {
  "dropWeights": [
    55,
    25,
    12,
    5,
    2.5,
    0.5
  ],
  "minBudget": 10000,
  "maxBudget": 5000000,
  "defaultBudget": 45000,
  "reelCardCount": 70,
  "winningIndex": 54,
  "spinDuration": 6.5,
  "reducedSpinDuration": 1
};

const TIERS = [
  {
    "id": 0,
    "name": "Bình dân",
    "slug": "common",
    "color": "#9aa4b2",
    "bg": "rgba(154, 164, 178, 0.15)",
    "border": "#9aa4b2",
    "glow": "0 0 15px rgba(154, 164, 178, 0.4)",
    "badgeBg": "#374151",
    "textColor": "#f3f4f6",
    "rarityName": "Tier 1"
  },
  {
    "id": 1,
    "name": "Quen thuộc",
    "slug": "uncommon",
    "color": "#38bdf8",
    "bg": "rgba(56, 189, 248, 0.15)",
    "border": "#38bdf8",
    "glow": "0 0 20px rgba(56, 189, 248, 0.5)",
    "badgeBg": "#0369a1",
    "textColor": "#f0f9ff",
    "rarityName": "Tier 2"
  },
  {
    "id": 2,
    "name": "Đáng thử",
    "slug": "rare",
    "color": "#a855f7",
    "bg": "rgba(168, 85, 247, 0.15)",
    "border": "#a855f7",
    "glow": "0 0 25px rgba(168, 85, 247, 0.55)",
    "badgeBg": "#6b21a8",
    "textColor": "#faf5ff",
    "rarityName": "Tier 3"
  },
  {
    "id": 3,
    "name": "Hiếm",
    "slug": "classified",
    "color": "#f43f5e",
    "bg": "rgba(244, 63, 94, 0.18)",
    "border": "#f43f5e",
    "glow": "0 0 30px rgba(244, 63, 94, 0.65)",
    "badgeBg": "#be123c",
    "textColor": "#fff1f2",
    "rarityName": "Tier 4"
  },
  {
    "id": 4,
    "name": "Cực phẩm",
    "slug": "covert",
    "color": "#ef4444",
    "bg": "rgba(239, 68, 68, 0.22)",
    "border": "#ef4444",
    "glow": "0 0 35px rgba(239, 68, 68, 0.8)",
    "badgeBg": "#b91c1c",
    "textColor": "#fef2f2",
    "rarityName": "Tier 5"
  },
  {
    "id": 5,
    "name": "Huyền thoại",
    "slug": "special",
    "color": "#eab308",
    "bg": "rgba(234, 179, 8, 0.25)",
    "border": "#eab308",
    "glow": "0 0 45px rgba(234, 179, 8, 0.9)",
    "badgeBg": "#854d0e",
    "textColor": "#fefce8",
    "rarityName": "★ Special Rare ★"
  }
];

const LOCATIONS = [
  {
    "id": "hcm",
    "name": "TP. Hồ Chí Minh",
    "shortName": "TP.HCM",
    "defaultDistrict": "Quận 1",
    "districts": [
      "Quận 1",
      "Quận 3",
      "Quận 5 (Chợ Lớn)",
      "Quận 7",
      "Quận 10",
      "Bình Thạnh",
      "Phú Nhuận",
      "Tân Bình",
      "TP. Thủ Đức"
    ]
  },
  {
    "id": "hanoi",
    "name": "Hà Nội",
    "shortName": "Hà Nội",
    "defaultDistrict": "Hoàn Kiếm",
    "districts": [
      "Hoàn Kiếm",
      "Ba Đình",
      "Đống Đa",
      "Cầu Giấy",
      "Hai Bà Trưng",
      "Tây Hồ",
      "Thanh Xuân",
      "Nam Từ Liêm"
    ]
  },
  {
    "id": "danang",
    "name": "Đà Nẵng",
    "shortName": "Đà Nẵng",
    "defaultDistrict": "Hải Châu",
    "districts": [
      "Hải Châu",
      "Sơn Trà",
      "Thanh Khê",
      "Ngũ Hành Sơn",
      "Cẩm Lệ"
    ]
  },
  {
    "id": "haiphong",
    "name": "Hải Phòng",
    "shortName": "Hải Phòng",
    "defaultDistrict": "Ngô Quyền",
    "districts": [
      "Hồng Bàng",
      "Ngô Quyền",
      "Lê Chân",
      "Hải An"
    ]
  },
  {
    "id": "cantho",
    "name": "Cần Thơ",
    "shortName": "Cần Thơ",
    "defaultDistrict": "Ninh Kiều",
    "districts": [
      "Ninh Kiều",
      "Cái Răng",
      "Bình Thủy"
    ]
  }
];

const RESTAURANTS_DB = {
  "pho": [
    {
      "name": "Phở Thìn Lò Đúc",
      "rating": 5,
      "reviews": 4200,
      "address": "13 Lò Đúc, Hai Bà Trưng, Hà Nội",
      "district": "Hai Bà Trưng",
      "cityId": "hanoi",
      "price": "65k - 90k"
    },
    {
      "name": "Phở Bát Đàn",
      "rating": 4.9,
      "reviews": 3800,
      "address": "49 Bát Đàn, Cửa Đông, Hoàn Kiếm, Hà Nội",
      "district": "Hoàn Kiếm",
      "cityId": "hanoi",
      "price": "55k - 85k"
    },
    {
      "name": "Phở Lệ Nguyễn Trãi",
      "rating": 5,
      "reviews": 5100,
      "address": "415 Nguyễn Trãi, P.7, Quận 5, TP.HCM",
      "district": "Quận 5 (Chợ Lớn)",
      "cityId": "hcm",
      "price": "75k - 95k"
    },
    {
      "name": "Phở Hòa Pasteur",
      "rating": 4.8,
      "reviews": 2900,
      "address": "260C Pasteur, P.8, Quận 3, TP.HCM",
      "district": "Quận 3",
      "cityId": "hcm",
      "price": "75k - 110k"
    },
    {
      "name": "Phở Phú Vương",
      "rating": 4.8,
      "reviews": 1900,
      "address": "339 Lê Văn Sỹ, P.1, Tân Bình, TP.HCM",
      "district": "Tân Bình",
      "cityId": "hcm",
      "price": "65k - 85k"
    },
    {
      "name": "Phở Bắc 63",
      "rating": 4.8,
      "reviews": 1400,
      "address": "203 Đống Đa, Thạch Thang, Hải Châu, Đà Nẵng",
      "district": "Hải Châu",
      "cityId": "danang",
      "price": "45k - 70k"
    }
  ],
  "com_tam": [
    {
      "name": "Cơm Tấm Ba Ghiền",
      "rating": 5,
      "reviews": 6200,
      "address": "84 Đặng Văn Ngữ, P.10, Phú Nhuận, TP.HCM",
      "district": "Phú Nhuận",
      "cityId": "hcm",
      "price": "70k - 120k"
    },
    {
      "name": "Cơm Tấm Phúc Lộc Thọ",
      "rating": 4.8,
      "reviews": 4500,
      "address": "236 Đinh Tiên Hoàng, Đa Kao, Quận 1, TP.HCM",
      "district": "Quận 1",
      "cityId": "hcm",
      "price": "45k - 75k"
    },
    {
      "name": "Cơm Tấm Huyền (Bình Thạnh)",
      "rating": 4.9,
      "reviews": 2800,
      "address": "Hẻm 95 Đinh Tiên Hoàng, P.3, Bình Thạnh, TP.HCM",
      "district": "Bình Thạnh",
      "cityId": "hcm",
      "price": "45k - 70k"
    },
    {
      "name": "Cơm Tấm Sài Gòn Phố",
      "rating": 4.8,
      "reviews": 1200,
      "address": "120 Mai Hắc Đế, Bùi Thị Xuân, Hai Bà Trưng, Hà Nội",
      "district": "Hai Bà Trưng",
      "cityId": "hanoi",
      "price": "55k - 85k"
    }
  ],
  "bun_cha": [
    {
      "name": "Bún Chả Hương Liên (Obama)",
      "rating": 5,
      "reviews": 7800,
      "address": "24 Lê Văn Hưu, Phan Chu Trinh, Hai Bà Trưng, Hà Nội",
      "district": "Hai Bà Trưng",
      "cityId": "hanoi",
      "price": "50k - 70k"
    },
    {
      "name": "Bún Chả Đắc Kim",
      "rating": 4.9,
      "reviews": 4300,
      "address": "1 Hàng Mành, Hàng Gai, Hoàn Kiếm, Hà Nội",
      "district": "Hoàn Kiếm",
      "cityId": "hanoi",
      "price": "60k - 90k"
    },
    {
      "name": "Bún Chả 145 Bùi Viện",
      "rating": 4.8,
      "reviews": 2600,
      "address": "145 Bùi Viện, P. Phạm Ngũ Lão, Quận 1, TP.HCM",
      "district": "Quận 1",
      "cityId": "hcm",
      "price": "50k - 75k"
    },
    {
      "name": "Bún Chả Hà Nội Phố",
      "rating": 4.8,
      "reviews": 950,
      "address": "185 Pasteur, P. Võ Thị Sáu, Quận 3, TP.HCM",
      "district": "Quận 3",
      "cityId": "hcm",
      "price": "55k - 80k"
    }
  ],
  "banh_mi": [
    {
      "name": "Bánh Mì Huỳnh Hoa",
      "rating": 5,
      "reviews": 9600,
      "address": "26 Lê Thị Riêng, Bến Thành, Quận 1, TP.HCM",
      "district": "Quận 1",
      "cityId": "hcm",
      "price": "68k - 75k"
    },
    {
      "name": "Bánh Mì Bảy Hổ",
      "rating": 4.9,
      "reviews": 3100,
      "address": "19 Huỳnh Khương Ninh, Đa Kao, Quận 1, TP.HCM",
      "district": "Quận 1",
      "cityId": "hcm",
      "price": "25k - 40k"
    },
    {
      "name": "Bánh Mì Dân Tổ",
      "rating": 4.8,
      "reviews": 3800,
      "address": "Ngã 3 Trần Nhật Duật - Cao Thắng, Hoàn Kiếm, Hà Nội",
      "district": "Hoàn Kiếm",
      "cityId": "hanoi",
      "price": "25k - 35k"
    },
    {
      "name": "Bánh Mì Phượng (Đà Nẵng)",
      "rating": 4.9,
      "reviews": 4200,
      "address": "Bạch Đằng, Hải Châu, Đà Nẵng",
      "district": "Hải Châu",
      "cityId": "danang",
      "price": "30k - 45k"
    },
    {
      "name": "Bánh Mì Que Cột Đèn Hải Phòng",
      "rating": 5,
      "reviews": 2900,
      "address": "Ngã tư Cột Đèn, Lê Chân, Hải Phòng",
      "district": "Lê Chân",
      "cityId": "haiphong",
      "price": "15k - 25k"
    }
  ],
  "bun_bo": [
    {
      "name": "Bún Bò Huế Đông Ba",
      "rating": 5,
      "reviews": 3400,
      "address": "207 Nguyễn Trãi, P. Nguyễn Cư Trinh, Quận 1, TP.HCM",
      "district": "Quận 1",
      "cityId": "hcm",
      "price": "60k - 85k"
    },
    {
      "name": "Bún Bò Huế O Xuân",
      "rating": 4.9,
      "reviews": 2700,
      "address": "3 Quang Trung, Tràng Tiền, Hoàn Kiếm, Hà Nội",
      "district": "Hoàn Kiếm",
      "cityId": "hanoi",
      "price": "55k - 75k"
    },
    {
      "name": "Bún Bò Bé Mai",
      "rating": 4.9,
      "reviews": 1800,
      "address": "17 Đống Đa, Thuận Phước, Hải Châu, Đà Nẵng",
      "district": "Hải Châu",
      "cityId": "danang",
      "price": "45k - 65k"
    }
  ],
  "bun_dau": [
    {
      "name": "Bún Đậu Trung Hương",
      "rating": 5,
      "reviews": 3100,
      "address": "49 Ngõ Phất Lộc, Hàng Buồm, Hoàn Kiếm, Hà Nội",
      "district": "Hoàn Kiếm",
      "cityId": "hanoi",
      "price": "50k - 80k"
    },
    {
      "name": "Bún Đậu A Chảnh",
      "rating": 4.9,
      "reviews": 5200,
      "address": "359 Phan Xích Long, P.1, Phú Nhuận, TP.HCM",
      "district": "Phú Nhuận",
      "cityId": "hcm",
      "price": "55k - 75k"
    },
    {
      "name": "Bún Đậu Mẹt Cuội",
      "rating": 4.8,
      "reviews": 1400,
      "address": "165 Huỳnh Thúc Kháng, Bình Hiên, Hải Châu, Đà Nẵng",
      "district": "Hải Châu",
      "cityId": "danang",
      "price": "45k - 65k"
    }
  ],
  "lau": [
    {
      "name": "Lẩu Cua Đồng Song Hà",
      "rating": 5,
      "reviews": 2400,
      "address": "685 Lạc Long Quân, Xuân La, Tây Hồ, Hà Nội",
      "district": "Tây Hồ",
      "cityId": "hanoi",
      "price": "180k - 250k"
    },
    {
      "name": "Lẩu Gà Lá É Tao Ngộ",
      "rating": 4.9,
      "reviews": 3600,
      "address": "79D Đỗ Xuân Hợp, Phước Long B, TP. Thủ Đức, TP.HCM",
      "district": "TP. Thủ Đức",
      "cityId": "hcm",
      "price": "160k - 220k"
    },
    {
      "name": "Lẩu Bò Ba Duệ",
      "rating": 4.9,
      "reviews": 2900,
      "address": "40/7 Trần Cao Vân, Tam Thuận, Thanh Khê, Đà Nẵng",
      "district": "Thanh Khê",
      "cityId": "danang",
      "price": "150k - 200k"
    }
  ],
  "oc_haisan": [
    {
      "name": "Ốc Đào Nguyễn Trãi",
      "rating": 5,
      "reviews": 4900,
      "address": "Hẻm 212B Nguyễn Trãi, P. Nguyễn Cư Trinh, Quận 1, TP.HCM",
      "district": "Quận 1",
      "cityId": "hcm",
      "price": "70k - 150k"
    },
    {
      "name": "Ốc Oanh Vĩnh Khánh",
      "rating": 4.9,
      "reviews": 4200,
      "address": "534 Vĩnh Khánh, P.8, Quận 4, TP.HCM",
      "district": "Quận 1",
      "cityId": "hcm",
      "price": "80k - 180k"
    },
    {
      "name": "Hải Sản Bé Mặn",
      "rating": 5,
      "reviews": 6100,
      "address": "Lô 11 Võ Nguyên Giáp, Mân Thái, Sơn Trà, Đà Nẵng",
      "district": "Sơn Trà",
      "cityId": "danang",
      "price": "100k - 300k"
    },
    {
      "name": "Ốc Nóng Bà Câm",
      "rating": 4.9,
      "reviews": 1900,
      "address": "5 Đinh Liệt, Hàng Bạc, Hoàn Kiếm, Hà Nội",
      "district": "Hoàn Kiếm",
      "cityId": "hanoi",
      "price": "60k - 120k"
    }
  ]
};

const FOODS = [
  {
    "id": "pho_bo_tai_lan",
    "name": "Phở bò tái lăn",
    "emoji": "🍲",
    "price": 55000,
    "meals": [
      "sang",
      "trua",
      "toi"
    ],
    "novelty": 1,
    "region": "bac",
    "desc": "Hành hoa xanh mướt ngập bát, thịt bò xào lăn thơm nức mũi cả góc phố.",
    "image": "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "pho_ga_ta",
    "name": "Phở gà ta lá chanh",
    "emoji": "🍜",
    "price": 45000,
    "meals": [
      "sang",
      "trua",
      "toi"
    ],
    "novelty": 1,
    "region": "bac",
    "desc": "Da gà vàng giòn sần sật, nước dùng thanh ngọt thơm lừng mùi lá chanh tươi.",
    "image": "https://images.unsplash.com/photo-1617093727343-374698b1b08d?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "bun_cha_ha_noi",
    "name": "Bún chả Hà Nội",
    "emoji": "🥓",
    "price": 50000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 1,
    "region": "bac",
    "desc": "Thịt nướng than hoa xém cạnh đẫm sốt cà cuống, ăn kèm bún rối tươi rói.",
    "image": "https://images.unsplash.com/photo-1503764654157-72d979d9af2f?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "bun_dau_mam_tom",
    "name": "Bún đậu mắm tôm thập cẩm",
    "emoji": "🥢",
    "price": 55000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 1,
    "region": "bac",
    "desc": "Đậu rán phồng giòn rụm, chả cốm dẻo quẹo chấm bát mắm tôm đánh sủi bọt ngập quất.",
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "bun_thang",
    "name": "Bún thang Hà Nội",
    "emoji": "🍲",
    "price": 60000,
    "meals": [
      "sang",
      "trua"
    ],
    "novelty": 2,
    "region": "bac",
    "desc": "Tác phẩm nghệ thuật ẩm thực cầu kỳ với giò lụa, trứng tráng chỉ vàng và một chấm tinh dầu cà cuống.",
    "image": "https://images.unsplash.com/photo-1617093727343-374698b1b08d?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "banh_cuon_nong_ca_cuong",
    "name": "Bánh cuốn nóng chả quế",
    "emoji": "🥟",
    "price": 35000,
    "meals": [
      "sang",
      "toi"
    ],
    "novelty": 1,
    "region": "bac",
    "desc": "Tráng mỏng như cánh ve, rắc hành phi tự làm giòn tan quyện mộc nhĩ nấm hương.",
    "image": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "bun_oc_nguoi",
    "name": "Bún ốc nguội giấm bỗng",
    "emoji": "🐚",
    "price": 45000,
    "meals": [
      "trua",
      "anvat"
    ],
    "novelty": 2,
    "region": "bac",
    "desc": "Ốc nhồi béo múp giòn sần sật trong thứ nước ốc luộc chua thanh dịu ngọt mát ruột.",
    "image": "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "bun_moc_doc_mung",
    "name": "Bún mọc dọc mùng sườn non",
    "emoji": "🥣",
    "price": 45000,
    "meals": [
      "sang",
      "trua"
    ],
    "novelty": 1,
    "region": "bac",
    "desc": "Viên mọc nấm hương thơm mềm, dọc mùng tước sạch giòn sần sật ăn đã miệng.",
    "image": "https://images.unsplash.com/photo-1617093727343-374698b1b08d?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "xoi_xeo_ruoc_hanh",
    "name": "Xôi xéo mỡ hành ruốc thịt",
    "emoji": "🍚",
    "price": 20000,
    "meals": [
      "sang",
      "anvat"
    ],
    "novelty": 0,
    "region": "bac",
    "desc": "Hạt nếp vàng óng, đậu xanh thái mỏng như lụa rưới thìa mỡ gà béo ngậy cứu đói buổi sáng.",
    "image": "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "xoi_khuc_hoang_mai",
    "name": "Bánh khúc Hoàng Mai",
    "emoji": "🍙",
    "price": 18000,
    "meals": [
      "sang",
      "anvat"
    ],
    "novelty": 1,
    "region": "bac",
    "desc": "\"Ai bánh khúc nóng đê!\" - Lớp nếp dẻo bọc lá khúc thơm nồng và miếng thịt ba chỉ tiêu đen ngậy thơm.",
    "image": "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "chao_suon_sun_cho_dong_xuan",
    "name": "Cháo sườn sụn quẩy giòn",
    "emoji": "🥣",
    "price": 35000,
    "meals": [
      "sang",
      "toi",
      "anvat"
    ],
    "novelty": 1,
    "region": "bac",
    "desc": "Cháo bột xay sánh mịn như nhung, sườn sụn ninh mềm sần sật thêm nắm ruốc ớt bột.",
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "nem_ran_ha_noi",
    "name": "Nem rán Hà Nội vỏ giòn",
    "emoji": "🥢",
    "price": 40000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 1,
    "region": "bac",
    "desc": "Vỏ nem vàng rộm giòn tan, nhân tôm thịt miến mộc nhĩ chấm nước mắm chua ngọt ấm bụng.",
    "image": "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "cha_ca_la_vong",
    "name": "Chả cá Lã Vọng chảo gang",
    "emoji": "🍳",
    "price": 160000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 3,
    "region": "bac",
    "desc": "Cá lăng vàng ruộm xèo xèo cùng thì là hành hoa trên chảo mỡ, ăn kèm lạc rang và mắm tôm thơm ngất ngây.",
    "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "lau_rieu_cua_bap_bo",
    "name": "Lẩu riêu cua bắp bò sườn sụn",
    "emoji": "🍲",
    "price": 195000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 3,
    "region": "bac",
    "desc": "Gạch cua nổi từng tảng dầy cộp, nước lẩu chua thanh giấm bỗng nhúng thịt bò hoa tái mềm.",
    "image": "https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "thang_co_sa_pa",
    "name": "Thắng cố ngựa Bắc Hà",
    "emoji": "🥘",
    "price": 130000,
    "meals": [
      "toi"
    ],
    "novelty": 4,
    "region": "bac",
    "desc": "Đặc sản núi rừng Tây Bắc thơm nồng hạt dổi mắc khén, cay nồng ấm lòng ngày se lạnh.",
    "image": "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "chao_au_tau",
    "name": "Cháo ấu tẩu Hà Giang",
    "emoji": "🥣",
    "price": 40000,
    "meals": [
      "toi"
    ],
    "novelty": 4,
    "region": "bac",
    "desc": "Vị đắng đầu lưỡi chuyển dần thành ngọt sâu cuống họng, ăn xong ngủ một giấc say như tiên.",
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "bo_xit_rang_la_chanh",
    "name": "Bọ xít rừng rang lá chanh",
    "emoji": "🦗",
    "price": 45000,
    "meals": [
      "toi",
      "anvat"
    ],
    "novelty": 5,
    "region": "bac",
    "desc": "Ròn tan, bùi béo bất ngờ, thử thách lòng dũng cảm của mọi tín đồ ẩm thực độc lạ!",
    "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "lau_ca_tam_sapa",
    "name": "Lẩu cá tầm Hoàng Liên Sơn",
    "emoji": "🐟",
    "price": 260000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 4,
    "region": "bac",
    "desc": "Thịt cá tầm dai ngọt không xương dăm, sụn cá giòn sần sật nhúng măng cay Tây Bắc đỉnh chóp.",
    "image": "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "nem_chua_ran_ngo_tam_thuong",
    "name": "Nem chua rán ngõ Tạm Thương",
    "emoji": "🍢",
    "price": 35000,
    "meals": [
      "anvat"
    ],
    "novelty": 0,
    "region": "bac",
    "desc": "Chiếc nem dẻo quánh tẩm bột chiên xù rộm vàng, chấm tương ớt cay xè tán gẫu cùng hội bạn.",
    "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "banh_gio_nong_dong_cac",
    "name": "Bánh giò nóng chả cốm xúc xích",
    "emoji": "🥟",
    "price": 30000,
    "meals": [
      "sang",
      "anvat"
    ],
    "novelty": 0,
    "region": "bac",
    "desc": "Vỏ bánh núng nính mềm tan, nhân thịt băm mộc nhĩ đậm đà kẹp thêm miếng giò tai giòn rụm.",
    "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "tra_chanh_cho_gao",
    "name": "Trà chanh phố Nhà Thờ & hướng dương",
    "emoji": "🍋",
    "price": 20000,
    "meals": [
      "anvat"
    ],
    "novelty": 0,
    "region": "bac",
    "desc": "Vị chát nhẹ của trà lài hòa cùng chanh tươi chua dịu, combo chuẩn chỉnh ngồi vỉa hè chém gió xuyên đêm.",
    "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "banh_tom_ho_tay",
    "name": "Bánh tôm Hồ Tây",
    "emoji": "🦐",
    "price": 50000,
    "meals": [
      "trua",
      "anvat"
    ],
    "novelty": 2,
    "region": "bac",
    "desc": "Khoai lang thái sợi vàng ươm ôm trọn chú tôm sông tươi ngọt, chấm nước mắm đu đủ giòn sần sật.",
    "image": "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "bun_ca_cham_hai_phong",
    "name": "Bánh đa cua Hải Phòng chả lá lốt",
    "emoji": "🦀",
    "price": 45000,
    "meals": [
      "sang",
      "trua",
      "toi"
    ],
    "novelty": 1,
    "region": "bac",
    "desc": "Sợi bánh đa đỏ nâu dai mềm tắm trong nước dùng cua đồng sánh đỏ, thêm chả lá lốt thơm nức mũi.",
    "image": "https://images.unsplash.com/photo-1576577445504-6af96477db52?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "banh_mi_cay_hai_phong",
    "name": "Bánh mì que cay Hải Phòng (chục cái)",
    "emoji": "🥖",
    "price": 30000,
    "meals": [
      "sang",
      "anvat"
    ],
    "novelty": 1,
    "region": "bac",
    "desc": "Chiếc bánh mì nhỏ bằng ngón tay quết đẫm pate béo ngậy, chấm chí chương cay xè tê tái.",
    "image": "https://images.unsplash.com/photo-1576577445504-6af96477db52?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "bun_bo_hue_dac_biet",
    "name": "Bún bò Huế giò heo chả cua",
    "emoji": "🥩",
    "price": 55000,
    "meals": [
      "sang",
      "trua",
      "toi"
    ],
    "novelty": 1,
    "region": "trung",
    "desc": "Nước dùng nồng nàn hương sả ruốc quyến rũ, khoanh giò gân béo mềm cắn ngập chân răng.",
    "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "mi_quang_ech",
    "name": "Mì Quảng ếch om chuối đậu",
    "emoji": "🍜",
    "price": 45000,
    "meals": [
      "sang",
      "trua",
      "toi"
    ],
    "novelty": 2,
    "region": "trung",
    "desc": "Sợi mì nghệ vàng óng chan nước nhưn đậm đà, thịt ếch đồng ngọt chắc thêm hạt đậu phộng bùi bùi.",
    "image": "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "cao_lau_hoi_an",
    "name": "Cao lầu Hội An thịt xíu",
    "emoji": "🥢",
    "price": 45000,
    "meals": [
      "sang",
      "trua",
      "toi"
    ],
    "novelty": 2,
    "region": "trung",
    "desc": "Sợi mì ngâm tro củi cù lao Chàm dai sựt, thịt xá xíu đậm vị hòa cùng da heo chiên giòn tan.",
    "image": "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "banh_beo_chen_hue",
    "name": "Khay bánh bèo chén tôm cháy (10 chén)",
    "emoji": "🥣",
    "price": 35000,
    "meals": [
      "sang",
      "anvat"
    ],
    "novelty": 1,
    "region": "trung",
    "desc": "Mặt bánh xoáy tròn lõm ở giữa rắc tôm cháy đỏ hồng, tóp mỡ giòn rụm chan nước mắm ớt xanh ngọt nhẹ.",
    "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "banh_nam_loc_hue",
    "name": "Đĩa bánh bột lọc trần & bánh nậm",
    "emoji": "🥟",
    "price": 30000,
    "meals": [
      "sang",
      "anvat"
    ],
    "novelty": 1,
    "region": "trung",
    "desc": "Bột lọc trong veo lộ con tôm đỏ au rim mặn ngọt, cắn vào dai sần sật đã miệng vô cùng.",
    "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "banh_xeo_tom_nhay_binh_dinh",
    "name": "Bánh xèo tôm nhảy Bình Định",
    "emoji": "🥞",
    "price": 45000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 2,
    "region": "trung",
    "desc": "Tôm đất tươi rói nhảy tanh tách trên chảo nóng, viền bánh giòn tan cuộn bánh tráng xoài xanh.",
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "banh_canh_ca_loc_quang_tri",
    "name": "Bánh canh cá lóc vạc giường",
    "emoji": "🍜",
    "price": 35000,
    "meals": [
      "sang",
      "trua",
      "toi"
    ],
    "novelty": 2,
    "region": "trung",
    "desc": "Sợi bánh cán tay dai mềm, thịt cá lóc đồng um củ nén cay thơm rực lửa ấm bụng ngày mưa.",
    "image": "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "com_ga_tam_ky",
    "name": "Cơm gà Tam Kỳ xé phay",
    "emoji": "🍗",
    "price": 55000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 1,
    "region": "trung",
    "desc": "Cơm nấu nước luộc gà vàng ươm hạt ngọc, thịt gà thả vườn chắc ngọt trộn gỏi hành tây chua cay.",
    "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "com_hen_song_huong",
    "name": "Cơm hến Huế mắm ruốc",
    "emoji": "🍚",
    "price": 25000,
    "meals": [
      "sang",
      "trua"
    ],
    "novelty": 2,
    "region": "trung",
    "desc": "Hến xào đậm đà, tóp mỡ, hoa chuối bào thêm thìa ruốc Huế cay xé lưỡi toát mồ hôi giải cảm.",
    "image": "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "nem_nuong_nha_trang",
    "name": "Nem nướng Nha Trang cuốn ram",
    "emoji": "🌯",
    "price": 55000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 1,
    "region": "trung",
    "desc": "Xiên nem nướng thơm ngậy cuộn bánh tráng, dưa leo chua ngọt chấm bát nước chấm gan thịt sánh mịn.",
    "image": "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "banh_can_da_lat",
    "name": "Bánh căn trứng cút xíu mại Đà Lạt",
    "emoji": "🍳",
    "price": 35000,
    "meals": [
      "sang",
      "toi",
      "anvat"
    ],
    "novelty": 1,
    "region": "trung",
    "desc": "Bánh nướng khuôn đất giòn đáy mềm mặt, chấm ngập chén nước mắm mỡ hành xíu mại nóng hổi.",
    "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "banh_trang_nuong_da_lat",
    "name": "Bánh tráng nướng trứng xúc xích phô mai",
    "emoji": "🍕",
    "price": 25000,
    "meals": [
      "toi",
      "anvat"
    ],
    "novelty": 0,
    "region": "trung",
    "desc": "\"Pizza Việt Nam\" nướng trên than hồng thơm lừng bơ phô mai, cắn miếng giòn rụm vui tai.",
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "lau_ga_la_e_da_lat",
    "name": "Lẩu gà lá é Phú Yên / Đà Lạt",
    "emoji": "🍲",
    "price": 180000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 3,
    "region": "trung",
    "desc": "Nồi nước dùng cay nồng ớt xiêm xanh nhúng mớ lá é thơm the the giải ngấy tuyệt đối.",
    "image": "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "mat_ca_ngu_dai_duong",
    "name": "Mắt cá ngừ đại dương tiềm thuốc bắc",
    "emoji": "🐟",
    "price": 65000,
    "meals": [
      "toi"
    ],
    "novelty": 4,
    "region": "trung",
    "desc": "Đặc sản Phú Yên bổ dưỡng, béo ngậy vị bùi bùi trong thố đất nghi ngút khói thuốc bắc.",
    "image": "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "cha_ram_dat_binh_dinh",
    "name": "Chả ram tôm đất giòn tan",
    "emoji": "🥢",
    "price": 45000,
    "meals": [
      "trua",
      "toi",
      "anvat"
    ],
    "novelty": 2,
    "region": "trung",
    "desc": "Từng cuốn chả nhỏ xinh giòn rụm từ vỏ đến nhân tôm thịt, ăn hoài không biết chán.",
    "image": "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "bun_sua_nha_trang",
    "name": "Bún sứa Nha Trang chả cá thu",
    "emoji": "🍜",
    "price": 40000,
    "meals": [
      "sang",
      "trua"
    ],
    "novelty": 2,
    "region": "trung",
    "desc": "Thịt sứa giòn sần sật mọng nước biển, chan nước dùng nấu từ cá liệt thanh ngọt tự nhiên.",
    "image": "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "banh_it_la_gai",
    "name": "Bánh ít lá gai Bình Định",
    "emoji": "🍙",
    "price": 12000,
    "meals": [
      "anvat"
    ],
    "novelty": 2,
    "region": "trung",
    "desc": "Vỏ bánh đen tuyền thơm ngát hương lá gai, nhân đậu xanh dừa sợi ngọt ngào đậm tình xứ Nẫu.",
    "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "don_song_tra",
    "name": "Don sông Trà bánh tráng nướng",
    "emoji": "🥣",
    "price": 25000,
    "meals": [
      "sang",
      "anvat"
    ],
    "novelty": 3,
    "region": "trung",
    "desc": "Tô nước don ngọt lịm chan bánh tráng sống dẻo thơm, bẻ thêm bánh tráng nướng giòn rụm vào nhai sướng miệng.",
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "goi_ca_mai_ninh_thuan",
    "name": "Gỏi cá mai Ninh Thuận nước lèo đậu phộng",
    "emoji": "🥗",
    "price": 90000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 3,
    "region": "trung",
    "desc": "Cá mai rút xương trong suốt tái chanh giòn ngọt, cuốn bánh tráng rau rừng chấm nước sốt sền sệt béo bùi.",
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "tom_hum_nha_trang",
    "name": "Tôm hùm baby nướng bơ tỏi Nha Trang",
    "emoji": "🦞",
    "price": 320000,
    "meals": [
      "toi"
    ],
    "novelty": 4,
    "region": "trung",
    "desc": "Thịt tôm hùm chắc nịch mọng nước phủ đẫm sốt bơ tỏi thơm lừng cháy cạnh, chuẩn vị hoàng gia sang xịn mịn.",
    "image": "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "com_tam_suon_bi_cha",
    "name": "Cơm tấm sườn bì chả trứng ốp la",
    "emoji": "🍛",
    "price": 50000,
    "meals": [
      "sang",
      "trua",
      "toi"
    ],
    "novelty": 0,
    "region": "nam",
    "desc": "Hạt tấm thơm bùi, miếng sườn nướng mật ong óng ả thơm nức góc ngã tư kèm chén mỡ hành tóp mỡ.",
    "image": "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "hu_tieu_nam_vang_kho",
    "name": "Hủ tiếu Nam Vang khô lòng tôm",
    "emoji": "🍜",
    "price": 55000,
    "meals": [
      "sang",
      "trua",
      "toi"
    ],
    "novelty": 1,
    "region": "nam",
    "desc": "Sợi hủ tiếu dai dai trộn sốt tương đen bí truyền, ăn kèm chén nước lèo ngọt thơm tủy xương.",
    "image": "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "banh_mi_thit_cha_sai_gon",
    "name": "Bánh mì thịt chả pate xíu mại",
    "emoji": "🥖",
    "price": 25000,
    "meals": [
      "sang",
      "trua",
      "anvat"
    ],
    "novelty": 0,
    "region": "nam",
    "desc": "Vỏ giòn rụm rớt vụn khắp áo, pate béo ngậy hòa quyện dưa chua ngò rí cắn miếng ngập chân răng.",
    "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "banh_canh_cua_gio_heo",
    "name": "Bánh canh cua thịt giò heo",
    "emoji": "🍲",
    "price": 65000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 2,
    "region": "nam",
    "desc": "Nước dùng sền sệt đỏ au gạch cua, sợi bánh canh bột gạo dai mềm ôm trọn tảng thịt cua chắc nịch.",
    "image": "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "lau_mam_mien_tay",
    "name": "Lẩu mắm miền Tây cá linh bông điên điển",
    "emoji": "🥘",
    "price": 180000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 3,
    "region": "nam",
    "desc": "Hương mắm cá sặc thơm nồng đặc trưng, nhúng cả rổ rau đồng cỏ nội tươi mơn mởn đã cái nư.",
    "image": "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "ca_tai_tuong_chien_xu",
    "name": "Cá tai tượng chiên xù cuốn bánh tráng",
    "emoji": "🐟",
    "price": 170000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 3,
    "region": "nam",
    "desc": "Cá dựng vảy giòn rụm như nhung, cuốn bánh tráng rau rừng chấm mắm me chua ngọt tê đầu lưỡi.",
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "bo_ne_sai_gon",
    "name": "Bò né chảo gang trứng pate bánh mì",
    "emoji": "🥩",
    "price": 50000,
    "meals": [
      "sang",
      "trua",
      "toi"
    ],
    "novelty": 1,
    "region": "nam",
    "desc": "Thịt bò ướp mềm xèo xèo trên chảo gang hình con bò, quết miếng pate chấm bánh mì nóng giòn.",
    "image": "https://images.unsplash.com/photo-1600454309261-3dc9b7597637?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "bun_mam_soc_trang",
    "name": "Bún mắm Sóc Trăng heo quay tôm sú",
    "emoji": "🍜",
    "price": 60000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 2,
    "region": "nam",
    "desc": "Nước lèo đậm đà mùi ngải bún và sả băm, miếng heo quay da giòn rụm ngâm nước lèo vẫn bùi ngậy.",
    "image": "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "pha_lau_bo_banh_mi",
    "name": "Phá lấu bò nước dừa chấm bánh mì",
    "emoji": "🍲",
    "price": 35000,
    "meals": [
      "trua",
      "toi",
      "anvat"
    ],
    "novelty": 1,
    "region": "nam",
    "desc": "Lòng bò nấu nước dừa béo bùi thơm lừng ngũ vị hương, chấm nước mắm tắc chua cay xé họng.",
    "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "banh_trang_tron_sai_gon",
    "name": "Bánh tráng trộn bò khô trứng cút mỡ hành",
    "emoji": "🥗",
    "price": 25000,
    "meals": [
      "anvat"
    ],
    "novelty": 0,
    "region": "nam",
    "desc": "Vị chua của xoài, mặn của muối tôm Tây Ninh, dai của bánh tráng và cay của sa tế khiến bạn không dừng đũa nổi.",
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "banh_xeo_mien_tay_khong_lo",
    "name": "Bánh xèo miền Tây củ hũ dừa tôm thịt",
    "emoji": "🥞",
    "price": 55000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 1,
    "region": "nam",
    "desc": "Bánh to như cái nón lá, rìa bánh mỏng dính giòn tan, cuốn lá cải cay chấm nước mắm ớt chua ngọt.",
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "goi_cuon_tom_thit",
    "name": "Gỏi cuốn tôm thịt chấm tương đen (4 cuốn)",
    "emoji": "🌯",
    "price": 35000,
    "meals": [
      "sang",
      "trua",
      "anvat"
    ],
    "novelty": 0,
    "region": "nam",
    "desc": "Tôm đỏ thịt trắng nổi bật qua lớp bánh tráng mỏng, chấm tương ngọt rắc đậu phộng bùi bùi the the.",
    "image": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "hu_tieu_go_dem_khuya",
    "name": "Hủ tiếu gõ vỉa hè sườn bò viên",
    "emoji": "🍜",
    "price": 25000,
    "meals": [
      "toi",
      "anvat"
    ],
    "novelty": 0,
    "region": "nam",
    "desc": "Tiếng lách cách gõ thâu đêm, tô hủ tiếu ngọt lịm từ củ cải khô và khô mực cứu đói mọi cú đêm.",
    "image": "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "chao_long_nam_bo",
    "name": "Cháo lòng dồi chiên giòn bánh hỏi",
    "emoji": "🥣",
    "price": 40000,
    "meals": [
      "sang",
      "trua",
      "toi"
    ],
    "novelty": 1,
    "region": "nam",
    "desc": "Dồi rán béo ngậy mùi rau húng thơm lừng, chén cháo huyết nâu sánh mịn rắc tiêu cay ấm sực.",
    "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "chuoi_nep_nuong_nuoc_cot_dua",
    "name": "Chuối nếp nướng nước cốt dừa chan mè",
    "emoji": "🍌",
    "price": 20000,
    "meals": [
      "anvat"
    ],
    "novelty": 1,
    "region": "nam",
    "desc": "Vỏ nếp nướng xém than giòn rụm bọc trái chuối sứ ngọt lịm, chan nước cốt dừa béo ngậy mê mẩn.",
    "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "che_ba_mau_sai_gon",
    "name": "Chè ba màu nước cốt dừa đá bào",
    "emoji": "🍧",
    "price": 20000,
    "meals": [
      "anvat"
    ],
    "novelty": 0,
    "region": "nam",
    "desc": "Đậu đỏ bùi, đậu xanh mịn, thạch lựu giòn chan cốt dừa béo ngọt đập tan cái nắng Sài Gòn oi ả.",
    "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "sui_cao_ha_ton_quyen",
    "name": "Sủi cảo tôm tươi Hà Tôn Quyền",
    "emoji": "🥟",
    "price": 65000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 2,
    "region": "nam",
    "desc": "Con tôm tươi nguyên vỏ bọc trong lớp bột mỏng dai, cắn ngập miệng cảm nhận vị ngọt giòn sần sật.",
    "image": "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "com_chay_cha_bong_sai_gon",
    "name": "Cơm cháy chà bông mỡ hành giòn rụm",
    "emoji": "🍘",
    "price": 35000,
    "meals": [
      "anvat"
    ],
    "novelty": 0,
    "region": "nam",
    "desc": "Từng hạt cơm nếp nở phồng giòn tan, phủ lớp chà bông dày cộp chan mỡ hành ớt cay xè.",
    "image": "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "oc_huong_sot_trung_muoi",
    "name": "Ốc hương sốt trứng muối bánh mì",
    "emoji": "🐌",
    "price": 110000,
    "meals": [
      "toi",
      "anvat"
    ],
    "novelty": 3,
    "region": "nam",
    "desc": "Thịt ốc hương giòn ngọt sần sật tắm trong dòng sốt trứng muối vàng óng béo ngậy thơm nức.",
    "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "cua_ca_mau_sot_me",
    "name": "Cua Cà Mau sốt me chua cay bánh mì",
    "emoji": "🦀",
    "price": 280000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 4,
    "region": "nam",
    "desc": "Cua thịt chắc nịch gạch son đầy ắp, nước sốt me chua ngọt đậm đà vét sạch từng mẩu bánh mì.",
    "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "bo_to_tay_ninh_nuong",
    "name": "Bò tơ Tây Ninh nướng y chấm mắm nêm",
    "emoji": "🥩",
    "price": 190000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 3,
    "region": "nam",
    "desc": "Thịt bò tơ da mỏng mềm ngọt tự nhiên, nướng xèo xèo trên than hồng thơm lừng góc quán.",
    "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "trung_vit_lon_rau_ram",
    "name": "Trứng vịt lộn luộc gừng rau răm (2 quả)",
    "emoji": "🥚",
    "price": 18000,
    "meals": [
      "sang",
      "toi",
      "anvat"
    ],
    "novelty": 0,
    "region": "toanquoc",
    "desc": "Nước cốt ngọt lịm từ vỏ, cắn miếng lòng đỏ béo bùi thêm ngọn rau răm gừng tươi ấm nồng.",
    "image": "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "banh_bao_nhan_thit_trung_cut",
    "name": "Bánh bao nhân thịt trứng cút nóng hổi",
    "emoji": "🥟",
    "price": 18000,
    "meals": [
      "sang",
      "anvat"
    ],
    "novelty": 0,
    "region": "toanquoc",
    "desc": "Vỏ bánh trắng phau xốp mềm như bông, nhân thịt mộc nhĩ thơm nức ôm trọn hai quả trứng cút xinh xinh.",
    "image": "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "banh_tieu_xoi_la_dua",
    "name": "Bánh tiêu kẹp xôi lá dứa muối mè",
    "emoji": "🥠",
    "price": 12000,
    "meals": [
      "sang",
      "anvat"
    ],
    "novelty": 1,
    "region": "toanquoc",
    "desc": "Bánh tiêu phồng xốp thơm mè kẹp nếp xôi lá dứa dẻo thơm, món ăn vặt tuổi thơ giá rẻ như cho.",
    "image": "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "banh_chuoi_chien_gion",
    "name": "Bánh chuối chiên phồng mè đen (2 cái)",
    "emoji": "🍌",
    "price": 15000,
    "meals": [
      "anvat"
    ],
    "novelty": 0,
    "region": "toanquoc",
    "desc": "Trái chuối sứ ép dẹp tẩm bột chiên vàng ươm phồng rộp, ngọt thanh tự nhiên giòn rụm khó cưỡng.",
    "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "tra_sua_tran_chau_duong_den",
    "name": "Trà sữa trân châu đường đen full topping",
    "emoji": "🧋",
    "price": 35000,
    "meals": [
      "anvat"
    ],
    "novelty": 0,
    "region": "toanquoc",
    "desc": "Trân châu dẻo dai ấm nóng quyện đường nâu hổ phách, sữa tươi thanh mát hút một hơi sảng khoái tức thì.",
    "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "ca_phe_muoi_hue",
    "name": "Cà phê muối kem béo ngậy",
    "emoji": "☕",
    "price": 25000,
    "meals": [
      "sang",
      "anvat"
    ],
    "novelty": 1,
    "region": "trung",
    "desc": "Vị mặn mòi tinh tế của lớp kem muối tôn lên độ đắng êm dịu của cà phê phin nguyên chất.",
    "image": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "ca_phe_trung_ha_noi",
    "name": "Cà phê trứng kem bọt bông Hà Nội",
    "emoji": "☕",
    "price": 35000,
    "meals": [
      "sang",
      "anvat"
    ],
    "novelty": 2,
    "region": "bac",
    "desc": "Lớp kem trứng đánh bông mịn như mây béo ngậy không chút tanh, hòa quyện cà phê phin đậm đà ngây ngất.",
    "image": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "chao_ech_singapore",
    "name": "Cháo ếch thố đá sốt cay xé lưỡi",
    "emoji": "🐸",
    "price": 65000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 2,
    "region": "toanquoc",
    "desc": "Thịt ếch rim sốt tương ớt đậm đặc xèo xèo sôi sục trong thố đất, rưới lên tô cháo trắng hành hoa thơm nồng.",
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "com_nieu_thit_kho_quet",
    "name": "Cơm niêu cháy giòn quẹt kho quẹt tóp mỡ",
    "emoji": "🍚",
    "price": 75000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 2,
    "region": "nam",
    "desc": "Lớp cơm cháy đập giòn rụm quanh niêu đất chấm tộ kho quẹt sánh kẹo ngọt ngào đầy ắp tóp mỡ giòn.",
    "image": "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "mi_tron_trung_long_dao",
    "name": "Mì trộn muối ớt tôm thịt trứng lòng đào",
    "emoji": "🍜",
    "price": 40000,
    "meals": [
      "trua",
      "toi",
      "anvat"
    ],
    "novelty": 1,
    "region": "nam",
    "desc": "Sợi mì Indomie giòn dai trộn muối ớt cay xè, lòng đào béo ngậy vỡ tan thấm đẫm từng sợi mì.",
    "image": "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "bun_dau_long_doi_ran",
    "name": "Bún đậu lòng dồi rán giòn chấm mắm tôm",
    "emoji": "🥢",
    "price": 60000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 2,
    "region": "bac",
    "desc": "Dồi sụn nướng than thơm phức, cuống họng lòng non giòn sần sật dành riêng cho dân sành mắm tôm.",
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "banh_canh_ghe_phu_quoc",
    "name": "Bánh canh ghẹ nguyên con Phú Quốc",
    "emoji": "🦀",
    "price": 85000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 3,
    "region": "nam",
    "desc": "Con ghẹ biển xanh chắc nịch nằm trọn trên tô bánh canh dẻo thơm ngập tràn hương vị đại dương.",
    "image": "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "bun_quay_phu_quoc",
    "name": "Bún quậy tôm mực chả cá Kiến Xây",
    "emoji": "🥣",
    "price": 55000,
    "meals": [
      "sang",
      "trua",
      "toi"
    ],
    "novelty": 3,
    "region": "nam",
    "desc": "Bún ép trực tiếp tại chỗ, chả tôm quết tươi rói chín tới trong nước luộc sôi sùng sục kèm chén muối ớt tự pha.",
    "image": "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "canh_bun_rau_nha_que",
    "name": "Canh bún rau muống riêu cua tóp mỡ",
    "emoji": "🍜",
    "price": 35000,
    "meals": [
      "sang",
      "trua"
    ],
    "novelty": 1,
    "region": "nam",
    "desc": "Sợi bún to tròn như đũa ngấm nước lèo cam đỏ, rau muống luộc giòn sần sật cắn miếng tóp mỡ béo bùi.",
    "image": "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "banh_mi_chao_cot_dien",
    "name": "Bánh mi chảo xíu mại xúc xích phô mai",
    "emoji": "🍳",
    "price": 45000,
    "meals": [
      "sang",
      "trua",
      "toi"
    ],
    "novelty": 1,
    "region": "toanquoc",
    "desc": "Sốt tiêu đỏ sền sệt bốc khói nghi ngút, chấm miếng bánh mì nóng giòn vào lòng đỏ trứng ốp la tan chảy.",
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "goi_du_du_ba_khia",
    "name": "Gỏi đu đủ giã ba khía cay toát mồ hôi",
    "emoji": "🥗",
    "price": 40000,
    "meals": [
      "trua",
      "anvat"
    ],
    "novelty": 2,
    "region": "nam",
    "desc": "Ba khía muối đậm đà giã cùng đu đủ sợi giòn tan, vị chua cay mặn nồng kích thích vị giác tột đỉnh.",
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "sup_cua_oc_heo_bac_thao",
    "name": "Súp cua óc heo bắc thảo thập cẩm",
    "emoji": "🥣",
    "price": 38000,
    "meals": [
      "sang",
      "toi",
      "anvat"
    ],
    "novelty": 2,
    "region": "nam",
    "desc": "Tô súp sánh đặc ngập thịt gà xé, trứng cút, bắp ngọt và miếng óc heo béo ngậy mềm như bơ lụa.",
    "image": "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "khoai_lang_lac_pho_mai",
    "name": "Khoai lang lắc xí muội phô mai nóng hổi",
    "emoji": "🍠",
    "price": 20000,
    "meals": [
      "anvat"
    ],
    "novelty": 0,
    "region": "toanquoc",
    "desc": "Miếng khoai giòn ngoài ngọt bùi trong, phủ lớp bột phô mai xí muội mặn ngọt ăn một mạch hết veo.",
    "image": "https://images.unsplash.com/photo-1576577445504-6af96477db52?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "chan_ga_sa_tac",
    "name": "Chân gà rút xương ngâm sả tắc chua cay",
    "emoji": "🍗",
    "price": 55000,
    "meals": [
      "toi",
      "anvat"
    ],
    "novelty": 1,
    "region": "toanquoc",
    "desc": "Chân gà giòn sần sật ngấm đẫm vị chua cay mặn ngọt của nước tắc sả ớt, món nhậu bén mồi số một.",
    "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "banh_trang_cuon_bo_sot_me",
    "name": "Bánh tráng cuốn bơ sốt me chua cay",
    "emoji": "🌯",
    "price": 25000,
    "meals": [
      "anvat"
    ],
    "novelty": 0,
    "region": "nam",
    "desc": "Bánh tráng dẻo cuộn trứng cút, rau răm, ruốc tép phủ đẫm sốt bơ béo và sốt me chua ngọt lịm tim.",
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "xien_ban_pho_dem",
    "name": "Combo cá viên chiên xúc xích đậu bắp",
    "emoji": "🍢",
    "price": 35000,
    "meals": [
      "toi",
      "anvat"
    ],
    "novelty": 0,
    "region": "toanquoc",
    "desc": "Chiên vàng phồng giòn chấm tương đen tương đỏ tương ớt xì dầu, món ăn vặt quốc dân của mọi học sinh sinh viên.",
    "image": "https://images.unsplash.com/photo-1576577445504-6af96477db52?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "kem_bo_da_lat",
    "name": "Kem bơ sầu riêng béo ngậy Đà Lạt",
    "emoji": "🍨",
    "price": 35000,
    "meals": [
      "anvat"
    ],
    "novelty": 1,
    "region": "trung",
    "desc": "Sinh tố bơ sáp đặc quánh bùi bùi ăn cùng viên kem dừa ngọt mát và chút dừa khô giòn rụm.",
    "image": "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "tau_hu_nong_nuoc_duong_gung",
    "name": "Tàu hũ nóng nước đường gừng trân châu",
    "emoji": "🍮",
    "price": 15000,
    "meals": [
      "sang",
      "anvat"
    ],
    "novelty": 0,
    "region": "toanquoc",
    "desc": "Từng lát tàu hũ non mềm mịn tan ngay trên đầu lưỡi, thơm lừng vị gừng cay nồng và nước đường thốt nốt.",
    "image": "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "chao_hau_sua_nong",
    "name": "Cháo hàu sữa tiêu đen hành phi",
    "emoji": "🥣",
    "price": 45000,
    "meals": [
      "sang",
      "toi"
    ],
    "novelty": 2,
    "region": "trung",
    "desc": "Những chú hàu sữa béo múp ngậy vị sữa biển ngọt lịm nấu cùng cháo sánh rắc ngập tiêu hạt cay nồng.",
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "bun_ca_cay_hai_phong",
    "name": "Bún cá cay lòng cá chả cá Hải Phòng",
    "emoji": "🍜",
    "price": 50000,
    "meals": [
      "sang",
      "trua",
      "toi"
    ],
    "novelty": 2,
    "region": "bac",
    "desc": "Miếng cá rô phi chiên giòn tan, dạ dày cá giòn sật trong nước dùng chua cay đượm nồng vị đất Cảng.",
    "image": "https://images.unsplash.com/photo-1576577445504-6af96477db52?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "pho_sot_vang_ha_noi",
    "name": "Phở bò sốt vang gân mềm bánh mì",
    "emoji": "🍲",
    "price": 55000,
    "meals": [
      "sang",
      "trua",
      "toi"
    ],
    "novelty": 1,
    "region": "bac",
    "desc": "Màu đỏ rượu vang quyến rũ, miếng bò gân ninh dẻo quánh thơm nức mùi quế hồi thảo quả.",
    "image": "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "goi_cuon_diep_thit_heo",
    "name": "Gỏi cuốn lá cải thịt heo chấm mắm nêm",
    "emoji": "🌯",
    "price": 40000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 2,
    "region": "trung",
    "desc": "Vị the the cay nồng của lá cải bẹ xanh ôm trọn miếng thịt luộc ba chỉ và chấm ngập bát mắm nêm thơm lừng.",
    "image": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "chao_luon_xu_nghe",
    "name": "Cháo lươn cay Nghệ An hành tăm",
    "emoji": "🥣",
    "price": 45000,
    "meals": [
      "sang",
      "trua",
      "toi"
    ],
    "novelty": 2,
    "region": "trung",
    "desc": "Thịt lươn đồng xào nghệ vàng óng cay xé họng, dậy mùi củ nén hành tăm đặc trưng xứ Nghệ.",
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "banh_muot_ram_ha_tinh",
    "name": "Bánh mướt ram giòn giò lụa Hà Tĩnh",
    "emoji": "🥟",
    "price": 35000,
    "meals": [
      "sang",
      "trua"
    ],
    "novelty": 2,
    "region": "trung",
    "desc": "Cuốn ram rán giòn rụm bọc trong lá bánh mướt mềm mượt như tơ, chấm chén nước mắm chanh tỏi ớt.",
    "image": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "banh_khoai_hue",
    "name": "Bánh khoái giòn rụm nước lèo gan nếp",
    "emoji": "🥞",
    "price": 40000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 2,
    "region": "trung",
    "desc": "Vỏ bánh dày vàng rộm giòn tan đẫm nhân tôm thịt nấm hương, chấm chén nước lèo gan bùi béo đậm đà.",
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "com_ga_hoi_an",
    "name": "Cơm gà xé Hội An tương ớt rim",
    "emoji": "🍗",
    "price": 55000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 1,
    "region": "trung",
    "desc": "Đĩa cơm gà vàng bóng, gỏi rau răm hành tây giòn the the hòa cùng vị ớt rim Hội An cay ngọt độc nhất vô nhị.",
    "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "banh_da_xuc_hen",
    "name": "Hến xào xúc bánh đa mè đen giòn",
    "emoji": "🐚",
    "price": 45000,
    "meals": [
      "trua",
      "toi",
      "anvat"
    ],
    "novelty": 2,
    "region": "trung",
    "desc": "Hến nhỏ ngọt thịt xào thơm cùng rau răm ớt bột, bẻ miếng bánh đa mè đen xúc một ngụm giòn rụm sảng khoái.",
    "image": "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "banh_hoi_long_heo",
    "name": "Bánh hỏi cháo lòng Quy Nhơn",
    "emoji": "🥢",
    "price": 45000,
    "meals": [
      "sang",
      "trua"
    ],
    "novelty": 2,
    "region": "trung",
    "desc": "Sợi bánh hỏi mỏng manh thoa mỡ hẹ xanh mướt, ăn cùng đĩa lòng heo tươi luộc giòn và bát cháo huyết nóng hổi.",
    "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "lau_ech_mang_cay",
    "name": "Lẩu ếch xào măng cay sa tế",
    "emoji": "🥘",
    "price": 175000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 2,
    "region": "bac",
    "desc": "Đùi ếch vàng ươm xào săn cùng măng chua cay nồng, nhúng rau muống giòn ngọt trong nồi nước lẩu sôi sục.",
    "image": "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "vit_quay_lang_son",
    "name": "Vịt quay lá mắc mật Lạng Sơn giòn da",
    "emoji": "🦆",
    "price": 160000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 3,
    "region": "bac",
    "desc": "Da vịt nâu óng giòn rụm, thịt mềm mọng nước thơm nức hương lá mắc mật chấm nước tương sánh mịn.",
    "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "be_thui_cau_mong",
    "name": "Bê thui Cầu Mống bánh tráng mắm nêm",
    "emoji": "🥩",
    "price": 140000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 3,
    "region": "trung",
    "desc": "Thịt bê hồng hào tái chín mềm ngọt, bì bê vàng trong giòn sần sật cuộn rau rừng chấm mắm nêm chuẩn vị.",
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "com_chay_ninh_binh",
    "name": "Cơm cháy Ninh Bình sốt dê xào lăn",
    "emoji": "🍘",
    "price": 95000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 3,
    "region": "bac",
    "desc": "Miếng cơm cháy đáy nồi phơi khô rán phồng giòn tan, rưới sốt tim cật dê nóng sốt béo ngậy thơm lừng.",
    "image": "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "banh_canh_trang_bang",
    "name": "Bánh canh Trảng Bàng giò heo rau rừng",
    "emoji": "🍜",
    "price": 50000,
    "meals": [
      "sang",
      "trua",
      "toi"
    ],
    "novelty": 2,
    "region": "nam",
    "desc": "Sợi bánh canh trắng trong từ bột gạo nàng thơm, nước dùng thanh trong veo ăn kèm đĩa rau rừng Tây Ninh tươi mát.",
    "image": "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "nem_nuong_ninh_hoa",
    "name": "Nem nướng Ninh Hòa cuộn bánh tráng chiên",
    "emoji": "🌯",
    "price": 50000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 1,
    "region": "trung",
    "desc": "Nem thịt nướng than hoa thơm lừng cuộn cùng ram giòn rụm và sốt tương nếp gan bùi ngậy.",
    "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "oc_len_xao_dua",
    "name": "Ốc len xào nước cốt dừa béo ngậy",
    "emoji": "🐌",
    "price": 60000,
    "meals": [
      "toi",
      "anvat"
    ],
    "novelty": 2,
    "region": "nam",
    "desc": "Hút một hơi nghe cái rột, thịt ốc béo giòn hòa quyện dòng nước cốt dừa ngậy thơm nức mũi mùi rau răm.",
    "image": "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "ngheu_hap_sa_ot",
    "name": "Nghêu hai cùi hấp sả ớt lá quế",
    "emoji": "🦪",
    "price": 60000,
    "meals": [
      "trua",
      "toi",
      "anvat"
    ],
    "novelty": 1,
    "region": "toanquoc",
    "desc": "Nghêu mọng nước ngọt lịm từ biển, húp ngụm nước hấp sả ớt ấm nồng cay xè giải cảm ngày mưa gió.",
    "image": "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "banh_mi_xiu_mai_da_lat",
    "name": "Bánh mì xíu mại chén nóng Đà Lạt",
    "emoji": "🥖",
    "price": 25000,
    "meals": [
      "sang",
      "anvat"
    ],
    "novelty": 1,
    "region": "trung",
    "desc": "Chén xíu mại bốc khói ngập mỡ hành và tóp mỡ giòn, bẻ mẩu bánh mì nóng giòn chấm đẫm vào lòng bàn tay.",
    "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "banh_trang_kep_da_nang",
    "name": "Bánh tráng kẹp pate trứng cút Đà Nẵng",
    "emoji": "🌮",
    "price": 20000,
    "meals": [
      "anvat"
    ],
    "novelty": 1,
    "region": "trung",
    "desc": "Nướng mềm dẻo hoặc giòn rụm kẹp đẫm pate thơm phức, chấm sốt bò khô rim cay ngọt tê đầu lưỡi.",
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "kem_trang_tien",
    "name": "Kem que Tràng Tiền cốm dừa đậu xanh",
    "emoji": "🍦",
    "price": 15000,
    "meals": [
      "anvat"
    ],
    "novelty": 0,
    "region": "bac",
    "desc": "Cây kem ký ức tuổi thơ đứng ăn bên bờ Hồ Gươm, ngọt mát bùi thơm hương nếp non cốm Hà Nội.",
    "image": "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "che_thai_sau_rieng",
    "name": "Chè Thái sầu riêng Đà Nẵng thạch sữa",
    "emoji": "🍧",
    "price": 35000,
    "meals": [
      "anvat"
    ],
    "novelty": 1,
    "region": "trung",
    "desc": "Múi sầu riêng tươi thơm nức mũi quyện trong nước cốt sữa tươi thanh mát và các loại thạch giòn rụm.",
    "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "chao_ca_loc_rau_dang",
    "name": "Cháo cá lóc đồng rau đắng miền Tây",
    "emoji": "🥣",
    "price": 45000,
    "meals": [
      "sang",
      "toi"
    ],
    "novelty": 2,
    "region": "nam",
    "desc": "Thịt cá lóc đồng trắng phau ngọt thơm, nhúng nắm rau đắng xanh mướt vị nhẫn đắng tan biến nhường chỗ cho vị ngọt thanh.",
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "banh_tam_bi_nuoc_cot_dua",
    "name": "Bánh tằm bì nước cốt dừa rau thơm",
    "emoji": "🍜",
    "price": 35000,
    "meals": [
      "sang",
      "trua",
      "anvat"
    ],
    "novelty": 3,
    "region": "nam",
    "desc": "Sợi bánh tằm se tay dai mềm, rưới nước cốt dừa béo ngậy trộn cùng bì thịt thơm lừng và nước mắm chua ngọt lạ miệng.",
    "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "bun_nuoc_leo_soc_trang",
    "name": "Bún nước lèo Sóc Trăng cá lóc quay giòn",
    "emoji": "🍜",
    "price": 45000,
    "meals": [
      "sang",
      "trua",
      "toi"
    ],
    "novelty": 3,
    "region": "nam",
    "desc": "Mùi ngải bún thanh mát hòa quyện vị mắm bò hóc đậm đà, ăn kèm bắp chuối bào và hẹ non tươi mát.",
    "image": "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "com_lam_ga_nuong_tay_nguyen",
    "name": "Cơm lam nứa ống gà nướng sa lửa",
    "emoji": "🍗",
    "price": 185000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 4,
    "region": "trung",
    "desc": "Gà đồi nướng than củi giòn bì thơm nồng mùi sả ớt rừng, ăn kèm cơm lam nếp nương dẻo quánh muối mè.",
    "image": "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "sa_sung_quan_lan",
    "name": "Sá sùng khô nướng than củi đảo Quan Lạn",
    "emoji": "✨",
    "price": 380000,
    "meals": [
      "toi"
    ],
    "novelty": 5,
    "region": "bac",
    "desc": "\"Vàng ròng của biển cả\", vị ngọt lịm đậm sâu khó nguyên liệu nào sánh kịp, mồi nhậu trứ danh của giới sành ăn.",
    "image": "https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "sam_bien_nuong_mo_hanh",
    "name": "Sam biển nướng mỡ hành trứng bùi",
    "emoji": "🦀",
    "price": 240000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 4,
    "region": "bac",
    "desc": "Đặc sản biển Quảng Ninh độc đáo, trứng sam bùi béo ngậy nướng trong chính mai sam thơm lừng mỡ hành.",
    "image": "https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "ba_ba_om_chuoi_dau",
    "name": "Ba ba om chuối đậu tía tô chảo gang",
    "emoji": "🥘",
    "price": 350000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 4,
    "region": "bac",
    "desc": "Thịt ba ba ngọt mềm đậm đà, nước sốt vàng ươm sánh mịn từ chuối xanh bùi ngậy và mẻ chua thanh dịu.",
    "image": "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "pho_tho_da_wagyu",
    "name": "Phở thố đá thịt bò Wagyu thượng hạng",
    "emoji": "🍲",
    "price": 250000,
    "meals": [
      "sang",
      "trua",
      "toi"
    ],
    "novelty": 3,
    "region": "toanquoc",
    "desc": "Nước dùng sôi sùng sục 100 độ C trong thố đá tự nhiên, tự tay nhúng từng lát bò Wagyu vân mỡ tuyệt mỹ.",
    "image": "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "buffet_hai_san_tom_cua",
    "name": "Đại tiệc buffet hải sản cua ghẹ tôm càng",
    "emoji": "🦞",
    "price": 399000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 3,
    "region": "toanquoc",
    "desc": "Thỏa thích chén tẹt ga tôm cua nướng mỡ hành, hàu nướng phô mai và ốc hương xào sốt me béo ngậy.",
    "image": "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "banh_trang_nuong_mam_ruoc_phan_thiet",
    "name": "Bánh tráng nướng mắm ruốc Phan Thiết cuộn tròn",
    "emoji": "🌯",
    "price": 20000,
    "meals": [
      "toi",
      "anvat"
    ],
    "novelty": 2,
    "region": "trung",
    "desc": "Mùi mắm ruốc nướng than thơm lừng góc phố, cuộn trứng cút, nem chua, chả lụa và tương ớt cay nồng.",
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "nuoc_mia_sau_rieng",
    "name": "Nước mía sầu riêng cốt dừa Mỹ Tho",
    "emoji": "🥤",
    "price": 20000,
    "meals": [
      "anvat"
    ],
    "novelty": 1,
    "region": "nam",
    "desc": "Ly nước mía ngọt lịm ép cùng múi sầu riêng béo ngậy thơm lừng, xua tan cái nóng bức tức thì.",
    "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "banh_khot_vung_tau",
    "name": "Bánh khọt tôm tươi Vũng Tàu rắc bột tôm",
    "emoji": "🥞",
    "price": 50000,
    "meals": [
      "sang",
      "trua",
      "toi"
    ],
    "novelty": 1,
    "region": "nam",
    "desc": "Vỏ bánh chiên vàng rộm giòn rụm trong khuôn đất, con tôm đỏ au rắc thêm thìa bột tôm cháy thơm phưng phức.",
    "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "chao_long_cai_rang",
    "name": "Cháo lòng Cái Răng bánh quẩy giòn tan",
    "emoji": "🥣",
    "price": 35000,
    "meals": [
      "sang",
      "toi"
    ],
    "novelty": 1,
    "region": "nam",
    "desc": "Đậm đà hương vị miền Tây gạo rang vàng óng, dồi chiên béo ngậy ăn cùng đĩa rau thơm tươi non.",
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "che_buoi_an_giang",
    "name": "Chè bưởi An Giang cùi giòn cốt dừa",
    "emoji": "🍧",
    "price": 20000,
    "meals": [
      "anvat"
    ],
    "novelty": 1,
    "region": "nam",
    "desc": "Cùi bưởi sơ chế kỹ giòn sần sật không chút đắng, đỗ xanh bùi mịn quyện nước cốt dừa sánh béo.",
    "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "banh_da_lon_la_dua",
    "name": "Bánh da lợn lá dứa đậu xanh dẻo mềm",
    "emoji": "🍰",
    "price": 15000,
    "meals": [
      "anvat"
    ],
    "novelty": 1,
    "region": "nam",
    "desc": "Từng lớp bánh xanh ngọc và vàng ươm xen kẽ, dẻo dai thơm lừng mùi lá dứa vườn nhà.",
    "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "goi_ngo_sen_tom_thit",
    "name": "Gỏi ngó sen tôm thịt giòn ngọt phồng tôm",
    "emoji": "🥗",
    "price": 65000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 1,
    "region": "nam",
    "desc": "Ngó sen trắng muốt giòn rụm chua thanh dịu nhẹ, xúc miếng bánh phồng tôm giòn tan đưa vào miệng.",
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "banh_mi_pha_lau_tai_mui",
    "name": "Bánh mì phá lấu tai mũi giòn sần sật",
    "emoji": "🥖",
    "price": 30000,
    "meals": [
      "sang",
      "trua",
      "anvat"
    ],
    "novelty": 1,
    "region": "nam",
    "desc": "Tai heo mũi heo khìa nước dừa đậm đà kẹp chặt trong ổ bánh mì nóng, chan muỗng nước phá lấu cay.",
    "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "hu_tieu_sa_dec",
    "name": "Hủ tiếu Sa Đéc sườn non tôm mực",
    "emoji": "🍜",
    "price": 45000,
    "meals": [
      "sang",
      "trua",
      "toi"
    ],
    "novelty": 2,
    "region": "nam",
    "desc": "Sợi hủ tiếu bột lọc Sa Đéc trứ danh trong veo dai mềm, nước lèo xương hầm ngọt lịm từ củ cải.",
    "image": "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "bun_ca_chau_doc",
    "name": "Bún cá Châu Đốc nghệ vàng bông điên điển",
    "emoji": "🍜",
    "price": 40000,
    "meals": [
      "sang",
      "trua"
    ],
    "novelty": 3,
    "region": "nam",
    "desc": "Thịt cá lóc xào nghệ vàng óng thơm phức ngải bún, ăn kèm bông điên điển mùa nước nổi nở vàng rực rỡ.",
    "image": "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "banh_cong_soc_trang",
    "name": "Bánh cống Sóc Trăng tôm đất giòn rụm",
    "emoji": "🥟",
    "price": 30000,
    "meals": [
      "trua",
      "anvat"
    ],
    "novelty": 2,
    "region": "nam",
    "desc": "Chiếc bánh chiên vàng sậm bọc đậu xanh thịt băm và con tôm đất trên đỉnh, cuộn rau sống chấm nước mắm gừng.",
    "image": "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "lau_ca_keo_la_giang",
    "name": "Lẩu cá kèo lá giang tươi sống",
    "emoji": "🍲",
    "price": 160000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 3,
    "region": "nam",
    "desc": "Cá kèo bơi tung tăng thả trực tiếp vào nồi lẩu lá giang chua thanh dịu ngọt, chấm mắm me cay xè.",
    "image": "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "bo_la_lot_mo_chay",
    "name": "Bò nướng lá lốt mỡ chài bánh hỏi",
    "emoji": "🥩",
    "price": 60000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 1,
    "region": "nam",
    "desc": "Cuốn bò lá lốt nướng xém than tỏa hương thơm ngây ngất cả con đường, cuộn bánh tráng chấm mắm nêm đậm vị.",
    "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "chao_vit_thanh_da",
    "name": "Cháo vịt Thanh Đa gỏi bắp cải chua ngọt",
    "emoji": "🦆",
    "price": 55000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 1,
    "region": "nam",
    "desc": "Thịt vịt cỏ ít mỡ da giòn ngọt mềm, chấm nước mắm gừng sền sệt ăn kèm dĩa gỏi bắp cải giòn sần sật.",
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "banh_uot_long_ga_da_lat",
    "name": "Bánh ướt lòng gà trứng non Đà Lạt",
    "emoji": "🥢",
    "price": 45000,
    "meals": [
      "sang",
      "trua",
      "toi"
    ],
    "novelty": 2,
    "region": "trung",
    "desc": "Bánh ướt mềm mượt, thịt gà xé và chùm trứng non vàng ươm tắm trong nước mắm chua ngọt pha khéo léo.",
    "image": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "nem_lui_hue",
    "name": "Nem lụi bọc sả nướng than hoa (5 cây)",
    "emoji": "🍢",
    "price": 45000,
    "meals": [
      "trua",
      "toi",
      "anvat"
    ],
    "novelty": 1,
    "region": "trung",
    "desc": "Thịt nướng thơm ngát hương sả cây, cuốn bánh tráng rau thơm chấm nước tương mè đậu phộng béo bùi.",
    "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "banh_duc_nong_ha_noi",
    "name": "Bánh đúc nóng thịt băm mộc nhĩ hành phi",
    "emoji": "🥣",
    "price": 25000,
    "meals": [
      "sang",
      "anvat"
    ],
    "novelty": 1,
    "region": "bac",
    "desc": "Bánh đúc dẻo quánh ấm nóng, chan nước mắm mặn ngọt thơm lừng tiêu đen và rau mùi ngát hương.",
    "image": "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "banh_xeo_nhat_le",
    "name": "Bánh xèo vỏ tôm đất Nhật Lệ giòn rụm",
    "emoji": "🥞",
    "price": 35000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 2,
    "region": "trung",
    "desc": "Vỏ bánh mỏng tanh vàng óng, ăn kèm đọt rau rừng tươi rói chấm nước mắm tỏi ớt cay nồng miền Trung.",
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "oc_mong_tay_xao_rau_muong",
    "name": "Ốc móng tay xào rau muống tỏi giòn",
    "emoji": "🐌",
    "price": 65000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 1,
    "region": "toanquoc",
    "desc": "Thịt ốc móng tay béo ngậy ngọt giòn, rau muống xào lửa lớn xanh mướt thơm lừng tỏi phi vàng.",
    "image": "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "so_huyet_chay_toi",
    "name": "Sò huyết cháy tỏi bơ thơm lừng bánh mì",
    "emoji": "🦪",
    "price": 85000,
    "meals": [
      "toi",
      "anvat"
    ],
    "novelty": 2,
    "region": "toanquoc",
    "desc": "Sò huyết vừa chín tới ngọt đậm đà mọng máu, phủ đầy tỏi phi giòn rụm sốt bơ béo ngậy ngất ngây.",
    "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "bun_oc_chuoi_dau",
    "name": "Bún ốc chuối đậu tía tô nóng hổi",
    "emoji": "🍲",
    "price": 45000,
    "meals": [
      "sang",
      "trua",
      "toi"
    ],
    "novelty": 1,
    "region": "bac",
    "desc": "Ốc bươu giòn sần sật, chuối xanh bùi bùi cùng đậu rán vàng ươm trong nước canh chua thanh giấm bỗng.",
    "image": "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "banh_canh_nam_pho",
    "name": "Bánh canh Nam Phổ gạch cua đỏ quạch",
    "emoji": "🍜",
    "price": 35000,
    "meals": [
      "sang",
      "anvat"
    ],
    "novelty": 3,
    "region": "trung",
    "desc": "Món ăn gia truyền làng Nam Phổ nước dùng sền sệt sắc đỏ của gạch cua và tôm băm nhuyễn tuyệt ngon.",
    "image": "https://images.unsplash.com/photo-1576577445504-6af96477db52?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "banh_mi_que_da_nang",
    "name": "Bánh mì que giòn tan pate bơ sốt ớt",
    "emoji": "🥖",
    "price": 15000,
    "meals": [
      "sang",
      "anvat"
    ],
    "novelty": 0,
    "region": "trung",
    "desc": "Chiếc bánh mì dài thon giòn rụm quết lớp pate mịn mượt thơm lừng cùng sợi ruốc bông xốp.",
    "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "che_khoai_deo_dai_loan",
    "name": "Chè khoai dẻo thảo mộc thạch cao quy linh",
    "emoji": "🍧",
    "price": 30000,
    "meals": [
      "anvat"
    ],
    "novelty": 1,
    "region": "toanquoc",
    "desc": "Viên khoai môn khoai lang dẻo dai nhiều màu sắc trong nước đường thảo mộc thơm mát thanh nhiệt.",
    "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "banh_trang_cuon_thit_heo_da_nang",
    "name": "Bánh tráng cuốn thịt heo hai đầu da",
    "emoji": "🌯",
    "price": 70000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 2,
    "region": "trung",
    "desc": "Miếng thịt heo luộc khéo léo với hai đầu mỡ da giòn, cuộn bánh tráng Đại Lộc chấm mắm nêm cá cơm đậm vị.",
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "bun_ca_nha_trang",
    "name": "Bún cá dầm chả cá thu Nha Trang",
    "emoji": "🍜",
    "price": 40000,
    "meals": [
      "sang",
      "trua"
    ],
    "novelty": 1,
    "region": "trung",
    "desc": "Nước lèo trong vắt ngọt thanh từ xương cá cờ, chả cá thu dai ngọt ăn cùng rau xà lách thái nhuyễn.",
    "image": "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "banh_can_muc_nha_trang",
    "name": "Bánh căn mực cơm trứng gà Nha Trang",
    "emoji": "🍳",
    "price": 45000,
    "meals": [
      "sang",
      "toi",
      "anvat"
    ],
    "novelty": 2,
    "region": "trung",
    "desc": "Từng con mực cơm tươi rói giòn ngọt nằm gọn trong lòng bánh căn nóng hổi, chấm mắm nêm ớt đỏ rực.",
    "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "banh_xeo_tom_muc_phan_thiet",
    "name": "Bánh xèo vỏ vàng tôm mực tươi Phan Thiết",
    "emoji": "🥞",
    "price": 40000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 2,
    "region": "trung",
    "desc": "Đổ trong những chiếc khuôn đất nhỏ xinh xèo xèo, chan nước mắm đậu phộng chua cay thơm nồng vị biển.",
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "goi_ca_trich_phu_quoc",
    "name": "Gỏi cá trích Phú Quốc dừa nạo rau rừng",
    "emoji": "🐟",
    "price": 110000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 3,
    "region": "nam",
    "desc": "Thịt cá trích tươi rói tái chanh trộn dừa nạo bùi béo, cuộn bánh tráng chấm nước mắm ớt tỏi đậu phộng cay the.",
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "ga_nuong_com_lam_buon_ma_thuot",
    "name": "Gà nướng mọi than hồng cơm lam Buôn Ma Thuột",
    "emoji": "🍗",
    "price": 210000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 3,
    "region": "trung",
    "desc": "Gà ta nướng nguyên con da vàng giòn rụm ướp mật ong rừng, chấm muối ớt hột tiêu rừng cay xé lưỡi.",
    "image": "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "banh_trang_cuon_trung_cut",
    "name": "Bánh tráng cuốn sốt me trứng cút chiên giòn",
    "emoji": "🌯",
    "price": 25000,
    "meals": [
      "anvat"
    ],
    "novelty": 0,
    "region": "nam",
    "desc": "Cuốn bánh tráng mềm dai ngập nhân khô bò mỡ hành, chấm sốt bơ me chua ngọt ăn hoài không ngán.",
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "nem_chua_thanh_hoa",
    "name": "Nem chua Thanh Hóa tỏi ớt lá đinh lăng (chục cái)",
    "emoji": "🍢",
    "price": 40000,
    "meals": [
      "anvat",
      "toi"
    ],
    "novelty": 1,
    "region": "bac",
    "desc": "Vị chua thanh mát, thịt bì giòn sần sật thoảng mùi thơm nồng tỏi ớt tiêu đen và đinh lăng non.",
    "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "banh_tai_heo_gion_tan",
    "name": "Bánh tai heo giòn tan sốt bơ tỏi cay",
    "emoji": "🥨",
    "price": 20000,
    "meals": [
      "anvat"
    ],
    "novelty": 0,
    "region": "toanquoc",
    "desc": "Từng miếng bánh hình xoắn ốc giòn rụm ngào sốt mắm ớt cay ngọt, nhâm nhi vui miệng suốt buổi chiều.",
    "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "chao_suon_ngo_huyen",
    "name": "Cháo sườn sụn Phố Cổ ruốc thịt tiêu bắc",
    "emoji": "🥣",
    "price": 35000,
    "meals": [
      "sang",
      "toi",
      "anvat"
    ],
    "novelty": 1,
    "region": "bac",
    "desc": "Tô cháo trắng mịn như nhung rắc ngập ruốc thịt đậm đà, cắn miếng quẩy giòn tan đẫm nước cháo béo thơm.",
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "bun_bo_nam_bo",
    "name": "Bún bò Nam Bộ trộn lạc rang hành phi",
    "emoji": "🍜",
    "price": 55000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 1,
    "region": "bac",
    "desc": "Thịt bò xào mềm thơm nức mũi xếp trên lớp bún tươi và rau sống giòn mát, rưới nước mắm chua ngọt ấm bụng.",
    "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "banh_da_cua_be",
    "name": "Bánh đa cua bể tôm tươi mộc nhĩ giòn",
    "emoji": "🦀",
    "price": 65000,
    "meals": [
      "sang",
      "trua",
      "toi"
    ],
    "novelty": 2,
    "region": "bac",
    "desc": "Bát bánh đa đỏ trù phú ngập tràn gạch cua bể ngọt đậm, chả lá lốt thơm lừng cùng rau cần giòn sần sật.",
    "image": "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "che_khuc_bach",
    "name": "Chè khúc bạch phô mai hạnh nhân thanh mát",
    "emoji": "🍨",
    "price": 35000,
    "meals": [
      "anvat"
    ],
    "novelty": 1,
    "region": "toanquoc",
    "desc": "Từng viên khúc bạch mềm núng nính béo thơm ngậy vị sữa phô mai, ăn cùng quả nhãn ngọt lịm và hạnh nhân lát nướng giòn.",
    "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "tra_dao_cam_sa",
    "name": "Trà đào cam sả miếng đào giòn ngọt",
    "emoji": "🍑",
    "price": 35000,
    "meals": [
      "anvat"
    ],
    "novelty": 0,
    "region": "toanquoc",
    "desc": "Hương thơm nồng nàn thanh khiết của sả và cam tươi, nhai miếng đào giòn sần sật mát rượi cả cổ họng.",
    "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "banh_chuoi_nuong_nuoc_cot_dua",
    "name": "Bánh chuối nướng ổ mềm ngậy cốt dừa",
    "emoji": "🍰",
    "price": 25000,
    "meals": [
      "anvat"
    ],
    "novelty": 1,
    "region": "nam",
    "desc": "Màu đỏ rượu quyến rũ từ chuối sứ nướng chín, ổ bánh mềm mại ngập tràn vị béo ngậy của nước cốt dừa.",
    "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "banh_flan_caramel",
    "name": "Bánh flan caramel cà phê đá bào (2 cái)",
    "emoji": "🍮",
    "price": 22000,
    "meals": [
      "anvat"
    ],
    "novelty": 0,
    "region": "toanquoc",
    "desc": "Bánh mềm mượt như nhung tan ngay trong miệng, chan chút cà phê đậm vị và nước cốt dừa béo bùi xua tan nắng nóng.",
    "image": "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "sua_chua_nep_cam",
    "name": "Sữa chua nếp cẩm Điện Biên dẻo bùi",
    "emoji": "🍧",
    "price": 25000,
    "meals": [
      "sang",
      "anvat"
    ],
    "novelty": 0,
    "region": "bac",
    "desc": "Hạt nếp cẩm dẻo thơm ngấm men ngọt dịu, ăn cùng hộp sữa chua mát lạnh chua thanh tốt cho hệ tiêu hóa.",
    "image": "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "banh_xeo_dac_biet_hai_san",
    "name": "Bánh xèo khổng lồ tôm mực ba chỉ củ hũ dừa",
    "emoji": "🥞",
    "price": 80000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 2,
    "region": "nam",
    "desc": "Chiếc bánh xèo giòn rụm ngập tràn hải sản tươi ngon, cuộn ngọn cải non chấm nước mắm tỏi ớt cay xè.",
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "lau_bo_nhung_dam",
    "name": "Lẩu bò nhúng dấm ba chỉ bắp hoa tươi",
    "emoji": "🍲",
    "price": 190000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 2,
    "region": "toanquoc",
    "desc": "Nồi nước dấm sả thơm phức chua ngọt dịu, nhúng từng lát bắp hoa bò tái mềm cuộn bánh tráng chấm mắm nêm đậm đà.",
    "image": "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "chao_muc_dong_khoi",
    "name": "Cháo mực khô tôm khô huyết heo bánh quẩy",
    "emoji": "🥣",
    "price": 30000,
    "meals": [
      "sang",
      "toi",
      "anvat"
    ],
    "novelty": 1,
    "region": "nam",
    "desc": "Vị ngọt sâu từ mực khô nướng thơm lừng nấu cùng cháo gạo rang, thêm huyết mềm và gừng tươi ấm nóng.",
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "goi_tai_heo_ngo_sen",
    "name": "Gỏi tai heo ngó sen chua ngọt giòn sật",
    "emoji": "🥗",
    "price": 60000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 1,
    "region": "nam",
    "desc": "Tai heo luộc giòn sần sật quyện cùng ngó sen trắng muốt chua thanh, rắc đậu phộng rang vàng thơm nức.",
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "bun_bung_doc_mung_ha_noi",
    "name": "Bún bung sườn non mọc dọc mùng nghệ tươi",
    "emoji": "🍲",
    "price": 45000,
    "meals": [
      "sang",
      "trua"
    ],
    "novelty": 1,
    "region": "bac",
    "desc": "Nước dùng nhuộm vàng màu nghệ tươi ấm áp, dọc mùng tước sạch giòn ngon cùng những viên mọc nấm bùi béo.",
    "image": "https://images.unsplash.com/photo-1617093727343-374698b1b08d?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "chao_tim_cat_ha_noi",
    "name": "Cháo tim cật nóng hổi tiêu hành tía tô",
    "emoji": "🥣",
    "price": 45000,
    "meals": [
      "sang",
      "toi"
    ],
    "novelty": 1,
    "region": "bac",
    "desc": "Tim cật tươi xào tái vừa chín giòn sần sật ngọt lịm, bát cháo sánh mịn bốc khói rắc ngập rau mùi tía tô giải cảm.",
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "banh_duc_nom",
    "name": "Bánh đúc nộm nước canh lạc rang mát rượi",
    "emoji": "🥣",
    "price": 25000,
    "meals": [
      "trua",
      "anvat"
    ],
    "novelty": 3,
    "region": "bac",
    "desc": "Sợi bánh đúc trắng phau mát lạnh tắm trong nước canh vừng lạc béo ngậy thơm lừng, ăn kèm giá đỗ sống và rau ngổ.",
    "image": "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "banh_tro_mat_mia",
    "name": "Bánh tro mật mía thơm lừng hương nếp",
    "emoji": "🍙",
    "price": 15000,
    "meals": [
      "anvat"
    ],
    "novelty": 2,
    "region": "bac",
    "desc": "Bánh ngâm nước tro trong suốt hổ phách dẻo mềm mát ruột, chấm dòng mật mía ngọt ngào thơm nức.",
    "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "lau_de_kho_sa_te",
    "name": "Lẩu dê nồi đất thuốc bắc củ sen sa tế",
    "emoji": "🥘",
    "price": 220000,
    "meals": [
      "toi"
    ],
    "novelty": 3,
    "region": "toanquoc",
    "desc": "Thịt dê ninh nhừ mềm thơm không hôi, nước dùng đậm đà vị thuốc bắc củ sen bổ dưỡng chấm chao sa tế bùi ngậy.",
    "image": "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "sashimi_ca_hoi_sapa",
    "name": "Sashimi cá hồi Sapa tươi sống mù tạt",
    "emoji": "🍣",
    "price": 270000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 4,
    "region": "bac",
    "desc": "Từng lát cá hồi nuôi tại chân đèo Ô Quy Hồ đỏ au vân mỡ béo ngậy, cuốn lá tía tô chấm mù tạt cay nồng xộc mũi.",
    "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "dong_nuong_muoi_ot_phan_thiet",
    "name": "Dông cát Phan Thiết nướng muối ớt bánh tráng",
    "emoji": "🦎",
    "price": 190000,
    "meals": [
      "toi"
    ],
    "novelty": 5,
    "region": "trung",
    "desc": "Đặc sản đồi cát Bình Thuận, thịt dông săn chắc ngọt tự nhiên nướng muối ớt cay xè cuộn rau rừng chấm mắm me.",
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "heo_toc_quay_nguyen_con",
    "name": "Heo tộc Tây Nguyên quay lu da giòn tan",
    "emoji": "🍖",
    "price": 320000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 4,
    "region": "trung",
    "desc": "Thịt heo mọi thả rông săn ngọt ít mỡ, da quay nổ bỏng giòn rụm chấm muối ớt xanh thơm ngất ngây.",
    "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "ruoi_tu_ky_om_noi_dat",
    "name": "Chả rươi Tứ Kỳ Hải Dương vỏ quýt hành hoa",
    "emoji": "🍳",
    "price": 120000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 4,
    "region": "bac",
    "desc": "\"Rồng đất\" mùa thu béo ngậy trộn trứng gà thịt băm và vỏ quýt thơm nồng, rán vàng thơm ngào ngạt cả xóm.",
    "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "thit_trau_gac_bep",
    "name": "Thịt trâu gác bếp Tây Bắc xé sợi mắc khén",
    "emoji": "🥩",
    "price": 180000,
    "meals": [
      "toi",
      "anvat"
    ],
    "novelty": 3,
    "region": "bac",
    "desc": "Thịt trâu khô đượm mùi khói củi nhãn, từng thớ thịt đỏ hồng cay nồng mắc khén hạt dổi chấm chẩm chéo tê cay.",
    "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "banh_gai_tu_tru",
    "name": "Bánh gai Tứ Trụ Thanh Hóa nhân đậu mỡ đường",
    "emoji": "🍙",
    "price": 15000,
    "meals": [
      "anvat"
    ],
    "novelty": 2,
    "region": "bac",
    "desc": "Lớp vỏ bánh đen óng dẻo quánh thơm ngát lá gai, ôm lấy nhân đậu xanh ngọt ngào và những hạt mỡ muối trong veo.",
    "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "ga_dong_tao_hap_nam",
    "name": "Chân gà Đông Tảo hầm hạt sen thuốc bắc",
    "emoji": "🍗",
    "price": 290000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 5,
    "region": "bac",
    "desc": "Đôi chân gà tiến vua to xù xì ngập gân giòn sần sật, tiềm hạt sen táo đỏ ngọt lịm bổ dưỡng tráng kiện.",
    "image": "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "sua_chua_tran_chau_ha_long",
    "name": "Sữa chua trân châu Hạ Long cốt dừa nóng",
    "emoji": "🍧",
    "price": 30000,
    "meals": [
      "anvat"
    ],
    "novelty": 1,
    "region": "bac",
    "desc": "Sữa chua chua dẻo mát lạnh ăn cùng hũ trân châu trắng ngập nước cốt dừa ấm béo ngậy rắc dừa nạo giòn sần sật.",
    "image": "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "canh_ca_khoai_quang_binh",
    "name": "Canh cá khoai rau răm me chua Quảng Bình",
    "emoji": "🍲",
    "price": 65000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 3,
    "region": "trung",
    "desc": "Thịt cá khoai mềm tan như thạch trắng trong veo ngọt lịm, húp ngụm canh chua nóng hổi giải nhiệt tức thì.",
    "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "banh_xeo_nhan_vit_dong",
    "name": "Bánh xèo nhân thịt vịt đồng miền Tây giòn tan",
    "emoji": "🥞",
    "price": 65000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 3,
    "region": "nam",
    "desc": "Thịt vịt đồng băm nhuyễn xào thơm nức gói trong chiếc bánh xèo giòn tan, ăn kèm rau rừng đọt cóc đọt xoài.",
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "lau_ca_linh_bong_so_dua",
    "name": "Lẩu cá linh non mùa nước nổi bông điên điển",
    "emoji": "🐟",
    "price": 195000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 4,
    "region": "nam",
    "desc": "Cá linh đầu mùa xương mềm rụm béo ngậy, bơi lội trong nồi lẩu me chua thanh ngập tràn sắc vàng hoa điên điển.",
    "image": "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "banh_beo_hai_phong",
    "name": "Bánh bèo Hải Phòng gói lá chuối chả viên",
    "emoji": "🥟",
    "price": 35000,
    "meals": [
      "sang",
      "anvat"
    ],
    "novelty": 2,
    "region": "bac",
    "desc": "Bánh đúc trong khuôn lá chuối dày dặn mềm mịn, chấm bát nước mắm hầm xương nóng hổi thả hai viên chả thịt béo ngậy.",
    "image": "https://images.unsplash.com/photo-1576577445504-6af96477db52?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "nem_chua_nuong_ha_noi",
    "name": "Nem chua nướng than hoa Ấu Triệu (10 chiếc)",
    "emoji": "🍢",
    "price": 55000,
    "meals": [
      "toi",
      "anvat"
    ],
    "novelty": 1,
    "region": "bac",
    "desc": "Chiếc nem dính dẻo nướng xém than hồng thơm phưng phức, chấm tương ớt cay xè nhâm nhi cùng ly trà chanh.",
    "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "my_van_than_cho_lon",
    "name": "Mì vằn thắn sủi cảo xá xíu Chợ Lớn",
    "emoji": "🍜",
    "price": 55000,
    "meals": [
      "sang",
      "trua",
      "toi"
    ],
    "novelty": 1,
    "region": "nam",
    "desc": "Sợi mì trứng dai vàng óng, viên sủi cảo tôm thịt căng mọng nước chan nước lèo tôm khô ngọt đậm đà.",
    "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "bun_ca_ro_dong_hai_duong",
    "name": "Bún cá rô đồng chiên giòn rau cải xanh",
    "emoji": "🍜",
    "price": 45000,
    "meals": [
      "sang",
      "trua"
    ],
    "novelty": 2,
    "region": "bac",
    "desc": "Thịt cá rô đồng rim gừng thơm lừng cùng những miếng cá chiên giòn tan, nước dùng ngọt lịm từ xương cá giã nhuyễn.",
    "image": "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "banh_canh_bap_bo_hue",
    "name": "Bánh canh bắp bò giò chả cua Huế",
    "emoji": "🍜",
    "price": 50000,
    "meals": [
      "sang",
      "trua",
      "toi"
    ],
    "novelty": 2,
    "region": "trung",
    "desc": "Sợi bánh canh bột lọc dai dẻo chan nước dùng sánh đỏ cay nồng, cắn miếng bắp bò giòn sần sật mê ly.",
    "image": "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "che_dau_do_nuoc_cot_dua",
    "name": "Chè đậu đỏ nấu đường phèn cốt dừa bùi béo",
    "emoji": "🍧",
    "price": 20000,
    "meals": [
      "anvat"
    ],
    "novelty": 0,
    "region": "toanquoc",
    "desc": "Hạt đậu đỏ ninh nhừ mềm tan bùi béo, rưới thìa nước cốt dừa thơm phức \"thoát ế\" trong truyền thuyết.",
    "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "oc_buou_nhoi_thit_da_lat",
    "name": "Ốc bươu nhồi thịt băm sả hấp thố đất",
    "emoji": "🐌",
    "price": 85000,
    "meals": [
      "trua",
      "toi",
      "anvat"
    ],
    "novelty": 2,
    "region": "trung",
    "desc": "Cầm hai cọng sả nhấc nhẹ chú ốc đầy ắp thịt băm giòn thơm, chấm nước mắm gừng cay ấm giữa trời se lạnh.",
    "image": "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "banh_trang_nuong_mo_hanh",
    "name": "Bánh tráng nướng mỡ hành tép rang trứng cút",
    "emoji": "🍕",
    "price": 18000,
    "meals": [
      "toi",
      "anvat"
    ],
    "novelty": 0,
    "region": "nam",
    "desc": "Bánh tráng nướng mỏng tang giòn rụm, vàng ươm mỡ hành và tép đỏ thơm phức mùi bơ ngậy.",
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "sup_bong_bong_ca_hai_san",
    "name": "Súp bong bóng cá hải sản Chợ Lớn",
    "emoji": "🥣",
    "price": 75000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 3,
    "region": "nam",
    "desc": "Bong bóng cá béo bùi xốp mềm kết hợp tôm cua nấm đông cô trong bát súp sánh đặc bồi bổ sức khỏe tuyệt hảo.",
    "image": "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "chao_chim_bo_cau_hat_sen",
    "name": "Cháo bồ câu non hầm hạt sen đỗ xanh",
    "emoji": "🥣",
    "price": 85000,
    "meals": [
      "sang",
      "toi"
    ],
    "novelty": 2,
    "region": "toanquoc",
    "desc": "Thịt bồ câu mềm ngọt thấm đượm từng hạt gạo sánh, hạt sen bùi ngậy bồi bổ sinh lực sau ngày dài mệt mỏi.",
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "lau_ghe_mang_chua_phu_quoc",
    "name": "Lẩu ghẹ tươi măng chua cay Phú Quốc",
    "emoji": "🦀",
    "price": 280000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 4,
    "region": "nam",
    "desc": "Ghẹ biển Hàm Ninh ngọt chắc từng thớ thịt, thả vào nồi lẩu măng chua cay xè nức lòng du khách.",
    "image": "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "ca_hoi_nuong_muoi_ot_sapa",
    "name": "Cá hồi Sapa nướng mọi than hoa muối ớt",
    "emoji": "🐟",
    "price": 220000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 3,
    "region": "bac",
    "desc": "Phi lê cá hồi tươi nướng cháy xém cạnh béo ngậy giòn da, chấm muối hột ớt hiểm thơm phức.",
    "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "ruot_heo_khia_nuoc_dua",
    "name": "Lòng heo khìa nước dừa xiêm bánh mì",
    "emoji": "🍲",
    "price": 55000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 2,
    "region": "nam",
    "desc": "Ruột non vàng ươm óng ả thấm đẫm vị ngọt thanh của nước dừa, cắn vào giòn mềm béo ngậy khó cưỡng.",
    "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "bun_thit_nuong_cha_gio",
    "name": "Bún thịt nướng chả giò mỡ hành đậu phộng",
    "emoji": "🥢",
    "price": 45000,
    "meals": [
      "sang",
      "trua",
      "toi"
    ],
    "novelty": 0,
    "region": "nam",
    "desc": "Thịt xiên nướng than hoa vàng rượm, chả giò giòn tan rụm rưới ngập nước mắm tỏi ớt chua ngọt dễ gây nghiện.",
    "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "mi_quang_ga_ta",
    "name": "Mì Quảng gà ta thả vườn bánh tráng mè",
    "emoji": "🍜",
    "price": 45000,
    "meals": [
      "sang",
      "trua",
      "toi"
    ],
    "novelty": 1,
    "region": "trung",
    "desc": "Thịt gà ta da giòn thịt ngọt xào củ nén thơm lừng, bẻ miếng bánh tráng mè nướng giòn rụm trộn đều tô mì.",
    "image": "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "chao_nga_nghe_an",
    "name": "Cháo nghêu Cửa Lò thơm lừng hành tăm tiêu đen",
    "emoji": "🥣",
    "price": 35000,
    "meals": [
      "sang",
      "toi"
    ],
    "novelty": 2,
    "region": "trung",
    "desc": "Thịt nghêu biển béo múp xào săn đậm vị chan trên nền cháo gạo sánh mịn rắc ngập hành tăm dậy mùi.",
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "banh_canh_cha_ca_phan_rang",
    "name": "Bánh canh chả cá hấp chiên Phan Rang",
    "emoji": "🍜",
    "price": 35000,
    "meals": [
      "sang",
      "trua",
      "toi"
    ],
    "novelty": 1,
    "region": "trung",
    "desc": "Miếng chả cá thu dai giòn thơm nức hạt tiêu, nước dùng nấu từ cá ngừ cá nục ngọt tự nhiên không chút bột ngọt.",
    "image": "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "tau_hu_da_sau_rieng",
    "name": "Tàu hũ trân châu sầu riêng đá lạnh béo ngậy",
    "emoji": "🍮",
    "price": 25000,
    "meals": [
      "anvat"
    ],
    "novelty": 1,
    "region": "nam",
    "desc": "Đậu hũ mát lạnh trơn tuột mềm mại quyện cùng sốt sầu riêng nguyên chất thơm nồng nàn và trân châu dai dai.",
    "image": "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "banh_khoai_chao_quang_tri",
    "name": "Bánh khoái chảo tôm thịt rau sống chấm mắm ruốc",
    "emoji": "🥞",
    "price": 35000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 2,
    "region": "trung",
    "desc": "Chiếc bánh vàng óng thơm ngậy nhân tôm nhảy thịt ba chỉ, cuộn tròn trong lá vả chấm mắm ruốc cay xé.",
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "banh_duc_la_mo_nuoc_cot_dua",
    "name": "Bánh đúc lá mơ nước cốt dừa đường thốt nốt",
    "emoji": "🍰",
    "price": 20000,
    "meals": [
      "anvat"
    ],
    "novelty": 3,
    "region": "nam",
    "desc": "Bánh đúc màu sẫm thơm hương lá mơ rừng độc đáo, chan nước cốt dừa thốt nốt béo ngậy ngọt ngào.",
    "image": "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "chao_sen_long_nhan",
    "name": "Chè hạt sen long nhãn Phố Hiến ngọt mát",
    "emoji": "🍧",
    "price": 25000,
    "meals": [
      "anvat"
    ],
    "novelty": 1,
    "region": "bac",
    "desc": "Hạt sen bùi thơm lồng khéo léo trong cùi nhãn lồng mọng nước giòn ngọt, nước đường phèn thanh mát bổ tâm an thần.",
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "lau_bo_nhung_ot_cay_da_nang",
    "name": "Lẩu bò nhúng ớt cay nồng tê tái Đà Nẵng",
    "emoji": "🥘",
    "price": 170000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 3,
    "region": "trung",
    "desc": "Nồi lẩu đỏ rực ngập ớt tươi cay bốc khói, nhúng bắp bò hoa và khổ qua giòn sần sật thử thách mọi giới hạn ăn cay.",
    "image": "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "chao_ve_sau_nong_mua_he",
    "name": "Ve sầu non rang lá chanh giòn rụm",
    "emoji": "🦗",
    "price": 45000,
    "meals": [
      "toi",
      "anvat"
    ],
    "novelty": 5,
    "region": "nam",
    "desc": "Ve non vừa lột xác béo ngậy như bơ sữa, rang vàng cùng lá chanh ớt chỉ thiên ăn là ghiền.",
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "tiet_canh_vit_co_van_dinh",
    "name": "Vịt cỏ Vân Đình nướng than hoa đĩa gỏi bắp cải",
    "emoji": "🦆",
    "price": 160000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 2,
    "region": "bac",
    "desc": "Thịt vịt nạc ngọt chắc không ngấy, tẩm ướp mật ong nướng than hoa thơm lừng chấm nước mắm tỏi ớt gừng.",
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "suon_cay_khong_lo",
    "name": "Tháp sườn cay khổng lồ sốt ớt hiểm xanh",
    "emoji": "🍖",
    "price": 260000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 3,
    "region": "toanquoc",
    "desc": "Những dẻ sườn hầm mềm tơi róc thịt xếp thành ngọn tháp cao, rưới đẫm sốt ớt hiểm xanh chua cay bốc khói nghi ngút.",
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "banh_chuoi_hap_nuoc_cot_dua",
    "name": "Bánh chuối hấp nước cốt dừa rắc mè rang",
    "emoji": "🍌",
    "price": 15000,
    "meals": [
      "anvat"
    ],
    "novelty": 0,
    "region": "nam",
    "desc": "Bánh chuối dẻo thơm màu vàng hổ phách, chan ngập nước cốt dừa béo ngậy rắc mè vàng thơm phức.",
    "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "bun_moc_suon_chua_ha_noi",
    "name": "Bún sườn chua móng giò dọc mùng thanh mát",
    "emoji": "🍲",
    "price": 45000,
    "meals": [
      "sang",
      "trua"
    ],
    "novelty": 1,
    "region": "bac",
    "desc": "Vị chua thanh mát lành của sấu tươi hoặc tai chua, sườn non ninh mềm róc thịt ăn trôi tuột bao mệt mỏi.",
    "image": "https://images.unsplash.com/photo-1617093727343-374698b1b08d?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "lau_mam_ca_keo_u_minh",
    "name": "Lẩu mắm U Minh đọt choại cá lóc đồng",
    "emoji": "🥘",
    "price": 190000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 4,
    "region": "nam",
    "desc": "Hương mắm đồng nồng đượm nhúng cá lóc đồng và rổ đọt choại tươi non đậm chất rừng tràm hoang dã.",
    "image": "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "banh_it_tran_nhan_tom_thit",
    "name": "Bánh ít trần nhân tôm thịt mỡ hành cay",
    "emoji": "🥟",
    "price": 30000,
    "meals": [
      "sang",
      "anvat"
    ],
    "novelty": 1,
    "region": "trung",
    "desc": "Vỏ nếp trắng mềm dai núng nính, nhân tôm thịt đậm đà thoa mỡ hành rắc tôm chà thơm ngào ngạt.",
    "image": "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "nem_chua_chao_dong_ba",
    "name": "Nem chua rán bọc bột giòn tan phố cổ",
    "emoji": "🍢",
    "price": 35000,
    "meals": [
      "anvat"
    ],
    "novelty": 0,
    "region": "bac",
    "desc": "Nem chua ngậy cay nướng xèo xèo cắn giòn rụm bên ngoài dai mềm bên trong xua tan cơn thèm vặt xế chiều.",
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "banh_canh_ca_loc_bot_loc",
    "name": "Bánh canh cá lóc bột lọc dai trong xứ Huế",
    "emoji": "🍜",
    "price": 35000,
    "meals": [
      "sang",
      "trua",
      "toi"
    ],
    "novelty": 2,
    "region": "trung",
    "desc": "Sợi bột lọc luộc chín trong suốt dai giòn sần sật, miếng cá lóc um nghệ cay thơm nức mũi.",
    "image": "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "lau_long_bo_ngon_nuc_tieng",
    "name": "Lẩu lòng bò cay tê chảo gang sa tế",
    "emoji": "🍲",
    "price": 180000,
    "meals": [
      "toi"
    ],
    "novelty": 2,
    "region": "toanquoc",
    "desc": "Lòng bò làm sạch giòn sần sật ninh trong nước dùng sa tế cay nồng thơm lừng ngò gai và đậu hũ non.",
    "image": "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "kem_dua_con_siam",
    "name": "Kem trái dừa nạo xôi nếp bắp ngọt đậu phộng",
    "emoji": "🥥",
    "price": 40000,
    "meals": [
      "anvat"
    ],
    "novelty": 1,
    "region": "toanquoc",
    "desc": "Ba viên kem dừa béo mịn đặt trọn trong trái dừa xiêm, vừa ăn vừa nạo cùi dừa non giòn bùi mát lịm.",
    "image": "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "banh_bo_thot_not_nuong",
    "name": "Bánh bò thốt nốt nướng rễ tre béo ngậy An Giang",
    "emoji": "🍰",
    "price": 25000,
    "meals": [
      "anvat"
    ],
    "novelty": 2,
    "region": "nam",
    "desc": "Ruột bánh nở bung rễ tre vàng óng, thơm nồng nàn hương đường thốt nốt và nước cốt dừa nướng béo ngậy.",
    "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "banh_mi_que_hai_phong_chinh_hieu",
    "name": "Bánh mì que cay pate cột đèn Hải Phòng giòn rụm",
    "emoji": "🥖",
    "price": 25000,
    "meals": [
      "sang",
      "anvat"
    ],
    "novelty": 1,
    "region": "bac",
    "desc": "Que bánh mì nướng giòn tan trên than hồng, pate béo mềm thơm nức mũi quyện chí chương cay xé lưỡi.",
    "image": "https://images.unsplash.com/photo-1576577445504-6af96477db52?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "chao_long_doi_tiet_ha_noi",
    "name": "Cháo lòng dồi tiết nóng rắc tiêu hạt hành hoa",
    "emoji": "🥣",
    "price": 35000,
    "meals": [
      "sang",
      "trua"
    ],
    "novelty": 1,
    "region": "bac",
    "desc": "Bát cháo nâu sánh thơm bốc khói, dồi tiết mềm ngậy mùi rau húng chó ăn kèm miếng lòng non giòn sần sật.",
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "pho_cuon_huong_mai",
    "name": "Phở cuốn bò xào hành tây rau mùi tươi",
    "emoji": "🌯",
    "price": 60000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 1,
    "region": "bac",
    "desc": "Bánh phở vuông vắn ôm trọn thịt bò xào chín tới và rau sống xanh non, chấm ngập nước mắm chua ngọt ấm bụng.",
    "image": "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "banh_trang_tron_long_an",
    "name": "Bánh tráng sa tế Long An cay xé lưỡi",
    "emoji": "🌶️",
    "price": 15000,
    "meals": [
      "anvat"
    ],
    "novelty": 1,
    "region": "nam",
    "desc": "Bánh tráng mỏng thấm đẫm dầu sa tế ớt hiểm cay nồng và tỏi phi giòn rụm, kích thích vị giác cực độ.",
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "bo_ne_3_ngon",
    "name": "Bò né thập cẩm trứng ốp xúc xích phô mai bánh mì",
    "emoji": "🍳",
    "price": 55000,
    "meals": [
      "sang",
      "trua",
      "toi"
    ],
    "novelty": 1,
    "region": "toanquoc",
    "desc": "Chảo gang sôi xèo xèo miếng bò mềm ngọt đẫm sốt tiêu đen, chấm bánh mì giòn tan ăn no căng rốn.",
    "image": "https://images.unsplash.com/photo-1600454309261-3dc9b7597637?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "bun_quay_hai_san_nguyen_con",
    "name": "Bún quậy đặc biệt tôm mực ghẹ nguyên con",
    "emoji": "🥣",
    "price": 85000,
    "meals": [
      "sang",
      "trua",
      "toi"
    ],
    "novelty": 3,
    "region": "nam",
    "desc": "Bát bún nóng hổi nghi ngút khói ngập tràn chả tôm tươi quết dẻo và con ghẹ biển chắc thịt ngọt lịm.",
    "image": "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "cua_hoang_de_sot_bo_toi",
    "name": "Cua hoàng đế Alaska sốt bơ tỏi thượng đỉnh",
    "emoji": "🦀",
    "price": 490000,
    "meals": [
      "trua",
      "toi"
    ],
    "novelty": 5,
    "region": "toanquoc",
    "desc": "Từng thớ thịt cua khổng lồ trắng phau chắc ngọt quyện đẫm sốt bơ tỏi thơm lừng, đỉnh cao xa hoa của bàn tiệc.",
    "image": "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=600&q=80"
  }
];

if (typeof window !== "undefined") {
  window.CONFIG = CONFIG;
  window.TIERS = TIERS;
  window.FOODS = FOODS;
  window.LOCATIONS = LOCATIONS;
  window.RESTAURANTS_DB = RESTAURANTS_DB;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { CONFIG, TIERS, FOODS, LOCATIONS, RESTAURANTS_DB };
}