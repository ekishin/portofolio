import { availabilityLabel } from "../data/portfolioData";

export default function AvailabilityBadge({ className = "" }) {
  return (
    <p
      className={`inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800 ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
      {availabilityLabel}
    </p>
  );
}
