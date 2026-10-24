"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Gem } from "lucide-react";
import type { GuideCategoryOverview } from "@/types/guide";
import PageHero from "@/components/common/PageHero";
import GuideTabs, { guideCategoryTabs, guideHeroImages, guideCategoryNames } from "./GuideTabs";

interface CategoryGuideClientProps {
  overview: GuideCategoryOverview;
}

export default function CategoryGuideClient({ overview }: CategoryGuideClientProps) {
  const { id: category, title, tagline, description, items, badge } = overview;
  const isShapeCategory = category === "shape" || category === "shapes";

  return (
    <div className="min-h-screen bg-cream text-foreground">
      <PageHero
        title={title}
        subtitle={tagline}
        image={guideHeroImages[category] ?? guideHeroImages.all}
        breadcrumbs={[{ label: "Guide & Learn", href: "/guide" }, { label: guideCategoryNames[category] ?? title }]}
      />

      <GuideTabs
        label="Guide categories"
        activeId={isShapeCategory ? "shape" : category}
        tabs={guideCategoryTabs}
      />

      {/* Introduction */}
      <section className="container pt-10 sm:pt-12">
        <div className="flex items-start gap-4 rounded-[var(--radius-card)] border border-border bg-white p-5 sm:p-6">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-soft text-gold">
            <Gem className="h-5 w-5" />
          </span>
          <div>
            <p className="text-eyebrow text-gold">{badge}</p>
            <p className="mt-1.5 text-[15.5px] leading-relaxed text-ink-soft">{description}</p>
          </div>
        </div>
      </section>

      {/* 2. STANDARDS / SHAPES CATALOG GRID */}
      <section className="container py-12 sm:py-14">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-eyebrow text-gold block mb-2">
              Collection Overview
            </span>
            <h2 className="font-display text-h2 font-semibold">
              {isShapeCategory
                ? "Explore All 12 Diamond Shapes & Silhouettes"
                : `Explore All ${items.length} ${category.charAt(0).toUpperCase() + category.slice(1)} Standards`}
            </h2>
          </div>
          <p className="text-[15px] text-muted max-w-md">
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
              className="group rounded-[var(--radius-card)] bg-white border border-border shadow-xs hover:shadow-xl hover:border-gold/40 transition-all flex flex-col overflow-hidden"
            >
              {/* Image Frame */}
              <div className="relative aspect-square w-full bg-cream overflow-hidden p-6">
                <div className="absolute inset-4 border border-gold/15 pointer-events-none transition-all group-hover:inset-3" />
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className="object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 text-[12px] font-mono tracking-widest bg-white/90 px-2.5 py-1 border border-border">
                  {item.hallmarkOrStamp}
                </div>
                <div className="absolute bottom-4 right-4 text-[14px] font-semibold tracking-wide text-gold bg-white/90 px-2.5 py-1 border border-gold/30">
                  {item.purityOrOrigin}
                </div>
              </div>

              {/* Content Box */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-h4 font-semibold text-foreground group-hover:text-gold transition-colors">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-xs font-heading italic text-foreground/70">
                    &ldquo;{item.tagline}&rdquo;
                  </p>
                  <p className="mt-4 text-[14px] text-muted leading-relaxed line-clamp-3">
                    {item.overview}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-border">
                  {/* Quick specs pill */}
                  <div className="grid grid-cols-2 gap-2 mb-4 text-[12.5px]">
                    {item.metrics.slice(0, 2).map((m, i) => (
                      <div key={i} className="p-2 bg-cream rounded-xs">
                        <span className="text-[12px] text-muted-foreground block">{m.label}</span>
                        <span className="font-bold text-foreground">{m.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-[14px] font-semibold tracking-wide text-gold group-hover:translate-x-1 transition-transform">
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
      <section className="bg-white border-t border-border py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1320px]">
          <div className="text-center mb-12">
            <span className="text-eyebrow text-gold block mb-2">
              At a Glance
            </span>
            <h2 className="font-display text-h2 font-semibold">
              {isShapeCategory
                ? "12 Iconic Diamond Shapes Proportions & Comparison Matrix"
                : `${category.charAt(0).toUpperCase() + category.slice(1)} Standards Comparison Table`}
            </h2>
            <p className="mt-3 text-[15px] text-muted max-w-2xl mx-auto">
              {isShapeCategory
                ? "Compare facet geometry, length-to-width ratios, light performance, and ideal jewelry mountings across all 12 iconic diamond silhouettes."
                : "Compare purity percentages, official assay hallmarks, durability ratings, and recommended settings at a glance."}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border border-border bg-white shadow-xs">
              <thead>
                <tr className="bg-cream border-b border-border text-[12.5px] tracking-wider text-muted-foreground font-bold">
                  <th className="p-4">{isShapeCategory ? "Silhouette & Shape" : "Standard"}</th>
                  <th className="p-4">{isShapeCategory ? "Shape Family" : "Purity / Origin"}</th>
                  <th className="p-4">{isShapeCategory ? "Facet Count" : "Hallmark"}</th>
                  <th className="p-4">{isShapeCategory ? "Ideal Cut Ratio" : "Durability / Hardness"}</th>
                  <th className="p-4">Best For</th>
                  <th className="p-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-xs">
                {items.map((item) => (
                  <tr key={item.slug} className="hover:bg-cream/50 transition-colors">
                    <td className="p-4 font-bold text-foreground">
                      {item.shortName}
                    </td>
                    <td className="p-4 text-foreground/80">
                      {item.purityOrOrigin}
                    </td>
                    <td className="p-4 font-mono font-bold text-gold">
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
                        className="inline-flex items-center gap-1 font-bold text-gold hover:text-foreground tracking-wider text-[12.5px]"
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
      <section className="theme-dark bg-ink text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/15 via-transparent to-transparent pointer-events-none" />
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <span className="text-eyebrow text-gold block mb-3">
            Bespoke Consultation
          </span>
          <h2 className="font-display text-h2 font-semibold mb-4">
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
              className="bg-brand text-white px-8 py-3.5 text-[14px] font-semibold tracking-wide hover:bg-white hover:text-black transition-colors"
            >
              Book Complimentary Consultation
            </Link>
            <Link
              href="/guide"
              className="border border-white/20 text-white px-8 py-3.5 text-[14px] font-semibold tracking-wide hover:border-gold hover:text-gold transition-colors"
            >
              Explore All Guides
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
