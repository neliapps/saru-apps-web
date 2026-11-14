import type { GuiaArticleContent } from "./index";

export const notificacionesContent: GuiaArticleContent = {
  es: {
    metadata: { title: "Notificaciones push — Guía Saru Apps" },
    body: (
      <>
        <h1>Notificaciones push</h1>

        <h2>Cómo funcionan</h2>
        <p>
          Las notificaciones push permiten al comerciante comunicarse directamente
          con los clientes que tienen la app instalada.
        </p>

        <h2>Crear una notificación</h2>
        <ol>
          <li>Ir a Notificaciones &gt; Nueva campaña</li>
          <li>Escribir título y mensaje</li>
          <li>
            Opcionalmente agregar imagen y deep link (ej: link a un producto
            específico)
          </li>
          <li>Elegir enviar ahora o programar para más tarde</li>
          <li>Ver la vista previa de cómo se ve en iOS y Android</li>
          <li>
            Opcionalmente, antes de enviarla, tocar &quot;Enviar prueba a mi
            teléfono&quot;: llega a tu teléfono si tienes la app instalada, con las
            notificaciones activadas y la sesión iniciada con el email de tu
            cuenta de Saru Apps
          </li>
        </ol>

        <h2>Automatizaciones</h2>
        <p>
          En la pestaña Automatizaciones el comerciante activa avisos que se
          envían solos:
        </p>
        <ul>
          <li>
            <strong>Carrito abandonado:</strong> le recuerda su carrito a quien
            agregó productos y no compró. El segundo recordatorio es desde el plan
            Growth.
          </li>
          <li>
            <strong>Poco stock</strong> (desde el plan Growth): avisa a quienes
            tienen el producto en favoritos o en el carrito cuando quedan pocas
            unidades.
          </li>
          <li>
            <strong>Volvió al stock:</strong> avisa a quienes pidieron que les
            avisen cuando un producto agotado vuelve a estar disponible.
          </li>
          <li>
            <strong>Estado del pedido:</strong> avisa al cliente cuando se confirma
            el pago, cuando su pedido sale y cuando se entrega.
          </li>
          <li>
            <strong>Bienvenida:</strong> llega unos segundos después de que alguien
            activa las notificaciones en la app.
          </li>
        </ul>

        <h2>Límites por plan</h2>
        <ul>
          <li><strong>Starter:</strong> 1.500 notificaciones de campañas por mes</li>
          <li><strong>Growth:</strong> 10.000 notificaciones de campañas por mes</li>
          <li><strong>Scale:</strong> 40.000 notificaciones de campañas por mes</li>
          <li><strong>Enterprise:</strong> a medida</li>
          <li>
            Cada teléfono que recibe una campaña cuenta como una notificación: una
            campaña que llega a 300 teléfonos usa 300.
          </li>
          <li>Las notificaciones automáticas no cuentan para el límite de campañas.</li>
        </ul>

        <h2>Cómo llegan las notificaciones</h2>
        <ul>
          <li>
            Las notificaciones se envían vía Firebase Cloud Messaging (FCM) a los
            dispositivos iOS y Android de los clientes que activaron las
            notificaciones (la app les pide permiso después de una compra, de
            guardar un favorito o de tocar &quot;Avísame&quot;)
          </li>
          <li>
            Al tocar la notificación, el cliente es dirigido al contenido relevante
            (producto, categoría, etc.)
          </li>
        </ul>
      </>
    ),
  },
  pt: {
    metadata: { title: "Notificações push — Guia Saru Apps" },
    body: (
      <>
        <h1>Notificações push</h1>

        <h2>Como funcionam</h2>
        <p>
          As notificações push permitem que o lojista se comunique diretamente
          com os clientes que têm o app instalado.
        </p>

        <h2>Criar uma notificação</h2>
        <ol>
          <li>Ir em Notificações &gt; Nova campanha</li>
          <li>Escrever título e mensagem</li>
          <li>
            Opcionalmente adicionar imagem e deep link (ex.: link para um produto
            específico)
          </li>
          <li>Escolher enviar agora ou agendar para mais tarde</li>
          <li>Ver a pré-visualização de como fica no iOS e no Android</li>
          <li>
            Opcionalmente, antes de enviar, tocar em &quot;Enviar teste para meu
            celular&quot;: o teste chega no seu celular se você tiver o app
            instalado, com as notificações ativadas e logado com o e-mail da sua
            conta Saru Apps
          </li>
        </ol>

        <h2>Automações</h2>
        <p>
          Na aba Automações o lojista ativa avisos que são enviados sozinhos:
        </p>
        <ul>
          <li>
            <strong>Carrinho abandonado:</strong> lembra do carrinho quem adicionou
            produtos e não comprou. O segundo lembrete é a partir do plano Growth.
          </li>
          <li>
            <strong>Estoque baixo</strong> (a partir do plano Growth): avisa quem
            tem o produto nos favoritos ou no carrinho quando restam poucas
            unidades.
          </li>
          <li>
            <strong>Voltou ao estoque:</strong> avisa quem pediu para ser avisado
            quando um produto esgotado volta a ficar disponível.
          </li>
          <li>
            <strong>Status do pedido:</strong> avisa o cliente quando o pagamento é
            confirmado, quando o pedido é enviado e quando é entregue.
          </li>
          <li>
            <strong>Boas-vindas:</strong> chega alguns segundos depois que alguém
            ativa as notificações no app.
          </li>
        </ul>

        <h2>Limites por plano</h2>
        <ul>
          <li><strong>Starter:</strong> 1.500 notificações de campanhas por mês</li>
          <li><strong>Growth:</strong> 10.000 notificações de campanhas por mês</li>
          <li><strong>Scale:</strong> 40.000 notificações de campanhas por mês</li>
          <li><strong>Enterprise:</strong> sob medida</li>
          <li>
            Cada celular que recebe uma campanha conta como uma notificação: uma
            campanha que chega a 300 celulares usa 300.
          </li>
          <li>As notificações automáticas não contam para o limite de campanhas.</li>
        </ul>

        <h2>Como as notificações chegam</h2>
        <ul>
          <li>
            As notificações são enviadas via Firebase Cloud Messaging (FCM) para
            os dispositivos iOS e Android dos clientes que ativaram as
            notificações (o app pede permissão depois de uma compra, de salvar um
            favorito ou de tocar em &quot;Avise-me&quot;)
          </li>
          <li>
            Ao tocar na notificação, o cliente é levado ao conteúdo relevante
            (produto, categoria etc.)
          </li>
        </ul>
      </>
    ),
  },
};
