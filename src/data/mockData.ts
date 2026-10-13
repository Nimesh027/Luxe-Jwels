import type {
  Category,
  Collection,
  Product,
  NavLink,
  HeroSlide,
  FeatureItem,
  FooterColumn,
  SocialLink,
  Testimonial,
} from "@/types";

// ============================================================================
// 1. CATEGORIES DATA
// ============================================================================
export const categoriesData: Category[] = [
  { id: "cat-necklaces", name: "Necklaces", slug: "necklaces", image: "/images/category/necklaces.jpg" },
  { id: "cat-earrings", name: "Earrings", slug: "earrings", image: "/images/category/earrings.jpg" },
  { id: "cat-rings", name: "Rings", slug: "rings", image: "/images/category/rings.jpg" },
  { id: "cat-bracelets", name: "Bracelets", slug: "bracelets", image: "/images/category/bracelets.jpg" },
  { id: "cat-pendants", name: "Pendants", slug: "pendants", image: "/images/category/pendants.jpg" },
  { id: "cat-mens", name: "Men's Collection", slug: "mens-collection", image: "/images/category/mens-collection.jpg" },
  { id: "cat-womens", name: "Women's Collection", slug: "womens-collection", image: "/images/product/women-necklace-showcase.png" },
];

// ============================================================================
// 2. COLLECTIONS DATA
// ============================================================================
export const collectionsData: Collection[] = [
  {
    id: "col-diamond",
    name: "Diamond Collection",
    slug: "diamond-collection",
    tagline: "Radiant Brilliance",
    image: "/images/collections/diamond-collection.jpg",
  },
  {
    id: "col-gold",
    name: "Gold Collection",
    slug: "gold-collection",
    tagline: "Timeless Beauty",
    image: "/images/collections/gold-collection.jpg",
  },
  {
    id: "col-mens",
    name: "Men's Collection",
    slug: "mens-collection",
    tagline: "Bold & Masculine",
    image: "/images/category/mens-collection.jpg",
  },
  {
    id: "col-couple",
    name: "Couple Collection",
    slug: "couple-collection",
    tagline: "Made for Each Other",
    image: "/images/collections/couple-collection.jpg",
  },
  {
    id: "col-gift",
    name: "Gift Collection",
    slug: "gift-collection",
    tagline: "Perfect for Every Moment",
    image: "/images/collections/gift-collection.jpg",
  },
];

// ============================================================================
// 3. PRODUCTS DATA
// ============================================================================
export const productsData: Product[] = [
  // 1. WOMEN'S RINGS
  {
    id: "prod-diamond-ring",
    name: "Diamond Solitaire Ring",
    slug: "diamond-solitaire-ring",
    price: 49999,
    compareAtPrice: 56999,
    image: "/images/product/diamond-ring.jpg",
    category: "rings",
    gender: "women",
    collections: ["diamond-collection", "couple-collection", "gift-collection"],
    isBestseller: true,
    isMostViewed: true,
    description:
      "A brilliant hallmarked diamond solitaire ring, set in 18k white gold for timeless elegance.",
  },
  {
    id: "prod-modish-diamond-ring",
    name: "Modish Links Diamond Ring",
    slug: "modish-links-diamond-ring",
    price: 42999,
    compareAtPrice: 48999,
    image: "/images/product/Diamond_Ring.png",
    category: "rings",
    gender: "women",
    collections: ["diamond-collection", "gold-collection"],
    isBestseller: false,
    description:
      "Interlinked gold bands encrusted with pave-set natural diamonds.",
  },
  {
    id: "prod-halo-diamond-ring",
    name: "Eternal Halo Diamond Ring",
    slug: "eternal-halo-diamond-ring",
    price: 58999,
    compareAtPrice: 64999,
    image: "/images/product/women-rings-showcase.png",
    category: "rings",
    gender: "women",
    collections: ["diamond-collection", "couple-collection", "gift-collection"],
    isBestseller: false,
    isMostSold: true,
    description:
      "Center solitaire surrounded by a double halo of sparkling brilliant diamonds.",
  },
  {
    id: "prod-emerald-cut-ring",
    name: "Emerald Cut Solitaire Band",
    slug: "emerald-cut-solitaire-band",
    price: 38999,
    compareAtPrice: 43999,
    image: "/images/category/rings.jpg",
    category: "rings",
    gender: "women",
    collections: ["gold-collection", "couple-collection"],
    isBestseller: false,
    description:
      "Modern minimalist emerald-cut solitaire ring crafted in 18k yellow gold.",
  },

  // 2. MEN'S RINGS
  {
    id: "prod-mens-signet-ring",
    name: "Men's Black Onyx Signet Ring",
    slug: "mens-black-onyx-signet-ring",
    price: 24999,
    compareAtPrice: 28999,
    image: "/images/product/mens-black-onyx-signet-ring.jpg",
    category: "rings",
    gender: "men",
    collections: ["mens-collection", "gold-collection", "gift-collection"],
    isBestseller: true,
    isMostViewed: true,
    description:
      "A bold statement signet ring featuring a polished black onyx gemstone encased in solid gold.",
  },
  {
    id: "prod-mens-roman-ring",
    name: "Men's Roman Signet Ring",
    slug: "mens-roman-signet-ring",
    price: 28999,
    compareAtPrice: 32999,
    image: "/images/product/men-ring-showcase.png",
    category: "rings",
    gender: "men",
    collections: ["mens-collection", "gold-collection", "couple-collection"],
    isBestseller: false,
    description:
      "Distinguished grooved gold band featuring a brushed flat top and tapered comfort shank.",
  },

  // 3. WOMEN'S PENDANTS
  {
    id: "prod-cross-pendant",
    name: "Diamond Cross Pendant",
    slug: "diamond-cross-pendant",
    price: 24999,
    compareAtPrice: 28999,
    image: "/images/product/cross-pendant.jpg",
    category: "pendants",
    gender: "women",
    collections: ["diamond-collection", "gold-collection", "gift-collection"],
    isBestseller: false,
    isMostSold: true,
    description:
      "A timeless cross pendant crafted in certified 18k yellow gold with sparkling diamonds.",
  },
  {
    id: "prod-teardrop-pendant",
    name: "Teardrop Diamond Pendant",
    slug: "teardrop-diamond-pendant",
    price: 34999,
    compareAtPrice: 39999,
    image: "/images/product/Diamond_Pendant.png",
    category: "pendants",
    gender: "women",
    collections: ["diamond-collection", "gold-collection", "gift-collection"],
    isBestseller: true,
    isMostViewed: true,
    description:
      "Exquisite teardrop-shaped natural diamond pendant suspended on a fine gold link chain.",
  },
  {
    id: "prod-imperial-solitaire-pendant",
    name: "Imperial Solitaire Pendant",
    slug: "imperial-solitaire-pendant",
    price: 27999,
    compareAtPrice: 31999,
    image: "/images/category/pendants.jpg",
    category: "pendants",
    gender: "women",
    collections: ["diamond-collection", "gift-collection"],
    isBestseller: false,
    description:
      "Classic bezel-set round diamond pendant in polished 18k white gold.",
  },

  // 4. WOMEN'S BRACELETS
  {
    id: "prod-tennis-bracelet",
    name: "Royal Diamond Tennis Bracelet",
    slug: "royal-diamond-tennis-bracelet",
    price: 79999,
    compareAtPrice: 89999,
    image: "/images/category/bracelets.jpg",
    category: "bracelets",
    gender: "women",
    collections: ["diamond-collection", "couple-collection", "gift-collection"],
    isBestseller: true,
    description:
      "Continuous strand of brilliant-cut diamonds handcrafted in four-prong platinum settings.",
  },
  {
    id: "prod-pave-diamond-bangle",
    name: "Pavé Diamond Cuff Bangle",
    slug: "pave-diamond-cuff-bangle",
    price: 48999,
    compareAtPrice: 54999,
    image: "/images/collections/couple-collection.jpg",
    category: "bracelets",
    gender: "women",
    collections: ["diamond-collection", "gold-collection", "couple-collection"],
    isBestseller: false,
    isMostSold: true,
    description:
      "Sleek and flexible gold bangle encrusted with shimmering micro-pavé diamonds.",
  },

  // 5. MEN'S BRACELETS
  {
    id: "prod-black-onyx-bracelet",
    name: "Black Onyx & Gold Bracelet",
    slug: "black-onyx-gold-bracelet",
    price: 15999,
    compareAtPrice: 19999,
    image: "/images/product/black-onyx-bracelet.jpg",
    category: "bracelets",
    gender: "men",
    collections: ["mens-collection", "gold-collection", "gift-collection"],
    isBestseller: false,
    isMostViewed: true,
    description:
      "Bold polished black onyx cylinders paired with 18k gold link accents.",
  },
  {
    id: "prod-mens-cuban-bracelet",
    name: "Men's Gold Link Bracelet",
    slug: "mens-gold-link-bracelet",
    price: 31999,
    compareAtPrice: 36999,
    image: "/images/product/mens-gold-link-bracelet.jpg",
    category: "bracelets",
    gender: "men",
    collections: ["mens-collection", "gold-collection"],
    isBestseller: false,
    isMostSold: true,
    description:
      "Contemporary masculinity meets heirloom craftsmanship in this heavy-gauge link bracelet.",
  },

  // 6. WOMEN'S EARRINGS
  {
    id: "prod-diamond-studs",
    name: "Solitaire Diamond Studs",
    slug: "solitaire-diamond-studs",
    price: 29999,
    compareAtPrice: 34999,
    image: "/images/product/diamond-studs.jpg",
    category: "earrings",
    gender: "women",
    collections: ["diamond-collection", "gift-collection"],
    isBestseller: true,
    isMostSold: true,
    description:
      "Classic four-prong round brilliant diamond stud earrings in 18k white gold.",
  },
  {
    id: "prod-regal-diamond-studs",
    name: "Regal Encrusted Square Studs",
    slug: "regal-encrusted-square-studs",
    price: 35999,
    compareAtPrice: 41999,
    image: "/images/product/Regal_Diamond.png",
    category: "earrings",
    gender: "women",
    collections: ["diamond-collection", "gift-collection"],
    isBestseller: false,
    isMostViewed: true,
    description:
      "Intricate square halo diamond stud earrings with fine milgrain detailing.",
  },
  {
    id: "prod-teardrop-earrings",
    name: "Teardrop Chandelier Drop Earrings",
    slug: "teardrop-chandelier-drop-earrings",
    price: 44999,
    compareAtPrice: 51999,
    image: "/images/category/earrings.jpg",
    category: "earrings",
    gender: "women",
    collections: ["diamond-collection", "gold-collection", "gift-collection"],
    isBestseller: false,
    description:
      "Graceful drop earrings featuring cascading brilliant diamonds and warm yellow gold.",
  },

  // 7. WOMEN'S NECKLACES
  {
    id: "prod-bridal-necklace",
    name: "Grand Floral Heritage Necklace",
    slug: "grand-floral-heritage-necklace",
    price: 124999,
    compareAtPrice: 139999,
    image: "/images/product/grand-floral-heritage-necklace.jpg",
    category: "necklaces",
    gender: "women",
    collections: ["diamond-collection", "gold-collection"],
    isBestseller: false,
    isMostSold: true,
    description:
      "Majestic multi-tiered gold and diamond bridal choker with emerald center stone.",
  },
  {
    id: "prod-celebration-choker",
    name: "Celebration Diamond Choker",
    slug: "celebration-diamond-choker",
    price: 95999,
    compareAtPrice: 108999,
    image: "/images/category/necklaces.jpg",
    category: "necklaces",
    gender: "women",
    collections: ["diamond-collection"],
    isBestseller: false,
    description:
      "Contemporary open-collar diamond choker with sparkling prong-set solitaire clusters.",
  },
  {
    id: "prod-bridal-symphony-suite",
    name: "Bridal Symphony Necklace Suite",
    slug: "bridal-symphony-necklace-suite",
    price: 149999,
    compareAtPrice: 168999,
    image: "/images/product/women-festive-showcase.png",
    category: "necklaces",
    gender: "women",
    collections: ["diamond-collection", "gold-collection"],
    isBestseller: false,
    description:
      "Heirloom bridal necklace encrusted with certified natural diamonds and gold filigree.",
  },

  // 8. MEN'S CHAINS & NECKLACES
  {
    id: "prod-gold-chain",
    name: "Classic Cuban Gold Chain",
    slug: "classic-cuban-gold-chain",
    price: 38999,
    compareAtPrice: 44999,
    image: "/images/product/gold-chain.jpg",
    category: "necklaces",
    gender: "men",
    collections: ["mens-collection", "gold-collection"],
    isBestseller: true,
    isMostViewed: true,
    description:
      "A refined 22k hallmarked Cuban link gold chain built to last for generations.",
  },
  {
    id: "prod-mens-gold-pendant",
    name: "Men's Gold Bar Pendant & Chain",
    slug: "mens-gold-bar-pendant-chain",
    price: 45999,
    compareAtPrice: 51999,
    image: "/images/collections/gold-collection.jpg",
    category: "necklaces",
    gender: "men",
    collections: ["mens-collection", "gold-collection", "gift-collection"],
    isBestseller: false,
    description:
      "Minimalist textured gold ingot pendant suspended from a solid gold wheat chain.",
  },
];

// ============================================================================
// 4. NAVIGATION DATA
// ============================================================================
export const navigationData: NavLink[] = [
  { id: "nav-shop", label: "Shop", href: "/shop" },
  {
    id: "nav-men",
    label: "Men",
    href: "/category/mens-collection",
    children: [
      { id: "nav-men-rings", label: "Rings", href: "/category/rings?gender=men" },
      { id: "nav-men-bracelets", label: "Bracelets", href: "/category/bracelets?gender=men" },
      { id: "nav-men-chains", label: "Chains", href: "/category/necklaces?gender=men" },
      { id: "nav-men-all", label: "All Men's Collection", href: "/category/mens-collection" },
    ],
    megaMenu: {
      defaultTabId: "men-category",
      tabs: [
        {
          id: "men-category",
          label: "Category",
          items: [
            { id: "men-rings", name: "Rings", href: "/category/rings?gender=men" },
            { id: "men-bracelets", name: "Bracelets", href: "/category/bracelets?gender=men" },
            { id: "men-chains", name: "Chains", href: "/category/necklaces?gender=men" },
            { id: "men-all", name: "All Men's Jewellery", href: "/category/mens-collection" },
          ],
          bottomBanner: {
            heading: "Bold & Masculine Statements.",
            subheading: "Contemporary fine jewellery crafted for the modern gentleman.",
            thumbnails: [
              "/images/product/mens-black-onyx-signet-ring.jpg",
              "/images/product/mens-gold-link-bracelet.jpg",
            ],
            buttonText: "View All Men",
            buttonHref: "/category/mens-collection",
          },
          featuredCard: {
            image: "/images/product/mens-black-onyx-signet-ring.jpg",
            title: "Bold & Masculine — Handcrafted designs for every gentleman",
            href: "/category/mens-collection",
            ctaLabel: "Explore Men's",
          },
        },
        {
          id: "men-collections",
          label: "Collections",
          items: [
            { id: "men-col-main", name: "Men's Collection", href: "/category/mens-collection" },
            { id: "men-col-couple", name: "Couple Collection", href: "/collections/couple-collection" },
            { id: "men-col-gift", name: "Gift Collection", href: "/collections/gift-collection" },
          ],
          bottomBanner: {
            heading: "Curated for Him.",
            subheading: "Certified hallmarked jewellery for every special milestone.",
            thumbnails: [
              "/images/product/mens-gold-link-bracelet.jpg",
            ],
            buttonText: "View Collections",
            buttonHref: "/collections",
          },
          featuredCard: {
            image: "/images/product/mens-gold-link-bracelet.jpg",
            title: "Distinguished luxury for celebrations and gifting",
            href: "/collections/gift-collection",
            ctaLabel: "Shop Gifts",
          },
        },
      ],
    },
  },
  {
    id: "nav-women",
    label: "Women",
    href: "/collections",
    children: [
      { id: "nav-women-necklaces", label: "Necklaces", href: "/category/necklaces?gender=women" },
      { id: "nav-women-earrings", label: "Earrings", href: "/category/earrings?gender=women" },
      { id: "nav-women-pendants", label: "Pendants", href: "/category/pendants?gender=women" },
      { id: "nav-women-rings", label: "Rings", href: "/category/rings?gender=women" },
      { id: "nav-women-bracelets", label: "Bracelets", href: "/category/bracelets?gender=women" },
      { id: "nav-women-all", label: "All Women's Jewellery", href: "/category/womens-collection" },
    ],
    megaMenu: {
      defaultTabId: "women-category",
      tabs: [
        {
          id: "women-category",
          label: "Category",
          items: [
            { id: "women-necklaces", name: "Necklaces", href: "/category/necklaces?gender=women" },
            { id: "women-earrings", name: "Earrings", href: "/category/earrings?gender=women" },
            { id: "women-pendants", name: "Pendants", href: "/category/pendants?gender=women" },
            { id: "women-rings", name: "Rings", href: "/category/rings?gender=women" },
            { id: "women-bracelets", name: "Bracelets", href: "/category/bracelets?gender=women" },
            { id: "women-all", name: "All Women's Jewellery", href: "/category/womens-collection" },
          ],
          bottomBanner: {
            heading: "From Classic to Contemporary.",
            subheading: "Explore fine jewellery handcrafted for every moment.",
            thumbnails: [
              "/images/product/women-necklace-showcase.png",
              "/images/product/women-rings-showcase.png",
              "/images/product/women-festive-showcase.png",
            ],
            buttonText: "View All",
            buttonHref: "/collections",
          },
          featuredCard: {
            image: "/images/product/women-necklace-showcase.png",
            title: "Timeless Elegance — Handcrafted jewellery inspired by pure grace",
            href: "/collections",
            ctaLabel: "Explore Now",
          },
        },
        {
          id: "women-collections",
          label: "Collections",
          items: [
            { id: "women-col-diamond", name: "Diamond Collection", href: "/collections/diamond-collection" },
            { id: "women-col-gold", name: "Gold Collection", href: "/collections/gold-collection" },
            { id: "women-col-couple", name: "Couple Collection", href: "/collections/couple-collection" },
            { id: "women-col-gift", name: "Gift Collection", href: "/collections/gift-collection" },
          ],
          bottomBanner: {
            heading: "Exclusive Collections.",
            subheading: "Timeless beauty crafted with supreme precision.",
            thumbnails: [
              "/images/product/women-rings-showcase.png",
              "/images/product/women-festive-showcase.png",
            ],
            buttonText: "View Collections",
            buttonHref: "/collections",
          },
          featuredCard: {
            image: "/images/product/women-rings-showcase.png",
            title: "Radiate Brilliance — Certified hallmarked diamonds and fine gold",
            href: "/collections/diamond-collection",
            ctaLabel: "Discover Diamond",
          },
        },
      ],
    },
  },
  {
    id: "nav-collections",
    label: "Collections",
    href: "/collections",
    children: [
      { id: "nav-collections-diamond", label: "Diamond Collection", href: "/collections/diamond-collection" },
      { id: "nav-collections-gold", label: "Gold Collection", href: "/collections/gold-collection" },
      { id: "nav-collections-couple", label: "Couple Collection", href: "/collections/couple-collection" },
      { id: "nav-collections-gift", label: "Gift Collection", href: "/collections/gift-collection" },
    ],
    megaMenu: {
      defaultTabId: "col-collections",
      tabs: [
        {
          id: "col-collections",
          label: "Collections",
          items: [
            { id: "c-diamond", name: "Diamond Collection", href: "/collections/diamond-collection" },
            { id: "c-gold", name: "Gold Collection", href: "/collections/gold-collection" },
            { id: "c-couple", name: "Couple Collection", href: "/collections/couple-collection" },
            { id: "c-gift", name: "Gift Collection", href: "/collections/gift-collection" },
            { id: "c-mens", name: "Men's Collection", href: "/category/mens-collection" },
            { id: "c-all", name: "All Collections", href: "/collections" },
          ],
          bottomBanner: {
            heading: "From Classic to Contemporary.",
            subheading: "Discover our new collections, made for every story.",
            thumbnails: [
              "/images/product/women-festive-showcase.png",
              "/images/product/women-necklace-showcase.png",
              "/images/product/women-rings-showcase.png",
            ],
            buttonText: "View All",
            buttonHref: "/collections",
          },
          featuredCard: {
            image: "/images/collections/diamond-collection.jpg",
            title: "Timeless Beauty — Discover the finest gold & diamond collections",
            href: "/collections/diamond-collection",
            ctaLabel: "Explore Diamonds",
          },
        },
        {
          id: "col-categories",
          label: "Category",
          items: [
            { id: "c-rings", name: "Rings", href: "/category/rings" },
            { id: "c-necklaces", name: "Necklaces", href: "/category/necklaces" },
            { id: "c-bracelets", name: "Bracelets", href: "/category/bracelets" },
            { id: "c-earrings", name: "Earrings", href: "/category/earrings" },
            { id: "c-pendants", name: "Pendants", href: "/category/pendants" },
            { id: "c-mens-cat", name: "Men's Jewellery", href: "/category/mens-collection" },
          ],
          bottomBanner: {
            heading: "Shop by Category.",
            subheading: "Certified BIS Hallmarked fine jewellery crafted with care.",
            thumbnails: [
              "/images/product/women-rings-showcase.png",
              "/images/product/women-necklace-showcase.png",
            ],
            buttonText: "View Categories",
            buttonHref: "/collections",
          },
          featuredCard: {
            image: "/images/product/women-rings-showcase.png",
            title: "Solitaire and statement rings crafted to perfection",
            href: "/category/rings",
            ctaLabel: "Shop Rings",
          },
        },
      ],
    },
  },
  { id: "nav-gifts", label: "Gifts", href: "/collections/gift-collection" },
  {
    id: "nav-guide-learn",
    label: "Guide & Learn",
    href: "/guide",
    children: [
      { id: "nav-guide-all", label: "Guide & Learn Hub", href: "/guide" },
      { id: "nav-guide-gold", label: "Gold Karats Guide", href: "/guide/gold" },
      { id: "nav-guide-gold-18k", label: "18K Gold Guide (750)", href: "/guide/gold/18k" },
      { id: "nav-guide-gold-22k", label: "22K Gold Guide (916)", href: "/guide/gold/22k" },
      { id: "nav-guide-gold-24k", label: "24K Pure Gold (999)", href: "/guide/gold/24k" },
      { id: "nav-guide-gold-14k", label: "14K Gold Guide (585)", href: "/guide/gold/14k" },
      { id: "nav-guide-gold-9k", label: "9K Gold Guide (375)", href: "/guide/gold/9k" },
      { id: "nav-guide-silver", label: "Silver Standards Guide", href: "/guide/silver" },
      { id: "nav-guide-silver-925", label: "925 Sterling Silver", href: "/guide/silver/925" },
      { id: "nav-guide-silver-999", label: "999 Fine Silver", href: "/guide/silver/999" },
      { id: "nav-guide-silver-argentium", label: "Argentium Silver", href: "/guide/silver/argentium" },
      { id: "nav-guide-silver-oxidized", label: "Oxidized Silver", href: "/guide/silver/oxidized" },
      { id: "nav-guide-silver-britannia", label: "958 Britannia Silver", href: "/guide/silver/britannia" },
      { id: "nav-guide-diamond", label: "Diamond Types Guide", href: "/guide/diamond" },
      { id: "nav-guide-diamond-real", label: "Natural Real Diamond", href: "/guide/diamond/real" },
      { id: "nav-guide-diamond-cvd", label: "Lab-Grown CVD Diamond", href: "/guide/diamond/cvd" },
      { id: "nav-guide-diamond-hpht", label: "Lab-Grown HPHT Diamond", href: "/guide/diamond/hpht" },
      { id: "nav-guide-diamond-moissanite", label: "Moissanite Gemstone", href: "/guide/diamond/moissanite" },
      { id: "nav-guide-shapes", label: "Diamond Shapes (12 Cuts)", href: "/guide/shape" },
    ],
    megaMenu: {
      defaultTabId: "guide-tab-gold",
      tabs: [
        {
          id: "guide-tab-gold",
          label: "Gold Karats",
          items: [
            { id: "m-gold-18k", name: "18K Gold Guide (750)", href: "/guide/gold/18k", badge: "Luxury Standard" },
            { id: "m-gold-22k", name: "22K Gold Guide (916)", href: "/guide/gold/22k", badge: "Bridal Regal" },
            { id: "m-gold-24k", name: "24K Pure Gold (999)", href: "/guide/gold/24k", badge: "Pure Bullion" },
            { id: "m-gold-14k", name: "14K Gold Guide (585)", href: "/guide/gold/14k", badge: "Everyday Durable" },
            { id: "m-gold-9k", name: "9K Gold Guide (375)", href: "/guide/gold/9k", badge: "Resilient Solid" },
            { id: "m-gold-all", name: "All Gold Purity Guides", href: "/guide/gold", badge: "Complete Hub" },
          ],
          bottomBanner: {
            heading: "Certified BIS & European Assayed Gold.",
            subheading: "Learn purity percentages, color alloys, and hallmarking standards.",
            thumbnails: [
              "/images/guide/gold/gold-18k.jpg",
              "/images/guide/gold/gold-22k.jpg",
              "/images/guide/gold/gold-14k.jpg",
            ],
            buttonText: "Explore Gold Hub",
            buttonHref: "/guide/gold",
          },
          featuredCard: {
            image: "/images/guide/gold/gold-18k.jpg",
            title: "18K Gold — The premier global luxury standard for fine solitaires",
            href: "/guide/gold/18k",
            ctaLabel: "View 18K Masterclass",
          },
        },
        {
          id: "guide-tab-silver",
          label: "Silver Standards",
          items: [
            { id: "m-sil-925", name: "925 Sterling Silver", href: "/guide/silver/925", badge: "Global Benchmark" },
            { id: "m-sil-999", name: "999 Fine Silver", href: "/guide/silver/999", badge: "Pure White" },
            { id: "m-sil-arg", name: "Argentium Silver (935)", href: "/guide/silver/argentium", badge: "Anti-Tarnish" },
            { id: "m-sil-oxi", name: "Oxidized Antique Silver", href: "/guide/silver/oxidized", badge: "Artisan Patina" },
            { id: "m-sil-bri", name: "958 Britannia Silver", href: "/guide/silver/britannia", badge: "Historic Royal" },
            { id: "m-sil-all", name: "All Silver Standards", href: "/guide/silver", badge: "Complete Hub" },
          ],
          bottomBanner: {
            heading: "Luminous & Tarnish-Resistant Silver.",
            subheading: "Explore 925 sterling, Germanium-alloyed Argentium, and 999 fine silver.",
            thumbnails: [
              "/images/guide/silver/silver-925.jpg",
              "/images/guide/silver/silver-argentium.jpg",
              "/images/guide/silver/silver-999.jpg",
            ],
            buttonText: "Explore Silver Hub",
            buttonHref: "/guide/silver",
          },
          featuredCard: {
            image: "/images/guide/silver/silver-925.jpg",
            title: "925 Sterling Silver — Unmatched white brilliance with rhodium protection",
            href: "/guide/silver/925",
            ctaLabel: "View 925 Masterclass",
          },
        },
        {
          id: "guide-tab-diamond",
          label: "Diamond Types",
          items: [
            { id: "m-dia-real", name: "Natural Real Diamond", href: "/guide/diamond/real", badge: "Billion-Yr Rarity" },
            { id: "m-dia-cvd", name: "Lab-Grown CVD (Type IIa)", href: "/guide/diamond/cvd", badge: "Carbon Plasma" },
            { id: "m-dia-hpht", name: "Lab-Grown HPHT Diamond", href: "/guide/diamond/hpht", badge: "Cubic Press" },
            { id: "m-dia-moi", name: "Moissanite Gemstone", href: "/guide/diamond/moissanite", badge: "2.4x Fire" },
            { id: "m-dia-all", name: "All Diamond Types", href: "/guide/diamond", badge: "Complete Hub" },
            { id: "m-dia-hub", name: "Guide & Learn Academy", href: "/guide", badge: "Education Hub" },
          ],
          bottomBanner: {
            heading: "Gemological Science & Diamond 4Cs.",
            subheading: "Understand atomic physics, thermal conductivity, and optical fire.",
            thumbnails: [
              "/images/guide/diamond/diamond-real.jpg",
              "/images/guide/diamond/diamond-cvd.jpg",
              "/images/guide/diamond/diamond-hpht.jpg",
            ],
            buttonText: "Explore Diamond Types",
            buttonHref: "/guide/diamond",
          },
          featuredCard: {
            image: "/images/guide/diamond/diamond-cvd.jpg",
            title: "CVD Lab-Grown Diamonds — 100% real diamonds with Type IIa purity",
            href: "/guide/diamond/cvd",
            ctaLabel: "View CVD Masterclass",
          },
        },
        {
          id: "guide-tab-shapes",
          label: "Diamond Shapes",
          items: [
            { id: "m-sh-round", name: "Round Brilliant", href: "/guide/shape/round", badge: "Classic Fiery" },
            { id: "m-sh-oval", name: "Oval Cut", href: "/guide/shape/oval", badge: "Elongated" },
            { id: "m-sh-emerald", name: "Emerald Cut", href: "/guide/shape/emerald", badge: "Step Cut" },
            { id: "m-sh-princess", name: "Princess Cut", href: "/guide/shape/princess", badge: "Modern Square" },
            { id: "m-sh-cushion", name: "Cushion Cut", href: "/guide/shape/cushion", badge: "Pillow Vintage" },
            { id: "m-sh-all", name: "All 12 Diamond Shapes", href: "/guide/shape", badge: "Full Catalog" },
          ],
          bottomBanner: {
            heading: "12 Iconic Diamond Silhouettes.",
            subheading: "Explore cut proportions, table & depth ratios, and optimal settings.",
            thumbnails: [
              "/images/shapes/.png",
              "/images/shapes/.png",
              "/images/shapes/.png",
            ],
            buttonText: "View All 12 Shapes",
            buttonHref: "/guide/shape",
          },
          featuredCard: {
            image: "/images/shapes/.png",
            title: "Round Brilliant Cut — The timeless classic engineered for maximum light return",
            href: "/guide/shape/round",
            ctaLabel: "View Round Details",
          },
        },
      ],
    },
  },
  { id: "nav-about", label: "About Us", href: "/about" },
];

// ============================================================================
// 5. SITE CONTENT DATA
// ============================================================================
export interface SiteContentData {
  announcementBar: string[];
  heroSlides: HeroSlide[];
  featureStrip: FeatureItem[];
  forHimForHer: {
    id: string;
    title: string;
    tagline: string;
    image: string;
    href: string;
    cta: string;
  }[];
  newCollection: {
    title: string;
    subtitle: string;
    image: string;
    cta: { label: string; href: string };
  };
  whyChooseUs: FeatureItem[];
  serviceStrip: FeatureItem[];
  brandStory: {
    title: string;
    body: string;
    image: string;
    cta: { label: string; href: string };
  };
  instagram: {
    handle: string;
    images: string[];
  };
  newsletter: {
    title: string;
    subtitle: string;
    placeholder: string;
    cta: string;
  };
  footer: {
    brandBlurb: string;
    columns: FooterColumn[];
    socials: SocialLink[];
    paymentBadges: string[];
    copyright: string;
  };
}

export const siteContentData: SiteContentData = {
  announcementBar: [
    "FREE SHIPPING ON ORDERS ABOVE ₹10,000",
    "EASY 30 DAY RETURNS",
    "CERTIFIED JEWELLERY",
  ],
  heroSlides: [
    {
      id: "hero-1",
      tagline: "THE CELEBRATION COLLECTION",
      heading: "Radiate Glamour.",
      headingAccent: "Celebrate Life.",
      subtext:
        "Contemporary statement jewellery handcrafted with certified gold and sparkling diamonds.",
      image: "/images/banner/hero-banner-1.png",
      position: "right",
      theme: "dark",
      ctas: [
        { label: "Explore Collection", href: "/collections", variant: "primary" },
        { label: "Shop Women", href: "/collections", variant: "secondary" },
      ],
    },
    {
      id: "hero-2",
      tagline: "EMERALD & DIAMOND SUITE",
      heading: "Timeless Grace.",
      headingAccent: "Pure Brilliance.",
      subtext:
        "Exquisite teardrop solitaire diamonds set in warm hallmarked gold, designed to mesmerize.",
      image: "/images/banner/hero-banner-2.png",
      position: "right",
      theme: "dark",
      ctas: [
        { label: "Shop Pendants", href: "/category/pendants", variant: "primary" },
        { label: "View Earrings", href: "/category/earrings", variant: "secondary" },
      ],
    },
    {
      id: "hero-3",
      tagline: "NATURE-INSPIRED CRAFTSMANSHIP",
      heading: "Botanical Allure.",
      headingAccent: "Delicate Forms.",
      subtext:
        "Artistic floral motifs encrusted with ethically sourced natural diamonds and fine 18k gold.",
      image: "/images/banner/hero-banner-3.png",
      position: "right",
      theme: "dark",
      ctas: [
        { label: "Shop Gold", href: "/collections/gold-collection", variant: "primary" },
        { label: "All Jewellery", href: "/collections", variant: "secondary" },
      ],
    },
  ],
  featureStrip: [
    {
      id: "feature-shipping",
      icon: "shipping",
      title: "Free Shipping",
      subtitle: "On orders above ₹10,000",
    },
    {
      id: "feature-returns",
      icon: "returns",
      title: "30 Day Returns",
      subtitle: "Hassle free returns",
    },
    {
      id: "feature-certified",
      icon: "certified",
      title: "Certified Jewellery",
      subtitle: "Hallmarked & certified",
    },
    {
      id: "feature-secure",
      icon: "secure",
      title: "Secure Payment",
      subtitle: "100% safe & secure",
    },
    {
      id: "feature-care",
      icon: "care",
      title: "Lifetime Care",
      subtitle: "Cleaning & repairs",
    },
  ],
  forHimForHer: [
    {
      id: "for-him",
      title: "For Him",
      tagline: "Bold. Classic. Timeless.",
      image: "/images/for-him-for-her/for-him-1.jpg",
      href: "/category/mens-collection",
      cta: "Shop Now",
    },
    {
      id: "for-her",
      title: "For Her",
      tagline: "Elegant. Graceful. You.",
      image: "/images/for-him-for-her/for-her-1.jpg",
      href: "/category/womens-collection",
      cta: "Shop Now",
    },
  ],
  newCollection: {
    title: "Modern Designs. Timeless Craftsmanship.",
    subtitle: "New Collection",
    image: "/images/banner/hero-banner-4.png",
    cta: { label: "Discover New Arrivals", href: "/collections" },
  },
  whyChooseUs: [
    {
      id: "why-1",
      icon: "certified",
      title: "Certified Purity",
      subtitle: "Hallmarked gold and certified diamonds.",
      trustBadge: "BIS Hallmarked",
    },
    {
      id: "why-2",
      icon: "care",
      title: "Lifetime Assurance",
      subtitle: "Complimentary cleaning, polishing & inspection.",
      trustBadge: "Expert Care Included",
    },
    {
      id: "why-3",
      icon: "shipping",
      title: "Insured Delivery",
      subtitle: "Secure, insured delivery to your doorstep.",
      trustBadge: "Fully Insured",
    },
    {
      id: "why-4",
      icon: "returns",
      title: "Easy 30-Day Exchange",
      subtitle: "Simple returns and hassle-free exchanges.",
      trustBadge: "Simple & Secure",
    },
  ],
  serviceStrip: [
    {
      id: "service-engraving",
      icon: "engraving",
      title: "Free Engraving",
      subtitle: "Personalize your jewellery",
    },
    {
      id: "service-gift",
      icon: "gift",
      title: "Gift Wrapping",
      subtitle: "Complimentary luxury box",
    },
    {
      id: "service-worldwide",
      icon: "worldwide",
      title: "Shipping Worldwide",
      subtitle: "Insured express delivery",
    },
    {
      id: "service-exchange",
      icon: "exchange",
      title: "Easy 30-Day Exchange",
      subtitle: "Simple & hassle-free",
    },
  ],
  brandStory: {
    title: "A Legacy of Perfection",
    body: "Since our inception, Luxe Jewels has stood for uncompromising artistry, ethical sourcing, and timeless design. Each creation represents hundreds of hours of delicate hand-setting by master goldsmiths.",
    image: "/images/brand/brand-story.jpg",
    cta: { label: "Our Story", href: "/about" },
  },
  instagram: {
    handle: "@luxe.jewels",
    images: [
      "/images/instagram/insta-1.png",
      "/images/instagram/insta-2.png",
      "/images/instagram/insta-3.png",
      "/images/instagram/insta-4.png",
      "/images/instagram/insta-5.png",
      "/images/instagram/insta-6.png",
      "/images/instagram/insta-7.png",
    ],
  },
  newsletter: {
    title: "Stay Updated With Luxe Jewels",
    subtitle: "Subscribe to get special offers, new arrivals and more.",
    placeholder: "Enter your email address",
    cta: "Subscribe",
  },
  footer: {
    brandBlurb:
      "Timeless jewellery for every moment that matters. Crafted with love, delivered with trust.",
    columns: [
      {
        id: "footer-shop",
        title: "Shop",
        links: [
          { label: "Men", href: "/category/mens-collection" },
          { label: "Women", href: "/collections" },
          { label: "Shop All", href: "/shop" },
          { label: "Bestsellers", href: "/collections" },
          { label: "Gift Cards", href: "/collections/gift-collection" },
        ],
      },
      {
        id: "footer-collections",
        title: "Collections",
        links: [
          { label: "Rings", href: "/category/rings" },
          { label: "Necklaces", href: "/category/necklaces" },
          { label: "Earrings", href: "/category/earrings" },
          { label: "Bracelets", href: "/category/bracelets" },
          { label: "Pendants", href: "/category/pendants" },
        ],
      },
      {
        id: "footer-customer-service",
        title: "Customer Service",
        links: [
          { label: "Contact Us", href: "/contact" },
          { label: "Shipping & Delivery", href: "/shipping" },
          { label: "Returns & Exchanges", href: "/returns" },
          { label: "Track Your Order", href: "/track-order" },
          { label: "FAQs", href: "/faqs" },
        ],
      },
      {
        id: "footer-information",
        title: "Information",
        links: [
          { label: "About Us", href: "/about" },
          { label: "Guide & Learn Hub", href: "/guide" },
          { label: "Gold Karats Guide", href: "/guide/gold" },
          { label: "Silver Standards Guide", href: "/guide/silver" },
          { label: "Diamond Types Guide", href: "/guide/diamond" },
          { label: "Diamond Shapes Guide", href: "/guide/shape" },
          { label: "Care Guide", href: "/care-guide" },
          { label: "Privacy Notice", href: "/privacy-policy" },
          { label: "Terms & Conditions", href: "/terms" },
        ],
      },
    ],
    socials: [
      { id: "social-instagram", label: "Instagram", href: "https://instagram.com", icon: "instagram" },
      { id: "social-pinterest", label: "Pinterest", href: "https://pinterest.com", icon: "pinterest" },
      { id: "social-facebook", label: "Facebook", href: "https://facebook.com", icon: "facebook" },
      { id: "social-youtube", label: "YouTube", href: "https://youtube.com", icon: "youtube" },
    ],
    paymentBadges: ["Visa", "Mastercard", "Amex", "PayPal", "UPI"],
    copyright: "© 2025 Luxe Jewels. All Rights Reserved.",
  },
};

// ============================================================================
// 6. TESTIMONIALS DATA
// ============================================================================
export const testimonialsData: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Babitha Shrikanth",
    rating: 5,
    date: "JUN 2026",
    location: "Lotus Paradise Elite, Mangaluru",
    purchase: "Diamond Choker Suite",
    quote:
      "Friendly, helpful, and attentive staff. They explained the diamond cut and clarity grading in detail and provided outstanding bespoke service.",
  },
  {
    id: "testimonial-2",
    name: "Gayatri Chavan",
    rating: 5,
    date: "JUN 2026",
    location: "Sky City Mall, Mumbai",
    purchase: "Solitaire Diamond Ring",
    quote:
      "Great experience with the Luxe Jewels team. Calm and pleasing hospitality with an amazing shopping experience. Thank you for the patience throughout my bridal selection!",
  },
  {
    id: "testimonial-3",
    name: "Sindhuja K",
    rating: 5,
    date: "JUN 2026",
    location: "HSR Layout, Bangalore",
    purchase: "18K Gold Emerald Pendant",
    quote:
      "I had an amazing shopping experience at Luxe Jewels. The collection is elegant, unique, and beautifully crafted. Their knowledge, attention to detail, and warm hospitality made it truly enjoyable.",
  },
  {
    id: "testimonial-4",
    name: "Harsha Kadu",
    rating: 5,
    date: "JUN 2026",
    location: "Luxe Boutique, Pune",
    purchase: "Tennis Diamond Bracelet",
    quote:
      "I'm extremely happy with my purchase and would highly recommend Luxe Jewels to anyone looking for certified fine jewellery and outstanding customer service. Thank you for making it so memorable!",
  },
  {
    id: "testimonial-5",
    name: "Priya Sharma",
    rating: 5,
    date: "MAY 2026",
    location: "Jubilee Hills, Hyderabad",
    purchase: "Gold Signet Cuff",
    quote:
      "Absolutely loved the finishing and certification transparency. The tamper-evident luxury unboxing experience was breathtaking and delivery was seamless!",
  },
  {
    id: "testimonial-6",
    name: "Rahul Verma",
    rating: 5,
    date: "MAY 2026",
    location: "Connaught Place, New Delhi",
    purchase: "Men's Cuban Chain",
    quote:
      "The designs are modern yet timeless. My go-to store for all milestones and gifting occasions. Truly top-tier hallmark craft.",
  },
];

// ============================================================================
// 7. FAQS DATA
// ============================================================================
export interface FAQItem {
  id: string;
  category: "orders" | "account" | "payment" | "returns" | "shipping" | "jewellery";
  question: string;
  answer: string;
}

export const faqCategoriesData = [
  { id: "orders", label: "Order Delivery and Shopping", count: 3 },
  { id: "account", label: "My Account", count: 2 },
  { id: "payment", label: "Payment", count: 3 },
  { id: "returns", label: "Returns and Exchanges", count: 3 },
  { id: "shipping", label: "International Shipping", count: 2 },
  { id: "jewellery", label: "Jewellery & Gold Purity", count: 3 },
];

export const faqsData: FAQItem[] = [
  {
    id: "faq-1",
    category: "orders",
    question: "How do I place an order on Luxe Jewels?",
    answer:
      "Browse our collections, select your gold metal (18K/22K), diamond cut, and ring or bangle size, then click 'Add to Cart'. Follow the secure checkout process to enter delivery address and complete payment.",
  },
  {
    id: "faq-2",
    category: "orders",
    question: "How can I track my order delivery?",
    answer:
      "Once your order passes hallmark audit and is dispatched via Sequel Express Air, you will receive real-time SMS & WhatsApp updates. You can also view live GPS tracking anytime at /track-order.",
  },
  {
    id: "faq-3",
    category: "orders",
    question: "Can I modify or cancel my order after placing it?",
    answer:
      "Yes, orders can be modified or cancelled within 12 hours of placement before gold fabrication begins. Contact our Concierge Team at 1800-266-0123 for instant assistance.",
  },
  {
    id: "faq-4",
    category: "account",
    question: "Do I need an account to place an order?",
    answer:
      "You can check out as a guest, but creating a Luxe Jewels account allows you to save delivery addresses, track live orders, store wishlists, and manage saved payment methods.",
  },
  {
    id: "faq-5",
    category: "account",
    question: "How do I reset my account password?",
    answer:
      "Navigate to the login screen and click 'Forgot Password'. Enter your registered email address to receive an instant verification link and reset your password securely.",
  },
  {
    id: "faq-6",
    category: "payment",
    question: "What payment methods do you accept?",
    answer:
      "We accept all major Credit/Debit Cards (Visa, MasterCard, Amex), UPI (Google Pay, PhonePe, Paytm), Net Banking, and flexible no-cost EMI options on eligible cards.",
  },
  {
    id: "faq-7",
    category: "payment",
    question: "Are online transactions secure on your store?",
    answer:
      "Yes, 100%. All transactions are processed through 256-bit bank-grade SSL encryption and 3D Secure authentication via certified RBI-compliant payment gateways.",
  },
  {
    id: "faq-8",
    category: "payment",
    question: "Do you offer Cash on Delivery (COD)?",
    answer:
      "Cash on Delivery is available for orders up to ₹25,000 across select pincodes within India. For higher-value orders, 100% insured digital prepaid payment is required.",
  },
  {
    id: "faq-9",
    category: "returns",
    question: "What is your return and exchange policy?",
    answer:
      "We offer a 30-day hassle-free return and exchange policy. Jewellery must be in its original unused condition, with all security tags intact and the original certificate enclosed.",
  },
  {
    id: "faq-10",
    category: "returns",
    question: "How long does a refund take to process?",
    answer:
      "Once the returned jewellery reaches our facility and passes the hallmark quality check (within 48 hours), refunds are processed to your original payment method in 5-7 business days.",
  },
  {
    id: "faq-11",
    category: "returns",
    question: "Are customized or engraved orders refundable?",
    answer:
      "Bespoke creations and personalized engraved items are eligible for complimentary size adjustments and lifetime warranty, but are non-refundable once personalized.",
  },
  {
    id: "faq-12",
    category: "shipping",
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship to over 45 countries worldwide via insured DHL Express. Customs duties and local import taxes are calculated transparently at checkout.",
  },
  {
    id: "faq-13",
    category: "shipping",
    question: "Is shipping insured against loss or transit damage?",
    answer:
      "Yes, every single shipment is 100% insured until the package is handed over to you with OTP verification upon delivery.",
  },
  {
    id: "faq-14",
    category: "jewellery",
    question: "Is all gold certified and hallmarked?",
    answer:
      "Every piece of gold jewellery carries the official BIS Hallmark stamp verifying pure 18K or 22K authenticity. Diamond jewelry is accompanied by authentic SGL/IGI grading certificates.",
  },
  {
    id: "faq-15",
    category: "jewellery",
    question: "What does the Lifetime Care plan cover?",
    answer:
      "Our Lifetime Care assurance includes complimentary ultrasonic cleaning, prong tightening, steam polishing, and rhodium replating once a year at any Luxe Jewels boutique.",
  },
  {
    id: "faq-16",
    category: "jewellery",
    question: "How can I determine my accurate ring size?",
    answer:
      "You can refer to our interactive Size Guide on any product page, download our printable ring sizer, or request a complimentary physical ring measurement kit delivered to your home.",
  },
];

// ============================================================================
// 8. FILTER & SORTING DATA
// ============================================================================
export const filterCategoriesData = [
  { label: "Rings", value: "rings" },
  { label: "Necklaces", value: "necklaces" },
  { label: "Earrings", value: "earrings" },
  { label: "Bracelets", value: "bracelets" },
  { label: "Pendants", value: "pendants" },
];

export const filterCollectionsData = [
  { label: "Diamond", value: "diamond-collection" },
  { label: "Gold", value: "gold-collection" },
  { label: "Men's", value: "mens-collection" },
  { label: "Couple", value: "couple-collection" },
  { label: "Gifts", value: "gift-collection" },
];

export const filterPriceRangesData = [
  { label: "Under ₹25,000", value: "under-25k", min: 0, max: 25000 },
  { label: "₹25,000 – ₹50,000", value: "25k-50k", min: 25000, max: 50000 },
  { label: "₹50,000 – ₹1,00,000", value: "50k-1l", min: 50000, max: 100000 },
  { label: "Above ₹1,00,000", value: "above-1l", min: 100000, max: Infinity },
];

export const sortOptionsData = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Name A–Z", value: "name-asc" },
];

// ============================================================================
// 9. SEARCH DATA
// ============================================================================
export const searchPlaceholdersData = [
  "gold necklace",
  "diamond jewellery",
  "gold rings",
  "bridal necklaces",
  "solitaire earrings",
  "gold bangles",
  "men's chains",
  "gift collections",
];

export const popularSearchesData = [
  { label: "Gemstone", query: "gemstone" },
  { label: "Auspicious Jewellery", query: "auspicious" },
  { label: "Special Coins", query: "gold coins" },
  { label: "Pendants Under 30k", query: "pendants" },
];

export const searchTrendingProductsData = [
  {
    title: "Regal Diamond Encrusted Square..",
    image: "/images/product/Regal_Diamond.png",
    href: "/products/diamond-studs",
  },
  {
    title: "Modish Links Diamond Ring",
    image: "/images/product/Diamond_Ring.png",
    href: "/products/diamond-ring",
  },
  {
    title: "Teardrop Shaped Yellow Gold And.",
    image: "/images/product/Diamond_Pendant.png",
    href: "/products/gold-chain",
  },
];

export const contactFaqsData = [
  {
    id: "faq-1",
    question: "How do I check my order status?",
    answer:
      "You can track your order in real time under My Account > Order History or by clicking 'Track Order' in our navigation drawer. You will also receive SMS & Email notifications with live tracking links once your package is dispatched.",
  },
  {
    id: "faq-2",
    question: "What is the purity of Luxe Jewels products?",
    answer:
      "Every piece of fine jewellery at Luxe Jewels is BIS Hallmarked (22K Gold & 18K Solid Gold) and certified by international laboratories like IGI and SGL for natural, conflict-free diamonds.",
  },
  {
    id: "faq-3",
    question: "What is your return & exchange policy?",
    answer:
      "We offer a 15-day no-questions-asked 100% money-back guarantee along with a Lifetime Exchange Policy. If you need a size adjustment or design exchange, our luxury white-glove concierge service will pick up the piece from your home free of charge.",
  },
  {
    id: "faq-4",
    question: "How can I customize a ring or necklace size?",
    answer:
      "You can select your preferred ring size or chain length on the product page. For bespoke custom dimensions, simply contact our jewellery experts via Live Chat or call our toll-free number 1800-266-0123.",
  },
  {
    id: "faq-5",
    question: "Are international shipments insured?",
    answer:
      "Yes, all domestic and international shipments are 100% fully transit-insured until delivered safely to your hands. A signature is required upon delivery.",
  },
];

export interface Diamond4CGrade {
  label: string;
  name: string;
  desc: string;
  tint?: string;
  opacity?: number;
}

export interface DiamondCaratSize {
  carat: string;
  mmSize: string;
  scale: number;
}

export interface DiamondShapeSpecs {
  shapeFamily: string;
  visualFeel: string;
  commonSetting: string;
  facetCount: string;
  idealRatio: string;
  idealTable: string;
  idealDepth: string;
  polishSymmetry: string;
  girdleThickness: string;
  culetSize: string;
}

export interface DiamondProportion {
  label: string;
  value: string;
}

export interface DiamondShapeDetail {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  overview: string;
  historyAndAnatomy: string;
  image: string;
  detailImage?: string;
  proportions: DiamondProportion[];
  specs: DiamondShapeSpecs;
  fourCs: {
    cut: {
      overview: string;
      idealNote: string;
      shallowNote: string;
      deepNote: string;
    };
    color: {
      overview: string;
      recommendation: string;
      grades: Diamond4CGrade[];
    };
    clarity: {
      overview: string;
      recommendation: string;
      grades: Diamond4CGrade[];
    };
    carat: {
      overview: string;
      sizes: DiamondCaratSize[];
    };
  };
  bestFor: string;
  bestForDetails?: {
    summary: string;
    highlights: string[];
    recommendedJewellery: string[];
  };
  features: string[];
  pros: string[];
  considerations: string[];
  relatedProductIds: string[];
}

const rawDiamondShapesData: any[] = [
  {
    slug: "round",
    name: "Round Brilliant Cut Diamond",
    shortName: "Round",
    tagline: "The timeless classic engineered for exceptional brilliance.",
    overview:
      "Round diamonds are the most recognized and celebrated diamond shape globally, engineered with 57 or 58 precisely calculated facets to maximize light return, fire, and scintillation. Their symmetrical outline makes them the most versatile choice for luxury engagement rings, fine solitaire pendants, and heirloom jewellery.",
    historyAndAnatomy:
      "Modern round brilliant diamonds originate from Marcel Tolkowsky's 1919 mathematical model calculating the optimal angles for total internal reflection. Composed of 33 crown facets, 24 pavilion facets, and an optional culet, every facet functions as a miniature mirror bouncing light straight through the diamond's crown.",
    image: "/images/shapes/round.png",
    specs: {
      shapeFamily: "Round Brilliant",
      visualFeel: "Classic, radiant, and intensely fiery",
      commonSetting: "Solitaire, 4-Prong, 6-Prong, Pavé, Halo, Studs",
      facetCount: "57 or 58 facets",
      idealRatio: "1.00 – 1.02 (Perfect Symmetry)",
      idealTable: "54% – 57%",
      idealDepth: "60% – 62.5%",
      polishSymmetry: "Excellent / Ideal",
      girdleThickness: "Thin to Slightly Thick (Facetted)",
      culetSize: "None to Very Small",
    },
    fourCs: {
      cut: {
        overview:
          "Cut is paramount for round diamonds. Precise cut planning balances depth, crown angles, and pavilion depth so light entering the table reflects internally and exits as dazzling rainbow fire and white brilliance.",
        idealNote:
          "Light strikes pavilion facets at angles greater than the critical angle, bouncing internally and returning through the table for optimal sparkle.",
        shallowNote:
          "Light strikes pavilion facets at too steep an angle, passing straight through the pavilion floor. The stone appears watery and glassy.",
        deepNote:
          "Light strikes pavilion facets at an acute angle and escapes out the opposite bottom side, creating a dull 'nail-head' shadow in the center.",
      },
      color: {
        overview:
          "Due to intense scintillation, round diamonds mask body color better than any other shape. Face-up view appears bright white even in near-colorless grades.",
        recommendation:
          "G–H grades offer the ideal value sweet spot, appearing completely ice-white in yellow or white gold settings.",
        grades: [
          { label: "D – F", name: "Colorless", desc: "Pure icy white with zero detectable tint. Rarest and most prestigious tier.", tint: "#FFFFFF" },
          { label: "G – H", name: "Near Colorless", desc: "Face-up ice white to the naked eye. Premium luxury standard at exceptional value.", tint: "#FAF7EE" },
          { label: "I – J", name: "Warm White", desc: "Very slight warmth detectable against white backgrounds. Warm golden tone in yellow gold.", tint: "#F5EED8" },
          { label: "K – M", name: "Faint Yellow", desc: "Subtle champagne warmth, paired exquisitely with antique yellow and rose gold.", tint: "#EEDBB5" },
        ],
      },
      clarity: {
        overview:
          "The brilliant facet arrangement of round cuts disperses light so effectively that tiny natural inclusions are easily concealed under the diamond's fire.",
        recommendation:
          "VS2 or clean SI1 diamonds represent the smart collector choice—100% eye-clean without paying for microscopic purity.",
        grades: [
          { label: "FL / IF", name: "Flawless", desc: "No internal inclusions visible under 10x magnification. Museum rarity.", opacity: 0.05 },
          { label: "VVS1 / VVS2", name: "Very Very Slightly Included", desc: "Minute inclusions extremely difficult for a trained gemologist to locate.", opacity: 0.15 },
          { label: "VS1 / VS2", name: "Very Slightly Included", desc: "Minor inclusions invisible to the unaided eye. Eye-clean excellence.", opacity: 0.28 },
          { label: "SI1 / SI2", name: "Slightly Included", desc: "Noticeable under 10x magnification; generally eye-clean when viewed face-up.", opacity: 0.42 },
          { label: "I1 – I3", name: "Included", desc: "Inclusions visible to naked eye that may affect optical brilliance and transparency.", opacity: 0.65 },
        ],
      },
      carat: {
        overview:
          "Round cut diamonds maintain consistent millimeter diameter proportions relative to carat weight, ensuring predictable visual spread across finger sizes.",
        sizes: [
          { carat: "0.50 Ct", mmSize: "5.10 mm", scale: 0.65 },
          { carat: "0.75 Ct", mmSize: "5.90 mm", scale: 0.75 },
          { carat: "1.00 Ct", mmSize: "6.50 mm", scale: 0.85 },
          { carat: "1.50 Ct", mmSize: "7.40 mm", scale: 0.95 },
          { carat: "2.00 Ct", mmSize: "8.15 mm", scale: 1.05 },
          { carat: "3.00 Ct", mmSize: "9.35 mm", scale: 1.2 },
        ],
      },
    },
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
        "Six-prong classic Tiffany-style engagement rings",
        "Four-prong solitaire diamond ear studs",
        "Continuously linked luxury tennis bracelets",
        "Graduated diamond eternity necklaces",
      ],
    },
    pros: [
      "Maximum fire, brilliance, and scintillation among all 10 shapes",
      "Conceals inclusions and color tints with high facet dispersion",
      "Timeless silhouette that will never go out of style",
      "Pairs effortlessly with any metal color (Platinum, 18K Yellow, Rose Gold)",
    ],
    considerations: [
      "Carries higher per-carat price premium due to high rough diamond cutting loss (~60%)",
      "Face-up surface area is slightly smaller than elongated shapes like Oval or Marquise",
    ],
    relatedProductIds: ["prod-1", "prod-2", "prod-3"],
  },
  {
    slug: "oval",
    name: "Oval Cut Diamond",
    shortName: "Oval",
    tagline: "Elongating grace and brilliant fire with contemporary allure.",
    overview:
      "The oval cut diamond combines the blinding sparkle of the round brilliant with an elongated, finger-slimming silhouette. Created by master cutter Lazare Kaplan in the late 1950s, its curved edges and 56 to 58 facets deliver high visual presence, often appearing noticeably larger than a round diamond of equivalent carat weight.",
    historyAndAnatomy:
      "Engineered as a modified round brilliant cut, the oval features 8 pavilion facets and 8 crown facets stretched symmetrically along its major axis. The central junction creates dynamic scintillation that draws the eye lengthwise.",
    image: "/images/shapes/oval.png",
    specs: {
      shapeFamily: "Modified Brilliant",
      visualFeel: "Elongating, regal, modern, and romantic",
      commonSetting: "Solitaire, Hidden Halo, 4-Prong East-West, Bezel, Pavé Band",
      facetCount: "56–58 facets",
      idealRatio: "1.33 – 1.45 (Optimal Length to Width)",
      idealTable: "53% – 63%",
      idealDepth: "60% – 66%",
      polishSymmetry: "Excellent / Very Good",
      girdleThickness: "Slightly Thin to Thick",
      culetSize: "None",
    },
    fourCs: {
      cut: {
        overview:
          "Cut quality controls the presence of the 'bowtie effect'—a natural optical shadow across the diamond's center. Expert cutting minimizes this shadow to achieve even light diffusion across the stone.",
        idealNote:
          "Balanced length-to-width ratio (1.35–1.40) ensures balanced brilliance from tip to tip without a prominent dark center bowtie.",
        shallowNote:
          "Shallow oval cuts spread wide but leak light from center, creating an exaggerated dark bowtie shadow and lifeless edges.",
        deepNote:
          "Deep oval cuts trap light in the pavilion and make the stone look heavy and stubby without the slenderizing spread.",
      },
      color: {
        overview:
          "Elongated ends can concentrate body color slightly more than round diamonds. Choosing an appropriate color grade ensures an ice-pure appearance.",
        recommendation:
          "For white gold or platinum, F–G is ideal; for yellow gold settings, H–I looks richly matched.",
        grades: [
          { label: "D – F", name: "Colorless", desc: "Pristine ice-pure brilliance across both elongated tips.", tint: "#FFFFFF" },
          { label: "G – H", name: "Near Colorless", desc: "Crisp white look with outstanding beauty in all designer ring settings.", tint: "#FAF7EE" },
          { label: "I – J", name: "Warm White", desc: "Warm undertones that complement yellow gold and rose gold bands gorgeously.", tint: "#F5EED8" },
          { label: "K – M", name: "Faint Yellow", desc: "Vintage golden warmth suited for bespoke heirloom designs.", tint: "#EEDBB5" },
        ],
      },
      clarity: {
        overview:
          "Brilliant faceting camouflages inclusions well, though center table inclusions should be avoided to preserve optical purity.",
        recommendation:
          "VS1–VS2 provides guaranteed eye-clean perfection without paying for microscopic purity.",
        grades: [
          { label: "FL / IF", name: "Flawless", desc: "Flawless internal purity under gemological examination.", opacity: 0.05 },
          { label: "VVS1 / VVS2", name: "Very Very Slightly Included", desc: "Microscopic inclusions undetectable without lab microscope.", opacity: 0.15 },
          { label: "VS1 / VS2", name: "Very Slightly Included", desc: "Completely eye-clean to the naked eye. Our expert recommendation.", opacity: 0.28 },
          { label: "SI1 / SI2", name: "Slightly Included", desc: "Inclusions visible under 10x; often eye-clean when placed off-center.", opacity: 0.42 },
          { label: "I1 – I3", name: "Included", desc: "Visible inclusions that impact sparkle and structural durability.", opacity: 0.65 },
        ],
      },
      carat: {
        overview:
          "Ovals offer approximately 10% larger face-up surface area than round diamonds of identical carat weight.",
        sizes: [
          { carat: "0.50 Ct", mmSize: "6.0 x 4.0 mm", scale: 0.65 },
          { carat: "0.75 Ct", mmSize: "7.0 x 4.7 mm", scale: 0.75 },
          { carat: "1.00 Ct", mmSize: "7.7 x 5.5 mm", scale: 0.85 },
          { carat: "1.50 Ct", mmSize: "8.7 x 6.2 mm", scale: 0.95 },
          { carat: "2.00 Ct", mmSize: "9.8 x 7.0 mm", scale: 1.05 },
          { carat: "3.00 Ct", mmSize: "11.2 x 8.0 mm", scale: 1.2 },
        ],
      },
    },
    bestFor: {
      summary:
        "Oval diamonds are the top choice for contemporary engagement rings, hidden halo solitaires, and East-West fashion rings.",
      highlights: [
        "Elongating silhouette flatters the hand and makes fingers appear slender and graceful.",
        "Up to 10% larger perceived size compared to a round cut of the exact same carat weight.",
        "Less expensive per carat than round brilliants while matching fire and brilliance.",
        "Soft curved borders prevent chipping compared to sharp-cornered cuts.",
      ],
      recommendedJewellery: [
        "Solitaire engagement rings with delicate pavé whispered bands",
        "Hidden halo 18K yellow gold engagement rings",
        "East-West horizontal bezel-set pendants",
        "Two-stone 'Toi et Moi' statement rings paired with emerald cuts",
      ],
    },
    pros: [
      "Looks significantly larger than round diamonds of equal carat",
      "Slenderizes the wearer's fingers with its optical stretch",
      "Contemporary celebrity favorite with timeless appeal",
      "No sharp pointed corners that catch on clothing",
    ],
    considerations: [
      "Every oval displays some bowtie shadow; select stones with minimal dark contrast",
      "Length-to-width ratio must be chosen deliberately to avoid stubby (1.20) or needle (1.60) looks",
    ],
    relatedProductIds: ["prod-2", "prod-4", "prod-6"],
  },
  {
    slug: "emerald",
    name: "Emerald Cut Diamond",
    shortName: "Emerald",
    tagline: "Understated vintage majesty with a mesmerizing hall of mirrors.",
    overview:
      "The emerald cut is an iconic step-cut diamond distinguished by rectangular facets parallel to the girdle, cropped corners, and an open, glassy table. Rather than the frenetic sparkle of brilliant cuts, the emerald cut produces dramatic flashes of white and colored light known as the 'hall of mirrors' effect, epitomizing Art Deco sophistication.",
    historyAndAnatomy:
      "Originally engineered in the 16th century for cutting fragile green emerald gemstones without chipping, diamond cutters adopted the shape during the 1920s Art Deco revolution. With 50 to 58 concentric step facets, its clean geometry emphasizes transparency and crystal purity.",
    image: "/images/shapes/emerald.png",
    specs: {
      shapeFamily: "Step Cut",
      visualFeel: "Art Deco, vintage, aristocratic, and architectonic",
      commonSetting: "Solitaire, Baguette Side Stones, Bezel, 3-Stone, Platinum Band",
      facetCount: "50–58 step facets",
      idealRatio: "1.30 – 1.50 (Classic Rectangular)",
      idealTable: "61% – 69%",
      idealDepth: "61% – 67%",
      polishSymmetry: "Excellent / Very Good",
      girdleThickness: "Very Thin to Thick",
      culetSize: "None to Very Small",
    },
    fourCs: {
      cut: {
        overview:
          "Cut precision dictates the symmetry of the parallel facets. A well-proportioned emerald cut displays crisp stair-step reflections without windowing or extinction.",
        idealNote:
          "Parallel step facets reflect light upward evenly, creating bold flashes of light and high contrast.",
        shallowNote:
          "Allows light to pass straight through the center ('windowing'), making the diamond look like clear glass without flashes.",
        deepNote:
          "Traps weight in the base, narrowing the top table and making the diamond look dark and smaller than its carat weight.",
      },
      color: {
        overview:
          "Because of its broad open table, emerald cuts hold body color more noticeably than brilliant cuts. We recommend staying higher on the color spectrum.",
        recommendation:
          "D through G grades are recommended for white gold and platinum settings; H is acceptable in warm yellow gold.",
        grades: [
          { label: "D – F", name: "Colorless", desc: "Crystal water-clear purity. The ideal choice for open step-cut tables.", tint: "#FFFFFF" },
          { label: "G – H", name: "Near Colorless", desc: "Very crisp white face-up appearance, pairing well with vintage filigree.", tint: "#FAF7EE" },
          { label: "I – J", name: "Warm White", desc: "Warm tone visible under daylight; best paired with 18K yellow gold bezels.", tint: "#F5EED8" },
          { label: "K – M", name: "Faint Yellow", desc: "Amber champagne hue with historic antique aesthetic.", tint: "#EEDBB5" },
        ],
      },
      clarity: {
        overview:
          "Clarity is critical for emerald cuts. Because step facets lack the masking glitter of brilliant cuts, internal inclusions cannot hide under facet fire.",
        recommendation:
          "VS1 or better is recommended to guarantee a completely eye-clean, crystal-transparent diamond.",
        grades: [
          { label: "FL / IF", name: "Flawless", desc: "Absolute pristine transparency. Museum-grade investment status.", opacity: 0.05 },
          { label: "VVS1 / VVS2", name: "Very Very Slightly Included", desc: "Microscopic perfection with flawless open table appearance.", opacity: 0.15 },
          { label: "VS1 / VS2", name: "Very Slightly Included", desc: "The recommended threshold for guaranteed eye-clean transparency.", opacity: 0.28 },
          { label: "SI1 / SI2", name: "Slightly Included", desc: "Inclusions are frequently visible to the unaided eye through the open table.", opacity: 0.42 },
          { label: "I1 – I3", name: "Included", desc: "Visible inclusions disrupt the clean hall of mirrors reflections.", opacity: 0.65 },
        ],
      },
      carat: {
        overview:
          "The large open table provides substantial perceived surface area for its weight, with elongated lines that elongate the hand.",
        sizes: [
          { carat: "0.50 Ct", mmSize: "5.5 x 3.8 mm", scale: 0.65 },
          { carat: "0.75 Ct", mmSize: "6.2 x 4.2 mm", scale: 0.75 },
          { carat: "1.00 Ct", mmSize: "6.8 x 4.9 mm", scale: 0.85 },
          { carat: "1.50 Ct", mmSize: "7.7 x 5.6 mm", scale: 0.95 },
          { carat: "2.00 Ct", mmSize: "8.5 x 6.2 mm", scale: 1.05 },
          { carat: "3.00 Ct", mmSize: "9.8 x 7.1 mm", scale: 1.2 },
        ],
      },
    },
    bestFor: {
      summary:
        "Emerald cut diamonds are favored for three-stone rings with tapered baguettes, platinum Art Deco solitaires, and luxury cocktail signets.",
      highlights: [
        "Unique 'hall of mirrors' light play creates sophisticated flashes instead of noisy glitter.",
        "Chipped corners are naturally protected by prongs, offering higher durability.",
        "Art Deco vintage pedigree favored by royal families and high-fashion icons.",
        "Elongated rectangular outline flatters long and wide fingers equally well.",
      ],
      recommendedJewellery: [
        "Three-stone engagement ring flanked by tapered diamond baguettes",
        "Vintage bezel-set platinum solitaire rings",
        "Clean North-South pendant in 18K solid yellow gold",
        "Architectural signet rings with brushed gold contrast",
      ],
    },
    pros: [
      "Exceptional vintage elegance that stands out from mainstream brilliant cuts",
      "Cut corners make it less prone to chipping than sharp princess cuts",
      "Long rectangular table flatters the wearer's hand and finger proportions",
      "Lower price-per-carat compared to round brilliant cuts",
    ],
    considerations: [
      "Requires higher clarity grade (VS1+) as inclusions are easily spotted through the open table",
      "Less fiery sparkle; favors pure optic flashes over chromatic scintillation",
    ],
    relatedProductIds: ["prod-1", "prod-3", "prod-5"],
  },
  {
    slug: "princess",
    name: "Princess Cut Diamond",
    shortName: "Princess",
    tagline: "Crisp modern geometry loaded with fierce brilliant sparkle.",
    overview:
      "The princess cut is the second most popular diamond shape in the world, combining the sharp 90-degree corners of a square with the multi-faceted fire of a brilliant cut. Created in the 1960s, its pyramid-like profile and 57 to 76 facets produce dazzling sparkle and contemporary chic.",
    historyAndAnatomy:
      "Developed as the 'Barion cut' and refined in Israel into the Princess cut, it preserves up to 80% of the rough diamond crystal by mirroring the octahedral shape of raw diamonds, making it an exceptionally efficient and cost-effective shape.",
    image: "/images/shapes/princess.png",
    specs: {
      shapeFamily: "Square Modified Brilliant",
      visualFeel: "Modern, geometric, bold, and energetic",
      commonSetting: "V-Prong, Channel Set, Halo, 4-Corner Prongs, Cathedral",
      facetCount: "57–76 facets",
      idealRatio: "1.00 – 1.05 (True Square)",
      idealTable: "65% – 75%",
      idealDepth: "68% – 74%",
      polishSymmetry: "Excellent / Very Good",
      girdleThickness: "Thin to Thick",
      culetSize: "None",
    },
    fourCs: {
      cut: {
        overview:
          "Princess cuts require sharp symmetry and balanced chevron facets on the pavilion (2, 3, or 4 chevrons) to control the frequency and density of sparkle.",
        idealNote:
          "Symmetrical chevron facets bounce light vigorously across the square table, concealing inclusions and maximizing brilliance.",
        shallowNote:
          "A shallow princess cut results in light leakage through the corners, reducing edge fire and creating an uneven reflection pattern.",
        deepNote:
          "Excessive depth conceals carat weight in the pavilion, creating a smaller face-up size than expected for the carat weight.",
      },
      color: {
        overview:
          "The sharp four corners of a princess cut can display subtle color concentration, so choosing a near-colorless grade ensures even white light throughout.",
        recommendation:
          "H color or higher is recommended for platinum; I is acceptable for 18K yellow gold settings.",
        grades: [
          { label: "D – F", name: "Colorless", desc: "Pristine white ice color throughout all four sharp corners.", tint: "#FFFFFF" },
          { label: "G – H", name: "Near Colorless", desc: "Face-up white with radiant brilliance at exceptional value.", tint: "#FAF7EE" },
          { label: "I – J", name: "Warm White", desc: "Subtle warmth visible mostly in side profile; pairs well with yellow gold.", tint: "#F5EED8" },
          { label: "K – M", name: "Faint Yellow", desc: "Warm champagne tint for vintage two-tone settings.", tint: "#EEDBB5" },
        ],
      },
      clarity: {
        overview:
          "With up to 76 facets, princess cuts are masters at hiding tiny internal inclusions under rapid scintillation.",
        recommendation:
          "VS2 or eye-clean SI1 gives optimal value. Ensure no prominent inclusions are located directly at the 4 fragile corner points.",
        grades: [
          { label: "FL / IF", name: "Flawless", desc: "Complete internal clarity under 10x magnification.", opacity: 0.05 },
          { label: "VVS1 / VVS2", name: "Very Very Slightly Included", desc: "Inclusions are practically impossible to locate under standard loupe.", opacity: 0.15 },
          { label: "VS1 / VS2", name: "Very Slightly Included", desc: "Guaranteed eye-clean face-up beauty. Prime luxury recommendation.", opacity: 0.28 },
          { label: "SI1 / SI2", name: "Slightly Included", desc: "Inclusions hidden beneath chevron facets; check that corners are clear.", opacity: 0.42 },
          { label: "I1 – I3", name: "Included", desc: "Inclusions near corners can compromise structural strength during setting.", opacity: 0.65 },
        ],
      },
      carat: {
        overview:
          "Yields roughly 20% to 30% lower cost per carat than round diamonds due to high rough crystal yield during cutting.",
        sizes: [
          { carat: "0.50 Ct", mmSize: "4.4 x 4.4 mm", scale: 0.65 },
          { carat: "0.75 Ct", mmSize: "5.0 x 5.0 mm", scale: 0.75 },
          { carat: "1.00 Ct", mmSize: "5.5 x 5.5 mm", scale: 0.85 },
          { carat: "1.50 Ct", mmSize: "6.4 x 6.4 mm", scale: 0.95 },
          { carat: "2.00 Ct", mmSize: "7.0 x 7.0 mm", scale: 1.05 },
          { carat: "3.00 Ct", mmSize: "8.1 x 8.1 mm", scale: 1.2 },
        ],
      },
    },
    bestFor: {
      summary:
        "Princess cuts excel in contemporary engagement rings, channel-set eternity wedding bands, and bold geometric solitaire earrings.",
      highlights: [
        "Unbeatable value per carat—retains up to 80% of rough crystal during manufacturing.",
        "Rivals the brilliance and scintillation of the round brilliant cut in a sleek square frame.",
        "Fits seamlessly side-by-side without gaps in channel and invisible settings.",
        "Strong modern lines provide bold architectural character.",
      ],
      recommendedJewellery: [
        "Four V-prong solitaire rings with cathedral shoulders",
        "Channel-set eternity bands with flush seamless edges",
        "Halo engagement rings with pavé diamond frame",
        "Geometric square solitaire diamond stud earrings",
      ],
    },
    pros: [
      "Substantially more affordable per carat than round diamonds",
      "Tremendous fire and brilliant sparkle across the entire table",
      "Square modern silhouette that looks sharp and clean",
      "Excellent capability to hide internal inclusions",
    ],
    considerations: [
      "Sharp 90-degree corners require protective V-prongs to prevent chipping during daily wear",
      "Inclusions located near corners must be avoided to maintain durability",
    ],
    relatedProductIds: ["prod-2", "prod-3", "prod-7"],
  },
  {
    slug: "cushion",
    name: "Cushion Cut Diamond",
    shortName: "Cushion",
    tagline: "Pillow-soft curves loaded with antique romance and fiery flashes.",
    overview:
      "The cushion cut diamond, also known as the pillow cut, blends a square or slightly rectangular perimeter with softly rounded corners and larger facets. Originating from the historic 'old mine cut' of the 19th century, it is famed for producing extraordinary chromatic fire (rainbow colored flashes) and vintage warmth.",
    historyAndAnatomy:
      "For nearly two centuries, the cushion cut was the de facto standard diamond shape worldwide. Modern cushion cuts are available in two primary styles: 'Standard Cushion' with chunkier vintage facets and bold flash, and 'Cushion Modified' with crushed-ice micro-sparkle.",
    image: "/images/shapes/cushion.png",
    specs: {
      shapeFamily: "Modified Brilliant / Vintage Step Hybrid",
      visualFeel: "Romantic, soft, vintage, and warm",
      commonSetting: "Halo, 4-Prong Vintage Filigree, Three-Stone, Double Band",
      facetCount: "58–64 facets",
      idealRatio: "1.00 – 1.05 (Square) | 1.15 – 1.25 (Elongated)",
      idealTable: "56% – 63%",
      idealDepth: "61% – 67%",
      polishSymmetry: "Excellent / Very Good",
      girdleThickness: "Slightly Thick to Extremely Thick",
      culetSize: "None to Medium",
    },
    fourCs: {
      cut: {
        overview:
          "Cut parameters balance the rounded corner curvature and facet depth to maximize optical dispersion without excessive pavilion weight.",
        idealNote:
          "Even facet distribution creates large, bold flashes of rainbow spectral fire across the rounded perimeter.",
        shallowNote:
          "Shallow cushions look glassy and wash out the romantic fire characteristic of the vintage cut.",
        deepNote:
          "Heavy pavilions make the diamond face-up smaller than its carat weight, hiding value under the setting.",
      },
      color: {
        overview:
          "Cushion cuts hold color more noticeably than rounds, which makes them the premier choice for fancy colored diamonds (yellow, pink, blue).",
        recommendation:
          "H or better is advised for white metal settings; I–J provides an authentic antique vintage romance in yellow and rose gold.",
        grades: [
          { label: "D – F", name: "Colorless", desc: "Rare ice-cool perfection with intense contrasting fire.", tint: "#FFFFFF" },
          { label: "G – H", name: "Near Colorless", desc: "Face-up crisp white appearance; most popular selection.", tint: "#FAF7EE" },
          { label: "I – J", name: "Warm White", desc: "Vintage warmth reminiscent of 19th century royal European heirloom jewellery.", tint: "#F5EED8" },
          { label: "K – M", name: "Faint Yellow", desc: "Warm golden hue, ideal for vintage antique reproductions.", tint: "#EEDBB5" },
        ],
      },
      clarity: {
        overview:
          "Cushion cuts with modern modified faceting hide inclusions exceptionally well, while standard cuts with larger facets require cleaner tables.",
        recommendation:
          "VS2 is our ideal sweet spot for complete eye-clean peace of mind.",
        grades: [
          { label: "FL / IF", name: "Flawless", desc: "Ultimate gemological perfection without internal blemishes.", opacity: 0.05 },
          { label: "VVS1 / VVS2", name: "Very Very Slightly Included", desc: "Flawless to normal vision; pristine heirloom purity.", opacity: 0.15 },
          { label: "VS1 / VS2", name: "Very Slightly Included", desc: "100% eye-clean performance; premier value balance.", opacity: 0.28 },
          { label: "SI1 / SI2", name: "Slightly Included", desc: "Inclusions camouflaged beneath crushed-ice facet reflections.", opacity: 0.42 },
          { label: "I1 – I3", name: "Included", desc: "Noticeable inclusions that can dim optical fire and light return.", opacity: 0.65 },
        ],
      },
      carat: {
        overview:
          "Cushion cuts carry deeper pavilions, meaning face-up diameter is slightly smaller than a round diamond of equal weight.",
        sizes: [
          { carat: "0.50 Ct", mmSize: "4.7 x 4.7 mm", scale: 0.65 },
          { carat: "0.75 Ct", mmSize: "5.3 x 5.3 mm", scale: 0.75 },
          { carat: "1.00 Ct", mmSize: "5.8 x 5.8 mm", scale: 0.85 },
          { carat: "1.50 Ct", mmSize: "6.7 x 6.7 mm", scale: 0.95 },
          { carat: "2.00 Ct", mmSize: "7.4 x 7.4 mm", scale: 1.05 },
          { carat: "3.00 Ct", mmSize: "8.5 x 8.5 mm", scale: 1.2 },
        ],
      },
    },
    bestFor: {
      summary:
        "Cushion cuts are unmatched in halo engagement rings, antique filigree solitaires, and yellow diamond statement cocktail rings.",
      highlights: [
        "Soft pillow curves provide high durability with no sharp vulnerable corners.",
        "Produces the highest amount of rainbow fire (chromatic dispersion) of any shape.",
        "Available in both square and coveted elongated proportions (1.20 ratio).",
        "World's most famous historic diamonds (Hope Diamond, Regent Diamond) are cushion cuts.",
      ],
      recommendedJewellery: [
        "Micro-pavé halo engagement rings with split shank bands",
        "Vintage Victorian and Edwardian filigree solitaire settings",
        "Fancy yellow diamond halo statement cocktail rings",
        "Bezel-set cushion diamond drop earrings",
      ],
    },
    pros: [
      "Magnificent rainbow fire and romantic vintage aesthetic",
      "Soft rounded corners won't snag on fabric or chip",
      "More affordable per carat than round brilliant cuts",
      "Both square and elongated silhouettes offer custom personal styling",
    ],
    considerations: [
      "Carries weight in pavilion, appearing slightly smaller face-up than equivalent round cuts",
      "Retains body color more readily; buy G+ if you desire icy-white appearance",
    ],
    relatedProductIds: ["prod-1", "prod-4", "prod-5"],
  },
  {
    slug: "pear",
    name: "Pear Cut Diamond",
    shortName: "Pear",
    tagline: "The teardrop of royalty blending curved brilliance with a dramatic tip.",
    overview:
      "The pear cut diamond—also known as the teardrop shape—unites the curved brilliance of a round cut with the pointed drama of a marquise. With 58 brilliant facets and an organic tapered silhouette, it creates an unforgettable statement worn with the point facing outward to elongate the wearer's hand.",
    historyAndAnatomy:
      "First designed in 1475 by Flemish polisher Lodewyk van Berquem, the pear cut revolutionized diamond cutting by introducing symmetry and absolute facet alignment. It features a rounded head, parallel belly, gently sloping shoulders, and a singular pointed tip.",
    image: "/images/shapes/pear.png",
    specs: {
      shapeFamily: "Modified Brilliant",
      visualFeel: "Dramatic, regal, elongating, and poetic",
      commonSetting: "V-Prong Solitaire, Halo, East-West, Bezel, Toi et Moi",
      facetCount: "58 facets",
      idealRatio: "1.45 – 1.65 (Optimal Teardrop Balance)",
      idealTable: "53% – 63%",
      idealDepth: "59% – 66%",
      polishSymmetry: "Excellent / Very Good",
      girdleThickness: "Very Thin to Very Thick",
      culetSize: "None",
    },
    fourCs: {
      cut: {
        overview:
          "Symmetry is critical: the curved round head must be perfectly uniform and the tip must align with the exact center axis without tilting.",
        idealNote:
          "Harmonious curves on both shoulders with a sharp, well-aligned tip that maximizes scintillation without an obtrusive bowtie.",
        shallowNote:
          "Flat, wide silhouette with dead spots in the belly and excessive light leakage.",
        deepNote:
          "Heavy base and stubby outline that reduces the signature slimming teardrop effect.",
      },
      color: {
        overview:
          "The tapered tip can concentrate body color slightly; select G or higher for icy-white metal settings.",
        recommendation:
          "G–H is the ideal balance for white gold, while I color radiates warmth in yellow gold.",
        grades: [
          { label: "D – F", name: "Colorless", desc: "Uniform ice white through both the rounded base and pointed tip.", tint: "#FFFFFF" },
          { label: "G – H", name: "Near Colorless", desc: "Face-up white beauty; ideal price-to-performance balance.", tint: "#FAF7EE" },
          { label: "I – J", name: "Warm White", desc: "Warm undertones that blend warmly with yellow and rose gold settings.", tint: "#F5EED8" },
          { label: "K – M", name: "Faint Yellow", desc: "Vintage golden tone, stunning in bezel-set cocktail pendants.", tint: "#EEDBB5" },
        ],
      },
      clarity: {
        overview:
          "The brilliant facet arrangement conceals inclusions easily, but inspect the pointed tip to ensure it is free from structural fractures.",
        recommendation:
          "VS2 or eye-clean SI1 delivers outstanding value without visible flaws.",
        grades: [
          { label: "FL / IF", name: "Flawless", desc: "Ultimate gemological perfection.", opacity: 0.05 },
          { label: "VVS1 / VVS2", name: "Very Very Slightly Included", desc: "Exceptional purity with microscopic inclusions only.", opacity: 0.15 },
          { label: "VS1 / VS2", name: "Very Slightly Included", desc: "100% eye-clean; flawless to the naked eye.", opacity: 0.28 },
          { label: "SI1 / SI2", name: "Slightly Included", desc: "Inclusions masked by scintillation; verify tip is inclusion-free.", opacity: 0.42 },
          { label: "I1 – I3", name: "Included", desc: "Inclusions in the point pose chipping risks during setting.", opacity: 0.65 },
        ],
      },
      carat: {
        overview:
          "Offers approximately 8% larger surface area than a round diamond of equal carat weight, delivering grand visual impact.",
        sizes: [
          { carat: "0.50 Ct", mmSize: "7.0 x 4.5 mm", scale: 0.65 },
          { carat: "0.75 Ct", mmSize: "7.8 x 5.0 mm", scale: 0.75 },
          { carat: "1.00 Ct", mmSize: "8.6 x 5.5 mm", scale: 0.85 },
          { carat: "1.50 Ct", mmSize: "9.8 x 6.3 mm", scale: 0.95 },
          { carat: "2.00 Ct", mmSize: "10.8 x 7.0 mm", scale: 1.05 },
          { carat: "3.00 Ct", mmSize: "12.4 x 8.0 mm", scale: 1.2 },
        ],
      },
    },
    bestFor: {
      summary:
        "Pear diamonds are iconic for drop solitaire pendants, two-stone 'Toi et Moi' rings, and asymmetric contemporary engagement rings.",
      highlights: [
        "Unique organic asymmetry creates an iconic, poetic luxury statement.",
        "Points toward the fingernail to slenderize and elongate the wearer's fingers.",
        "Generous face-up millimeter spread creates a noticeably larger appearance.",
        "Pairs strikingly with emerald and marquise shapes in two-stone rings.",
      ],
      recommendedJewellery: [
        "Classic V-prong solitaire engagement rings",
        "Two-stone 'Toi et Moi' celebrity engagement rings",
        "Solitaire teardrop pendants in 18K white gold",
        "Dangling chandelier luxury evening earrings",
      ],
    },
    pros: [
      "Looks distinctly larger than round diamonds of equal carat",
      "Stunning finger-slenderizing visual effect",
      "High brilliance and chromatic light dispersion",
      "More cost-effective per carat than round cuts",
    ],
    considerations: [
      "The delicate pointed tip requires a protective V-prong to avoid chipping",
      "Requires careful inspection to avoid prominent dark center bowtie",
    ],
    relatedProductIds: ["prod-1", "prod-5", "prod-7"],
  },
  {
    slug: "radiant",
    name: "Radiant Cut Diamond",
    shortName: "Radiant",
    tagline: "Cut-corner geometry bursting with intense crushed-ice brilliance.",
    overview:
      "The radiant cut diamond is the first rectangular cut to feature a full brilliant-cut facet pattern applied to both crown and pavilion. Created in 1977 by master diamond cutter Henry Grossbard, it combines the refined octagonal geometry of an emerald cut with the fiery, crushed-ice glitter of a round brilliant.",
    historyAndAnatomy:
      "Grossbard sought to create a shape with the sleek cropped corners of the emerald cut that would not sacrifice brilliant sparkle. Featuring 70 intricately mapped facets, radiant cuts deliver intense scintillation from edge to edge.",
    image: "/images/shapes/radiant.png",
    specs: {
      shapeFamily: "Cut-Cornered Modified Brilliant",
      visualFeel: "Vibrant, electric, durable, and luxurious",
      commonSetting: "Solitaire, Hidden Halo, 4-Corner Prongs, Pavé, Three-Stone",
      facetCount: "70 facets",
      idealRatio: "1.15 – 1.35 (Elongated) | 1.00 – 1.05 (Square)",
      idealTable: "61% – 69%",
      idealDepth: "61% – 67%",
      polishSymmetry: "Excellent / Very Good",
      girdleThickness: "Slightly Thick to Very Thick",
      culetSize: "None",
    },
    fourCs: {
      cut: {
        overview:
          "With 70 facets, radiant cuts create a kaleidoscopic 'crushed ice' effect that bounces light in every direction.",
        idealNote:
          "Crisp beveled corners with balanced length-to-width ratio ensuring continuous sparkle across the table.",
        shallowNote:
          "Shallow radiants lose their dense glitter, looking watery in the center.",
        deepNote:
          "Excessive depth hides weight in the pavilion and creates darker edge corners.",
      },
      color: {
        overview:
          "Radiant cuts enhance color concentration due to their deep pavilion and dense faceting, making them premier for fancy yellow diamonds.",
        recommendation:
          "H or higher for white metals; I–J looks warm and rich in yellow gold.",
        grades: [
          { label: "D – F", name: "Colorless", desc: "Blinding white light return with icy crispness.", tint: "#FFFFFF" },
          { label: "G – H", name: "Near Colorless", desc: "Face-up ice white; ideal balance of luxury and value.", tint: "#FAF7EE" },
          { label: "I – J", name: "Warm White", desc: "Warm undertones that complement 18K yellow gold bands.", tint: "#F5EED8" },
          { label: "K – M", name: "Faint Yellow", desc: "Warm golden glow, often chosen for fancy color aesthetics.", tint: "#EEDBB5" },
        ],
      },
      clarity: {
        overview:
          "The complex 70-facet crushed ice pattern makes radiant cuts the best among all shapes at concealing inclusions.",
        recommendation:
          "SI1 or VS2 delivers 100% eye-clean brilliance without paying extra for microscopic purity.",
        grades: [
          { label: "FL / IF", name: "Flawless", desc: "Zero inclusions under 10x magnification.", opacity: 0.05 },
          { label: "VVS1 / VVS2", name: "Very Very Slightly Included", desc: "Pristine investment grade.", opacity: 0.15 },
          { label: "VS1 / VS2", name: "Very Slightly Included", desc: "Flawless face-up presentation.", opacity: 0.28 },
          { label: "SI1 / SI2", name: "Slightly Included", desc: "Inclusions thoroughly masked by crushed ice sparkle.", opacity: 0.42 },
          { label: "I1 – I3", name: "Included", desc: "May impact light return if inclusions are clustered in center.", opacity: 0.65 },
        ],
      },
      carat: {
        overview:
          "Cropped corners and brilliant faceting give radiant cuts high visual durability and great perceived size.",
        sizes: [
          { carat: "0.50 Ct", mmSize: "5.0 x 4.0 mm", scale: 0.65 },
          { carat: "0.75 Ct", mmSize: "5.8 x 4.6 mm", scale: 0.75 },
          { carat: "1.00 Ct", mmSize: "6.5 x 5.2 mm", scale: 0.85 },
          { carat: "1.50 Ct", mmSize: "7.4 x 5.9 mm", scale: 0.95 },
          { carat: "2.00 Ct", mmSize: "8.2 x 6.5 mm", scale: 1.05 },
          { carat: "3.00 Ct", mmSize: "9.3 x 7.4 mm", scale: 1.2 },
        ],
      },
    },
    bestFor: {
      summary:
        "Radiant cuts are premier for modern high-sparkle engagement rings, hidden halo designs, and vibrant fancy yellow diamond rings.",
      highlights: [
        "Cropped corners provide excellent durability against chipping during daily active wear.",
        "Mesmerizing 'crushed ice' scintillation conceals inclusions better than any other shape.",
        "Combines the sleek geometry of an emerald cut with the fire of a round brilliant.",
        "Available in both square and elongated rectangular proportions.",
      ],
      recommendedJewellery: [
        "Hidden halo solitaire engagement rings in 18K yellow gold",
        "Three-stone rings with trillion or cadet side diamonds",
        "Fancy yellow diamond halo cocktail rings",
        "Bezel-set everyday luxury pendants",
      ],
    },
    pros: [
      "Exceptional durability thanks to cropped beveled corners",
      "Maximum crushed-ice sparkle that hides flaws effectively",
      "More affordable per carat than round brilliant cuts",
      "Elongated silhouette flatters finger proportions",
    ],
    considerations: [
      "Carries slightly more weight in the pavilion than emerald cuts",
      "Concentrates body color; choose H or higher for white gold settings",
    ],
    relatedProductIds: ["prod-2", "prod-6", "prod-8"],
  },
  {
    slug: "marquise",
    name: "Marquise Cut Diamond",
    shortName: "Marquise",
    tagline: "Royal elongated curves offering the largest surface area per carat.",
    overview:
      "The marquise cut diamond—also known as the navette cut (little boat)—is an elongated football-shaped diamond with two pointed ends and a curved belly. Commissioned in 1745 by King Louis XV of France to resemble the lips of his mistress, the Marquise de Pompadour, it boasts the largest crown surface area of any diamond shape, creating an unmistakably regal look.",
    historyAndAnatomy:
      "Featuring 58 brilliant-style facets, the marquise cut stretches the diamond along its longitudinal axis, creating an optical illusion that makes the diamond appear vastly larger than any other shape of equivalent carat weight.",
    image: "/images/shapes/marquise.png",
    specs: {
      shapeFamily: "Modified Brilliant",
      visualFeel: "Regal, dramatic, vintage, and maximum spread",
      commonSetting: "V-Prong Solitaire, East-West, Halo, Two-Tone, Bezel",
      facetCount: "58 facets",
      idealRatio: "1.75 – 2.15 (Classic Royal Ratio)",
      idealTable: "53% – 63%",
      idealDepth: "58% – 64%",
      polishSymmetry: "Excellent / Very Good",
      girdleThickness: "Slightly Thin to Very Thick",
      culetSize: "None",
    },
    fourCs: {
      cut: {
        overview:
          "Symmetry is critical: the two pointed tips must align precisely with the diamond's center line, and the curved wings must be identical mirror images.",
        idealNote:
          "Smooth, continuous curves from the belly to both tips, minimizing center bowtie shadow while maximizing sparkle.",
        shallowNote:
          "Excessive spread results in dark center shadowing and lifeless tips.",
        deepNote:
          "Narrow and heavy silhouette that sacrifices the dramatic finger-lengthening effect.",
      },
      color: {
        overview:
          "The two sharp points can trap body color; select G or higher for platinum, or H–I for yellow gold.",
        recommendation:
          "G color delivers exceptional crispness across both delicate tips.",
        grades: [
          { label: "D – F", name: "Colorless", desc: "Icy white purity through both tips.", tint: "#FFFFFF" },
          { label: "G – H", name: "Near Colorless", desc: "Face-up white elegance; excellent value choice.", tint: "#FAF7EE" },
          { label: "I – J", name: "Warm White", desc: "Warm undertones that blend seamlessly with yellow gold.", tint: "#F5EED8" },
          { label: "K – M", name: "Faint Yellow", desc: "Antique warmth with royal French heritage.", tint: "#EEDBB5" },
        ],
      },
      clarity: {
        overview:
          "Brilliant faceting conceals inclusions in the belly; ensure both pointed tips are free from structural inclusions.",
        recommendation:
          "VS2 or eye-clean SI1 provides supreme value.",
        grades: [
          { label: "FL / IF", name: "Flawless", desc: "Complete internal clarity.", opacity: 0.05 },
          { label: "VVS1 / VVS2", name: "Very Very Slightly Included", desc: "Microscopic perfection.", opacity: 0.15 },
          { label: "VS1 / VS2", name: "Very Slightly Included", desc: "Guaranteed eye-clean face-up beauty.", opacity: 0.28 },
          { label: "SI1 / SI2", name: "Slightly Included", desc: "Inclusions masked under facet fire; verify tips.", opacity: 0.42 },
          { label: "I1 – I3", name: "Included", desc: "Feathers in tips create chipping vulnerability.", opacity: 0.65 },
        ],
      },
      carat: {
        overview:
          "Possesses the largest face-up millimeter spread of all 10 diamond shapes—looking up to 15% larger than a round brilliant.",
        sizes: [
          { carat: "0.50 Ct", mmSize: "7.8 x 4.0 mm", scale: 0.65 },
          { carat: "0.75 Ct", mmSize: "9.0 x 4.7 mm", scale: 0.75 },
          { carat: "1.00 Ct", mmSize: "10.0 x 5.0 mm", scale: 0.85 },
          { carat: "1.50 Ct", mmSize: "11.5 x 5.8 mm", scale: 0.95 },
          { carat: "2.00 Ct", mmSize: "12.8 x 6.4 mm", scale: 1.05 },
          { carat: "3.00 Ct", mmSize: "14.8 x 7.4 mm", scale: 1.2 },
        ],
      },
    },
    bestFor: {
      summary:
        "Marquise cuts are iconic in royal statement engagement rings, modern East-West bezel settings, and vintage leaf-inspired wedding bands.",
      highlights: [
        "Largest face-up surface area of any diamond shape per carat.",
        "Dramatic finger-slenderizing visual effect that flatters all hand types.",
        "Versatile in both traditional vertical orientation and trendy East-West horizontal settings.",
        "Royal French heritage dating back to the court of Versailles.",
      ],
      recommendedJewellery: [
        "V-prong solitaire engagement rings with cathedral shoulders",
        "Modern East-West horizontal bezel settings",
        "Vintage leaf and vine nature-inspired bands",
        "Bridal tiara necklaces and drop pendants",
      ],
    },
    pros: [
      "Appears significantly larger than any other diamond shape per carat",
      "Maximizes finger-slenderizing effect dramatically",
      "Stands out from ubiquitous round and oval engagement rings",
      "High fire and scintillation across the curved belly",
    ],
    considerations: [
      "Both pointed tips require protective V-prongs to prevent chipping",
      "Inspect for bowtie shadow across the center belly",
    ],
    relatedProductIds: ["prod-1", "prod-3", "prod-6"],
  },
  {
    slug: "asscher",
    name: "Asscher Cut Diamond",
    shortName: "Asscher",
    tagline: "Octagonal Art Deco step cut with a mesmerizing windmill reflection.",
    overview:
      "The Asscher cut diamond—often referred to as the square emerald cut—is an octagonal step cut renowned for its high crown, deep pavilion, and hypnotic 'windmill' reflection pattern at its center. Patented in 1902 by the famous Asscher Brothers of Holland, it is the quintessential jewel of the roaring twenties and the Art Deco movement.",
    historyAndAnatomy:
      "Joseph Asscher designed this cut to draw the eye deep into the diamond's heart. With 58 dramatic concentric step facets and deeply cropped corners that form an octagon, the Asscher cut produces bold flashes of optic fire rather than subtle glitter.",
    image: "/images/shapes/asscher.png",
    specs: {
      shapeFamily: "Square Step Cut",
      visualFeel: "Art Deco, architectural, hypnotic, and vintage royalty",
      commonSetting: "Four-Prong Corner, Bezel, Geometric Halo, Channel Set",
      facetCount: "58 step facets",
      idealRatio: "1.00 – 1.05 (True Square Octagon)",
      idealTable: "60% – 68%",
      idealDepth: "62% – 68%",
      polishSymmetry: "Excellent / Very Good",
      girdleThickness: "Thin to Very Thick",
      culetSize: "None to Very Small",
    },
    fourCs: {
      cut: {
        overview:
          "Cut precision controls the iconic 'windmill' pattern formed by the intersection of pavilion facets meeting in the center.",
        idealNote:
          "Crisp windmill pattern reaching all corners with high crown angles that generate pure prismatic fire.",
        shallowNote:
          "Loses the signature deep windmill center, looking flat and watery.",
        deepNote:
          "Excessive depth narrows the top table and dims light reflection.",
      },
      color: {
        overview:
          "Like the emerald cut, the open step facets display body color clearly; higher color grades maintain an icy diamond appearance.",
        recommendation:
          "G or better for white metal settings; H is acceptable for 18K yellow gold settings.",
        grades: [
          { label: "D – F", name: "Colorless", desc: "Pure crystal water-clear clarity with hypnotic windmill flash.", tint: "#FFFFFF" },
          { label: "G – H", name: "Near Colorless", desc: "Face-up ice white; ideal luxury standard.", tint: "#FAF7EE" },
          { label: "I – J", name: "Warm White", desc: "Warm vintage tone matching Art Deco antique mountings.", tint: "#F5EED8" },
          { label: "K – M", name: "Faint Yellow", desc: "Warm champagne glow for period reproductions.", tint: "#EEDBB5" },
        ],
      },
      clarity: {
        overview:
          "Because of the large open table and clean step facets, clarity is critical. Inclusions cannot hide under brilliant facet fire.",
        recommendation:
          "VS1 or higher is strongly recommended for 100% eye-clean transparency.",
        grades: [
          { label: "FL / IF", name: "Flawless", desc: "Absolute museum-grade perfection.", opacity: 0.05 },
          { label: "VVS1 / VVS2", name: "Very Very Slightly Included", desc: "Flawless to normal vision; pristine heirloom purity.", opacity: 0.15 },
          { label: "VS1 / VS2", name: "Very Slightly Included", desc: "Recommended minimum for guaranteed eye-clean transparency.", opacity: 0.28 },
          { label: "SI1 / SI2", name: "Slightly Included", desc: "Inclusions are frequently visible through the center table.", opacity: 0.42 },
          { label: "I1 – I3", name: "Included", desc: "Flaws disrupt the geometric symmetry and windmill optics.", opacity: 0.65 },
        ],
      },
      carat: {
        overview:
          "Deep pavilion and high crown concentrate weight centrally, creating a dense, compact luxury footprint.",
        sizes: [
          { carat: "0.50 Ct", mmSize: "4.4 x 4.4 mm", scale: 0.65 },
          { carat: "0.75 Ct", mmSize: "5.0 x 5.0 mm", scale: 0.75 },
          { carat: "1.00 Ct", mmSize: "5.5 x 5.5 mm", scale: 0.85 },
          { carat: "1.50 Ct", mmSize: "6.3 x 6.3 mm", scale: 0.95 },
          { carat: "2.00 Ct", mmSize: "7.0 x 7.0 mm", scale: 1.05 },
          { carat: "3.00 Ct", mmSize: "8.1 x 8.1 mm", scale: 1.2 },
        ],
      },
    },
    bestFor: {
      summary:
        "Asscher cut diamonds are the crown jewel of Art Deco engagement rings, geometric channel-set bands, and bespoke platinum mountings.",
      highlights: [
        "Hypnotic 'hall of mirrors' windmill pattern found in no other diamond shape.",
        "Cropped octagonal corners provide superior durability against chipping.",
        "Deep Art Deco historical pedigree favored by vintage collectors and connoisseurs.",
        "High crown generates dramatic flashes of colored fire.",
      ],
      recommendedJewellery: [
        "Art Deco platinum solitaire rings with geometric filigree",
        "Octagonal bezel-set engagement rings with milgrain edges",
        "Three-stone rings with trapezoid or bullet side diamonds",
        "Vintage signet cocktail rings in solid 18K white gold",
      ],
    },
    pros: [
      "Mesmerizing geometric windmill center pattern",
      "Cut corners make it less prone to chipping than square princess cuts",
      "Rare and distinctive choice that sets the wearer apart",
      "Bold optic flashes of light and high chromatic fire",
    ],
    considerations: [
      "Requires higher clarity grade (VS1+) as inclusions are easily visible",
      "Face-up surface area is smaller than elongated shapes due to deep pavilion",
    ],
    relatedProductIds: ["prod-1", "prod-2", "prod-7"],
  },
  {
    slug: "heart",
    name: "Heart Cut Diamond",
    shortName: "Heart",
    tagline: "The ultimate emblem of bespoke devotion and romantic mastercraft.",
    overview:
      "The heart cut diamond is the ultimate symbol of romance and devotion, requiring supreme gemological skill to cut with balanced symmetry. Featuring 56 to 58 facets with two rounded lobes, an indented cleft, and a sharp lower tip, it represents the pinnacle of bespoke diamond craftsmanship.",
    historyAndAnatomy:
      "First recorded in 1562 when Mary Queen of Scots sent a heart diamond ring to Queen Elizabeth I, the heart shape demands exceptional skill. The cutter must achieve perfectly symmetrical lobes, a distinct sharp cleft, and a centered lower point.",
    image: "/images/shapes/heart.png",
    specs: {
      shapeFamily: "Modified Brilliant",
      visualFeel: "Romantic, sentimental, playful, and bespoke",
      commonSetting: "Three-Prong Solitaire, Halo, Bezel, Pendant, Toi et Moi",
      facetCount: "56–58 facets",
      idealRatio: "0.90 – 1.05 (Classic Balanced Heart)",
      idealTable: "53% – 63%",
      idealDepth: "58% – 65%",
      polishSymmetry: "Excellent / Very Good",
      girdleThickness: "Slightly Thin to Thick",
      culetSize: "None",
    },
    fourCs: {
      cut: {
        overview:
          "Symmetry is paramount: both lobes must be identical in curvature, the cleft must be sharp and distinct, and the point must align centrally.",
        idealNote:
          "Well-defined cleft and balanced curved lobes with vivid brilliant sparkle across the entire silhouette.",
        shallowNote:
          "Flat, wide heart with weak cleft definition and light leakage in the lobes.",
        deepNote:
          "Thick pavilion that obscures the cleft and makes the heart look bulbous.",
      },
      color: {
        overview:
          "Like pear and marquise cuts, the pointed tip can trap subtle body color; select G or higher for white metals.",
        recommendation:
          "G color delivers exceptional crispness across both lobes and the point.",
        grades: [
          { label: "D – F", name: "Colorless", desc: "Pristine white ice color across both lobes.", tint: "#FFFFFF" },
          { label: "G – H", name: "Near Colorless", desc: "Face-up white beauty; recommended luxury sweet spot.", tint: "#FAF7EE" },
          { label: "I – J", name: "Warm White", desc: "Warm undertones that pair wonderfully with yellow gold.", tint: "#F5EED8" },
          { label: "K – M", name: "Faint Yellow", desc: "Warm golden hue, ideal for vintage romantic gifts.", tint: "#EEDBB5" },
        ],
      },
      clarity: {
        overview:
          "The brilliant facet pattern masks inclusions well; inspect the point to ensure it is free from cleavage-prone inclusions.",
        recommendation:
          "VS2 or eye-clean SI1 offers prime value and complete beauty.",
        grades: [
          { label: "FL / IF", name: "Flawless", desc: "Complete internal clarity under 10x magnification.", opacity: 0.05 },
          { label: "VVS1 / VVS2", name: "Very Very Slightly Included", desc: "Microscopic perfection.", opacity: 0.15 },
          { label: "VS1 / VS2", name: "Very Slightly Included", desc: "Guaranteed eye-clean face-up beauty.", opacity: 0.28 },
          { label: "SI1 / SI2", name: "Slightly Included", desc: "Inclusions hidden beneath brilliant scintillation.", opacity: 0.42 },
          { label: "I1 – I3", name: "Included", desc: "Flaws in the tip can cause structural risks.", opacity: 0.65 },
        ],
      },
      carat: {
        overview:
          "Because of the complex cleft and lobes, heart shapes are best appreciated at 0.75 carats or higher where the outline is easily recognized.",
        sizes: [
          { carat: "0.50 Ct", mmSize: "5.0 x 5.0 mm", scale: 0.65 },
          { carat: "0.75 Ct", mmSize: "5.8 x 5.8 mm", scale: 0.75 },
          { carat: "1.00 Ct", mmSize: "6.5 x 6.5 mm", scale: 0.85 },
          { carat: "1.50 Ct", mmSize: "7.5 x 7.5 mm", scale: 0.95 },
          { carat: "2.00 Ct", mmSize: "8.3 x 8.3 mm", scale: 1.05 },
          { carat: "3.00 Ct", mmSize: "9.5 x 9.5 mm", scale: 1.2 },
        ],
      },
    },
    bestFor: {
      summary:
        "Heart cut diamonds are popular for anniversary rings, romantic Valentine pendants, and sentimental promise rings.",
      highlights: [
        "The world's most unmistakable symbol of eternal love and commitment.",
        "Demands the highest level of cutter skill and precision symmetry.",
        "Sensational brilliant fire with 56–58 facets reflecting light in every direction.",
        "Unique collector piece that stands apart from standard commercial cuts.",
      ],
      recommendedJewellery: [
        "Three-prong solitaire romantic engagement rings",
        "Halo heart-shaped diamond necklace pendants in 18K rose gold",
        "Toi et Moi rings paired with round brilliant or pear cuts",
        "Anniversary eternity drop earrings",
      ],
    },
    pros: [
      "Incomparable romantic symbolism and emotional meaning",
      "High fire, brilliance, and scintillation across both lobes",
      "Rare and distinctive choice with high artisanal value",
      "Conceals inclusions effectively with modified brilliant faceting",
    ],
    considerations: [
      "Best appreciated at 0.75 Ct or above to clearly distinguish the heart cleft",
      "Pointed tip requires a protective V-prong to avoid chipping",
    ],
    relatedProductIds: ["prod-1", "prod-4", "prod-8"],
  },
  {
    slug: "baguette",
    name: "Baguette Cut Diamond",
    shortName: "Baguette",
    tagline: "Pure Art Deco architectural lines with crisp geometric simplicity.",
    overview:
      "Named after the French word for rod, the baguette cut diamond features clean 90-degree corners and parallel step facets. Popularized during the Art Deco era of the 1920s, its minimalist geometry offers pristine crystalline elegance.",
    historyAndAnatomy:
      "Created during the early 20th century Art Deco movement, baguette cuts emphasize crystalline clarity over explosive brilliance. With 14 distinct step facets arranged in parallel planes, they reflect pure geometric flashes of light.",
    image: "/images/shapes/baguette.png",
    specs: {
      shapeFamily: "Step Cut",
      visualFeel: "Architectural, vintage, and understated",
      commonSetting: "Channel, Three-Stone Accent, Baguette Band",
      facetCount: "14 facets",
      idealRatio: "1.50 – 2.50",
      idealTable: "60% – 70%",
      idealDepth: "60% – 68%",
      polishSymmetry: "Very Good / Excellent",
      girdleThickness: "Medium to Thick",
      culetSize: "None",
    },
    proportions: [
      { label: "Cut Ratio", value: "1.50 – 2.50" },
      { label: "Table %", value: "60% – 70%" },
      { label: "Depth %", value: "60% – 68%" },
    ],
    fourCs: {
      cut: {
        overview:
          "Parallel linear facet symmetry is essential so all step reflections align perfectly without distortion.",
        idealNote:
          "Sharp, parallel step planes that produce crisp, mirrored flashes across the length of the stone.",
        shallowNote:
          "Light passes directly through, resulting in an empty, watery appearance with loss of contrast.",
        deepNote:
          "Excess bottom thickness adds hidden weight without adding visual length or brightness.",
      },
      color: {
        overview:
          "Step-cut faceting reveals body color more directly than brilliant cuts; G color or better is recommended for white metals.",
        recommendation:
          "F–G color ensures crisp ice-white transparency alongside white gold or platinum rings.",
        grades: [
          { label: "D – F", name: "Colorless", desc: "Pristine ice-pure clarity with zero tint.", tint: "#FFFFFF" },
          { label: "G – H", name: "Near Colorless", desc: "Clean white face-up appearance; excellent value.", tint: "#FAF7EE" },
          { label: "I – J", name: "Warm White", desc: "Warm undertones that pair wonderfully with yellow gold.", tint: "#F5EED8" },
          { label: "K – M", name: "Faint Yellow", desc: "Antique golden warmth for vintage heirloom designs.", tint: "#EEDBB5" },
        ],
      },
      clarity: {
        overview:
          "Large, open rectangular tables make inclusions easily visible; VS2 or higher is recommended for eye-clean beauty.",
        recommendation:
          "VS1 or VS2 grade provides guaranteed eye-clean purity without microscopic flaws.",
        grades: [
          { label: "FL / IF", name: "Flawless", desc: "Museum rarity with zero visible inclusions under 10x.", opacity: 0.05 },
          { label: "VVS1 / VVS2", name: "Very Very Slightly Included", desc: "Minute inclusions nearly impossible to locate.", opacity: 0.15 },
          { label: "VS1 / VS2", name: "Very Slightly Included", desc: "Eye-clean perfection across the large table window.", opacity: 0.28 },
          { label: "SI1 / SI2", name: "Slightly Included", desc: "Inclusions may be noticeable upon close inspection.", opacity: 0.42 },
          { label: "I1 – I3", name: "Included", desc: "Flaws noticeable to the naked eye.", opacity: 0.65 },
        ],
      },
      carat: {
        overview:
          "Baguettes are frequently calibrated in millimeter lengths (e.g. 4x2 mm, 5x2.5 mm) to align seamlessly in bands and ring shoulders.",
        sizes: [
          { carat: "0.25 Ct", mmSize: "4.5 x 2.2 mm", scale: 0.55 },
          { carat: "0.50 Ct", mmSize: "5.5 x 2.8 mm", scale: 0.7 },
          { carat: "0.75 Ct", mmSize: "6.5 x 3.2 mm", scale: 0.85 },
          { carat: "1.00 Ct", mmSize: "7.5 x 3.8 mm", scale: 1.0 },
          { carat: "1.50 Ct", mmSize: "8.5 x 4.2 mm", scale: 1.15 },
          { carat: "2.00 Ct", mmSize: "9.5 x 4.8 mm", scale: 1.25 },
        ],
      },
    },
    bestFor: {
      summary:
        "Baguette cut diamonds shine as channel-set eternity bands, elegant flanking side stones for solitaire rings, and geometric modern pendants.",
      highlights: [
        "Sleek rectangular step-cut faceting with pure 90-degree corners.",
        "Minimalist Art Deco aesthetic that highlights diamond clarity and transparency.",
        "Versatile design element pairing seamlessly with emerald, round, or cushion centers.",
        "Timeless choice for clean channel-set wedding bands and anniversary rings.",
      ],
      recommendedJewellery: [
        "Channel-set baguette diamond wedding bands",
        "Classic three-stone solitaire rings with baguette shoulders",
        "Art Deco geometric diamond drop earrings",
        "Modern linear diamond bar pendants",
      ],
    },
    pros: [
      "Pure architectural geometry with timeless vintage elegance",
      "Exceptional optical transparency highlighting diamond purity",
      "Superb durability when mounted in protective channel or bezel settings",
      "Pairs flawlessly with both round brilliant and step-cut center diamonds",
    ],
    considerations: [
      "Requires higher clarity (VS2+) due to open, unobstructed table facet",
      "Lower dispersion scintillation compared to brilliant-cut shapes",
    ],
    relatedProductIds: ["prod-1", "prod-2"],
  },
  {
    slug: "tapered-baguette",
    name: "Tapered Baguette Cut Diamond",
    shortName: "Tapered Baguette",
    tagline: "Refined trapezoidal steps that guide the eye toward a commanding center stone.",
    overview:
      "The tapered baguette diamond narrows gracefully from a wider outer edge to a narrower inner point. Recognized as the gold standard of luxury side stones, it gently guides the eye toward the center solitaire while adding crystalline architectural depth.",
    historyAndAnatomy:
      "Engineered specifically for flanking center solitaires in mid-century fine jewellery, tapered baguettes narrow along the ring shank, creating an optical funnel effect that makes center diamonds appear larger.",
    image: "/images/shapes/tapered-baguette.png",
    specs: {
      shapeFamily: "Trapezoidal Step Cut",
      visualFeel: "Sophisticated, narrowing, and focal-guiding",
      commonSetting: "Three-Stone Flanking, Solitaire Shoulders",
      facetCount: "14 facets",
      idealRatio: "1.40 – 2.20",
      idealTable: "60% – 70%",
      idealDepth: "60% – 68%",
      polishSymmetry: "Very Good / Excellent",
      girdleThickness: "Medium to Thick",
      culetSize: "None",
    },
    proportions: [
      { label: "Taper Ratio", value: "1.40 – 2.20" },
      { label: "Table %", value: "60% – 70%" },
      { label: "Depth %", value: "60% – 68%" },
    ],
    fourCs: {
      cut: {
        overview:
          "Consistent taper angle and parallel step facets are crucial to ensure perfect symmetry across paired flanking stones.",
        idealNote:
          "Balanced taper angle narrowing smoothly from the wide table to the narrow tip.",
        shallowNote:
          "Light leaks through the wide end, reducing optical contrast and mirrored brilliance.",
        deepNote:
          "Excess depth adds dead carat weight that cannot be set low in delicate ring shanks.",
      },
      color: {
        overview:
          "Side stones should match or be within one color grade of the center diamond to ensure unified color harmony.",
        recommendation:
          "Match side stone color to within one grade of your center stone (typically F–G for colorless center rings).",
        grades: [
          { label: "D – F", name: "Colorless", desc: "Pristine ice-white beauty that matches high-tier center stones.", tint: "#FFFFFF" },
          { label: "G – H", name: "Near Colorless", desc: "Crisp white look; the industry standard for fine side stones.", tint: "#FAF7EE" },
          { label: "I – J", name: "Warm White", desc: "Warm undertones ideal for yellow or rose gold three-stone rings.", tint: "#F5EED8" },
          { label: "K – M", name: "Faint Yellow", desc: "Vintage warmth for antique settings.", tint: "#EEDBB5" },
        ],
      },
      clarity: {
        overview:
          "Because tapered baguettes are step cuts, eye-clean VS clarity is recommended to maintain crystal-clear transparency.",
        recommendation:
          "VS1–VS2 provides guaranteed eye-clean clarity for flanking side stones.",
        grades: [
          { label: "FL / IF", name: "Flawless", desc: "Collector grade with zero internal inclusions.", opacity: 0.05 },
          { label: "VVS1 / VVS2", name: "Very Very Slightly Included", desc: "Microscopic perfection.", opacity: 0.15 },
          { label: "VS1 / VS2", name: "Very Slightly Included", desc: "Eye-clean transparency; our expert recommendation.", opacity: 0.28 },
          { label: "SI1 / SI2", name: "Slightly Included", desc: "Minor inclusions under 10x magnification.", opacity: 0.42 },
          { label: "I1 – I3", name: "Included", desc: "Visible inclusions that may compromise optical clarity.", opacity: 0.65 },
        ],
      },
      carat: {
        overview:
          "Tapered baguettes are traditionally sold in matched pairs, measured by length and wide/narrow millimeter widths.",
        sizes: [
          { carat: "0.20 Ct Pair", mmSize: "3.5 x 2.0 x 1.4 mm", scale: 0.55 },
          { carat: "0.40 Ct Pair", mmSize: "4.5 x 2.5 x 1.8 mm", scale: 0.7 },
          { carat: "0.60 Ct Pair", mmSize: "5.5 x 3.0 x 2.0 mm", scale: 0.85 },
          { carat: "0.80 Ct Pair", mmSize: "6.5 x 3.5 x 2.4 mm", scale: 1.0 },
          { carat: "1.00 Ct Pair", mmSize: "7.0 x 3.8 x 2.6 mm", scale: 1.15 },
          { carat: "1.50 Ct Pair", mmSize: "8.0 x 4.2 x 2.8 mm", scale: 1.25 },
        ],
      },
    },
    bestFor: {
      summary:
        "Tapered baguette diamonds shine as flanking shoulder stones in classic three-stone solitaire engagement rings and vintage cocktail settings.",
      highlights: [
        "Trapezoidal step cut narrowing elegantly along the ring shank toward the center stone.",
        "Guides the eye naturally and accentuates the size of the center solitaire.",
        "The undisputed classic side-stone silhouette in mid-century and modern high jewellery.",
        "Pristine step facets that complement both brilliant and step-cut center diamonds.",
      ],
      recommendedJewellery: [
        "Three-stone round solitaire rings with tapered baguette accents",
        "Emerald-cut engagement rings flanked by tapered baguettes",
        "Art Deco architectural bridal mountings",
        "Vintage cocktail rings in platinum and 18K yellow gold",
      ],
    },
    pros: [
      "Guides the eye inward to make center diamonds look noticeably larger",
      "Timeless Art Deco elegance favored by premier luxury jewellery houses",
      "Sits flush against ring bands for smooth, snag-free everyday wear",
      "Pairs impeccably with round, emerald, oval, and cushion center stones",
    ],
    considerations: [
      "Requires precise gemological matching when bought in pairs",
      "Best suited as accent or side stones rather than a standalone solitaire",
    ],
    relatedProductIds: ["prod-1", "prod-3"],
  },
];

export const diamondShapesData: DiamondShapeDetail[] = rawDiamondShapesData.map((s) => ({
  id: s.slug,
  slug: s.slug,
  name: s.name || s.shortName,
  shortName: s.shortName || s.name,
  tagline: s.tagline,
  description: s.overview || s.description,
  overview: s.overview || s.description,
  historyAndAnatomy: s.historyAndAnatomy || "",
  image: s.image,
  detailImage: s.detailImage || s.image,
  proportions: s.proportions || [
    { label: "Cut Ratio", value: s.specs?.idealRatio || "1.00" },
    { label: "Table %", value: s.specs?.idealTable || "54% – 57%" },
    { label: "Depth %", value: s.specs?.idealDepth || "60% – 62.5%" },
  ],
  specs: s.specs,
  fourCs: s.fourCs,
  bestFor: typeof s.bestFor === "string" ? s.bestFor : s.bestFor?.summary || s.tagline,
  bestForDetails: typeof s.bestFor === "object" ? s.bestFor : undefined,
  features: s.features || s.bestFor?.highlights || [
    s.tagline,
    s.specs?.visualFeel || "Timeless brilliance",
    s.specs?.commonSetting || "Solitaire and classic mounts",
  ],
  pros: s.pros || [],
  considerations: s.considerations || [],
  relatedProductIds: s.relatedProductIds || [],
}));

export const diamondShapes: DiamondShapeDetail[] = diamondShapesData;

export function getDiamondShape(shapeId: string): DiamondShapeDetail | undefined {
  if (!shapeId) return undefined;
  const normalized = shapeId.toLowerCase();
  return diamondShapesData.find(
    (shape) =>
      shape.id.toLowerCase() === normalized ||
      shape.slug.toLowerCase() === normalized ||
      (normalized === "round-brilliant" && shape.slug === "round") ||
      (normalized === "oval-cut" && shape.slug === "oval") ||
      (normalized === "emerald-cut" && shape.slug === "emerald") ||
      (normalized === "princess-cut" && shape.slug === "princess") ||
      (normalized === "cushion-cut" && shape.slug === "cushion") ||
      (normalized === "pear-cut" && shape.slug === "pear") ||
      (normalized === "radiant-cut" && shape.slug === "radiant") ||
      (normalized === "marquise-cut" && shape.slug === "marquise") ||
      (normalized === "asscher-cut" && shape.slug === "asscher") ||
      (normalized === "heart-cut" && shape.slug === "heart") ||
      (normalized === "baguettes" && shape.slug === "baguette") ||
      (normalized === "taper" && shape.slug === "tapered-baguette")
  );
}

export function getDiamondShapeBySlug(slug: string): DiamondShapeDetail | undefined {
  return getDiamondShape(slug);
}

export function getAllDiamondShapeSlugs(): string[] {
  return diamondShapesData.map((shape) => shape.id);
}

export * from "./guideData";




