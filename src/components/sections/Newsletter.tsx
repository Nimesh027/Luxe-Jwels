"use client";

import { useState } from "react";
import Section from "@/components/common/Section";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { useAppSelector } from "@/store/hooks";

export default function Newsletter() {
  const newsletter = useAppSelector((state) => state.siteContent.newsletter);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <Section className="bg-cream-dark/50">
      <div className="mx-auto flex max-w-xl flex-col items-center gap-4 text-center">
        <h2 className="font-display text-2xl text-ink sm:text-3xl">{newsletter.title}</h2>
        <p className="text-sm text-muted">{newsletter.subtitle}</p>
        <form
          className="flex w-full flex-col gap-3 sm:flex-row"
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
          }}
        >
          <Input
            type="email"
            required
            placeholder={newsletter.placeholder}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            containerClassName="flex-1"
          />
          <Button type="submit" variant="primary">
            {newsletter.cta}
          </Button>
        </form>
        {submitted && (
          <p className="text-xs text-gold">Thank you for subscribing to Luxe Jewels!</p>
        )}
      </div>
    </Section>
  );
}
