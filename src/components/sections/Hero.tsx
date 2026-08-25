"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import Section from "@/components/common/Section";
import { useCarousel } from "@/hooks/useCarousel";
import { useAppSelector } from "@/store/hooks";
import { cn } from "@/lib/utils";

export default function Hero() {
  const slides = useAppSelector((state) => state.siteContent.heroSlides);
  const { index, goTo, next, prev } = useCarousel({
    itemCount: slides.length,
    autoplayMs: 6000,
  });
  const slide = slides[index];

  if (!slide) return null;

  const isDark = slide.theme === "dark";

  return (
    <Section className="!p-0" containerClassName="!p-0 !max-w-full">
      <div className="relative p-0 h-[480px] sm:h-[540px] md:h-[580px] lg:h-[640px] xl:h-[680px] w-full overflow-hidden select-none">
        <Image
          src={slide.image}
          alt={slide.heading}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center transition-all duration-700 ease-in-out"
        />

        {/* Subtle Right-Side Gradient Overlay for high text legibility without obscuring banner artwork */}
        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute inset-0 transition-opacity duration-700",
            /* Mobile: bottom-to-top soft gradient; Tablet/Desktop: right-to-left soft gradient starting from center-right */
            isDark
              ? "bg-gradient-to-t from-ink/80 via-ink/40 to-transparent sm:bg-gradient-to-l sm:from-ink/75 sm:via-ink/30 sm:to-transparent sm:left-[30%]"
              : "bg-gradient-to-t from-black/60 via-black/25 to-transparent sm:bg-gradient-to-l sm:from-black/55 sm:via-black/20 sm:to-transparent sm:left-[30%]"
          )}
        />

        <div className="relative h-full container mx-auto px-4 sm:px-8 lg:px-16 flex items-center justify-center sm:justify-end z-10">
          <div
            className={cn(
              "w-full max-w-lg lg:max-w-xl transition-all duration-500 ease-out",
              "p-4 sm:p-0",
              isDark ? "text-cream" : "text-cream"
            )}
          >
            {/* Tagline */}
            {slide.tagline && (
              <span className="inline-block text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase mb-2.5 text-gold">
                {slide.tagline}
              </span>
            )}

            {/* Title & Accent */}
            <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl font-normal leading-[1.15] tracking-tight mb-3 sm:mb-4 text-cream">
              {slide.heading}
              <br />
              <span className="font-medium italic text-gold">
                {slide.headingAccent}
              </span>
            </h1>

            {/* Description */}
            <p className="text-xs sm:text-sm lg:text-base leading-relaxed max-w-md mb-6 text-cream/90">
              {slide.subtext}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              {slide.ctas.map((cta) => {
                const isPrimary = cta.variant === "primary";
                return (
                  <Button
                    key={cta.label}
                    href={cta.href}
                    variant={isPrimary ? "fill" : "border"}
                    colorTheme={isPrimary ? "gold" : "cream"}
                    size="md"
                  >
                    {cta.label}
                  </Button>
                );
              })}
            </div>
          </div>
        </div>

        {/* {slides.length > 1 && (
          <>
            <Button
              variant="icon"
              colorTheme={isDark ? "dark" : "light"}
              size="icon"
              aria-label="Previous slide"
              onClick={prev}
              className="hidden sm:inline-flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20"
              leftIcon={
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              }
            />

            <Button
              variant="icon"
              colorTheme={isDark ? "dark" : "light"}
              size="icon"
              aria-label="Next slide"
              onClick={next}
              className="hidden sm:inline-flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20"
              leftIcon={
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              }
            />
          </>
        )} */}

        {slides.length > 1 && (
          <div className="absolute bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 flex items-center gap-2 sm:gap-2.5 z-20">
            {slides.map((item, dotIndex) => (
              <button
                key={item.id}
                type="button"
                aria-label={`Go to slide ${dotIndex + 1}`}
                onClick={() => goTo(dotIndex)}
                className={cn(
                  "h-1.5 sm:h-2 rounded-full transition-all duration-300 cursor-pointer",
                  dotIndex === index
                    ? "w-6 sm:w-8 bg-gold shadow-sm"
                    : isDark
                    ? "w-2 bg-cream/40 hover:bg-cream/70"
                    : "w-2 bg-ink/30 hover:bg-ink/60"
                )}
              />
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
