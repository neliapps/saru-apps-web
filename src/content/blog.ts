import type { Locale } from "@/i18n/config";

const es = {
  metadata: {
    title: "Blog — Saru Apps",
    description:
      "Artículos, guías y recursos para ayudarte a sacar el máximo provecho de tu app móvil para Tiendanube con Saru Apps.",
  },
  hero: {
    label: "Blog",
    title: "Próximamente",
    subtitle:
      "Estamos preparando artículos, guías y recursos para ayudarte a sacar el máximo provecho de tu app móvil.",
  },
  meanwhile: "Mientras tanto",
  links: [
    {
      title: "Lee nuestra guía de la plataforma",
      description: "Todo lo que necesitas saber para crear, personalizar y publicar tu app.",
      href: "/guia",
    },
    {
      title: "Consulta las preguntas frecuentes",
      description: "Respuestas a las dudas más comunes sobre Saru Apps.",
      href: "/faq",
    },
  ],
  newsletter: {
    title: "Suscríbete para recibir novedades",
    subtitle: "Sé el primero en enterarte cuando publiquemos nuevos artículos, guías y recursos.",
    placeholder: "tu@email.com",
    button: "Suscribirme",
    note: "Sin spam. Puedes darte de baja en cualquier momento.",
  },
};

const pt: typeof es = {
  metadata: {
    title: "Blog — Saru Apps",
    description:
      "Artigos, guias e recursos para ajudar você a aproveitar ao máximo seu app móvel para Nuvemshop com a Saru Apps.",
  },
  hero: {
    label: "Blog",
    title: "Em breve",
    subtitle:
      "Estamos preparando artigos, guias e recursos para ajudar você a aproveitar ao máximo seu app móvel.",
  },
  meanwhile: "Enquanto isso",
  links: [
    {
      title: "Leia nosso guia da plataforma",
      description: "Tudo o que você precisa saber para criar, personalizar e publicar seu app.",
      href: "/guia",
    },
    {
      title: "Confira as perguntas frequentes",
      description: "Respostas às dúvidas mais comuns sobre a Saru Apps.",
      href: "/faq",
    },
  ],
  newsletter: {
    title: "Inscreva-se para receber novidades",
    subtitle: "Seja o primeiro a saber quando publicarmos novos artigos, guias e recursos.",
    placeholder: "seu@email.com",
    button: "Inscrever-me",
    note: "Sem spam. Você pode cancelar a qualquer momento.",
  },
};

export const blogContent: Record<Locale, typeof es> = { es, pt };
