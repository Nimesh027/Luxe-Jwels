"use client";

import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import type { ReactNode } from "react";
import { useCarousel } from "@/hooks/useCarousel";
import { cn } from "@/lib/utils";

interface CarouselProps {
  items: ReactNode[];
  itemsPerView?: number;
  autoplayMs?: number;
  showArrows?: boolean;
  showDots?: boolean;
  className?: string;
  itemClassName?: string;
}

export default function Carousel({
  items,
  itemsPerView = 1,
  autoplayMs,
  showArrows = true,
  showDots = false,
  className,
  itemClassName,
}: CarouselProps) {
  const maxIndex = Math.max(items.length - itemsPerView, 0);
  const { index, next, prev, goTo } = useCarousel({
    itemCount: maxIndex + 1,
    autoplayMs,
  });

  if (items.length === 0) return null;

  const translate = (index * 100) / itemsPerView;

  return (
    <div className={cn("relative", className)}>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${translate}%)` }}
        >
          {items.map((item, itemIndex) => (
            <div
              key={itemIndex}
              className={cn("shrink-0", itemClassName)}
              style={{ width: `${100 / itemsPerView}%` }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {showArrows && maxIndex > 0 && (
        <>
          <button
            type="button"
            aria-label="Previous"
            onClick={prev}
            className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-surface/90 text-ink shadow-md backdrop-blur-xs hover:bg-white hover:scale-105 transition-all"
          >
            <LeftOutlined />
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={next}
            className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-surface/90 text-ink shadow-md backdrop-blur-xs hover:bg-white hover:scale-105 transition-all"
          >
            <RightOutlined />
          </button>
        </>
      )}

      {showDots && maxIndex > 0 && (
        <div className="mt-6 flex items-center justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }, (_, dotIndex) => (
            <button
              key={dotIndex}
              type="button"
              aria-label={`Go to slide ${dotIndex + 1}`}
              onClick={() => goTo(dotIndex)}
              className={cn(
                "h-2 w-2 rounded-full transition-colors",
                dotIndex === index ? "bg-gold" : "bg-border"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
