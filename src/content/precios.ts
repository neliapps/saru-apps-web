import type { Locale } from "@/i18n/config";

type Cell = string | boolean;
type Row = { feature: string; starter: Cell; growth: Cell; scale: Cell; enterprise: Cell };
type Faq = { question: string; answer: string };

const es = {
  metadata: {
    title: "Precios — Saru Apps",
    description:
      "Planes y precios de Saru Apps. Empezá gratis y escalá a medida que tu app crece.",
  },
  hero: {
    label: "Precios",
    title: "Planes simples,",
    accent: "sin sorpresas",
    subtitle: "Empezá gratis y escalá a medida que tu app crece. Sin contratos a largo plazo.",
  },
  billing: {
    ariaLabel: "Facturación",
    monthly: "Mensual",
    annual: "Anual",
    perMonth: "/mes",
    billedAnnuallyPrefix: "Facturado anualmente (USD",
    perYearSuffix: "/año)",
  },
  mostPopular: "Más popular",
  custom: "Personalizado",
  plans: [
    {
      description: "Lanzá tu app mobile",
      lead: null as string | null,
      features: [
        "App nativa para iOS y Android",
        "Editor de contenido drag & drop",
        "Sincronización automática de productos",
        "Notificaciones push (1.000/mes)",
        "Buscador de productos",
        "Wishlist / favoritos",
        "Cuenta de cliente con historial",
        "Seguimiento de pedidos en tiempo real",
        "Categorías y colecciones",
        "Carrito de compras con cupones",
        "1 página personalizada",
        "Banner de instalación en tu tienda",
        "Vista previa antes de publicar",
        "Soporte por email",
      ],
      cta: "Registrate gratis",
    },
    {
      description: "Herramientas para vender más",
      lead: "Todo lo de Starter, más:" as string | null,
      features: [
        "Notificaciones push (10.000/mes)",
        "Notificación de carrito abandonado",
        "Notificación de back in stock",
        "Notificación de bienvenida automática",
        "Repetir pedido con un tap",
        "Badges de producto",
        "Indicador de bajo stock",
        "Quick add to cart",
        "Historial de productos visitados",
        "Sin marca Saru Apps (white label)",
        "3 páginas personalizadas",
      ],
      cta: "Registrate gratis",
    },
    {
      description: "Marketing avanzado y exclusividad",
      lead: "Todo lo de Growth, más:" as string | null,
      features: [
        "Notificaciones push (50.000/mes)",
        "Push segmentado por comportamiento",
        "Notificación de descuento en favoritos",
        "Drops exclusivos con cuenta regresiva",
        "Productos exclusivos de la app",
        "Recomendaciones cross-sell",
        "Barra de envío gratis",
        "Diseños programados por campaña",
        "Rich push (con imágenes)",
        "Precios mayoristas (B2B)",
        "Multiidioma",
        "Deep linking",
        "Páginas personalizadas ilimitadas",
      ],
      cta: "Registrate gratis",
    },
    {
      description: "Para grandes marcas",
      lead: "Todo lo de Scale, más:" as string | null,
      features: [
        "Push ilimitado",
        "Chat en la app",
        "QR code banner para desktop",
        "API dedicada",
        "Account manager exclusivo",
        "SLA garantizado",
        "Integraciones custom",
      ],
      cta: "Contactar ventas",
    },
  ],
  fees: {
    title: "Costos adicionales fuera del control de Saru Apps",
    description:
      "Para publicar tu app en las tiendas, Apple y Google requieren una cuenta de desarrollador.",
    apple: "99 USD / año",
    google: "25 USD / pago único",
  },
  comparison: {
    label: "Comparación",
    title: "Compará los planes en detalle",
    subtitle:
      "Todas las funcionalidades, plan por plan. Elegí el que mejor se adapte a tu negocio.",
    ariaLabel: "Comparación de planes",
    featureHeader: "Funcionalidad",
    included: "Incluido",
    notIncluded: "No incluido",
    rows: [
      // Base: todos los planes
      { feature: "App nativa iOS & Android", starter: true, growth: true, scale: true, enterprise: true },
      { feature: "Editor drag & drop", starter: true, growth: true, scale: true, enterprise: true },
      { feature: "Sincronización de productos", starter: true, growth: true, scale: true, enterprise: true },
      { feature: "Buscador de productos", starter: true, growth: true, scale: true, enterprise: true },
      { feature: "Wishlist / favoritos", starter: true, growth: true, scale: true, enterprise: true },
      { feature: "Cuenta de cliente", starter: true, growth: true, scale: true, enterprise: true },
      { feature: "Seguimiento de pedidos", starter: true, growth: true, scale: true, enterprise: true },
      { feature: "Carrito con cupones", starter: true, growth: true, scale: true, enterprise: true },
      { feature: "Banner de instalación", starter: true, growth: true, scale: true, enterprise: true },
      // Varía por plan
      { feature: "Notificaciones push", starter: "1.000/mes", growth: "10.000/mes", scale: "50.000/mes", enterprise: "Ilimitadas" },
      { feature: "Páginas personalizadas", starter: "1", growth: "3", scale: "Ilimitadas", enterprise: "Ilimitadas" },
      // Growth+
      { feature: "Carrito abandonado", starter: false, growth: true, scale: true, enterprise: true },
      { feature: "Back in stock", starter: false, growth: true, scale: true, enterprise: true },
      { feature: "Bienvenida automática", starter: false, growth: true, scale: true, enterprise: true },
      { feature: "Repetir pedido", starter: false, growth: true, scale: true, enterprise: true },
      { feature: "Badges de producto", starter: false, growth: true, scale: true, enterprise: true },
      { feature: "Indicador de bajo stock", starter: false, growth: true, scale: true, enterprise: true },
      { feature: "Quick add to cart", starter: false, growth: true, scale: true, enterprise: true },
      { feature: "Historial de visitados", starter: false, growth: true, scale: true, enterprise: true },
      { feature: "White label", starter: false, growth: true, scale: true, enterprise: true },
      // Scale+
      { feature: "Push segmentado", starter: false, growth: false, scale: true, enterprise: true },
      { feature: "Descuento en favoritos", starter: false, growth: false, scale: true, enterprise: true },
      { feature: "Drops exclusivos", starter: false, growth: false, scale: true, enterprise: true },
      { feature: "Productos exclusivos", starter: false, growth: false, scale: true, enterprise: true },
      { feature: "Recomendaciones cross-sell", starter: false, growth: false, scale: true, enterprise: true },
      { feature: "Barra de envío gratis", starter: false, growth: false, scale: true, enterprise: true },
      { feature: "Diseños programados", starter: false, growth: false, scale: true, enterprise: true },
      { feature: "Rich push (imágenes)", starter: false, growth: false, scale: true, enterprise: true },
      { feature: "Precios mayoristas (B2B)", starter: false, growth: false, scale: true, enterprise: true },
      { feature: "Multiidioma", starter: false, growth: false, scale: true, enterprise: true },
      { feature: "Deep linking", starter: false, growth: false, scale: true, enterprise: true },
      // Enterprise
      { feature: "Chat en la app", starter: false, growth: false, scale: false, enterprise: true },
      { feature: "QR code banner desktop", starter: false, growth: false, scale: false, enterprise: true },
      { feature: "API dedicada", starter: false, growth: false, scale: false, enterprise: true },
      { feature: "Integraciones custom", starter: false, growth: false, scale: false, enterprise: true },
      { feature: "SLA garantizado", starter: false, growth: false, scale: false, enterprise: true },
      // Soporte
      { feature: "Soporte", starter: "Email", growth: "Email", scale: "Email", enterprise: "Account manager" },
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
        question: "¿Puedo probar Saru Apps antes de pagar?",
        answer:
          "Sí. Podés crear tu cuenta gratis, diseñar tu app completa y ver una preview de cómo se vería. Solo pagás cuando decidís publicarla. No se requiere tarjeta de crédito para empezar.",
      },
      {
        question: "¿Hay costos de setup o configuración?",
        answer:
          "No. No hay costo de setup ni de configuración. Solo pagás el plan mensual o anual que elijas. Los únicos costos adicionales son las cuentas de desarrollador de Apple y Google, que son requeridas por las tiendas de apps.",
      },
      {
        question: "¿Cobran comisión por venta?",
        answer:
          "No. No tomamos comisión sobre tus ventas ni cobramos por notificación. Cada plan incluye un volumen de notificaciones push mensuales sin costo adicional.",
      },
      {
        question: "¿Puedo cambiar de plan en cualquier momento?",
        answer:
          "Sí, podés subir o bajar de plan cuando quieras. El cambio se aplica de forma inmediata y se prorratea el monto. No hay contratos a largo plazo ni permanencia mínima.",
      },
      {
        question: "¿Qué plan me conviene?",
        answer:
          "Starter es ideal para lanzar tu app nativa con las funcionalidades esenciales. Growth es para marcas que quieren herramientas de venta avanzadas como carrito abandonado, back in stock y white label. Scale es para marcas en expansión que necesitan push segmentados, drops exclusivos y multiidioma. Enterprise es para grandes marcas con necesidades específicas. Si tenés dudas, agendá una demo y te asesoramos.",
      },
      {
        question: "¿Qué pasa si cancelo mi suscripción?",
        answer:
          "Podés cancelar cuando quieras sin penalidades. Tu app seguirá activa hasta el final del período facturado. Después de eso, la app se despublica de las tiendas pero no perdés tu diseño ni configuración — podés reactivar en cualquier momento.",
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
      "Plataforma para crear apps móviles nativas para tiendas Tiendanube. Todos los planes incluyen app nativa para iOS y Android publicada en App Store y Google Play.",
    offerDescriptions: [
      "App nativa para iOS y Android, editor drag & drop, sincronización automática de productos, 1.000 notificaciones push/mes, buscador de productos, wishlist/favoritos, cuenta de cliente con historial, seguimiento de pedidos, categorías y colecciones, carrito con cupones, 1 página personalizada, banner de instalación, soporte por email.",
      "Todo lo de Starter más: 10.000 notificaciones push/mes, recuperación de carrito abandonado, notificación de back in stock, bienvenida automática, repetir pedido con un tap, badges de producto, indicador de bajo stock, quick add to cart, historial de productos visitados, white label (sin marca Saru Apps), 3 páginas personalizadas.",
      "Todo lo de Growth más: 50.000 notificaciones push/mes, push segmentado por comportamiento, descuento en favoritos, drops exclusivos con cuenta regresiva, productos exclusivos de la app, recomendaciones cross-sell, barra de envío gratis, diseños programados por campaña, rich push con imágenes, precios mayoristas (B2B), multiidioma, deep linking, páginas personalizadas ilimitadas.",
      "Todo lo de Scale más: notificaciones push ilimitadas, chat en la app, QR code banner para desktop, API dedicada, account manager exclusivo, SLA garantizado, integraciones custom. Precio a medida.",
    ],
    /** The FAQ answer about which plan fits omits the trailing demo sentence in structured data. */
    planFitAnswer:
      "Starter es ideal para lanzar tu app nativa con las funcionalidades esenciales. Growth es para marcas que quieren herramientas de venta avanzadas como carrito abandonado, back in stock y white label. Scale es para marcas en expansión que necesitan push segmentados, drops exclusivos y multiidioma. Enterprise es para grandes marcas con necesidades específicas.",
  },
};

const pt: typeof es = {
  metadata: {
    title: "Preços — Saru Apps",
    description:
      "Planos e preços da Saru Apps. Comece grátis e escale conforme seu app cresce.",
  },
  hero: {
    label: "Preços",
    title: "Planos simples,",
    accent: "sem surpresas",
    subtitle: "Comece grátis e escale conforme seu app cresce. Sem contratos de longo prazo.",
  },
  billing: {
    ariaLabel: "Faturamento",
    monthly: "Mensal",
    annual: "Anual",
    perMonth: "/mês",
    billedAnnuallyPrefix: "Cobrado anualmente (USD",
    perYearSuffix: "/ano)",
  },
  mostPopular: "Mais popular",
  custom: "Personalizado",
  plans: [
    {
      description: "Lance seu app mobile",
      lead: null,
      features: [
        "App nativo para iOS e Android",
        "Editor de conteúdo drag & drop",
        "Sincronização automática de produtos",
        "Notificações push (1.000/mês)",
        "Busca de produtos",
        "Wishlist / favoritos",
        "Conta de cliente com histórico",
        "Rastreamento de pedidos em tempo real",
        "Categorias e coleções",
        "Carrinho de compras com cupons",
        "1 página personalizada",
        "Banner de instalação na sua loja",
        "Pré-visualização antes de publicar",
        "Suporte por e-mail",
      ],
      cta: "Cadastre-se grátis",
    },
    {
      description: "Ferramentas para vender mais",
      lead: "Tudo do Starter, mais:",
      features: [
        "Notificações push (10.000/mês)",
        "Notificação de carrinho abandonado",
        "Notificação de back in stock",
        "Notificação de boas-vindas automática",
        "Repetir pedido com um toque",
        "Badges de produto",
        "Indicador de estoque baixo",
        "Quick add to cart",
        "Histórico de produtos visitados",
        "Sem a marca Saru Apps (white label)",
        "3 páginas personalizadas",
      ],
      cta: "Cadastre-se grátis",
    },
    {
      description: "Marketing avançado e exclusividade",
      lead: "Tudo do Growth, mais:",
      features: [
        "Notificações push (50.000/mês)",
        "Push segmentado por comportamento",
        "Notificação de desconto em favoritos",
        "Drops exclusivos com contagem regressiva",
        "Produtos exclusivos do app",
        "Recomendações de cross-sell",
        "Barra de frete grátis",
        "Designs programados por campanha",
        "Rich push (com imagens)",
        "Preços de atacado (B2B)",
        "Multi-idioma",
        "Deep linking",
        "Páginas personalizadas ilimitadas",
      ],
      cta: "Cadastre-se grátis",
    },
    {
      description: "Para grandes marcas",
      lead: "Tudo do Scale, mais:",
      features: [
        "Push ilimitado",
        "Chat no app",
        "Banner com QR code para desktop",
        "API dedicada",
        "Account manager exclusivo",
        "SLA garantido",
        "Integrações personalizadas",
      ],
      cta: "Falar com vendas",
    },
  ],
  fees: {
    title: "Custos adicionais fora do controle da Saru Apps",
    description:
      "Para publicar seu app nas lojas, a Apple e o Google exigem uma conta de desenvolvedor.",
    apple: "99 USD / ano",
    google: "25 USD / pagamento único",
  },
  comparison: {
    label: "Comparação",
    title: "Compare os planos em detalhe",
    subtitle:
      "Todas as funcionalidades, plano por plano. Escolha o que melhor se adapta ao seu negócio.",
    ariaLabel: "Comparação de planos",
    featureHeader: "Funcionalidade",
    included: "Incluído",
    notIncluded: "Não incluído",
    rows: [
      { feature: "App nativo iOS & Android", starter: true, growth: true, scale: true, enterprise: true },
      { feature: "Editor drag & drop", starter: true, growth: true, scale: true, enterprise: true },
      { feature: "Sincronização de produtos", starter: true, growth: true, scale: true, enterprise: true },
      { feature: "Busca de produtos", starter: true, growth: true, scale: true, enterprise: true },
      { feature: "Wishlist / favoritos", starter: true, growth: true, scale: true, enterprise: true },
      { feature: "Conta de cliente", starter: true, growth: true, scale: true, enterprise: true },
      { feature: "Rastreamento de pedidos", starter: true, growth: true, scale: true, enterprise: true },
      { feature: "Carrinho com cupons", starter: true, growth: true, scale: true, enterprise: true },
      { feature: "Banner de instalação", starter: true, growth: true, scale: true, enterprise: true },
      { feature: "Notificações push", starter: "1.000/mês", growth: "10.000/mês", scale: "50.000/mês", enterprise: "Ilimitadas" },
      { feature: "Páginas personalizadas", starter: "1", growth: "3", scale: "Ilimitadas", enterprise: "Ilimitadas" },
      { feature: "Carrinho abandonado", starter: false, growth: true, scale: true, enterprise: true },
      { feature: "Back in stock", starter: false, growth: true, scale: true, enterprise: true },
      { feature: "Boas-vindas automática", starter: false, growth: true, scale: true, enterprise: true },
      { feature: "Repetir pedido", starter: false, growth: true, scale: true, enterprise: true },
      { feature: "Badges de produto", starter: false, growth: true, scale: true, enterprise: true },
      { feature: "Indicador de estoque baixo", starter: false, growth: true, scale: true, enterprise: true },
      { feature: "Quick add to cart", starter: false, growth: true, scale: true, enterprise: true },
      { feature: "Histórico de visitados", starter: false, growth: true, scale: true, enterprise: true },
      { feature: "White label", starter: false, growth: true, scale: true, enterprise: true },
      { feature: "Push segmentado", starter: false, growth: false, scale: true, enterprise: true },
      { feature: "Desconto em favoritos", starter: false, growth: false, scale: true, enterprise: true },
      { feature: "Drops exclusivos", starter: false, growth: false, scale: true, enterprise: true },
      { feature: "Produtos exclusivos", starter: false, growth: false, scale: true, enterprise: true },
      { feature: "Recomendações de cross-sell", starter: false, growth: false, scale: true, enterprise: true },
      { feature: "Barra de frete grátis", starter: false, growth: false, scale: true, enterprise: true },
      { feature: "Designs programados", starter: false, growth: false, scale: true, enterprise: true },
      { feature: "Rich push (imagens)", starter: false, growth: false, scale: true, enterprise: true },
      { feature: "Preços de atacado (B2B)", starter: false, growth: false, scale: true, enterprise: true },
      { feature: "Multi-idioma", starter: false, growth: false, scale: true, enterprise: true },
      { feature: "Deep linking", starter: false, growth: false, scale: true, enterprise: true },
      { feature: "Chat no app", starter: false, growth: false, scale: false, enterprise: true },
      { feature: "Banner com QR code desktop", starter: false, growth: false, scale: false, enterprise: true },
      { feature: "API dedicada", starter: false, growth: false, scale: false, enterprise: true },
      { feature: "Integrações personalizadas", starter: false, growth: false, scale: false, enterprise: true },
      { feature: "SLA garantido", starter: false, growth: false, scale: false, enterprise: true },
      { feature: "Suporte", starter: "E-mail", growth: "E-mail", scale: "E-mail", enterprise: "Account manager" },
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
        question: "Posso testar a Saru Apps antes de pagar?",
        answer:
          "Sim. Você pode criar sua conta grátis, desenhar seu app completo e ver uma prévia de como ele ficaria. Você só paga quando decidir publicá-lo. Não é necessário cartão de crédito para começar.",
      },
      {
        question: "Há custos de setup ou configuração?",
        answer:
          "Não. Não há custo de setup nem de configuração. Você só paga o plano mensal ou anual que escolher. Os únicos custos adicionais são as contas de desenvolvedor da Apple e do Google, exigidas pelas lojas de apps.",
      },
      {
        question: "Vocês cobram comissão por venda?",
        answer:
          "Não. Não cobramos comissão sobre suas vendas nem por notificação. Cada plano inclui um volume de notificações push mensais sem custo adicional.",
      },
      {
        question: "Posso mudar de plano a qualquer momento?",
        answer:
          "Sim, você pode fazer upgrade ou downgrade quando quiser. A mudança é aplicada imediatamente e o valor é calculado proporcionalmente. Não há contratos de longo prazo nem fidelidade mínima.",
      },
      {
        question: "Qual plano é ideal para mim?",
        answer:
          "O Starter é ideal para lançar seu app nativo com as funcionalidades essenciais. O Growth é para marcas que querem ferramentas de venda avançadas, como carrinho abandonado, back in stock e white label. O Scale é para marcas em expansão que precisam de push segmentado, drops exclusivos e multi-idioma. O Enterprise é para grandes marcas com necessidades específicas. Se tiver dúvidas, agende uma demo e a gente ajuda você.",
      },
      {
        question: "O que acontece se eu cancelar minha assinatura?",
        answer:
          "Você pode cancelar quando quiser, sem multas. Seu app continua ativo até o fim do período faturado. Depois disso, o app é despublicado das lojas, mas você não perde seu design nem sua configuração — pode reativar a qualquer momento.",
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
      "Plataforma para criar apps móveis nativos para lojas Nuvemshop. Todos os planos incluem app nativo para iOS e Android publicado na App Store e no Google Play.",
    offerDescriptions: [
      "App nativo para iOS e Android, editor drag & drop, sincronização automática de produtos, 1.000 notificações push/mês, busca de produtos, wishlist/favoritos, conta de cliente com histórico, rastreamento de pedidos, categorias e coleções, carrinho com cupons, 1 página personalizada, banner de instalação, suporte por e-mail.",
      "Tudo do Starter mais: 10.000 notificações push/mês, recuperação de carrinho abandonado, notificação de back in stock, boas-vindas automática, repetir pedido com um toque, badges de produto, indicador de estoque baixo, quick add to cart, histórico de produtos visitados, white label (sem a marca Saru Apps), 3 páginas personalizadas.",
      "Tudo do Growth mais: 50.000 notificações push/mês, push segmentado por comportamento, desconto em favoritos, drops exclusivos com contagem regressiva, produtos exclusivos do app, recomendações de cross-sell, barra de frete grátis, designs programados por campanha, rich push com imagens, preços de atacado (B2B), multi-idioma, deep linking, páginas personalizadas ilimitadas.",
      "Tudo do Scale mais: notificações push ilimitadas, chat no app, banner com QR code para desktop, API dedicada, account manager exclusivo, SLA garantido, integrações personalizadas. Preço sob medida.",
    ],
    planFitAnswer:
      "O Starter é ideal para lançar seu app nativo com as funcionalidades essenciais. O Growth é para marcas que querem ferramentas de venda avançadas, como carrinho abandonado, back in stock e white label. O Scale é para marcas em expansão que precisam de push segmentado, drops exclusivos e multi-idioma. O Enterprise é para grandes marcas com necessidades específicas.",
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
                "description": t.jsonLd.offerDescriptions[i],
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
                "description": t.jsonLd.offerDescriptions[i],
                "url": "https://calendly.com/saruapps/30min",
              },
        ),
      },
      {
        "@type": "FAQPage",
        "mainEntity": t.faq.items.map((faq, i) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            // Index 4 ("which plan fits") uses the shorter structured-data answer
            "text": i === 4 ? t.jsonLd.planFitAnswer : faq.answer,
          },
        })),
      },
    ],
  };
}
