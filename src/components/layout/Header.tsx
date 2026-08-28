"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";
import Badge from "@/components/ui/Badge";
import MobileDrawer from "@/components/layout/MobileDrawer";
import UserDrawer from "@/components/layout/UserDrawer";
import UserModals from "@/components/layout/UserModals";
import MegaMenu from "@/components/layout/MegaMenu";
import SearchBar from "@/components/layout/SearchBar";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  setMobileDrawerOpen,
  setCartDrawerOpen,
  setWishlistDrawerOpen,
  setUserDrawerOpen,
} from "@/store/slices/uiSlice";
import { selectCartCount } from "@/store/slices/cartSlice";
import { selectWishlistItems } from "@/store/slices/wishlistSlice";
import { logout } from "@/store/slices/authSlice";
import type { NavLink } from "@/types";

export default function Header() {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const links = useAppSelector((state) => state.navigation.links);
  const cartCount = useAppSelector(selectCartCount);
  const wishlistCount = useAppSelector(selectWishlistItems).length;
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const [activeLinkId, setActiveLinkId] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 45);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isAuthPage =
    pathname === "/login" || pathname === "/register" || pathname === "/forgot-password";
  if (isAuthPage) return null;

  const handleMouseEnter = (id: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (!isSearchOpen) {
      setActiveLinkId(id);
    }
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveLinkId(null);
    }, 180);
  };

  const activeLink = links.find((l) => l.id === activeLinkId);

  return (
    <header
      className="sticky top-0 z-50 border-b border-border bg-surface shadow-xs"
      onMouseLeave={handleMouseLeave}
    >
      {/* TOP ROW: Logo | Search | Other Icons */}
      <div className="py-3 relative z-50 bg-surface">
        <div className="container mx-auto flex items-center justify-between gap-4">
          {/* Mobile Menu Hamburger */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              aria-label="Open menu"
              className="text-ink lg:hidden cursor-pointer hover:text-wine transition-colors p-1"
              onClick={() => dispatch(setMobileDrawerOpen(true))}
            >
              <MenuOutlined />
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <span className="font-display text-xl tracking-[0.2em] text-ink font-semibold">
                LUXE JEWELS
              </span>
            </Link>
          </div>

          {/* Centered Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl mx-6 lg:mx-10 justify-center relative z-50">
            <SearchBar
              className="w-full"
              onOpenChange={(open) => {
                setIsSearchOpen(open);
                if (open) setActiveLinkId(null);
              }}
            />
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center gap-4 sm:gap-6 text-wine shrink-0">
            {/* Mobile Search Toggle Icon */}
            <button
              type="button"
              aria-label="Toggle Search"
              onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
              className="md:hidden text-wine hover:text-wine-dark transition-colors p-1 cursor-pointer"
            >
              <svg
                className="w-5 h-5 sm:w-[22px] sm:h-[22px]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>

            {/* Account / User Icon (Opens Right Slide Drawer) */}
            <button
              type="button"
              aria-label="Account Menu"
              onClick={() => dispatch(setUserDrawerOpen(true))}
              className="flex items-center justify-center text-wine hover:text-wine-dark transition-colors p-1 cursor-pointer"
            >
              {isAuthenticated && user ? (
                <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-wine text-cream text-xs sm:text-sm font-bold uppercase shadow-xs hover:bg-wine-dark hover:scale-105 transition-all">
                  {user.name.charAt(0)}
                </div>
              ) : (
                <svg
                  className="w-5 h-5 sm:w-[22px] sm:h-[22px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="7" r="4" />
                  <path d="M5.5 21a6.5 6.5 0 0 1 13 0" />
                </svg>
              )}
            </button>

            {/* Wishlist / Heart Icon */}
            <button
              type="button"
              aria-label="Open Wishlist"
              onClick={() => dispatch(setWishlistDrawerOpen(true))}
              className="relative text-wine hover:text-wine-dark transition-colors p-1 cursor-pointer"
            >
              <svg
                className="w-5 h-5 sm:w-[22px] sm:h-[22px]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              {wishlistCount > 0 && (
                <Badge className="absolute -right-1.5 -top-1">{wishlistCount}</Badge>
              )}
            </button>

            {/* Cart / Luxury Shopping Bag Icon */}
            <button
              type="button"
              aria-label="Open Cart"
              onClick={() => dispatch(setCartDrawerOpen(true))}
              className="relative text-wine hover:text-wine-dark transition-colors p-1 cursor-pointer"
            >
              <svg
                className="w-5 h-5 sm:w-[22px] sm:h-[22px]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              {cartCount > 0 && (
                <Badge className="absolute -right-1.5 -top-1">{cartCount}</Badge>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar Dropdown (when toggled on mobile) */}
      {mobileSearchOpen && (
        <div className="md:hidden border-b border-border px-4 py-3 bg-surface shadow-md animate-in fade-in slide-in-from-top-1">
          <SearchBar autoFocus onCloseMobile={() => setMobileSearchOpen(false)} />
        </div>
      )}

      {/* BOTTOM ROW: Navigation Menu */}
      <div className="hidden lg:block bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-center gap-8 xl:gap-10 py-2.5" aria-label="Primary">
            {links.map((link) => {
              const hasMegaMenu = Boolean(link.megaMenu);
              const hasChildren = Boolean(link.children?.length);
              const hasDropdown = hasMegaMenu || hasChildren;
              const isOpen = activeLinkId === link.id;

              return (
                <div
                  key={link.id}
                  className="relative py-1"
                  onMouseEnter={() => handleMouseEnter(link.id)}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1.5 text-xs uppercase tracking-wider transition-colors duration-150 py-1 ${isOpen ? "text-wine font-semibold" : "text-ink hover:text-wine"
                      }`}
                  >
                    <span>{link.label}</span>
                    {hasDropdown && (
                      <DownOutlined
                        className={`text-[9px] transition-transform duration-200 ${isOpen ? "rotate-180 text-wine" : "text-muted"
                          }`}
                      />
                    )}
                  </Link>

                  {/* Legacy simple dropdown fallback if megaMenu is not present but children exist */}
                  {hasChildren && !hasMegaMenu && isOpen && (
                    <div className="absolute left-0 top-full z-50 w-56 border border-border bg-surface py-2 shadow-xl rounded-b-lg animate-in fade-in slide-in-from-top-1 duration-150">
                      {link.children?.map((child) => (
                        <Link
                          key={child.id}
                          href={child.href}
                          onClick={() => setActiveLinkId(null)}
                          className="block px-4 py-2 text-xs uppercase tracking-wide text-ink hover:bg-wine-soft hover:text-wine transition-colors"
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
        </div>
      </div>

      {/* Full-Screen Dark Overlay when Search is Active */}
      {isSearchOpen && (
        <div
          style={{ top: isScrolled ? "0px" : "45px" }}
          className="fixed inset-x-0 bottom-0 bg-ink/50 backdrop-blur-[2px] z-40 transition-all duration-200"
          onClick={() => setIsSearchOpen(false)}
        />
      )}

      {/* Full-width Mega Menu Dropdown Container */}
      {activeLink?.megaMenu && !isSearchOpen && (
        <div
          className="absolute left-0 right-0 top-full z-50 w-full bg-surface shadow-2xl border-b border-border/80 animate-in fade-in slide-in-from-top-1 duration-200"
          onMouseEnter={() => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
          }}
          onMouseLeave={handleMouseLeave}
        >
          <MegaMenu
            data={activeLink.megaMenu}
            onClose={() => setActiveLinkId(null)}
          />
        </div>
      )}

      {/* Mobile Drawer, User Drawer & Account Modals */}
      <MobileDrawer />
      <UserDrawer />
      <UserModals />
    </header>
  );
}

