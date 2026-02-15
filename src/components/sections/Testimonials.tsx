'use client';

import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      location: 'Southampton, NY',
      rating: 5,
      text: 'Renova-Hub transformed my grandmother\'s dresser into a stunning centerpiece for my bedroom. The attention to detail and craftsmanship exceeded my expectations!',
      image: '/images/testimonials/client-1.jpg',
      project: 'French Provincial Dresser',
      style: 'classic' // Classic Luxury
    },
    {
      name: 'Michael Chen',
      location: 'East Hampton, NY',
      rating: 5,
      text: 'I was skeptical about refinishing my vintage desk, but the team at Renova-Hub brought it back to life beautifully. The navy finish is absolutely perfect!',
      image: '/images/testimonials/client-2.jpg',
      project: 'Executive Desk',
      style: 'dark' // Dark Modern
    },
    {
      name: 'Emily Rodriguez',
      location: 'Bridgehampton, NY',
      rating: 5,
      text: 'Professional, timely, and the results are incredible. They helped me choose the perfect sage green for my nightstands. Highly recommend!',
      image: '/images/testimonials/client-3.jpg',
      project: 'Nightstand Pair',
      style: 'heritage' // Heritage
    }
  ];

  // Variantes de estilo alineadas con el ADN de Renova-Hub
  const styleVariants = {
    classic: {
      container: 'border-2 border-[var(--color-primary)]/30 bg-[var(--color-surface)] shadow-xl',
      text: 'text-[var(--color-text)] opacity-90',
      name: 'text-[var(--color-accent)] font-bold',
      location: 'text-[var(--color-accent)]/60',
      project: 'text-[var(--color-primary)] font-medium',
      star: 'text-[var(--color-primary)]',
      avatar: 'bg-[var(--color-primary)]'
    },
    dark: {
      container: 'border border-[var(--color-secondary)]/20 bg-[#1a1a1a] shadow-inner',
      text: 'text-white/90',
      name: 'text-[var(--color-secondary)] font-bold',
      location: 'text-white/40',
      project: 'text-[var(--color-secondary)]/80',
      star: 'text-[var(--color-secondary)]',
      avatar: 'bg-[var(--color-secondary)]'
    },
    heritage: {
      container: 'border-4 border-double border-[var(--color-primary)]/50 bg-[var(--color-background)] shadow-lg',
      text: 'text-[var(--color-accent)]',
      name: 'text-[var(--color-accent)] font-bold',
      location: 'text-[var(--color-accent)]/70',
      project: 'text-[var(--color-primary)] italic',
      star: 'text-[var(--color-primary)]',
      avatar: 'bg-[var(--color-accent)]'
    }
  };

  return (
    <section 
      id="testimonials" 
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ 
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-text)'
            }}
          >
            What Our Clients <span style={{ color: 'var(--color-primary)' }}>Say</span>
          </h2>
          <p 
            className="text-lg md:text-xl max-w-2xl mx-auto opacity-80"
            style={{ color: 'var(--color-text)' }}
          >
            Don't just take our word for it. Here's what our satisfied clients have to say.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const variant = styleVariants[testimonial.style as keyof typeof styleVariants];
            
            return (
              <div 
                key={index}
                className={`rounded-2xl p-8 transition-all hover:scale-105 hover:shadow-2xl ${variant.container}`}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg 
                      key={i}
                      className={`w-5 h-5 ${variant.star}`}
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className={`text-lg mb-6 italic opacity-90 ${variant.text}`}>
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-4">
                  <div 
                    className={`w-12 h-12 rounded-full overflow-hidden flex-shrink-0 ${variant.avatar}`}
                  >
                    <div 
                      className="w-full h-full flex items-center justify-center text-xl font-bold text-white"
                    >
                      {testimonial.name.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <div className={variant.name}>
                      {testimonial.name}
                    </div>
                    <div className={`text-sm ${variant.location}`}>
                      {testimonial.location}
                    </div>
                    <div className={`text-xs mt-1 ${variant.project}`}>
                      {testimonial.project}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <div 
            className="inline-flex items-center gap-8 px-8 py-4 rounded-xl"
            style={{ backgroundColor: 'var(--color-surface)' }}
          >
            <div className="text-center">
              <div 
                className="text-3xl font-bold"
                style={{ color: 'var(--color-primary)' }}
              >
                500+
              </div>
              <div 
                className="text-sm opacity-70"
                style={{ color: 'var(--color-text)' }}
              >
                Happy Clients
              </div>
            </div>
            
            <div 
              className="w-px h-12 opacity-20"
              style={{ backgroundColor: 'var(--color-text)' }}
            />
            
            <div className="text-center">
              <div 
                className="text-3xl font-bold"
                style={{ color: 'var(--color-primary)' }}
              >
                4.9/5
              </div>
              <div 
                className="text-sm opacity-70"
                style={{ color: 'var(--color-text)' }}
              >
                Average Rating
              </div>
            </div>
            
            <div 
              className="w-px h-12 opacity-20"
              style={{ backgroundColor: 'var(--color-text)' }}
            />
            
            <div className="text-center">
              <div 
                className="text-3xl font-bold"
                style={{ color: 'var(--color-primary)' }}
              >
                10+
              </div>
              <div 
                className="text-sm opacity-70"
                style={{ color: 'var(--color-text)' }}
              >
                Years Experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
