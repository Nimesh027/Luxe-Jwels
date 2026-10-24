"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Gem } from "lucide-react";
import { diamondShapesData } from "@/data";
import Button from "@/components/ui/Button";

const filterTabs = [
  { id: "all", label: "All Shapes" },
  { id: "brilliant", label: "Brilliant Cuts" },
  { id: "step", label: "Step Cuts" },
  { id: "elongated", label: "Elongated Cuts" },
] as const;

type FilterType = (typeof filterTabs)[number]["id"];

export default function ShapesCatalogClient() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filteredShapes = useMemo(() => {
    if (activeFilter === "all") return diamondShapesData;
    if (activeFilter === "step") {
      return diamondShapesData.filter(
        (s) =>
          s.slug === "emerald" ||
          s.slug === "asscher" ||
          s.slug === "baguette" ||
          s.slug === "tapered-baguette"
      );
    }
    if (activeFilter === "elongated") {
      return diamondShapesData.filter(
        (s) =>
          s.slug === "oval" ||
          s.slug === "pear" ||
          s.slug === "marquise" ||
          s.slug === "emerald" ||
          s.slug === "radiant" ||
          s.slug === "baguette" ||
          s.slug === "tapered-baguette"
      );
    }
    // brilliant cuts
    return diamondShapesData.filter(
      (s) =>
        s.slug === "round" ||
        s.slug === "oval" ||
        s.slug === "princess" ||
        s.slug === "cushion" ||
        s.slug === "pear" ||
        s.slug === "radiant" ||
        s.slug === "marquise" ||
        s.slug === "heart"
    );
  }, [activeFilter]);

  return (
    <div className="min-h-screen bg-cream text-foreground">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden border-b border-black/5 bg-white py-16 md:py-20 px-6">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/10 blur-[130px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.35em] text-gold">
            <Gem className="h-3.5 w-3.5" />
            Diamond Shapes Collection
          </div>

          <h1 className="mb-5 text-4xl font-bold tracking-tight md:text-6xl text-foreground">
            Explore Diamond Shapes
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Discover the geometry, fire, and proportions of each iconic silhouette. Select a shape to view its comprehensive 4Cs masterclass guide.
          </p>

          {/* Minimal Filter Tabs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <Button
                  key={tab.id}
                  variant="unstyled"
                  onClick={() => setActiveFilter(tab.id)}
                  className={`cursor-pointer px-5 py-2.5 text-xs font-bold tracking-[0.2em] transition-all duration-200 border ${ isActive ? "bg-ink text-white border-ink shadow-sm" : "bg-cream text-foreground/70 hover:text-foreground hover:bg-white border-transparent" }`}
                >
                  {tab.label}
                  {tab.id === "all" && ` (${diamondShapesData.length})`}
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. REFINED CLEAN SHAPES GRID */}
      <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {filteredShapes.map((shape) => (
            <Link
              key={shape.id || shape.slug}
              href={`/shapes/${shape.slug || shape.id}`}
              className="group relative flex flex-col justify-between border border-black/6 bg-white p-6 transition-all duration-300 hover:border-gold/50 hover:shadow-[0_15px_35px_-15px_rgba(0,0,0,0.1)]"
            >
              <div>
                {/* Image Card Container */}
                <div className="relative mb-5 aspect-square w-full overflow-hidden bg-cream p-8 transition-colors group-hover:bg-cream">
                  <Image
                    src={shape.image}
                    alt={`${shape.name} cut diamond`}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                    className="object-contain p-4 drop-shadow-[0_10px_18px_rgba(0,0,0,0.12)] transition-transform duration-500 group-hover:scale-108"
                  />
                </div>

                {/* Header & Meta */}
                <div className="text-[10px] font-bold tracking-[0.25em] text-gold">
                  {shape.specs?.shapeFamily || "Diamond Cut"}
                </div>

                <h2 className="mt-1 text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-gold md:text-xl">
                  {shape.name} Cut
                </h2>

                <p className="mt-1.5 text-xs italic font-heading text-foreground/60 line-clamp-1">
                  &ldquo;{shape.tagline}&rdquo;
                </p>

                {/* Minimal Spec Pill */}
                <div className="mt-3 flex items-center gap-2 text-[11px] text-muted-foreground font-mono">
                  <span>{shape.specs?.facetCount || "Brilliant Facets"}</span>
                  <span>•</span>
                  <span>Ratio {shape.specs?.idealRatio || "1.00"}</span>
                </div>
              </div>

              {/* Clean Footer Link */}
              <div className="mt-5 pt-3 border-t border-black/5 flex items-center justify-between text-[11px] font-bold tracking-[0.2em] text-gold group-hover:text-foreground transition-colors">
                <span>Explore Guide</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. CONCIERGE BANNER */}
      <section className="border-t border-black/5 bg-white py-16 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-3 block text-[10px] font-bold tracking-[0.35em] text-gold">
            Concierge Consultation
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl text-foreground">
            Need Guidance Choosing the Right Cut?
          </h2>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Our certified gemologists provide one-on-one virtual consultations to help you evaluate optical fire, finger coverage, and bespoke mountings.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-ink px-8 py-3.5 text-xs font-bold tracking-[0.22em] text-white transition-all hover:bg-brand shadow-sm"
            >
              Book Complimentary Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
