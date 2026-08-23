import type { InputHTMLAttributes, ReactNode } from "react";
import { useId } from "react";
import { cn } from "@/lib/utils";

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "className"> {
  label?: string;
  error?: string;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  containerClassName?: string;
}

export default function Input({
  label,
  error,
  leadingIcon,
  trailingIcon,
  containerClassName,
  id,
  ...rest
}: InputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <div className={cn("flex flex-col gap-1.5", containerClassName)}>
      {label && (
        <label htmlFor={inputId} className="text-sm text-ink">
          {label}
        </label>
      )}
      <div
        className={cn(
          "flex items-center gap-2 border bg-surface px-4 py-3",
          error ? "border-red-500" : "border-border focus-within:border-gold"
        )}
      >
        {leadingIcon && <span className="text-muted">{leadingIcon}</span>}
        <input
          id={inputId}
          className="w-full bg-transparent text-sm text-ink placeholder:text-muted focus:outline-none"
          {...rest}
        />
        {trailingIcon && <span className="text-muted">{trailingIcon}</span>}
      </div>
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
}
