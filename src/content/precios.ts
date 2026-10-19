import type { Locale } from "@/i18n/config";

type Cell = string | boolean;
type Row = { feature: string; starter: Cell; growth: Cell; scale: Cell; enterprise: Cell };
type Faq = { question: string; answer: string };

const es = {
  metadata: {
    title: "Precios — Saru Apps",
    description:
      "Planes y precios de Saru Apps. Diseñá y probá tu app gratis: pagás recién cuando la publicamos en App Store y Google Play. Sin contratos, sin comisión por venta.",
  },
  hero: {
    label: "Precios",
    title: "Tu app, vendiendo desde el",
    accent: "día uno",
    subtitle:
      "Diseñala y probala gratis. Pagás recién cuando la publicamos en App Store y Google Play. Sin contratos, sin comisión por venta.",
  },
  billing: {
    ariaLabel: "Facturación",
    monthly: "Mensual",
    annual: "Anual",
    perMonth: "/mes",
    billedAnnuallyPrefix: "Facturado anualmente (USD",
    perYearSuffix: "/año)",
  },
  mostPopular: "El más elegido",
  custom: "A medida",
  plans: [
    {
      description: "Tu app, vendiendo desde el día uno.",
      lead: null as string | null,
      features: [
        "App nativa para iPhone y Android, publicada por nosotros",
        "Sin la marca Saru Apps: es la app de tu tienda",
        "Editor de todas las pantallas y estilos tomados de tu marca",
        "Sincronización automática con Tiendanube: productos, stock, precios y pedidos",
        "Búsqueda, favoritos, cuenta del cliente con pedidos y seguimiento, cupones",
        "Notificaciones automáticas: carrito abandonado, vuelta de stock, estado del pedido y bienvenida",
        "1.500 notificaciones de campañas por mes",
        "1 drop activo (lanzamientos con cuenta regresiva)",
        "Banner de descarga en tu tienda y link de descarga con QR",
        "Analítica de los últimos 30 días",
        "Soporte por email",
      ],
      cta: "Registrate gratis",
    },
    {
      description: "Vendé más a los clientes que ya tienen tu app.",
      lead: "Todo lo de Starter, más:" as string | null,
      features: [
        "10.000 notificaciones de campañas por mes",
        "3 drops activos",
        "Reels de productos: videos tipo TikTok con tus productos (hasta 20 publicados)",
        "Segundo recordatorio de carrito abandonado y aviso de poco stock",
        "Agregar rápido, repetir pedido e indicador de poco stock",
        "Productos recomendados en el carrito y barra de envío gratis",
        "Analítica de hasta 90 días, con ventas por cada notificación",
        "Soporte por WhatsApp",
      ],
      cta: "Registrate gratis",
    },
    {
      description: "Exclusividad y venta mayorista.",
      lead: "Todo lo de Growth, más:" as string | null,
      features: [
        "40.000 notificaciones de campañas por mes",
        "Drops ilimitados",
        "Reels de productos ilimitados",
        "Precios mayoristas (B2B) y login obligatorio",
        "Soporte prioritario y puesta en marcha",
      ],
      cta: "Registrate gratis",
    },
    {
      description: "Para grandes marcas.",
      lead: "Todo lo de Scale, más:" as string | null,
      features: ["Notificaciones a medida", "Account manager", "Integraciones a medida"],
      cta: "Hablemos",
    },
  ],
  notificationsNote: {
    title: "Las notificaciones automáticas no cuentan para el límite.",
    example: "Ejemplo: 1.500 alcanza para 5 campañas a 300 clientes.",
  },
  fees: {
    title: "Costos de Apple y Google (no los cobramos nosotros)",
    description: "Podés publicar como empresa o como persona física (monotributo).",
    apple: "US$99 por año",
    google: "US$25 una sola vez",
  },
  comparison: {
    label: "Comparación",
    title: "Compará los planes en detalle",
    subtitle:
      "Todas las funciones, plan por plan. Elegí el que mejor se adapte a tu negocio.",
    ariaLabel: "Comparación de planes",
    featureHeader: "Función",
    included: "Incluido",
    notIncluded: "No incluido",
    rows: [
      // Todos los planes
      { feature: "App nativa para iPhone y Android, publicada por nosotros", starter: true, growth: true, scale: true, enterprise: true },
      { feature: "Sin la marca Saru Apps", starter: true, growth: true, scale: true, enterprise: true },
      { feature: "Editor de todas las pantallas", starter: true, growth: true, scale: true, enterprise: true },
      { feature: "Sincronización automática con Tiendanube", starter: true, growth: true, scale: true, enterprise: true },
      { feature: "Búsqueda, favoritos, cuenta del cliente y cupones", starter: true, growth: true, scale: true, enterprise: true },
      { feature: "Notificaciones automáticas", starter: true, growth: true, scale: true, enterprise: true },
      { feature: "Banner de descarga y link con QR", starter: true, growth: true, scale: true, enterprise: true },
      // Varía por plan
      { feature: "Notificaciones de campañas por mes", starter: "1.500", growth: "10.000", scale: "40.000", enterprise: "A medida" },
      { feature: "Drops activos", starter: "1", growth: "3", scale: "Ilimitados", enterprise: "Ilimitados" },
      { feature: "Reels de productos", starter: false, growth: "20", scale: "Ilimitados", enterprise: "Ilimitados" },
      { feature: "Analítica", starter: "30 días", growth: "90 días", scale: "90 días", enterprise: "90 días" },
      // Growth+
      { feature: "Segundo recordatorio de carrito abandonado", starter: false, growth: true, scale: true, enterprise: true },
      { feature: "Aviso de poco stock", starter: false, growth: true, scale: true, enterprise: true },
      { feature: "Agregar rápido y repetir pedido", starter: false, growth: true, scale: true, enterprise: true },
      { feature: "Indicador de poco stock", starter: false, growth: true, scale: true, enterprise: true },
      { feature: "Productos recomendados en el carrito", starter: false, growth: true, scale: true, enterprise: true },
      { feature: "Barra de envío gratis", starter: false, growth: true, scale: true, enterprise: true },
      { feature: "Ventas por cada notificación", starter: false, growth: true, scale: true, enterprise: true },
      // Scale+
      { feature: "Precios mayoristas (B2B)", starter: false, growth: false, scale: true, enterprise: true },
      { feature: "Login obligatorio", starter: false, growth: false, scale: true, enterprise: true },
      { feature: "Puesta en marcha", starter: false, growth: false, scale: true, enterprise: true },
      // Enterprise
      { feature: "Account manager", starter: false, growth: false, scale: false, enterprise: true },
      { feature: "Integraciones a medida", starter: false, growth: false, scale: false, enterprise: true },
      // Soporte
      { feature: "Soporte", starter: "Email", growth: "WhatsApp", scale: "Prioritario", enterprise: "Prioritario" },
    ] as Row[],
  },
  faq: {
    label: "FAQ",
    title: "Preguntas sobre",
    italic: "precios",
    notFound: "¿No encontrás tu respuesta?",
    contact: "Contactanos",
    items: [
      {
        question: "¿Cobran comisión por venta?",
        answer: "No. Pagás solo el plan.",
      },
      {
        question: "¿Hay costo de configuración o de publicación?",
        answer: "No. Nosotros armamos y publicamos tu app sin costo extra.",
      },
      {
        question: "¿Puedo cambiar de plan?",
        answer: "Sí, cuando quieras, desde tu cuenta.",
      },
      {
        question: "¿Qué pasa si cancelo?",
        answer:
          "Tu app deja de estar disponible para tus clientes al terminar el período pagado. Tu diseño queda guardado por si volvés.",
      },
      {
        question: "¿Qué plan me conviene?",
        answer:
          "Si recién lanzás tu app, Starter. Cuando la app ya es un canal de venta y necesitás mandar más campañas, Growth. Si vendés mayorista o hacés lanzamientos seguidos, Scale.",
      },
      {
        question: "¿Qué pasa si llego al límite de notificaciones?",
        answer:
          "Las automáticas siguen funcionando. Las campañas nuevas quedan en pausa hasta el mes siguiente, o podés mejorar tu plan.",
      },
    ] as Faq[],
  },
  cta: {
    title: "Lanzá tu app",
    accent: "hoy",
    subtitle:
      "Creá la app de tu tienda Tiendanube en minutos. Empezá gratis, sin tarjeta de crédito.",
    primary: "Empezar gratis",
    secondary: "Agendar una demo",
  },
  jsonLd: {
    description:
      "Plataforma para crear apps móviles nativas para tiendas Tiendanube. Todos los planes incluyen app nativa para iPhone y Android publicada en App Store y Google Play, sin la marca Saru Apps.",
    customPrice: "Precio a medida.",
  },
};

const pt: typeof es = {
  metadata: {
    title: "Preços — Saru Apps",
    description:
      "Planos e preços da Saru Apps. Desenhe e teste seu app grátis: você só paga quando publicamos na App Store e no Google Play. Sem contratos, sem comissão por venda.",
  },
  hero: {
    label: "Preços",
    title: "Seu app vendendo desde o",
    accent: "primeiro dia",
    subtitle:
      "Desenhe e teste grátis. Você só paga quando publicamos seu app na App Store e no Google Play. Sem contratos, sem comissão por venda.",
  },
  billing: {
    ariaLabel: "Faturamento",
    monthly: "Mensal",
    annual: "Anual",
    perMonth: "/mês",
    billedAnnuallyPrefix: "Cobrado anualmente (USD",
    perYearSuffix: "/ano)",
  },
  mostPopular: "O mais escolhido",
  custom: "Sob medida",
  plans: [
    {
      description: "Seu app vendendo desde o primeiro dia.",
      lead: null,
      features: [
        "App nativo para iPhone e Android, publicado por nós",
        "Sem a marca Saru Apps: é o app da sua loja",
        "Editor de todas as telas, com estilos tirados da sua marca",
        "Sincronização automática com a Nuvemshop: produtos, estoque, preços e pedidos",
        "Busca, favoritos, conta do cliente com pedidos e rastreamento, cupons",
        "Notificações automáticas: carrinho abandonado, volta ao estoque, status do pedido e boas-vindas",
        "1.500 notificações de campanhas por mês",
        "1 drop ativo (lançamentos com contagem regressiva)",
        "Banner de download na sua loja e link de download com QR",
        "Analytics dos últimos 30 dias",
        "Suporte por e-mail",
      ],
      cta: "Cadastre-se grátis",
    },
    {
      description: "Venda mais para os clientes que já têm seu app.",
      lead: "Tudo do Starter, mais:",
      features: [
        "10.000 notificações de campanhas por mês",
        "3 drops ativos",
        "Reels de produtos: vídeos estilo TikTok com seus produtos (até 20 publicados)",
        "Segundo lembrete de carrinho abandonado e aviso de estoque baixo",
        "Adicionar rápido, repetir pedido e indicador de estoque baixo",
        "Produtos recomendados no carrinho e barra de frete grátis",
        "Analytics de até 90 dias, com vendas por cada notificação",
        "Suporte por WhatsApp",
      ],
      cta: "Cadastre-se grátis",
    },
    {
      description: "Exclusividade e venda no atacado.",
      lead: "Tudo do Growth, mais:",
      features: [
        "40.000 notificações de campanhas por mês",
        "Drops ilimitados",
        "Reels de produtos ilimitados",
        "Preços de atacado (B2B) e login obrigatório",
        "Suporte prioritário e implantação assistida",
      ],
      cta: "Cadastre-se grátis",
    },
    {
      description: "Para grandes marcas.",
      lead: "Tudo do Scale, mais:",
      features: ["Notificações sob medida", "Account manager", "Integrações sob medida"],
      cta: "Vamos conversar",
    },
  ],
  notificationsNote: {
    title: "As notificações automáticas não contam para o limite.",
    example: "Exemplo: 1.500 dá para 5 campanhas para 300 clientes.",
  },
  fees: {
    title: "Custos da Apple e do Google (não somos nós que cobramos)",
    description: "Você pode publicar como empresa (CNPJ) ou como pessoa física (CPF).",
    apple: "US$99 por ano",
    google: "US$25 uma única vez",
  },
  comparison: {
    label: "Comparação",
    title: "Compare os planos em detalhe",
    subtitle:
      "Todas as funções, plano por plano. Escolha o que melhor se adapta ao seu negócio.",
    ariaLabel: "Comparação de planos",
    featureHeader: "Função",
    included: "Incluído",
    notIncluded: "Não incluído",
    rows: [
      { feature: "App nativo para iPhone e Android, publicado por nós", starter: true, growth: true, scale: true, enterprise: true },
      { feature: "Sem a marca Saru Apps", starter: true, growth: true, scale: true, enterprise: true },
      { feature: "Editor de todas as telas", starter: true, growth: true, scale: true, enterprise: true },
      { feature: "Sincronização automática com a Nuvemshop", starter: true, growth: true, scale: true, enterprise: true },
      { feature: "Busca, favoritos, conta do cliente e cupons", starter: true, growth: true, scale: true, enterprise: true },
      { feature: "Notificações automáticas", starter: true, growth: true, scale: true, enterprise: true },
      { feature: "Banner de download e link com QR", starter: true, growth: true, scale: true, enterprise: true },
      { feature: "Notificações de campanhas por mês", starter: "1.500", growth: "10.000", scale: "40.000", enterprise: "Sob medida" },
      { feature: "Drops ativos", starter: "1", growth: "3", scale: "Ilimitados", enterprise: "Ilimitados" },
      { feature: "Reels de produtos", starter: false, growth: "20", scale: "Ilimitados", enterprise: "Ilimitados" },
      { feature: "Analytics", starter: "30 dias", growth: "90 dias", scale: "90 dias", enterprise: "90 dias" },
      { feature: "Segundo lembrete de carrinho abandonado", starter: false, growth: true, scale: true, enterprise: true },
      { feature: "Aviso de estoque baixo", starter: false, growth: true, scale: true, enterprise: true },
      { feature: "Adicionar rápido e repetir pedido", starter: false, growth: true, scale: true, enterprise: true },
      { feature: "Indicador de estoque baixo", starter: false, growth: true, scale: true, enterprise: true },
      { feature: "Produtos recomendados no carrinho", starter: false, growth: true, scale: true, enterprise: true },
      { feature: "Barra de frete grátis", starter: false, growth: true, scale: true, enterprise: true },
      { feature: "Vendas por cada notificação", starter: false, growth: true, scale: true, enterprise: true },
      { feature: "Preços de atacado (B2B)", starter: false, growth: false, scale: true, enterprise: true },
      { feature: "Login obrigatório", starter: false, growth: false, scale: true, enterprise: true },
      { feature: "Implantação assistida", starter: false, growth: false, scale: true, enterprise: true },
      { feature: "Account manager", starter: false, growth: false, scale: false, enterprise: true },
      { feature: "Integrações sob medida", starter: false, growth: false, scale: false, enterprise: true },
      { feature: "Suporte", starter: "E-mail", growth: "WhatsApp", scale: "Prioritário", enterprise: "Prioritário" },
    ],
  },
  faq: {
    label: "FAQ",
    title: "Perguntas sobre",
    italic: "preços",
    notFound: "Não encontrou sua resposta?",
    contact: "Fale com a gente",
    items: [
      {
        question: "Vocês cobram comissão por venda?",
        answer: "Não. Você paga só o plano.",
      },
      {
        question: "Há custo de configuração ou de publicação?",
        answer: "Não. Nós montamos e publicamos seu app sem custo extra.",
      },
      {
        question: "Posso mudar de plano?",
        answer: "Sim, quando quiser, pela sua conta.",
      },
      {
        question: "O que acontece se eu cancelar?",
        answer:
          "Seu app deixa de ficar disponível para seus clientes ao fim do período pago. Seu design fica salvo caso você volte.",
      },
      {
        question: "Qual plano é ideal para mim?",
        answer:
          "Se você está lançando seu app agora, Starter. Quando o app já é um canal de venda e você precisa enviar mais campanhas, Growth. Se você vende no atacado ou faz lançamentos com frequência, Scale.",
      },
      {
        question: "O que acontece se eu chegar ao limite de notificações?",
        answer:
          "As automáticas continuam funcionando. As campanhas novas ficam em pausa até o mês seguinte, ou você pode fazer upgrade do seu plano.",
      },
    ],
  },
  cta: {
    title: "Lance seu app",
    accent: "hoje",
    subtitle:
      "Crie o app da sua loja Nuvemshop em minutos. Comece grátis, sem cartão de crédito.",
    primary: "Começar grátis",
    secondary: "Agendar uma demo",
  },
  jsonLd: {
    description:
      "Plataforma para criar apps móveis nativos para lojas Nuvemshop. Todos os planos incluem app nativo para iPhone e Android publicado na App Store e no Google Play, sem a marca Saru Apps.",
    customPrice: "Preço sob medida.",
  },
};

export const preciosContent: Record<Locale, typeof es> = { es, pt };

/* ─── Structured data (prices and URLs are locale-independent) ─── */

const offerMeta = [
  { name: "Starter", price: "49" },
  { name: "Growth", price: "149" },
  { name: "Scale", price: "349" },
  { name: "Enterprise", price: null },
] as const;

export function buildPricingJsonLd(locale: Locale) {
  const t = preciosContent[locale];
  const offerDescription = (i: number) => {
    const plan = t.plans[i];
    return [plan.lead, plan.features.join(", ")].filter(Boolean).join(" ") + ".";
  };
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Saru Apps",
        "url": "https://www.saruapps.com",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "iOS, Android",
        "description": t.jsonLd.description,
        "offers": offerMeta.map((offer, i) =>
          offer.price
            ? {
                "@type": "Offer",
                "name": offer.name,
                "description": offerDescription(i),
                "price": offer.price,
                "priceCurrency": "USD",
                "priceSpecification": {
                  "@type": "UnitPriceSpecification",
                  "price": offer.price,
                  "priceCurrency": "USD",
                  "referenceQuantity": {
                    "@type": "QuantitativeValue",
                    "value": "1",
                    "unitCode": "MON",
                  },
                },
                "url": "https://app.saruapps.com/register",
              }
            : {
                "@type": "Offer",
                "name": offer.name,
                "description": `${offerDescription(i)} ${t.jsonLd.customPrice}`,
                "url": "https://calendly.com/saruapps/30min",
              },
        ),
      },
      {
        "@type": "FAQPage",
        "mainEntity": t.faq.items.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
          },
        })),
      },
    ],
  };
}
