"use client";

import Image from "next/image";
import Section from "@/components/common/Section";
import Button from "@/components/ui/Button";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import { useAppSelector } from "@/store/hooks";

export default function NewCollection() {
  const newCollection = useAppSelector((state) => state.siteContent.newCollection);

  return (
    <Section className="!p-0" containerClassName="!p-0 !max-w-full">
      <div className="group relative flex min-h-[clamp(400px,calc(340px+16vw),680px)] w-full items-center overflow-hidden bg-ink">
        {/* Background Image: Shifted to center-right with enhanced brightness so jewellery is clearly visible */}
        <Image
          src={newCollection.image}
          alt={newCollection.title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[72%_center] sm:object-[66%_center] md:object-[62%_center] brightness-105 contrast-[1.02] transition-transform duration-1000 ease-out group-hover:scale-105"
        />

        {/* Directional Gradient: Crisp dark backing on the left for typography, open & bright on the right for jewellery */}
        <div className="absolute inset-0 bg-linear-to-r from-ink/95 via-ink/75 via-40% to-transparent hidden sm:block" />
        <div className="absolute inset-0 bg-linear-to-t from-ink/95 via-ink/80 to-ink/40 sm:hidden" />

        {/* Content Container */}
        <div className="container relative z-10 py-section">
          <div className="flex max-w-lg sm:max-w-xl md:max-w-2xl flex-col items-start gap-4 sm:gap-5">
            {/* Refined Gold Overline Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-ink/60 px-3.5 py-1 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-gold shrink-0 animate-pulse" />
              <span className="text-micro font-medium tracking-widest text-gold">
                {newCollection.subtitle || "New collection"}
              </span>
            </div>

            {/* 2-Line Controlled Sized Luxury Headline */}
            <h2 className="font-display text-h3 xs:text-h2 md:text-h1 lg:text-display font-light leading-tight text-offwhite tracking-tight drop-shadow-md">
              Modern Designs.
              <br />
              Timeless Craftsmanship.
            </h2>

            {/* Thin Gold Divider */}
            <div className="flex items-center gap-2 my-0.5">
              <span className="h-0.5 w-10 sm:w-12 bg-gold transition-all duration-500 group-hover:w-16 sm:group-hover:w-20" />
            </div>

            {/* Shortened Supporting Copy */}
            <p className="max-w-md sm:max-w-lg text-body font-light leading-relaxed text-offwhite/90">
              Discover brilliant diamonds and 18K gold creations, crafted for modern celebrations.
            </p>

            {/* CTA Button: 44-48px height with generous horizontal padding */}
            <div className="pt-2">
              <Button
                href={newCollection.cta.href}
                variant="fill"
                colorTheme="gold"
                size="lg"
                rightIcon={<ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
                className="shadow-lg shadow-gold/20 hover:shadow-gold/35"
              >
                {newCollection.cta.label || "Discover New Arrivals"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
