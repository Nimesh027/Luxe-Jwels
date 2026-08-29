"use client";

import Rating from "@/components/ui/Rating";
import { cn } from "@/lib/utils";

export interface ReviewCardProps {
  name: string;
  rating?: number;
  date?: string;
  quote: string;
  location?: string;
  title?: string;
  verified?: boolean;
  className?: string;
}

export default function ReviewCard({
  name,
  rating = 5,
  date,
  quote,
  location,
  title,
  verified = true,
  className,
}: ReviewCardProps) {
  // Extract first initial letter for avatar circle
  const initial = name ? name.trim().charAt(0).toUpperCase() : "L";

  return (
    <div
      className={cn(
        "flex h-full flex-col justify-between rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-2xs hover:shadow-md transition-all duration-300",
        className
      )}
    >
      <div>
        {/* Top Header: Star Rating + Date */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Rating value={rating} />
            {title && (
              <span className="text-caption font-semibold text-ink line-clamp-1">{title}</span>
            )}
          </div>

          {date && (
            <span className="text-[11px] font-medium uppercase tracking-wider text-muted shrink-0">
              {date}
            </span>
          )}
        </div>

        {/* Review Quote Body */}
        <p className="mt-3.5 text-caption sm:text-[13px] text-muted leading-relaxed font-light">
          &quot;{quote}&quot;
        </p>
      </div>

      {/* Footer: Avatar Circle + Name + Location / Verified badge */}
      <div className="mt-5 pt-4 border-t border-neutral-100 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          {/* Avatar Initial Circle */}
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f4ebe1] text-body font-semibold text-ink shadow-2xs">
            {initial}
          </div>

          <div className="overflow-hidden">
            <h4 className="font-display text-body font-medium text-ink truncate">
              {name}
            </h4>
            {location && (
              <p className="text-[11px] text-muted font-light truncate mt-0.5">
                {location}
              </p>
            )}
          </div>
        </div>

        {verified && (
          <span className="shrink-0 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
            ✓ Verified Buyer
          </span>
        )}
      </div>
    </div>
  );
}
