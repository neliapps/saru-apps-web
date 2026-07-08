import { GuiaArticleLayout } from "@/components/GuiaArticleLayout";

export const metadata = {
  title: "App nativa — Guia Saru Apps",
};

export default function Page() {
  return (
    <GuiaArticleLayout currentSlug="app-nativa">
      <h1>App movil nativa (React Native)</h1>
      <p>
        La app nativa esta construida con React Native + Expo y ofrece una
        experiencia completa de tienda.
      </p>

      <h2>Pantallas</h2>
      <ul>
        <li>
          <strong>Inicio:</strong> productos destacados, banners, bloques
          dinamicos del page builder
        </li>
        <li><strong>Categorias:</strong> navegacion por categoria</li>
        <li>
          <strong>Busqueda:</strong> busqueda en tiempo real con sugerencias
        </li>
        <li>
          <strong>Favoritos:</strong> lista de deseos (almacenada localmente)
        </li>
        <li>
          <strong>Carrito:</strong> carrito de compras con cantidades y variantes
        </li>
        <li>
          <strong>Perfil:</strong> menu de cuenta, pedidos, configuracion
        </li>
        <li>
          <strong>Detalle de producto:</strong> galeria, variantes, agregar al
          carrito
        </li>
      </ul>

      <h2>Checkout</h2>
      <p>
        El checkout redirige a la pagina de checkout nativa de Tiendanube. Esto
        garantiza compatibilidad con todos los medios de pago configurados por
        el comerciante.
      </p>

      <h2>Theming dinamico</h2>
      <p>
        La app carga los colores y branding desde el backend, asi que cada
        comerciante tiene su app con sus colores y logo.
      </p>

      <h2>Notificaciones push en la app nativa</h2>
      <ul>
        <li>Se registra automaticamente para push al abrir la app</li>
        <li>
          Soporta deep linking: al tocar la notificacion, abre el producto o
          seccion correspondiente
        </li>
        <li>Android: Firebase Cloud Messaging (FCM)</li>
        <li>iOS: Apple Push Notification Service (APNs) via FCM</li>
      </ul>
    </GuiaArticleLayout>
  );
}
