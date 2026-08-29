"use client";

import StaticPageLayout from "@/components/layout/StaticPageLayout";
import Instagram from "@/components/sections/Instagram";

// Our Story Components
import FounderStory from "./components/FounderStory";
import OurPhilosophy from "./components/OurPhilosophy";
import CraftsmanshipProcess from "./components/CraftsmanshipProcess";
import MaterialsAndQuality from "./components/MaterialsAndQuality";
import DesignPhilosophy from "./components/DesignPhilosophy";
import OurArtisans from "./components/OurArtisans";
import Sustainability from "./components/Sustainability";
import Milestones from "./components/Milestones";
import AwardsRecognition from "./components/AwardsRecognition";
import CustomerPromise from "./components/CustomerPromise";

export default function OurStoryClient() {
  return (
    <>
      <StaticPageLayout
        pageTitle="Crafting Timeless Heirloom Luxury"
        breadcrumbLabel="Our Story"
        description="Luxe Jewels bridges centuries of traditional royal goldsmithing with contemporary haute joaillerie. Every creation is an embodiment of purity, elegance, and everlasting value."
      >
        <FounderStory />
        <OurPhilosophy />
        <CraftsmanshipProcess />
        <MaterialsAndQuality />
        <DesignPhilosophy />
        <OurArtisans />
        <Sustainability />
        <Milestones />
        <AwardsRecognition />
        <CustomerPromise />
      </StaticPageLayout>
      <Instagram />
    </>
  );
}
