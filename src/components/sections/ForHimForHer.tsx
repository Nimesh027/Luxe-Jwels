"use client";

import Image from "next/image";
import Link from "next/link";

const promoBanners = [
  {
    id: "designer-jewellery",
    title: "Designer Jewellery",
    subtitle: "For Every Occasion",
    hasLine: true,
    image: "/images/revamp/designer-jewellery-banner.jpg",
    href: "/shop",
    cta: "Shop Now",
  },
  {
    id: "custom-jewellery",
    title: "Custom Jewellery",
    subtitle: "Bring Your Dream To Life",
    hasLine: false,
    image: "/images/revamp/custom-jewellery-banner.jpg",
    href: "/contact",
    cta: "Get Started",
  },
];

export default function ForHimForHer() {
  return (
    <section className="w-full bg-[#FCFAF8] py-6 sm:py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {promoBanners.map((banner) => (
            <div
              key={banner.id}
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#110F0D] min-h-[190px] sm:min-h-[210px] md:min-h-[225px] lg:min-h-[240px] flex items-center p-6 sm:p-8 lg:p-9 shadow-md border border-[#2D2824]"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={banner.image}
                  alt={banner.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-right sm:object-[85%_center] group-hover:scale-106 transition-transform duration-700 ease-out brightness-[0.92] contrast-[1.05]"
                />
                {/* Left Dark Warm Luxury Gradient for Pristine Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#110F0D]/95 via-[#110F0D]/75 via-45% to-transparent w-full sm:w-[70%]" />
              </div>

              {/* Content Overlay */}
              <div className="relative z-10 w-full max-w-[280px] sm:max-w-xs flex flex-col items-start text-left">
                <h3 className="font-display text-[22px] sm:text-[25px] md:text-[27px] lg:text-[29px] text-white font-normal leading-[1.18] mb-1.5 drop-shadow-sm">
                  {banner.title}
                </h3>

                <div className="flex items-center gap-2 mb-4 sm:mb-5">
                  <p className="font-body text-[12.5px] sm:text-[13.5px] text-[#DDD6CD]/90 font-light drop-shadow-xs">
                    {banner.subtitle}
                  </p>
                  {banner.hasLine && (
                    <span className="w-6 sm:w-8 h-[1px] bg-white/30 hidden sm:inline-block" />
                  )}
                </div>

                <Link
                  href={banner.href}
                  className="inline-flex items-center justify-center px-5 sm:px-6 py-2 sm:py-2.5 rounded-full border border-white/45 hover:border-white bg-black/25 hover:bg-white text-white hover:text-[#141414] text-[12.5px] sm:text-[13px] font-medium tracking-wide backdrop-blur-xs transition-all duration-200 active:scale-[0.98]"
                >
                  {banner.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
