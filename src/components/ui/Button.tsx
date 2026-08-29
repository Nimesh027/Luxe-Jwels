import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
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
  | "wine"
  | "gold"
  | "ghost";

export type ButtonColorTheme = "wine" | "gold" | "dark" | "light" | "cream" | "ink";
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

const sizeClasses: Record<ButtonSize, string> = {
  xs: "px-3 py-1.5 text-caption gap-1.5",
  sm: "px-4 py-2 text-caption gap-2",
  md: "px-6 py-2.5 sm:py-3 text-body gap-2.5",
  lg: "px-8 py-3.5 sm:py-4 text-body gap-3",
  icon: "p-2.5 sm:p-3 aspect-square items-center justify-center",
};

export default function Button({
  variant = "fill",
  colorTheme = "wine",
  size = "md",
  rounded = "full",
  fullWidth = false,
  href,
  leftIcon,
  rightIcon,
  children,
  className,
  disabled,
  ...rest
}: ButtonProps) {
  // Resolve computed variant style
  const getVariantStyles = (): string => {
    // 1. Icon Only Button Variant
    if (variant === "icon") {
      switch (colorTheme) {
        case "light":
          return "bg-surface/80 text-ink hover:bg-surface border border-border/80 shadow-xs hover:shadow-md backdrop-blur-xs";
        case "gold":
          return "bg-gold hover:bg-gold-light text-ink shadow-gold/20 hover:shadow-md";
        case "dark":
          return "bg-ink/50 text-cream hover:bg-ink/80 border border-cream/20 shadow-md backdrop-blur-xs";
        case "cream":
          return "bg-cream text-ink hover:bg-cream-dark border border-border/60 shadow-xs";
        case "wine":
        default:
          return "bg-wine-soft/80 text-wine hover:bg-wine hover:text-white border border-wine/20 transition-all";
      }
    }

    // 2. Text / Ghost Variant (No Border, No Fill)
    if (variant === "text" || variant === "ghost") {
      switch (colorTheme) {
        case "gold":
          return "bg-transparent text-gold hover:text-gold-light hover:underline underline-offset-4";
        case "light":
        case "cream":
          return "bg-transparent text-cream/90 hover:text-cream hover:underline underline-offset-4";
        case "dark":
        case "ink":
          return "bg-transparent text-ink hover:text-wine";
        case "wine":
        default:
          return "bg-transparent text-wine hover:text-wine-dark hover:underline underline-offset-4";
      }
    }

    // 3. Border / Outline Variant
    if (variant === "border" || variant === "outline" || variant === "secondary") {
      switch (colorTheme) {
        case "gold":
          return "bg-transparent text-gold border border-gold/60 hover:bg-gold hover:text-ink shadow-2xs";
        case "light":
        case "cream":
          return "bg-transparent text-cream border border-cream/50 hover:bg-cream/20 backdrop-blur-xs shadow-2xs";
        case "dark":
        case "ink":
          return "bg-transparent text-ink border border-ink/40 hover:bg-ink/10 shadow-2xs";
        case "wine":
        default:
          return "bg-transparent text-wine border border-wine/50 hover:bg-wine-soft shadow-2xs";
      }
    }

    // 4. Fill / Primary Variant (Default)
    switch (colorTheme) {
      case "gold":
        return "bg-gold hover:bg-gold-light text-ink font-semibold shadow-xs hover:shadow-md";
      case "dark":
        return "bg-ink hover:bg-ink-soft text-cream font-medium shadow-xs hover:shadow-md";
      case "light":
      case "cream":
        return "bg-cream hover:bg-surface text-ink font-medium shadow-xs hover:shadow-md";
      case "wine":
      default:
        return "bg-wine hover:bg-wine-dark text-white font-medium shadow-wine/20 shadow-xs hover:shadow-md";
    }
  };

  const isIconSize = size === "icon" || (!children && (Boolean(leftIcon) || Boolean(rightIcon)));
  const effectiveSize = isIconSize ? "icon" : size;

  const combinedClasses = cn(
    "inline-flex items-center justify-center font-body transition-all duration-200 cursor-pointer select-none tracking-wide",
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
      {children && <span>{children}</span>}
      {rightIcon && <span className="inline-flex shrink-0 items-center justify-center">{rightIcon}</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button disabled={disabled} className={combinedClasses} {...rest}>
      {content}
    </button>
  );
}
