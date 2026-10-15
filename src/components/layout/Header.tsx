"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MenuIcon,
  SearchIcon,
  UserIcon,
  HeartIcon,
  ShoppingBagIcon,
  ChevronDownIcon,
} from "@/components/icons";
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
import { usePresence } from "@/hooks/usePresence";

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

  // Mobile search is a full-screen layer: lock page scroll, close when the viewport grows past md
  useEffect(() => {
    if (!mobileSearchOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const mq = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = () => mq.matches && setMobileSearchOpen(false);
    mq.addEventListener("change", closeOnDesktop);
    return () => {
      document.body.style.overflow = prevOverflow;
      mq.removeEventListener("change", closeOnDesktop);
    };
  }, [mobileSearchOpen]);

  const activeLink = links.find((l) => l.id === activeLinkId);

  // Keep the last mega menu rendered while it animates closed
  const activeMega = isSearchOpen ? undefined : activeLink?.megaMenu;
  const [shownMega, setShownMega] = useState(activeMega);
  if (activeMega && activeMega !== shownMega) setShownMega(activeMega);
  const megaMenu = usePresence(Boolean(activeMega), 180);
  const searchOverlay = usePresence(isSearchOpen);
  const mobileSearch = usePresence(mobileSearchOpen);

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

  return (
    <header
      className="sticky top-0 z-50 border-b border-border bg-white shadow-xs"
      onMouseLeave={handleMouseLeave}
    >
      {/* TOP ROW: Logo | Search | Other Icons */}
      <div className="py-3 relative z-50 bg-white">
        <div className="container flex items-center justify-between gap-2 sm:gap-4">
          {/* Mobile Menu Hamburger */}
          <div className="flex min-w-0 items-center gap-1 sm:gap-3">
            <button
              type="button"
              aria-label="Open menu"
              className="-ml-3 flex size-12 items-center justify-center rounded-full text-ink lg:hidden cursor-pointer hover:bg-brown-soft hover:text-brown transition-colors"
              onClick={() => dispatch(setMobileDrawerOpen(true))}
            >
              <MenuIcon size={20} />
            </button>

            {/* Logo */}
            <Link href="/" className="flex min-h-12 min-w-0 items-center">
              <span className="truncate font-display text-h5 sm:text-h4 tracking-wide text-ink font-semibold">
                Luxe Jewels
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
          <div className="-mr-3 flex shrink-0 items-center text-brown sm:gap-1 lg:gap-2">
            {/* Mobile Search Toggle Icon */}
            <button
              type="button"
              aria-label="Open search"
              aria-expanded={mobileSearchOpen}
              onClick={() => setMobileSearchOpen(true)}
              className="flex size-12 items-center justify-center rounded-full md:hidden text-brown hover:bg-brown-soft hover:text-brown-dark transition-colors cursor-pointer"
            >
              <SearchIcon size={20} />
            </button>

            {/* Account / User Icon (Opens Right Slide Drawer) */}
            <button
              type="button"
              aria-label="Account Menu"
              onClick={() => dispatch(setUserDrawerOpen(true))}
              className="hidden min-[360px]:flex size-12 items-center justify-center rounded-full text-brown hover:bg-brown-soft hover:text-brown-dark transition-colors cursor-pointer"
            >
              {isAuthenticated && user ? (
                <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-brown text-offwhite text-body font-bold shadow-xs hover:bg-brown-dark hover:scale-105 transition-all">
                  {user.name.charAt(0)}
                </div>
              ) : (
                <UserIcon size={20} />
              )}
            </button>

            {/* Wishlist / Heart Icon */}
            <button
              type="button"
              aria-label="Open Wishlist"
              onClick={() => dispatch(setWishlistDrawerOpen(true))}
              className="relative flex size-12 items-center justify-center rounded-full text-brown hover:bg-brown-soft hover:text-brown-dark transition-colors cursor-pointer"
            >
              <HeartIcon size={20} />
              {wishlistCount > 0 && (
                <Badge className="absolute right-1 top-1.5">{wishlistCount}</Badge>
              )}
            </button>

            {/* Cart / Luxury Shopping Bag Icon */}
            <button
              type="button"
              aria-label="Open Cart"
              onClick={() => dispatch(setCartDrawerOpen(true))}
              className="relative flex size-12 items-center justify-center rounded-full text-brown hover:bg-brown-soft hover:text-brown-dark transition-colors cursor-pointer"
            >
              <ShoppingBagIcon size={20} />
              {cartCount > 0 && (
                <Badge className="absolute right-1 top-1.5">{cartCount}</Badge>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile full-screen search (own top bar with back button, suggestions fill the screen) */}
      {mobileSearch.mounted && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Search"
          className={`md:hidden fixed inset-0 z-60 h-dvh bg-white ${mobileSearch.open ? "animate-in fade-in slide-in-from-top-4" : "animate-out fade-out slide-out-to-top-4"}`}
        >
          <SearchBar
            variant="panel"
            autoFocus
            className="h-full"
            onCloseMobile={() => setMobileSearchOpen(false)}
          />
        </div>
      )}

      {/* BOTTOM ROW: Navigation Menu */}
      <div className="hidden lg:block bg-white">
        <div className="container">
          <nav className="flex flex-wrap items-center justify-center gap-x-8 xl:gap-x-10 py-1" aria-label="Primary">
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
                    className={`flex min-h-11 items-center gap-1.5 text-small tracking-wide transition-colors duration-150 py-2 ${isOpen ? "text-brown font-semibold" : "text-ink hover:text-brown"
                      }`}
                  >
                    <span>{link.label}</span>
                    {hasDropdown && (
                      <ChevronDownIcon
                        size={12}
                        className={`transition-transform duration-200 ${isOpen ? "rotate-180 text-brown" : "text-muted"
                          }`}
                      />
                    )}
                  </Link>

                  {/* Legacy simple dropdown fallback if megaMenu is not present but children exist */}
                  {hasChildren && !hasMegaMenu && isOpen && (
                    <div className="absolute left-0 top-full z-50 w-56 border border-border bg-white py-2 shadow-xl rounded-b-lg animate-in fade-in slide-in-from-top-2 duration-200">
                      {link.children?.map((child) => (
                        <Link
                          key={child.id}
                          href={child.href}
                          onClick={() => setActiveLinkId(null)}
                          className="block px-4 py-2 text-small tracking-wide text-ink hover:bg-brown-soft hover:text-brown transition-colors"
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
      {searchOverlay.mounted && (
        <div
          style={{ top: isScrolled ? "0px" : "45px" }}
          className={`fixed inset-x-0 bottom-0 bg-ink/50 backdrop-blur-[2px] z-40 ${searchOverlay.open ? "animate-in fade-in" : "animate-out fade-out"}`}
          onClick={() => setIsSearchOpen(false)}
        />
      )}

      {/* Full-width Mega Menu Dropdown Container */}
      {megaMenu.mounted && shownMega && (
        <div
          className={`absolute left-0 right-0 top-full z-50 w-full bg-white shadow-2xl border-b border-border/80 ${megaMenu.open ? "animate-in fade-in slide-in-from-top-2" : "animate-out fade-out slide-out-to-top-1 duration-150"}`}
          onMouseEnter={() => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
          }}
          onMouseLeave={handleMouseLeave}
        >
          <MegaMenu
            data={shownMega}
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

