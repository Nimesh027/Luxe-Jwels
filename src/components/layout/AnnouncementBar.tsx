"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useAppSelector } from "@/store/hooks";

export default function AnnouncementBar() {
  const pathname = usePathname();
  const items = useAppSelector((state) => state.siteContent.announcementBar);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 45) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isAuthPage =
    pathname === "/login" || pathname === "/register" || pathname === "/forgot-password";
  if (isAuthPage) return null;

  if (!items || items.length === 0) return null;

  // Quadruple the items to ensure wide screens are completely covered and loop seamlessly
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div
      className={`relative w-full overflow-hidden bg-ink text-cream border-b border-ink-soft select-none transition-all duration-300 ease-in-out z-40 ${
        isVisible
          ? "max-h-12 py-2.5 opacity-100 translate-y-0"
          : "max-h-0 py-0 opacity-0 -translate-y-full border-transparent pointer-events-none"
      }`}
    >
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center">
        {repeatedItems.map((item, index) => (
          <div key={index} className="flex items-center shrink-0">
            <span className="text-caption uppercase tracking-[0.2em] font-medium px-8 text-cream/90">
              {item}
            </span>
            <span className="text-gold/70 text-[9px] select-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="24"
                height="24"
                x="0"
                y="0"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
              >
                <path
                  d="M256 16c-10.7 220.5-19.5 229.3-240 240 220.5 10.7 229.3 19.5 240 240 10.7-220.5 19.5-229.3 240-240-220.5-10.7-229.3-19.5-240-240"
                  fill="currentColor"
                  opacity="1"
                />
              </svg>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

