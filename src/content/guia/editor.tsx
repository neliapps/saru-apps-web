import type { GuiaArticleContent } from "./index";

const bloquesEs = [
  { nombre: "Banner personalizado", desc: "Imagen con link (banners promocionales)" },
  { nombre: "Video banner", desc: "Banner con video" },
  { nombre: "Carrusel de productos", desc: "Productos destacados en carrusel horizontal" },
  { nombre: "Grilla de productos", desc: "Productos en grilla (2 o 3 columnas)" },
  { nombre: "Colecciones en círculo", desc: "Categorías con imagen circular" },
  { nombre: "Carrusel de colecciones", desc: "Categorías en carrusel" },
  { nombre: "Grilla de colecciones", desc: "Categorías en grilla" },
  { nombre: "Bloque de texto", desc: "Texto libre con formato" },
  { nombre: "Espaciador", desc: "Espacio en blanco entre bloques" },
  { nombre: "Divisor", desc: "Línea separadora" },
  { nombre: "Cuenta regresiva", desc: "Timer para ofertas" },
  { nombre: "Barra de anuncio", desc: 'Texto destacado (ej: "Envío gratis en compras +$10.000")' },
  { nombre: "Preguntas frecuentes", desc: "Acordeón de FAQ" },
  { nombre: "Sección de menú", desc: "Links de navegación con íconos" },
];

const bloquesPt: typeof bloquesEs = [
  { nombre: "Banner personalizado", desc: "Imagem com link (banners promocionais)" },
  { nombre: "Banner de vídeo", desc: "Banner com vídeo" },
  { nombre: "Carrossel de produtos", desc: "Produtos em destaque em carrossel horizontal" },
  { nombre: "Grade de produtos", desc: "Produtos em grade (2 ou 3 colunas)" },
  { nombre: "Coleções em círculo", desc: "Categorias com imagem circular" },
  { nombre: "Carrossel de coleções", desc: "Categorias em carrossel" },
  { nombre: "Grade de coleções", desc: "Categorias em grade" },
  { nombre: "Bloco de texto", desc: "Texto livre com formatação" },
  { nombre: "Espaçador", desc: "Espaço em branco entre blocos" },
  { nombre: "Divisor", desc: "Linha separadora" },
  { nombre: "Contagem regressiva", desc: "Timer para ofertas" },
  { nombre: "Barra de anúncio", desc: 'Texto em destaque (ex.: "Frete grátis em compras acima de R$ 200")' },
  { nombre: "Perguntas frequentes", desc: "Acordeão de FAQ" },
  { nombre: "Seção de menu", desc: "Links de navegação com ícones" },
];

export const editorContent: GuiaArticleContent = {
  es: {
    metadata: { title: "Editor de contenido — Guía Saru Apps" },
    body: (
      <>
        <h1>Editor de contenido</h1>
        <p>El editor drag &amp; drop permite diseñar las páginas de la app.</p>

        <h2>Tipos de página</h2>
        <ul>
          <li>
            <strong>Inicio:</strong> la página principal que ven los clientes al
            abrir la app
          </li>
          <li>
            <strong>Producto:</strong> cómo se muestra cada producto individual
          </li>
          <li>
            <strong>Menú:</strong> el menú de navegación/cuenta del usuario
          </li>
        </ul>

        <h2>Bloques disponibles</h2>
        <div className="mb-8 overflow-x-auto rounded-2xl border border-line-light">
          <table>
            <thead>
              <tr>
                <th>Bloque</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              {bloquesEs.map((b) => (
                <tr key={b.nombre}>
                  <td><strong>{b.nombre}</strong></td>
                  <td>{b.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Bloques de página de producto (PDP)</h2>
        <ul>
          <li>Galería de imágenes</li>
          <li>Info del producto (nombre, precio, precio promo)</li>
          <li>Selector de variantes</li>
          <li>Botón agregar al carrito</li>
          <li>Descripción</li>
          <li>Filas de información (envío, devolución, etc.)</li>
        </ul>
        <p>
          El comerciante puede arrastrar los bloques para reordenarlos, hacer
          clic en cada uno para editar sus propiedades, y ver la vista previa en
          tiempo real.
        </p>
      </>
    ),
  },
  pt: {
    metadata: { title: "Editor de conteúdo — Guia Saru Apps" },
    body: (
      <>
        <h1>Editor de conteúdo</h1>
        <p>O editor drag &amp; drop permite criar as páginas do app.</p>

        <h2>Tipos de página</h2>
        <ul>
          <li>
            <strong>Início:</strong> a página principal que os clientes veem ao
            abrir o app
          </li>
          <li>
            <strong>Produto:</strong> como cada produto individual é exibido
          </li>
          <li>
            <strong>Menu:</strong> o menu de navegação/conta do usuário
          </li>
        </ul>

        <h2>Blocos disponíveis</h2>
        <div className="mb-8 overflow-x-auto rounded-2xl border border-line-light">
          <table>
            <thead>
              <tr>
                <th>Bloco</th>
                <th>Descrição</th>
              </tr>
            </thead>
            <tbody>
              {bloquesPt.map((b) => (
                <tr key={b.nombre}>
                  <td><strong>{b.nombre}</strong></td>
                  <td>{b.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Blocos da página de produto (PDP)</h2>
        <ul>
          <li>Galeria de imagens</li>
          <li>Informações do produto (nome, preço, preço promocional)</li>
          <li>Seletor de variantes</li>
          <li>Botão adicionar ao carrinho</li>
          <li>Descrição</li>
          <li>Linhas de informação (frete, devolução etc.)</li>
        </ul>
        <p>
          O lojista pode arrastar os blocos para reordená-los, clicar em cada um
          para editar suas propriedades e ver a pré-visualização em tempo real.
        </p>
      </>
    ),
  },
};
