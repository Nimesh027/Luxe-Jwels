import type { Metadata } from "next";
import ShippingClient from "./ShippingClient";

export const metadata: Metadata = {
  title: "Shipping & Delivery Policy | Luxe Jewels",
  description: "Learn about Luxe Jewels complimentary insured domestic shipping, global express luxury delivery, transit insurance, and tamper-evident packaging.",
};

export default function ShippingPage() {
  return <ShippingClient />;
}
