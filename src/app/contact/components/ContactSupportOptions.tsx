"use client";

import SectionTitle from "@/components/common/SectionTitle";
import Section from "@/components/common/Section";

export default function ContactSupportOptions() {
  return (
    <Section className="bg-surface rounded-2xl border border-border/80 p-6 sm:p-12 shadow-xs space-y-8 max-w-4xl mx-auto">
      <SectionTitle
        title="Have A Question"
        align="center"
        className="mb-0"
        titleClassName="text-h3 font-semibold text-ink"
      />

      {/* 3 COLUMN SUPPORT OPTIONS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-border/60">

        {/* Column 1: Chat with Us */}
        <div className="flex flex-col items-center justify-center text-center p-4">
          <div className="w-14 h-14 rounded-full bg-wine/5 text-wine flex items-center justify-center mb-3">
            <svg
              className="w-7 h-7 fill-none stroke-current"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <h3 className="font-display font-semibold text-wine text-h5 mb-1">
            Chat with Us
          </h3>
          <p className="text-small text-muted">Available 24/7 on WhatsApp & Web</p>
        </div>

        {/* Column 2: Call Us At */}
        <div className="flex flex-col items-center justify-center text-center p-4 pt-6 md:pt-4">
          <div className="w-14 h-14 rounded-full bg-wine/5 text-wine flex items-center justify-center mb-3">
            <svg
              className="w-7 h-7 fill-none stroke-current"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </div>
          <h3 className="font-display font-semibold text-wine text-h5 mb-1">
            Call Us At
          </h3>
          <p className="text-small text-ink font-semibold mt-0.5">
            1800-266-0123
          </p>
        </div>

        {/* Column 3: Write to Us */}
        <div className="flex flex-col items-center justify-center text-center p-4 pt-6 md:pt-4">
          <div className="w-14 h-14 rounded-full bg-wine/5 text-wine flex items-center justify-center mb-3">
            <svg
              className="w-7 h-7 fill-none stroke-current"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </div>
          <h3 className="font-display font-semibold text-wine text-h5 mb-1">
            Write to Us
          </h3>
          <a
            href="mailto:customercare@luxe-jewels.com"
            className="text-small text-muted hover:text-wine font-medium transition-colors mt-0.5"
          >
            customercare@luxe-jewels.com
          </a>
        </div>

      </div>

      {/* NOTICE SUBTEXT (MATCHING USER SCREENSHOT) */}
      <div className="pt-6 border-t border-border/60 text-center">
        <p className="text-caption text-muted font-normal leading-relaxed max-w-2xl mx-auto">
          The toll free number is only applicable for domestic orders within India. For international customers or deliveries please reach us out through whatsapp, Live chat or email.
        </p>
      </div>
    </Section>
  );
}
