import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Guia de la Plataforma — Saru Apps",
  description:
    "Todo lo que necesitas saber sobre Saru Apps: como funciona, planes, editor, notificaciones push, publicacion y mas.",
};

const bloques = [
  { nombre: "Banner personalizado", desc: "Imagen con link (banners promocionales)" },
  { nombre: "Video banner", desc: "Banner con video" },
  { nombre: "Carrusel de productos", desc: "Productos destacados en carrusel horizontal" },
  { nombre: "Grilla de productos", desc: "Productos en grilla (2 o 3 columnas)" },
  { nombre: "Colecciones en circulo", desc: "Categorias con imagen circular" },
  { nombre: "Carrusel de colecciones", desc: "Categorias en carrusel" },
  { nombre: "Grilla de colecciones", desc: "Categorias en grilla" },
  { nombre: "Bloque de texto", desc: "Texto libre con formato" },
  { nombre: "Espaciador", desc: "Espacio en blanco entre bloques" },
  { nombre: "Divisor", desc: "Linea separadora" },
  { nombre: "Cuenta regresiva", desc: "Timer para ofertas" },
  { nombre: "Barra de anuncio", desc: 'Texto destacado (ej: "Envio gratis en compras +$10.000")' },
  { nombre: "Preguntas frecuentes", desc: "Acordeon de FAQ" },
  { nombre: "Seccion de menu", desc: "Links de navegacion con iconos" },
];

const toc = [
  { id: "que-es", label: "Que es Saru Apps" },
  { id: "planes", label: "Planes y precios" },
  { id: "registro", label: "Registro y onboarding" },
  { id: "tiendanube", label: "Conectar Tiendanube" },
  { id: "configurar", label: "Configurar la app" },
  { id: "editor", label: "Editor de contenido" },
  { id: "productos", label: "Productos" },
  { id: "notificaciones", label: "Notificaciones push" },
  { id: "publicar", label: "Publicar la app" },
  { id: "panel", label: "Panel en Tiendanube" },
  { id: "analitica", label: "Analitica" },
  { id: "app-nativa", label: "App nativa" },
  { id: "seguridad", label: "Seguridad" },
  { id: "faq", label: "Preguntas frecuentes" },
];

export default function Guia() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-950 mb-4">
            Guia de la Plataforma
          </h1>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl">
            Todo lo que necesitas saber para crear, personalizar y publicar la
            app movil de tu tienda Tiendanube con Saru Apps.
          </p>

          {/* Table of contents */}
          <nav className="mb-16 p-6 bg-gray-50 rounded-2xl border border-gray-100">
            <h2 className="text-sm font-semibold text-gray-950 uppercase tracking-wider mb-4">
              Contenido
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {toc.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-sm text-gray-600 hover:text-gray-950 transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="prose prose-gray max-w-none [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-gray-950 [&_h2]:mt-16 [&_h2]:mb-4 [&_h2]:pt-8 [&_h2]:border-t [&_h2]:border-gray-100 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-gray-900 [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:text-gray-600 [&_p]:text-[15px] [&_p]:leading-relaxed [&_p]:mb-4 [&_li]:text-gray-600 [&_li]:text-[15px] [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-5 [&_table]:w-full [&_table]:text-sm [&_th]:text-left [&_th]:py-3 [&_th]:px-4 [&_th]:bg-gray-50 [&_th]:font-semibold [&_th]:text-gray-900 [&_td]:py-3 [&_td]:px-4 [&_td]:border-b [&_td]:border-gray-100 [&_td]:text-gray-600">
            {/* Que es Saru Apps */}
            <h2 id="que-es">Que es Saru Apps</h2>
            <p>
              Saru Apps es una plataforma SaaS que permite a comerciantes de
              Tiendanube crear, personalizar y publicar aplicaciones moviles (PWA
              y nativas iOS/Android) sin programar. La plataforma tiene tres
              componentes principales:
            </p>
            <ol>
              <li>
                <strong>Panel de administracion</strong> (Dashboard) — donde el
                comerciante configura y gestiona su app
              </li>
              <li>
                <strong>Backend API</strong> — maneja la logica de negocio,
                sincronizacion, notificaciones y generacion de la PWA
              </li>
              <li>
                <strong>App movil nativa</strong> (React Native) — app para
                publicar en App Store y Google Play
              </li>
            </ol>

            {/* Planes y precios */}
            <h2 id="planes">Planes y precios</h2>
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
                      Web App (PWA) instalable, editor drag &amp; drop,
                      sincronizacion de productos con Tiendanube, notificaciones
                      push (1.000/mes), pagina de instalacion compartible
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Growth</strong></td>
                    <td>USD $149/mes</td>
                    <td>
                      Todo lo de Starter + app nativa en App Store y Google Play,
                      editor avanzado, notificaciones de carrito abandonado,
                      cupones exclusivos, push (5.000/mes)
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Scale</strong></td>
                    <td>USD $349/mes</td>
                    <td>
                      Todo lo de Growth + push (20.000/mes), push segmentado,
                      campanas de marketing, inicio personalizado, drops
                      exclusivos, multidioma
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Enterprise</strong></td>
                    <td>Personalizado</td>
                    <td>
                      Todo lo de Scale + push ilimitado, API dedicada,
                      integraciones custom, account manager dedicado, SLA
                      garantizado
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Que incluye cada plan</h3>
            <ul>
              <li>
                <strong>Starter:</strong> PWA instalable, editor basico, sync de
                productos, 1k push/mes
              </li>
              <li>
                <strong>Growth+:</strong> App nativa (iOS/Android), editor
                avanzado, secciones custom, paginas custom, carrito abandonado,
                programa de fidelizacion, cupones exclusivos
              </li>
              <li>
                <strong>Scale+:</strong> Push segmentado, campanas de marketing,
                home personalizado, drops exclusivos, multidioma (espanol +
                portugues)
              </li>
              <li>
                <strong>Enterprise:</strong> Push ilimitado, API dedicada,
                account manager, SLA
              </li>
            </ul>

            {/* Registro y onboarding */}
            <h2 id="registro">Registro y onboarding</h2>

            <h3>Paso 1: Crear cuenta</h3>
            <p>
              El comerciante se registra en{" "}
              <strong>app.saruapps.com/register</strong> con email, nombre y
              contrasena. Despues del registro, se redirige al wizard de
              onboarding.
            </p>

            <h3>Paso 2: Onboarding (4 pasos)</h3>
            <ol>
              <li>
                <strong>Tu negocio:</strong> Pais, facturacion mensual, pedidos
                por mes, y si quiere publicar en App Store/Google Play
              </li>
              <li>
                <strong>Objetivos:</strong> Que busca con la app (mas ventas,
                fidelizar, push, presencia en stores, campanas, imagen de marca)
              </li>
              <li>
                <strong>Plan recomendado:</strong> Basado en las respuestas, el
                sistema recomienda el plan ideal. Si el comerciante quiere app
                nativa, el minimo recomendado es Growth
              </li>
              <li>
                <strong>Conectar Tiendanube:</strong> Vincula su tienda de
                Tiendanube para sincronizar productos automaticamente
              </li>
            </ol>

            {/* Conectar Tiendanube */}
            <h2 id="tiendanube">Conectar Tiendanube</h2>

            <h3>Como funciona la conexion</h3>
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
              <li>
                El backend intercambia el codigo por un token de acceso
              </li>
              <li>
                Se registran los webhooks automaticamente (para sincronizar
                productos en tiempo real)
              </li>
              <li>
                Se hace la primera sincronizacion: productos, categorias y
                paginas
              </li>
              <li>
                Se crean las paginas por defecto (Inicio, Producto, Menu)
              </li>
            </ol>

            <h3>Que se sincroniza</h3>
            <ul>
              <li>
                <strong>Productos:</strong> nombre, descripcion, precio, precio
                promocional, imagenes, variantes, stock, categorias
              </li>
              <li>
                <strong>Categorias:</strong> se crean como secciones en la app
              </li>
              <li>
                <strong>Paginas:</strong> paginas estaticas de la tienda
                (terminos, politicas, etc.)
              </li>
            </ul>

            <h3>Sincronizacion en tiempo real</h3>
            <p>
              Cuando el comerciante modifica un producto en Tiendanube (crea,
              edita o elimina), un webhook notifica automaticamente al backend y
              se actualiza en la app sin intervencion manual.
            </p>

            {/* Configurar la app */}
            <h2 id="configurar">Configurar la app</h2>

            <h3>Branding</h3>
            <p>En esta seccion el comerciante define:</p>
            <ul>
              <li>
                <strong>Nombre de la app:</strong> el nombre que ven los
                clientes
              </li>
              <li>
                <strong>Logo:</strong> imagen PNG o JPG (recomendado 512x512px)
              </li>
              <li>
                <strong>Color primario:</strong> se aplica al header, botones
                principales y tabs
              </li>
              <li>
                <strong>Color secundario:</strong> acentos y separadores
              </li>
            </ul>
            <p>
              Hay una vista previa en tiempo real que muestra como se ve la app
              en un celular.
            </p>

            {/* Editor de contenido */}
            <h2 id="editor">Editor de contenido</h2>
            <p>
              El editor drag &amp; drop permite disenar las paginas de la app.
            </p>

            <h3>Tipos de pagina</h3>
            <ul>
              <li>
                <strong>Inicio:</strong> la pagina principal que ven los
                clientes al abrir la app
              </li>
              <li>
                <strong>Producto:</strong> como se muestra cada producto
                individual
              </li>
              <li>
                <strong>Menu:</strong> el menu de navegacion/cuenta del usuario
              </li>
            </ul>

            <h3>Bloques disponibles</h3>
            <div className="overflow-x-auto mb-6">
              <table>
                <thead>
                  <tr>
                    <th>Bloque</th>
                    <th>Descripcion</th>
                  </tr>
                </thead>
                <tbody>
                  {bloques.map((b) => (
                    <tr key={b.nombre}>
                      <td><strong>{b.nombre}</strong></td>
                      <td>{b.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3>Bloques de pagina de producto (PDP)</h3>
            <ul>
              <li>Galeria de imagenes</li>
              <li>Info del producto (nombre, precio, precio promo)</li>
              <li>Selector de variantes</li>
              <li>Boton agregar al carrito</li>
              <li>Descripcion</li>
              <li>Filas de informacion (envio, devolucion, etc.)</li>
            </ul>
            <p>
              El comerciante puede arrastrar los bloques para reordenarlos,
              hacer click en cada uno para editar sus propiedades, y ver la
              vista previa en tiempo real.
            </p>

            {/* Productos */}
            <h2 id="productos">Productos</h2>
            <p>
              La seccion de productos muestra todos los productos sincronizados
              desde Tiendanube:
            </p>
            <ul>
              <li>Lista con imagenes, precios y stock</li>
              <li>Busqueda y filtro por categoria</li>
              <li>
                Boton &quot;Sincronizar&quot; para forzar una sincronizacion
                manual
              </li>
              <li>
                Los productos son de solo lectura (se gestionan desde
                Tiendanube)
              </li>
              <li>
                Los productos inactivos en Tiendanube no aparecen en la app
              </li>
            </ul>

            {/* Notificaciones push */}
            <h2 id="notificaciones">Notificaciones push</h2>

            <h3>Como funcionan</h3>
            <p>
              Las notificaciones push permiten al comerciante comunicarse
              directamente con los clientes que tienen la app instalada.
            </p>

            <h3>Crear una notificacion</h3>
            <ol>
              <li>Ir a Notificaciones &gt; Crear campana</li>
              <li>Escribir titulo y mensaje</li>
              <li>
                Opcionalmente agregar imagen y deep link (ej: link a un producto
                especifico)
              </li>
              <li>Elegir enviar ahora o programar para mas tarde</li>
              <li>Ver la vista previa de como se ve en iOS y Android</li>
            </ol>

            <h3>Limites por plan</h3>
            <ul>
              <li><strong>Starter:</strong> 1.000 push/mes</li>
              <li><strong>Growth:</strong> 5.000 push/mes</li>
              <li><strong>Scale:</strong> 20.000 push/mes</li>
              <li><strong>Enterprise:</strong> ilimitado</li>
            </ul>

            <h3>Como llegan las notificaciones</h3>
            <ul>
              <li>
                <strong>PWA (Web):</strong> via Web Push API (funciona en
                Chrome, Edge, Firefox en Android y desktop)
              </li>
              <li>
                <strong>App nativa (iOS/Android):</strong> via Firebase Cloud
                Messaging (FCM)
              </li>
              <li>
                Al tocar la notificacion, el cliente es dirigido al contenido
                relevante (producto, categoria, etc.)
              </li>
            </ul>

            {/* Publicar la app */}
            <h2 id="publicar">Publicar la app</h2>

            <h3>Checklist de publicacion (4 pasos)</h3>
            <ol>
              <li>
                <strong>Conectar Tiendanube</strong> — vincular la tienda para
                sincronizar productos
              </li>
              <li>
                <strong>Configurar el branding</strong> — nombre, logo y colores
              </li>
              <li>
                <strong>Disenar el contenido</strong> — armar las paginas con el
                editor
              </li>
              <li>
                <strong>Publicar</strong> — hacer la app accesible para los
                clientes
              </li>
            </ol>

            <h3>PWA (Plan Starter y superiores)</h3>
            <p>
              Al publicar, se genera una URL unica que el comerciante puede
              compartir con sus clientes. Los clientes pueden:
            </p>
            <ul>
              <li>Abrir la app desde el navegador</li>
              <li>
                Instalarla en la pantalla de inicio (como una app nativa)
              </li>
              <li>Recibir notificaciones push</li>
            </ul>
            <p>
              Tambien se genera una pagina de instalacion con instrucciones paso
              a paso para instalar la app, que el comerciante puede compartir
              por WhatsApp, email, redes sociales o QR en la tienda fisica.
            </p>

            <h3>App nativa (Plan Growth y superiores)</h3>
            <p>
              Para publicar en App Store y Google Play, el comerciante necesita:
            </p>
            <ol>
              <li>
                <strong>Crear una cuenta de Google Play Developer</strong> (USD
                $25, pago unico)
              </li>
              <li>
                <strong>Crear una cuenta de Apple Developer</strong> (USD
                $99/ano)
              </li>
              <li>
                <strong>Invitar a Saru Apps</strong> como administrador o App
                Manager en ambas cuentas
              </li>
              <li>
                El equipo de Saru Apps compila y publica la app en las cuentas
                del comerciante
              </li>
            </ol>
            <p>
              La app nativa incluye todas las funcionalidades de la PWA mas:
            </p>
            <ul>
              <li>Presencia en las tiendas de aplicaciones</li>
              <li>Notificaciones push nativas (mas confiables)</li>
              <li>Icono en la pantalla de inicio</li>
              <li>Mejor rendimiento y experiencia de usuario</li>
            </ul>

            {/* Panel embebido en Tiendanube */}
            <h2 id="panel">Panel embebido en Tiendanube</h2>
            <p>
              Saru Apps se integra directamente en el panel de administracion de
              Tiendanube. Cuando un comerciante instala la app desde el App
              Store de Tiendanube, aparece en el menu lateral de su admin.
            </p>
            <p>Desde ahi puede ver:</p>
            <ul>
              <li>Estado de la app (publicada/borrador)</li>
              <li>
                Estadisticas rapidas (productos, paginas, notificaciones)
              </li>
              <li>
                Accesos directos al editor, configuracion, notificaciones y
                productos
              </li>
              <li>Link de la app para compartir</li>
              <li>Boton para abrir el panel completo de Saru Apps</li>
            </ul>

            {/* Analitica */}
            <h2 id="analitica">Analitica</h2>
            <p>El dashboard de analitica muestra:</p>
            <ul>
              <li><strong>Visitas:</strong> paginas vistas en la app</li>
              <li>
                <strong>Productos mas vistos:</strong> ranking de productos por
                visitas
              </li>
              <li>
                <strong>Busquedas:</strong> que buscan los clientes en la app
              </li>
              <li>
                <strong>Eventos:</strong> agregar al carrito, ver producto,
                buscar
              </li>
              <li><strong>Periodo:</strong> filtro por rango de fechas</li>
            </ul>

            {/* App movil nativa */}
            <h2 id="app-nativa">App movil nativa (React Native)</h2>
            <p>
              La app nativa esta construida con React Native + Expo y ofrece una
              experiencia completa de tienda.
            </p>

            <h3>Pantallas</h3>
            <ul>
              <li>
                <strong>Inicio:</strong> productos destacados, banners, bloques
                dinamicos del page builder
              </li>
              <li>
                <strong>Categorias:</strong> navegacion por categoria
              </li>
              <li>
                <strong>Busqueda:</strong> busqueda en tiempo real con
                sugerencias
              </li>
              <li>
                <strong>Favoritos:</strong> lista de deseos (almacenada
                localmente)
              </li>
              <li>
                <strong>Carrito:</strong> carrito de compras con cantidades y
                variantes
              </li>
              <li>
                <strong>Perfil:</strong> menu de cuenta, pedidos, configuracion
              </li>
              <li>
                <strong>Detalle de producto:</strong> galeria, variantes,
                agregar al carrito
              </li>
            </ul>

            <h3>Checkout</h3>
            <p>
              El checkout redirige a la pagina de checkout nativa de Tiendanube.
              Esto garantiza compatibilidad con todos los medios de pago
              configurados por el comerciante.
            </p>

            <h3>Theming dinamico</h3>
            <p>
              La app carga los colores y branding desde el backend, asi que cada
              comerciante tiene su app con sus colores y logo.
            </p>

            <h3>Notificaciones push en la app nativa</h3>
            <ul>
              <li>
                Se registra automaticamente para push al abrir la app
              </li>
              <li>
                Soporta deep linking: al tocar la notificacion, abre el producto
                o seccion correspondiente
              </li>
              <li>Android: Firebase Cloud Messaging (FCM)</li>
              <li>iOS: Apple Push Notification Service (APNs) via FCM</li>
            </ul>

            {/* Seguridad */}
            <h2 id="seguridad">Seguridad y privacidad</h2>

            <h3>Autenticacion</h3>
            <ul>
              <li>Autenticacion basada en JWT (JSON Web Tokens)</li>
              <li>Tokens almacenados en cookies HttpOnly + localStorage</li>
              <li>Contrasenas hasheadas con bcrypt</li>
              <li>
                Sesiones con expiracion configurable (por defecto 7 dias)
              </li>
            </ul>

            <h3>Proteccion de datos</h3>
            <ul>
              <li>
                <strong>CORS:</strong> solo permite requests desde dominios
                autorizados
              </li>
              <li>
                <strong>Rate limiting:</strong> proteccion contra abuso en
                endpoints de API y autenticacion
              </li>
              <li>
                <strong>HTTPS:</strong> obligatorio para todas las
                comunicaciones
              </li>
              <li>
                <strong>Webhooks de privacidad:</strong> implementados segun
                requisitos de Tiendanube (store/redact, customers/redact,
                customers/data_request)
              </li>
            </ul>

            <h3>Cumplimiento GDPR</h3>
            <ul>
              <li>
                <strong>store/redact:</strong> cuando una tienda desinstala la
                app, se eliminan todos sus datos
              </li>
              <li>
                <strong>customers/redact:</strong> cuando se solicita la
                eliminacion de datos de un cliente
              </li>
              <li>
                <strong>customers/data_request:</strong> cuando se solicita una
                copia de los datos de un cliente
              </li>
            </ul>

            {/* Preguntas frecuentes */}
            <h2 id="faq">Preguntas frecuentes</h2>

            <h3>Generales</h3>

            <p><strong>Que es una PWA?</strong></p>
            <p>
              Una Progressive Web App (PWA) es una app que funciona desde el
              navegador pero se puede instalar en la pantalla de inicio del
              celular como si fuera una app nativa. No requiere descarga desde
              App Store o Google Play.
            </p>

            <p><strong>Necesito saber programar?</strong></p>
            <p>
              No. Todo se configura desde el panel de Saru Apps con un editor
              visual drag &amp; drop.
            </p>

            <p><strong>Puedo probar antes de pagar?</strong></p>
            <p>
              Si, podes crear tu cuenta y configurar tu app gratis. Solo
              necesitas un plan activo para publicarla.
            </p>

            <h3>Tiendanube</h3>

            <p><strong>Que pasa si modifico un producto en Tiendanube?</strong></p>
            <p>
              Los cambios se sincronizan automaticamente en tu app en segundos,
              gracias a los webhooks.
            </p>

            <p><strong>Puedo desconectar mi tienda?</strong></p>
            <p>
              Si, podes desconectar en cualquier momento desde la seccion de
              Integraciones. Tu app seguira funcionando con los productos ya
              sincronizados.
            </p>

            <p><strong>Funciona con cualquier plan de Tiendanube?</strong></p>
            <p>
              Si, Saru Apps es compatible con todos los planes de Tiendanube.
            </p>

            <h3>Publicacion</h3>

            <p><strong>Cuanto tarda en publicarse mi app?</strong></p>
            <p>
              La PWA se publica al instante. Para app nativa, el proceso de
              revision en App Store puede tardar 3-7 dias y en Google Play unas
              horas.
            </p>

            <p><strong>Puedo despublicar mi app?</strong></p>
            <p>
              Si, podes despublicar en cualquier momento desde la seccion
              Publicar.
            </p>

            <p>
              <strong>
                Que necesito para publicar en App Store y Google Play?
              </strong>
            </p>
            <p>
              Necesitas el plan Growth o superior, una cuenta de Apple Developer
              ($99/ano) y una cuenta de Google Play Developer ($25 una vez).
              Nosotros nos encargamos de compilar y subir la app a tus cuentas.
            </p>

            <h3>Notificaciones</h3>

            <p>
              <strong>
                Como reciben las notificaciones mis clientes?
              </strong>
            </p>
            <p>
              Los clientes que instalen tu app (PWA o nativa) reciben
              notificaciones push automaticamente cuando las envias desde el
              panel.
            </p>

            <p><strong>Puedo programar notificaciones?</strong></p>
            <p>
              Si, podes programar notificaciones para que se envien en una fecha
              y hora especifica.
            </p>

            <p><strong>Que es un deep link?</strong></p>
            <p>
              Es un link especial que lleva al cliente directamente a un
              producto, categoria o seccion especifica dentro de tu app cuando
              toca la notificacion.
            </p>

            <h3>Cuenta y facturacion</h3>

            <p><strong>Puedo cambiar de plan?</strong></p>
            <p>
              Si, podes cambiar de plan en cualquier momento desde la seccion
              Plan en el dashboard.
            </p>

            <p><strong>Como cancelo mi suscripcion?</strong></p>
            <p>
              Contactanos a{" "}
              <a
                href="mailto:ventas@saruapps.com"
                className="text-gray-950 underline underline-offset-4"
              >
                ventas@saruapps.com
              </a>{" "}
              para gestionar la cancelacion.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
