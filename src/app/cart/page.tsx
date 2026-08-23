import type { Metadata } from "next";
import CartClient from "./CartClient";

export const metadata: Metadata = {
  title: "Your Cart",
  description: "Review the items in your Luxe Jewels shopping cart.",
};

export default function CartPage() {
  return <CartClient />;
}
