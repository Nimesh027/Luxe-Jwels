"use client";

import Image from "next/image";
import Link from "next/link";
import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";
import Button from "@/components/ui/Button";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import { useAppSelector } from "@/store/hooks";
import { cn } from "@/lib/utils";
import type { Collection } from "@/types";

export default function CategoryGrid() {
  const collections = useAppSelector((state) => state.collections.items);

  if (!collections || collections.length === 0) return null;

  const displayCollections = collections.slice(0, 3);
  const heroItem = displayCollections[0];
  const secondaryItems = displayCollections.slice(1, 3);

  // Single reusable card render function for all collections with clean, consistent layout & positioning
  const renderCollectionCard = (
    item: Collection,
    isHero: boolean
  ) => (
    <Link
      key={item.id}
      href={`/collections/${item.slug}`}
      className={cn(
        "group relative block w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-ink/20 shadow-sm hover:shadow-xl transition-all duration-500",
        isHero
          ? "h-[260px] sm:h-[300px] md:h-[500px] lg:h-[540px]"
          : "h-[260px] sm:h-[300px] md:h-[238px] lg:h-[258px]"
      )}
    >
      <Image
        src={item.image}
        alt={item.name}
        fill
        priority={isHero}
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Smooth integrated gradient scrim for high-contrast, crystal-clear typography */}
      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-0 transition-opacity duration-500",
          isHero
            ? "bg-gradient-to-t from-black/90 via-black/40 to-transparent"
            : "bg-gradient-to-t from-black/90 via-black/40 to-transparent md:bg-gradient-to-l md:from-black/90 md:via-black/45 md:to-transparent"
        )}
      />

      {/* Typography Overlay - Properly aligned, responsive, and legible */}
      <div
        className={cn(
          "absolute inset-0 p-5 sm:p-7 md:p-8 lg:p-10 flex flex-col transition-all duration-300 z-10",
          isHero
            ? "justify-end items-center text-center"
            : "justify-end md:justify-center items-start md:items-end text-left md:text-right"
        )}
      >
        {/* Subtitle / Tagline */}
        {item.tagline && (
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-gold mb-1 sm:mb-1.5 drop-shadow-xs">
            {item.tagline}
          </span>
        )}

        {/* Collection Title */}
        <h3
          className={cn(
            "font-display text-cream font-normal tracking-wide leading-tight drop-shadow-md group-hover:text-gold transition-colors duration-300",
            isHero
              ? "text-2xl sm:text-3xl lg:text-4xl"
              : "text-xl sm:text-2xl lg:text-3xl"
          )}
        >
          {item.name}
        </h3>

        {/* CTA Link with Arrow */}
        <div
          className={cn(
            "mt-2 sm:mt-2.5 inline-flex items-center gap-1.5 text-[11px] sm:text-xs tracking-wider uppercase text-gold font-medium drop-shadow-xs group-hover:text-cream transition-colors",
            isHero && "justify-center"
          )}
        >
          <span>{isHero ? "Explore Collection" : "Shop Now"}</span>
          <ArrowRightIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );

  return (
    <Section className="bg-white">
      {/* Common Section Header */}
      <SectionTitle
        title="Shop By Collection"
        description="Discover masterfully crafted jewellery across our signature collections."
        align="center"
      />

      <div className="max-w-7xl mx-auto">
        {/* Asymmetric Bento Layout using single reusable card renderer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Main Hero Card (1st item) */}
          {heroItem && renderCollectionCard(heroItem, true)}

          {/* Secondary Stacked Cards (2nd & 3rd items) in a single loop */}
          <div className="flex flex-col gap-4 sm:gap-6 justify-between h-full">
            {secondaryItems.map((item) => renderCollectionCard(item, false))}
          </div>
        </div>

        {/* View All Collections Button */}
        <div className="mt-8 sm:mt-12 text-center">
          <Button
            href="/collections"
            variant="border"
            colorTheme="wine"
            size="lg"
            rightIcon={<ArrowRightIcon className="w-4 h-4" />}
            className="hover:shadow-md"
          >
            View All Collections
          </Button>
        </div>
      </div>
    </Section>
  );
}
