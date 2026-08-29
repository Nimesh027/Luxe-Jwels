"use client";

import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";
import { featureIconComponents, CertifiedIcon, CareIcon, ShippingIcon, ReturnsIcon } from "@/components/icons/FeatureIcons";
import { useAppSelector } from "@/store/hooks";

export default function WhyChooseUs() {
  const items = useAppSelector((state) => state.siteContent.whyChooseUs);

  // Icon mapping with fallback
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    certified: CertifiedIcon,
    care: CareIcon,
    shipping: ShippingIcon,
    returns: ReturnsIcon,
  };

  return (
    <Section>
      {/* Premium Centered Section Heading */}
      <SectionTitle
        // tagline="THE LUXE COMMITMENT"
        title="The Luxe Jewels Difference"
        description="Uncompromising purity, artisan heritage, and lifelong peace of mind crafted into every design."
        align="center"
      />

      {/* 4 Responsive Benefit Cards with Whitespace & Hover Accents */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {items.map((item) => {
          const IconComponent = iconMap[item.icon] || featureIconComponents[item.icon] || CertifiedIcon;

          return (
            <div
              key={item.id}
              className="group relative flex flex-col items-center text-center p-7 sm:p-8 rounded-2xl bg-surface border border-gold/25 hover:border-gold/70 shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Gold Icon Halo Container */}
              <div className="w-16 h-16 rounded-full bg-[#fbf8f2] border border-gold/40 flex items-center justify-center p-3.5 shadow-xs group-hover:scale-110 group-hover:border-gold group-hover:bg-gold/10 group-hover:shadow-md group-hover:shadow-gold/10 transition-all duration-300 mb-4">
                <IconComponent className="w-8 h-8 text-gold/90 group-hover:text-gold transition-colors duration-300" />
              </div>

              {/* Title */}
              <h3 className="font-display !text-h6 font-medium text-ink tracking-tight group-hover:text-wine transition-colors duration-300">
                {item.title}
              </h3>

              {/* Shortened Description */}
              <p className="mt-2 text-caption sm:text-[13px] text-muted leading-relaxed">
                {item.subtitle}
              </p>

              {/* Micro Trust Tag */}
              {item.trustBadge && (
                <div className="mt-5 pt-3 border-t border-border/40 w-full flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-wide text-gold">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                    {item.trustBadge}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
