"use client";

import { useState } from "react";
import Modal from "@/components/ui/Modal";
import Input from "@/components/ui/Input";

export default function UserModals() {
  // Track order state
  const [orderId, setOrderId] = useState("");
  const [trackingResult, setTrackingResult] = useState<boolean | null>(null);

  // Gift card state
  const [giftCardCode, setGiftCardCode] = useState("");
  const [cardBalance, setCardBalance] = useState<number | null>(null);

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderId.trim()) {
      setTrackingResult(true);
    }
  };

  const handleGiftCardCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (giftCardCode.trim()) {
      setCardBalance(5000);
    }
  };

  return (
    <>
      {/* 1. TRACK ORDER MODAL */}
      <Modal id="trackOrder" title="Track Your Order">
        <div className="space-y-5">
          <p className="text-caption text-muted leading-relaxed">
            Enter your order tracking number or Order ID (e.g. LX-89241) to check real-time delivery status.
          </p>

          <form onSubmit={handleTrackSubmit} className="space-y-4">
            <Input
              id="user-modal-order-id"
              label="Order Number / AWB"
              type="text"
              variant="light"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              placeholder="e.g. LX-89241"
              required
            />
            <button
              type="submit"
              className="w-full py-2.5 bg-wine text-white rounded-xl text-caption font-semibold hover:bg-wine-dark transition-colors cursor-pointer"
            >
              Track Status
            </button>
          </form>

          {trackingResult && (
            <div className="pt-4 border-t border-border space-y-3 animate-in fade-in duration-200">
              <div className="flex items-center justify-between text-caption">
                <span className="font-semibold text-ink">Order #{orderId.toUpperCase()}</span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-medium">In Transit</span>
              </div>
              <div className="p-3 bg-wine/5 rounded-xl border border-wine/10 space-y-2 text-caption">
                <p className="text-wine font-medium">Expected Delivery: Tomorrow by 6:00 PM</p>
                <div className="flex items-center gap-2 text-muted text-[11px]">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Insured Courier Partner: BlueDart Express
                </div>
              </div>
            </div>
          )}
        </div>
      </Modal>

      {/* 2. ORDER HISTORY MODAL */}
      <Modal id="orderHistory" title="Order History">
        <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
          <div className="p-3.5 border border-border rounded-xl bg-surface hover:border-wine/30 transition-all space-y-2">
            <div className="flex items-center justify-between text-caption">
              <span className="font-semibold text-wine">Order #LX-89241</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-semibold">Delivered</span>
            </div>
            <p className="text-caption text-ink/80 font-medium">Royal Diamond Solitaire Ring (18K Gold)</p>
            <div className="flex items-center justify-between text-[11px] text-muted pt-1 border-t border-border/40">
              <span>Date: Aug 24, 2026</span>
              <span className="font-semibold text-wine">₹1,45,000</span>
            </div>
          </div>

          <div className="p-3.5 border border-border rounded-xl bg-surface hover:border-wine/30 transition-all space-y-2">
            <div className="flex items-center justify-between text-caption">
              <span className="font-semibold text-wine">Order #LX-77319</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-semibold">Delivered</span>
            </div>
            <p className="text-caption text-ink/80 font-medium">Heritage Kundan Necklace Set</p>
            <div className="flex items-center justify-between text-[11px] text-muted pt-1 border-t border-border/40">
              <span>Date: May 12, 2026</span>
              <span className="font-semibold text-wine">₹2,80,000</span>
            </div>
          </div>
        </div>
      </Modal>

      {/* 3. GIFT CARD BALANCE MODAL */}
      <Modal id="giftCard" title="Gift Card Balance">
        <div className="space-y-5">
          <p className="text-caption text-muted leading-relaxed">
            Check the available store credit or redeem a Luxe Jewels digital gift card code.
          </p>

          <form onSubmit={handleGiftCardCheck} className="space-y-4">
            <Input
              id="user-modal-gift-card-code"
              label="Gift Card Code"
              type="text"
              variant="light"
              value={giftCardCode}
              onChange={(e) => setGiftCardCode(e.target.value)}
              placeholder="e.g. LUXE-GIFT-2026"
              inputClassName="uppercase tracking-wider"
              required
            />
            <button
              type="submit"
              className="w-full py-2.5 bg-wine text-white rounded-xl text-caption font-semibold hover:bg-wine-dark transition-colors cursor-pointer"
            >
              Check Balance
            </button>
          </form>

          {cardBalance !== null && (
            <div className="p-4 bg-wine/5 rounded-xl border border-wine/15 text-center space-y-1 animate-in fade-in duration-200">
              <span className="text-[11px] text-muted uppercase tracking-wider font-semibold">Current Available Balance</span>
              <p className="text-h3 font-display font-bold text-wine">₹{cardBalance.toLocaleString()}</p>
              <p className="text-[10px] text-emerald-700 font-medium">Valid until Dec 31, 2027 • Redeemable at Checkout</p>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
}
