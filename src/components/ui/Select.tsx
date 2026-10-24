"use client";

import { useEffect, useRef, useState, memo } from "react";
import { cn } from "@/lib/utils";
import { ChevronDownIcon, CheckIcon } from "@/components/icons";
import Button from "@/components/ui/Button";

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps {
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  label?: string;
  labelClassName?: string;
  placeholder?: string;
  className?: string;
  containerClassName?: string;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  align?: "left" | "right";
}

const sizeClasses = {
  sm: "text-[13px] sm:text-[13.5px] pl-3.5 pr-8 py-2 rounded-xl",
  md: "text-body pl-3.5 pr-9 py-2.5 rounded-xl",
  lg: "text-body pl-4 pr-10 py-3 rounded-xl",
};

function SelectComponent({
  options,
  value,
  onChange,
  label,
  labelClassName,
  placeholder = "Select an option",
  className,
  containerClassName,
  disabled = false,
  size = "sm",
  align = "right",
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  // Close when clicking outside
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

  // Close on Escape key press
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <div className={cn("flex flex-col gap-1.5 relative w-full", containerClassName)}>
      {label && (
        <label className={cn("block text-caption font-semibold text-ink cursor-pointer", labelClassName)}>
          {label}
        </label>
      )}

      <div ref={ref} className="relative inline-block w-full">
        {/* Select Trigger */}
        <Button
          variant="unstyled"
          disabled={disabled}
          onClick={() => setOpen((prev) => !prev)}
          className={cn(
            "w-full inline-flex items-center justify-between gap-2.5 font-medium border transition-all duration-200 cursor-pointer select-none",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            open
              ? "border-[#B38E5D] bg-[#F7F2EA] text-[#8F6C39] shadow-xs ring-2 ring-[#B38E5D]/20"
              : "border-[#E5DDD0] bg-[#FAF7F2] hover:bg-[#F4EFE6] text-[#8F6C39] hover:border-[#C5A059]",
            sizeClasses[size],
            className
          )}
          aria-haspopup="listbox"
          aria-expanded={open}
        >
          <span className="truncate">{selectedOption ? selectedOption.label : placeholder}</span>
          <ChevronDownIcon
            size={14}
            className={cn(
              "shrink-0 transition-transform duration-250 ease-out",
              open ? "rotate-180 text-[#8F6C39]" : "text-[#8F6C39]/80"
            )}
          />
        </Button>

        {/* Dropdown Menu with Butter-Smooth Open & Close Animation */}
        <div
          role="listbox"
          className={cn(
            "absolute top-[calc(100%+6px)] z-50 min-w-[210px] w-full sm:w-max max-w-[290px] bg-white border border-[#EAE4DC] rounded-2xl shadow-xl overflow-hidden transition-all duration-200 ease-out",
            align === "right" ? "right-0 origin-top-right" : "left-0 origin-top-left",
            open
              ? "opacity-100 scale-100 translate-y-0 pointer-events-auto visible"
              : "opacity-0 scale-95 -translate-y-2 pointer-events-none invisible"
          )}
        >
          {/* Subtle gold accent top hairline */}
          <div className="h-[2px] bg-gradient-to-r from-[#B38E5D]/60 via-[#B38E5D]/30 to-transparent" />

          <div className="py-1.5 max-h-64 overflow-y-auto scrollbar-thin">
            {options.map((opt) => {
              const isActive = opt.value === value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  role="option"
                  aria-selected={isActive}
                  onClick={() => {
                    onChange(opt.value);
                    setOpen(false);
                  }}
                  className={cn(
                    "w-full flex items-center justify-between px-4 py-2.5 text-[13.5px] sm:text-[14px] text-left transition-colors duration-150 cursor-pointer select-none",
                    isActive
                      ? "bg-[#FAF5ED] text-[#8F6C39] font-semibold"
                      : "text-[#221F1C] hover:bg-[#FAF5ED] hover:text-[#8F6C39]"
                  )}
                >
                  <span className="truncate pr-2">{opt.label}</span>
                  {isActive && (
                    <CheckIcon size={14} className="text-[#8F6C39] shrink-0 stroke-[2.5]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(SelectComponent);
