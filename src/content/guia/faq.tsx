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
          Sí, puedes crear tu cuenta y configurar tu app gratis. Solo necesitas un
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
          Sí, puedes desconectar en cualquier momento desde la sección de
          Integraciones. Ten en cuenta que, sin la tienda conectada, el catálogo
          de tu app ya no se actualiza y el checkout deja de funcionar: tus
          clientes no pueden comprar.
        </p>

        <p><strong>¿Funciona con cualquier plan de Tiendanube?</strong></p>
        <p>
          Sí, Saru Apps es compatible con todos los planes de Tiendanube.
        </p>

        <h2>Publicación</h2>

        <p><strong>¿Cuánto tarda en publicarse mi app?</strong></p>
        <p>
          Primero construimos la app y te enviamos una versión de prueba (2 a 5
          días hábiles). Cuando la apruebas, la enviamos a revisión: Apple tarda
          de 1 a 3 días y Google, de unas horas a 7 días (la primera vez suele
          tardar más). Si tu cuenta de Google es personal, se suman 14 días de
          prueba cerrada con 12 personas. Saru Apps se encarga de todo el proceso
          técnico de compilación y publicación. Más detalles en{" "}
          <a href="/ayuda/publicar-tu-app" className={linkClass}>
            Cómo publicar tu app
          </a>
          .
        </p>

        <p><strong>¿Puedo despublicar mi app?</strong></p>
        <p>
          No hay una opción en el panel para despublicarla: una vez que pides la
          publicación, los cambios se piden escribiéndonos a{" "}
          <a href="mailto:hola@saruapps.com" className={linkClass}>
            hola@saruapps.com
          </a>
          . Si quieres cerrarla por un tiempo, activa el Modo mantenimiento en
          Configuración &gt; General.
        </p>

        <p>
          <strong>¿Qué necesito para publicar en App Store y Google Play?</strong>
        </p>
        <p>
          Necesitas cualquier plan activo de Saru Apps, una cuenta de Apple
          Developer (USD 99 por año), una cuenta de Google Play Console (USD 25,
          una sola vez) y un proyecto de Firebase (gratis), que usamos para enviar
          las notificaciones. Si publicas como empresa, también necesitas un
          número D-U-N-S (gratis). Si tu cuenta de Google es personal, Google
          exige una prueba cerrada de 14 días con 12 personas antes de publicar.
          Nosotros nos encargamos de compilar y subir la app a tus cuentas. Te lo
          explicamos paso a paso en{" "}
          <a href="/ayuda/publicar-tu-app" className={linkClass}>
            Cómo publicar tu app
          </a>
          .
        </p>

        <h2>Notificaciones</h2>

        <p><strong>¿Cómo reciben las notificaciones mis clientes?</strong></p>
        <p>
          Las reciben los clientes que tienen tu app y aceptaron las
          notificaciones. La app les pide permiso después de una compra, de
          guardar un favorito o de tocar &quot;Avísame&quot;, nunca al abrirla por
          primera vez.
        </p>

        <p><strong>¿Puedo programar notificaciones?</strong></p>
        <p>
          Sí, puedes programar notificaciones para que se envíen en una fecha y
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
          Sí, en cualquier momento, desde Cuenta &gt; Planes (con &quot;Gestionar
          facturación&quot;, que abre el portal de pagos de Stripe) o
          escribiéndonos a{" "}
          <a href="mailto:hola@saruapps.com" className={linkClass}>
            hola@saruapps.com
          </a>
          .
        </p>

        <p><strong>¿Cómo cancelo mi suscripción?</strong></p>
        <p>
          Escríbenos a{" "}
          <a href="mailto:hola@saruapps.com" className={linkClass}>
            hola@saruapps.com
          </a>{" "}
          o entra a Cuenta &gt; Planes &gt; &quot;Gestionar facturación&quot;, que
          abre el portal de pagos de Stripe.
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
          Integrações. Mas, sem a loja conectada, o catálogo do seu app deixa de
          ser atualizado e o checkout para de funcionar: seus clientes não
          conseguem comprar.
        </p>

        <p><strong>Funciona com qualquer plano da Nuvemshop?</strong></p>
        <p>
          Sim, a Saru Apps é compatível com todos os planos da Nuvemshop.
        </p>

        <h2>Publicação</h2>

        <p><strong>Quanto tempo leva para meu app ser publicado?</strong></p>
        <p>
          Primeiro construímos o app e enviamos uma versão de teste para você (2 a
          5 dias úteis). Quando você aprova, enviamos para revisão: a Apple leva
          de 1 a 3 dias e o Google, de algumas horas a 7 dias (na primeira vez
          costuma demorar mais). Se a sua conta do Google for pessoal, somam-se 14
          dias de teste fechado com 12 pessoas. A Saru Apps cuida de todo o
          processo técnico de compilação e publicação. Mais detalhes em{" "}
          <a href="/pt/ayuda/publicar-tu-app" className={linkClass}>
            Como publicar seu app
          </a>
          .
        </p>

        <p><strong>Posso despublicar meu app?</strong></p>
        <p>
          Não há uma opção no painel para despublicá-lo: depois que você pede a
          publicação, as alterações são pedidas pelo e-mail{" "}
          <a href="mailto:hola@saruapps.com" className={linkClass}>
            hola@saruapps.com
          </a>
          . Se quiser fechá-lo por um tempo, ative o Modo manutenção em
          Configuração &gt; Geral.
        </p>

        <p>
          <strong>Do que eu preciso para publicar na App Store e no Google Play?</strong>
        </p>
        <p>
          Você precisa de qualquer plano ativo da Saru Apps, uma conta Apple
          Developer (USD 99 por ano), uma conta no Google Play Console (USD 25,
          pagamento único) e um projeto do Firebase (grátis), que usamos para
          enviar as notificações. Se você publica como empresa, também precisa de
          um número D-U-N-S (grátis). Se a sua conta do Google for pessoal, o
          Google exige um teste fechado de 14 dias com 12 pessoas antes de
          publicar. Nós cuidamos de compilar e enviar o app para as suas contas. O
          passo a passo está em{" "}
          <a href="/pt/ayuda/publicar-tu-app" className={linkClass}>
            Como publicar seu app
          </a>
          .
        </p>

        <h2>Notificações</h2>

        <p><strong>Como meus clientes recebem as notificações?</strong></p>
        <p>
          As notificações chegam aos clientes que têm seu app e aceitaram
          recebê-las. O app pede permissão depois de uma compra, de salvar um
          favorito ou de tocar em &quot;Avise-me&quot;, nunca ao ser aberto pela
          primeira vez.
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
          Sim, a qualquer momento, em Conta &gt; Planos (com &quot;Gerenciar
          cobrança&quot;, que abre o portal de pagamentos da Stripe) ou pelo
          e-mail{" "}
          <a href="mailto:hola@saruapps.com" className={linkClass}>
            hola@saruapps.com
          </a>
          .
        </p>

        <p><strong>Como cancelo minha assinatura?</strong></p>
        <p>
          Escreva para{" "}
          <a href="mailto:hola@saruapps.com" className={linkClass}>
            hola@saruapps.com
          </a>{" "}
          ou acesse Conta &gt; Planos &gt; &quot;Gerenciar cobrança&quot;, que abre
          o portal de pagamentos da Stripe.
        </p>
      </>
    ),
  },
};
