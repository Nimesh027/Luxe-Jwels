"use client";

import Image from "next/image";
import Link from "next/link";
import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";
import Button from "@/components/ui/Button";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import { useAppSelector } from "@/store/hooks";

export default function Collections() {
  const collections = useAppSelector((state) => state.collections.items);

  if (!collections || collections.length === 0) return null;

  // Display only the top 3 featured collections
  const displayCollections = collections.slice(0, 3);

  return (
    <Section className="bg-white">
      {/* Section Title */}
      <SectionTitle
        // tagline="CURATED SELECTIONS"
        title="Explore Our Signature Collections"
        description="Handcrafted fine jewelry suites curated for every expression of love, legacy, and elegance."
        align="center"
      />

      {/* 3-Card Responsive Grid with Luxury Dimensions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
        {displayCollections.map((collection) => (
          <Link
            key={collection.id}
            href={`/collections/${collection.slug}`}
            className="group relative block h-[380px] sm:h-[420px] lg:h-[460px] w-full overflow-hidden rounded-2xl sm:rounded-3xl bg-ink/30 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl"
          >
            {/* Hero Card Image with Subtle Scale */}
            <Image
              src={collection.image}
              alt={collection.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Unified Base Scrim for Visual Balance */}
            <div className="absolute inset-0 bg-ink/15 transition-opacity duration-500 group-hover:opacity-10" />

            {/* Deep Bottom Gradient for Razor-Sharp Typography */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 via-35% to-transparent transition-opacity duration-500 group-hover:from-black/90" />

            {/* Subtle Gold Border Halo on Hover */}
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border border-white/10 transition-colors duration-500 group-hover:border-gold/50" />

            {/* Bottom-Left Aligned Text & Hover Action */}
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 z-10 flex flex-col justify-end">
              <h3 className="font-display text-xl sm:text-2xl font-normal text-cream tracking-wide leading-snug drop-shadow-md transition-colors duration-300 group-hover:text-gold">
                {collection.name}
              </h3>

              <p className="mt-1.5 text-xs sm:text-sm font-light tracking-wide text-cream/80 drop-shadow-xs">
                {collection.tagline}
              </p>

              {/* Smooth Slide-in Action Link */}
              <div className="mt-4 flex items-center gap-1.5 text-xs font-medium tracking-widest uppercase text-gold">
                <span>Explore Collection</span>
                <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Elegant View All Button */}
      <div className="mt-10 sm:mt-14 text-center">
        <Button
          href="/collections"
          variant="border"
          colorTheme="wine"
          size="lg"
          rightIcon={<ArrowRightIcon className="h-4 w-4" />}
          className="hover:shadow-md font-medium"
        >
          View All Collections
        </Button>
      </div>
    </Section>
  );
}
