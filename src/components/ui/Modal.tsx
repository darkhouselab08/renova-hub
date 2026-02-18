"use client";

import { useEffect, useRef } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div
        ref={modalRef}
        className="animate-in fade-in zoom-in relative w-full max-w-lg overflow-hidden rounded-2xl shadow-2xl duration-300"
        style={{
          backgroundColor: "var(--color-surface)",
          borderColor: "var(--color-primary)",
          borderWidth: "1px",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between border-b p-6"
          style={{ borderColor: "rgba(0,0,0,0.05)" }}
        >
          {title && (
            <h3
              className="text-xl font-bold"
              style={{
                color: "var(--color-text)",
                fontFamily: "var(--font-heading)",
              }}
            >
              {title}
            </h3>
          )}
          <button
            onClick={onClose}
            className="rounded-full p-2 transition-colors hover:bg-black/5"
            style={{ color: "var(--color-text)" }}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
