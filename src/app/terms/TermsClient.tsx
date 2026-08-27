"use client";

import { useState } from "react";
import Link from "next/link";

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
        <div className="space-y-3 text-xs sm:text-sm text-ink/80 leading-relaxed font-light">
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
        <div className="space-y-3 text-xs sm:text-sm text-ink/80 leading-relaxed font-light">
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
        <div className="space-y-3 text-xs sm:text-sm text-ink/80 leading-relaxed font-light">
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
        <div className="space-y-3 text-xs sm:text-sm text-ink/80 leading-relaxed font-light">
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
        <div className="space-y-3 text-xs sm:text-sm text-ink/80 leading-relaxed font-light">
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
        <div className="space-y-3 text-xs sm:text-sm text-ink/80 leading-relaxed font-light">
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
        <div className="space-y-3 text-xs sm:text-sm text-ink/80 leading-relaxed font-light">
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
        <div className="space-y-3 text-xs sm:text-sm text-ink/80 leading-relaxed font-light">
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
        <div className="space-y-3 text-xs sm:text-sm text-ink/80 leading-relaxed font-light">
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
        <div className="space-y-3 text-xs sm:text-sm text-ink/80 leading-relaxed font-light">
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
        <div className="space-y-3 text-xs sm:text-sm text-ink/80 leading-relaxed font-light">
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
        <div className="space-y-3 text-xs sm:text-sm text-ink/80 leading-relaxed font-light">
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
        <div className="space-y-3 text-xs sm:text-sm text-ink/80 leading-relaxed font-light">
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
        <div className="space-y-3 text-xs sm:text-sm text-ink/80 leading-relaxed font-light">
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
        <div className="space-y-3 text-xs sm:text-sm text-ink/80 leading-relaxed font-light">
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
        <div className="space-y-3 text-xs sm:text-sm text-ink/80 leading-relaxed font-light">
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
        <div className="space-y-3 text-xs sm:text-sm text-ink/80 leading-relaxed font-light">
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
        <div className="space-y-3 text-xs sm:text-sm text-ink/80 leading-relaxed font-light">
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
        <div className="space-y-3 text-xs sm:text-sm text-ink/80 leading-relaxed font-light">
          <p>
            All fine gold, silver, and diamond idols come with BIS Hallmarking and authentic gemological certificates verifying metal purity and diamond carat weight.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-surface text-ink py-10 sm:py-16">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6">
        {/* Title Heading */}
        <div className="mb-8 pb-4 border-b border-border">
          <h1 className="font-display text-2xl sm:text-3xl text-wine font-semibold uppercase tracking-wider">
            TERMS AND CONDITIONS
          </h1>
        </div>

        {/* Intro Paragraph matching screenshot */}
        <p className="text-xs sm:text-sm text-ink/80 leading-relaxed font-light mb-8">
          This website, www.luxe-jewels.com (&quot;Website&quot;), is owned and operated by Luxe Jewels Fine Jewellery Ltd (hereinafter referred as &quot;Luxe Jewels&quot; or &quot;Company&quot; or &quot;we&quot; or &quot;us&quot; or &quot;our&quot;) having its registered office at No 3, Luxe Tower, MG Road, Bengaluru, Karnataka 560001. Please read these Terms and Conditions carefully before using the Website. In accessing and using the services provided by our Website you signify your consent and agreement to be bound by the Terms and Conditions specified herein. Luxe Jewels reserves the right to change these terms and conditions from time to time without any obligation to inform you and it is your responsibility to check for the recent updates. Any updates to these Terms of Conditions shall take effect immediately upon the date of posting and you agree to be bound by the terms of these updates and amendments.
        </p>

        {/* Accordion Container */}
        <div className="space-y-3">
          {sections.map((section) => {
            const isOpen = openIds.includes(section.id);
            return (
              <div
                key={section.id}
                className={`rounded-lg border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-wine/60 bg-wine/5 shadow-xs"
                    : "border-border bg-surface hover:border-wine/40"
                }`}
              >
                {/* Accordion Trigger Header */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(section.id)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left cursor-pointer transition-colors"
                >
                  <span
                    className={`text-[18px] font-semibold tracking-wide ${
                      isOpen ? "text-wine" : "text-wine hover:text-wine-dark"
                    }`}
                  >
                    {section.title}
                  </span>
                  <span className="text-lg font-bold text-wine ml-3 shrink-0">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Accordion Content Body */}
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-wine/10 animate-in fade-in slide-in-from-top-1 duration-200">
                    {section.content}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
