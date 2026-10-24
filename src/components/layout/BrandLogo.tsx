import Link from "next/link";
import { cn } from "@/lib/utils";

export function DiamondMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M16 3 3 12.5 16 29l13-16.5L16 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M3 12.5h26M16 3l-5.5 9.5L16 29l5.5-16.5L16 3Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M9 4.5l1.5 8M23 4.5l-1.5 8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

interface BrandLogoProps {
  tone?: "dark" | "light";
  className?: string;
  onClick?: () => void;
}

export default function BrandLogo({ tone = "dark", className, onClick }: BrandLogoProps) {
  const isLight = tone === "light";
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label="Luxe Jewels — home"
      className={cn("group inline-flex items-center gap-2.5 shrink-0", className)}
    >
      <DiamondMark
        className={cn(
          "w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:scale-105",
          isLight ? "text-gold-bright" : "text-gold-warm"
        )}
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[19px] sm:text-[21px] font-semibold tracking-[0.14em] uppercase",
            isLight ? "text-white" : "text-ink"
          )}
        >
          Luxe Jewels
        </span>
        <span
          className={cn(
            "font-display italic text-[11.5px] sm:text-[12.5px] tracking-[0.08em] mt-1",
            isLight ? "text-gold-bright" : "text-muted"
          )}
        >
          Timeless Elegance
        </span>
      </span>
    </Link>
  );
}
