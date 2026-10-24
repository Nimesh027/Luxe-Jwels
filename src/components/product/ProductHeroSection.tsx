"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  HeartIcon,
  SafetyCertificateIcon,
  ShoppingBagIcon,
  ThunderboltIcon,
} from "@/components/icons";
import type { Product, Category } from "@/types";
import Button from "@/components/ui/Button";
import { useCart } from "@/hooks/useCart";
import { useWishlist } from "@/hooks/useWishlist";
import { formatPrice } from "@/lib/utils";
import Breadcrumbs from "@/components/common/Breadcrumbs";

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
  const { toggle, isWishlisted } = useWishlist();
  const wishlisted = isWishlisted(product.id);

  const [quantity, setQuantity] = useState(1);
  const [selectedMetal, setSelectedMetal] = useState<"yellow" | "white" | "rose">("yellow");
  const [selectedSize, setSelectedSize] = useState<number>(7);

  const [isAdded, setIsAdded] = useState(false);

  const sizes = [6, 7, 8, 9, 10, 11, 12];

  const handleAddToCart = () => {
    add(product, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleBuyNow = () => {
    add(product, quantity);
    window.location.href = "/cart";
  };

  return (
    <section className="w-full bg-[#FAF7F2] py-6 sm:py-10 border-b border-[#EAE4DC]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: category?.name || "Rings", href: `/category/${category?.slug || "rings"}` },
              { label: product.name },
            ]}
          />
        </div>

        {/* 2-Column Product Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* LEFT: Image Gallery with Main View & Thumbnail Strip */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {/* Main Image Frame */}
            <div
              onClick={onOpenLightbox}
              className="relative aspect-square w-full rounded-2xl overflow-hidden bg-white border border-[#EAE4DC] shadow-sm cursor-zoom-in"
            >
              <Image
                src={images[activeImageIndex] || product.image || "/images/revamp/halo-ring.jpg"}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>

            {/* Thumbnail Gallery Strip */}
            <div className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-none">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => onSelectImage(idx)}
                  className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 bg-white transition-all cursor-pointer shrink-0 ${ activeImageIndex === idx ? "border-[#B38E5D] ring-2 ring-[#B38E5D]/30" : "border-[#EAE4DC] opacity-75 hover:opacity-100" }`}
                >
                  <Image
                    src={img || product.image}
                    alt={`${product.name} angle ${idx + 1}`}
                    fill
                    className="object-cover object-center"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: Buy Box Information & Selectors */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            {/* Title & Star Rating */}
            <div>
              <h1 className="font-display text-[28px] sm:text-[34px] md:text-[38px] font-medium text-[#141414] leading-tight mb-2">
                {product.name}
              </h1>

              <div className="flex items-center gap-2">
                <div className="flex text-[#B38E5D] text-[14px]">
                  {"★".repeat(5)}
                </div>
                <span className="font-display text-[15px] font-semibold text-[#141414]">
                  4.8
                </span>
                <span className="text-[13px] text-[#8C827A]">
                  (124 reviews)
                </span>
              </div>
            </div>

            {/* Price Row */}
            <div className="flex items-baseline gap-3 py-2 border-y border-[#EAE4DC]">
              <span className="font-display text-[26px] sm:text-[30px] font-semibold text-[#141414]">
                {formatPrice(product.price)}
              </span>
              {product.compareAtPrice && (
                <span className="font-body text-[16px] text-[#8C827A] line-through">
                  {formatPrice(product.compareAtPrice)}
                </span>
              )}
              {product.compareAtPrice && (
                <span className="px-2 py-0.5 rounded text-[12px] font-semibold bg-[#227248]/10 text-[#227248]">
                  28% OFF
                </span>
              )}
            </div>

            {/* 4 Feature Badges */}
            <div className="grid grid-cols-2 gap-2 text-[12.5px] text-[#3A3530]">
              <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-[#EAE4DC]">
                <span className="text-[#B38E5D]">💎</span>
                <span>Certified Diamond</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-[#EAE4DC]">
                <span className="text-[#B38E5D]">✨</span>
                <span>Lifetime Polish</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-[#EAE4DC]">
                <span className="text-[#B38E5D]">🚚</span>
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-[#EAE4DC]">
                <span className="text-[#B38E5D]">🔄</span>
                <span>Easy 30-Day Return</span>
              </div>
            </div>

            {/* Metal Selector */}
            <div>
              <label className="block text-[12.5px] font-semibold tracking-wider text-[#141414] mb-2">
                Metal:{" "}
                <span className="font-normal capitalize text-[#78716A]">
                  {selectedMetal} Gold
                </span>
              </label>
              <div className="flex items-center gap-2.5">
                {[
                  { id: "yellow", label: "Yellow Gold", color: "#E5C158" },
                  { id: "white", label: "White Gold", color: "#E0E0E0" },
                  { id: "rose", label: "Rose Gold", color: "#E8B298" },
                ].map((metal) => (
                  <button
                    key={metal.id}
                    type="button"
                    onClick={() => setSelectedMetal(metal.id as any)}
                    className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-[12.5px] font-medium transition-all cursor-pointer ${ selectedMetal === metal.id ? "border-[#B38E5D] bg-[#B38E5D]/10 text-[#B38E5D] font-semibold shadow-xs" : "border-[#EAE4DC] bg-white text-[#141414] hover:border-[#B38E5D]" }`}
                  >
                    <span
                      className="w-3.5 h-3.5 rounded-full border border-black/20"
                      style={{ backgroundColor: metal.color }}
                    />
                    <span>{metal.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-[12.5px] font-semibold tracking-wider text-[#141414]">
                  Size
                </label>
                <button
                  type="button"
                  onClick={onOpenSizeGuide}
                  className="text-[12px] text-[#B38E5D] hover:underline font-medium cursor-pointer"
                >
                  Size Guide
                </button>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                {sizes.map((sz) => (
                  <button
                    key={sz}
                    type="button"
                    onClick={() => setSelectedSize(sz)}
                    className={`w-9 h-9 rounded-lg border text-[13px] font-medium transition-all cursor-pointer flex items-center justify-center ${ selectedSize === sz ? "border-[#B38E5D] bg-[#B38E5D] text-white shadow-xs" : "border-[#EAE4DC] bg-white text-[#141414] hover:border-[#B38E5D]" }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Dual CTA Buttons: Add to Cart & Buy Now */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                type="button"
                onClick={handleAddToCart}
                className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-[#B38E5D] hover:bg-[#9C7748] text-white text-[14px] font-medium tracking-wide shadow-md transition-colors cursor-pointer text-center active:scale-[0.98]"
              >
                {isAdded ? "Added to Cart ✓" : "Add to Cart"}
              </button>

              <button
                type="button"
                onClick={handleBuyNow}
                className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-[#141414] hover:bg-[#252525] text-white text-[14px] font-medium tracking-wide shadow-md transition-colors cursor-pointer text-center"
              >
                Buy Now
              </button>
            </div>

            {/* Secondary Actions: Wishlist & Share */}
            <div className="flex items-center gap-6 pt-1 text-[13px] text-[#78716A]">
              <button
                type="button"
                onClick={() => toggle(product)}
                className="flex items-center gap-2 hover:text-[#B38E5D] cursor-pointer"
              >
                <HeartIcon size={16} filled={wishlisted} className={wishlisted ? "text-[#B38E5D]" : ""} />
                <span>{wishlisted ? "In Wishlist" : "Add to Wishlist"}</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({ title: product.name, url: window.location.href });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert("Link copied to clipboard!");
                  }
                }}
                className="flex items-center gap-2 hover:text-[#B38E5D] cursor-pointer"
              >
                <span>🔗</span>
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
