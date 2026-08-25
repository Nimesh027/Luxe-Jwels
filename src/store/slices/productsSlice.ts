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
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
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
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
      category: "pendants",
      isBestseller: true,
      description: "A timeless cross pendant crafted in certified gold.",
    },
    {
      id: "prod-black-onyx-bracelet",
      name: "Black Onyx Bracelet",
      slug: "black-onyx-bracelet",
      price: 15999,
      image: "https://images.unsplash.com/photo-1611591475152-47352461008f?auto=format&fit=crop&w=800&q=80",
      category: "bracelets",
      isBestseller: true,
      description: "Bold black onyx beads paired with polished gold accents.",
    },
    {
      id: "prod-diamond-studs",
      name: "Diamond Studs",
      slug: "diamond-studs",
      price: 29999,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
      category: "earrings",
      isBestseller: true,
      description: "Classic diamond studs finished with a brilliant sparkle.",
    },
    {
      id: "prod-gold-chain",
      name: "Gold Chain",
      slug: "gold-chain",
      price: 38999,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
      category: "necklaces",
      isBestseller: true,
      description: "A refined gold chain, hallmarked and built to last.",
    },
    {
      id: "prod-mens-signet-ring",
      name: "Men's Signet Ring",
      slug: "mens-signet-ring",
      price: 24999,
      image: "/images/men-ring-showcase.png",
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
