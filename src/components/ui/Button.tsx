import Link from "next/link";
import type { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant =
  | "fill"
  | "border"
  | "icon"
  | "text"
  | "primary"
  | "secondary"
  | "outline"
  | "dark"
  | "brown"
  | "gold"
  | "ghost";

export type ButtonColorTheme = "brown" | "gold" | "dark" | "light" | "offwhite" | "ink" | "danger";
export type ButtonSize = "xs" | "sm" | "md" | "lg" | "icon";
export type ButtonRounded = "none" | "sm" | "md" | "lg" | "full";

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  variant?: ButtonVariant;
  colorTheme?: ButtonColorTheme;
  size?: ButtonSize;
  rounded?: ButtonRounded;
  fullWidth?: boolean;
  href?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children?: ReactNode;
  className?: string;
}

const roundedClasses: Record<ButtonRounded, string> = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-lg",
  lg: "rounded-xl",
  full: "rounded-full",
};

// Single source of truth for padding, gap and font-size — don't override these via className.
// Every size meets the 48px touch target on mobile; compact sizes relax from md up (pointer devices).
const sizeClasses: Record<ButtonSize, string> = {
  xs: "min-h-12 px-3 text-caption gap-1.5 md:min-h-8",
  sm: "min-h-12 px-4 text-small gap-2 md:min-h-10",
  md: "min-h-12 px-6 text-btn gap-2.5",
  lg: "min-h-12 px-8 py-4 text-btn gap-3 sm:min-h-14",
  icon: "size-12 shrink-0 p-0 items-center justify-center md:size-11",
};

export default function Button({
  variant = "fill",
  colorTheme = "brown",
  size = "md",
  rounded = "full",
  fullWidth = false,
  href,
  leftIcon,
  rightIcon,
  children,
  className,
  disabled,
  onClick,
  ...rest
}: ButtonProps) {
  // Resolve computed variant style
  const getVariantStyles = (): string => {
    // 1. Icon Only Button Variant
    if (variant === "icon") {
      switch (colorTheme) {
        case "light":
          return "bg-white/80 text-ink hover:bg-white border border-border/80 shadow-xs hover:shadow-md backdrop-blur-xs";
        case "gold":
          return "bg-gold hover:bg-gold-light text-ink shadow-gold/20 hover:shadow-md";
        case "dark":
          return "bg-ink/50 text-offwhite hover:bg-ink/80 border border-offwhite/20 shadow-md backdrop-blur-xs";
        case "offwhite":
          return "bg-offwhite text-ink hover:bg-offwhite-dark border border-border/60 shadow-xs";
        case "danger":
          return "bg-red-50 text-red-700 hover:bg-red-100 border border-red-200";
        case "brown":
        default:
          return "bg-brown-soft/80 text-brown hover:bg-brown hover:text-white border border-brown/20 transition-all";
      }
    }

    // 2. Text / Ghost Variant (No Border, No Fill)
    if (variant === "text" || variant === "ghost") {
      switch (colorTheme) {
        case "gold":
          return "bg-transparent text-gold hover:text-gold-light hover:underline underline-offset-4";
        case "light":
        case "offwhite":
          return "bg-transparent text-offwhite/90 hover:text-offwhite hover:underline underline-offset-4";
        case "dark":
        case "ink":
          return "bg-transparent text-ink hover:text-brown";
        case "danger":
          return "bg-transparent text-red-700 hover:text-red-800 hover:underline underline-offset-4";
        case "brown":
        default:
          return "bg-transparent text-brown hover:text-brown-dark hover:underline underline-offset-4";
      }
    }

    // 3. Border / Outline Variant
    if (variant === "border" || variant === "outline" || variant === "secondary") {
      switch (colorTheme) {
        case "gold":
          return "bg-transparent text-gold border border-gold/60 hover:bg-gold hover:text-ink shadow-2xs";
        case "light":
        case "offwhite":
          return "bg-transparent text-offwhite border border-offwhite/50 hover:bg-offwhite/20 backdrop-blur-xs shadow-2xs";
        case "dark":
        case "ink":
          return "bg-transparent text-ink border border-ink/40 hover:bg-ink/10 shadow-2xs";
        case "danger":
          return "bg-white text-neutral-600 border border-neutral-300 hover:text-red-700 hover:bg-red-50 hover:border-red-200 shadow-2xs";
        case "brown":
        default:
          return "bg-transparent text-brown border border-brown/50 hover:bg-brown-soft shadow-2xs";
      }
    }

    // 4. Fill / Primary Variant (Default)
    switch (colorTheme) {
      case "gold":
        return "bg-gold hover:bg-gold-light text-ink shadow-xs hover:shadow-md";
      case "dark":
        return "bg-ink hover:bg-ink-soft text-offwhite shadow-xs hover:shadow-md";
      case "light":
      case "offwhite":
        return "bg-offwhite hover:bg-white text-ink shadow-xs hover:shadow-md";
      case "danger":
        return "bg-red-50 hover:bg-red-100 text-red-700 border border-red-200";
      case "brown":
      default:
        return "bg-brown hover:bg-brown-dark text-white shadow-brown/20 shadow-xs hover:shadow-md";
    }
  };

  const isIconSize = size === "icon" || (!children && (Boolean(leftIcon) || Boolean(rightIcon)));
  const effectiveSize = isIconSize ? "icon" : size;

  const combinedClasses = cn(
    "inline-flex items-center justify-center font-body font-medium leading-none whitespace-nowrap transition-[color,background-color,border-color,box-shadow,transform] duration-200 ease-luxe cursor-pointer select-none tracking-wide active:scale-98 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown",
    "disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none",
    roundedClasses[rounded],
    sizeClasses[effectiveSize],
    getVariantStyles(),
    fullWidth && "w-full",
    className
  );

  const content = (
    <>
      {leftIcon && <span className="inline-flex shrink-0 items-center justify-center">{leftIcon}</span>}
      {children && <span className="inline-flex items-center gap-2">{children}</span>}
      {rightIcon && <span className="inline-flex shrink-0 items-center justify-center">{rightIcon}</span>}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={combinedClasses}
        onClick={onClick as unknown as MouseEventHandler<HTMLAnchorElement>}
        aria-label={rest["aria-label"]}
        title={rest.title}
      >
        {content}
      </Link>
    );
  }

  return (
    <button type="button" disabled={disabled} className={combinedClasses} onClick={onClick} {...rest}>
      {content}
    </button>
  );
}
