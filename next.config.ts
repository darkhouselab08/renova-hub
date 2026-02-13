import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimización para Chip M4 Pro y longevidad de SSD
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  // Nota: Next 15 habilita Turbo vía CLI con --turbo
};

export default nextConfig;
