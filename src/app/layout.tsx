import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import ReduxProvider from "@/providers/ReduxProvider";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <ReduxProvider>
          <AnnouncementBar />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
