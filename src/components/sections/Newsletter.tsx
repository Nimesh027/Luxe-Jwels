"use client";

import { useState } from "react";
import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";
import Button from "@/components/ui/Button";
import { useAppSelector } from "@/store/hooks";

export default function Newsletter() {
  const newsletter = useAppSelector((state) => state.siteContent.newsletter);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <Section>
      <div className="mx-auto flex max-w-[580px] flex-col items-center text-center px-4">
        <SectionTitle
          // tagline="BE THE FIRST TO KNOW"
          title={newsletter.title}
          description={newsletter.subtitle}
          align="center"
          className="mb-6 sm:mb-8"
        />

        <form
          className="flex w-full flex-col sm:flex-row items-center gap-2.5 sm:gap-3 max-w-[540px]"
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
          }}
        >
          <div className="relative w-full flex-1">
            <input
              type="email"
              required
              placeholder={newsletter.placeholder || "Enter your email address"}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="h-12 w-full rounded-full border border-neutral-300 bg-white px-5 text-xs sm:text-sm text-ink placeholder:text-neutral-400 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold shadow-xs"
            />
          </div>

          <Button
            type="submit"
            variant="fill"
            colorTheme="wine"
            className="h-12 w-full sm:w-auto px-8 rounded-full font-semibold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg shrink-0"
          >
            {newsletter.cta || "Subscribe"}
          </Button>
        </form>

        {submitted ? (
          <p className="text-xs text-wine font-medium mt-3">
            Thank you for subscribing to Luxe Jewels updates!
          </p>
        ) : (
          <p className="text-[11px] text-muted font-light mt-3">
            By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
          </p>
        )}
      </div>
    </Section>
  );
}
