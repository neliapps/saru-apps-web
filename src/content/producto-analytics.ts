import type { Locale } from "@/i18n/config";

const es = {
  metadata: {
    title: "Analytics — Saru Apps",
    description:
      "Medí el rendimiento de tu app en tiempo real. Usuarios activos, conversiones, ingresos por push y más métricas clave para tomar decisiones.",
  },
  hero: {
    label: "Producto",
    title: "Decisiones basadas",
    accent: "en datos reales",
    subtitle:
      "Medí el rendimiento de tu app en tiempo real. Usuarios activos, conversiones, ingresos y más métricas clave para tomar mejores decisiones de negocio.",
    primary: "Empezar gratis",
    secondary: "Ver cómo funciona",
  },
  metrics: {
    label: "Métricas clave",
    title: "Todo lo que necesitás",
    italic: "medir, en un solo lugar",
    subtitle:
      "Métricas claras, accionables y en tiempo real para entender cómo rinde tu app y dónde mejorar.",
    items: [
      {
        title: "Usuarios activos",
        description:
          "Cuántos usuarios usan tu app diaria, semanal y mensualmente. Identificá tendencias de crecimiento y retención.",
      },
      {
        title: "Tasa de conversión",
        description:
          "Qué porcentaje de visitas se convierten en compras. Compará con tu web y medí el impacto real de la app.",
      },
      {
        title: "Ingresos por canal",
        description:
          "Cuánto factura tu app vs. tu web. Mirá el revenue generado por push notifications, engagement y tráfico orgánico.",
      },
      {
        title: "Productos más vistos",
        description:
          "Cuáles son los productos que más ven tus usuarios en la app. Optimizá tu catálogo con datos reales.",
      },
      {
        title: "Efectividad de push",
        description:
          "Tasa de apertura, clics y conversiones de cada notificación push. Medí qué mensajes funcionan mejor.",
      },
      {
        title: "Comportamiento de compra",
        description:
          "Frecuencia de compra, ticket promedio, productos por pedido y patrón de recompra de tus clientes.",
      },
    ],
  },
  dashboard: {
    label: "Dashboard",
    title: "Tu panel de analytics",
    subtitle:
      "Un dashboard completo con todas las métricas de tu app, actualizado en tiempo real.",
    appTitle: "Analytics",
    periodLabel: "Período:",
    period: "Últimos 30 días",
    vsPrevious: "vs mes anterior",
    stats: [
      { label: "Usuarios activos", value: "3.847", change: "+18%" },
      { label: "Conversión", value: "4,2%", change: "+0,8%" },
      { label: "Ingresos app", value: "$142.500", change: "+32%" },
      { label: "Ticket promedio", value: "$8.420", change: "+5%" },
    ],
    revenueTitle: "Ingresos por día",
    legendApp: "App",
    legendWeb: "Web",
    dates: ["1 sep", "7 sep", "14 sep"],
    topProductsTitle: "Productos top",
    views: "vistas",
    topProducts: [
      { name: "Blazer Oversize", views: "847", pct: 85 },
      { name: "Campera Puffer", views: "623", pct: 65 },
      { name: "Hoodie Essential", views: "412", pct: 45 },
      { name: "Jean Relaxed", views: "298", pct: 30 },
    ],
    pushTitle: "Push notifications",
    pushStats: [
      { label: "Enviados", value: "12.430" },
      { label: "Apertura", value: "38%" },
      { label: "Clics", value: "2.841" },
      { label: "Ventas", value: "$24,8k" },
    ],
  },
  impact: {
    label: "Impacto",
    title: "Medí el impacto",
    italic: "de cada acción",
    subtitle:
      "Cada decisión informada con datos reales. Dejá de adivinar y empezá a optimizar con métricas concretas.",
    items: [
      {
        title: "Optimizá tus campañas push",
        description:
          "Analizá qué horarios, mensajes y segmentos generan mejores resultados. Ajustá tus campañas en base a datos concretos, no suposiciones.",
      },
      {
        title: "Identificá tus productos estrella",
        description:
          "Descubrí cuáles son los productos más vistos, más agregados al carrito y más comprados dentro de la app. Impulsá lo que funciona.",
      },
      {
        title: "Entendé el recorrido del usuario",
        description:
          "Visualizá cómo navegan tus clientes dentro de la app. Desde la home hasta el checkout, identificá dónde se pierden y dónde convierten.",
      },
    ],
  },
  cta: {
    title: "Empezá a medir",
    accent: "lo que importa",
    subtitle:
      "Creá tu app y accedé a métricas en tiempo real desde el primer día. Datos claros para decisiones inteligentes.",
    primary: "Empezar gratis",
    secondary: "Agendar una demo",
  },
};

const pt: typeof es = {
  metadata: {
    title: "Analytics — Saru Apps",
    description:
      "Meça o desempenho do seu app em tempo real. Usuários ativos, conversões, receita por push e mais métricas-chave para tomar decisões.",
  },
  hero: {
    label: "Produto",
    title: "Decisões baseadas",
    accent: "em dados reais",
    subtitle:
      "Meça o desempenho do seu app em tempo real. Usuários ativos, conversões, receita e mais métricas-chave para tomar melhores decisões de negócio.",
    primary: "Começar grátis",
    secondary: "Ver como funciona",
  },
  metrics: {
    label: "Métricas-chave",
    title: "Tudo o que você precisa",
    italic: "medir, em um só lugar",
    subtitle:
      "Métricas claras, acionáveis e em tempo real para entender como seu app está performando e onde melhorar.",
    items: [
      {
        title: "Usuários ativos",
        description:
          "Quantos usuários usam seu app por dia, semana e mês. Identifique tendências de crescimento e retenção.",
      },
      {
        title: "Taxa de conversão",
        description:
          "Que porcentagem das visitas se converte em compras. Compare com o seu site e meça o impacto real do app.",
      },
      {
        title: "Receita por canal",
        description:
          "Quanto o seu app fatura vs. o seu site. Veja a receita gerada por push notifications, engajamento e tráfego orgânico.",
      },
      {
        title: "Produtos mais vistos",
        description:
          "Quais são os produtos que seus usuários mais veem no app. Otimize seu catálogo com dados reais.",
      },
      {
        title: "Efetividade do push",
        description:
          "Taxa de abertura, cliques e conversões de cada notificação push. Meça quais mensagens funcionam melhor.",
      },
      {
        title: "Comportamento de compra",
        description:
          "Frequência de compra, ticket médio, produtos por pedido e padrão de recompra dos seus clientes.",
      },
    ],
  },
  dashboard: {
    label: "Dashboard",
    title: "Seu painel de analytics",
    subtitle:
      "Um dashboard completo com todas as métricas do seu app, atualizado em tempo real.",
    appTitle: "Analytics",
    periodLabel: "Período:",
    period: "Últimos 30 dias",
    vsPrevious: "vs mês anterior",
    stats: [
      { label: "Usuários ativos", value: "3.847", change: "+18%" },
      { label: "Conversão", value: "4,2%", change: "+0,8%" },
      { label: "Receita do app", value: "R$ 82.400", change: "+32%" },
      { label: "Ticket médio", value: "R$ 289", change: "+5%" },
    ],
    revenueTitle: "Receita por dia",
    legendApp: "App",
    legendWeb: "Site",
    dates: ["1 set", "7 set", "14 set"],
    topProductsTitle: "Produtos top",
    views: "visualizações",
    topProducts: [
      { name: "Blazer Oversize", views: "847", pct: 85 },
      { name: "Jaqueta Puffer", views: "623", pct: 65 },
      { name: "Hoodie Essential", views: "412", pct: 45 },
      { name: "Jeans Relaxed", views: "298", pct: 30 },
    ],
    pushTitle: "Push notifications",
    pushStats: [
      { label: "Enviados", value: "12.430" },
      { label: "Abertura", value: "38%" },
      { label: "Cliques", value: "2.841" },
      { label: "Vendas", value: "R$ 14,3 mil" },
    ],
  },
  impact: {
    label: "Impacto",
    title: "Meça o impacto",
    italic: "de cada ação",
    subtitle:
      "Cada decisão embasada em dados reais. Pare de adivinhar e comece a otimizar com métricas concretas.",
    items: [
      {
        title: "Otimize suas campanhas push",
        description:
          "Analise quais horários, mensagens e segmentos geram os melhores resultados. Ajuste suas campanhas com base em dados concretos, não em suposições.",
      },
      {
        title: "Identifique seus produtos estrela",
        description:
          "Descubra quais são os produtos mais vistos, mais adicionados ao carrinho e mais comprados dentro do app. Impulsione o que funciona.",
      },
      {
        title: "Entenda a jornada do usuário",
        description:
          "Visualize como seus clientes navegam dentro do app. Da home ao checkout, identifique onde eles se perdem e onde convertem.",
      },
    ],
  },
  cta: {
    title: "Comece a medir",
    accent: "o que importa",
    subtitle:
      "Crie seu app e acesse métricas em tempo real desde o primeiro dia. Dados claros para decisões inteligentes.",
    primary: "Começar grátis",
    secondary: "Agendar uma demo",
  },
};

export const productoAnalyticsContent: Record<Locale, typeof es> = { es, pt };
