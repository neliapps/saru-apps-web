import type { Locale } from "@/i18n/config";

type HomeJsonLdText = {
  organizationDescription: string;
  softwareDescription: string;
  featureList: string[];
};

const es: HomeJsonLdText = {
  organizationDescription:
    "Plataforma para crear apps móviles nativas para tiendas Tiendanube. Editor drag & drop, notificaciones push y herramientas de engagement sin necesidad de código.",
  softwareDescription:
    "Transformá tu tienda Tiendanube en una app móvil nativa para iOS y Android sin escribir código. Todos los planes incluyen app nativa publicada en App Store y Google Play, editor drag & drop, sincronización automática de productos, notificaciones push y herramientas de engagement para aumentar las ventas recurrentes.",
  featureList: [
    "App nativa para iOS y Android publicada en App Store y Google Play (incluida en todos los planes)",
    "Dos modos de diseño: Modo Web (replica automáticamente el diseño de tu tienda) y Modo Pro (experiencia y diseño renovado como canal independiente)",
    "Editor visual drag & drop para personalizar cada pantalla de la app",
    "Sincronización automática de productos, stock, precios y pedidos con Tiendanube",
    "Integración nativa con PagoNube: todos los medios de pago heredados sin configuración adicional",
    "Integración nativa con EnvíoNube: métodos de envío, cálculo de costos y puntos de retiro heredados automáticamente",
    "Integración con MarketingNube para campañas automatizadas y segmentación",
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
};

const pt: HomeJsonLdText = {
  organizationDescription:
    "Plataforma para criar apps móveis nativos para lojas Nuvemshop. Editor drag & drop, notificações push e ferramentas de engajamento sem precisar de código.",
  softwareDescription:
    "Transforme sua loja Nuvemshop em um app móvel nativo para iOS e Android sem escrever código. Todos os planos incluem app nativo publicado na App Store e no Google Play, editor drag & drop, sincronização automática de produtos, notificações push e ferramentas de engajamento para aumentar as vendas recorrentes.",
  featureList: [
    "App nativo para iOS e Android publicado na App Store e no Google Play (incluído em todos os planos)",
    "Dois modos de design: Modo Web (replica automaticamente o design da sua loja) e Modo Pro (experiência e design renovados como canal independente)",
    "Editor visual drag & drop para personalizar cada tela do app",
    "Sincronização automática de produtos, estoque, preços e pedidos com a Nuvemshop",
    "Integração nativa com Nuvem Pago: todos os meios de pagamento herdados sem configuração adicional",
    "Integração nativa com Nuvem Envio: métodos de envio, cálculo de frete e pontos de retirada herdados automaticamente",
    "Integração com MarketingNube para campanhas automatizadas e segmentação",
    "Notificações push segmentadas (até 50.000/mês)",
    "Recuperação de carrinho abandonado com notificações automáticas",
    "Notificação de back in stock",
    "Drops exclusivos com contagem regressiva",
    "Produtos exclusivos do app",
    "Recomendações de cross-sell",
    "Busca de produtos integrada",
    "Wishlist e favoritos",
    "Rastreamento de pedidos em tempo real",
    "Conta de cliente com histórico",
    "Badges de produto e indicador de estoque baixo",
    "Quick add to cart",
    "Barra de frete grátis",
    "Deep linking",
    "Multi-idioma",
    "White label (sem a marca Saru Apps)",
    "Rich push com imagens",
    "Designs programados por campanha",
    "Preços de atacado (B2B)",
    "Analytics em tempo real",
  ],
};

function buildHomeJsonLd(t: HomeJsonLdText) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.saruapps.com/#organization",
        "name": "Saru Apps",
        "url": "https://www.saruapps.com",
        "logo": "https://www.saruapps.com/logo.png",
        "description": t.organizationDescription,
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
          "availableLanguage": ["es", "pt"],
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.saruapps.com/#software",
        "name": "Saru Apps",
        "url": "https://www.saruapps.com",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "iOS, Android",
        "description": t.softwareDescription,
        "offers": {
          "@type": "AggregateOffer",
          "lowPrice": "49",
          "highPrice": "349",
          "priceCurrency": "USD",
          "offerCount": "4",
        },
        "featureList": t.featureList,
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
}

export const homeJsonLd: Record<Locale, ReturnType<typeof buildHomeJsonLd>> = {
  es: buildHomeJsonLd(es),
  pt: buildHomeJsonLd(pt),
};
