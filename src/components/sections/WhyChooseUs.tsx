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
              className="group relative flex flex-col items-center text-center p-7 sm:p-8 rounded-2xl bg-white border border-border hover:border-gold/60 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Dark Cream Icon Halo Container */}
              <div className="w-16 h-16 rounded-full bg-[#F5ECE0] border border-gold-soft flex items-center justify-center p-3.5 shadow-xs group-hover:scale-110 group-hover:border-gold-dark group-hover:bg-[#EFE2D0] transition-all duration-300 mb-4">
                <IconComponent className="w-8 h-8 text-gold-dark group-hover:text-gold-dark transition-colors duration-300" />
              </div>

              {/* Title */}
              <h3 className="font-display text-[17px] sm:text-[18px] font-semibold text-ink tracking-tight group-hover:text-gold transition-colors duration-300">
                {item.title}
              </h3>

              {/* Shortened Description */}
              <p className="mt-2 text-[13px] sm:text-[13.5px] text-muted leading-relaxed font-light">
                {item.subtitle}
              </p>

              {/* Micro Trust Tag */}
              {item.trustBadge && (
                <div className="mt-5 pt-3 border-t border-border w-full flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-[11.5px] font-medium tracking-wide text-gold-dark">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-dark shrink-0" />
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
