"use client";

import { useState, useEffect } from "react";
import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";
import ReviewCard from "@/components/common/ReviewCard";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import { useAppSelector } from "@/store/hooks";
import Button from "@/components/ui/Button";

export default function Testimonials() {
  const testimonials = useAppSelector((state) => state.testimonials.items);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(4);

  const total = testimonials?.length || 0;

  // Responsive items-per-view detection
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(4);
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  // Max sliding index
  const maxIndex = Math.max(0, total - itemsPerView);

  // Auto slide smoothly every 3.5s (pauses on mouse hover)
  useEffect(() => {
    if (isPaused || total <= itemsPerView) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused, maxIndex, total, itemsPerView]);

  if (!testimonials || total === 0) return null;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <Section className="bg-offwhite border-y border-border">
      {/* Section Header matching Reference */}
      <SectionTitle
        title="Hear From Our Customers"
        description="Loved by customers across every purchase."
        align="center"
        className="mb-8 sm:mb-12"
      />

      <div
        className="relative px-3 sm:px-6"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Floating Left Carousel Navigation Arrow */}
        <Button
          type="button"
          onClick={handlePrev}
          aria-label="Previous customer reviews"
          variant="icon"
          colorTheme="light"
          size="icon"
          className="absolute -left-1 sm:-left-3 top-1/2 -translate-y-1/2 z-20"
        >
          <ArrowRightIcon className="h-4 w-4 rotate-180" />
        </Button>

        {/* Floating Right Carousel Navigation Arrow */}
        <Button
          type="button"
          onClick={handleNext}
          aria-label="Next customer reviews"
          variant="icon"
          colorTheme="light"
          size="icon"
          className="absolute -right-1 sm:-right-3 top-1/2 -translate-y-1/2 z-20"
        >
          <ArrowRightIcon className="h-4 w-4" />
        </Button>

        {/* Smooth Sliding Carousel Window */}
        <div className="overflow-hidden py-2 -mx-2.5">
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="w-full sm:w-1/2 lg:w-1/4 shrink-0 px-2.5 flex"
              >
                <ReviewCard
                  name={item.name}
                  rating={item.rating || 5}
                  date={item.date}
                  quote={item.quote}
                  location={item.location}
                  verified={false}
                  className="w-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Scaling Carousel Pagination Dots matching Reference */}
        <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center">
          {Array.from({ length: total }).map((_, idx) => {
            const distance = Math.abs(idx - currentIndex);
            const isActive = idx === currentIndex;

            let sizeClasses = "w-1.5 h-1.5 bg-gold/45 group-hover:bg-gold/70";
            if (isActive) {
              sizeClasses = "w-2 h-2 bg-gold shadow-xs scale-105";
            } else if (distance === 1) {
              sizeClasses = "w-1.5 h-1.5 bg-gold/80 group-hover:bg-gold";
            } else if (distance === 2) {
              sizeClasses = "w-1 h-1 bg-gold/65 group-hover:bg-gold/90";
            }

            // The visible dot stays tiny; the button around it is a comfortable touch target
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(Math.min(idx, maxIndex))}
                aria-label={`Go to review ${idx + 1}`}
                aria-current={isActive ? "true" : undefined}
                className="group grid size-8 pointer-coarse:size-10 place-items-center cursor-pointer"
              >
                <span className={`rounded-full transition-all duration-300 ${sizeClasses}`} />
              </button>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
