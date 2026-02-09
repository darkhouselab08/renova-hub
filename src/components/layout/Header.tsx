'use client';

import ThemeSwitcher from '@/components/ui/ThemeSwitcher';

export default function Header() {
  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
      style={{
        backgroundColor: 'var(--color-surface)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
        color: 'var(--color-text)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span 
              className="text-2xl font-bold"
              style={{ 
                fontFamily: 'var(--font-heading)',
                color: 'var(--color-primary)'
              }}
            >
              Renova-Hub
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#gallery" className="text-sm font-medium hover:opacity-70 transition-opacity">
              Gallery
            </a>
            <a href="#about" className="text-sm font-medium hover:opacity-70 transition-opacity">
              About
            </a>
            <a href="#contact" className="text-sm font-medium hover:opacity-70 transition-opacity">
              Contact
            </a>
          </nav>

          {/* Theme Switcher */}
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
