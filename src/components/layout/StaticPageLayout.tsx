import type { ReactNode } from "react";
import PageHero from "@/components/common/PageHero";

interface StaticPageLayoutProps {
  children: ReactNode;
  pageTitle: string;
  breadcrumbLabel?: string;
  description?: string;
  image?: string;
  className?: string;
}

export default function StaticPageLayout({
  children,
  pageTitle,
  breadcrumbLabel,
  description,
  image = "/images/revamp/luxury-trust-banner.jpg",
}: StaticPageLayoutProps) {
  return (
    <>
      <PageHero
        title={pageTitle}
        subtitle={description}
        image={image}
        breadcrumbs={[{ label: breadcrumbLabel || pageTitle }]}
      />
      {children}
    </>
  );
}
