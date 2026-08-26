import Link from "next/link";
import type { ReactNode } from "react";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import { cn } from "@/lib/utils";

export interface SectionTitleProps {
  title: ReactNode;
  tagline?: string;
  description?: ReactNode;
  align?: "center" | "left" | "right";
  viewAllHref?: string;
  viewAllLabel?: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  taglineClassName?: string;
}

export default function SectionTitle({
  title,
  tagline,
  description,
  align = "center",
  viewAllHref,
  viewAllLabel = "View All",
  className,
  titleClassName,
  descriptionClassName,
  taglineClassName,
}: SectionTitleProps) {
  const isCentered = align === "center";
  const isRight = align === "right";

  return (
    <div
      className={cn(
        "mb-8 sm:mb-12",
        isCentered && "text-center mx-auto",
        isRight && "text-right ml-auto",
        !isCentered && !isRight && "text-left",
        className
      )}
    >
      <div
        className={cn(
          "flex flex-col",
          viewAllHref && !isCentered && "sm:flex-row sm:items-end sm:justify-between gap-4"
        )}
      >
        <div className={cn(isCentered && "max-w-2xl mx-auto")}>
          {/* Optional Tagline / Overline */}
          {tagline && (
            <span
              className={cn(
                "inline-block text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-wine mb-2",
                taglineClassName
              )}
            >
              {tagline}
            </span>
          )}

          {/* Main Title */}
          <h2
            className={cn(
              "font-display text-xl sm:text-2xl md:text-3xl lg:text-[32px] text-ink font-normal tracking-wide leading-tight",
              titleClassName
            )}
          >
            {title}
          </h2>

          {/* Subtitle / Description */}
          {description && (
            <div
              className={cn(
                "mt-2 sm:mt-2.5 text-xs sm:text-sm text-muted leading-relaxed",
                isCentered && "max-w-xl mx-auto",
                descriptionClassName
              )}
            >
              {description}
            </div>
          )}
        </div>

        {/* Optional View All Link */}
        {viewAllHref && (
          <div className={cn("mt-4", isCentered ? "text-center" : "sm:mt-0")}>
            <Link
              href={viewAllHref}
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-medium text-wine hover:text-wine-dark hover:underline underline-offset-4 transition-colors"
            >
              <span>{viewAllLabel}</span>
              <ArrowRightIcon className="w-3.5 h-3.5 shrink-0 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
