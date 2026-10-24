"use client";

function AuthenticIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="10" cy="10" r="7" />
      <path d="m21 21-6-6" />
      <path d="m8 8 2-1 2 1-2 4-2-4z" strokeWidth="1.3" />
      <path d="M7 8h6" strokeWidth="1.3" />
    </svg>
  );
}

function PackagingIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M3 13h18v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7z" />
      <path d="M3 13 6 4a2 2 0 0 1 2-1h8a2 2 0 0 1 2 1l3 9" />
      <ellipse cx="12" cy="15" rx="5" ry="1.8" strokeWidth="1.4" />
      <circle cx="12" cy="11.5" r="2.2" strokeWidth="1.4" />
      <path d="m11 9.3 1-.8 1 .8" strokeWidth="1.4" />
    </svg>
  );
}

function ReturnIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M3 12a9 9 0 0 1 15.5-6.36L21 8" />
      <polyline points="21 3 21 8 16 8" />
      <path d="M21 12a9 9 0 0 1-15.5 6.36L3 16" />
      <polyline points="3 21 3 16 8 16" />
      <rect x="8.5" y="8.5" width="7" height="7" rx="1.5" strokeWidth="1.6" />
      <path d="M12 8.5v7M8.5 12h7" strokeWidth="1.3" />
    </svg>
  );
}

function SupportIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10a9 9 0 0 1 18 0v9a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
      <path d="M18 19v1a2 2 0 0 1-2 2h-4" />
      <circle cx="11" cy="22" r="1" fill="currentColor" />
    </svg>
  );
}


const assuranceItems = [
  {
    title: "100% Authentic",
    subtitle: "Certified Jewellery",
    icon: AuthenticIcon,
  },
  {
    title: "Secure Packaging",
    subtitle: "Safe & Elegant",
    icon: PackagingIcon,
  },
  {
    title: "Easy Return",
    subtitle: "30 Days",
    icon: ReturnIcon,
  },
  {
    title: "Dedicated Support",
    subtitle: "We're here for you",
    icon: SupportIcon,
  },
];

export default function ServiceStrip() {
  return (
    <section className="w-full bg-[#FAF7F2] py-8 sm:py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {assuranceItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3.5 sm:gap-4 justify-start sm:justify-center"
              >
                <div className="w-11 h-11 rounded-full bg-[#F2EBE0] border border-[#DDD1BF] flex items-center justify-center text-[#1A1815] shrink-0 shadow-xs">
                  <Icon className="w-5 h-5 text-[#1A1815]" />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-display text-[15px] sm:text-[16px] font-semibold text-[#141414] leading-snug">
                    {item.title}
                  </h4>
                  <span className="font-body text-[12px] sm:text-[12.5px] text-[#78716A]">
                    {item.subtitle}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
