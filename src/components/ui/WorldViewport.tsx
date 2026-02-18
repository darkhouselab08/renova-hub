"use client";

/**
 * WorldViewport Component
 *
 * PHASE 1: Wrapper component that currently displays static images
 * FUTURE (Phase 2): Will receive and display Genie 3 video streams
 *
 * This component is designed to be a drop-in replacement for Image components
 * in Gallery and Hero, making the transition to 3D simulations seamless.
 */

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import type { PointerCoordinates, WorldStreamState } from "@/types/simulation";

interface WorldViewportProps {
  // Current (Phase 1): Static image props
  beforeImage: string;
  afterImage: string;
  alt: string;

  // Future (Phase 2): Stream props (optional for now)
  streamState?: WorldStreamState;
  onPointerInteraction?: (coords: PointerCoordinates) => void;

  // Layout
  className?: string;
  showLabels?: boolean;
}

export default function WorldViewport({
  beforeImage,
  afterImage,
  alt,
  streamState,
  onPointerInteraction,
  className = "",
  showLabels = true,
}: WorldViewportProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInteractive, setIsInteractive] = useState(false);

  // Capture pointer coordinates for future Genie 3 integration
  const handlePointerEvent = useCallback(
    (
      e: React.PointerEvent<HTMLDivElement>,
      action: "click" | "hover" | "drag"
    ) => {
      if (!containerRef.current || !onPointerInteraction) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const coords: PointerCoordinates = {
        x,
        y,
        timestamp: Date.now(),
        action,
      };

      // Log for Phase 1 (development/debugging)
      console.log("[WorldViewport] Pointer interaction:", coords);

      // Send to parent component (will be used in Phase 2 for backend communication)
      onPointerInteraction(coords);
    },
    [onPointerInteraction]
  );

  // PHASE 2: This will check if we should render stream or fallback to image
  const shouldRenderStream =
    streamState?.isLive &&
    streamState?.streamUrl &&
    !streamState.fallbackToImage;

  return (
    <div
      ref={containerRef}
      className={`relative aspect-square ${className}`}
      onPointerMove={(e) => isInteractive && handlePointerEvent(e, "hover")}
      onPointerDown={(e) => handlePointerEvent(e, "click")}
    >
      {/* PHASE 1: Render static before/after images */}
      {!shouldRenderStream && (
        <div className="absolute inset-0 flex">
          {/* Before */}
          <div className="relative h-full w-1/2 overflow-hidden">
            <Image
              src={beforeImage}
              alt={`${alt} before restoration`}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              style={{ objectFit: "cover" }}
              className="grayscale-[30%]"
            />
            {showLabels && (
              <div
                className="absolute top-4 left-4 rounded-full px-3 py-1 backdrop-blur-md"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
              >
                <span className="text-xs font-medium text-white">Before</span>
              </div>
            )}
          </div>

          {/* After */}
          <div className="relative h-full w-1/2 overflow-hidden">
            <Image
              src={afterImage}
              alt={`${alt} after restoration`}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              style={{ objectFit: "cover" }}
            />
            {showLabels && (
              <div
                className="absolute top-4 right-4 rounded-full px-3 py-1 backdrop-blur-md"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
              >
                <span className="text-xs font-medium text-white">After</span>
              </div>
            )}
          </div>

          {/* Center Divider */}
          <div
            className="absolute top-0 bottom-0 left-1/2 w-0.5 -translate-x-1/2"
            style={{ backgroundColor: "var(--color-primary)" }}
          />
        </div>
      )}

      {/* PHASE 2: Render Genie 3 video stream (placeholder for now) */}
      {shouldRenderStream && (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <div className="text-center text-white">
            <div className="mb-2 animate-pulse">🎬</div>
            <p className="text-sm">3D Simulation Loading...</p>
            <p className="mt-1 text-xs opacity-60">
              Stream ID: {streamState.simulationId}
            </p>
          </div>
          {/* TODO Phase 2: Replace with actual video stream component */}
          {/* <video src={streamState.streamUrl} autoPlay loop /> */}
        </div>
      )}

      {/* Interactive indicator (Phase 2) */}
      {onPointerInteraction && (
        <button
          onClick={() => setIsInteractive(!isInteractive)}
          className="absolute top-2 right-2 rounded-full px-2 py-1 text-xs backdrop-blur-md transition-all"
          style={{
            backgroundColor: isInteractive
              ? "rgba(var(--color-primary-rgb), 0.8)"
              : "rgba(0, 0, 0, 0.4)",
            color: "white",
          }}
        >
          {isInteractive ? "🎯 Interactive" : "👆 Click to interact"}
        </button>
      )}
    </div>
  );
}
