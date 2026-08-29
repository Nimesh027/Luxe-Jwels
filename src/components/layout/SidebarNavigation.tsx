"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const SECTIONS = [
  {
    title: "Customer Service",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "Shipping & Delivery", href: "/shipping" },
      { label: "Returns & Exchanges", href: "/returns" },
      { label: "Track Your Order", href: "/track-order" },
      { label: "FAQs", href: "/faqs" },
    ],
  },
  {
    title: "Information",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Privacy Notice", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Care Guide", href: "/care-guide" },
      { label: "Blog", href: "/blog" },
    ],
  },
];

export default function SidebarNavigation() {
  const pathname = usePathname();

  return (
    <nav className="w-full lg:w-64 shrink-0 bg-surface border border-border/80 rounded-2xl p-6 shadow-xs sticky top-28 h-fit">
      <div className="space-y-8">
        {SECTIONS.map((section) => (
          <div key={section.title}>
            <h3 className="font-display font-semibold text-wine text-h5 mb-4 tracking-wide">
              {section.title}
            </h3>
            <ul className="space-y-1">
              {section.links.map((link) => {
                const isActive = pathname === link.href || (pathname === '/faq' && link.href === '/faqs');
                
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "block px-3 py-2 text-small font-medium rounded-lg transition-colors",
                        isActive
                          ? "bg-wine/5 text-wine"
                          : "text-muted hover:bg-black/5 hover:text-ink"
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}
