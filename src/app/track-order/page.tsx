import type { Metadata } from "next";
import TrackOrderClient from "./TrackOrderClient";

export const metadata: Metadata = {
  title: "Track Your Order | Luxe Jewels",
  description: "Track your fine jewellery shipment in real time using your Order ID or AWB waybill number. View live courier status and estimated delivery time.",
};

export default function TrackOrderPage() {
  return <TrackOrderClient />;
}
