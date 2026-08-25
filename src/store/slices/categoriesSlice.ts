import { createSlice } from "@reduxjs/toolkit";
import type { Category } from "@/types";

export interface CategoriesState {
  items: Category[];
}

const initialState: CategoriesState = {
  items: [
    { id: "cat-necklaces", name: "Necklaces", slug: "necklaces", image: "/images/category/necklaces.jpg" },
    { id: "cat-earrings", name: "Earrings", slug: "earrings", image: "/images/category/earrings.jpg" },
    { id: "cat-rings", name: "Rings", slug: "rings", image: "/images/category/rings.jpg" },
    { id: "cat-bracelets", name: "Bracelets", slug: "bracelets", image: "/images/category/bracelets.jpg" },
    { id: "cat-pendants", name: "Pendants", slug: "pendants", image: "/images/category/pendants.jpg" },
    { id: "cat-mens", name: "Men's Collection", slug: "mens-collection", image: "/images/category/mens-collection.jpg" },
    { id: "cat-womens", name: "Women's Collection", slug: "womens-collection", image: "/images/product/women-necklace-showcase.png" },
  ],
};

export const categoriesData = initialState.items;

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
});

export default categoriesSlice.reducer;
