import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import ReduxProvider from "@/providers/ReduxProvider";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/cart/CartDrawer";
import WishlistDrawer from "@/components/wishlist/WishlistDrawer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://luxejewels.com"),
  title: {
    template: "%s | Luxe Jewels",
    default: "Luxe Jewels | Timeless Elegance, Crafted for You",
  },
  description:
    "Fine jewellery for every moment that defines you. Shop certified, hallmarked rings, necklaces, bracelets, earrings and pendants at Luxe Jewels.",
  openGraph: {
    title: "Luxe Jewels | Timeless Elegance, Crafted for You",
    description:
      "Fine jewellery for every moment that defines you. Certified, hallmarked, trusted by thousands.",
    siteName: "Luxe Jewels",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${plusJakartaSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-cream text-ink overflow-x-clip w-full max-w-full" suppressHydrationWarning>
        <ReduxProvider>
          <AnnouncementBar />
          <Header />
          <main className="flex-1 w-full overflow-x-hidden">{children}</main>
          <Footer />
          <CartDrawer />
          <WishlistDrawer />
        </ReduxProvider>
      </body>
    </html>
  );
}
