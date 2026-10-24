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
  as?: "h1" | "h2" | "h3";
  id?: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  taglineClassName?: string;
}

/**
 * Shared section heading: optional eyebrow, serif title, muted description
 * and an optional "View All" link aligned to the title baseline.
 */
export default function SectionTitle({
  title,
  tagline,
  description,
  align = "center",
  viewAllHref,
  viewAllLabel = "View All",
  as: Heading = "h2",
  id,
  className,
  titleClassName,
  descriptionClassName,
  taglineClassName,
}: SectionTitleProps) {
  const isCentered = align === "center";

  const viewAll = viewAllHref && (
    <Link
      href={viewAllHref}
      className="group inline-flex shrink-0 items-center gap-1.5 text-[14px] font-semibold text-gold hover:text-gold-dark transition-colors"
    >
      {viewAllLabel}
      <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
    </Link>
  );

  return (
    <div
      className={cn(
        "mb-7 sm:mb-9",
        isCentered ? "text-center" : "flex items-end justify-between gap-4",
        align === "right" && "text-right",
        className
      )}
    >
      <div className={cn("min-w-0", isCentered && "max-w-2xl mx-auto")}>
        {tagline && (
          <p className={cn("text-eyebrow text-gold mb-2", taglineClassName)}>{tagline}</p>
        )}
        <Heading
          id={id}
          className={cn("font-display text-h2 font-medium text-ink leading-tight", titleClassName)}
        >
          {title}
        </Heading>
        {description && (
          <div
            className={cn(
              "mt-1.5 text-[14.5px] sm:text-[15px] text-muted leading-relaxed",
              isCentered && "max-w-xl mx-auto",
              descriptionClassName
            )}
          >
            {description}
          </div>
        )}
      </div>
      {viewAll && (isCentered ? <div className="mt-4">{viewAll}</div> : viewAll)}
    </div>
  );
}
