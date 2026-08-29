"use client";

import { cn } from "@/lib/utils";

interface QuantitySelectorProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function QuantitySelector({
  value,
  onChange,
  min = 1,
  max = 99,
  size = "md",
  className,
}: QuantitySelectorProps) {
  const handleDecrement = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  const handleIncrement = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };

  const sizeClasses = {
    sm: "h-8 px-1 text-caption",
    md: "h-11 px-2 text-small",
    lg: "h-12 px-3 text-body",
  };

  const btnClasses = {
    sm: "h-6 w-6 text-caption",
    md: "h-8 w-8 text-small",
    lg: "h-9 w-9 text-body",
  };

  const textWidthClasses = {
    sm: "w-6 text-caption",
    md: "w-8 text-small",
    lg: "w-10 text-body",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center justify-between rounded-full border border-border/80 bg-surface shadow-2xs transition-all",
        sizeClasses[size],
        className
      )}
    >
      <button
        type="button"
        aria-label="Decrease quantity"
        disabled={value <= min}
        onClick={handleDecrement}
        className={cn(
          "flex items-center justify-center rounded-full text-ink transition-colors cursor-pointer hover:bg-wine/10 hover:text-wine disabled:opacity-40 disabled:cursor-not-allowed",
          btnClasses[size]
        )}
      >
        −
      </button>

      <span
        className={cn(
          "text-center font-semibold text-ink select-none",
          textWidthClasses[size]
        )}
      >
        {value}
      </span>

      <button
        type="button"
        aria-label="Increase quantity"
        disabled={value >= max}
        onClick={handleIncrement}
        className={cn(
          "flex items-center justify-center rounded-full text-ink transition-colors cursor-pointer hover:bg-wine/10 hover:text-wine disabled:opacity-40 disabled:cursor-not-allowed",
          btnClasses[size]
        )}
      >
        +
      </button>
    </div>
  );
}
