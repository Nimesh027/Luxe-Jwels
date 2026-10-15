"use client";

import Image from "next/image";
import { CloseIcon, ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";
import Button from "@/components/ui/Button";
import { usePresence } from "@/hooks/usePresence";

interface LightboxModalProps {
  isOpen: boolean;
  images: string[];
  activeIndex: number;
  productName: string;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function LightboxModal({
  isOpen,
  images,
  activeIndex,
  productName,
  onClose,
  onNavigate,
}: LightboxModalProps) {
  const { mounted, open } = usePresence(isOpen);

  if (!mounted) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6 backdrop-blur-md ${open ? "animate-in fade-in" : "animate-out fade-out"}`}>
      {/* Top Right Close Button */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 flex size-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 hover:text-gold cursor-pointer"
        aria-label="Close Lightbox"
      >
        <CloseIcon size={22} />
      </button>

      {/* Middle Slider Container */}
      <div className="relative flex h-full w-full max-w-6xl items-center justify-center py-6">
        {/* Previous Image Button */}
        <Button
          type="button"
          aria-label="Previous Image"
          onClick={() => onNavigate((activeIndex - 1 + images.length) % images.length)}
          variant="icon"
          colorTheme="dark"
          size="icon"
          className="absolute left-2 sm:left-4 z-10"
        >
          <ChevronLeftIcon size={24} />
        </Button>

        {/* Main Lightbox Image */}
        <div
          key={activeIndex}
          className={`relative h-full w-full max-h-[85vh] max-w-[85vw] flex items-center justify-center ${open ? "animate-in fade-in zoom-in-95" : "animate-out fade-out zoom-out-95"}`}
        >
          <Image
            src={images[activeIndex]}
            alt={`${productName} - slide ${activeIndex + 1}`}
            fill
            priority
            className="rounded-2xl object-contain drop-shadow-2xl"
          />
        </div>

        {/* Next Image Button */}
        <Button
          type="button"
          aria-label="Next Image"
          onClick={() => onNavigate((activeIndex + 1) % images.length)}
          variant="icon"
          colorTheme="dark"
          size="icon"
          className="absolute right-2 sm:right-4 z-10"
        >
          <ChevronRightIcon size={24} />
        </Button>
      </div>
    </div>
  );
}
