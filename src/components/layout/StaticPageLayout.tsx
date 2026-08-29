import type { ReactNode } from "react";
import Section from "@/components/common/Section";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { cn } from "@/lib/utils";

interface StaticPageLayoutProps {
  children: ReactNode;
  pageTitle: string;
  breadcrumbLabel?: string;
  description?: string;
  className?: string;
}

export default function StaticPageLayout({
  children,
  pageTitle,
  breadcrumbLabel,
  description,
  className,
}: StaticPageLayoutProps) {
  return (
    <>
      {/* HERO BANNER SECTION */}
      <section className="w-full bg-wine-dark py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20 mix-blend-overlay pointer-events-none" />
        <div className="relative z-10 container mx-auto px-4 text-center space-y-3">
          <div className="mb-10">
            <Breadcrumbs items={[{ label: breadcrumbLabel || pageTitle }]} isDarkBackground={true} />
          </div>
          <h1 className="font-display text-h1 text-white font-semibold tracking-wide">
            {pageTitle}
          </h1>
          {description && (
            <p className="text-body text-[#f7f2ed]/80 font-light leading-relaxed max-w-3xl mx-auto">
              {description}
            </p>
          )}
        </div>
      </section>

      {/* CONTENT SECTION */}
      <>
        {children}
      </>
    </>
  );
}
