import type { Metadata } from "next";
import { CookieBanner } from "@/components/CookieBanner";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saru Apps — Crea la app móvil de tu tienda Tiendanube",
  description:
    "Transforma tu tienda Tiendanube en una app móvil sin escribir código. Editor drag & drop, notificaciones push, y herramientas de fidelización para aumentar tus ventas recurrentes.",
  keywords: [
    "app móvil",
    "tiendanube",
    "ecommerce",
    "mobile app builder",
    "drag and drop",
    "fidelización",
  ],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Saru Apps — Crea la app móvil de tu tienda Tiendanube",
    description:
      "Transforma tu tienda Tiendanube en una app móvil sin escribir código.",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
