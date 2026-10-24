"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Gem, Shield, Award, Sparkles, CheckCircle2 } from "lucide-react";
import {
  goldGuidesData,
  silverGuidesData,
  diamondTypesGuidesData,
  diamondShapesData,
} from "@/data";
import PageHero from "@/components/common/PageHero";
import GuideTabs, { guideCategoryTabs, guideHeroImages } from "./GuideTabs";

type FilterTab = "all" | "gold" | "silver" | "diamond" | "shapes";

export default function GuideHubClient() {
  const [activeTab, setActiveTab] = useState<FilterTab>("all");

  return (
    <div className="min-h-screen bg-cream text-foreground">
      <PageHero
        title="The Guide & Learn Hub"
        subtitle="Master the metallurgy, hallmarks and cut geometry behind the world’s finest precious metals and gemstones."
        image={guideHeroImages.all}
        breadcrumbs={[{ label: "Guide & Learn" }]}
      />

      <GuideTabs
        label="Filter guides"
        activeId={activeTab === "shapes" ? "shape" : activeTab}
        tabs={guideCategoryTabs.map((tab) => ({
          ...tab,
          href: undefined,
          onSelect: () => setActiveTab((tab.id === "shape" ? "shapes" : tab.id) as FilterTab),
        }))}
      />

      {/* 2. SECTION 1: GOLD KARAT GUIDES */}
      {(activeTab === "all" || activeTab === "gold") && (
        <section className="container py-12 sm:py-14 border-b border-border">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="flex items-center gap-2 text-eyebrow text-gold mb-2">
                <Award className="w-3.5 h-3.5" />
                Metallurgy & Purity
              </div>
              <h2 className="font-display text-h2 font-semibold">Gold Purity & Karat Guide</h2>
              <p className="mt-1 text-[15px] text-muted">
                Understand the difference between 24K, 22K, 18K, 14K, and 9K solid gold.
              </p>
            </div>
            <Link
              href="/guide/gold"
              className="text-[14px] font-semibold tracking-wide text-gold hover:text-foreground inline-flex items-center gap-1.5"
            >
              View Gold Hub
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {goldGuidesData.map((item) => (
              <Link
                key={item.slug}
                href={`/guide/gold/${item.slug}`}
                className="group rounded-[var(--radius-card)] bg-white border border-border shadow-xs hover:shadow-lg hover:border-gold/40 transition-all flex flex-col overflow-hidden text-center"
              >
                <div className="relative aspect-square w-full bg-cream overflow-hidden p-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(min-width: 1024px) 20vw, 50vw"
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 text-[12.5px] font-mono bg-white/90 px-2 py-0.5 border border-border">
                    {item.hallmarkOrStamp}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-h5 font-semibold text-foreground group-hover:text-gold transition-colors">
                      {item.shortName}
                    </h3>
                    <div className="text-[12.5px] font-medium text-gold mt-0.5">
                      {item.purityOrOrigin}
                    </div>
                    <p className="mt-2 text-[14px] text-muted line-clamp-2">
                      {item.tagline}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-border flex items-center justify-center gap-1 text-[14px] font-semibold tracking-wide text-gold">
                    <span>Learn More</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* 3. SECTION 2: PRECIOUS SILVER STANDARDS */}
      {(activeTab === "all" || activeTab === "silver") && (
        <section className="container py-12 sm:py-14 border-b border-border">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="flex items-center gap-2 text-eyebrow text-gold mb-2">
                <Shield className="w-3.5 h-3.5" />
                Hallmarks & Resistance
              </div>
              <h2 className="font-display text-h2 font-semibold">Precious Silver Standards Guide</h2>
              <p className="mt-1 text-[15px] text-muted">
                925 Sterling, 999 Fine Silver, Germanium Argentium, Oxidized Antique, and 958 Britannia.
              </p>
            </div>
            <Link
              href="/guide/silver"
              className="text-[14px] font-semibold tracking-wide text-gold hover:text-foreground inline-flex items-center gap-1.5"
            >
              View Silver Hub
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {silverGuidesData.map((item) => (
              <Link
                key={item.slug}
                href={`/guide/silver/${item.slug}`}
                className="group rounded-[var(--radius-card)] bg-white border border-border shadow-xs hover:shadow-lg hover:border-gold/40 transition-all flex flex-col overflow-hidden text-center"
              >
                <div className="relative aspect-square w-full bg-cream overflow-hidden p-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(min-width: 1024px) 20vw, 50vw"
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 text-[12.5px] font-mono bg-white/90 px-2 py-0.5 border border-border">
                    {item.hallmarkOrStamp}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-h5 font-semibold text-foreground group-hover:text-gold transition-colors">
                      {item.shortName}
                    </h3>
                    <div className="text-[12.5px] font-medium text-gold mt-0.5">
                      {item.purityOrOrigin}
                    </div>
                    <p className="mt-2 text-[14px] text-muted line-clamp-2">
                      {item.tagline}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-border flex items-center justify-center gap-1 text-[14px] font-semibold tracking-wide text-gold">
                    <span>Learn More</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* 4. SECTION 3: DIAMOND TYPES & GEMSTONES */}
      {(activeTab === "all" || activeTab === "diamond") && (
        <section className="container py-12 sm:py-14 border-b border-border">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="flex items-center gap-2 text-eyebrow text-gold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                Gemological Science
              </div>
              <h2 className="font-display text-h2 font-semibold">Diamond Types & Gemstones</h2>
              <p className="mt-1 text-[15px] text-muted">
                Compare Natural Earth-Mined, CVD Lab-Grown, HPHT Lab-Grown, and Moissanite.
              </p>
            </div>
            <Link
              href="/guide/diamond"
              className="text-[14px] font-semibold tracking-wide text-gold hover:text-foreground inline-flex items-center gap-1.5"
            >
              View Diamond Types Hub
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {diamondTypesGuidesData.map((item) => (
              <Link
                key={item.slug}
                href={`/guide/diamond/${item.slug}`}
                className="group rounded-[var(--radius-card)] bg-white border border-border shadow-xs hover:shadow-lg hover:border-gold/40 transition-all flex flex-col overflow-hidden text-center"
              >
                <div className="relative aspect-square w-full bg-cream overflow-hidden p-6">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 text-[12.5px] font-mono bg-white/90 px-2 py-0.5 border border-border">
                    {item.hallmarkOrStamp}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-gold transition-colors">
                      {item.shortName}
                    </h3>
                    <div className="text-xs font-medium text-gold mt-0.5">
                      {item.purityOrOrigin}
                    </div>
                    <p className="mt-3 text-[14px] text-muted line-clamp-3">
                      {item.tagline}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border flex items-center justify-center gap-1 text-[14px] font-semibold tracking-wide text-gold">
                    <span>View Science & Specs</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* 5. SECTION 4: DIAMOND SHAPES GUIDE */}
      {(activeTab === "all" || activeTab === "shapes") && (
        <section className="container py-12 sm:py-14">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="flex items-center gap-2 text-eyebrow text-gold mb-2">
                <Gem className="w-3.5 h-3.5" />
                Cut Proportions & 4Cs
              </div>
              <h2 className="font-display text-h2 font-semibold">12 Iconic Diamond Shapes</h2>
              <p className="mt-1 text-[15px] text-muted">
                Round, Oval, Emerald, Princess, Cushion, Pear, Radiant, Marquise, Asscher, Heart, and Baguettes.
              </p>
            </div>
            <Link
              href="/guide/shape"
              className="text-[14px] font-semibold tracking-wide text-gold hover:text-foreground inline-flex items-center gap-1.5"
            >
              All 12 Diamond Shapes
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-px overflow-hidden border border-border bg-border sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {diamondShapesData.map((shape) => (
              <Link
                key={shape.id}
                href={`/guide/shape/${shape.slug || shape.id}`}
                className="group bg-white p-5 transition-colors hover:bg-muted-bg/60 flex flex-col items-center text-center"
              >
                <div className="relative mb-4 aspect-square w-full bg-muted-bg">
                  <Image
                    src={shape.image}
                    alt={`${shape.name} cut diamond`}
                    fill
                    sizes="(min-width: 768px) 25vw, 50vw"
                    className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="text-[14px] font-semibold tracking-wide text-gold">
                  {shape.name}
                </div>
                <div className="text-[13px] text-muted mt-1">
                  {shape.specs?.facetCount || "Brilliant Cut"}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* 6. CONCIERGE BANNER */}
      <section className="theme-dark bg-ink text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="mx-auto max-w-3xl">
          <span className="text-eyebrow text-gold block mb-2">
            Complimentary Service
          </span>
          <h2 className="font-display text-h2 font-semibold mb-4">
            Custom Ring & Material Consultation
          </h2>
          <p className="text-stone-300 text-sm max-w-xl mx-auto mb-8 leading-relaxed">
            Need guidance matching the ideal gold karat with your chosen diamond or moissanite center stone? Speak with our in-house goldsmiths and GIA alumni.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-brand text-white px-8 py-3.5 text-[14px] font-semibold tracking-wide hover:bg-white hover:text-black transition-colors"
          >
            Connect With Concierge
          </Link>
        </div>
      </section>
    </div>
  );
}
