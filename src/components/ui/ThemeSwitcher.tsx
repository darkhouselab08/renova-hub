'use client';

import { useTheme } from '@/contexts/ThemeContext';

export default function ThemeSwitcher() {
  const { theme, setTheme, themeConfig } = useTheme();

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium opacity-70">Style:</span>
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value as any)}
        className="
          px-4 py-2 
          rounded-lg 
          border border-current/20 
          bg-surface/50 
          backdrop-blur-sm
          text-sm font-medium 
          cursor-pointer 
          hover:border-current/40 
          focus:outline-none 
          focus:ring-2 
          focus:ring-primary/50
          transition-all
        "
        title={themeConfig.description}
      >
        <option value="classic">Classic Luxury</option>
        <option value="dark">Dark Luxury</option>
        <option value="hybrid">Heritage Innovation</option>
      </select>
    </div>
  );
}
