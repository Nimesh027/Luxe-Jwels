"use client";

import { useState } from "react";
import Link from "next/link";
import Section from "@/components/common/Section";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export default function ContactClient() {
  const [openFaqId, setOpenFaqId] = useState<string | null>("faq-1");

  const faqs: FAQItem[] = [
    {
      id: "faq-1",
      question: "How do I check my order status?",
      answer:
        "You can track your order in real time under My Account > Order History or by clicking 'Track Order' in our navigation drawer. You will also receive SMS & Email notifications with live tracking links once your package is dispatched.",
    },
    {
      id: "faq-2",
      question: "What is the purity of Luxe Jewels products?",
      answer:
        "Every piece of fine jewellery at Luxe Jewels is BIS Hallmarked (22K Gold & 18K Solid Gold) and certified by international laboratories like IGI and SGL for natural, conflict-free diamonds.",
    },
    {
      id: "faq-3",
      question: "What is your return & exchange policy?",
      answer:
        "We offer a 15-day no-questions-asked 100% money-back guarantee along with a Lifetime Exchange Policy. If you need a size adjustment or design exchange, our luxury white-glove concierge service will pick up the piece from your home free of charge.",
    },
    {
      id: "faq-4",
      question: "How can I customize a ring or necklace size?",
      answer:
        "You can select your preferred ring size or chain length on the product page. For bespoke custom dimensions, simply contact our jewellery experts via Live Chat or call our toll-free number 1800-266-0123.",
    },
    {
      id: "faq-5",
      question: "Are international shipments insured?",
      answer:
        "Yes, all domestic and international shipments are 100% fully transit-insured until delivered safely to your hands. A signature is required upon delivery.",
    },
  ];

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <Section>

      {/* BREADCRUMB NAVIGATION */}
      <nav
        aria-label="Breadcrumb"
        className="mb-8 flex items-center gap-2 text-xs uppercase tracking-wider text-muted"
      >
        <Link href="/" className="hover:text-wine transition-colors">
          Home
        </Link>
        <span>/</span>
        <span className="font-semibold text-wine">Help & Contact</span>
      </nav>

      {/* MAIN PAGE TITLE */}
      <h1 className="font-display text-3xl sm:text-4xl text-wine font-semibold tracking-wide text-center mb-10 sm:mb-12">
        Help & Contact
      </h1>

      {/* HAVE A QUESTION MAIN CARD (MATCHING USER SCREENSHOT) */}
      <div className="bg-surface rounded-2xl border border-border/80 p-6 sm:p-12 shadow-xs space-y-8 max-w-4xl mx-auto">
        <h2 className="font-display text-xl sm:text-2xl font-semibold text-ink text-center">
          Have A Question
        </h2>

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
            <h3 className="font-display font-semibold text-wine text-base sm:text-lg mb-1">
              Chat with Us
            </h3>
            <p className="text-xs text-muted">Available 24/7 on WhatsApp & Web</p>
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
            <h3 className="font-display font-semibold text-wine text-base sm:text-lg mb-1">
              Call Us At
            </h3>
            <p className="text-xs sm:text-sm text-ink font-semibold mt-0.5">
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
            <h3 className="font-display font-semibold text-wine text-base sm:text-lg mb-1">
              Write to Us
            </h3>
            <a
              href="mailto:customercare@luxe-jewels.com"
              className="text-xs text-muted hover:text-wine font-medium transition-colors mt-0.5"
            >
              customercare@luxe-jewels.com
            </a>
          </div>

        </div>

        {/* NOTICE SUBTEXT (MATCHING USER SCREENSHOT) */}
        <div className="pt-6 border-t border-border/60 text-center">
          <p className="text-xs text-muted font-normal leading-relaxed max-w-2xl mx-auto">
            The toll free number is only applicable for domestic orders within India. For international customers or deliveries please reach us out through whatsapp, Live chat or email.
          </p>
        </div>
      </div>

      {/* FREQUENTLY ASKED QUESTIONS (FAQ) SECTION */}
      <div className="mt-16 sm:mt-20 max-w-4xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-wine">
            Frequently Asked Questions (FAQs)
          </h2>
          <p className="text-xs sm:text-sm text-muted">
            Find instant answers to common queries regarding orders, sizing, and authentications.
          </p>
        </div>

        <div className="space-y-3 pt-4">
          {faqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-surface rounded-2xl border border-border/70 overflow-hidden shadow-2xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-5 text-left text-xs sm:text-sm font-semibold text-ink hover:text-wine cursor-pointer transition-colors"
                >
                  <span>{faq.question}</span>
                  <span className={`w-6 h-6 rounded-full bg-wine/5 text-wine flex items-center justify-center font-bold text-sm shrink-0 transition-transform ${isOpen ? "rotate-45" : ""}`}>
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-muted leading-relaxed border-t border-border/40 animate-in fade-in duration-200">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </Section>
  );
}
