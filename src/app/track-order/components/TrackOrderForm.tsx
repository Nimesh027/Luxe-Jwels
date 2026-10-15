import React from "react";
import Input from "@/components/ui/Input";
import Section from "@/components/common/Section";
import Button from "@/components/ui/Button";
import { TagIcon, SmartphoneIcon, ArrowRightIcon } from "@/components/icons";

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
    <Section className="bg-linear-to-b from-brown-soft/60 via-white to-offwhite">
      <div className="bg-white/90 backdrop-blur-md rounded-3xl border border-brown/20 p-6 sm:p-10 shadow-[0_15px_40px_rgba(139,94,52,0.08)] max-w-2xl mx-auto mb-12 relative overflow-hidden">
        {/* Subtle Corner Glow Accent */}
        <div className="absolute -top-16 -right-16 w-32 h-32 bg-brown/10 rounded-full blur-2xl pointer-events-none" />

        {/* Toggle Mode Tabs */}
        <div className="grid grid-cols-2 gap-2 p-1.5 bg-brown-soft/80 rounded-2xl mb-6 border border-brown/10">
          <button
            type="button"
            onClick={() => setTrackType("order")}
            className={`py-2.5 px-4 text-body font-semibold rounded-xl transition-all cursor-pointer ${trackType === "order"
              ? "bg-white text-brown shadow-sm"
              : "text-muted hover:text-ink"
              }`}
          >
            Order ID & Mobile
          </button>
          <button
            type="button"
            onClick={() => setTrackType("awb")}
            className={`py-2.5 px-4 text-body font-semibold rounded-xl transition-all cursor-pointer ${trackType === "awb"
              ? "bg-white text-brown shadow-sm"
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
              <span className="text-micro text-muted font-normal">
                e.g. {trackType === "order" ? "LX-89210" : "SQL-98234109"}
              </span>
            }
            type="text"
            variant="light"
            value={orderIdInput}
            onChange={(e) => setOrderIdInput(e.target.value)}
            placeholder={trackType === "order" ? "LX-89210" : "SQL-98234109"}
            inputClassName="font-mono tracking-wider"
            trailingIcon={<TagIcon size={16} className="text-muted" />}
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
            trailingIcon={<SmartphoneIcon size={16} className="text-muted" />}
            required
          />

          <Button
            type="submit"
            colorTheme="brown"
            size="md"
            rounded="lg"
            fullWidth
            disabled={isLoading}
            className="tracking-widest shadow-md hover:shadow-lg mt-2"
            rightIcon={!isLoading && <ArrowRightIcon className="h-4 w-4" />}
          >
            {isLoading ? (
              <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              "Track Shipment"
            )}
          </Button>
        </form>
      </div>
    </Section>
  );
}
