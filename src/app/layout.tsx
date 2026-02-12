import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Renova-Hub | Restauración de Muebles Premium",
  description: "Transformamos tus muebles con técnicas profesionales de restauración. Galería de proyectos, cotizaciones y tienda online.",
  keywords: ["restauración de muebles", "muebles vintage", "renovación", "pintura chalky", "tapicería"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} antialiased font-sans bg-white text-[#4a3a24]`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
