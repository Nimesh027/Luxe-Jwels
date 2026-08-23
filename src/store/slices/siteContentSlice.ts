import { createSlice } from "@reduxjs/toolkit";
import type {
  FeatureItem,
  FooterColumn,
  HeroSlide,
  SocialLink,
} from "@/types";

export interface SiteContentState {
  announcementBar: string[];
  heroSlides: HeroSlide[];
  featureStrip: FeatureItem[];
  forHimForHer: {
    id: string;
    title: string;
    tagline: string;
    image: string;
    href: string;
    cta: string;
  }[];
  newCollection: {
    title: string;
    subtitle: string;
    image: string;
    cta: { label: string; href: string };
  };
  whyChooseUs: FeatureItem[];
  serviceStrip: FeatureItem[];
  brandStory: {
    title: string;
    body: string;
    image: string;
    cta: { label: string; href: string };
  };
  instagram: {
    handle: string;
    images: string[];
  };
  newsletter: {
    title: string;
    subtitle: string;
    placeholder: string;
    cta: string;
  };
  footer: {
    brandBlurb: string;
    columns: FooterColumn[];
    socials: SocialLink[];
    paymentBadges: string[];
    copyright: string;
  };
}

const initialState: SiteContentState = {
  announcementBar: [
    "FREE SHIPPING ON ORDERS ABOVE ₹10,000",
    "EASY 30 DAY RETURNS",
    "CERTIFIED JEWELLERY",
  ],
  heroSlides: [
    {
      id: "hero-1",
      heading: "Timeless Elegance.",
      headingAccent: "Crafted for You.",
      subtext: "Fine jewellery for every moment that defines you.",
      image: "https://picsum.photos/seed/luxe-hero-1/1600/900",
      ctas: [
        { label: "Shop Men", href: "/category/mens-collection", variant: "primary" },
        { label: "Shop Women", href: "/collections", variant: "secondary" },
      ],
    },
    {
      id: "hero-2",
      heading: "Modern Designs.",
      headingAccent: "Timeless Craftsmanship.",
      subtext: "Discover our new collection, made for every story.",
      image: "https://picsum.photos/seed/luxe-hero-2/1600/900",
      ctas: [
        { label: "Shop Men", href: "/category/mens-collection", variant: "primary" },
        { label: "Shop Women", href: "/collections", variant: "secondary" },
      ],
    },
    {
      id: "hero-3",
      heading: "Radiate Brilliance.",
      headingAccent: "Every Single Day.",
      subtext: "Certified, hallmarked jewellery trusted by thousands.",
      image: "https://picsum.photos/seed/luxe-hero-3/1600/900",
      ctas: [
        { label: "Shop Men", href: "/category/mens-collection", variant: "primary" },
        { label: "Shop Women", href: "/collections", variant: "secondary" },
      ],
    },
  ],
  featureStrip: [
    {
      id: "feature-shipping",
      icon: "shipping",
      title: "Free Shipping",
      subtitle: "On orders above ₹10,000",
    },
    {
      id: "feature-returns",
      icon: "returns",
      title: "30 Day Returns",
      subtitle: "Hassle free returns",
    },
    {
      id: "feature-certified",
      icon: "certified",
      title: "Certified Jewellery",
      subtitle: "Hallmarked & certified",
    },
    {
      id: "feature-secure",
      icon: "secure",
      title: "Secure Payment",
      subtitle: "100% safe & secure",
    },
    {
      id: "feature-care",
      icon: "care",
      title: "Lifetime Care",
      subtitle: "Cleaning & repairs",
    },
  ],
  forHimForHer: [
    {
      id: "for-him",
      title: "For Him",
      tagline: "Bold. Classic. Timeless.",
      image: "https://picsum.photos/seed/luxe-for-him/800/600",
      href: "/category/mens-collection",
      cta: "Shop Now",
    },
    {
      id: "for-her",
      title: "For Her",
      tagline: "Elegant. Graceful. You.",
      image: "https://picsum.photos/seed/luxe-for-her/800/600",
      href: "/collections",
      cta: "Shop Now",
    },
  ],
  newCollection: {
    title: "Modern Designs. Timeless Craftsmanship.",
    subtitle: "New Collection",
    image: "https://picsum.photos/seed/luxe-new-collection/1600/700",
    cta: { label: "Explore Now", href: "/collections" },
  },
  whyChooseUs: [
    {
      id: "why-certified",
      icon: "certified",
      title: "Certified & Hallmarked",
      subtitle: "100% authentic jewellery",
    },
    {
      id: "why-quality",
      icon: "quality",
      title: "Premium Quality",
      subtitle: "Finest materials, perfect finish",
    },
    {
      id: "why-trusted",
      icon: "trusted",
      title: "Trusted By Thousands",
      subtitle: "Loved by 50,000+ customers",
    },
    {
      id: "why-secure",
      icon: "secure",
      title: "Secure & Easy Payments",
      subtitle: "Multiple safe payment options",
    },
    {
      id: "why-support",
      icon: "support",
      title: "Dedicated Support",
      subtitle: "We're here to help you",
    },
  ],
  serviceStrip: [
    {
      id: "service-engraving",
      icon: "engraving",
      title: "Free Engraving",
      subtitle: "Personalize your jewellery",
    },
    {
      id: "service-gift",
      icon: "gift",
      title: "Gift Wrapping",
      subtitle: "Make it extra special",
    },
    {
      id: "service-worldwide",
      icon: "worldwide",
      title: "Shipping Worldwide",
      subtitle: "Delivering happiness globally",
    },
    {
      id: "service-exchange",
      icon: "exchange",
      title: "Easy Exchange",
      subtitle: "Simple & quick process",
    },
  ],
  brandStory: {
    title: "Crafted With Passion, Delivered With Trust",
    body: "At Luxe Jewels, every piece is more than jewellery — it's a story of passion, precision and perfection. From design to delivery, we ensure the best experience for you.",
    image: "https://picsum.photos/seed/luxe-brand-story/900/700",
    cta: { label: "Our Story", href: "/about" },
  },
  instagram: {
    handle: "@luxe.jewels",
    images: [
      "https://picsum.photos/seed/luxe-insta-1/400/400",
      "https://picsum.photos/seed/luxe-insta-2/400/400",
      "https://picsum.photos/seed/luxe-insta-3/400/400",
      "https://picsum.photos/seed/luxe-insta-4/400/400",
      "https://picsum.photos/seed/luxe-insta-5/400/400",
      "https://picsum.photos/seed/luxe-insta-6/400/400",
    ],
  },
  newsletter: {
    title: "Stay Updated With Luxe Jewels",
    subtitle: "Subscribe to get special offers, new arrivals and more.",
    placeholder: "Enter your email address",
    cta: "Subscribe",
  },
  footer: {
    brandBlurb:
      "Timeless jewellery for every moment that matters. Crafted with love, delivered with trust.",
    columns: [
      {
        id: "footer-shop",
        title: "Shop",
        links: [
          { label: "Men", href: "/category/mens-collection" },
          { label: "Women", href: "/collections" },
          { label: "New In", href: "/collections" },
          { label: "Bestsellers", href: "/collections" },
          { label: "Gift Cards", href: "/collections/gift-collection" },
        ],
      },
      {
        id: "footer-collections",
        title: "Collections",
        links: [
          { label: "Rings", href: "/category/rings" },
          { label: "Necklaces", href: "/category/necklaces" },
          { label: "Earrings", href: "/category/earrings" },
          { label: "Bracelets", href: "/category/bracelets" },
          { label: "Pendants", href: "/category/pendants" },
        ],
      },
      {
        id: "footer-customer-service",
        title: "Customer Service",
        links: [
          { label: "Contact Us", href: "/contact" },
          { label: "Shipping & Delivery", href: "/shipping" },
          { label: "Returns & Exchanges", href: "/returns" },
          { label: "Track Your Order", href: "/track-order" },
          { label: "FAQs", href: "/faqs" },
        ],
      },
      {
        id: "footer-information",
        title: "Information",
        links: [
          { label: "About Us", href: "/about" },
          { label: "Our Story", href: "/about" },
          { label: "Care Guide", href: "/care-guide" },
          { label: "Blog", href: "/blog" },
          { label: "Size Guide", href: "/size-guide" },
        ],
      },
    ],
    socials: [
      { id: "social-instagram", label: "Instagram", href: "https://instagram.com", icon: "instagram" },
      { id: "social-pinterest", label: "Pinterest", href: "https://pinterest.com", icon: "pinterest" },
      { id: "social-facebook", label: "Facebook", href: "https://facebook.com", icon: "facebook" },
      { id: "social-youtube", label: "YouTube", href: "https://youtube.com", icon: "youtube" },
    ],
    paymentBadges: ["Visa", "Mastercard", "Amex", "PayPal", "UPI"],
    copyright: "© 2025 Luxe Jewels. All Rights Reserved.",
  },
};

const siteContentSlice = createSlice({
  name: "siteContent",
  initialState,
  reducers: {},
});

export default siteContentSlice.reducer;
