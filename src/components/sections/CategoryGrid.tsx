"use client";

import Image from "next/image";
import Link from "next/link";
import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";
import Button from "@/components/ui/Button";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import { useAppSelector } from "@/store/hooks";
import { cn } from "@/lib/utils";
import type { Category } from "@/types";

export default function CategoryGrid() {
  const categories = useAppSelector((state) => state.categories.items);

  if (!categories || categories.length === 0) return null;

  // Select the 5 primary jewelry product categories
  const mainCategories = categories.filter(
    (c) => c.slug !== "mens-collection" && c.slug !== "womens-collection"
  );
  const displayCategories =
    mainCategories.length >= 5 ? mainCategories.slice(0, 5) : categories.slice(0, 5);

  const heroCategory = displayCategories[0]; // Hero category (Necklaces)
  const subCategories = displayCategories.slice(1); // 4 other categories (Earrings, Rings, Bracelets, Pendants)

  const categoryTaglines: Record<string, string> = {
    necklaces: "Chokers & Heritage Chains",
    earrings: "Studs & Drops",
    rings: "Solitaires & Bands",
    bracelets: "Cuffs & Tennis Bangles",
    pendants: "Diamond Charms",
  };

  const renderCategoryCard = (item: Category, isHero: boolean) => {
    const tagline = categoryTaglines[item.slug] || "Handcrafted Fine Jewellery";

    return (
      <Link
        key={item.id}
        href={`/category/${item.slug}`}
        className={cn(
          "group relative block w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-ink/20 shadow-sm hover:shadow-xl transition-all duration-500",
          isHero
            ? "h-[clamp(280px,calc(200px+25vw),420px)] md:h-full"
            : "h-[clamp(200px,calc(170px+5vw),300px)]"
        )}
      >
        <Image
          src={item.image}
          alt={item.name}
          fill
          priority={isHero}
          sizes={isHero ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Multi-stage gradient scrim */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-90"
        />

        {/* Subtle border glow on hover */}
        <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border border-white/10 transition-colors duration-500 group-hover:border-gold/50" />

        {/* Content Typography */}
        <div className="absolute inset-0 p-5 sm:p-6 md:p-8 flex flex-col justify-end items-start text-left transition-all duration-300 z-10">
          <span className="text-micro sm:text-caption font-semibold tracking-widest text-gold mb-1 drop-shadow-xs">
            {tagline}
          </span>

          <h3
            className={cn(
              "font-display text-offwhite font-normal tracking-wide leading-tight drop-shadow-md group-hover:text-gold transition-colors duration-300",
              isHero ? "text-h2" : "text-h3"
            )}
          >
            {item.name}
          </h3>

          <div className="mt-2 inline-flex items-center gap-1.5 text-micro sm:text-caption tracking-wider text-gold font-medium drop-shadow-xs group-hover:text-offwhite transition-colors">
            <span>Explore {item.name}</span>
            <ArrowRightIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    );
  };

  return (
    <Section className="bg-white">
      {/* Category Section Header */}
      <SectionTitle
        title="Shop By Category"
        description="Discover masterfully crafted jewellery across our signature categories."
        align="center"
      />

      <div>
        {/* Asymmetric Bento Layout: 1 Hero Category on left, 4 Grid Categories on right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-grid">
          {/* Main Hero Category Card */}
          {heroCategory && renderCategoryCard(heroCategory, true)}

          {/* 4 Secondary Category Cards in 2x2 grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-grid">
            {subCategories.map((item) => renderCategoryCard(item, false))}
          </div>
        </div>

        {/* View All Categories Button */}
        <div className="mt-8 sm:mt-12 text-center">
          <Button
            href="/collections"
            variant="border"
            colorTheme="brown"
            size="lg"
            rightIcon={<ArrowRightIcon className="h-4 w-4" />}
            className="hover:shadow-md"
          >
            View All Categories
          </Button>
        </div>
      </div>
    </Section>
  );
}
