"use client";

import { CloseIcon } from "@/components/icons";
import type { ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { closeModal } from "@/store/slices/uiSlice";
import { usePresence } from "@/hooks/usePresence";

interface ModalProps {
  id: string;
  title?: string;
  children: ReactNode;
}

export default function Modal({ id, title, children }: ModalProps) {
  const dispatch = useAppDispatch();
  const activeModal = useAppSelector((state) => state.ui.activeModal);

  const { mounted, open } = usePresence(activeModal === id);

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-ink/60 px-4 ${open ? "animate-in fade-in" : "animate-out fade-out"}`}
      onClick={() => dispatch(closeModal())}
    >
      <div
        className={`relative w-full max-w-md bg-white p-6 rounded-2xl shadow-2xl border border-border ${open ? "animate-in fade-in zoom-in-95 slide-in-from-bottom-4" : "animate-out fade-out zoom-out-95"}`}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close"
          className="absolute right-2 top-2 flex size-12 items-center justify-center rounded-full text-muted hover:bg-offwhite hover:text-ink cursor-pointer"
          onClick={() => dispatch(closeModal())}
        >
          <CloseIcon size={18} />
        </button>
        {title && <h2 className="mb-4 font-display text-h4 text-ink">{title}</h2>}
        {children}
      </div>
    </div>
  );
}
