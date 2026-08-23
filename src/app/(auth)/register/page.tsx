import type { Metadata } from "next";
import RegisterClient from "./RegisterClient";

export const metadata: Metadata = {
  title: "Register",
  description: "Create a new Luxe Jewels account.",
};

export default function RegisterPage() {
  return <RegisterClient />;
}
