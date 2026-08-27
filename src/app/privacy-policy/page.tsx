import type { Metadata } from "next";
import PrivacyPolicyClient from "@/app/privacy-policy/PrivacyPolicyClient";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description: "Read the official Privacy Notice and Data Protection Policy for Luxe Jewels.",
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyClient />;
}
