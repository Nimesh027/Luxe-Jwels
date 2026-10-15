"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";
import type { ReactNode } from "react";
import { useCarousel } from "@/hooks/useCarousel";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

interface CarouselProps {
  items: ReactNode[];
  itemsPerView?: number;
  autoplayMs?: number;
  showArrows?: boolean;
  showDots?: boolean;
  className?: string;
  itemClassName?: string;
  /** Vertical position of the arrows (defaults to the vertical centre) */
  arrowTopClassName?: string;
}

export default function Carousel({
  items,
  itemsPerView = 1,
  autoplayMs,
  showArrows = true,
  showDots = false,
  className,
  itemClassName,
  arrowTopClassName = "top-1/2",
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
          className="flex items-stretch transition-transform duration-300 ease-out"
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
          <Button
            type="button"
            aria-label="Previous"
            onClick={prev}
            variant="icon"
            colorTheme="light"
            size="icon"
            className={cn("absolute left-2 z-10 -translate-y-1/2", arrowTopClassName)}
          >
            <ChevronLeftIcon size={20} />
          </Button>
          <Button
            type="button"
            aria-label="Next"
            onClick={next}
            variant="icon"
            colorTheme="light"
            size="icon"
            className={cn("absolute right-2 z-10 -translate-y-1/2", arrowTopClassName)}
          >
            <ChevronRightIcon size={20} />
          </Button>
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
