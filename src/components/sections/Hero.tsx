'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

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
          
          {/* Right Column: Before/After Image */}
          <div className="relative">
            <div className="relative aspect-square max-w-lg mx-auto rounded-2xl overflow-hidden shadow-2xl border"
                 style={{ borderColor: 'var(--color-primary)' }}>
              <div className="relative w-full h-full flex">
                {/* Before */}
                <div className="relative w-1/2 h-full">
                  <Image
                    src="/images/hero/chair-before.png"
                    alt="Old chair before restoration"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                  <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full backdrop-blur-md"
                       style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                    <span className="text-xs font-medium text-white">Before</span>
                  </div>
                </div>
                
                {/* After */}
                <div className="relative w-1/2 h-full">
                  <Image
                    src="/images/hero/chair-after.png"
                    alt="Professionally restored chair"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                  <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full backdrop-blur-md"
                       style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                    <span className="text-xs font-medium text-white">After</span>
                  </div>
                </div>
                
                {/* Divider Line */}
                <div className="absolute top-0 bottom-0 left-1/2 w-0.5 -translate-x-1/2"
                     style={{ backgroundColor: 'var(--color-primary)' }} />
                
                {/* Center Icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-4"
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
      </div>
    </section>
  );
}
