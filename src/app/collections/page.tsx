import type { Metadata } from "next";
import CollectionsListClient from "./CollectionsListClient";

export const metadata: Metadata = {
  title: "Collections",
  description: "Browse every Luxe Jewels collection, from diamonds to gifting.",
};

export default function CollectionsPage() {
  return <CollectionsListClient />;
}
