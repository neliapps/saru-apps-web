import { GuiaArticleLayout } from "@/components/GuiaArticleLayout";

export const metadata = {
  title: "Conectar Tiendanube — Guia Saru Apps",
};

export default function Page() {
  return (
    <GuiaArticleLayout currentSlug="tiendanube">
      <h1>Conectar Tiendanube</h1>

      <h2>Como funciona la conexion</h2>
      <ol>
        <li>
          El comerciante hace click en &quot;Conectar Tiendanube&quot; (en
          Integraciones o en el onboarding)
        </li>
        <li>
          Se abre la pagina de autorizacion de Tiendanube donde acepta los
          permisos
        </li>
        <li>
          Tiendanube redirige de vuelta al dashboard con un codigo de
          autorizacion
        </li>
        <li>El backend intercambia el codigo por un token de acceso</li>
        <li>
          Se registran los webhooks automaticamente (para sincronizar productos
          en tiempo real)
        </li>
        <li>
          Se hace la primera sincronizacion: productos, categorias y paginas
        </li>
        <li>Se crean las paginas por defecto (Inicio, Producto, Menu)</li>
      </ol>

      <h2>Que se sincroniza</h2>
      <ul>
        <li>
          <strong>Productos:</strong> nombre, descripcion, precio, precio
          promocional, imagenes, variantes, stock, categorias
        </li>
        <li>
          <strong>Categorias:</strong> se crean como secciones en la app
        </li>
        <li>
          <strong>Paginas:</strong> paginas estaticas de la tienda (terminos,
          politicas, etc.)
        </li>
      </ul>

      <h2>Sincronizacion en tiempo real</h2>
      <p>
        Cuando el comerciante modifica un producto en Tiendanube (crea, edita o
        elimina), un webhook notifica automaticamente al backend y se actualiza
        en la app sin intervencion manual.
      </p>
    </GuiaArticleLayout>
  );
}
