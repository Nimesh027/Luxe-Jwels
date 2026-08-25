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

  return (
    <Section className="bg-white" containerClassName="!max-w-full">
      {/* Centered Editorial Section Header */}
      <div className="mx-auto max-w-2xl text-center mb-10 sm:mb-14">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-normal text-ink tracking-tight">
          Follow the Luxe Jewels Story
        </h2>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2.5 inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium tracking-wider text-muted hover:text-gold transition-colors"
        >
          <InstagramIcon className="h-3.5 w-3.5 text-gold" />
          <span>{instagram.handle || "@luxe.jewels"}</span>
        </a>
      </div>

      {/* 6-Card Editorial Image Grid with 1:1.12 Ratio & Hover Effects */}
      <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4 lg:gap-4.5">
        {instagram.images.map((image, index) => (
          <a
            key={index}
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block aspect-[1/1.12] w-full overflow-hidden rounded-lg sm:rounded-xl bg-ink/10 shadow-2xs transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
          >
            <Image
              src={image}
              alt={`Luxe Jewels Instagram Showcase ${index + 1}`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 16vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
            />

            {/* Smooth Dark Scrim & Hover Overlay with Instagram Icon */}
            <div className="absolute inset-0 bg-ink/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-ink shadow-md transform scale-75 group-hover:scale-100 transition-transform duration-300">
                <InstagramIcon className="h-5 w-5 text-ink" />
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* View More On Instagram CTA Button */}
      <div className="mt-8 sm:mt-10 lg:mt-12 text-center">
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
