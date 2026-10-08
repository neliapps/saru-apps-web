import { GuiaArticleLayout } from "@/components/GuiaArticleLayout";

export const metadata = {
  title: "Publicar la app — Guia Saru Apps",
  description:
    "Guia completa para publicar tu app en App Store y Google Play. Crea tus cuentas de desarrollador, invita a Saru Apps y nosotros nos encargamos del resto.",
};

export default function Page() {
  return (
    <GuiaArticleLayout currentSlug="publicar">
      <h1>Publicar la app</h1>
      <p>
        Para publicar tu app en App Store y Google Play, necesitas crear tus
        cuentas de desarrollador en Apple y Google, darnos acceso y nosotros nos
        encargamos de todo el proceso tecnico de compilacion y publicacion.
      </p>

      <h2>Resumen del proceso</h2>
      <ol>
        <li>
          <strong>Obtener un numero D-U-N-S</strong> (si tu negocio es una
          empresa/organizacion)
        </li>
        <li>
          <strong>Crear tu cuenta de Apple Developer</strong> (USD $99/ano)
        </li>
        <li>
          <strong>Crear tu cuenta de Google Play Developer</strong> (USD $25,
          pago unico)
        </li>
        <li>
          <strong>Invitar a Saru Apps</strong> a ambas cuentas
        </li>
        <li>
          <strong>Saru Apps compila y publica</strong> tu app en ambas tiendas
        </li>
      </ol>
      <p>
        Una vez completados estos pasos, tu app estara disponible para que tus
        clientes la descarguen. A continuacion te explicamos cada paso en
        detalle.
      </p>

      {/* ─── D-U-N-S ─── */}
      <h2>Paso 1: Obtener un numero D-U-N-S</h2>
      <p>
        El numero D-U-N-S (Data Universal Numbering System) es un identificador
        unico de 9 digitos asignado por Dun &amp; Bradstreet que identifica a tu
        empresa. Apple lo requiere para crear una cuenta de desarrollador como
        empresa u organizacion.
      </p>

      <h3>Como verificar si ya tenes uno</h3>
      <ol>
        <li>
          Visita la herramienta de busqueda de Apple en{" "}
          <a
            href="https://developer.apple.com/enroll/duns-lookup/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-950 underline underline-offset-4"
          >
            developer.apple.com/enroll/duns-lookup
          </a>
        </li>
        <li>Busca tu organizacion por nombre</li>
        <li>
          Si tu empresa aparece, recibiras un email de Apple con tu numero D-U-N-S
          en minutos
        </li>
      </ol>

      <h3>Como solicitar uno nuevo (gratis)</h3>
      <p>
        Si tu organizacion no aparece en la busqueda, podes solicitar un numero
        D-U-N-S de forma gratuita:
      </p>
      <ol>
        <li>Completa el formulario con la informacion de tu empresa</li>
        <li>
          Proporciona: nombre legal de la entidad, direccion, informacion de
          contacto
        </li>
        <li>
          Un representante de Dun &amp; Bradstreet puede contactarte para
          verificar datos adicionales (tipo de negocio, cantidad de empleados)
        </li>
        <li>Ten a mano tus documentos de registro comercial</li>
      </ol>
      <p>
        <strong>Importante:</strong> si tu negocio opera como persona fisica o
        autonomo, es posible que necesites registrarte como entidad juridica antes
        de inscribirte en el programa de Apple Developer.
      </p>

      {/* ─── Apple Developer ─── */}
      <h2>Paso 2: Crear tu cuenta de Apple Developer</h2>
      <p>
        La cuenta de Apple Developer te permite publicar apps en el App Store.
        Tiene un costo anual de USD $99 con renovacion automatica.
      </p>

      <h3>Requisitos previos</h3>
      <ul>
        <li>Numero D-U-N-S activo (ver paso anterior)</li>
        <li>Apple ID (podes crear uno gratis en apple.com)</li>
        <li>
          Email de trabajo que coincida con el dominio de tu sitio web (ej:
          nombre@tutienda.com)
        </li>
      </ul>

      <h3>Proceso paso a paso</h3>
      <ol>
        <li>
          Ingresa a{" "}
          <a
            href="https://developer.apple.com/programs/enroll/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-950 underline underline-offset-4"
          >
            developer.apple.com/programs/enroll
          </a>
        </li>
        <li>Hace click en &quot;Start your enrollment&quot;</li>
        <li>
          Si te lo solicita, selecciona &quot;Continue enrollment on the
          web&quot;
        </li>
        <li>
          Elegi <strong>Company / Organization</strong> como tipo de cuenta
        </li>
        <li>Ingresa el nombre legal de tu empresa y tu numero D-U-N-S</li>
        <li>
          Completa la informacion que se carga automaticamente de tu perfil
          D&amp;B: sitio web, telefono, y confirmacion de autoridad para firmar
        </li>
        <li>
          Apple verificara tu identidad en 24-48 horas por telefono o email
        </li>
        <li>
          Una vez verificado, Apple te enviara las instrucciones de pago (USD
          $99) a tu dashboard de Apple Developer
        </li>
        <li>
          Realiza el pago. El procesamiento puede tardar hasta 24 horas
        </li>
      </ol>

      {/* ─── Google Play ─── */}
      <h2>Paso 3: Crear tu cuenta de Google Play Developer</h2>
      <p>
        La cuenta de Google Play Console te permite publicar apps en Google Play.
        Tiene un costo unico de USD $25.
      </p>

      <h3>Requisitos previos</h3>
      <ul>
        <li>Cuenta de Gmail (podes crear una gratis)</li>
        <li>Verificacion en 2 pasos activada en tu cuenta de Google</li>
        <li>Numero D-U-N-S de tu empresa</li>
      </ul>

      <h3>Proceso paso a paso</h3>
      <ol>
        <li>
          Ingresa a{" "}
          <a
            href="https://play.google.com/console/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-950 underline underline-offset-4"
          >
            play.google.com/console/signup
          </a>
        </li>
        <li>Inicia sesion con tu cuenta de Gmail</li>
        <li>
          Selecciona <strong>Empresa / Organizacion</strong> como tipo de cuenta
        </li>
        <li>Ingresa el nombre de tu empresa como nombre de desarrollador</li>
        <li>Crea un perfil de pagos y completa los datos de tu organizacion</li>
        <li>
          Proporciona la informacion de D-U-N-S, tamano de la organizacion,
          telefono y sitio web
        </li>
        <li>
          Ingresa los datos de contacto del desarrollador (esta informacion sera
          publica en Google Play)
        </li>
        <li>
          En la pregunta sobre apps pagas, selecciona <strong>No</strong> (Saru
          Apps no soporta apps pagas, tu app sera gratuita y monetizas con tus
          productos)
        </li>
        <li>Acepta los terminos y condiciones</li>
        <li>Realiza el pago de USD $25</li>
        <li>
          Una vez dentro de la consola, crea tu app: ingresa el nombre,
          selecciona tipo &quot;App&quot; (no &quot;Juego&quot;), elige precio
          &quot;Gratis&quot; y confirma las declaraciones
        </li>
      </ol>
      <p>
        <strong>Nota:</strong> Google puede solicitar verificacion adicional de
        tu identidad. Revisa tu email regularmente despues de crear la cuenta.
      </p>

      {/* ─── Invitar a Saru Apps ─── */}
      <h2>Paso 4: Invitar a Saru Apps a tus cuentas</h2>
      <p>
        Una vez que tengas ambas cuentas creadas y verificadas, necesitas
        invitarnos para que podamos compilar y publicar tu app. El proceso es
        simple y tarda menos de 5 minutos.
      </p>

      <h3>Invitar a Saru Apps a Apple Developer</h3>
      <ol>
        <li>
          Ingresa a{" "}
          <a
            href="https://appstoreconnect.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-950 underline underline-offset-4"
          >
            App Store Connect
          </a>
        </li>
        <li>
          Anda a la seccion <strong>Usuarios y acceso</strong>
        </li>
        <li>
          Hace click en el boton <strong>+</strong> para agregar un nuevo usuario
        </li>
        <li>
          Completa los datos que te enviamos por email al iniciar el proceso de
          publicacion (nombre, email y rol)
        </li>
        <li>
          Asigna el rol de <strong>Admin</strong>
        </li>
        <li>
          Hace click en <strong>Siguiente</strong> para enviar la invitacion
        </li>
      </ol>
      <p>
        <strong>Importante:</strong> si tu cuenta de Apple Developer esta
        registrada como &quot;Individual / Sole Proprietor&quot;, necesitas
        convertirla a &quot;Company / Organization&quot; para poder invitar
        usuarios.
      </p>

      <h3>Invitar a Saru Apps a Google Play Console</h3>
      <ol>
        <li>
          Ingresa a{" "}
          <a
            href="https://play.google.com/console"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-950 underline underline-offset-4"
          >
            Google Play Console
          </a>
        </li>
        <li>
          En el menu lateral, anda a{" "}
          <strong>Usuarios y permisos</strong>
        </li>
        <li>
          Hace click en el icono de tres puntos y selecciona{" "}
          <strong>Invitar nuevos usuarios</strong>
        </li>
        <li>
          Ingresa el email que te proporcionamos al iniciar el proceso de
          publicacion
        </li>
        <li>
          Desplazate hacia abajo, hace click en <strong>Agregar app</strong>,
          selecciona tu app y aplica los cambios
        </li>
      </ol>
      <p>
        Podes invitarnos incluso si tu cuenta aun esta en proceso de
        verificacion por parte de Google.
      </p>

      {/* ─── Que pasa despues ─── */}
      <h2>Paso 5: Nosotros nos encargamos del resto</h2>
      <p>
        Una vez que recibamos acceso a tus cuentas de Apple y Google, nuestro
        equipo se encarga de:
      </p>
      <ul>
        <li>Compilar tu app con tu diseño, branding y configuracion</li>
        <li>Preparar las capturas de pantalla y descripcion para las tiendas</li>
        <li>Enviar la app a revision en App Store y Google Play</li>
        <li>Gestionar cualquier feedback o solicitud de cambio de las tiendas</li>
        <li>Notificarte cuando tu app este publicada y lista para descargar</li>
      </ul>

      <h3>Tiempos estimados de publicacion</h3>
      <table>
        <thead>
          <tr>
            <th>Tienda</th>
            <th>Tiempo de revision</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Google Play</td>
            <td>Unas pocas horas a 3 dias</td>
          </tr>
          <tr>
            <td>App Store</td>
            <td>3 a 7 dias habiles</td>
          </tr>
        </tbody>
      </table>
      <p>
        Una vez aprobada, tu app aparece inmediatamente en las tiendas y tus
        clientes pueden descargarla. Te enviaremos los links de descarga para
        que puedas compartirlos con tu audiencia.
      </p>

      <h2>Resumen de costos</h2>
      <table>
        <thead>
          <tr>
            <th>Concepto</th>
            <th>Costo</th>
            <th>Frecuencia</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Apple Developer Program</td>
            <td>USD $99</td>
            <td>Anual</td>
          </tr>
          <tr>
            <td>Google Play Console</td>
            <td>USD $25</td>
            <td>Pago unico</td>
          </tr>
          <tr>
            <td>Numero D-U-N-S</td>
            <td>Gratis</td>
            <td>—</td>
          </tr>
        </tbody>
      </table>
      <p>
        Estos costos son de Apple y Google, no de Saru Apps. Son necesarios para
        que tu app se publique en tus propias cuentas de desarrollador, lo que
        significa que vos sos el dueno de tu app y tus descargas.
      </p>
    </GuiaArticleLayout>
  );
}
