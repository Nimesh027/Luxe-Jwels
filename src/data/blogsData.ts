export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: "Gold Trends" | "Solitaires" | "Bridal Couture" | "Jewellery Care";
  readTime: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  image: string;
  featured?: boolean;
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string;
      quote?: string;
    }[];
    conclusion: string;
  };
  tags: string[];
}

export const blogsData: BlogPost[] = [
  {
    id: "blog-1",
    slug: "guide-to-22k-hallmarked-gold",
    title: "The Ultimate Guide to BIS Hallmarked 22K Gold & Purity Standards",
    excerpt: "Learn how Bureau of Indian Standards (BIS) hallmarking guarantees gold purity, HUID numbers, and long-term resale value for your heirloom pieces.",
    category: "Gold Trends",
    readTime: "5 min read",
    date: "August 24, 2026",
    featured: true,
    author: {
      name: "Ananya Sharma",
      role: "Senior Jewellery Curator",
      avatar: "👑",
    },
    image: "/images/collections/couple-collection.jpg",
    tags: ["22K Gold", "BIS Hallmark", "Gold Purity", "Investment"],
    content: {
      intro: "Gold has always been more than an ornament in Indian culture—it is a sacred symbol of prosperity, heritage, and generational wealth. However, purchasing solid gold requires complete clarity on hallmarking standards and purity certifications.",
      sections: [
        {
          heading: "What Does 22K (916) Hallmark Mean?",
          body: "22K gold means that 22 out of 24 parts of the alloy are pure gold, corresponding to 91.6% purity. This is why it is stamped with the hallmark number 916. The remaining 8.4% consists of metals such as zinc, silver, or copper, which grant structural strength required to craft intricate necklaces and bangles.",
          quote: "A BIS Hallmark isn’t just a stamp—it’s your lifelong guarantee of gold purity verified by independent government testing centers.",
        },
        {
          heading: "Understanding the HUID (Hallmark Unique Identification)",
          body: "Every piece of hallmarked jewellery in India now features a 6-digit alphanumeric HUID code. Scanned via the BIS Care App, this code reveals the exact assaying center, retail jeweler, purity grade, and weight, ensuring 100% transparency against adulteration.",
        },
        {
          heading: "How Hallmarking Protects Your Resale & Exchange Value",
          body: "When exchanging or selling hallmarked gold, reputable jewelers offer prevailing market rates without deducting arbitrary melting losses. At Luxe Jewels, all 22K and 18K creations come with lifetime exchange guarantees.",
        },
      ],
      conclusion: "Investing in certified hallmarked gold ensures your heirloom pieces retain both sentimental beauty and financial sovereignty for generations.",
    },
  },
  {
    id: "blog-2",
    slug: "understanding-natural-diamond-solitaires",
    title: "Understanding Natural Diamond Solitaires: The 4Cs Demystified",
    excerpt: "Master the essentials of Carat, Cut, Clarity, and Color to choose a certified natural solitaire that radiates incomparable fire and brilliance.",
    category: "Solitaires",
    readTime: "6 min read",
    date: "August 18, 2026",
    featured: false,
    author: {
      name: "Vikramaditya Roy",
      role: "Chief Gemologist, IGI Fellow",
      avatar: "💎",
    },
    image: "/images/collections/couple-collection.jpg",
    tags: ["Solitaires", "4Cs", "Natural Diamonds", "IGI Certified"],
    content: {
      intro: "Selecting a natural solitaire diamond ring or pendant is one of life’s most cherished milestones. Understanding the universal 4Cs framework empowers you to choose a stone with unmatched sparkle.",
      sections: [
        {
          heading: "Cut: The Master Architect of Brilliance",
          body: "While many focus solely on carat weight, Cut is the single most critical factor determining a diamond's sparkle. An Excellent or Ideal cut reflects light internally across facets to create blinding fire.",
          quote: "Even a flawless diamond will look dull if the cut is poorly proportioned. Always prioritize Cut grade above all.",
        },
        {
          heading: "Clarity & Color: EF-VVS Standards",
          body: "At Luxe Jewels, we select stones in the EF color range (colorless to near-colorless) with VVS clarity (Very Very Slightly Included). Inclusions in VVS stones are microscopic and invisible to the naked eye under 10x magnification.",
        },
      ],
      conclusion: "Every Luxe Jewels solitaire is accompanied by an independent laboratory certificate from IGI or SGL detailing cut grade, laser inscription, and proportions.",
    },
  },
  {
    id: "blog-3",
    slug: "royal-bridal-jewellery-trends-2026",
    title: "Royal Bridal Jewellery Trends 2026: Polki, Chokers & Layering",
    excerpt: "Discover the season's hottest bridal haute couture trends—from uncut diamond Polki chokers to multi-tier emerald Satlada necklaces.",
    category: "Bridal Couture",
    readTime: "4 min read",
    date: "August 12, 2026",
    featured: false,
    author: {
      name: "Meera Mehta",
      role: "Bridal Styling Director",
      avatar: "👑",
    },
    image: "/images/collections/couple-collection.jpg",
    tags: ["Bridal Jewellery", "Polki", "Chokers", "Weddings 2026"],
    content: {
      intro: "Bridal jewellery for 2026 celebrates dramatic heritage silhouettes infused with lightweight ergonomic comfort. Brides are pairing royal Polki chokers with cascading gemstone strands.",
      sections: [
        {
          heading: "1. The Regal Polki Choker with Emerald Drops",
          body: "Uncut natural diamonds set in 22K gold foil (Polki) paired with Zambian emerald beads are ruling wedding moodboards. The contrast of green and gold exudes timeless majesty.",
        },
        {
          heading: "2. Multi-Tier Satlada Necklaces",
          body: "The classic 7-tier Satlada necklace is making a grand resurgence. Designed with pearl strands and gemstone spacers, it offers modular versatility that can be worn as individual necklaces post-wedding.",
        },
      ],
      conclusion: "Book a private consultation at our bridal lounge to customize your custom trousseau with master goldsmiths.",
    },
  },
  {
    id: "blog-4",
    slug: "how-to-store-and-preserve-fine-jewellery",
    title: "How to Store and Preserve Fine Jewellery at Home",
    excerpt: "Expert advice on preventing gold tarnish, diamond scratches, and pearl damage with proper storage boxes and cleaning care routines.",
    category: "Jewellery Care",
    readTime: "4 min read",
    date: "August 05, 2026",
    featured: false,
    author: {
      name: "Ananya Sharma",
      role: "Senior Jewellery Curator",
      avatar: "✨",
    },
    image: "/images/collections/couple-collection.jpg",
    tags: ["Jewellery Care", "Storage", "Gold Polish", "Maintenance"],
    content: {
      intro: "Your precious jewellery deserves the same care and attention as the moments it represents. Simple daily storage habits protect fine metals and natural gemstones for generations.",
      sections: [
        {
          heading: "Separate Compartments Are Essential",
          body: "Diamonds are the hardest natural material on Earth and will easily scratch gold, platinum, and softer gemstones if stored together. Always use velvet-lined individual pouches.",
        },
        {
          heading: "Moisture Protection for Polki & Pearls",
          body: "Polki and pearl pieces should never be stored in damp places. Keep silica gel sachets inside your jewellery vault to absorb ambient humidity.",
        },
      ],
      conclusion: "Enjoy free lifetime cleaning and prong inspection at any Luxe Jewels boutique nationwide.",
    },
  },
];
