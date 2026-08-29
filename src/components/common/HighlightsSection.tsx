import React, { ReactNode } from "react";
import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";

export interface HighlightItem {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface HighlightsSectionProps {
  title: string;
  description: string;
  highlights: HighlightItem[];
}

export default function HighlightsSection({ title, description, highlights }: HighlightsSectionProps) {
  return (
    <Section>
      <SectionTitle
        title={title}
        description={description}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {highlights.map((item, index) => (
          <div key={index} className="bg-surface rounded-2xl border border-border/80 p-6 text-center space-y-3 shadow-2xs hover:border-wine/30 transition-all">
            <div className="w-12 h-12 rounded-full bg-wine/10 text-wine flex items-center justify-center mx-auto text-h4">
              {item.icon}
            </div>
            <h3 className="font-display font-semibold !text-h6 text-ink">{item.title}</h3>
            <p className="text-body text-muted leading-relaxed font-light">{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
