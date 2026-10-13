import type { GuideItemDetail } from "@/types/guide";

export const shapeGuidesData: GuideItemDetail[] = [
  {
    id: "round",
    slug: "round",
    category: "shape",
    name: "Round Brilliant Cut Diamond",
    shortName: "Round Cut",
    purityOrOrigin: "Round Brilliant • 1.00 Ratio",
    hallmarkOrStamp: "57–58 Facets",
    tagline: "The timeless classic engineered for mathematical perfection and maximum brilliance.",
    description:
      "Round diamonds are the most recognized and celebrated diamond shape globally, engineered with 57 or 58 precisely calculated facets to maximize light return, fire, and scintillation. Their symmetrical outline makes them the most versatile choice for luxury engagement rings, fine solitaire pendants, and heirloom jewellery.",
    overview:
      "Round diamonds are the most recognized and celebrated diamond shape globally, engineered with 57 or 58 precisely calculated facets to maximize light return, fire, and scintillation. Their symmetrical outline makes them the most versatile choice for luxury engagement rings, fine solitaire pendants, and heirloom jewellery.",
    historyAndCraft:
      "Modern round brilliant diamonds originate from Marcel Tolkowsky's 1919 mathematical model calculating the optimal angles for total internal reflection. Composed of 33 crown facets, 24 pavilion facets, and an optional culet, every facet functions as a miniature mirror bouncing light straight through the diamond's crown.",
    image: "/images/shapes/round.png",
    detailImage: "/images/shapes/round.png",
    accentColor: "#C5A059",
    metrics: [
      { label: "Cut Ratio", value: "1.00 : 1.00", hint: "Perfect circular symmetry" },
      { label: "Ideal Table", value: "54% – 57%", hint: "Maximum crown light entry" },
      { label: "Ideal Depth", value: "60% – 62.5%", hint: "Optimal total internal reflection" },
      { label: "Facet Count", value: "57 or 58", hint: "33 crown + 24 pavilion + 1 culet" },
    ],
    process: [
      {
        number: "1",
        title: "Cut & Light Return",
        subtitle: "Tolkowsky Mathematical Ideal",
        copy: "Round cut planning balances table percentage, crown angle, and pavilion depth so light entering the table reflects off both pavilion walls and bursts out the top.",
        visualType: "optical_fire",
        visualData: { index: "57/58 Facets • Tolkowsky Ideal", label: "Maximum Total Light Reflection" },
      },
      {
        number: "2",
        title: "Colour Masking",
        subtitle: "Scintillation Disperses Tint",
        copy: "Because of intense fire and scintillation, round diamonds mask faint body color better than step cuts. G-H grades appear completely icy white face-up.",
        visualType: "color_variants",
        visualData: {
          variants: [
            { name: "D-F Colourless", color: "#F8FAFC", composition: "Icy Pure White" },
            { name: "G-H Near Colourless", color: "#FAF5E4", composition: "Best Value Eyeclean" },
            { name: "I-J Soft Warmth", color: "#F5EBC4", composition: "Subtle Warm Glow" },
          ],
        },
      },
      {
        number: "3",
        title: "Clarity & Facet Geometry",
        subtitle: "Brilliance Hides Inclusions",
        copy: "The dynamic interplay of 57 moving light reflections conceals tiny inclusions, allowing VS2 and SI1 diamonds to look 100% clean to the naked eye.",
        visualType: "crystal_structure",
        visualData: { system: "Octahedral Brilliant Faceting", element: "57 Precise Mirrors" },
      },
      {
        number: "4",
        title: "Carat Spread & Millimeter Size",
        subtitle: "Consistent Spread Ratio",
        copy: "A 1.00 carat round brilliant measures approximately 6.50mm in diameter, giving a predictable, balanced finger coverage across all ring sizes.",
        visualType: "hardness_gauge",
        visualData: { rating: 100, label: "1.00ct ≈ 6.50mm Diameter", score: "6.50mm" },
      },
    ],
    specs: [
      { label: "Shape Family", value: "Round Brilliant" },
      { label: "Facet Count", value: "57 or 58 facets" },
      { label: "Ideal Length-to-Width Ratio", value: "1.00 – 1.01" },
      { label: "Ideal Table Percentage", value: "54% – 57%" },
      { label: "Ideal Depth Percentage", value: "60% – 62.5%" },
      { label: "Polish & Symmetry", value: "Excellent to Ideal (GIA 3X)" },
      { label: "Visual Feel", value: "Classic, fiery, intensely radiant" },
      { label: "Recommended Setting", value: "4-Prong, 6-Prong, Pavé, Halo, Solitaire, Bezel" },
    ],
    bestFor: {
      summary:
        "Round diamonds shine in classic solitaire engagement rings, luxury diamond studs, diamond tennis bracelets, halo settings, and eternity bands.",
      highlights: [
        "Unsurpassed brilliance and light return engineered to mathematical perfection.",
        "Universal silhouette that matches vintage, modern, and high-fashion aesthetics.",
        "Highest resale liquidity and recognized gold standard across global auctions.",
        "Masks color and clarity inclusions more effectively than step cuts.",
      ],
      recommendedJewellery: [
        "Four-prong and six-prong solitaire engagement rings",
        "Classic diamond stud earrings (0.50ct to 2.00ct pair)",
        "Diamond tennis necklaces and tennis bracelets",
        "Shared-prong diamond eternity wedding bands",
      ],
    },
    pros: [
      "Maximum light return and rainbow scintillation of any diamond cut",
      "Universal design that never loses popularity or relevance",
      "Conceals minor color tints and clarity inclusions exceptionally well",
    ],
    considerations: [
      "Higher price per carat due to larger rough diamond weight loss during cutting",
      "Standard silhouette chosen by majority of bridal buyers",
    ],
    careTips: [
      "Clean weekly with warm water, mild soap, and a soft-bristled baby toothbrush.",
      "Inspect prongs once a year to ensure tension remains secure.",
    ],
    faqs: [
      {
        question: "Why are round diamonds more expensive than other shapes?",
        answer:
          "Up to 50-60% of the rough diamond crystal is polished away to achieve the ideal round brilliant geometry. This higher waste during cutting increases the price per carat.",
      },
      {
        question: "What is the difference between 57 and 58 facets?",
        answer:
          "The 58th facet is the culet at the bottom point of the diamond. Modern diamond cutters prefer a pointed culet (57 facets) or very small culet to prevent light leakage.",
      },
    ],
    relatedProductIds: ["prod-1", "prod-2", "prod-3", "prod-7"],
  },
  {
    id: "oval",
    slug: "oval",
    category: "shape",
    name: "Oval Cut Diamond",
    shortName: "Oval Cut",
    purityOrOrigin: "Elongated Brilliant • 1.40 Ratio",
    hallmarkOrStamp: "58 Facets",
    tagline: "Elongated brilliance combining fiery scintillation with a flattering, finger-slimming silhouette.",
    description:
      "Oval diamonds offer the brilliance and fire of a round cut combined with an elongated silhouette that flatters the hand and creates the optical illusion of greater carat size. Perfect for modern brides seeking contemporary elegance with classic brilliance.",
    overview:
      "Oval diamonds offer the brilliance and fire of a round cut combined with an elongated silhouette that flatters the hand and creates the optical illusion of greater carat size. Perfect for modern brides seeking contemporary elegance with classic brilliance.",
    historyAndCraft:
      "Created in 1957 by master diamond cutter Lazare Kaplan, the modern oval cut combines the 58-facet brilliant cutting scheme of the round diamond with an elongated curved outline. Kaplan pioneered the technique to transform irregularly shaped rough crystals into spectacular gems.",
    image: "/images/shapes/oval.png",
    detailImage: "/images/shapes/oval.png",
    accentColor: "#C5A059",
    metrics: [
      { label: "Cut Ratio", value: "1.35 – 1.50", hint: "Flattering elongated proportions" },
      { label: "Ideal Table", value: "53% – 63%", hint: "Expansive crown spread" },
      { label: "Ideal Depth", value: "58% – 63%", hint: "Balanced depth without windowing" },
      { label: "Finger Spread", value: "+10% Area", hint: "Looks larger than round per carat" },
    ],
    process: [
      {
        number: "1",
        title: "Ratio & Silhouette Planning",
        subtitle: "1.35 to 1.50 Ideal Proportions",
        copy: "Cutters balance length-to-width ratio between 1.35 and 1.50 to achieve a graceful curved oval outline without bulky shoulders or overly pinched tips.",
        visualType: "optical_fire",
        visualData: { index: "1.40 Ratio • 58 Facets", label: "Elongated Brilliant Light Flow" },
      },
      {
        number: "2",
        title: "Bow-Tie Control",
        subtitle: "Light Dispersion Calibration",
        copy: "Precision facet alignment minimizes the dark optical shadow (bow-tie effect) across the center, maximizing brilliant scintillation across the stone.",
        visualType: "color_variants",
        visualData: {
          variants: [
            { name: "Minimal Bow-Tie", color: "#F8FAFC", composition: "Precision Symmetrical Faceting" },
            { name: "Wide Spread", color: "#F1F5F9", composition: "Expanded Surface Area" },
          ],
        },
      },
      {
        number: "3",
        title: "Flattering Finger Coverage",
        subtitle: "+10% Larger Appearance",
        copy: "Due to its elongated geometry, an oval diamond has an approximately 10% larger surface area than a round diamond of equivalent carat weight.",
        visualType: "hardness_gauge",
        visualData: { rating: 90, label: "Expansive Surface Area Spread", score: "+10% Spread" },
      },
      {
        number: "4",
        title: "Settings & Protection",
        subtitle: "4-Prong & 6-Prong Mounts",
        copy: "Sets flawlessly in delicate four-prong, six-prong, and compass settings that frame the elongated curve while securing the stone securely.",
        visualType: "hallmark_stamp",
        visualData: { stampText: "OVAL", standard: "Lazare Kaplan 58-Facet Standard", purity: "Brilliant" },
      },
    ],
    specs: [
      { label: "Shape Family", value: "Modified Brilliant" },
      { label: "Facet Count", value: "58 facets" },
      { label: "Ideal Length-to-Width Ratio", value: "1.35 – 1.50" },
      { label: "Ideal Table Percentage", value: "53% – 63%" },
      { label: "Ideal Depth Percentage", value: "58% – 63%" },
      { label: "Visual Feel", value: "Elegant, slimming, modern luxury" },
      { label: "Common Setting", value: "Solitaire 4-Prong, Hidden Halo, Three-Stone, East-West" },
    ],
    bestFor: {
      summary:
        "Oval diamonds are the top choice for brides seeking an elongated, finger-slimming silhouette with explosive brilliant sparkle.",
      highlights: [
        "Optical illusion of looking up to 10% larger than a round diamond of identical weight.",
        "Elongates and flatters the finger creating an elegant, delicate bridal look.",
        "Combines brilliant round sparkle with distinctive contemporary silhouette.",
        "Trendy yet timeless aesthetic favored by modern luxury celebrities.",
      ],
      recommendedJewellery: [
        "Hidden halo solitaire engagement rings",
        "East-West set modern diamond rings",
        "Three-stone engagement rings flanked by pear diamonds",
        "Solitaire oval drop pendants",
      ],
    },
    pros: [
      "Appears noticeably larger than round diamonds of identical carat weight",
      "Visually elongates the wearer's fingers",
      "High fire and scintillation comparable to round brilliant cuts",
    ],
    considerations: [
      "All ovals exhibit some degree of bow-tie effect; must be inspected for minimal dark shading",
    ],
    careTips: [
      "Inspect prongs regularly as the elongated shape requires even prong placement.",
    ],
    faqs: [
      {
        question: "What is the bow-tie effect in oval diamonds?",
        answer:
          "The bow-tie is a dark, bowtie-shaped shadow cast across the center width caused by light leaking through the bottom. Expert diamond cutters minimize this effect with precise facet angling.",
      },
    ],
    relatedProductIds: ["prod-1", "prod-3", "prod-7"],
  },
  {
    id: "emerald",
    slug: "emerald",
    category: "shape",
    name: "Emerald Cut Diamond",
    shortName: "Emerald Cut",
    purityOrOrigin: "Octagonal Step Cut • 1.40 Ratio",
    hallmarkOrStamp: "57 Facets",
    tagline: "Architectural Art Deco sophistication with mesmerizing hall-of-mirrors step reflections.",
    description:
      "Emerald cut diamonds are iconic rectangular step cuts featuring trimmed corners and parallel linear facets. Known as the diamond of royalty and aristocracy, the emerald cut produces dramatic flashes of white light rather than glittering scintillation.",
    overview:
      "Emerald cut diamonds are iconic rectangular step cuts featuring trimmed corners and parallel linear facets. Known as the diamond of royalty and aristocracy, the emerald cut produces dramatic flashes of white light rather than glittering scintillation.",
    historyAndCraft:
      "Originally developed for cutting fragile green emeralds in the Middle Ages to prevent chipping, the cut was adapted for diamonds during the Art Deco era of the 1920s. Its clean architectural lines embody timeless vintage sophistication.",
    image: "/images/shapes/emerald.png",
    detailImage: "/images/shapes/emerald.png",
    accentColor: "#C5A059",
    metrics: [
      { label: "Cut Ratio", value: "1.30 – 1.55", hint: "Classic rectangular step ratio" },
      { label: "Ideal Table", value: "61% – 69%", hint: "Expansive open mirror table" },
      { label: "Ideal Depth", value: "61% – 67%", hint: "Deep step-cut reflection" },
      { label: "Cut Style", value: "Step Cut", hint: "Parallel rectangular facets" },
    ],
    process: [
      {
        number: "1",
        title: "Step Faceting Geometry",
        subtitle: "Parallel Rectangular Facets",
        copy: "Instead of triangular facets, the emerald cut features parallel rectangular steps leading from the outer girdle down toward the culet.",
        visualType: "crystal_structure",
        visualData: { system: "Step Cut Facet Architecture", element: "57 Step Facets" },
      },
      {
        number: "2",
        title: "Hall-of-Mirrors Effect",
        subtitle: "Contrast of Light and Dark Flashes",
        copy: "As the diamond tilts, light reflects off alternate steps, creating a hypnotic, broad flash of pure white brilliance known as the hall-of-mirrors effect.",
        visualType: "optical_fire",
        visualData: { index: "Hall-of-Mirrors Step Optics", label: "Broad White Flash Reflections" },
      },
      {
        number: "3",
        title: "Purity & Clarity Demand",
        subtitle: "Unforgiving Open Table",
        copy: "Because the large open table acts like a transparent window, emerald cuts require higher clarity (VS1 or higher) to remain completely eye-clean.",
        visualType: "hardness_gauge",
        visualData: { rating: 85, label: "VS1+ Clarity Recommended", score: "High Clarity" },
      },
      {
        number: "4",
        title: "Cropped Corner Integrity",
        subtitle: "Chipped Corner Protection",
        copy: "The cropped 4 corners prevent corner breakage and lock securely into 4-prong and double-claw luxury engagement mounts.",
        visualType: "hallmark_stamp",
        visualData: { stampText: "EMERALD", standard: "Art Deco Step Cut", purity: "Step Cut" },
      },
    ],
    specs: [
      { label: "Shape Family", value: "Step Cut" },
      { label: "Facet Count", value: "57 facets" },
      { label: "Ideal Length-to-Width Ratio", value: "1.30 – 1.55" },
      { label: "Ideal Table Percentage", value: "61% – 69%" },
      { label: "Ideal Depth Percentage", value: "61% – 67%" },
      { label: "Visual Feel", value: "Art Deco, architectural, regal sophistication" },
      { label: "Common Setting", value: "Double Claw, Solitaire, Three-Stone with Baguettes, Bezel" },
    ],
    bestFor: {
      summary:
        "Emerald cuts are the ultimate choice for sophisticated buyers who appreciate Art Deco glamour, understated luxury, and architectural elegance.",
      highlights: [
        "Hypnotic hall-of-mirrors step reflections unlike any brilliant cut.",
        "Art Deco architectural elegance favored by royal dynasties and luxury icons.",
        "Cropped corners provide excellent durability against chipping.",
        "Large open table showcases diamond transparency and crystal purity.",
      ],
      recommendedJewellery: [
        "Double-claw solitaire engagement rings",
        "Three-stone rings flanked by tapered baguette diamonds",
        "Clean minimal bezel set emerald cut rings",
        "Statement cocktail and eternity rings",
      ],
    },
    pros: [
      "Pure, aristocratic sophistication with broad light flashes",
      "Less expensive per carat than round brilliant diamonds",
      "Elongates the hand with sleek rectangular proportions",
    ],
    considerations: [
      "Open table does not hide inclusions; requires VS2 or higher clarity grade",
    ],
    careTips: [
      "Wipe clean frequently; oils on the open table dull the step reflections faster.",
    ],
    faqs: [
      {
        question: "Can you see inclusions easily in an emerald cut?",
        answer:
          "Yes. Unlike brilliant cuts whose dozens of tiny facets conceal inclusions, the emerald cut's open table acts like a clear window. We recommend VS1 or eye-clean VS2.",
      },
    ],
    relatedProductIds: ["prod-1", "prod-2", "prod-3"],
  },
  {
    id: "princess",
    slug: "princess",
    category: "shape",
    name: "Princess Cut Diamond",
    shortName: "Princess Cut",
    purityOrOrigin: "Square Brilliant • 1.00 Ratio",
    hallmarkOrStamp: "76 Facets",
    tagline: "Contemporary square silhouette engineered with brilliant cut fire and geometric edge.",
    description:
      "Princess cut diamonds are modern square brilliant cuts with 90-degree corners. Combining the clean lines of a square with the explosive fire of a round diamond, the princess cut is one of the most popular diamond shapes in modern bridal jewellery.",
    overview:
      "Princess cut diamonds are modern square brilliant cuts with 90-degree corners. Combining the clean lines of a square with the explosive fire of a round diamond, the princess cut is one of the most popular diamond shapes in modern bridal jewellery.",
    historyAndCraft:
      "Created in 1980 by Betzalel Ambar and Israel Itzkowitz, the princess cut was engineered to preserve more of the rough octahedral crystal than round cuts while maximizing brilliant light return.",
    image: "/images/shapes/princess.png",
    detailImage: "/images/shapes/princess.png",
    accentColor: "#C5A059",
    metrics: [
      { label: "Cut Ratio", value: "1.00 – 1.05", hint: "Crisp square geometry" },
      { label: "Ideal Table", value: "69% – 75%", hint: "Wide crown reflection" },
      { label: "Ideal Depth", value: "70% – 75%", hint: "Deep pyramid pavilion" },
      { label: "Facet Count", value: "76 Facets", hint: "Maximum square sparkle" },
    ],
    process: [
      {
        number: "1",
        title: "Pyramidal Geometry",
        subtitle: "Inverted Pyramid Pavilion",
        copy: "The princess cut features an inverted pyramid profile that channels light through 76 brilliant facets, bouncing fire to every square corner.",
        visualType: "optical_fire",
        visualData: { index: "76 Facet Square Brilliance", label: "Maximum Geometric Sparkle" },
      },
      {
        number: "2",
        title: "Corner Protection Mounts",
        subtitle: "V-Prong Security",
        copy: "Because the 90-degree corners come to sharp points, they are mounted in protective V-prongs (chevron prongs) to guard against chipping.",
        visualType: "hardness_gauge",
        visualData: { rating: 80, label: "V-Prong Corner Protection", score: "V-Prong Shield" },
      },
      {
        number: "3",
        title: "Rough Yield & Value",
        subtitle: "Efficient Octahedral Cut",
        copy: "Because the square shape closely mirrors natural octahedral rough crystals, cutters waste less raw diamond, resulting in lower cost per carat.",
        visualType: "color_variants",
        visualData: {
          variants: [
            { name: "Crisp Square (1.00)", color: "#F8FAFC", composition: "Sharp Modern Symmetry" },
            { name: "Slight Rectangular (1.05)", color: "#F1F5F9", composition: "Softened Outline" },
          ],
        },
      },
      {
        number: "4",
        title: "Modern Edge Aesthetic",
        subtitle: "Bold Contemporary Elegance",
        copy: "Pairs impeccably with modern geometric ring bands, channel-set princess side stones, and crisp architectural settings.",
        visualType: "hallmark_stamp",
        visualData: { stampText: "PRINCESS", standard: "Ambar & Itzkowitz 76-Facet", purity: "Square Brilliant" },
      },
    ],
    specs: [
      { label: "Shape Family", value: "Square Modified Brilliant" },
      { label: "Facet Count", value: "76 facets" },
      { label: "Ideal Length-to-Width Ratio", value: "1.00 – 1.05" },
      { label: "Ideal Table Percentage", value: "69% – 75%" },
      { label: "Ideal Depth Percentage", value: "70% – 75%" },
      { label: "Visual Feel", value: "Modern, crisp, geometric brilliance" },
      { label: "Common Setting", value: "V-Prong Solitaire, Channel-Set, Cathedral, Halo" },
    ],
    bestFor: {
      summary:
        "Princess cut diamonds are ideal for brides who love modern geometric aesthetics, clean lines, and brilliant light return at great value.",
      highlights: [
        "Unbeatable combination of square geometry and round brilliant sparkle.",
        "Excellent price-to-carat value due to high cutting yield.",
        "Sharp contemporary edge that stands out from curved rings.",
      ],
      recommendedJewellery: [
        "V-prong solitaire engagement rings",
        "Channel-set princess cut bridal bands",
        "Cathedral shoulder-set diamond mountings",
      ],
    },
    pros: [
      "Exceptional brilliance close to round brilliant diamonds",
      "More affordable per carat than round diamonds",
      "Modern, striking geometric profile",
    ],
    considerations: [
      "Corners can chip if not secured in protective V-prongs",
    ],
    careTips: [
      "Always ensure prongs fully cover the 4 sharp corners.",
    ],
    faqs: [
      {
        question: "Can princess cut corners chip?",
        answer:
          "Yes, if left exposed. That is why master jewellers always use protective V-shaped prongs (chevron prongs) to shield the sharp corners from daily impact.",
      },
    ],
    relatedProductIds: ["prod-1", "prod-3", "prod-6"],
  },
  {
    id: "cushion",
    slug: "cushion",
    category: "shape",
    name: "Cushion Cut Diamond",
    shortName: "Cushion Cut",
    purityOrOrigin: "Pillow Brilliant • 1.05 Ratio",
    hallmarkOrStamp: "58 Facets",
    tagline: "Romantic pillow silhouette with rounded corners and antique candlelit fire.",
    description:
      "Cushion cut diamonds feature softly rounded corners and curved sides resembling a plush pillow. Blending modern brilliant cutting with historic 19th-century Old Mine cut heritage, cushion diamonds emit warm, romantic rainbow fire flashes.",
    overview:
      "Cushion cut diamonds feature softly rounded corners and curved sides resembling a plush pillow. Blending modern brilliant cutting with historic 19th-century Old Mine cut heritage, cushion diamonds emit warm, romantic rainbow fire flashes.",
    historyAndCraft:
      "Originating as the 19th-century 'Old Mine Cut' designed to sparkle under flickering candlelight before electric bulbs, the modern cushion cut was refined with 58 brilliant facets. It is the cut of legendary historical gems like the Hope Diamond.",
    image: "/images/shapes/cushion.png",
    detailImage: "/images/shapes/cushion.png",
    accentColor: "#C5A059",
    metrics: [
      { label: "Cut Ratio", value: "1.00 – 1.08", hint: "Square to elongated pillow" },
      { label: "Ideal Table", value: "58% – 64%", hint: "Balanced crown table" },
      { label: "Ideal Depth", value: "61% – 67%", hint: "Deep romantic dispersion" },
      { label: "Cut Heritage", value: "Old Mine Cut", hint: "19th century candlelit charm" },
    ],
    process: [
      {
        number: "1",
        title: "Pillow Curvature",
        subtitle: "Rounded Corner Geometry",
        copy: "Softly rounded corners eliminate sharp points while retaining the architectural structure of a square or rectangular gem.",
        visualType: "crystal_structure",
        visualData: { system: "Pillow Modified Brilliant", element: "58-64 Facets" },
      },
      {
        number: "2",
        title: "Chunky vs Crushed Ice",
        subtitle: "Facet Pattern Variation",
        copy: "Cushion cuts are available in 'chunky' antique facet patterns (bold rainbow flashes) and 'crushed ice' modified brilliant patterns (shimmering glitter).",
        visualType: "optical_fire",
        visualData: { index: "Chunky Fire vs Crushed Ice", label: "Romantic Spectral Dispersion" },
      },
      {
        number: "3",
        title: "Halo Compatibility",
        subtitle: "The Ultimate Halo Gem",
        copy: "The soft perimeter makes the cushion cut the undisputed premier silhouette for micro-pavé halo engagement settings.",
        visualType: "hardness_gauge",
        visualData: { rating: 85, label: "Premier Halo Setting Profile", score: "Halo Master" },
      },
      {
        number: "4",
        title: "Durability & Wear",
        subtitle: "Snag-Free Outline",
        copy: "Because all four corners are gently rounded, cushion cuts never catch on knitwear, hair, or pockets.",
        visualType: "hallmark_stamp",
        visualData: { stampText: "CUSHION", standard: "Old Mine Heritage", purity: "Pillow Cut" },
      },
    ],
    specs: [
      { label: "Shape Family", value: "Cushion Modified Brilliant" },
      { label: "Facet Count", value: "58 to 64 facets" },
      { label: "Ideal Length-to-Width Ratio", value: "1.00 – 1.08 (Square) / 1.15 – 1.25 (Elongated)" },
      { label: "Ideal Table Percentage", value: "58% – 64%" },
      { label: "Ideal Depth Percentage", value: "61% – 67%" },
      { label: "Visual Feel", value: "Romantic, vintage, soft feminine glamour" },
      { label: "Common Setting", value: "Micro-Pavé Halo, Solitaire, Double Halo, Vintage Milgrain" },
    ],
    bestFor: {
      summary:
        "Cushion cut diamonds are perfect for brides who adore romantic vintage charm, antique Old Mine heritage, and halo engagement rings.",
      highlights: [
        "Soft pillow silhouette with zero sharp snagging points.",
        "Extraordinary rainbow fire and vintage candlelit warmth.",
        "Undisputed favorite silhouette for halo and vintage milgrain mountings.",
      ],
      recommendedJewellery: [
        "Micro-pavé halo diamond engagement rings",
        "Vintage filigree and milgrain bridal settings",
        "Classic claw solitaire rings",
      ],
    },
    pros: [
      "Extremely durable rounded corners that do not chip easily",
      "Warm, romantic rainbow fire dispersion",
      "Pairs gorgeously with halo settings",
    ],
    considerations: [
      "Cushion cuts can hold color; opt for H or better if you want pure white",
    ],
    careTips: [
      "Gentle ultrasonic cleanings preserve the deep pavilion facet reflections.",
    ],
    faqs: [
      {
        question: "What is an elongated cushion cut?",
        answer:
          "An elongated cushion cut has a length-to-width ratio of 1.15 to 1.25, creating a rectangular pillow shape that flatters the finger while maintaining soft rounded corners.",
      },
    ],
    relatedProductIds: ["prod-1", "prod-2", "prod-5"],
  },
  {
    id: "pear",
    slug: "pear",
    category: "shape",
    name: "Pear Shaped Diamond",
    shortName: "Pear Cut",
    purityOrOrigin: "Teardrop Brilliant • 1.60 Ratio",
    hallmarkOrStamp: "58 Facets",
    tagline: "Graceful teardrop silhouette merging round brilliance with a dramatic pointed tip.",
    description:
      "Pear shaped diamonds, also known as teardrop diamonds, combine the fiery scintillation of a round brilliant with the tapered elegance of a marquise. Worn with the point facing the fingernail, pear cuts create a slimming, elongated appearance.",
    overview:
      "Pear shaped diamonds, also known as teardrop diamonds, combine the fiery scintillation of a round brilliant with the tapered elegance of a marquise. Worn with the point facing the fingernail, pear cuts create a slimming, elongated appearance.",
    historyAndCraft:
      "Invented in 1458 by Flemish master cutter Lodewyk van Bercken, the inventor of the diamond polishing scaif wheel, the pear cut remains one of the world's most historic and dramatic luxury shapes.",
    image: "/images/shapes/pear.png",
    detailImage: "/images/shapes/pear.png",
    accentColor: "#C5A059",
    metrics: [
      { label: "Cut Ratio", value: "1.45 – 1.70", hint: "Graceful teardrop balance" },
      { label: "Ideal Table", value: "53% – 63%", hint: "Curved crown light entry" },
      { label: "Ideal Depth", value: "58% – 64%", hint: "Balanced depth" },
      { label: "Facet Count", value: "58 Facets", hint: "Brilliant teardrop faceting" },
    ],
    process: [
      {
        number: "1",
        title: "Teardrop Symmetry",
        subtitle: "Shoulders, Belly & Wing Symmetry",
        copy: "Master cutters balance the rounded head, smooth arched shoulders, wide belly, and gently tapering wings to meet at a sharp point.",
        visualType: "optical_fire",
        visualData: { index: "58-Facet Teardrop Symmetry", label: "Dynamic Scintillation" },
      },
      {
        number: "2",
        title: "V-Prong Tip Shielding",
        subtitle: "Point Protection Mount",
        copy: "The pointed tip is secured with a protective V-shaped chevron prong to shield the thinnest edge of the stone from accidental knocks.",
        visualType: "hardness_gauge",
        visualData: { rating: 80, label: "V-Prong Tip Protection", score: "Chevron Tip" },
      },
      {
        number: "3",
        title: "Finger-Slimming Silhouette",
        subtitle: "Visual Lengthening",
        copy: "When worn with the tip pointing outward toward the fingertip, the pear shape visually elongates the wearer's hand.",
        visualType: "color_variants",
        visualData: {
          variants: [
            { name: "Classic 1.50 Ratio", color: "#F8FAFC", composition: "Balanced Teardrop" },
            { name: "Slender 1.65 Ratio", color: "#F1F5F9", composition: "Elongated Dramatics" },
          ],
        },
      },
      {
        number: "4",
        title: "Versatile Mountings",
        subtitle: "Solitaire, Bezel & Toi et Moi",
        copy: "A favorite for celebrity Toi et Moi two-stone engagement rings, drop pendants, and statement solitaire rings.",
        visualType: "hallmark_stamp",
        visualData: { stampText: "PEAR", standard: "1458 Van Bercken Heritage", purity: "Teardrop" },
      },
    ],
    specs: [
      { label: "Shape Family", value: "Modified Brilliant" },
      { label: "Facet Count", value: "58 facets" },
      { label: "Ideal Length-to-Width Ratio", value: "1.45 – 1.70" },
      { label: "Ideal Table Percentage", value: "53% – 63%" },
      { label: "Ideal Depth Percentage", value: "58% – 64%" },
      { label: "Visual Feel", value: "Dramatic, slimming, romantic teardrop" },
      { label: "Common Setting", value: "V-Prong Solitaire, Halo, Toi et Moi, Drop Pendant" },
    ],
    bestFor: {
      summary:
        "Pear shaped diamonds are ideal for brides seeking dramatic elegance, finger-slimming proportions, and striking drop pendants.",
      highlights: [
        "Iconic teardrop outline that slims and elongates the finger.",
        "Top choice for modern Toi et Moi two-stone celebrity rings.",
        "Combines brilliant round sparkle with sharp marquise drama.",
      ],
      recommendedJewellery: [
        "V-prong teardrop solitaire rings",
        "Toi et Moi paired engagement rings (e.g. Pear + Emerald cut)",
        "Solitaire diamond drop pendants",
      ],
    },
    pros: [
      "Extremely flattering and slimming on the finger",
      "Looks larger per carat than a round brilliant",
      "Unique, memorable silhouette",
    ],
    considerations: [
      "The delicate tip requires a protective V-prong setting",
    ],
    careTips: [
      "Ensure the tip prong is never loose to prevent chipping.",
    ],
    faqs: [
      {
        question: "Which way should a pear shaped ring be worn?",
        answer:
          "Traditionally, the pointed tip faces outward toward your fingernails to maximize the finger-slimming optical effect, although personal preference is celebrated.",
      },
    ],
    relatedProductIds: ["prod-1", "prod-3", "prod-8"],
  },
  {
    id: "radiant",
    slug: "radiant",
    category: "shape",
    name: "Radiant Cut Diamond",
    shortName: "Radiant Cut",
    purityOrOrigin: "Brilliant Step Cut • 1.25 Ratio",
    hallmarkOrStamp: "70 Facets",
    tagline: "Cracked-ice brilliance combining the clean outline of an emerald cut with 70 brilliant facets.",
    description:
      "Radiant cut diamonds combine the elegant cropped-corner outline of an emerald cut with the fiery brilliance of a round cut. Engineered with 70 facets, the radiant cut produces a shimmering 'cracked-ice' fire that conceals inclusions and maximizes sparkle.",
    overview:
      "Radiant cut diamonds combine the elegant cropped-corner outline of an emerald cut with the fiery brilliance of a round cut. Engineered with 70 facets, the radiant cut produces a shimmering 'cracked-ice' fire that conceals inclusions and maximizes sparkle.",
    historyAndCraft:
      "Invented in 1977 by master diamond cutter Henry Grossbard, the radiant cut was the first diamond cut designed specifically to combine brilliant cut pavilion facets with a step-cut crown profile.",
    image: "/images/shapes/radiant.png",
    detailImage: "/images/shapes/radiant.png",
    accentColor: "#C5A059",
    metrics: [
      { label: "Cut Ratio", value: "1.15 – 1.35", hint: "Elongated to square mixed cut" },
      { label: "Ideal Table", value: "61% – 69%", hint: "High scintillation crown" },
      { label: "Ideal Depth", value: "61% – 67%", hint: "Balanced depth" },
      { label: "Facet Count", value: "70 Facets", hint: "Maximum cracked-ice fire" },
    ],
    process: [
      {
        number: "1",
        title: "Mixed Cut Architecture",
        subtitle: "Grossbard Patented Engineering",
        copy: "Grossbard arranged 70 facets across a rectangular outline, creating a vibrant network of light reflections that sparkles from every angle.",
        visualType: "optical_fire",
        visualData: { index: "70 Facet Mixed Cut", label: "Cracked-Ice Dynamic Sparkle" },
      },
      {
        number: "2",
        title: "Cropped Corner Strength",
        subtitle: "Beveled Corner Security",
        copy: "The beveled corners provide immense structural durability, resisting chipping far better than the sharp 90-degree points of a princess cut.",
        visualType: "hardness_gauge",
        visualData: { rating: 88, label: "Beveled Corner Chip Resistance", score: "High Durability" },
      },
      {
        number: "3",
        title: "Color Saturation Enhancement",
        subtitle: "Fancy Color Specialist",
        copy: "The facet structure intensifies color saturation, making the radiant cut the world's premier choice for Fancy Yellow and coloured diamonds.",
        visualType: "color_variants",
        visualData: {
          variants: [
            { name: "Colourless D-F", color: "#F8FAFC", composition: "Icy Cracked Fire" },
            { name: "Fancy Intense Yellow", color: "#FDE047", composition: "Concentrated Color Saturation" },
          ],
        },
      },
      {
        number: "4",
        title: "Modern Bridal Glamour",
        subtitle: "Elongated Solitaire Favorite",
        copy: "Elongated radiant cuts (1.20-1.30 ratio) set in micro-pavé hidden halo bands represent one of today's most requested bridal designs.",
        visualType: "hallmark_stamp",
        visualData: { stampText: "RADIANT", standard: "1977 Grossbard Cut", purity: "Mixed Cut" },
      },
    ],
    specs: [
      { label: "Shape Family", value: "Cut-Corner Modified Brilliant" },
      { label: "Facet Count", value: "70 facets" },
      { label: "Ideal Length-to-Width Ratio", value: "1.15 – 1.35 (Elongated) / 1.00 – 1.05 (Square)" },
      { label: "Ideal Table Percentage", value: "61% – 69%" },
      { label: "Ideal Depth Percentage", value: "61% – 67%" },
      { label: "Visual Feel", value: "Fiery, modern, high-octane brilliance" },
      { label: "Common Setting", value: "Hidden Halo, 4-Prong Solitaire, Three-Stone with Trapezoids" },
    ],
    bestFor: {
      summary:
        "Radiant cut diamonds are ideal for brides who want the clean rectangular shape of an emerald cut with the explosive sparkle of a round brilliant.",
      highlights: [
        "70 facets create sensational 'cracked-ice' sparkle.",
        "Cropped corners provide excellent durability against chipping.",
        "Intensifies color, making it the favorite for Fancy Yellow diamonds.",
      ],
      recommendedJewellery: [
        "Elongated radiant hidden halo solitaire rings",
        "Three-stone rings flanked by trapezoid diamonds",
        "Fancy yellow diamond engagement mountings",
      ],
    },
    pros: [
      "Immense sparkle and scintillation hides inclusions",
      "Very durable with trimmed corners",
      "Elongates fingers gracefully",
    ],
    considerations: [
      "Denser depth can result in slightly smaller face-up spread compared to ovals",
    ],
    careTips: [
      "Ultrasonic cleaning keeps the 70 facets shining at peak reflection.",
    ],
    faqs: [
      {
        question: "Radiant vs Emerald Cut: What is the difference?",
        answer:
          "Both share the same cropped-corner rectangular outline, but an emerald cut has parallel step facets that create a hall-of-mirrors effect, while a radiant cut has 70 brilliant facets that create explosive glittering sparkle.",
      },
    ],
    relatedProductIds: ["prod-1", "prod-2", "prod-7"],
  },
  {
    id: "marquise",
    slug: "marquise",
    category: "shape",
    name: "Marquise Cut Diamond",
    shortName: "Marquise Cut",
    purityOrOrigin: "Navette Silhouette • 1.90 Ratio",
    hallmarkOrStamp: "58 Facets",
    tagline: "Regal French royal silhouette offering the largest face-up surface area of any diamond cut.",
    description:
      "The marquise cut diamond, also known as the navette cut ('little boat'), features an elongated football-like silhouette with pointed ends. Commissioned by King Louis XV of France, it boasts the largest face-up surface area per carat of any diamond shape.",
    overview:
      "The marquise cut diamond, also known as the navette cut ('little boat'), features an elongated football-like silhouette with pointed ends. Commissioned by King Louis XV of France, it boasts the largest face-up surface area per carat of any diamond shape.",
    historyAndCraft:
      "Commissioned in 1745 by King Louis XV to resemble the perfect smile of his mistress, the Marchioness Madame de Pompadour, the marquise cut remains an enduring icon of royal luxury.",
    image: "/images/shapes/marquise.png",
    detailImage: "/images/shapes/marquise.png",
    accentColor: "#C5A059",
    metrics: [
      { label: "Cut Ratio", value: "1.75 – 2.25", hint: "Dramatic elongated navette" },
      { label: "Ideal Table", value: "53% – 63%", hint: "Spanning crown table" },
      { label: "Ideal Depth", value: "58% – 64%", hint: "Balanced depth" },
      { label: "Surface Area", value: "+15% Spread", hint: "Largest face-up spread of any cut" },
    ],
    process: [
      {
        number: "1",
        title: "Navette Curve Geometry",
        subtitle: "1.75 to 2.25 Ratio",
        copy: "Balanced curves taper from a central belly to dual pointed tips, offering dramatic elongation and finger-slimming proportions.",
        visualType: "optical_fire",
        visualData: { index: "58 Facet Navette Curve", label: "Maximum Surface Spread" },
      },
      {
        number: "2",
        title: "Dual V-Prong Protection",
        subtitle: "Safeguarding Both Tips",
        copy: "Both points are shielded in secure V-shaped chevron prongs to protect against snagging and chipping during daily wear.",
        visualType: "hardness_gauge",
        visualData: { rating: 80, label: "Dual V-Prong Shielding", score: "Dual Chevron" },
      },
      {
        number: "3",
        title: "Maximum Visual Size",
        subtitle: "15% Larger than Round",
        copy: "Carat for carat, a marquise cut diamond looks up to 15% larger face-up than a round brilliant of the exact same weight.",
        visualType: "color_variants",
        visualData: {
          variants: [
            { name: "Slender 2.0 Ratio", color: "#F8FAFC", composition: "Dramatic Royal Silhouette" },
            { name: "Full 1.80 Ratio", color: "#F1F5F9", composition: "Softened Belly Curvature" },
          ],
        },
      },
      {
        number: "4",
        title: "East-West & Solitaire",
        subtitle: "Contemporary Styling",
        copy: "Worn vertically for classic regal elegance or set horizontally (East-West) for a chic modern statement.",
        visualType: "hallmark_stamp",
        visualData: { stampText: "MARQUISE", standard: "1745 French Royal Cut", purity: "Navette" },
      },
    ],
    specs: [
      { label: "Shape Family", value: "Modified Brilliant" },
      { label: "Facet Count", value: "58 facets" },
      { label: "Ideal Length-to-Width Ratio", value: "1.75 – 2.25" },
      { label: "Ideal Table Percentage", value: "53% – 63%" },
      { label: "Ideal Depth Percentage", value: "58% – 64%" },
      { label: "Visual Feel", value: "Regal, dramatic, ultimate finger elongation" },
      { label: "Common Setting", value: "V-Prong Solitaire, East-West, Halo, Vintage Cluster" },
    ],
    bestFor: {
      summary:
        "Marquise cut diamonds are ideal for buyers who want maximum visual diamond size per carat, royal French pedigree, and extreme finger elongation.",
      highlights: [
        "Largest face-up surface area per carat of any diamond shape.",
        "Dramatic French royal heritage commissioned by King Louis XV.",
        "Unbeatable finger-slimming and lengthening effect.",
      ],
      recommendedJewellery: [
        "V-prong classic solitaire rings",
        "Modern horizontal East-West set rings",
        "Botanical and floral cluster jewellery",
      ],
    },
    pros: [
      "Looks significantly larger than any other shape of identical carat weight",
      "Remarkable finger-slimming appearance",
      "Royal historical provenance",
    ],
    considerations: [
      "Both pointed tips require protective V-prongs",
    ],
    careTips: [
      "Inspect tip prongs regularly to maintain security.",
    ],
    faqs: [
      {
        question: "Why does a marquise diamond look so large?",
        answer:
          "Because of its elongated shape and shallow depth distribution, more of the diamond's carat weight is spread across the surface face, giving it the largest visual spread of all shapes.",
      },
    ],
    relatedProductIds: ["prod-1", "prod-3", "prod-7"],
  },
  {
    id: "asscher",
    slug: "asscher",
    category: "shape",
    name: "Asscher Cut Diamond",
    shortName: "Asscher Cut",
    purityOrOrigin: "Square Step Cut • 1.00 Ratio",
    hallmarkOrStamp: "74 Facets",
    tagline: "Hypnotic square windmill step cut embodying the golden age of 1920s Art Deco luxury.",
    description:
      "The Asscher cut diamond is a square step cut with heavily cropped corners, a high crown, and a small table. Engineered with 74 step facets, it produces a mesmerizing 'windmill' optical reflection pattern that pulls the viewer's eye into the heart of the stone.",
    overview:
      "The Asscher cut diamond is a square step cut with heavily cropped corners, a high crown, and a small table. Engineered with 74 step facets, it produces a mesmerizing 'windmill' optical reflection pattern that pulls the viewer's eye into the heart of the stone.",
    historyAndCraft:
      "Created in 1902 by Joseph Asscher, the legendary Dutch artisan who cleaved the 3,106-carat Cullinan diamond for the British Crown Jewels, the Royal Asscher cut reached peak fame during the 1920s Art Deco era.",
    image: "/images/shapes/asscher.png",
    detailImage: "/images/shapes/asscher.png",
    accentColor: "#C5A059",
    metrics: [
      { label: "Cut Ratio", value: "1.00 – 1.05", hint: "Square octagonal symmetry" },
      { label: "Ideal Table", value: "60% – 68%", hint: "High crown & small table" },
      { label: "Ideal Depth", value: "60% – 68%", hint: "Deep step optics" },
      { label: "Facet Count", value: "74 Facets", hint: "Hypnotic windmill pattern" },
    ],
    process: [
      {
        number: "1",
        title: "Windmill Reflection Pattern",
        subtitle: "Intersecting Step Diagonals",
        copy: "Steep step facets meet at the center culet, forming a distinctive optical X-pattern resembling an architectural windmill.",
        visualType: "crystal_structure",
        visualData: { system: "Square Step Windmill", element: "74 Step Facets" },
      },
      {
        number: "2",
        title: "High Crown & Deep Pavilion",
        subtitle: "Vintage Art Deco Profile",
        copy: "Higher crown angles and deep pavilions produce more fire and color dispersion than traditional rectangular emerald cuts.",
        visualType: "optical_fire",
        visualData: { index: "High Crown Step Optics", label: "Windmill Light Reflection" },
      },
      {
        number: "3",
        title: "Heavily Cropped Corners",
        subtitle: "Octagonal Silhouette",
        copy: "Wide angled corner facets give the Asscher cut a nearly octagonal appearance that looks stunning in vintage filigree mountings.",
        visualType: "hardness_gauge",
        visualData: { rating: 88, label: "Octagonal Corner Protection", score: "Art Deco Shield" },
      },
      {
        number: "4",
        title: "Clarity Significance",
        subtitle: "Pure Crystal Transparency",
        copy: "Like the emerald cut, the open step table demands high clarity (VS1 or better) to keep the windmill pattern pristine.",
        visualType: "hallmark_stamp",
        visualData: { stampText: "ASSCHER", standard: "1902 Royal Asscher Cut", purity: "Square Step" },
      },
    ],
    specs: [
      { label: "Shape Family", value: "Square Step Cut" },
      { label: "Facet Count", value: "74 facets" },
      { label: "Ideal Length-to-Width Ratio", value: "1.00 – 1.05" },
      { label: "Ideal Table Percentage", value: "60% – 68%" },
      { label: "Ideal Depth Percentage", value: "60% – 68%" },
      { label: "Visual Feel", value: "Vintage, hypnotic, Art Deco architectural" },
      { label: "Common Setting", value: "Solitaire, Art Deco Filigree, Bezel, Double Claw" },
    ],
    bestFor: {
      summary:
        "Asscher cut diamonds are ideal for connoisseurs who appreciate Dutch diamond cutting history, Art Deco vintage designs, and mesmerizing windmill reflections.",
      highlights: [
        "Distinctive concentric windmill step reflections.",
        "Heavily cropped corners give an alluring octagonal outline.",
        "Deep historical pedigree tied to the British Crown Jewels.",
      ],
      recommendedJewellery: [
        "Art Deco architectural engagement rings",
        "Vintage milgrain bezel solitaire rings",
        "Double-claw halo heirloom mountings",
      ],
    },
    pros: [
      "Hypnotic, unique optical pattern that stands out from all other cuts",
      "Durable cropped corners that do not snag",
      "Timeless Art Deco elegance",
    ],
    considerations: [
      "Open table requires high clarity (VS1+ recommended)",
      "Deep cut means slightly smaller surface spread per carat",
    ],
    careTips: [
      "Clean regularly to keep the central culet reflection bright and transparent.",
    ],
    faqs: [
      {
        question: "Asscher vs Emerald cut: What is the difference?",
        answer:
          "The emerald cut is rectangular with long step facets, while the Asscher cut is square with heavily cropped corners, a higher crown, and a distinctive X-shaped windmill pattern.",
      },
    ],
    relatedProductIds: ["prod-1", "prod-2", "prod-4"],
  },
  {
    id: "heart",
    slug: "heart",
    category: "shape",
    name: "Heart Shaped Diamond",
    shortName: "Heart Cut",
    purityOrOrigin: "Modified Brilliant • 1.00 Ratio",
    hallmarkOrStamp: "59 Facets",
    tagline: "The ultimate symbol of romantic devotion requiring the highest level of diamond cutting mastery.",
    description:
      "Heart shaped diamonds are modified brilliant cuts featuring a distinct cleft, curved lobes, and a tapered pointed tip. Recognized as the ultimate romantic emblem, cutting a symmetrical heart diamond demands extraordinary lapidary precision.",
    overview:
      "Heart shaped diamonds are modified brilliant cuts featuring a distinct cleft, curved lobes, and a tapered pointed tip. Recognized as the ultimate romantic emblem, cutting a symmetrical heart diamond demands extraordinary lapidary precision.",
    historyAndCraft:
      "First recorded in 1562 when Mary Queen of Scots gifted a heart-shaped diamond ring to Queen Elizabeth I, the heart cut has stood for nearly 500 years as the supreme royal gesture of love.",
    image: "/images/shapes/heart.png",
    detailImage: "/images/shapes/heart.png",
    accentColor: "#C5A059",
    metrics: [
      { label: "Cut Ratio", value: "0.90 – 1.10", hint: "Perfect lobe symmetry" },
      { label: "Ideal Table", value: "53% – 63%", hint: "Wide crown reflection" },
      { label: "Ideal Depth", value: "58% – 64%", hint: "Balanced depth" },
      { label: "Cleft Depth", value: "Distinct Cleft", hint: "Sharp, defined heart cleft" },
    ],
    process: [
      {
        number: "1",
        title: "Lobe & Cleft Precision",
        subtitle: "Symmetrical Lapidary Art",
        copy: "The cutter must cut two identical rounded lobes and carve a clean, sharp cleft to produce an instantly recognizable heart silhouette.",
        visualType: "optical_fire",
        visualData: { index: "59 Facet Heart Brilliant", label: "Romantic Light Dispersion" },
      },
      {
        number: "2",
        title: "Point & Cleft Protection",
        subtitle: "3-Prong & 5-Prong Security",
        copy: "The sharp point is shielded by a V-prong, while the lobes and cleft are supported by precision-placed side prongs.",
        visualType: "hardness_gauge",
        visualData: { rating: 80, label: "V-Prong Point Protection", score: "V-Prong Shield" },
      },
      {
        number: "3",
        title: "Carat Threshold",
        subtitle: "Best at 1.00ct and Above",
        copy: "Because the cleft and lobes require space to be visually defined, heart diamonds are best appreciated at 1.00 carat and above.",
        visualType: "color_variants",
        visualData: {
          variants: [
            { name: "Classic 1.00 Ratio", color: "#F8FAFC", composition: "Perfect Heart Symmetry" },
            { name: "Slight Wide (0.95)", color: "#F1F5F9", composition: "Fuller Lobes" },
          ],
        },
      },
      {
        number: "4",
        title: "Symbol of Everlasting Love",
        subtitle: "Iconic Romantic Silhouette",
        copy: "A timeless choice for engagement rings, anniversary pendants, and Valentine's milestone jewellery.",
        visualType: "hallmark_stamp",
        visualData: { stampText: "HEART", standard: "1562 Royal Heart Cut", purity: "Modified Brilliant" },
      },
    ],
    specs: [
      { label: "Shape Family", value: "Modified Brilliant" },
      { label: "Facet Count", value: "59 facets" },
      { label: "Ideal Length-to-Width Ratio", value: "0.90 – 1.10" },
      { label: "Ideal Table Percentage", value: "53% – 63%" },
      { label: "Ideal Depth Percentage", value: "58% – 64%" },
      { label: "Visual Feel", value: "Romantic, sentimental, playful elegance" },
      { label: "Common Setting", value: "Solitaire, Bezel, Halo, Three-Stone with Pear" },
    ],
    bestFor: {
      summary:
        "Heart cut diamonds are ideal for romantic engagement rings, anniversary keepsakes, and sentiment-rich solitaire pendants.",
      highlights: [
        "The universal, unmistakable emblem of love and devotion.",
        "Requires supreme cutting mastery to achieve balanced lobes and a sharp cleft.",
        "High brilliant scintillation comparable to round brilliant cuts.",
      ],
      recommendedJewellery: [
        "Romantic solitaire heart engagement rings",
        "Heart pendant necklaces",
        "Anniversary milestone rings",
      ],
    },
    pros: [
      "Deeply sentimental and instantly recognizable",
      "Brilliant light return and fire",
      "Rare and technically challenging cut",
    ],
    considerations: [
      "Best appreciated in diamonds of 1.00 carat or larger for clear cleft visibility",
    ],
    careTips: [
      "Ensure the V-prong on the tip remains tightly seated.",
    ],
    faqs: [
      {
        question: "What is the best size for a heart shaped diamond?",
        answer:
          "We recommend 1.00 carat or larger for rings. In smaller carat sizes (under 0.50ct), the cleft can become hard to discern from a distance.",
      },
    ],
    relatedProductIds: ["prod-1", "prod-3", "prod-7"],
  },
  {
    id: "baguette",
    slug: "baguette",
    category: "shape",
    name: "Baguette Cut Diamond",
    shortName: "Baguette Cut",
    purityOrOrigin: "Straight Step Cut • 1.50 Ratio",
    hallmarkOrStamp: "14 Facets",
    tagline: "Geometric parallel step cut favored for clean channel bands and mid-century modern jewellery.",
    description:
      "Baguette cut diamonds are slender, rectangular step cuts featuring 14 clean facets. Named after the French word for rod or stick, baguette diamonds provide clean parallel reflections that accentuate center stones and form elegant eternity bands.",
    overview:
      "Baguette cut diamonds are slender, rectangular step cuts featuring 14 clean facets. Named after the French word for rod or stick, baguette diamonds provide clean parallel reflections that accentuate center stones and form elegant eternity bands.",
    historyAndCraft:
      "Created during the early 1900s and popularized by Cartier during the Art Deco era, the baguette cut became the definitive side stone for fine jewellery solitaires throughout the 20th century.",
    image: "/images/shapes/baguette.png",
    detailImage: "/images/shapes/baguette.png",
    accentColor: "#C5A059",
    metrics: [
      { label: "Cut Ratio", value: "1.50 – 2.50", hint: "Slender rectangular rod" },
      { label: "Ideal Table", value: "60% – 70%", hint: "Flat step table" },
      { label: "Ideal Depth", value: "60% – 68%", hint: "Linear step depth" },
      { label: "Facet Count", value: "14 Facets", hint: "Pure parallel lines" },
    ],
    process: [
      {
        number: "1",
        title: "Parallel Step Geometry",
        subtitle: "14 Pristine Facets",
        copy: "Long, straight step facets run parallel to the edges, creating pure, linear mirrors without glittering distraction.",
        visualType: "crystal_structure",
        visualData: { system: "Parallel Linear Step Cut", element: "14 Step Facets" },
      },
      {
        number: "2",
        title: "Channel & Flush Mounting",
        subtitle: "Seamless Band Alignment",
        copy: "Straight parallel edges allow multiple baguette diamonds to be set edge-to-edge in channel bands with zero gaps.",
        visualType: "hardness_gauge",
        visualData: { rating: 85, label: "Edge-to-Edge Channel Fit", score: "Flush Alignment" },
      },
      {
        number: "3",
        title: "Complementary Contrast",
        subtitle: "Accentuating Brilliant Solitaires",
        copy: "When flanking a round or oval center stone, the linear step cut creates a stunning textural contrast that emphasizes center stone fire.",
        visualType: "optical_fire",
        visualData: { index: "Linear Step Optics", label: "Clean Glass Mirrors" },
      },
      {
        number: "4",
        title: "Art Deco Architecture",
        subtitle: "Historic Cartier Heritage",
        copy: "A staple of high jewellery cocktail rings, ballerina settings, and geometric bridal mountings.",
        visualType: "hallmark_stamp",
        visualData: { stampText: "BAGUETTE", standard: "Art Deco Linear Cut", purity: "Step Cut" },
      },
    ],
    specs: [
      { label: "Shape Family", value: "Step Cut" },
      { label: "Facet Count", value: "14 facets" },
      { label: "Ideal Length-to-Width Ratio", value: "1.50 – 2.50" },
      { label: "Ideal Table Percentage", value: "60% – 70%" },
      { label: "Ideal Depth Percentage", value: "60% – 68%" },
      { label: "Visual Feel", value: "Linear, clean, Art Deco geometric" },
      { label: "Common Setting", value: "Channel Band, Three-Stone Flanking, Ballerina Ring" },
    ],
    bestFor: {
      summary:
        "Baguette cut diamonds are the premier choice for accent side stones, channel-set eternity wedding rings, and vintage Art Deco cocktail designs.",
      highlights: [
        "Pure linear step facets with zero visual clutter.",
        "Sets flush edge-to-edge in channel rings without gaps.",
        "Accentuates the size and brilliance of center solitaire diamonds.",
      ],
      recommendedJewellery: [
        "Channel-set baguette diamond wedding bands",
        "Three-stone engagement rings with baguette shoulders",
        "Art Deco cocktail cluster rings",
      ],
    },
    pros: [
      "Clean, modern architectural lines",
      "Sits flush against wedding bands for smooth daily wear",
      "Pairs impeccably with both brilliant and step cut center stones",
    ],
    considerations: [
      "Typically used as side or accent stones rather than large center solitaires",
    ],
    careTips: [
      "Keep clean from hand lotion; linear facets show smudges quickly.",
    ],
    faqs: [
      {
        question: "What is the difference between baguette and tapered baguette?",
        answer:
          "A straight baguette has parallel edges of equal width, while a tapered baguette narrows from one end to the other, creating a trapezoidal silhouette designed to guide the eye inward toward a center stone.",
      },
    ],
    relatedProductIds: ["prod-1", "prod-2", "prod-3"],
  },
  {
    id: "tapered-baguette",
    slug: "tapered-baguette",
    category: "shape",
    name: "Tapered Baguette Diamond",
    shortName: "Tapered Baguette",
    purityOrOrigin: "Tapered Step Cut • 1.50 Ratio",
    hallmarkOrStamp: "14 Facets",
    tagline: "Trapezoidal step cut narrowing gracefully along the ring shank toward the center stone.",
    description:
      "Tapered baguette diamonds are trapezoidal step cuts that narrow from a wider base to a smaller tip. Regarded as the undisputed classic side stone in mid-century and modern high jewellery, tapered baguettes guide the eye inward to accentuate the center solitaire.",
    overview:
      "Tapered baguette diamonds are trapezoidal step cuts that narrow from a wider base to a smaller tip. Regarded as the undisputed classic side stone in mid-century and modern high jewellery, tapered baguettes guide the eye inward to accentuate the center solitaire.",
    historyAndCraft:
      "Popularized in the 1930s and 1950s by legendary houses like Tiffany & Co. and Winston, tapered baguettes are precision-matched in identical pairs to flank fine emerald cut and round brilliant solitaires.",
    image: "/images/shapes/tapered-baguette.png",
    detailImage: "/images/shapes/tapered-baguette.png",
    accentColor: "#C5A059",
    metrics: [
      { label: "Cut Ratio", value: "1.50 – 2.00", hint: "Trapezoid narrowing ratio" },
      { label: "Ideal Table", value: "60% – 70%", hint: "Tapered flat table" },
      { label: "Ideal Depth", value: "60% – 68%", hint: "Linear step depth" },
      { label: "Pair Matching", value: "Precision Matched", hint: "Exact optical millimeter pairs" },
    ],
    process: [
      {
        number: "1",
        title: "Trapezoid Precision Taper",
        subtitle: "Inward Eye Guidance",
        copy: "The narrow outer end follows the ring shank while the wider inner end frames the center stone, creating an optical funnel that magnifies the center solitaire.",
        visualType: "crystal_structure",
        visualData: { system: "Trapezoidal Step Geometry", element: "14 Tapered Facets" },
      },
      {
        number: "2",
        title: "Gemological Pair Matching",
        subtitle: "Identical Color & Dimensions",
        copy: "Tapered baguettes are calibrated in matched pairs to ensure identical color, clarity, millimeter length, and taper angle on both shoulders.",
        visualType: "color_variants",
        visualData: {
          variants: [
            { name: "Matched Pair", color: "#F8FAFC", composition: "Identical Color & Ratio" },
            { name: "Step Reflective", color: "#F1F5F9", composition: "Symmetrical Reflections" },
          ],
        },
      },
      {
        number: "3",
        title: "Flush Prong Integration",
        subtitle: "Snag-Free Shoulder Mount",
        copy: "Sits flush against the ring shank with shared-bar or channel settings, ensuring smooth, snag-free everyday wear.",
        visualType: "hardness_gauge",
        visualData: { rating: 88, label: "Flush Band Setting Integration", score: "Flush Shoulder" },
      },
      {
        number: "4",
        title: "Mid-Century Luxury Heritage",
        subtitle: "Undisputed Solitaire Flanker",
        copy: "Favored in three-stone platinum and 18K yellow gold engagement rings flanking round, emerald, oval, and cushion solitaires.",
        visualType: "hallmark_stamp",
        visualData: { stampText: "TAPERED", standard: "Winston & Cartier Standard", purity: "Trapezoid" },
      },
    ],
    specs: [
      { label: "Shape Family", value: "Step Cut (Trapezoid)" },
      { label: "Facet Count", value: "14 facets" },
      { label: "Ideal Length-to-Width Ratio", value: "1.50 – 2.00" },
      { label: "Ideal Table Percentage", value: "60% – 70%" },
      { label: "Ideal Depth Percentage", value: "60% – 68%" },
      { label: "Visual Feel", value: "Mid-century classic, architectural, elegant funnel" },
      { label: "Common Setting", value: "Three-Stone Solitaire Shoulder, Platinum Mount, Bar Set" },
    ],
    bestFor: {
      summary:
        "Tapered baguette diamonds shine as flanking shoulder stones in classic three-stone solitaire engagement rings and vintage cocktail settings.",
      highlights: [
        "Trapezoidal step cut narrowing elegantly along the ring shank toward the center stone.",
        "Guides the eye naturally and accentuates the size of the center solitaire.",
        "The undisputed classic side-stone silhouette in mid-century and modern high jewellery.",
      ],
      recommendedJewellery: [
        "Three-stone round solitaire rings with tapered baguette accents",
        "Emerald-cut engagement rings flanked by tapered baguettes",
        "Art Deco architectural bridal mountings",
      ],
    },
    pros: [
      "Guides the eye inward to make center diamonds look noticeably larger",
      "Timeless Art Deco elegance favored by premier luxury jewellery houses",
      "Sits flush against ring bands for smooth, snag-free everyday wear",
    ],
    considerations: [
      "Requires precise gemological matching when bought in pairs",
      "Best suited as accent or side stones rather than a standalone solitaire",
    ],
    careTips: [
      "Ensure shoulder prongs remain tight during annual ring inspections.",
    ],
    faqs: [
      {
        question: "Why are tapered baguettes used as side stones?",
        answer:
          "Their trapezoidal shape naturally bridges the transition from the slender ring shank to the larger center solitaire, directing light and attention straight to the center diamond.",
      },
    ],
    relatedProductIds: ["prod-1", "prod-3"],
  },
];
