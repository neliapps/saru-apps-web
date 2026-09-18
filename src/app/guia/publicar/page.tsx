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

      <h2>Publicar en App Store y Google Play</h2>
      <p>
        Todos los planes de Saru Apps incluyen app nativa para iOS y Android.
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
      <p>Una vez publicada, tus clientes podran:</p>
      <ul>
        <li>Descargar la app desde App Store y Google Play</li>
        <li>Recibir notificaciones push nativas</li>
        <li>Tener el icono de tu tienda en la pantalla de inicio</li>
        <li>Disfrutar de una experiencia de compra rapida y fluida</li>
      </ul>
      <p>
        El proceso de revision en App Store puede tardar 3-7 dias y en Google
        Play unas horas. Saru Apps se encarga de todo el proceso tecnico.
      </p>
    </GuiaArticleLayout>
  );
}
