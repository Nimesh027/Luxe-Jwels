"use client";

import { useState } from "react";
import StaticPageLayout from "@/components/layout/StaticPageLayout";
import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";

// --- COMMON DATA STRUCTURE ---
const privacyPolicyData = [
  {
    id: "introduction",
    title: "Introduction",
    content: (
      <p>
        Luxe Jewels Fine Jewellery Ltd (&quot;Luxe Jewels&quot;, &quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your personal data and respecting your privacy. This Privacy Notice describes how we collect, use, store, share, and protect your personal information when you visit our website at www.luxe-jewels.com, purchase our certified jewellery, or interact with our member services.
      </p>
    ),
  },
  {
    id: "section-1",
    title: "1. Personal and Sensitive Personal Data",
    content: (
      <p>
        Personal Data refers to any information relating to an identified or identifiable natural person. Sensitive Personal Data includes passwords, financial details (such as credit/debit card tokens or bank account information), official government identifiers (such as PAN card details for statutory compliance), and biometric or verification data provided during high-value luxury purchases.
      </p>
    ),
  },
  {
    id: "section-2",
    title: "2. Categories of Personal Data",
    content: (
      <ul className="list-disc pl-5 space-y-1.5">
        <li><strong className="font-semibold text-ink">Contact Details:</strong> Full name, billing address, delivery address, email address, and phone number.</li>
        <li><strong className="font-semibold text-ink">Account Credentials:</strong> Username, encrypted passwords, and security verification logs.</li>
        <li><strong className="font-semibold text-ink">Transaction History:</strong> Orders, wishlist items, invoice copies, and certificate receipts.</li>
        <li><strong className="font-semibold text-ink">Technical Identifiers:</strong> IP address, device fingerprints, browser parameters, and cookie preferences.</li>
      </ul>
    ),
  },
  {
    id: "section-3",
    title: "3. Sources of Personal Data",
    content: (
      <p>
        We collect personal data directly from you when you register an account, subscribe to our VIP newsletter, order fine jewellery, submit a review, or communicate with our customer concierge. We also receive data automatically through website analytics cookies and integrated payment partners.
      </p>
    ),
  },
  {
    id: "section-4",
    title: "4. Purpose for Collecting Personal Data",
    content: (
      <p>
        We process your data to fulfill orders, arrange fully insured doorstep logistics, issue hallmarking and gemological certificates, process payment transactions, prevent fraudulent activities, provide personalized jewellery recommendations, and comply with legal tax regulations.
      </p>
    ),
  },
  {
    id: "section-5",
    title: "5. Lawful Basis of Processing",
    content: (
      <p>
        Our lawful bases include: (i) Contractual Necessity to process orders and deliver products; (ii) Legal Obligation to comply with statutory tax rules (such as PAN verification); (iii) Consent provided by you for VIP promotional communications; and (iv) Legitimate Business Interests to ensure web security and prevent fraud.
      </p>
    ),
  },
  {
    id: "section-6",
    title: "6. Disclosure of your Personal Data and Categories of Third Parties",
    content: (
      <>
        <p className="mb-3">
          We may share your Data with trusted third parties under strict confidentiality agreements:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Insured logistics and express courier partners for order fulfillment.</li>
          <li>PCI-DSS compliant payment gateways (Visa, Mastercard, UPI, Apple Pay).</li>
          <li>Authorized gemological certification agencies (BIS, IGI, SGL).</li>
          <li>Law enforcement or regulatory authorities when required by applicable law.</li>
        </ul>
      </>
    ),
  },
  {
    id: "section-7",
    title: "7. Cross Border Transfer",
    content: (
      <>
        <p>
          We may transfer your Personal Data to countries outside of your country of residence, including to jurisdictions that may not provide the same level of Data protection as your home country. These transfers are necessary for the purposes described in this Privacy Notice, including to support our operations, process transactions, and deliver services to you.
        </p>
        <div className="space-y-3 pt-6">
          <h3 className="text-body font-semibold text-ink">
            Data Transfer Mechanisms:
          </h3>
          <div className="pl-4 border-l-2 border-gold/60 space-y-3">
            <div>
              <h4 className="text-body font-semibold text-ink">Standard Contractual Clauses (SCCs):</h4>
              <p className="mt-0.5">Where required by applicable law, we implement Standard Contractual Clauses approved by relevant regulatory authorities to ensure an adequate level of protection for your Personal Data.</p>
            </div>
            <div>
              <h4 className="text-body font-semibold text-ink">Adequacy Decisions:</h4>
              <p className="mt-0.5">In cases where the destination country is recognized by regulatory authorities as providing adequate Data protection, we rely on such adequacy decisions.</p>
            </div>
            <div>
              <h4 className="text-body font-semibold text-ink">Binding Corporate Rules (BCRs):</h4>
              <p className="mt-0.5">For internal transfers within our corporate group, we may rely on Binding Corporate Rules to ensure Data protection compliance.</p>
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "section-8",
    title: "8. Data Storage & Retention",
    content: (
      <p>
        Your Personal Data is stored securely on encrypted cloud servers. We retain your information only as long as necessary to fulfill the purposes outlined in this Privacy Notice, or to comply with statutory accounting and tax retention periods mandated by Indian law.
      </p>
    ),
  },
  {
    id: "section-9",
    title: "9. Data Subject Rights",
    content: (
      <p>
        Depending on your location, you have rights to access, correct, update, or request erasure of your Personal Data. You may also object to processing, request data portability, or withdraw consent at any time without affecting prior lawful processing.
      </p>
    ),
  },
  {
    id: "section-10",
    title: "10. How to Exercise your Rights",
    content: (
      <p>
        To exercise any of your data protection rights, please contact our Data Protection Officer at privacy@luxe-jewels.com. We will respond to all valid requests within 30 days of verification.
      </p>
    ),
  },
  {
    id: "section-11",
    title: "11. Minor's Personal Data",
    content: (
      <p>
        Our Website is not directed to individuals under the age of 18. We do not knowingly collect Personal Data from minors. If you believe a minor has provided us with personal information, please notify us for prompt deletion.
      </p>
    ),
  },
  {
    id: "section-12",
    title: "12. Data Security Measures",
    content: (
      <p>
        We employ industry-standard technical and organizational security measures, including 256-bit SSL encryption, firewalls, tokenization, and strict access controls to safeguard your personal information against unauthorized access, alteration, or disclosure.
      </p>
    ),
  },
  {
    id: "section-13",
    title: "13. Automatic Data Collection",
    content: (
      <p>
        When you browse our Website, we automatically record server log information, IP addresses, device parameters, and usage patterns using cookies to optimize site performance and deliver a tailored shopping experience.
      </p>
    ),
  },
  {
    id: "section-14",
    title: "14. Contact Us",
    content: (
      <>
        <p className="mb-3">
          If you have questions or concerns regarding this Privacy Notice or our data handling practices, please write to us at:
        </p>
        <div className="p-4 bg-white/50 border border-border rounded-lg text-caption space-y-1">
          <p className="font-semibold text-wine">Luxe Jewels Privacy Office</p>
          <p>Luxe Tower, MG Road, Bengaluru, Karnataka 560001, India</p>
          <p>Email: privacy@luxe-jewels.com | Phone: +91 (80) 4000-8888</p>
        </div>
      </>
    ),
  },
  {
    id: "section-15",
    title: "15. Changes to Privacy Notice",
    content: (
      <p>
        We reserve the right to modify this Privacy Notice at any time. Any changes will take effect immediately upon posting on this page. We encourage you to review this notice periodically to stay informed about how we protect your information.
      </p>
    ),
  }
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
    <StaticPageLayout
      pageTitle="Privacy Notice"
      breadcrumbLabel="Privacy Policy"
      description="Luxe Jewels is committed to protecting your personal data and respecting your privacy."
    >
      <Section className="bg-surface/50 relative overflow-hidden">
        {/* Subtle decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-wine/5 to-transparent pointer-events-none" />

        {/* Header Note */}
        <SectionTitle
          title="Privacy Policy"
          titleClassName="!text-h3 text-wine font-semibold"
          description="We are committed to safeguarding your privacy. Read our detailed policies below to understand how we protect your information."
          descriptionClassName="text-ink/70 font-light"
          align="center"
          className="mb-12 sm:mb-16"
        />

        <div className="space-y-8">
          {/* CONTENT PANEL (Mapped from Data Structure) */}
          {privacyPolicyData.map((section, idx) => {
            return (
              <div
                key={`content-${section.id}`}
                id={section.id}
                className="scroll-mt-32 group bg-white p-8 sm:p-10 rounded-3xl shadow-xs border border-border/40 hover:shadow-md hover:border-gold/30 transition-all duration-500"
              >
                <h2 className="font-display text-xl sm:text-2xl text-wine font-semibold mb-6 flex items-center gap-4">
                  <span className="w-10 h-[1px] bg-gold/60 group-hover:bg-gold group-hover:w-14 transition-all duration-500"></span>
                  {section.title}
                </h2>
                <div className="text-body text-ink/80 leading-relaxed font-light space-y-4">
                  {section.content}
                </div>
              </div>
            );
          })}
        </div>
      </Section>
    </StaticPageLayout>
  );
}
