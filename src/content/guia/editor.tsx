import type { GuiaArticleContent } from "./index";

const bloquesEs = [
  { nombre: "Banner personalizado", desc: "Imagen con link (banners promocionales)" },
  { nombre: "Carrusel de banners", desc: "Varias imágenes con link en un carrusel" },
  { nombre: "Banner de video", desc: "Banner con video" },
  { nombre: "Carrusel de productos", desc: "Productos destacados en carrusel horizontal" },
  { nombre: "Cuadrícula de productos", desc: "Productos en cuadrícula (2 o 3 columnas)" },
  { nombre: "Colecciones circulares", desc: "Categorías con imagen circular" },
  { nombre: "Carrusel de colecciones", desc: "Categorías en carrusel" },
  { nombre: "Cuadrícula de colecciones", desc: "Categorías en cuadrícula" },
  { nombre: "Lista de categorías", desc: "Categorías de la tienda en una lista" },
  { nombre: "Drop (lanzamiento)", desc: "Un lanzamiento de la sección Drops, con su cuenta regresiva" },
  { nombre: "Bloque de texto", desc: "Texto libre con formato" },
  { nombre: "Espaciador", desc: "Espacio en blanco entre bloques" },
  { nombre: "Separador", desc: "Línea separadora" },
  { nombre: "Cuenta regresiva", desc: "Timer para ofertas" },
  { nombre: "Barra de anuncio", desc: 'Texto destacado (ej: "Envío gratis en compras +$10.000")' },
  { nombre: "Preguntas frecuentes", desc: "Acordeón de FAQ" },
  { nombre: "Sección de menú", desc: "Links de navegación con íconos" },
];

const bloquesPt: typeof bloquesEs = [
  { nombre: "Banner personalizado", desc: "Imagem com link (banners promocionais)" },
  { nombre: "Carrossel de banners", desc: "Várias imagens com link em um carrossel" },
  { nombre: "Banner de vídeo", desc: "Banner com vídeo" },
  { nombre: "Carrossel de produtos", desc: "Produtos em destaque em carrossel horizontal" },
  { nombre: "Grade de produtos", desc: "Produtos em grade (2 ou 3 colunas)" },
  { nombre: "Coleções circulares", desc: "Categorias com imagem circular" },
  { nombre: "Carrossel de coleções", desc: "Categorias em carrossel" },
  { nombre: "Grade de coleções", desc: "Categorias em grade" },
  { nombre: "Lista de categorias", desc: "Categorias da loja em uma lista" },
  { nombre: "Drop (lançamento)", desc: "Um lançamento da seção Drops, com a contagem regressiva" },
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
    metadata: { title: "Diseño — Guía Saru Apps" },
    body: (
      <>
        <h1>Diseño</h1>
        <p>
          En la sección Diseño del panel, el editor drag &amp; drop permite
          diseñar las páginas de la app.
        </p>

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
            <strong>Colección:</strong> cómo se muestra la lista de productos de
            cada categoría
          </li>
          <li>
            <strong>Menú:</strong> el menú de navegación/cuenta del usuario
          </li>
          <li>
            <strong>Buscar:</strong> lo que muestra la pantalla de búsqueda antes
            de que el cliente escriba
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

        <h2>Bloques de página de colección (PLP)</h2>
        <ul>
          <li>Encabezado de colección (nombre de la categoría y cantidad de productos)</li>
          <li>Barra de filtros (ordenar, en oferta, con stock)</li>
          <li>Cuadrícula de productos (2 o 3 columnas; carga más productos al llegar al final)</li>
        </ul>

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
    metadata: { title: "Design — Guia Saru Apps" },
    body: (
      <>
        <h1>Design</h1>
        <p>
          Na seção Design do painel, o editor drag &amp; drop permite criar as
          páginas do app.
        </p>

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
            <strong>Coleção:</strong> como a lista de produtos de cada categoria é
            exibida
          </li>
          <li>
            <strong>Menu:</strong> o menu de navegação/conta do usuário
          </li>
          <li>
            <strong>Busca:</strong> o que a tela de busca mostra antes de o cliente
            digitar
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

        <h2>Blocos da página de coleção (PLP)</h2>
        <ul>
          <li>Cabeçalho da coleção (nome da categoria e quantidade de produtos)</li>
          <li>Barra de filtros (ordenar, em oferta, com estoque)</li>
          <li>Grade de produtos (2 ou 3 colunas; carrega mais produtos ao chegar ao final)</li>
        </ul>

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
