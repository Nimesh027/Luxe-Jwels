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
import MobileDrawer from "@/components/layout/MobileDrawer";
import UserDrawer from "@/components/layout/UserDrawer";
import UserModals from "@/components/layout/UserModals";
import SearchBar from "@/components/layout/SearchBar";
import MegaMenu from "@/components/layout/MegaMenu";
import BrandLogo from "@/components/layout/BrandLogo";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  setMobileDrawerOpen,
  setCartDrawerOpen,
  setWishlistDrawerOpen,
  setUserDrawerOpen,
} from "@/store/slices/uiSlice";
import { selectCartCount } from "@/store/slices/cartSlice";
import { selectWishlistItems } from "@/store/slices/wishlistSlice";
import { cn } from "@/lib/utils";

const iconButton =
  "relative inline-flex h-10 w-10 items-center justify-center rounded-full text-ink hover:text-gold hover:bg-cream transition-colors cursor-pointer";

function CountBadge({ count }: { count: number }) {
  if (count <= 0) return null;
  return (
    <span className="absolute top-0.5 right-0.5 flex items-center justify-center min-w-[18px] h-[18px] px-1 text-[10.5px] font-semibold leading-none text-white bg-brand rounded-full ring-2 ring-white">
      {count}
    </span>
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
    const handleScroll = () => setIsScrolled(window.scrollY >= 40);
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
    timeoutRef.current = setTimeout(() => setActiveLinkId(null), 150);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-white border-b border-border transition-shadow duration-300",
        isScrolled && "shadow-[0_6px_24px_-12px_rgb(30_26_22/0.18)]"
      )}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 sm:h-[76px] gap-3 lg:gap-6">
          {/* Left: menu toggle (mobile) + logo */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              type="button"
              aria-label="Open menu"
              className={cn(iconButton, "lg:hidden -ml-2")}
              onClick={() => dispatch(setMobileDrawerOpen(true))}
            >
              <MenuIcon size={22} />
            </button>
            <BrandLogo />
          </div>

          {/* Center: desktop navigation */}
          <nav className="hidden lg:flex items-center justify-center flex-1 min-w-0" aria-label="Primary">
            <ul className="flex items-center gap-5 xl:gap-8">
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
                  <li
                    key={link.id}
                    className="relative"
                    onMouseEnter={() => (hasDropdown ? handleMouseEnter(link.id) : setActiveLinkId(null))}
                  >
                    <Link
                      href={link.href}
                      aria-current={isActive ? "page" : undefined}
                      aria-expanded={hasDropdown ? isOpen : undefined}
                      className={cn(
                        "relative flex items-center gap-1 py-7 text-[14.5px] font-medium whitespace-nowrap transition-colors",
                        "after:absolute after:left-0 after:right-0 after:bottom-[22px] after:h-px after:bg-brand after:origin-left after:transition-transform after:duration-300",
                        isActive || isOpen
                          ? "text-gold after:scale-x-100"
                          : "text-ink hover:text-gold after:scale-x-0 hover:after:scale-x-100"
                      )}
                    >
                      {link.label}
                      {hasDropdown && (
                        <ChevronDownIcon
                          size={12}
                          className={cn("transition-transform duration-200", isOpen && "rotate-180")}
                        />
                      )}
                    </Link>

                    {hasChildren && !hasMegaMenu && isOpen && (
                      <div className="absolute left-0 top-full z-50 min-w-[220px] animate-fadeIn">
                        <ul className="bg-white border border-border rounded-[var(--radius-card)] shadow-[var(--shadow-lift)] py-2">
                          {link.children?.map((child) => (
                            <li key={child.id}>
                              <Link
                                href={child.href}
                                onClick={() => setActiveLinkId(null)}
                                className="block px-4 py-2 text-[14px] text-ink hover:bg-cream hover:text-gold transition-colors"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right: actions */}
          <div className="flex items-center gap-0.5 sm:gap-1 -mr-2">
            <button
              type="button"
              aria-label={isSearchOpen ? "Close search" : "Search"}
              aria-expanded={isSearchOpen}
              onClick={() => setIsSearchOpen((v) => !v)}
              className={cn(iconButton, isSearchOpen && "text-gold bg-cream")}
            >
              {isSearchOpen ? <CloseIcon size={20} /> : <SearchIcon size={20} />}
            </button>

            <button
              type="button"
              aria-label="Account"
              onClick={() => dispatch(setUserDrawerOpen(true))}
              className={cn(iconButton, "max-sm:hidden")}
            >
              {isAuthenticated && user ? (
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand text-white text-[12px] font-semibold uppercase">
                  {user.name.charAt(0)}
                </span>
              ) : (
                <UserIcon size={20} />
              )}
            </button>

            <button
              type="button"
              aria-label={`Wishlist${wishlistCount ? `, ${wishlistCount} items` : ""}`}
              id="header-wishlist-btn"
              onClick={() => dispatch(setWishlistDrawerOpen(true))}
              className={iconButton}
            >
              <HeartIcon size={20} />
              <CountBadge count={wishlistCount} />
            </button>

            <button
              type="button"
              aria-label={`Cart${cartCount ? `, ${cartCount} items` : ""}`}
              id="header-cart-btn"
              onClick={() => dispatch(setCartDrawerOpen(true))}
              className={iconButton}
            >
              <ShoppingBagIcon size={20} />
              <CountBadge count={cartCount} />
            </button>
          </div>
        </div>
      </div>

      {isSearchOpen && <SearchBar autoFocus onClose={() => setIsSearchOpen(false)} />}

      {activeLink?.megaMenu && !isSearchOpen && (
        <div
          className="absolute left-0 right-0 top-full z-50 w-full animate-fadeIn"
          onMouseEnter={() => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
          }}
          onMouseLeave={handleMouseLeave}
        >
          <MegaMenu data={activeLink.megaMenu} onClose={() => setActiveLinkId(null)} />
        </div>
      )}

      <MobileDrawer />
      <UserDrawer />
      <UserModals />
    </header>
  );
}

export default memo(HeaderComponent);
