import { createSelector, createSlice } from "@reduxjs/toolkit";
import type { Product } from "@/types";
import type { RootState } from "@/store";
import { isProductInCollection } from "@/lib/productFilter";
import { productsData } from "@/data";

export interface ProductsState {
  items: Product[];
}

const initialState: ProductsState = {
  items: productsData,
};

export { productsData };

export const selectBestsellers = createSelector(
  (state: RootState) => state.products.items,
  (items) => items.filter((item) => item.isBestseller)
);

export const selectProductsByCategory = (categorySlug: string) =>
  createSelector(
    (state: RootState) => state.products.items,
    (items) => {
      if (categorySlug === "mens-collection") {
        return items.filter((item) => item.gender === "men" || item.category === "mens-collection");
      }
      return items.filter((item) => item.category === categorySlug);
    }
  );

export const selectProductsByCollection = (collectionSlug: string) =>
  createSelector(
    (state: RootState) => state.products.items,
    (items) => items.filter((item) => isProductInCollection(item, collectionSlug))
  );

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
