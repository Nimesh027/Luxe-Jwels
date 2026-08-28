import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "@/types";
import type { RootState } from "@/store";

export interface WishlistState {
  items: Product[];
}

const initialState: WishlistState = {
  items: [
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
  ],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleItem: (state, action: PayloadAction<Product>) => {
      const exists = state.items.some((item) => item.id === action.payload.id);
      state.items = exists
        ? state.items.filter((item) => item.id !== action.payload.id)
        : [...state.items, action.payload];
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearWishlist: (state) => {
      state.items = [];
    },
  },
});

export const { toggleItem, removeItem, clearWishlist } = wishlistSlice.actions;

export const selectWishlistItems = (state: RootState) => state.wishlist.items;
export const selectIsWishlisted = (state: RootState, productId: string) =>
  state.wishlist.items.some((item) => item.id === productId);

export default wishlistSlice.reducer;
