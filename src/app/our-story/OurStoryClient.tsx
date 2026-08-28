"use client";

import Image from "next/image";
import Section from "@/components/common/Section";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import FeatureStrip from "@/components/sections/FeatureStrip";
import Instagram from "@/components/sections/Instagram";

export default function OurStoryClient() {
  const pillars = [
    {
      icon: "✨",
      title: "100% BIS Hallmarked Purity",
      description: "Every creation is crafted in solid 22K and 18K gold, officially hallmarked by Government of India certified testing centers.",
    },
    {
      icon: "💎",
      title: "Ethically Sourced Diamonds",
      description: "We use exclusively natural, conflict-free EF-VVS certified diamonds independently graded by IGI and SGL laboratories.",
    },
    {
      icon: "👑",
      title: "300+ Legacy Artisans",
      description: "Handcrafted by master goldsmiths whose families have preserved royal Indian jewellery crafting techniques for generations.",
    },
    {
      icon: "🛡️",
      title: "Lifetime Exchange & Buyback",
      description: "An enduring investment. We guarantee lifetime transparent exchange and buyback values at prevailing gold market rates.",
    },
  ];

  return (
    <>
      <Section className="py-10 sm:py-16 bg-gradient-to-b from-[#FAF0F2]/40 via-surface to-background">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6">

          {/* BREADCRUMB NAVIGATION */}
          <Breadcrumbs items={[{ label: "Our Story" }]} />

          {/* HERO HEADER SECTION */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
            <div className="flex items-center justify-center gap-3 mb-1">
              <span className="h-[1px] w-8 bg-gold/60" />
              <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-wine/80">Est. 1994 • Royal Jewellery House</span>
              <span className="h-[1px] w-8 bg-gold/60" />
            </div>
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl text-wine font-semibold tracking-tight leading-[1.15]">
              Crafting Timeless Heirloom Luxury
            </h1>
            <p className="text-xs sm:text-base text-muted font-light leading-relaxed max-w-2xl mx-auto">
              Luxe Jewels bridges centuries of traditional royal goldsmithing with contemporary haute joaillerie. Every creation is an embodiment of purity, elegance, and everlasting value.
            </p>
          </div>

          {/* HERITAGE BANNER IMAGE SHOWCASE */}
          <div className="group relative w-full h-[360px] sm:h-[480px] lg:h-[520px] rounded-3xl overflow-hidden shadow-xl mb-16 border border-wine/25">
            <Image
              src="/images/collections/couple-collection.jpg"
              alt="Luxe Jewels Heritage Craftsmanship"
              fill
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              priority
            />

            {/* Gradient Scrim Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/10" />

            {/* Top Right Floating Stat Badge */}
            <div className="absolute top-6 right-6 hidden sm:flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 px-4 py-2.5 shadow-lg text-white">
              <span className="text-xl">✨</span>
              <div className="text-left">
                <span className="text-xs font-bold block text-gold">30+ Years</span>
                <span className="text-[10px] text-cream/80 block">Royal Craft Heritage</span>
              </div>
            </div>

            {/* Bottom Left Glassmorphism Content Card */}
            <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-auto max-w-xl bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-white/20 p-6 sm:p-8 shadow-2xl text-white space-y-3">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">The Luxe Standard</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold leading-snug tracking-tight text-cream">
                Where Artistry Meets Pure 22K & 18K Solid Gold
              </h2>
              <p className="text-xs sm:text-sm text-cream/90 font-light leading-relaxed">
                Hand-finished by master craftsmen with meticulous attention to stone setting, polish, and comfort.
              </p>
            </div>
          </div>

          {/* LUXE PROMISES GRID */}
          <div className="mb-16">
            <div className="text-center space-y-2 mb-10">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-wine">
                Luxe Promises – Excellence You Can Trust
              </h2>
              <p className="text-xs sm:text-sm text-muted">
                Uncompromising standards designed for discerning jewellery connoisseurs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="bg-surface rounded-2xl border border-border/80 p-6 text-center space-y-3 shadow-2xs hover:border-wine/30 transition-all hover:shadow-xs"
                >
                  <div className="w-12 h-12 rounded-full bg-wine/5 text-wine flex items-center justify-center mx-auto text-xl">
                    {pillar.icon}
                  </div>
                  <h3 className="font-display font-semibold text-wine text-base">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Section>
      <FeatureStrip />
      <Instagram />
    </>
  );
}
