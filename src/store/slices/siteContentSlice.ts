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
      image: "/images/banner/hero-banner-1.png",
      position: "right",
      theme: "dark",
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
      image: "/images/banner/hero-banner-2.png",
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
      image: "/images/banner/hero-banner-3.png",
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
      image: "/images/for-him-for-her/for-him-1.jpg",
      href: "/category/mens-collection",
      cta: "Shop Now",
    },
    {
      id: "for-her",
      title: "For Her",
      tagline: "Elegant. Graceful. You.",
      image: "/images/for-him-for-her/for-her-1.jpg",
      href: "/category/womens-collection",
      cta: "Shop Now",
    },
  ],
  newCollection: {
    title: "Modern Designs. Timeless Craftsmanship.",
    subtitle: "New Collection",
    image: "/images/banner/hero-banner-4.png",
    cta: { label: "Discover New Arrivals", href: "/collections" },
  },
  whyChooseUs: [
    {
      id: "why-1",
      icon: "certified",
      title: "Certified Purity",
      subtitle: "Hallmarked gold and certified diamonds.",
      trustBadge: "BIS Hallmarked",
    },
    {
      id: "why-2",
      icon: "care",
      title: "Lifetime Assurance",
      subtitle: "Complimentary cleaning, polishing & inspection.",
      trustBadge: "Expert Care Included",
    },
    {
      id: "why-3",
      icon: "shipping",
      title: "Insured Delivery",
      subtitle: "Secure, insured delivery to your doorstep.",
      trustBadge: "Fully Insured",
    },
    {
      id: "why-4",
      icon: "returns",
      title: "Easy 30-Day Exchange",
      subtitle: "Simple returns and hassle-free exchanges.",
      trustBadge: "Simple & Secure",
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
      subtitle: "Complimentary luxury box",
    },
    {
      id: "service-worldwide",
      icon: "worldwide",
      title: "Shipping Worldwide",
      subtitle: "Insured express delivery",
    },
    {
      id: "service-exchange",
      icon: "exchange",
      title: "Easy 30-Day Exchange",
      subtitle: "Simple & hassle-free",
    },
  ],
  brandStory: {
    title: "A Legacy of Perfection",
    body: "Since our inception, Luxe Jewels has stood for uncompromising artistry, ethical sourcing, and timeless design. Each creation represents hundreds of hours of delicate hand-setting by master goldsmiths.",
    image: "/images/brand/brand-story.jpg",
    cta: { label: "Our Story", href: "/about" },
  },
  instagram: {
    handle: "@luxe.jewels",
    images: [
      "/images/instagram/insta-1.png",
      "/images/instagram/insta-2.png",
      "/images/instagram/insta-3.png",
      "/images/instagram/insta-4.png",
      "/images/instagram/insta-5.png",
      "/images/instagram/insta-6.png",
      "/images/instagram/insta-7.png",
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
          { label: "Shop All", href: "/shop" },
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
          { label: "Privacy Notice", href: "/privacy-policy" },
          { label: "Terms & Conditions", href: "/terms" },
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
