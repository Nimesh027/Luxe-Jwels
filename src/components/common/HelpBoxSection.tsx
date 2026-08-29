import React from "react";
import Link from "next/link";
import Section from "@/components/common/Section";

export interface HelpBoxAction {
  label: string;
  href: string;
}

export interface HelpBoxSectionProps {
  title: string;
  description: string;
  primaryAction: HelpBoxAction;
  secondaryAction?: HelpBoxAction;
}

export default function HelpBoxSection({ title, description, primaryAction, secondaryAction }: HelpBoxSectionProps) {
  const renderAction = (action: HelpBoxAction, isPrimary: boolean) => {
    const primaryStyles =
      "w-full sm:w-auto px-8 py-3 bg-wine text-white rounded-full text-small font-semibold hover:bg-wine-dark transition-all cursor-pointer shadow-md";
    const secondaryStyles =
      "w-full sm:w-auto px-8 py-3 bg-white border border-wine/30 text-wine rounded-full text-small font-semibold hover:bg-wine hover:text-white transition-all cursor-pointer shadow-sm";
    const styles = isPrimary ? primaryStyles : secondaryStyles;

    if (
      action.href.startsWith("tel:") ||
      action.href.startsWith("mailto:") ||
      action.href.startsWith("http")
    ) {
      return (
        <a href={action.href} className={styles}>
          {action.label}
        </a>
      );
    }
    return (
      <Link href={action.href} className={styles}>
        {action.label}
      </Link>
    );
  };

  return (
    <Section className="py-10 sm:py-14" containerClassName="max-w-2xl mx-auto">
      <div className="text-center bg-surface/80 rounded-[2rem] border border-gold/20 p-8 sm:p-12 space-y-4 sm:space-y-5 shadow-2xs backdrop-blur-sm relative overflow-hidden">
        {/* Subtle Decorative Gradient */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-wine/5 rounded-full blur-3xl pointer-events-none" />
        
        <h3 className="font-display text-h4 sm:text-h3 font-semibold text-ink relative z-10">
          {title}
        </h3>
        <p className="text-body text-muted leading-relaxed font-light max-w-xl mx-auto relative z-10">
          {description}
        </p>
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 relative z-10">
          {renderAction(primaryAction, true)}
          {secondaryAction && renderAction(secondaryAction, false)}
        </div>
      </div>
    </Section>
  );
}
