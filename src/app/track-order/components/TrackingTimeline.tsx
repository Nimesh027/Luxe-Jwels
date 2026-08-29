import React from "react";

// --- SVG Icons ---
const VaultIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
    <circle cx="12" cy="12" r="3"/>
    <path d="M12 15v4"/>
  </svg>
);

const SearchIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
  </svg>
);

const PlaneIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.6L3 8l6 4-4 4-2.5-.5c-.3 0-.6.2-.7.5L1.5 17 6 18l1 4.5c.1.3.4.5.7.4l.7-.4-.5-2.5 4-4 4 6l1.2-.7c.3-.2.6-.6.5-1.1z"/>
  </svg>
);

const TruckIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M10 17h4V5H2v12h3"/>
    <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5"/>
    <path d="M14 17h1"/>
    <circle cx="7.5" cy="17.5" r="2.5"/>
    <circle cx="17.5" cy="17.5" r="2.5"/>
  </svg>
);

const PackageIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m7.5 4.27 9 5.15"/>
    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
    <path d="m3.3 7 8.7 5 8.7-5"/>
    <path d="M12 22V12"/>
  </svg>
);

const CheckIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 6 9 17l-5-5"/>
  </svg>
);

const MapPinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);

export default function TrackingTimeline() {
  const timelineSteps = [
    {
      title: "Order Placed & Vault Reserved",
      date: "24 Aug, 10:30 AM",
      location: "Luxe Jewels Vault, Mumbai",
      description: "Payment confirmed. Item reserved from primary vault inventory.",
      status: "completed",
      icon: <VaultIcon />,
    },
    {
      title: "BIS Hallmark & Gemologist Audit",
      date: "25 Aug, 02:15 PM",
      location: "Quality Assurance Lab, Mumbai",
      description: "22K/18K Gold purity & IGI Diamond certification verified.",
      status: "completed",
      icon: <SearchIcon />,
    },
    {
      title: "Dispatched via Sequel Express Air",
      date: "26 Aug, 09:00 AM",
      location: "Mumbai Airport Cargo Terminal",
      description: "Handed to Sequel Logistics. 100% transit insurance activated.",
      status: "completed",
      icon: <PlaneIcon />,
    },
    {
      title: "Out for Delivery",
      date: "27 Aug, 08:30 AM",
      location: "Bengaluru Delivery Hub",
      description: "Courier agent on the way. Please keep OTP ready upon arrival.",
      status: "active",
      icon: <TruckIcon />,
    },
    {
      title: "Delivered & Verified",
      date: "Est. Today by 5:00 PM",
      location: "Bengaluru Residence",
      description: "Final OTP verification and recipient signature confirmation.",
      status: "pending",
      icon: <PackageIcon />,
    },
  ];

  return (
    <div className="bg-surface rounded-3xl border border-border/80 p-6 sm:p-10 shadow-xs space-y-8">
      <div className="flex items-center justify-between border-b border-border pb-4">
        <h3 className="font-display text-h5 sm:text-h4 font-semibold text-wine">
          Shipment Journey Timeline
        </h3>
        <span className="text-caption text-muted font-medium">Live Status Updates</span>
      </div>

      {/* Vertical Stepper List */}
      <div className="relative pl-6 sm:pl-10 space-y-8">
        {timelineSteps.map((step, index) => {
          const isCompleted = step.status === "completed";
          const isActive = step.status === "active";
          const isLast = index === timelineSteps.length - 1;

          return (
            <div key={index} className="relative flex items-start gap-4 sm:gap-6 pb-2 last:pb-0">
              
              {/* Connecting Line to Next Step (Omitted on Last Step) */}
              {!isLast && (
                <div className="absolute -left-[10px] sm:-left-[24px] top-8 -bottom-8 w-0.5 bg-border/70" />
              )}

              {/* Step Circle Indicator */}
              <div
                className={`absolute -left-6 sm:-left-10 top-0.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-caption font-bold transition-all shadow-2xs z-10 ${
                  isCompleted
                    ? "bg-wine text-white"
                    : isActive
                    ? "bg-amber-500 text-white ring-4 ring-amber-100 animate-pulse"
                    : "bg-neutral-200 text-neutral-400"
                }`}
              >
                {isCompleted ? <CheckIcon /> : step.icon}
              </div>

              {/* Content Block */}
              <div className="space-y-1 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4
                    className={`font-display font-semibold text-body ${
                      isCompleted || isActive ? "text-wine" : "text-neutral-400"
                    }`}
                  >
                    {step.title}
                  </h4>
                  <span
                    className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
                      isActive
                        ? "bg-amber-50 text-amber-700 border border-amber-200"
                        : "bg-neutral-100 text-muted"
                    }`}
                  >
                    {step.date}
                  </span>
                </div>

                <p className="text-caption text-ink/80 font-normal leading-relaxed">
                  {step.description}
                </p>

                <span className="text-[11px] text-muted font-medium flex items-center gap-1 pt-0.5">
                  <MapPinIcon className="opacity-80" /> {step.location}
                </span>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}
