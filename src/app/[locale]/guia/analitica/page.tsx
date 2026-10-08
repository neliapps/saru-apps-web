import { GuiaArticleLayout } from "@/components/GuiaArticleLayout";

export const metadata = {
  title: "Analitica — Guia Saru Apps",
};

export default function Page() {
  return (
    <GuiaArticleLayout currentSlug="analitica">
      <h1>Analitica</h1>
      <p>El dashboard de analitica muestra:</p>
      <ul>
        <li><strong>Visitas:</strong> paginas vistas en la app</li>
        <li>
          <strong>Productos mas vistos:</strong> ranking de productos por visitas
        </li>
        <li>
          <strong>Busquedas:</strong> que buscan los clientes en la app
        </li>
        <li>
          <strong>Eventos:</strong> agregar al carrito, ver producto, buscar
        </li>
        <li><strong>Periodo:</strong> filtro por rango de fechas</li>
      </ul>
    </GuiaArticleLayout>
  );
}
