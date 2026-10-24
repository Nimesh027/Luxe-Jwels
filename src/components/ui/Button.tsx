import Link from "next/link";
import React, { forwardRef, memo, type ButtonHTMLAttributes, type ReactNode } from "react";
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
  | "ghost"
  | "unstyled";

export type ButtonColorTheme = "wine" | "gold" | "dark" | "light" | "cream" | "ink";
export type ButtonSize = "xs" | "sm" | "md" | "lg" | "icon" | "none";
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
  type?: "button" | "submit" | "reset";
}

// The reference design uses crisp, slightly rounded rectangles for every
// button, so "md"/"lg" no longer produce pill shapes.
const roundedClasses: Record<ButtonRounded, string> = {
  none: "rounded-none",
  sm: "rounded-[var(--radius-btn)]",
  md: "rounded-[var(--radius-btn)]",
  lg: "rounded-md",
  full: "rounded-[var(--radius-btn)]",
};

const sizeClasses: Record<ButtonSize, string> = {
  none: "",
  xs: "h-8 px-3 text-[12.5px] gap-1.5",
  sm: "h-10 px-4 text-[13.5px] gap-2",
  md: "h-11 px-6 text-[14.5px] gap-2.5",
  lg: "h-12 sm:h-[52px] px-8 text-[15px] gap-3",
  icon: "h-10 w-10 sm:h-11 sm:w-11 items-center justify-center",
};

const ButtonComponent = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = "fill",
    colorTheme = "wine",
    size = "md",
    rounded = "md",
    fullWidth = false,
    href,
    leftIcon,
    rightIcon,
    children,
    className,
    disabled,
    type = "button",
    ...rest
  },
  ref
) {
  if (variant === "unstyled") {
    const unstyledClasses = cn(
      "cursor-pointer select-none transition duration-200 disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none",
      fullWidth && "w-full",
      className
    );

    const content = (
      <>
        {leftIcon && <span className="inline-flex shrink-0 items-center justify-center">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="inline-flex shrink-0 items-center justify-center">{rightIcon}</span>}
      </>
    );

    if (href) {
      return (
        <Link href={href} className={unstyledClasses}>
          {content}
        </Link>
      );
    }

    return (
      <button ref={ref} type={type} disabled={disabled} className={unstyledClasses} {...rest}>
        {content}
      </button>
    );
  }

  const getVariantStyles = (): string => {
    if (variant === "icon") {
      switch (colorTheme) {
        case "light":
          return "bg-white text-ink hover:text-gold border border-border shadow-xs";
        case "gold":
          return "bg-brand hover:bg-brand-dark text-white";
        case "dark":
          return "bg-ink/60 text-white hover:bg-ink border border-white/20 backdrop-blur-xs";
        case "cream":
          return "bg-cream text-ink hover:bg-cream-dark border border-border";
        case "wine":
        default:
          return "bg-gold-soft text-gold hover:bg-brand hover:text-white border border-gold/20";
      }
    }

    if (variant === "text" || variant === "ghost") {
      switch (colorTheme) {
        case "light":
        case "cream":
          return "bg-transparent text-white/90 hover:text-white underline-offset-4 hover:underline";
        case "dark":
        case "ink":
          return "bg-transparent text-ink hover:text-gold";
        default:
          return "bg-transparent text-gold hover:text-gold-dark underline-offset-4 hover:underline";
      }
    }

    if (variant === "border" || variant === "outline" || variant === "secondary") {
      switch (colorTheme) {
        case "light":
        case "cream":
          return "bg-transparent text-white border border-white/70 hover:bg-white hover:text-ink";
        case "dark":
        case "ink":
          return "bg-transparent text-ink border border-ink hover:bg-ink hover:text-white";
        default:
          return "bg-transparent text-gold border border-gold hover:bg-brand hover:border-brand hover:text-white";
      }
    }

    // Fill (default)
    switch (colorTheme) {
      case "dark":
      case "ink":
        return "bg-ink hover:bg-ink-soft text-white font-semibold";
      case "light":
      case "cream":
        return "bg-white hover:bg-cream text-ink border border-border font-semibold";
      default:
        return "bg-brand hover:bg-brand-dark text-white font-semibold";
    }
  };

  const isIconSize = size === "icon" || (!children && (Boolean(leftIcon) || Boolean(rightIcon)));
  const effectiveSize = isIconSize ? "icon" : size;

  const combinedClasses = cn(
    "inline-flex items-center justify-center font-body font-medium tracking-wide whitespace-nowrap press cursor-pointer select-none",
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
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button ref={ref} type={type} disabled={disabled} className={combinedClasses} {...rest}>
      {content}
    </button>
  );
});

ButtonComponent.displayName = "Button";

export default memo(ButtonComponent);
