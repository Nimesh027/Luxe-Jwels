"use client";

import { CloseOutlined } from "@ant-design/icons";
import type { ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { closeModal } from "@/store/slices/uiSlice";

interface ModalProps {
  id: string;
  title?: string;
  children: ReactNode;
}

export default function Modal({ id, title, children }: ModalProps) {
  const dispatch = useAppDispatch();
  const activeModal = useAppSelector((state) => state.ui.activeModal);

  if (activeModal !== id) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 px-4"
      onClick={() => dispatch(closeModal())}
    >
      <div
        className="relative w-full max-w-md bg-surface p-6"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close"
          className="absolute right-4 top-4 text-ink"
          onClick={() => dispatch(closeModal())}
        >
          <CloseOutlined />
        </button>
        {title && <h2 className="mb-4 font-display text-h4 text-ink">{title}</h2>}
        {children}
      </div>
    </div>
  );
}
