"use client";

import { useAppSelector } from "@/store/hooks";

export default function AnnouncementBar() {
  const items = useAppSelector((state) => state.siteContent.announcementBar);

  return (
    <div className="bg-ink text-cream">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-6 overflow-x-auto px-4 py-2 text-[11px] tracking-wide uppercase sm:gap-10 sm:px-6 lg:px-8">
        {items.map((item, index) => (
          <span key={index} className="shrink-0 whitespace-nowrap">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
