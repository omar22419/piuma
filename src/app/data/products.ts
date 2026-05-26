import type { Product } from "../types";

export const products: Product[] = [
  // Baby Furniture
  {
    id: "1",
    name: "Plywood Brontosaurus Dinosaur Chair (Fun Kids Chair)",
    nameAr: "كرسي ديناصور للأطفال",
    slug: "plywood-brontosaurus-dinosaur-chair",
    description:
      "A playful dinosaur-shaped plywood chair designed for toddlers, combining seating with imaginative design.",
    descriptionAr:
      "كرسي أطفال بتصميم ديناصور مرح مصنوع من الخشب، يوفر الراحة ويشجع اللعب والخيال للأطفال.",
    price: 1299,
    category: "furniture",
    images: [
      {
        url: "https://res.cloudinary.com/duexs5wps/image/upload/v1779808584/34_v3myce.jpg",
        alt: "Plywood Brontosaurus Dinosaur Chair",
      },
    ],
    inStock: true,
    featured: true,
    bestSeller: true,
    rating: 4.9,
    reviewCount: 127,
    specifications: {
      Material: "Premium plywood",
      Dimensions: "60 x 35 x 55 cm",
      "Age Range": "2-6 years",
      Features: "Smooth edges, playful dinosaur design",
    },
    specificationsAr: {
      المادة: "خشب أبلكاش عالي الجودة",
      الأبعاد: "60 × 35 × 55 سم",
      "الفئة العمرية": "2-6 سنوات",
      المميزات: "حواف آمنة وتصميم ديناصور ممتع",
    },
  },
  {
    id: "2",
    name: "Baby Play Gym with Mobile",
    nameAr: "جم بلاي للأطفال مع ألعاب معلقة",
    slug: "baby-play-gym-with-mobile",
    description:
      "A soft wooden play gym designed for newborns with a hanging mobile to stimulate senses and early interaction.",
    descriptionAr:
      "جم بلاي خشبي ناعم مزود بألعاب معلقة لتحفيز حواس الطفل وتشجيع التفاعل المبكر.",
    price: 899,
    originalPrice: 1099,
    category: "furniture",
    images: [
      {
        url: "https://res.cloudinary.com/duexs5wps/image/upload/v1779808584/28_pz9mcl.jpg",
        alt: "Baby Play Gym with Mobile",
      },
    ],
    inStock: true,
    featured: true,
    rating: 4.8,
    reviewCount: 89,
    specifications: {
      Material: "Natural wood & soft fabric toys",
      Dimensions: "70 x 55 x 50 cm",
      Features: "Hanging toys, sensory stimulation",
      "Age Range": "0-12 months",
    },
    specificationsAr: {
      المادة: "خشب طبيعي وألعاب قماشية ناعمة",
      الأبعاد: "70 × 55 × 50 سم",
      المميزات: "ألعاب معلقة وتحفيز حسي",
      "الفئة العمرية": "0-12 شهر",
    },
  },
  {
    id: "3",
    name: "Busy Baby Activity Chair",
    nameAr: "كرسي أنشطة للأطفال",
    slug: "busy-baby-activity-chair",
    description:
      "A multifunctional activity chair designed for babies and toddlers, combining seating with built-in playful and sensory activities.",
    descriptionAr:
      "كرسي أنشطة متعدد الاستخدامات للأطفال يحتوي على ألعاب وأنشطة تفاعلية لتنمية المهارات الحسية والحركية.",
    price: 749,
    category: "furniture",
    images: [
      {
        url: "https://res.cloudinary.com/duexs5wps/image/upload/v1779808584/27_fdm0pq.jpg",
        alt: "Busy Baby Activity Chair",
      },
    ],
    inStock: true,
    new: true,
    rating: 4.7,
    reviewCount: 56,
    specifications: {
      Material: "Wood & child-safe plastic",
      Dimensions: "65 x 60 x 70 cm",
      Features: "Interactive toys and sensory activities",
      "Age Range": "1-4 years",
    },
    specificationsAr: {
      المادة: "خشب وبلاستيك آمن للأطفال",
      الأبعاد: "65 × 60 × 70 سم",
      المميزات: "أنشطة وألعاب تفاعلية",
      "الفئة العمرية": "1-4 سنوات",
    },
  },
  {
    id: "4",
    name: "Modern C-Shaped Kids Chair",
    nameAr: "كرسي أطفال بتصميم عصري",
    slug: "modern-c-shaped-kids-chair",
    description:
      "A minimalist, cantilevered chair with a continuous C-shaped shell that creates a stylish floating appearance.",
    descriptionAr:
      "كرسي أطفال عصري بتصميم انسيابي على شكل حرف C يمنح مظهرًا أنيقًا وعصريًا.",
    price: 1499,
    category: "furniture",
    images: [
      {
        url: "https://res.cloudinary.com/duexs5wps/image/upload/v1779824431/WhatsApp_Image_2026-05-26_at_7.50.48_PM_juco5q.jpg",
        alt: "Modern C-Shaped Kids Chair",
      },
      {
        url: "https://res.cloudinary.com/duexs5wps/image/upload/v1779824433/WhatsApp_Image_2026-05-26_at_2.54.27_AM_owyemd.jpg",
        alt: "Modern C-Shaped Kids Chair",
      },
    ],
    inStock: true,
    bestSeller: true,
    rating: 4.9,
    reviewCount: 203,
    specifications: {
      Material: "Molded plywood",
      Dimensions: "75 x 45 x 80 cm",
      Features: "Floating design, ergonomic comfort",
      "Age Range": "3-8 years",
    },
    specificationsAr: {
      المادة: "خشب مقولب",
      الأبعاد: "75 × 45 × 80 سم",
      المميزات: "تصميم عصري مريح",
      "الفئة العمرية": "3-8 سنوات",
    },
  },
  {
    id: "5",
    name: "Baby Climbing Arch",
    nameAr: "قوس تسلق للأطفال",
    slug: "baby-climbing-arch",
    description:
      "A wooden activity arch designed to support baby movement, play, and early physical development.",
    descriptionAr:
      "قوس تسلق خشبي يساعد الأطفال على اللعب والحركة وتنمية المهارات الحركية والتوازن.",
    price: 1499,
    category: "furniture",
    images: [
      {
        url: "https://res.cloudinary.com/duexs5wps/image/upload/v1779824432/WhatsApp_Image_2026-05-26_at_7.50.49_PM_ceenei.jpg",
        alt: "Baby Climbing Arch",
      },
      {
        url: "https://res.cloudinary.com/duexs5wps/image/upload/v1779824433/6_dif3g4.jpg",
        alt: "Baby Climbing Arch",
      },
    ],
    inStock: true,
    bestSeller: true,
    rating: 4.9,
    reviewCount: 203,
    specifications: {
      Material: "Natural solid wood",
      Dimensions: "90 x 55 x 50 cm",
      Features: "Climbing and balance training",
      "Age Range": "1-5 years",
    },
    specificationsAr: {
      المادة: "خشب طبيعي صلب",
      الأبعاد: "90 × 55 × 50 سم",
      المميزات: "تنمية التوازن والتسلق",
      "الفئة العمرية": "1-5 سنوات",
    },
  },
  {
    id: "6",
    name: "Wall Changing Table",
    nameAr: "طاولة تغيير حفاضات حائطية",
    slug: "wall-changing-table",
    description:
      "A foldable changing station mounted on the wall for easy and safe diaper changing.",
    descriptionAr:
      "طاولة تغيير حفاضات قابلة للطي تُثبت على الحائط لتوفير المساحة وتسهيل تغيير الحفاضات بأمان.",
    price: 1499,
    category: "furniture",
    images: [
      {
        url: "https://res.cloudinary.com/duexs5wps/image/upload/v1779824431/30_oyydii.jpg",
        alt: "Wall Changing Table",
      },
      {
        url: "https://res.cloudinary.com/duexs5wps/image/upload/v1779824433/5_e4s1ka.jpg",
        alt: "Wall Changing Table",
      },
    ],
    inStock: true,
    bestSeller: true,
    rating: 4.9,
    reviewCount: 203,
    specifications: {
      Material: "Solid wood & metal hinges",
      Dimensions: "80 x 55 x 20 cm",
      Features: "Foldable wall-mounted design",
      "Safety Standard": "Child-safe locking system",
    },
    specificationsAr: {
      المادة: "خشب صلب ومفصلات معدنية",
      الأبعاد: "80 × 55 × 20 سم",
      المميزات: "تصميم حائطي قابل للطي",
      "معيار السلامة": "نظام قفل آمن للأطفال",
    },
  },

  // Baby Clothing
  {
    id: "7",
    name: "Organic Cotton Onesie Set",
    nameAr: "طقم بدلة قطن عضوي",
    slug: "organic-cotton-onesie-set",
    description:
      "Ultra-soft 100% organic cotton onesies. Set of 5 in neutral tones. GOTS certified sustainable fabric.",
    descriptionAr:
      "بدلات قطن عضوي 100٪ ناعمة للغاية. طقم من 5 قطع بألوان محايدة. قماش مستدام معتمد من GOTS.",
    price: 89,
    category: "clothing",
    images: [
      {
        url: "https://res.cloudinary.com/duexs5wps/image/upload/v1779808583/WhatsApp_Image_2026-05-26_at_3.32.08_AM_jb2yzg.jpg",
        alt: "Organic cotton onesie",
      },
      {
        url: "https://res.cloudinary.com/duexs5wps/image/upload/v1779808583/WhatsApp_Image_2026-05-26_at_2.54.24_AM_vov3dd.jpg",
        alt: "Organic cotton onesie",
      },
    ],
    inStock: true,
    new: true,
    rating: 4.8,
    reviewCount: 145,
    specifications: {
      Material: "100% Organic Cotton",
      Sizes: "NB, 0-3M, 3-6M, 6-12M",
      Care: "Machine washable",
      Certification: "GOTS Certified",
    },
    specificationsAr: {
      المادة: "100٪ قطن عضوي",
      المقاسات: "حديثي الولادة، 0-3 أشهر، 3-6 أشهر، 6-12 شهر",
      العناية: "قابل للغسل في الغسالة",
      الشهادة: "معتمد من GOTS",
    },
  },
  {
    id: "8",
    name: "Premium Knit Cardigan",
    nameAr: "كارديجان محبوك فاخر",
    slug: "premium-knit-cardigan",
    description:
      "Hand-knitted merino wool cardigan with wooden buttons. Perfect for layering in any season.",
    descriptionAr:
      "كارديجان صوف ميرينو محبوك يدوياً مع أزرار خشبية. مثالي للطبقات في أي موسم.",
    price: 129,
    originalPrice: 159,
    category: "clothing",
    images: [
      {
        url: "https://res.cloudinary.com/duexs5wps/image/upload/v1779808583/WhatsApp_Image_2026-05-26_at_2.54.26_AM_vb90sj.jpg",
        alt: "Premium knit cardigan",
      },
      {
        url: "https://res.cloudinary.com/duexs5wps/image/upload/v1779808580/42_gqd2g9.jpg",
        alt: "Premium knit cardigan",
      },
    ],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviewCount: 78,
    specifications: {
      Material: "100% Merino Wool",
      Sizes: "3-6M, 6-12M, 12-18M",
      Details: "Wooden buttons, hand-knit",
      Care: "Hand wash only",
    },
    specificationsAr: {
      المادة: "100٪ صوف ميرينو",
      المقاسات: "3-6 أشهر، 6-12 شهر، 12-18 شهر",
      التفاصيل: "أزرار خشبية، محبوك يدوياً",
      العناية: "غسيل يدوي فقط",
    },
  },
  {
    id: "9",
    name: "Luxury Romper Collection",
    nameAr: "مجموعة رومبر فاخرة",
    slug: "luxury-romper-collection",
    description:
      "Elegant rompers in premium linen blend. Set of 3 in soft pastels with snap closures for easy changing.",
    descriptionAr:
      "رومبر أنيق من خليط الكتان الفاخر. طقم من 3 قطع بألوان باستيل ناعمة مع إغلاق بالكبسات لسهولة التغيير.",
    price: 159,
    category: "clothing",
    images: [
      {
        url: "https://res.cloudinary.com/duexs5wps/image/upload/v1779808583/9_lmwcve.jpg",
        alt: "Luxury romper",
      },
      {
        url: "https://res.cloudinary.com/duexs5wps/image/upload/v1779808581/44_nxo1cl.jpg",
        alt: "Luxury romper",
      },
    ],
    inStock: true,
    bestSeller: true,
    rating: 4.7,
    reviewCount: 92,
    specifications: {
      Material: "Linen-Cotton Blend",
      Sizes: "0-3M, 3-6M, 6-9M",
      Colors: "Dusty Rose, Sage, Cream",
      Features: "Snap closures, adjustable straps",
    },
    specificationsAr: {
      المادة: "خليط كتان-قطن",
      المقاسات: "0-3 أشهر، 3-6 أشهر، 6-9 أشهر",
      الألوان: "وردي داكن، أخضر فاتح، كريمي",
      المميزات: "إغلاق بالكبسات، أشرطة قابلة للتعديل",
    },
  },
  {
    id: "10",
    name: "Luxury Romper Collection",
    nameAr: "مجموعة رومبر فاخرة",
    slug: "luxury-romper-collection",
    description:
      "Elegant rompers in premium linen blend. Set of 3 in soft pastels with snap closures for easy changing.",
    descriptionAr:
      "رومبر أنيق من خليط الكتان الفاخر. طقم من 3 قطع بألوان باستيل ناعمة مع إغلاق بالكبسات لسهولة التغيير.",
    price: 159,
    category: "clothing",
    images: [
      {
        url: "https://res.cloudinary.com/duexs5wps/image/upload/v1779808582/WhatsApp_Image_2026-05-26_at_2.54.25_AM_s8a1jw.jpg",
        alt: "Luxury romper",
      },
      {
        url: "https://res.cloudinary.com/duexs5wps/image/upload/v1779808581/43_vndybj.jpg",
        alt: "Luxury romper",
      },
    ],
    inStock: true,
    bestSeller: true,
    rating: 4.7,
    reviewCount: 92,
    specifications: {
      Material: "Linen-Cotton Blend",
      Sizes: "0-3M, 3-6M, 6-9M",
      Colors: "Dusty Rose, Sage, Cream",
      Features: "Snap closures, adjustable straps",
    },
    specificationsAr: {
      المادة: "خليط كتان-قطن",
      المقاسات: "0-3 أشهر، 3-6 أشهر، 6-9 أشهر",
      الألوان: "وردي داكن، أخضر فاتح، كريمي",
      المميزات: "إغلاق بالكبسات، أشرطة قابلة للتعديل",
    },
  },
  {
    id: "11",
    name: "Luxury Romper Collection",
    nameAr: "مجموعة رومبر فاخرة",
    slug: "luxury-romper-collection",
    description:
      "Elegant rompers in premium linen blend. Set of 3 in soft pastels with snap closures for easy changing.",
    descriptionAr:
      "رومبر أنيق من خليط الكتان الفاخر. طقم من 3 قطع بألوان باستيل ناعمة مع إغلاق بالكبسات لسهولة التغيير.",
    price: 159,
    category: "clothing",
    images: [
      {
        url: "https://res.cloudinary.com/duexs5wps/image/upload/v1779808583/7_xwae4h.jpg",
        alt: "Luxury romper",
      },
      {
        url: "https://res.cloudinary.com/duexs5wps/image/upload/v1779808579/29_w3d9vc.jpg",
        alt: "Luxury romper",
      },
    ],
    inStock: true,
    bestSeller: true,
    rating: 4.7,
    reviewCount: 92,
    specifications: {
      Material: "Linen-Cotton Blend",
      Sizes: "0-3M, 3-6M, 6-9M",
      Colors: "Dusty Rose, Sage, Cream",
      Features: "Snap closures, adjustable straps",
    },
    specificationsAr: {
      المادة: "خليط كتان-قطن",
      المقاسات: "0-3 أشهر، 3-6 أشهر، 6-9 أشهر",
      الألوان: "وردي داكن، أخضر فاتح، كريمي",
      المميزات: "إغلاق بالكبسات، أشرطة قابلة للتعديل",
    },
  },
  {
    id: "12",
    name: "Luxury Romper Collection",
    nameAr: "مجموعة رومبر فاخرة",
    slug: "luxury-romper-collection",
    description:
      "Elegant rompers in premium linen blend. Set of 3 in soft pastels with snap closures for easy changing.",
    descriptionAr:
      "رومبر أنيق من خليط الكتان الفاخر. طقم من 3 قطع بألوان باستيل ناعمة مع إغلاق بالكبسات لسهولة التغيير.",
    price: 159,
    category: "clothing",
    images: [
      {
        url: "https://res.cloudinary.com/duexs5wps/image/upload/v1779808582/8_apcmw9.jpg",
        alt: "Luxury romper",
      },
      {
        url: "https://res.cloudinary.com/duexs5wps/image/upload/v1779808579/30_zxq4qg.jpg",
        alt: "Luxury romper",
      },
    ],
    inStock: true,
    bestSeller: true,
    rating: 4.7,
    reviewCount: 92,
    specifications: {
      Material: "Linen-Cotton Blend",
      Sizes: "0-3M, 3-6M, 6-9M",
      Colors: "Dusty Rose, Sage, Cream",
      Features: "Snap closures, adjustable straps",
    },
    specificationsAr: {
      المادة: "خليط كتان-قطن",
      المقاسات: "0-3 أشهر، 3-6 أشهر، 6-9 أشهر",
      الألوان: "وردي داكن، أخضر فاتح، كريمي",
      المميزات: "إغلاق بالكبسات، أشرطة قابلة للتعديل",
    },
  },
  {
    id: "13",
    name: "Luxury Romper Collection",
    nameAr: "مجموعة رومبر فاخرة",
    slug: "luxury-romper-collection",
    description:
      "Elegant rompers in premium linen blend. Set of 3 in soft pastels with snap closures for easy changing.",
    descriptionAr:
      "رومبر أنيق من خليط الكتان الفاخر. طقم من 3 قطع بألوان باستيل ناعمة مع إغلاق بالكبسات لسهولة التغيير.",
    price: 159,
    category: "clothing",
    images: [
      {
        url: "https://res.cloudinary.com/duexs5wps/image/upload/v1779808579/13_aof2ql.jpg",
        alt: "Luxury romper",
      },
    ],
    inStock: true,
    bestSeller: true,
    rating: 4.7,
    reviewCount: 92,
    specifications: {
      Material: "Linen-Cotton Blend",
      Sizes: "0-3M, 3-6M, 6-9M",
      Colors: "Dusty Rose, Sage, Cream",
      Features: "Snap closures, adjustable straps",
    },
    specificationsAr: {
      المادة: "خليط كتان-قطن",
      المقاسات: "0-3 أشهر، 3-6 أشهر، 6-9 أشهر",
      الألوان: "وردي داكن، أخضر فاتح، كريمي",
      المميزات: "إغلاق بالكبسات، أشرطة قابلة للتعديل",
    },
  },
  {
    id: "14",
    name: "Luxury Romper Collection",
    nameAr: "مجموعة رومبر فاخرة",
    slug: "luxury-romper-collection",
    description:
      "Elegant rompers in premium linen blend. Set of 3 in soft pastels with snap closures for easy changing.",
    descriptionAr:
      "رومبر أنيق من خليط الكتان الفاخر. طقم من 3 قطع بألوان باستيل ناعمة مع إغلاق بالكبسات لسهولة التغيير.",
    price: 159,
    category: "clothing",
    images: [
      {
        url: "https://res.cloudinary.com/duexs5wps/image/upload/v1779808575/36_m4qzfg.jpg",
        alt: "Luxury romper",
      },
    ],
    inStock: true,
    bestSeller: true,
    rating: 4.7,
    reviewCount: 92,
    specifications: {
      Material: "Linen-Cotton Blend",
      Sizes: "0-3M, 3-6M, 6-9M",
      Colors: "Dusty Rose, Sage, Cream",
      Features: "Snap closures, adjustable straps",
    },
    specificationsAr: {
      المادة: "خليط كتان-قطن",
      المقاسات: "0-3 أشهر، 3-6 أشهر، 6-9 أشهر",
      الألوان: "وردي داكن، أخضر فاتح، كريمي",
      المميزات: "إغلاق بالكبسات، أشرطة قابلة للتعديل",
    },
  },
  {
    id: "15",
    name: "Luxury Romper Collection",
    nameAr: "مجموعة رومبر فاخرة",
    slug: "luxury-romper-collection",
    description:
      "Elegant rompers in premium linen blend. Set of 3 in soft pastels with snap closures for easy changing.",
    descriptionAr:
      "رومبر أنيق من خليط الكتان الفاخر. طقم من 3 قطع بألوان باستيل ناعمة مع إغلاق بالكبسات لسهولة التغيير.",
    price: 159,
    category: "clothing",
    images: [
      {
        url: "https://res.cloudinary.com/duexs5wps/image/upload/v1779808575/16_sz6kyd.jpg",
        alt: "Luxury romper",
      },
    ],
    inStock: true,
    bestSeller: true,
    rating: 4.7,
    reviewCount: 92,
    specifications: {
      Material: "Linen-Cotton Blend",
      Sizes: "0-3M, 3-6M, 6-9M",
      Colors: "Dusty Rose, Sage, Cream",
      Features: "Snap closures, adjustable straps",
    },
    specificationsAr: {
      المادة: "خليط كتان-قطن",
      المقاسات: "0-3 أشهر، 3-6 أشهر، 6-9 أشهر",
      الألوان: "وردي داكن، أخضر فاتح، كريمي",
      المميزات: "إغلاق بالكبسات، أشرطة قابلة للتعديل",
    },
  },
  {
    id: "16",
    name: "Luxury Romper Collection",
    nameAr: "مجموعة رومبر فاخرة",
    slug: "luxury-romper-collection",
    description:
      "Elegant rompers in premium linen blend. Set of 3 in soft pastels with snap closures for easy changing.",
    descriptionAr:
      "رومبر أنيق من خليط الكتان الفاخر. طقم من 3 قطع بألوان باستيل ناعمة مع إغلاق بالكبسات لسهولة التغيير.",
    price: 159,
    category: "clothing",
    images: [
      {
        url: "https://res.cloudinary.com/duexs5wps/image/upload/v1779808579/13_aof2ql.jpg",
        alt: "Luxury romper",
      },
    ],
    inStock: true,
    bestSeller: true,
    rating: 4.7,
    reviewCount: 92,
    specifications: {
      Material: "Linen-Cotton Blend",
      Sizes: "0-3M, 3-6M, 6-9M",
      Colors: "Dusty Rose, Sage, Cream",
      Features: "Snap closures, adjustable straps",
    },
    specificationsAr: {
      المادة: "خليط كتان-قطن",
      المقاسات: "0-3 أشهر، 3-6 أشهر، 6-9 أشهر",
      الألوان: "وردي داكن، أخضر فاتح، كريمي",
      المميزات: "إغلاق بالكبسات، أشرطة قابلة للتعديل",
    },
  },
  {
    id: "17",
    name: "Luxury Romper Collection",
    nameAr: "مجموعة رومبر فاخرة",
    slug: "luxury-romper-collection",
    description:
      "Elegant rompers in premium linen blend. Set of 3 in soft pastels with snap closures for easy changing.",
    descriptionAr:
      "رومبر أنيق من خليط الكتان الفاخر. طقم من 3 قطع بألوان باستيل ناعمة مع إغلاق بالكبسات لسهولة التغيير.",
    price: 159,
    category: "clothing",
    images: [
      {
        url: "https://res.cloudinary.com/duexs5wps/image/upload/v1779808576/35_cwjcwh.jpg",
        alt: "Luxury romper",
      },
    ],
    inStock: true,
    bestSeller: true,
    rating: 4.7,
    reviewCount: 92,
    specifications: {
      Material: "Linen-Cotton Blend",
      Sizes: "0-3M, 3-6M, 6-9M",
      Colors: "Dusty Rose, Sage, Cream",
      Features: "Snap closures, adjustable straps",
    },
    specificationsAr: {
      المادة: "خليط كتان-قطن",
      المقاسات: "0-3 أشهر، 3-6 أشهر، 6-9 أشهر",
      الألوان: "وردي داكن، أخضر فاتح، كريمي",
      المميزات: "إغلاق بالكبسات، أشرطة قابلة للتعديل",
    },
  },
  {
    id: "18",
    name: "Luxury Romper Collection",
    nameAr: "مجموعة رومبر فاخرة",
    slug: "luxury-romper-collection",
    description:
      "Elegant rompers in premium linen blend. Set of 3 in soft pastels with snap closures for easy changing.",
    descriptionAr:
      "رومبر أنيق من خليط الكتان الفاخر. طقم من 3 قطع بألوان باستيل ناعمة مع إغلاق بالكبسات لسهولة التغيير.",
    price: 159,
    category: "clothing",
    images: [
      {
        url: "https://res.cloudinary.com/duexs5wps/image/upload/v1779808576/31_ynip8x.jpg",
        alt: "Luxury romper",
      },
    ],
    inStock: true,
    bestSeller: true,
    rating: 4.7,
    reviewCount: 92,
    specifications: {
      Material: "Linen-Cotton Blend",
      Sizes: "0-3M, 3-6M, 6-9M",
      Colors: "Dusty Rose, Sage, Cream",
      Features: "Snap closures, adjustable straps",
    },
    specificationsAr: {
      المادة: "خليط كتان-قطن",
      المقاسات: "0-3 أشهر، 3-6 أشهر، 6-9 أشهر",
      الألوان: "وردي داكن، أخضر فاتح، كريمي",
      المميزات: "إغلاق بالكبسات، أشرطة قابلة للتعديل",
    },
  },
  {
    id: "19",
    name: "Luxury Romper Collection",
    nameAr: "مجموعة رومبر فاخرة",
    slug: "luxury-romper-collection",
    description:
      "Elegant rompers in premium linen blend. Set of 3 in soft pastels with snap closures for easy changing.",
    descriptionAr:
      "رومبر أنيق من خليط الكتان الفاخر. طقم من 3 قطع بألوان باستيل ناعمة مع إغلاق بالكبسات لسهولة التغيير.",
    price: 159,
    category: "clothing",
    images: [
      {
        url: "https://res.cloudinary.com/duexs5wps/image/upload/v1779808576/33_y6qwnc.jpg",
        alt: "Luxury romper",
      },
    ],
    inStock: true,
    bestSeller: true,
    rating: 4.7,
    reviewCount: 92,
    specifications: {
      Material: "Linen-Cotton Blend",
      Sizes: "0-3M, 3-6M, 6-9M",
      Colors: "Dusty Rose, Sage, Cream",
      Features: "Snap closures, adjustable straps",
    },
    specificationsAr: {
      المادة: "خليط كتان-قطن",
      المقاسات: "0-3 أشهر، 3-6 أشهر، 6-9 أشهر",
      الألوان: "وردي داكن، أخضر فاتح، كريمي",
      المميزات: "إغلاق بالكبسات، أشرطة قابلة للتعديل",
    },
  },
  {
    id: "20",
    name: "Luxury Romper Collection",
    nameAr: "مجموعة رومبر فاخرة",
    slug: "luxury-romper-collection",
    description:
      "Elegant rompers in premium linen blend. Set of 3 in soft pastels with snap closures for easy changing.",
    descriptionAr:
      "رومبر أنيق من خليط الكتان الفاخر. طقم من 3 قطع بألوان باستيل ناعمة مع إغلاق بالكبسات لسهولة التغيير.",
    price: 159,
    category: "clothing",
    images: [
      {
        url: "https://res.cloudinary.com/duexs5wps/image/upload/v1779808576/26_tynmcf.jpg",
        alt: "Luxury romper",
      },
    ],
    inStock: true,
    bestSeller: true,
    rating: 4.7,
    reviewCount: 92,
    specifications: {
      Material: "Linen-Cotton Blend",
      Sizes: "0-3M, 3-6M, 6-9M",
      Colors: "Dusty Rose, Sage, Cream",
      Features: "Snap closures, adjustable straps",
    },
    specificationsAr: {
      المادة: "خليط كتان-قطن",
      المقاسات: "0-3 أشهر، 3-6 أشهر، 6-9 أشهر",
      الألوان: "وردي داكن، أخضر فاتح، كريمي",
      المميزات: "إغلاق بالكبسات، أشرطة قابلة للتعديل",
    },
  },
  {
    id: "21",
    name: "Luxury Romper Collection",
    nameAr: "مجموعة رومبر فاخرة",
    slug: "luxury-romper-collection",
    description:
      "Elegant rompers in premium linen blend. Set of 3 in soft pastels with snap closures for easy changing.",
    descriptionAr:
      "رومبر أنيق من خليط الكتان الفاخر. طقم من 3 قطع بألوان باستيل ناعمة مع إغلاق بالكبسات لسهولة التغيير.",
    price: 159,
    category: "clothing",
    images: [
      {
        url: "https://res.cloudinary.com/duexs5wps/image/upload/v1779808576/39_onc50n.jpg",
        alt: "Luxury romper",
      },
    ],
    inStock: true,
    bestSeller: true,
    rating: 4.7,
    reviewCount: 92,
    specifications: {
      Material: "Linen-Cotton Blend",
      Sizes: "0-3M, 3-6M, 6-9M",
      Colors: "Dusty Rose, Sage, Cream",
      Features: "Snap closures, adjustable straps",
    },
    specificationsAr: {
      المادة: "خليط كتان-قطن",
      المقاسات: "0-3 أشهر، 3-6 أشهر، 6-9 أشهر",
      الألوان: "وردي داكن، أخضر فاتح، كريمي",
      المميزات: "إغلاق بالكبسات، أشرطة قابلة للتعديل",
    },
  },
  {
    id: "22",
    name: "Luxury Romper Collection",
    nameAr: "مجموعة رومبر فاخرة",
    slug: "luxury-romper-collection",
    description:
      "Elegant rompers in premium linen blend. Set of 3 in soft pastels with snap closures for easy changing.",
    descriptionAr:
      "رومبر أنيق من خليط الكتان الفاخر. طقم من 3 قطع بألوان باستيل ناعمة مع إغلاق بالكبسات لسهولة التغيير.",
    price: 159,
    category: "clothing",
    images: [
      {
        url: "https://res.cloudinary.com/duexs5wps/image/upload/v1779808575/24_oy16yp.jpg",
        alt: "Luxury romper",
      },
    ],
    inStock: true,
    bestSeller: true,
    rating: 4.7,
    reviewCount: 92,
    specifications: {
      Material: "Linen-Cotton Blend",
      Sizes: "0-3M, 3-6M, 6-9M",
      Colors: "Dusty Rose, Sage, Cream",
      Features: "Snap closures, adjustable straps",
    },
    specificationsAr: {
      المادة: "خليط كتان-قطن",
      المقاسات: "0-3 أشهر، 3-6 أشهر، 6-9 أشهر",
      الألوان: "وردي داكن، أخضر فاتح، كريمي",
      المميزات: "إغلاق بالكبسات، أشرطة قابلة للتعديل",
    },
  },
  {
    id: "23",
    name: "Luxury Romper Collection",
    nameAr: "مجموعة رومبر فاخرة",
    slug: "luxury-romper-collection",
    description:
      "Elegant rompers in premium linen blend. Set of 3 in soft pastels with snap closures for easy changing.",
    descriptionAr:
      "رومبر أنيق من خليط الكتان الفاخر. طقم من 3 قطع بألوان باستيل ناعمة مع إغلاق بالكبسات لسهولة التغيير.",
    price: 159,
    category: "clothing",
    images: [
      {
        url: "https://res.cloudinary.com/duexs5wps/image/upload/v1779808575/25_g9107z.jpg",
        alt: "Luxury romper",
      },
    ],
    inStock: true,
    bestSeller: true,
    rating: 4.7,
    reviewCount: 92,
    specifications: {
      Material: "Linen-Cotton Blend",
      Sizes: "0-3M, 3-6M, 6-9M",
      Colors: "Dusty Rose, Sage, Cream",
      Features: "Snap closures, adjustable straps",
    },
    specificationsAr: {
      المادة: "خليط كتان-قطن",
      المقاسات: "0-3 أشهر، 3-6 أشهر، 6-9 أشهر",
      الألوان: "وردي داكن، أخضر فاتح، كريمي",
      المميزات: "إغلاق بالكبسات، أشرطة قابلة للتعديل",
    },
  },

  // Baby Accessories
  {
    id: "24",
    name: "Handmade Knit Teddy Bear",
    nameAr: "دب محبوك يدوياً",
    slug: "handmade-knit-teddy-bear",
    description:
      "Artisan-crafted teddy bear in soft organic cotton. Perfect first companion for your little one.",
    descriptionAr:
      "دب مصنوع يدوياً من القطن العضوي الناعم. الرفيق الأول المثالي لطفلك الصغير.",
    price: 65,
    category: "accessories",
    images: [
      {
        url: "https://images.unsplash.com/photo-1589737172779-748786ed5ad8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        alt: "Handmade teddy bear",
      },
    ],
    inStock: true,
    featured: true,
    rating: 5.0,
    reviewCount: 156,
    specifications: {
      Material: "100% Organic Cotton",
      Size: "30 cm",
      Safety: "CE certified, suitable from birth",
      Care: "Hand wash only",
    },
    specificationsAr: {
      المادة: "100٪ قطن عضوي",
      الحجم: "30 سم",
      السلامة: "معتمد CE، مناسب من الولادة",
      العناية: "غسيل يدوي فقط",
    },
  },
  {
    id: "25",
    name: "Premium Wooden Toy Set",
    nameAr: "طقم ألعاب خشبية فاخرة",
    slug: "premium-wooden-toy-set",
    description:
      "Educational wooden toys made from sustainable beech wood. Set includes blocks, rings, and sorting shapes.",
    descriptionAr:
      "ألعاب خشبية تعليمية مصنوعة من خشب الزان المستدام. يتضمن الطقم مكعبات وحلقات وأشكال فرز.",
    price: 119,
    category: "accessories",
    images: [
      {
        url: "https://images.unsplash.com/photo-1655087751207-1020c89f7eee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        alt: "Wooden toy set",
      },
    ],
    inStock: true,
    new: true,
    rating: 4.8,
    reviewCount: 67,
    specifications: {
      Material: "Sustainable Beech Wood",
      "Age Range": "6 months+",
      Safety: "Non-toxic finish, CE certified",
      Pieces: "15 pieces",
    },
    specificationsAr: {
      المادة: "خشب الزان المستدام",
      "الفئة العمرية": "6 أشهر+",
      السلامة: "طلاء غير سام، معتمد CE",
      القطع: "15 قطعة",
    },
  },
  {
    id: "26",
    name: "Luxury Muslin Blanket Set",
    nameAr: "طقم بطانيات موسلين فاخرة",
    slug: "luxury-muslin-blanket-set",
    description:
      "100% bamboo muslin blankets. Ultra-breathable and gets softer with each wash. Set of 3.",
    descriptionAr:
      "بطانيات موسلين من الخيزران 100٪. قابلة للتنفس للغاية وتصبح أنعم مع كل غسلة. طقم من 3 قطع.",
    price: 79,
    category: "accessories",
    images: [
      {
        url: "https://images.unsplash.com/photo-1554967651-3997ad1c43b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        alt: "Muslin blanket",
      },
    ],
    inStock: true,
    bestSeller: true,
    rating: 4.9,
    reviewCount: 234,
    specifications: {
      Material: "100% Bamboo Muslin",
      Size: "120 x 120 cm",
      Features: "Breathable, temperature regulating",
      Care: "Machine washable",
    },
    specificationsAr: {
      المادة: "100٪ موسلين خيزران",
      الحجم: "120 x 120 سم",
      المميزات: "قابل للتنفس، تنظيم الحرارة",
      العناية: "قابل للغسل في الغسالة",
    },
  },

  // Nursery Decor
  {
    id: "27",
    name: "Minimalist Wall Mobile",
    nameAr: "موبايل حائط بسيط",
    slug: "minimalist-wall-mobile",
    description:
      "Handcrafted wooden mobile with natural elements. Creates gentle movement and visual stimulation.",
    descriptionAr:
      "موبايل خشبي مصنوع يدوياً بعناصر طبيعية. يخلق حركة لطيفة وتحفيز بصري.",
    price: 95,
    category: "nursery",
    images: [
      {
        url: "https://images.unsplash.com/photo-1507225569774-01484cd2f269?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        alt: "Wall mobile",
      },
    ],
    inStock: true,
    featured: true,
    rating: 4.8,
    reviewCount: 89,
    specifications: {
      Material: "Natural Wood & Cotton",
      Dimensions: "60 cm diameter",
      Style: "Scandinavian minimalist",
      Installation: "Ceiling mount included",
    },
    specificationsAr: {
      المادة: "خشب طبيعي وقطن",
      الأبعاد: "60 سم قطر",
      النمط: "إسكندنافي بسيط",
      التركيب: "حامل سقف مدرج",
    },
  },
  {
    id: "28",
    name: "Soft Night Light",
    nameAr: "ضوء ليلي ناعم",
    slug: "soft-night-light",
    description:
      "Gentle LED night light with adjustable brightness. USB rechargeable with 12-hour battery life.",
    descriptionAr:
      "ضوء ليلي LED لطيف مع سطوع قابل للتعديل. قابل لإعادة الشحن عبر USB مع عمر بطارية 12 ساعة.",
    price: 49,
    category: "nursery",
    images: [
      {
        url: "https://images.unsplash.com/photo-1749703996043-f9a937fe6d52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        alt: "Night light",
      },
    ],
    inStock: true,
    new: true,
    rating: 4.7,
    reviewCount: 112,
    specifications: {
      Type: "LED with dimmer",
      Battery: "12 hours",
      Charging: "USB-C",
      Brightness: "3 levels",
    },
    specificationsAr: {
      النوع: "LED مع خافت",
      البطارية: "12 ساعة",
      الشحن: "USB-C",
      السطوع: "3 مستويات",
    },
  },

  // Baby Essentials
  {
    id: "29",
    name: "Luxury Diaper Bag",
    nameAr: "حقيبة حفاضات فاخرة",
    slug: "luxury-diaper-bag",
    description:
      "Premium vegan leather diaper bag with multiple compartments. Converts to backpack or shoulder bag.",
    descriptionAr:
      "حقيبة حفاضات من الجلد النباتي الفاخر مع أقسام متعددة. تتحول إلى حقيبة ظهر أو حقيبة كتف.",
    price: 189,
    category: "essentials",
    images: [
      {
        url: "https://images.unsplash.com/photo-1616666428759-679a7d578307?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        alt: "Luxury diaper bag",
      },
    ],
    inStock: true,
    featured: true,
    bestSeller: true,
    rating: 4.9,
    reviewCount: 178,
    specifications: {
      Material: "Vegan Leather",
      Capacity: "25L",
      Features: "Insulated pockets, changing pad included",
      Styles: "Backpack or shoulder carry",
    },
    specificationsAr: {
      المادة: "جلد نباتي",
      السعة: "25 لتر",
      المميزات: "جيوب معزولة، حصيرة تغيير مدرجة",
      الأنماط: "حقيبة ظهر أو حقيبة كتف",
    },
  },
  {
    id: "30",
    name: "Organic Cotton Swaddle Set",
    nameAr: "طقم قماط قطن عضوي",
    slug: "organic-cotton-swaddle-set",
    description:
      "Breathable organic cotton swaddles with gentle stretch. Set of 4 in coordinating colors.",
    descriptionAr:
      "قماط قطن عضوي قابل للتنفس مع تمدد لطيف. طقم من 4 قطع بألوان متناسقة.",
    price: 69,
    category: "essentials",
    images: [
      {
        url: "https://images.unsplash.com/photo-1632337949070-1fdb69fe2159?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        alt: "Swaddle set",
      },
    ],
    inStock: true,
    rating: 4.8,
    reviewCount: 145,
    specifications: {
      Material: "100% Organic Cotton",
      Size: "120 x 120 cm",
      Stretch: "4-way stretch",
      Certification: "GOTS certified",
    },
    specificationsAr: {
      المادة: "100٪ قطن عضوي",
      الحجم: "120 x 120 سم",
      التمدد: "تمدد في 4 اتجاهات",
      الشهادة: "معتمد GOTS",
    },
  },

  // Gift Sets
  {
    id: "31",
    name: "Newborn Welcome Gift Box",
    nameAr: "صندوق هدية ترحيب بالمولود",
    slug: "newborn-welcome-gift-box",
    description:
      "Curated luxury gift set including organic clothing, blanket, and teddy bear. Beautifully packaged.",
    descriptionAr:
      "طقم هدية فاخر منسق يشمل ملابس عضوية وبطانية ودب. معبأ بشكل جميل.",
    price: 249,
    originalPrice: 299,
    category: "gifts",
    images: [
      {
        url: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        alt: "Gift box",
      },
    ],
    inStock: true,
    featured: true,
    bestSeller: true,
    rating: 5.0,
    reviewCount: 267,
    specifications: {
      Contents: "3 onesies, blanket, teddy, hat",
      Size: "Newborn - 3 months",
      Packaging: "Luxury gift box with ribbon",
      Customization: "Optional embroidery",
    },
    specificationsAr: {
      المحتويات: "3 بدلات، بطانية، دب، قبعة",
      الحجم: "حديثي الولادة - 3 أشهر",
      التعبئة: "صندوق هدية فاخر مع شريط",
      التخصيص: "تطريز اختياري",
    },
  },

  // Feeding Products
  {
    id: "32",
    name: "Silicone Feeding Set",
    nameAr: "طقم تغذية سيليكون",
    slug: "silicone-feeding-set",
    description:
      "Complete feeding set in food-grade silicone. Includes plate, bowl, cup, and utensils. BPA-free.",
    descriptionAr:
      "طقم تغذية كامل من السيليكون الغذائي. يتضمن طبق ووعاء وكوب وأدوات. خالي من BPA.",
    price: 59,
    category: "feeding",
    images: [
      {
        url: "https://images.unsplash.com/photo-1647687663833-fcc91fd99792?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        alt: "Feeding set",
      },
    ],
    inStock: true,
    new: true,
    rating: 4.7,
    reviewCount: 98,
    specifications: {
      Material: "Food-grade silicone",
      "Set Includes": "Plate, bowl, cup, spoon, fork",
      Features: "Dishwasher safe, microwave safe",
      Colors: "Dusty Rose, Sage, Cream",
    },
    specificationsAr: {
      المادة: "سيليكون غذائي",
      "يتضمن الطقم": "طبق، وعاء، كوب، ملعقة، شوكة",
      المميزات: "آمن في غسالة الصحون، آمن في الميكروويف",
      الألوان: "وردي داكن، أخضر فاتح، كريمي",
    },
  },

  // Baby Care Prodcuts
  {
    id: "33",
    name: "Baby Powder",
    nameAr: "بودرة أطفال",
    slug: "baby-powder",
    description: "Soft powder for baby comfort and freshness.",
    descriptionAr:
      "بودرة ناعمة تمنح طفلك إحساسًا بالراحة والانتعاش وتحافظ على جفاف البشرة.",
    price: 59,
    category: "baby care",
    images: [
      {
        url: "https://res.cloudinary.com/duexs5wps/image/upload/v1779813988/8_f7cssb.jpg",
        alt: "Baby Powder",
      },
    ],
    inStock: true,
    new: true,
    rating: 4.7,
    reviewCount: 98,
    specifications: {
      Type: "Baby powder",
      "Skin Type": "Sensitive skin",
      Features: "Soft texture, long-lasting freshness",
      Size: "200g",
    },
    specificationsAr: {
      النوع: "بودرة أطفال",
      "نوع البشرة": "البشرة الحساسة",
      المميزات: "ملمس ناعم، انتعاش يدوم طويلًا",
      الحجم: "200 جم",
    },
  },
  {
    id: "34",
    name: "Baby Oil",
    nameAr: "زيت أطفال",
    slug: "baby-oil",
    description: "Nourishing oil for delicate baby skin.",
    descriptionAr: "زيت مغذي يرطب بشرة الطفل الحساسة ويمنحها نعومة فائقة.",
    price: 59,
    category: "baby care",
    images: [
      {
        url: "https://res.cloudinary.com/duexs5wps/image/upload/v1779813989/9_qv8jjt.jpg",
        alt: "Baby Oil",
      },
    ],
    inStock: true,
    new: true,
    rating: 4.7,
    reviewCount: 98,
    specifications: {
      Type: "Baby oil",
      "Skin Type": "Sensitive skin",
      Features: "Deep hydration, gentle formula",
      Size: "250ml",
    },
    specificationsAr: {
      النوع: "زيت أطفال",
      "نوع البشرة": "البشرة الحساسة",
      المميزات: "ترطيب عميق، تركيبة لطيفة",
      الحجم: "250 مل",
    },
  },
  {
    id: "35",
    name: "Baby Shampoo & Conditioner",
    nameAr: "شامبو وبلسم أطفال",
    slug: "baby-shampoo-conditioner",
    description: "Gentle 2-in-1 care for delicate baby hair and scalp.",
    descriptionAr: "شامبو وبلسم 2 في 1 لتنظيف وترطيب شعر وفروة رأس الطفل بلطف.",
    price: 59,
    category: "baby care",
    images: [
      {
        url: "https://res.cloudinary.com/duexs5wps/image/upload/v1779813985/3_qer7cy.jpg",
        alt: "Baby Shampoo & Conditioner",
      },
    ],
    inStock: true,
    new: true,
    rating: 4.7,
    reviewCount: 98,
    specifications: {
      Type: "2-in-1 shampoo & conditioner",
      "Hair Type": "Baby delicate hair",
      Features: "Tear-free, gentle cleansing",
      Size: "300ml",
    },
    specificationsAr: {
      النوع: "شامبو وبلسم 2 في 1",
      "نوع الشعر": "شعر الأطفال الرقيق",
      المميزات: "لا يسبب الدموع، تنظيف لطيف",
      الحجم: "300 مل",
    },
  },
  {
    id: "36",
    name: "Baby Moisturizer",
    nameAr: "مرطب أطفال",
    slug: "baby-moisturizer",
    description: "Gentle moisturizer for soft and delicate baby skin.",
    descriptionAr: "مرطب لطيف يحافظ على نعومة وترطيب بشرة الطفل الحساسة.",
    price: 59,
    category: "baby care",
    images: [
      {
        url: "https://res.cloudinary.com/duexs5wps/image/upload/v1779813985/4_kjtkli.jpg",
        alt: "Baby Moisturizer",
      },
    ],
    inStock: true,
    new: true,
    rating: 4.7,
    reviewCount: 98,
    specifications: {
      Type: "Baby moisturizer",
      "Skin Type": "Sensitive skin",
      Features: "Lightweight, long-lasting hydration",
      Size: "200ml",
    },
    specificationsAr: {
      النوع: "مرطب أطفال",
      "نوع البشرة": "البشرة الحساسة",
      المميزات: "خفيف، ترطيب يدوم طويلًا",
      الحجم: "200 مل",
    },
  },
  {
    id: "37",
    name: "Baby Perfume",
    nameAr: "عطر أطفال",
    slug: "baby-perfume",
    description: "Soft and light baby fragrance with a calming touch.",
    descriptionAr: "عطر أطفال خفيف وناعم يمنح طفلك رائحة منعشة ولمسة هادئة.",
    price: 59,
    category: "baby care",
    images: [
      {
        url: "https://res.cloudinary.com/duexs5wps/image/upload/v1779813986/5_o5s4tm.jpg",
        alt: "Baby Perfume",
      },
    ],
    inStock: true,
    new: true,
    rating: 4.7,
    reviewCount: 98,
    specifications: {
      Type: "Baby perfume",
      Fragrance: "Soft floral scent",
      Features: "Alcohol-free, gentle formula",
      Size: "100ml",
    },
    specificationsAr: {
      النوع: "عطر أطفال",
      الرائحة: "رائحة زهرية خفيفة",
      المميزات: "خالٍ من الكحول، تركيبة لطيفة",
      الحجم: "100 مل",
    },
  },
  {
    id: "38",
    name: "Baby Shower Gel",
    nameAr: "شاور جل أطفال",
    slug: "baby-shower-gel",
    description: "Gentle shower gel for delicate baby skin.",
    descriptionAr:
      "شاور جل لطيف ينظف بشرة الطفل الحساسة بلطف ويحافظ على نعومتها.",
    price: 59,
    category: "baby care",
    images: [
      {
        url: "https://res.cloudinary.com/duexs5wps/image/upload/v1779813986/6_bu3lzz.jpg",
        alt: "Baby Shower Gel",
      },
    ],
    inStock: true,
    new: true,
    rating: 4.7,
    reviewCount: 98,
    specifications: {
      Type: "Baby shower gel",
      "Skin Type": "Sensitive skin",
      Features: "Gentle cleansing, refreshing scent",
      Size: "300ml",
    },
    specificationsAr: {
      النوع: "شاور جل أطفال",
      "نوع البشرة": "البشرة الحساسة",
      المميزات: "تنظيف لطيف، رائحة منعشة",
      الحجم: "300 مل",
    },
  },
  {
    id: "39",
    name: "Baby Hair Serum",
    nameAr: "سيرم شعر أطفال",
    slug: "baby-hair-serum",
    description: "Soft serum for healthy and silky baby hair.",
    descriptionAr:
      "سيرم ناعم يساعد على ترطيب وتنعيم شعر الطفل ليبدو صحيًا ولامعًا.",
    price: 59,
    category: "baby care",
    images: [
      {
        url: "https://res.cloudinary.com/duexs5wps/image/upload/v1779813987/7_dxt0xx.jpg",
        alt: "Baby Hair Serum",
      },
    ],
    inStock: true,
    new: true,
    rating: 4.7,
    reviewCount: 98,
    specifications: {
      Type: "Hair serum",
      "Hair Type": "Baby delicate hair",
      Features: "Smooth finish, lightweight formula",
      Size: "120ml",
    },
    specificationsAr: {
      النوع: "سيرم شعر",
      "نوع الشعر": "شعر الأطفال الرقيق",
      المميزات: "نعومة ولمعان، تركيبة خفيفة",
      الحجم: "120 مل",
    },
  },
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter((p) => p.featured);
};

export const getBestSellers = (): Product[] => {
  return products.filter((p) => p.bestSeller);
};

export const getNewProducts = (): Product[] => {
  return products.filter((p) => p.new);
};

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((p) => p.slug === slug);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === "all") return products;
  return products.filter((p) => p.category === category);
};
