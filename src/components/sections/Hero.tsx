'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import WorldViewport from '@/components/ui/WorldViewport';
import type { PointerCoordinates } from '@/types/simulation';

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <section className="relative min-h-screen flex items-center pt-16" style={{ backgroundColor: 'var(--color-background)' }}>
      {/* Content Container */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Content */}
          <div className="flex flex-col gap-8 text-center md:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border self-center md:self-start"
                 style={{ 
                   backgroundColor: 'var(--color-surface)', 
                   borderColor: 'var(--color-primary)',
                   color: 'var(--color-text)'
                 }}>
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--color-accent)' }} />
              <span className="text-sm font-medium">Expert Furniture Refinishing</span>
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                style={{ 
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--color-text)'
                }}>
              Transform Your Furniture with{' '}
              <span style={{ color: 'var(--color-primary)' }}>
                Custom Paint & Finishes
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg md:text-xl max-w-2xl mx-auto md:mx-0 opacity-80"
               style={{ color: 'var(--color-text)' }}>
              Professional refinishing for dressers, nightstands, desks, and more. 
              Serving the Hamptons with premium paint finishes and expert craftsmanship.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="#gallery"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg"
                style={{ 
                  backgroundColor: 'var(--color-primary)',
                  color: 'var(--color-background)'
                }}
              >
                View Gallery
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              
              <Link
                href="#quote"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold border-2 transition-all hover:scale-105"
                style={{ 
                  borderColor: 'var(--color-primary)',
                  color: 'var(--color-text)',
                  backgroundColor: 'transparent'
                }}
              >
                Request Quote
              </Link>
            </div>
          </div>
          
          {/* Right Column: Before/After using WorldViewport */}
          <div className="relative">
            <div className="relative max-w-lg mx-auto rounded-2xl overflow-hidden shadow-2xl border"
                 style={{ borderColor: 'var(--color-primary)' }}>
              <WorldViewport
                beforeImage="/images/hero/chair-before.png"
                afterImage="/images/hero/chair-after.png"
                alt="Professional furniture restoration"
                onPointerInteraction={(coords) => {
                  // Phase 1: Log coordinates for development
                  console.log('[Hero] User interaction:', coords);
                  // Phase 2: This will trigger backend call to Genie 3
                }}
                showLabels={true}
              />
              
              {/* Center Icon Overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-4 pointer-events-none"
                   style={{ 
                     backgroundColor: 'var(--color-surface)',
                     borderColor: 'var(--color-primary)'
                   }}>
                <svg className="w-6 h-6" fill="none" stroke="var(--color-primary)" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
