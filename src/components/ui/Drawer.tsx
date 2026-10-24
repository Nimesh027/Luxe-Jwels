"use client";

import React, { useEffect, useCallback, memo, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import { CloseIcon } from "@/components/icons";

export type DrawerSize = "sm" | "md" | "lg" | "xl" | "full";

const SIZE_MAP: Record<DrawerSize, string> = {
  sm: "sm:max-w-sm", // ~384px
  md: "sm:max-w-md", // ~448px
  lg: "sm:max-w-lg", // ~512px
  xl: "sm:max-w-xl", // ~576px
  full: "sm:max-w-full",
};

export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  position?: "left" | "right";
  size?: DrawerSize;
  maxWidth?: string;
  title?: ReactNode;
  description?: ReactNode;
  headerRight?: ReactNode;
  headerClassName?: string;
  bodyClassName?: string;
  children: ReactNode;
  footer?: ReactNode;
  footerClassName?: string;
  ariaLabel?: string;
  className?: string;
  hideCloseButton?: boolean;
  closeOnBackdropClick?: boolean;
  closeOnEsc?: boolean;
}

function DrawerComponent({
  isOpen,
  onClose,
  position = "right",
  size = "md",
  maxWidth,
  title,
  description,
  headerRight,
  headerClassName,
  bodyClassName,
  children,
  footer,
  footerClassName,
  ariaLabel = "Drawer",
  className,
  hideCloseButton = false,
  closeOnBackdropClick = true,
  closeOnEsc = true,
}: DrawerProps) {
  // Handle ESC key to close drawer
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (closeOnEsc && e.key === "Escape") {
        onClose();
      }
    },
    [closeOnEsc, onClose]
  );

  useEffect(() => {
    if (!isOpen) return;

    // Prevent body scrolling while keeping current scroll position
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  const isLeft = position === "left";
  const resolvedMaxWidth = maxWidth || SIZE_MAP[size] || SIZE_MAP.md;

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden"
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel}
    >
      {/* Dimmed backdrop with smooth fade-in */}
      <div
        className="fixed inset-0 bg-ink/60 backdrop-blur-xs transition-opacity duration-300 animate-fadeIn cursor-pointer"
        onClick={closeOnBackdropClick ? onClose : undefined}
        aria-hidden="true"
      />

      {/* Position container: 100% width on mobile without left/right padding displacement */}
      <div
        className={cn(
          "fixed inset-y-0 flex w-full max-w-full pointer-events-none z-10",
          isLeft
            ? "left-0 justify-start pr-0 sm:pr-8 md:pr-12"
            : "right-0 justify-end pl-0 sm:pl-8 md:pl-12"
        )}
      >
        <aside
          className={cn(
            "pointer-events-auto relative flex h-full w-full flex-col bg-surface shadow-2xl transition-transform duration-300 ease-out",
            isLeft ? "animate-slideInLeft" : "animate-slideInRight",
            "max-w-full",
            resolvedMaxWidth,
            className
          )}
          aria-label={ariaLabel}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          {(title || !hideCloseButton || headerRight) && (
            <div
              className={cn(
                "flex items-center justify-between border-b border-border/80 px-4 py-3.5 sm:px-6 sm:py-4 bg-surface shrink-0 gap-3",
                headerClassName
              )}
            >
              <div className="flex flex-col min-w-0 flex-1">
                <div className="flex items-center gap-2 min-w-0">
                  {typeof title === "string" ? (
                    <h2 className="font-display text-body font-semibold text-ink truncate">
                      {title}
                    </h2>
                  ) : (
                    title
                  )}
                </div>
                {description && (
                  <p className="mt-0.5 text-caption text-muted-foreground truncate">
                    {description}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {headerRight}
                {!hideCloseButton && (
                  <Button
                    variant="unstyled"
                    onClick={onClose}
                    aria-label={`Close ${ariaLabel}`}
                    className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground hover:bg-border/60 hover:text-ink transition-colors cursor-pointer shrink-0"
                  >
                    <CloseIcon size={18} />
                  </Button>
                )}
              </div>
            </div>
          )}

          {/* Body Content */}
          <div
            className={cn(
              "flex-1 overflow-y-auto overscroll-contain",
              bodyClassName
            )}
          >
            {children}
          </div>

          {/* Optional Footer */}
          {footer && (
            <div
              className={cn(
                "border-t border-border/80 bg-surface px-4 py-3.5 sm:px-6 sm:py-4 shrink-0",
                footerClassName
              )}
            >
              {footer}
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}

DrawerComponent.displayName = "Drawer";

export default memo(DrawerComponent);
