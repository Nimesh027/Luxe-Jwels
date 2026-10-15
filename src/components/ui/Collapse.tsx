import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CollapseProps {
  open: boolean;
  children: ReactNode;
  /** Applied to the inner content box — put padding and borders here, not on a wrapper */
  className?: string;
}

/** Smoothly animates height between 0 and auto (grid-rows 0fr → 1fr). */
export default function Collapse({ open, children, className }: CollapseProps) {
  return (
    <div
      inert={!open}
      className={cn(
        "grid transition-[grid-template-rows,opacity] duration-300 ease-luxe",
        open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
      )}
    >
      <div className="min-h-0 overflow-hidden">
        <div className={className}>{children}</div>
      </div>
    </div>
  );
}
