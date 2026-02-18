"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { ThemeType } from "@/lib/theme-config";

export default function ThemeSwitcher() {
  const { theme, setTheme, themeConfig } = useTheme();

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium opacity-70">Style:</span>
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value as ThemeType)}
        className="bg-surface/50 focus:ring-primary/50 cursor-pointer rounded-lg border border-current/20 px-4 py-2 text-sm font-medium backdrop-blur-sm transition-all hover:border-current/40 focus:ring-2 focus:outline-none"
        title={themeConfig.description}
      >
        <option value="classic">Classic Luxury</option>
        <option value="dark">Dark Luxury</option>
        <option value="hybrid">Heritage Innovation</option>
      </select>
    </div>
  );
}
