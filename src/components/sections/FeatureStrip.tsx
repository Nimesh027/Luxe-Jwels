"use client";

import Section from "@/components/common/Section";
import { featureIconMap } from "@/lib/icons";
import { useAppSelector } from "@/store/hooks";

export default function FeatureStrip() {
  const features = useAppSelector((state) => state.siteContent.featureStrip);

  return (
    <Section className="border-b border-border py-6 md:py-8">
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
        {features.map((feature) => {
          const Icon = featureIconMap[feature.icon];
          return (
            <div key={feature.id} className="flex flex-col items-center gap-2 text-center">
              <Icon className="text-xl text-gold" />
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-ink">{feature.title}</p>
                {feature.subtitle && <p className="mt-1 text-[11px] text-muted">{feature.subtitle}</p>}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
