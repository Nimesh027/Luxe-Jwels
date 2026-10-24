"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ShieldCheck,
  Sparkles,
  ChevronDown,
  Info,
  Heart,
  ShoppingBag,
  HelpCircle,
  Gem,
  Calendar,
} from "lucide-react";
import type { GuideItemDetail } from "@/types/guide";
import {
  getGuidesByCategory,
  productsData,
} from "@/data";
import type { Product } from "@/types";
import Button from "@/components/ui/Button";
import PageHero from "@/components/common/PageHero";
import ProcessVisualizer from "./visualizers/ProcessVisualizer";
import GuideTabs, { guideHeroImages, guideCategoryNames } from "./GuideTabs";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addItem } from "@/store/slices/cartSlice";
import { toggleItem } from "@/store/slices/wishlistSlice";
import { setCartDrawerOpen } from "@/store/slices/uiSlice";

interface GuideDetailClientProps {
  item: GuideItemDetail;
}

export default function GuideDetailClient({ item }: GuideDetailClientProps) {
  const dispatch = useAppDispatch();
  const wishlistItems = useAppSelector((state) => state.wishlist.items);

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Sibling items for quick switching
  const siblings = useMemo(() => {
    return getGuidesByCategory(item.category);
  }, [item.category]);

  // Related products from mockData
  const matchingProducts = useMemo(() => {
    return productsData
      .filter((p) => {
        if (item.relatedProductIds?.includes(p.id)) return true;
        if (item.category === "gold") return p.category === "rings" || p.category === "necklaces";
        if (item.category === "silver") return p.category === "earrings" || p.category === "bracelets";
        return p.category === "rings" || p.category === "pendants";
      })
      .slice(0, 4);
  }, [item]);

  const handleAddToCart = (product: Product) => {
    dispatch(
      addItem({
        product,
        quantity: 1,
      })
    );
    dispatch(setCartDrawerOpen(true));
  };

  const handleToggleWishlist = (product: Product) => {
    dispatch(toggleItem(product));
  };

  const isShapeCategory = item.category === "shape" || item.category === "shapes";

  const categoryLabel =
    item.category === "gold"
      ? "Gold Purity & Karat Guide"
      : item.category === "silver"
      ? "Precious Silver Standards Guide"
      : isShapeCategory
      ? "Diamond Shapes & Silhouettes Guide"
      : "Diamond Types & Gemstone Guide";

  const categoryUrl = isShapeCategory ? "/guide/shape" : `/guide/${item.category}`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageHero
        title={item.name}
        subtitle={item.tagline}
        image={guideHeroImages[item.category] ?? guideHeroImages.all}
        breadcrumbs={[
          { label: "Guide & Learn", href: "/guide" },
          { label: guideCategoryNames[item.category] ?? item.category, href: categoryUrl },
          { label: item.shortName },
        ]}
      />

      <GuideTabs
        label={`${guideCategoryNames[item.category] ?? "Guide"} navigation`}
        activeId={item.slug}
        tabs={siblings.map((sib) => ({
          id: sib.slug,
          label: sib.shortName,
          href: `/guide/${sib.category === "shapes" ? "shape" : sib.category}/${sib.slug}`,
        }))}
      />

      {/* Overview */}
      <section className="container section-spacing-sm">
        <div className="grid items-center gap-10 lg:gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-4 flex items-center gap-2.5 text-eyebrow text-gold">
              <Gem className="h-4 w-4" />
              {categoryLabel}
            </div>

            <h2 className="mb-5 font-display text-h2 font-semibold leading-tight">Overview</h2>

            <p className="max-w-2xl text-[16px] leading-8 text-ink-soft md:text-[17px]">
              {item.overview}
            </p>

            {item.historyAndCraft && (
              <div className="mt-8 p-6 bg-cream border-l-2 border-gold max-w-2xl">
                <div className="text-[14px] font-semibold tracking-wide text-gold mb-2">
                  {isShapeCategory ? "Heritage & Facet Geometry" : "Heritage & Metallurgical Craft"}
                </div>
                <p className="text-sm leading-relaxed text-foreground/80">
                  {item.historyAndCraft}
                </p>
              </div>
            )}

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-ink text-white px-7 py-3.5 text-[14px] font-semibold tracking-wide transition hover:bg-brand"
              >
                <Calendar className="w-4 h-4" />
                Book Consultation
              </Link>
              <a
                href="#matching-jewellery"
                className="inline-flex items-center gap-2 border border-border-strong bg-white text-foreground px-7 py-3.5 text-[14px] font-semibold tracking-wide transition hover:border-gold hover:text-gold"
              >
                View Jewellery
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Luxury Framed Image */}
          <div className="relative mx-auto aspect-square w-full max-w-[520px] border border-border bg-white shadow-[0_35px_90px_-45px_rgba(0,0,0,0.35)] flex items-center justify-center p-6 group">
            <div className="absolute inset-6 border border-gold/20 pointer-events-none transition-transform duration-300 ease-out group-hover:scale-[1.02]" />
            
            <div className="relative w-full h-full">
              <Image
                src={item.detailImage || item.image}
                alt={`${item.name} - Luxe Jewels certified guide`}
                fill
                priority
                sizes="(min-width: 1024px) 520px, 100vw"
                className="object-contain p-8 drop-shadow-[0_25px_35px_rgba(0,0,0,0.2)] transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="absolute top-4 left-4 text-[12px] font-mono tracking-widest text-muted-foreground bg-white/90 backdrop-blur-xs px-3 py-1 border border-border">
              {item.hallmarkOrStamp}
            </div>

            <div className="absolute bottom-4 right-4 text-[12px] font-mono tracking-widest text-gold bg-white/90 backdrop-blur-xs px-3 py-1 border border-gold/30 font-bold">
              {item.purityOrOrigin}
            </div>
          </div>
        </div>
      </section>

      {/* 3. KEY METRICS STRIP (Proportions Bar) */}
      <section className="border-y border-border bg-muted-bg/50 px-4 sm:px-6 lg:px-8 section-spacing">
        <div className="mx-auto grid max-w-[1320px] gap-px overflow-hidden border border-border bg-border grid-cols-2 md:grid-cols-4">
          {item.metrics.map((metric) => (
            <div key={metric.label} className="bg-white p-6 sm:p-8">
              <div className="mb-2 text-eyebrow text-gold">
                {metric.label}
              </div>
              <div className="font-display text-h4 font-semibold text-foreground">
                {metric.value}
              </div>
              {metric.hint && (
                <div className="mt-1 text-[13px] text-muted truncate">
                  {metric.hint}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 4. OUR PROCESS / MASTERCLASS BREAKDOWN */}
      <section className="relative overflow-hidden bg-white px-4 sm:px-6 lg:px-8 section-spacing">
        <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-gold/10 blur-[120px]" />
        
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="mb-3 block sub-label font-bold tracking-[0.35em] text-gold">
                Our Process
              </span>
              <h2 className="font-display text-h2 font-semibold leading-tight">
                Our {item.shortName} Masterclass
              </h2>
            </div>
            <Link
              href={categoryUrl}
              className="inline-flex w-fit items-center whitespace-nowrap gap-2 bg-brand px-6 py-3 text-[14px] font-semibold tracking-wide text-white transition-colors hover:bg-foreground"
            >
              {isShapeCategory ? "All 12 Diamond Shapes" : `All ${item.category.charAt(0).toUpperCase() + item.category.slice(1)} Standards`}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* 4 Steps Stack with alternating layout */}
          <div className="space-y-12">
            {item.process.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={step.number}
                  className={`grid gap-8 lg:grid-cols-[0.9fr_1.4fr] lg:items-center ${ !isEven ? "lg:grid-cols-[1.4fr_0.9fr]" : "" }`}
                >
                  {/* Process Note Box */}
                  <div
                    className={`flex min-h-[190px] flex-col justify-center bg-cream p-8 text-center shadow-xs border border-border ${ !isEven ? "lg:order-2" : "lg:order-1" }`}
                  >
                    <span className="text-[14px] font-semibold tracking-wide text-gold mb-1">
                      Step {step.number}
                    </span>
                    <h3 className="mb-3 font-display text-h4 font-semibold text-foreground">
                      {step.number}. {step.title}
                    </h3>
                    {step.subtitle && (
                      <div className="text-xs font-semibold text-muted-foreground tracking-wider mb-2">
                        {step.subtitle}
                      </div>
                    )}
                    <div className="mx-auto mb-4 h-px w-14 bg-brand" />
                    <p className="mx-auto max-w-[320px] text-xs leading-6 text-muted-foreground">
                      {step.copy}
                    </p>
                  </div>

                  {/* Interactive Visualizer Diagram */}
                  <div className={`${!isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <ProcessVisualizer
                      step={step}
                      category={item.category}
                      accentColor={item.accentColor}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. BEST FOR SECTION (Exact styling as shapes/[shape]) */}
      <section className="mx-auto grid max-w-[1320px] gap-12 px-4 sm:px-6 lg:px-8 section-spacing lg:grid-cols-[0.8fr_1fr]">
        <div>
          <span className="mb-4 block text-eyebrow text-gold">
            Best For
          </span>
          <h2 className="mb-5 font-display text-h2 font-semibold leading-tight">
            Where {item.shortName} shines.
          </h2>
          <p className="text-lg leading-8 text-muted-foreground">
            {item.bestFor.summary}
          </p>

          {item.bestFor.recommendedJewellery && (
            <div className="mt-8 p-6 bg-cream rounded-xl border border-border">
              <div className="text-[14px] font-semibold tracking-wide text-gold mb-3">
                Recommended Fine Mountings
              </div>
              <ul className="space-y-2 text-sm text-foreground/80">
                {item.bestFor.recommendedJewellery.map((rec, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                    {rec}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="space-y-4">
          {item.bestFor.highlights.map((highlight, idx) => (
            <div
              key={idx}
              className="flex gap-4 border border-border bg-white p-6 shadow-xs hover:border-gold/30 transition-colors"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                <Check className="h-5 w-5" />
              </div>
              <p className="pt-1 text-base leading-7 text-foreground/80">
                {highlight}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. TECHNICAL SPECIFICATIONS TABLE */}
      {item.specs && item.specs.length > 0 && (
        <section className="bg-muted-bg/40 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-y border-border">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-10">
              <span className="text-eyebrow text-gold block mb-2">
                Certified Assay Data
              </span>
              <h2 className="font-display text-h2 font-semibold text-foreground">
                Technical Specifications & Testing Data
              </h2>
            </div>

            <div className="bg-white border border-border shadow-xs overflow-hidden">
              <div className="divide-y divide-border">
                {item.specs.map((spec, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-1 sm:grid-cols-3 p-4 sm:p-5 hover:bg-cream/50 transition-colors"
                  >
                    <div className="text-[14px] font-semibold tracking-wide text-gold mb-1 sm:mb-0">
                      {spec.label}
                    </div>
                    <div className="sm:col-span-2 text-sm font-medium text-foreground">
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 7. PROS & CONSIDERATIONS DUAL MATRIX */}
      <section className="container section-spacing">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Key Advantages */}
          <div className="p-8 bg-white border border-border shadow-xs">
            <div className="flex items-center gap-2.5 text-emerald-600 mb-6">
              <ShieldCheck className="w-5 h-5" />
              <h3 className="text-xl font-bold tracking-wider text-foreground">
                Key Advantages
              </h3>
            </div>
            <ul className="space-y-4">
              {item.pros.map((pro, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-foreground/80 leading-relaxed">
                  <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Considerations & Care */}
          <div className="p-8 bg-white border border-border shadow-xs">
            <div className="flex items-center gap-2.5 text-gold mb-6">
              <Info className="w-5 h-5" />
              <h3 className="text-xl font-bold tracking-wider text-foreground">
                Considerations & Care
              </h3>
            </div>
            <ul className="space-y-4">
              {item.considerations.map((con, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-foreground/80 leading-relaxed">
                  <span className="w-5 h-5 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                    !
                  </span>
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 8. MATCHING JEWELLERY SHOWCASE */}
      <section id="matching-jewellery" className="bg-cream py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-y border-border">
        <div className="mx-auto max-w-[1320px]">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <span className="text-eyebrow text-gold block mb-2">
                Curated Collection
              </span>
              <h2 className="font-display text-h2 font-semibold">
                Matching {item.shortName} Jewellery
              </h2>
            </div>
            <Link
              href="/shop"
              className="text-[14px] font-semibold tracking-wide text-gold hover:text-foreground inline-flex items-center gap-2"
            >
              Shop All Catalogue
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {matchingProducts.map((product) => {
              const isWishlisted = wishlistItems.some((w) => w.id === product.id);
              return (
                <div
                  key={product.id}
                  className="group rounded-[var(--radius-card)] bg-white border border-border shadow-xs hover:shadow-md transition flex flex-col"
                >
                  <div className="relative aspect-square w-full overflow-hidden bg-cream p-6">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    />
                    <button
                      onClick={() => handleToggleWishlist(product)}
                      aria-label="Wishlist"
                      className={`absolute top-3 right-3 p-2 rounded-full bg-white/90 shadow-xs transition-colors ${ isWishlisted ? "text-rose-500" : "text-muted hover:text-rose-500" }`}
                    >
                      <Heart className={`w-4 h-4 ${isWishlisted ? "fill-current" : ""}`} />
                    </button>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[14px] font-semibold tracking-wide text-gold">
                        {item.shortName}
                      </span>
                      <h4 className="font-semibold text-sm text-foreground mt-1 line-clamp-1">
                        {product.name}
                      </h4>
                      <div className="mt-2 text-base font-bold text-foreground">
                        ${product.price.toLocaleString()}
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-border flex items-center gap-2">
                      <Button
                        variant="fill"
                        size="sm"
                        onClick={() => handleAddToCart(product)}
                        className="w-full text-[14px] font-semibold tracking-wide flex items-center justify-center gap-1.5"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. BUYER FAQS ACCORDION */}
      {item.faqs && item.faqs.length > 0 && (
        <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 section-spacing">
          <div className="text-center mb-10">
            <span className="text-eyebrow text-gold block mb-2">
              Buyer Questions
            </span>
            <h2 className="font-display text-h2 font-semibold">Frequently Asked Questions</h2>
          </div>

          <div className="divide-y divide-border border-y border-border">
            {item.faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className="py-5">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between text-left gap-4 group cursor-pointer"
                  >
                    <span className="text-base font-bold text-foreground group-hover:text-gold transition-colors">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground transition-transform duration-200 shrink-0 ${ isOpen ? "rotate-180 text-gold" : "" }`}
                    />
                  </button>
                  {isOpen && (
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground pr-8">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* 10. EXPLORE MORE SIBLINGS GRID (Exact styling as shapes/[shape]) */}
      <section className="container section-spacing">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <span className="mb-3 block sub-label font-bold tracking-[0.35em] text-gold">
              Explore More
            </span>
            <h2 className="font-display text-h2 font-semibold">
              {isShapeCategory ? "Other Diamond Shapes & Silhouettes" : `Other ${item.category.charAt(0).toUpperCase() + item.category.slice(1)} Standards`}
            </h2>
          </div>
          <Link
            href={categoryUrl}
            className="hidden items-center gap-2 text-[14px] font-semibold tracking-wide text-foreground/60 hover:text-gold md:flex"
          >
            {isShapeCategory ? "All 12 Diamond Shapes" : `All ${siblings.length} Standards`}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-px overflow-hidden border border-border bg-border sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {siblings
            .filter((s) => s.slug !== item.slug)
            .map((sib) => {
              const sibCategory = sib.category === "shapes" ? "shape" : sib.category;
              return (
                <Link
                  key={sib.slug}
                  href={`/guide/${sibCategory}/${sib.slug}`}
                  className="group bg-white p-5 transition-colors hover:bg-muted-bg/60 flex flex-col items-center text-center"
                >
                  <div className="relative mb-4 aspect-square w-full bg-muted-bg overflow-hidden">
                    <Image
                      src={sib.image}
                      alt={`${sib.name}`}
                      fill
                      sizes="(min-width: 768px) 25vw, 50vw"
                      className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="text-[14px] font-semibold tracking-wide text-gold">
                    {sib.shortName}
                  </div>
                  <div className="text-[13px] text-muted mt-1">
                    {sib.hallmarkOrStamp}
                  </div>
                </Link>
              );
            })}
        </div>
      </section>

      {/* 11. LUXURY CONCIERGE BANNER */}
      <section className="theme-dark bg-ink text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/15 via-transparent to-transparent pointer-events-none" />
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <span className="text-eyebrow text-gold block mb-3">
            Bespoke Concierge
          </span>
          <h2 className="font-display text-h2 font-semibold mb-4">
            Need Expert Gemological Guidance?
          </h2>
          <p className="text-base text-stone-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Our certified gemologists and master goldsmiths are available for complimentary one-on-one virtual or in-boutique consultations to guide your metal and gemstone selection.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-brand text-white px-8 py-3.5 text-[14px] font-semibold tracking-wide hover:bg-white hover:text-black transition-colors"
            >
              Schedule Consultation
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
