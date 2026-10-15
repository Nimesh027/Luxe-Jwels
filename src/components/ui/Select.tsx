"use client";

import { useEffect, useId, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDownIcon, CheckIcon } from "@/components/icons";
import { usePresence } from "@/hooks/usePresence";

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
}

const sizeClasses = {
  sm: "min-h-12 md:min-h-10 text-small pl-3.5 pr-8 py-2 rounded-xl",
  md: "min-h-12 text-body pl-3.5 pr-9 py-2.5 rounded-xl",
  lg: "min-h-12 sm:min-h-14 text-body pl-4 pr-10 py-3 rounded-xl",
};

export default function Select({
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
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const menu = usePresence(open, 150);
  const ref = useRef<HTMLDivElement>(null);
  const baseId = useId();
  const labelId = `${baseId}-label`;
  const triggerId = `${baseId}-trigger`;
  const listboxId = `${baseId}-listbox`;

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
    <div className={cn("flex flex-col gap-1.5 relative w-full", containerClassName)}>
      {label && (
        <label id={labelId} htmlFor={triggerId} className={cn("block text-label font-semibold text-ink cursor-pointer", labelClassName)}>
          {label}
        </label>
      )}

      <div ref={ref} className="relative inline-block w-full">
        {/* Select Trigger */}
        <button
          id={triggerId}
          type="button"
          disabled={disabled}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={open ? listboxId : undefined}
          aria-labelledby={label ? `${labelId} ${triggerId}` : undefined}
          onClick={() => setOpen((prev) => !prev)}
          className={cn(
            "w-full inline-flex items-center justify-between gap-2 font-medium border bg-white text-ink transition-all duration-150 cursor-pointer select-none",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            open
              ? "border-brown bg-brown/5 text-brown shadow-xs ring-1 ring-brown/20"
              : "border-border hover:border-brown/40 hover:text-brown",
            sizeClasses[size],
            className
          )}
        >
          <span className="truncate">{selectedOption ? selectedOption.label : placeholder}</span>
          <ChevronDownIcon
            size={14}
            aria-hidden="true"
            className={cn(
              "shrink-0 transition-transform duration-200",
              open ? "rotate-180 text-brown" : "text-muted"
            )}
          />
        </button>

        {/* Dropdown Menu */}
        {menu.mounted && (
          <div className={cn(
            "absolute left-0 right-0 top-full mt-1.5 z-50 min-w-full origin-top bg-white border border-brown/20 rounded-xl shadow-xl overflow-hidden",
            menu.open ? "animate-in fade-in zoom-in-95 slide-in-from-top-2 duration-200" : "animate-out fade-out zoom-out-95 duration-150"
          )}>
            <div className="h-0.5 bg-linear-to-r from-brown/60 via-gold/40 to-transparent" />
            <div
              id={listboxId}
              role="listbox"
              aria-labelledby={label ? labelId : undefined}
              className="py-1.5 max-h-60 overflow-y-auto"
            >
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
                      "w-full flex min-h-12 md:min-h-10 items-center justify-between px-3.5 py-2.5 text-small sm:text-body text-left transition-colors duration-100 cursor-pointer",
                      isActive
                        ? "bg-brown/10 text-brown font-bold"
                        : "text-ink hover:bg-brown/5 hover:text-brown"
                    )}
                  >
                    <span className="truncate">{opt.label}</span>
                    {isActive && <CheckIcon size={14} className="text-brown shrink-0" />}
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
