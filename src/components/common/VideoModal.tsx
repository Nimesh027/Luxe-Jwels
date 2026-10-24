"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { CloseIcon } from "@/components/icons";

interface VideoModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  src?: string;
}

export default function VideoModal({
  open,
  onClose,
  title,
  src = "/videos/diamond-ring.mp4",
}: VideoModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-black/85 p-4 animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="theme-dark relative w-full max-w-4xl overflow-hidden rounded-[var(--radius-card)] bg-ink shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 px-4 sm:px-5 py-3 border-b border-white/10">
          <p className="font-display text-[18px] sm:text-[20px] text-white truncate">{title}</p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close video"
            autoFocus
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <CloseIcon size={18} />
          </button>
        </div>
        <div className="relative aspect-video w-full bg-black">
          <video src={src} controls autoPlay playsInline className="h-full w-full object-cover" />
        </div>
      </div>
    </div>,
    document.body
  );
}
