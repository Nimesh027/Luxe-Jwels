"use client";

import { useState } from "react";
import ContactSupportOptions from "./components/ContactSupportOptions";
import ContactFAQ from "./components/ContactFAQ";

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="w-full bg-[#FAF7F2] min-h-screen">
      {/* 1. Header Banner */}
      <div className="relative overflow-hidden bg-[#181512] py-14 sm:py-20 border-b border-[#332E27]">
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl">
          <h1 className="font-display text-[32px] sm:text-[44px] md:text-[50px] text-white font-normal leading-tight mb-2">
            Get in Touch
          </h1>
          <p className="font-body text-[14px] sm:text-[16px] text-[#DDD6CD] font-light">
            We&apos;re here to help you
          </p>
        </div>
      </div>

      {/* 2. Contact Info & Form Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Contact Details (5 cols) */}
          <div className="md:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-[#EAE4DC] shadow-xs space-y-6">
            <h2 className="font-display text-[20px] sm:text-[22px] font-semibold text-[#141414] pb-3 border-b border-[#EAE4DC]">
              Reach Out to Us
            </h2>

            <div className="flex items-start gap-3.5">
              <span className="text-[#B38E5D] text-xl mt-0.5">📞</span>
              <div>
                <p className="font-display text-[15px] font-semibold text-[#141414]">Phone</p>
                <p className="font-body text-[13.5px] text-[#554E46]">+91 98765 43210</p>
                <p className="text-[11.5px] text-[#8C827A] mt-0.5">Mon - Sat: 10:00 AM - 7:00 PM</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <span className="text-[#B38E5D] text-xl mt-0.5">✉️</span>
              <div>
                <p className="font-display text-[15px] font-semibold text-[#141414]">Email</p>
                <p className="font-body text-[13.5px] text-[#554E46]">support@luxejewels.com</p>
                <p className="text-[11.5px] text-[#8C827A] mt-0.5">We reply within 24 hours</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <span className="text-[#B38E5D] text-xl mt-0.5">📍</span>
              <div>
                <p className="font-display text-[15px] font-semibold text-[#141414]">Address</p>
                <p className="font-body text-[13.5px] text-[#554E46]">Ahmedabad, Gujarat, India</p>
                <p className="text-[11.5px] text-[#8C827A] mt-0.5">Flagship Atelier & Studio</p>
              </div>
            </div>
          </div>

          {/* Right Column: Send Us a Message Form (7 cols) */}
          <div className="md:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-[#EAE4DC] shadow-xs">
            <h2 className="font-display text-[20px] sm:text-[22px] font-semibold text-[#141414] mb-5">
              Send Us a Message
            </h2>

            {submitted ? (
              <div className="text-center py-10 bg-[#FAF7F2] rounded-xl border border-[#EAE4DC]">
                <span className="text-[36px] block mb-2">✉️</span>
                <p className="font-display text-[18px] font-semibold text-[#141414]">
                  Message Sent Successfully!
                </p>
                <p className="text-[13px] text-[#78716A] mt-1 max-w-sm mx-auto">
                  Thank you for reaching out. Our jewelry specialist will contact you shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-4 text-[13.5px]"
              >
                <div>
                  <label className="block font-medium text-[#141414] mb-1">Name*</label>
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#EAE4DC] focus:border-[#B38E5D] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-medium text-[#141414] mb-1">Email*</label>
                  <input
                    type="email"
                    required
                    placeholder="your.email@domain.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#EAE4DC] focus:border-[#B38E5D] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-medium text-[#141414] mb-1">Phone</label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#EAE4DC] focus:border-[#B38E5D] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-medium text-[#141414] mb-1">Message*</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about the jewellery design, custom sizing, or assistance you require..."
                    className="w-full px-4 py-2.5 rounded-xl border border-[#EAE4DC] focus:border-[#B38E5D] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#B38E5D] hover:bg-[#9C7748] text-white font-medium shadow-md transition-colors cursor-pointer text-[14px]"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 3. Interactive Map Preview */}
        <div className="mt-12 rounded-2xl overflow-hidden border border-[#EAE4DC] shadow-xs bg-white">
          <div className="p-4 bg-[#FAF7F2] border-b border-[#EAE4DC] flex items-center justify-between">
            <span className="font-display text-[15px] font-semibold text-[#141414]">
              📍 Flagship Atelier &mdash; Ahmedabad, Gujarat
            </span>
            <span className="text-[12px] text-[#78716A]">Mon - Sat: 10am - 7pm</span>
          </div>
          <div className="relative aspect-[16/6] min-h-[220px] w-full bg-[#E5DFD5] flex items-center justify-center">
            <iframe
              title="Luxe Jewels Ahmedabad Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117496.48003194098!2d72.4883492716155!3d23.020243400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>

        {/* 4. Support Options Strip */}
        <div className="mt-16">
          <ContactSupportOptions />
        </div>

        {/* 5. Frequently Asked Questions */}
        <div className="mt-12">
          <ContactFAQ />
        </div>
      </div>
    </div>
  );
}
