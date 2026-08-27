import type { Metadata } from "next";
import PrivacyPolicyClient from "../privacy-policy/PrivacyPolicyClient";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description: "Read the official Privacy Notice and Data Protection Policy for Luxe Jewels.",
};

export default function PrivacyPage() {
  return <PrivacyPolicyClient />;
}
