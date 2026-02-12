import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#faf8f5] border-t border-[#e8dcc8] pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-[#4a3a24] mb-6 block">
              RENOVA<span className="text-[#b89968]">-HUB</span>
            </Link>
            <p className="text-[#6b5435] max-w-sm">
              Especialistas en la restauración premium de muebles con técnicas artesanales y acabados contemporáneos inspirados en las últimas tendencias.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-[#4a3a24] mb-6 uppercase tracking-wider text-sm">Empresa</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-[#6b5435] hover:text-[#b89968] transition-colors">Sobre Nosotros</Link></li>
              <li><Link href="/galeria" className="text-[#6b5435] hover:text-[#b89968] transition-colors">Galería</Link></li>
              <li><Link href="/servicios" className="text-[#6b5435] hover:text-[#b89968] transition-colors">Servicios</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-[#4a3a24] mb-6 uppercase tracking-wider text-sm">Contacto</h4>
            <ul className="space-y-4 text-[#6b5435]">
              <li>Lima, Perú</li>
              <li>info@renovahub.pe</li>
              <li>+51 987 654 321</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#e8dcc8] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#6b5435]">
          <p>© {new Date().getFullYear()} Renova-Hub. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link href="/privacidad" className="hover:text-[#b89968]">Privacidad</Link>
            <Link href="/terminos" className="hover:text-[#b89968]">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
