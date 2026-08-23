import { createSlice } from "@reduxjs/toolkit";
import type { Collection } from "@/types";

export interface CollectionsState {
  items: Collection[];
}

const initialState: CollectionsState = {
  items: [
    {
      id: "col-diamond",
      name: "Diamond Collection",
      slug: "diamond-collection",
      tagline: "Radiate Brilliance",
      image: "https://picsum.photos/seed/luxe-col-diamond/600/600",
    },
    {
      id: "col-gold",
      name: "Gold Collection",
      slug: "gold-collection",
      tagline: "Timeless Beauty",
      image: "https://picsum.photos/seed/luxe-col-gold/600/600",
    },
    {
      id: "col-mens",
      name: "Men's Collection",
      slug: "mens-collection",
      tagline: "Bold & Masculine",
      image: "https://picsum.photos/seed/luxe-col-mens/600/600",
    },
    {
      id: "col-couple",
      name: "Couple Collection",
      slug: "couple-collection",
      tagline: "Made for Each Other",
      image: "https://picsum.photos/seed/luxe-col-couple/600/600",
    },
    {
      id: "col-gift",
      name: "Gift Collection",
      slug: "gift-collection",
      tagline: "Perfect for Every Moment",
      image: "https://picsum.photos/seed/luxe-col-gift/600/600",
    },
  ],
};

export const collectionsData = initialState.items;

const collectionsSlice = createSlice({
  name: "collections",
  initialState,
  reducers: {},
});

export default collectionsSlice.reducer;
