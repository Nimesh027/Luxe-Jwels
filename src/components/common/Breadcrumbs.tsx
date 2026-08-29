"use client";

import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  isDarkBackground?: boolean;
}

export default function Breadcrumbs({ items, className = "mb-8", isDarkBackground = false }: BreadcrumbsProps) {
  const baseTextColor = isDarkBackground ? "text-white/60" : "text-muted";
  const hoverColor = isDarkBackground ? "hover:text-white" : "hover:text-wine";
  const activeColor = isDarkBackground ? "text-white/90" : "text-wine";
  const separatorColor = isDarkBackground ? "text-white/40" : "text-muted/60";

  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex flex-wrap items-center gap-2 text-caption uppercase tracking-wider ${baseTextColor} ${className}`}
    >
      <Link href="/" className={`${hoverColor} transition-colors`}>
        Home
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <span key={index} className="flex items-center gap-2">
            <span className={separatorColor}>/</span>
            {item.href && !isLast ? (
              <Link href={item.href} className={`${hoverColor} transition-colors`}>
                {item.label}
              </Link>
            ) : (
              <span className={`font-semibold ${activeColor}`}>{item.label}</span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
