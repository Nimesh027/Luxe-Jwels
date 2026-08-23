import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type CardVariant = "product" | "collection" | "promo" | "plain";

interface CardProps {
  variant?: CardVariant;
  href?: string;
  children: ReactNode;
  className?: string;
}

const variantClasses: Record<CardVariant, string> = {
  product: "bg-surface border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-200",
  collection: "relative overflow-hidden rounded-2xl group",
  promo: "relative overflow-hidden rounded-2xl bg-ink text-cream",
  plain: "bg-surface rounded-2xl",
};

export default function Card({ variant = "plain", href, children, className }: CardProps) {
  const classes = cn(variantClasses[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <div className={classes}>{children}</div>;
}
