import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Sans } from "next/font/google";
import ReduxProvider from "@/providers/ReduxProvider";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/cart/CartDrawer";
import WishlistDrawer from "@/components/wishlist/WishlistDrawer";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
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
      className={`${fraunces.variable} ${ibmPlexSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <ReduxProvider>
          <AnnouncementBar />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
          <WishlistDrawer />
        </ReduxProvider>
      </body>
    </html>
  );
}
