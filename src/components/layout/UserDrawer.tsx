"use client";

import { useState } from "react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setUserDrawerOpen } from "@/store/slices/uiSlice";
import { logout } from "@/store/slices/authSlice";
import Drawer from "@/components/ui/Drawer";
import Button from "@/components/ui/Button";
import {
  UserIcon,
  ChevronRightIcon,
  PackageIcon,
  TruckIcon,
  DiamondIcon,
  HelpCircleIcon,
  LogOutIcon,
  LogInIcon,
} from "@/components/icons";

export default function UserDrawer() {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.ui.userDrawerOpen);
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);

  const [activeTab, setActiveTab] = useState<string>("track-order");

  const handleClose = () => {
    dispatch(setUserDrawerOpen(false));
  };

  const displayName = user?.name || "vip client";

  return (
    <Drawer
      isOpen={isOpen}
      onClose={handleClose}
      title="My Account"
      ariaLabel="User Account Drawer"
      maxWidth="max-w-[340px] sm:max-w-[380px]"
    >
      <div className="px-5 py-6 space-y-6">
        {/* USER PROFILE GRADIENT BANNER CARD */}
        <Link
          href="/account"
          onClick={handleClose}
          className="block bg-gradient-to-r from-gold via-gold to-gold-dark hover:from-gold-dark hover:to-gold-dark rounded-2xl p-4 sm:p-5 text-white shadow-md relative overflow-hidden transition-all duration-200 group cursor-pointer"
        >
          <div className="absolute right-0 top-0 translate-x-4 -translate-y-4 w-28 h-28 bg-white/10 rounded-full blur-xl pointer-events-none" />

          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/40 bg-white/10 backdrop-blur-xs flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <UserIcon size={22} className="text-white" />
              </div>

              <div>
                <p className="font-display text-h6 font-semibold tracking-wide text-white lowercase leading-tight">
                  {displayName}
                </p>
                <p className="text-[11px] text-white/80 font-medium">Manage Profile & Account &rarr;</p>
              </div>
            </div>

            <ChevronRightIcon size={18} className="text-white/80 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>

        {/* MENU OPTIONS LIST */}
        <nav className="space-y-3" aria-label="User Account Options">
          {/* 1. Order History */}
          <Link
            href="/account?tab=order-history"
            onClick={() => {
              setActiveTab("order-history");
              handleClose();
            }}
            className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl text-left transition-all duration-200 cursor-pointer ${ activeTab === "order-history" ? "bg-wine-soft/50 text-wine font-medium border border-wine/20 shadow-xs" : "text-ink/80 hover:bg-cream-dark hover:text-ink" }`}
          >
            <div className="w-8 h-8 rounded-full bg-wine/10 flex items-center justify-center text-wine shrink-0">
              <PackageIcon size={16} className="text-wine" />
            </div>
            <span className="font-display font-medium text-body">Order History</span>
          </Link>

          {/* 2. Track Order */}
          <Link
            href="/track-order"
            onClick={() => {
              setActiveTab("track-order");
              handleClose();
            }}
            className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl text-left transition-all duration-200 cursor-pointer ${ activeTab === "track-order" ? "bg-wine-soft/50 text-wine font-medium border border-wine/20 shadow-xs" : "text-ink/80 hover:bg-cream-dark hover:text-ink" }`}
          >
            <div className="w-8 h-8 rounded-full bg-wine/10 flex items-center justify-center text-wine shrink-0">
              <TruckIcon size={16} className="text-wine" />
            </div>
            <span className="font-display font-medium text-body">Track Live Order</span>
          </Link>

          {/* 3. Care Guide */}
          <Link
            href="/care-guide"
            onClick={() => {
              setActiveTab("care-guide");
              handleClose();
            }}
            className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl text-left transition-all duration-200 cursor-pointer ${ activeTab === "care-guide" ? "bg-wine-soft/50 text-wine font-medium border border-wine/20 shadow-xs" : "text-ink/80 hover:bg-cream-dark hover:text-ink" }`}
          >
            <div className="w-8 h-8 rounded-full bg-wine/10 flex items-center justify-center text-wine shrink-0">
              <DiamondIcon size={16} className="text-wine" />
            </div>
            <span className="font-display font-medium text-body">Care Guide</span>
          </Link>

          {/* 4. FAQs */}
          <Link
            href="/faqs"
            onClick={() => {
              setActiveTab("faqs");
              handleClose();
            }}
            className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl text-left transition-all duration-200 cursor-pointer ${ activeTab === "faqs" ? "bg-wine-soft/50 text-wine font-medium border border-wine/20 shadow-xs" : "text-ink/80 hover:bg-cream-dark hover:text-ink" }`}
          >
            <div className="w-8 h-8 rounded-full bg-wine/10 flex items-center justify-center text-wine shrink-0">
              <HelpCircleIcon size={16} className="text-wine" />
            </div>
            <span className="font-display font-medium text-body">Help & FAQs</span>
          </Link>

          {/* 5. Log Out / Sign In */}
          {isAuthenticated ? (
            <Button
              variant="unstyled"
              onClick={() => {
                dispatch(logout());
                handleClose();
              }}
              className="w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl text-left text-wine hover:bg-red-50/80 transition-all duration-200 cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-wine/10 flex items-center justify-center text-wine shrink-0">
                <LogOutIcon size={16} className="text-wine" />
              </div>
              <span className="font-display font-medium text-body">Log Out</span>
            </Button>
          ) : (
            <Link
              href="/login"
              onClick={handleClose}
              className="w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl text-left text-wine hover:bg-wine/5 transition-all duration-200 cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-wine/10 flex items-center justify-center text-wine shrink-0">
                <LogInIcon size={16} className="text-wine" />
              </div>
              <span className="font-display font-medium text-body">Log In / Register</span>
            </Link>
          )}
        </nav>
      </div>
    </Drawer>
  );
}
