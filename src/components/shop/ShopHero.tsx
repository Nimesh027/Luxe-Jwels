"use client";

import Image from "next/image";

interface ShopHeroProps {
  title?: string;
  subtitle?: string;
  imageSrc?: string;
}

export default function ShopHero({
  title = "Rings",
  subtitle = "Timeless designs for every occasion",
  imageSrc = "/images/revamp/ring-macro.jpg",
}: ShopHeroProps) {
  return (
    <div className="relative overflow-hidden bg-[#181512] py-12 sm:py-16 border-b border-[#332E27]">
      {/* Background Image of Rings */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-right sm:object-center brightness-[0.65] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#181512]/95 via-[#181512]/80 to-transparent w-full sm:w-[65%]" />
      </div>

      {/* Content Container */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl text-left">
          <h1 className="font-display text-[32px] sm:text-[42px] md:text-[48px] text-white font-normal leading-tight tracking-tight mb-2 drop-shadow-sm">
            {title}
          </h1>
          {subtitle && (
            <p className="font-body text-[14px] sm:text-[15.5px] text-[#DDD6CD] font-light leading-relaxed drop-shadow-xs">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
