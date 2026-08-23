export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  compareAtPrice?: number;
  image: string;
  category: string; // category slug
  isBestseller?: boolean;
  description?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
}

export interface Collection {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  quote: string;
}

export interface NavLink {
  id: string;
  label: string;
  href: string;
  children?: NavLink[];
}

export interface HeroCta {
  label: string;
  href: string;
  variant: "primary" | "secondary";
}

export interface HeroSlide {
  id: string;
  heading: string;
  headingAccent: string;
  subtext: string;
  image: string;
  ctas: HeroCta[];
}

export type FeatureIconKey =
  | "shipping"
  | "returns"
  | "certified"
  | "secure"
  | "care"
  | "trusted"
  | "quality"
  | "support"
  | "engraving"
  | "gift"
  | "worldwide"
  | "exchange";

export interface FeatureItem {
  id: string;
  icon: FeatureIconKey;
  title: string;
  subtitle?: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  id: string;
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: "instagram" | "pinterest" | "facebook" | "youtube";
}

export interface CartItem {
  product: Product;
  quantity: number;
}
