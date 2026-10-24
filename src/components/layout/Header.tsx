"use client";

import { useState, useRef, useEffect, memo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MenuIcon,
  SearchIcon,
  UserIcon,
  HeartIcon,
  ShoppingBagIcon,
  ChevronDownIcon,
  CloseIcon,
} from "@/components/icons";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import MobileDrawer from "@/components/layout/MobileDrawer";
import UserDrawer from "@/components/layout/UserDrawer";
import UserModals from "@/components/layout/UserModals";
import SearchBar from "@/components/layout/SearchBar";
import MegaMenu from "@/components/layout/MegaMenu";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  setMobileDrawerOpen,
  setCartDrawerOpen,
  setWishlistDrawerOpen,
  setUserDrawerOpen,
} from "@/store/slices/uiSlice";
import { selectCartCount } from "@/store/slices/cartSlice";
import { selectWishlistItems } from "@/store/slices/wishlistSlice";

// Geometric Luxury Diamond Icon matching reference image
function DiamondLogoIcon({ className = "w-7 h-7 text-[#B38E5D]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16 2L2 12L16 30L30 12L16 2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M2 12H30M16 2L10 12L16 30L22 12L16 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M8 2L10 12M24 2L22 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeaderComponent() {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const links = useAppSelector((state) => state.navigation.links);
  const cartCount = useAppSelector(selectCartCount);
  const wishlistCount = useAppSelector(selectWishlistItems).length;
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);

  const [activeLinkId, setActiveLinkId] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const activeLink = links.find((l) => l.id === activeLinkId);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 40);
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
    setActiveLinkId(id);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveLinkId(null);
    }, 150);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 border-b border-[#EAE4DC] ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-white shadow-xs"
      }`}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[70px] sm:h-[76px] gap-2 lg:gap-4">
          {/* LEFT: Mobile Menu Hamburger & Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <Button
              variant="unstyled"
              aria-label="Open menu"
              className="text-[#141414] lg:hidden cursor-pointer hover:text-[#B38E5D] transition-colors p-1.5 -ml-1.5"
              onClick={() => dispatch(setMobileDrawerOpen(true))}
            >
              <MenuIcon size={22} />
            </Button>

            {/* Brand Logo & Subtitle */}
            <Link href="/" className="flex items-center gap-2.5 group shrink-0">
              <DiamondLogoIcon className="w-6 h-6 sm:w-7 sm:h-7 text-[#B38E5D] transition-transform duration-300 group-hover:scale-105" />
              <div className="flex flex-col">
                <span className="font-display text-[18px] sm:text-[20px] tracking-[0.16em] text-[#141414] font-semibold uppercase leading-none">
                  LUXE JEWELS
                </span>
                <span className="font-body text-[8.5px] sm:text-[9px] uppercase tracking-[0.24em] text-[#8C827A] font-medium mt-1">
                  Timeless Elegance
                </span>
              </div>
            </Link>
          </div>

          {/* CENTER: Desktop Navigation Menu */}
          <nav
            className="hidden lg:flex items-center justify-center gap-6 xl:gap-9 2xl:gap-11 flex-1 min-w-0 px-4"
            aria-label="Primary Navigation"
          >
            {links.map((link) => {
              const hasMegaMenu = Boolean(link.megaMenu);
              const hasChildren = Boolean(link.children?.length);
              const hasDropdown = hasMegaMenu || hasChildren;
              const isOpen = activeLinkId === link.id;
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname.startsWith(`${link.href}/`);

              return (
                <div
                  key={link.id}
                  className="relative py-2 shrink-0"
                  onMouseEnter={() => handleMouseEnter(link.id)}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1.5 text-[13px] tracking-[0.14em] uppercase font-medium transition-colors py-1 whitespace-nowrap ${
                      isActive || isOpen
                        ? "text-[#B38E5D] font-semibold"
                        : "text-[#141414] hover:text-[#B38E5D]"
                    }`}
                  >
                    <span className="whitespace-nowrap">{link.label}</span>
                    {hasDropdown && (
                      <ChevronDownIcon
                        size={11}
                        className={`transition-transform duration-200 shrink-0 ${
                          isOpen ? "rotate-180 text-[#B38E5D]" : "text-neutral-400"
                        }`}
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu for Links with Children (when not megaMenu) */}
                  {hasChildren && !hasMegaMenu && isOpen && (
                    <div className="absolute left-0 top-full pt-2 z-50 min-w-[210px] animate-in fade-in slide-in-from-top-1 duration-150">
                      <div className="bg-white border border-[#EAE4DC] rounded-lg shadow-xl py-2 overflow-hidden">
                        {link.children?.map((child) => (
                          <Link
                            key={child.id}
                            href={child.href}
                            onClick={() => setActiveLinkId(null)}
                            className="block px-4 py-2 text-[12.5px] tracking-wider text-[#141414] hover:bg-[#FAF7F2] hover:text-[#B38E5D] transition-colors whitespace-nowrap"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* RIGHT: Actions Cluster (Search, Wishlist, Account, Cart) */}
          <div className="flex items-center gap-1 sm:gap-2 lg:gap-3 text-[#141414]">
            {/* Search Icon Button */}
            <Button
              variant="unstyled"
              aria-label="Toggle search"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={`p-2 rounded-full cursor-pointer transition-colors ${
                isSearchOpen
                  ? "text-[#B38E5D] bg-[#FAF7F2]"
                  : "text-[#141414] hover:text-[#B38E5D] hover:bg-[#FAF7F2]"
              }`}
            >
              {isSearchOpen ? <CloseIcon size={20} /> : <SearchIcon size={20} />}
            </Button>

            {/* Wishlist Button */}
            <Button
              variant="unstyled"
              aria-label="Open Wishlist"
              id="header-wishlist-btn"
              onClick={() => dispatch(setWishlistDrawerOpen(true))}
              className="relative p-2 rounded-full text-[#141414] hover:text-[#B38E5D] hover:bg-[#FAF7F2] transition-colors cursor-pointer"
            >
              <HeartIcon size={20} />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 flex items-center justify-center min-w-[17px] h-[17px] px-1 text-[10px] font-semibold text-white bg-[#B38E5D] rounded-full shadow-xs">
                  {wishlistCount}
                </span>
              )}
            </Button>

            {/* Desktop Account Button */}
            <Button
              variant="unstyled"
              aria-label="Account Menu"
              onClick={() => dispatch(setUserDrawerOpen(true))}
              className="hidden lg:flex items-center justify-center p-2 rounded-full text-[#141414] hover:text-[#B38E5D] hover:bg-[#FAF7F2] transition-colors cursor-pointer"
            >
              {isAuthenticated && user ? (
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#B38E5D] text-white text-[12px] font-bold uppercase shadow-xs">
                  {user.name.charAt(0)}
                </div>
              ) : (
                <UserIcon size={20} />
              )}
            </Button>

            {/* Shopping Bag / Cart Button */}
            <Button
              variant="unstyled"
              aria-label="Open Cart"
              id="header-cart-btn"
              onClick={() => dispatch(setCartDrawerOpen(true))}
              className="relative p-2 rounded-full text-[#141414] hover:text-[#B38E5D] hover:bg-[#FAF7F2] transition-colors cursor-pointer"
            >
              <ShoppingBagIcon size={20} />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 flex items-center justify-center min-w-[17px] h-[17px] px-1 text-[10px] font-semibold text-white bg-[#B38E5D] rounded-full shadow-xs">
                  {cartCount}
                </span>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Full Luxury Search Overlay Modal when Toggled */}
      {isSearchOpen && (
        <SearchBar autoFocus onClose={() => setIsSearchOpen(false)} />
      )}

      {/* Full-width Mega Menu Dropdown Container */}
      {activeLink?.megaMenu && !isSearchOpen && (
        <div
          className="absolute left-0 right-0 top-full z-50 w-full bg-white shadow-2xl border-b border-[#EAE4DC] animate-in fade-in slide-in-from-top-1 duration-200"
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

export default memo(HeaderComponent);
