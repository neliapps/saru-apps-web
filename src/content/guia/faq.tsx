import type { GuiaArticleContent } from "./index";

const linkClass =
  "font-medium text-ink underline decoration-accent decoration-2 underline-offset-4";

export const faqContent: GuiaArticleContent = {
  es: {
    metadata: { title: "Preguntas frecuentes — Guía Saru Apps" },
    body: (
      <>
        <h1>Preguntas frecuentes</h1>

        <h2>Generales</h2>

        <p><strong>¿Necesito saber programar?</strong></p>
        <p>
          No. Todo se configura desde el panel de Saru Apps con un editor visual
          drag &amp; drop.
        </p>

        <p><strong>¿Puedo probar antes de pagar?</strong></p>
        <p>
          Sí, podés crear tu cuenta y configurar tu app gratis. Solo necesitás un
          plan activo para publicarla.
        </p>

        <h2>Tiendanube</h2>

        <p><strong>¿Qué pasa si modifico un producto en Tiendanube?</strong></p>
        <p>
          Los cambios se sincronizan automáticamente en tu app en segundos,
          gracias a los webhooks.
        </p>

        <p><strong>¿Puedo desconectar mi tienda?</strong></p>
        <p>
          Sí, podés desconectar en cualquier momento desde la sección de
          Integraciones. Tu app seguirá funcionando con los productos ya
          sincronizados.
        </p>

        <p><strong>¿Funciona con cualquier plan de Tiendanube?</strong></p>
        <p>
          Sí, Saru Apps es compatible con todos los planes de Tiendanube.
        </p>

        <h2>Publicación</h2>

        <p><strong>¿Cuánto tarda en publicarse mi app?</strong></p>
        <p>
          El proceso de revisión en App Store puede tardar 3-7 días y en Google
          Play unas horas. Saru Apps se encarga de todo el proceso técnico de
          compilación y publicación.
        </p>

        <p><strong>¿Puedo despublicar mi app?</strong></p>
        <p>
          Sí, podés despublicar en cualquier momento desde la sección Publicar.
        </p>

        <p>
          <strong>¿Qué necesito para publicar en App Store y Google Play?</strong>
        </p>
        <p>
          Necesitás cualquier plan activo de Saru Apps, una cuenta de Apple
          Developer ($99/año) y una cuenta de Google Play Developer ($25 una vez).
          Nosotros nos encargamos de compilar y subir la app a tus cuentas.
        </p>

        <h2>Notificaciones</h2>

        <p><strong>¿Cómo reciben las notificaciones mis clientes?</strong></p>
        <p>
          Los clientes que descarguen tu app nativa reciben notificaciones push
          automáticamente cuando las enviás desde el panel.
        </p>

        <p><strong>¿Puedo programar notificaciones?</strong></p>
        <p>
          Sí, podés programar notificaciones para que se envíen en una fecha y
          hora específica.
        </p>

        <p><strong>¿Qué es un deep link?</strong></p>
        <p>
          Es un link especial que lleva al cliente directamente a un producto,
          categoría o sección específica dentro de tu app cuando toca la
          notificación.
        </p>

        <h2>Cuenta y facturación</h2>

        <p><strong>¿Puedo cambiar de plan?</strong></p>
        <p>
          Sí, podés cambiar de plan en cualquier momento desde la sección Plan en
          el dashboard.
        </p>

        <p><strong>¿Cómo cancelo mi suscripción?</strong></p>
        <p>
          Contactanos a{" "}
          <a href="mailto:ventas@saruapps.com" className={linkClass}>
            ventas@saruapps.com
          </a>{" "}
          para gestionar la cancelación.
        </p>
      </>
    ),
  },
  pt: {
    metadata: { title: "Perguntas frequentes — Guia Saru Apps" },
    body: (
      <>
        <h1>Perguntas frequentes</h1>

        <h2>Gerais</h2>

        <p><strong>Preciso saber programar?</strong></p>
        <p>
          Não. Tudo é configurado pelo painel da Saru Apps com um editor visual
          drag &amp; drop.
        </p>

        <p><strong>Posso testar antes de pagar?</strong></p>
        <p>
          Sim, você pode criar sua conta e configurar seu app grátis. Você só
          precisa de um plano ativo para publicá-lo.
        </p>

        <h2>Nuvemshop</h2>

        <p><strong>O que acontece se eu alterar um produto na Nuvemshop?</strong></p>
        <p>
          As alterações são sincronizadas automaticamente no seu app em segundos,
          graças aos webhooks.
        </p>

        <p><strong>Posso desconectar minha loja?</strong></p>
        <p>
          Sim, você pode desconectar a qualquer momento na seção de
          Integrações. Seu app continuará funcionando com os produtos já
          sincronizados.
        </p>

        <p><strong>Funciona com qualquer plano da Nuvemshop?</strong></p>
        <p>
          Sim, a Saru Apps é compatível com todos os planos da Nuvemshop.
        </p>

        <h2>Publicação</h2>

        <p><strong>Quanto tempo leva para meu app ser publicado?</strong></p>
        <p>
          O processo de revisão na App Store pode levar de 3 a 7 dias e no Google
          Play algumas horas. A Saru Apps cuida de todo o processo técnico de
          compilação e publicação.
        </p>

        <p><strong>Posso despublicar meu app?</strong></p>
        <p>
          Sim, você pode despublicar a qualquer momento na seção Publicar.
        </p>

        <p>
          <strong>Do que eu preciso para publicar na App Store e no Google Play?</strong>
        </p>
        <p>
          Você precisa de qualquer plano ativo da Saru Apps, uma conta Apple
          Developer ($99/ano) e uma conta Google Play Developer ($25 uma vez).
          Nós cuidamos de compilar e enviar o app para as suas contas.
        </p>

        <h2>Notificações</h2>

        <p><strong>Como meus clientes recebem as notificações?</strong></p>
        <p>
          Os clientes que baixarem seu app nativo recebem notificações push
          automaticamente quando você as envia pelo painel.
        </p>

        <p><strong>Posso agendar notificações?</strong></p>
        <p>
          Sim, você pode agendar notificações para serem enviadas em uma data e
          horário específicos.
        </p>

        <p><strong>O que é um deep link?</strong></p>
        <p>
          É um link especial que leva o cliente diretamente a um produto,
          categoria ou seção específica dentro do seu app quando ele toca na
          notificação.
        </p>

        <h2>Conta e faturamento</h2>

        <p><strong>Posso mudar de plano?</strong></p>
        <p>
          Sim, você pode mudar de plano a qualquer momento na seção Plano do
          dashboard.
        </p>

        <p><strong>Como cancelo minha assinatura?</strong></p>
        <p>
          Fale com a gente em{" "}
          <a href="mailto:ventas@saruapps.com" className={linkClass}>
            ventas@saruapps.com
          </a>{" "}
          para fazer o cancelamento.
        </p>
      </>
    ),
  },
};
