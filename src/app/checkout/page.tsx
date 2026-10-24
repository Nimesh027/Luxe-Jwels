import type { Metadata } from "next";
import CheckoutClient from "./CheckoutClient";

export const metadata: Metadata = {
  title: "Secure Checkout",
  description:
    "Complete your Luxe Jewels order with secure payment options.",
  alternates: { canonical: "/checkout" },
  robots: { index: false, follow: false },
};

export default function Page() {
  return <CheckoutClient />;
}
