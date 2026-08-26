"use client";

import Image from "next/image";

interface ShopHeroProps {
  title?: string;
  subtitle?: string;
  badge?: string;
  imageSrc?: string;
}

export default function ShopHero({
  title = "Shop Fine Jewellery",
  subtitle = "Explore our complete range of certified luxury jewellery — meticulously handcrafted in hallmarked 18K gold & ethically sourced diamonds.",
  badge = "Luxe Jewels Collection",
  imageSrc = "/images/banners/gold-star-jewellery-model.png",
}: ShopHeroProps) {
  return (
    <div className="relative overflow-hidden bg-ink py-16 md:py-20 lg:py-24 border-b border-border/40">
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt={title}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[75%_center] opacity-40 mix-blend-luminosity"
      />

      {/* Rich Radial & Linear Gradients for depth and readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 via-55% to-ink/40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(212,175,55,0.15),transparent_50%)]" />

      {/* Gold Border Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

      {/* Content Container */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          {/* Tagline Badge */}
          {badge && (
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 mb-5 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">
                {badge}
              </p>
            </div>
          )}

          {/* Main Title */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[56px] text-cream font-light leading-[1.1] tracking-tight drop-shadow-sm">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="mt-4 text-sm sm:text-base text-cream/80 max-w-lg leading-relaxed font-light">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
