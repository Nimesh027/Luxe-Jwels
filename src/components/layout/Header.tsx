"use client";

import Link from "next/link";
import {
  DownOutlined,
  HeartOutlined,
  MenuOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Badge from "@/components/ui/Badge";
import MobileDrawer from "@/components/layout/MobileDrawer";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setMobileDrawerOpen } from "@/store/slices/uiSlice";
import { selectCartCount } from "@/store/slices/cartSlice";
import { selectWishlistItems } from "@/store/slices/wishlistSlice";

export default function Header() {
  const dispatch = useAppDispatch();
  const links = useAppSelector((state) => state.navigation.links);
  const cartCount = useAppSelector(selectCartCount);
  const wishlistCount = useAppSelector(selectWishlistItems).length;

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <button
          type="button"
          aria-label="Open menu"
          className="text-xl text-ink lg:hidden"
          onClick={() => dispatch(setMobileDrawerOpen(true))}
        >
          <MenuOutlined />
        </button>

        <Link href="/" className="flex items-center gap-2">
          <span className="font-display text-xl tracking-[0.2em] text-ink">LUXE JEWELS</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <div key={link.id} className="group relative">
              <Link
                href={link.href}
                className="flex items-center gap-1 text-xs uppercase tracking-wide text-ink hover:text-gold"
              >
                {link.label}
                {link.children && <DownOutlined className="text-[9px]" />}
              </Link>
              {link.children && (
                <div className="invisible absolute left-0 top-full z-50 w-56 border border-border bg-surface py-2 opacity-0 shadow-lg transition-all duration-150 group-hover:visible group-hover:opacity-100">
                  {link.children.map((child) => (
                    <Link
                      key={child.id}
                      href={child.href}
                      className="block px-4 py-2 text-xs uppercase tracking-wide text-ink hover:bg-cream hover:text-gold"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-4 text-lg text-ink">
          <button type="button" aria-label="Search" className="hidden sm:inline-flex hover:text-gold">
            <SearchOutlined />
          </button>
          <Link href="/login" aria-label="Account" className="hidden sm:inline-flex hover:text-gold">
            <UserOutlined />
          </Link>
          <Link href="/wishlist" aria-label="Wishlist" className="relative inline-flex hover:text-gold">
            <HeartOutlined />
            {wishlistCount > 0 && (
              <Badge className="absolute -right-2 -top-2">{wishlistCount}</Badge>
            )}
          </Link>
          <Link href="/cart" aria-label="Cart" className="relative inline-flex hover:text-gold">
            <ShoppingCartOutlined />
            {cartCount > 0 && <Badge className="absolute -right-2 -top-2">{cartCount}</Badge>}
          </Link>
        </div>
      </div>

      <MobileDrawer />
    </header>
  );
}
