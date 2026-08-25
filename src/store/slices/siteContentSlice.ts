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
      tagline: "THE CELEBRATION COLLECTION",
      heading: "Radiate Glamour.",
      headingAccent: "Celebrate Life.",
      subtext:
        "Contemporary statement jewellery handcrafted with certified gold and sparkling diamonds.",
      image: "/images/hero-banner-1.png",
      position: "right",
      theme: "light",
      ctas: [
        { label: "Explore Collection", href: "/collections", variant: "primary" },
        { label: "Shop Women", href: "/collections", variant: "secondary" },
      ],
    },
    {
      id: "hero-2",
      tagline: "EMERALD & DIAMOND SUITE",
      heading: "Timeless Grace.",
      headingAccent: "Pure Brilliance.",
      subtext:
        "Exquisite teardrop solitaire diamonds set in warm hallmarked gold, designed to mesmerize.",
      image: "/images/hero-banner-2.png",
      position: "right",
      theme: "dark",
      ctas: [
        { label: "Shop Pendants", href: "/category/pendants", variant: "primary" },
        { label: "View Earrings", href: "/category/earrings", variant: "secondary" },
      ],
    },
    {
      id: "hero-3",
      tagline: "NATURE-INSPIRED CRAFTSMANSHIP",
      heading: "Botanical Allure.",
      headingAccent: "Delicate Forms.",
      subtext:
        "Artistic floral motifs encrusted with ethically sourced natural diamonds and fine 18k gold.",
      image: "/images/hero-banner-3.png",
      position: "right",
      theme: "light",
      ctas: [
        { label: "Shop Rings", href: "/category/rings", variant: "primary" },
        { label: "Discover More", href: "/collections/diamond-collection", variant: "secondary" },
      ],
    },
    {
      id: "hero-4",
      tagline: "MODERN HEIRLOOMS",
      heading: "Trilogy of Gold.",
      headingAccent: "Forever Modern.",
      subtext:
        "Intertwined yellow, white and rose gold masterworks hallmarked and certified for a lifetime.",
      image: "/images/hero-banner-4.png",
      position: "right",
      theme: "dark",
      ctas: [
        { label: "Shop Gold", href: "/collections/gold-collection", variant: "primary" },
        { label: "All Jewellery", href: "/collections", variant: "secondary" },
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
      image: "/images/men-ring-showcase.png",
      href: "/category/mens-collection",
      cta: "Shop Now",
    },
    {
      id: "for-her",
      title: "For Her",
      tagline: "Elegant. Graceful. You.",
      image: "/images/women-necklace-showcase.png",
      href: "/collections",
      cta: "Shop Now",
    },
  ],
  newCollection: {
    title: "Modern Designs. Timeless Craftsmanship.",
    subtitle: "New Collection",
    image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=1600&q=85",
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
    image: "https://images.unsplash.com/photo-1531995811006-35cb42e1a022?auto=format&fit=crop&w=900&q=80",
    cta: { label: "Our Story", href: "/about" },
  },
  instagram: {
    handle: "@luxe.jewels",
    images: [
      "/images/women-rings-showcase.png",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=500&q=80",
      "/images/women-necklace-showcase.png",
      "/images/men-ring-showcase.png",
      "/images/women-festive-showcase.png",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=500&q=80",
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
