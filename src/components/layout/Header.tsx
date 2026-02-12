"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-sm py-4" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tighter text-[#4a3a24]">
            RENOVA<span className="text-[#b89968]">-HUB</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-[#4a3a24] hover:text-[#b89968] transition-colors">
            Inicio
          </Link>
          <Link href="/galeria" className="text-sm font-medium text-[#4a3a24] hover:text-[#b89968] transition-colors">
            Galería
          </Link>
          <Link href="/servicios" className="text-sm font-medium text-[#4a3a24] hover:text-[#b89968] transition-colors">
            Servicios
          </Link>
          <Link href="/contacto" className="text-sm font-medium text-[#4a3a24] hover:text-[#b89968] transition-colors">
            Contacto
          </Link>
          <Button variant="primary" size="sm">
            Cotizar Proyecto
          </Button>
        </nav>

        {/* Mobile Toggle (Placeholder for now) */}
        <button className="md:hidden p-2 text-[#4a3a24]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </header>
  );
}
