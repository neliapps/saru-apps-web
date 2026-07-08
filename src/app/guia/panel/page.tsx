import { GuiaArticleLayout } from "@/components/GuiaArticleLayout";

export const metadata = {
  title: "Panel en Tiendanube — Guia Saru Apps",
};

export default function Page() {
  return (
    <GuiaArticleLayout currentSlug="panel">
      <h1>Panel embebido en Tiendanube</h1>
      <p>
        Saru Apps se integra directamente en el panel de administracion de
        Tiendanube. Cuando un comerciante instala la app desde el App Store de
        Tiendanube, aparece en el menu lateral de su admin.
      </p>
      <p>Desde ahi puede ver:</p>
      <ul>
        <li>Estado de la app (publicada/borrador)</li>
        <li>Estadisticas rapidas (productos, paginas, notificaciones)</li>
        <li>
          Accesos directos al editor, configuracion, notificaciones y productos
        </li>
        <li>Link de la app para compartir</li>
        <li>Boton para abrir el panel completo de Saru Apps</li>
      </ul>
    </GuiaArticleLayout>
  );
}
