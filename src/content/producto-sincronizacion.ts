import type { Locale } from "@/i18n/config";

const es = {
  metadata: {
    title: "Sincronización con Tiendanube — Saru Apps",
    description:
      "Productos, stock, precios y pedidos se sincronizan automáticamente con tu tienda Tiendanube. Todo siempre actualizado en tiempo real.",
  },
  hero: {
    label: "Producto",
    title: "Tu tienda y tu app,",
    accent: "siempre sincronizadas",
    subtitle:
      "Productos, categorías, precios y pedidos se sincronizan automáticamente entre tu tienda Tiendanube y tu app. Editá en un lugar, se actualiza en todos.",
    primary: "Conectar mi tienda",
    secondary: "Ver cómo funciona",
  },
  sync: {
    label: "Sincronización",
    title: "Todo lo que se sincroniza",
    italic: "automáticamente",
    subtitle:
      "No necesitás importar ni exportar nada. La integración con Tiendanube se encarga de mantener todo actualizado.",
    items: [
      {
        title: "Productos",
        description:
          "Nombre, descripción, precio, imágenes, variantes y stock. Todo se importa y se mantiene sincronizado automáticamente.",
      },
      {
        title: "Categorías",
        description:
          "Tus categorías de Tiendanube se crean como secciones dentro de la app, manteniendo la misma estructura de tu tienda.",
      },
      {
        title: "Pedidos",
        description:
          "Los pedidos realizados desde la app aparecen directo en tu panel de Tiendanube, sin pasos extra ni importaciones manuales.",
      },
      {
        title: "Precios y stock",
        description:
          "Cuando actualizás un precio o el stock en Tiendanube, se refleja en la app en tiempo real. Sin demoras, sin inconsistencias.",
      },
      {
        title: "Checkout",
        description:
          "Tu app usa el checkout nativo de Tiendanube. Tus clientes pagan con los mismos medios de pago y la misma experiencia confiable.",
      },
    ],
  },
  connection: {
    label: "Conexión",
    title: "Conectá tu tienda",
    italic: "en 3 simples pasos",
    detail: "Integración en 30 segundos",
    steps: [
      {
        number: "01",
        title: "Instalá Saru Apps desde Tiendanube",
        description:
          "Accedé a tu panel de Tiendanube, buscá Saru Apps en la sección de aplicaciones y hacé clic en instalar.",
      },
      {
        number: "02",
        title: "Autorizá los permisos (OAuth)",
        description:
          "Tiendanube te pide autorizar los permisos necesarios. Saru Apps solo accede a lo que necesita: productos, categorías y pedidos.",
      },
      {
        number: "03",
        title: "Sincronización automática en segundos",
        description:
          "En cuanto autorizás, todos tus productos, categorías y configuraciones se importan automáticamente. Listo para usar.",
      },
    ],
    diagram: {
      left: {
        alt: "Tiendanube",
        name: "Tiendanube",
        sub: "Tu tienda online",
        items: ["Productos", "Categorías", "Pedidos"],
      },
      right: {
        alt: "Saru Apps",
        name: "Saru Apps",
        sub: "Tu app móvil",
        items: ["Catálogo", "Secciones", "Checkout"],
      },
      middle: "Sync en tiempo real",
    },
  },
  realtime: {
    label: "Tiempo real",
    title: "Cambios en tiempo real",
    italic: "vía webhooks",
    p1: "Cuando editás un producto en Tiendanube (cambiás el precio, actualizás el stock, modificás una descripción), el cambio se refleja instantáneamente en tu app.",
    p2: "Usamos webhooks para recibir notificaciones de cada cambio en tu tienda. No hay polling, no hay demoras. La sincronización es inmediata y bidireccional.",
    bullets: [
      "Actualización instantánea de precios",
      "Stock siempre preciso entre ambos canales",
      "Nuevos productos aparecen automáticamente",
      "Pedidos unificados en un solo panel",
    ],
    webhookTitle: "Webhook events",
    events: [
      { event: "product/updated", detail: "Blazer Oversize — precio actualizado", time: "Hace 2s" },
      { event: "product/created", detail: "Campera Puffer Negra — nuevo producto", time: "Hace 1m" },
      { event: "order/created", detail: "Pedido #1847 — $45.900", time: "Hace 3m" },
      { event: "product/updated", detail: "Hoodie Essential — stock actualizado", time: "Hace 5m" },
      { event: "category/updated", detail: "Nueva Temporada — categoría editada", time: "Hace 8m" },
    ],
  },
  security: {
    title: "Conexión segura vía OAuth 2.0",
    body: "La integración usa el protocolo OAuth 2.0 de Tiendanube. Nunca almacenamos tus credenciales. Vos controlás los permisos y podés revocar el acceso en cualquier momento desde tu panel de Tiendanube.",
  },
  cta: {
    title: "Conectá tu tienda",
    accent: "en segundos",
    subtitle:
      "Instalá Saru Apps desde Tiendanube y tus productos se sincronizan automáticamente. Sin configuración manual.",
    primary: "Empezar gratis",
    secondary: "Agendar una demo",
  },
};

const pt: typeof es = {
  metadata: {
    title: "Sincronização com a Nuvemshop — Saru Apps",
    description:
      "Produtos, estoque, preços e pedidos são sincronizados automaticamente com a sua loja Nuvemshop. Tudo sempre atualizado em tempo real.",
  },
  hero: {
    label: "Produto",
    title: "Sua loja e seu app,",
    accent: "sempre sincronizados",
    subtitle:
      "Produtos, categorias, preços e pedidos são sincronizados automaticamente entre a sua loja Nuvemshop e o seu app. Edite em um lugar e tudo se atualiza.",
    primary: "Conectar minha loja",
    secondary: "Ver como funciona",
  },
  sync: {
    label: "Sincronização",
    title: "Tudo o que é sincronizado",
    italic: "automaticamente",
    subtitle:
      "Você não precisa importar nem exportar nada. A integração com a Nuvemshop se encarrega de manter tudo atualizado.",
    items: [
      {
        title: "Produtos",
        description:
          "Nome, descrição, preço, imagens, variantes e estoque. Tudo é importado e mantido sincronizado automaticamente.",
      },
      {
        title: "Categorias",
        description:
          "Suas categorias da Nuvemshop viram seções dentro do app, mantendo a mesma estrutura da sua loja.",
      },
      {
        title: "Pedidos",
        description:
          "Os pedidos feitos pelo app aparecem direto no seu painel da Nuvemshop, sem etapas extras nem importações manuais.",
      },
      {
        title: "Preços e estoque",
        description:
          "Quando você atualiza um preço ou o estoque na Nuvemshop, a mudança aparece no app em tempo real. Sem atrasos, sem inconsistências.",
      },
      {
        title: "Checkout",
        description:
          "Seu app usa o checkout nativo da Nuvemshop. Seus clientes pagam com os mesmos meios de pagamento e a mesma experiência confiável.",
      },
    ],
  },
  connection: {
    label: "Conexão",
    title: "Conecte sua loja",
    italic: "em 3 passos simples",
    detail: "Integração em 30 segundos",
    steps: [
      {
        number: "01",
        title: "Instale a Saru Apps pela Nuvemshop",
        description:
          "Acesse o seu painel da Nuvemshop, procure a Saru Apps na seção de aplicativos e clique em instalar.",
      },
      {
        number: "02",
        title: "Autorize as permissões (OAuth)",
        description:
          "A Nuvemshop pede que você autorize as permissões necessárias. A Saru Apps só acessa o que precisa: produtos, categorias e pedidos.",
      },
      {
        number: "03",
        title: "Sincronização automática em segundos",
        description:
          "Assim que você autoriza, todos os seus produtos, categorias e configurações são importados automaticamente. Pronto para usar.",
      },
    ],
    diagram: {
      left: {
        alt: "Nuvemshop",
        name: "Nuvemshop",
        sub: "Sua loja online",
        items: ["Produtos", "Categorias", "Pedidos"],
      },
      right: {
        alt: "Saru Apps",
        name: "Saru Apps",
        sub: "Seu app móvel",
        items: ["Catálogo", "Seções", "Checkout"],
      },
      middle: "Sync em tempo real",
    },
  },
  realtime: {
    label: "Tempo real",
    title: "Mudanças em tempo real",
    italic: "via webhooks",
    p1: "Quando você edita um produto na Nuvemshop (muda o preço, atualiza o estoque, altera uma descrição), a mudança aparece instantaneamente no seu app.",
    p2: "Usamos webhooks para receber notificações de cada mudança na sua loja. Sem polling, sem atrasos. A sincronização é imediata e bidirecional.",
    bullets: [
      "Atualização instantânea de preços",
      "Estoque sempre preciso entre os dois canais",
      "Novos produtos aparecem automaticamente",
      "Pedidos unificados em um só painel",
    ],
    webhookTitle: "Webhook events",
    events: [
      { event: "product/updated", detail: "Blazer Oversize — preço atualizado", time: "Há 2s" },
      { event: "product/created", detail: "Jaqueta Puffer Preta — novo produto", time: "Há 1m" },
      { event: "order/created", detail: "Pedido #1847 — R$ 289,90", time: "Há 3m" },
      { event: "product/updated", detail: "Hoodie Essential — estoque atualizado", time: "Há 5m" },
      { event: "category/updated", detail: "Nova Temporada — categoria editada", time: "Há 8m" },
    ],
  },
  security: {
    title: "Conexão segura via OAuth 2.0",
    body: "A integração usa o protocolo OAuth 2.0 da Nuvemshop. Nunca armazenamos suas credenciais. Você controla as permissões e pode revogar o acesso a qualquer momento pelo seu painel da Nuvemshop.",
  },
  cta: {
    title: "Conecte sua loja",
    accent: "em segundos",
    subtitle:
      "Instale a Saru Apps pela Nuvemshop e seus produtos são sincronizados automaticamente. Sem configuração manual.",
    primary: "Começar grátis",
    secondary: "Agendar uma demo",
  },
};

export const productoSincronizacionContent: Record<Locale, typeof es> = { es, pt };
