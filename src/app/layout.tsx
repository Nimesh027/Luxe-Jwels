import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import ReduxProvider from "@/providers/ReduxProvider";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/cart/CartDrawer";
import WishlistDrawer from "@/components/wishlist/WishlistDrawer";
import { SITE_URL } from "@/lib/seo";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1e1a16",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | Luxe Jewels",
    default: "Luxe Jewels | Timeless Elegance, Crafted for You",
  },
  description:
    "Fine jewellery for every moment that defines you. Shop certified, hallmarked rings, necklaces, bracelets, earrings and pendants at Luxe Jewels.",
  applicationName: "Luxe Jewels",
  keywords: [
    "fine jewellery",
    "diamond rings",
    "gold necklaces",
    "hallmarked gold jewellery",
    "certified diamonds",
    "bridal jewellery India",
    "Luxe Jewels",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Luxe Jewels | Timeless Elegance, Crafted for You",
    description:
      "Fine jewellery for every moment that defines you. Certified, hallmarked, trusted by thousands.",
    siteName: "Luxe Jewels",
    type: "website",
    locale: "en_IN",
    url: "/",
    images: [{ url: "/images/revamp/hero-bride.jpg", width: 1200, height: 630, alt: "Luxe Jewels fine jewellery" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxe Jewels | Timeless Elegance, Crafted for You",
    description: "Certified diamonds and hallmarked gold jewellery, handcrafted for life's moments.",
    images: ["/images/revamp/hero-bride.jpg"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.ico",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "JewelryStore",
  name: "Luxe Jewels",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.ico`,
  image: `${SITE_URL}/images/revamp/hero-bride.jpg`,
  description: "Certified diamonds and hallmarked gold jewellery, handcrafted since 1995.",
  telephone: "+91-98765-43210",
  email: "support@luxejewels.com",
  priceRange: "₹₹₹",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${cormorant.variable} ${jakarta.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-cream text-ink w-full max-w-full" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-ink focus:text-white focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to content
        </a>
        <ReduxProvider>
          <AnnouncementBar />
          <Header />
          <main id="main-content" className="flex-1 w-full overflow-x-clip">
            {children}
          </main>
          <Footer />
          <CartDrawer />
          <WishlistDrawer />
        </ReduxProvider>
      </body>
    </html>
  );
}
