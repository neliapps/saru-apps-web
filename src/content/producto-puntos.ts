import type { Locale } from "@/i18n/config";

const es = {
  metadata: {
    title: "Programa de puntos — Saru Apps",
    description:
      "Un programa de puntos para tu tienda Tiendanube: tus clientes suman en cada compra, en la web y en la app, y los canjean como descuento en la app. Disponible desde el plan Growth.",
  },
  back: "Producto",
  hero: {
    label: "Programa de puntos",
    title: "Clientes que",
    accent: "vuelven a comprar",
    subtitle:
      "Tus clientes suman puntos en cada compra, en tu tienda web y en la app, y los usan como descuento en su próxima compra desde la app.",
    primary: "Empezar gratis",
    secondary: "Agendar una demo",
  },
  steps: {
    label: "Cómo funciona",
    title: "Comprar, sumar",
    italic: "y volver",
    subtitle: "Sin tarjetas ni sellos: los puntos van con el email de cada compra y se ven en la app.",
    items: [
      {
        title: "Activa el programa",
        description:
          "Elige qué parte de cada compra vuelve en puntos y cuánto vale cada punto. Lo configuras en minutos desde el panel.",
      },
      {
        title: "Tus clientes suman en cada compra",
        description:
          "En la app y también en tu tienda web. Los puntos van con el email de la compra, así que suman aunque todavía no tengan la app.",
      },
      {
        title: "Los canjean en la app",
        description:
          "Un interruptor en el carrito aplica los puntos como descuento en el checkout de Tiendanube. El canje es solo en la app: una razón más para descargarla.",
      },
    ],
  },
  notices: {
    label: "Avisos automáticos",
    title: "Nadie se olvida",
    italic: "de sus puntos",
    subtitle: "Tres notificaciones que se envían solas y no cuentan para el límite de tu plan.",
    items: [
      {
        title: "Puntos sumados",
        description:
          "Después de cada compra pagada, en la web o en la app, el cliente sabe cuántos puntos sumó y cuántos tiene en total.",
        example: {
          title: "¡Sumaste 1.078 puntos!",
          body: "Ya tienes 2.450 puntos. Úsalos en tu próxima compra desde la app.",
          time: "ahora",
        },
      },
      {
        title: "Puntos esperando",
        description:
          "La primera vez que alguien inicia sesión en la app, le contamos los puntos que ya sumó comprando en tu tienda.",
        example: {
          title: "Tienes 650 puntos esperándote",
          body: "Los sumaste con tus compras. Úsalos en tu próxima compra desde la app.",
          time: "ahora",
        },
      },
      {
        title: "Puntos por vencer",
        description:
          "Días antes de que venzan, un aviso con el saldo y el tiempo que le queda: la excusa perfecta para volver a comprar.",
        example: {
          title: "Tus 2.450 puntos vencen pronto",
          body: "Te quedan 15 días para usarlos en tu próxima compra desde la app.",
          time: "hace 3 días",
        },
      },
    ],
  },
  rules: {
    label: "Tus reglas",
    title: "Un programa a la medida",
    italic: "de tu margen",
    subtitle: "Tú decides cuánto das y cuándo se puede canjear, y ves en todo momento cuánto debes en descuentos.",
    items: [
      {
        title: "Cuánto vuelve en puntos",
        description:
          "El porcentaje de cada compra que vuelve en puntos, cuánto vale cada punto y si las compras en tu tienda web también suman.",
      },
      {
        title: "Canje con límites",
        description: "Mínimo de puntos para canjear, compra mínima y tope por pedido, para que el descuento siempre te convenga.",
      },
      {
        title: "Con o sin otros descuentos",
        description: "Decides si los puntos se combinan con los cupones de tu tienda y con el descuento de la app.",
      },
      {
        title: "Vencimiento con aviso",
        description:
          "Los puntos vencen si un cliente deja de comprar durante los meses que elijas, siempre después de avisarle. O nunca, si lo prefieres.",
      },
      {
        title: "Regalo de bienvenida",
        description: "Puntos para quien inicia sesión en la app por primera vez: el empujón para su primera compra.",
      },
      {
        title: "Todo a la vista",
        description:
          "Puntos dados, canjeados y vencidos, lo que debes en descuentos y las ventas con canje. El saldo de cada cliente, también en Contactos, con ajustes a mano.",
      },
    ],
    plan: "Incluido desde el plan Growth.",
    link: "Ver todos los planes",
  },
  cta: {
    title: "Dale a tus clientes una razón para",
    accent: "volver",
    subtitle: "Diseña tu app gratis y activa el programa de puntos cuando la publiques en el plan Growth o superior.",
    primary: "Empezar gratis",
    secondary: "Agendar una demo",
  },
};

const pt: typeof es = {
  metadata: {
    title: "Programa de pontos — Saru Apps",
    description:
      "Um programa de pontos para sua loja Nuvemshop: seus clientes ganham pontos em cada compra, na loja on-line e no app, e trocam por desconto no app. Disponível a partir do plano Growth.",
  },
  back: "Produto",
  hero: {
    label: "Programa de pontos",
    title: "Clientes que",
    accent: "voltam a comprar",
    subtitle:
      "Seus clientes ganham pontos em cada compra, na sua loja on-line e no app, e usam como desconto na próxima compra pelo app.",
    primary: "Começar grátis",
    secondary: "Agendar uma demo",
  },
  steps: {
    label: "Como funciona",
    title: "Comprar, ganhar",
    italic: "e voltar",
    subtitle: "Sem cartões nem carimbos: os pontos ficam com o e-mail de cada compra e aparecem no app.",
    items: [
      {
        title: "Ative o programa",
        description:
          "Escolha quanto de cada compra volta em pontos e quanto vale cada ponto. Você configura em minutos pelo painel.",
      },
      {
        title: "Seus clientes ganham em cada compra",
        description:
          "No app e também na sua loja on-line. Os pontos ficam com o e-mail da compra, então acumulam mesmo antes de o cliente ter o app.",
      },
      {
        title: "Trocam no app",
        description:
          "Um botão no carrinho aplica os pontos como desconto no checkout da Nuvemshop. A troca é só no app: mais um motivo para baixá-lo.",
      },
    ],
  },
  notices: {
    label: "Avisos automáticos",
    title: "Ninguém esquece",
    italic: "dos seus pontos",
    subtitle: "Três notificações que são enviadas sozinhas e não contam para o limite do seu plano.",
    items: [
      {
        title: "Pontos ganhos",
        description:
          "Depois de cada compra paga, na loja on-line ou no app, o cliente fica sabendo quantos pontos ganhou e quantos tem no total.",
        example: {
          title: "Você ganhou 1.078 pontos!",
          body: "Agora você tem 2.450 pontos. Use na sua próxima compra pelo app.",
          time: "agora",
        },
      },
      {
        title: "Pontos esperando",
        description:
          "Na primeira vez que alguém faz login no app, contamos os pontos que a pessoa já ganhou comprando na sua loja.",
        example: {
          title: "Seus 650 pontos estão esperando por você",
          body: "Você os ganhou com suas compras. Use na sua próxima compra pelo app.",
          time: "agora",
        },
      },
      {
        title: "Pontos a vencer",
        description:
          "Dias antes do vencimento, um aviso com o saldo e o tempo que resta: o motivo perfeito para voltar a comprar.",
        example: {
          title: "Seus 2.450 pontos vencem em breve",
          body: "Faltam 15 dias para usá-los na sua próxima compra pelo app.",
          time: "há 3 dias",
        },
      },
    ],
  },
  rules: {
    label: "Suas regras",
    title: "Um programa sob medida",
    italic: "para a sua margem",
    subtitle: "Você decide quanto dá e quando os pontos podem ser trocados, e vê a qualquer momento quanto deve em descontos.",
    items: [
      {
        title: "Quanto volta em pontos",
        description:
          "A porcentagem de cada compra que volta em pontos, quanto vale cada ponto e se as compras na sua loja on-line também contam.",
      },
      {
        title: "Troca com limites",
        description: "Mínimo de pontos para trocar, compra mínima e teto por pedido, para que o desconto sempre valha a pena.",
      },
      {
        title: "Com ou sem outros descontos",
        description: "Você decide se os pontos se combinam com os cupons da sua loja e com o desconto do app.",
      },
      {
        title: "Vencimento com aviso",
        description:
          "Os pontos vencem se o cliente ficar sem comprar pelos meses que você escolher, sempre depois de avisá-lo. Ou nunca, se preferir.",
      },
      {
        title: "Presente de boas-vindas",
        description: "Pontos para quem faz login no app pela primeira vez: o empurrão para a primeira compra.",
      },
      {
        title: "Tudo à vista",
        description:
          "Pontos dados, trocados e vencidos, quanto você deve em descontos e as vendas com troca. O saldo de cada cliente, também em Contatos, com ajustes manuais.",
      },
    ],
    plan: "Incluído a partir do plano Growth.",
    link: "Ver todos os planos",
  },
  cta: {
    title: "Dê aos seus clientes um motivo para",
    accent: "voltar",
    subtitle: "Crie seu app grátis e ative o programa de pontos quando publicar no plano Growth ou superior.",
    primary: "Começar grátis",
    secondary: "Agendar uma demo",
  },
};

export const productoPuntosContent: Record<Locale, typeof es> = { es, pt };
