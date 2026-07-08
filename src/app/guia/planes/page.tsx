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
                Web App (PWA) instalable, editor drag &amp; drop, sincronizacion
                de productos con Tiendanube, notificaciones push (1.000/mes),
                pagina de instalacion compartible
              </td>
            </tr>
            <tr>
              <td><strong>Growth</strong></td>
              <td>USD $149/mes</td>
              <td>
                Todo lo de Starter + app nativa en App Store y Google Play,
                editor avanzado, notificaciones de carrito abandonado, cupones
                exclusivos, push (5.000/mes)
              </td>
            </tr>
            <tr>
              <td><strong>Scale</strong></td>
              <td>USD $349/mes</td>
              <td>
                Todo lo de Growth + push (20.000/mes), push segmentado, campanas
                de marketing, inicio personalizado, drops exclusivos, multidioma
              </td>
            </tr>
            <tr>
              <td><strong>Enterprise</strong></td>
              <td>Personalizado</td>
              <td>
                Todo lo de Scale + push ilimitado, API dedicada, integraciones
                custom, account manager dedicado, SLA garantizado
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Que incluye cada plan</h2>
      <ul>
        <li>
          <strong>Starter:</strong> PWA instalable, editor basico, sync de
          productos, 1k push/mes
        </li>
        <li>
          <strong>Growth+:</strong> App nativa (iOS/Android), editor avanzado,
          secciones custom, paginas custom, carrito abandonado, programa de
          fidelizacion, cupones exclusivos
        </li>
        <li>
          <strong>Scale+:</strong> Push segmentado, campanas de marketing, home
          personalizado, drops exclusivos, multidioma (espanol + portugues)
        </li>
        <li>
          <strong>Enterprise:</strong> Push ilimitado, API dedicada, account
          manager, SLA
        </li>
      </ul>
    </GuiaArticleLayout>
  );
}
