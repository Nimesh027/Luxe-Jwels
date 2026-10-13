import type { GuideItemDetail, GuideCategoryOverview, GuideCategory } from "@/types/guide";
import { shapeGuidesData } from "./shapeGuideData";

export { shapeGuidesData };

export const goldGuidesData: GuideItemDetail[] = [
  {
    id: "18k",
    slug: "18k",
    category: "gold",
    name: "18K Gold Guide (750 Hallmark)",
    shortName: "18K Gold",
    purityOrOrigin: "75.0% Pure Gold • 25% Precious Alloy",
    hallmarkOrStamp: "AU 750 / 18KT",
    tagline: "The premier global luxury standard balancing sublime rich color with heirloom durability.",
    description:
      "18 Karat gold contains 75% pure gold by weight combined with 25% strengthening alloys like silver, copper, and zinc. Recognized by premier luxury jewellery houses worldwide, 18K gold offers the ideal saturation of natural warm yellow while providing the structural integrity required to secure high-value diamonds and precious gemstones.",
    overview:
      "18 Karat gold contains 75% pure gold by weight combined with 25% strengthening alloys like silver, copper, and zinc. Recognized by premier luxury jewellery houses worldwide, 18K gold offers the ideal saturation of natural warm yellow while providing the structural integrity required to secure high-value diamonds and precious gemstones.",
    historyAndCraft:
      "First standardized in Europe during the Renaissance to prevent the rapid wear of pure gold coins, 18K gold remains the gold standard in fine jewellery from Place Vendôme in Paris to Fifth Avenue in New York. Its alloy balance allows master goldsmiths to formulate three distinct luxury palettes: warm yellow gold, lustrous palladium-bleached white gold, and romantic copper-rich rose gold.",
    image: "/images/guide/gold/gold-18k.jpg",
    detailImage: "/images/guide/gold/gold-18k.jpg",
    accentColor: "#D4AF37",
    metrics: [
      { label: "Purity Ratio", value: "75.0% Pure", hint: "18 parts pure gold out of 24" },
      { label: "Hallmark Code", value: "750", hint: "Official BIS & European Assay stamp" },
      { label: "Mohs Hardness", value: "2.8 – 3.0", hint: "Resilient for daily fine jewellery" },
      { label: "Color Tones", value: "Yellow, White, Rose", hint: "All 3 metallurgical variations" },
    ],
    process: [
      {
        number: "1",
        title: "Purity & Composition",
        subtitle: "18/24 Pure Gold Ratio",
        copy: "Every gram of 18K gold contains exactly 750 parts per thousand pure gold. The remaining 250 parts consist of silver, copper, and zinc calibrated to create superior tensile strength.",
        visualType: "purity_composition",
        visualData: { purePercent: 75, alloyPercent: 25, hallmark: "750" },
      },
      {
        number: "2",
        title: "Color Variations",
        subtitle: "Yellow, White & Rose Tones",
        copy: "By modifying the 25% alloy matrix, our goldsmiths formulate three distinct luxury shades: classic sunlit Yellow Gold, Rhodium-finished White Gold, and blushing Rose Gold.",
        visualType: "color_variants",
        visualData: {
          variants: [
            { name: "Yellow Gold", color: "#E5C158", composition: "75% Gold, 15% Silver, 10% Copper" },
            { name: "White Gold", color: "#EFEFE8", composition: "75% Gold, 15% Palladium/Nickel, 10% Zinc" },
            { name: "Rose Gold", color: "#E8A38B", composition: "75% Gold, 22.25% Copper, 2.75% Silver" },
          ],
        },
      },
      {
        number: "3",
        title: "Durability & Wear",
        subtitle: "Hardness Matrix",
        copy: "18K Gold achieves a Vickers hardness of 130–160 HV. It holds delicate diamond prongs tightly without bending, while retaining comfortable everyday ductility on the hand.",
        visualType: "hardness_gauge",
        visualData: { rating: 75, label: "Optimal Luxury Resilience", score: "145 HV" },
      },
      {
        number: "4",
        title: "Assay & Hallmarking",
        subtitle: "Laser Stamping Standards",
        copy: "Every finished Luxe Jewels 18K piece undergoes X-ray fluorescence spectrometry testing and is laser inscribed with the legal 750 hallmark, maker's seal, and assay purity mark.",
        visualType: "hallmark_stamp",
        visualData: { stampText: "750", standard: "BIS Certified & European Assay", purity: "18KT" },
      },
    ],
    specs: [
      { label: "Karat Purity", value: "18 Karats (18/24 parts pure)" },
      { label: "Gold Percentage", value: "75.00% pure elemental gold" },
      { label: "Hallmarking Stamp", value: "750, 18K, 18KT" },
      { label: "Specific Gravity / Density", value: "15.2 – 15.6 g/cm³" },
      { label: "Vickers Hardness (HV)", value: "130 – 160 HV (Work-hardened)" },
      { label: "Skin Hypoallergenic Rating", value: "Excellent (Nickel-safe European alloy)" },
      { label: "Tarnish Resistance", value: "Virtually impervious to oxidation" },
      { label: "Recommended Setting", value: "Solitaire engagement rings, diamond tennis bracelets" },
    ],
    bestFor: {
      summary:
        "18K Gold is the undisputed international standard for diamond engagement rings, luxury wedding bands, high-jewellery solitaires, and heirloom family gifts.",
      highlights: [
        "Supreme balance of high pure gold content and dependable daily scratch resistance.",
        "Preferred standard by premier Swiss watchmakers and French luxury maisons.",
        "Exquisite natural yellow glow richer and warmer than 14k or 9k.",
        "Holds fine prong settings securely without warping or stretching under pressure.",
      ],
      recommendedJewellery: [
        "Round brilliant and emerald cut diamond solitaire engagement rings",
        "Diamond eternity and half-eternity wedding bands",
        "Handcrafted Italian chain necklaces and pendant mountings",
        "Heirloom signet rings and gemstone cocktail rings",
      ],
    },
    pros: [
      "Luxurious, rich golden saturation that never looks pale or washed out",
      "Resistant to everyday tarnish, skin perspiration, and atmospheric corrosion",
      "Retains high intrinsic commodity and resale market value (75% pure gold)",
      "Gentle on sensitive skin due to low alloy impurity levels",
    ],
    considerations: [
      "Slightly softer than 14K or 9K, will develop a gentle authentic patina over decades of heavy wear",
      "Higher price point per gram than 14K, 10K, or 9K due to high pure gold content",
    ],
    careTips: [
      "Clean with warm water, mild ammonia-free soap, and a soft-bristled baby toothbrush.",
      "Remove before heavy weightlifting, gardening, or contact with chlorine bleach.",
      "Store individually in micro-suede pouches to prevent scratching against diamonds.",
      "Have prongs professionally inspected once per year by a certified goldsmith.",
    ],
    faqs: [
      {
        question: "Can I wear 18K gold every day?",
        answer:
          "Yes, 18K gold is specifically formulated for lifetime daily wear. Engagement rings and wedding bands crafted in 18K withstand daily activities while preserving high pure gold purity.",
      },
      {
        question: "Does 18K gold tarnish or turn skin green?",
        answer:
          "No, 18K gold does not tarnish or discolor your skin. Its 75% gold concentration protects against oxidation and chemical reaction.",
      },
      {
        question: "How does 18K compare to 14K and 22K?",
        answer:
          "18K has richer color and higher gold content than 14K, but is far more durable and scratch-resistant than 22K or 24K, making it the sweet spot for fine jewellery.",
      },
    ],
    relatedProductIds: ["prod-1", "prod-2", "prod-3", "prod-7"],
  },
  {
    id: "22k",
    slug: "22k",
    category: "gold",
    name: "22K Gold Guide (916 Hallmark)",
    shortName: "22K Gold",
    purityOrOrigin: "91.6% Pure Gold • 8.4% Alloy",
    hallmarkOrStamp: "BIS 916 / 22KT",
    tagline: "The regal bridal standard renowned for radiant sunlit color and unmatched cultural prestige.",
    description:
      "22 Karat gold contains an extraordinary 91.6% pure gold by weight. Revered across Asia, the Middle East, and Southern Europe, 22K gold showcases a deep, luminous golden yellow that cannot be replicated by lower karats. It represents the height of auspicious gifting, bridal adornment, and generational wealth.",
    overview:
      "22 Karat gold contains an extraordinary 91.6% pure gold by weight. Revered across Asia, the Middle East, and Southern Europe, 22K gold showcases a deep, luminous golden yellow that cannot be replicated by lower karats. It represents the height of auspicious gifting, bridal adornment, and generational wealth.",
    historyAndCraft:
      "Historically favored by royal dynasties and Mughal goldsmiths, 22K gold is malleable enough for breathtaking hand-repoussé, intricate filigree, and kundan-meenakari craftsmanship. Stamped with the iconic 916 BIS hallmark, every piece embodies pure artisanal heritage.",
    image: "/images/guide/gold/gold-22k.jpg",
    detailImage: "/images/guide/gold/gold-22k.jpg",
    accentColor: "#F59E0B",
    metrics: [
      { label: "Purity Ratio", value: "91.6% Pure", hint: "22 parts pure gold out of 24" },
      { label: "Hallmark Code", value: "916", hint: "Official BIS 916 Hallmark" },
      { label: "Mohs Hardness", value: "2.6 – 2.8", hint: "Soft, silky, malleable" },
      { label: "Investment Value", value: "91.6% Commodity", hint: "Very close to bullion spot price" },
    ],
    process: [
      {
        number: "1",
        title: "Purity & Composition",
        subtitle: "916/1000 Elemental Purity",
        copy: "22K gold contains 916.7 parts pure gold blended with just 83.3 parts of copper and silver to give structural consistency without compromising natural color.",
        visualType: "purity_composition",
        visualData: { purePercent: 91.6, alloyPercent: 8.4, hallmark: "916" },
      },
      {
        number: "2",
        title: "Regal Sunlit Luster",
        subtitle: "Unmatched Deep Yellow Tone",
        copy: "The color of 22K gold is instantly recognizable by its rich, warm honey-amber glow that never looks pale. It radiates pure warmth under all lighting conditions.",
        visualType: "color_variants",
        visualData: {
          variants: [
            { name: "Traditional 22K Yellow", color: "#F5B025", composition: "91.6% Gold, 5.0% Silver, 3.4% Copper" },
            { name: "Warm Antique 22K", color: "#EAA015", composition: "91.6% Gold, 2.5% Silver, 5.9% Copper" },
          ],
        },
      },
      {
        number: "3",
        title: "Artisanal Malleability",
        subtitle: "Master Goldsmith Forming",
        copy: "With 91.6% purity, 22K allows master silversmiths and goldsmiths to execute ultra-fine granulation, intricate filigree, and hand-chased repoussé work impossible in harder alloys.",
        visualType: "hardness_gauge",
        visualData: { rating: 50, label: "Artisanal Bridal Softness", score: "80 HV" },
      },
      {
        number: "4",
        title: "BIS 916 Hallmarking",
        subtitle: "Triangular Laser Hallmark",
        copy: "Certified with the official BIS triangular stamp, 6-digit HUID (Hallmark Unique Identification), and purity seal guaranteeing exact bullion weight and chemical assay.",
        visualType: "hallmark_stamp",
        visualData: { stampText: "916", standard: "BIS HUID Certified Hallmark", purity: "22KT" },
      },
    ],
    specs: [
      { label: "Karat Purity", value: "22 Karats (22/24 parts pure)" },
      { label: "Gold Percentage", value: "91.67% pure elemental gold" },
      { label: "Hallmarking Stamp", value: "916, 22K, 22KT, BIS 916" },
      { label: "Specific Gravity / Density", value: "17.6 – 17.9 g/cm³" },
      { label: "Vickers Hardness (HV)", value: "70 – 90 HV" },
      { label: "Skin Hypoallergenic Rating", value: "Hypoallergenic (99% skin compatibility)" },
      { label: "Tarnish Resistance", value: "Impervious to tarnish and discoloration" },
      { label: "Recommended Jewellery", value: "Bridal necklaces, solid bangles, chains, earrings" },
    ],
    bestFor: {
      summary:
        "22K Gold is best suited for traditional bridal trousseaus, ceremonial temple jewellery, solid chains, and heirloom bangles that carry ceremonial and generational value.",
      highlights: [
        "Unrivaled radiant sunlit golden color that signifies status and heritage.",
        "Highest resale value for jewellery, trading closest to market bullion spot rate.",
        "Completely hypoallergenic and gentle even for newborn baby ear piercings.",
        "Can be recycled and refined into new jewellery with near-zero material degradation.",
      ],
      recommendedJewellery: [
        "Traditional choker necklaces and layered bridal harams",
        "Handcrafted solid gold bangles and kadas",
        "Classic curb, rope, and box chain necklaces",
        "Coin pendants and ceremonial temple ornaments",
      ],
    },
    pros: [
      "Deepest, most authentic golden color available in wearable fine jewellery",
      "Very high bullion investment value (91.6% pure gold backing)",
      "Zero allergic reactions; safe for sensitive skin",
      "Highly liquid commodity universally recognized across global markets",
    ],
    considerations: [
      "Not recommended for delicate diamond engagement ring prongs (diamonds require 18K or 14K)",
      "Can bend under extreme physical stress; best reserved for special occasions and necklaces",
    ],
    careTips: [
      "Wipe clean after wear with a soft chamois microfibre cloth.",
      "Do not wear during gym workouts or heavy manual handling to prevent bending.",
      "Store flat in padded velvet boxes to avoid scratching against other jewellery pieces.",
    ],
    faqs: [
      {
        question: "Can diamonds be set in 22K gold?",
        answer:
          "While small accent stones can be bezel-set, large center solitaire diamonds are rarely set in 22K prongs because the metal is soft. Most jewellers prefer 18K for solitaire engagement rings.",
      },
      {
        question: "Is 22K gold good for investment?",
        answer:
          "Yes, 22K jewellery has low alloy content and trades very close to real-time bullion gold market rates, making it both a luxury adornment and a liquid store of value.",
      },
    ],
    relatedProductIds: ["prod-2", "prod-4", "prod-5"],
  },
  {
    id: "24k",
    slug: "24k",
    category: "gold",
    name: "24K Pure Gold Guide (999 Hallmark)",
    shortName: "24K Gold",
    purityOrOrigin: "99.9% Pure Elemental Gold",
    hallmarkOrStamp: "LBMA 999 / 24KT",
    tagline: "100% pure elemental gold — the indestructible global standard of store of value and ancient worship.",
    description:
      "24 Karat gold is pure elemental gold (99.9% / 999 purity). Untouched by alloying metals, it never tarnishes, rusts, or corrodes throughout millennia. In jewellery, 24K gold is reserved for pure bullion bars, ceremonial wedding ornaments, and investment collectibles.",
    overview:
      "24 Karat gold is pure elemental gold (99.9% / 999 purity). Untouched by alloying metals, it never tarnishes, rusts, or corrodes throughout millennia. In jewellery, 24K gold is reserved for pure bullion bars, ceremonial wedding ornaments, and investment collectibles.",
    historyAndCraft:
      "From King Tutankhamun's golden death mask to modern central bank bullion reserves, 24K gold has reigned supreme for over 5,000 years. Because pure gold is naturally ductile and soft, crafting solid 24K jewellery requires specialized heavy-gauge fabrication techniques.",
    image: "/images/guide/gold/gold-24k.jpg",
    detailImage: "/images/guide/gold/gold-24k.jpg",
    accentColor: "#EAB308",
    metrics: [
      { label: "Purity Ratio", value: "99.9% Pure", hint: "24 parts pure gold out of 24" },
      { label: "Hallmark Code", value: "999 / 999.9", hint: "Four nines fine bullion assay" },
      { label: "Mohs Hardness", value: "2.5", hint: "Softest elemental noble metal" },
      { label: "Resale Liquidity", value: "100% Spot Rate", hint: "Immediate global cash liquidity" },
    ],
    process: [
      {
        number: "1",
        title: "Pure Refining",
        subtitle: "Electrolytic Wohlwill Process",
        copy: "Pure 24K gold is refined using advanced chemical and electrolytic processes that strip every trace of base metal, achieving 999.9 fine purity certified by LBMA accredited refineries.",
        visualType: "purity_composition",
        visualData: { purePercent: 99.9, alloyPercent: 0.1, hallmark: "999" },
      },
      {
        number: "2",
        title: "The Ultimate Golden Hue",
        subtitle: "Untainted Natural Color",
        copy: "24K gold has a distinctive rich orange-yellow warmth that is physically impossible to duplicate. Its atomic light reflection is a fundamental physical constant of nature.",
        visualType: "color_variants",
        visualData: {
          variants: [
            { name: "Pure 24K Elemental Gold", color: "#F7BE16", composition: "99.9% Pure Aurum (Au)" },
          ],
        },
      },
      {
        number: "3",
        title: "Pure Noble Metal Chemistry",
        subtitle: "Zero Oxidation",
        copy: "Unlike silver or copper, gold does not react with oxygen, water, or sulfur. A 24K gold coin recovered from an ocean shipwreck thousands of years later remains completely pristine.",
        visualType: "hardness_gauge",
        visualData: { rating: 30, label: "Pure Malleable Ingot", score: "25 HV" },
      },
      {
        number: "4",
        title: "Assay Certification",
        subtitle: "Tamper-Evident Packaging",
        copy: "All Luxe Jewels 24K investment bars and coins come in tamper-evident CertiPAMP or government assay certicards with individual serial numbers matching blockchain registries.",
        visualType: "hallmark_stamp",
        visualData: { stampText: "999.9", standard: "LBMA / NABL Certified Refinery", purity: "24KT" },
      },
    ],
    specs: [
      { label: "Karat Purity", value: "24 Karats (24/24 parts pure)" },
      { label: "Gold Percentage", value: "99.90% – 99.99% pure elemental gold" },
      { label: "Hallmarking Stamp", value: "999, 999.9, 24K, 24KT" },
      { label: "Specific Gravity / Density", value: "19.32 g/cm³" },
      { label: "Melting Point", value: "1,064.18 °C (1,947.52 °F)" },
      { label: "Skin Hypoallergenic Rating", value: "100% Inert and Hypoallergenic" },
      { label: "Tarnish Resistance", value: "Absolute zero tarnish or oxidation" },
      { label: "Best Uses", value: "Bullion coins, investment bars, ceremonial ornaments" },
    ],
    bestFor: {
      summary:
        "24K Gold is the gold standard for investment asset protection, retirement wealth storage, baby birth gifts, and ceremonial religious offerings.",
      highlights: [
        "Highest possible purity with 100% real-time bullion liquidity worldwide.",
        "Completely immune to corrosion, tarnish, and chemical decay forever.",
        "Zero alloying metals means absolute zero risk of skin allergies.",
        "The ultimate store of generational purchasing power throughout human history.",
      ],
      recommendedJewellery: [
        "Certified minted gold coins (1g to 50g)",
        "Numbered cast and minted investment bars",
        "Traditional heavy ceremonial bridal bands and pendants",
        "Auspicious deities and heirloom gold ingots",
      ],
    },
    pros: [
      "Purest gold possible (99.99% pure elemental gold)",
      "Universal global currency recognized at every bank and jeweller on Earth",
      "Immune to rust, tarnishing, and degradation across generations",
    ],
    considerations: [
      "Too soft for everyday thin rings or prong-set diamond mounts",
      "Scratches and deforms easily if dropped on hard surfaces",
    ],
    careTips: [
      "Handle with cotton gloves to prevent oil fingerprint smudging on mint surfaces.",
      "Keep bullion in original assay cards to protect maximum resale premium.",
    ],
    faqs: [
      {
        question: "Why isn't all jewellery made in 24K gold?",
        answer:
          "Pure 24K gold is very soft and malleable. Fine prongs made of 24K would bend, risking diamond loss. Mixing small amounts of alloy (like in 18K or 14K) gives the metal the strength needed for secure rings.",
      },
      {
        question: "Can 24K gold ever fade or lose its shine?",
        answer:
          "Never. Elemental gold does not oxidize, fade, or react with ambient moisture. Its shine is eternal.",
      },
    ],
    relatedProductIds: ["prod-4", "prod-5"],
  },
  {
    id: "14k",
    slug: "14k",
    category: "gold",
    name: "14K Gold Guide (585 Hallmark)",
    shortName: "14K Gold",
    purityOrOrigin: "58.5% Pure Gold • 41.5% Strengthening Alloy",
    hallmarkOrStamp: "585 / 14KT",
    tagline: "The most durable everyday gold standard offering optimal wear resistance and accessible luxury.",
    description:
      "14 Karat gold combines 58.5% pure gold with 41.5% copper, silver, nickel, or zinc. It is the most popular gold karat in North America, accounting for over 70% of wedding rings and daily jewellery due to its superior scratch resistance and attractive price point.",
    overview:
      "14 Karat gold combines 58.5% pure gold with 41.5% copper, silver, nickel, or zinc. It is the most popular gold karat in North America, accounting for over 70% of wedding rings and daily jewellery due to its superior scratch resistance and attractive price point.",
    historyAndCraft:
      "Developed in the 19th century to satisfy the demand for resilient fine jewellery during the Industrial Era, 14K gold struck the sweet spot between authentic gold luster and high mechanical strength. It remains the top choice for active lifestyles.",
    image: "/images/guide/gold/gold-14k.jpg",
    detailImage: "/images/guide/gold/gold-14k.jpg",
    accentColor: "#E0B354",
    metrics: [
      { label: "Purity Ratio", value: "58.5% Pure", hint: "14 parts pure gold out of 24" },
      { label: "Hallmark Code", value: "585", hint: "International 585 assay mark" },
      { label: "Mohs Hardness", value: "3.5 – 4.0", hint: "Significantly harder than 18K" },
      { label: "Everyday Durability", value: "Top Tier", hint: "Best for active lifestyle wear" },
    ],
    process: [
      {
        number: "1",
        title: "Balanced Alloying",
        subtitle: "58.5% Gold + 41.5% Alloy",
        copy: "By incorporating 415 parts of durable copper, silver, and zinc per thousand, 14K creates a crystalline lattice that resists surface micro-dents and abrasion.",
        visualType: "purity_composition",
        visualData: { purePercent: 58.5, alloyPercent: 41.5, hallmark: "585" },
      },
      {
        number: "2",
        title: "Subtle Warm Luster",
        subtitle: "Sophisticated Color Palette",
        copy: "14K yellow gold displays a soft, subtle champagne yellow that pairs effortlessly with modern casual and business attire without overpowering the stone.",
        visualType: "color_variants",
        visualData: {
          variants: [
            { name: "14K Yellow Gold", color: "#E0C878", composition: "58.5% Gold, 29% Copper, 12.5% Silver" },
            { name: "14K White Gold", color: "#F0EFEB", composition: "58.5% Gold, 20% Nickel/Pd, 11.5% Zinc, 10% Copper" },
            { name: "14K Rose Gold", color: "#E59E87", composition: "58.5% Gold, 35% Copper, 6.5% Silver" },
          ],
        },
      },
      {
        number: "3",
        title: "Heavy Daily Resistance",
        subtitle: "Vickers 160+ HV",
        copy: "Its increased alloy density gives 14K prongs immense tensile grip, keeping diamonds firmly locked in place even through accidental knocks against hard countertops.",
        visualType: "hardness_gauge",
        visualData: { rating: 85, label: "Hard Everyday Resilience", score: "165 HV" },
      },
      {
        number: "4",
        title: "Assay & 585 Mark",
        subtitle: "Precision Hallmarking",
        copy: "Laser engraved with 585 or 14K on inner ring shanks and earring backings, certifying verified metal purity and legal manufacturing integrity.",
        visualType: "hallmark_stamp",
        visualData: { stampText: "585", standard: "Assay Office & ISO 9202 Certified", purity: "14KT" },
      },
    ],
    specs: [
      { label: "Karat Purity", value: "14 Karats (14/24 parts pure)" },
      { label: "Gold Percentage", value: "58.50% pure elemental gold" },
      { label: "Hallmarking Stamp", value: "585, 14K, 14KT" },
      { label: "Specific Gravity / Density", value: "12.9 – 13.6 g/cm³" },
      { label: "Vickers Hardness (HV)", value: "150 – 180 HV" },
      { label: "Skin Hypoallergenic Rating", value: "Good (Rhodium-plated White Gold / Nickel-free)" },
      { label: "Tarnish Resistance", value: "High resistance to everyday wear" },
      { label: "Recommended Setting", value: "Daily engagement rings, stackable bands, stud earrings" },
    ],
    bestFor: {
      summary:
        "14K Gold is the ideal metal for people with active hands, healthcare workers, athletes, and anyone wanting genuine solid gold that handles everyday life with minimal worry.",
      highlights: [
        "Significantly more scratch-resistant than 18K, 22K, and 24K gold.",
        "Budget-friendly entry point to genuine, certified solid gold jewellery.",
        "Holds diamond prongs extremely securely against accidental impacts.",
        "Maintains a bright, crisp finish with minimal need for polishing.",
      ],
      recommendedJewellery: [
        "Everyday diamond engagement rings and bridal stacks",
        "Stackable minimalist rings and daily stud earrings",
        "Men's durable wedding bands and link bracelets",
        "Casual charm pendants and durable chain necklaces",
      ],
    },
    pros: [
      "Exceptional durability and scratch resistance for everyday wear",
      "More affordable price per piece compared to 18K or 22K",
      "Stiff, reliable prongs protect center stones from becoming loose",
    ],
    considerations: [
      "Slightly lighter yellow saturation compared to 18K and 22K",
      "Lower commodity resale percentage than 18K or 22K (58.5% gold)",
    ],
    careTips: [
      "Soak in warm sudsy water for 15 minutes, then brush gently with a soft toothbrush.",
      "White gold pieces can be re-dipped in rhodium every 1-2 years to maintain icy white brilliance.",
    ],
    faqs: [
      {
        question: "Is 14K gold real gold?",
        answer:
          "Yes, 14K is 100% genuine solid gold containing 58.5% pure gold by weight. It will never rub off or peel like gold-plated or vermeil jewellery.",
      },
      {
        question: "14K vs 18K: Which should I choose for an engagement ring?",
        answer:
          "Choose 14K if you have an active lifestyle and want maximum scratch resistance and value. Choose 18K if you prioritize prestigious luxury pedigree, richer yellow saturation, and higher pure gold content.",
      },
    ],
    relatedProductIds: ["prod-1", "prod-3", "prod-6"],
  },
  {
    id: "9k",
    slug: "9k",
    category: "gold",
    name: "9K Gold Guide (375 Hallmark)",
    shortName: "9K Gold",
    purityOrOrigin: "37.5% Pure Gold • 62.5% Resilient Alloy",
    hallmarkOrStamp: "375 / 9KT",
    tagline: "Resilient, tough, and accessible solid gold engineered for robust everyday lifestyles.",
    description:
      "9 Karat gold contains 37.5% pure gold by weight. A historic British and Commonwealth hallmark standard since 1854, 9K gold is exceptionally hard and scratch-resistant, making it ideal for signet rings, heavy chains, and contemporary lifestyle pieces at an accessible luxury entry point.",
    overview:
      "9 Karat gold contains 37.5% pure gold by weight. A historic British and Commonwealth hallmark standard since 1854, 9K gold is exceptionally hard and scratch-resistant, making it ideal for signet rings, heavy chains, and contemporary lifestyle pieces at an accessible luxury entry point.",
    historyAndCraft:
      "Authorized under Queen Victoria in 1854, 9K gold allowed Victorian artisans to create solid gold keepsake jewellery accessible to the rising middle class. Today, it remains one of the most popular gold standards in the UK, Australia, and New Zealand.",
    image: "/images/guide/gold/gold-9k.jpg",
    detailImage: "/images/guide/gold/gold-9k.jpg",
    accentColor: "#CBA135",
    metrics: [
      { label: "Purity Ratio", value: "37.5% Pure", hint: "9 parts pure gold out of 24" },
      { label: "Hallmark Code", value: "375", hint: "British Crown 375 hallmark" },
      { label: "Mohs Hardness", value: "4.2 – 4.5", hint: "Hardest commercial solid gold" },
      { label: "Wear Resilience", value: "Maximum", hint: "Immune to bending and dents" },
    ],
    process: [
      {
        number: "1",
        title: "Robust Metallurgy",
        subtitle: "37.5% Gold + 62.5% Strong Base",
        copy: "Consisting of 375 parts gold and 625 parts copper, silver, and zinc, 9K gold forms an intermetallic bond with incredible mechanical hardness and resistance to warping.",
        visualType: "purity_composition",
        visualData: { purePercent: 37.5, alloyPercent: 62.5, hallmark: "375" },
      },
      {
        number: "2",
        title: "Subtle Warm Champagne",
        subtitle: "Contemporary Undertone",
        copy: "9K gold exhibits a soft, cool-toned champagne glow that matches industrial, minimalist, and streetwear jewellery styles with ease.",
        visualType: "color_variants",
        visualData: {
          variants: [
            { name: "9K Yellow Gold", color: "#DAC383", composition: "37.5% Gold, 42.5% Copper, 20% Silver" },
            { name: "9K White Gold", color: "#F2F1EC", composition: "37.5% Gold, 50% Silver, 12.5% Zinc/Nickel" },
            { name: "9K Rose Gold", color: "#E19C87", composition: "37.5% Gold, 55% Copper, 7.5% Silver" },
          ],
        },
      },
      {
        number: "3",
        title: "Superior Tensile Strength",
        subtitle: "Vickers 190+ HV",
        copy: "Because the majority of the alloy consists of hard base metals, 9K pieces rarely dent or bend out of round, even on heavy men's signet rings subjected to rough handling.",
        visualType: "hardness_gauge",
        visualData: { rating: 95, label: "Peak Mechanical Hardness", score: "190 HV" },
      },
      {
        number: "4",
        title: "Historic 375 Hallmark",
        subtitle: "Official British Assay Mark",
        copy: "Stamped with 375 alongside the traditional crown and assay town mark (London Leopard, Birmingham Anchor, Sheffield Rose, Edinburgh Castle).",
        visualType: "hallmark_stamp",
        visualData: { stampText: "375", standard: "Crown Assay Office Standard", purity: "9KT" },
      },
    ],
    specs: [
      { label: "Karat Purity", value: "9 Karats (9/24 parts pure)" },
      { label: "Gold Percentage", value: "37.50% pure elemental gold" },
      { label: "Hallmarking Stamp", value: "375, 9K, 9KT" },
      { label: "Specific Gravity / Density", value: "11.1 – 11.6 g/cm³" },
      { label: "Vickers Hardness (HV)", value: "170 – 210 HV" },
      { label: "Skin Hypoallergenic Rating", value: "Moderate (Ensure nickel-free compliance)" },
      { label: "Tarnish Resistance", value: "Requires occasional polishing due to copper content" },
      { label: "Recommended Setting", value: "Heavy signet rings, chunky chains, everyday huggie earrings" },
    ],
    bestFor: {
      summary:
        "9K Gold is perfect for robust everyday jewellery, men's heavy signet rings, curb chain necklaces, and stylish budget-conscious fine jewellery that won't scratch or dent.",
      highlights: [
        "Hardest and most dent-resistant solid gold alloy available.",
        "Significantly lower price point makes solid gold accessible.",
        "Will never peel, flake, or chip off like gold vermeil or plated brass.",
        "Historic Commonwealth heritage with certified 375 hallmarks.",
      ],
      recommendedJewellery: [
        "Heavy engraved men's signet rings",
        "Chunky Cuban link chains and bracelets",
        "Everyday small hoop and huggie earrings",
        "Initial letter pendants and daily talisman charms",
      ],
    },
    pros: [
      "Maximum durability against scratches, dents, and bends",
      "Very budget-friendly solid gold option",
      "Retains genuine hallmark authentication (375)",
    ],
    considerations: [
      "Pale champagne hue differs from the intense yellow of 18K or 22K",
      "Can tarnish slowly in hot springs or harsh chemicals due to higher copper ratio",
    ],
    careTips: [
      "Store away from damp bathrooms to prevent minor surface tarnishing.",
      "Polish every few months with a specialized gold cleaning cloth.",
    ],
    faqs: [
      {
        question: "Is 9K gold recognized as real gold?",
        answer:
          "Yes. In the UK, Australia, Europe, and many parts of the world, 9K is legally classified, hallmarked, and regulated as genuine solid gold.",
      },
      {
        question: "Does 9K gold tarnish?",
        answer:
          "Because 62.5% of the alloy is silver and copper, 9K gold can slowly oxidize if exposed to sulfur, sweat, or perfume, but it can be restored to full mirror shine with a simple polishing cloth.",
      },
    ],
    relatedProductIds: ["prod-6", "prod-7", "prod-8"],
  },
];

export const silverGuidesData: GuideItemDetail[] = [
  {
    id: "sterling-925",
    slug: "925",
    category: "silver",
    name: "925 Sterling Silver Guide",
    shortName: "925 Sterling",
    purityOrOrigin: "92.5% Pure Silver • 7.5% Copper Alloy",
    hallmarkOrStamp: "925 / STERLING",
    tagline: "The undisputed international benchmark for luminous fine silver jewellery since the 12th century.",
    description:
      "Sterling Silver is an alloy containing 92.5% pure elemental silver and 7.5% copper. While pure silver is too soft to withstand daily jewellery wear, adding copper produces an alloy with extraordinary tensile strength, bright reflective brilliance, and comfortable everyday wearability.",
    overview:
      "Sterling Silver is an alloy containing 92.5% pure elemental silver and 7.5% copper. While pure silver is too soft to withstand daily jewellery wear, adding copper produces an alloy with extraordinary tensile strength, bright reflective brilliance, and comfortable everyday wearability.",
    historyAndCraft:
      "Originating in 12th-century northern Germany with the Easterling traders, King Henry II established the 'Sterling Standard' in England in 1158. Stamped with the iconic 925 mark and walking lion passant, sterling silver has adorned royalty, cathedral altar pieces, and high-fashion statement jewels for centuries.",
    image: "/images/guide/silver/silver-925.jpg",
    detailImage: "/images/guide/silver/silver-925.jpg",
    accentColor: "#A8B2C1",
    metrics: [
      { label: "Purity Ratio", value: "92.5% Silver", hint: "925 parts pure silver per 1,000" },
      { label: "Hallmark Code", value: "925 / STER", hint: "Official international silver stamp" },
      { label: "Optical Reflectivity", value: "99% Visible Light", hint: "Highest reflective metal known" },
      { label: "Hardness (Mohs)", value: "2.7 – 3.0", hint: "Hardened by 7.5% copper alloy" },
    ],
    process: [
      {
        number: "1",
        title: "Refining & Purity Ratio",
        subtitle: "925/1000 Elemental Chemistry",
        copy: "Pure 999 silver is melted with 7.5% oxygen-free copper under inert gas. The copper dissolves into the silver crystal structure, multiplying hardness while preserving silver's legendary reflective luster.",
        visualType: "purity_composition",
        visualData: { purePercent: 92.5, alloyPercent: 7.5, hallmark: "925" },
      },
      {
        number: "2",
        title: "Optical White Brilliance",
        subtitle: "99% Light Reflectance",
        copy: "Silver possesses the highest optical reflectivity, thermal conductivity, and electrical conductivity of all metals on the periodic table. It produces a luminous icy white gleam that complements all skin undertones.",
        visualType: "optical_fire",
        visualData: { index: "99% Reflectance", label: "Purest White Metal Light Return" },
      },
      {
        number: "3",
        title: "Rhodium Shield Plating",
        subtitle: "Anti-Tarnish Barrier",
        copy: "Every Luxe Jewels 925 sterling piece is electroplated with a micro-layer of precious Rhodium (a platinum group metal worth 10x gold) providing diamond-grade scratch protection and 100% tarnish immunity.",
        visualType: "tarnish_barrier",
        visualData: { coating: "Premium Rhodium Flash Plate", protection: "Anti-Tarnish & Scratch Resistant" },
      },
      {
        number: "4",
        title: "925 Laser Hallmarking",
        subtitle: "Assay Stamp of Authenticity",
        copy: "Laser micro-inscribed with 925, Luxe Jewels maker's mark, and certified silver assay symbols on all claps, ring shanks, and earring posts.",
        visualType: "hallmark_stamp",
        visualData: { stampText: "925", standard: "ISO 9202 & BIS Certified Standard", purity: "Sterling" },
      },
    ],
    specs: [
      { label: "Silver Purity", value: "92.5% pure elemental silver" },
      { label: "Alloy Composition", value: "7.5% copper (nickel-free)" },
      { label: "Hallmarking Stamp", value: "925, STERLING, STER" },
      { label: "Specific Gravity", value: "10.36 g/cm³" },
      { label: "Melting Point", value: "893 °C (1,640 °F)" },
      { label: "Reflectivity", value: "99.5% visible light reflection" },
      { label: "Plating Finish", value: "Triple Rhodium or 18K Yellow Gold vermeil" },
      { label: "Hypoallergenic", value: "Yes (100% Lead-free and Nickel-free)" },
    ],
    bestFor: {
      summary:
        "925 Sterling Silver is the premier choice for daily fine jewellery, statement cocktail rings, diamond-accented pendants, and elegant modern gifting.",
      highlights: [
        "Unbeatable luminous white shine reflecting more light than platinum.",
        "Accessible luxury price point allowing generous, sculptural designs.",
        "Rhodium-plated coating keeps the metal bright, shiny, and tarnish-free.",
        "Timeless, universally recognized international fine jewellery pedigree.",
      ],
      recommendedJewellery: [
        "Solitaire diamond and gemstone silver pendants",
        "Pavé huggie earrings and ear cuffs",
        "Layered silver box chains and Cuban collars",
        "Engraved bar bracelets and anniversary cuffs",
      ],
    },
    pros: [
      "Incredible icy white brilliance at an accessible luxury price point",
      "Highly durable when alloyed with 7.5% copper",
      "Rhodium plating prevents typical oxidation and scratches",
    ],
    considerations: [
      "Can tarnish over time if not rhodium-plated or if exposed to sulfur and ocean salt",
      "Requires occasional gentle cleaning with a silver polishing cloth",
    ],
    careTips: [
      "Store in airtight ziplock bags with anti-tarnish strips when not worn.",
      "Put jewellery on after applying perfume, body lotions, and hairspray.",
      "Gently buff with a soft microfibre silver cloth to restore mirror luster.",
    ],
    faqs: [
      {
        question: "Will 925 sterling silver turn my finger green?",
        answer:
          "No! Luxe Jewels sterling silver is nickel-free, lead-free, and coated with protective rhodium plating, guaranteeing zero skin discoloration.",
      },
      {
        question: "What is the difference between silver and 925 silver?",
        answer:
          "Pure silver (99.9%) is too soft for rings. 925 sterling silver is 92.5% silver + 7.5% copper, making it strong enough for lifetime fine jewellery.",
      },
    ],
    relatedProductIds: ["prod-1", "prod-3", "prod-8"],
  },
  {
    id: "fine-silver-999",
    slug: "999",
    category: "silver",
    name: "999 Fine Silver Guide",
    shortName: "999 Fine Silver",
    purityOrOrigin: "99.9% Pure Elemental Silver",
    hallmarkOrStamp: "999 / FS",
    tagline: "Pristine white elemental silver with superior tarnish resistance and celestial moonlit glow.",
    description:
      "Fine Silver is 99.9% pure elemental silver (999 parts per thousand). Because it contains virtually zero copper, it is substantially more resistant to tarnishing than sterling silver and possesses a celestial, soft moonlit white luster that is softer and whiter than any other metal.",
    overview:
      "Fine Silver is 99.9% pure elemental silver (999 parts per thousand). Because it contains virtually zero copper, it is substantially more resistant to tarnishing than sterling silver and possesses a celestial, soft moonlit white luster that is softer and whiter than any other metal.",
    historyAndCraft:
      "Prized by ancient silversmiths and modern investment mints, 999 fine silver is the metal of choice for bullion ingots, commemorative medals, and handcrafted cloisonné enamel bezels where alloying copper would discolor the molten vitreous enamel.",
    image: "/images/guide/silver/silver-999.jpg",
    detailImage: "/images/guide/silver/silver-999.jpg",
    accentColor: "#CBD5E1",
    metrics: [
      { label: "Purity Ratio", value: "99.9% Pure", hint: "999 parts pure silver per 1,000" },
      { label: "Hallmark Code", value: "999 / FS", hint: "Fine Silver assay standard" },
      { label: "Tarnish Speed", value: "Extremely Low", hint: "No copper to react with sulfur" },
      { label: "Mohs Hardness", value: "2.5", hint: "Soft and exceptionally malleable" },
    ],
    process: [
      {
        number: "1",
        title: "Pure Electrolytic Refining",
        subtitle: "999.0+ Purity Level",
        copy: "Silver is refined through the Moebius electrolytic cell process, capturing 99.9% pure silver crystals that are melted into pristine bullion and silversmithing wire.",
        visualType: "purity_composition",
        visualData: { purePercent: 99.9, alloyPercent: 0.1, hallmark: "999" },
      },
      {
        number: "2",
        title: "Soft Moonlit Luster",
        subtitle: "Pristine Elemental White",
        copy: "Fine silver reflects light with a soft, satiny frosted-white quality rather than the high harsh mirror shine of chrome or nickel alloys.",
        visualType: "optical_fire",
        visualData: { index: "100% Elemental Silver", label: "Celestial Moonlit Glow" },
      },
      {
        number: "3",
        title: "Enamel & Bezel Malleability",
        subtitle: "Cloisonné Compatibility",
        copy: "Because 999 silver has no copper, it does not firescale or oxidize during high-temperature torch annealing, making it the supreme choice for enameling and bezel burnishing around fragile gems.",
        visualType: "hardness_gauge",
        visualData: { rating: 35, label: "Silky Bezel Malleability", score: "30 HV" },
      },
      {
        number: "4",
        title: "Fine Silver 999 Hallmark",
        subtitle: "Certified Bullion Stamp",
        copy: "Every ingot, round, and fine silver artisan pendant is stamped with 999 and certified refinery serial stamps.",
        visualType: "hallmark_stamp",
        visualData: { stampText: "999", standard: "LBMA / NABL Certified Fine Silver", purity: "Fine 999" },
      },
    ],
    specs: [
      { label: "Silver Purity", value: "99.9% pure elemental silver" },
      { label: "Alloy Ratio", value: "0.1% trace elements (Zero added copper)" },
      { label: "Hallmarking Stamp", value: "999, FS, FINE SILVER" },
      { label: "Specific Gravity", value: "10.49 g/cm³" },
      { label: "Melting Point", value: "961.78 °C (1,763.2 °F)" },
      { label: "Hardness", value: "2.5 Mohs (Soft, silky texture)" },
      { label: "Tarnish Resistance", value: "Significantly higher than sterling silver" },
      { label: "Recommended Use", value: "Bullion coins, art medals, bezel mountings, enameled jewellery" },
    ],
    bestFor: {
      summary:
        "999 Fine Silver is optimal for physical silver bullion investment, heirloom medals, delicate enameled jewels, and sculptural handcrafted collector pieces.",
      highlights: [
        "Purest form of silver possible with zero copper dilution.",
        "Remarkably low tarnishing rate in standard ambient environments.",
        "100% hypoallergenic and non-reactive with human skin.",
        "Direct commodity price linkage for investment portfolio hedging.",
      ],
      recommendedJewellery: [
        "Certified minted 999 silver bullion bars and coins",
        "Cloisonné and plique-à-jour enameled art pendants",
        "Hand-hammered organic artisan medallions",
        "Pure silver ceremonial ritual vessels and keepsakes",
      ],
    },
    pros: [
      "Purest silver grade available on the market (99.9%)",
      "Very slow to tarnish because of zero copper content",
      "Ideal for bullion investment and pure metal collectors",
    ],
    considerations: [
      "Too soft for thin daily rings or delicate prong mounts",
      "Must be handled with care to prevent scratches and bends",
    ],
    careTips: [
      "Store coins and bars in sealed airtight capsules.",
      "Wipe gently with microfibre cloths; avoid abrasive pastes.",
    ],
    faqs: [
      {
        question: "Is 999 silver better than 925 sterling?",
        answer:
          "999 is purer and tarnishes much slower, making it superior for investment bullion and art. However, 925 is much stronger and harder, making it far superior for everyday wearable rings and chains.",
      },
    ],
    relatedProductIds: ["prod-4", "prod-8"],
  },
  {
    id: "argentium",
    slug: "argentium",
    category: "silver",
    name: "Argentium Silver Guide (935 / 960)",
    shortName: "Argentium Silver",
    purityOrOrigin: "93.5% – 96.0% Silver • Alloyed with Germanium",
    hallmarkOrStamp: "ARGENTIUM 935",
    tagline: "The patented modern miracle silver that resists tarnish, shines brighter than platinum, and never firescales.",
    description:
      "Argentium Silver is a revolutionary modern silver alloy created in England by Peter Johns in 1996. By replacing a portion of copper with the rare metalloid Germanium, Argentium achieves unprecedented tarnish resistance, a whiter and brighter reflective luster, higher tensile strength, and zero firestain during crafting.",
    overview:
      "Argentium Silver is a revolutionary modern silver alloy created in England by Peter Johns in 1996. By replacing a portion of copper with the rare metalloid Germanium, Argentium achieves unprecedented tarnish resistance, a whiter and brighter reflective luster, higher tensile strength, and zero firestain during crafting.",
    historyAndCraft:
      "Patented by the Middlesex University research lab, Argentium represents the first major metallurgical upgrade to silver in over 800 years. Stamped with the iconic winged unicorn mark, it is celebrated as the ethical, eco-friendly luxury silver of the 21st century.",
    image: "/images/guide/silver/silver-argentium.jpg",
    detailImage: "/images/guide/silver/silver-argentium.jpg",
    accentColor: "#93C5FD",
    metrics: [
      { label: "Purity Grades", value: "93.5% & 96.0%", hint: "Exceeds standard 925 sterling purity" },
      { label: "Key Ingredient", value: "Germanium (Ge)", hint: "Forms self-healing oxide barrier" },
      { label: "Tarnish Resistance", value: "7x Higher", hint: "Impervious to black silver sulfide" },
      { label: "Trademark Stamp", value: "Flying Unicorn", hint: "Official licensed hallmark" },
    ],
    process: [
      {
        number: "1",
        title: "Germanium Nanoshield",
        subtitle: "Self-Healing Protective Layer",
        copy: "Germanium atoms migrate to the surface of the silver when exposed to air, forming an invisible, self-healing germanium oxide layer that blocks sulfur from touching copper or silver.",
        visualType: "tarnish_barrier",
        visualData: { coating: "Germanium Dioxide (GeO2) Barrier", protection: "Permanent Tarnish Shield" },
      },
      {
        number: "2",
        title: "Superior Whiteness & Fire",
        subtitle: "Whiter Than White Gold & Platinum",
        copy: "Argentium is measurably whiter and more luminous than rhodium-plated white gold and platinum, radiating intense icy fire with zero yellow or gray undertones.",
        visualType: "optical_fire",
        visualData: { index: "Whiter Than Platinum", label: "Purest Visible White Tone" },
      },
      {
        number: "3",
        title: "Thermal Hardening",
        subtitle: "Double Hardness of Sterling",
        copy: "Argentium can be heat-treated in a simple oven to double its hardness (reaching up to 130 HV), rivaling 14K white gold in scratch resistance and prong strength.",
        visualType: "hardness_gauge",
        visualData: { rating: 80, label: "Heat-Hardened Resilience", score: "130 HV" },
      },
      {
        number: "4",
        title: "Winged Unicorn Hallmark",
        subtitle: "Registered British Trademark",
        copy: "Authentic Argentium pieces carry the certified Winged Unicorn hallmark alongside 935 or 960 purity stamps registered with the UK Assay Offices.",
        visualType: "hallmark_stamp",
        visualData: { stampText: "935", standard: "Winged Unicorn Certified Assay", purity: "Argentium 935" },
      },
    ],
    specs: [
      { label: "Silver Purity", value: "93.5% (Argentium 935) or 96.0% (Argentium 960)" },
      { label: "Patented Additive", value: "Germanium (Ge) alloy matrix" },
      { label: "Hallmarking Stamp", value: "935, 960, ARGENTIUM, Winged Unicorn" },
      { label: "Tarnish Resistance", value: "Exceptional (700% higher than traditional 925)" },
      { label: "Vickers Hardness", value: "110 – 130 HV (Heat treated)" },
      { label: "Hypoallergenic", value: "100% Nickel-free, certified antibacterial" },
      { label: "Sustainability", value: "100% Certified Recycled Silver Guarantee" },
      { label: "Recommended Use", value: "Fine engagement rings, luxury cuffs, daily fine jewellery" },
    ],
    bestFor: {
      summary:
        "Argentium Silver is best for discerning clients who want the pristine icy white brilliance of silver without the hassle of regular tarnishing and polishing.",
      highlights: [
        "Virtually tarnish-free under everyday wear conditions.",
        "Significantly purer than standard 925 sterling silver (93.5% vs 92.5%).",
        "Heat-hardened to achieve twice the dent resistance of traditional silver.",
        "Certified 100% recycled silver for ethical environmental peace of mind.",
      ],
      recommendedJewellery: [
        "Tarnish-resistant wedding bands and engagement mounts",
        "Heavy mirror-polished cuff bracelets",
        "Chandelier earrings and gemstone drop necklaces",
        "Geometric contemporary rings and chains",
      ],
    },
    pros: [
      "Extraordinary tarnish resistance that lasts years without darkening",
      "Higher silver purity than standard sterling (93.5% vs 92.5%)",
      "Whiter and brighter than platinum and rhodium",
      "100% ethically sourced recycled silver",
    ],
    considerations: [
      "Slightly higher price per gram than standard 925 sterling",
      "Less widely available than standard commercial sterling silver",
    ],
    careTips: [
      "Wash occasionally with warm soapy water and wipe dry.",
      "Never use harsh silver dip chemicals as they damage the natural germanium oxide layer.",
    ],
    faqs: [
      {
        question: "Does Argentium Silver ever tarnish?",
        answer:
          "Under normal household and daily conditions, Argentium resists tarnishing completely. Only prolonged exposure to concentrated industrial chemicals or thermal bleach could cause minor discoloration, which wipes off instantly.",
      },
      {
        question: "Is Argentium real silver?",
        answer:
          "Yes, Argentium contains MORE pure silver than standard sterling (93.5% vs 92.5%). It is fully certified and hallmarked by international assay offices.",
      },
    ],
    relatedProductIds: ["prod-1", "prod-3", "prod-7"],
  },
  {
    id: "oxidized",
    slug: "oxidized",
    category: "silver",
    name: "Oxidized Silver Guide (Antique Patina)",
    shortName: "Oxidized Silver",
    purityOrOrigin: "Controlled Surface Sulfur Patina on 925 Silver",
    hallmarkOrStamp: "925 OXIDIZED",
    tagline: "Dramatic blackened contrasting artistry celebrating vintage, Gothic, and artisanal craftsmanship.",
    description:
      "Oxidized Silver is genuine 925 sterling silver whose surface has been intentionally treated with potassium sulfide (liver of sulfur) to accelerate oxidation. This creates a rich, gunmetal-to-velvet-black patina in carved recesses while the raised edges are polished to high silver shine.",
    overview:
      "Oxidized Silver is genuine 925 sterling silver whose surface has been intentionally treated with potassium sulfide (liver of sulfur) to accelerate oxidation. This creates a rich, gunmetal-to-velvet-black patina in carved recesses while the raised edges are polished to high silver shine.",
    historyAndCraft:
      "Rooted in ancient niello techniques, Art Nouveau relief carving, and modern rebellious fine jewellery, oxidized silver accentuates intricate three-dimensional engravings, giving jewellery an evocative, moody vintage aesthetic favored in men's jewellery and artisanal bridal pieces.",
    image: "/images/guide/silver/silver-oxidized.jpg",
    detailImage: "/images/guide/silver/silver-oxidized.jpg",
    accentColor: "#64748B",
    metrics: [
      { label: "Core Metal", value: "100% 925 Sterling", hint: "Solid silver foundation underneath" },
      { label: "Surface Finish", value: "Artisan Black Patina", hint: "Treated with controlled sulfides" },
      { label: "Contrast Level", value: "High Dramatic 3D", hint: "Deep shadows with bright highlights" },
      { label: "Aesthetic Feel", value: "Vintage & Gothic", hint: "Edgy, textured, architectural" },
    ],
    process: [
      {
        number: "1",
        title: "Solid 925 Casting",
        subtitle: "High Relief Sculpture",
        copy: "The jewel is cast with deep dimensional textures, celtic knots, floral filigree, or gothic patterns designed to trap and cradle dark shadows.",
        visualType: "purity_composition",
        visualData: { purePercent: 92.5, alloyPercent: 7.5, hallmark: "925" },
      },
      {
        number: "2",
        title: "Controlled Chemical Patination",
        subtitle: "Sulfur Immersion Reaction",
        copy: "The piece is immersed in a warm sulfurous solution. Silver atoms react with sulfur to produce an ultra-dark silver sulfide surface film that adheres deeply into crevices.",
        visualType: "color_variants",
        visualData: {
          variants: [
            { name: "Gunmetal Gray", color: "#475569", composition: "Light Oxidation Patina" },
            { name: "Velvet Obsidian Black", color: "#1E293B", composition: "Deep Sulfur Saturation" },
          ],
        },
      },
      {
        number: "3",
        title: "Hand-Relief Burnishing",
        subtitle: "Dual-Tone Sculpting",
        copy: "Master artisans hand-buff high points using fine emery paper and rouge, creating stark contrast between jet-black recesses and mirror-bright silver surfaces.",
        visualType: "hardness_gauge",
        visualData: { rating: 70, label: "Artisanal Textured Contrast", score: "Hand-Relieved" },
      },
      {
        number: "4",
        title: "Protective Seal & Hallmark",
        subtitle: "Authentic 925 Guarantee",
        copy: "The finished piece is sealed with microcrystalline Renaissance wax and stamped with 925, certifying solid sterling silver authenticity.",
        visualType: "hallmark_stamp",
        visualData: { stampText: "925", standard: "Artisan Hand-Finished Hallmark", purity: "Solid 925" },
      },
    ],
    specs: [
      { label: "Base Metal", value: "Solid 925 Sterling Silver (92.5% pure)" },
      { label: "Surface Treatment", value: "Potassium sulfide (liver of sulfur) patina" },
      { label: "Hallmarking Stamp", value: "925" },
      { label: "Surface Sealer", value: "Microcrystalline wax or protective polymer coat" },
      { label: "Color Tone", value: "Charcoal, gunmetal, matte obsidian black" },
      { label: "Maintenance", value: "Never dip in liquid silver cleaner" },
      { label: "Style Profile", value: "Vintage, bohemian, Gothic, rugged luxury" },
      { label: "Recommended Setting", value: "Engraved signet rings, textured bands, talisman pendants" },
    ],
    bestFor: {
      summary:
        "Oxidized Silver is ideal for men's rugged signet rings, textured wedding bands, intricate antique-inspired pendants, and clients who love dramatic contrast.",
      highlights: [
        "Breathtaking 3D visual depth that makes carved details pop.",
        "Develops a personalized vintage patina unique to your lifestyle over time.",
        "Solid 925 sterling silver core retains true precious metal value.",
        "Zero worries about natural tarnishing — darkness is part of the art!",
      ],
      recommendedJewellery: [
        "Men's textured signet rings and biker bands",
        "Celtic and Norse mythological carved pendants",
        "Rough-cut gemstone and black diamond rings",
        "Heavy oxidized rope chains and cuff bracelets",
      ],
    },
    pros: [
      "Stunning artistic contrast that highlights engraved craftsmanship",
      "Low-maintenance regarding tarnish; tarnishing only deepens the look",
      "Solid 925 sterling silver foundation",
    ],
    considerations: [
      "Surface black patina on high raised points will naturally wear into bright silver over years",
      "Liquid silver cleaning dips will strip the black patina away instantly",
    ],
    careTips: [
      "Clean with a dry, soft cloth only.",
      "NEVER use ultrasonic cleaners, abrasive dips, or chemical silver cleaners.",
      "Can be easily re-oxidized by any local goldsmith to restore dark tones.",
    ],
    faqs: [
      {
        question: "Is oxidized silver real silver?",
        answer:
          "Yes, 100%. Underneath the dark surface layer is solid 925 sterling silver. It is not cheap base metal or black paint.",
      },
      {
        question: "Does the black color wash off?",
        answer:
          "The black patina in deep grooves is permanent. On exposed high surfaces that rub against clothes or skin, it will gradually polish into gleaming white silver, creating a gorgeous authentic lived-in vintage effect.",
      },
    ],
    relatedProductIds: ["prod-6", "prod-7", "prod-8"],
  },
  {
    id: "britannia",
    slug: "britannia",
    category: "silver",
    name: "958 Britannia Silver Guide",
    shortName: "958 Britannia",
    purityOrOrigin: "95.8% Pure Silver • 4.2% Copper",
    hallmarkOrStamp: "958 / BRITANNIA",
    tagline: "The historic royal British silver standard created by King William III in 1697.",
    description:
      "Britannia Silver is a prestigious high-purity silver alloy containing 95.8% pure silver and just 4.2% copper. Introduced in England by Act of Parliament in 1697 to prevent silversmiths from melting silver coinage, Britannia silver features a warmer, richer white luster and superior corrosion resistance than 925 sterling.",
    overview:
      "Britannia Silver is a prestigious high-purity silver alloy containing 95.8% pure silver and just 4.2% copper. Introduced in England by Act of Parliament in 1697 to prevent silversmiths from melting silver coinage, Britannia silver features a warmer, richer white luster and superior corrosion resistance than 925 sterling.",
    historyAndCraft:
      "Represented by the majestic seated figure of Britannia holding a trident and olive branch, Britannia silver remains one of the world's rarest and most revered silver standards, prized by premier English silversmiths for bespoke heirloom tableware and royal presentation jewellery.",
    image: "/images/guide/silver/silver-britannia.jpg",
    detailImage: "/images/guide/silver/silver-britannia.jpg",
    accentColor: "#94A3B8",
    metrics: [
      { label: "Purity Ratio", value: "95.8% Silver", hint: "958.4 parts pure silver per 1,000" },
      { label: "Historic Date", value: "Est. 1697", hint: "Created under King William III" },
      { label: "Hallmark Symbol", value: "Seated Britannia", hint: "Iconic royal goddess mark" },
      { label: "Tarnish Resistance", value: "Superior", hint: "Less copper to react with air" },
    ],
    process: [
      {
        number: "1",
        title: "High-Purity Refining",
        subtitle: "958/1000 Silver Purity",
        copy: "Britannia silver balances 958 parts pure silver with 42 parts copper. This higher purity reduces copper firescale and imparts a noticeably warmer, silkier tactile feel.",
        visualType: "purity_composition",
        visualData: { purePercent: 95.8, alloyPercent: 4.2, hallmark: "958" },
      },
      {
        number: "2",
        title: "Aristocratic Warm White Tone",
        subtitle: "Gentle Antique Glow",
        copy: "Because of its high silver-to-copper ratio, Britannia silver reflects light with a rich, buttery white warmth reminiscent of heirloom candlelight.",
        visualType: "optical_fire",
        visualData: { index: "95.8% Pure Silver", label: "Warmer Antique Luster" },
      },
      {
        number: "3",
        title: "Fine Chasing & Raising",
        subtitle: "Master Silversmithing",
        copy: "Softer and more ductile than 925 sterling, Britannia silver allows master silversmiths to raise vessels and hand-chase intricate reliefs without brittle stress fractures.",
        visualType: "hardness_gauge",
        visualData: { rating: 55, label: "Silk-Touch Ductility", score: "65 HV" },
      },
      {
        number: "4",
        title: "Seated Britannia Hallmark",
        subtitle: "The Royal Assayed Mark",
        copy: "Stamped with 958 and the historic royal seated figure of Britannia in helmet with shield and trident.",
        visualType: "hallmark_stamp",
        visualData: { stampText: "958", standard: "British Assay Royal Standard", purity: "Britannia 958" },
      },
    ],
    specs: [
      { label: "Silver Purity", value: "95.84% pure elemental silver" },
      { label: "Alloy Component", value: "4.16% copper (zero nickel)" },
      { label: "Hallmarking Stamp", value: "958, BRITANNIA, Figure of Britannia" },
      { label: "Specific Gravity", value: "10.40 g/cm³" },
      { label: "Melting Point", value: "935 °C (1,715 °F)" },
      { label: "Tensile Strength", value: "Balanced between sterling strength and fine silver beauty" },
      { label: "Historical Status", value: "Official standard since 1697" },
      { label: "Recommended Use", value: "Heirloom hollowware, luxury silver medals, royal commemorative jewellery" },
    ],
    bestFor: {
      summary:
        "Britannia Silver is ideal for connoisseurs who appreciate royal English history, collectors of high-purity silver, and heirloom keepsake jewellery meant to be passed down across generations.",
      highlights: [
        "Purer than 925 sterling silver with a warmer, silkier luster.",
        "Carries the rare, prestigious seated Britannia hallmark.",
        "Slower tarnishing rate due to reduced copper content.",
        "Historically significant standard with over 325 years of pedigree.",
      ],
      recommendedJewellery: [
        "Commemorative royal locket pendants",
        "Hand-raised artisan silver cuffs and torcs",
        "Bespoke heirloom christening gifts and silver spoons",
        "Fine filigree brooches and collector medallions",
      ],
    },
    pros: [
      "Higher silver content than standard sterling silver (95.8% vs 92.5%)",
      "Prestigious historical provenance with iconic royal hallmark",
      "Softer, warmer aesthetic luster",
    ],
    considerations: [
      "Slightly softer than 925 sterling, requires mindful wear",
      "Rarely produced by mass-market commercial retailers",
    ],
    careTips: [
      "Buff gently with microfibre cloths.",
      "Store in flannel or anti-tarnish velvet cases.",
    ],
    faqs: [
      {
        question: "Why was Britannia silver created?",
        answer:
          "In 1697, silversmiths were melting down silver coins to make jewellery. King William III mandated the Britannia standard of 95.8% purity (higher than coins at 92.5%) so melted coins could no longer be passed off as legal fine silver.",
      },
    ],
    relatedProductIds: ["prod-1", "prod-2", "prod-4"],
  },
];

export const diamondTypesGuidesData: GuideItemDetail[] = [
  {
    id: "natural-real",
    slug: "real",
    category: "diamond",
    name: "Natural Real Diamond Guide (Earth-Mined)",
    shortName: "Natural Diamond",
    purityOrOrigin: "1-3 Billion Years Geological Mantle Crystallization",
    hallmarkOrStamp: "GIA / IGI Natural Certificate",
    tagline: "Earth's oldest billion-year treasure forged in deep mantle fire and delivered to the surface by kimberlite volcanoes.",
    description:
      "Natural diamonds are pure carbon crystals forged under extreme pressures (45,000 to 60,000 atmospheres) and temperatures exceeding 1,200°C deep in the Earth's mantle between 150 and 200 kilometers below the surface. Dating between 1 and 3.5 billion years old, they are the hardest naturally occurring substance on Earth, scoring a perfect 10 on the Mohs hardness scale.",
    overview:
      "Natural diamonds are pure carbon crystals forged under extreme pressures (45,000 to 60,000 atmospheres) and temperatures exceeding 1,200°C deep in the Earth's mantle between 150 and 200 kilometers below the surface. Dating between 1 and 3.5 billion years old, they are the hardest naturally occurring substance on Earth, scoring a perfect 10 on the Mohs hardness scale.",
    historyAndCraft:
      "From ancient Golconda diamonds in India to modern certified Canadian and African ethical mines, natural diamonds have captured human imagination as the ultimate symbol of eternal love and invincibility. Brought to the surface by supersonic volcanic kimberlite eruptions millions of years ago, each natural diamond carries a unique billion-year geological fingerprint.",
    image: "/images/guide/diamond/diamond-real.jpg",
    detailImage: "/images/guide/diamond/diamond-real.jpg",
    accentColor: "#38BDF8",
    metrics: [
      { label: "Geological Age", value: "1 – 3.3 Billion Yrs", hint: "Older than animal life on Earth" },
      { label: "Hardness (Mohs)", value: "10 (Maximum)", hint: "Hardest material in the universe" },
      { label: "Refractive Index", value: "2.417", hint: "Single refraction brilliance" },
      { label: "Certification", value: "GIA / IGI Natural", hint: "Laser inscribed girdle" },
    ],
    process: [
      {
        number: "1",
        title: "Deep Mantle Crystallization",
        subtitle: "150km Beneath the Earth's Crust",
        copy: "Over billions of years, pure carbon atoms arrange in a rigid face-centered cubic crystal lattice under extreme lithospheric mantle pressure, creating unbreakable covalent bonds.",
        visualType: "crystal_structure",
        visualData: { system: "Face-Centered Cubic (FCC)", element: "100% Pure Carbon (C)", type: "Type Ia / Type IIa" },
      },
      {
        number: "2",
        title: "Kimberlite Volcanic Ascent",
        subtitle: "Supersonic Magma Delivery",
        copy: "Deep-source kimberlite and lamproite volcanic pipes blasted diamond-bearing rocks toward Earth's surface at speeds up to Mach 3, cooling rapidly enough to preserve the diamond structure without turning into graphite.",
        visualType: "color_variants",
        visualData: {
          variants: [
            { name: "Colourless (D-F)", color: "#F8FAFC", composition: "Nitrogen-Free Type IIa Structure" },
            { name: "Near Colourless (G-J)", color: "#FEF9C3", composition: "Subtle Nitrogen Atom Clusters (Type Ia)" },
            { name: "Fancy Yellow / Pink", color: "#FDE047", composition: "Boron / Structural Lattice Grain Deformation" },
          ],
        },
      },
      {
        number: "3",
        title: "Optical Physics & Fire",
        subtitle: "Total Internal Reflection",
        copy: "With a refractive index of 2.417 and dispersion of 0.044, precisely cut facets act as miniature mirrors, refracting white light into flashes of rainbow spectral fire (scintillation).",
        visualType: "optical_fire",
        visualData: { index: "RI 2.417 • Dispersion 0.044", label: "Single Refractive Pure Fire" },
      },
      {
        number: "4",
        title: "GIA Laser Inscription & Origin",
        subtitle: "Microscopic Certification",
        copy: "Every Luxe Jewels natural diamond is graded by GIA or IGI and micro-inscribed on its girdle with an indelible laser registry number verifying non-conflict origin under the Kimberley Process.",
        visualType: "diamond_tester",
        visualData: { testerResponse: "Natural Diamond Confirmed", thermal: "Exceptional Heat Conductivity", electric: "Insulator (Type Ia)" },
      },
    ],
    specs: [
      { label: "Chemical Formula", value: "C (Pure Carbon)" },
      { label: "Crystal System", value: "Isometric-Hexoctahedral (Cubic)" },
      { label: "Mohs Hardness", value: "10.0 (Absolute scale 140,000)" },
      { label: "Refractive Index", value: "2.417 (Single Refraction)" },
      { label: "Dispersion (Fire)", value: "0.044" },
      { label: "Specific Gravity", value: "3.52 g/cm³" },
      { label: "Thermal Conductivity", value: "Highest of any solid (900–2320 W/(m·K))" },
      { label: "Certification Authorities", value: "GIA (Gemological Institute of America), IGI, HRD" },
    ],
    bestFor: {
      summary:
        "Natural Mined Diamonds are best for luxury engagement rings, milestone anniversaries, high-jewellery investments, and clients who prize billion-year geological rarity and enduring resale liquidity.",
      highlights: [
        "Finite geological treasure formed before dinosaurs walked the Earth.",
        "Highest international resale value retention and auction pedigree.",
        "Recognized universal symbol of authentic lifelong devotion and heritage.",
        "Extreme scratch resistance; can only be scratched by another diamond.",
      ],
      recommendedJewellery: [
        "Classic solitaire engagement rings in 18K gold and platinum",
        "Eternity bridal wedding rings and tennis bracelets",
        "Fine round brilliant and oval cut stud earrings",
        "High-jewellery auction investment solitaires",
      ],
    },
    pros: [
      "Authentic billion-year geological history and natural scarcity",
      "Highest resale liquidity and established secondary market trade",
      "Maximum 10 Mohs hardness ensures it lasts for centuries of wear",
      "Certified non-conflict sourcing under the Kimberley Process",
    ],
    considerations: [
      "Higher price point compared to lab-grown diamonds or moissanite",
      "Natural inclusions and color tints are common and influence pricing",
    ],
    careTips: [
      "Clean weekly with warm water, mild dish soap, and a soft toothbrush.",
      "Store away from other diamonds to avoid prongs and stones scratching each other.",
      "Bring in annually to check prong security and setting alignment.",
    ],
    faqs: [
      {
        question: "How do I know my diamond is 100% natural and ethically sourced?",
        answer:
          "Every Luxe Jewels natural diamond comes with an independent certificate from the GIA (Gemological Institute of America) or IGI with a laser inscribed report number matching your documentation.",
      },
      {
        question: "Do natural diamonds hold their value better than lab-grown?",
        answer:
          "Yes. Natural diamonds have finite geological supply, giving them established historical resale value and liquid auction secondary markets compared to lab-grown stones whose production capacity continues to scale.",
      },
    ],
    relatedProductIds: ["prod-1", "prod-2", "prod-3", "prod-7"],
  },
  {
    id: "labgrown-cvd",
    slug: "cvd",
    category: "diamond",
    name: "Lab-Grown CVD Diamond Guide (Type IIa)",
    shortName: "CVD Diamond",
    purityOrOrigin: "Chemical Vapor Deposition • Gas Phase Plasma Growth",
    hallmarkOrStamp: "IGI / GIA Lab-Grown Inscription",
    tagline: "Atom-by-atom carbon plasma crystallization yielding 100% chemically and optically identical Type IIa diamonds.",
    description:
      "CVD (Chemical Vapor Deposition) diamonds are 100% real diamonds grown in high-tech vacuum chambers. Using a thin diamond seed crystal, methane, and hydrogen gas energized by microwave plasma into a glowing fireball at 1,000°C, pure carbon atoms rain down and crystallize atom-by-atom into a rough diamond identical in chemistry, physics, and brilliance to mined diamonds.",
    overview:
      "CVD (Chemical Vapor Deposition) diamonds are 100% real diamonds grown in high-tech vacuum chambers. Using a thin diamond seed crystal, methane, and hydrogen gas energized by microwave plasma into a glowing fireball at 1,000°C, pure carbon atoms rain down and crystallize atom-by-atom into a rough diamond identical in chemistry, physics, and brilliance to mined diamonds.",
    historyAndCraft:
      "Pioneered in the late 20th century and perfected over the last decade, CVD technology produces Type IIa diamonds — the purest gemological diamond type on Earth, representing less than 2% of mined diamonds. Because CVD avoids the inclusion-heavy metallic fluxes of older synthesis methods, it yields pristine D-F color and VVS clarity.",
    image: "/images/guide/diamond/diamond-cvd.jpg",
    detailImage: "/images/guide/diamond/diamond-cvd.jpg",
    accentColor: "#A855F7",
    metrics: [
      { label: "Chemical Formula", value: "100% Carbon (C)", hint: "Identical to mined diamonds" },
      { label: "Purity Classification", value: "Type IIa (Ultra-Pure)", hint: "Zero measurable nitrogen impurities" },
      { label: "Hardness (Mohs)", value: "10 (Indestructible)", hint: "Same 10 Mohs hardness as mined" },
      { label: "Diamond Tester", value: "Tests Positive (Diamond)", hint: "Passes all thermal diamond testers" },
    ],
    process: [
      {
        number: "1",
        title: "Plasma Deposition Chamber",
        subtitle: "Atom-By-Atom Carbon Rain",
        copy: "A natural or lab diamond seed plate is placed in a vacuum chamber. Hydrocarbon gases (methane & hydrogen) are energized into microwave plasma at 1,000°C, releasing carbon atoms that crystallize onto the seed like snowflakes.",
        visualType: "crystal_structure",
        visualData: { system: "Step-Flow Tabular Epitaxy", element: "Pure Carbon (C)", type: "Type IIa Nitrogen-Free" },
      },
      {
        number: "2",
        title: "Type IIa Gemological Purity",
        subtitle: "Rarest 2% Earth Classification",
        copy: "Natural diamonds often contain nitrogen clusters (Type Ia). CVD diamonds are virtually free of nitrogen, placing them in the elite Type IIa category shared only by legends like the Cullinan and Koh-i-Noor.",
        visualType: "optical_fire",
        visualData: { index: "RI 2.417 • Type IIa", label: "Maximum Light Transparency" },
      },
      {
        number: "3",
        title: "Laser Cutting & Faceting",
        subtitle: "58 Ideal Geometric Facets",
        copy: "The tabular rough CVD diamond block is scanned with 3D laser scanners and cut by master gem cutters to achieve triple excellent cut, polish, and symmetry.",
        visualType: "hardness_gauge",
        visualData: { rating: 100, label: "True 10 Mohs Diamond Hardness", score: "Mohs 10.0" },
      },
      {
        number: "4",
        title: "Laser Inscription & Certification",
        subtitle: "IGI / GIA Lab-Grown Report",
        copy: "Graded under the exact same 4Cs (Cut, Color, Clarity, Carat) and laser inscribed on the girdle with 'LAB GROWN' and a unique certification serial number.",
        visualType: "diamond_tester",
        visualData: { testerResponse: "Diamond Positive", thermal: "Identical to Mined", electric: "Insulator" },
      },
    ],
    specs: [
      { label: "Growth Method", value: "Chemical Vapor Deposition (CVD)" },
      { label: "Chemical Formula", value: "C (100% Carbon)" },
      { label: "Crystal System", value: "Cubic / Octahedral" },
      { label: "Mohs Hardness", value: "10.0" },
      { label: "Refractive Index", value: "2.417 (Single Refraction)" },
      { label: "Optical Dispersion", value: "0.044" },
      { label: "Specific Gravity", value: "3.52 g/cm³" },
      { label: "Grading Standard", value: "IGI, GIA (Identical 4Cs scale)" },
    ],
    bestFor: {
      summary:
        "CVD Lab-Grown Diamonds are ideal for couples who want a substantially larger carat size, higher color and clarity, zero ethical mining concerns, and extraordinary value for their investment.",
      highlights: [
        "100% physically, chemically, and optically identical to mined diamonds.",
        "Allows you to get 2x to 3x larger carat weight for the same budget.",
        "Predominantly Type IIa purity with superior light transparency.",
        "100% conflict-free, ethical, and sustainably grown with renewable energy.",
      ],
      recommendedJewellery: [
        "Large solitaire engagement rings (2.00ct to 5.00ct+)",
        "Luxury diamond tennis necklaces and bracelets",
        "Certified diamond eternity wedding bands",
        "Contemporary fine jewellery and bespoke design mountings",
      ],
    },
    pros: [
      "100% genuine diamond with identical physical and optical properties",
      "Up to 60-80% more affordable per carat than mined diamonds",
      "Type IIa chemical purity (highest purity in gemology)",
      "Tests as diamond on all standard handheld diamond testers",
    ],
    considerations: [
      "Secondary market resale values fluctuate as production efficiency grows",
      "Requires advanced gemological spectrometry (like GIA iD100) to distinguish from mined",
    ],
    careTips: [
      "Care is 100% identical to mined diamonds; clean with warm sudsy water.",
      "Cannot be scratched by anything except another diamond.",
    ],
    faqs: [
      {
        question: "Does a CVD diamond test as a real diamond?",
        answer:
          "Yes! A CVD diamond will test 100% positive on every diamond tester used by jewellers because it IS a real diamond made of pure carbon with identical thermal conductivity.",
      },
      {
        question: "Can anyone tell a CVD diamond from a mined diamond with their eyes?",
        answer:
          "No. Not even an experienced GIA certified gemologist with a 10x microscope can tell them apart visually. Only laboratory photoluminescence spectrometry can detect the growth patterns.",
      },
    ],
    relatedProductIds: ["prod-1", "prod-2", "prod-3", "prod-7"],
  },
  {
    id: "labgrown-hpht",
    slug: "hpht",
    category: "diamond",
    name: "Lab-Grown HPHT Diamond Guide",
    shortName: "HPHT Diamond",
    purityOrOrigin: "High Pressure High Temperature Cubic Press Synthesis",
    hallmarkOrStamp: "IGI / GIA Lab-Grown Inscription",
    tagline: "Replicating Earth's mantle pressures of 60,000 atmospheres and 1,500°C for exceptional crystal density and color purity.",
    description:
      "HPHT (High Pressure High Temperature) diamonds are grown using massive hydraulic presses that replicate the geological crucible of Earth's mantle. By subjecting carbon graphite to pressures over 60,000 atmospheres and temperatures above 1,500°C in the presence of a molten metal catalyst flux, carbon dissolves and precipitates onto a diamond seed crystal, growing a natural cuboctahedral diamond.",
    overview:
      "HPHT (High Pressure High Temperature) diamonds are grown using massive hydraulic presses that replicate the geological crucible of Earth's mantle. By subjecting carbon graphite to pressures over 60,000 atmospheres and temperatures above 1,500°C in the presence of a molten metal catalyst flux, carbon dissolves and precipitates onto a diamond seed crystal, growing a natural cuboctahedral diamond.",
    historyAndCraft:
      "First successfully synthesized by General Electric in 1954 under Project Superpressure, HPHT technology has evolved into a premier gemological method. Because HPHT mimics nature's exact thermodynamics, HPHT diamonds feature dense cuboctahedral growth geometry, exceptionally crisp icy D-E color, and remarkable optical scintillation.",
    image: "/images/guide/diamond/diamond-hpht.jpg",
    detailImage: "/images/guide/diamond/diamond-hpht.jpg",
    accentColor: "#06B6D4",
    metrics: [
      { label: "Synthesis Pressure", value: "6.0 – 6.5 GPa", hint: "60,000 atmospheres of force" },
      { label: "Temperature", value: "1,400°C – 1,600°C", hint: "Replicates 150km mantle depth" },
      { label: "Growth Geometry", value: "Cuboctahedral", hint: "14 growth faces like earth diamonds" },
      { label: "Mohs Hardness", value: "10 (Real Diamond)", hint: "100% pure carbon matrix" },
    ],
    process: [
      {
        number: "1",
        title: "Cubic Anvil Press Chamber",
        subtitle: "60,000 Atmospheres of Pressure",
        copy: "A pure graphite carbon source, metallic solvent flux (iron, nickel, cobalt), and a diamond seed crystal are loaded into a specialized ceramic cell inside a multi-anvil cubic press.",
        visualType: "crystal_structure",
        visualData: { system: "Cuboctahedron", pressure: "60,000 Atm", temp: "1,500°C" },
      },
      {
        number: "2",
        title: "Thermal Gradient Crystallization",
        subtitle: "Carbon Dissolution & Growth",
        copy: "Under intense heat and pressure, graphite dissolves in the molten metal flux and migrates toward the cooler seed crystal, crystallizing into a rough diamond over days to weeks.",
        visualType: "optical_fire",
        visualData: { index: "RI 2.417", label: "Natural Cuboctahedral Growth" },
      },
      {
        number: "3",
        title: "Icy White Color Saturation",
        subtitle: "D-F Colourless Supremacy",
        copy: "HPHT synthesis often produces stones with crisp, icy D, E, and F color grades with zero brownish undertones, requiring zero post-growth color enhancement.",
        visualType: "color_variants",
        visualData: {
          variants: [
            { name: "Crisp D Colorless", color: "#F0F9FF", composition: "Exceptional Optical Transparency" },
            { name: "Ice White E-F", color: "#F8FAFC", composition: "High Color Saturation" },
            { name: "Fancy Blue (Type IIb)", color: "#BAE6FD", composition: "Boron-Doped HPHT Blue" },
          ],
        },
      },
      {
        number: "4",
        title: "Gemological Verification",
        subtitle: "IGI & GIA Laser Hallmark",
        copy: "Certified by IGI or GIA as Laboratory Grown, verified through diamond testing, and laser inscribed on the girdle with certification number.",
        visualType: "diamond_tester",
        visualData: { testerResponse: "Real Diamond Confirmed", thermal: "Diamond Positive", electric: "Insulator / Semipermeable" },
      },
    ],
    specs: [
      { label: "Growth Technology", value: "High Pressure High Temperature (HPHT)" },
      { label: "Chemical Formula", value: "C (100% Pure Carbon)" },
      { label: "Crystal Habit", value: "Cuboctahedron (14 faces)" },
      { label: "Mohs Hardness", value: "10.0" },
      { label: "Refractive Index", value: "2.417" },
      { label: "Dispersion Rating", value: "0.044" },
      { label: "Growth Time", value: "Several days to several weeks per carat" },
      { label: "Certification", value: "IGI, GIA, HRD" },
    ],
    bestFor: {
      summary:
        "HPHT Lab-Grown Diamonds are ideal for buyers seeking pure icy D-F color, exceptional crystal density, and large, dazzling round brilliant cuts at accessible pricing.",
      highlights: [
        "100% real diamond that passes all thermal conductivity testing.",
        "Mimics the exact thermodynamic pressure conditions of the Earth's mantle.",
        "Delivers exceptionally crisp, icy colorless D and E grades.",
        "Saves thousands of dollars compared to mined diamonds of equivalent grade.",
      ],
      recommendedJewellery: [
        "Round brilliant solitaire engagement rings",
        "Halo and pavé diamond bridal sets",
        "High-clarity diamond stud earrings",
        "Four-prong and bezel solitaire pendants",
      ],
    },
    pros: [
      "Identical physical, chemical, and optical characteristics to mined diamonds",
      "Naturally produces outstanding icy-white color grades",
      "100% ethical and free of environmental mining upheaval",
    ],
    considerations: [
      "Can occasionally retain tiny metallic flux inclusions (visible only under high gemological magnification)",
      "Resale markets follow lab-grown diamond market pricing",
    ],
    careTips: [
      "Clean in ultrasonic cleaners or warm soapy water.",
      "100% safe from scratching by any metal or household substance.",
    ],
    faqs: [
      {
        question: "CVD vs HPHT: Which is better?",
        answer:
          "Both are 100% genuine diamonds! CVD grows tabular crystals via gas plasma, while HPHT uses high mechanical pressure and heat. Once cut and polished, both are visually and physically identical diamonds.",
      },
      {
        question: "Is an HPHT diamond fake?",
        answer:
          "No. HPHT diamonds are NOT fake or cubic zirconia. They are genuine diamonds made of pure carbon atoms with Mohs 10 hardness and 2.417 refractive index.",
      },
    ],
    relatedProductIds: ["prod-1", "prod-3", "prod-5"],
  },
  {
    id: "moissanite",
    slug: "moissanite",
    category: "diamond",
    name: "Moissanite Gemstone Guide (Silicon Carbide)",
    shortName: "Moissanite",
    purityOrOrigin: "Lab-Crystallized Silicon Carbide (SiC)",
    hallmarkOrStamp: "GRA / Charles & Colvard Certified",
    tagline: "Born from stardust meteorites — with 2.4x the rainbow fire dispersion of diamonds and near-indestructible 9.25 hardness.",
    description:
      "Moissanite is a rare, naturally occurring mineral composed of silicon carbide (SiC), first discovered in 1893 in an Arizona meteorite crater by Nobel Prize-winning chemist Dr. Henri Moissan. Because natural moissanite is exceedingly rare, modern moissanite is master-crystallized in laboratories over months into large, flawless crystals. With an extraordinary refractive index of 2.65–2.69 and double refraction, moissanite exhibits more rainbow fire and brilliance than any diamond in existence.",
    overview:
      "Moissanite is a rare, naturally occurring mineral composed of silicon carbide (SiC), first discovered in 1893 in an Arizona meteorite crater by Nobel Prize-winning chemist Dr. Henri Moissan. Because natural moissanite is exceedingly rare, modern moissanite is master-crystallized in laboratories over months into large, flawless crystals. With an extraordinary refractive index of 2.65–2.69 and double refraction, moissanite exhibits more rainbow fire and brilliance than any diamond in existence.",
    historyAndCraft:
      "At 9.25 on the Mohs hardness scale, moissanite is the second hardest gemstone known to science, far harder than sapphire (9), ruby (9), or emerald (7.5). Unlike cubic zirconia which clouds and scratches easily, moissanite never chips, clouds, or loses its fire throughout a lifetime of everyday wear, making it the supreme ethical diamond alternative.",
    image: "/images/guide/diamond/diamond-moissanite.jpg",
    detailImage: "/images/guide/diamond/diamond-moissanite.jpg",
    accentColor: "#F43F5E",
    metrics: [
      { label: "Refractive Index", value: "2.65 – 2.69", hint: "Higher than Diamond (2.42)" },
      { label: "Fire Dispersion", value: "0.104 (2.4x Diamond)", hint: "Spectacular rainbow flashes" },
      { label: "Mohs Hardness", value: "9.25", hint: "2nd hardest gemstone in existence" },
      { label: "Thermal Tester", value: "Tests as Diamond", hint: "Shares diamond heat conductivity" },
    ],
    process: [
      {
        number: "1",
        title: "Physical Vapor Transport",
        subtitle: "Silicon Carbide Synthesis",
        copy: "Pure silicon and carbon are vaporized at temperatures exceeding 2,500°C inside a sealed induction furnace, condensing over several months into rough hexagonal silicon carbide boule crystals.",
        visualType: "crystal_structure",
        visualData: { system: "Hexagonal 6H-SiC", element: "Silicon Carbide (SiC)", origin: "Meteorite Mineral Origin" },
      },
      {
        number: "2",
        title: "Double Refractive Rainbow Fire",
        subtitle: "Dispersion of 0.104",
        copy: "Light rays entering moissanite split into two rays (birefringence), bending light at extreme angles. This gives moissanite its famous, dazzling 'disco ball' rainbow spectral flash that outshines diamonds.",
        visualType: "optical_fire",
        visualData: { index: "RI 2.65 – 2.69 • Double Refraction", label: "2.4x Diamond Rainbow Fire" },
      },
      {
        number: "3",
        title: "Indestructible 9.25 Hardness",
        subtitle: "Outlasts Sapphire & Ruby",
        copy: "Ranking 9.25 on the Mohs scale, moissanite cannot be scratched by glass, keys, granite, or daily wear. It maintains razor-sharp facet junctions and eternal mirror clarity forever.",
        visualType: "hardness_gauge",
        visualData: { rating: 92.5, label: "2nd Hardest Gemstone on Earth", score: "Mohs 9.25" },
      },
      {
        number: "4",
        title: "Testing & Certificate",
        subtitle: "GRA Gemological Warranty",
        copy: "Because moissanite conducts heat similarly to diamonds, standard thermal pen testers beep 'DIAMOND'. Specialized electrical conductivity testers identify its silicon signature.",
        visualType: "diamond_tester",
        visualData: { testerResponse: "Thermal: Diamond Positive", electric: "Moissanite Identifier Active", standard: "GRA Certified" },
      },
    ],
    specs: [
      { label: "Chemical Formula", value: "SiC (Silicon Carbide)" },
      { label: "Crystal System", value: "Hexagonal" },
      { label: "Mohs Hardness", value: "9.25" },
      { label: "Refractive Index", value: "2.65 – 2.69 (Double Refraction)" },
      { label: "Dispersion Rating", value: "0.104 (Diamond is 0.044)" },
      { label: "Brilliance Refractive Score", value: "20.4% higher than diamond" },
      { label: "Heat Resistance", value: "Up to 1,100°C without burning (higher than diamond)" },
      { label: "Grading Scale", value: "Colorless (D-F), Eye Clean (VVS1)" },
    ],
    bestFor: {
      summary:
        "Moissanite is the ultimate choice for smart luxury consumers who want maximum fiery sparkle, uncompromising durability, 100% ethical sustainability, and a show-stopping ring at a fraction of the price of diamonds.",
      highlights: [
        "More brilliance and rainbow fire dispersion than any other gemstone on Earth.",
        "9.25 Mohs hardness guarantees lifetime scratch-free, cloud-free durability.",
        "Costs approximately 90% less than a mined diamond of identical carat size.",
        "Passes standard handheld thermal diamond testers as diamond.",
      ],
      recommendedJewellery: [
        "Statement solitaire engagement rings (1.50ct to 4.00ct)",
        "Travel engagement rings and daily heirloom replacements",
        "Fiery halo earrings and statement cocktail pendants",
        "Brilliant tennis bracelets and eternity bands",
      ],
    },
    pros: [
      "Maximum fire and scintillation; sparkles dramatically even in low light",
      "9.25 hardness makes it impervious to scratches and clouding for life",
      "Unmatched price-to-brilliance value ratio",
      "100% ethical, environmentally friendly stardust origin",
    ],
    considerations: [
      "High rainbow dispersion creates more colorful flashes than diamonds (some notice the 'disco-ball' effect)",
      "It is a unique distinct gemstone (Silicon Carbide), not elemental carbon diamond",
    ],
    careTips: [
      "Clean regularly with warm water and mild dish soap to remove hand oils and restore maximum rainbow fire.",
      "Ultrasonic and steam cleaner safe.",
    ],
    faqs: [
      {
        question: "Is moissanite a fake diamond or cubic zirconia?",
        answer:
          "No! Moissanite is a distinct, rare gemstone (Silicon Carbide) with 9.25 hardness. Cubic Zirconia is soft (8.0), scratches easily, and turns cloudy in months. Moissanite NEVER clouds or scratches and retains its fire for life.",
      },
      {
        question: "Why does moissanite sparkle more than a diamond?",
        answer:
          "Moissanite has a higher refractive index (2.65 vs 2.42) and more than double the dispersion (0.104 vs 0.044). This optical physics creates more fiery rainbow spectral flashes than diamond.",
      },
    ],
    relatedProductIds: ["prod-1", "prod-2", "prod-3", "prod-7"],
  },
];

export const allMaterialGuides: GuideItemDetail[] = [
  ...goldGuidesData,
  ...silverGuidesData,
  ...diamondTypesGuidesData,
  ...shapeGuidesData,
];

export const guideCategoriesData: GuideCategoryOverview[] = [
  {
    id: "gold",
    title: "Gold Purity & Karat Guide",
    tagline: "Explore the nobility, hallmarks, and metallurgy of 24K, 22K, 18K, 14K, and 9K gold.",
    description:
      "Understand the exact gold purity percentages, color alloys (Yellow, White, and Rose Gold), scratch durability, and official assay hallmarks to choose the perfect gold standard for your jewellery.",
    heroImage: "/images/guide/gold/gold-18k.jpg",
    badge: "✦ Certified Hallmarking Guide",
    items: goldGuidesData,
  },
  {
    id: "silver",
    title: "Precious Silver Standards Guide",
    tagline: "From 925 Sterling to Germanium Argentium and 999 Fine Silver.",
    description:
      "Discover the world's most reflective precious metal. Compare 925 Sterling, 999 Fine Silver, patented Argentium, antique Oxidized Silver, and historic 958 Britannia standards.",
    heroImage: "/images/guide/silver/silver-925.jpg",
    badge: "✦ Silver Standards Masterclass",
    items: silverGuidesData,
  },
  {
    id: "diamond",
    title: "Diamond Types & Gemstone Guide",
    tagline: "Natural Earth-Mined, Lab-Grown CVD & HPHT, and Celestial Moissanite.",
    description:
      "Demystify diamond science. Understand the formation, physics, crystal lattice, thermal conductivity, and price advantages of Natural Diamonds, CVD Lab-Grown, HPHT Synthesis, and Moissanite.",
    heroImage: "/images/guide/diamond/diamond-real.jpg",
    badge: "✦ Gemological Science Masterclass",
    items: diamondTypesGuidesData,
  },
  {
    id: "shape",
    title: "Diamond Shapes & Silhouettes Guide",
    tagline: "Explore the geometry, facet symmetry, and 4Cs of 12 iconic diamond cuts.",
    description:
      "Discover the unique light return, brilliance, and proportions of every iconic diamond silhouette: Round, Oval, Emerald, Princess, Cushion, Pear, Radiant, Marquise, Asscher, Heart, Baguette, and Tapered Baguette.",
    heroImage: "/images/shapes/round.jpg",
    badge: "✦ 12 Iconic Diamond Silhouettes",
    items: shapeGuidesData,
  },
];

export function getGuideItem(
  category: string,
  slug: string
): GuideItemDetail | undefined {
  if (!slug) return undefined;
  const normalizedCategory = category?.toLowerCase();
  const normalizedSlug = slug.toLowerCase();

  return allMaterialGuides.find((item) => {
    const matchesCategory =
      !normalizedCategory ||
      item.category === normalizedCategory ||
      ((normalizedCategory === "shape" || normalizedCategory === "shapes") &&
        (item.category === "shape" || item.category === "shapes"));
    const matchesSlug =
      item.id.toLowerCase() === normalizedSlug ||
      item.slug.toLowerCase() === normalizedSlug ||
      (normalizedSlug === "sterling" && item.slug === "925") ||
      (normalizedSlug === "sterling-925" && item.slug === "925") ||
      (normalizedSlug === "fine-silver" && item.slug === "999") ||
      (normalizedSlug === "fine-silver-999" && item.slug === "999") ||
      (normalizedSlug === "natural" && item.slug === "real") ||
      (normalizedSlug === "natural-real" && item.slug === "real") ||
      (normalizedSlug === "labgrown-cvd" && item.slug === "cvd") ||
      (normalizedSlug === "svd" && item.slug === "cvd") ||
      (normalizedSlug === "labgrown-hpht" && item.slug === "hpht") ||
      (normalizedSlug === "mosonite" && item.slug === "moissanite") ||
      (normalizedSlug === "taper" && item.slug === "tapered-baguette") ||
      (normalizedSlug === "baguettes" && item.slug === "baguette");

    return matchesCategory && matchesSlug;
  });
}

export function getGuidesByCategory(category: string): GuideItemDetail[] {
  const norm = category?.toLowerCase();
  if (norm === "gold") return goldGuidesData;
  if (norm === "silver") return silverGuidesData;
  if (norm === "diamond") return diamondTypesGuidesData;
  if (norm === "shape" || norm === "shapes") return shapeGuidesData;
  return allMaterialGuides;
}

export function getAllGuideSlugs(): { category: string; slug: string }[] {
  const list: { category: string; slug: string }[] = [];
  for (const item of allMaterialGuides) {
    list.push({
      category: item.category,
      slug: item.slug,
    });
    if (item.category === "shape") {
      list.push({
        category: "shapes",
        slug: item.slug,
      });
    }
  }
  return list;
}

export function getRelatedGuides(
  category: string,
  currentSlug: string
): GuideItemDetail[] {
  const categoryItems = getGuidesByCategory(category);
  return categoryItems.filter(
    (item) => item.slug.toLowerCase() !== currentSlug.toLowerCase()
  );
}
