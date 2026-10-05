import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturesPreview } from "@/components/FeaturesPreview";
import { HowItWorks } from "@/components/HowItWorks";
import { Integrations } from "@/components/Integrations";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.saruapps.com/#organization",
      "name": "Saru Apps",
      "url": "https://www.saruapps.com",
      "logo": "https://www.saruapps.com/logo.png",
      "description":
        "Plataforma para crear apps móviles nativas para tiendas Tiendanube. Editor drag & drop, notificaciones push y herramientas de engagement sin necesidad de código.",
      "sameAs": [
        "https://www.instagram.com/saruapps/",
        "https://www.linkedin.com/company/saru-apps",
        "https://x.com/saruapps",
        "https://www.youtube.com/@SaruApps",
        "https://www.tiktok.com/@saruapps",
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "sales",
        "url": "https://calendly.com/saruapps/30min",
        "availableLanguage": ["es"],
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.saruapps.com/#software",
      "name": "Saru Apps",
      "url": "https://www.saruapps.com",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "iOS, Android",
      "description":
        "Transformá tu tienda Tiendanube en una app móvil nativa para iOS y Android sin escribir código. Todos los planes incluyen app nativa publicada en App Store y Google Play, editor drag & drop, sincronización automática de productos, notificaciones push y herramientas de engagement para aumentar las ventas recurrentes.",
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "49",
        "highPrice": "349",
        "priceCurrency": "USD",
        "offerCount": "4",
      },
      "featureList": [
        "App nativa para iOS y Android publicada en App Store y Google Play (incluida en todos los planes)",
        "Editor visual drag & drop para personalizar cada pantalla de la app",
        "Sincronización automática de productos, stock, precios y pedidos con Tiendanube",
        "Notificaciones push segmentadas (hasta 50.000/mes)",
        "Recuperación de carrito abandonado con notificaciones automáticas",
        "Notificación de back in stock",
        "Drops exclusivos con cuenta regresiva",
        "Productos exclusivos de la app",
        "Recomendaciones cross-sell",
        "Buscador de productos integrado",
        "Wishlist y favoritos",
        "Seguimiento de pedidos en tiempo real",
        "Cuenta de cliente con historial",
        "Badges de producto e indicador de bajo stock",
        "Quick add to cart",
        "Barra de envío gratis",
        "Deep linking",
        "Multiidioma",
        "White label (sin marca Saru Apps)",
        "Rich push con imágenes",
        "Diseños programados por campaña",
        "Precios mayoristas (B2B)",
        "Analytics en tiempo real",
      ],
      "creator": {
        "@type": "Organization",
        "@id": "https://www.saruapps.com/#organization",
      },
    },
    {
      "@type": "WebSite",
      "url": "https://www.saruapps.com",
      "name": "Saru Apps",
      "publisher": {
        "@type": "Organization",
        "@id": "https://www.saruapps.com/#organization",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero />
      <FeaturesPreview />
      <HowItWorks />
      <Integrations />
      <CTA />
      <Footer />
    </>
  );
}
