import type { Metadata } from "next";
import AccountClient from "@/app/account/AccountClient";

export const metadata: Metadata = {
  title: "My Account | Luxe Jewels",
  description: "View and manage your personal account overview, orders, addresses, and luxury membership details.",
};

export default function AccountPage() {
  return <AccountClient />;
}
