import { StarFilled, StarOutlined } from "@ant-design/icons";
import { cn } from "@/lib/utils";

interface RatingProps {
  value: number;
  max?: number;
  className?: string;
}

export default function Rating({ value, max = 5, className }: RatingProps) {
  return (
    <div className={cn("flex items-center gap-0.5 text-gold", className)} aria-label={`${value} out of ${max} stars`}>
      {Array.from({ length: max }, (_, index) =>
        index < value ? <StarFilled key={index} /> : <StarOutlined key={index} />
      )}
    </div>
  );
}
