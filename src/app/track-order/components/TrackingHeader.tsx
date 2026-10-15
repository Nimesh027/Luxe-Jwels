import React, { useState } from "react";
import Link from "next/link";
import { LinkIcon, CheckIcon, PhoneIcon, LockIcon } from "@/components/icons";
import Button from "@/components/ui/Button";

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
    <div className="bg-white rounded-3xl border border-brown/30 p-6 sm:p-8 shadow-sm space-y-6">

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
          <Button
            type="button"
            onClick={handleCopyLink}
            variant="border"
            colorTheme="dark"
            size="sm"
            rounded="lg"
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
          </Button>
          <Button
            href="/contact"
            variant="fill"
            colorTheme="brown"
            size="sm"
            rounded="lg"
          >
            <PhoneIcon size={14} className="shrink-0" />
            <span>Contact Agent</span>
          </Button>
        </div>
      </div>

      {/* Delivery ETA & Address Banner */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-brown-soft rounded-2xl p-4 border border-brown/15 space-y-1">
          <span className="text-micro text-muted tracking-wider font-semibold block">
            Estimated Delivery
          </span>
          <span className="font-display font-bold text-h5 text-brown block">
            Today by 5:00 PM
          </span>
          <span className="text-micro text-emerald-700 font-semibold flex items-center gap-1.5">
            <LockIcon size={13} className="shrink-0 text-emerald-600" />
            OTP Verification Required
          </span>
        </div>

        <div className="bg-neutral-50 rounded-2xl p-4 border border-neutral-200/80 space-y-1">
          <span className="text-micro text-muted tracking-wider font-semibold block">
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
          <span className="text-micro text-muted tracking-wider font-semibold block">
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
