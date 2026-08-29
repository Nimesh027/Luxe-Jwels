"use client";

import SectionTitle from "@/components/common/SectionTitle";
import Section from "@/components/common/Section";

const supportOptions = [
  {
    id: "chat",
    href: "#",
    icon: (
      <svg className="w-7 h-7 text-gold/80 group-hover:text-gold transition-colors duration-300 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Chat with Us",
    subtitle: "Available 24/7 on WhatsApp & Web",
    subtitleClassName: "text-small text-muted font-light",
  },
  {
    id: "call",
    href: "tel:18002660123",
    icon: (
      <svg className="w-7 h-7 text-gold/80 group-hover:text-gold transition-colors duration-300 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    title: "Call Us At",
    subtitle: "1800-266-0123",
    subtitleClassName: "text-small text-ink font-medium tracking-wide",
  },
  {
    id: "email",
    href: "mailto:customercare@luxe-jewels.com",
    icon: (
      <svg className="w-7 h-7 text-gold/80 group-hover:text-gold transition-colors duration-300 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    title: "Write to Us",
    subtitle: "customercare@luxe-jewels.com",
    subtitleClassName: "text-small text-muted font-light group-hover:text-wine transition-colors",
  },
];

export default function ContactSupportOptions() {
  return (
    <Section className="py-12 sm:py-16">
      <div className="bg-surface rounded-2xl border border-gold/20 p-8 sm:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.04)] max-w-5xl mx-auto relative overflow-hidden group/container">

        {/* Subtle Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-32 bg-gold/5 blur-3xl pointer-events-none rounded-full" />

        <SectionTitle
          title="Have A Question?"
          description="Our luxury concierge is here to assist you."
          align="center"
          className="mb-10 relative z-10"
          titleClassName="text-h3 font-semibold text-ink"
        />

        {/* 3 COLUMN SUPPORT OPTIONS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start relative z-10">
          {supportOptions.map((option) => (
            <a
              key={option.id}
              href={option.href}
              className="group flex flex-col items-center justify-center text-center p-8 rounded-xl border border-transparent hover:border-gold/30 hover:bg-gold/[0.02] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-[#fbf8f2] border border-gold/40 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-gold group-hover:shadow-md transition-all duration-300">
                {option.icon}
              </div>
              <h3 className="font-display font-medium !text-h6 mb-2 group-hover:text-wine transition-colors duration-300">
                {option.title}
              </h3>
              <p className={option.subtitleClassName}>{option.subtitle}</p>
            </a>
          ))}
        </div>

        {/* NOTICE SUBTEXT */}
        <div className="mt-10 pt-6 border-t border-gold/20 text-center relative z-10">
          <p className="text-caption text-muted/80 font-light leading-relaxed max-w-2xl mx-auto">
            The toll-free number is only applicable for domestic orders within India. For international customers or deliveries please reach out to us through WhatsApp, Live Chat or Email.
          </p>
        </div>
      </div>
    </Section>
  );
}
