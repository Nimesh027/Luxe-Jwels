import { createSelector, createSlice } from "@reduxjs/toolkit";
import type { Product } from "@/types";
import type { RootState } from "@/store";

export interface ProductsState {
  items: Product[];
}

const initialState: ProductsState = {
  items: [
    {
      id: "prod-diamond-ring",
      name: "Diamond Ring",
      slug: "diamond-ring",
      price: 49999,
      compareAtPrice: 56999,
      image: "https://picsum.photos/seed/luxe-prod-diamond-ring/500/500",
      category: "rings",
      isBestseller: true,
      description:
        "A brilliant hallmarked diamond ring, set in 18k gold for everyday elegance.",
    },
    {
      id: "prod-cross-pendant",
      name: "Cross Pendant",
      slug: "cross-pendant",
      price: 24999,
      image: "https://picsum.photos/seed/luxe-prod-cross-pendant/500/500",
      category: "pendants",
      isBestseller: true,
      description: "A timeless cross pendant crafted in certified gold.",
    },
    {
      id: "prod-black-onyx-bracelet",
      name: "Black Onyx Bracelet",
      slug: "black-onyx-bracelet",
      price: 15999,
      image: "https://picsum.photos/seed/luxe-prod-onyx-bracelet/500/500",
      category: "bracelets",
      isBestseller: true,
      description: "Bold black onyx beads paired with polished gold accents.",
    },
    {
      id: "prod-diamond-studs",
      name: "Diamond Studs",
      slug: "diamond-studs",
      price: 29999,
      image: "https://picsum.photos/seed/luxe-prod-diamond-studs/500/500",
      category: "earrings",
      isBestseller: true,
      description: "Classic diamond studs finished with a brilliant sparkle.",
    },
    {
      id: "prod-gold-chain",
      name: "Gold Chain",
      slug: "gold-chain",
      price: 38999,
      image: "https://picsum.photos/seed/luxe-prod-gold-chain/500/500",
      category: "necklaces",
      isBestseller: true,
      description: "A refined gold chain, hallmarked and built to last.",
    },
    {
      id: "prod-mens-signet-ring",
      name: "Men's Signet Ring",
      slug: "mens-signet-ring",
      price: 24999,
      image: "https://picsum.photos/seed/luxe-prod-signet-ring/500/500",
      category: "mens-collection",
      isBestseller: true,
      description: "A bold signet ring crafted for the modern gentleman.",
    },
  ],
};

export const productsData = initialState.items;

export const selectBestsellers = createSelector(
  (state: RootState) => state.products.items,
  (items) => items.filter((item) => item.isBestseller)
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
