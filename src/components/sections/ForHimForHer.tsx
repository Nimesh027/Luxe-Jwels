"use client";

import Image from "next/image";
import Link from "next/link";
import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import { useAppSelector } from "@/store/hooks";

export default function ForHimForHer() {
  const tiles = useAppSelector((state) => state.siteContent.forHimForHer);

  // Curated category highlights and tags for enhanced luxury context
  const highlightsMap: Record<string, { badge: string; categories: string[] }> = {
    "for-him": {
      badge: "DISTINGUISHED & BOLD",
      categories: ["Signet Rings", "Cuban Chains", "Onyx Bracelets"],
    },
    "for-her": {
      badge: "GRACEFUL & RADIANT",
      categories: ["Solitaire Rings", "Diamond Chokers", "Tennis Bracelets"],
    },
  };

  return (
    <Section className="bg-white">
      <SectionTitle
        title="Curated for Him & Her"
        description="Distinctive fine jewellery tailored for individuality and timeless elegance."
        align="center"
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
        {tiles.map((tile) => {
          const meta = highlightsMap[tile.id] || {
            badge: "FEATURED EDIT",
            categories: ["Handcrafted", "Certified Gold", "Natural Diamonds"],
          };

          return (
            <Link
              key={tile.id}
              href={tile.href}
              className="group relative block min-h-[460px] sm:min-h-[500px] lg:min-h-[540px] w-full overflow-hidden rounded-3xl bg-ink text-cream shadow-md transition-all duration-500 hover:shadow-2xl"
            >
              {/* Background Image with Smooth Hover Zoom */}
              <Image
                src={tile.image}
                alt={tile.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:brightness-105"
              />

              {/* Multi-layered Vignette / Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/20 transition-opacity duration-500 group-hover:opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-transparent to-transparent" />

              {/* Subtle Gold Border Glow on Hover */}
              <div className="absolute inset-0 rounded-3xl border border-white/10 transition-colors duration-500 group-hover:border-gold/50" />

              {/* Content Overlay */}
              <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-8 lg:p-10">
                {/* Top Row: Badge + Corner Arrow Indicator */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-ink/50 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-cream/90 backdrop-blur-md transition-colors duration-300 group-hover:border-gold/60 group-hover:text-gold">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
                    {meta.badge}
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 bg-cream/10 text-cream backdrop-blur-md transition-all duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-ink group-hover:rotate-[-45deg]">
                    <ArrowRightIcon className="h-4 w-4" />
                  </span>
                </div>

                {/* Bottom Details */}
                <div className="flex flex-col gap-4">
                  {/* Category Pills */}
                  <div className="flex flex-wrap gap-2">
                    {meta.categories.map((cat, idx) => (
                      <span
                        key={idx}
                        className="rounded-full bg-cream/10 px-3 py-1 text-caption text-cream/80 backdrop-blur-xs transition-colors duration-300 group-hover:bg-cream/15 group-hover:text-cream"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>

                  <div>
                    <h3 className="font-display text-h2 font-normal text-cream sm:text-h2 lg:text-h1">
                      {tile.title}
                    </h3>
                    <div className="mt-2 flex items-center gap-3">
                      <span className="h-[2px] w-8 bg-gold transition-all duration-500 group-hover:w-14" />
                      <p className="text-small font-light tracking-wide text-cream/85 sm:text-body">
                        {tile.tagline}
                      </p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-2">
                    <span className="inline-flex items-center gap-2.5 rounded-full bg-gold px-6 py-3 text-caption font-semibold uppercase tracking-wider text-ink shadow-lg shadow-gold/10 transition-all duration-300 group-hover:bg-cream group-hover:shadow-gold/25">
                      <span>{tile.cta}</span>
                      <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}
