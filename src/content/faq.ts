import type { Locale } from "@/i18n/config";

type Category = { name: string; slug: string; faqs: { q: string; a: string }[] };

const es = {
  metadata: {
    title: "Preguntas Frecuentes — Saru Apps",
    description:
      "Todas las respuestas sobre cómo crear tu app móvil para Tiendanube con Saru Apps. Precios, funcionalidades, soporte y más.",
  },
  hero: {
    label: "Centro de ayuda",
    title: "Preguntas",
    accent: "frecuentes",
    subtitleBefore: "Todo lo que necesitás saber sobre Saru Apps. Si no encontrás tu respuesta,",
    subtitleLink: "agendá una llamada con nosotros",
    subtitleAfter: ".",
  },
  categoriesAriaLabel: "Categorías",
  categories: [
    {
      name: "Qué es Saru Apps",
      slug: "que-es",
      faqs: [
        {
          q: "¿Qué es Saru Apps?",
          a: "Saru Apps es una plataforma no-code para crear apps móviles nativas exclusivamente para tiendas Tiendanube. Te permite diseñar, personalizar y publicar tu propia app en App Store y Google Play sin escribir una línea de código.",
        },
        {
          q: "¿Cuál es la diferencia entre una web mobile-friendly y una app nativa?",
          a: "Una web mobile-friendly es simplemente tu tienda adaptada a pantallas chicas. Una app nativa se instala en el celular del cliente, aparece en su pantalla de inicio, permite enviar notificaciones push y ofrece una experiencia mucho más rápida y fluida. Los dos canales se complementan: la web atrae tráfico nuevo y la app fideliza a tus mejores clientes.",
        },
        {
          q: "¿La app es un webview o es nativa de verdad?",
          a: "Es una app nativa real, no un webview empaquetado. Esto significa rendimiento superior, animaciones fluidas y acceso a funcionalidades del dispositivo como notificaciones push. La experiencia para tus clientes es indistinguible de las apps que usan todos los días.",
        },
        {
          q: "¿La app lleva branding de Saru Apps?",
          a: "No. Saru Apps es una solución white-label. Tu app lleva tu marca, tu logo, tus colores. Tus clientes nunca ven la marca Saru Apps.",
        },
      ],
    },
    {
      name: "Cómo funciona",
      slug: "como-funciona",
      faqs: [
        {
          q: "¿Necesito saber programar?",
          a: "No, para nada. La plataforma tiene un editor visual drag & drop que te permite diseñar cada pantalla de tu app arrastrando componentes: banners, grillas de productos, carruseles, timers y más. Es tan fácil como armar una presentación.",
        },
        {
          q: "¿Cuánto tiempo tarda en estar lista mi app?",
          a: "Podés tener tu app diseñada en cuestión de horas. La conexión con Tiendanube es instantánea. La publicación en las tiendas puede demorar entre 3 y 7 días hábiles por los procesos de revisión de Apple y Google.",
        },
        {
          q: "¿Saru Apps se encarga de publicar mi app?",
          a: "Sí. Nosotros hacemos todo el proceso de envío y publicación tanto en App Store como en Google Play. Vos te enfocás en tu negocio.",
        },
        {
          q: "¿Qué necesito antes de lanzar mi app?",
          a: "Solo necesitás una tienda activa en Tiendanube y cuentas de desarrollador en Apple ($99 USD/año) y Google Play ($25 USD, pago único). Si no las tenés, te ayudamos a crearlas.",
        },
        {
          q: "¿Puedo personalizar el diseño de mi app?",
          a: "Absolutamente. Podés personalizar colores, tipografías, layouts, banners y la estructura completa de cada pantalla. Tu app va a reflejar la identidad visual de tu marca al 100%.",
        },
      ],
    },
    {
      name: "Integración con Tiendanube",
      slug: "tiendanube",
      faqs: [
        {
          q: "¿La app funciona solo con Tiendanube?",
          a: "Sí, actualmente Saru Apps está diseñado exclusivamente para tiendas Tiendanube. Nos especializamos en esta plataforma para ofrecer la mejor integración posible.",
        },
        {
          q: "¿Cómo se conecta con mi tienda?",
          a: "La conexión es instantánea. Instalás Saru Apps desde el panel de Tiendanube y en un clic tus productos, categorías, precios y stock se importan automáticamente. Todo se mantiene sincronizado en tiempo real.",
        },
        {
          q: "¿Los pedidos desde la app aparecen en mi panel de Tiendanube?",
          a: "Sí. Todos los pedidos se sincronizan automáticamente con tu panel de Tiendanube. Los gestionás exactamente igual que los pedidos de tu tienda web. No hay duplicación ni complejidad adicional.",
        },
        {
          q: "¿Tengo que gestionar la app por separado?",
          a: "No. Saru Apps funciona como una extensión de tu tienda Tiendanube. Cada cambio que hacés en tus productos, precios o stock se refleja automáticamente en la app.",
        },
        {
          q: "¿La app usa el checkout de Tiendanube?",
          a: "Sí. Tu app usa el checkout nativo de Tiendanube, así que los medios de pago, cupones y configuración de envío que ya tenés funcionan exactamente igual.",
        },
      ],
    },
    {
      name: "Funcionalidades",
      slug: "funcionalidades",
      faqs: [
        {
          q: "¿Qué tipo de notificaciones push puedo enviar?",
          a: "Hay dos tipos. Las automáticas (carrito abandonado, vuelta de stock, estado del pedido y bienvenida) salen solas y no cuentan para el límite. Las campañas pueden llevar imagen y programarse; cada plan incluye un volumen distinto por mes.",
        },
        {
          q: "¿Qué herramientas de engagement incluye?",
          a: "Incluye notificaciones de carrito abandonado, alertas de back in stock, bienvenida automática, badges de producto, drops exclusivos con cuenta regresiva, repetir pedido con un tap y más. Las herramientas disponibles varían según el plan.",
        },
        {
          q: "¿La app tiene analytics?",
          a: "Sí. Tenés acceso a métricas de usuarios activos, conversiones, ingresos generados por push y más datos clave para tomar decisiones.",
        },
        {
          q: "¿Puedo enviar cupones exclusivos para la app?",
          a: "Sí. Podés crear cupones que solo funcionan dentro de la app para incentivar las descargas y compras desde el canal móvil.",
        },
        {
          q: "¿Soporta múltiples idiomas?",
          a: "Tu app sale en español o portugués en todos los planes.",
        },
      ],
    },
    {
      name: "Precios y planes",
      slug: "precios",
      faqs: [
        {
          q: "¿Cuánto cuesta Saru Apps?",
          a: "Tenemos 4 planes: Starter (USD $49/mes), Growth (USD $149/mes), Scale (USD $349/mes) y Enterprise (a medida). Todos tienen un 20% de descuento en el plan anual. Podés ver el detalle en nuestra sección de precios.",
        },
        {
          q: "¿Puedo probar gratis?",
          a: "Sí. Podés crear tu cuenta gratis, diseñar tu app completa y ver una preview de cómo se vería. Solo pagás cuando decidís publicarla.",
        },
        {
          q: "¿Hay costos de setup o configuración?",
          a: "No. No hay costo de setup. Solo pagás el plan mensual o anual que elijas.",
        },
        {
          q: "¿Hay costos adicionales?",
          a: "Saru Apps no cobra costos adicionales. Los únicos costos extra son las cuentas de desarrollador de Apple ($99 USD/año) y Google Play ($25 USD, pago único), que son requeridas por las tiendas de apps.",
        },
        {
          q: "¿Cobran comisión por venta o por notificación?",
          a: "No. No tomamos comisión sobre tus ventas. Cada plan incluye un volumen de notificaciones de campañas por mes sin costo adicional, y las automáticas no cuentan para el límite.",
        },
        {
          q: "¿Puedo cambiar de plan o cancelar?",
          a: "Sí, podés cambiar de plan o cancelar cuando quieras. No hay contratos a largo plazo ni permanencia mínima.",
        },
        {
          q: "¿Qué plan me conviene?",
          a: "Si recién lanzás tu app, Starter. Cuando la app ya es un canal de venta y necesitás mandar más campañas, Growth. Si vendés mayorista o hacés lanzamientos seguidos, Scale. Enterprise es para grandes marcas que necesitan notificaciones e integraciones a medida. Si tenés dudas, agendá una demo y te asesoramos.",
        },
      ],
    },
    {
      name: "Lanzamiento y soporte",
      slug: "soporte",
      faqs: [
        {
          q: "¿Saru Apps puede encargarse de todo el lanzamiento?",
          a: "Sí. Nuestro equipo te acompaña desde la configuración inicial hasta la publicación en las tiendas. Podés agendar una demo y te guiamos paso a paso.",
        },
        {
          q: "¿Qué tipo de soporte ofrecen?",
          a: "Ofrecemos soporte por email en todos los planes. El plan Enterprise suma un account manager dedicado.",
        },
        {
          q: "¿Cómo puedo promocionar mi app para que mis clientes la descarguen?",
          a: "Te proporcionamos herramientas de marketing como códigos QR, links de descarga y una página de instalación compartible. También podés crear campañas en Meta y Google para impulsar las descargas.",
        },
        {
          q: "¿Qué pasa si ya tengo una app con otro proveedor?",
          a: "Podés migrar a Saru Apps. Tu app se publica en tus propias cuentas de desarrollador de Apple y Google, así que si algún día necesitás cambiar de proveedor, no perdés tus descargas.",
        },
        {
          q: "¿Qué pasa si necesito una funcionalidad que no tienen?",
          a: "Contactanos. Todas las funcionalidades que desarrollamos nacen de pedidos de nuestros clientes. Si es algo que beneficia a todos, lo incorporamos sin costo. Si es algo muy específico, lo evaluamos como proyecto custom.",
        },
      ],
    },
  ] as Category[],
  cta: {
    title: "¿Listo para crear",
    accent: "tu app",
    suffix: "?",
    subtitle: "Empezá gratis, diseñá tu app y publicala cuando estés listo. Sin compromiso.",
    primary: "Empezar gratis",
    secondary: "Agendar una demo",
  },
};

const pt: typeof es = {
  metadata: {
    title: "Perguntas Frequentes — Saru Apps",
    description:
      "Todas as respostas sobre como criar seu app móvel para Nuvemshop com a Saru Apps. Preços, funcionalidades, suporte e mais.",
  },
  hero: {
    label: "Central de ajuda",
    title: "Perguntas",
    accent: "frequentes",
    subtitleBefore: "Tudo o que você precisa saber sobre a Saru Apps. Se não encontrar sua resposta,",
    subtitleLink: "agende uma conversa com a gente",
    subtitleAfter: ".",
  },
  categoriesAriaLabel: "Categorias",
  categories: [
    {
      name: "O que é a Saru Apps",
      slug: "que-es",
      faqs: [
        {
          q: "O que é a Saru Apps?",
          a: "A Saru Apps é uma plataforma no-code para criar apps móveis nativos exclusivamente para lojas Nuvemshop. Ela permite que você desenhe, personalize e publique seu próprio app na App Store e no Google Play sem escrever uma linha de código.",
        },
        {
          q: "Qual é a diferença entre um site mobile-friendly e um app nativo?",
          a: "Um site mobile-friendly é simplesmente sua loja adaptada para telas pequenas. Um app nativo é instalado no celular do cliente, aparece na tela inicial, permite enviar notificações push e oferece uma experiência muito mais rápida e fluida. Os dois canais se complementam: o site atrai tráfego novo e o app fideliza seus melhores clientes.",
        },
        {
          q: "O app é um webview ou é nativo de verdade?",
          a: "É um app nativo real, não um webview empacotado. Isso significa desempenho superior, animações fluidas e acesso a funcionalidades do dispositivo, como notificações push. A experiência para seus clientes é indistinguível dos apps que eles usam todos os dias.",
        },
        {
          q: "O app leva a marca Saru Apps?",
          a: "Não. A Saru Apps é uma solução white-label. Seu app leva a sua marca, o seu logo, as suas cores. Seus clientes nunca veem a marca Saru Apps.",
        },
      ],
    },
    {
      name: "Como funciona",
      slug: "como-funciona",
      faqs: [
        {
          q: "Preciso saber programar?",
          a: "Não, de jeito nenhum. A plataforma tem um editor visual drag & drop que permite desenhar cada tela do seu app arrastando componentes: banners, grades de produtos, carrosséis, timers e mais. É tão fácil quanto montar uma apresentação.",
        },
        {
          q: "Quanto tempo leva para meu app ficar pronto?",
          a: "Você pode ter seu app desenhado em questão de horas. A conexão com a Nuvemshop é instantânea. A publicação nas lojas pode levar entre 3 e 7 dias úteis por causa dos processos de revisão da Apple e do Google.",
        },
        {
          q: "A Saru Apps cuida da publicação do meu app?",
          a: "Sim. Nós fazemos todo o processo de envio e publicação tanto na App Store quanto no Google Play. Você foca no seu negócio.",
        },
        {
          q: "O que preciso antes de lançar meu app?",
          a: "Você só precisa de uma loja ativa na Nuvemshop e de contas de desenvolvedor na Apple ($99 USD/ano) e no Google Play ($25 USD, pagamento único). Se ainda não tiver, ajudamos você a criá-las.",
        },
        {
          q: "Posso personalizar o design do meu app?",
          a: "Com certeza. Você pode personalizar cores, tipografias, layouts, banners e a estrutura completa de cada tela. Seu app vai refletir 100% a identidade visual da sua marca.",
        },
      ],
    },
    {
      name: "Integração com a Nuvemshop",
      slug: "tiendanube",
      faqs: [
        {
          q: "O app funciona só com a Nuvemshop?",
          a: "Sim, atualmente a Saru Apps foi desenvolvida exclusivamente para lojas Nuvemshop. Somos especializados nessa plataforma para oferecer a melhor integração possível.",
        },
        {
          q: "Como ele se conecta com minha loja?",
          a: "A conexão é instantânea. Você instala a Saru Apps pelo painel da Nuvemshop e, em um clique, seus produtos, categorias, preços e estoque são importados automaticamente. Tudo se mantém sincronizado em tempo real.",
        },
        {
          q: "Os pedidos feitos pelo app aparecem no meu painel da Nuvemshop?",
          a: "Sim. Todos os pedidos são sincronizados automaticamente com seu painel da Nuvemshop. Você os gerencia exatamente igual aos pedidos da sua loja virtual. Sem duplicação nem complexidade adicional.",
        },
        {
          q: "Preciso gerenciar o app separadamente?",
          a: "Não. A Saru Apps funciona como uma extensão da sua loja Nuvemshop. Cada mudança que você faz em produtos, preços ou estoque é refletida automaticamente no app.",
        },
        {
          q: "O app usa o checkout da Nuvemshop?",
          a: "Sim. Seu app usa o checkout nativo da Nuvemshop, então os meios de pagamento, cupons e configurações de envio que você já tem funcionam exatamente igual.",
        },
      ],
    },
    {
      name: "Funcionalidades",
      slug: "funcionalidades",
      faqs: [
        {
          q: "Que tipo de notificações push posso enviar?",
          a: "Há dois tipos. As automáticas (carrinho abandonado, volta ao estoque, status do pedido e boas-vindas) saem sozinhas e não contam para o limite. As campanhas podem ter imagem e ser agendadas; cada plano inclui um volume diferente por mês.",
        },
        {
          q: "Quais ferramentas de engajamento estão incluídas?",
          a: "Inclui notificações de carrinho abandonado, alertas de back in stock, boas-vindas automáticas, badges de produto, drops exclusivos com contagem regressiva, repetir pedido com um toque e mais. As ferramentas disponíveis variam de acordo com o plano.",
        },
        {
          q: "O app tem analytics?",
          a: "Sim. Você tem acesso a métricas de usuários ativos, conversões, receita gerada por push e outros dados importantes para tomar decisões.",
        },
        {
          q: "Posso enviar cupons exclusivos para o app?",
          a: "Sim. Você pode criar cupons que só funcionam dentro do app para incentivar downloads e compras pelo canal móvel.",
        },
        {
          q: "Tem suporte a vários idiomas?",
          a: "Seu app sai em espanhol ou português em todos os planos.",
        },
      ],
    },
    {
      name: "Preços e planos",
      slug: "precios",
      faqs: [
        {
          q: "Quanto custa a Saru Apps?",
          a: "Temos 4 planos: Starter (USD $49/mês), Growth (USD $149/mês), Scale (USD $349/mês) e Enterprise (sob medida). Todos têm 20% de desconto no plano anual. Você pode ver os detalhes na nossa seção de preços.",
        },
        {
          q: "Posso testar grátis?",
          a: "Sim. Você pode criar sua conta grátis, desenhar seu app completo e ver uma prévia de como ele ficaria. Você só paga quando decidir publicá-lo.",
        },
        {
          q: "Há custos de setup ou configuração?",
          a: "Não. Não há custo de setup. Você só paga o plano mensal ou anual que escolher.",
        },
        {
          q: "Há custos adicionais?",
          a: "A Saru Apps não cobra custos adicionais. Os únicos custos extras são as contas de desenvolvedor da Apple ($99 USD/ano) e do Google Play ($25 USD, pagamento único), exigidas pelas lojas de apps.",
        },
        {
          q: "Vocês cobram comissão por venda ou por notificação?",
          a: "Não. Não cobramos comissão sobre suas vendas. Cada plano inclui um volume mensal de notificações de campanhas sem custo adicional, e as automáticas não contam para o limite.",
        },
        {
          q: "Posso mudar de plano ou cancelar?",
          a: "Sim, você pode mudar de plano ou cancelar quando quiser. Não há contratos de longo prazo nem fidelidade mínima.",
        },
        {
          q: "Qual plano é ideal para mim?",
          a: "Se você está lançando seu app agora, Starter. Quando o app já é um canal de venda e você precisa enviar mais campanhas, Growth. Se você vende no atacado ou faz lançamentos com frequência, Scale. O Enterprise é para grandes marcas que precisam de notificações e integrações sob medida. Se tiver dúvidas, agende uma demo e a gente ajuda você.",
        },
      ],
    },
    {
      name: "Lançamento e suporte",
      slug: "soporte",
      faqs: [
        {
          q: "A Saru Apps pode cuidar de todo o lançamento?",
          a: "Sim. Nossa equipe acompanha você desde a configuração inicial até a publicação nas lojas. Você pode agendar uma demo e guiamos você passo a passo.",
        },
        {
          q: "Que tipo de suporte vocês oferecem?",
          a: "Oferecemos suporte por e-mail em todos os planos. O plano Enterprise inclui também um account manager dedicado.",
        },
        {
          q: "Como posso divulgar meu app para que meus clientes façam o download?",
          a: "Oferecemos ferramentas de marketing como QR codes, links de download e uma página de instalação compartilhável. Você também pode criar campanhas no Meta e no Google para impulsionar os downloads.",
        },
        {
          q: "E se eu já tiver um app com outro fornecedor?",
          a: "Você pode migrar para a Saru Apps. Seu app é publicado nas suas próprias contas de desenvolvedor da Apple e do Google, então, se algum dia precisar trocar de fornecedor, você não perde seus downloads.",
        },
        {
          q: "E se eu precisar de uma funcionalidade que vocês não têm?",
          a: "Fale com a gente. Todas as funcionalidades que desenvolvemos nascem de pedidos dos nossos clientes. Se for algo que beneficia todos, incorporamos sem custo. Se for algo muito específico, avaliamos como projeto personalizado.",
        },
      ],
    },
  ],
  cta: {
    title: "Pronto para criar",
    accent: "seu app",
    suffix: "?",
    subtitle: "Comece grátis, desenhe seu app e publique quando estiver pronto. Sem compromisso.",
    primary: "Começar grátis",
    secondary: "Agendar uma demo",
  },
};

export const faqContent: Record<Locale, typeof es> = { es, pt };
