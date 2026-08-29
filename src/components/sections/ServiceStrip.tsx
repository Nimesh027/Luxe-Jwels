"use client";

import { useAppSelector } from "@/store/hooks";
import Section from "../common/Section";

// Refined stroke icons for luxury service bar
function EngravingIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="M2 2l7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  );
}

function GiftIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="3" y="8" width="18" height="13" rx="2" />
      <path d="M12 8v13" />
      <path d="M3 12h18" />
      <path d="M12 8c-2-3-6-3-6 0s4 0 6 0c2 0 6 0 6 0s-4-3-6 0z" />
    </svg>
  );
}

function WorldwideIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3.6 9h16.8" />
      <path d="M3.6 15h16.8" />
      <path d="M11.5 3a17 17 0 0 0 0 18" />
      <path d="M12.5 3a17 17 0 0 1 0 18" />
    </svg>
  );
}

function ExchangeIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4 12a8 8 0 0 1 14.93-4" />
      <path d="M20 4v4h-4" />
      <path d="M20 12a8 8 0 0 1-14.93 4" />
      <path d="M4 20v-4h4" />
    </svg>
  );
}

const serviceIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  engraving: EngravingIcon,
  gift: GiftIcon,
  worldwide: WorldwideIcon,
  exchange: ExchangeIcon,
};

export default function ServiceStrip() {
  const services = useAppSelector((state) => state.siteContent.serviceStrip);

  return (
    <Section className="bg-ink text-cream">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
        {services.map((service, idx) => {
          const Icon = serviceIconMap[service.icon] || EngravingIcon;
          return (
            <div
              key={service.id}
              className={`flex items-center gap-4 py-4 sm:py-2 ${idx === 0
                  ? "sm:pr-6 lg:pr-8"
                  : idx === services.length - 1
                    ? "sm:pl-6 lg:pl-8"
                    : "sm:px-6 lg:px-8"
                } justify-start sm:justify-center`}
            >
              {/* Gold Accent Icon Container */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5 text-gold border border-gold/25 shadow-xs">
                <Icon className="h-5 w-5" />
              </div>

              {/* Service Title & Subtitle */}
              <div className="flex flex-col">
                <p className="text-caption sm:text-[13px] font-medium tracking-wider uppercase text-cream">
                  {service.title}
                </p>
                {service.subtitle && (
                  <p className="text-[11px] font-light text-cream/60 mt-0.5">
                    {service.subtitle}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
