import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Help & Contact | Luxe Jewels",
  description: "Get in touch with Luxe Jewels customer care, live chat, or phone concierge. Explore FAQs about fine jewellery orders, shipping, and custom sizing.",
};

export default function ContactPage() {
  return <ContactClient />;
}
