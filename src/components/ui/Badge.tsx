import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type BadgeVariant = "count" | "status" | "sale";

interface BadgeProps {
  variant?: BadgeVariant;
  children: ReactNode;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  count: "flex h-4 w-4 sm:h-4.5 sm:w-4.5 items-center justify-center rounded-full bg-brown text-micro font-semibold text-white shadow-xs",
  status: "px-2 py-0.5 text-micro tracking-wide bg-offwhite-dark text-ink",
  sale: "px-2 py-0.5 text-micro tracking-wide bg-ink text-offwhite",
};

export default function Badge({ variant = "count", children, className }: BadgeProps) {
  return <span className={cn(variantClasses[variant], className)}>{children}</span>;
}
