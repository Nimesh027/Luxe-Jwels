import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  title?: string;
  subtitle?: string;
  viewAllHref?: string;
  containerClassName?: string;
  className?: string;
  children: ReactNode;
}

export default function Section({
  title,
  subtitle,
  viewAllHref,
  containerClassName,
  className,
  children,
}: SectionProps) {
  return (
    <section className={cn("py-12 md:py-16", className)}>
      <div className={cn("container", containerClassName)}>
        {(title || viewAllHref) && (
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              {title && (
                <h2 className="font-display text-2xl tracking-wide text-ink md:text-3xl">
                  {title}
                </h2>
              )}
              {subtitle && <p className="mt-1 text-sm text-muted">{subtitle}</p>}
            </div>
            {viewAllHref && (
              <Link
                href={viewAllHref}
                className="shrink-0 text-xs uppercase tracking-wide text-ink underline underline-offset-4 hover:text-gold"
              >
                View All
              </Link>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
