import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface UiState {
  mobileDrawerOpen: boolean;
  cartDrawerOpen: boolean;
  wishlistDrawerOpen: boolean;
  userDrawerOpen: boolean;
  activeModal: string | null;
  searchOpen: boolean;
}

const initialState: UiState = {
  mobileDrawerOpen: false,
  cartDrawerOpen: false,
  wishlistDrawerOpen: false,
  userDrawerOpen: false,
  activeModal: null,
  searchOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setMobileDrawerOpen: (state, action: PayloadAction<boolean>) => {
      state.mobileDrawerOpen = action.payload;
    },
    setCartDrawerOpen: (state, action: PayloadAction<boolean>) => {
      state.cartDrawerOpen = action.payload;
    },
    setWishlistDrawerOpen: (state, action: PayloadAction<boolean>) => {
      state.wishlistDrawerOpen = action.payload;
    },
    setUserDrawerOpen: (state, action: PayloadAction<boolean>) => {
      state.userDrawerOpen = action.payload;
    },
    openModal: (state, action: PayloadAction<string>) => {
      state.activeModal = action.payload;
    },
    closeModal: (state) => {
      state.activeModal = null;
    },
    setSearchOpen: (state, action: PayloadAction<boolean>) => {
      state.searchOpen = action.payload;
    },
  },
});

export const {
  setMobileDrawerOpen,
  setCartDrawerOpen,
  setWishlistDrawerOpen,
  setUserDrawerOpen,
  openModal,
  closeModal,
  setSearchOpen,
} = uiSlice.actions;

export default uiSlice.reducer;
