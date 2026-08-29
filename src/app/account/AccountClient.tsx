"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { logout } from "@/store/slices/authSlice";
import { removeItem as removeFromWishlist, selectWishlistItems } from "@/store/slices/wishlistSlice";
import { addItem as addToCart } from "@/store/slices/cartSlice";
import { setCartDrawerOpen } from "@/store/slices/uiSlice";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import type { Product } from "@/types";

type TabType =
  | "overview"
  | "saved-payments"
  | "address-book"
  | "wishlist"
  | "order-history"
  | "track-order"
  | "gift-card";

interface PaymentMethod {
  id: string;
  type: "card" | "upi" | "netbanking";
  bank: string;
  title: string;
  number: string;
  holder: string;
  expiry?: string;
  brand: string;
  isDefault?: boolean;
}

interface AddressItem {
  id: string;
  name: string;
  phone: string;
  street: string;
  locality: string;
  city: string;
  state: string;
  pincode: string;
  type: "Home" | "Work" | "Other";
  isDefault: boolean;
}

export default function AccountClient() {
  const dispatch = useAppDispatch();
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);
  const wishlistItems = useAppSelector(selectWishlistItems);

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart({ product, quantity: 1 }));
    dispatch(setCartDrawerOpen(true));
  };

  const handleRemoveFromWishlist = (productId: string) => {
    dispatch(removeFromWishlist(productId));
  };

  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<TabType>("overview");

  useEffect(() => {
    const tabParam = searchParams.get("tab") as TabType | null;
    if (tabParam && ["overview", "saved-payments", "address-book", "wishlist", "order-history", "gift-card"].includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [searchParams]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // Editable User Information State
  const [userInfo, setUserInfo] = useState({
    name: user?.name || "Parthik Bhilvala",
    dob: "15/08/1995",
    anniversary: "24/10/2020",
    phone: "+91 6353147401",
    email: user?.email || "parthikbb@gmail.com",
    neuCoins: "250",
  });

  const [editForm, setEditForm] = useState({ ...userInfo });
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Saved Payments Methods State
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);

  const [showAddPaymentForm, setShowAddPaymentForm] = useState(true);
  const [newPaymentType, setNewPaymentType] = useState<"card" | "upi" | "netbanking">("card");
  const [newPaymentForm, setNewPaymentForm] = useState({
    cardNumber: "",
    cardHolder: user?.name || "Parthik Bhilvala",
    expiryMonth: "08",
    expiryYear: "2029",
    bankName: "ICICI Bank Platinum Card",
    upiId: "",
    setAsDefault: true,
  });

  // Address Book State
  const [addresses, setAddresses] = useState<AddressItem[]>([]);

  const [showAddressForm, setShowAddressForm] = useState(true);
  const [editingAddressId, setEditingAddressId] = useState<string | null>(null);
  const [addressForm, setAddressForm] = useState({
    name: user?.name || "Parthik Bhilvala",
    phone: "+91 6353147401",
    street: "",
    locality: "",
    city: "",
    state: "",
    pincode: "",
    type: "Home" as "Home" | "Work" | "Other",
    isDefault: true,
  });

  // Gift Card State
  const [giftCardForm, setGiftCardForm] = useState({
    cardNumber: "",
    pin: "",
  });
  const [showGiftCardPin, setShowGiftCardPin] = useState(false);
  const [giftCardCheckResult, setGiftCardCheckResult] = useState<{
    success: boolean;
    balance?: number;
    message?: string;
  } | null>(null);

  const handleCheckGiftCardBalance = (e: React.FormEvent) => {
    e.preventDefault();
    if (!giftCardForm.cardNumber || !giftCardForm.pin) {
      setGiftCardCheckResult({
        success: false,
        message: "Please enter both 16-digit Gift Card Number and 6-digit PIN.",
      });
      return;
    }
    setGiftCardCheckResult({
      success: true,
      balance: 5000,
      message: "Gift Card Verified Successfully!",
    });
  };

  const handleSaveDetails = (e: React.FormEvent) => {
    e.preventDefault();
    setUserInfo({ ...editForm });
    setIsEditing(false);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const handleAddPaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let newPm: PaymentMethod;
    if (newPaymentType === "card") {
      const cleanNum = newPaymentForm.cardNumber.replace(/\s/g, "");
      const last4 = cleanNum.slice(-4) || "8821";
      newPm = {
        id: `pm-${Date.now()}`,
        type: "card",
        bank: newPaymentForm.bankName || "Credit Card",
        title: "Debit/Credit Card",
        number: `•••• •••• •••• ${last4}`,
        holder: newPaymentForm.cardHolder.toUpperCase(),
        expiry: `${newPaymentForm.expiryMonth}/${newPaymentForm.expiryYear.slice(-2)}`,
        brand: "Mastercard",
        isDefault: newPaymentForm.setAsDefault,
      };
    } else if (newPaymentType === "upi") {
      newPm = {
        id: `pm-${Date.now()}`,
        type: "upi",
        bank: "UPI AutoPay",
        title: "UPI Virtual Handle",
        number: newPaymentForm.upiId || "parthik@upi",
        holder: newPaymentForm.cardHolder,
        brand: "UPI",
        isDefault: newPaymentForm.setAsDefault,
      };
    } else {
      newPm = {
        id: `pm-${Date.now()}`,
        type: "netbanking",
        bank: newPaymentForm.bankName || "State Bank of India",
        title: "NetBanking",
        number: "Linked Savings Account",
        holder: newPaymentForm.cardHolder,
        brand: "NetBanking",
        isDefault: newPaymentForm.setAsDefault,
      };
    }

    if (newPm.isDefault) {
      setPaymentMethods((prev) => [...prev.map((pm) => ({ ...pm, isDefault: false })), newPm]);
    } else {
      setPaymentMethods((prev) => [...prev, newPm]);
    }

    setShowAddPaymentForm(false);
    setNewPaymentForm({
      cardNumber: "",
      cardHolder: user?.name || "Parthik Bhilvala",
      expiryMonth: "08",
      expiryYear: "2029",
      bankName: "ICICI Bank Platinum Card",
      upiId: "",
      setAsDefault: false,
    });
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const handleRemovePayment = (id: string) => {
    setPaymentMethods((prev) => {
      const next = prev.filter((pm) => pm.id !== id);
      if (next.length === 0) {
        setShowAddPaymentForm(true);
      }
      return next;
    });
  };

  const handleSetDefaultPayment = (id: string) => {
    setPaymentMethods((prev) =>
      prev.map((pm) => ({
        ...pm,
        isDefault: pm.id === id,
      }))
    );
  };

  const handleOpenAddAddress = () => {
    setEditingAddressId(null);
    setAddressForm({
      name: user?.name || "Parthik Bhilvala",
      phone: "+91 6353147401",
      street: "",
      locality: "",
      city: "",
      state: "",
      pincode: "",
      type: "Home",
      isDefault: addresses.length === 0,
    });
    setShowAddressForm(true);
  };

  const handleOpenEditAddress = (addr: AddressItem) => {
    setEditingAddressId(addr.id);
    setAddressForm({
      name: addr.name,
      phone: addr.phone,
      street: addr.street,
      locality: addr.locality,
      city: addr.city,
      state: addr.state,
      pincode: addr.pincode,
      type: addr.type,
      isDefault: addr.isDefault,
    });
    setShowAddressForm(true);
  };

  const handleSaveAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingAddressId) {
      setAddresses((prev) =>
        prev.map((a) => {
          if (a.id === editingAddressId) {
            return {
              ...a,
              ...addressForm,
            };
          }
          return addressForm.isDefault ? { ...a, isDefault: false } : a;
        })
      );
    } else {
      const newAddr: AddressItem = {
        id: `addr-${Date.now()}`,
        ...addressForm,
      };
      if (newAddr.isDefault) {
        setAddresses((prev) => [...prev.map((a) => ({ ...a, isDefault: false })), newAddr]);
      } else {
        setAddresses((prev) => [...prev, newAddr]);
      }
    }
    setShowAddressForm(false);
    setEditingAddressId(null);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const handleRemoveAddress = (id: string) => {
    setAddresses((prev) => {
      const next = prev.filter((a) => a.id !== id);
      if (next.length === 0) {
        setShowAddressForm(true);
      }
      return next;
    });
  };

  const handleSetDefaultAddress = (id: string) => {
    setAddresses((prev) =>
      prev.map((a) => ({
        ...a,
        isDefault: a.id === id,
      }))
    );
  };

  useEffect(() => {
    const tabParam = searchParams.get("tab") as TabType | null;
    if (tabParam && ["overview", "saved-payments", "address-book", "wishlist", "order-history", "track-order", "gift-card"].includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [searchParams]);

  const navItems: { id: TabType; label: string; icon: string }[] = [
    { id: "overview", label: "Overview", icon: "👤" },
    { id: "saved-payments", label: "Saved Payments Method", icon: "💳" },
    { id: "address-book", label: "Address Book", icon: "📍" },
    { id: "wishlist", label: "Wishlist", icon: "🖤" },
    { id: "order-history", label: "Order History", icon: "📜" },
    { id: "track-order", label: "Track Order", icon: "📦" },
    { id: "gift-card", label: "Gift Card Balance", icon: "🎁" },
  ];

  return (
    <div className="min-h-screen bg-surface py-10 sm:py-14 text-ink">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* BREADCRUMB & HEADER */}
        <div className="mb-8 pb-4 border-b border-border">
          <div className="flex items-center gap-2 text-caption text-muted mb-2">
            <Link href="/" className="hover:text-wine transition-colors">Home</Link>
            <span>/</span>
            <span className="text-wine font-medium">My Account</span>
          </div>
          <h1 className="font-display text-h2 text-wine font-semibold tracking-wide">
            My Account
          </h1>
        </div>

        {/* MOBILE MENU TOGGLE BAR & LEFT SLIDE-OUT DRAWER (lg:hidden) */}
        <div className="lg:hidden mb-6">
          {/* Active Tab Bar with Menu Button */}
          <div className="flex items-center justify-between p-3.5 bg-surface rounded-2xl border border-wine/30 shadow-2xs">
            <div className="flex items-center gap-3">
              <span className="text-h4">{navItems.find((n) => n.id === activeTab)?.icon}</span>
              <div>
                <span className="text-[10px] text-muted uppercase font-bold tracking-wider block">Current Section</span>
                <span className="font-display font-semibold text-wine text-small">
                  {navItems.find((n) => n.id === activeTab)?.label}
                </span>
              </div>
            </div>

            {/* Click to open left menu drawer */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="px-3.5 py-2 bg-[#80222F] text-white rounded-xl text-caption font-semibold hover:bg-wine-dark transition-all cursor-pointer flex items-center gap-1.5 shadow-2xs active:scale-95"
            >
              <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
              <span>Menu</span>
            </button>
          </div>

          {/* LEFT SLIDE-OUT MENU DRAWER */}
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <div
                className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              />

              {/* Left Drawer Panel */}
              <div className="fixed left-0 top-0 bottom-0 z-50 w-[290px] bg-surface shadow-2xl flex flex-col animate-in slide-in-from-left duration-300 overflow-y-auto">
                {/* Drawer Header */}
                <div className="p-4 px-5 bg-surface border-b border-border/60 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-body">🎛️</span>
                    <span className="font-display font-semibold text-wine text-body">
                      Account Navigation
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label="Close menu"
                    className="w-8 h-8 rounded-full bg-wine/10 text-wine hover:bg-wine hover:text-white flex items-center justify-center font-bold text-small transition-colors cursor-pointer"
                  >
                    &times;
                  </button>
                </div>

                {/* Drawer Navigation List */}
                <div className="p-4 space-y-4 flex-1">
                  <nav className="space-y-1.5" aria-label="Mobile Account Navigation">
                    {navItems.map((item) => {
                      const isActive = activeTab === item.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => {
                            setActiveTab(item.id);
                            setIsMobileMenuOpen(false);
                          }}
                          className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left text-caption font-semibold transition-all duration-150 cursor-pointer ${
                            isActive
                              ? "bg-[#80222F] text-white shadow-xs"
                              : "text-ink/80 hover:bg-wine/5 hover:text-wine bg-neutral-50/50"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-body">{item.icon}</span>
                            <span>{item.label}</span>
                          </div>
                          <span className={isActive ? "text-white" : "text-muted"}>&rsaquo;</span>
                        </button>
                      );
                    })}
                  </nav>

                  {/* CUSTOMER SERVICE SUPPORT HELP CARD */}
                  <div className="bg-wine/5 rounded-xl border border-wine/15 p-4 text-caption space-y-2 leading-relaxed">
                    <h4 className="font-display font-semibold text-wine text-caption flex items-center gap-1.5">
                      💬 Customer Support
                    </h4>
                    <p className="text-[11px] text-ink/80">
                      Need help? Reach our luxury client concierge:
                    </p>
                    <div className="space-y-0.5 text-[11px] font-medium text-ink">
                      <p>Toll Free: <span className="text-wine font-semibold">1800-266-0123</span></p>
                    </div>
                  </div>

                  {/* LOG OUT BUTTON */}
                  {isAuthenticated && (
                    <button
                      type="button"
                      onClick={() => {
                        dispatch(logout());
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full py-2.5 bg-red-50 hover:bg-red-100 text-red-700 rounded-xl border border-red-200 text-caption font-semibold transition-colors cursor-pointer"
                    >
                      Log Out of Account
                    </button>
                  )}
                </div>
              </div>
            </>
          )}
        </div>

        {/* 2-COLUMN DASHBOARD LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT SIDEBAR NAVIGATION (Desktop: 4 Cols, Hidden on Mobile) */}
          <div className="hidden lg:block lg:col-span-4 space-y-6">
            <div className="bg-surface rounded-2xl border border-border/80 shadow-xs overflow-hidden">
              <nav className="divide-y divide-border/40" aria-label="Account Tabs">
                {navItems.map((item) => {
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center justify-between px-5 py-3.5 text-left text-body font-medium transition-all duration-150 cursor-pointer ${
                        isActive
                          ? "bg-[#80222F] text-white font-semibold shadow-xs"
                          : "text-ink/80 hover:bg-wine/5 hover:text-wine"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-body">{item.icon}</span>
                        <span>{item.label}</span>
                      </div>
                      <span className={isActive ? "text-white" : "text-muted"}>&rsaquo;</span>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* CUSTOMER SERVICE SUPPORT HELP CARD */}
            <div className="bg-wine/5 rounded-2xl border border-wine/15 p-5 text-caption space-y-3 leading-relaxed">
              <h4 className="font-display font-semibold text-wine text-small flex items-center gap-2">
                💬 Need Assistance?
              </h4>
              <p className="text-ink/80">
                If you have any questions or issues with an order, please contact our Customer Service team at:
              </p>
              <div className="space-y-1 font-medium text-ink">
                <p>Email: <a href="mailto:customercare@luxe-jewels.com" className="text-wine underline font-semibold">customercare@luxe-jewels.com</a></p>
                <p>Toll Free: <span className="text-wine font-semibold">1800-266-0123</span></p>
              </div>
              <p className="text-[11px] text-muted pt-1 border-t border-wine/10">
                This toll free number is applicable for domestic and international luxury shipments.
              </p>
            </div>

            {/* LOG OUT BUTTON */}
            {isAuthenticated && (
              <button
                type="button"
                onClick={() => dispatch(logout())}
                className="w-full py-3 bg-red-50 hover:bg-red-100 text-red-700 rounded-2xl border border-red-200 text-body font-semibold transition-colors cursor-pointer"
              >
                Log Out of Account
              </button>
            )}
          </div>

          {/* RIGHT MAIN CONTENT PANEL (8 Cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* SAVE SUCCESS ALERT */}
            {saveSuccess && (
              <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl text-caption font-medium flex items-center justify-between animate-in fade-in duration-200">
                <span>✓ Changes updated successfully!</span>
                <button type="button" onClick={() => setSaveSuccess(false)} className="text-emerald-800 font-bold text-body hover:text-emerald-900">&times;</button>
              </div>
            )}

            {/* 1. OVERVIEW TAB */}
            {activeTab === "overview" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="font-display text-h3 font-semibold text-wine">
                    Account Overview
                  </h2>
                </div>

                {/* EDIT FORM MODE */}
                {isEditing ? (
                  <form onSubmit={handleSaveDetails} className="bg-surface rounded-2xl border border-border p-6 shadow-sm space-y-5">
                    <h3 className="font-display text-h5 font-semibold text-wine pb-3 border-b border-border">
                      Edit Personal Information
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        label="Full Name"
                        variant="light"
                        value={editForm.name}
                        onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                        required
                      />
                      <Input
                        label="Email Address"
                        type="email"
                        variant="light"
                        value={editForm.email}
                        onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                        required
                      />
                      <Input
                        label="Phone Number"
                        variant="light"
                        value={editForm.phone}
                        onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                      />
                      <Input
                        label="Date of Birth"
                        variant="light"
                        value={editForm.dob}
                        onChange={(e) => setEditForm({ ...editForm, dob: e.target.value })}
                        placeholder="DD/MM/YYYY"
                      />
                      <Input
                        label="Anniversary Date"
                        variant="light"
                        value={editForm.anniversary}
                        onChange={(e) => setEditForm({ ...editForm, anniversary: e.target.value })}
                        placeholder="DD/MM/YYYY"
                      />
                    </div>

                    <div className="flex items-center justify-end gap-3 pt-4 border-t border-border">
                      <Button
                        type="button"
                        variant="border"
                        colorTheme="wine"
                        size="xs"
                        rounded="lg"
                        onClick={() => setIsEditing(false)}
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        variant="fill"
                        colorTheme="wine"
                        size="sm"
                        rounded="lg"
                      >
                        Save Changes
                      </Button>
                    </div>
                  </form>
                ) : (
                  /* DISPLAY CARD (MATCHING SCREENSHOT 2) */
                  <div className="bg-surface rounded-2xl border border-wine/30 shadow-xs overflow-hidden">
                    {/* Pink/Wine Tint Header */}
                    <div className="bg-[#FAF0F2] px-6 py-3.5 border-b border-wine/20 flex items-center justify-between">
                      <span className="font-display font-semibold text-wine text-small">
                        Personal Information
                      </span>
                      <button
                        type="button"
                        onClick={() => setIsEditing(true)}
                        className="px-3 py-1 border border-wine text-wine bg-white hover:bg-wine hover:text-white rounded-lg text-caption font-semibold transition-all cursor-pointer shadow-2xs"
                      >
                        Edit Details
                      </button>
                    </div>

                    {/* Table View of Personal Details */}
                    <div className="p-6 divide-y divide-border/40 text-body">
                      <div className="grid grid-cols-12 py-3">
                        <span className="col-span-4 font-semibold text-ink">Name</span>
                        <span className="col-span-1 text-muted">:</span>
                        <span className="col-span-7 font-semibold text-ink">{userInfo.name}</span>
                      </div>
                      <div className="grid grid-cols-12 py-3">
                        <span className="col-span-4 font-semibold text-ink">Date of birth</span>
                        <span className="col-span-1 text-muted">:</span>
                        <span className="col-span-7 text-ink/80">{userInfo.dob || "-"}</span>
                      </div>
                      <div className="grid grid-cols-12 py-3">
                        <span className="col-span-4 font-semibold text-ink">Anniversary date</span>
                        <span className="col-span-1 text-muted">:</span>
                        <span className="col-span-7 text-ink/80">{userInfo.anniversary || "-"}</span>
                      </div>
                      <div className="grid grid-cols-12 py-3">
                        <span className="col-span-4 font-semibold text-ink">Phone number</span>
                        <span className="col-span-1 text-muted">:</span>
                        <span className="col-span-7 font-semibold text-ink">{userInfo.phone}</span>
                      </div>
                      <div className="grid grid-cols-12 py-3">
                        <span className="col-span-4 font-semibold text-ink">Email address</span>
                        <span className="col-span-1 text-muted">:</span>
                        <span className="col-span-7 font-semibold text-ink">{userInfo.email}</span>
                      </div>
                      <div className="grid grid-cols-12 py-3">
                        <span className="col-span-4 font-semibold text-ink">NeuCoins</span>
                        <span className="col-span-1 text-muted">:</span>
                        <span className="col-span-7 font-bold text-wine">{userInfo.neuCoins}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* 2. SAVED PAYMENTS METHOD TAB */}
            {activeTab === "saved-payments" && (
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h2 className="font-display text-h3 font-semibold text-wine">
                      Saved Payments Method
                    </h2>
                    <p className="text-caption text-muted mt-0.5">Manage your saved credit/debit cards, UPI handles, and payment options for faster checkout.</p>
                  </div>
                  {!showAddPaymentForm && (
                    <button
                      type="button"
                      onClick={() => setShowAddPaymentForm(true)}
                      className="px-4 py-2 bg-wine text-white rounded-xl text-caption font-semibold hover:bg-wine-dark transition-all cursor-pointer shadow-xs flex items-center gap-1.5"
                    >
                      <span>+</span> Add New Payment Method
                    </button>
                  )}
                </div>

                {/* ADD PAYMENT METHOD FORM */}
                {showAddPaymentForm ? (
                  <form onSubmit={handleAddPaymentSubmit} className="bg-surface rounded-2xl border border-wine/30 p-6 shadow-md space-y-5 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between pb-3 border-b border-border">
                      <h3 className="font-display text-h5 font-semibold text-wine">Add New Payment Method</h3>
                    </div>

                    {/* Payment Type Selection Tabs */}
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => setNewPaymentType("card")}
                        className={`py-2.5 px-3 rounded-xl text-body font-semibold border transition-all cursor-pointer ${
                          newPaymentType === "card"
                            ? "bg-wine text-white border-wine shadow-xs"
                            : "bg-surface text-ink/80 border-border hover:border-wine/40 hover:bg-wine/5"
                        }`}
                      >
                        💳 Card
                      </button>
                      <button
                        type="button"
                        onClick={() => setNewPaymentType("upi")}
                        className={`py-2.5 px-3 rounded-xl text-body font-semibold border transition-all cursor-pointer ${
                          newPaymentType === "upi"
                            ? "bg-wine text-white border-wine shadow-xs"
                            : "bg-surface text-ink/80 border-border hover:border-wine/40 hover:bg-wine/5"
                        }`}
                      >
                        📱 UPI ID
                      </button>
                      <button
                        type="button"
                        onClick={() => setNewPaymentType("netbanking")}
                        className={`py-2.5 px-3 rounded-xl text-body font-semibold border transition-all cursor-pointer ${
                          newPaymentType === "netbanking"
                            ? "bg-wine text-white border-wine shadow-xs"
                            : "bg-surface text-ink/80 border-border hover:border-wine/40 hover:bg-wine/5"
                        }`}
                      >
                        🏦 NetBanking
                      </button>
                    </div>

                    {/* Card Form */}
                    {newPaymentType === "card" && (
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="card-number-input" className="block text-caption font-semibold text-ink mb-1.5">Card Number</label>
                          <input
                            id="card-number-input"
                            type="text"
                            value={newPaymentForm.cardNumber}
                            onChange={(e) => setNewPaymentForm({ ...newPaymentForm, cardNumber: e.target.value })}
                            placeholder="4532 •••• •••• 8821"
                            maxLength={19}
                            className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-surface text-body text-ink placeholder:text-muted focus:outline-none focus:border-wine focus:ring-1 focus:ring-wine/20 transition-all duration-150 font-mono"
                            required
                          />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="card-holder-input" className="block text-caption font-semibold text-ink mb-1.5">Cardholder Name</label>
                            <input
                              id="card-holder-input"
                              type="text"
                              value={newPaymentForm.cardHolder}
                              onChange={(e) => setNewPaymentForm({ ...newPaymentForm, cardHolder: e.target.value })}
                              placeholder="Name on card"
                              className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-surface text-body text-ink placeholder:text-muted focus:outline-none focus:border-wine focus:ring-1 focus:ring-wine/20 transition-all duration-150 uppercase"
                              required
                            />
                          </div>
                          <div>
                            <label htmlFor="bank-name-input" className="block text-caption font-semibold text-ink mb-1.5">Bank Name / Label</label>
                            <input
                              id="bank-name-input"
                              type="text"
                              value={newPaymentForm.bankName}
                              onChange={(e) => setNewPaymentForm({ ...newPaymentForm, bankName: e.target.value })}
                              placeholder="e.g. HDFC Bank, ICICI Bank"
                              className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-surface text-body text-ink placeholder:text-muted focus:outline-none focus:border-wine focus:ring-1 focus:ring-wine/20 transition-all duration-150"
                              required
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="card-expiry-month" className="block text-caption font-semibold text-ink mb-1.5">Expiry Month</label>
                            <select
                              id="card-expiry-month"
                              value={newPaymentForm.expiryMonth}
                              onChange={(e) => setNewPaymentForm({ ...newPaymentForm, expiryMonth: e.target.value })}
                              className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-surface text-body text-ink focus:outline-none focus:border-wine focus:ring-1 focus:ring-wine/20 transition-all duration-150 cursor-pointer"
                            >
                              {Array.from({ length: 12 }, (_, i) => {
                                const m = (i + 1).toString().padStart(2, "0");
                                return <option key={m} value={m}>{m}</option>;
                              })}
                            </select>
                          </div>
                          <div>
                            <label htmlFor="card-expiry-year" className="block text-caption font-semibold text-ink mb-1.5">Expiry Year</label>
                            <select
                              id="card-expiry-year"
                              value={newPaymentForm.expiryYear}
                              onChange={(e) => setNewPaymentForm({ ...newPaymentForm, expiryYear: e.target.value })}
                              className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-surface text-body text-ink focus:outline-none focus:border-wine focus:ring-1 focus:ring-wine/20 transition-all duration-150 cursor-pointer"
                            >
                              {Array.from({ length: 10 }, (_, i) => {
                                const y = (2026 + i).toString();
                                return <option key={y} value={y}>{y}</option>;
                              })}
                            </select>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* UPI Form */}
                    {newPaymentType === "upi" && (
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="upi-id-input" className="block text-caption font-semibold text-ink mb-1.5">Virtual Payment Address (UPI ID)</label>
                          <input
                            id="upi-id-input"
                            type="text"
                            value={newPaymentForm.upiId}
                            onChange={(e) => setNewPaymentForm({ ...newPaymentForm, upiId: e.target.value })}
                            placeholder="e.g. user@okaxis / mobile@paytm"
                            className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-surface text-body text-ink placeholder:text-muted focus:outline-none focus:border-wine focus:ring-1 focus:ring-wine/20 transition-all duration-150"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="upi-name-input" className="block text-caption font-semibold text-ink mb-1.5">Account Holder Name</label>
                          <input
                            id="upi-name-input"
                            type="text"
                            value={newPaymentForm.cardHolder}
                            onChange={(e) => setNewPaymentForm({ ...newPaymentForm, cardHolder: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-surface text-body text-ink placeholder:text-muted focus:outline-none focus:border-wine focus:ring-1 focus:ring-wine/20 transition-all duration-150"
                            required
                          />
                        </div>
                      </div>
                    )}

                    {/* NetBanking Form */}
                    {newPaymentType === "netbanking" && (
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="netbank-select" className="block text-caption font-semibold text-ink mb-1.5">Select Bank</label>
                          <select
                            id="netbank-select"
                            value={newPaymentForm.bankName}
                            onChange={(e) => setNewPaymentForm({ ...newPaymentForm, bankName: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-surface text-body text-ink focus:outline-none focus:border-wine focus:ring-1 focus:ring-wine/20 transition-all duration-150 cursor-pointer"
                          >
                            <option value="State Bank of India">State Bank of India (SBI)</option>
                            <option value="HDFC Bank">HDFC Bank</option>
                            <option value="ICICI Bank">ICICI Bank</option>
                            <option value="Axis Bank">Axis Bank</option>
                            <option value="Kotak Mahindra Bank">Kotak Mahindra Bank</option>
                          </select>
                        </div>
                      </div>
                    )}

                    {/* Default Checkbox */}
                    <div className="flex items-center gap-2 pt-1">
                      <input
                        id="set-as-default-pm"
                        type="checkbox"
                        checked={newPaymentForm.setAsDefault}
                        onChange={(e) => setNewPaymentForm({ ...newPaymentForm, setAsDefault: e.target.checked })}
                        className="rounded border-border text-wine focus:ring-wine accent-wine w-4 h-4 cursor-pointer"
                      />
                      <label htmlFor="set-as-default-pm" className="text-caption text-ink cursor-pointer font-medium">Set as default payment method for fast checkout</label>
                    </div>

                    {/* Submit Actions */}
                    <div className="flex items-center justify-end gap-3 pt-3 border-t border-border">
                      {paymentMethods.length > 0 && (
                        <button
                          type="button"
                          onClick={() => setShowAddPaymentForm(false)}
                          className="px-4 py-2 border border-border text-caption font-medium rounded-xl hover:bg-wine/5 transition-colors cursor-pointer"
                        >
                          Cancel
                        </button>
                      )}
                      <button
                        type="submit"
                        className="px-5 py-2.5 bg-wine text-white text-body font-semibold rounded-xl hover:bg-wine-dark transition-all cursor-pointer shadow-xs"
                      >
                        Save Payment Method
                      </button>
                    </div>
                  </form>
                ) : (
                  /* SAVED PAYMENT METHODS CARDS GRID */
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {paymentMethods.map((pm) => (
                      <div
                        key={pm.id}
                        className={`rounded-2xl p-5 shadow-sm relative overflow-hidden flex flex-col justify-between space-y-4 border transition-all ${
                          pm.type === "card"
                            ? "bg-gradient-to-r from-slate-900 via-slate-800 to-zinc-900 text-white border-slate-700"
                            : "bg-surface border-wine/25 text-ink hover:border-wine/40"
                        }`}
                      >
                        {/* Top Row: Bank Label & Default Badge */}
                        <div className="flex items-center justify-between">
                          <span className={`text-caption font-semibold uppercase tracking-wider ${pm.type === "card" ? "text-slate-200" : "text-wine"}`}>
                            {pm.bank}
                          </span>
                          <div className="flex items-center gap-2">
                            {pm.isDefault && (
                              <span className="px-2 py-0.5 rounded-full bg-gold/20 text-gold-dark border border-gold/30 text-[10px] font-bold uppercase tracking-wider">
                                Default
                              </span>
                            )}
                            <span className={`text-caption font-bold ${pm.type === "card" ? "text-white" : "text-ink"}`}>
                              {pm.brand}
                            </span>
                          </div>
                        </div>

                        {/* Card / UPI Number */}
                        <div>
                          <p className={`font-mono text-body tracking-widest ${pm.type === "card" ? "text-white" : "text-wine font-semibold"}`}>
                            {pm.number}
                          </p>
                          <span className="text-[11px] text-muted block mt-0.5 font-medium">{pm.title}</span>
                        </div>

                        {/* Cardholder & Actions Row */}
                        <div className={`pt-3 border-t flex items-center justify-between text-caption ${pm.type === "card" ? "border-slate-700/60" : "border-wine/15"}`}>
                          <div>
                            <span className={`block text-[10px] uppercase font-semibold ${pm.type === "card" ? "text-slate-400" : "text-muted"}`}>Holder Name</span>
                            <span className="font-semibold">{pm.holder}</span>
                          </div>
                          {pm.expiry && (
                            <div>
                              <span className={`block text-[10px] uppercase font-semibold ${pm.type === "card" ? "text-slate-400" : "text-muted"}`}>Expires</span>
                              <span className="font-mono font-medium">{pm.expiry}</span>
                            </div>
                          )}
                          <div className="flex items-center gap-2">
                            {!pm.isDefault && (
                              <button
                                type="button"
                                onClick={() => handleSetDefaultPayment(pm.id)}
                                className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all cursor-pointer ${
                                  pm.type === "card"
                                    ? "bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-600"
                                    : "bg-white border border-wine/30 text-wine hover:bg-wine hover:text-white"
                                }`}
                              >
                                Set Default
                              </button>
                            )}
                            <button
                              type="button"
                              onClick={() => handleRemovePayment(pm.id)}
                              className={`px-3 py-1.5 rounded-full text-caption font-medium transition-all duration-150 cursor-pointer shadow-2xs flex items-center gap-1.5 ${
                                pm.type === "card"
                                  ? "bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700 hover:border-slate-500"
                                  : "bg-white border border-gray-300 hover:border-gray-400 text-gray-600 hover:text-gray-900"
                              }`}
                              title="Remove Payment Method"
                            >
                              <svg className="w-3.5 h-3.5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6" />
                              </svg>
                              <span>Remove</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* 3. ADDRESS BOOK TAB */}
            {activeTab === "address-book" && (
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h2 className="font-display text-h3 font-semibold text-wine">
                      Address Book
                    </h2>
                    <p className="text-caption text-muted mt-0.5">Manage your home, office, and luxury gift delivery addresses.</p>
                  </div>
                  {!showAddressForm && (
                    <button
                      type="button"
                      onClick={handleOpenAddAddress}
                      className="px-4 py-2 bg-wine text-white rounded-xl text-caption font-semibold hover:bg-wine-dark transition-all cursor-pointer shadow-xs flex items-center gap-1.5"
                    >
                      <span>+</span> Add New Address
                    </button>
                  )}
                </div>

                {/* ADD / EDIT ADDRESS FORM */}
                {showAddressForm ? (
                  <form onSubmit={handleSaveAddressSubmit} className="bg-surface rounded-2xl border border-wine/30 p-6 shadow-md space-y-5 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between pb-3 border-b border-border">
                      <h3 className="font-display text-h5 font-semibold text-wine">
                        {editingAddressId ? "Edit Address Details" : "Add New Delivery Address"}
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="address-form-name" className="block text-caption font-semibold text-ink mb-1.5">Full Name</label>
                        <input
                          id="address-form-name"
                          type="text"
                          value={addressForm.name}
                          onChange={(e) => setAddressForm({ ...addressForm, name: e.target.value })}
                          placeholder="Recipient Full Name"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-surface text-body text-ink placeholder:text-muted focus:outline-none focus:border-wine focus:ring-1 focus:ring-wine/20 transition-all duration-150"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="address-form-phone" className="block text-caption font-semibold text-ink mb-1.5">Phone Number</label>
                        <input
                          id="address-form-phone"
                          type="text"
                          value={addressForm.phone}
                          onChange={(e) => setAddressForm({ ...addressForm, phone: e.target.value })}
                          placeholder="+91 9876543210"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-surface text-body text-ink placeholder:text-muted focus:outline-none focus:border-wine focus:ring-1 focus:ring-wine/20 transition-all duration-150"
                          required
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="address-form-street" className="block text-caption font-semibold text-ink mb-1.5">Flat / House No / Building / Street</label>
                        <input
                          id="address-form-street"
                          type="text"
                          value={addressForm.street}
                          onChange={(e) => setAddressForm({ ...addressForm, street: e.target.value })}
                          placeholder="e.g. Flat 302, Luxe Residency, MG Road"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-surface text-body text-ink placeholder:text-muted focus:outline-none focus:border-wine focus:ring-1 focus:ring-wine/20 transition-all duration-150"
                          required
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="address-form-locality" className="block text-caption font-semibold text-ink mb-1.5">Area / Locality / Landmark</label>
                        <input
                          id="address-form-locality"
                          type="text"
                          value={addressForm.locality}
                          onChange={(e) => setAddressForm({ ...addressForm, locality: e.target.value })}
                          placeholder="e.g. Near Trinity Metro Station"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-surface text-body text-ink placeholder:text-muted focus:outline-none focus:border-wine focus:ring-1 focus:ring-wine/20 transition-all duration-150"
                        />
                      </div>
                      <div>
                        <label htmlFor="address-form-city" className="block text-caption font-semibold text-ink mb-1.5">City</label>
                        <input
                          id="address-form-city"
                          type="text"
                          value={addressForm.city}
                          onChange={(e) => setAddressForm({ ...addressForm, city: e.target.value })}
                          placeholder="Bengaluru"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-surface text-body text-ink placeholder:text-muted focus:outline-none focus:border-wine focus:ring-1 focus:ring-wine/20 transition-all duration-150"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="address-form-state" className="block text-caption font-semibold text-ink mb-1.5">State</label>
                        <input
                          id="address-form-state"
                          type="text"
                          value={addressForm.state}
                          onChange={(e) => setAddressForm({ ...addressForm, state: e.target.value })}
                          placeholder="Karnataka"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-surface text-body text-ink placeholder:text-muted focus:outline-none focus:border-wine focus:ring-1 focus:ring-wine/20 transition-all duration-150"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="address-form-pincode" className="block text-caption font-semibold text-ink mb-1.5">Pincode</label>
                        <input
                          id="address-form-pincode"
                          type="text"
                          value={addressForm.pincode}
                          onChange={(e) => setAddressForm({ ...addressForm, pincode: e.target.value })}
                          placeholder="560001"
                          maxLength={6}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-surface text-body text-ink placeholder:text-muted focus:outline-none focus:border-wine focus:ring-1 focus:ring-wine/20 transition-all duration-150"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-caption font-semibold text-ink mb-1.5">Address Type</label>
                        <div className="flex items-center gap-3 pt-1">
                          {(["Home", "Work", "Other"] as const).map((t) => (
                            <label key={t} className="flex items-center gap-1.5 text-caption text-ink cursor-pointer font-medium">
                              <input
                                type="radio"
                                name="address-type-radio"
                                checked={addressForm.type === t}
                                onChange={() => setAddressForm({ ...addressForm, type: t })}
                                className="accent-wine cursor-pointer w-4 h-4"
                              />
                              <span>{t}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Default Address Checkbox */}
                    <div className="flex items-center gap-2 pt-1">
                      <input
                        id="set-as-default-address"
                        type="checkbox"
                        checked={addressForm.isDefault}
                        onChange={(e) => setAddressForm({ ...addressForm, isDefault: e.target.checked })}
                        className="rounded border-border text-wine focus:ring-wine accent-wine w-4 h-4 cursor-pointer"
                      />
                      <label htmlFor="set-as-default-address" className="text-caption text-ink cursor-pointer font-medium">Set as default shipping address</label>
                    </div>

                    {/* Submit Actions */}
                    <div className="flex items-center justify-end gap-3 pt-3 border-t border-border">
                      {addresses.length > 0 && (
                        <button
                          type="button"
                          onClick={() => setShowAddressForm(false)}
                          className="px-4 py-2 border border-border text-caption font-medium rounded-xl hover:bg-wine/5 transition-colors cursor-pointer"
                        >
                          Cancel
                        </button>
                      )}
                      <button
                        type="submit"
                        className="px-5 py-2.5 bg-wine text-white text-body font-semibold rounded-xl hover:bg-wine-dark transition-all cursor-pointer shadow-xs"
                      >
                        Save Address
                      </button>
                    </div>
                  </form>
                ) : (
                  /* SAVED ADDRESSES GRID */
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {addresses.map((addr) => (
                      <div
                        key={addr.id}
                        className={`rounded-2xl p-5 bg-surface shadow-xs space-y-3 relative border transition-all ${
                          addr.isDefault ? "border-wine/50 bg-wine/5" : "border-border hover:border-wine/30"
                        }`}
                      >
                        {/* Header Badges */}
                        <div className="flex items-center justify-between">
                          <span className="px-2.5 py-0.5 bg-wine/10 text-wine rounded-full text-[10px] font-bold uppercase tracking-wider">
                            {addr.type}
                          </span>
                          {addr.isDefault && (
                            <span className="px-2.5 py-0.5 bg-gold/20 text-gold-dark border border-gold/30 text-[10px] font-bold uppercase tracking-wider rounded-full">
                              Default Shipping Address
                            </span>
                          )}
                        </div>

                        {/* Address Details */}
                        <div>
                          <h3 className="font-semibold text-ink text-small">{addr.name}</h3>
                          <p className="text-caption text-muted leading-relaxed mt-1">
                            {addr.street}, {addr.locality ? `${addr.locality}, ` : ""}{addr.city}, {addr.state} - {addr.pincode}
                          </p>
                          <p className="text-caption text-ink font-medium mt-1">Phone: {addr.phone}</p>
                        </div>

                        {/* Card Actions Footer */}
                        <div className="pt-3.5 border-t border-wine/15 flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => handleOpenEditAddress(addr)}
                              className="px-3.5 py-1.5 bg-white border border-wine/30 text-wine hover:bg-wine hover:text-white rounded-full text-caption font-semibold shadow-2xs transition-all duration-150 cursor-pointer flex items-center gap-1.5"
                            >
                              <svg className="w-3.5 h-3.5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                              </svg>
                              <span>Edit Details</span>
                            </button>
                            {!addr.isDefault && (
                              <button
                                type="button"
                                onClick={() => handleSetDefaultAddress(addr.id)}
                                className="px-3 py-1.5 text-caption text-muted hover:text-wine font-semibold transition-colors cursor-pointer"
                              >
                                Set as Default
                              </button>
                            )}
                          </div>
                          <button
                            type="button"
                            onClick={() => handleRemoveAddress(addr.id)}
                            className="px-3.5 py-1.5 bg-white border border-gray-300 hover:border-gray-400 text-gray-600 hover:text-gray-900 rounded-full text-caption font-medium transition-all duration-150 cursor-pointer shadow-2xs flex items-center gap-1.5"
                            title="Remove Address"
                          >
                            <svg className="w-3.5 h-3.5 text-gray-500 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6" />
                            </svg>
                            <span>Remove</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* 4. WISHLIST TAB */}
            {activeTab === "wishlist" && (
              <div className="space-y-6">
                <h2 className="font-display text-h3 font-semibold text-wine">
                  Wishlist
                </h2>
                {wishlistItems.length === 0 ? (
                  <div className="bg-surface rounded-2xl border border-border/80 p-10 sm:p-14 shadow-xs text-center flex flex-col items-center justify-center animate-in fade-in duration-200">
                    {/* Heart Halo Icon Circle */}
                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#FAF0F2] text-[#80222F] mb-6 shadow-2xs">
                      <svg className="h-10 w-10 fill-[#80222F]" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    </div>

                    {/* Heading & Subtitle */}
                    <h3 className="font-display text-h3 font-semibold text-ink tracking-tight mb-2">
                      Your wishlist is empty
                    </h3>
                    <p className="text-body text-muted font-normal leading-relaxed mb-8 max-w-sm">
                      Explore our fine jewellery creations and save your favorite heirloom pieces.
                    </p>

                    {/* Continue Shopping Black Pill CTA Button */}
                    <Link
                      href="/collections"
                      className="inline-flex items-center justify-center rounded-full bg-slate-950 text-white px-8 py-3.5 text-caption font-bold uppercase tracking-widest hover:bg-slate-800 transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer active:scale-95"
                    >
                      CONTINUE SHOPPING
                    </Link>
                  </div>
                ) : (
                  /* HORIZONTAL WISHLIST PRODUCT CARDS LIST (MATCHING SCREENSHOT) */
                  <div className="bg-surface rounded-2xl border border-border/70 p-6 sm:p-8 shadow-xs divide-y divide-border/50 animate-in fade-in duration-200">
                    {wishlistItems.map((product) => (
                      <div
                        key={product.id}
                        className="py-6 first:pt-0 last:pb-0 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 transition-all"
                      >
                        {/* Left: Product Thumbnail & Details */}
                        <div className="flex items-center gap-4 sm:gap-6">
                          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-neutral-100 flex-shrink-0 border border-border/40 shadow-2xs">
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              className="object-cover"
                            />
                          </div>

                          <div className="space-y-1">
                            <h3 className="font-display font-semibold text-h5 text-ink">
                              {product.name}
                            </h3>
                            <p className="text-caption text-muted font-medium">
                              18K Solid Gold • {product.category ? product.category.toUpperCase() : "Rings"}
                            </p>

                            <div className="flex items-center gap-2 pt-0.5 pb-1">
                              <span className="font-semibold text-ink text-body">
                                ₹{product.price.toLocaleString("en-IN")}
                              </span>
                              {product.compareAtPrice && (
                                <span className="text-caption text-muted line-through font-normal">
                                  ₹{product.compareAtPrice.toLocaleString("en-IN")}
                                </span>
                              )}
                            </div>

                            <div>
                              <button
                                type="button"
                                onClick={() => handleAddToCart(product)}
                                className="px-5 py-2 bg-slate-950 hover:bg-slate-800 text-white rounded-full text-caption font-bold uppercase tracking-wider transition-all duration-150 shadow-xs hover:shadow-md cursor-pointer active:scale-95"
                              >
                                ADD TO CART
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Right: Remove Pill Button */}
                        <button
                          type="button"
                          onClick={() => handleRemoveFromWishlist(product.id)}
                          className="px-3.5 py-1.5 bg-white border border-gray-300 hover:border-gray-400 text-gray-600 hover:text-gray-900 rounded-full text-caption font-medium transition-all duration-150 cursor-pointer shadow-2xs flex items-center gap-1.5 self-start sm:self-center"
                          title="Remove from Wishlist"
                        >
                          <svg className="w-3.5 h-3.5 text-gray-500 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6" />
                          </svg>
                          <span>Remove</span>
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* 5. ORDER HISTORY TAB */}
            {activeTab === "order-history" && (
              <div className="space-y-6">
                <h2 className="font-display text-h3 font-semibold text-wine">
                  Order History
                </h2>
                <div className="space-y-4">
                  <div className="p-5 bg-surface rounded-2xl border border-border shadow-xs space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-border">
                      <div>
                        <span className="font-display font-semibold text-wine text-body">Order #LX-89241</span>
                        <p className="text-caption text-muted">Placed on Aug 24, 2026</p>
                      </div>
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-caption font-semibold">
                        Delivered
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-caption">
                      <div>
                        <p className="font-semibold text-ink text-small">Royal Solitaire Diamond Ring (18K Gold)</p>
                        <p className="text-muted">Qty: 1 | Size: 14 IN</p>
                      </div>
                      <span className="font-display font-bold text-wine text-body">₹1,45,000</span>
                    </div>
                  </div>

                  <div className="p-5 bg-surface rounded-2xl border border-border shadow-xs space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-border">
                      <div>
                        <span className="font-display font-semibold text-wine text-body">Order #LX-77319</span>
                        <p className="text-caption text-muted">Placed on May 12, 2026</p>
                      </div>
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-caption font-semibold">
                        Delivered
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-caption">
                      <div>
                        <p className="font-semibold text-ink text-small">Heritage Kundan Bridal Necklace</p>
                        <p className="text-muted">Qty: 1 | BIS Hallmarked 22K</p>
                      </div>
                      <span className="font-display font-bold text-wine text-body">₹2,80,000</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 5. GIFT CARD BALANCE TAB */}
            {activeTab === "gift-card" && (
              <div className="space-y-6">
                <div className="bg-surface rounded-2xl border border-wine/25 shadow-xs overflow-hidden">
                  {/* Pink Header Banner matching screenshot */}
                  <div className="bg-[#FAF0F2] px-6 py-4 border-b border-wine/20">
                    <h3 className="font-display font-semibold text-[#80222F] text-h5">
                      Gift Card Balance
                    </h3>
                  </div>

                  {/* Body Container matching screenshot */}
                  <div className="p-6 sm:p-8 space-y-6">
                    <p className="text-body text-ink/80 font-medium leading-relaxed">
                      To View Your Card Balance Enter The 16 Digit Card Number And The 6 Digit Security Code(PIN).
                    </p>

                    <form onSubmit={handleCheckGiftCardBalance} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                      {/* Input 1: 16-Digit Card Number */}
                      <div className="md:col-span-5">
                        <input
                          type="text"
                          value={giftCardForm.cardNumber}
                          onChange={(e) => setGiftCardForm({ ...giftCardForm, cardNumber: e.target.value })}
                          placeholder="Gift card Number"
                          maxLength={19}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-white text-body text-ink placeholder:text-muted focus:outline-none focus:border-wine focus:ring-1 focus:ring-wine/20 transition-all font-mono"
                          required
                        />
                      </div>

                      {/* Input 2: 6-Digit PIN with Eye Toggle matching screenshot */}
                      <div className="md:col-span-4 relative">
                        <input
                          type={showGiftCardPin ? "text" : "password"}
                          value={giftCardForm.pin}
                          onChange={(e) => setGiftCardForm({ ...giftCardForm, pin: e.target.value })}
                          placeholder="6- Digit PIN"
                          maxLength={6}
                          className="w-full px-4 py-3 pr-10 rounded-lg border border-border bg-white text-body text-ink placeholder:text-muted focus:outline-none focus:border-wine focus:ring-1 focus:ring-wine/20 transition-all font-mono"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowGiftCardPin(!showGiftCardPin)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-wine p-1 cursor-pointer transition-colors"
                          title={showGiftCardPin ? "Hide PIN" : "Show PIN"}
                        >
                          {showGiftCardPin ? (
                            <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                              <circle cx="12" cy="12" r="3" />
                            </svg>
                          ) : (
                            <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
                              <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24M1 1l22 22" />
                            </svg>
                          )}
                        </button>
                      </div>

                      {/* Button: Check Balance matching screenshot */}
                      <div className="md:col-span-3">
                        <button
                          type="submit"
                          className="w-full py-3 px-6 bg-[#80222F] hover:bg-[#681B26] text-white text-body font-semibold rounded-lg shadow-sm transition-all duration-150 cursor-pointer whitespace-nowrap active:scale-98"
                        >
                          Check Balance
                        </button>
                      </div>
                    </form>

                    {/* Result Card */}
                    {giftCardCheckResult && (
                      <div className={`p-4 rounded-xl border text-body animate-in fade-in duration-200 ${
                        giftCardCheckResult.success
                          ? "bg-emerald-50 border-emerald-200 text-emerald-900"
                          : "bg-red-50 border-red-200 text-red-800"
                      }`}>
                        {giftCardCheckResult.success ? (
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-semibold text-emerald-800">✓ {giftCardCheckResult.message}</p>
                              <p className="text-caption text-emerald-700 mt-0.5">Card Number: •••• •••• •••• {giftCardForm.cardNumber.slice(-4) || "8821"}</p>
                            </div>
                            <span className="font-display font-bold text-h5 text-emerald-900">₹{giftCardCheckResult.balance?.toLocaleString("en-IN")}</span>
                          </div>
                        ) : (
                          <p>⚠️ {giftCardCheckResult.message}</p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* 7. TRACK ORDER TAB */}
            {activeTab === "track-order" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="font-display text-h3 font-semibold text-wine">
                    Track Your Order
                  </h2>
                </div>

                <div className="bg-surface rounded-2xl border border-border p-6 shadow-sm space-y-6">
                  <div className="space-y-2">
                    <h3 className="font-display text-h5 font-semibold text-wine">
                      Live Delivery Tracker
                    </h3>
                    <p className="text-caption text-muted leading-relaxed">
                      Enter your Order ID (e.g. LX-89241) or AWB Tracking Number to check real-time courier status.
                    </p>
                  </div>

                  <form onSubmit={(e) => { e.preventDefault(); setSaveSuccess(true); setTimeout(() => setSaveSuccess(false), 3000); }} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        label="Order ID / AWB Number"
                        type="text"
                        variant="light"
                        placeholder="e.g. LX-89241"
                        defaultValue="LX-89241"
                        required
                      />
                      <Input
                        label="Mobile Number / Email"
                        type="text"
                        variant="light"
                        placeholder="+91 9876543210"
                        defaultValue="+91 6353147401"
                        required
                      />
                    </div>

                    <Button type="submit" variant="fill" colorTheme="wine" size="md">
                      Track Delivery Status
                    </Button>
                  </form>

                  {/* ACTIVE ORDER TRACKING PROGRESS CARD */}
                  <div className="pt-6 border-t border-border space-y-6">
                    <div className="p-4 bg-wine/5 rounded-2xl border border-wine/15 flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold uppercase tracking-wider">
                          IN TRANSIT 🚚
                        </span>
                        <h4 className="font-display font-semibold text-wine text-body mt-1">
                          Order #LX-89241 • Royal Solitaire Diamond Ring
                        </h4>
                        <p className="text-caption text-muted">
                          Insured Express Courier: <span className="text-ink font-medium">BlueDart Express (AWB: SQL-98234109)</span>
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] uppercase font-bold text-muted tracking-wider block">Estimated Delivery</span>
                        <span className="font-display font-bold text-wine text-body">Tomorrow by 5:00 PM</span>
                      </div>
                    </div>

                    {/* TIMELINE STEPPER */}
                    <div className="space-y-4 pt-2">
                      <h4 className="text-caption font-bold uppercase tracking-wider text-muted">Shipment Journey</h4>
                      <div className="space-y-6 pt-1">
                        {[
                          {
                            title: "Order Placed & Certified",
                            desc: "Aug 26, 2026 • BIS Hallmark & IGI Diamond verification complete.",
                            status: "completed",
                            icon: "✓",
                          },
                          {
                            title: "Handed to BlueDart Express",
                            desc: "Aug 27, 2026 • Sealed in armored tamper-proof luxury vault box.",
                            status: "completed",
                            icon: "✓",
                          },
                          {
                            title: "Out for Delivery",
                            desc: "Aug 28, 2026 • Expected delivery by 5:00 PM (OTP signature required).",
                            status: "active",
                            icon: "🚚",
                          },
                        ].map((step, idx, arr) => {
                          const isLast = idx === arr.length - 1;
                          return (
                            <div key={idx} className="relative flex items-start gap-4">
                              {/* Connecting Line Segment (Stops at last icon point) */}
                              {!isLast && (
                                <span
                                  aria-hidden="true"
                                  className="absolute left-[11px] top-6 bottom-0 w-[2px] bg-wine/30 -mb-6"
                                />
                              )}

                              {/* Step Icon Badge */}
                              <div className={`relative z-10 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 shadow-xs ${
                                step.status === "completed"
                                  ? "bg-emerald-500 text-white"
                                  : "bg-wine text-white ring-4 ring-wine/20 animate-pulse"
                              }`}>
                                {step.icon}
                              </div>

                              {/* Step Text Content */}
                              <div className="space-y-0.5 pt-0.5">
                                <p className="text-caption font-bold text-wine">{step.title}</p>
                                <p className="text-[11px] text-muted leading-relaxed">{step.desc}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
