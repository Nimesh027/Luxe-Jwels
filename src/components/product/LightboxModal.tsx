"use client";

import { memo, useEffect, useRef } from "react";
import Image from "next/image";
import { CloseIcon, ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";
import Button from "@/components/ui/Button";
import { usePresence, useOverlayBehaviour } from "@/hooks/useOverlay";

interface LightboxModalProps {
  isOpen: boolean;
  images: string[];
  activeIndex: number;
  productName: string;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const navButton =
  "press absolute z-10 flex h-12 w-12 items-center justify-center rounded-full bg-black/50 text-white shadow-lg backdrop-blur-xs hover:bg-brand cursor-pointer";

function LightboxModalComponent({
  isOpen,
  images,
  activeIndex,
  productName,
  onClose,
  onNavigate,
}: LightboxModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const { mounted, state } = usePresence(isOpen);
  useOverlayBehaviour({ open: isOpen, onClose, panelRef });

  const prev = () => onNavigate((activeIndex - 1 + images.length) % images.length);
  const next = () => onNavigate((activeIndex + 1) % images.length);
  const navRef = useRef({ prev, next });
  useEffect(() => {
    navRef.current = { prev, next };
  });

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") navRef.current.prev();
      if (e.key === "ArrowRight") navRef.current.next();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen]);

  if (!mounted) return null;

  return (
    <div
      ref={panelRef}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-label={`${productName} image gallery`}
      data-state={state}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      className="motion-fade fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6 backdrop-blur-md outline-none"
    >
      <Button
        variant="unstyled"
        onClick={onClose}
        className="press absolute top-4 right-4 sm:top-6 sm:right-6 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 hover:text-gold cursor-pointer"
        aria-label="Close Lightbox"
      >
        <CloseIcon size={22} />
      </Button>

      <div className="relative flex h-full w-full max-w-6xl items-center justify-center py-6">
        {images.length > 1 && (
          <Button variant="unstyled" aria-label="Previous Image" onClick={prev} className={`${navButton} left-2 sm:left-4`}>
            <ChevronLeftIcon size={24} />
          </Button>
        )}

        {/* Each slide is keyed so it fades in rather than snapping */}
        <div className="relative h-full w-full max-h-[85vh] max-w-[85vw] flex items-center justify-center">
          <Image
            key={images[activeIndex]}
            src={images[activeIndex]}
            alt={`${productName} - slide ${activeIndex + 1}`}
            fill
            priority
            sizes="85vw"
            className="animate-in fade-in rounded-2xl object-contain drop-shadow-2xl"
          />
        </div>

        {images.length > 1 && (
          <Button variant="unstyled" aria-label="Next Image" onClick={next} className={`${navButton} right-2 sm:right-4`}>
            <ChevronRightIcon size={24} />
          </Button>
        )}
      </div>
    </div>
  );
}

export default memo(LightboxModalComponent);
