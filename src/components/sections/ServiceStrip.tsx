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
    <section className="bg-cream pb-[clamp(36px,4.5vw,64px)]" aria-label="Our promise">
      <ul className="container grid grid-cols-2 lg:grid-cols-4 gap-y-6">
        {assuranceItems.map(({ icon: Icon, title, subtitle }, idx) => (
          <li
            key={title}
            className={`flex items-center gap-3 sm:gap-4 px-2 sm:px-4 lg:justify-center border-border ${idx % 2 === 1 ? "border-l" : ""} ${idx === 2 ? "lg:border-l" : ""}`}
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-white text-gold-warm">
              <Icon className="w-6 h-6" />
            </span>
            <div className="min-w-0">
              <p className="font-display text-[16px] sm:text-[18px] font-semibold leading-tight text-ink">{title}</p>
              <p className="text-[12.5px] sm:text-[13.5px] text-muted">{subtitle}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
