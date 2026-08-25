"use client";

import { useState, useEffect } from "react";
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(6);

  const images = instagram?.images || [];
  const total = images.length;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(2);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3);
      } else {
        setItemsPerView(6);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, total - itemsPerView);

  // Auto slide on responsive/mobile/tablet screens
  useEffect(() => {
    if (isPaused || maxIndex <= 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, [isPaused, maxIndex]);

  return (
    <Section className="bg-white" containerClassName="!max-w-full">
      {/* Centered Editorial Section Header */}
      <div className="text-center mb-8 sm:mb-12">
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

      {/* Responsive Auto-Sliding Track */}
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-1/2 xs:w-1/2 sm:w-1/3 lg:w-1/6 shrink-0 px-1.5 sm:px-2"
            >
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-[1/1.12] w-full overflow-hidden rounded-lg sm:rounded-xl bg-ink/10 shadow-2xs transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <Image
                  src={image}
                  alt={`Luxe Jewels Instagram Showcase ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                />

                {/* Smooth Dark Scrim & Hover Overlay with Instagram Icon */}
                <div className="absolute inset-0 bg-ink/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-ink shadow-md transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <InstagramIcon className="h-5 w-5 text-ink" />
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
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
