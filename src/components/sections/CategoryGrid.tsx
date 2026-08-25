"use client";

import Image from "next/image";
import Link from "next/link";
import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";
import Button from "@/components/ui/Button";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import { useAppSelector } from "@/store/hooks";

export default function CategoryGrid() {
  const categories = useAppSelector((state) => state.categories.items);

  if (!categories || categories.length === 0) return null;

  // Keep only 3 main categories visible initially based on the reference layout
  const mainCategories = categories.slice(0, 3);
  const heroCategory = mainCategories[0];
  const stackedCategories = mainCategories.slice(1, 3);

  return (
    <Section className="py-12 sm:py-16 md:py-20 bg-white">
      {/* Common Section Header */}
      <SectionTitle
        tagline="CURATED CATEGORIES"
        title="Shop By Category"
        description="Discover masterfully crafted jewellery across our signature categories."
        align="center"
      />

      <div className="max-w-7xl mx-auto">
        {/* 3-Card Asymmetric Bento Layout Matching Reference UI */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Left Main Large Hero Card (Necklaces) */}
          {heroCategory && (
            <Link
              href={`/category/${heroCategory.slug}`}
              className="group relative block w-full h-[340px] sm:h-[420px] md:h-[480px] lg:h-[520px] rounded-2xl sm:rounded-3xl overflow-hidden bg-ink/10 shadow-xs hover:shadow-lg transition-all duration-500"
            >
              <Image
                src={heroCategory.image}
                alt={heroCategory.name}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Subtle Gradient Shadow for Typography Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent transition-opacity duration-300" />

              {/* Bottom-Centered Typography Overlay Matching Reference Image */}
              <div className="absolute inset-0 p-6 sm:p-8 md:p-10 flex flex-col justify-end items-center text-center">
                <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-gold mb-1 sm:mb-2">
                  SIGNATURE COLLECTION
                </span>
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl text-cream font-normal tracking-wide drop-shadow-md group-hover:text-gold transition-colors duration-300">
                  {heroCategory.name}
                </h3>
                <div className="mt-2.5 inline-flex items-center gap-1.5 text-xs tracking-wider uppercase text-gold font-medium opacity-90 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">
                  <span>Explore Collection</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          )}

          {/* Right Stacked 2 Cards (Earrings & Rings) */}
          <div className="flex flex-col gap-4 sm:gap-6 justify-between h-full">
            {stackedCategories.map((cat, idx) => (
              <Link
                key={cat.id}
                href={`/category/${cat.slug}`}
                className="group relative block w-full h-[160px] sm:h-[198px] md:h-[228px] lg:h-[248px] rounded-2xl sm:rounded-3xl overflow-hidden bg-ink/10 shadow-xs hover:shadow-lg transition-all duration-500"
              >
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Soft directional gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent sm:bg-gradient-to-l sm:from-black/65 sm:via-black/25 sm:to-transparent transition-opacity duration-300" />

                {/* Side-aligned Typography Overlay Matching Reference Image */}
                <div className="absolute inset-0 p-5 sm:p-6 lg:p-8 flex flex-col justify-end sm:justify-center items-start sm:items-end text-left sm:text-right">
                  <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase text-gold mb-1">
                    {idx === 0 ? "ELEGANT DESIGNS" : "18KT FINE GOLD"}
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl lg:text-3xl text-cream font-normal tracking-wide drop-shadow-md group-hover:text-gold transition-colors duration-300">
                    {cat.name}
                  </h3>
                  <div className="mt-1.5 inline-flex items-center gap-1.5 text-xs tracking-wider uppercase text-gold font-medium opacity-90 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">
                    <span>Shop Now</span>
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* View All Categories Button */}
        <div className="mt-8 sm:mt-12 text-center">
          <Button
            href="/collections"
            variant="border"
            colorTheme="wine"
            size="lg"
            rightIcon={<ArrowRightIcon className="w-4 h-4" />}
            className="hover:shadow-md"
          >
            View All Categories
          </Button>
        </div>
      </div>
    </Section>
  );
}
