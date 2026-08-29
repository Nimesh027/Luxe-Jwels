"use client";

import { useState } from "react";
import Link from "next/link";
import StaticPageLayout from "@/components/layout/StaticPageLayout";
import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

export default function TermsClient() {
  // Default open Section 1 ("eligibility") matching user screenshot
  const [openIds, setOpenIds] = useState<string[]>(["eligibility"]);

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const sections: AccordionItem[] = [
    {
      id: "eligibility",
      title: "Eligibility Criteria",
      content: (
        <div className="space-y-3 text-body text-ink/80 leading-relaxed font-light">
          <p>
            If you are below 18 years of age, you are prohibited to use/purchase/contract from or with this Website. Persons who are incompetent to contract within the meaning of the Indian Contract Act, 1872 are not eligible to use or transact through this Website.
          </p>
          <p>
            Those who choose to access this Website from outside India are responsible for compliance with local laws to the extent local laws are applicable.
          </p>
        </div>
      ),
    },
    {
      id: "pricing-payment",
      title: "Pricing And Payment",
      content: (
        <div className="space-y-3 text-body text-ink/80 leading-relaxed font-light">
          <p>
            Prices for products are described on our Website and are incorporated into these Terms by reference. All prices are in Indian Rupees (₹) inclusive of applicable taxes including GST.
          </p>
          <p>
            Luxe Jewels accepts payments via Credit Cards, Debit Cards, Net Banking, UPI, Certified Luxury EMI options, and Apple Pay. Transactions are processed through secure 256-bit encrypted payment gateways.
          </p>
        </div>
      ),
    },
    {
      id: "pan-card",
      title: "Pan Card Terms and Conditions",
      content: (
        <div className="space-y-3 text-body text-ink/80 leading-relaxed font-light">
          <p>
            As per the Statutory Regulations of the Government of India, submission of a valid Permanent Account Number (PAN) is mandatory for purchases exceeding ₹2,000,000 (Two Lakh Rupees) per transaction.
          </p>
          <p>
            The name on the PAN card must match the billing name provided during checkout to ensure smooth customs clearance and invoicing.
          </p>
        </div>
      ),
    },
    {
      id: "shipping-destinations",
      title: "Shipping Destinations",
      content: (
        <div className="space-y-3 text-body text-ink/80 leading-relaxed font-light">
          <p>
            We ship fine jewellery to over 18,000 pincodes across India and select international destinations via insured express logistics partners including Blue Dart and Sequel Logistics.
          </p>
          <p>
            All shipments are 100% insured against loss or damage in transit until safely delivered to your doorstep.
          </p>
        </div>
      ),
    },
    {
      id: "delivery-schedule",
      title: "Delivery Schedule",
      content: (
        <div className="space-y-3 text-body text-ink/80 leading-relaxed font-light">
          <p>
            Standard in-stock jewellery items are dispatched within 24–48 hours of order confirmation. Custom engraved or bespoke orders take 5–7 business days.
          </p>
          <p>
            Estimated transit time is 2–4 business days for metro cities and 3–6 business days for rest of India. Live real-time tracking is provided via SMS and email.
          </p>
        </div>
      ),
    },
    {
      id: "shipping-charges",
      title: "Shipping and Handling Charges",
      content: (
        <div className="space-y-3 text-body text-ink/80 leading-relaxed font-light">
          <p>
            Luxe Jewels offers complimentary fully insured express shipping on all orders above ₹10,000.
          </p>
          <p>
            For orders below ₹10,000, a nominal shipping &amp; insurance fee of ₹250 applies at checkout.
          </p>
        </div>
      ),
    },
    {
      id: "track-order",
      title: "Track Order",
      content: (
        <div className="space-y-3 text-body text-ink/80 leading-relaxed font-light">
          <p>
            Once your jewellery package is dispatched, an AWB tracking link will be sent to your registered mobile number and email.
          </p>
          <p>
            You can also track your shipment anytime by visiting the{" "}
            <Link href="/track-order" className="text-wine underline font-medium">
              Track Order
            </Link>{" "}
            page on our website.
          </p>
        </div>
      ),
    },
    {
      id: "your-obligations",
      title: "Your Obligations",
      content: (
        <div className="space-y-3 text-body text-ink/80 leading-relaxed font-light">
          <p>
            You agree to provide true, accurate, current, and complete information about yourself during registration and order placement.
          </p>
          <p>
            You are responsible for maintaining the confidentiality of your account credentials and restricting unauthorized access to your computer or mobile device.
          </p>
        </div>
      ),
    },
    {
      id: "website-content",
      title: "Website Content",
      content: (
        <div className="space-y-3 text-body text-ink/80 leading-relaxed font-light">
          <p>
            All content, including product photographs, video renders, logos, graphics, and descriptions featured on www.luxe-jewels.com are the exclusive intellectual property of Luxe Jewels.
          </p>
          <p>
            Reproduction, modification, distribution, or republication of any content without prior written permission is strictly prohibited.
          </p>
        </div>
      ),
    },
    {
      id: "external-links",
      title: "External Material and Links",
      content: (
        <div className="space-y-3 text-body text-ink/80 leading-relaxed font-light">
          <p>
            Our Website may contain links to third-party payment gateways, bank portals, or logistics tracking servers. These links are provided solely for your convenience.
          </p>
          <p>
            Luxe Jewels does not endorse or accept responsibility for the privacy practices or content of third-party external portals.
          </p>
        </div>
      ),
    },
    {
      id: "liability",
      title: "Liability",
      content: (
        <div className="space-y-3 text-body text-ink/80 leading-relaxed font-light">
          <p>
            Luxe Jewels shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our Website or services.
          </p>
          <p>
            In any event, our maximum aggregate liability to you for all claims shall not exceed the amount paid by you for the product purchased.
          </p>
        </div>
      ),
    },
    {
      id: "encircle-points",
      title: "How do I redeem Encircle Points?",
      content: (
        <div className="space-y-3 text-body text-ink/80 leading-relaxed font-light">
          <p>
            Luxe Rewards and partner loyalty points can be redeemed seamlessly at the payment step during checkout.
          </p>
          <p>
            Enter your registered mobile number at payment to view your active reward points balance and apply them towards your jewellery order.
          </p>
        </div>
      ),
    },
    {
      id: "reviews-feedback",
      title: "Reviews, Feedback, Submissions",
      content: (
        <div className="space-y-3 text-body text-ink/80 leading-relaxed font-light">
          <p>
            All reviews, ratings, comments, feedback, or suggestions submitted on our Website shall remain the exclusive property of Luxe Jewels.
          </p>
          <p>
            We reserve the right to edit, publish, or remove reviews that violate community guidelines or contain objectionable language.
          </p>
        </div>
      ),
    },
    {
      id: "force-majeure",
      title: "Force Majeure",
      content: (
        <div className="space-y-3 text-body text-ink/80 leading-relaxed font-light">
          <p>
            Luxe Jewels shall be excused from performance of obligations if prevented by events beyond reasonable control, including natural disasters, acts of God, civil unrest, or government lockdown orders.
          </p>
        </div>
      ),
    },
    {
      id: "termination",
      title: "Termination",
      content: (
        <div className="space-y-3 text-body text-ink/80 leading-relaxed font-light">
          <p>
            We reserve the right to suspend or terminate your account or access to the Website without notice if we detect fraudulent activity, policy violations, or breach of these Terms.
          </p>
        </div>
      ),
    },
    {
      id: "governing-law",
      title: "Governing Law And Jurisdiction",
      content: (
        <div className="space-y-3 text-body text-ink/80 leading-relaxed font-light">
          <p>
            These Terms and Conditions shall be governed by and construed in accordance with the laws of India.
          </p>
          <p>
            Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the competent courts in Bengaluru, Karnataka.
          </p>
        </div>
      ),
    },
    {
      id: "modification-terms",
      title: "Modification Of Terms And Conditions",
      content: (
        <div className="space-y-3 text-body text-ink/80 leading-relaxed font-light">
          <p>
            Luxe Jewels reserves the right to modify these Terms and Conditions at any time without prior individual notification.
          </p>
          <p>
            Any updates will be posted immediately on this page. Your continued use of the Website following any changes constitutes your acceptance of the updated terms.
          </p>
        </div>
      ),
    },
    {
      id: "tokenization-terms",
      title: "Tokenization Terms And Conditions",
      content: (
        <div className="space-y-3 text-body text-ink/80 leading-relaxed font-light">
          <p>
            In accordance with RBI Card-on-File Tokenization (CoFT) guidelines, saved card details are converted into secure encrypted tokens. No actual card credentials are stored on our servers.
          </p>
        </div>
      ),
    },
    {
      id: "luxe-authenticity",
      title: "Luxe Silver & Gold Certified Idols Terms",
      content: (
        <div className="space-y-3 text-body text-ink/80 leading-relaxed font-light">
          <p>
            All fine gold, silver, and diamond idols come with BIS Hallmarking and authentic gemological certificates verifying metal purity and diamond carat weight.
          </p>
        </div>
      ),
    },
  ];

  return (
    <StaticPageLayout
      pageTitle="Terms & Conditions"
      breadcrumbLabel="Terms & Conditions"
      description="Please read these Terms and Conditions carefully before using the Luxe Jewels Website."
    >
      <Section className="bg-surface/50 py-12 sm:py-20 relative overflow-hidden">
        {/* Subtle decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-wine/5 to-transparent pointer-events-none" />

        {/* Header Note */}
        <SectionTitle
          title="Terms & Conditions"
          titleClassName="!text-h3 text-wine font-semibold uppercase tracking-wider"
          align="center"
          className="mb-8 sm:mb-12"
        />

        {/* Accordion Container */}
        <div className="space-y-4">
          {sections.map((section) => {
            const isOpen = openIds.includes(section.id);
            return (
              <div
                key={section.id}
                className="bg-white rounded-2xl border border-border/80 overflow-hidden shadow-sm transition-all hover:border-wine/30 hover:shadow-md"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(section.id)}
                  className="w-full flex items-center justify-between p-5 text-left font-display text-lg font-semibold text-ink hover:text-wine cursor-pointer transition-colors"
                >
                  <span className="pr-4">{section.title}</span>
                  <span
                    className={`w-7 h-7 rounded-full bg-wine/5 text-wine flex items-center justify-center font-bold shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45 bg-wine text-white" : ""
                      }`}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-0 text-body text-ink leading-relaxed font-light border-t border-border/40 animate-in fade-in duration-300">
                    <div className="pt-4 space-y-3">
                      {section.content}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Section>
    </StaticPageLayout>
  );
}
