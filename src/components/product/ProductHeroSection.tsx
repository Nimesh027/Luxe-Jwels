"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  SafetyCertificateIcon,
  ThunderboltIcon,
  ShoppingBagIcon,
} from "@/components/icons";
import type { Product, Category } from "@/types";
import Button from "@/components/ui/Button";
import Rating from "@/components/ui/Rating";
import QuantitySelector from "@/components/ui/QuantitySelector";
import { useCart } from "@/hooks/useCart";
import { formatPrice } from "@/lib/utils";
import Section from "../common/Section";
import Breadcrumbs, { BreadcrumbItem } from "@/components/common/Breadcrumbs";

interface ProductHeroSectionProps {
  product: Product;
  category?: Category;
  images: string[];
  activeImageIndex: number;
  onSelectImage: (index: number) => void;
  onOpenLightbox: () => void;
  onOpenSizeGuide: () => void;
}

export default function ProductHeroSection({
  product,
  category,
  images,
  activeImageIndex,
  onSelectImage,
  onOpenLightbox,
  onOpenSizeGuide,
}: ProductHeroSectionProps) {
  const { add } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [selectedMetal, setSelectedMetal] = useState<"yellow" | "white" | "rose">("yellow");
  const [selectedSize, setSelectedSize] = useState<string>("18 inches");
  const [addEngraving, setAddEngraving] = useState(false);
  const [engravingText, setEngravingText] = useState("");

  return (
    <Section>
      {/* Breadcrumb Navigation */}
      <Breadcrumbs
        items={[
          ...(category ? [{ label: category.name, href: `/category/${category.slug}` }] : []),
          { label: product.name },
        ]}
      />

      {/* Hero Section Grid */}
      <div className="grid grid-cols-1 gap-split lg:grid-cols-12 lg:items-start">
        {/* Left Column: Image Gallery (7 cols on lg) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex flex-col-reverse gap-4 md:flex-row md:items-start w-full">
            {/* Thumbnail Strip */}
            <div className="flex gap-3 overflow-x-auto scroll-smooth shrink-0 md:w-20 md:flex-col md:overflow-y-visible [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={(e) => {
                    onSelectImage(idx);
                    e.currentTarget.scrollIntoView({
                      behavior: "smooth",
                      inline: "center",
                      block: "nearest",
                    });
                  }}
                  className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border-2 transition-all duration-200 cursor-pointer ${activeImageIndex === idx
                    ? "border-brown shadow-md ring-2 ring-brown/20 scale-95"
                    : "border-border/80 hover:border-gold opacity-75 hover:opacity-100 bg-white"
                    }`}
                >
                  <Image
                    src={img || "/images/product/diamond-ring.jpg"}
                    alt={`${product.name} angle ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main Showcase Frame */}
            <div
              onClick={onOpenLightbox}
              className="group relative aspect-[4/3] w-full min-h-[clamp(280px,calc(220px+20vw),440px)] max-h-[clamp(460px,32vw,620px)] flex-1 min-w-0 cursor-zoom-in overflow-hidden rounded-3xl border border-border/80 bg-offwhite-dark shadow-sm transition-all hover:shadow-md"
            >
              <Image
                src={images[activeImageIndex] || product.image || "/images/product/diamond-ring.jpg"}
                alt={product.name}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Floating Badges */}
              <div className="absolute top-4 left-4 flex flex-col items-start gap-2 z-10">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-ink/90 px-3.5 py-1.5 text-micro font-medium tracking-wide text-offwhite ring-1 ring-white/15 backdrop-blur-md shadow-md">
                  <SafetyCertificateIcon size={14} className="text-gold-light" /> 18K Hallmarked Gold
                </span>
                {product.compareAtPrice && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-white px-3.5 py-1.5 text-micro font-bold tracking-wide text-brown-dark ring-1 ring-brown/20 shadow-md">
                    SAVE{" "}
                    {Math.round(
                      ((product.compareAtPrice - product.price) / product.compareAtPrice) * 100
                    )}
                    %
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Product Info & Actions (5 cols on lg) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div>
            {/* Category Pill & Rating */}
            <div className="mb-2 flex items-center justify-between">
              <span className="text-caption font-semibold tracking-widest text-gold-dark">
                {category?.name || "Luxe Jewellery"}
              </span>
              <div className="flex items-center gap-1.5 text-caption text-muted">
                <Rating value={5} />
                <span className="font-semibold text-ink">4.9</span>
                <span>(124 reviews)</span>
              </div>
            </div>

            {/* Product Title */}
            <h1 className="font-display text-h2 font-medium text-ink md:text-h2">
              {product.name}
            </h1>
          </div>

          {/* Price Breakdown */}
          <div className="rounded-2xl border border-border/80 bg-white p-4 shadow-2xs">
            <div className="flex items-baseline gap-3">
              <span className="font-display text-h2 font-semibold text-brown">
                {formatPrice(product.price)}
              </span>
              {product.compareAtPrice && (
                <span className="text-h5 text-muted line-through">
                  {formatPrice(product.compareAtPrice)}
                </span>
              )}
              {product.compareAtPrice && (
                <span className="rounded-md bg-emerald-100 px-2 py-0.5 text-caption font-bold text-emerald-800">
                  Save {formatPrice(product.compareAtPrice - product.price)}
                </span>
              )}
            </div>
            <p className="mt-1 text-caption text-muted">
              Inclusive of all taxes. Free insured shipping across India.
            </p>

            {/* No-cost EMI Banner */}
            <div className="mt-3 flex items-center gap-2 rounded-xl bg-brown-soft/60 px-3 py-2 text-caption text-brown font-medium">
              <ThunderboltIcon size={16} />
              <span>
                Or 3 interest-free payments of{" "}
                <strong>{formatPrice(Math.round(product.price / 3))}</strong> with Zest/Klarna.
              </span>
            </div>
          </div>

          {/* Metal Swatch Selection */}
          <div>
            <span id="metal-color-label" className="mb-2 block text-caption font-semibold tracking-wider text-ink">
              Select Metal Color:{" "}
              <span className="font-normal text-muted capitalize">{selectedMetal} Gold</span>
            </span>
            <div role="radiogroup" aria-labelledby="metal-color-label" className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <button
                type="button"
                role="radio"
                aria-checked={selectedMetal === "yellow"}
                onClick={() => setSelectedMetal("yellow")}
                className={`flex items-center gap-2 rounded-full border px-4 py-2 text-caption font-medium transition-all cursor-pointer ${selectedMetal === "yellow"
                  ? "border-brown bg-brown/5 font-semibold text-brown shadow-xs"
                  : "border-border text-ink hover:border-gold"
                  }`}
              >
                <span className="h-4 w-4 rounded-full bg-amber-400 border border-amber-600/30" aria-hidden="true"></span>
                Yellow Gold
              </button>
              <button
                type="button"
                role="radio"
                aria-checked={selectedMetal === "white"}
                onClick={() => setSelectedMetal("white")}
                className={`flex items-center gap-2 rounded-full border px-4 py-2 text-caption font-medium transition-all cursor-pointer ${selectedMetal === "white"
                  ? "border-brown bg-brown/5 font-semibold text-brown shadow-xs"
                  : "border-border text-ink hover:border-gold"
                  }`}
              >
                <span className="h-4 w-4 rounded-full bg-slate-200 border border-slate-400/40" aria-hidden="true"></span>
                White Gold
              </button>
              <button
                type="button"
                role="radio"
                aria-checked={selectedMetal === "rose"}
                onClick={() => setSelectedMetal("rose")}
                className={`flex items-center gap-2 rounded-full border px-4 py-2 text-caption font-medium transition-all cursor-pointer ${selectedMetal === "rose"
                  ? "border-brown bg-brown/5 font-semibold text-brown shadow-xs"
                  : "border-border text-ink hover:border-gold"
                  }`}
              >
                <span className="h-4 w-4 rounded-full bg-rose-300 border border-rose-500/40" aria-hidden="true"></span>
                Rose Gold
              </button>
            </div>
          </div>

          {/* Size Selector */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <span id="size-label" className="text-caption font-semibold tracking-wider text-ink">
                Select Size / Length
              </span>
              <button
                type="button"
                onClick={onOpenSizeGuide}
                className="text-caption text-brown underline hover:text-brown-dark cursor-pointer"
              >
                Size Guide
              </button>
            </div>
            <div role="radiogroup" aria-labelledby="size-label" className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
              {["14 inches", "16 inches", "18 inches", "20 inches"].map((sz) => (
                <button
                  key={sz}
                  type="button"
                  role="radio"
                  aria-checked={selectedSize === sz}
                  onClick={() => setSelectedSize(sz)}
                  className={`rounded-xl border px-4 py-2 text-small font-medium transition-all cursor-pointer ${selectedSize === sz
                    ? "border-brown bg-brown text-white shadow-xs"
                    : "border-border bg-white text-ink hover:border-gold"
                    }`}
                >
                  {sz}
                </button>
              ))}
            </div>
          </div>

          {/* Custom Engraving Option */}
          <div className="rounded-2xl border border-border/80 bg-white p-4 shadow-2xs">
            <label className="flex items-center gap-2 text-caption font-medium text-ink cursor-pointer">
              <input
                type="checkbox"
                name="addEngraving"
                aria-controls="engraving-text"
                checked={addEngraving}
                onChange={(e) => setAddEngraving(e.target.checked)}
                className="accent-brown rounded cursor-pointer"
              />
              Add Free Custom Laser Engraving (Initial / Date)
            </label>
            {addEngraving && (
              <div className="mt-3">
                <input
                  id="engraving-text"
                  name="engravingText"
                  aria-label="Engraving text"
                  aria-describedby="engraving-text-count"
                  autoComplete="off"
                  type="text"
                  maxLength={12}
                  placeholder="Enter up to 12 characters (e.g. A & K ❤️)"
                  value={engravingText}
                  onChange={(e) => setEngravingText(e.target.value)}
                  className="w-full rounded-xl border border-border bg-offwhite/30 px-3.5 py-2 text-caption text-ink placeholder:text-muted/60 focus:border-brown focus:outline-none"
                />
                <span id="engraving-text-count" aria-live="polite" className="mt-1 block text-micro text-muted">
                  {12 - engravingText.length} characters remaining
                </span>
              </div>
            )}
          </div>

          {/* Action Buttons: Quantity + Add To Cart */}
          <div className="flex items-center gap-3">
            {/* Quantity Control */}
            <QuantitySelector value={quantity} onChange={setQuantity} size="lg" />

            {/* Add to Cart */}
            <Button
              variant="dark"
              leftIcon={<ShoppingBagIcon size={18} />}
              rounded="lg"
          className="flex-1 shadow-sm hover:shadow-md"
              onClick={() => add(product, quantity)}
            >
              Add To Cart
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
