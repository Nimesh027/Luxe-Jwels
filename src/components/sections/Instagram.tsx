"use client";

import Image from "next/image";
import Section from "@/components/common/Section";
import Button from "@/components/ui/Button";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import { useAppSelector } from "@/store/hooks";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function Instagram() {
  const instagram = useAppSelector((state) => state.siteContent.instagram);
  const images = instagram?.images || [];

  // Duplicate images for seamless 50% translation infinite loop
  const loopImages = [...images, ...images];

  return (
    <Section className="bg-white overflow-hidden" containerClassName="!max-w-full !px-0">
      {/* Centered Editorial Section Header */}
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="font-display text-h2 md:text-h2 font-normal text-ink tracking-tight">
          Follow the Luxe Jewels Story
        </h2>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2.5 inline-flex items-center gap-1.5 text-body font-medium tracking-wider text-muted hover:text-gold transition-colors"
        >
          <InstagramIcon className="h-3.5 w-3.5 text-gold" />
          <span>{instagram.handle || "@luxe.jewels"}</span>
        </a>
      </div>

      {/* Infinite Seamless Loop Marquee Track */}
      <div className="group relative w-full overflow-hidden">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]">
          {loopImages.map((image, index) => (
            <div
              key={index}
              className="w-[180px] xs:w-[210px] sm:w-[240px] md:w-[270px] lg:w-[290px] shrink-0 px-2 sm:px-2.5"
            >
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group/card relative block aspect-[1/1.12] w-full overflow-hidden rounded-xl bg-ink/10 shadow-2xs transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <Image
                  src={image}
                  alt={`Luxe Jewels Instagram Showcase ${(index % images.length) + 1}`}
                  fill
                  sizes="(max-width: 640px) 210px, 290px"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover/card:scale-108"
                />

                {/* Smooth Dark Scrim & Hover Overlay with Instagram Icon */}
                <div className="absolute inset-0 bg-ink/30 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-ink shadow-md transform scale-75 group-hover/card:scale-100 transition-transform duration-300">
                    <InstagramIcon className="h-5 w-5 text-ink" />
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* View More On Instagram CTA Button */}
      <div className="mt-8 sm:mt-10 lg:mt-12 text-center px-4">
        <Button
          href="https://instagram.com"
          variant="border"
          colorTheme="wine"
          size="lg"
          rightIcon={<ArrowRightIcon className="h-4 w-4" />}
          className="hover:shadow-md font-medium"
        >
          View More On Instagram
        </Button>
      </div>
    </Section>
  );
}
