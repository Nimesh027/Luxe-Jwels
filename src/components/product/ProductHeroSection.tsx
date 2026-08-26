"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  SafetyCertificateOutlined,
  ThunderboltOutlined,
  ShoppingOutlined,
  RightOutlined,
} from "@ant-design/icons";
import type { Product, Category } from "@/types";
import Button from "@/components/ui/Button";
import Rating from "@/components/ui/Rating";
import QuantitySelector from "@/components/ui/QuantitySelector";
import { useCart } from "@/hooks/useCart";
import { formatPrice } from "@/lib/utils";
import Section from "../common/Section";

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
  const [selectedSize, setSelectedSize] = useState<string>("18 INCHES");
  const [addEngraving, setAddEngraving] = useState(false);
  const [engravingText, setEngravingText] = useState("");

  return (
    <Section>
      {/* Breadcrumb Navigation */}
      <nav
        aria-label="Breadcrumb"
        className="mb-8 flex items-center gap-2 text-xs uppercase tracking-wider text-muted"
      >
        <Link href="/" className="hover:text-gold transition-colors">
          Home
        </Link>
        <RightOutlined className="text-[9px] text-muted/60" />
        {category && (
          <>
            <Link
              href={`/category/${category.slug}`}
              className="hover:text-gold transition-colors"
            >
              {category.name}
            </Link>
            <RightOutlined className="text-[9px] text-muted/60" />
          </>
        )}
        <span className="font-semibold text-ink truncate max-w-[200px] md:max-w-none">
          {product.name}
        </span>
      </nav>

      {/* Hero Section Grid */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
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
                    ? "border-wine shadow-md ring-2 ring-wine/20 scale-95"
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
              className="group relative aspect-[4/3] w-full min-h-[300px] sm:min-h-[380px] md:min-h-[440px] max-h-[460px] flex-1 min-w-0 cursor-zoom-in overflow-hidden rounded-3xl border border-border/80 bg-cream-dark shadow-sm transition-all hover:shadow-md"
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
              <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                <span className="inline-flex items-center gap-1 rounded-full bg-wine/90 px-3.5 py-1 text-[11px] font-medium tracking-wide text-white backdrop-blur-md shadow-xs">
                  <SafetyCertificateOutlined /> 18K Hallmarked Gold
                </span>
                {product.compareAtPrice && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-gold px-3.5 py-1 text-[11px] font-semibold tracking-wide text-ink shadow-xs">
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
              <span className="text-xs font-semibold uppercase tracking-widest text-gold-dark">
                {category?.name || "Luxe Jewellery"}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-muted">
                <Rating value={5} />
                <span className="font-semibold text-ink">4.9</span>
                <span>(124 reviews)</span>
              </div>
            </div>

            {/* Product Title */}
            <h1 className="font-display text-3xl font-medium text-ink md:text-4xl">
              {product.name}
            </h1>
          </div>

          {/* Price Breakdown */}
          <div className="rounded-2xl border border-border/80 bg-surface p-4 shadow-2xs">
            <div className="flex items-baseline gap-3">
              <span className="font-display text-3xl font-semibold text-wine">
                {formatPrice(product.price)}
              </span>
              {product.compareAtPrice && (
                <span className="text-lg text-muted line-through">
                  {formatPrice(product.compareAtPrice)}
                </span>
              )}
              {product.compareAtPrice && (
                <span className="rounded-md bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-800">
                  Save {formatPrice(product.compareAtPrice - product.price)}
                </span>
              )}
            </div>
            <p className="mt-1 text-xs text-muted">
              Inclusive of all taxes. Free insured shipping across India.
            </p>

            {/* No-cost EMI Banner */}
            <div className="mt-3 flex items-center gap-2 rounded-xl bg-wine-soft/60 px-3 py-2 text-xs text-wine font-medium">
              <ThunderboltOutlined />
              <span>
                Or 3 interest-free payments of{" "}
                <strong>{formatPrice(Math.round(product.price / 3))}</strong> with Zest/Klarna.
              </span>
            </div>
          </div>

          {/* Metal Swatch Selection */}
          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-ink">
              Select Metal Color:{" "}
              <span className="font-normal text-muted capitalize">{selectedMetal} Gold</span>
            </label>
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <button
                type="button"
                onClick={() => setSelectedMetal("yellow")}
                className={`flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium transition-all cursor-pointer ${selectedMetal === "yellow"
                  ? "border-wine bg-wine/5 font-semibold text-wine shadow-xs"
                  : "border-border text-ink hover:border-gold"
                  }`}
              >
                <span className="h-4 w-4 rounded-full bg-amber-400 border border-amber-600/30"></span>
                Yellow Gold
              </button>
              <button
                type="button"
                onClick={() => setSelectedMetal("white")}
                className={`flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium transition-all cursor-pointer ${selectedMetal === "white"
                  ? "border-wine bg-wine/5 font-semibold text-wine shadow-xs"
                  : "border-border text-ink hover:border-gold"
                  }`}
              >
                <span className="h-4 w-4 rounded-full bg-slate-200 border border-slate-400/40"></span>
                White Gold
              </button>
              <button
                type="button"
                onClick={() => setSelectedMetal("rose")}
                className={`flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium transition-all cursor-pointer ${selectedMetal === "rose"
                  ? "border-wine bg-wine/5 font-semibold text-wine shadow-xs"
                  : "border-border text-ink hover:border-gold"
                  }`}
              >
                <span className="h-4 w-4 rounded-full bg-rose-300 border border-rose-500/40"></span>
                Rose Gold
              </button>
            </div>
          </div>

          {/* Size Selector */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <label className="text-xs font-semibold uppercase tracking-wider text-ink">
                Select Size / Length
              </label>
              <button
                type="button"
                onClick={onOpenSizeGuide}
                className="text-xs text-wine underline hover:text-wine-dark cursor-pointer"
              >
                Size Guide
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {["14 INCHES", "16 INCHES", "18 INCHES", "20 INCHES"].map((sz) => (
                <button
                  key={sz}
                  type="button"
                  onClick={() => setSelectedSize(sz)}
                  className={`rounded-xl border px-4 py-2 text-xs font-medium transition-all cursor-pointer ${selectedSize === sz
                    ? "border-wine bg-wine text-white shadow-xs"
                    : "border-border bg-white text-ink hover:border-gold"
                    }`}
                >
                  {sz}
                </button>
              ))}
            </div>
          </div>

          {/* Custom Engraving Option */}
          <div className="rounded-2xl border border-border/80 bg-surface p-4 shadow-2xs">
            <label className="flex items-center gap-2 text-xs font-medium text-ink cursor-pointer">
              <input
                type="checkbox"
                checked={addEngraving}
                onChange={(e) => setAddEngraving(e.target.checked)}
                className="accent-wine rounded cursor-pointer"
              />
              Add Free Custom Laser Engraving (Initial / Date)
            </label>
            {addEngraving && (
              <div className="mt-3">
                <input
                  type="text"
                  maxLength={12}
                  placeholder="Enter up to 12 characters (e.g. A & K ❤️)"
                  value={engravingText}
                  onChange={(e) => setEngravingText(e.target.value)}
                  className="w-full rounded-xl border border-border bg-cream/30 px-3.5 py-2 text-xs text-ink placeholder:text-muted/60 focus:border-wine focus:outline-none"
                />
                <span className="mt-1 block text-[10px] text-muted">
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
              className="flex-1 h-12 rounded-xl text-sm font-medium shadow-sm hover:shadow-md flex items-center justify-center gap-2 cursor-pointer"
              onClick={() => add(product, quantity)}
            >
              <ShoppingOutlined className="text-base" /> Add To Cart
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
