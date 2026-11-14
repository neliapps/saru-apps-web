import type { GuiaArticleContent } from "./index";

export const configurarContent: GuiaArticleContent = {
  es: {
    metadata: { title: "Configurar la app — Guía Saru Apps" },
    body: (
      <>
        <h1>Configurar la app</h1>

        <h2>Apariencia</h2>
        <p>En Configuración &gt; Apariencia el comerciante define:</p>
        <ul>
          <li>
            <strong>Nombre:</strong> se muestra en el encabezado de la app cuando
            no hay logo. El nombre que aparece debajo del ícono y en las tiendas se
            define en Publicar &gt; Ficha de la app (máximo 30 caracteres).
          </li>
          <li>
            <strong>Logo:</strong> va en el encabezado de la app. JPG, PNG, WebP o
            GIF de hasta 5 MB (recomendado 500 × 200 px). El ícono cuadrado de la
            app, de al menos 1024 × 1024 px, se sube en Publicar &gt; Ficha de la
            app.
          </li>
          <li>
            <strong>Color primario:</strong> botones y elementos principales. El
            encabezado y la barra inferior tienen sus propios colores.
          </li>
          <li>
            <strong>Color de acento:</strong> etiquetas, avisos y detalles
            destacados.
          </li>
          <li>
            <strong>Color de ofertas:</strong> precios rebajados y descuentos.
          </li>
          <li>
            <strong>Tipografía:</strong> una fuente para los títulos y otra para los
            textos, y el tamaño del texto (pequeño, medio o grande).
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

        <h2>Aparência</h2>
        <p>Em Configuração &gt; Aparência o lojista define:</p>
        <ul>
          <li>
            <strong>Nome:</strong> aparece no cabeçalho do app quando não há logo.
            O nome que aparece embaixo do ícone e nas lojas é definido em Publicar
            &gt; Ficha do app (máximo de 30 caracteres).
          </li>
          <li>
            <strong>Logo:</strong> fica no cabeçalho do app. JPG, PNG, WebP ou GIF
            de até 5 MB (recomendado: 500 × 200 px). O ícone quadrado do app, com
            pelo menos 1024 × 1024 px, é enviado em Publicar &gt; Ficha do app.
          </li>
          <li>
            <strong>Cor primária:</strong> botões e elementos principais. O
            cabeçalho e a barra inferior têm cores próprias.
          </li>
          <li>
            <strong>Cor de destaque:</strong> etiquetas, avisos e detalhes em
            destaque.
          </li>
          <li>
            <strong>Cor de ofertas:</strong> preços promocionais e descontos.
          </li>
          <li>
            <strong>Tipografia:</strong> uma fonte para os títulos e outra para os
            textos, e o tamanho do texto (pequeno, médio ou grande).
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
