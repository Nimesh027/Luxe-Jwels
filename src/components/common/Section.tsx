import Link from "next/link";
import type { ReactNode } from "react";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
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
    <section className={cn("py-section", className)}>
      <div className={cn("container", containerClassName)}>
        {(title || viewAllHref) && (
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4 sm:mb-10">
            <div>
              {title && (
                <h2 className="font-display text-h2 tracking-tight text-ink">
                  {title}
                </h2>
              )}
              {subtitle && <p className="mt-1 text-small text-muted">{subtitle}</p>}
            </div>
            {viewAllHref && (
              <Link
                href={viewAllHref}
                className="group -my-3 shrink-0 inline-flex min-h-12 items-center gap-1.5 py-3 text-small text-brown hover:text-brown-dark font-medium underline-offset-4 hover:underline transition-colors"
              >
                <span>View All</span>
                <ArrowRightIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
