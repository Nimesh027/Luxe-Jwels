"use client";

import Image from "next/image";
import Link from "next/link";
import Section from "@/components/common/Section";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import { useAppSelector } from "@/store/hooks";

export default function BrandStory() {
  const brandStory = useAppSelector((state) => state.siteContent.brandStory);

  return (
    <Section className="bg-white">
        {/* 50/50 Balanced Grid: 45% Image, 55% Content with 60-80px Spacing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 sm:gap-12 lg:gap-16 xl:gap-20">
          {/* Image Column: 45% width on desktop, first on mobile */}
          <div className="order-1 lg:order-1 lg:col-span-5">
            <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-gold/25 shadow-lg">
              <Image
                src={brandStory.image}
                alt={brandStory.title}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Subtle Warm Amber / Gold Tint Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent opacity-60" />
            </div>
          </div>

          {/* Content Column: 55% width on desktop, second on mobile */}
          <div className="order-2 lg:order-2 lg:col-span-7 flex flex-col items-start gap-4 sm:gap-5">
            {/* Overline Eyebrow */}
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Artisan Heritage
            </span>

            {/* Main Headline */}
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-normal leading-[1.18] text-ink tracking-tight">
              {brandStory.title}
            </h2>

            {/* Subtle Gold Divider */}
            <div className="h-[2px] w-12 bg-gold/80" />

            {/* Story Description with 540px Max-Width & Generous Line-Height */}
            <p className="max-w-[540px] text-sm sm:text-base font-light leading-[1.8] text-muted">
              {brandStory.body}
            </p>

            {/* Premium Gold/Black Compact 44px Button */}
            <div className="pt-2">
              <Link
                href={brandStory.cta.href}
                className="inline-flex h-11 items-center gap-2.5 rounded-full bg-ink px-7 text-xs sm:text-sm font-semibold uppercase tracking-wider text-cream shadow-md transition-all duration-300 hover:bg-gold hover:text-ink hover:shadow-lg hover:shadow-gold/20"
              >
                <span>{brandStory.cta.label}</span>
                <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
    </Section>
  );
}
