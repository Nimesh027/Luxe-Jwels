"use client";

import { useState } from "react";
import { MapPinIcon, PhoneIcon, MailIcon } from "@/components/icons";
import PageHero from "@/components/common/PageHero";
import Button from "@/components/ui/Button";
import ContactSupportOptions from "./components/ContactSupportOptions";
import ContactFAQ from "./components/ContactFAQ";

const contactDetails = [
  {
    icon: PhoneIcon,
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
    note: "Mon – Sat, 10:00 AM – 7:00 PM",
  },
  {
    icon: MailIcon,
    label: "Email",
    value: "support@luxejewels.com",
    href: "mailto:support@luxejewels.com",
    note: "We reply within 24 hours",
  },
  {
    icon: MapPinIcon,
    label: "Address",
    value: "Ahmedabad, Gujarat, India",
    note: "Flagship atelier & studio",
  },
];

const fields = [
  { id: "name", label: "Name", type: "text", required: true, autoComplete: "name", placeholder: "Your full name" },
  { id: "email", label: "Email", type: "email", required: true, autoComplete: "email", placeholder: "you@example.com" },
  { id: "phone", label: "Phone", type: "tel", required: false, autoComplete: "tel", placeholder: "+91 98765 43210" },
];

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero
        title="Get in Touch"
        subtitle="We're here to help you"
        image="/images/revamp/designer-jewellery-banner.jpg"
        breadcrumbs={[{ label: "Contact" }]}
      />

      <section className="section-spacing-sm">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* Contact details */}
            <div className="lg:col-span-5 rounded-[var(--radius-card)] border border-border bg-white p-6 sm:p-8">
              <h2 className="font-display text-h4 font-semibold text-ink">Reach Out to Us</h2>
              <ul className="mt-6 space-y-6">
                {contactDetails.map(({ icon: Icon, label, value, href, note }) => (
                  <li key={label} className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-soft text-gold">
                      <Icon size={19} />
                    </span>
                    <div>
                      <p className="text-[13px] font-semibold uppercase tracking-wider text-muted">{label}</p>
                      {href ? (
                        <a href={href} className="text-[15.5px] font-medium text-ink hover:text-gold transition-colors break-all">
                          {value}
                        </a>
                      ) : (
                        <p className="text-[15.5px] font-medium text-ink">{value}</p>
                      )}
                      <p className="text-[13.5px] text-muted">{note}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Form */}
            <div className="lg:col-span-7 rounded-[var(--radius-card)] border border-border bg-white p-6 sm:p-8">
              <h2 className="font-display text-h4 font-semibold text-ink">Send Us a Message</h2>

              {submitted ? (
                <div role="status" className="mt-6 rounded-[var(--radius-card)] border border-border bg-cream py-10 px-6 text-center">
                  <MailIcon size={32} className="mx-auto text-gold" />
                  <p className="mt-3 font-display text-h5 font-semibold text-ink">Message sent successfully</p>
                  <p className="mt-1 text-[14.5px] text-muted max-w-sm mx-auto">
                    Thank you for reaching out. A jewellery specialist will contact you shortly.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  {fields.map((f) => (
                    <div key={f.id} className={f.id === "name" ? "sm:col-span-2" : undefined}>
                      <label htmlFor={`contact-${f.id}`} className="mb-1.5 block text-[14px] font-medium text-ink">
                        {f.label}
                        {f.required && <span className="text-gold"> *</span>}
                      </label>
                      <input
                        id={`contact-${f.id}`}
                        name={f.id}
                        type={f.type}
                        required={f.required}
                        autoComplete={f.autoComplete}
                        placeholder={f.placeholder}
                        className="field"
                      />
                    </div>
                  ))}
                  <div className="sm:col-span-2">
                    <label htmlFor="contact-message" className="mb-1.5 block text-[14px] font-medium text-ink">
                      Message<span className="text-gold"> *</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Tell us about the design, sizing or help you need…"
                      className="field resize-y"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <Button type="submit" size="lg" fullWidth>
                      Send Message
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Map */}
          <div className="mt-8 overflow-hidden rounded-[var(--radius-card)] border border-border bg-white">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border bg-cream px-5 py-3.5">
              <p className="flex items-center gap-2 font-display text-[18px] font-semibold text-ink">
                <MapPinIcon size={18} className="text-gold" />
                Flagship Atelier — Ahmedabad, Gujarat
              </p>
              <p className="text-[13.5px] text-muted">Mon – Sat: 10 AM – 7 PM</p>
            </div>
            <div className="relative aspect-[4/3] sm:aspect-[16/6] w-full bg-cream-dark">
              <iframe
                title="Map showing Luxe Jewels in Ahmedabad"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117496.48003194098!2d72.4883492716155!3d23.020243400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          </div>

          <div className="mt-14">
            <ContactSupportOptions />
          </div>
          <div className="mt-12">
            <ContactFAQ />
          </div>
        </div>
      </section>
    </>
  );
}
