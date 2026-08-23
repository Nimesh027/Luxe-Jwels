import type { Metadata } from "next";
import WishlistClient from "./WishlistClient";

export const metadata: Metadata = {
  title: "Your Wishlist",
  description: "The Luxe Jewels pieces you've saved for later.",
};

export default function WishlistPage() {
  return <WishlistClient />;
}
