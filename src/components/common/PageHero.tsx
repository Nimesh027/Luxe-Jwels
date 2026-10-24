import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { SITE_URL } from "@/lib/seo";

export interface Crumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: ReactNode;
  subtitle?: ReactNode;
  image?: string;
  imageAlt?: string;
  /** Trail after "Home". The last item is the current page. */
  breadcrumbs?: Crumb[];
  children?: ReactNode;
  align?: "left" | "center";
  className?: string;
  imageClassName?: string;
}

/**
 * Dark photographic page banner shared by every inner page
 * (Shop, Our Story, Manufacturing, Blog, Contact, policies…).
 */
export default function PageHero({
  title,
  subtitle,
  image = "/images/revamp/ring-macro.jpg",
  imageAlt = "",
  breadcrumbs,
  children,
  align = "left",
  className,
  imageClassName,
}: PageHeroProps) {
  const centered = align === "center";
  const trail = breadcrumbs?.length ? [{ label: "Home", href: "/" }, ...breadcrumbs] : null;

  const breadcrumbJsonLd = trail && {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: `${SITE_URL}${c.href}` } : {}),
    })),
  };

  return (
    <section className={cn("theme-dark relative isolate overflow-hidden bg-espresso", className)}>
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className={cn("-z-10 object-cover object-right", imageClassName)}
      />
      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-0 -z-10",
          centered
            ? "bg-espresso-deep/70"
            : "bg-[linear-gradient(90deg,rgb(23_17_12/0.94)_0%,rgb(30_21_14/0.85)_40%,rgb(43_30_20/0.45)_75%,rgb(43_30_20/0.25)_100%)]"
        )}
      />

      <div
        className={cn(
          "container flex flex-col justify-center min-h-[180px] sm:min-h-[220px] lg:min-h-[250px] py-10 sm:py-12",
          centered && "items-center text-center"
        )}
      >
        {trail && (
          <>
            <nav aria-label="Breadcrumb" className="mb-3">
              <ol className={cn("flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] text-white/75", centered && "justify-center")}>
                {trail.map((c, i) => {
                  const last = i === trail.length - 1;
                  return (
                    <li key={`${c.label}-${i}`} className="flex items-center gap-2">
                      {c.href && !last ? (
                        <Link href={c.href} className="hover:text-white transition-colors">
                          {c.label}
                        </Link>
                      ) : (
                        <span aria-current={last ? "page" : undefined} className="text-gold">
                          {c.label}
                        </span>
                      )}
                      {!last && <span aria-hidden="true" className="text-white/40">/</span>}
                    </li>
                  );
                })}
              </ol>
            </nav>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
          </>
        )}

        <h1 className="font-display text-h1 font-medium text-white leading-[1.1] max-w-3xl">{title}</h1>
        {subtitle && (
          <p className={cn("mt-2.5 text-[15px] sm:text-[17px] leading-relaxed text-white/85 max-w-2xl", centered && "mx-auto")}>
            {subtitle}
          </p>
        )}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </section>
  );
}
