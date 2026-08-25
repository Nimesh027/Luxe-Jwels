"use client";

import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";
import { featureIconComponents, CareIcon } from "@/components/icons/FeatureIcons";
import { useAppSelector } from "@/store/hooks";

export default function FeatureStrip() {
  const features = useAppSelector((state) => state.siteContent.featureStrip);

  return (
    <Section className="bg-cream/40 py-10 sm:py-14 md:py-16">
      {/* Reusable Common SectionTitle Component */}
      <SectionTitle
        title="Luxe Promises – Excellence You Can Trust"
        description="Crafted with certified materials and backed by our commitment to trust, authenticity, and lifetime care."
        align="center"
      />

      {/* 5-Column Responsive Circular Badges Grid matching Reference */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 lg:gap-10 items-start justify-center max-w-6xl mx-auto">
        {features.map((feature) => {
          const IconComponent = featureIconComponents[feature.icon] || CareIcon;

          return (
            <div
              key={feature.id}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              {/* Circular Gold-Bordered Icon Container */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-26 md:h-26 rounded-full border border-gold/70 bg-surface flex items-center justify-center p-4 sm:p-5 shadow-2xs group-hover:border-wine group-hover:shadow-md group-hover:scale-105 transition-all duration-300 mb-3 sm:mb-4">
                <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-gold group-hover:text-wine transition-colors duration-300" />
              </div>

              {/* Title & Subtitle */}
              <div className="px-1">
                <h3 className="text-xs sm:text-[13px] font-medium text-ink group-hover:text-wine transition-colors tracking-normal leading-snug">
                  {feature.title}
                </h3>
                {feature.subtitle && (
                  <p className="mt-1 text-[11px] text-muted leading-tight">
                    {feature.subtitle}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
