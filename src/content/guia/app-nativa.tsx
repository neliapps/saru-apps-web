import type { GuiaArticleContent } from "./index";

export const appNativaContent: GuiaArticleContent = {
  es: {
    metadata: { title: "App nativa — Guía Saru Apps" },
    body: (
      <>
        <h1>App móvil nativa (React Native)</h1>
        <p>
          La app nativa está construida con React Native + Expo y ofrece una
          experiencia completa de tienda.
        </p>

        <h2>Pantallas</h2>
        <ul>
          <li>
            <strong>Inicio:</strong> productos destacados, banners, bloques
            dinámicos del page builder
          </li>
          <li><strong>Categorías:</strong> navegación por categoría</li>
          <li>
            <strong>Búsqueda:</strong> búsqueda en tiempo real con sugerencias
          </li>
          <li>
            <strong>Favoritos:</strong> lista de deseos, guardada en el teléfono y
            también en el servidor, que la usa para los avisos de poco stock
          </li>
          <li>
            <strong>Carrito:</strong> carrito de compras con cantidades y variantes
          </li>
          <li>
            <strong>Perfil:</strong> menú de cuenta, pedidos, configuración
          </li>
          <li>
            <strong>Detalle de producto:</strong> galería, variantes, agregar al
            carrito
          </li>
          <li>
            <strong>Reels:</strong> videos verticales a pantalla completa, con los
            productos de cada video (si la tienda los usa)
          </li>
          <li>
            <strong>Lanzamientos (Drops):</strong> lanzamientos con cuenta
            regresiva y el botón &quot;Avísame cuando salga&quot;; cuando salen,
            muestran sus productos
          </li>
        </ul>

        <h2>Checkout</h2>
        <p>
          La app crea un pedido borrador y abre el checkout de Tiendanube dentro
          de la app. El pago va directo a la tienda. Esto garantiza compatibilidad
          con todos los medios de pago configurados por el comerciante.
        </p>

        <h2>Theming dinámico</h2>
        <p>
          La app carga los colores y branding desde el backend, así que cada
          comerciante tiene su app con sus colores y logo.
        </p>

        <h2>Notificaciones push en la app nativa</h2>
        <ul>
          <li>
            La app no pide permiso al abrirse por primera vez: lo pide después de
            una compra, de guardar un favorito o de tocar &quot;Avísame&quot;, y
            solo registra el teléfono si el cliente acepta
          </li>
          <li>
            Soporta deep linking: al tocar la notificación, abre el producto o
            sección correspondiente
          </li>
          <li>Android: Firebase Cloud Messaging (FCM)</li>
          <li>iOS: Apple Push Notification Service (APNs) vía FCM</li>
        </ul>
      </>
    ),
  },
  pt: {
    metadata: { title: "App nativo — Guia Saru Apps" },
    body: (
      <>
        <h1>App móvel nativo (React Native)</h1>
        <p>
          O app nativo é construído com React Native + Expo e oferece uma
          experiência completa de loja.
        </p>

        <h2>Telas</h2>
        <ul>
          <li>
            <strong>Início:</strong> produtos em destaque, banners, blocos
            dinâmicos do page builder
          </li>
          <li><strong>Categorias:</strong> navegação por categoria</li>
          <li>
            <strong>Busca:</strong> busca em tempo real com sugestões
          </li>
          <li>
            <strong>Favoritos:</strong> lista de desejos, salva no celular e
            também no servidor, que a usa para os avisos de estoque baixo
          </li>
          <li>
            <strong>Carrinho:</strong> carrinho de compras com quantidades e variantes
          </li>
          <li>
            <strong>Perfil:</strong> menu da conta, pedidos, configurações
          </li>
          <li>
            <strong>Detalhe do produto:</strong> galeria, variantes, adicionar ao
            carrinho
          </li>
          <li>
            <strong>Reels:</strong> vídeos verticais em tela cheia, com os produtos
            de cada vídeo (se a loja usar)
          </li>
          <li>
            <strong>Lançamentos (Drops):</strong> lançamentos com contagem
            regressiva e o botão &quot;Avise-me quando sair&quot;; quando saem,
            mostram seus produtos
          </li>
        </ul>

        <h2>Checkout</h2>
        <p>
          O app cria um pedido em rascunho e abre o checkout da Nuvemshop dentro
          do app. O pagamento vai direto para a loja. Isso garante compatibilidade
          com todos os meios de pagamento configurados pelo lojista.
        </p>

        <h2>Theming dinâmico</h2>
        <p>
          O app carrega as cores e o branding a partir do backend, então cada
          lojista tem seu app com suas cores e seu logo.
        </p>

        <h2>Notificações push no app nativo</h2>
        <ul>
          <li>
            O app não pede permissão ao ser aberto pela primeira vez: pede depois
            de uma compra, de salvar um favorito ou de tocar em
            &quot;Avise-me&quot;, e só registra o celular se o cliente aceitar
          </li>
          <li>
            Suporta deep linking: ao tocar na notificação, abre o produto ou a
            seção correspondente
          </li>
          <li>Android: Firebase Cloud Messaging (FCM)</li>
          <li>iOS: Apple Push Notification Service (APNs) via FCM</li>
        </ul>
      </>
    ),
  },
};
