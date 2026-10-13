import { createSlice } from "@reduxjs/toolkit";
import type {
  FeatureItem,
  FooterColumn,
  HeroSlide,
  SocialLink,
} from "@/types";
import { siteContentData, type SiteContentData } from "@/data";

export type SiteContentState = SiteContentData;

const initialState: SiteContentState = siteContentData;

export { siteContentData };

const siteContentSlice = createSlice({
  name: "siteContent",
  initialState,
  reducers: {},
});

export default siteContentSlice.reducer;
