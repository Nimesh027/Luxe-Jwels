"use client";

import { CloseOutlined } from "@ant-design/icons";
import Button from "@/components/ui/Button";

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SizeGuideModal({ isOpen, onClose }: SizeGuideModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
      <div className="w-full max-w-md rounded-3xl bg-surface p-6 shadow-xl border border-border">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <h3 className="font-display text-xl font-medium text-ink">Jewellery Size Guide</h3>
          <button
            type="button"
            onClick={onClose}
            className="text-muted hover:text-ink text-lg cursor-pointer"
          >
            <CloseOutlined />
          </button>
        </div>

        <div className="mt-4 space-y-3 text-xs text-muted">
          <p>Measure your existing necklace, chain, or ring to find the perfect luxury fit:</p>

          <div className="rounded-xl bg-cream/40 p-3 space-y-1.5 text-ink font-mono text-[11px]">
            <div className="flex justify-between border-b border-border/40 pb-1">
              <span>14 INCHES</span>
              <span>Choker Length</span>
            </div>
            <div className="flex justify-between border-b border-border/40 pb-1">
              <span>16 INCHES</span>
              <span>Collarbone Fit</span>
            </div>
            <div className="flex justify-between border-b border-border/40 pb-1 font-semibold text-wine">
              <span>18 INCHES</span>
              <span>Standard Pendant (Recommended)</span>
            </div>
            <div className="flex justify-between">
              <span>20 INCHES</span>
              <span>Matinee / Long Fit</span>
            </div>
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
