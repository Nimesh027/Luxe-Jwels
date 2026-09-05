import { StarIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

interface RatingProps {
  value: number;
  max?: number;
  className?: string;
  size?: number;
}

export default function Rating({ value, max = 5, className, size = 15 }: RatingProps) {
  return (
    <span className={cn("inline-flex items-center gap-0.5 text-gold", className)} aria-label={`${value} out of ${max} stars`}>
      {Array.from({ length: max }, (_, index) => (
        <StarIcon
          key={index}
          size={size}
          filled={index < value}
          className={index < value ? "text-gold" : "text-border"}
        />
      ))}
    </span>
  );
}
