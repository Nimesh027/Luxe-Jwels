"use client";

import Image from "next/image";
import { CloseOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";

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
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6 backdrop-blur-md transition-all">
      {/* Top Right Close Button */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-h4 text-white transition-colors hover:bg-white/20 hover:text-gold cursor-pointer"
        aria-label="Close Lightbox"
      >
        <CloseOutlined />
      </button>

      {/* Middle Slider Container */}
      <div className="relative flex h-full w-full max-w-6xl items-center justify-center py-6">
        {/* Previous Image Button */}
        <button
          type="button"
          aria-label="Previous Image"
          onClick={() => onNavigate((activeIndex - 1 + images.length) % images.length)}
          className="absolute left-2 sm:left-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-black/50 text-white shadow-lg backdrop-blur-xs transition-all hover:bg-wine hover:scale-110 cursor-pointer"
        >
          <LeftOutlined className="text-h5" />
        </button>

        {/* Main Lightbox Image */}
        <div className="relative h-full w-full max-h-[85vh] max-w-[85vw] flex items-center justify-center">
          <Image
            src={images[activeIndex]}
            alt={`${productName} - slide ${activeIndex + 1}`}
            fill
            priority
            className="rounded-2xl object-contain drop-shadow-2xl"
          />
        </div>

        {/* Next Image Button */}
        <button
          type="button"
          aria-label="Next Image"
          onClick={() => onNavigate((activeIndex + 1) % images.length)}
          className="absolute right-2 sm:right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-black/50 text-white shadow-lg backdrop-blur-xs transition-all hover:bg-wine hover:scale-110 cursor-pointer"
        >
          <RightOutlined className="text-h5" />
        </button>
      </div>
    </div>
  );
}
