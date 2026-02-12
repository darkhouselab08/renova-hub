import { Button } from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-hamptons-gradient overflow-hidden">
      {/* Contenedor principal */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/60 backdrop-blur-md rounded-full shadow-sm mb-8 border border-[#e8dcc8]">
            <span className="text-xl">✨</span>
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8b6f47]">
              Mobiliario con Alma y Legado
            </span>
          </div>

          {/* Título principal */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-[#4a3a24] mb-8 leading-[1.1] tracking-tight">
            Elevamos la esencia de tus{" "}
            <span className="text-[#b89968] italic font-serif">
              clásicos
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-lg sm:text-xl text-[#6b5435] mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Arte, técnica y exclusividad en restauración premium. Convertimos lo atemporal en un lujo contemporáneo para tu espacio.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button variant="primary" size="lg" className="shadow-xl">
              Explorar Colección
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Button>
            <Button variant="outline" size="lg">
              Solicitar Auditoría
            </Button>
          </div>

          {/* Stats con estilo minimalista */}
          <div className="mt-24 pt-12 border-t border-[#e8dcc8]/50 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-light text-[#4a3a24]">500+</div>
              <div className="text-[10px] uppercase tracking-widest text-[#b89968] mt-2">Legados preservados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-[#4a3a24]">15</div>
              <div className="text-[10px] uppercase tracking-widest text-[#b89968] mt-2">Años de maestría</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-[#4a3a24]">98%</div>
              <div className="text-[10px] uppercase tracking-widest text-[#b89968] mt-2">Visión compartida</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decoración de fondo sutil */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#f5f1e8] rounded-full blur-[120px] opacity-60"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#e8dcc8] rounded-full blur-[120px] opacity-40"></div>
      </div>
    </section>
  );
}
