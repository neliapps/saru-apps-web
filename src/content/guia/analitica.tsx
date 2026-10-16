import type { GuiaArticleContent } from "./index";

export const analiticaContent: GuiaArticleContent = {
  es: {
    metadata: { title: "Analítica — Guía Saru Apps" },
    body: (
      <>
        <h1>Analítica</h1>
        <p>El dashboard de analítica muestra:</p>
        <ul>
          <li><strong>Visitas:</strong> páginas vistas en la app</li>
          <li>
            <strong>Productos más vistos:</strong> ranking de productos por visitas
          </li>
          <li>
            <strong>Búsquedas:</strong> qué buscan los clientes en la app
          </li>
          <li>
            <strong>Eventos:</strong> agregar al carrito, ver producto, buscar
          </li>
          <li><strong>Período:</strong> filtro por rango de fechas</li>
        </ul>
      </>
    ),
  },
  pt: {
    metadata: { title: "Analytics — Guia Saru Apps" },
    body: (
      <>
        <h1>Analytics</h1>
        <p>O dashboard de analytics mostra:</p>
        <ul>
          <li><strong>Visitas:</strong> páginas visualizadas no app</li>
          <li>
            <strong>Produtos mais vistos:</strong> ranking de produtos por visitas
          </li>
          <li>
            <strong>Buscas:</strong> o que os clientes buscam no app
          </li>
          <li>
            <strong>Eventos:</strong> adicionar ao carrinho, ver produto, buscar
          </li>
          <li><strong>Período:</strong> filtro por intervalo de datas</li>
        </ul>
      </>
    ),
  },
};
