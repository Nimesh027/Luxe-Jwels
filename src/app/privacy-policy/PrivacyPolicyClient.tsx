"use client";

import { useState } from "react";
import Breadcrumbs from "@/components/common/Breadcrumbs";

interface NavSection {
  id: string;
  label: string;
}

const navSections: NavSection[] = [
  { id: "introduction", label: "Introduction" },
  { id: "section-1", label: "1. Personal and Sensitive Personal Data" },
  { id: "section-2", label: "2. Categories of Personal Data" },
  { id: "section-3", label: "3. Sources of Personal Data" },
  { id: "section-4", label: "4. Purpose for Collecting Personal Data" },
  { id: "section-5", label: "5. Lawful Basis of Processing" },
  { id: "section-6", label: "6. Disclosure of your Personal Data and Categories of Third Parties" },
  { id: "section-7", label: "7. Cross Border Transfer" },
  { id: "section-8", label: "8. Data Storage & Retention" },
  { id: "section-9", label: "9. Data Subject Rights" },
  { id: "section-10", label: "10. How to Exercise your Rights" },
  { id: "section-11", label: "11. Minor's Personal Data" },
  { id: "section-12", label: "12. Data Security Measures" },
  { id: "section-13", label: "13. Automatic Data Collection" },
  { id: "section-14", label: "14. Contact Us" },
  { id: "section-15", label: "15. Changes to Privacy Notice" },
];

export default function PrivacyPolicyClient() {
  const [activeId, setActiveId] = useState<string>("introduction");

  const handleScrollToSection = (id: string) => {
    setActiveId(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-surface text-ink py-10 sm:py-16">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
        {/* Top Header Row with Title */}
        <div className="mb-10 pb-4 border-b border-border">
          <h1 className="font-display text-h2 text-wine font-semibold tracking-wide">
            Privacy Notice
          </h1>
        </div>

        {/* 2-Column Documentation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative items-start">
          {/* LEFT SIDEBAR NAVIGATION MENU (4 cols) */}
          <div className="lg:col-span-4 sticky top-[130px] z-20">
            <div className="bg-surface rounded-2xl border border-border/80 shadow-xs p-3.5 relative overflow-hidden">
              {/* Vertical Wine Line Accent on Sidebar Right Edge */}
              <div className="hidden lg:block absolute right-0 top-6 bottom-6 w-1 bg-wine rounded-l-md" />

              <nav className="space-y-0.5 pr-2 scrollbar-none" aria-label="Privacy Sections">
                {navSections.map((section) => {
                  const isActive = activeId === section.id;
                  return (
                    <button
                      key={section.id}
                      type="button"
                      onClick={() => handleScrollToSection(section.id)}
                      className={`w-full text-left px-3.5 py-2 rounded-xl text-caption sm:text-[13px] transition-all duration-200 cursor-pointer block ${isActive
                        ? "font-bold text-wine bg-[#FAF0F2] border-l-4 border-wine"
                        : "font-medium text-ink/75 hover:text-wine hover:bg-wine/5"
                        }`}
                    >
                      {section.label}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* RIGHT CONTENT PANEL (8 cols) */}
          <div className="lg:col-span-8 space-y-10 text-body text-ink/80 leading-relaxed font-light">
            {/* Introduction */}
            <section id="introduction" className="scroll-mt-28 space-y-3 pb-6 border-b border-border">
              <h2 className="font-display text-[18px] text-wine font-semibold">
                Introduction
              </h2>
              <p>
                Luxe Jewels Fine Jewellery Ltd (&quot;Luxe Jewels&quot;, &quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your personal data and respecting your privacy. This Privacy Notice describes how we collect, use, store, share, and protect your personal information when you visit our website at www.luxe-jewels.com, purchase our certified jewellery, or interact with our member services.
              </p>
            </section>

            {/* 1. Personal and Sensitive Personal Data */}
            <section id="section-1" className="scroll-mt-28 space-y-3 pb-6 border-b border-border">
              <h2 className="font-display text-h4 text-wine font-semibold">
                1. Personal and Sensitive Personal Data
              </h2>
              <p>
                Personal Data refers to any information relating to an identified or identifiable natural person. Sensitive Personal Data includes passwords, financial details (such as credit/debit card tokens or bank account information), official government identifiers (such as PAN card details for statutory compliance), and biometric or verification data provided during high-value luxury purchases.
              </p>
            </section>

            {/* 2. Categories of Personal Data */}
            <section id="section-2" className="scroll-mt-28 space-y-3 pb-6 border-b border-border">
              <h2 className="font-display text-h4 text-wine font-semibold">
                2. Categories of Personal Data
              </h2>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong className="font-semibold text-ink">Contact Details:</strong> Full name, billing address, delivery address, email address, and phone number.</li>
                <li><strong className="font-semibold text-ink">Account Credentials:</strong> Username, encrypted passwords, and security verification logs.</li>
                <li><strong className="font-semibold text-ink">Transaction History:</strong> Orders, wishlist items, invoice copies, and certificate receipts.</li>
                <li><strong className="font-semibold text-ink">Technical Identifiers:</strong> IP address, device fingerprints, browser parameters, and cookie preferences.</li>
              </ul>
            </section>

            {/* 3. Sources of Personal Data */}
            <section id="section-3" className="scroll-mt-28 space-y-3 pb-6 border-b border-border">
              <h2 className="font-display text-h4 text-wine font-semibold">
                3. Sources of Personal Data
              </h2>
              <p>
                We collect personal data directly from you when you register an account, subscribe to our VIP newsletter, order fine jewellery, submit a review, or communicate with our customer concierge. We also receive data automatically through website analytics cookies and integrated payment partners.
              </p>
            </section>

            {/* 4. Purpose for Collecting Personal Data */}
            <section id="section-4" className="scroll-mt-28 space-y-3 pb-6 border-b border-border">
              <h2 className="font-display text-h4 text-wine font-semibold">
                4. Purpose for Collecting Personal Data
              </h2>
              <p>
                We process your data to fulfill orders, arrange fully insured doorstep logistics, issue hallmarking and gemological certificates, process payment transactions, prevent fraudulent activities, provide personalized jewellery recommendations, and comply with legal tax regulations.
              </p>
            </section>

            {/* 5. Lawful Basis of Processing */}
            <section id="section-5" className="scroll-mt-28 space-y-3 pb-6 border-b border-border">
              <h2 className="font-display text-h4 text-wine font-semibold">
                5. Lawful Basis of Processing
              </h2>
              <p>
                Our lawful bases include: (i) Contractual Necessity to process orders and deliver products; (ii) Legal Obligation to comply with statutory tax rules (such as PAN verification); (iii) Consent provided by you for VIP promotional communications; and (iv) Legitimate Business Interests to ensure web security and prevent fraud.
              </p>
            </section>

            {/* 6. Disclosure of your Personal Data */}
            <section id="section-6" className="scroll-mt-28 space-y-3 pb-6 border-b border-border">
              <h2 className="font-display text-h4 text-wine font-semibold">
                6. Disclosure of your Personal Data and Categories of Third Parties
              </h2>
              <p>
                We may share your Data with trusted third parties under strict confidentiality agreements:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Insured logistics and express courier partners for order fulfillment.</li>
                <li>PCI-DSS compliant payment gateways (Visa, Mastercard, UPI, Apple Pay).</li>
                <li>Authorized gemological certification agencies (BIS, IGI, SGL).</li>
                <li>Law enforcement or regulatory authorities when required by applicable law.</li>
              </ul>
            </section>

            {/* 7. Cross Border Transfer (Matching Screenshots Exactly!) */}
            <section id="section-7" className="scroll-mt-28 space-y-4 pb-6 border-b border-border">
              <h2 className="font-display text-h4 text-wine font-semibold">
                7. Cross Border Transfer
              </h2>
              <p>
                We may transfer your Personal Data to countries outside of your country of residence, including to jurisdictions that may not provide the same level of Data protection as your home country. These transfers are necessary for the purposes described in this Privacy Notice, including to support our operations, process transactions, and deliver services to you.
              </p>

              <div className="space-y-3 pt-2">
                <h3 className="text-body font-semibold text-ink">
                  Data Transfer Mechanisms:
                </h3>

                <div className="pl-4 border-l-2 border-gold/60 space-y-3">
                  <div>
                    <h4 className="text-body font-semibold text-ink">
                      Standard Contractual Clauses (SCCs):
                    </h4>
                    <p className="mt-0.5">
                      Where required by applicable law, we implement Standard Contractual Clauses approved by relevant regulatory authorities to ensure an adequate level of protection for your Personal Data.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-body font-semibold text-ink">
                      Adequacy Decisions:
                    </h4>
                    <p className="mt-0.5">
                      In cases where the destination country is recognized by regulatory authorities as providing adequate Data protection, we rely on such adequacy decisions.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-body font-semibold text-ink">
                      Binding Corporate Rules (BCRs):
                    </h4>
                    <p className="mt-0.5">
                      For internal transfers within our corporate group, we may rely on Binding Corporate Rules to ensure Data protection compliance.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 8. Data Storage & Retention */}
            <section id="section-8" className="scroll-mt-28 space-y-3 pb-6 border-b border-border">
              <h2 className="font-display text-h4 text-wine font-semibold">
                8. Data Storage &amp; Retention
              </h2>
              <p>
                Your Personal Data is stored securely on encrypted cloud servers. We retain your information only as long as necessary to fulfill the purposes outlined in this Privacy Notice, or to comply with statutory accounting and tax retention periods mandated by Indian law.
              </p>
            </section>

            {/* 9. Data Subject Rights */}
            <section id="section-9" className="scroll-mt-28 space-y-3 pb-6 border-b border-border">
              <h2 className="font-display text-h4 text-wine font-semibold">
                9. Data Subject Rights
              </h2>
              <p>
                Depending on your location, you have rights to access, correct, update, or request erasure of your Personal Data. You may also object to processing, request data portability, or withdraw consent at any time without affecting prior lawful processing.
              </p>
            </section>

            {/* 10. How to Exercise your Rights */}
            <section id="section-10" className="scroll-mt-28 space-y-3 pb-6 border-b border-border">
              <h2 className="font-display text-h4 text-wine font-semibold">
                10. How to Exercise your Rights
              </h2>
              <p>
                To exercise any of your data protection rights, please contact our Data Protection Officer at privacy@luxe-jewels.com. We will respond to all valid requests within 30 days of verification.
              </p>
            </section>

            {/* 11. Minor's Personal Data */}
            <section id="section-11" className="scroll-mt-28 space-y-3 pb-6 border-b border-border">
              <h2 className="font-display text-h4 text-wine font-semibold">
                11. Minor&apos;s Personal Data
              </h2>
              <p>
                Our Website is not directed to individuals under the age of 18. We do not knowingly collect Personal Data from minors. If you believe a minor has provided us with personal information, please notify us for prompt deletion.
              </p>
            </section>

            {/* 12. Data Security Measures */}
            <section id="section-12" className="scroll-mt-28 space-y-3 pb-6 border-b border-border">
              <h2 className="font-display text-h4 text-wine font-semibold">
                12. Data Security Measures
              </h2>
              <p>
                We employ industry-standard technical and organizational security measures, including 256-bit SSL encryption, firewalls, tokenization, and strict access controls to safeguard your personal information against unauthorized access, alteration, or disclosure.
              </p>
            </section>

            {/* 13. Automatic Data Collection */}
            <section id="section-13" className="scroll-mt-28 space-y-3 pb-6 border-b border-border">
              <h2 className="font-display text-h4 text-wine font-semibold">
                13. Automatic Data Collection
              </h2>
              <p>
                When you browse our Website, we automatically record server log information, IP addresses, device parameters, and usage patterns using cookies to optimize site performance and deliver a tailored shopping experience.
              </p>
            </section>

            {/* 14. Contact Us */}
            <section id="section-14" className="scroll-mt-28 space-y-3 pb-6 border-b border-border">
              <h2 className="font-display text-h4 text-wine font-semibold">
                14. Contact Us
              </h2>
              <p>
                If you have questions or concerns regarding this Privacy Notice or our data handling practices, please write to us at:
              </p>
              <div className="p-4 bg-white/50 border border-border rounded-lg text-caption space-y-1">
                <p className="font-semibold text-wine">Luxe Jewels Privacy Office</p>
                <p>Luxe Tower, MG Road, Bengaluru, Karnataka 560001, India</p>
                <p>Email: privacy@luxe-jewels.com | Phone: +91 (80) 4000-8888</p>
              </div>
            </section>

            {/* 15. Changes to Privacy Notice */}
            <section id="section-15" className="scroll-mt-28 space-y-3">
              <h2 className="font-display text-h4 text-wine font-semibold">
                15. Changes to Privacy Notice
              </h2>
              <p>
                We reserve the right to modify this Privacy Notice at any time. Any changes will take effect immediately upon posting on this page. We encourage you to review this notice periodically to stay informed about how we protect your information.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
