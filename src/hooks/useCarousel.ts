import { useCallback, useEffect, useRef, useState } from "react";

interface UseCarouselOptions {
  itemCount: number;
  autoplayMs?: number;
}

export function useCarousel({ itemCount, autoplayMs }: UseCarouselOptions) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (target: number) => {
      if (itemCount === 0) return;
      setIndex(((target % itemCount) + itemCount) % itemCount);
    },
    [itemCount]
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  const canNext = itemCount > 1;
  const canPrev = itemCount > 1;

  useEffect(() => {
    if (!autoplayMs || itemCount <= 1) return;
    timerRef.current = setInterval(() => {
      setIndex((current) => (current + 1) % itemCount);
    }, autoplayMs);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [autoplayMs, itemCount]);

  return { index, next, prev, goTo, canNext, canPrev };
}
