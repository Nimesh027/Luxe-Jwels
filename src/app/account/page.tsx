import type { Metadata } from "next";
import { Suspense } from "react";
import AccountClient from "@/app/account/AccountClient";

export const metadata: Metadata = {
  title: "My Account | Luxe Jewels",
  description: "View and manage your personal account overview, orders, addresses, and luxury membership details.",
};

export default function AccountPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-surface py-20 text-center text-caption text-muted">Loading account...</div>}>
      <AccountClient />
    </Suspense>
  );
}
