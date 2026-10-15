"use client";

import { useId, type InputHTMLAttributes, type ReactNode, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelAction?: ReactNode;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  error?: string;
  helperText?: string;
  variant?: "dark" | "light";
  containerClassName?: string;
  inputClassName?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      labelAction,
      leadingIcon,
      trailingIcon,
      error,
      helperText,
      variant = "dark",
      containerClassName,
      inputClassName,
      id,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;

    const isDark = variant === "dark";

    return (
      <div className={cn("w-full flex flex-col", containerClassName)}>
        {/* Label & Label Action Row */}
        {(label || labelAction) && (
          <div className="flex items-center justify-between mb-1.5">
            {label && (
              <label
                htmlFor={inputId}
                className={cn(
                  "block text-label font-medium cursor-pointer",
                  isDark ? "text-offwhite/80" : "text-ink/80"
                )}
              >
                {label}
              </label>
            )}
            {labelAction && <div className="text-caption">{labelAction}</div>}
          </div>
        )}

        {/* Input Wrapper Container */}
        <div className="relative flex items-center w-full">
          {/* Leading Icon */}
          {leadingIcon && (
            <div
              className={cn(
                "absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none",
                isDark ? "text-offwhite/40" : "text-muted"
              )}
            >
              {leadingIcon}
            </div>
          )}

          {/* Input Element */}
          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            className={cn(
              "w-full min-h-12 rounded-xl py-3 text-body transition-[border-color,box-shadow,background-color] duration-200 outline-hidden border",
              leadingIcon ? "pl-10" : "pl-3.5",
              trailingIcon ? "pr-10" : "pr-3.5",
              isDark
                ? "bg-white/5 text-offwhite placeholder-offwhite/30 border-white/15 focus:border-gold focus:ring-1 focus:ring-gold"
                : "bg-white text-ink placeholder-muted border-border focus:border-brown focus:ring-1 focus:ring-brown",
              error && (isDark ? "border-red-500/80 ring-1 ring-red-500/50" : "border-red-500 ring-1 ring-red-500/50"),
              disabled && "opacity-50 cursor-not-allowed",
              inputClassName,
              className
            )}
            {...props}
          />

          {/* Trailing Icon / Action */}
          {trailingIcon && (
            <div
              className={cn(
                "absolute inset-y-0 right-0 pr-3.5 flex items-center",
                isDark ? "text-offwhite/40" : "text-muted"
              )}
            >
              {trailingIcon}
            </div>
          )}
        </div>

        {/* Error or Helper Message */}
        {error ? (
          <p className={cn("text-caption mt-1.5 font-medium", isDark ? "text-red-400" : "text-red-500")}>
            {error}
          </p>
        ) : helperText ? (
          <p className={cn("text-caption mt-1.5 font-light", isDark ? "text-offwhite/50" : "text-muted")}>
            {helperText}
          </p>
        ) : null}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
