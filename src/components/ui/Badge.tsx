import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type BadgeVariant = "count" | "status" | "sale";

interface BadgeProps {
  variant?: BadgeVariant;
  children: ReactNode;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  count: "flex h-5 w-5 items-center justify-center rounded-full bg-gold text-[10px] font-semibold text-ink",
  status: "px-2 py-0.5 text-[10px] uppercase tracking-wide bg-cream-dark text-ink",
  sale: "px-2 py-0.5 text-[10px] uppercase tracking-wide bg-ink text-cream",
};

export default function Badge({ variant = "count", children, className }: BadgeProps) {
  return <span className={cn(variantClasses[variant], className)}>{children}</span>;
}
