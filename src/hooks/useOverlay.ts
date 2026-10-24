"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

/**
 * Keeps an overlay mounted long enough to play its exit transition.
 * Reopening during the exit cancels the unmount, so rapid toggles never
 * leave a half-closed panel behind.
 */
export function usePresence(open: boolean, exitMs = 260) {
  const [mounted, setMounted] = useState(open);
  if (open && !mounted) setMounted(true);

  useEffect(() => {
    if (open || !mounted) return;
    const timer = setTimeout(() => setMounted(false), exitMs);
    return () => clearTimeout(timer);
  }, [open, mounted, exitMs]);

  return { mounted, state: open ? ("open" as const) : ("closed" as const) };
}

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

interface OverlayBehaviourOptions {
  open: boolean;
  onClose: () => void;
  panelRef: RefObject<HTMLElement | null>;
  closeOnEsc?: boolean;
  lockScroll?: boolean;
}

/**
 * Modal behaviour shared by drawers, dialogs and lightboxes: Escape to close,
 * background scroll lock (without layout shift from the vanishing scrollbar),
 * focus moved into the panel, Tab kept inside it, and focus restored on close.
 */
export function useOverlayBehaviour({
  open,
  onClose,
  panelRef,
  closeOnEsc = true,
  lockScroll = true,
}: OverlayBehaviourOptions) {
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const body = document.body;
    const prevOverflow = body.style.overflow;
    const prevPadding = body.style.paddingRight;

    if (lockScroll) {
      const scrollbar = window.innerWidth - document.documentElement.clientWidth;
      body.style.overflow = "hidden";
      if (scrollbar > 0) body.style.paddingRight = `${scrollbar}px`;
    }

    const panel = panelRef.current;
    if (panel && !panel.contains(document.activeElement)) {
      const autoFocus = panel.querySelector<HTMLElement>("[autofocus], [data-autofocus]");
      (autoFocus ?? panel).focus({ preventScroll: true });
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && closeOnEsc) {
        e.stopPropagation();
        onCloseRef.current();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      const items = Array.from(panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
        (el) => el.offsetParent !== null
      );
      if (items.length === 0) {
        e.preventDefault();
        return;
      }
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;
      if (e.shiftKey && (active === first || active === panelRef.current)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      if (lockScroll) {
        body.style.overflow = prevOverflow;
        body.style.paddingRight = prevPadding;
      }
      if (previouslyFocused?.isConnected) previouslyFocused.focus({ preventScroll: true });
    };
  }, [open, closeOnEsc, lockScroll, panelRef]);
}
