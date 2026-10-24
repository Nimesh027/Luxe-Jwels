"use client";

import React, { useEffect, useCallback, memo, type ReactNode } from "react";
import { CloseIcon } from "@/components/icons";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { closeModal } from "@/store/slices/uiSlice";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export interface ModalProps {
  id?: string;
  isOpen?: boolean;
  onClose?: () => void;
  title?: ReactNode;
  children: ReactNode;
  maxWidth?: string;
  className?: string;
}

function ModalComponent({
  id,
  isOpen: controlledIsOpen,
  onClose: controlledOnClose,
  title,
  children,
  maxWidth = "max-w-md",
  className,
}: ModalProps) {
  const dispatch = useAppDispatch();
  const activeModal = useAppSelector((state) => state.ui.activeModal);

  const isReduxMode = Boolean(id);
  const isOpen = isReduxMode ? activeModal === id : Boolean(controlledIsOpen);

  const handleClose = useCallback(() => {
    if (controlledOnClose) {
      controlledOnClose();
    } else if (isReduxMode) {
      dispatch(closeModal());
    }
  }, [controlledOnClose, isReduxMode, dispatch]);

  // Handle ESC key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    },
    [handleClose]
  );

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 p-4 backdrop-blur-xs transition-opacity duration-300"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={cn(
          "relative w-full rounded-2xl border border-border bg-surface p-6 shadow-2xl transition-transform duration-300",
          maxWidth,
          className
        )}
        onClick={(event) => event.stopPropagation()}
      >
        <Button
          variant="unstyled"
          aria-label="Close modal"
          className="absolute right-4 top-4 text-muted hover:text-ink cursor-pointer p-1.5 rounded-full hover:bg-cream-dark transition-colors"
          onClick={handleClose}
        >
          <CloseIcon size={18} />
        </Button>
        {title && (
          <div className="mb-4">
            {typeof title === "string" ? (
              <h2 className="font-display text-h4 text-ink">{title}</h2>
            ) : (
              title
            )}
          </div>
        )}
        {children}
      </div>
    </div>
  );
}

ModalComponent.displayName = "Modal";

export default memo(ModalComponent);
