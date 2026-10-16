import type { Locale } from "@/i18n/config";

const es = {
  metadata: {
    title: "Partners — Saru Apps",
    description:
      "Sumá una nueva fuente de ingresos ofreciendo apps móviles a tus clientes de Tiendanube. Programa de partners para agencias, freelancers y consultores.",
  },
  hero: {
    label: "Partners",
    title: "Crecé",
    accent: "junto a Saru Apps",
    subtitle:
      "Sumá una nueva fuente de ingresos ofreciendo apps móviles a tus clientes de Tiendanube. Programa de partners para agencias, freelancers y consultores de ecommerce.",
  },
  benefits: [
    {
      title: "Comisiones recurrentes",
      description:
        "Ganás una comisión mensual por cada cliente que refieras mientras mantenga su suscripción activa.",
    },
    {
      title: "Soporte dedicado",
      description:
        "Acceso a un canal directo con nuestro equipo para resolver dudas técnicas y comerciales.",
    },
    {
      title: "Material de ventas",
      description:
        "Te damos presentaciones, demos y recursos para que puedas vender Saru Apps con confianza.",
    },
  ],
  stepsHead: {
    label: "Cómo funciona",
    title: "Empezá a ganar en 3 pasos",
  },
  steps: [
    {
      number: "01",
      title: "Aplicá al programa",
      description:
        "Completá el formulario y te contactamos en 48 hs para darte acceso al programa.",
    },
    {
      number: "02",
      title: "Referí clientes",
      description:
        "Compartí tu link de referido con tus clientes de Tiendanube que necesiten una app.",
    },
    {
      number: "03",
      title: "Cobrá comisiones",
      description: "Recibí pagos mensuales por cada cliente activo que hayas referido.",
    },
  ],
  audiencesHead: {
    label: "Para quién es",
    title: "Ideal para profesionales del",
    italic: "ecommerce",
  },
  audiences: [
    {
      title: "Agencias de ecommerce",
      description:
        "Ofrecele a tus clientes un servicio adicional de alto valor y diferenciá a tu agencia de la competencia.",
    },
    {
      title: "Freelancers y consultores",
      description:
        "Sumá una nueva línea de ingresos recurrentes a tu portfolio de servicios para Tiendanube.",
    },
    {
      title: "Implementadores de Tiendanube",
      description:
        "Complementá tus servicios de implementación con una app móvil nativa para cada tienda.",
    },
    {
      title: "Agencias de marketing digital",
      description:
        "Dales un canal de comunicación directa a tus clientes con push notifications y herramientas de engagement.",
    },
  ],
  cta: {
    title: "Unite al programa de",
    accent: "Partners",
    subtitle:
      "Empezá a generar ingresos recurrentes ofreciendo apps móviles a tus clientes de Tiendanube.",
    primary: "Aplicar al programa",
    secondary: "Más información",
  },
};

const pt: typeof es = {
  metadata: {
    title: "Parceiros — Saru Apps",
    description:
      "Adicione uma nova fonte de receita oferecendo apps móveis aos seus clientes da Nuvemshop. Programa de parceiros para agências, freelancers e consultores.",
  },
  hero: {
    label: "Parceiros",
    title: "Cresça",
    accent: "junto com a Saru Apps",
    subtitle:
      "Adicione uma nova fonte de receita oferecendo apps móveis aos seus clientes da Nuvemshop. Programa de parceiros para agências, freelancers e consultores de e-commerce.",
  },
  benefits: [
    {
      title: "Comissões recorrentes",
      description:
        "Você ganha uma comissão mensal por cada cliente indicado enquanto ele mantiver a assinatura ativa.",
    },
    {
      title: "Suporte dedicado",
      description:
        "Acesso a um canal direto com nossa equipe para tirar dúvidas técnicas e comerciais.",
    },
    {
      title: "Material de vendas",
      description:
        "Oferecemos apresentações, demos e recursos para que você possa vender a Saru Apps com confiança.",
    },
  ],
  stepsHead: {
    label: "Como funciona",
    title: "Comece a ganhar em 3 passos",
  },
  steps: [
    {
      number: "01",
      title: "Inscreva-se no programa",
      description:
        "Preencha o formulário e entramos em contato em até 48 h para liberar seu acesso ao programa.",
    },
    {
      number: "02",
      title: "Indique clientes",
      description:
        "Compartilhe seu link de indicação com seus clientes da Nuvemshop que precisam de um app.",
    },
    {
      number: "03",
      title: "Receba comissões",
      description: "Receba pagamentos mensais por cada cliente ativo que você indicou.",
    },
  ],
  audiencesHead: {
    label: "Para quem é",
    title: "Ideal para profissionais de",
    italic: "e-commerce",
  },
  audiences: [
    {
      title: "Agências de e-commerce",
      description:
        "Ofereça aos seus clientes um serviço adicional de alto valor e diferencie sua agência da concorrência.",
    },
    {
      title: "Freelancers e consultores",
      description:
        "Adicione uma nova linha de receita recorrente ao seu portfólio de serviços para a Nuvemshop.",
    },
    {
      title: "Implementadores da Nuvemshop",
      description:
        "Complemente seus serviços de implementação com um app móvel nativo para cada loja.",
    },
    {
      title: "Agências de marketing digital",
      description:
        "Dê aos seus clientes um canal de comunicação direta com push notifications e ferramentas de engajamento.",
    },
  ],
  cta: {
    title: "Faça parte do programa de",
    accent: "Parceiros",
    subtitle:
      "Comece a gerar receita recorrente oferecendo apps móveis aos seus clientes da Nuvemshop.",
    primary: "Inscrever-se no programa",
    secondary: "Mais informações",
  },
};

export const partnersContent: Record<Locale, typeof es> = { es, pt };
