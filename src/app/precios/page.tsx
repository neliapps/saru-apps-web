import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PreciosContent } from "@/components/PreciosContent";

export const metadata = {
  title: "Precios — Saru Apps",
  description:
    "Planes y precios de Saru Apps. Empezá gratis y escalá a medida que tu app crece.",
};

const pricingJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "name": "Saru Apps",
      "url": "https://www.saruapps.com",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "iOS, Android",
      "description":
        "Plataforma para crear apps móviles nativas para tiendas Tiendanube. Todos los planes incluyen app nativa para iOS y Android publicada en App Store y Google Play.",
      "offers": [
        {
          "@type": "Offer",
          "name": "Starter",
          "description":
            "App nativa para iOS y Android, editor drag & drop, sincronización automática de productos, 1.000 notificaciones push/mes, buscador de productos, wishlist/favoritos, cuenta de cliente con historial, seguimiento de pedidos, categorías y colecciones, carrito con cupones, 1 página personalizada, banner de instalación, soporte por email.",
          "price": "49",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "49",
            "priceCurrency": "USD",
            "referenceQuantity": {
              "@type": "QuantitativeValue",
              "value": "1",
              "unitCode": "MON",
            },
          },
          "url": "https://app.saruapps.com/register",
        },
        {
          "@type": "Offer",
          "name": "Growth",
          "description":
            "Todo lo de Starter más: 10.000 notificaciones push/mes, recuperación de carrito abandonado, notificación de back in stock, bienvenida automática, repetir pedido con un tap, badges de producto, indicador de bajo stock, quick add to cart, historial de productos visitados, white label (sin marca Saru Apps), 3 páginas personalizadas.",
          "price": "149",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "149",
            "priceCurrency": "USD",
            "referenceQuantity": {
              "@type": "QuantitativeValue",
              "value": "1",
              "unitCode": "MON",
            },
          },
          "url": "https://app.saruapps.com/register",
        },
        {
          "@type": "Offer",
          "name": "Scale",
          "description":
            "Todo lo de Growth más: 50.000 notificaciones push/mes, push segmentado por comportamiento, descuento en favoritos, drops exclusivos con cuenta regresiva, productos exclusivos de la app, recomendaciones cross-sell, barra de envío gratis, diseños programados por campaña, rich push con imágenes, precios mayoristas (B2B), multiidioma, deep linking, páginas personalizadas ilimitadas.",
          "price": "349",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "349",
            "priceCurrency": "USD",
            "referenceQuantity": {
              "@type": "QuantitativeValue",
              "value": "1",
              "unitCode": "MON",
            },
          },
          "url": "https://app.saruapps.com/register",
        },
        {
          "@type": "Offer",
          "name": "Enterprise",
          "description":
            "Todo lo de Scale más: notificaciones push ilimitadas, chat en la app, QR code banner para desktop, API dedicada, account manager exclusivo, SLA garantizado, integraciones custom. Precio a medida.",
          "url": "https://calendly.com/saruapps/30min",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Puedo probar Saru Apps antes de pagar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí. Podés crear tu cuenta gratis, diseñar tu app completa y ver una preview de cómo se vería. Solo pagás cuando decidís publicarla. No se requiere tarjeta de crédito para empezar.",
          },
        },
        {
          "@type": "Question",
          "name": "¿Hay costos de setup o configuración?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. No hay costo de setup ni de configuración. Solo pagás el plan mensual o anual que elijas. Los únicos costos adicionales son las cuentas de desarrollador de Apple y Google, que son requeridas por las tiendas de apps.",
          },
        },
        {
          "@type": "Question",
          "name": "¿Cobran comisión por venta?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. No tomamos comisión sobre tus ventas ni cobramos por notificación. Cada plan incluye un volumen de notificaciones push mensuales sin costo adicional.",
          },
        },
        {
          "@type": "Question",
          "name": "¿Puedo cambiar de plan en cualquier momento?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí, podés subir o bajar de plan cuando quieras. El cambio se aplica de forma inmediata y se prorratea el monto. No hay contratos a largo plazo ni permanencia mínima.",
          },
        },
        {
          "@type": "Question",
          "name": "¿Qué plan me conviene?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Starter es ideal para lanzar tu app nativa con las funcionalidades esenciales. Growth es para marcas que quieren herramientas de venta avanzadas como carrito abandonado, back in stock y white label. Scale es para marcas en expansión que necesitan push segmentados, drops exclusivos y multiidioma. Enterprise es para grandes marcas con necesidades específicas.",
          },
        },
        {
          "@type": "Question",
          "name": "¿Qué pasa si cancelo mi suscripción?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Podés cancelar cuando quieras sin penalidades. Tu app seguirá activa hasta el final del período facturado. Después de eso, la app se despublica de las tiendas pero no perdés tu diseño ni configuración — podés reactivar en cualquier momento.",
          },
        },
      ],
    },
  ],
};

export default function PreciosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd) }}
      />
      <Navbar />
      <PreciosContent />
      <Footer />
    </>
  );
}
