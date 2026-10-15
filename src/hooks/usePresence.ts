import { useEffect, useState } from "react";

/**
 * Keeps an element mounted long enough to play its exit animation.
 *
 * const { mounted, open } = usePresence(isOpen);
 * if (!mounted) return null;
 * <div className={open ? "animate-in fade-in" : "animate-out fade-out"} />
 */
export function usePresence(isOpen: boolean, exitMs = 220) {
  const [mounted, setMounted] = useState(isOpen);

  // Mount immediately on open (state adjusted during render, no extra effect pass)
  if (isOpen && !mounted) setMounted(true);

  useEffect(() => {
    if (isOpen || !mounted) return;
    const timer = setTimeout(() => setMounted(false), exitMs);
    return () => clearTimeout(timer);
  }, [isOpen, mounted, exitMs]);

  return { mounted: isOpen || mounted, open: isOpen };
}
