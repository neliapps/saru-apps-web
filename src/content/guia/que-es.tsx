import type { GuiaArticleContent } from "./index";

export const queEsContent: GuiaArticleContent = {
  es: {
    metadata: { title: "Qué es Saru Apps — Guía" },
    body: (
      <>
        <h1>Qué es Saru Apps</h1>
        <p>
          Saru Apps es una plataforma SaaS que permite a comerciantes de
          Tiendanube crear, personalizar y publicar aplicaciones móviles nativas
          (iOS y Android) sin programar. La plataforma tiene tres componentes
          principales:
        </p>
        <ol>
          <li>
            <strong>Panel de administración</strong> (Dashboard) — donde el
            comerciante configura y gestiona su app
          </li>
          <li>
            <strong>Backend API</strong> — maneja la lógica de negocio,
            sincronización, notificaciones y generación de la app
          </li>
          <li>
            <strong>App móvil nativa</strong> (React Native) — app para publicar
            en App Store y Google Play
          </li>
        </ol>
      </>
    ),
  },
  pt: {
    metadata: { title: "O que é a Saru Apps — Guia" },
    body: (
      <>
        <h1>O que é a Saru Apps</h1>
        <p>
          A Saru Apps é uma plataforma SaaS que permite que lojistas da
          Nuvemshop criem, personalizem e publiquem aplicativos móveis nativos
          (iOS e Android) sem programar. A plataforma tem três componentes
          principais:
        </p>
        <ol>
          <li>
            <strong>Painel de administração</strong> (Dashboard) — onde o
            lojista configura e gerencia seu app
          </li>
          <li>
            <strong>Backend API</strong> — cuida da lógica de negócio,
            sincronização, notificações e geração do app
          </li>
          <li>
            <strong>App móvel nativo</strong> (React Native) — app para publicar
            na App Store e no Google Play
          </li>
        </ol>
      </>
    ),
  },
};
