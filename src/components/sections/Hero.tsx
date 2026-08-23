"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import Section from "@/components/common/Section";
import { useCarousel } from "@/hooks/useCarousel";
import { useAppSelector } from "@/store/hooks";
import { cn } from "@/lib/utils";

export default function Hero() {
  const slides = useAppSelector((state) => state.siteContent.heroSlides);
  const { index, goTo } = useCarousel({ itemCount: slides.length, autoplayMs: 6000 });
  const slide = slides[index];

  if (!slide) return null;

  return (
    <Section className="py-0" containerClassName="max-w-none px-0">
      <div className="relative h-[520px] w-full overflow-hidden sm:h-[600px] lg:h-[680px]">
        <Image
          src={slide.image}
          alt={slide.heading}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/35" />
        <div className="relative flex h-full max-w-3xl flex-col items-start justify-center gap-4 px-6 sm:px-12 lg:px-20">
          <h1 className="font-display text-3xl leading-tight text-cream sm:text-5xl">
            {slide.heading}
            <br />
            <span className="text-gold">{slide.headingAccent}</span>
          </h1>
          <p className="max-w-md text-sm text-cream/85 sm:text-base">{slide.subtext}</p>
          <div className="mt-2 flex flex-wrap items-center gap-4">
            {slide.ctas.map((cta) => (
              <Button
                key={cta.label}
                href={cta.href}
                variant={cta.variant === "primary" ? "dark" : "secondary"}
              >
                {cta.label}
              </Button>
            ))}
          </div>
        </div>

        {slides.length > 1 && (
          <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2">
            {slides.map((item, dotIndex) => (
              <button
                key={item.id}
                type="button"
                aria-label={`Go to slide ${dotIndex + 1}`}
                onClick={() => goTo(dotIndex)}
                className={cn(
                  "h-2 w-2 rounded-full transition-colors",
                  dotIndex === index ? "bg-gold" : "bg-cream/60"
                )}
              />
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
