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
          <li>Ir a Notificaciones &gt; Crear campaña</li>
          <li>Escribir título y mensaje</li>
          <li>
            Opcionalmente agregar imagen y deep link (ej: link a un producto
            específico)
          </li>
          <li>Elegir enviar ahora o programar para más tarde</li>
          <li>Ver la vista previa de cómo se ve en iOS y Android</li>
        </ol>

        <h2>Límites por plan</h2>
        <ul>
          <li><strong>Starter:</strong> 1.500 campañas/mes</li>
          <li><strong>Growth:</strong> 10.000 campañas/mes</li>
          <li><strong>Scale:</strong> 40.000 campañas/mes</li>
          <li><strong>Enterprise:</strong> a medida</li>
          <li>Las notificaciones automáticas no cuentan para el límite de campañas.</li>
        </ul>

        <h2>Cómo llegan las notificaciones</h2>
        <ul>
          <li>
            Las notificaciones se envían vía Firebase Cloud Messaging (FCM) a
            todos los dispositivos iOS y Android con la app instalada
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
          <li>Ir em Notificações &gt; Criar campanha</li>
          <li>Escrever título e mensagem</li>
          <li>
            Opcionalmente adicionar imagem e deep link (ex.: link para um produto
            específico)
          </li>
          <li>Escolher enviar agora ou agendar para mais tarde</li>
          <li>Ver a pré-visualização de como fica no iOS e no Android</li>
        </ol>

        <h2>Limites por plano</h2>
        <ul>
          <li><strong>Starter:</strong> 1.500 campanhas/mês</li>
          <li><strong>Growth:</strong> 10.000 campanhas/mês</li>
          <li><strong>Scale:</strong> 40.000 campanhas/mês</li>
          <li><strong>Enterprise:</strong> sob medida</li>
          <li>As notificações automáticas não contam para o limite de campanhas.</li>
        </ul>

        <h2>Como as notificações chegam</h2>
        <ul>
          <li>
            As notificações são enviadas via Firebase Cloud Messaging (FCM) para
            todos os dispositivos iOS e Android com o app instalado
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
