"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronDownIcon,
  HeartIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@/components/icons";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  setMobileDrawerOpen,
  setCartDrawerOpen,
  setWishlistDrawerOpen,
  setUserDrawerOpen,
} from "@/store/slices/uiSlice";
import { selectCartCount } from "@/store/slices/cartSlice";
import { selectWishlistItems } from "@/store/slices/wishlistSlice";
import Badge from "@/components/ui/Badge";
import JewelryIcon from "./JewelryIcon";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import Drawer from "@/components/ui/Drawer";

export default function MobileDrawer() {
  const dispatch = useAppDispatch();
  const open = useAppSelector((state) => state.ui.mobileDrawerOpen);
  const links = useAppSelector((state) => state.navigation.links);
  const cartCount = useAppSelector(selectCartCount);
  const wishlistCount = useAppSelector(selectWishlistItems).length;
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [activeTabId, setActiveTabId] = useState<Record<string, string>>({});

  const close = () => dispatch(setMobileDrawerOpen(false));

  const titleNode = (
    <div className="flex items-center gap-2">
      <svg className="w-5 h-5 text-[#B38E5D]" viewBox="0 0 32 32" fill="none">
        <path d="M16 2L2 12L16 30L30 12L16 2Z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M2 12H30M16 2L10 12L16 30L22 12L16 2Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <div className="flex flex-col">
        <span className="font-display text-[16px] tracking-[0.16em] text-ink font-semibold uppercase leading-none">
          LUXE JEWELS
        </span>
        <span className="text-[8.5px] uppercase tracking-[0.2em] text-[#B38E5D] font-medium mt-0.5">
          Timeless Elegance
        </span>
      </div>
    </div>
  );

  const footerNode = (
    <div className="flex items-center justify-around w-full text-ink">
      {/* Account Button: Opens UserDrawer */}
      <Button
        variant="unstyled"
        onClick={() => {
          close();
          dispatch(setUserDrawerOpen(true));
        }}
        className="flex flex-col items-center gap-1.5 text-caption hover:text-wine cursor-pointer transition-colors"
      >
        {isAuthenticated && user ? (
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-wine text-cream text-[11px] font-bold uppercase shadow-xs">
            {user.name.charAt(0)}
          </div>
        ) : (
          <UserIcon size={20} />
        )}
        <span className="font-medium">{isAuthenticated && user ? user.name.split(" ")[0] : "Account"}</span>
      </Button>

      {/* Wishlist Button: Opens WishlistDrawer with live count badge */}
      <Button
        variant="unstyled"
        onClick={() => {
          close();
          dispatch(setWishlistDrawerOpen(true));
        }}
        className="relative flex flex-col items-center gap-1.5 text-caption hover:text-wine cursor-pointer transition-colors"
      >
        <div className="relative">
          <HeartIcon size={20} />
          {wishlistCount > 0 && (
            <Badge className="absolute -right-2 -top-1.5">{wishlistCount}</Badge>
          )}
        </div>
        <span className="font-medium">Wishlist</span>
      </Button>

      {/* Cart Button: Opens CartDrawer with live count badge */}
      <Button
        variant="unstyled"
        onClick={() => {
          close();
          dispatch(setCartDrawerOpen(true));
        }}
        className="relative flex flex-col items-center gap-1.5 text-caption hover:text-wine cursor-pointer transition-colors"
      >
        <div className="relative">
          <ShoppingBagIcon size={20} />
          {cartCount > 0 && (
            <Badge className="absolute -right-2 -top-1.5">{cartCount}</Badge>
          )}
        </div>
        <span className="font-medium">Cart</span>
      </Button>
    </div>
  );

  return (
    <Drawer
      isOpen={open}
      onClose={close}
      position="left"
      maxWidth="w-84 max-w-[88vw]"
      title={titleNode}
      ariaLabel="Mobile Navigation"
      footer={footerNode}
      footerClassName="px-4 py-3 bg-surface"
      className="lg:hidden"
    >
      {/* Navigation List */}
      <nav className="px-3 py-2 divide-y divide-border/60" aria-label="Mobile">
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
                  className="flex-1 px-3 py-2.5 text-caption font-medium tracking-wider text-ink hover:text-wine"
                >
                  {link.label}
                </Link>

                {isExpandable && (
                  <Button
                    variant="unstyled"
                    aria-label={`Toggle ${link.label}`}
                    onClick={() => setExpandedId(isExpanded ? null : link.id)}
                    className="px-3 py-2.5 text-ink hover:text-wine cursor-pointer"
                  >
                    <ChevronDownIcon
                      size={14}
                      className={cn(
                        "transition-transform duration-200",
                        isExpanded && "rotate-180 text-wine"
                      )}
                    />
                  </Button>
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
                        <Button
                          key={tab.id}
                          variant="unstyled"
                          onClick={() =>
                            setActiveTabId((prev) => ({ ...prev, [link.id]: tab.id }))
                          }
                          className={cn(
                            "px-3.5 py-1.5 rounded-full text-[12px] font-medium whitespace-nowrap transition-colors",
                            isTabActive
                              ? "bg-[#FAF7F2] text-[#B38E5D] border border-[#B38E5D]/40 font-semibold shadow-2xs"
                              : "text-[#554E46] hover:text-[#141414] bg-[#FAF7F2]/70"
                          )}
                        >
                          {tab.label}
                        </Button>
                      );
                    })}
                  </div>

                  {/* Tab Items Grid */}
                  {currentTab && (
                    <div className="grid grid-cols-2 gap-2 mt-2 bg-[#FAF7F2]/50 p-2.5 rounded-xl border border-[#EAE4DC]">
                      {currentTab.items.map((item) => (
                        <Link
                          key={item.id}
                          href={item.href}
                          onClick={close}
                          className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-white transition-colors"
                        >
                          <JewelryIcon name={item.name} className="w-5 h-5 shrink-0 text-[#B38E5D]" />
                          <span className="text-[12.5px] text-[#141414] truncate hover:text-[#B38E5D]">
                            {item.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* Bottom Link */}
                  {currentTab?.bottomBanner && (
                    <div className="mt-2.5 text-center">
                      <Button
                        href={currentTab.bottomBanner.buttonHref}
                        onClick={close}
                        colorTheme="wine"
                        size="xs"
                        rounded="md"
                        fullWidth
                        className="text-caption font-medium tracking-wide"
                      >
                        {currentTab.bottomBanner.buttonText} - {currentTab.bottomBanner.heading}
                      </Button>
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
                      className="block py-1.5 px-2 text-caption text-muted hover:text-wine hover:bg-cream rounded"
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
    </Drawer>
  );
}
