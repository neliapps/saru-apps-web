import type { Locale } from "@/i18n/config";

const es = {
  metadata: {
    title: "Editor Drag & Drop — Saru Apps",
    description:
      "Diseña cada pantalla de tu app arrastrando componentes visuales. Banner, carrusel, cuadrículas, countdown y más. Sin código, sin límites.",
  },
  back: "Producto",
  hero: {
    label: "Editor Drag & Drop",
    title: "Diseña tu app",
    accent: "arrastrando componentes",
    subtitle:
      "Editor visual para armar cada pantalla de tu app. Arrastra bloques, personaliza estilos y mira el resultado en tiempo real. Sin escribir una línea de código.",
  },
  mockup: {
    components: "Componentes",
    componentItems: ["Banner Hero", "Cuadrícula 2x2", "Carrusel", "Countdown", "CTA", "Video", "Categorías"],
    style: "Estilo",
    radius: "Radio",
    padding: "Padding",
    typography: "Tipografía",
    properties: "Propiedades",
    type: "Tipo",
    typeValue: "Banner Hero",
    link: "Enlace",
    linkValue: "Colección",
    height: "Altura",
    heightValue: "Auto",
  },
  blocksSection: {
    label: "Bloques",
    title: "Bloques",
    italic: "disponibles",
    subtitle:
      "Arma cada pantalla combinando los bloques que necesites. Arrastra, ordena y personaliza.",
  },
  blocks: [
    {
      title: "Banner personalizado",
      description:
        "Imágenes a pantalla completa con texto, botones y enlaces a productos o colecciones.",
    },
    {
      title: "Video banner",
      description: "Reproduce videos de YouTube o archivos propios como hero de la pantalla.",
    },
    {
      title: "Carrusel de productos",
      description: "Slider horizontal con productos destacados, ofertas o novedades.",
    },
    {
      title: "Cuadrícula de productos",
      description:
        "Muestra productos en formato cuadrícula de 2 o 3 columnas con imagen, precio y nombre.",
    },
    {
      title: "Colecciones en círculo",
      description:
        "Categorías o colecciones en formato circular, ideal para navegación rápida.",
    },
    {
      title: "Categorías",
      description:
        "Lista visual de categorías con imagen de portada y acceso directo al catálogo.",
    },
    {
      title: "Timer / Countdown",
      description: "Cuenta regresiva para ofertas flash, lanzamientos o eventos especiales.",
    },
    {
      title: "Separadores",
      description: "Espaciado visual entre secciones. Personaliza grosor, color y margen.",
    },
    {
      title: "Botones CTA",
      description:
        "Botones de acción que enlazan a productos, colecciones, WhatsApp o URLs externas.",
    },
  ],
  benefits: [
    {
      title: "Sin código",
      description:
        "No necesitas saber programar. Todo se configura visualmente desde el panel.",
    },
    {
      title: "Vista previa en tiempo real",
      description:
        "Mira cómo queda cada cambio al instante en la previsualización del celular.",
    },
    {
      title: "Componentes ilimitados",
      description:
        "Agrega todos los bloques que necesites. No hay límites de secciones por pantalla.",
    },
  ],
  cta: {
    title: "Empieza a diseñar",
    accent: "tu app",
    subtitle:
      "Abre el editor, arrastra componentes y crea la app perfecta para tu tienda. Sin código, sin complicaciones.",
    primary: "Empezar gratis",
    secondary: "Agendar una demo",
  },
};

const pt: typeof es = {
  metadata: {
    title: "Editor Drag & Drop — Saru Apps",
    description:
      "Crie cada tela do seu app arrastando componentes visuais. Banner, carrossel, grades, countdown e muito mais. Sem código, sem limites.",
  },
  back: "Produto",
  hero: {
    label: "Editor Drag & Drop",
    title: "Crie seu app",
    accent: "arrastando componentes",
    subtitle:
      "Editor visual para montar cada tela do seu app. Arraste blocos, personalize estilos e veja o resultado em tempo real. Sem escrever uma linha de código.",
  },
  mockup: {
    components: "Componentes",
    componentItems: ["Banner Hero", "Grade 2x2", "Carrossel", "Countdown", "CTA", "Vídeo", "Categorias"],
    style: "Estilo",
    radius: "Raio",
    padding: "Padding",
    typography: "Tipografia",
    properties: "Propriedades",
    type: "Tipo",
    typeValue: "Banner Hero",
    link: "Link",
    linkValue: "Coleção",
    height: "Altura",
    heightValue: "Auto",
  },
  blocksSection: {
    label: "Blocos",
    title: "Blocos",
    italic: "disponíveis",
    subtitle:
      "Monte cada tela combinando os blocos de que você precisa. Arraste, organize e personalize.",
  },
  blocks: [
    {
      title: "Banner personalizado",
      description:
        "Imagens em tela cheia com texto, botões e links para produtos ou coleções.",
    },
    {
      title: "Banner de vídeo",
      description: "Reproduz vídeos do YouTube ou arquivos próprios como destaque da tela.",
    },
    {
      title: "Carrossel de produtos",
      description: "Slider horizontal com produtos em destaque, ofertas ou novidades.",
    },
    {
      title: "Grade de produtos",
      description:
        "Mostra produtos em formato de grade com 2 ou 3 colunas, com imagem, preço e nome.",
    },
    {
      title: "Coleções em círculo",
      description:
        "Categorias ou coleções em formato circular, ideal para uma navegação rápida.",
    },
    {
      title: "Categorias",
      description:
        "Lista visual de categorias com imagem de capa e acesso direto ao catálogo.",
    },
    {
      title: "Timer / Countdown",
      description: "Contagem regressiva para ofertas relâmpago, lançamentos ou eventos especiais.",
    },
    {
      title: "Separadores",
      description: "Espaçamento visual entre seções. Personalize espessura, cor e margem.",
    },
    {
      title: "Botões CTA",
      description:
        "Botões de ação com links para produtos, coleções, WhatsApp ou URLs externas.",
    },
  ],
  benefits: [
    {
      title: "Sem código",
      description:
        "Você não precisa saber programar. Tudo é configurado visualmente pelo painel.",
    },
    {
      title: "Pré-visualização em tempo real",
      description:
        "Veja como fica cada alteração na hora, na pré-visualização do celular.",
    },
    {
      title: "Componentes ilimitados",
      description:
        "Adicione todos os blocos de que precisar. Não há limite de seções por tela.",
    },
  ],
  cta: {
    title: "Comece a criar",
    accent: "seu app",
    subtitle:
      "Abra o editor, arraste componentes e crie o app perfeito para a sua loja. Sem código, sem complicações.",
    primary: "Começar grátis",
    secondary: "Agendar uma demo",
  },
};

export const productoEditorContent: Record<Locale, typeof es> = { es, pt };
