"use client";

import { useState } from "react";
import Link from "next/link";
import Section from "@/components/common/Section";
import StaticPageLayout from "@/components/layout/StaticPageLayout";
import HelpBoxSection from "@/components/common/HelpBoxSection";

interface FAQItem {
  id: string;
  category: "orders" | "account" | "payment" | "returns" | "shipping" | "jewellery";
  question: string;
  answer: string;
}

export default function FaqsClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("orders");
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaqId, setOpenFaqId] = useState<string | null>("faq-1");

  const categories = [
    { id: "orders", label: "Order Delivery and Shopping", count: 3 },
    { id: "account", label: "My Account", count: 2 },
    { id: "payment", label: "Payment", count: 3 },
    { id: "returns", label: "Returns and Exchanges", count: 3 },
    { id: "shipping", label: "International Shipping", count: 2 },
    { id: "jewellery", label: "Jewellery & Gold Purity", count: 3 },
  ];

  const faqs: FAQItem[] = [
    // 1. Order Delivery & Shopping
    {
      id: "faq-1",
      category: "orders",
      question: "How do I place an order on Luxe Jewels?",
      answer:
        "Browse our collections, select your gold metal (18K/22K), diamond cut, and ring or bangle size, then click 'Add to Cart'. Follow the secure checkout process to enter delivery address and complete payment.",
    },
    {
      id: "faq-2",
      category: "orders",
      question: "How can I track my order delivery?",
      answer:
        "Once your order passes hallmark audit and is dispatched via Sequel Express Air, you will receive real-time SMS & WhatsApp updates. You can also view live GPS tracking anytime at /track-order.",
    },
    {
      id: "faq-3",
      category: "orders",
      question: "Can I modify or cancel my order after placing it?",
      answer:
        "Yes, orders can be modified or cancelled within 12 hours of placement before gold fabrication begins. Contact our Concierge Team at 1800-266-0123 for instant assistance.",
    },

    // 2. My Account
    {
      id: "faq-4",
      category: "account",
      question: "Do I need an account to place an order?",
      answer:
        "You can check out as a guest, but creating a Luxe Jewels account allows you to save delivery addresses, track live orders, store wishlists, and manage saved payment methods.",
    },
    {
      id: "faq-5",
      category: "account",
      question: "How do I reset my password?",
      answer:
        "Click on the Account icon in the top header, select 'Log In', and click 'Forgot Password?'. Enter your registered email address to receive a secure reset link.",
    },

    // 3. Payment
    {
      id: "faq-6",
      category: "payment",
      question: "What payment methods are accepted?",
      answer:
        "We accept Credit Cards (Visa, Mastercard, Amex), Debit Cards, NetBanking across 50+ Indian banks, UPI (GPay, PhonePe, Paytm), Bajaj Finserv No-Cost EMI, and Cash on Delivery (COD up to ₹50,000).",
    },
    {
      id: "faq-7",
      category: "payment",
      question: "Is my online payment safe and encrypted?",
      answer:
        "Absolutely. All transactions are processed through 256-bit SSL encrypted payment gateways compliant with PCI-DSS Level 1 security standards.",
    },
    {
      id: "faq-8",
      category: "payment",
      question: "Are there any hidden taxes or GST extra?",
      answer:
        "No. All listed prices on Luxe Jewels include 3% GST and all applicable government taxes. The price you see is the final price you pay.",
    },

    // 4. Returns & Exchanges
    {
      id: "faq-9",
      category: "returns",
      question: "What is your 15-Day Return Policy?",
      answer:
        "We offer a 15-day 100% money-back guarantee with zero restocking fees. Products must be in original unworn condition with security tags and BIS hallmark certificates intact.",
    },
    {
      id: "faq-10",
      category: "returns",
      question: "How does the Lifetime Exchange & Buyback work?",
      answer:
        "You can exchange or buyback your solid gold and diamond jewellery anytime. Plain gold receives 100% value of prevailing market gold rates; diamond jewellery receives 100% gold rate + 90% diamond market value.",
    },
    {
      id: "faq-11",
      category: "returns",
      question: "Is reverse pickup free for returns?",
      answer:
        "Yes, our courier partner provides complimentary 100% transit-insured reverse pickup directly from your doorstep.",
    },

    // 5. International Shipping
    {
      id: "faq-12",
      category: "shipping",
      question: "Which countries do you ship to internationally?",
      answer:
        "We ship fine jewellery worldwide to over 40 countries including US, UK, UAE, Canada, Australia, Singapore, and Europe via DHL Express & FedEx Priority.",
    },
    {
      id: "faq-13",
      category: "shipping",
      question: "Are international shipments insured?",
      answer:
        "Yes, all international deliveries are 100% fully transit-insured from our Mumbai security vault hub until delivered to your hands.",
    },

    // 6. Jewellery & Gold Purity
    {
      id: "faq-14",
      category: "jewellery",
      question: "Are your gold jewellery pieces BIS Hallmarked?",
      answer:
        "Yes, 100% of our gold creations carry official Government BIS Hallmark certification stamped on the inner shank/clasp.",
    },
    {
      id: "faq-15",
      category: "jewellery",
      question: "Are diamonds certified by international labs?",
      answer:
        "Yes, every natural diamond piece comes accompanied by an authentic certificate of quality from IGI (International Gemological Institute) or SGL.",
    },
    {
      id: "faq-16",
      category: "jewellery",
      question: "How can I find my exact ring or bangle size?",
      answer:
        "You can click the 'Size Guide' button on any product page for a printable size chart or request a free physical ring sizer sent to your home.",
    },
  ];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory =
      searchQuery.length > 0
        ? true
        : faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  const activeCategoryObj = categories.find((c) => c.id === selectedCategory);

  return (
    <StaticPageLayout
      pageTitle="Frequently Asked Questions"
      breadcrumbLabel="FAQs"
      description="Find instant answers to common questions about order delivery, gold purity, payments, and lifetime exchange."
    >
      <Section className="pb-16 sm:pb-24">
        {/* MOBILE SCROLLABLE TAB PILLS (Visible on Mobile/Tablet) */}
        <div className="lg:hidden flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                setSelectedCategory(cat.id);
                setSearchQuery("");
              }}
              className={`px-4 py-2.5 rounded-full text-caption font-semibold whitespace-nowrap transition-all cursor-pointer ${selectedCategory === cat.id && !searchQuery
                ? "bg-[#80222F] text-white shadow-xs"
                : "bg-surface border border-border/80 text-ink/80 hover:border-wine/40"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* MAIN RESPONSIVE SIDEBAR TAB LAYOUT (MATCHING USER SCREENSHOT) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">

          {/* LEFT COLUMN: VERTICAL SIDEBAR TABS (Matching Screenshot) */}
          <div className="hidden lg:block lg:col-span-4 bg-surface rounded-2xl border border-border/80 overflow-hidden divide-y divide-border/60 shadow-xs sticky top-24">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id && !searchQuery;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setSearchQuery("");
                  }}
                  className={`w-full p-4.5 text-left font-display text-small font-semibold flex items-center justify-between transition-all cursor-pointer ${isActive
                    ? "bg-[#FAF0F2] text-[#80222F] border-l-4 border-[#80222F]"
                    : "bg-surface text-ink/80 hover:bg-wine/5 hover:text-wine"
                    }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-caption font-semibold px-2 py-0.5 rounded-full ${isActive
                      ? "bg-wine/15 text-wine"
                      : "bg-neutral-100 text-muted"
                      }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* RIGHT COLUMN: ACCORDION FAQ CONTENT AREA */}
          <div className="lg:col-span-8 space-y-4">
            {/* Category Header */}
            <div className="flex items-center justify-between pb-3 border-b border-border/80">
              <h2 className="font-display !text-h4 font-semibold text-wine">
                {searchQuery ? `Search Results for "${searchQuery}"` : activeCategoryObj?.label}
              </h2>
              <span className="text-caption flex-none text-muted font-medium">
                {filteredFaqs.length} {filteredFaqs.length === 1 ? "question" : "questions"}
              </span>
            </div>

            {/* Accordion Items */}
            <div className="space-y-3.5">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq) => {
                  const isOpen = openFaqId === faq.id;
                  return (
                    <div
                      key={faq.id}
                      className="bg-surface rounded-2xl border border-border/80 overflow-hidden shadow-2xs transition-all hover:border-wine/30"
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(faq.id)}
                        className="w-full flex items-center justify-between p-5 text-left text-body font-semibold text-ink hover:text-wine cursor-pointer transition-colors"
                      >
                        <span className="pr-4">{faq.question}</span>
                        <span
                          className={`w-6 h-6 rounded-full bg-wine/5 text-wine flex items-center justify-center font-bold text-small shrink-0 transition-transform ${isOpen ? "rotate-45" : ""
                            }`}
                        >
                          +
                        </span>
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5 pt-0 text-body text-muted leading-relaxed border-t border-border/40 animate-in fade-in duration-200">
                          <p className="pt-3">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })
              ) : (
                <div className="text-center py-12 bg-surface rounded-2xl border border-border/80 p-8 space-y-2">
                  <p className="font-display font-semibold text-body text-ink">No FAQs found</p>
                  <p className="text-caption text-muted">Try searching with a different keyword or select another category from the tabs.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </Section>

      {/* STILL HAVE QUESTIONS HELP BOX */}
      <HelpBoxSection
        title="Still Have Questions?"
        description="Can’t find what you’re looking for? Our luxury jewellery consultants are available 24/7 to assist you."
        primaryAction={{ label: "Contact Concierge", href: "/contact" }}
        secondaryAction={{ label: "Call 1800-266-0123", href: "tel:18002660123" }}
      />
    </StaticPageLayout>
  );
}
