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
  ],
};

export const collectionsData = initialState.items;

const collectionsSlice = createSlice({
  name: "collections",
  initialState,
  reducers: {},
});

export default collectionsSlice.reducer;
