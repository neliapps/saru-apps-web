import type { GuiaArticleContent } from "./index";

export const panelContent: GuiaArticleContent = {
  es: {
    metadata: { title: "Panel en Tiendanube — Guía Saru Apps" },
    body: (
      <>
        <h1>Panel embebido en Tiendanube</h1>
        <p>
          Saru Apps se integra directamente en el panel de administración de
          Tiendanube. Cuando un comerciante instala la app desde la Tienda de
          Aplicaciones de Tiendanube, aparece en el menú lateral de su admin.
        </p>
        <p>Desde ahí puede ver:</p>
        <ul>
          <li>Estado de la app (publicada/borrador)</li>
          <li>Estadísticas rápidas (productos, páginas, notificaciones)</li>
          <li>
            Con la app publicada, el link para compartir con sus clientes, que
            los lleva a descargar la app (en el teléfono abre directo App Store o
            Google Play)
          </li>
          <li>Botón para abrir el panel completo de Saru Apps</li>
        </ul>
      </>
    ),
  },
  pt: {
    metadata: { title: "Painel na Nuvemshop — Guia Saru Apps" },
    body: (
      <>
        <h1>Painel integrado à Nuvemshop</h1>
        <p>
          A Saru Apps se integra diretamente ao painel de administração da
          Nuvemshop. Quando um lojista instala o app pela Loja de Aplicativos da
          Nuvemshop, ele aparece no menu lateral do seu admin.
        </p>
        <p>De lá, é possível ver:</p>
        <ul>
          <li>Status do app (publicado/rascunho)</li>
          <li>Estatísticas rápidas (produtos, páginas, notificações)</li>
          <li>
            Com o app publicado, o link para compartilhar com seus clientes, que
            os leva a baixar o app (no celular, abre direto a App Store ou o
            Google Play)
          </li>
          <li>Botão para abrir o painel completo da Saru Apps</li>
        </ul>
      </>
    ),
  },
};
