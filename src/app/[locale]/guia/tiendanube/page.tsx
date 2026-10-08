import { GuiaArticleLayout } from "@/components/GuiaArticleLayout";

export const metadata = {
  title: "Conectar Tiendanube — Guia Saru Apps",
  description:
    "Como conectar tu tienda Tiendanube con Saru Apps. Dos caminos: desde el marketplace o desde la web.",
};

export default function Page() {
  return (
    <GuiaArticleLayout currentSlug="tiendanube">
      <h1>Conectar Tiendanube</h1>
      <p>
        Hay dos formas de conectar tu tienda Tiendanube con Saru Apps. Podes
        instalar la app desde el marketplace de Tiendanube o registrarte
        directamente en nuestra web. En ambos casos, la conexion es automatica y
        tus productos se sincronizan en segundos.
      </p>

      {/* ─── Camino 1 ─── */}
      <h2>Camino 1: Desde el Marketplace de Tiendanube</h2>

      <h3>Paso 1 — Encontrar la app en el marketplace</h3>
      <p>
        Busca &quot;Saru Apps&quot; en el marketplace de Tiendanube
        (tiendanube.com/tienda-de-aplicaciones) y hace clic en{" "}
        <strong>Instalar</strong>.
      </p>

      <h3>Paso 2 — Autorizar permisos</h3>
      <p>
        Tiendanube muestra la pantalla de autorizacion OAuth. Vas a ver los
        permisos que la app solicita (productos, pedidos, clientes, etc.) y
        haces clic en <strong>Aceptar</strong>.
      </p>
      <img
        src="/guia/tiendanube-permisos.png"
        alt="Pantalla de permisos de Tiendanube para instalar Saru Apps"
        className="rounded-xl border border-gray-200 my-6 w-full"
      />

      <h3>Paso 3 — Crear cuenta</h3>
      <p>
        Como sos un merchant nuevo, se te muestra una pagina de confirmacion
        con:
      </p>
      <ul>
        <li>Nombre de la tienda (detectado automaticamente)</li>
        <li>Email de la tienda (detectado automaticamente)</li>
        <li>URL de la tienda</li>
        <li>Checkbox de Terminos y Condiciones + Politica de Privacidad</li>
        <li>
          Boton <strong>&quot;Crear cuenta y conectar tienda&quot;</strong>
        </li>
      </ul>
      <p>
        Si ya tenes cuenta en Saru Apps, podes hacer clic en &quot;Ya tengo
        cuenta — Iniciar sesion&quot; para vincular tu tienda a tu cuenta
        existente.
      </p>
      <img
        src="/guia/confirm-signup.png"
        alt="Pantalla de confirmacion de cuenta de Saru Apps"
        className="rounded-xl border border-gray-200 my-6 w-full max-w-lg mx-auto"
      />

      <h3>Paso 4 — Cuenta creada + sincronizacion automatica</h3>
      <p>Al aceptar los terminos, todo sucede automaticamente:</p>
      <ol>
        <li>Se crea tu cuenta en Saru Apps</li>
        <li>Se conecta tu tienda de Tiendanube</li>
        <li>Se registran los webhooks (productos, pedidos)</li>
        <li>Se inicia la sincronizacion de productos en background</li>
        <li>
          Se importa el diseno de tu tienda (logo, colores, idioma)
        </li>
        <li>Se crea tu app automaticamente con los datos de la tienda</li>
        <li>Se envia un email de bienvenida con link para crear contrasena</li>
        <li>Se te redirige al panel de administracion dentro de Tiendanube</li>
      </ol>

      {/* ─── Camino 2 ─── */}
      <h2>Camino 2: Desde la web de Saru Apps (registro directo)</h2>

      <h3>Paso 1 — Registro</h3>
      <p>
        Anda a{" "}
        <a
          href="https://app.saruapps.com/register"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-950 underline underline-offset-4"
        >
          app.saruapps.com/register
        </a>{" "}
        y completa el formulario:
      </p>
      <ul>
        <li>Nombre</li>
        <li>Email</li>
        <li>Contrasena (minimo 8 caracteres)</li>
      </ul>
      <p>Hace clic en &quot;Crear cuenta&quot; para continuar.</p>

      <h3>Paso 2 — Onboarding: conectar Tiendanube</h3>
      <p>
        Despues del registro, se te redirige automaticamente al onboarding. Vas
        a ver una pantalla que explica lo que va a pasar:
      </p>
      <ul>
        <li>Sincronizar productos y categorias</li>
        <li>Importar logo, colores y branding</li>
        <li>Generar el diseno automaticamente</li>
      </ul>
      <p>
        Hace clic en <strong>&quot;Conectar Tiendanube&quot;</strong> para
        continuar.
      </p>
      <img
        src="/guia/onboarding-conectar.png"
        alt="Pantalla de onboarding de Saru Apps para conectar Tiendanube"
        className="rounded-xl border border-gray-200 my-6 w-full"
      />

      <h3>Paso 3 — Autorizar en Tiendanube</h3>
      <p>Al hacer clic en &quot;Conectar Tiendanube&quot;:</p>
      <ol>
        <li>Se te redirige a Tiendanube para autorizar los permisos</li>
        <li>Aceptas los permisos (productos, pedidos, clientes, etc.)</li>
        <li>Tiendanube te redirige de vuelta a Saru Apps</li>
      </ol>

      {/* ─── Que se sincroniza ─── */}
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
        <li>
          <strong>Branding:</strong> logo, colores e idioma de la tienda
        </li>
      </ul>

      {/* ─── Sync en tiempo real ─── */}
      <h2>Sincronizacion en tiempo real</h2>
      <p>
        Una vez conectada la tienda, cualquier cambio que hagas en Tiendanube se
        refleja automaticamente en tu app. Cuando creas, editas o eliminas un
        producto, un webhook notifica al backend de Saru Apps y la app se
        actualiza sin intervencion manual.
      </p>
      <p>
        Esto incluye cambios de precio, stock, imagenes, variantes y
        categorias. No necesitas hacer nada — la sincronizacion es continua y
        en tiempo real.
      </p>
    </GuiaArticleLayout>
  );
}
