import type { Locale } from "@/i18n/config";

const es = {
  metadata: {
    title: "Producto — Saru Apps",
    description:
      "Conocé todas las herramientas de Saru Apps: editor drag & drop, app nativa iOS y Android, notificaciones push, engagement y ventas, sincronización con Tiendanube y analytics en tiempo real.",
  },
  hero: {
    label: "Producto",
    title: "Todo lo que necesitás para vender",
    accent: "desde tu app",
    subtitle:
      "Herramientas para crear, personalizar y hacer crecer tu canal de ventas móvil. Sin código, sin complicaciones.",
  },
  features: [
    {
      title: "Editor Drag & Drop",
      description:
        "Diseñá cada pantalla de tu app arrastrando componentes visuales. Sin código, sin límites.",
      href: "/producto/editor",
    },
    {
      title: "App Nativa iOS & Android",
      description:
        "Tu app publicada en App Store y Google Play. Experiencia nativa real, no un webview.",
      href: "/producto/app-nativa",
    },
    {
      title: "Notificaciones Push",
      description:
        "Enviá mensajes directos al celular de tus clientes. Ofertas, carritos abandonados y más.",
      href: "/producto/notificaciones-push",
    },
    {
      title: "Reels de producto",
      description:
        "Videos verticales con tus productos en una pestaña tipo TikTok. Tus clientes miran, deslizan y compran.",
      href: "/producto/reels",
    },
    {
      title: "Engagement y Ventas",
      description:
        "Carrito abandonado, back in stock, drops exclusivos, badges y herramientas de conversión.",
      href: "/producto/engagement",
    },
    {
      title: "Sincronización Tiendanube",
      description:
        "Productos, stock, precios y pedidos siempre actualizados automáticamente con tu tienda.",
      href: "/producto/sincronizacion",
    },
    {
      title: "Analytics",
      description:
        "Métricas en tiempo real: usuarios activos, conversiones, ingresos por push y más.",
      href: "/producto/analytics",
    },
  ],
  featureCta: "Conocer más",
  howItWorks: {
    label: "Cómo funciona",
    title: "De tu tienda a una app",
    italic: "en 4 pasos",
    subtitle:
      "No necesitás experiencia técnica. Nuestro proceso está diseñado para que lances tu app en minutos.",
  },
  steps: [
    {
      number: "01",
      title: "Conectá tu Tiendanube",
      description: "Instalá Saru Apps y tus productos se importan automáticamente.",
    },
    {
      number: "02",
      title: "Diseñá tu app",
      description: "Usá el editor visual para personalizar cada pantalla sin código.",
    },
    {
      number: "03",
      title: "Activá engagement",
      description: "Configurá push, engagement y herramientas de conversión para la app.",
    },
    {
      number: "04",
      title: "Publicá y crecé",
      description: "Nosotros publicamos tu app en App Store y Google Play.",
    },
  ],
  cta: {
    title: "Lanzá tu app",
    accent: "hoy",
    subtitle:
      "Creá la app de tu tienda Tiendanube en minutos. Empezá gratis, sin tarjeta de crédito.",
    primary: "Empezar gratis",
    secondary: "Agendar una demo",
  },
};

const pt: typeof es = {
  metadata: {
    title: "Produto — Saru Apps",
    description:
      "Conheça todas as ferramentas da Saru Apps: editor drag & drop, app nativo iOS e Android, notificações push, engajamento e vendas, sincronização com a Nuvemshop e analytics em tempo real.",
  },
  hero: {
    label: "Produto",
    title: "Tudo o que você precisa para vender",
    accent: "pelo seu app",
    subtitle:
      "Ferramentas para criar, personalizar e fazer crescer seu canal de vendas móvel. Sem código, sem complicações.",
  },
  features: [
    {
      title: "Editor Drag & Drop",
      description:
        "Crie cada tela do seu app arrastando componentes visuais. Sem código, sem limites.",
      href: "/producto/editor",
    },
    {
      title: "App Nativo iOS & Android",
      description:
        "Seu app publicado na App Store e no Google Play. Experiência nativa de verdade, não um webview.",
      href: "/producto/app-nativa",
    },
    {
      title: "Notificações Push",
      description:
        "Envie mensagens diretas para o celular dos seus clientes. Ofertas, carrinhos abandonados e muito mais.",
      href: "/producto/notificaciones-push",
    },
    {
      title: "Reels de produto",
      description:
        "Vídeos verticais com seus produtos em uma aba estilo TikTok. Seus clientes assistem, deslizam e compram.",
      href: "/producto/reels",
    },
    {
      title: "Engajamento e Vendas",
      description:
        "Carrinho abandonado, back in stock, drops exclusivos, badges e ferramentas de conversão.",
      href: "/producto/engagement",
    },
    {
      title: "Sincronização Nuvemshop",
      description:
        "Produtos, estoque, preços e pedidos sempre atualizados automaticamente com a sua loja.",
      href: "/producto/sincronizacion",
    },
    {
      title: "Analytics",
      description:
        "Métricas em tempo real: usuários ativos, conversões, receita por push e muito mais.",
      href: "/producto/analytics",
    },
  ],
  featureCta: "Saiba mais",
  howItWorks: {
    label: "Como funciona",
    title: "Da sua loja a um app",
    italic: "em 4 passos",
    subtitle:
      "Você não precisa de experiência técnica. Nosso processo foi pensado para você lançar seu app em minutos.",
  },
  steps: [
    {
      number: "01",
      title: "Conecte sua Nuvemshop",
      description: "Instale a Saru Apps e seus produtos são importados automaticamente.",
    },
    {
      number: "02",
      title: "Crie o seu app",
      description: "Use o editor visual para personalizar cada tela sem código.",
    },
    {
      number: "03",
      title: "Ative o engajamento",
      description: "Configure push, engajamento e ferramentas de conversão para o app.",
    },
    {
      number: "04",
      title: "Publique e cresça",
      description: "Nós publicamos seu app na App Store e no Google Play.",
    },
  ],
  cta: {
    title: "Lance seu app",
    accent: "hoje",
    subtitle:
      "Crie o app da sua loja Nuvemshop em minutos. Comece grátis, sem cartão de crédito.",
    primary: "Começar grátis",
    secondary: "Agendar uma demo",
  },
};

export const productoContent: Record<Locale, typeof es> = { es, pt };
