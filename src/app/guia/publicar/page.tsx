import { GuiaArticleLayout } from "@/components/GuiaArticleLayout";

export const metadata = {
  title: "Publicar la app — Guia Saru Apps",
};

export default function Page() {
  return (
    <GuiaArticleLayout currentSlug="publicar">
      <h1>Publicar la app</h1>

      <h2>Checklist de publicacion (4 pasos)</h2>
      <ol>
        <li>
          <strong>Conectar Tiendanube</strong> — vincular la tienda para
          sincronizar productos
        </li>
        <li>
          <strong>Configurar el branding</strong> — nombre, logo y colores
        </li>
        <li>
          <strong>Disenar el contenido</strong> — armar las paginas con el editor
        </li>
        <li>
          <strong>Publicar</strong> — hacer la app accesible para los clientes
        </li>
      </ol>

      <h2>PWA (Plan Starter y superiores)</h2>
      <p>
        Al publicar, se genera una URL unica que el comerciante puede compartir
        con sus clientes. Los clientes pueden:
      </p>
      <ul>
        <li>Abrir la app desde el navegador</li>
        <li>Instalarla en la pantalla de inicio (como una app nativa)</li>
        <li>Recibir notificaciones push</li>
      </ul>
      <p>
        Tambien se genera una pagina de instalacion con instrucciones paso a
        paso para instalar la app, que el comerciante puede compartir por
        WhatsApp, email, redes sociales o QR en la tienda fisica.
      </p>

      <h2>App nativa (Plan Growth y superiores)</h2>
      <p>
        Para publicar en App Store y Google Play, el comerciante necesita:
      </p>
      <ol>
        <li>
          <strong>Crear una cuenta de Google Play Developer</strong> (USD $25,
          pago unico)
        </li>
        <li>
          <strong>Crear una cuenta de Apple Developer</strong> (USD $99/ano)
        </li>
        <li>
          <strong>Invitar a Saru Apps</strong> como administrador o App Manager
          en ambas cuentas
        </li>
        <li>
          El equipo de Saru Apps compila y publica la app en las cuentas del
          comerciante
        </li>
      </ol>
      <p>La app nativa incluye todas las funcionalidades de la PWA mas:</p>
      <ul>
        <li>Presencia en las tiendas de aplicaciones</li>
        <li>Notificaciones push nativas (mas confiables)</li>
        <li>Icono en la pantalla de inicio</li>
        <li>Mejor rendimiento y experiencia de usuario</li>
      </ul>
    </GuiaArticleLayout>
  );
}
