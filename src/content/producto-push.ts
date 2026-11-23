import type { Locale } from "@/i18n/config";

const es = {
  metadata: {
    title: "Notificaciones Push — Saru Apps",
    description:
      "Envía notificaciones push a tus clientes desde tu app. Ofertas, carritos abandonados, nuevos productos y campañas programadas o segmentadas. Hasta 7x más engagement que el email.",
  },
  back: "Producto",
  hero: {
    label: "Notificaciones Push",
    title: "Llega directo al celular",
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
          "Lanza ofertas relámpago y llega al celular de tus clientes al instante. Ideal para liquidaciones y fechas especiales.",
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
          "Notificaciones automáticas cuando un cliente deja productos en el carrito. Recupera ventas que de otra forma se perderían.",
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
          "Notifica a tus clientes cada vez que agregas productos nuevos o lanzas una colección. Genera tráfico instantáneo.",
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
          "Programa tus notificaciones para el día y la hora ideal. Planea con anticipación tus campañas de marketing.",
        example: {
          title: "Hot Sale empieza mañana",
          body: "Descuentos de hasta 60%. Activa las alertas.",
          time: "Programado",
        },
        tag: "",
      },
      {
        title: "Notificaciones segmentadas",
        description:
          "Envía cada campaña a quien le sirve: quienes nunca compraron, quienes no compran hace meses, tus mejores clientes o quienes tienen productos en el carrito.",
        example: {
          title: "Te extrañamos",
          body: "15 % en tu próxima compra con el código VUELVE15.",
          time: "Segmentado",
        },
        tag: "Plan Scale",
      },
    ],
  },
  segments: {
    label: "Notificaciones segmentadas",
    title: "Cada campaña,",
    italic: "a quien le sirve",
    subtitle:
      "Elige a quién le llega combinando condiciones, y mira cuántas personas son antes de enviarla. Del cupo del mes solo se descuentan ellas.",
    groups: [
      {
        title: "Compras",
        items: [
          "Compraron alguna vez o nunca",
          "Su última compra fue hace menos o más de N días",
          "Compraron al menos N veces",
          "Gastaron al menos un monto",
          "Compraron productos de una categoría",
        ],
      },
      {
        title: "Interés",
        items: [
          "Tienen productos en el carrito, de cualquier categoría o de una",
          "Tienen productos en favoritos, de cualquier categoría o de una",
        ],
      },
      {
        title: "Actividad",
        items: [
          "Abrieron la app hace menos o más de N días",
          "Instalaron la app hace poco",
          "Con o sin sesión iniciada",
          "iPhone o Android",
        ],
      },
      {
        title: "Puntos y mayoristas",
        items: ["Tienen al menos N puntos para usar", "Con o sin precios mayoristas"],
      },
    ],
    note: "Las compras se traen de Tiendanube para quienes iniciaron sesión en la app. Una campaña programada le llega a quienes cumplen las condiciones al momento de enviarse.",
    plan: "En el plan Scale.",
    link: "Ver precios",
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
      "Cada plan incluye un volumen de notificaciones de campañas por mes. Las automáticas no cuentan para el límite, y una campaña segmentada cuenta solo a las personas que alcanza.",
    popular: "Más popular",
    seePlan: "Ver plan completo",
    items: [
      { plan: "Starter", volume: "1.500 / mes", highlighted: false },
      { plan: "Growth", volume: "10.000 / mes", highlighted: true },
      { plan: "Scale", volume: "40.000 / mes", highlighted: false },
      { plan: "Enterprise", volume: "A medida", highlighted: false },
    ],
  },
  cta: {
    title: "Empieza a enviar push",
    subtitle:
      "Crea tu app y llega directo al celular de tus clientes. Todos los planes incluyen las notificaciones automáticas y 1.500 campañas por mes como mínimo.",
    primary: "Empezar gratis",
    secondary: "Agendar una demo",
  },
};

const pt: typeof es = {
  metadata: {
    title: "Notificações Push — Saru Apps",
    description:
      "Envie notificações push para seus clientes direto do seu app. Ofertas, carrinhos abandonados, novos produtos e campanhas agendadas ou segmentadas. Até 7x mais engajamento que o e-mail.",
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
        title: "Notificações segmentadas",
        description:
          "Envie cada campanha para quem ela serve: quem nunca comprou, quem não compra há meses, seus melhores clientes ou quem tem produtos no carrinho.",
        example: {
          title: "Sentimos sua falta",
          body: "15% na sua próxima compra com o cupom VOLTA15.",
          time: "Segmentado",
        },
        tag: "Plano Scale",
      },
    ],
  },
  segments: {
    label: "Notificações segmentadas",
    title: "Cada campanha",
    italic: "para quem ela serve",
    subtitle:
      "Escolha para quem ela chega combinando condições e veja quantas pessoas são antes de enviar. Só elas contam no limite do mês.",
    groups: [
      {
        title: "Compras",
        items: [
          "Compraram alguma vez ou nunca",
          "A última compra foi há menos ou mais de N dias",
          "Compraram pelo menos N vezes",
          "Gastaram pelo menos um valor",
          "Compraram produtos de uma categoria",
        ],
      },
      {
        title: "Interesse",
        items: [
          "Têm produtos no carrinho, de qualquer categoria ou de uma",
          "Têm produtos nos favoritos, de qualquer categoria ou de uma",
        ],
      },
      {
        title: "Atividade",
        items: [
          "Abriram o app há menos ou mais de N dias",
          "Instalaram o app recentemente",
          "Com ou sem login",
          "iPhone ou Android",
        ],
      },
      {
        title: "Pontos e atacado",
        items: ["Têm pelo menos N pontos para usar", "Com ou sem preços de atacado"],
      },
    ],
    note: "As compras vêm da Nuvemshop para quem fez login no app. Uma campanha agendada chega para quem cumpre as condições no momento do envio.",
    plan: "No plano Scale.",
    link: "Ver preços",
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
      "Cada plano inclui um volume mensal de notificações de campanhas. As automáticas não contam para o limite, e uma campanha segmentada conta só as pessoas que alcança.",
    popular: "Mais popular",
    seePlan: "Ver plano completo",
    items: [
      { plan: "Starter", volume: "1.500 / mês", highlighted: false },
      { plan: "Growth", volume: "10.000 / mês", highlighted: true },
      { plan: "Scale", volume: "40.000 / mês", highlighted: false },
      { plan: "Enterprise", volume: "Sob medida", highlighted: false },
    ],
  },
  cta: {
    title: "Comece a enviar push",
    subtitle:
      "Crie seu app e chegue direto ao celular dos seus clientes. Todos os planos incluem as notificações automáticas e no mínimo 1.500 campanhas por mês.",
    primary: "Começar grátis",
    secondary: "Agendar uma demo",
  },
};

export const productoPushContent: Record<Locale, typeof es> = { es, pt };
