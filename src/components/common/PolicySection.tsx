import React, { ReactNode } from "react";
import Section from "@/components/common/Section";

export function PolicyContainer({ children }: { children: ReactNode }) {
  return (
    <Section className="bg-white">
      <div className="space-y-5">
        {children}
      </div>
    </Section>
  );
}

interface PolicyBlockProps {
  title: string;
  description?: ReactNode;
  children?: ReactNode;
}

export function PolicyBlock({ title, description, children }: PolicyBlockProps) {
  return (
    <div className="space-y-4">
      <h2 className="font-display !text-h4 font-semibold text-ink flex items-center">
        {title}
      </h2>
      {description && (
        <div className="text-body text-muted leading-relaxed font-light">
          {description}
        </div>
      )}
      {children}
    </div>
  );
}
