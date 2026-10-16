import type { Locale } from "@/i18n/config";

const es = {
  metadata: {
    title: "Sectores — Saru Apps",
    description:
      "No importa qué vendas, Saru Apps se adapta a tu negocio. Descubrí cómo marcas de cada sector usan una app móvil para vender más en Tiendanube.",
  },
  hero: {
    label: "Sectores",
    title: "Una app para",
    accent: "cada tipo de tienda",
    subtitle:
      "No importa qué vendas, Saru Apps se adapta a tu negocio. Descubrí cómo marcas de tu sector usan una app para vender más.",
  },
  sectors: [
    {
      name: "Moda e Indumentaria",
      description:
        "Lookbooks, drops exclusivos y notificaciones de nueva temporada para tus clientes más fieles.",
    },
    {
      name: "Accesorios y Joyería",
      description:
        "Catálogo visual premium y herramientas de engagement para compras recurrentes.",
    },
    {
      name: "Belleza y Cosmética",
      description:
        "Rutinas personalizadas, reposición automática y ofertas flash directo al celular.",
    },
    {
      name: "Deportes y Fitness",
      description:
        "Lanzamientos de edición limitada y comunidad activa con notificaciones push.",
    },
    {
      name: "Hogar y Decoración",
      description:
        "Inspiración visual, colecciones por ambiente y recordatorios de restock.",
    },
    {
      name: "Alimentos y Bebidas",
      description: "Pedidos recurrentes, suscripciones y promociones por temporada.",
    },
    {
      name: "Electrónica",
      description: "Comparativas de productos, alertas de precio y soporte posventa.",
    },
    {
      name: "Mascotas",
      description: "Recordatorios de compra, suscripciones de alimento y tips de cuidado.",
    },
  ],
  benefitsHead: {
    label: "Beneficios",
    title: "Por qué tu tienda necesita",
    italic: "una app",
  },
  benefits: [
    {
      title: "Más ventas recurrentes",
      description:
        "Una app en el celular de tu cliente es un canal de venta 24/7 que no depende de algoritmos ni de la competencia.",
    },
    {
      title: "Mayor fidelización",
      description:
        "Herramientas de engagement que incentivan la recompra y aumentan el lifetime value de cada cliente.",
    },
    {
      title: "Comunicación directa",
      description:
        "Notificaciones push con hasta 7x más engagement que el email. Llegá a tus clientes al instante.",
    },
  ],
  cta: {
    title: "¿Listo para crear",
    accent: "la app de tu tienda",
    suffix: "?",
    subtitle:
      "Empezá gratis, diseñá tu app y publicala cuando estés listo. Sin compromiso, sin tarjeta de crédito.",
    primary: "Empezar gratis",
    secondary: "Agendar una demo",
  },
};

const pt: typeof es = {
  metadata: {
    title: "Setores — Saru Apps",
    description:
      "Não importa o que você vende, a Saru Apps se adapta ao seu negócio. Descubra como marcas de cada setor usam um app móvel para vender mais na Nuvemshop.",
  },
  hero: {
    label: "Setores",
    title: "Um app para",
    accent: "cada tipo de loja",
    subtitle:
      "Não importa o que você vende, a Saru Apps se adapta ao seu negócio. Descubra como marcas do seu setor usam um app para vender mais.",
  },
  sectors: [
    {
      name: "Moda e Vestuário",
      description:
        "Lookbooks, drops exclusivos e notificações de nova coleção para seus clientes mais fiéis.",
    },
    {
      name: "Acessórios e Joias",
      description:
        "Catálogo visual premium e ferramentas de engajamento para compras recorrentes.",
    },
    {
      name: "Beleza e Cosméticos",
      description:
        "Rotinas personalizadas, reposição automática e ofertas relâmpago direto no celular.",
    },
    {
      name: "Esportes e Fitness",
      description:
        "Lançamentos de edição limitada e comunidade ativa com notificações push.",
    },
    {
      name: "Casa e Decoração",
      description:
        "Inspiração visual, coleções por ambiente e lembretes de reposição de estoque.",
    },
    {
      name: "Alimentos e Bebidas",
      description: "Pedidos recorrentes, assinaturas e promoções sazonais.",
    },
    {
      name: "Eletrônicos",
      description: "Comparativos de produtos, alertas de preço e suporte pós-venda.",
    },
    {
      name: "Pets",
      description: "Lembretes de compra, assinaturas de ração e dicas de cuidados.",
    },
  ],
  benefitsHead: {
    label: "Benefícios",
    title: "Por que sua loja precisa de",
    italic: "um app",
  },
  benefits: [
    {
      title: "Mais vendas recorrentes",
      description:
        "Um app no celular do seu cliente é um canal de vendas 24/7 que não depende de algoritmos nem da concorrência.",
    },
    {
      title: "Mais fidelização",
      description:
        "Ferramentas de engajamento que incentivam a recompra e aumentam o lifetime value de cada cliente.",
    },
    {
      title: "Comunicação direta",
      description:
        "Notificações push com até 7x mais engajamento que o e-mail. Alcance seus clientes na hora.",
    },
  ],
  cta: {
    title: "Pronto para criar",
    accent: "o app da sua loja",
    suffix: "?",
    subtitle:
      "Comece grátis, desenhe seu app e publique quando estiver pronto. Sem compromisso, sem cartão de crédito.",
    primary: "Começar grátis",
    secondary: "Agendar uma demo",
  },
};

export const sectoresContent: Record<Locale, typeof es> = { es, pt };
