'use client';

import { useState } from 'react';
import Image from 'next/image';
import { sampleProjects } from '@/lib/projects';
import WorldViewport from '@/components/ui/WorldViewport';
import type { PointerCoordinates } from '@/types/simulation';

type ThemeFilter = 'all' | 'classic' | 'dark' | 'hybrid';

export default function Gallery() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [themeFilter, setThemeFilter] = useState<ThemeFilter>('all');
  
  const filteredProjects = themeFilter === 'all' 
    ? sampleProjects 
    : sampleProjects.filter(p => p.theme === themeFilter);
  
  return (
    <section 
      id="gallery" 
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ 
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-text)'
            }}
          >
            Our <span style={{ color: 'var(--color-primary)' }}>Transformations</span>
          </h2>
          <p 
            className="text-lg md:text-xl max-w-2xl mx-auto opacity-80 mb-8"
            style={{ color: 'var(--color-text)' }}
          >
            Every piece tells a story. See how we transform worn furniture into stunning statement pieces.
          </p>
          
          {/* Theme Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { value: 'all', label: 'All Styles' },
              { value: 'classic', label: 'Classic Luxury' },
              { value: 'dark', label: 'Dark Luxury' },
              { value: 'hybrid', label: 'Heritage Innovation' }
            ].map((filter) => (
              <button
                key={filter.value}
                onClick={() => setThemeFilter(filter.value as ThemeFilter)}
                className={`
                  px-6 py-2 rounded-full font-medium transition-all
                  ${themeFilter === filter.value ? 'scale-105 shadow-lg' : 'opacity-60 hover:opacity-100'}
                `}
                style={{
                  backgroundColor: themeFilter === filter.value ? 'var(--color-primary)' : 'var(--color-surface)',
                  color: themeFilter === filter.value ? 'var(--color-background)' : 'var(--color-text)',
                  border: `1px solid ${themeFilter === filter.value ? 'transparent' : 'var(--color-primary)'}`
                }}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`
                relative overflow-hidden rounded-2xl cursor-pointer
                transition-all duration-300 hover:scale-105 hover:shadow-2xl
                ${project.featured ? 'md:col-span-2 md:row-span-2' : ''}
              `}
              style={{ 
                backgroundColor: 'var(--color-surface)',
                border: '1px solid rgba(0,0,0,0.1)'
              }}
              onClick={() => setSelectedProject(project.id)}
            >
              {/* Before/After using WorldViewport (Genie 3 ready) */}
              <WorldViewport
                beforeImage={project.beforeImage}
                afterImage={project.afterImage}
                alt={project.title}
                onPointerInteraction={(coords) => {
                  // Phase 1: Just log coordinates
                  // Phase 2: Send to backend for Genie 3 interaction
                  console.log(`[Gallery] Interaction on ${project.id}:`, coords);
                }}
                showLabels={true}
              />

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <span 
                    className="text-xs font-semibold px-2 py-1 rounded-full"
                    style={{ 
                      backgroundColor: 'var(--color-primary)',
                      color: 'var(--color-background)'
                    }}
                  >
                    {project.type}
                  </span>
                  
                  {/* Color Badge */}
                  <span 
                    className="text-xs font-medium px-2 py-1 rounded-full border"
                    style={{ 
                      borderColor: 'var(--color-accent)',
                      color: 'var(--color-accent)'
                    }}
                  >
                    {project.color}
                  </span>
                  
                  <span 
                    className="text-xs opacity-60"
                    style={{ color: 'var(--color-text)' }}
                  >
                    {project.duration}
                  </span>
                </div>
                
                <h3 
                  className="text-xl font-bold mb-2"
                  style={{ 
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--color-text)'
                  }}
                >
                  {project.title}
                </h3>
                
                <p 
                  className="text-sm opacity-70 mb-3"
                  style={{ color: 'var(--color-text)' }}
                >
                  {project.description}
                </p>
                
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="var(--color-accent)" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span 
                    className="text-sm font-medium"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    {project.technique}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl opacity-60" style={{ color: 'var(--color-text)' }}>
              No projects found for this style. Check back soon!
            </p>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#quote"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg"
            style={{ 
              backgroundColor: 'var(--color-primary)',
              color: 'var(--color-background)'
            }}
          >
            Start Your Transformation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
