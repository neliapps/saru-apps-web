import type { ReactNode } from "react";
import type { Locale } from "@/i18n/config";

const linkClass =
  "font-medium text-ink underline decoration-accent decoration-2 underline-offset-4";

type LegalContent = {
  metadata: { title: string; description: string };
  hero: { title: string; meta: string };
  body: ReactNode;
};

const es: LegalContent = {
  metadata: {
    title: "Términos y Condiciones — Saru Apps",
    description:
      "Términos y Condiciones de uso de la plataforma Saru Apps: planes, facturación, cancelación, uso aceptable y responsabilidades.",
  },
  hero: {
    title: "Términos y Condiciones",
    meta: "Última actualización: 4 de julio de 2026",
  },
  body: (
    <>
      <h2>1. Aceptación de los Términos</h2>
      <p>
        Al acceder y utilizar la plataforma Saru Apps (en adelante, “el Servicio”), operada a
        través de saruapps.com y app.saruapps.com, aceptás estos Términos y Condiciones en su
        totalidad. Si no estás de acuerdo con alguna parte, no debés utilizar el Servicio.
      </p>

      <h2>2. Descripción del Servicio</h2>
      <p>
        Saru Apps es una plataforma SaaS que permite a comercios con tiendas en Tiendanube
        crear, personalizar y publicar aplicaciones móviles nativas (iOS y Android) sin
        necesidad de programar. El Servicio incluye:
      </p>
      <ul>
        <li>Editor visual drag &amp; drop para diseñar la app</li>
        <li>Sincronización automática de productos con Tiendanube</li>
        <li>Envío de notificaciones push</li>
        <li>Publicación en App Store y Google Play (según el plan contratado)</li>
      </ul>

      <h2>3. Registro y Cuenta</h2>
      <p>
        Para utilizar el Servicio, debés crear una cuenta proporcionando información veraz y
        actualizada. Sos responsable de mantener la confidencialidad de tus credenciales de
        acceso y de todas las actividades realizadas bajo tu cuenta.
      </p>

      <h2>4. Planes y Precios</h2>
      <p>Saru Apps ofrece los siguientes planes de suscripción:</p>
      <ul>
        <li>
          <strong>Starter (USD $49/mes):</strong> App nativa para iPhone y Android publicada por nosotros, sin la marca Saru Apps, editor de todas las pantallas, sincronización automática con Tiendanube, búsqueda, favoritos, cuenta del cliente con pedidos y seguimiento, cupones, notificaciones automáticas (carrito abandonado, vuelta de stock, estado del pedido y bienvenida), 1.500 notificaciones de campañas por mes, 1 drop activo, banner de descarga y link con QR, analítica de 30 días, soporte por email.
        </li>
        <li>
          <strong>Growth (USD $149/mes):</strong> Todo lo de Starter más 10.000 notificaciones de campañas por mes, 3 drops activos, reels de productos (hasta 20 publicados), segundo recordatorio de carrito abandonado, aviso e indicador de poco stock, agregar rápido, repetir pedido, productos recomendados en el carrito, barra de envío gratis, analítica de 90 días con ventas por cada notificación, soporte por WhatsApp.
        </li>
        <li>
          <strong>Scale (USD $349/mes):</strong> Todo lo de Growth más 40.000 notificaciones de campañas por mes, drops ilimitados, reels de productos ilimitados, precios mayoristas (B2B), login obligatorio, soporte prioritario y puesta en marcha.
        </li>
        <li>
          <strong>Enterprise (a medida):</strong> Todo lo de Scale más notificaciones a medida, account manager, integraciones a medida.
        </li>
      </ul>
      <p>Las notificaciones automáticas no cuentan para el límite de campañas.</p>
      <p>
        Podés crear tu cuenta gratis, diseñar tu app completa y ver una preview. El cobro
        comienza únicamente cuando decidís publicar tu app. Los precios pueden ser actualizados
        con un aviso previo de 30 días.
      </p>
      <p>
        Si elegís la facturación anual, se aplica un descuento del 20% sobre el precio mensual.
      </p>

      <h2>5. Facturación y Pagos</h2>
      <p>
        Las suscripciones se facturan de forma mensual o anual según la modalidad elegida. El
        pago se realiza de forma anticipada y no es reembolsable salvo lo indicado en la sección
        de cancelación. Nos reservamos el derecho de suspender el Servicio en caso de falta de
        pago.
      </p>

      <h2>6. Cancelación</h2>
      <p>
        Podés cancelar tu suscripción en cualquier momento desde tu panel de control. La
        cancelación será efectiva al finalizar el período de facturación vigente. No se realizan
        reembolsos proporcionales por el tiempo no utilizado del período en curso.
      </p>

      <h2>7. Uso Aceptable</h2>
      <p>Te comprometés a no utilizar el Servicio para:</p>
      <ul>
        <li>Actividades ilegales o que violen derechos de terceros</li>
        <li>Distribuir contenido malicioso, fraudulento o engañoso</li>
        <li>Enviar notificaciones push con contenido spam o no solicitado</li>
        <li>Intentar acceder a sistemas o datos de otros usuarios</li>
        <li>Sobrecargar intencionalmente la infraestructura del Servicio</li>
      </ul>

      <h2>8. Propiedad Intelectual</h2>
      <p>
        La plataforma Saru Apps, incluyendo su código, diseño, marca y documentación, es
        propiedad exclusiva de Saru Apps. El contenido que subas a la plataforma (logos,
        imágenes, textos) sigue siendo de tu propiedad. Nos otorgás una licencia limitada para
        mostrar dicho contenido dentro de tu app publicada.
      </p>

      <h2>9. Costos de Terceros</h2>
      <p>La publicación en tiendas de apps requiere cuentas de desarrollador independientes:</p>
      <ul>
        <li>Apple Developer Program: USD $99/año</li>
        <li>Google Play Console: USD $25 (pago único)</li>
      </ul>
      <p>
        Estos costos son ajenos a Saru Apps y están sujetos a los términos de Apple y Google
        respectivamente.
      </p>

      <h2>10. Disponibilidad del Servicio</h2>
      <p>
        Nos esforzamos por mantener el Servicio disponible las 24 horas, pero no garantizamos un
        uptime del 100%. Podremos realizar mantenimientos programados y notificaremos con
        anticipación cuando sea posible. No somos responsables por interrupciones causadas por
        terceros (proveedores de hosting, Tiendanube, Apple, Google).
      </p>

      <h2>11. Limitación de Responsabilidad</h2>
      <p>
        Saru Apps no será responsable por daños indirectos, incidentales o consecuentes
        derivados del uso del Servicio. Nuestra responsabilidad total estará limitada al monto
        pagado por el usuario en los últimos 12 meses.
      </p>

      <h2>12. Modificaciones</h2>
      <p>
        Nos reservamos el derecho de modificar estos Términos en cualquier momento. Los cambios
        serán notificados por email y/o mediante un aviso en la plataforma. El uso continuado
        del Servicio después de la notificación constituye la aceptación de los nuevos términos.
      </p>

      <h2>13. Contacto</h2>
      <p>
        Para consultas sobre estos Términos, podés contactarnos en{" "}
        <a href="mailto:hola@saruapps.com" className={linkClass}>
          hola@saruapps.com
        </a>
        .
      </p>
    </>
  ),
};

const pt: LegalContent = {
  metadata: {
    title: "Termos e Condições — Saru Apps",
    description:
      "Termos e Condições de uso da plataforma Saru Apps: planos, faturamento, cancelamento, uso aceitável e responsabilidades.",
  },
  hero: {
    title: "Termos e Condições",
    meta: "Última atualização: 4 de julho de 2026",
  },
  body: (
    <>
      <h2>1. Aceitação dos Termos</h2>
      <p>
        Ao acessar e utilizar a plataforma Saru Apps (doravante, “o Serviço”), operada por meio
        de saruapps.com e app.saruapps.com, você aceita estes Termos e Condições em sua
        totalidade. Se não concordar com alguma parte, você não deve utilizar o Serviço.
      </p>

      <h2>2. Descrição do Serviço</h2>
      <p>
        A Saru Apps é uma plataforma SaaS que permite a lojistas com lojas na Nuvemshop criar,
        personalizar e publicar aplicativos móveis nativos (iOS e Android) sem precisar
        programar. O Serviço inclui:
      </p>
      <ul>
        <li>Editor visual drag &amp; drop para criar o design do app</li>
        <li>Sincronização automática de produtos com a Nuvemshop</li>
        <li>Envio de notificações push</li>
        <li>Publicação na App Store e no Google Play (de acordo com o plano contratado)</li>
      </ul>

      <h2>3. Cadastro e Conta</h2>
      <p>
        Para utilizar o Serviço, você deve criar uma conta fornecendo informações verdadeiras e
        atualizadas. Você é responsável por manter a confidencialidade das suas credenciais de
        acesso e por todas as atividades realizadas em sua conta.
      </p>

      <h2>4. Planos e Preços</h2>
      <p>A Saru Apps oferece os seguintes planos de assinatura:</p>
      <ul>
        <li>
          <strong>Starter (USD $49/mês):</strong> App nativo para iPhone e Android publicado por nós, sem a marca Saru Apps, editor de todas as telas, sincronização automática com a Nuvemshop, busca, favoritos, conta do cliente com pedidos e rastreamento, cupons, notificações automáticas (carrinho abandonado, volta ao estoque, status do pedido e boas-vindas), 1.500 notificações de campanhas por mês, 1 drop ativo, banner de download e link com QR, analytics de 30 dias, suporte por e-mail.
        </li>
        <li>
          <strong>Growth (USD $149/mês):</strong> Tudo do Starter mais 10.000 notificações de campanhas por mês, 3 drops ativos, reels de produtos (até 20 publicados), segundo lembrete de carrinho abandonado, aviso e indicador de estoque baixo, adicionar rápido, repetir pedido, produtos recomendados no carrinho, barra de frete grátis, analytics de 90 dias com vendas por cada notificação, suporte por WhatsApp.
        </li>
        <li>
          <strong>Scale (USD $349/mês):</strong> Tudo do Growth mais 40.000 notificações de campanhas por mês, drops ilimitados, reels de produtos ilimitados, preços de atacado (B2B), login obrigatório, suporte prioritário e implantação assistida.
        </li>
        <li>
          <strong>Enterprise (sob medida):</strong> Tudo do Scale mais notificações sob medida, account manager, integrações sob medida.
        </li>
      </ul>
      <p>As notificações automáticas não contam para o limite de campanhas.</p>
      <p>
        Você pode criar sua conta grátis, criar o design completo do seu app e ver uma preview. A
        cobrança começa somente quando você decide publicar seu app. Os preços podem ser
        atualizados mediante aviso prévio de 30 dias.
      </p>
      <p>
        Se você escolher o faturamento anual, é aplicado um desconto de 20% sobre o preço mensal.
      </p>

      <h2>5. Faturamento e Pagamentos</h2>
      <p>
        As assinaturas são faturadas mensal ou anualmente, de acordo com a modalidade escolhida.
        O pagamento é feito antecipadamente e não é reembolsável, salvo o disposto na seção de
        cancelamento. Reservamo-nos o direito de suspender o Serviço em caso de falta de
        pagamento.
      </p>

      <h2>6. Cancelamento</h2>
      <p>
        Você pode cancelar sua assinatura a qualquer momento pelo seu painel de controle. O
        cancelamento entrará em vigor ao final do período de faturamento vigente. Não são feitos
        reembolsos proporcionais pelo tempo não utilizado do período em curso.
      </p>

      <h2>7. Uso Aceitável</h2>
      <p>Você se compromete a não utilizar o Serviço para:</p>
      <ul>
        <li>Atividades ilegais ou que violem direitos de terceiros</li>
        <li>Distribuir conteúdo malicioso, fraudulento ou enganoso</li>
        <li>Enviar notificações push com conteúdo de spam ou não solicitado</li>
        <li>Tentar acessar sistemas ou dados de outros usuários</li>
        <li>Sobrecarregar intencionalmente a infraestrutura do Serviço</li>
      </ul>

      <h2>8. Propriedade Intelectual</h2>
      <p>
        A plataforma Saru Apps, incluindo seu código, design, marca e documentação, é
        propriedade exclusiva da Saru Apps. O conteúdo que você enviar para a plataforma (logos,
        imagens, textos) continua sendo de sua propriedade. Você nos concede uma licença
        limitada para exibir esse conteúdo dentro do seu app publicado.
      </p>

      <h2>9. Custos de Terceiros</h2>
      <p>A publicação em lojas de aplicativos exige contas de desenvolvedor independentes:</p>
      <ul>
        <li>Apple Developer Program: USD $99/ano</li>
        <li>Google Play Console: USD $25 (pagamento único)</li>
      </ul>
      <p>
        Esses custos não são de responsabilidade da Saru Apps e estão sujeitos aos termos da
        Apple e do Google, respectivamente.
      </p>

      <h2>10. Disponibilidade do Serviço</h2>
      <p>
        Nós nos empenhamos para manter o Serviço disponível 24 horas por dia, mas não garantimos
        um uptime de 100%. Poderemos realizar manutenções programadas e avisaremos com
        antecedência sempre que possível. Não somos responsáveis por interrupções causadas por
        terceiros (provedores de hospedagem, Nuvemshop, Apple, Google).
      </p>

      <h2>11. Limitação de Responsabilidade</h2>
      <p>
        A Saru Apps não será responsável por danos indiretos, incidentais ou consequenciais
        decorrentes do uso do Serviço. Nossa responsabilidade total estará limitada ao valor pago
        pelo usuário nos últimos 12 meses.
      </p>

      <h2>12. Modificações</h2>
      <p>
        Reservamo-nos o direito de modificar estes Termos a qualquer momento. As alterações serão
        comunicadas por e-mail e/ou por meio de um aviso na plataforma. O uso continuado do
        Serviço após a notificação constitui a aceitação dos novos termos.
      </p>

      <h2>13. Contato</h2>
      <p>
        Para dúvidas sobre estes Termos, entre em contato pelo e-mail{" "}
        <a href="mailto:hola@saruapps.com" className={linkClass}>
          hola@saruapps.com
        </a>
        .
      </p>
    </>
  ),
};

export const terminosContent: Record<Locale, LegalContent> = { es, pt };
