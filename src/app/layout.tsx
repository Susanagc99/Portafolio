import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Susana Gutiérrez | Full-Stack Developer",
  description: "Full-Stack Developer passionate about creating digital experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {/* Header aparece en todas las páginas */}
        <Header />
        
        {/* Contenido de cada página */}
        <main className="min-h-screen">
          {children}
        </main>
        
        {/* Footer opcional */}
        <footer className="bg-gray-900 text-white py-6 text-center">
          <p className="text-sm">© 2025 Susana Gutiérrez Callejas. Todos los derechos reservados.</p>
        </footer>
      </body>
    </html>
  );
}