"use client";

import { CloseIcon } from "@/components/icons";
import Button from "@/components/ui/Button";
import { usePresence } from "@/hooks/usePresence";

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SizeGuideModal({ isOpen, onClose }: SizeGuideModalProps) {
  const { mounted, open } = usePresence(isOpen);

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs ${open ? "animate-in fade-in" : "animate-out fade-out"}`}
      onClick={onClose}
    >
      <div
        className={`w-full max-w-md rounded-3xl bg-white p-6 shadow-xl border border-border ${open ? "animate-in fade-in zoom-in-95 slide-in-from-bottom-4" : "animate-out fade-out zoom-out-95"}`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-border pb-4">
          <h3 className="font-display text-h4 font-medium text-ink">Jewellery Size Guide</h3>
          <button
            type="button"
            onClick={onClose}
            className="-mr-3 flex size-12 items-center justify-center rounded-full text-muted hover:bg-offwhite hover:text-ink cursor-pointer"
            aria-label="Close size guide"
          >
            <CloseIcon size={18} />
          </button>
        </div>

        <div className="mt-4 space-y-3 text-small text-muted">
          <p>Measure your existing necklace, chain, or ring to find the perfect luxury fit:</p>

          <div className="rounded-xl bg-offwhite/60 px-4 py-2 text-small text-ink">
            {[
              { size: "14 inches", fit: "Choker length" },
              { size: "16 inches", fit: "Collarbone fit" },
              { size: "18 inches", fit: "Standard pendant (recommended)", highlight: true },
              { size: "20 inches", fit: "Matinee / long fit" },
            ].map((row) => (
              <div
                key={row.size}
                className={`flex flex-wrap items-center justify-between gap-x-4 gap-y-0.5 border-b border-border/60 py-2.5 last:border-b-0 ${row.highlight ? "font-semibold text-brown" : ""}`}
              >
                <span className="font-medium">{row.size}</span>
                <span className={row.highlight ? "" : "text-muted"}>{row.fit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <Button variant="dark" onClick={onClose}>
            Got It
          </Button>
        </div>
      </div>
    </div>
  );
}
