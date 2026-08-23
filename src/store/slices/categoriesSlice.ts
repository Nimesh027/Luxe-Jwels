import { createSlice } from "@reduxjs/toolkit";
import type { Category } from "@/types";

export interface CategoriesState {
  items: Category[];
}

const initialState: CategoriesState = {
  items: [
    { id: "cat-rings", name: "Rings", slug: "rings", image: "https://picsum.photos/seed/luxe-cat-rings/300/300" },
    { id: "cat-necklaces", name: "Necklaces", slug: "necklaces", image: "https://picsum.photos/seed/luxe-cat-necklaces/300/300" },
    { id: "cat-bracelets", name: "Bracelets", slug: "bracelets", image: "https://picsum.photos/seed/luxe-cat-bracelets/300/300" },
    { id: "cat-earrings", name: "Earrings", slug: "earrings", image: "https://picsum.photos/seed/luxe-cat-earrings/300/300" },
    { id: "cat-pendants", name: "Pendants", slug: "pendants", image: "https://picsum.photos/seed/luxe-cat-pendants/300/300" },
    { id: "cat-mens", name: "Men's Collection", slug: "mens-collection", image: "https://picsum.photos/seed/luxe-cat-mens/300/300" },
  ],
};

export const categoriesData = initialState.items;

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
});

export default categoriesSlice.reducer;
