import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ImageBannerProps {
  image: string;
  imageAlt?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  eyebrow?: string;
  children?: ReactNode;
  /** Visual height of the banner */
  size?: "sm" | "md" | "lg";
  as?: "h1" | "h2" | "h3";
  imageClassName?: string;
  className?: string;
  contentClassName?: string;
  priority?: boolean;
  sizes?: string;
  /** Extra element rendered over the image (e.g. a play button) */
  overlay?: ReactNode;
}

const heights = {
  sm: "min-h-[180px] sm:min-h-[210px] lg:min-h-[230px]",
  md: "min-h-[240px] sm:min-h-[280px] lg:min-h-[320px]",
  lg: "min-h-[300px] sm:min-h-[360px] lg:min-h-[420px]",
};

const titleSizes = {
  sm: "text-[24px] sm:text-[28px] lg:text-[32px]",
  md: "text-[28px] sm:text-[34px] lg:text-[40px]",
  lg: "text-[30px] sm:text-[40px] lg:text-[48px]",
};

/**
 * Dark photographic banner with the warm espresso gradient used throughout
 * the reference design. Text sits on the left over the darkest part of the
 * gradient so it stays legible regardless of the photo.
 */
export default function ImageBanner({
  image,
  imageAlt = "",
  title,
  subtitle,
  eyebrow,
  children,
  size = "md",
  as: Heading = "h2",
  imageClassName,
  className,
  contentClassName,
  priority,
  sizes = "(max-width: 1384px) 100vw, 1320px",
  overlay,
}: ImageBannerProps) {
  return (
    <div
      className={cn(
        "theme-dark group relative isolate flex items-center overflow-hidden rounded-[var(--radius-card)] bg-espresso",
        heights[size],
        className
      )}
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn(
          "-z-10 object-cover object-right transition-transform duration-700 ease-out group-hover:scale-[1.03]",
          imageClassName
        )}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgb(23_17_12/0.94)_0%,rgb(30_21_14/0.82)_38%,rgb(43_30_20/0.35)_70%,transparent_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-espresso-deep/70 via-transparent to-transparent sm:hidden"
      />

      <div className={cn("relative w-full px-6 py-8 sm:px-10 sm:py-10 lg:px-14", contentClassName)}>
        <div className="max-w-[min(100%,520px)]">
          {eyebrow && <p className="text-eyebrow text-gold mb-3">{eyebrow}</p>}
          <Heading className={cn("font-display font-medium text-white leading-[1.1]", titleSizes[size])}>
            {title}
          </Heading>
          {subtitle && (
            <p className="mt-2.5 text-[14.5px] sm:text-[16px] leading-relaxed text-white/85">{subtitle}</p>
          )}
          {children && <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-3">{children}</div>}
        </div>
      </div>

      {overlay}
    </div>
  );
}
