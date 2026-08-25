import { createSlice } from "@reduxjs/toolkit";
import type { Category } from "@/types";

export interface CategoriesState {
  items: Category[];
}

const initialState: CategoriesState = {
  items: [
    { id: "cat-rings", name: "Rings", slug: "rings", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80" },
    { id: "cat-necklaces", name: "Necklaces", slug: "necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80" },
    { id: "cat-bracelets", name: "Bracelets", slug: "bracelets", image: "https://images.unsplash.com/photo-1611591475152-47352461008f?auto=format&fit=crop&w=600&q=80" },
    { id: "cat-earrings", name: "Earrings", slug: "earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80" },
    { id: "cat-pendants", name: "Pendants", slug: "pendants", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80" },
    { id: "cat-mens", name: "Men's Collection", slug: "mens-collection", image: "/images/men-ring-showcase.png" },
  ],
};

export const categoriesData = initialState.items;

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
});

export default categoriesSlice.reducer;
