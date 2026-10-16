import type { GuiaArticleContent } from "./index";

export const configurarContent: GuiaArticleContent = {
  es: {
    metadata: { title: "Configurar la app — Guía Saru Apps" },
    body: (
      <>
        <h1>Configurar la app</h1>

        <h2>Branding</h2>
        <p>En esta sección el comerciante define:</p>
        <ul>
          <li>
            <strong>Nombre de la app:</strong> el nombre que ven los clientes
          </li>
          <li>
            <strong>Logo:</strong> imagen PNG o JPG (recomendado 512x512px)
          </li>
          <li>
            <strong>Color primario:</strong> se aplica al header, botones
            principales y tabs
          </li>
          <li>
            <strong>Color secundario:</strong> acentos y separadores
          </li>
        </ul>
        <p>
          Hay una vista previa en tiempo real que muestra cómo se ve la app en un
          celular.
        </p>
      </>
    ),
  },
  pt: {
    metadata: { title: "Configurar o app — Guia Saru Apps" },
    body: (
      <>
        <h1>Configurar o app</h1>

        <h2>Branding</h2>
        <p>Nesta seção o lojista define:</p>
        <ul>
          <li>
            <strong>Nome do app:</strong> o nome que os clientes veem
          </li>
          <li>
            <strong>Logo:</strong> imagem PNG ou JPG (recomendado 512x512px)
          </li>
          <li>
            <strong>Cor primária:</strong> aplicada ao header, aos botões
            principais e às abas
          </li>
          <li>
            <strong>Cor secundária:</strong> destaques e separadores
          </li>
        </ul>
        <p>
          Há uma pré-visualização em tempo real que mostra como o app fica em um
          celular.
        </p>
      </>
    ),
  },
};
