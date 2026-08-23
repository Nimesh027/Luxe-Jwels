import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface UiState {
  mobileDrawerOpen: boolean;
  activeModal: string | null;
  searchOpen: boolean;
}

const initialState: UiState = {
  mobileDrawerOpen: false,
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

export const { setMobileDrawerOpen, openModal, closeModal, setSearchOpen } =
  uiSlice.actions;

export default uiSlice.reducer;
