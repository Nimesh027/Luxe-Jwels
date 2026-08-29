import HelpBoxSection from "@/components/common/HelpBoxSection";

export default function ShippingHelpBox() {
  return (
    <HelpBoxSection
      title="Have Questions About Your Shipment?"
      description="Our luxury concierge team is available to assist you with order status, address updates, or delivery scheduling."
      primaryAction={{ label: "Contact Concierge", href: "/contact" }}
      secondaryAction={{ label: "Call 1800-266-0123", href: "tel:18002660123" }}
    />
  );
}
