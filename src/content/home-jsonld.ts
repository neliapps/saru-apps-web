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
    "App nativa para iPhone y Android publicada por nosotros en App Store y Google Play (incluida en todos los planes)",
    "Sin la marca Saru Apps en todos los planes",
    "Editor visual de todas las pantallas, con estilos tomados de tu marca",
    "Sincronización automática de productos, stock, precios y pedidos con Tiendanube",
    "Checkout, medios de pago y cupones de tu tienda (PagoNube)",
    "Métodos de envío de tu tienda (EnvíoNube)",
    "Notificaciones automáticas: carrito abandonado, vuelta de stock, estado del pedido y bienvenida",
    "Campañas de notificaciones con imagen y programadas (hasta 40.000/mes)",
    "Drops: lanzamientos con cuenta regresiva",
    "Badges automáticos: descuento, nuevo, últimas unidades",
    "Productos recomendados en el carrito",
    "Barra de envío gratis",
    "Agregar rápido, repetir pedido e indicador de poco stock",
    "Búsqueda, favoritos y cuenta del cliente con pedidos y seguimiento",
    "Banner de descarga en la tienda y link de descarga con QR",
    "Precios mayoristas (B2B) y login obligatorio",
    "Analítica de ventas desde la app y ventas por cada notificación",
  ],
};

const pt: HomeJsonLdText = {
  organizationDescription:
    "Plataforma para criar apps móveis nativos para lojas Nuvemshop. Editor drag & drop, notificações push e ferramentas de engajamento sem precisar de código.",
  softwareDescription:
    "Transforme sua loja Nuvemshop em um app móvel nativo para iOS e Android sem escrever código. Todos os planos incluem app nativo publicado na App Store e no Google Play, editor drag & drop, sincronização automática de produtos, notificações push e ferramentas de engajamento para aumentar as vendas recorrentes.",
  featureList: [
    "App nativo para iPhone e Android publicado por nós na App Store e no Google Play (incluído em todos os planos)",
    "Sem a marca Saru Apps em todos os planos",
    "Editor visual de todas as telas, com estilos tirados da sua marca",
    "Sincronização automática de produtos, estoque, preços e pedidos com a Nuvemshop",
    "Checkout, meios de pagamento e cupons da sua loja (Nuvem Pago)",
    "Métodos de envio da sua loja (Nuvem Envio)",
    "Notificações automáticas: carrinho abandonado, volta ao estoque, status do pedido e boas-vindas",
    "Campanhas de notificações com imagem e agendadas (até 40.000/mês)",
    "Drops: lançamentos com contagem regressiva",
    "Badges automáticos: desconto, novo, últimas unidades",
    "Produtos recomendados no carrinho",
    "Barra de frete grátis",
    "Adicionar rápido, repetir pedido e indicador de estoque baixo",
    "Busca, favoritos e conta do cliente com pedidos e rastreamento",
    "Banner de download na loja e link de download com QR",
    "Preços de atacado (B2B) e login obrigatório",
    "Analytics de vendas pelo app e vendas por cada notificação",
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
