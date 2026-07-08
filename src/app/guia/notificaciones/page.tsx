import { GuiaArticleLayout } from "@/components/GuiaArticleLayout";

export const metadata = {
  title: "Notificaciones push — Guia Saru Apps",
};

export default function Page() {
  return (
    <GuiaArticleLayout currentSlug="notificaciones">
      <h1>Notificaciones push</h1>

      <h2>Como funcionan</h2>
      <p>
        Las notificaciones push permiten al comerciante comunicarse directamente
        con los clientes que tienen la app instalada.
      </p>

      <h2>Crear una notificacion</h2>
      <ol>
        <li>Ir a Notificaciones &gt; Crear campana</li>
        <li>Escribir titulo y mensaje</li>
        <li>
          Opcionalmente agregar imagen y deep link (ej: link a un producto
          especifico)
        </li>
        <li>Elegir enviar ahora o programar para mas tarde</li>
        <li>Ver la vista previa de como se ve en iOS y Android</li>
      </ol>

      <h2>Limites por plan</h2>
      <ul>
        <li><strong>Starter:</strong> 1.000 push/mes</li>
        <li><strong>Growth:</strong> 5.000 push/mes</li>
        <li><strong>Scale:</strong> 20.000 push/mes</li>
        <li><strong>Enterprise:</strong> ilimitado</li>
      </ul>

      <h2>Como llegan las notificaciones</h2>
      <ul>
        <li>
          <strong>PWA (Web):</strong> via Web Push API (funciona en Chrome, Edge,
          Firefox en Android y desktop)
        </li>
        <li>
          <strong>App nativa (iOS/Android):</strong> via Firebase Cloud Messaging
          (FCM)
        </li>
        <li>
          Al tocar la notificacion, el cliente es dirigido al contenido relevante
          (producto, categoria, etc.)
        </li>
      </ul>
    </GuiaArticleLayout>
  );
}
