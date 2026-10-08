import { GuiaArticleLayout } from "@/components/GuiaArticleLayout";

export const metadata = {
  title: "Productos — Guia Saru Apps",
};

export default function Page() {
  return (
    <GuiaArticleLayout currentSlug="productos">
      <h1>Productos</h1>
      <p>
        La seccion de productos muestra todos los productos sincronizados desde
        Tiendanube:
      </p>
      <ul>
        <li>Lista con imagenes, precios y stock</li>
        <li>Busqueda y filtro por categoria</li>
        <li>
          Boton &quot;Sincronizar&quot; para forzar una sincronizacion manual
        </li>
        <li>
          Los productos son de solo lectura (se gestionan desde Tiendanube)
        </li>
        <li>
          Los productos inactivos en Tiendanube no aparecen en la app
        </li>
      </ul>
    </GuiaArticleLayout>
  );
}
