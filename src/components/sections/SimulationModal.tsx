"use client";

import { useState } from "react";
import Modal from "../ui/Modal";
import { trackEvent } from "@/lib/analytics";

interface SimulationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SimulationModal({
  isOpen,
  onClose,
}: SimulationModalProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Tracking de Lead capturado
    trackEvent("lead_capture", "fake_door", email);
    console.log("[FakeDoor] Lead captured:", { email });
    setSubmitted(true);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="3D Simulation Preview">
      {!submitted ? (
        <div className="space-y-6">
          <div className="mb-4 flex justify-center text-5xl">✨</div>
          <p
            className="text-center text-lg"
            style={{ color: "var(--color-text)" }}
          >
            You&apos;re one of the first to discover our{" "}
            <strong>AI-Powered 3D Simulation</strong> feature!
          </p>
          <p
            className="text-sm opacity-80"
            style={{ color: "var(--color-text)" }}
          >
            We&apos;re currently perfecting the Genie 3 integration to let you
            see EXACTLY how your furniture will look with any paint color and
            finish in real-time.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-sm font-medium"
                style={{ color: "var(--color-text)" }}
              >
                Get early access when we launch:
              </label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full rounded-lg border px-4 py-3 transition-all outline-none focus:ring-2"
                style={{
                  backgroundColor: "var(--color-background)",
                  borderColor: "var(--color-primary)",
                  color: "var(--color-text)",
                }}
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg py-4 font-bold shadow-lg transition-all hover:scale-[1.02]"
              style={{
                backgroundColor: "var(--color-primary)",
                color: "var(--color-background)",
              }}
            >
              Join the Waitlist
            </button>
          </form>

          <p
            className="text-center text-xs opacity-60"
            style={{ color: "var(--color-text)" }}
          >
            Serving the Hamptons with the future of furniture restoration.
          </p>
        </div>
      ) : (
        <div className="space-y-4 py-8 text-center">
          <div className="text-5xl">✅</div>
          <h4
            className="text-2xl font-bold"
            style={{ color: "var(--color-text)" }}
          >
            You&apos;re on the list!
          </h4>
          <p style={{ color: "var(--color-text)" }}>
            Thanks for your interest. We&apos;ll notify you personally as soon
            as the 3D simulators are live.
          </p>
          <button
            onClick={onClose}
            className="mt-6 rounded-lg border-2 px-8 py-2 font-medium transition-all"
            style={{
              borderColor: "var(--color-primary)",
              color: "var(--color-text)",
            }}
          >
            Close
          </button>
        </div>
      )}
    </Modal>
  );
}
