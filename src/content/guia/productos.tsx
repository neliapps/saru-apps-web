import type { GuiaArticleContent } from "./index";

export const productosContent: GuiaArticleContent = {
  es: {
    metadata: { title: "Productos — Guía Saru Apps" },
    body: (
      <>
        <h1>Productos</h1>
        <p>
          La sección de productos muestra todos los productos sincronizados desde
          Tiendanube:
        </p>
        <ul>
          <li>Lista con imágenes, precios y stock</li>
          <li>Búsqueda y filtro por categoría</li>
          <li>
            Botón &quot;Sincronizar&quot; para forzar una sincronización manual
          </li>
          <li>
            Los productos son de solo lectura (se gestionan desde Tiendanube)
          </li>
          <li>
            Los productos inactivos en Tiendanube no aparecen en la app
          </li>
        </ul>
      </>
    ),
  },
  pt: {
    metadata: { title: "Produtos — Guia Saru Apps" },
    body: (
      <>
        <h1>Produtos</h1>
        <p>
          A seção de produtos mostra todos os produtos sincronizados da
          Nuvemshop:
        </p>
        <ul>
          <li>Lista com imagens, preços e estoque</li>
          <li>Busca e filtro por categoria</li>
          <li>
            Botão &quot;Sincronizar&quot; para forçar uma sincronização manual
          </li>
          <li>
            Os produtos são somente leitura (são gerenciados pela Nuvemshop)
          </li>
          <li>
            Os produtos inativos na Nuvemshop não aparecem no app
          </li>
        </ul>
      </>
    ),
  },
};
