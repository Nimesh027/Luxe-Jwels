"use client";

import Section from "@/components/common/Section";
import { featureIconMap } from "@/lib/icons";
import { useAppSelector } from "@/store/hooks";

export default function WhyChooseUs() {
  const items = useAppSelector((state) => state.siteContent.whyChooseUs);

  return (
    <Section title="Why Choose Luxe Jewels?" className="bg-cream-dark/40">
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
        {items.map((item) => {
          const Icon = featureIconMap[item.icon];
          return (
            <div key={item.id} className="flex flex-col items-center gap-3 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold text-xl text-gold">
                <Icon />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-ink">{item.title}</p>
                {item.subtitle && <p className="mt-1 text-[11px] text-muted">{item.subtitle}</p>}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
