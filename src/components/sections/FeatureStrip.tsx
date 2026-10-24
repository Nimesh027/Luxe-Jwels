"use client";

import {
  ShippingIcon,
  ReturnsIcon,
  CertifiedIcon,
  SecureIcon,
} from "@/components/icons/FeatureIcons";

const features = [
  {
    id: "f-shipping",
    icon: ShippingIcon,
    title: "Free Shipping",
    subtitle: "On orders above ₹2,999",
  },
  {
    id: "f-returns",
    icon: ReturnsIcon,
    title: "30 Days Easy Return",
    subtitle: "Hassle Free",
  },
  {
    id: "f-certified",
    icon: CertifiedIcon,
    title: "Certified Jewellery",
    subtitle: "100% Authentic",
  },
  {
    id: "f-secure",
    icon: SecureIcon,
    title: "Secure Payments",
    subtitle: "Multiple Options",
  },
];

export default function FeatureStrip() {
  return (
    <section className="w-full bg-[#FAF7F2] py-7 sm:py-9">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-center justify-between">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`flex items-center gap-3.5 sm:gap-4 justify-start sm:justify-center ${ idx < features.length - 1 ? "md:border-r md:border-[#E8E2D8]/80 pr-4" : "" }`}
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#F2EBE0] border border-[#DDD1BF] flex items-center justify-center text-[#1A1815] shrink-0 shadow-xs group-hover:border-[#1A1815] transition-colors">
                  <Icon className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-[#1A1815]" />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-display text-[15px] sm:text-[16px] font-semibold text-[#141414] leading-snug">
                    {item.title}
                  </h3>
                  <span className="font-body text-[12px] sm:text-[12.5px] text-[#78716A] font-normal leading-tight">
                    {item.subtitle}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
