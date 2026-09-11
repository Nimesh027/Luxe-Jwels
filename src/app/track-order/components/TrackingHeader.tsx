import React, { useState } from "react";
import Link from "next/link";
import { LinkIcon, CheckIcon, PhoneIcon, LockIcon } from "@/components/icons";

interface TrackingHeaderProps {
  orderId: string;
}

export default function TrackingHeader({ orderId }: TrackingHeaderProps) {
  const [copiedLink, setCopiedLink] = useState(false);

  const handleCopyLink = () => {
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="bg-surface rounded-3xl border border-wine/30 p-6 sm:p-8 shadow-sm space-y-6">

      {/* Header Badge & Title Row */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-border/80">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h2 className="font-display font-bold !text-body">
              Order #{orderId || "LX-89210"}
            </h2>
            <span className="px-3 py-1 bg-amber-50 text-amber-700 border border-amber-200/80 rounded-full text-caption font-bold flex items-center gap-1.5 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
              Out for Delivery
            </span>
          </div>
          <p className="text-caption text-muted font-medium">
            Courier: <strong className="text-ink">Sequel Express Air (100% Transit Insured)</strong> • AWB: <span className="font-mono text-ink">SQL-98234109</span>
          </p>
        </div>

        {/* Quick Action Buttons */}
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={handleCopyLink}
            className="px-3.5 py-2 bg-white border border-border hover:border-wine/40 text-ink rounded-xl text-caption font-medium transition-all shadow-2xs flex items-center gap-2 cursor-pointer"
          >
            {copiedLink ? (
              <>
                <CheckIcon size={14} className="text-emerald-600 shrink-0" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <LinkIcon size={14} className="text-muted shrink-0" />
                <span>Share Link</span>
              </>
            )}
          </button>
          <Link
            href="/contact"
            className="px-3.5 py-2 bg-wine/10 hover:bg-wine/20 text-wine rounded-xl text-caption font-semibold transition-all flex items-center gap-2"
          >
            <PhoneIcon size={14} className="shrink-0" />
            <span>Contact Agent</span>
          </Link>
        </div>
      </div>

      {/* Delivery ETA & Address Banner */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-[#FAF0F2] rounded-2xl p-4 border border-wine/15 space-y-1">
          <span className="text-[10px] text-muted uppercase tracking-wider font-semibold block">
            Estimated Delivery
          </span>
          <span className="font-display font-bold text-h5 text-wine block">
            Today by 5:00 PM
          </span>
          <span className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1.5">
            <LockIcon size={13} className="shrink-0 text-emerald-600" />
            OTP Verification Required
          </span>
        </div>

        <div className="bg-neutral-50 rounded-2xl p-4 border border-neutral-200/80 space-y-1">
          <span className="text-[10px] text-muted uppercase tracking-wider font-semibold block">
            Delivery Address
          </span>
          <span className="text-caption font-semibold text-ink block truncate">
            Parthik Bhilvala
          </span>
          <span className="text-caption text-muted block line-clamp-1">
            Flat 302, Luxe Residency, MG Road, Bengaluru - 560001
          </span>
        </div>

        <div className="bg-neutral-50 rounded-2xl p-4 border border-neutral-200/80 space-y-1">
          <span className="text-[10px] text-muted uppercase tracking-wider font-semibold block">
            Package Contents
          </span>
          <span className="text-caption font-semibold text-ink block truncate">
            Eternal Halo Diamond Ring
          </span>
          <span className="text-caption text-muted block">
            18K Solid Gold • 1 Unit (Velvet Box)
          </span>
        </div>
      </div>

    </div>
  );
}
