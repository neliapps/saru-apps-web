import type { Locale } from "@/i18n/config";

const es = {
  metadata: {
    title: "Notificaciones Push — Saru Apps",
    description:
      "Enviá notificaciones push a tus clientes desde tu app. Ofertas, carritos abandonados, nuevos productos y campañas programadas. Hasta 7x más engagement que el email.",
  },
  back: "Producto",
  hero: {
    label: "Notificaciones Push",
    title: "Llegá directo al celular",
    accent: "de tus clientes",
    subtitle:
      "Las notificaciones push aparecen en la pantalla de bloqueo de tus clientes. Sin filtros de spam, sin algoritmos. Comunicación directa con tu audiencia.",
  },
  types: {
    label: "Tipos de notificación",
    title: "Un mensaje para cada momento",
    subtitle:
      "Desde ofertas instantáneas hasta flujos automáticos. Cada notificación puede impulsar una venta.",
    items: [
      {
        title: "Ofertas y promociones flash",
        description:
          "Lanzá ofertas relámpago y llegá al celular de tus clientes al instante. Ideal para liquidaciones y fechas especiales.",
        example: {
          title: "¡Oferta flash!",
          body: "50% en toda la tienda. Solo por 24 horas.",
          time: "Ahora",
        },
        tag: "",
      },
      {
        title: "Carrito abandonado",
        description:
          "Notificaciones automáticas cuando un cliente deja productos en el carrito. Recuperá ventas que de otra forma se perderían.",
        example: {
          title: "Olvidaste algo",
          body: "Tu carrito te espera con envío gratis.",
          time: "2h",
        },
        tag: "Automático",
      },
      {
        title: "Nuevos productos / colecciones",
        description:
          "Notificá a tus clientes cada vez que agregás productos nuevos o lanzás una colección. Generá tráfico instantáneo.",
        example: {
          title: "Nueva colección",
          body: "Llegó lo nuevo de temporada. Sé la primera en verlo.",
          time: "5h",
        },
        tag: "",
      },
      {
        title: "Campañas programadas",
        description:
          "Programá tus notificaciones para el día y la hora ideal. Planeá con anticipación tus campañas de marketing.",
        example: {
          title: "Hot Sale empieza mañana",
          body: "Descuentos de hasta 60%. Activá las alertas.",
          time: "Programado",
        },
        tag: "",
      },
      {
        title: "Segmentación por comportamiento",
        description:
          "Enviá notificaciones a segmentos específicos: compradores frecuentes, inactivos, por ubicación o por historial.",
        example: {
          title: "Exclusivo para VIPs",
          body: "Acceso anticipado a la nueva colección.",
          time: "Segmentado",
        },
        tag: "",
      },
    ],
  },
  stats: {
    label: "Por qué push",
    headline: "más engagement que el email",
    body: "Las notificaciones push tienen tasas de apertura promedio del 20-30%, comparado con el 2-5% del email marketing tradicional.",
    items: [
      { value: "~30%", label: "Tasa de apertura push" },
      { value: "~3%", label: "Tasa de apertura email" },
      { value: "90%", label: "Entrega instantánea" },
    ],
  },
  volume: {
    label: "Volumen",
    title: "Notificaciones por plan",
    subtitle:
      "Cada plan incluye un volumen de notificaciones push mensuales. Escalá a medida que tu audiencia crece.",
    popular: "Más popular",
    seePlan: "Ver plan completo",
    items: [
      { plan: "Starter", volume: "1.000 / mes", highlighted: false },
      { plan: "Growth", volume: "10.000 / mes", highlighted: true },
      { plan: "Scale", volume: "50.000 / mes", highlighted: false },
      { plan: "Enterprise", volume: "Ilimitadas", highlighted: false },
    ],
  },
  cta: {
    title: "Empezá a enviar push",
    subtitle:
      "Creá tu app y llegá directo al celular de tus clientes. Las primeras 1.000 notificaciones están incluidas en todos los planes.",
    primary: "Empezar gratis",
    secondary: "Agendar una demo",
  },
};

const pt: typeof es = {
  metadata: {
    title: "Notificações Push — Saru Apps",
    description:
      "Envie notificações push para seus clientes direto do seu app. Ofertas, carrinhos abandonados, novos produtos e campanhas agendadas. Até 7x mais engajamento que o e-mail.",
  },
  back: "Produto",
  hero: {
    label: "Notificações Push",
    title: "Chegue direto ao celular",
    accent: "dos seus clientes",
    subtitle:
      "As notificações push aparecem na tela de bloqueio dos seus clientes. Sem filtros de spam, sem algoritmos. Comunicação direta com o seu público.",
  },
  types: {
    label: "Tipos de notificação",
    title: "Uma mensagem para cada momento",
    subtitle:
      "De ofertas instantâneas a fluxos automáticos. Cada notificação pode impulsionar uma venda.",
    items: [
      {
        title: "Ofertas e promoções relâmpago",
        description:
          "Lance ofertas relâmpago e chegue ao celular dos seus clientes na hora. Ideal para liquidações e datas especiais.",
        example: {
          title: "Oferta relâmpago!",
          body: "50% OFF em toda a loja. Só por 24 horas.",
          time: "Agora",
        },
        tag: "",
      },
      {
        title: "Carrinho abandonado",
        description:
          "Notificações automáticas quando um cliente deixa produtos no carrinho. Recupere vendas que, de outra forma, seriam perdidas.",
        example: {
          title: "Você esqueceu algo",
          body: "Seu carrinho está te esperando com frete grátis.",
          time: "2h",
        },
        tag: "Automático",
      },
      {
        title: "Novos produtos / coleções",
        description:
          "Avise seus clientes sempre que você adicionar produtos novos ou lançar uma coleção. Gere tráfego instantâneo.",
        example: {
          title: "Nova coleção",
          body: "Chegou a novidade da estação. Seja a primeira a ver.",
          time: "5h",
        },
        tag: "",
      },
      {
        title: "Campanhas agendadas",
        description:
          "Agende suas notificações para o dia e o horário ideais. Planeje suas campanhas de marketing com antecedência.",
        example: {
          title: "A Black Friday começa amanhã",
          body: "Descontos de até 60%. Ative os alertas.",
          time: "Agendado",
        },
        tag: "",
      },
      {
        title: "Segmentação por comportamento",
        description:
          "Envie notificações para segmentos específicos: compradores frequentes, inativos, por localização ou por histórico.",
        example: {
          title: "Exclusivo para VIPs",
          body: "Acesso antecipado à nova coleção.",
          time: "Segmentado",
        },
        tag: "",
      },
    ],
  },
  stats: {
    label: "Por que push",
    headline: "mais engajamento que o e-mail",
    body: "As notificações push têm taxas de abertura médias de 20-30%, comparadas aos 2-5% do e-mail marketing tradicional.",
    items: [
      { value: "~30%", label: "Taxa de abertura push" },
      { value: "~3%", label: "Taxa de abertura e-mail" },
      { value: "90%", label: "Entrega instantânea" },
    ],
  },
  volume: {
    label: "Volume",
    title: "Notificações por plano",
    subtitle:
      "Cada plano inclui um volume mensal de notificações push. Escale conforme seu público cresce.",
    popular: "Mais popular",
    seePlan: "Ver plano completo",
    items: [
      { plan: "Starter", volume: "1.000 / mês", highlighted: false },
      { plan: "Growth", volume: "10.000 / mês", highlighted: true },
      { plan: "Scale", volume: "50.000 / mês", highlighted: false },
      { plan: "Enterprise", volume: "Ilimitadas", highlighted: false },
    ],
  },
  cta: {
    title: "Comece a enviar push",
    subtitle:
      "Crie seu app e chegue direto ao celular dos seus clientes. As primeiras 1.000 notificações estão incluídas em todos os planos.",
    primary: "Começar grátis",
    secondary: "Agendar uma demo",
  },
};

export const productoPushContent: Record<Locale, typeof es> = { es, pt };
