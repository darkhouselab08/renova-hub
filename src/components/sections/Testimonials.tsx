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

  // Variantes de estilo para cada identidad visual
  const styleVariants = {
    classic: {
      container: 'font-serif border-2 border-amber-400/60 bg-gradient-to-br from-amber-50/50 to-orange-50/30 shadow-amber-200/50',
      text: 'text-amber-900',
      name: 'text-amber-800 font-semibold',
      location: 'text-amber-700/70',
      project: 'text-amber-600',
      star: 'text-amber-500',
      avatar: 'bg-gradient-to-br from-amber-400 to-orange-500'
    },
    dark: {
      container: 'font-sans border border-cyan-500/50 bg-slate-900 ring-1 ring-cyan-500/30 shadow-cyan-500/20',
      text: 'text-slate-100',
      name: 'text-cyan-400 font-bold',
      location: 'text-slate-400',
      project: 'text-cyan-300',
      star: 'text-cyan-400',
      avatar: 'bg-gradient-to-br from-cyan-500 to-blue-600'
    },
    heritage: {
      container: 'font-serif border-4 border-double border-amber-700/60 bg-amber-50/80 shadow-inner',
      text: 'text-amber-950',
      name: 'text-amber-900 font-semibold',
      location: 'text-amber-800/70',
      project: 'text-amber-700',
      star: 'text-amber-600',
      avatar: 'bg-gradient-to-br from-amber-600 to-yellow-700'
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
