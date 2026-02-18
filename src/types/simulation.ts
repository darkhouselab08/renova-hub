// Types for Genie 3 World Model integration (Phase 1 preparation)
// These types extend our current data model to support future 3D simulations

/**
 * Extended Project type with simulation capabilities
 * Backwards compatible: all simulation fields are optional
 */
export interface SimulationCapableProject {
  // Existing fields (from Project interface)
  id: string;
  title: string;
  type: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  technique: string;
  duration: string;
  theme: "classic" | "dark" | "hybrid";
  color: string;
  featured?: boolean;

  // NEW: Simulation fields (optional for gradual migration)
  simulation?: {
    id: string; // Unique simulation identifier
    streamUrl?: string; // URL for Genie 3 video stream (720p @ 24fps)
    status: "pending" | "generating" | "ready" | "error";
    fallbackToImage: boolean; // If true, show static image instead of stream
  };

  // NEW: 3D world state metadata
  worldState?: {
    hasInteractive3D: boolean; // Can user interact with this project?
    supportedActions: ("rotate" | "zoom" | "changeLight" | "changeFinish")[]; // Available interactions
    initialViewAngle?: number; // Default camera angle (0-360)
  };
}

/**
 * Coordinate data for pointer interactions
 * Used to send spatial input to Genie 3 backend
 */
export interface PointerCoordinates {
  x: number; // X coordinate relative to viewport
  y: number; // Y coordinate relative to viewport
  timestamp: number; // When the interaction occurred
  action: "click" | "hover" | "drag"; // Type of interaction
}

/**
 * Stream state from Genie 3 backend
 * Represents the current state of a world simulation
 */
export interface WorldStreamState {
  simulationId: string;
  streamUrl: string;
  fps: number; // Frames per second (typically 24)
  resolution: {
    width: number; // Typically 1280 (720p)
    height: number; // Typically 720
  };
  isLive: boolean; // Is the stream currently active?
  fallbackToImage: boolean; // If true, show static image instead of stream
  lastFrameTimestamp: number;
}
