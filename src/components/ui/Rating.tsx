import { StarIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

interface RatingProps {
  value: number;
  max?: number;
  className?: string;
  size?: number;
}

export default function Rating({ value, max = 5, className, size = 15 }: RatingProps) {
  const rounded = Math.round(value);
  return (
    <span
      role="img"
      className={cn("inline-flex items-center gap-0.5", className)}
      aria-label={`Rated ${value} out of ${max}`}
    >
      {Array.from({ length: max }, (_, index) => (
        <StarIcon
          key={index}
          size={size}
          filled={index < rounded}
          className={index < rounded ? "text-star" : "text-border-strong"}
        />
      ))}
    </span>
  );
}
