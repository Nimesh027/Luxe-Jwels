"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="w-full bg-[#141414] text-white py-10 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12">
          {/* Left Side: Diamond Icon & Authenticity Callout */}
          <div className="flex items-center gap-4 text-center lg:text-left">
            <div className="w-12 h-12 rounded-full border border-[#B38E5D]/40 bg-[#1F1F1F] flex items-center justify-center text-[#B38E5D] shrink-0">
              <svg className="w-6 h-6 text-[#B38E5D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M6 3h12l4 6-10 13L2 9z" />
                <path d="M11 3L8 9l4 13 4-13-3-6" />
                <path d="M2 9h20" />
              </svg>
            </div>
            <div>
              <span className="font-display text-[17px] sm:text-[19px] font-semibold text-white tracking-wide block">
                100% Authentic
              </span>
              <span className="font-body text-[12.5px] sm:text-[13px] text-[#A69F96]">
                Gold, silver, and bridal gems handcrafted for you
              </span>
            </div>
          </div>

          {/* Right Side: Subscription Input Box */}
          <div className="w-full lg:max-w-md">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="flex items-center w-full bg-[#202020] border border-[#333333] rounded-full p-1.5 focus-within:border-[#B38E5D] transition-colors"
            >
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent px-4 text-[13.5px] text-white placeholder:text-[#78716A] focus:outline-none"
              />
              <button
                type="submit"
                disabled={submitted}
                className="px-6 py-2.5 rounded-full bg-[#B38E5D] hover:bg-[#9C7748] text-white text-[13px] font-medium tracking-wide shadow-xs transition-colors cursor-pointer shrink-0 disabled:opacity-85"
              >
                {submitted ? "Subscribed ✓" : "Subscribe"}
              </button>
            </form>
            {submitted && (
              <p className="text-[11.5px] text-[#B38E5D] mt-2 text-center lg:text-left">
                Thank you for subscribing to Luxe Jewels updates!
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
