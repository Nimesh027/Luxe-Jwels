"use client";

import { useState, useEffect, memo } from "react";
import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";
import ReviewCard from "@/components/common/ReviewCard";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import Button from "@/components/ui/Button";
import { useAppSelector } from "@/store/hooks";

function TestimonialsComponent() {
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

  const maxIndex = Math.max(0, total - itemsPerView);

  // Auto-play interval
  useEffect(() => {
    if (isPaused || maxIndex <= 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  if (!testimonials || testimonials.length === 0) return null;

  return (
    <Section className="py-16 sm:py-24 bg-surface border-y border-border/60 overflow-hidden">
      <SectionTitle
        title="HEAR FROM OUR HAPPY CUSTOMERS"
        description="Voices of elegance and delight from our cherished patrons"
        className="mb-8 sm:mb-12"
      />

      {/* Carousel Container */}
      <div
        className="relative px-3 sm:px-6"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Floating Left Carousel Navigation Arrow */}
        <Button
          variant="unstyled"
          onClick={handlePrev}
          aria-label="Previous customer reviews"
          className="absolute left-0 sm:-left-3 top-1/2 -translate-y-1/2 z-20 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-neutral-200 bg-white/95 text-neutral-700 shadow-md hover:bg-neutral-50 hover:text-black transition-all cursor-pointer backdrop-blur-xs"
        >
          <ArrowRightIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 rotate-180" />
        </Button>

        {/* Floating Right Carousel Navigation Arrow */}
        <Button
          variant="unstyled"
          onClick={handleNext}
          aria-label="Next customer reviews"
          className="absolute right-0 sm:-right-3 top-1/2 -translate-y-1/2 z-20 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-neutral-200 bg-white/95 text-neutral-700 shadow-md hover:bg-neutral-50 hover:text-black transition-all cursor-pointer backdrop-blur-xs"
        >
          <ArrowRightIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
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

        {/* Dynamic Scaling Carousel Pagination Dots */}
        <div className="mt-8 sm:mt-10 flex items-center justify-center gap-2 sm:gap-2.5 h-6">
          {Array.from({ length: total }).map((_, idx) => {
            const distance = Math.abs(idx - currentIndex);
            const isActive = idx === currentIndex;

            let sizeClasses = "w-[6px] h-[6px] bg-[#cbb281]/45 hover:bg-[#cbb281]/70";
            if (isActive) {
              sizeClasses = "w-[8px] h-[8px] bg-[#cbb281] shadow-xs scale-105";
            } else if (distance === 1) {
              sizeClasses = "w-[6px] h-[6px] bg-[#cbb281]/80 hover:bg-[#cbb281]";
            } else if (distance === 2) {
              sizeClasses = "w-[4px] h-[4px] bg-[#cbb281]/65 hover:bg-[#cbb281]/90";
            }

            return (
              <Button
                key={idx}
                variant="unstyled"
                onClick={() => setCurrentIndex(Math.min(idx, maxIndex))}
                aria-label={`Go to review ${idx + 1}`}
                className={`rounded-full transition-all duration-300 cursor-pointer ${sizeClasses}`}
              />
            );
          })}
        </div>
      </div>
    </Section>
  );
}

export default memo(TestimonialsComponent);
