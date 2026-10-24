import type { Metadata } from "next";
import ManufacturingClient from "./ManufacturingClient";

export const metadata: Metadata = {
  title: "Our Manufacturing — From Raw Material to Masterpiece",
  description:
    "Step inside the Luxe Jewels atelier: design, casting, setting, polishing and quality checks behind every hallmarked piece.",
  alternates: { canonical: "/manufacturing" },
};

export default function Page() {
  return <ManufacturingClient />;
}
