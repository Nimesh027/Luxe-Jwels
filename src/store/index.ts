import { configureStore } from "@reduxjs/toolkit";
import siteContentReducer from "@/store/slices/siteContentSlice";
import navigationReducer from "@/store/slices/navigationSlice";
import categoriesReducer from "@/store/slices/categoriesSlice";
import productsReducer from "@/store/slices/productsSlice";
import collectionsReducer from "@/store/slices/collectionsSlice";
import testimonialsReducer from "@/store/slices/testimonialsSlice";
import cartReducer from "@/store/slices/cartSlice";
import wishlistReducer from "@/store/slices/wishlistSlice";
import authReducer from "@/store/slices/authSlice";
import uiReducer from "@/store/slices/uiSlice";

export const store = configureStore({
  reducer: {
    siteContent: siteContentReducer,
    navigation: navigationReducer,
    categories: categoriesReducer,
    products: productsReducer,
    collections: collectionsReducer,
    testimonials: testimonialsReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    auth: authReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
