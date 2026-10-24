"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  DiamondShapeDetail,
  diamondShapesData,
  productsData,
} from "@/data";
import {
  DiamondFacetSvg,
  DiamondCutProfileSvg,
  DiamondBlueprintSvg,
  RingMountSvg,
  DiamondVitalGraphic,
} from "./DiamondShapeSvg";
import type { Product } from "@/types";
import Button from "@/components/ui/Button";
import PageHero from "@/components/common/PageHero";
import GuideTabs, { guideHeroImages } from "./GuideTabs";
import { useAppDispatch } from "@/store/hooks";
import { addItem } from "@/store/slices/cartSlice";
import { toggleItem } from "@/store/slices/wishlistSlice";
import { setCartDrawerOpen } from "@/store/slices/uiSlice";
import { Sparkles, Shield, Compass, Layers, Check, ArrowRight } from "lucide-react";

interface DiamondShapeDetailClientProps {
  shape: DiamondShapeDetail;
}

export default function DiamondShapeDetailClient({
  shape,
}: DiamondShapeDetailClientProps) {
  const dispatch = useAppDispatch();

  // Hero view toggle: photorealistic render vs vector facet wireframe with auto-rotation
  const [heroView, setHeroView] = useState<"photo" | "facets">("photo");
  const [isHeroPaused, setIsHeroPaused] = useState(false);

  // Auto-rotate hero view every 3.5s unless paused
  useEffect(() => {
    if (isHeroPaused) return;
    const interval = setInterval(() => {
      setHeroView((prev) => (prev === "photo" ? "facets" : "photo"));
    }, 3500);
    return () => clearInterval(interval);
  }, [isHeroPaused]);

  // Complete GIA clarity grades ensuring all 5 tiers (FL/IF, VVS, VS, SI, I) are present
  const clarityGrades = useMemo(() => {
    const raw = shape.fourCs?.clarity?.grades || [];
    if (raw.length >= 5) return raw;
    return [
      { label: "FL / IF", name: "Flawless", desc: "No inclusions visible under 10x magnification. Museum rarity.", opacity: 0.05 },
      { label: "VVS1 / VVS2", name: "Very Very Slightly Included", desc: "Minute inclusions difficult even for gemologists to spot.", opacity: 0.15 },
      { label: "VS1 / VS2", name: "Very Slightly Included", desc: "Minor inclusions invisible to the naked eye. Premium eye-clean standard.", opacity: 0.28 },
      { label: "SI1 / SI2", name: "Slightly Included", desc: "Noticeable under 10x magnification; generally face-up eye-clean.", opacity: 0.42 },
      { label: "I1 / I2", name: "Included", desc: "Natural inclusions visible to naked eye with unique crystal character.", opacity: 0.65 },
    ];
  }, [shape.fourCs?.clarity?.grades]);

  // Cut Light Ray State: "ideal" | "shallow" | "deep"
  const [cutSimulation, setCutSimulation] = useState<"ideal" | "shallow" | "deep">("ideal");

  // Selected Color Grade Index
  const [selectedColorIdx, setSelectedColorIdx] = useState<number>(1); // Default to G-H

  // Selected Clarity Grade Index
  const [selectedClarityIdx, setSelectedClarityIdx] = useState<number>(2); // Default to VS1-VS2

  // Selected Carat Size Index
  const [selectedCaratIdx, setSelectedCaratIdx] = useState<number>(2); // Default to 1.00 Ct

  // Related products from mockData
  const relatedProducts = useMemo(() => {
    return productsData
      .filter(
        (p) =>
          shape.relatedProductIds?.includes(p.id) ||
          (p.category === "rings" &&
            (!shape.relatedProductIds || shape.relatedProductIds.length === 0))
      )
      .slice(0, 4);
  }, [shape]);

  const handleAddToCart = (product: Product) => {
    dispatch(
      addItem({
        product,
        quantity: 1,
      })
    );
    dispatch(setCartDrawerOpen(true));
  };

  const handleAddToWishlist = (product: Product) => {
    dispatch(toggleItem(product));
  };

  return (
    <div className="min-h-screen bg-cream text-ink pb-20">
      <PageHero
        title={shape.name}
        subtitle={shape.tagline}
        image={guideHeroImages.shape}
        breadcrumbs={[
          { label: "Guide & Learn", href: "/guide" },
          { label: "Diamond Shapes", href: "/guide/shape" },
          { label: shape.name },
        ]}
      />

      <GuideTabs
        label="Diamond shapes"
        activeId={shape.slug || shape.id}
        tabs={diamondShapesData.map((s) => ({
          id: s.slug || s.id,
          label: s.name.replace(/ Cut Diamond$| Diamond$/, ""),
          href: `/guide/shape/${s.slug || s.id}`,
        }))}
      />

      {/* 2. RESTRUCTURED HERO SHOWCASE (GRAPHICAL & COMPACT) */}
      <section className="py-10 sm:py-12 bg-white border-b border-border">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Diamond Visualizer Showcase (Clean, No Box Background, Auto-Rotating with 2 Dots) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div
                className="relative w-full max-w-[360px] aspect-square flex items-center justify-center overflow-hidden cursor-pointer"
                onMouseEnter={() => setIsHeroPaused(true)}
                onMouseLeave={() => setIsHeroPaused(false)}
                onClick={() => setHeroView((prev) => (prev === "photo" ? "facets" : "photo"))}
              >
                {/* Slide 1: Real Render (Clean, No background) */}
                <div
                  className={`absolute inset-0 flex items-center justify-center transition duration-700 ${ heroView === "photo" ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none" }`}
                >
                  <div className="relative w-full h-full p-4 flex items-center justify-center">
                    <Image
                      src={shape.image?.replace(/\.jpg$/, ".png") || `/images/shapes/${shape.slug}.png`}
                      alt={`${shape.name} high-resolution gemological rendering`}
                      fill
                      priority
                      sizes="(max-width: 768px) 90vw, 360px"
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Slide 2: Facet Blueprint (Clean vector lines, transparent fill) */}
                <div
                  className={`absolute inset-0 flex items-center justify-center transition duration-700 ${ heroView === "facets" ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none" }`}
                >
                  <div className="w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center p-4">
                    <DiamondFacetSvg
                      shapeSlug={shape.slug}
                      fill="none"
                      stroke="var(--color-gold)"
                      strokeWidth={1.3}
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>

              {/* 2 Dots in a Row for Auto-Rotation */}
              <div className="mt-5 flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setHeroView("photo")}
                  aria-label="Real Render View"
                  title="Photorealistic Gem Render"
                  className={`w-3 h-3 rounded-full transition duration-300 cursor-pointer ${ heroView === "photo" ? "bg-brand ring-4 ring-gold/25 scale-110" : "bg-stone-300 hover:bg-gold/50" }`}
                />
                <button
                  type="button"
                  onClick={() => setHeroView("facets")}
                  aria-label="Facet Blueprint View"
                  title="Architectural Facet Blueprint"
                  className={`w-3 h-3 rounded-full transition duration-300 cursor-pointer ${ heroView === "facets" ? "bg-brand ring-4 ring-gold/25 scale-110" : "bg-stone-300 hover:bg-gold/50" }`}
                />
              </div>
            </div>

          {/* Right: Shape Header & Graphical Vitals Matrix */}
          <div className="lg:col-span-7 space-y-5">
            <div>
              <p className="text-eyebrow text-gold">Diamond Silhouette Guide</p>
              <h2 className="mt-2 font-display text-h2 font-semibold text-ink leading-tight">At a Glance</h2>
            </div>

            {/* Concise 1-sentence synopsis */}
            <p className="text-[16px] text-ink-soft leading-relaxed max-w-xl">
              {shape.overview
                ? shape.overview.split(".")[0] + "."
                : "Engineered for extraordinary light return and distinct finger appeal."}
            </p>

            {/* Graphical At-A-Glance Vitals (4 Visual Cards) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
              {/* Card 1: Light Performance */}
              <div
                className="p-3.5 rounded-xl border flex flex-col justify-between shadow-2xs"
                style={{ background: "var(--color-gold-soft)", borderColor: "var(--color-border)" }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[12px] font-mono tracking-wider text-muted">
                    Fire / Light
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-surface flex items-center justify-center border border-gold/30">
                    <DiamondVitalGraphic type="fire" className="w-5 h-5" />
                  </div>
                </div>
                <div className="text-sm font-bold text-ink">
                  {shape.specs?.shapeFamily?.includes("Step")
                    ? "Optic Flashes"
                    : "Fiery Sparkle"}
                </div>
                <div className="mt-2 w-full bg-border/40 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      background: "var(--color-gold)",
                      width: shape.specs?.shapeFamily?.includes("Step")
                        ? "88%"
                        : "96%",
                    }}
                  />
                </div>
              </div>

              {/* Card 2: Length-to-Width Ratio */}
              <div
                className="p-3.5 rounded-xl border flex flex-col justify-between shadow-2xs"
                style={{ background: "var(--color-gold-soft)", borderColor: "var(--color-border)" }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[12px] font-mono tracking-wider text-muted">
                    Ideal Ratio
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-surface flex items-center justify-center border border-gold/30">
                    <DiamondVitalGraphic type="ratio" className="w-5 h-5" />
                  </div>
                </div>
                <div className="text-sm font-bold text-ink truncate">
                  {shape.specs?.idealRatio?.split("(")[0]?.trim() || "1.00"}
                </div>
                <span className="text-[12px] text-muted mt-1">
                  Balanced spread
                </span>
              </div>

              {/* Card 3: Facet Matrix */}
              <div
                className="p-3.5 rounded-xl border flex flex-col justify-between shadow-2xs"
                style={{ background: "var(--color-gold-soft)", borderColor: "var(--color-border)" }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[12px] font-mono tracking-wider text-muted">
                    Facet Count
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-surface flex items-center justify-center border border-gold/30">
                    <DiamondVitalGraphic type="facets" className="w-5 h-5" />
                  </div>
                </div>
                <div className="text-sm font-bold text-ink">
                  {shape.specs?.facetCount?.split(" ")[0] || "58"} Facets
                </div>
                <span className="text-[12px] text-muted mt-1">
                  Total reflection
                </span>
              </div>

              {/* Card 4: Cut Family */}
              <div
                className="p-3.5 rounded-xl border flex flex-col justify-between shadow-2xs"
                style={{ background: "var(--color-gold-soft)", borderColor: "var(--color-border)" }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[12px] font-mono tracking-wider text-muted">
                    Style Family
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-surface flex items-center justify-center border border-gold/30">
                    <DiamondVitalGraphic type="style" className="w-5 h-5" />
                  </div>
                </div>
                <div className="text-sm font-bold text-ink truncate">
                  {shape.specs?.shapeFamily || "Brilliant Cut"}
                </div>
                <span className="text-[12px] text-muted mt-1">
                  GIA / IGI Standard
                </span>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* 3. EDITORIAL 4CS PROCESS MASTERCLASS (GRAPHICAL & INTERACTIVE) */}
      {shape.fourCs && (
        <section
          id="4cs-process"
          className="py-12 sm:py-16 md:py-20 scroll-mt-20 bg-white"
        >
          <div className="container">
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 sm:mb-16">
              <div>
                <p
                  className="text-xs tracking-[0.25em] font-semibold mb-2"
                  style={{ color: "var(--color-gold)" }}
                >
                  Our Process
                </p>
                <h2
                  className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight"
                  style={{ color: "var(--color-ink)" }}
                >
                  Our {shape.shortName} Diamond Process
                </h2>
              </div>
              <Link
                href="/guide"
                className="self-start sm:self-auto flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-widest border transition hover:opacity-90"
                style={{
                  background: "var(--color-gold)",
                  color: "#fff",
                  borderColor: "var(--color-gold)",
                  letterSpacing: "0.15em",
                }}
              >
                Learn More <ArrowRight className="w-3.5 h-3.5 inline ml-1 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            <div className="space-y-12 sm:space-y-16">
              {/* ──── ROW 1: CUT (Left: Text, Right: Graphic) ──── */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 items-center">
                {/* Text Card on Left */}
                <div
                  className="lg:col-span-2 flex flex-col items-center justify-center text-center p-6 sm:p-8 rounded-2xl shadow-2xs"
                  style={{ background: "var(--color-gold-soft)", border: "1px solid var(--color-border)" }}
                >
                  <h3
                    className="font-display text-2xl sm:font-display text-h2 font-semibold mb-2.5"
                    style={{ color: "var(--color-ink)" }}
                  >
                    1. Cut
                  </h3>
                  <div className="w-12 h-px mb-4" style={{ background: "var(--color-gold)" }} />
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
                    {shape.fourCs.cut?.overview ||
                      "Precise cut planning balances depth, crown angles, and symmetry so light entering the table reflects internally and returns as dazzling brilliance."}
                  </p>
                  {/* Dynamic Simulation Note */}
                  <div
                    className="mt-4 pt-3.5 border-t w-full text-xs text-left"
                    style={{ borderColor: "var(--color-border)" }}
                  >
                    {cutSimulation === "shallow" ? (
                      <p style={{ color: "#8C4A2F" }}>
                        <strong>Too Shallow: </strong>
                        {shape.fourCs.cut?.shallowNote ||
                          "Light passes straight through the pavilion floor, causing a watery window effect."}
                      </p>
                    ) : cutSimulation === "deep" ? (
                      <p style={{ color: "#8C4A2F" }}>
                        <strong>Too Deep: </strong>
                        {shape.fourCs.cut?.deepNote ||
                          "Light escapes out the opposite flank, creating a dark, dead center."}
                      </p>
                    ) : (
                      <p style={{ color: "var(--color-gold-dark)" }}>
                        <strong>Ideal Cut: </strong>
                        {shape.fourCs.cut?.idealNote ||
                          "Total internal reflection delivers optimal white brilliance and colored fire."}
                      </p>
                    )}
                  </div>
                </div>

                {/* Three Cut Diagrams on Right */}
                <div className="lg:col-span-3 flex items-center justify-center sm:justify-around gap-2 sm:gap-4 py-4">
                  {/* Well Cut */}
                  <button
                    type="button"
                    onClick={() => setCutSimulation("ideal")}
                    className={`flex-1 max-w-[160px] flex flex-col items-center gap-3 p-4 sm:p-5 transition rounded-2xl cursor-pointer ${ cutSimulation === "ideal" ? "shadow-sm scale-102" : "opacity-60 hover:opacity-85" }`}
                    style={{
                      background: cutSimulation === "ideal" ? "var(--color-gold-soft)" : "transparent",
                      border:
                        cutSimulation === "ideal"
                          ? "1.5px solid var(--color-gold)"
                          : "1.5px solid var(--color-border)",
                    }}
                  >
                    <DiamondCutProfileSvg
                      shapeSlug={shape.slug}
                      variant="ideal"
                      isSelected={cutSimulation === "ideal"}
                    />
                    <span
                      className="text-[12.5px] tracking-[0.15em] font-bold text-center"
                      style={{
                        color: cutSimulation === "ideal" ? "var(--color-gold)" : "var(--color-ink)",
                      }}
                    >
                      Well Cut
                    </span>
                  </button>

                  {/* Too Shallow */}
                  <button
                    type="button"
                    onClick={() => setCutSimulation("shallow")}
                    className={`flex-1 max-w-[160px] flex flex-col items-center gap-3 p-4 sm:p-5 transition rounded-2xl cursor-pointer ${ cutSimulation === "shallow" ? "shadow-sm scale-102" : "opacity-60 hover:opacity-85" }`}
                    style={{
                      background: cutSimulation === "shallow" ? "var(--color-gold-soft)" : "transparent",
                      border:
                        cutSimulation === "shallow"
                          ? "1.5px solid var(--color-gold)"
                          : "1.5px solid var(--color-border)",
                    }}
                  >
                    <DiamondCutProfileSvg
                      shapeSlug={shape.slug}
                      variant="shallow"
                      isSelected={cutSimulation === "shallow"}
                    />
                    <span
                      className="text-[12.5px] tracking-[0.15em] font-bold text-center"
                      style={{
                        color: cutSimulation === "shallow" ? "var(--color-gold)" : "var(--color-ink)",
                      }}
                    >
                      Too Shallow
                    </span>
                  </button>

                  {/* Too Deep */}
                  <button
                    type="button"
                    onClick={() => setCutSimulation("deep")}
                    className={`flex-1 max-w-[160px] flex flex-col items-center gap-3 p-4 sm:p-5 transition rounded-2xl cursor-pointer ${ cutSimulation === "deep" ? "shadow-sm scale-102" : "opacity-60 hover:opacity-85" }`}
                    style={{
                      background: cutSimulation === "deep" ? "var(--color-gold-soft)" : "transparent",
                      border:
                        cutSimulation === "deep"
                          ? "1.5px solid var(--color-gold)"
                          : "1.5px solid var(--color-border)",
                    }}
                  >
                    <DiamondCutProfileSvg
                      shapeSlug={shape.slug}
                      variant="deep"
                      isSelected={cutSimulation === "deep"}
                    />
                    <span
                      className="text-[12.5px] tracking-[0.15em] font-bold text-center"
                      style={{
                        color: cutSimulation === "deep" ? "var(--color-gold)" : "var(--color-ink)",
                      }}
                    >
                      Too Deep
                    </span>
                  </button>
                </div>
              </div>

              {/* ──── ROW 2: COLOUR (Left: Graphic, Right: Text) ──── */}
              {shape.fourCs.color && (
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 items-center">
                  {/* Shape-specific Color Swatches on Left (Desktop order-1, Mobile order-2) */}
                  <div className="lg:col-span-3 order-2 lg:order-1 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 py-4">
                    {(
                      shape.fourCs.color.grades || [
                        { label: "D – F", name: "Colorless", tint: "#FFFFFF" },
                        { label: "G – H", name: "Near Colorless", tint: "var(--color-cream)" },
                        { label: "I – J", name: "Warm White", tint: "var(--color-gold-soft)" },
                        { label: "K – M", name: "Faint Yellow", tint: "var(--color-gold-soft)" },
                      ]
                    ).map((grade, idx) => {
                      const isSel = idx === selectedColorIdx;
                      const tintColor = grade.tint || "#FFFFFF";
                      return (
                        <button
                          key={grade.label}
                          type="button"
                          onClick={() => setSelectedColorIdx(idx)}
                          className={`flex flex-col items-center gap-3 p-3.5 sm:p-4 rounded-2xl transition cursor-pointer ${ isSel ? "shadow-sm scale-102" : "opacity-60 hover:opacity-85" }`}
                          style={{
                            background: isSel ? "var(--color-gold-soft)" : "transparent",
                            border: isSel
                              ? "1.5px solid var(--color-gold)"
                              : "1.5px solid var(--color-border)",
                          }}
                        >
                          <div className="relative w-14 h-18 sm:w-16 sm:h-20 flex items-center justify-center">
                            <DiamondFacetSvg
                              shapeSlug={shape.slug}
                              fill={tintColor}
                              stroke={isSel ? "var(--color-gold)" : "var(--color-gold)"}
                              strokeWidth={isSel ? 1.4 : 1}
                              className="w-full h-full"
                            />
                          </div>
                          <div className="text-center">
                            <span
                              className="text-xs font-bold block"
                              style={{ color: isSel ? "var(--color-gold)" : "var(--color-ink)" }}
                            >
                              {grade.label}
                            </span>
                            <span
                              className="text-[12px] tracking-wider font-medium block mt-0.5"
                              style={{ color: isSel ? "var(--color-gold-dark)" : "#8A7B6B" }}
                            >
                              {grade.name}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Text Card on Right (Desktop order-2, Mobile order-1) */}
                  <div
                    className="lg:col-span-2 order-1 lg:order-2 flex flex-col items-center justify-center text-center p-6 sm:p-8 rounded-2xl shadow-2xs"
                    style={{ background: "var(--color-gold-soft)", border: "1px solid var(--color-border)" }}
                  >
                    <h3
                      className="font-display text-2xl sm:font-display text-h2 font-semibold mb-2.5"
                      style={{ color: "var(--color-ink)" }}
                    >
                      2. Colour
                    </h3>
                    <div className="w-12 h-px mb-4" style={{ background: "var(--color-gold)" }} />
                    <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
                      {shape.fourCs.color.overview ||
                        "Every diamond is reviewed for body colour, face-up appearance, and matching consistency across designer mounts."}
                    </p>
                    {shape.fourCs.color.recommendation && (
                      <div
                        className="mt-4 pt-3.5 border-t w-full text-xs font-medium text-center"
                        style={{ borderColor: "var(--color-border)", color: "var(--color-gold)" }}
                      >
                        ★ {shape.fourCs.color.recommendation}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* ──── ROW 3: CLARITY (Left: Text, Right: All 5 GIA Grades incl. SI & I) ──── */}
              {shape.fourCs.clarity && (
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 items-center">
                  {/* Text Card on Left */}
                  <div
                    className="lg:col-span-2 flex flex-col items-center justify-center text-center p-6 sm:p-8 rounded-2xl shadow-2xs"
                    style={{ background: "var(--color-gold-soft)", border: "1px solid var(--color-border)" }}
                  >
                    <h3
                      className="font-display text-2xl sm:font-display text-h2 font-semibold mb-2.5"
                      style={{ color: "var(--color-ink)" }}
                    >
                      3. Clarity
                    </h3>
                    <div className="w-12 h-px mb-4" style={{ background: "var(--color-gold)" }} />
                    <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
                      {shape.fourCs.clarity.overview ||
                        "Clarity checking maps natural internal inclusions to ensure complete eye-clean transparency and brilliance."}
                    </p>
                    {shape.fourCs.clarity.recommendation && (
                      <div
                        className="mt-4 pt-3.5 border-t w-full text-xs font-medium text-center"
                        style={{ borderColor: "var(--color-border)", color: "var(--color-gold)" }}
                      >
                        ★ {shape.fourCs.clarity.recommendation}
                      </div>
                    )}
                  </div>

                  {/* Interactive Clarity Stage on Right (All 5 GIA Grades: FL/IF, VVS, VS, SI, I) */}
                  <div className="lg:col-span-3 flex flex-col items-center gap-4 py-2">
                    {/* Featured Diamond Inclusion Diagram with Active Grade Info */}
                    <div className="w-full flex items-center justify-center gap-4 p-4 rounded-2xl border" style={{ background: "var(--color-gold-soft)", borderColor: "var(--color-border)" }}>
                      <div className="w-20 h-24 sm:w-24 sm:h-28 flex items-center justify-center shrink-0">
                        <DiamondFacetSvg
                          shapeSlug={shape.slug}
                          fill="transparent"
                          stroke="var(--color-gold)"
                          strokeWidth={1.3}
                          className="w-full h-full"
                          clarityGradeIdx={selectedClarityIdx}
                          showInclusions={true}
                        />
                      </div>
                      <div className="flex-1 text-left">
                        <span
                          className="text-xs tracking-widest font-bold block"
                          style={{ color: "var(--color-gold)" }}
                        >
                          {clarityGrades[selectedClarityIdx]?.label || "VS1 / VS2"}
                        </span>
                        <h4 className="font-display text-sm sm:text-base font-bold text-ink mt-0.5">
                          {clarityGrades[selectedClarityIdx]?.name || "Very Slightly Included"}
                        </h4>
                        <p className="text-xs text-muted mt-1 leading-relaxed">
                          {clarityGrades[selectedClarityIdx]?.desc || "Eye-clean standard under standard viewing."}
                        </p>
                      </div>
                    </div>

                    {/* All 5 Clarity Selection Buttons (FL/IF, VVS, VS, SI, I) */}
                    <div className="w-full grid grid-cols-5 gap-1.5 sm:gap-2.5">
                      {clarityGrades.map((grade, idx) => {
                        const isSel = idx === selectedClarityIdx;
                        return (
                          <button
                            key={grade.label}
                            type="button"
                            onClick={() => setSelectedClarityIdx(idx)}
                            className={`flex flex-col items-center gap-1.5 p-2 sm:p-3 rounded-xl transition cursor-pointer ${ isSel ? "shadow-2xs scale-102" : "opacity-60 hover:opacity-85" }`}
                            style={{
                              background: isSel ? "var(--color-gold-soft)" : "transparent",
                              border: isSel
                                ? "1.5px solid var(--color-gold)"
                                : "1.5px solid var(--color-border)",
                            }}
                          >
                            <div className="w-8 h-10 sm:w-11 sm:h-13 flex items-center justify-center">
                              <DiamondFacetSvg
                                shapeSlug={shape.slug}
                                fill="transparent"
                                stroke={isSel ? "var(--color-gold)" : "var(--color-gold)"}
                                strokeWidth={isSel ? 1.3 : 0.9}
                                className="w-full h-full"
                                clarityGradeIdx={idx}
                                showInclusions={true}
                              />
                            </div>
                            <span
                              className="text-[12px] sm:text-[14px] font-semibold tracking-wide text-center"
                              style={{ color: isSel ? "var(--color-gold)" : "var(--color-ink)" }}
                            >
                              {grade.label.includes("FL")
                                ? "FL"
                                : grade.label.includes("VVS")
                                ? "VVS"
                                : grade.label.includes("VS")
                                ? "VS"
                                : grade.label.includes("SI")
                                ? "SI"
                                : "I"}
                            </span>
                            <span className="text-[12.5px] text-muted text-center hidden sm:block truncate max-w-[65px]">
                              {grade.name.includes("Flawless")
                                ? "Flawless"
                                : grade.name.includes("Very Very")
                                ? "VVS1/VVS2"
                                : grade.name.includes("Very")
                                ? "VS1/VS2"
                                : grade.name.includes("Slightly")
                                ? "SI1/SI2"
                                : "Included (I1)"}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* ──── ROW 4: CARAT (Left: Graphic, Right: Text - Fully Responsive) ──── */}
              {shape.fourCs.carat && (
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 items-center">
                  {/* Carat Selector on Left (Desktop order-1, Mobile order-2) */}
                  <div className="lg:col-span-3 order-2 lg:order-1 flex flex-col items-center gap-4 py-2">
                    {/* Active Selected Size Banner */}
                    {shape.fourCs.carat.sizes[selectedCaratIdx] && (
                      <div
                        className="w-full flex items-center justify-between px-5 py-3 rounded-xl border text-xs"
                        style={{ background: "var(--color-gold-soft)", borderColor: "var(--color-border)" }}
                      >
                        <span className="font-semibold text-ink">
                          Selected Finger Spread:
                        </span>
                        <span className="font-mono font-bold" style={{ color: "var(--color-gold)" }}>
                          {shape.fourCs.carat.sizes[selectedCaratIdx].carat} ({shape.fourCs.carat.sizes[selectedCaratIdx].mmSize})
                        </span>
                      </div>
                    )}

                    {/* Desktop Graduating Diamonds Row */}
                    <div className="w-full hidden sm:flex items-end justify-around gap-2 px-3 py-6 rounded-2xl border" style={{ borderColor: "var(--color-border)" }}>
                      {(shape.fourCs.carat.sizes || []).slice(0, 6).map((size, idx) => {
                        const isSel = idx === selectedCaratIdx;
                        const scaleVal = size.scale || 0.45 + idx * 0.12;
                        return (
                          <button
                            key={size.carat}
                            type="button"
                            onClick={() => setSelectedCaratIdx(idx)}
                            className={`flex flex-col items-center gap-2 transition cursor-pointer ${ isSel ? "scale-105 opacity-100" : "opacity-45 hover:opacity-80" }`}
                          >
                            <div
                              style={{
                                width: `${Math.round(26 + scaleVal * 34)}px`,
                                height: `${Math.round(26 + scaleVal * 34)}px`,
                              }}
                              className="flex items-center justify-center p-0.5"
                            >
                              <DiamondFacetSvg
                                shapeSlug={shape.slug}
                                fill={isSel ? "rgba(184,150,90,0.12)" : "transparent"}
                                stroke={isSel ? "var(--color-gold)" : "#C4B49A"}
                                strokeWidth={isSel ? 1.5 : 1}
                                className="w-full h-full"
                              />
                            </div>
                            <span
                              className="text-[14px] font-semibold tracking-wide"
                              style={{ color: isSel ? "var(--color-gold)" : "#8A7B6B" }}
                            >
                              {size.carat}
                            </span>
                            <span className="text-[12.5px] text-muted">
                              {size.mmSize.split(" ")[0]}mm
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Mobile Touch-Friendly 3x2 Grid (No Squishing, No Horizontal Overflow) */}
                    <div className="w-full grid grid-cols-3 sm:hidden gap-2">
                      {(shape.fourCs.carat.sizes || []).slice(0, 6).map((size, idx) => {
                        const isSel = idx === selectedCaratIdx;
                        return (
                          <button
                            key={size.carat}
                            type="button"
                            onClick={() => setSelectedCaratIdx(idx)}
                            className={`flex flex-col items-center gap-1 p-2.5 rounded-xl border transition cursor-pointer ${ isSel ? "shadow-2xs scale-102" : "opacity-65" }`}
                            style={{
                              background: isSel ? "var(--color-gold-soft)" : "transparent",
                              borderColor: isSel ? "var(--color-gold)" : "var(--color-border)",
                            }}
                          >
                            <div className="w-8 h-8 flex items-center justify-center">
                              <DiamondFacetSvg
                                shapeSlug={shape.slug}
                                fill={isSel ? "rgba(184,150,90,0.12)" : "transparent"}
                                stroke={isSel ? "var(--color-gold)" : "var(--color-gold)"}
                                strokeWidth={isSel ? 1.4 : 1}
                                className="w-full h-full"
                              />
                            </div>
                            <span
                              className="text-xs font-bold"
                              style={{ color: isSel ? "var(--color-gold)" : "var(--color-ink)" }}
                            >
                              {size.carat}
                            </span>
                            <span className="text-[12px] text-muted">
                              {size.mmSize}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Text Card on Right (Desktop order-2, Mobile order-1) */}
                  <div
                    className="lg:col-span-2 order-1 lg:order-2 flex flex-col items-center justify-center text-center p-6 sm:p-8 rounded-2xl shadow-2xs"
                    style={{ background: "var(--color-gold-soft)", border: "1px solid var(--color-border)" }}
                  >
                    <h3
                      className="font-display text-2xl sm:font-display text-h2 font-semibold mb-2.5"
                      style={{ color: "var(--color-ink)" }}
                    >
                      4. Carat
                    </h3>
                    <div className="w-12 h-px mb-4" style={{ background: "var(--color-gold)" }} />
                    <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
                      {shape.fourCs.carat.overview ||
                        "Carat weight is calibrated precisely to provide predictable finger spread and balanced proportions."}
                    </p>
                    {shape.fourCs.carat.sizes[selectedCaratIdx] && (
                      <div
                        className="mt-4 pt-3.5 border-t w-full text-xs font-mono font-bold text-center"
                        style={{ borderColor: "var(--color-border)", color: "var(--color-gold)" }}
                      >
                        {shape.fourCs.carat.sizes[selectedCaratIdx].carat} • {shape.fourCs.carat.sizes[selectedCaratIdx].mmSize}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* 4. RESTRUCTURED GRAPHICAL ANATOMY BLUEPRINT (REPLACING DRY TEXT TABLE) */}
      {shape.specs && (
        <section className="py-12 bg-white">
          <div className="container">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-border/80 shadow-2xs">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-8">
                <div>
                  <span className="text-xs font-mono tracking-widest text-gold-dark font-semibold">
                    Lab Parameters &amp; Geometry
                  </span>
                  <h3 className="font-display text-2xl sm:font-display text-h2 font-semibold text-ink mt-0.5">
                    {shape.name} Architectural Blueprint
                  </h3>
                </div>
                <span className="text-xs text-muted">
                  Referenced from GIA &amp; IGI Master Grading Standards
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left: Technical Gemological Blueprint */}
                <div
                  className="lg:col-span-6 flex items-center justify-center p-4 rounded-2xl border"
                  style={{ background: "var(--color-gold-soft)", borderColor: "var(--color-border)" }}
                >
                  <DiamondBlueprintSvg
                    shapeSlug={shape.slug}
                    tablePercent={shape.specs?.idealTable}
                    depthPercent={shape.specs?.idealDepth}
                    culetSize={shape.specs?.culetSize}
                    girdleThickness={shape.specs?.girdleThickness}
                    className="w-full max-w-sm h-auto drop-shadow-xs"
                  />
                </div>

                {/* Right: 4 Visual Parameter Meters with Unified Gold Color Scheme */}
                <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Meter 1: Table Percentage */}
                  <div
                    className="p-4 rounded-xl border space-y-2 shadow-2xs"
                    style={{ background: "var(--color-gold-soft)", borderColor: "var(--color-border)" }}
                  >
                    <div className="flex items-center justify-between text-xs font-semibold text-ink">
                      <span>Table Percentage</span>
                      <span className="font-mono font-bold" style={{ color: "var(--color-gold)" }}>
                        {shape.specs?.idealTable || "54% – 58%"}
                      </span>
                    </div>
                    <div className="w-full bg-border/40 h-2 rounded-full overflow-hidden">
                      <div className="h-full rounded-full w-[65%]" style={{ background: "var(--color-gold)" }} />
                    </div>
                    <p className="text-[12.5px] text-muted leading-tight">
                      Balances light entry and fire dispersion across the crown.
                    </p>
                  </div>

                  {/* Meter 2: Depth Percentage */}
                  <div
                    className="p-4 rounded-xl border space-y-2 shadow-2xs"
                    style={{ background: "var(--color-gold-soft)", borderColor: "var(--color-border)" }}
                  >
                    <div className="flex items-center justify-between text-xs font-semibold text-ink">
                      <span>Depth Percentage</span>
                      <span className="font-mono font-bold" style={{ color: "var(--color-gold)" }}>
                        {shape.specs?.idealDepth || "60% – 63%"}
                      </span>
                    </div>
                    <div className="w-full bg-border/40 h-2 rounded-full overflow-hidden">
                      <div className="h-full rounded-full w-[70%]" style={{ background: "var(--color-gold)" }} />
                    </div>
                    <p className="text-[12.5px] text-muted leading-tight">
                      Ensures total internal light reflection without windowing.
                    </p>
                  </div>

                  {/* Meter 3: Length-to-Width Ratio */}
                  <div
                    className="p-4 rounded-xl border space-y-2 shadow-2xs"
                    style={{ background: "var(--color-gold-soft)", borderColor: "var(--color-border)" }}
                  >
                    <div className="flex items-center justify-between text-xs font-semibold text-ink">
                      <span>L/W Proportion</span>
                      <span className="font-mono font-bold" style={{ color: "var(--color-gold)" }}>
                        {shape.specs?.idealRatio?.split("(")[0]?.trim() || "1.00"}
                      </span>
                    </div>
                    <div className="w-full bg-border/40 h-2 rounded-full overflow-hidden">
                      <div className="h-full rounded-full w-[80%]" style={{ background: "var(--color-gold)" }} />
                    </div>
                    <p className="text-[12.5px] text-muted leading-tight">
                      Defines silhouette symmetry and finger-slimming presence.
                    </p>
                  </div>

                  {/* Meter 4: Symmetry & Polish */}
                  <div
                    className="p-4 rounded-xl border space-y-2 shadow-2xs"
                    style={{ background: "var(--color-gold-soft)", borderColor: "var(--color-border)" }}
                  >
                    <div className="flex items-center justify-between text-xs font-semibold text-ink">
                      <span>Polish &amp; Symmetry</span>
                      <span className="font-mono font-bold" style={{ color: "var(--color-gold)" }}>
                        {shape.specs?.polishSymmetry?.split("/")[0]?.trim() || "Excellent"}
                      </span>
                    </div>
                    <div className="w-full bg-border/40 h-2 rounded-full overflow-hidden">
                      <div className="h-full rounded-full w-[95%]" style={{ background: "var(--color-gold)" }} />
                    </div>
                    <p className="text-[12.5px] text-muted leading-tight">
                      Museum-grade facet alignment and mirror-like surface plane.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 5. VISUAL MOUNT & SETTING PROFILES (ARCHITECTURAL & GRAPHICAL) */}
      <section className="py-10 bg-white">
        <div className="container">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-6">
            <div>
              <span
                className="text-xs font-mono tracking-widest font-semibold"
                style={{ color: "var(--color-gold)" }}
              >
                Fine Mounting Profiles
              </span>
              <h3 className="font-display text-2xl sm:font-display text-h2 font-semibold text-ink mt-0.5">
                Ideal Ring Settings for {shape.shortName} Diamonds
              </h3>
            </div>
            <span className="text-xs text-muted">
              Engineered to highlight the unique {shape.shortName} silhouette
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Setting 1: Solitaire */}
            <div
              className="rounded-2xl border transition duration-300 flex flex-col justify-between overflow-hidden group hover:shadow-lg"
              style={{ background: "var(--color-gold-soft)", borderColor: "var(--color-border)" }}
            >
              <div className="p-4 sm:p-5 flex flex-col items-center">
                {/* Graphic Ring Mount Stage */}
                <div
                  className="w-full aspect-square max-w-[170px] rounded-xl flex items-center justify-center p-3 mb-4 transition-transform duration-300 group-hover:scale-105"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(184,150,90,0.12) 0%, rgba(242,237,228,0.5) 70%)",
                    border: "1px solid rgba(184,150,90,0.25)",
                  }}
                >
                  <RingMountSvg
                    settingType="solitaire"
                    shapeSlug={shape.slug}
                    className="w-full h-full drop-shadow-sm"
                  />
                </div>

                <div className="w-full text-center">
                  <span
                    className="text-[12px] font-mono tracking-widest px-2.5 py-0.5 rounded-full inline-block mb-2 font-medium"
                    style={{
                      background: "rgba(184,150,90,0.15)",
                      color: "var(--color-gold-dark)",
                    }}
                  >
                    Multi-Prong Solitaire
                  </span>
                  <h4 className="font-display text-base font-bold text-ink">
                    Classic Solitaire
                  </h4>
                  <p className="text-xs text-muted mt-1.5 leading-relaxed">
                    Elevates the central {shape.shortName} stone to welcome ambient light from 360°, maximizing pure white fire.
                  </p>
                </div>
              </div>

              <div
                className="px-4 py-2.5 border-t text-center text-[12.5px] font-medium"
                style={{
                  borderColor: "var(--color-border)",
                  background: "rgba(184,150,90,0.06)",
                  color: "var(--color-muted)",
                }}
              >
                ✦ Maximum Fire &amp; Minimal Metal
              </div>
            </div>

            {/* Setting 2: Halo & Hidden Halo */}
            <div
              className="rounded-2xl border transition duration-300 flex flex-col justify-between overflow-hidden group hover:shadow-lg"
              style={{ background: "var(--color-gold-soft)", borderColor: "var(--color-border)" }}
            >
              <div className="p-4 sm:p-5 flex flex-col items-center">
                {/* Graphic Ring Mount Stage */}
                <div
                  className="w-full aspect-square max-w-[170px] rounded-xl flex items-center justify-center p-3 mb-4 transition-transform duration-300 group-hover:scale-105"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(184,150,90,0.12) 0%, rgba(242,237,228,0.5) 70%)",
                    border: "1px solid rgba(184,150,90,0.25)",
                  }}
                >
                  <RingMountSvg
                    settingType="halo"
                    shapeSlug={shape.slug}
                    className="w-full h-full drop-shadow-sm"
                  />
                </div>

                <div className="w-full text-center">
                  <span
                    className="text-[12px] font-mono tracking-widest px-2.5 py-0.5 rounded-full inline-block mb-2 font-medium"
                    style={{
                      background: "rgba(184,150,90,0.15)",
                      color: "var(--color-gold-dark)",
                    }}
                  >
                    Micro-Pavé Framing
                  </span>
                  <h4 className="font-display text-base font-bold text-ink">
                    Halo &amp; Hidden Halo
                  </h4>
                  <p className="text-xs text-muted mt-1.5 leading-relaxed">
                    A shimmering border of accent diamonds outlines the {shape.shortName} contours, expanding optical finger spread by up to 25%.
                  </p>
                </div>
              </div>

              <div
                className="px-4 py-2.5 border-t text-center text-[12.5px] font-medium"
                style={{
                  borderColor: "var(--color-border)",
                  background: "rgba(184,150,90,0.06)",
                  color: "var(--color-muted)",
                }}
              >
                ✧ +25% Optical Surface Area
              </div>
            </div>

            {/* Setting 3: Three-Stone Architecture */}
            <div
              className="rounded-2xl border transition duration-300 flex flex-col justify-between overflow-hidden group hover:shadow-lg"
              style={{ background: "var(--color-gold-soft)", borderColor: "var(--color-border)" }}
            >
              <div className="p-4 sm:p-5 flex flex-col items-center">
                {/* Graphic Ring Mount Stage */}
                <div
                  className="w-full aspect-square max-w-[170px] rounded-xl flex items-center justify-center p-3 mb-4 transition-transform duration-300 group-hover:scale-105"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(184,150,90,0.12) 0%, rgba(242,237,228,0.5) 70%)",
                    border: "1px solid rgba(184,150,90,0.25)",
                  }}
                >
                  <RingMountSvg
                    settingType="three-stone"
                    shapeSlug={shape.slug}
                    className="w-full h-full drop-shadow-sm"
                  />
                </div>

                <div className="w-full text-center">
                  <span
                    className="text-[12px] font-mono tracking-widest px-2.5 py-0.5 rounded-full inline-block mb-2 font-medium"
                    style={{
                      background: "rgba(184,150,90,0.15)",
                      color: "var(--color-gold-dark)",
                    }}
                  >
                    Trilogy Architecture
                  </span>
                  <h4 className="font-display text-base font-bold text-ink">
                    Three-Stone Harmony
                  </h4>
                  <p className="text-xs text-muted mt-1.5 leading-relaxed">
                    Flanks the centerpiece {shape.shortName} diamond with complementary side stones, creating an opulent and balanced panoramic spread.
                  </p>
                </div>
              </div>

              <div
                className="px-4 py-2.5 border-t text-center text-[12.5px] font-medium"
                style={{
                  borderColor: "var(--color-border)",
                  background: "rgba(184,150,90,0.06)",
                  color: "var(--color-muted)",
                }}
              >
                ❖ Symbolic Trilogy Silhouette
              </div>
            </div>

            {/* Setting 4: Modern Bezel Mount */}
            <div
              className="rounded-2xl border transition duration-300 flex flex-col justify-between overflow-hidden group hover:shadow-lg"
              style={{ background: "var(--color-gold-soft)", borderColor: "var(--color-border)" }}
            >
              <div className="p-4 sm:p-5 flex flex-col items-center">
                {/* Graphic Ring Mount Stage */}
                <div
                  className="w-full aspect-square max-w-[170px] rounded-xl flex items-center justify-center p-3 mb-4 transition-transform duration-300 group-hover:scale-105"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(184,150,90,0.12) 0%, rgba(242,237,228,0.5) 70%)",
                    border: "1px solid rgba(184,150,90,0.25)",
                  }}
                >
                  <RingMountSvg
                    settingType="bezel"
                    shapeSlug={shape.slug}
                    className="w-full h-full drop-shadow-sm"
                  />
                </div>

                <div className="w-full text-center">
                  <span
                    className="text-[12px] font-mono tracking-widest px-2.5 py-0.5 rounded-full inline-block mb-2 font-medium"
                    style={{
                      background: "rgba(184,150,90,0.15)",
                      color: "var(--color-gold-dark)",
                    }}
                  >
                    Contoured Rim
                  </span>
                  <h4 className="font-display text-base font-bold text-ink">
                    Modern Bezel Mount
                  </h4>
                  <p className="text-xs text-muted mt-1.5 leading-relaxed">
                    A custom precious-metal wall encases the {shape.shortName}&apos;s perimeter, guarding tips and clefts with sleek modern lines.
                  </p>
                </div>
              </div>

              <div
                className="px-4 py-2.5 border-t text-center text-[12.5px] font-medium"
                style={{
                  borderColor: "var(--color-border)",
                  background: "rgba(184,150,90,0.06)",
                  color: "var(--color-muted)",
                }}
              >
                ⬡ Snag-Free All-Day Security
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. COMPLETE SILHOUETTE COMPENDIUM (ALL 12 DIAMOND CUTS) */}
      <section className="py-12 border-t border-border/80 bg-white">
        <div className="container">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-mono tracking-widest text-wine font-semibold">
              Complete Silhouette Compendium
            </span>
            <h2 className="font-display text-2xl sm:font-display text-h2 font-semibold text-ink mt-0.5">
              Explore All 12 Diamond Cuts
            </h2>
            <p className="text-xs sm:text-sm text-muted mt-1.5">
              Click any silhouette to switch directly to its 4Cs masterclass guide.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-3.5">
            {diamondShapesData.map((item) => {
              const isCurrent = item.slug === shape.slug;
              return (
                <Link
                  key={item.slug}
                  href={`/guide/shape/${item.slug}`}
                  className={`group p-3.5 rounded-2xl border transition duration-300 flex flex-col items-center text-center ${ isCurrent ? "bg-wine/5 border-wine shadow-md ring-1 ring-wine" : "bg-surface border-border/80 hover:border-gold/60 hover:shadow-md" }`}
                >
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 mb-2.5 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center p-1.5 rounded-xl bg-surface-alt/40 border border-border/40">
                    <DiamondFacetSvg
                      shapeSlug={item.slug}
                      className="w-10 h-10 sm:w-12 sm:h-12"
                      fill={
                        isCurrent
                          ? "rgba(114,35,60,0.08)"
                          : "rgba(184,150,90,0.06)"
                      }
                      stroke={isCurrent ? "#72233C" : "var(--color-gold)"}
                      strokeWidth={1.3}
                    />
                  </div>
                  <h3 className="font-display text-xs sm:text-sm font-bold text-ink group-hover:text-wine transition-colors">
                    {item.shortName}
                  </h3>
                  <span className="text-[12px] text-muted mt-0.5">
                    {item.specs?.facetCount || "Brilliant Cut"}
                  </span>
                  <span className="mt-1.5 text-[12px] text-wine font-medium inline-flex items-center gap-1">
                    {isCurrent ? "Currently Viewing" : <>View Guide <ArrowRight className="w-2.5 h-2.5" /></>}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. MATCHING FINE JEWELLERY */}
      {relatedProducts.length > 0 && (
        <section
          id="related-jewellery"
          className="py-12 scroll-mt-20 border-t border-border/60 bg-white"
        >
          <div className="container">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
              <div>
                <span className="text-xs font-mono tracking-widest text-gold-dark font-semibold">
                  Handcrafted In 18K Gold &amp; Platinum
                </span>
                <h2 className="font-display text-2xl sm:font-display text-h2 font-semibold text-ink mt-0.5">
                  Fine Jewellery Featuring {shape.shortName} Diamonds
                </h2>
              </div>
              <Button
                variant="border"
                colorTheme="wine"
                size="sm"
                href="/shop"
                className="self-start sm:self-auto"
                rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
              >
                Explore Full Catalog
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map((product) => (
                <div
                  key={product.id}
                  className="group bg-surface rounded-2xl border border-border/80 overflow-hidden hover:shadow-lg transition duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-square overflow-hidden bg-surface-alt">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <Button
                        variant="unstyled"
                        onClick={() => handleAddToWishlist(product)}
                        aria-label="Add to Wishlist"
                        className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-surface/80 backdrop-blur-xs flex items-center justify-center text-ink hover:text-wine hover:bg-surface shadow-xs transition-colors"
                      >
                        ♡
                      </Button>
                    </div>

                    <div className="p-3.5">
                      <span className="text-[12px] tracking-wider text-muted">
                        {product.category}
                      </span>
                      <h4 className="font-display text-xs sm:text-sm font-semibold text-ink line-clamp-1 mt-0.5">
                        <Link
                          href={`/products/${product.slug}`}
                          className="hover:text-wine transition-colors"
                        >
                          {product.name}
                        </Link>
                      </h4>
                      <div className="flex items-baseline gap-2 mt-1.5">
                        <span className="text-xs sm:text-sm font-bold text-wine">
                          ₹{product.price.toLocaleString("en-IN")}
                        </span>
                        {product.compareAtPrice && (
                          <span className="text-[12.5px] text-muted line-through">
                            ₹{product.compareAtPrice.toLocaleString("en-IN")}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 pt-0">
                    <Button
                      variant="fill"
                      colorTheme="wine"
                      size="sm"
                      fullWidth
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Bag
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 8. VIP CONCIERGE CTA */}
      <section className="py-8 pb-16 bg-white">
        <div className="container">
          <div className="theme-dark rounded-3xl bg-gradient-to-r from-ink via-espresso to-espresso-deep text-white p-6 sm:p-10 border border-gold/30 shadow-xl relative overflow-hidden flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-xl space-y-2">
              <span className="text-xs font-mono tracking-widest text-gold font-semibold">
                Bespoke Diamond Graders
              </span>
              <h2 className="font-display text-2xl sm:font-display text-h2 font-semibold tracking-tight">
                Craft Your Dream {shape.shortName} Diamond Ring
              </h2>
              <p className="text-xs sm:text-sm text-cream/80 leading-relaxed">
                Our master gemologists source rough and certified diamonds tailored to your exact budget, color, and mounting requirements.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Button variant="fill" colorTheme="gold" size="md" href="/contact">
                Book VIP Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
