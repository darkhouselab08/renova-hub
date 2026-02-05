export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      {/* Contenedor principal */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm mb-8">
            <span className="text-2xl">🛠️</span>
            <span className="text-sm font-medium text-gray-700">
              Restauración Premium de Muebles
            </span>
          </div>

          {/* Título principal */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Transformamos tus{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
              muebles vintage
            </span>{" "}
            en obras de arte
          </h1>

          {/* Subtítulo */}
          <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Técnicas profesionales de restauración, acabados únicos y atención
            personalizada para cada proyecto.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Ver Transformaciones
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
            <button className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold text-lg shadow-md hover:shadow-lg transition-all duration-300 border-2 border-gray-200 hover:border-amber-600">
              Cotizar Proyecto
            </button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600">500+</div>
              <div className="text-sm text-gray-600 mt-1">
                Muebles Restaurados
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600">15+</div>
              <div className="text-sm text-gray-600 mt-1">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600">98%</div>
              <div className="text-sm text-gray-600 mt-1">
                Clientes Satisfechos
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decoración de fondo */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
