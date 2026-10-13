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
import Button from "@/components/ui/Button";

type FilterTab = "all" | "gold" | "silver" | "diamond" | "shapes";

export default function GuideHubClient() {
  const [activeTab, setActiveTab] = useState<FilterTab>("all");

  const totalCount =
    goldGuidesData.length +
    silverGuidesData.length +
    diamondTypesGuidesData.length +
    diamondShapesData.length;

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-foreground">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden border-b border-black/5 bg-white py-16 md:py-24 px-6">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[#C5A059]/10 blur-[140px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.35em] text-[#C5A059]">
            <Gem className="h-3.5 w-3.5" />
            Luxe Jewels Academy & Gemology Center
          </div>

          <h1 className="mb-5 text-4xl sm:text-5xl font-bold tracking-tight md:text-7xl text-foreground">
            The Guide & Learn Hub
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Master the metallurgy, hallmarks, physics, and cut geometry behind the world’s finest precious metals and gemstones. Explore certified guides for Gold, Silver, Diamond Types, and Diamond Shapes.
          </p>

          {/* Filter Pills */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            <Button
              variant="unstyled"
              onClick={() => setActiveTab("all")}
              className={`cursor-pointer px-5 py-2.5 text-xs font-bold uppercase tracking-[0.2em] transition-all border ${
                activeTab === "all"
                  ? "bg-[#0D0D0D] text-white border-[#0D0D0D] shadow-xs"
                  : "bg-[#F7F5EF] text-foreground/70 hover:text-foreground hover:bg-white border-transparent"
              }`}
            >
              All Guides ({totalCount})
            </Button>
            <Button
              variant="unstyled"
              onClick={() => setActiveTab("gold")}
              className={`cursor-pointer px-5 py-2.5 text-xs font-bold uppercase tracking-[0.2em] transition-all border ${
                activeTab === "gold"
                  ? "bg-[#0D0D0D] text-white border-[#0D0D0D] shadow-xs"
                  : "bg-[#F7F5EF] text-foreground/70 hover:text-foreground hover:bg-white border-transparent"
              }`}
            >
              Gold Karats ({goldGuidesData.length})
            </Button>
            <Button
              variant="unstyled"
              onClick={() => setActiveTab("silver")}
              className={`cursor-pointer px-5 py-2.5 text-xs font-bold uppercase tracking-[0.2em] transition-all border ${
                activeTab === "silver"
                  ? "bg-[#0D0D0D] text-white border-[#0D0D0D] shadow-xs"
                  : "bg-[#F7F5EF] text-foreground/70 hover:text-foreground hover:bg-white border-transparent"
              }`}
            >
              Silver Standards ({silverGuidesData.length})
            </Button>
            <Button
              variant="unstyled"
              onClick={() => setActiveTab("diamond")}
              className={`cursor-pointer px-5 py-2.5 text-xs font-bold uppercase tracking-[0.2em] transition-all border ${
                activeTab === "diamond"
                  ? "bg-[#0D0D0D] text-white border-[#0D0D0D] shadow-xs"
                  : "bg-[#F7F5EF] text-foreground/70 hover:text-foreground hover:bg-white border-transparent"
              }`}
            >
              Diamond Types ({diamondTypesGuidesData.length})
            </Button>
            <Button
              variant="unstyled"
              onClick={() => setActiveTab("shapes")}
              className={`cursor-pointer px-5 py-2.5 text-xs font-bold uppercase tracking-[0.2em] transition-all border ${
                activeTab === "shapes"
                  ? "bg-[#0D0D0D] text-white border-[#0D0D0D] shadow-xs"
                  : "bg-[#F7F5EF] text-foreground/70 hover:text-foreground hover:bg-white border-transparent"
              }`}
            >
              Diamond Shapes ({diamondShapesData.length})
            </Button>
          </div>
        </div>
      </section>

      {/* 2. SECTION 1: GOLD KARAT GUIDES */}
      {(activeTab === "all" || activeTab === "gold") && (
        <section className="mx-auto max-w-7xl px-6 py-16 border-b border-black/5">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.35em] text-[#C5A059] mb-2">
                <Award className="w-3.5 h-3.5" />
                Metallurgy & Purity
              </div>
              <h2 className="text-3xl font-bold">Gold Purity & Karat Guide</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Understand the difference between 24K, 22K, 18K, 14K, and 9K solid gold.
              </p>
            </div>
            <Link
              href="/guide/gold"
              className="text-xs font-bold uppercase tracking-[0.2em] text-[#C5A059] hover:text-foreground inline-flex items-center gap-1.5"
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
                className="group bg-white border border-black/5 shadow-xs hover:shadow-lg hover:border-[#C5A059]/40 transition-all flex flex-col overflow-hidden text-center"
              >
                <div className="relative aspect-square w-full bg-stone-50 overflow-hidden p-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(min-width: 1024px) 20vw, 50vw"
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 text-[9px] font-mono uppercase bg-white/90 px-2 py-0.5 border border-black/5">
                    {item.hallmarkOrStamp}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-[#C5A059] transition-colors">
                      {item.shortName}
                    </h3>
                    <div className="text-[11px] font-medium text-[#C5A059] mt-0.5">
                      {item.purityOrOrigin}
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground line-clamp-2">
                      {item.tagline}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-black/5 flex items-center justify-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[#C5A059]">
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
        <section className="mx-auto max-w-7xl px-6 py-16 border-b border-black/5">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.35em] text-[#C5A059] mb-2">
                <Shield className="w-3.5 h-3.5" />
                Hallmarks & Resistance
              </div>
              <h2 className="text-3xl font-bold">Precious Silver Standards Guide</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                925 Sterling, 999 Fine Silver, Germanium Argentium, Oxidized Antique, and 958 Britannia.
              </p>
            </div>
            <Link
              href="/guide/silver"
              className="text-xs font-bold uppercase tracking-[0.2em] text-[#C5A059] hover:text-foreground inline-flex items-center gap-1.5"
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
                className="group bg-white border border-black/5 shadow-xs hover:shadow-lg hover:border-[#C5A059]/40 transition-all flex flex-col overflow-hidden text-center"
              >
                <div className="relative aspect-square w-full bg-stone-50 overflow-hidden p-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(min-width: 1024px) 20vw, 50vw"
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 text-[9px] font-mono uppercase bg-white/90 px-2 py-0.5 border border-black/5">
                    {item.hallmarkOrStamp}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-[#C5A059] transition-colors">
                      {item.shortName}
                    </h3>
                    <div className="text-[11px] font-medium text-[#C5A059] mt-0.5">
                      {item.purityOrOrigin}
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground line-clamp-2">
                      {item.tagline}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-black/5 flex items-center justify-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[#C5A059]">
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
        <section className="mx-auto max-w-7xl px-6 py-16 border-b border-black/5">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.35em] text-[#C5A059] mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                Gemological Science
              </div>
              <h2 className="text-3xl font-bold">Diamond Types & Gemstones</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Compare Natural Earth-Mined, CVD Lab-Grown, HPHT Lab-Grown, and Moissanite.
              </p>
            </div>
            <Link
              href="/guide/diamond"
              className="text-xs font-bold uppercase tracking-[0.2em] text-[#C5A059] hover:text-foreground inline-flex items-center gap-1.5"
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
                className="group bg-white border border-black/5 shadow-xs hover:shadow-lg hover:border-[#C5A059]/40 transition-all flex flex-col overflow-hidden text-center"
              >
                <div className="relative aspect-square w-full bg-stone-50 overflow-hidden p-6">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 text-[9px] font-mono uppercase bg-white/90 px-2 py-0.5 border border-black/5">
                    {item.hallmarkOrStamp}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-[#C5A059] transition-colors">
                      {item.shortName}
                    </h3>
                    <div className="text-xs font-medium text-[#C5A059] mt-0.5">
                      {item.purityOrOrigin}
                    </div>
                    <p className="mt-3 text-xs text-muted-foreground line-clamp-3">
                      {item.tagline}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-black/5 flex items-center justify-center gap-1 text-xs font-bold uppercase tracking-wider text-[#C5A059]">
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
        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.35em] text-[#C5A059] mb-2">
                <Gem className="w-3.5 h-3.5" />
                Cut Proportions & 4Cs
              </div>
              <h2 className="text-3xl font-bold">12 Iconic Diamond Shapes</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Round, Oval, Emerald, Princess, Cushion, Pear, Radiant, Marquise, Asscher, Heart, and Baguettes.
              </p>
            </div>
            <Link
              href="/guide/shape"
              className="text-xs font-bold uppercase tracking-[0.2em] text-[#C5A059] hover:text-foreground inline-flex items-center gap-1.5"
            >
              All 12 Diamond Shapes
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-px overflow-hidden border border-black/5 bg-black/5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {diamondShapesData.map((shape) => (
              <Link
                key={shape.id}
                href={`/guide/shape/${shape.slug || shape.id}`}
                className="group bg-white p-5 transition-colors hover:bg-muted/60 flex flex-col items-center text-center"
              >
                <div className="relative mb-4 aspect-square w-full bg-muted">
                  <Image
                    src={shape.image}
                    alt={`${shape.name} cut diamond`}
                    fill
                    sizes="(min-width: 768px) 25vw, 50vw"
                    className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C5A059]">
                  {shape.name}
                </div>
                <div className="text-[11px] text-muted-foreground mt-1">
                  {shape.specs?.facetCount || "Brilliant Cut"}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* 6. CONCIERGE BANNER */}
      <section className="bg-stone-950 text-white py-16 px-6 text-center">
        <div className="mx-auto max-w-3xl">
          <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#C5A059] block mb-2">
            Complimentary Service
          </span>
          <h2 className="text-3xl font-bold mb-4">
            Custom Ring & Material Consultation
          </h2>
          <p className="text-stone-300 text-sm max-w-xl mx-auto mb-8 leading-relaxed">
            Need guidance matching the ideal gold karat with your chosen diamond or moissanite center stone? Speak with our in-house goldsmiths and GIA alumni.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#C5A059] text-white px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-colors"
          >
            Connect With Concierge
          </Link>
        </div>
      </section>
    </div>
  );
}
