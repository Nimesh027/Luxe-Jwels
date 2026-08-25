"use client";

import Link from "next/link";
import { useState } from "react";
import {
  CloseOutlined,
  DownOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  setMobileDrawerOpen,
  setCartDrawerOpen,
  setWishlistDrawerOpen,
} from "@/store/slices/uiSlice";
import JewelryIcon from "./JewelryIcon";
import { cn } from "@/lib/utils";

export default function MobileDrawer() {
  const dispatch = useAppDispatch();
  const open = useAppSelector((state) => state.ui.mobileDrawerOpen);
  const links = useAppSelector((state) => state.navigation.links);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [activeTabId, setActiveTabId] = useState<Record<string, string>>({});

  const close = () => dispatch(setMobileDrawerOpen(false));

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="absolute inset-0 bg-ink/60 transition-opacity" onClick={close} />
      <div className="relative flex h-full w-84 max-w-[88vw] flex-col bg-surface shadow-2xl">
        <div className="flex items-center justify-between border-b border-border px-5 py-4 bg-surface">
          <span className="font-display text-lg tracking-[0.2em] text-ink font-semibold">
            LUXE JEWELS
          </span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={close}
            className="text-xl text-ink hover:text-wine cursor-pointer p-1"
          >
            <CloseOutlined />
          </button>
        </div>

        {/* Navigation List */}
        <nav className="flex-1 overflow-y-auto px-3 py-2 divide-y divide-border/60" aria-label="Mobile">
          {links.map((link) => {
            const hasMega = Boolean(link.megaMenu);
            const hasChildren = Boolean(link.children?.length);
            const isExpandable = hasMega || hasChildren;
            const isExpanded = expandedId === link.id;

            const currentTabId =
              activeTabId[link.id] ||
              link.megaMenu?.defaultTabId ||
              link.megaMenu?.tabs[0]?.id ||
              "";

            const currentTab = link.megaMenu?.tabs.find((t) => t.id === currentTabId) || link.megaMenu?.tabs[0];

            return (
              <div key={link.id} className="py-1">
                <div className="flex items-center justify-between">
                  <Link
                    href={link.href}
                    onClick={close}
                    className="flex-1 px-3 py-2.5 text-xs font-medium uppercase tracking-wider text-ink hover:text-wine"
                  >
                    {link.label}
                  </Link>

                  {isExpandable && (
                    <button
                      type="button"
                      aria-label={`Toggle ${link.label}`}
                      onClick={() => setExpandedId(isExpanded ? null : link.id)}
                      className="px-3 py-2.5 text-ink hover:text-wine cursor-pointer"
                    >
                      <DownOutlined
                        className={cn(
                          "text-[10px] transition-transform duration-200",
                          isExpanded && "rotate-180 text-wine"
                        )}
                      />
                    </button>
                  )}
                </div>

                {/* Mega Menu Expandable Mobile View */}
                {hasMega && link.megaMenu && isExpanded && (
                  <div className="pb-3 pt-1 px-2">
                    {/* Tabs list */}
                    <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
                      {link.megaMenu.tabs.map((tab) => {
                        const isTabActive = tab.id === currentTabId;
                        return (
                          <button
                            key={tab.id}
                            type="button"
                            onClick={() =>
                              setActiveTabId((prev) => ({ ...prev, [link.id]: tab.id }))
                            }
                            className={cn(
                              "px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors",
                              isTabActive
                                ? "bg-wine-soft text-wine border border-wine/30 font-semibold"
                                : "text-muted hover:text-ink bg-cream/70"
                            )}
                          >
                            {tab.label}
                          </button>
                        );
                      })}
                    </div>

                    {/* Tab Items Grid */}
                    {currentTab && (
                      <div className="grid grid-cols-2 gap-2 mt-2 bg-cream/30 p-2.5 rounded-xl border border-border/60">
                        {currentTab.items.map((item) => (
                          <Link
                            key={item.id}
                            href={item.href}
                            onClick={close}
                            className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-surface transition-colors"
                          >
                            <JewelryIcon name={item.name} className="w-5 h-5 shrink-0" />
                            <span className="text-xs text-ink truncate hover:text-wine">
                              {item.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}

                    {/* Bottom Link */}
                    {currentTab?.bottomBanner && (
                      <div className="mt-2.5 text-center">
                        <Link
                          href={currentTab.bottomBanner.buttonHref}
                          onClick={close}
                          className="inline-block w-full py-2 rounded-lg bg-wine text-white text-xs font-medium hover:bg-wine-dark"
                        >
                          {currentTab.bottomBanner.buttonText} - {currentTab.bottomBanner.heading}
                        </Link>
                      </div>
                    )}
                  </div>
                )}

                {/* Simple Children Fallback */}
                {hasChildren && !hasMega && isExpanded && (
                  <div className="pb-2 pl-4 pr-2 space-y-1">
                    {link.children?.map((child) => (
                      <Link
                        key={child.id}
                        href={child.href}
                        onClick={close}
                        className="block py-1.5 px-2 text-xs text-muted hover:text-wine hover:bg-cream rounded"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Bottom User Actions */}
        <div className="flex items-center justify-around border-t border-border px-5 py-4 bg-surface text-ink">
          <Link href="/login" onClick={close} className="flex flex-col items-center gap-1 text-xs hover:text-wine">
            <UserOutlined className="text-base" />
            <span>Account</span>
          </Link>
          <button
            type="button"
            onClick={() => {
              close();
              dispatch(setWishlistDrawerOpen(true));
            }}
            className="flex flex-col items-center gap-1 text-xs hover:text-wine cursor-pointer"
          >
            <HeartOutlined className="text-base" />
            <span>Wishlist</span>
          </button>
          <button
            type="button"
            onClick={() => {
              close();
              dispatch(setCartDrawerOpen(true));
            }}
            className="flex flex-col items-center gap-1 text-xs hover:text-wine cursor-pointer"
          >
            <ShoppingCartOutlined className="text-base" />
            <span>Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}

