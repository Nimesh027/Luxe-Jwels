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
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "col-gold",
      name: "Gold Collection",
      slug: "gold-collection",
      tagline: "Timeless Beauty",
      image: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "col-mens",
      name: "Men's Collection",
      slug: "mens-collection",
      tagline: "Bold & Masculine",
      image: "/images/men-ring-showcase.png",
    },
    {
      id: "col-couple",
      name: "Couple Collection",
      slug: "couple-collection",
      tagline: "Made for Each Other",
      image: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "col-gift",
      name: "Gift Collection",
      slug: "gift-collection",
      tagline: "Perfect for Every Moment",
      image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80",
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
