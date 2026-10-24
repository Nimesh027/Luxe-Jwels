"use client";

import React, { useCallback, useRef, memo, type ReactNode } from "react";
import { usePresence, useOverlayBehaviour } from "@/hooks/useOverlay";
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

  const panelRef = useRef<HTMLDivElement>(null);
  const { mounted, state } = usePresence(isOpen);
  useOverlayBehaviour({ open: isOpen, onClose: handleClose, panelRef });

  if (!mounted) return null;

  return (
    <div
      data-state={state}
      className="motion-fade fixed inset-0 z-50 flex items-center justify-center bg-ink/60 p-4 backdrop-blur-xs"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-label={typeof title === "string" ? title : undefined}
    >
      <div
        ref={panelRef}
        tabIndex={-1}
        data-state={state}
        className={cn(
          "motion-pop relative w-full rounded-2xl border border-border bg-surface p-6 shadow-2xl outline-none",
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
