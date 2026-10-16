import type { ReactNode } from "react";
import type { Locale } from "@/i18n/config";

/** Shape of every guide article module (src/content/guia/<slug>.tsx) */
export type GuiaArticle = {
  metadata: { title: string; description?: string };
  body: ReactNode;
};

export type GuiaArticleContent = Record<Locale, GuiaArticle>;

export const guiaSlugs = [
  "que-es",
  "planes",
  "registro",
  "tiendanube",
  "configurar",
  "editor",
  "productos",
  "notificaciones",
  "publicar",
  "panel",
  "analitica",
  "app-nativa",
  "seguridad",
  "faq",
] as const;

export type GuiaSlug = (typeof guiaSlugs)[number];

const es = {
  metadata: {
    title: "Guía de la Plataforma — Saru Apps",
    description:
      "Todo lo que necesitás saber sobre Saru Apps: cómo funciona, planes, editor, notificaciones push, publicación y más.",
  },
  title: "Guía de la Plataforma",
  subtitle:
    "Todo lo que necesitás saber para crear, personalizar y publicar la app móvil de tu tienda Tiendanube con Saru Apps.",
  layout: {
    sidebarLabel: "Artículos de la guía",
    back: "Volver a la guía",
    navLabel: "Navegación entre artículos",
    prev: "Anterior",
    next: "Siguiente",
  },
  articles: [
    {
      slug: "que-es",
      title: "Qué es Saru Apps",
      description: "Conocé la plataforma, sus componentes y cómo funciona.",
    },
    {
      slug: "planes",
      title: "Planes y precios",
      description: "Compará los planes Starter, Growth, Scale y Enterprise.",
    },
    {
      slug: "registro",
      title: "Registro y onboarding",
      description: "Cómo crear tu cuenta y completar el proceso de configuración inicial.",
    },
    {
      slug: "tiendanube",
      title: "Conectar Tiendanube",
      description: "Vinculá tu tienda para sincronizar productos automáticamente.",
    },
    {
      slug: "configurar",
      title: "Configurar la app",
      description: "Definí el nombre, logo y colores de tu app.",
    },
    {
      slug: "editor",
      title: "Editor de contenido",
      description: "Usá el editor drag & drop para diseñar las páginas de tu app.",
    },
    {
      slug: "productos",
      title: "Productos",
      description: "Gestioná y visualizá los productos sincronizados desde Tiendanube.",
    },
    {
      slug: "notificaciones",
      title: "Notificaciones push",
      description: "Enviá mensajes directos a los clientes que tienen tu app instalada.",
    },
    {
      slug: "publicar",
      title: "Publicar la app",
      description: "Publicá tu app nativa en App Store y Google Play.",
    },
    {
      slug: "panel",
      title: "Panel en Tiendanube",
      description: "Accedé a Saru Apps desde el panel de administración de Tiendanube.",
    },
    {
      slug: "analitica",
      title: "Analítica",
      description: "Medí visitas, productos más vistos, búsquedas y eventos.",
    },
    {
      slug: "app-nativa",
      title: "App nativa",
      description: "Detalles de la app React Native: pantallas, checkout y theming.",
    },
    {
      slug: "seguridad",
      title: "Seguridad y privacidad",
      description: "Autenticación, protección de datos y cumplimiento GDPR.",
    },
    {
      slug: "faq",
      title: "Preguntas frecuentes",
      description: "Respuestas a las preguntas más comunes sobre la plataforma.",
    },
  ] as { slug: GuiaSlug; title: string; description: string }[],
};

const pt: typeof es = {
  metadata: {
    title: "Guia da Plataforma — Saru Apps",
    description:
      "Tudo o que você precisa saber sobre a Saru Apps: como funciona, planos, editor, notificações push, publicação e mais.",
  },
  title: "Guia da Plataforma",
  subtitle:
    "Tudo o que você precisa saber para criar, personalizar e publicar o app móvel da sua loja Nuvemshop com a Saru Apps.",
  layout: {
    sidebarLabel: "Artigos do guia",
    back: "Voltar ao guia",
    navLabel: "Navegação entre artigos",
    prev: "Anterior",
    next: "Próximo",
  },
  articles: [
    {
      slug: "que-es",
      title: "O que é a Saru Apps",
      description: "Conheça a plataforma, seus componentes e como ela funciona.",
    },
    {
      slug: "planes",
      title: "Planos e preços",
      description: "Compare os planos Starter, Growth, Scale e Enterprise.",
    },
    {
      slug: "registro",
      title: "Cadastro e onboarding",
      description: "Como criar sua conta e concluir o processo de configuração inicial.",
    },
    {
      slug: "tiendanube",
      title: "Conectar a Nuvemshop",
      description: "Vincule sua loja para sincronizar os produtos automaticamente.",
    },
    {
      slug: "configurar",
      title: "Configurar o app",
      description: "Defina o nome, o logo e as cores do seu app.",
    },
    {
      slug: "editor",
      title: "Editor de conteúdo",
      description: "Use o editor drag & drop para criar as páginas do seu app.",
    },
    {
      slug: "productos",
      title: "Produtos",
      description: "Gerencie e visualize os produtos sincronizados da Nuvemshop.",
    },
    {
      slug: "notificaciones",
      title: "Notificações push",
      description: "Envie mensagens diretas aos clientes que têm seu app instalado.",
    },
    {
      slug: "publicar",
      title: "Publicar o app",
      description: "Publique seu app nativo na App Store e no Google Play.",
    },
    {
      slug: "panel",
      title: "Painel na Nuvemshop",
      description: "Acesse a Saru Apps pelo painel de administração da Nuvemshop.",
    },
    {
      slug: "analitica",
      title: "Analytics",
      description: "Meça visitas, produtos mais vistos, buscas e eventos.",
    },
    {
      slug: "app-nativa",
      title: "App nativo",
      description: "Detalhes do app em React Native: telas, checkout e theming.",
    },
    {
      slug: "seguridad",
      title: "Segurança e privacidade",
      description: "Autenticação, proteção de dados e conformidade com o GDPR.",
    },
    {
      slug: "faq",
      title: "Perguntas frequentes",
      description: "Respostas às perguntas mais comuns sobre a plataforma.",
    },
  ],
};

export const guiaContent: Record<Locale, typeof es> = { es, pt };
