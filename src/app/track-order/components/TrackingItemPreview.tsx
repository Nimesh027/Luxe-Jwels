import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function TrackingItemPreview() {
  return (
    <div className="bg-surface rounded-2xl border border-border/80 p-5 shadow-2xs flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-neutral-100 shrink-0 border border-border/60">
          <Image
            src="/images/products/solitaire-ring.jpg"
            alt="Eternal Halo Diamond Ring"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-display font-semibold text-body text-ink">
            Eternal Halo Diamond Ring
          </h4>
          <p className="text-caption text-muted">18K Solid Gold • BIS Hallmarked • Size: 47 * 57 mm</p>
          <span className="font-semibold text-caption text-ink mt-0.5 block">₹42,999</span>
        </div>
      </div>

      <Link
        href="/products/solitaire-ring"
        className="hidden sm:inline-flex px-4 py-2 border border-border hover:border-wine text-caption font-semibold rounded-full text-ink hover:text-wine transition-all"
      >
        View Item
      </Link>
    </div>
  );
}
