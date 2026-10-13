import { createSlice } from "@reduxjs/toolkit";
import type { NavLink } from "@/types";
import { navigationData } from "@/data";

export interface NavigationState {
  links: NavLink[];
}

const initialState: NavigationState = {
  links: navigationData,
};

export { navigationData };

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {},
});

export default navigationSlice.reducer;
