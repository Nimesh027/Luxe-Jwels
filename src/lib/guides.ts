// Re-export materials, metals, gemstones, and diamond guides from central data layer
export {
  goldGuidesData,
  silverGuidesData,
  diamondTypesGuidesData,
  allMaterialGuides,
  guideCategoriesData,
  getGuideItem,
  getGuidesByCategory,
  getAllGuideSlugs,
  getRelatedGuides,
} from "@/data";

export type {
  GuideCategory,
  GuideMetric,
  GuideProcessVisualType,
  GuideProcessStep,
  GuideItemDetail,
  GuideCategoryOverview,
} from "@/types";
