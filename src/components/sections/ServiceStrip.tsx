"use client";

import Section from "@/components/common/Section";
import { featureIconMap } from "@/lib/icons";
import { useAppSelector } from "@/store/hooks";

export default function ServiceStrip() {
  const services = useAppSelector((state) => state.siteContent.serviceStrip);

  return (
    <Section className="bg-ink text-cream">
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
        {services.map((service) => {
          const Icon = featureIconMap[service.icon];
          return (
            <div key={service.id} className="flex items-center gap-3">
              <Icon className="text-xl text-gold" />
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-cream">
                  {service.title}
                </p>
                {service.subtitle && (
                  <p className="mt-0.5 text-[11px] text-cream/60">{service.subtitle}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
