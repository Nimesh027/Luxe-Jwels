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
      megaMenu: {
        defaultTabId: "men-category",
        tabs: [
          {
            id: "men-category",
            label: "Category",
            items: [
              { id: "men-rings", name: "Rings", href: "/category/rings" },
              { id: "men-bracelets", name: "Bracelets", href: "/category/bracelets" },
              { id: "men-chains", name: "Chains", href: "/category/necklaces" },
              { id: "men-all", name: "All Men's Jewellery", href: "/category/mens-collection" },
            ],
            bottomBanner: {
              heading: "Bold & Masculine Statements.",
              subheading: "Contemporary fine jewellery crafted for the modern gentleman.",
              thumbnails: [
                "/images/category/mens-collection.jpg",
                "/images/product/women-rings-showcase.png",
              ],
              buttonText: "View All Men",
              buttonHref: "/category/mens-collection",
            },
            featuredCard: {
              image: "/images/category/mens-collection.jpg",
              title: "Bold & Masculine — Handcrafted designs for every gentleman",
              href: "/category/mens-collection",
              ctaLabel: "Explore Men's",
            },
          },
          {
            id: "men-collections",
            label: "Collections",
            items: [
              { id: "men-col-main", name: "Men's Collection", href: "/category/mens-collection" },
              { id: "men-col-couple", name: "Couple Collection", href: "/collections/couple-collection" },
              { id: "men-col-gift", name: "Gift Collection", href: "/collections/gift-collection" },
            ],
            bottomBanner: {
              heading: "Curated for Him.",
              subheading: "Certified hallmarked jewellery for every special milestone.",
              thumbnails: [
                "/images/category/mens-collection.jpg",
              ],
              buttonText: "View Collections",
              buttonHref: "/collections",
            },
            featuredCard: {
              image: "/images/category/mens-collection.jpg",
              title: "Distinguished luxury for celebrations and gifting",
              href: "/collections/gift-collection",
              ctaLabel: "Shop Gifts",
            },
          },
        ],
      },
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
      megaMenu: {
        defaultTabId: "women-category",
        tabs: [
          {
            id: "women-category",
            label: "Category",
            items: [
              { id: "women-necklaces", name: "Necklaces", href: "/category/necklaces" },
              { id: "women-earrings", name: "Earrings", href: "/category/earrings" },
              { id: "women-pendants", name: "Pendants", href: "/category/pendants" },
              { id: "women-rings", name: "Rings", href: "/category/rings" },
              { id: "women-bracelets", name: "Bracelets", href: "/category/bracelets" },
              { id: "women-all", name: "All Jewellery", href: "/collections" },
            ],
            bottomBanner: {
              heading: "From Classic to Contemporary.",
              subheading: "Explore fine jewellery handcrafted for every moment.",
              thumbnails: [
                "/images/product/women-necklace-showcase.png",
                "/images/product/women-rings-showcase.png",
                "/images/product/women-festive-showcase.png",
              ],
              buttonText: "View All",
              buttonHref: "/collections",
            },
            featuredCard: {
              image: "/images/product/women-necklace-showcase.png",
              title: "Timeless Elegance — Handcrafted jewellery inspired by pure grace",
              href: "/collections",
              ctaLabel: "Explore Now",
            },
          },
          {
            id: "women-collections",
            label: "Collections",
            items: [
              { id: "women-col-diamond", name: "Diamond Collection", href: "/collections/diamond-collection" },
              { id: "women-col-gold", name: "Gold Collection", href: "/collections/gold-collection" },
              { id: "women-col-couple", name: "Couple Collection", href: "/collections/couple-collection" },
              { id: "women-col-gift", name: "Gift Collection", href: "/collections/gift-collection" },
            ],
            bottomBanner: {
              heading: "Exclusive Collections.",
              subheading: "Timeless beauty crafted with supreme precision.",
              thumbnails: [
                "/images/product/women-rings-showcase.png",
                "/images/product/women-festive-showcase.png",
              ],
              buttonText: "View Collections",
              buttonHref: "/collections",
            },
            featuredCard: {
              image: "/images/product/women-rings-showcase.png",
              title: "Radiate Brilliance — Certified hallmarked diamonds and fine gold",
              href: "/collections/diamond-collection",
              ctaLabel: "Discover Diamond",
            },
          },
        ],
      },
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
      megaMenu: {
        defaultTabId: "col-collections",
        tabs: [
          {
            id: "col-collections",
            label: "Collections",
            items: [
              { id: "c-diamond", name: "Diamond Collection", href: "/collections/diamond-collection" },
              { id: "c-gold", name: "Gold Collection", href: "/collections/gold-collection" },
              { id: "c-couple", name: "Couple Collection", href: "/collections/couple-collection" },
              { id: "c-gift", name: "Gift Collection", href: "/collections/gift-collection" },
              { id: "c-mens", name: "Men's Collection", href: "/category/mens-collection" },
              { id: "c-all", name: "All Collections", href: "/collections" },
            ],
            bottomBanner: {
              heading: "From Classic to Contemporary.",
              subheading: "Discover our new collections, made for every story.",
              thumbnails: [
                "/images/product/women-festive-showcase.png",
                "/images/product/women-necklace-showcase.png",
                "/images/product/women-rings-showcase.png",
              ],
              buttonText: "View All",
              buttonHref: "/collections",
            },
            featuredCard: {
              image: "/images/collections/diamond-collection.jpg",
              title: "Timeless Beauty — Discover the finest gold & diamond collections",
              href: "/collections/diamond-collection",
              ctaLabel: "Explore Diamonds",
            },
          },
          {
            id: "col-categories",
            label: "Category",
            items: [
              { id: "c-rings", name: "Rings", href: "/category/rings" },
              { id: "c-necklaces", name: "Necklaces", href: "/category/necklaces" },
              { id: "c-bracelets", name: "Bracelets", href: "/category/bracelets" },
              { id: "c-earrings", name: "Earrings", href: "/category/earrings" },
              { id: "c-pendants", name: "Pendants", href: "/category/pendants" },
              { id: "c-mens-cat", name: "Men's Jewellery", href: "/category/mens-collection" },
            ],
            bottomBanner: {
              heading: "Shop by Category.",
              subheading: "Certified BIS Hallmarked fine jewellery crafted with care.",
              thumbnails: [
                "/images/product/women-rings-showcase.png",
                "/images/product/women-necklace-showcase.png",
              ],
              buttonText: "View Categories",
              buttonHref: "/collections",
            },
            featuredCard: {
              image: "/images/product/women-rings-showcase.png",
              title: "Solitaire and statement rings crafted to perfection",
              href: "/category/rings",
              ctaLabel: "Shop Rings",
            },
          },
        ],
      },
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

