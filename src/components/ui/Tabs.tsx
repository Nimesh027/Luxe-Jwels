"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";

export interface TabOption<T extends string = string> {
  id: T;
  label: string;
  subtitle?: string;
  badge?: string;
}

export interface TabsProps<T extends string = string> {
  options: TabOption<T>[];
  activeId: T;
  onChange: (id: T) => void;
  variant?: "pill" | "slider" | "underline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Tabs<T extends string = string>({
  options,
  activeId,
  onChange,
  variant = "pill",
  size = "md",
  className,
}: TabsProps<T>) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleTabClick = (id: T, e: React.MouseEvent<HTMLButtonElement>) => {
    onChange(id);

    // Smooth container-only scrolling for slider variant
    if (variant === "slider" && containerRef.current) {
      const container = containerRef.current;
      const button = e.currentTarget;
      const targetScroll =
        button.offsetLeft - container.offsetWidth / 2 + button.offsetWidth / 2;
      container.scrollTo({ left: targetScroll, behavior: "smooth" });
    }
  };

  // 1. Pill Switcher Variant (like Product Details vs Price Breakup)
  if (variant === "pill") {
    return (
      <div className={cn("flex justify-center", className)}>
        <div className="inline-flex items-center rounded-full border border-border bg-cream/50 p-1.5 shadow-inner">
          {options.map((opt) => {
            const isActive = activeId === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={(e) => handleTabClick(opt.id, e)}
                className={cn(
                  "rounded-full px-6 py-2.5 text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer select-none",
                  isActive
                    ? "bg-wine text-white shadow-md scale-102"
                    : "text-ink hover:text-wine hover:bg-cream/40"
                )}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // 2. Slider Variant (like Budget Explore filter pills)
  if (variant === "slider") {
    return (
      <div
        ref={containerRef}
        className={cn(
          "flex flex-nowrap items-center sm:justify-center gap-2.5 overflow-x-auto py-2 px-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
          className
        )}
      >
        {options.map((opt) => {
          const isActive = activeId === opt.id;
          return (
            <button
              key={opt.id}
              type="button"
              onClick={(e) => handleTabClick(opt.id, e)}
              className={cn(
                "flex flex-col items-center shrink-0 rounded-2xl px-5 py-2.5 text-xs transition-all duration-300 ease-out active:scale-95 cursor-pointer select-none",
                isActive
                  ? "bg-wine text-white shadow-md font-semibold border border-wine"
                  : "border border-border bg-cream/40 text-ink hover:border-gold hover:bg-cream"
              )}
            >
              <span className="font-semibold whitespace-nowrap">{opt.label}</span>
              {opt.subtitle && (
                <span
                  className={cn(
                    "text-[10px] whitespace-nowrap",
                    isActive ? "text-white/80" : "text-muted"
                  )}
                >
                  {opt.subtitle}
                </span>
              )}
            </button>
          );
        })}
      </div>
    );
  }

  // 3. Underline Tab Variant
  return (
    <div
      className={cn(
        "flex border-b border-border gap-8 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
        className
      )}
    >
      {options.map((opt) => {
        const isActive = activeId === opt.id;
        return (
          <button
            key={opt.id}
            type="button"
            onClick={(e) => handleTabClick(opt.id, e)}
            className={cn(
              "pb-3 text-sm font-medium transition-all duration-200 cursor-pointer border-b-2 whitespace-nowrap",
              isActive
                ? "border-wine text-wine font-semibold"
                : "border-transparent text-muted hover:text-ink hover:border-border"
            )}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
