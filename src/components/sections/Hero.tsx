'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

/**
 * Hero Section - Sección principal de la landing page
 * 
 * NOTA: Usando estilos inline debido a problemas de compilación con Tailwind 4
 */

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <section 
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #3b82f6 0%, #3b82f6 50%, #b45309 100%)',
        overflow: 'hidden'
      }}
    >
      {/* Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.2)'
      }} />
      
      {/* Contenido principal */}
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '1280px',
        margin: '0 auto',
        padding: isMobile ? '60px 16px' : '80px 24px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: !isMobile && !isTablet ? '1fr 1fr' : '1fr',
          gap: isMobile ? '32px' : '48px',
          alignItems: 'center'
        }}>
          {/* Columna izquierda: Contenido */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
            textAlign: !isMobile && !isTablet ? 'left' : 'center'
          }}>
            {/* Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(4px)',
              borderRadius: '9999px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              alignSelf: !isMobile && !isTablet ? 'flex-start' : 'center'
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                backgroundColor: '#60a5fa',
                borderRadius: '9999px',
                animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
              }} />
              <span style={{
                fontSize: '14px',
                fontWeight: 500,
                color: 'white'
              }}>
                Restauración Profesional
              </span>
            </div>
            
            {/* Título principal */}
            <h1 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: isMobile ? '36px' : isTablet ? '48px' : '60px',
              fontWeight: 700,
              color: 'white',
              lineHeight: 1.2,
              margin: 0
            }}>
              Transformamos tus Muebles en{' '}
              <span style={{ color: '#fef3c7' }}>
                Obras de Arte
              </span>
            </h1>
            
            {/* Subtítulo */}
            <p style={{
              fontSize: isMobile ? '18px' : '20px',
              color: '#eff6ff',
              maxWidth: '600px',
              lineHeight: 1.6,
              margin: !isMobile && !isTablet ? 0 : '0 auto'
            }}>
              Restauración profesional con más de 10 años de experiencia. 
              Devolvemos la vida a tus muebles favoritos.
            </p>
            
            {/* CTAs */}
            <div style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: '16px',
              justifyContent: !isMobile && !isTablet ? 'flex-start' : 'center'
            }}>
              <Link
                href="#galeria"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '16px 32px',
                  backgroundColor: '#2563eb',
                  color: 'white',
                  fontWeight: 600,
                  borderRadius: '8px',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#1d4ed8';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#2563eb';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                Ver Galería
                <svg 
                  style={{ width: '20px', height: '20px' }}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              
              <Link
                href="#cotizacion"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '16px 32px',
                  backgroundColor: 'transparent',
                  color: 'white',
                  fontWeight: 600,
                  borderRadius: '8px',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  backdropFilter: 'blur(4px)',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                }}
              >
                Solicitar Cotización
              </Link>
            </div>
          </div>
          
          {/* Columna derecha: Imagen Antes/Después */}
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'relative',
              aspectRatio: '1',
              maxWidth: '512px',
              margin: '0 auto',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <div style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                display: 'flex'
              }}>
                {/* Antes */}
                <div style={{ position: 'relative', width: '50%', height: '100%' }}>
                  <Image
                    src="/images/hero/chair-before.png"
                    alt="Silla antigua antes de restaurar"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: '16px',
                    left: '16px',
                    padding: '6px 12px',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    backdropFilter: 'blur(4px)',
                    borderRadius: '9999px'
                  }}>
                    <span style={{
                      fontSize: '12px',
                      fontWeight: 500,
                      color: 'white'
                    }}>Antes</span>
                  </div>
                </div>
                
                {/* Después */}
                <div style={{ position: 'relative', width: '50%', height: '100%' }}>
                  <Image
                    src="/images/hero/chair-after.png"
                    alt="Silla restaurada profesionalmente"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: '16px',
                    right: '16px',
                    padding: '6px 12px',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    backdropFilter: 'blur(4px)',
                    borderRadius: '9999px'
                  }}>
                    <span style={{
                      fontSize: '12px',
                      fontWeight: 500,
                      color: 'white'
                    }}>Después</span>
                  </div>
                </div>
                
                {/* Línea divisoria */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  left: '50%',
                  width: '2px',
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                  transform: 'translateX(-50%)'
                }} />
                
                {/* Icono central */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '48px',
                  height: '48px',
                  backgroundColor: 'white',
                  borderRadius: '9999px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3)',
                  border: '4px solid rgba(255, 255, 255, 0.2)'
                }}>
                  <svg 
                    style={{ width: '24px', height: '24px', color: '#2563eb' }}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </section>
  );
}
