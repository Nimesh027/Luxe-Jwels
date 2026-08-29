"use client";

import Section from "@/components/common/Section";
import StaticPageLayout from "@/components/layout/StaticPageLayout";
import SectionTitle from "@/components/common/SectionTitle";
import CareCategoryTabs from "./components/CareCategoryTabs";
import CareDosAndDonts from "./components/CareDosAndDonts";

export default function CareGuideClient() {
  return (
    <StaticPageLayout
      pageTitle="Jewellery Care Guide"
      breadcrumbLabel="Care Guide"
      description="Follow our master goldsmiths’ care instructions to preserve the eternal fire and brilliance of your jewellery."
    >
      <div className="bg-surface/50 relative overflow-hidden pb-12 sm:pb-20">
        {/* Subtle decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-wine/5 to-transparent pointer-events-none" />

        <Section className="pb-0" containerClassName="max-w-5xl">
          {/* HERO HEADER SECTION */}
          <SectionTitle
            title="Jewellery Care Guide"
            titleClassName="!text-h3 text-wine font-semibold"
            // tagline="Luxe Lifetime Care"
            description="Fine gold, certified diamonds, and precious gemstones are designed to endure for generations. Follow our master goldsmiths’ care instructions to preserve their eternal fire and brilliance."
            descriptionClassName="text-ink/70 font-light max-w-2xl mx-auto"
            align="center"
            className="mb-8 sm:mb-12"
          />
        </Section>

          {/* CARE CATEGORY TABS & CARDS */}
          <CareCategoryTabs />

          {/* DO'S & DON'TS GRID */}
          <CareDosAndDonts />
      </div>
    </StaticPageLayout>
  );
}
