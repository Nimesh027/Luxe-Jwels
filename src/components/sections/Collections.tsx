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
    <Section className="bg-[#FAF7F2] py-12 sm:py-16">
      {/* Section Title */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
        <span className="inline-block text-[11px] sm:text-[12px] uppercase tracking-[0.25em] text-[#B38E5D] font-medium mb-2.5">
          Curated Selections
        </span>
        <h2 className="font-display text-[28px] sm:text-[34px] md:text-[40px] text-[#141414] font-normal tracking-tight leading-[1.15]">
          Explore Our Signature Collections
        </h2>
        <p className="font-body text-[13.5px] sm:text-[15px] text-[#78716A] font-light mt-2.5 leading-relaxed">
          Handcrafted fine jewelry suites curated for every expression of love, legacy, and elegance.
        </p>
      </div>

      {/* 3-Card Responsive Grid with Luxury Dimensions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
        {displayCollections.map((collection, index) => (
          <Link
            key={collection.id}
            href={`/collections/${collection.slug}`}
            className="group relative block h-[400px] sm:h-[440px] lg:h-[480px] w-full overflow-hidden rounded-2xl sm:rounded-3xl bg-[#141210] shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border border-[#E8DFD5] hover:border-[#B38E5D]/50"
          >
            {/* Hero Card Image with Smooth Scale */}
            <Image
              src={collection.image}
              alt={collection.name}
              fill
              priority={index === 0}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108 brightness-[0.96] contrast-[1.04]"
            />

            {/* Ambient Base Scrim */}
            <div className="absolute inset-0 bg-black/15 transition-opacity duration-500 group-hover:opacity-5" />

            {/* Deep Velvety Bottom Gradient for Razor-Sharp Typography */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0c0a]/95 via-[#0e0c0a]/60 via-40% to-transparent transition-opacity duration-500" />


            {/* Bottom Content Area */}
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 md:p-8 z-10 flex flex-col justify-end text-left">
              {/* Tagline */}
              <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.24em] font-medium text-[#C5A059] mb-1 drop-shadow-xs">
                {collection.tagline}
              </span>

              {/* Title */}
              <h3 className="font-display text-[24px] sm:text-[27px] md:text-[29px] font-normal text-white tracking-tight leading-snug drop-shadow-sm group-hover:text-[#F4EDE4] transition-colors">
                {collection.name}
              </h3>

              {/* Interactive Explore Link */}
              <div className="mt-4 flex items-center gap-2 text-[12.5px] sm:text-[13px] font-medium tracking-widest text-[#EDE7DE] group-hover:text-white transition-colors">
                <span>Explore Collection</span>
                <span className="w-6 h-6 rounded-full bg-white/15 group-hover:bg-[#B38E5D] group-hover:text-white flex items-center justify-center transition-all duration-300">
                  <ArrowRightIcon className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
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
          className="hover:shadow-md font-medium text-[13.5px] tracking-wider px-8 py-3 rounded-full"
        >
          View All Collections
        </Button>
      </div>
    </Section>
  );
}
