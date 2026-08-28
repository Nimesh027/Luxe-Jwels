"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  setUserDrawerOpen,
  openModal,
} from "@/store/slices/uiSlice";
import { logout } from "@/store/slices/authSlice";

export default function UserDrawer() {
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const isOpen = useAppSelector((state) => state.ui.userDrawerOpen);
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);

  const [activeTab, setActiveTab] = useState<string>("track-order");

  if (!isOpen) return null;

  const handleClose = () => {
    dispatch(setUserDrawerOpen(false));
  };

  const displayName = user?.name || "vip client";

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-[2px] transition-opacity animate-in fade-in duration-200"
        onClick={handleClose}
      />

      {/* Slide-out Drawer Panel (Right Side - Straight Border / No Top Border Radius) */}
      <div className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-[340px] sm:max-w-[380px] bg-surface shadow-2xl flex flex-col animate-in slide-in-from-right duration-300 border-l border-border/60 overflow-hidden">

        {/* HEADER WITH CLOSE BUTTON */}
        <div className="p-4 px-5 bg-surface border-b border-border/40 flex items-center justify-between">
          <span className="font-display font-semibold text-wine text-base tracking-wide">
            My Account
          </span>
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close"
            className="w-8 h-8 rounded-full bg-wine/5 hover:bg-wine/10 text-wine flex items-center justify-center transition-colors cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* DRAWER CONTENT */}
        <div className="flex-1 overflow-y-auto px-5 py-6 space-y-6">

          {/* USER PROFILE GRADIENT BANNER CARD (Clickable to open /account page) */}
          <Link
            href="/account"
            onClick={handleClose}
            className="block bg-gradient-to-r from-[#80222F] via-[#9B2D3E] to-[#B83A4E] hover:from-[#701D27] hover:to-[#A82E42] rounded-2xl p-4 sm:p-5 text-white shadow-md relative overflow-hidden transition-all duration-200 group cursor-pointer"
          >
            {/* Subtle light background ornament */}
            <div className="absolute right-0 top-0 translate-x-4 -translate-y-4 w-28 h-28 bg-white/10 rounded-full blur-xl pointer-events-none" />

            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/40 bg-white/10 backdrop-blur-xs flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>

                <div>
                  <h3 className="font-display text-lg font-semibold tracking-wide text-white lowercase">
                    {displayName}
                  </h3>
                  <p className="text-[11px] text-white/80 font-medium">Manage Profile & Account &rarr;</p>
                </div>
              </div>

              <svg className="w-5 h-5 text-white/80 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          {/* MENU OPTIONS LIST WITH CUSTOM SVG ICONS */}
          <nav className="space-y-3" aria-label="User Account Options">

            {/* 1. Order History */}
            <button
              type="button"
              onClick={() => {
                setActiveTab("order-history");
                handleClose();
                dispatch(openModal("orderHistory"));
              }}
              className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl text-left transition-all duration-200 cursor-pointer ${activeTab === "order-history"
                  ? "bg-[#FAF0F2] border border-wine/30 text-wine shadow-xs"
                  : "bg-surface text-ink/80 hover:bg-wine/5 hover:text-wine"
                }`}
            >
              <div className="w-8 h-8 rounded-full bg-wine/10 flex items-center justify-center text-wine shrink-0">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 64 64">
                  <g>
                    <path d="m31.71 34.61 12 9a2 2 0 1 0 2.4-3.2L35 32V15a2 2 0 1 0-4 0v18c0 .664.278 1.262.71 1.61" fill="currentColor" />
                    <path d="M34 2C19.361 2 6.86 12.566 4.42 27l-.76-1.13a2.002 2.002 0 1 0-3.32 2.24l4 6A2 2 0 0 0 5.8 35H6a2 2 0 0 0 1.41-.59l5-5a2.002 2.002 0 0 0-2.83-2.83l-1.24 1.25C10.643 13.656 24 4.034 38.173 6.337S61.97 21.996 59.667 36.17C57.622 48.756 46.751 58.002 34 58a24.61 24.61 0 0 1-20.37-10.16 2 2 0 1 0-3.26 2.32A28.57 28.57 0 0 0 34 62c16.569 0 30-13.431 30-30S50.569 2 34 2" fill="currentColor" />
                  </g>
                </svg>
              </div>
              <span className="font-display font-medium text-sm sm:text-base">Order History</span>
            </button>

            {/* 2. Gift Card Balance */}
            <button
              type="button"
              onClick={() => {
                setActiveTab("gift-card");
                handleClose();
                dispatch(openModal("giftCard"));
              }}
              className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl text-left transition-all duration-200 cursor-pointer ${activeTab === "gift-card"
                  ? "bg-[#FAF0F2] border border-wine/30 text-wine shadow-xs"
                  : "bg-surface text-ink/80 hover:bg-wine/5 hover:text-wine"
                }`}
            >
              <div className="w-8 h-8 rounded-full bg-wine/10 flex items-center justify-center text-wine shrink-0">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 454 454">
                  <g>
                    <path d="M407 .5H115.59a6.95 6.95 0 0 0-5.18 0H47C21.055.527.027 21.555 0 47.5V299c.027 25.945 21.055 46.973 47 47h360c25.945-.027 46.973-21.055 47-47V47.5c-.027-25.945-21.055-46.973-47-47m33 47V225H169.2a35.7 35.7 0 0 0 17.402-30.54c0-19.714-16.254-35.753-36.23-35.753A36.4 36.4 0 0 0 120 174.98V14.5h287c18.215.02 32.98 14.785 33 33M53.398 194.46c.149-12.14 10.094-21.87 22.23-21.753 3.958 0 7.845 1.035 11.278 3.008a21.77 21.77 0 0 1 10.563 14.691l6.101 31.446-32.125-6.028c-10.367-1.855-17.949-10.828-18.047-21.363m69.036 27.392 6.097-31.446c2.328-11.07 12.578-18.64 23.844-17.601 11.262 1.035 19.96 10.347 20.227 21.656-.098 10.531-7.676 19.504-18.043 21.363zM47 14.5h59v160.484a36 36 0 0 0-12.102-11.398 36.56 36.56 0 0 0-18.265-4.879c-19.98 0-36.23 16.04-36.23 35.754A35.69 35.69 0 0 0 56.804 225H14V47.5c.02-18.215 14.785-32.98 33-33M14 299v-60h82.102L63.05 272.05c-2.735 2.735-2.735 7.165 0 9.9s7.164 2.734 9.898 0L106 248.897V332H47c-18.215-.02-32.98-14.785-33-33m393 33H120v-83.102l44.55 44.551c2.735 2.735 7.165 2.735 9.9 0s2.734-7.164 0-9.898L129.897 239H440v60c-.02 18.215-14.785 32.98-33 33m0 0" fill="currentColor" />
                  </g>
                </svg>
              </div>
              <span className="font-display font-medium text-sm sm:text-base">Gift Card Balance</span>
            </button>

            {/* 3. Track Order */}
            <button
              type="button"
              onClick={() => {
                setActiveTab("track-order");
                handleClose();
                dispatch(openModal("trackOrder"));
              }}
              className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl text-left transition-all duration-200 cursor-pointer ${activeTab === "track-order"
                  ? "bg-[#FAF0F2] border border-wine/40 text-wine font-semibold shadow-xs"
                  : "bg-surface text-ink/80 hover:bg-wine/5 hover:text-wine"
                }`}
            >
              <div className="w-8 h-8 rounded-full bg-wine/10 flex items-center justify-center text-wine shrink-0">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 100 100">
                  <g>
                    <path d="M66 74.64a1.25 1.25 0 0 1-.85 2.16 1.23 1.23 0 0 1-.86-.34 11 11 0 0 1-.51-15.57 1.25 1.25 0 1 1 1.82 1.71 8.53 8.53 0 0 0 .4 12zM94.61 88a1.26 1.26 0 0 1-.86 2.17 1.28 1.28 0 0 1-.85-.34l-9.64-9a16.84 16.84 0 0 1-11.41 4.46 17 17 0 0 1-7.53-1.76L44.74 94.81h-.19a1.07 1.07 0 0 1-.86 0h-.2L5.62 73A1.28 1.28 0 0 1 5 71.86V28.14a1.28 1.28 0 0 1 .62-1.09L43.49 5.19a1.27 1.27 0 0 1 1.25 0l37.87 21.86a1.26 1.26 0 0 1 .63 1.09v27.83l.16.14A16.87 16.87 0 0 1 85 79zm-14.8-59.68-13.24-7.64-35.68 20.61 13.23 7.64zM19.94 51.65l6.85 4.23V41.81l-6.85-4zm8.45-11.8 35.69-20.61-7.18-4.15L21.2 35.7zm-20-11.53 10.31 5.94 35.7-20.61-10.28-5.93zM7.5 71.14l35.37 20.42V51.1l-13.58-7.84v14.86a1.24 1.24 0 0 1-.64 1.1 1.3 1.3 0 0 1-.61.15 1.3 1.3 0 0 1-.65-.18L18 53.41a1.25 1.25 0 0 1-.59-1.07V36.41L7.5 30.68zM61.91 82a16 16 0 0 1-1.58-1.29 16.86 16.86 0 0 1 20.41-26.62V30.68L45.37 51.1v40.46zm20.43-3.79a14.37 14.37 0 0 0-10.48-24.15h-.48a14.36 14.36 0 1 0 11 24.16z" fill="currentColor" />
                  </g>
                </svg>
              </div>
              <span className="font-display font-medium text-sm sm:text-base">Track Order</span>
            </button>

            {/* 4. Contact Us */}
            <Link
              href="/privacy-policy"
              onClick={() => {
                setActiveTab("contact-us");
                handleClose();
              }}
              className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl text-left transition-all duration-200 cursor-pointer ${activeTab === "contact-us"
                  ? "bg-[#FAF0F2] border border-wine/30 text-wine shadow-xs"
                  : "bg-surface text-ink/80 hover:bg-wine/5 hover:text-wine"
                }`}
            >
              <div className="w-8 h-8 rounded-full bg-wine/10 flex items-center justify-center text-wine shrink-0">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 90 90">
                  <g>
                    <path d="M32.991 24.801h46.908L54.275 44.923a3.43 3.43 0 0 1-1.775.691 3.5 3.5 0 0 1-1.787-.691L32.401 30.538a2 2 0 0 0-.654-.349 7.15 7.15 0 0 0 1.328-4.272 10 10 0 0 0-.084-1.116M21.062 11.86c.059.01.156.047.367.145.417.198 1.08.708 1.729 1.419 1.307 1.424 2.613 3.581 3.291 5.005q.032.064.063.135c1.924 3.301 2.754 5.826 2.779 7.41.027 1.591-.4 2.276-1.749 3.051l-3.48 2.006c-2.267 1.305-3.338 3.644-3.604 5.826-.267 2.183.126 4.304 1.097 5.981l8.59 14.805c.973 1.676 2.634 3.078 4.665 3.939 2.033.863 4.604 1.107 6.871-.195l3.48-2.002c1.348-.773 2.163-.789 3.532.025 1.373.816 3.156 2.787 5.072 6.09.027.049.053.09.084.137.898 1.295 2.121 3.492 2.711 5.332.293.914.408 1.74.371 2.197-.041.459-.051.412-.172.484l-2.648 1.518c-6.652 2.885-12.749 2.234-18.198-.592-5.459-2.838-10.204-7.963-13.512-13.98-.011-.012-.016-.027-.025-.035L15.13 48.073c-.012-.012-.017-.023-.027-.039-3.585-5.86-5.674-12.513-5.412-18.634.262-6.112 2.742-11.684 8.584-15.971l2.649-1.513c.061-.035.081-.062.138-.056m.027-3.721c-.701-.011-1.416.136-2.059.509l-2.801 1.611q-.093.054-.178.109C9.312 15.3 6.209 22.166 5.906 29.243c-.303 7.074 2.059 14.375 5.961 20.758l7.222 12.445-.017-.037c3.605 6.551 8.771 12.234 15.084 15.508 6.316 3.279 13.84 4.039 21.504.697.063-.027.127-.057.184-.092l2.805-1.611c1.297-.738 1.949-2.174 2.055-3.428.109-1.25-.146-2.467-.533-3.666-.758-2.371-2.08-4.674-3.172-6.254-2.063-3.549-4.055-6.012-6.357-7.389a7.25 7.25 0 0 0-7.377-.057l-3.48 2.006c-1.028.592-2.23.523-3.495-.012-1.259-.535-2.425-1.605-2.858-2.355l-8.59-14.804c-.434-.754-.789-2.292-.621-3.648.162-1.352.711-2.411 1.74-3.004l3.381-1.944c.088.453.344.864.715 1.14L48.37 47.884a7.2 7.2 0 0 0 4.023 1.539 2 2 0 0 0 .219 0 7.2 7.2 0 0 0 4.018-1.539L81.852 28.07v32.734c0 .498-.568 1.154-1.682 1.154H62.709a1.89 1.89 0 0 0-1.902 1.887c0 1.043.852 1.891 1.902 1.885H80.17c2.854 0 5.477-2.063 5.477-4.926V25.955c0-2.865-2.623-4.927-5.477-4.927H31.952c-.534-1.335-2.75-2.127-4.288-.831-1.73-2.179-4.017-3.866-5.856-.852-.932-1.771-1.758-2.92-2.292v.005a4.9 4.9 0 0 0-1.95-.458" fill="currentColor" />
                  </g>
                </svg>
              </div>
              <span className="font-display font-medium text-sm sm:text-base">Contact Us</span>
            </Link>

            {/* 5. Log Out / Sign In */}
            {isAuthenticated ? (
              <button
                type="button"
                onClick={() => {
                  dispatch(logout());
                  handleClose();
                }}
                className="w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl text-left text-wine hover:bg-red-50/80 transition-all duration-200 cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-wine/10 flex items-center justify-center text-wine shrink-0">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 512.005 512">
                    <g>
                      <path d="M320 277.336c-11.797 0-21.332 9.559-21.332 21.332v85.336c0 11.754-9.559 21.332-21.336 21.332h-64v-320c0-18.219-11.605-34.496-29.055-40.555l-6.316-2.113h99.371c11.777 0 21.336 9.578 21.336 21.336v64c0 11.773 9.535 21.332 21.332 21.332s21.332-9.559 21.332-21.332v-64c0-35.285-28.715-64-64-64H48c-.812 0-1.492.363-2.281.469-1.028-.086-2.008-.47-3.051-.47C19.137.004 0 19.138 0 42.669v384c0 18.219 11.605 34.496 29.055 40.555L157.44 510.02c4.352 1.343 8.68 1.984 13.227 1.984 23.531 0 42.664-19.137 42.664-42.668v-21.332h64c35.285 0 64-28.715 64-64v-85.336c0-11.773-9.535-21.332-21.332-21.332m0 0" fill="currentColor" />
                      <path d="m505.75 198.254-85.336-85.332a21.33 21.33 0 0 0-23.25-4.633C389.207 111.598 384 119.383 384 128.004v64h-85.332c-11.777 0-21.336 9.555-21.336 21.332s9.559 21.332 21.336 21.332H384v64c0 8.621 5.207 16.406 13.164 19.715a21.335 21.335 0 0 0 23.25-4.63l85.336-85.335c8.34-8.34 8.34-21.824 0-30.164m0 0" fill="currentColor" />
                    </g>
                  </svg>
                </div>
                <span className="font-display font-medium text-sm sm:text-base">Log Out</span>
              </button>
            ) : (
              <Link
                href="/login"
                onClick={handleClose}
                className="w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl text-left text-wine hover:bg-wine/5 transition-all duration-200 cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-wine/10 flex items-center justify-center text-wine shrink-0">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 512.005 512">
                    <g>
                      <path d="M320 277.336c-11.797 0-21.332 9.559-21.332 21.332v85.336c0 11.754-9.559 21.332-21.336 21.332h-64v-320c0-18.219-11.605-34.496-29.055-40.555l-6.316-2.113h99.371c11.777 0 21.336 9.578 21.336 21.336v64c0 11.773 9.535 21.332 21.332 21.332s21.332-9.559 21.332-21.332v-64c0-35.285-28.715-64-64-64H48c-.812 0-1.492.363-2.281.469-1.028-.086-2.008-.47-3.051-.47C19.137.004 0 19.138 0 42.669v384c0 18.219 11.605 34.496 29.055 40.555L157.44 510.02c4.352 1.343 8.68 1.984 13.227 1.984 23.531 0 42.664-19.137 42.664-42.668v-21.332h64c35.285 0 64-28.715 64-64v-85.336c0-11.773-9.535-21.332-21.332-21.332m0 0" fill="currentColor" />
                      <path d="m505.75 198.254-85.336-85.332a21.33 21.33 0 0 0-23.25-4.633C389.207 111.598 384 119.383 384 128.004v64h-85.332c-11.777 0-21.336 9.555-21.336 21.332s9.559 21.332 21.336 21.332H384v64c0 8.621 5.207 16.406 13.164 19.715a21.335 21.335 0 0 0 23.25-4.63l85.336-85.335c8.34-8.34 8.34-21.824 0-30.164m0 0" fill="currentColor" />
                    </g>
                  </svg>
                </div>
                <span className="font-display font-medium text-sm sm:text-base">Log In / Register</span>
              </Link>
            )}
          </nav>
        </div>
      </div>
    </>
  );
}
