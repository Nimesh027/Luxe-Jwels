"use client";

import { useState, useEffect } from "react";
import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import { useAppSelector } from "@/store/hooks";

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

  // Get initial character from customer name
  const getInitial = (name: string) => {
    return name ? name.trim().charAt(0).toUpperCase() : "L";
  };

  return (
    <Section className="bg-[#fdfaf7] border-y border-[#f2eae1] py-14 sm:py-18 md:py-20">
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
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous customer reviews"
          className="absolute -left-1 sm:-left-3 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 shadow-md hover:bg-neutral-50 hover:text-black transition-all cursor-pointer"
        >
          <ArrowRightIcon className="h-4 w-4 rotate-180" />
        </button>

        {/* Floating Right Carousel Navigation Arrow */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next customer reviews"
          className="absolute -right-1 sm:-right-3 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 shadow-md hover:bg-neutral-50 hover:text-black transition-all cursor-pointer"
        >
          <ArrowRightIcon className="h-4 w-4" />
        </button>

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
                className="w-full sm:w-1/2 lg:w-1/4 shrink-0 px-2.5"
              >
                <div className="flex h-full flex-col justify-between rounded-2xl border border-neutral-100 bg-white p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-300 min-h-[300px] sm:min-h-[320px]">
                  {/* Top Row: 5 Gold Stars + Date */}
                  <div>
                    <div className="flex items-center justify-between">
                      {/* 5 Solid Gold Stars */}
                      <div className="flex items-center gap-1 text-amber-400 text-sm">
                        {Array.from({ length: item.rating || 5 }).map((_, sIdx) => (
                          <span key={sIdx}>★</span>
                        ))}
                      </div>

                      {/* Review Date */}
                      {item.date && (
                        <span className="text-[11px] font-medium uppercase tracking-wider text-neutral-400">
                          {item.date}
                        </span>
                      )}
                    </div>

                    {/* Customer Review Quote Body */}
                    <p className="mt-4 text-xs sm:text-[13px] text-neutral-600 leading-relaxed line-clamp-6">
                      {item.quote}
                    </p>
                  </div>

                  {/* Bottom Row: Customer Initial Avatar + Name + Store Location */}
                  <div className="mt-5 pt-4 border-t border-neutral-100 flex items-center gap-3">
                    {/* Warm Champagne Circle Initial Badge */}
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f3eae0] text-sm font-medium text-neutral-800 shadow-2xs">
                      {getInitial(item.name)}
                    </div>

                    <div className="overflow-hidden">
                      <h4 className="font-display text-sm font-medium text-neutral-900 truncate">
                        {item.name}
                      </h4>
                      {item.location && (
                        <p className="text-[11px] text-neutral-500 truncate mt-0.5 font-light">
                          {item.location}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Scaling Carousel Pagination Dots matching Reference */}
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
              <button
                key={idx}
                type="button"
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
