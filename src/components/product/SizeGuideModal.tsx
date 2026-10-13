"use client";

import { memo } from "react";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function SizeGuideModalComponent({ isOpen, onClose }: SizeGuideModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Jewellery Size Guide" maxWidth="max-w-md">
      <div className="space-y-3 text-caption text-muted">
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
    </Modal>
  );
}

export default memo(SizeGuideModalComponent);
