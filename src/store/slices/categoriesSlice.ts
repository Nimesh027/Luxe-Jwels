import { createSlice } from "@reduxjs/toolkit";
import type { Category } from "@/types";
import { categoriesData } from "@/data";

export interface CategoriesState {
  items: Category[];
}

const initialState: CategoriesState = {
  items: categoriesData,
};

export { categoriesData };

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
});

export default categoriesSlice.reducer;
