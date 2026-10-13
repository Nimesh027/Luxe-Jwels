export type GuideCategory = "gold" | "silver" | "diamond" | "shape" | "shapes";

export interface GuideMetric {
  label: string;
  value: string;
  hint?: string;
}

export type GuideProcessVisualType =
  | "purity_composition"
  | "color_variants"
  | "hardness_gauge"
  | "hallmark_stamp"
  | "crystal_structure"
  | "optical_fire"
  | "diamond_tester"
  | "tarnish_barrier";

export interface GuideProcessStep {
  number: string;
  title: string;
  subtitle?: string;
  copy: string;
  visualType: GuideProcessVisualType;
  visualData?: Record<string, any>;
}

export interface GuideItemDetail {
  id: string;
  slug: string;
  category: GuideCategory;
  name: string;
  shortName: string;
  purityOrOrigin: string;
  hallmarkOrStamp: string;
  tagline: string;
  description: string;
  overview: string;
  historyAndCraft: string;
  image: string;
  detailImage?: string;
  accentColor?: string;
  metrics: GuideMetric[];
  process: GuideProcessStep[];
  specs: Array<{ label: string; value: string }>;
  bestFor: {
    summary: string;
    highlights: string[];
    recommendedJewellery: string[];
  };
  pros: string[];
  considerations: string[];
  careTips: string[];
  faqs: Array<{ question: string; answer: string }>;
  relatedProductIds: string[];
}

export interface GuideCategoryOverview {
  id: GuideCategory;
  title: string;
  tagline: string;
  description: string;
  heroImage: string;
  badge: string;
  items: GuideItemDetail[];
}
