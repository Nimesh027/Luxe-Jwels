"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps {
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  className?: string;
  containerClassName?: string;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "text-[14px] pl-3.5 pr-8 py-2 rounded-lg",
  md: "text-small pl-4 pr-9 py-2.5 rounded-lg",
  lg: "text-body pl-4 pr-10 py-3 rounded-xl",
};

export default function Select({
  options,
  value,
  onChange,
  label,
  placeholder = "Select an option",
  className,
  containerClassName,
  disabled = false,
  size = "sm",
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className={cn("flex flex-col gap-1.5 relative", containerClassName)}>
      {label && <label className="text-caption text-muted uppercase tracking-wider font-medium">{label}</label>}

      <div ref={ref} className="relative inline-block w-full">
        {/* Select Trigger */}
        <button
          type="button"
          disabled={disabled}
          onClick={() => setOpen((prev) => !prev)}
          className={cn(
            "w-full inline-flex items-center justify-between gap-2 font-medium border bg-surface text-ink transition-all duration-150 cursor-pointer select-none",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            open
              ? "border-wine/50 bg-wine/5 text-wine shadow-xs"
              : "border-border hover:border-wine/40 hover:text-wine",
            sizeClasses[size],
            className
          )}
        >
          <span className="truncate">{selectedOption ? selectedOption.label : placeholder}</span>
          <svg
            className={cn(
              "w-3.5 h-3.5 shrink-0 transition-transform duration-200",
              open ? "rotate-180 text-wine" : "text-muted"
            )}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {open && (
          <div className="absolute right-0 top-[calc(100%+6px)] z-50 min-w-[170px] w-full bg-surface rounded-xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-1 duration-150">
            <div className="h-[2px] bg-gradient-to-r from-wine/60 via-gold/40 to-transparent" />
            <div className="py-1.5 max-h-60 overflow-y-auto">
              {options.map((opt) => {
                const isActive = opt.value === value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => {
                      onChange(opt.value);
                      setOpen(false);
                    }}
                    className={cn(
                      "w-full flex items-center gap-2.5 px-4 py-2.5 text-[12px] text-left transition-colors duration-100 cursor-pointer",
                      isActive
                        ? "bg-wine/8 text-wine font-semibold"
                        : "text-ink hover:bg-wine/5 hover:text-wine"
                    )}
                  >
                    {/* <span
                      className={cn(
                        "w-1.5 h-1.5 rounded-full shrink-0 transition-all",
                        isActive ? "bg-wine" : "bg-transparent"
                      )}
                    /> */}
                    <span className="truncate">{opt.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
