"use client";

import { cn } from "@/lib/utils";
import { MinusIcon, PlusIcon } from "@/components/icons";

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
    sm: "h-10 px-1 text-caption pointer-coarse:h-12",
    md: "h-12 px-1.5 text-small",
    lg: "h-12 px-2 text-body sm:h-14",
  };

  const btnClasses = {
    sm: "size-8 text-caption pointer-coarse:size-10",
    md: "size-10 text-small",
    lg: "size-11 text-body",
  };

  const iconSizes = { sm: 14, md: 16, lg: 18 };

  const textWidthClasses = {
    sm: "w-6 text-caption",
    md: "w-8 text-small",
    lg: "w-10 text-body",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center justify-between rounded-full border border-border/80 bg-white shadow-2xs transition-all",
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
          "relative flex items-center justify-center rounded-full text-ink transition-colors cursor-pointer after:absolute after:-inset-1 hover:bg-brown/10 hover:text-brown disabled:opacity-40 disabled:cursor-not-allowed",
          btnClasses[size]
        )}
      >
        <MinusIcon size={iconSizes[size]} />
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
          "relative flex items-center justify-center rounded-full text-ink transition-colors cursor-pointer after:absolute after:-inset-1 hover:bg-brown/10 hover:text-brown disabled:opacity-40 disabled:cursor-not-allowed",
          btnClasses[size]
        )}
      >
        <PlusIcon size={iconSizes[size]} />
      </button>
    </div>
  );
}
