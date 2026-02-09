'use client';

import Image from 'next/image';

export default function About() {
  return (
    <section 
      id="about" 
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div 
              className="rounded-2xl overflow-hidden shadow-2xl"
              style={{ border: '2px solid var(--color-primary)' }}
            >
              <Image
                src="/images/workshop.jpg"
                alt="Renova-Hub Workshop"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Badge */}
            <div 
              className="absolute -bottom-6 -right-6 px-6 py-4 rounded-xl shadow-lg"
              style={{ 
                backgroundColor: 'var(--color-primary)',
                color: 'var(--color-background)'
              }}
            >
              <div className="text-3xl font-bold">10+</div>
              <div className="text-sm opacity-90">Years Experience</div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ 
                fontFamily: 'var(--font-heading)',
                color: 'var(--color-text)'
              }}
            >
              Craftsmanship Meets <span style={{ color: 'var(--color-primary)' }}>Innovation</span>
            </h2>
            
            <div 
              className="space-y-4 text-lg opacity-90 mb-8"
              style={{ color: 'var(--color-text)' }}
            >
              <p>
                At Renova-Hub, we believe every piece of furniture has a story worth preserving. 
                With over a decade of experience in furniture refinishing, we've transformed 
                hundreds of pieces for discerning clients in the Hamptons.
              </p>
              
              <p>
                Our approach combines traditional craftsmanship with modern techniques and 
                technology. From classic French provincial to bold contemporary styles, we 
                bring your vision to life with meticulous attention to detail.
              </p>
              
              <p>
                What sets us apart is our commitment to sustainability and personalization. 
                Instead of discarding beloved furniture, we give it new life with custom 
                finishes that perfectly match your aesthetic.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div 
                  className="text-3xl font-bold mb-1"
                  style={{ color: 'var(--color-primary)' }}
                >
                  500+
                </div>
                <div 
                  className="text-sm opacity-70"
                  style={{ color: 'var(--color-text)' }}
                >
                  Projects Completed
                </div>
              </div>
              
              <div className="text-center">
                <div 
                  className="text-3xl font-bold mb-1"
                  style={{ color: 'var(--color-primary)' }}
                >
                  98%
                </div>
                <div 
                  className="text-sm opacity-70"
                  style={{ color: 'var(--color-text)' }}
                >
                  Client Satisfaction
                </div>
              </div>
              
              <div className="text-center">
                <div 
                  className="text-3xl font-bold mb-1"
                  style={{ color: 'var(--color-primary)' }}
                >
                  3
                </div>
                <div 
                  className="text-sm opacity-70"
                  style={{ color: 'var(--color-text)' }}
                >
                  Signature Styles
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#quote"
              className="inline-block px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg"
              style={{ 
                backgroundColor: 'var(--color-primary)',
                color: 'var(--color-background)'
              }}
            >
              Start Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
