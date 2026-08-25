import { createSelector, createSlice } from "@reduxjs/toolkit";
import type { Product } from "@/types";
import type { RootState } from "@/store";
import { isProductInCollection } from "@/lib/productFilter";

export interface ProductsState {
  items: Product[];
}

const initialState: ProductsState = {
  items: [
    // ==========================================
    // 1. WOMEN'S RINGS (/category/rings)
    // ==========================================
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

    // ==========================================
    // 2. MEN'S RINGS (/category/rings, /category/mens-collection)
    // ==========================================
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

    // ==========================================
    // 3. WOMEN'S PENDANTS (/category/pendants)
    // ==========================================
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

    // ==========================================
    // 4. WOMEN'S BRACELETS (/category/bracelets)
    // ==========================================
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

    // ==========================================
    // 5. MEN'S BRACELETS (/category/bracelets, /category/mens-collection)
    // ==========================================
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

    // ==========================================
    // 6. WOMEN'S EARRINGS (/category/earrings)
    // ==========================================
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

    // ==========================================
    // 7. WOMEN'S NECKLACES (/category/necklaces)
    // ==========================================
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

    // ==========================================
    // 8. MEN'S CHAINS & NECKLACES (/category/necklaces, /category/mens-collection)
    // ==========================================
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
  ],
};

export const productsData = initialState.items;

export const selectBestsellers = createSelector(
  (state: RootState) => state.products.items,
  (items) => items.filter((item) => item.isBestseller)
);

export const selectProductsByCategory = (categorySlug: string) =>
  createSelector(
    (state: RootState) => state.products.items,
    (items) => {
      if (categorySlug === "mens-collection") {
        return items.filter((item) => item.gender === "men" || item.category === "mens-collection");
      }
      return items.filter((item) => item.category === categorySlug);
    }
  );

export const selectProductsByCollection = (collectionSlug: string) =>
  createSelector(
    (state: RootState) => state.products.items,
    (items) => items.filter((item) => isProductInCollection(item, collectionSlug))
  );

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;

