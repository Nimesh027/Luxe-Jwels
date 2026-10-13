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
          className="block bg-gradient-to-r from-[#80222F] via-[#9B2D3E] to-[#B83A4E] hover:from-[#701D27] hover:to-[#A82E42] rounded-2xl p-4 sm:p-5 text-white shadow-md relative overflow-hidden transition-all duration-200 group cursor-pointer"
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
            className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl text-left transition-all duration-200 cursor-pointer ${
              activeTab === "order-history"
                ? "bg-wine-soft/50 text-wine font-medium border border-wine/20 shadow-xs"
                : "text-ink/80 hover:bg-neutral-100 hover:text-ink"
            }`}
          >
            <div className="w-8 h-8 rounded-full bg-wine/10 flex items-center justify-center text-wine shrink-0">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 512 512">
                <path d="M426.667 64H85.333C38.208 64 0 102.208 0 149.333v213.334C0 409.792 38.208 448 85.333 448h341.334C473.792 448 512 409.792 512 362.667V149.333C512 102.208 473.792 64 426.667 64zm0 298.667c0 23.531-19.136 42.666-42.667 42.666H85.333C61.802 405.333 42.667 386.198 42.667 362.667V149.333C42.667 125.802 61.802 106.667 85.333 106.667h341.334c23.531 0 42.667 19.135 42.667 42.666v213.334z" />
              </svg>
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
            className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl text-left transition-all duration-200 cursor-pointer ${
              activeTab === "track-order"
                ? "bg-wine-soft/50 text-wine font-medium border border-wine/20 shadow-xs"
                : "text-ink/80 hover:bg-neutral-100 hover:text-ink"
            }`}
          >
            <div className="w-8 h-8 rounded-full bg-wine/10 flex items-center justify-center text-wine shrink-0">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 512 512">
                <path d="M490.667 234.667h-42.667C437.333 149.333 362.667 74.667 277.333 64V21.333C277.333 9.552 267.781 0 256 0s-21.333 9.552-21.333 21.333V64C149.333 74.667 74.667 149.333 64 234.667H21.333C9.552 234.667 0 244.219 0 256s9.552 21.333 21.333 21.333H64c10.667 85.333 85.333 160 170.667 170.667v42.667c0 11.781 9.552 21.333 21.333 21.333s21.333-9.552 21.333-21.333V448c85.333-10.667 160-85.333 170.667-170.667h42.667c11.781 0 21.333-9.552 21.333-21.333s-9.552-21.333-21.333-21.333zM256 405.333c-82.396 0-149.333-66.938-149.333-149.333S173.604 106.667 256 106.667 405.333 173.604 405.333 256 338.396 405.333 256 405.333z" />
              </svg>
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
            className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl text-left transition-all duration-200 cursor-pointer ${
              activeTab === "care-guide"
                ? "bg-wine-soft/50 text-wine font-medium border border-wine/20 shadow-xs"
                : "text-ink/80 hover:bg-neutral-100 hover:text-ink"
            }`}
          >
            <div className="w-8 h-8 rounded-full bg-wine/10 flex items-center justify-center text-wine shrink-0">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 512 512">
                <path d="M256 0C114.615 0 0 114.615 0 256s114.615 256 256 256 256-114.615 256-256S397.385 0 256 0zm0 469.333c-117.635 0-213.333-95.698-213.333-213.333S138.365 42.667 256 42.667 469.333 138.365 469.333 256 373.635 469.333 256 469.333z" />
              </svg>
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
            className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl text-left transition-all duration-200 cursor-pointer ${
              activeTab === "faqs"
                ? "bg-wine-soft/50 text-wine font-medium border border-wine/20 shadow-xs"
                : "text-ink/80 hover:bg-neutral-100 hover:text-ink"
            }`}
          >
            <div className="w-8 h-8 rounded-full bg-wine/10 flex items-center justify-center text-wine shrink-0">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 512 512">
                <path d="M256 0C114.609 0 0 114.609 0 256s114.609 256 256 256 256-114.609 256-256S397.391 0 256 0zm0 469.333c-117.625 0-213.333-95.708-213.333-213.333S138.375 42.667 256 42.667 469.333 138.375 469.333 256 373.625 469.333 256 469.333z" />
              </svg>
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
                <svg className="w-4 h-4 fill-current" viewBox="0 0 512.005 512">
                  <path d="M320 277.336c-11.797 0-21.332 9.559-21.332 21.332v85.336c0 11.754-9.559 21.332-21.336 21.332h-64v-320c0-18.219-11.605-34.496-29.055-40.555l-6.316-2.113h99.371c11.777 0 21.336 9.578 21.336 21.336v64c0 11.773 9.535 21.332 21.332 21.332s21.332-9.559 21.332-21.332v-64c0-35.285-28.715-64-64-64H48c-.812 0-1.492.363-2.281.469-1.028-.086-2.008-.47-3.051-.47C19.137.004 0 19.138 0 42.669v384c0 18.219 11.605 34.496 29.055 40.555L157.44 510.02c4.352 1.343 8.68 1.984 13.227 1.984 23.531 0 42.664-19.137 42.664-42.668v-21.332h64c35.285 0 64-28.715 64-64v-85.336c0-11.773-9.535-21.332-21.332-21.332m0 0" fill="currentColor" />
                  <path d="m505.75 198.254-85.336-85.332a21.33 21.33 0 0 0-23.25-4.633C389.207 111.598 384 119.383 384 128.004v64h-85.332c-11.777 0-21.336 9.555-21.336 21.332s9.559 21.332 21.336 21.332H384v64c0 8.621 5.207 16.406 13.164 19.715a21.335 21.335 0 0 0 23.25-4.63l85.336-85.335c8.34-8.34 8.34-21.824 0-30.164m0 0" fill="currentColor" />
                </svg>
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
                <svg className="w-4 h-4 fill-current" viewBox="0 0 512.005 512">
                  <path d="M320 277.336c-11.797 0-21.332 9.559-21.332 21.332v85.336c0 11.754-9.559 21.332-21.336 21.332h-64v-320c0-18.219-11.605-34.496-29.055-40.555l-6.316-2.113h99.371c11.777 0 21.336 9.578 21.336 21.336v64c0 11.773 9.535 21.332 21.332 21.332s21.332-9.559 21.332-21.332v-64c0-35.285-28.715-64-64-64H48c-.812 0-1.492.363-2.281.469-1.028-.086-2.008-.47-3.051-.47C19.137.004 0 19.138 0 42.669v384c0 18.219 11.605 34.496 29.055 40.555L157.44 510.02c4.352 1.343 8.68 1.984 13.227 1.984 23.531 0 42.664-19.137 42.664-42.668v-21.332h64c35.285 0 64-28.715 64-64v-85.336c0-11.773-9.535-21.332-21.332-21.332m0 0" fill="currentColor" />
                  <path d="m505.75 198.254-85.336-85.332a21.33 21.33 0 0 0-23.25-4.633C389.207 111.598 384 119.383 384 128.004v64h-85.332c-11.777 0-21.336 9.555-21.336 21.332s9.559 21.332 21.336 21.332H384v64c0 8.621 5.207 16.406 13.164 19.715a21.335 21.335 0 0 0 23.25-4.63l85.336-85.335c8.34-8.34 8.34-21.824 0-30.164m0 0" fill="currentColor" />
                </svg>
              </div>
              <span className="font-display font-medium text-body">Log In / Register</span>
            </Link>
          )}
        </nav>
      </div>
    </Drawer>
  );
}
