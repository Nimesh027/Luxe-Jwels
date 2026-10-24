"use client";

import { useState } from "react";
import SectionTitle from "@/components/common/SectionTitle";
import Section from "@/components/common/Section";
import Button from "@/components/ui/Button";
import { contactFaqsData } from "@/data";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export default function ContactFAQ() {
  const [openFaqId, setOpenFaqId] = useState<string | null>("faq-1");

  const faqs: FAQItem[] = contactFaqsData;

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <Section>
      <SectionTitle
        title="Frequently Asked Questions (FAQs)"
        description="Find instant answers to common queries regarding orders, sizing, and authentications."
        align="center"
        className="mb-4"
        titleClassName="text-wine font-semibold text-h2"
      />

      <div className="space-y-3 pt-4">
        {faqs.map((faq) => {
          const isOpen = openFaqId === faq.id;
          return (
            <div
              key={faq.id}
              className="bg-surface rounded-2xl border border-border/70 overflow-hidden shadow-2xs transition-all"
            >
              <Button
                type="button"
                variant="unstyled"
                onClick={() => toggleFaq(faq.id)}
                className="w-full flex items-center justify-between p-5 text-left text-body font-semibold text-ink hover:text-wine cursor-pointer transition-colors"
              >
                <span>{faq.question}</span>
                <span
                  className={`w-6 h-6 rounded-full bg-wine/5 text-wine flex items-center justify-center font-bold text-small shrink-0 transition-transform ${isOpen ? "rotate-45" : "" }`}
                >
                  +
                </span>
              </Button>
              {isOpen && (
                <div className="px-5 pb-5 pt-0 text-body text-muted leading-relaxed border-t border-border/40 animate-in fade-in duration-200">
                  <p className="pt-3">{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
