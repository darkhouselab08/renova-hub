'use client';

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Share Your Vision',
      description: 'Upload photos of your furniture and tell us about your style preferences. We\'ll provide a detailed quote within 24 hours.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      number: '02',
      title: 'Expert Transformation',
      description: 'Our skilled craftsmen refinish your piece with premium materials and techniques. We\'ll keep you updated throughout the process.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    },
    {
      number: '03',
      title: 'Delivered with Care',
      description: 'We deliver your beautifully refinished furniture right to your door. Enjoy your transformed piece for years to come!',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      )
    }
  ];

  return (
    <section 
      id="process" 
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: 'var(--color-surface)' }}
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
            How It <span style={{ color: 'var(--color-primary)' }}>Works</span>
          </h2>
          <p 
            className="text-lg md:text-xl max-w-2xl mx-auto opacity-80"
            style={{ color: 'var(--color-text)' }}
          >
            From consultation to delivery, we make furniture refinishing simple and stress-free.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection Lines (hidden on mobile) */}
          <div 
            className="hidden md:block absolute top-24 left-0 right-0 h-0.5 opacity-20"
            style={{ backgroundColor: 'var(--color-primary)' }}
          />

          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative"
            >
              {/* Card */}
              <div 
                className="rounded-2xl p-8 text-center transition-all hover:scale-105 hover:shadow-2xl"
                style={{ 
                  backgroundColor: 'var(--color-background)',
                  border: '2px solid var(--color-primary)'
                }}
              >
                {/* Number Badge */}
                <div 
                  className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold relative z-10"
                  style={{ 
                    backgroundColor: 'var(--color-primary)',
                    color: 'var(--color-background)'
                  }}
                >
                  {step.number}
                </div>

                {/* Icon */}
                <div 
                  className="mb-6 flex justify-center"
                  style={{ color: 'var(--color-primary)' }}
                >
                  {step.icon}
                </div>

                {/* Title */}
                <h3 
                  className="text-2xl font-bold mb-4"
                  style={{ color: 'var(--color-text)' }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p 
                  className="opacity-80"
                  style={{ color: 'var(--color-text)' }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p 
            className="text-lg mb-6 opacity-70"
            style={{ color: 'var(--color-text)' }}
          >
            Ready to transform your furniture?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg"
            style={{ 
              backgroundColor: 'var(--color-primary)',
              color: 'var(--color-background)'
            }}
          >
            Get Your Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}
