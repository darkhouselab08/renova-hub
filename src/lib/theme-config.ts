/**
 * Theme Configuration for Renova-Hub
 * 
 * Three themes to appeal to different client preferences:
 * - Classic: Traditional luxury, light and elegant
 * - Dark: Modern luxury, tech-forward
 * - Hybrid: Best of both worlds (default)
 */

export type ThemeType = 'classic' | 'dark' | 'hybrid';

export interface ThemeConfig {
  name: string;
  description: string;
  colors: {
    background: string;
    surface: string;
    primary: string;
    secondary: string;
    text: string;
    accent: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
}

export const themes: Record<ThemeType, ThemeConfig> = {
  classic: {
    name: 'Classic Luxury',
    description: 'Traditional elegance with warm, inviting tones',
    colors: {
      background: '#fef3c7',  // Warm cream
      surface: '#ffffff',      // Pure white
      primary: '#d4af37',      // Warm gold
      secondary: '#5c4033',    // Rich walnut
      text: '#0f172a',         // Deep navy
      accent: '#059669',       // Forest green
    },
    fonts: {
      heading: 'Playfair Display',
      body: 'Inter',
    }
  },
  
  dark: {
    name: 'Dark Luxury',
    description: 'Modern sophistication with dramatic contrasts',
    colors: {
      background: '#0f172a',   // Slate 900
      surface: '#1e293b',      // Slate 800
      primary: '#d4af37',      // Bright gold
      secondary: '#818cf8',    // Indigo 400
      text: '#f8fafc',         // Slate 50
      accent: '#10b981',       // Emerald 500
    },
    fonts: {
      heading: 'Inter',
      body: 'Inter',
    }
  },
  
  hybrid: {
    name: 'Heritage Innovation',
    description: 'Timeless craftsmanship meets contemporary design',
    colors: {
      background: '#f8f9fa',   // Soft light gray
      surface: '#ffffff',      // White
      primary: '#d4af37',      // Warm gold
      secondary: '#0f172a',    // Navy
      text: '#1e293b',         // Slate 800
      accent: '#059669',       // Forest green
    },
    fonts: {
      heading: 'Playfair Display',
      body: 'Inter',
    }
  }
};

export const DEFAULT_THEME: ThemeType = 'hybrid';
