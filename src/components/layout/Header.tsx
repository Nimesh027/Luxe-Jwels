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
} from "@/components/icons";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
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
      className="sticky top-0 z-50 border-b border-border bg-surface shadow-xs w-full"
      onMouseLeave={handleMouseLeave}
    >
      {/* TOP ROW: Logo | Search | Other Icons */}
      <div className="py-2.5 sm:py-3.5 relative z-50 bg-surface">
        <div className="container mx-auto flex items-center justify-between gap-3 px-4 sm:px-6">
          {/* Mobile Menu Hamburger + Logo */}
          <div className="flex items-center gap-3 sm:gap-4 min-w-0">
            <Button
              variant="unstyled"
              aria-label="Open menu"
              className="text-ink lg:hidden cursor-pointer hover:text-wine transition-colors p-1 shrink-0 -ml-1"
              onClick={() => dispatch(setMobileDrawerOpen(true))}
            >
              <MenuIcon size={22} />
            </Button>

            {/* Logo */}
            <Link href="/" className="flex items-center shrink min-w-0">
              <span className="font-display text-[17px] xs:text-[19px] sm:text-xl md:text-h4 tracking-[0.14em] sm:tracking-[0.2em] text-ink font-semibold whitespace-nowrap select-none">
                LUXE JEWELS
              </span>
            </Link>
          </div>

          {/* Centered Search Bar: Desktop only */}
          <div className="hidden lg:flex flex-1 max-w-xl mx-8 xl:mx-10 justify-center relative z-50">
            <SearchBar
              className="w-full"
              onOpenChange={(open) => {
                setIsSearchOpen(open);
                if (open) setActiveLinkId(null);
              }}
            />
          </div>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-1.5 sm:gap-3 lg:gap-5 xl:gap-6 text-wine shrink-0">
            {/* Mobile-only: Search Icon */}
            <Button
              variant="unstyled"
              aria-label="Toggle Search"
              onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
              className="lg:hidden text-wine hover:text-wine-dark transition-colors p-1.5 cursor-pointer flex items-center justify-center"
            >
              <SearchIcon size={20} />
            </Button>

            {/* Desktop-only: Account / User Icon (Opens Right Slide Drawer) */}
            <Button
              variant="unstyled"
              aria-label="Account Menu"
              onClick={() => dispatch(setUserDrawerOpen(true))}
              className="hidden lg:flex items-center justify-center text-wine hover:text-wine-dark transition-colors p-1 cursor-pointer"
            >
              {isAuthenticated && user ? (
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-wine text-cream text-body font-bold uppercase shadow-xs hover:bg-wine-dark hover:scale-105 transition-all">
                  {user.name.charAt(0)}
                </div>
              ) : (
                <UserIcon size={21} />
              )}
            </Button>

            {/* Wishlist / Heart Icon (Mobile & Desktop) */}
            <Button
              variant="unstyled"
              aria-label="Open Wishlist"
              id="header-wishlist-btn"
              onClick={() => dispatch(setWishlistDrawerOpen(true))}
              className="relative text-wine hover:text-wine-dark transition-colors p-1.5 cursor-pointer flex items-center justify-center"
            >
              <HeartIcon size={20} />
              {wishlistCount > 0 && (
                <Badge className="absolute -right-1 -top-0.5 scale-90 sm:scale-100">{wishlistCount}</Badge>
              )}
            </Button>

            {/* Cart / Luxury Shopping Bag Icon (Mobile & Desktop) */}
            <Button
              variant="unstyled"
              aria-label="Open Cart"
              id="header-cart-btn"
              onClick={() => dispatch(setCartDrawerOpen(true))}
              className="relative text-wine hover:text-wine-dark transition-colors p-1.5 cursor-pointer flex items-center justify-center"
            >
              <ShoppingBagIcon size={20} />
              {cartCount > 0 && (
                <Badge className="absolute -right-1 -top-0.5 scale-90 sm:scale-100">{cartCount}</Badge>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar Dropdown (when toggled on mobile) */}
      {mobileSearchOpen && (
        <div className="lg:hidden border-b border-border px-4 py-3 bg-surface shadow-md animate-in fade-in slide-in-from-top-1 w-full">
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
                    className={`flex items-center gap-1.5 text-caption uppercase tracking-wider transition-colors duration-150 py-1 ${
                      isOpen ? "text-wine font-semibold" : "text-ink hover:text-wine"
                    }`}
                  >
                    <span>{link.label}</span>
                    {hasDropdown && (
                      <ChevronDownIcon
                        size={12}
                        className={`transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-wine" : "text-muted"
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
                          className="block px-4 py-2 text-caption uppercase tracking-wide text-ink hover:bg-wine-soft hover:text-wine transition-colors"
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

export default memo(HeaderComponent);
