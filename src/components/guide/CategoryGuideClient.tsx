"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Gem } from "lucide-react";
import type { GuideCategoryOverview } from "@/types/guide";

interface CategoryGuideClientProps {
  overview: GuideCategoryOverview;
}

export default function CategoryGuideClient({ overview }: CategoryGuideClientProps) {
  const { id: category, title, tagline, description, items, badge } = overview;
  const isShapeCategory = category === "shape" || category === "shapes";

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-foreground">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden border-b border-black/5 bg-white py-16 md:py-24 px-6">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#C5A059]/10 blur-[130px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <Link
            href="/guide"
            className="mb-6 inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] text-[#C5A059] hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Guide & Learn Hub
          </Link>

          <div className="mb-4 flex items-center justify-center gap-2 text-[11px] font-bold tracking-[0.35em] text-[#C5A059]">
            <Gem className="h-3.5 w-3.5" />
            {badge}
          </div>

          <h1 className="mb-5 text-4xl font-bold tracking-tight md:text-6xl text-foreground">
            {title}
          </h1>

          <p className="mx-auto mb-4 max-w-2xl text-lg font-heading italic text-foreground/80">
            &ldquo;{tagline}&rdquo;
          </p>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {description}
          </p>

          {/* Quick Category Switcher Tabs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            <Link
              href="/guide/gold"
              className={`px-5 py-2.5 text-xs font-bold tracking-[0.2em] transition-all border ${ category === "gold" ? "bg-[#0D0D0D] text-white border-[#0D0D0D]" : "bg-[#F7F5EF] text-foreground/70 hover:text-foreground hover:bg-white border-transparent" }`}
            >
              Gold Karats (5)
            </Link>
            <Link
              href="/guide/silver"
              className={`px-5 py-2.5 text-xs font-bold tracking-[0.2em] transition-all border ${ category === "silver" ? "bg-[#0D0D0D] text-white border-[#0D0D0D]" : "bg-[#F7F5EF] text-foreground/70 hover:text-foreground hover:bg-white border-transparent" }`}
            >
              Silver Standards (5)
            </Link>
            <Link
              href="/guide/diamond"
              className={`px-5 py-2.5 text-xs font-bold tracking-[0.2em] transition-all border ${ category === "diamond" ? "bg-[#0D0D0D] text-white border-[#0D0D0D]" : "bg-[#F7F5EF] text-foreground/70 hover:text-foreground hover:bg-white border-transparent" }`}
            >
              Diamond Types (4)
            </Link>
            <Link
              href="/guide/shape"
              className={`px-5 py-2.5 text-xs font-bold tracking-[0.2em] transition-all border ${ isShapeCategory ? "bg-[#0D0D0D] text-white border-[#0D0D0D]" : "bg-[#F7F5EF] text-foreground/70 hover:text-foreground hover:bg-white border-transparent" }`}
            >
              Diamond Shapes (12)
            </Link>
          </div>
        </div>
      </section>

      {/* 2. STANDARDS / SHAPES CATALOG GRID */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-[10px] font-bold tracking-[0.35em] text-[#C5A059] block mb-2">
              Collection Overview
            </span>
            <h2 className="text-3xl font-bold">
              {isShapeCategory
                ? "Explore All 12 Diamond Shapes & Silhouettes"
                : `Explore All ${items.length} ${category.toUpperCase()} Standards`}
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-md">
            {isShapeCategory
              ? "Click on any diamond silhouette to explore its masterclass guide, including cut proportions, facet geometry, light performance, and matching fine jewellery."
              : "Click on any standard to explore its masterclass guide, including purity breakdowns, process diagrams, specifications, and matching fine jewellery."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <Link
              key={item.slug}
              href={`/guide/${isShapeCategory ? "shape" : category}/${item.slug}`}
              className="group bg-white border border-black/5 shadow-xs hover:shadow-xl hover:border-[#C5A059]/40 transition-all flex flex-col overflow-hidden"
            >
              {/* Image Frame */}
              <div className="relative aspect-square w-full bg-stone-50 overflow-hidden p-6">
                <div className="absolute inset-4 border border-[#C5A059]/15 pointer-events-none transition-all group-hover:inset-3" />
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className="object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 text-[10px] font-mono tracking-widest bg-white/90 px-2.5 py-1 border border-black/5">
                  {item.hallmarkOrStamp}
                </div>
                <div className="absolute bottom-4 right-4 text-[10px] font-bold tracking-wider text-[#C5A059] bg-white/90 px-2.5 py-1 border border-[#C5A059]/30">
                  {item.purityOrOrigin}
                </div>
              </div>

              {/* Content Box */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-[#C5A059] transition-colors">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-xs font-heading italic text-foreground/70">
                    &ldquo;{item.tagline}&rdquo;
                  </p>
                  <p className="mt-4 text-xs text-muted-foreground leading-relaxed line-clamp-3">
                    {item.overview}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-black/5">
                  {/* Quick specs pill */}
                  <div className="grid grid-cols-2 gap-2 mb-4 text-[11px]">
                    {item.metrics.slice(0, 2).map((m, i) => (
                      <div key={i} className="p-2 bg-stone-50 rounded-xs">
                        <span className="text-[10px] text-muted-foreground block">{m.label}</span>
                        <span className="font-bold text-foreground">{m.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs font-bold tracking-[0.2em] text-[#C5A059] group-hover:translate-x-1 transition-transform">
                    <span>View Masterclass</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. COMPARISON MATRIX TABLE */}
      <section className="bg-white border-t border-black/5 py-16 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="text-[10px] font-bold tracking-[0.35em] text-[#C5A059] block mb-2">
              At a Glance
            </span>
            <h2 className="text-3xl font-bold">
              {isShapeCategory
                ? "12 Iconic Diamond Shapes Proportions & Comparison Matrix"
                : `${category.toUpperCase()} Standards Comparison Table`}
            </h2>
            <p className="mt-3 text-sm text-muted-foreground max-w-2xl mx-auto">
              {isShapeCategory
                ? "Compare facet geometry, length-to-width ratios, light performance, and ideal jewelry mountings across all 12 iconic diamond silhouettes."
                : "Compare purity percentages, official assay hallmarks, durability ratings, and recommended settings at a glance."}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border border-black/5 bg-white shadow-xs">
              <thead>
                <tr className="bg-stone-50 border-b border-black/5 text-[11px] tracking-wider text-muted-foreground font-bold">
                  <th className="p-4">{isShapeCategory ? "Silhouette & Shape" : "Standard"}</th>
                  <th className="p-4">{isShapeCategory ? "Shape Family" : "Purity / Origin"}</th>
                  <th className="p-4">{isShapeCategory ? "Facet Count" : "Hallmark"}</th>
                  <th className="p-4">{isShapeCategory ? "Ideal Cut Ratio" : "Durability / Hardness"}</th>
                  <th className="p-4">Best For</th>
                  <th className="p-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5 text-xs">
                {items.map((item) => (
                  <tr key={item.slug} className="hover:bg-[#F7F4EF]/50 transition-colors">
                    <td className="p-4 font-bold text-foreground">
                      {item.shortName}
                    </td>
                    <td className="p-4 text-foreground/80">
                      {item.purityOrOrigin}
                    </td>
                    <td className="p-4 font-mono font-bold text-[#C5A059]">
                      {item.hallmarkOrStamp}
                    </td>
                    <td className="p-4 text-foreground/80">
                      {isShapeCategory
                        ? item.metrics.find((m) => m.label.toLowerCase().includes("ratio"))?.value || "1.00"
                        : item.metrics.find((m) => m.label.toLowerCase().includes("hardness") || m.label.toLowerCase().includes("wear") || m.label.toLowerCase().includes("tarnish"))?.value || "Certified Grade"}
                    </td>
                    <td className="p-4 text-muted-foreground max-w-xs truncate">
                      {item.bestFor.summary}
                    </td>
                    <td className="p-4 text-right">
                      <Link
                        href={`/guide/${isShapeCategory ? "shape" : category}/${item.slug}`}
                        className="inline-flex items-center gap-1 font-bold text-[#C5A059] hover:text-foreground tracking-wider text-[11px]"
                      >
                        Details
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. LUXURY CONCIERGE BANNER */}
      <section className="bg-stone-950 text-white py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#C5A059]/15 via-transparent to-transparent pointer-events-none" />
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <span className="text-[11px] font-bold tracking-[0.35em] text-[#C5A059] block mb-3">
            Bespoke Consultation
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            {isShapeCategory
              ? "Need Guidance Selecting the Ideal Silhouette?"
              : "Need Expert Precious Metal Guidance?"}
          </h2>
          <p className="text-base text-stone-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            {isShapeCategory
              ? "Our certified gemologists offer complimentary virtual consultations to guide your selection of diamond shapes, finger coverage, optical brilliance, and custom ring mountings."
              : "Our master goldsmiths and gemologists are available for complimentary one-on-one consultations to guide your precious metal selection for lifetime wear."}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-[#C5A059] text-white px-8 py-3.5 text-xs font-bold tracking-[0.2em] hover:bg-white hover:text-black transition-colors"
            >
              Book Complimentary Consultation
            </Link>
            <Link
              href="/guide"
              className="border border-white/20 text-white px-8 py-3.5 text-xs font-bold tracking-[0.2em] hover:border-[#C5A059] hover:text-[#C5A059] transition-colors"
            >
              Explore All Guides
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
