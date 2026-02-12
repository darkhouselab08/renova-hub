import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "@/contexts/ThemeContext";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Renova-Hub | Premium Furniture Restoration",
  description: "We transform your furniture with professional restoration techniques. Project gallery, quotes, and online store.",
  keywords: ["furniture restoration", "vintage furniture", "renovation", "chalky paint", "upholstery"],
};

import GoogleAnalytics from "@/lib/analytics";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ""} />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

