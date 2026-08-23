import { createSlice } from "@reduxjs/toolkit";
import type { NavLink } from "@/types";

export interface NavigationState {
  links: NavLink[];
}

const initialState: NavigationState = {
  links: [
    { id: "nav-new-in", label: "New In", href: "/collections" },
    {
      id: "nav-men",
      label: "Men",
      href: "/category/mens-collection",
      children: [
        { id: "nav-men-rings", label: "Rings", href: "/category/rings" },
        { id: "nav-men-bracelets", label: "Bracelets", href: "/category/bracelets" },
        { id: "nav-men-chains", label: "Chains", href: "/category/necklaces" },
      ],
    },
    {
      id: "nav-women",
      label: "Women",
      href: "/collections",
      children: [
        { id: "nav-women-necklaces", label: "Necklaces", href: "/category/necklaces" },
        { id: "nav-women-earrings", label: "Earrings", href: "/category/earrings" },
        { id: "nav-women-pendants", label: "Pendants", href: "/category/pendants" },
      ],
    },
    {
      id: "nav-collections",
      label: "Collections",
      href: "/collections",
      children: [
        { id: "nav-collections-diamond", label: "Diamond Collection", href: "/collections/diamond-collection" },
        { id: "nav-collections-gold", label: "Gold Collection", href: "/collections/gold-collection" },
        { id: "nav-collections-couple", label: "Couple Collection", href: "/collections/couple-collection" },
        { id: "nav-collections-gift", label: "Gift Collection", href: "/collections/gift-collection" },
      ],
    },
    { id: "nav-gifts", label: "Gifts", href: "/collections/gift-collection" },
    { id: "nav-about", label: "About Us", href: "/about" },
  ],
};

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {},
});

export default navigationSlice.reducer;
