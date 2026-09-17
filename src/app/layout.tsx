import type { Metadata } from "next";
import Script from "next/script";
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
        <Script id="brevo-conversations" strategy="afterInteractive">{`
          (function(d, w, c) {
            w.BrevoConversationsID = '6a59f1d9f62a55a5c908887c';
            w[c] = w[c] || function() {
              (w[c].q = w[c].q || []).push(arguments);
            };
            var s = d.createElement('script');
            s.async = true;
            s.src = 'https://conversations-widget.brevo.com/brevo-conversations.js';
            if (d.head) d.head.appendChild(s);
          })(document, window, 'BrevoConversations');
        `}</Script>
      </body>
    </html>
  );
}
