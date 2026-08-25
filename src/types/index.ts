export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  compareAtPrice?: number;
  image: string;
  category: string; // category slug
  gender?: "men" | "women" | "unisex";
  collections?: string[];
  isBestseller?: boolean;
  isMostViewed?: boolean;
  isMostSold?: boolean;
  badge?: string;
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

export interface MegaMenuItem {
  id: string;
  name: string;
  href: string;
  icon?: string;
  badge?: string;
}

export interface MegaMenuTab {
  id: string;
  label: string;
  items: MegaMenuItem[];
  bottomBanner?: {
    heading: string;
    subheading: string;
    thumbnails: string[];
    buttonText: string;
    buttonHref: string;
  };
  featuredCard?: {
    image: string;
    title: string;
    subtitle?: string;
    href: string;
    ctaLabel: string;
  };
}

export interface MegaMenuData {
  tabs: MegaMenuTab[];
  defaultTabId?: string;
}

export interface NavLink {
  id: string;
  label: string;
  href: string;
  children?: NavLink[];
  megaMenu?: MegaMenuData;
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
  position?: "left" | "right" | "center";
  theme?: "light" | "dark";
  tagline?: string;
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
  trustBadge?: string;
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
