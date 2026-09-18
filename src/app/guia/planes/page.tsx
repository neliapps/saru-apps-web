import { GuiaArticleLayout } from "@/components/GuiaArticleLayout";

export const metadata = {
  title: "Planes y precios — Guia Saru Apps",
};

export default function Page() {
  return (
    <GuiaArticleLayout currentSlug="planes">
      <h1>Planes y precios</h1>

      <div className="overflow-x-auto mb-6">
        <table>
          <thead>
            <tr>
              <th>Plan</th>
              <th>Precio</th>
              <th>Que incluye</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Starter</strong></td>
              <td>USD $49/mes</td>
              <td>
                App nativa iOS &amp; Android, editor drag &amp; drop, sync de
                productos, 1.000 push/mes, buscador, wishlist, cuenta cliente,
                seguimiento de pedidos, categorias, carrito con cupones, 1
                pagina personalizada, banner de instalacion, vista previa,
                soporte email
              </td>
            </tr>
            <tr>
              <td><strong>Growth</strong></td>
              <td>USD $149/mes</td>
              <td>
                Todo lo de Starter + 10.000 push/mes, carrito abandonado, back
                in stock, bienvenida automatica, repetir pedido, badges, bajo
                stock, quick add, historial de visitados, white label, 3
                paginas personalizadas
              </td>
            </tr>
            <tr>
              <td><strong>Scale</strong></td>
              <td>USD $349/mes</td>
              <td>
                Todo lo de Growth + 50.000 push/mes, push segmentado, descuento
                favoritos, drops exclusivos, productos exclusivos, cross-sell,
                barra envio gratis, disenos programados, rich push, B2B,
                multiidioma, deep linking, paginas ilimitadas
              </td>
            </tr>
            <tr>
              <td><strong>Enterprise</strong></td>
              <td>Personalizado</td>
              <td>
                Todo lo de Scale + push ilimitado, chat en app, QR code banner,
                API dedicada, account manager exclusivo, SLA garantizado,
                integraciones custom
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Que incluye cada plan</h2>
      <ul>
        <li>
          <strong>Starter:</strong> App nativa iOS &amp; Android, editor drag
          &amp; drop, sync de productos, 1.000 push/mes, buscador, wishlist,
          cuenta cliente, seguimiento de pedidos, categorias, carrito con
          cupones, 1 pagina personalizada, banner de instalacion, vista previa,
          soporte email
        </li>
        <li>
          <strong>Growth:</strong> Todo Starter + 10.000 push/mes, carrito
          abandonado, back in stock, bienvenida automatica, repetir pedido,
          badges, bajo stock, quick add, historial de visitados, white label, 3
          paginas personalizadas
        </li>
        <li>
          <strong>Scale:</strong> Todo Growth + 50.000 push/mes, push
          segmentado, descuento favoritos, drops exclusivos, productos
          exclusivos, cross-sell, barra envio gratis, disenos programados, rich
          push, B2B, multiidioma, deep linking, paginas ilimitadas
        </li>
        <li>
          <strong>Enterprise:</strong> Todo Scale + push ilimitado, chat en app,
          QR code banner, API dedicada, account manager exclusivo, SLA
          garantizado, integraciones custom
        </li>
      </ul>
    </GuiaArticleLayout>
  );
}
