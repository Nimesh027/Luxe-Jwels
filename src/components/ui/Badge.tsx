import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type BadgeVariant = "count" | "status" | "sale";

interface BadgeProps {
  variant?: BadgeVariant;
  children: ReactNode;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  count: "flex h-4 w-4 sm:h-4.5 sm:w-4.5 items-center justify-center rounded-full bg-wine text-[9px] sm:text-[10px] font-semibold text-surface shadow-xs",
  status: "px-2 py-0.5 text-[10px] uppercase tracking-wide bg-cream-dark text-ink",
  sale: "px-2 py-0.5 text-[10px] uppercase tracking-wide bg-ink text-cream",
};

export default function Badge({ variant = "count", children, className }: BadgeProps) {
  return <span className={cn(variantClasses[variant], className)}>{children}</span>;
}
