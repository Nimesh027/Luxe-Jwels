"use client";

import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ items, className = "mb-8" }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex flex-wrap items-center gap-2 text-xs uppercase tracking-wider text-muted ${className}`}
    >
      <Link href="/" className="hover:text-wine transition-colors">
        Home
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <span key={index} className="flex items-center gap-2">
            <span className="text-muted/60">/</span>
            {item.href && !isLast ? (
              <Link href={item.href} className="hover:text-wine transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="font-semibold text-wine">{item.label}</span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
