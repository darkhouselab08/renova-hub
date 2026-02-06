import Image from "next/image";
import Link from "next/link";

/**
 * Hero Section - Sección principal de la landing page
 *
 * Características:
 * - Diseño premium con gradiente azul a madera
 * - Layout responsive (stack en mobile, grid en desktop)
 * - Tipografía Playfair Display para título
 * - Imagen antes/después de restauración
 * - Dos CTAs: primario y secundario
 *
 * @example
 * ```tsx
 * <Hero />
 * ```
 */

interface HeroProps {
  className?: string;
}

export default function Hero({ className = "" }: HeroProps) {
  return (
    <section
      className={`
        relative
        min-h-screen
        flex items-center
        bg-gradient-to-br from-blue-600 via-blue-500 to-amber-700
        overflow-hidden
        ${className}
      `}
    >
      {/* Overlay para mejorar legibilidad */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Elementos decorativos */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-10 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl" />

      {/* Contenido principal */}
      <div
        className="
        relative
        w-full
        max-w-7xl
        mx-auto
        px-4 sm:px-6 lg:px-8
        py-20 md:py-24
      "
      >
        <div
          className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-12 lg:gap-16
          items-center
        "
        >
          {/* Columna izquierda: Contenido */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-white">
                Restauración Profesional
              </span>
            </div>

            {/* Título principal */}
            <h1
              className="
              font-display
              text-4xl sm:text-5xl lg:text-6xl
              font-bold
              text-white
              leading-tight
              tracking-tight
            "
            >
              Transformamos tus Muebles en{" "}
              <span className="text-amber-200">Obras de Arte</span>
            </h1>

            {/* Subtítulo */}
            <p
              className="
              text-lg sm:text-xl
              text-blue-50
              max-w-xl
              mx-auto lg:mx-0
              leading-relaxed
            "
            >
              Restauración profesional con más de 10 años de experiencia.
              Devolvemos la vida a tus muebles favoritos.
            </p>

            {/* CTAs */}
            <div
              className="
              flex
              flex-col sm:flex-row
              gap-4
              justify-center lg:justify-start
            "
            >
              <Link
                href="#galeria"
                className="
                  group
                  inline-flex items-center justify-center
                  gap-2
                  px-8 py-4
                  bg-blue-600
                  text-white
                  font-semibold
                  rounded-lg
                  shadow-lg shadow-blue-900/50
                  transition-all duration-200
                  hover:bg-blue-700
                  hover:scale-105
                  hover:shadow-xl hover:shadow-blue-900/60
                  active:scale-95
                "
              >
                Ver Galería
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>

              <Link
                href="#cotizacion"
                className="
                  inline-flex items-center justify-center
                  px-8 py-4
                  bg-transparent
                  text-white
                  font-semibold
                  rounded-lg
                  border-2 border-white/30
                  backdrop-blur-sm
                  transition-all duration-200
                  hover:bg-white/10
                  hover:border-white/50
                  active:scale-95
                "
              >
                Solicitar Cotización
              </Link>
            </div>
          </div>

          {/* Columna derecha: Imagen Antes/Después */}
          <div className="relative">
            <div
              className="
              relative
              aspect-square
              max-w-lg
              mx-auto
              rounded-2xl
              overflow-hidden
              shadow-2xl
              ring-1 ring-white/10
            "
            >
              {/* Contenedor de imágenes */}
              <div className="relative w-full h-full flex">
                {/* Antes */}
                <div className="relative w-1/2 h-full">
                  <Image
                    src="/images/hero/chair-before.png"
                    alt="Silla antigua antes de restaurar"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-full">
                    <span className="text-xs font-medium text-white">
                      Antes
                    </span>
                  </div>
                </div>

                {/* Después */}
                <div className="relative w-1/2 h-full">
                  <Image
                    src="/images/hero/chair-after.png"
                    alt="Silla restaurada profesionalmente"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-full">
                    <span className="text-xs font-medium text-white">
                      Después
                    </span>
                  </div>
                </div>

                {/* Línea divisoria */}
                <div className="absolute inset-y-0 left-1/2 w-0.5 bg-white/30 -translate-x-1/2" />

                {/* Icono central */}
                <div
                  className="
                  absolute
                  top-1/2 left-1/2
                  -translate-x-1/2 -translate-y-1/2
                  w-12 h-12
                  bg-white
                  rounded-full
                  flex items-center justify-center
                  shadow-lg
                  ring-4 ring-white/20
                "
                >
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Elemento decorativo */}
            <div
              className="
              absolute
              -bottom-6 -right-6
              w-32 h-32
              bg-amber-500/20
              rounded-full
              blur-2xl
              -z-10
            "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
