"use client";

import Link from "next/link";
import { useState } from "react";
import {
  CloseOutlined,
  DownOutlined,
  HeartOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setMobileDrawerOpen } from "@/store/slices/uiSlice";
import { cn } from "@/lib/utils";

export default function MobileDrawer() {
  const dispatch = useAppDispatch();
  const open = useAppSelector((state) => state.ui.mobileDrawerOpen);
  const links = useAppSelector((state) => state.navigation.links);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const close = () => dispatch(setMobileDrawerOpen(false));

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="absolute inset-0 bg-ink/60" onClick={close} />
      <div className="relative flex h-full w-80 max-w-[85vw] flex-col bg-surface">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <span className="font-display text-lg tracking-[0.2em] text-ink">LUXE JEWELS</span>
          <button type="button" aria-label="Close menu" onClick={close} className="text-xl text-ink">
            <CloseOutlined />
          </button>
        </div>

        <div className="flex items-center gap-2 border-b border-border px-5 py-3 text-muted">
          <SearchOutlined />
          <span className="text-sm">Search</span>
        </div>

        <nav className="flex-1 overflow-y-auto px-2 py-2" aria-label="Mobile">
          {links.map((link) => (
            <div key={link.id} className="border-b border-border">
              <div className="flex items-center justify-between">
                <Link
                  href={link.href}
                  onClick={close}
                  className="flex-1 px-3 py-3 text-sm uppercase tracking-wide text-ink"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <button
                    type="button"
                    aria-label={`Toggle ${link.label}`}
                    onClick={() => setExpandedId(expandedId === link.id ? null : link.id)}
                    className="px-3 py-3 text-ink"
                  >
                    <DownOutlined
                      className={cn(
                        "text-xs transition-transform",
                        expandedId === link.id && "rotate-180"
                      )}
                    />
                  </button>
                )}
              </div>
              {link.children && expandedId === link.id && (
                <div className="pb-2 pl-6">
                  {link.children.map((child) => (
                    <Link
                      key={child.id}
                      href={child.href}
                      onClick={close}
                      className="block py-2 text-sm text-muted hover:text-gold"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center justify-around border-t border-border px-5 py-4 text-ink">
          <Link href="/login" onClick={close} className="flex flex-col items-center gap-1 text-xs">
            <UserOutlined className="text-lg" />
            Account
          </Link>
          <Link href="/wishlist" onClick={close} className="flex flex-col items-center gap-1 text-xs">
            <HeartOutlined className="text-lg" />
            Wishlist
          </Link>
          <Link href="/cart" onClick={close} className="flex flex-col items-center gap-1 text-xs">
            <ShoppingCartOutlined className="text-lg" />
            Cart
          </Link>
        </div>
      </div>
    </div>
  );
}
