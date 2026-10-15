"use client";

import { useState } from "react";
import Collapse from "@/components/ui/Collapse";
import SectionTitle from "@/components/common/SectionTitle";
import Section from "@/components/common/Section";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export default function ContactFAQ() {
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
      <SectionTitle
        title="Frequently Asked Questions (FAQs)"
        description="Find instant answers to common queries regarding orders, sizing, and authentications."
        align="center"
        className="mb-4"
        titleClassName="text-brown font-semibold text-h2"
      />

      <div className="space-y-3 pt-4">
        {faqs.map((faq) => {
          const isOpen = openFaqId === faq.id;
          return (
            <div
              key={faq.id}
              className="bg-white rounded-2xl border border-border/70 overflow-hidden shadow-2xs transition-all"
            >
              <button
                type="button"
                onClick={() => toggleFaq(faq.id)}
                className="w-full flex items-center justify-between p-5 text-left text-body font-semibold text-ink hover:text-brown cursor-pointer transition-colors"
              >
                <span>{faq.question}</span>
                <span
                  className={`w-6 h-6 rounded-full bg-brown/5 text-brown flex items-center justify-center font-bold text-small shrink-0 transition-transform duration-300 ease-luxe ${isOpen ? "rotate-45" : ""
                    }`}
                >
                  +
                </span>
              </button>
              <Collapse open={isOpen} className="px-5 pb-5 pt-0 text-body text-muted leading-relaxed border-t border-border/40">
                  <p className="pt-3">{faq.answer}</p>
                </Collapse>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
