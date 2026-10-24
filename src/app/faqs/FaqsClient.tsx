"use client";

import { useState } from "react";
import Section from "@/components/common/Section";
import StaticPageLayout from "@/components/layout/StaticPageLayout";
import HelpBoxSection from "@/components/common/HelpBoxSection";
import Button from "@/components/ui/Button";
import { faqCategoriesData as categories, faqsData as faqs } from "@/data";

export default function FaqsClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("orders");
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaqId, setOpenFaqId] = useState<string | null>("faq-1");

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
            <Button
              key={cat.id}
              variant="unstyled"
              onClick={() => {
                setSelectedCategory(cat.id);
                setSearchQuery("");
              }}
              className={`px-4 py-2.5 rounded-full text-caption font-semibold whitespace-nowrap transition-all cursor-pointer ${ selectedCategory === cat.id && !searchQuery ? "bg-[#80222F] text-white shadow-xs" : "bg-surface border border-border/80 text-ink/80 hover:border-wine/40" }`}
            >
              {cat.label}
            </Button>
          ))}
        </div>

        {/* MAIN RESPONSIVE SIDEBAR TAB LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          {/* LEFT COLUMN: VERTICAL SIDEBAR TABS */}
          <div className="hidden lg:block lg:col-span-4 bg-surface rounded-2xl border border-border/80 overflow-hidden divide-y divide-border/60 shadow-xs sticky top-24">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id && !searchQuery;
              return (
                <Button
                  key={cat.id}
                  variant="unstyled"
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setSearchQuery("");
                  }}
                  className={`w-full p-4.5 text-left font-display text-small font-semibold flex items-center justify-between transition-all cursor-pointer ${ isActive ? "bg-[#FAF0F2] text-[#80222F] border-l-4 border-[#80222F]" : "bg-surface text-ink/80 hover:bg-wine/5 hover:text-wine" }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-caption font-semibold px-2 py-0.5 rounded-full ${ isActive ? "bg-wine/15 text-wine" : "bg-neutral-100 text-muted" }`}
                  >
                    {cat.count}
                  </span>
                </Button>
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
                      <Button
                        variant="unstyled"
                        onClick={() => toggleFaq(faq.id)}
                        className="w-full flex items-center justify-between p-5 text-left text-body font-semibold text-ink hover:text-wine cursor-pointer transition-colors"
                      >
                        <span className="pr-4">{faq.question}</span>
                        <span
                          className={`w-6 h-6 rounded-full bg-wine/5 text-wine flex items-center justify-center font-bold text-small shrink-0 transition-transform ${ isOpen ? "rotate-45" : "" }`}
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
                })
              ) : (
                <div className="text-center py-12 bg-surface rounded-2xl border border-border/80 p-8 space-y-2">
                  <p className="font-display font-semibold text-body text-ink">No FAQs found</p>
                  <p className="text-caption text-muted">
                    Try searching with a different keyword or select another category from the tabs.
                  </p>
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
