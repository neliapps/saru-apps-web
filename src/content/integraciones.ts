import type { Locale } from "@/i18n/config";

/**
 * /integraciones: what of Tiendanube (and around it) works in the merchant's app, by category, with the plan
 * that includes it and whether it's available or coming. Only what the product does today is "available":
 * check the app before changing a status.
 */

export type IntegrationIcon =
  | "package"
  | "bag"
  | "users"
  | "ticket"
  | "tags"
  | "smartphone"
  | "dashboard"
  | "card"
  | "wallet"
  | "truck"
  | "pin"
  | "tracking"
  | "store"
  | "mail"
  | "megaphone"
  | "gift"
  | "wallet-cards"
  | "repeat"
  | "reviews"
  | "sparkles"
  | "chat";

export interface Integration {
  name: string;
  description: string;
  icon: IntegrationIcon;
  status: "available" | "soon";
  /** The cheapest plan that includes it (each plan includes the ones below) */
  plan?: "all" | "growth" | "scale";
  /** A page that explains it, as a Spanish path */
  href?: string;
}

export interface IntegrationCategory {
  id: string;
  name: string;
  intro: string;
  items: Integration[];
}

const es = {
  metadata: {
    title: "Integraciones — Saru Apps",
    description:
      "Las herramientas de Tiendanube que funcionan en tu app: catálogo, checkout, Pago Nube, Envío Nube, Marketing Nube, Punto de Venta, programa de puntos, Claude y ChatGPT, y las que vienen.",
  },
  hero: {
    label: "Integraciones",
    title: "Lo que ya usas en Tiendanube,",
    accent: "también en tu app",
    subtitle:
      "Tu catálogo, tus medios de pago, tus envíos y tus clientes funcionan en tu app sin configurar nada extra. Cada integración indica el plan que la incluye.",
  },
  summary: "{available} integraciones disponibles y {soon} próximamente",
  categoriesLabel: "Categorías",
  labels: {
    available: "Disponible",
    soon: "Próximamente",
    more: "Ver más",
    plans: { all: "Todos los planes", growth: "Desde Growth", scale: "Desde Scale" },
  },
  categories: [
    {
      id: "tienda",
      name: "Tu tienda",
      intro: "Tu Tiendanube es la fuente de todo: lo que cambias allí aparece en la app.",
      items: [
        {
          name: "Catálogo y stock",
          description: "Productos, variantes, precios, stock y categorías se sincronizan solos con tu Tiendanube.",
          icon: "package",
          status: "available",
          plan: "all",
          href: "/producto/sincronizacion",
        },
        {
          name: "Checkout de Tiendanube",
          description: "Tus clientes pagan en el checkout de tu tienda sin salir de la app, y el pedido llega a tu administrador.",
          icon: "bag",
          status: "available",
          plan: "all",
        },
        {
          name: "Cuentas de clientes",
          description: "Tus clientes entran con su email y ven sus pedidos. Los clientes nuevos quedan registrados en tu Tiendanube.",
          icon: "users",
          status: "available",
          plan: "all",
        },
        {
          name: "Cupones",
          description: "Los cupones de descuento de tu tienda funcionan en el carrito de la app.",
          icon: "ticket",
          status: "available",
          plan: "all",
        },
        {
          name: "Precios mayoristas",
          description: "Las tablas de precios de Tiendanube se aplican en la app a tus clientes mayoristas.",
          icon: "tags",
          status: "available",
          plan: "scale",
        },
        {
          name: "Banner de descarga",
          description: "Un aviso en tu tienda online invita a quienes entran desde el celular a descargar tu app.",
          icon: "smartphone",
          status: "available",
          plan: "all",
        },
        {
          name: "Saru Apps en tu administrador",
          description: "El estado de tu app y sus números, desde el administrador de Tiendanube.",
          icon: "dashboard",
          status: "available",
          plan: "all",
          href: "/guia/panel",
        },
      ],
    },
    {
      id: "pagos",
      name: "Pagos",
      intro: "El checkout de la app es el de tu tienda: los mismos medios de pago y las mismas condiciones.",
      items: [
        {
          name: "Pago Nube",
          description: "Tus clientes pagan con Pago Nube dentro de la app, con las mismas cuotas y condiciones que en tu tienda.",
          icon: "card",
          status: "available",
          plan: "all",
        },
        {
          name: "Todos tus medios de pago",
          description: "Mercado Pago, transferencia, efectivo o el que tengas activo en Tiendanube: la app ofrece los mismos.",
          icon: "wallet",
          status: "available",
          plan: "all",
        },
      ],
    },
    {
      id: "envios",
      name: "Envíos",
      intro: "Las opciones y los costos salen de tu configuración de envíos en Tiendanube.",
      items: [
        {
          name: "Envío Nube",
          description: "El costo y las opciones de envío se calculan con tu configuración de Tiendanube, Envío Nube incluido.",
          icon: "truck",
          status: "available",
          plan: "all",
        },
        {
          name: "Retiro en el local",
          description: "Los puntos de retiro que ofreces en tu tienda también aparecen en la app.",
          icon: "pin",
          status: "available",
          plan: "all",
        },
        {
          name: "Seguimiento del pedido",
          description: "Tus clientes siguen sus pedidos desde la app y reciben una notificación cuando cambia el estado.",
          icon: "tracking",
          status: "available",
          plan: "all",
        },
      ],
    },
    {
      id: "punto-de-venta",
      name: "Punto de Venta",
      intro: "Tu local y tu app, conectados por tus clientes.",
      items: [
        {
          name: "Punto de Venta de Tiendanube",
          description: "Las compras en tu local suman puntos en tu programa de puntos cuando cargas el email del cliente al cobrar.",
          icon: "store",
          status: "available",
          plan: "growth",
        },
      ],
    },
    {
      id: "marketing",
      name: "Marketing",
      intro: "Tus clientes de la app, también en tus campañas.",
      items: [
        {
          name: "Marketing Nube",
          description: "Los clientes que inician sesión en tu app se suman a tu lista de Marketing Nube para tus campañas de email.",
          icon: "mail",
          status: "available",
          plan: "all",
        },
        {
          name: "Meta y Google Ads",
          description: "Las ventas que tus anuncios de Instagram, Facebook y Google traen a tu app, medidas en cada plataforma.",
          icon: "megaphone",
          status: "soon",
        },
      ],
    },
    {
      id: "fidelizacion",
      name: "Fidelización",
      intro: "Premia a los clientes que vuelven, compren donde compren.",
      items: [
        {
          name: "Programa de puntos",
          description: "Tus clientes suman puntos en cada compra, en tu tienda online, en tu app y en tu local, y los canjean en la app.",
          icon: "gift",
          status: "available",
          plan: "growth",
          href: "/producto/programa-de-puntos",
        },
        {
          name: "Omniwallet",
          description: "Programas de fidelización con tarjetas en el wallet del celular, conectados con tu app.",
          icon: "wallet-cards",
          status: "soon",
        },
      ],
    },
    {
      id: "suscripciones",
      name: "Suscripciones",
      intro: "Compras que se repiten solas.",
      items: [
        {
          name: "Suscripciones de Tiendanube",
          description: "Tus productos por suscripción, para que tus clientes se suscriban también desde la app.",
          icon: "repeat",
          status: "soon",
        },
      ],
    },
    {
      id: "resenas",
      name: "Reseñas",
      intro: "La opinión de tus clientes, donde se decide la compra.",
      items: [
        {
          name: "Reseñas de productos",
          description: "Las reseñas de tus clientes, con estrellas en cada producto de la app.",
          icon: "reviews",
          status: "soon",
        },
      ],
    },
    {
      id: "inteligencia-artificial",
      name: "Inteligencia artificial",
      intro: "Maneja tu app conversando con tu IA.",
      items: [
        {
          name: "Claude",
          description: "Pregúntale cómo le va a tu app, pídele que programe una campaña o que prepare una página en borrador.",
          icon: "sparkles",
          status: "available",
          plan: "all",
          href: "/ayuda/conexiones-con-ia",
        },
        {
          name: "ChatGPT",
          description: "Lo mismo desde ChatGPT, en sus planes Business, Enterprise y Edu. En Pro, solo consulta.",
          icon: "chat",
          status: "available",
          plan: "all",
          href: "/ayuda/conexiones-con-ia#chatgpt",
        },
      ],
    },
  ] as IntegrationCategory[],
  cta: {
    title: "¿Usas otra herramienta",
    accent: "con tu tienda",
    suffix: "?",
    subtitle: "En el plan Enterprise armamos integraciones a medida. Cuéntanos qué usas y lo vemos juntos.",
    primary: "Agendar una demo",
    secondary: "Ver los planes",
  },
};

const pt: typeof es = {
  metadata: {
    title: "Integrações — Saru Apps",
    description:
      "As ferramentas da Nuvemshop que funcionam no seu app: catálogo, checkout, Nuvem Pago, Nuvem Envio, Marketing Nube, Ponto de Venda, programa de pontos, Claude e ChatGPT, e as que estão chegando.",
  },
  hero: {
    label: "Integrações",
    title: "O que você já usa na Nuvemshop,",
    accent: "também no seu app",
    subtitle:
      "Seu catálogo, seus meios de pagamento, seus envios e seus clientes funcionam no seu app sem configurar nada extra. Cada integração mostra o plano que a inclui.",
  },
  summary: "{available} integrações disponíveis e {soon} em breve",
  categoriesLabel: "Categorias",
  labels: {
    available: "Disponível",
    soon: "Em breve",
    more: "Saiba mais",
    plans: { all: "Todos os planos", growth: "A partir do Growth", scale: "A partir do Scale" },
  },
  categories: [
    {
      id: "tienda",
      name: "Sua loja",
      intro: "Sua Nuvemshop é a fonte de tudo: o que você muda lá aparece no app.",
      items: [
        {
          name: "Catálogo e estoque",
          description: "Produtos, variações, preços, estoque e categorias se sincronizam sozinhos com a sua Nuvemshop.",
          icon: "package",
          status: "available",
          plan: "all",
          href: "/producto/sincronizacion",
        },
        {
          name: "Checkout da Nuvemshop",
          description: "Seus clientes pagam no checkout da sua loja sem sair do app, e o pedido chega ao seu painel.",
          icon: "bag",
          status: "available",
          plan: "all",
        },
        {
          name: "Contas de clientes",
          description: "Seus clientes entram com o e-mail e veem os pedidos. Os clientes novos ficam cadastrados na sua Nuvemshop.",
          icon: "users",
          status: "available",
          plan: "all",
        },
        {
          name: "Cupons",
          description: "Os cupons de desconto da sua loja funcionam no carrinho do app.",
          icon: "ticket",
          status: "available",
          plan: "all",
        },
        {
          name: "Preços de atacado",
          description: "As tabelas de preços da Nuvemshop valem no app para os seus clientes de atacado.",
          icon: "tags",
          status: "available",
          plan: "scale",
        },
        {
          name: "Banner de download",
          description: "Um aviso na sua loja virtual convida quem entra pelo celular a baixar o seu app.",
          icon: "smartphone",
          status: "available",
          plan: "all",
        },
        {
          name: "Saru Apps no seu painel",
          description: "O status do seu app e os números dele, no painel da Nuvemshop.",
          icon: "dashboard",
          status: "available",
          plan: "all",
          href: "/guia/panel",
        },
      ],
    },
    {
      id: "pagos",
      name: "Pagamentos",
      intro: "O checkout do app é o da sua loja: os mesmos meios de pagamento e as mesmas condições.",
      items: [
        {
          name: "Nuvem Pago",
          description: "Seus clientes pagam com Nuvem Pago dentro do app, com as mesmas parcelas e condições da sua loja.",
          icon: "card",
          status: "available",
          plan: "all",
        },
        {
          name: "Todos os seus meios de pagamento",
          description: "Pix, cartão, boleto ou o que estiver ativo na Nuvemshop: o app oferece os mesmos.",
          icon: "wallet",
          status: "available",
          plan: "all",
        },
      ],
    },
    {
      id: "envios",
      name: "Envios",
      intro: "As opções e os custos vêm da sua configuração de envios na Nuvemshop.",
      items: [
        {
          name: "Nuvem Envio",
          description: "O custo e as opções de envio são calculados com a sua configuração da Nuvemshop, Nuvem Envio incluído.",
          icon: "truck",
          status: "available",
          plan: "all",
        },
        {
          name: "Retirada na loja",
          description: "Os pontos de retirada que você oferece na loja também aparecem no app.",
          icon: "pin",
          status: "available",
          plan: "all",
        },
        {
          name: "Rastreamento do pedido",
          description: "Seus clientes acompanham os pedidos pelo app e recebem uma notificação quando o status muda.",
          icon: "tracking",
          status: "available",
          plan: "all",
        },
      ],
    },
    {
      id: "punto-de-venta",
      name: "Ponto de Venda",
      intro: "Sua loja física e o seu app, conectados pelos seus clientes.",
      items: [
        {
          name: "Ponto de Venda da Nuvemshop",
          description: "As compras na sua loja física somam pontos no seu programa de pontos quando você informa o e-mail do cliente no caixa.",
          icon: "store",
          status: "available",
          plan: "growth",
        },
      ],
    },
    {
      id: "marketing",
      name: "Marketing",
      intro: "Os clientes do app, também nas suas campanhas.",
      items: [
        {
          name: "Marketing Nube",
          description: "Os clientes que entram no seu app passam a fazer parte da sua lista do Marketing Nube para as suas campanhas de e-mail.",
          icon: "mail",
          status: "available",
          plan: "all",
        },
        {
          name: "Meta e Google Ads",
          description: "As vendas que seus anúncios no Instagram, no Facebook e no Google trazem para o app, medidas em cada plataforma.",
          icon: "megaphone",
          status: "soon",
        },
      ],
    },
    {
      id: "fidelizacion",
      name: "Fidelização",
      intro: "Recompense os clientes que voltam, onde quer que comprem.",
      items: [
        {
          name: "Programa de pontos",
          description: "Seus clientes somam pontos em cada compra, na loja virtual, no app e na loja física, e trocam no app.",
          icon: "gift",
          status: "available",
          plan: "growth",
          href: "/producto/programa-de-puntos",
        },
        {
          name: "Omniwallet",
          description: "Programas de fidelidade com cartões na carteira do celular, conectados ao seu app.",
          icon: "wallet-cards",
          status: "soon",
        },
      ],
    },
    {
      id: "suscripciones",
      name: "Assinaturas",
      intro: "Compras que se repetem sozinhas.",
      items: [
        {
          name: "Assinaturas da Nuvemshop",
          description: "Seus produtos por assinatura, para que seus clientes assinem também pelo app.",
          icon: "repeat",
          status: "soon",
        },
      ],
    },
    {
      id: "resenas",
      name: "Avaliações",
      intro: "A opinião dos seus clientes, onde a compra é decidida.",
      items: [
        {
          name: "Avaliações de produtos",
          description: "As avaliações dos seus clientes, com estrelas em cada produto do app.",
          icon: "reviews",
          status: "soon",
        },
      ],
    },
    {
      id: "inteligencia-artificial",
      name: "Inteligência artificial",
      intro: "Gerencie seu app conversando com a sua IA.",
      items: [
        {
          name: "Claude",
          description: "Pergunte como seu app está indo, peça para agendar uma campanha ou preparar uma página em rascunho.",
          icon: "sparkles",
          status: "available",
          plan: "all",
          href: "/ayuda/conexiones-con-ia",
        },
        {
          name: "ChatGPT",
          description: "O mesmo pelo ChatGPT, nos planos Business, Enterprise e Edu. No Pro, só consulta.",
          icon: "chat",
          status: "available",
          plan: "all",
          href: "/ayuda/conexiones-con-ia#chatgpt",
        },
      ],
    },
  ],
  cta: {
    title: "Você usa outra ferramenta",
    accent: "com a sua loja",
    suffix: "?",
    subtitle: "No plano Enterprise criamos integrações sob medida. Conte o que você usa e vemos juntos.",
    primary: "Agendar uma demo",
    secondary: "Ver os planos",
  },
};

export const integracionesContent: Record<Locale, typeof es> = { es, pt };
