import React from "react";
import Input from "@/components/ui/Input";
import Section from "@/components/common/Section";

interface TrackOrderFormProps {
  trackType: "order" | "awb";
  setTrackType: (type: "order" | "awb") => void;
  orderIdInput: string;
  setOrderIdInput: (val: string) => void;
  contactInput: string;
  setContactInput: (val: string) => void;
  isLoading: boolean;
  onSubmit: (e: React.FormEvent) => void;
}

export default function TrackOrderForm({
  trackType,
  setTrackType,
  orderIdInput,
  setOrderIdInput,
  contactInput,
  setContactInput,
  isLoading,
  onSubmit,
}: TrackOrderFormProps) {
  return (
    <Section className="bg-gradient-to-b from-[#FAF0F2]/60 via-surface to-background">
      <div className="bg-white/90 backdrop-blur-md rounded-3xl border border-wine/20 p-6 sm:p-10 shadow-[0_15px_40px_rgba(128,34,47,0.08)] max-w-2xl mx-auto mb-12 relative overflow-hidden">
        {/* Subtle Corner Glow Accent */}
        <div className="absolute -top-16 -right-16 w-32 h-32 bg-wine/10 rounded-full blur-2xl pointer-events-none" />

        {/* Toggle Mode Tabs */}
        <div className="grid grid-cols-2 gap-2 p-1.5 bg-[#F8EFEF]/80 rounded-2xl mb-6 border border-wine/10">
          <button
            type="button"
            onClick={() => setTrackType("order")}
            className={`py-2.5 px-4 text-body font-semibold rounded-xl transition-all cursor-pointer ${trackType === "order"
              ? "bg-white text-wine shadow-sm"
              : "text-muted hover:text-ink"
              }`}
          >
            Order ID & Mobile
          </button>
          <button
            type="button"
            onClick={() => setTrackType("awb")}
            className={`py-2.5 px-4 text-body font-semibold rounded-xl transition-all cursor-pointer ${trackType === "awb"
              ? "bg-white text-wine shadow-sm"
              : "text-muted hover:text-ink"
              }`}
          >
            AWB Tracking Number
          </button>
        </div>

        {/* Input Form */}
        <form onSubmit={onSubmit} className="space-y-4">
          <Input
            id="track-order-id-input"
            label={trackType === "order" ? "Order ID" : "AWB / Waybill Number"}
            labelAction={
              <span className="text-[11px] text-muted font-normal uppercase">
                e.g. {trackType === "order" ? "LX-89210" : "SQL-98234109"}
              </span>
            }
            type="text"
            variant="light"
            value={orderIdInput}
            onChange={(e) => setOrderIdInput(e.target.value)}
            placeholder={trackType === "order" ? "LX-89210" : "SQL-98234109"}
            inputClassName="font-mono uppercase tracking-wider"
            trailingIcon={<span className="text-caption">🏷️</span>}
            required
          />

          <Input
            id="track-contact-input"
            label="Mobile Number or Email Address"
            type="text"
            variant="light"
            value={contactInput}
            onChange={(e) => setContactInput(e.target.value)}
            placeholder="+91 9876543210"
            trailingIcon={<span className="text-caption">📱</span>}
            required
          />

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-4 bg-[#80222F] hover:bg-[#681B26] text-white rounded-xl text-body font-bold uppercase tracking-widest transition-all shadow-md hover:shadow-lg cursor-pointer active:scale-95 flex items-center justify-center gap-2 mt-2"
          >
            {isLoading ? (
              <span className="inline-block animate-spin text-h5">⏳</span>
            ) : (
              <>
                <span>TRACK SHIPMENT</span>
                <span className="text-body">→</span>
              </>
            )}
          </button>
        </form>
      </div>
    </Section>
  );
}
