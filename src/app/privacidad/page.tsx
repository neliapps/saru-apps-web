import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Política de Privacidad — Saru Apps",
};

export default function Privacidad() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-display text-4xl font-bold text-gray-950 mb-2">
            Política de Privacidad
          </h1>
          <p className="text-sm text-gray-400 mb-12">
            Última actualización: 4 de julio de 2026
          </p>

          <div className="prose prose-gray max-w-none [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-gray-950 [&_h2]:mt-10 [&_h2]:mb-4 [&_p]:text-gray-600 [&_p]:text-sm [&_p]:leading-relaxed [&_p]:mb-4 [&_li]:text-gray-600 [&_li]:text-sm [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-5">
            <h2>1. Información que Recopilamos</h2>
            <p>
              En Saru Apps recopilamos la información necesaria para brindarte
              el Servicio. Esto incluye:
            </p>
            <ul>
              <li>
                <strong>Datos de registro:</strong> nombre, dirección de email y
                contraseña (almacenada de forma encriptada).
              </li>
              <li>
                <strong>Datos de la tienda:</strong> información de tu tienda
                Tiendanube (nombre, productos, categorías, pedidos) obtenida
                mediante la integración autorizada por vos.
              </li>
              <li>
                <strong>Datos de uso:</strong> interacciones con la plataforma,
                páginas visitadas, funcionalidades utilizadas.
              </li>
              <li>
                <strong>Datos de dispositivos:</strong> tokens de notificaciones
                push de los usuarios finales de tu app (almacenados de forma
                anónima, sin datos personales del usuario final).
              </li>
              <li>
                <strong>Datos de pago:</strong> procesados por terceros (Stripe
                o MercadoPago). No almacenamos números de tarjeta.
              </li>
            </ul>

            <h2>2. Cómo Usamos tu Información</h2>
            <p>Utilizamos la información recopilada para:</p>
            <ul>
              <li>Proveer, mantener y mejorar el Servicio</li>
              <li>Sincronizar productos y pedidos con tu tienda Tiendanube</li>
              <li>
                Enviar notificaciones push a los usuarios de tu app (según tu
                configuración)
              </li>
              <li>
                Comunicarte actualizaciones del Servicio, cambios en los
                términos o información de facturación
              </li>
              <li>Detectar y prevenir fraude o uso indebido</li>
              <li>Generar estadísticas agregadas y anónimas de uso</li>
            </ul>

            <h2>3. Compartición de Datos</h2>
            <p>
              No vendemos ni compartimos tu información personal con terceros
              para fines publicitarios. Compartimos datos únicamente con:
            </p>
            <ul>
              <li>
                <strong>Tiendanube:</strong> para la sincronización de tu
                tienda (mediante OAuth, con los permisos que vos autorizás).
              </li>
              <li>
                <strong>Firebase (Google):</strong> para el envío de
                notificaciones push.
              </li>
              <li>
                <strong>Cloudinary:</strong> para el almacenamiento de imágenes
                que subís a la plataforma.
              </li>
              <li>
                <strong>Proveedores de hosting:</strong> para la infraestructura
                del Servicio.
              </li>
              <li>
                <strong>Autoridades legales:</strong> cuando sea requerido por
                ley o proceso judicial.
              </li>
            </ul>

            <h2>4. Cookies</h2>
            <p>Utilizamos cookies para:</p>
            <ul>
              <li>
                <strong>Cookies esenciales:</strong> autenticación y
                funcionamiento del dashboard (httpOnly, seguras).
              </li>
              <li>
                <strong>Cookies de preferencias:</strong> recordar tu
                configuración y preferencias de uso.
              </li>
              <li>
                <strong>Cookies analíticas:</strong> entender cómo se utiliza la
                plataforma para mejorar el Servicio (pueden ser desactivadas).
              </li>
            </ul>
            <p>
              Podés gestionar tus preferencias de cookies desde el banner que
              aparece al visitar el sitio o desde la configuración de tu
              navegador.
            </p>

            <h2>5. Seguridad</h2>
            <p>
              Implementamos medidas de seguridad para proteger tu información:
            </p>
            <ul>
              <li>Contraseñas encriptadas con bcrypt</li>
              <li>Autenticación mediante JWT con cookies httpOnly</li>
              <li>Conexiones cifradas mediante HTTPS/TLS</li>
              <li>
                Arquitectura multitenant con aislamiento de datos por comercio
              </li>
              <li>Rate limiting para prevenir ataques</li>
              <li>Tokens de dispositivo protegidos contra reasignación</li>
            </ul>

            <h2>6. Retención de Datos</h2>
            <p>
              Conservamos tus datos mientras tu cuenta esté activa. Si cancelás
              tu cuenta, eliminaremos tu información personal dentro de los 90
              días siguientes, excepto aquella que debamos retener por
              obligaciones legales o fiscales.
            </p>

            <h2>7. Tus Derechos</h2>
            <p>Tenés derecho a:</p>
            <ul>
              <li>Acceder a tus datos personales almacenados</li>
              <li>Solicitar la corrección de datos inexactos</li>
              <li>Solicitar la eliminación de tu cuenta y datos</li>
              <li>Exportar tus datos en un formato legible</li>
              <li>Revocar el acceso a tu tienda Tiendanube en cualquier momento</li>
            </ul>
            <p>
              Para ejercer estos derechos, contactanos a{" "}
              <a
                href="mailto:hola@saruapps.com"
                className="text-gray-950 underline underline-offset-4"
              >
                hola@saruapps.com
              </a>
              .
            </p>

            <h2>8. Usuarios Finales de tu App</h2>
            <p>
              Como comercio que publica una app a través de Saru Apps, sos
              responsable de informar a tus usuarios finales sobre la
              recopilación de datos (tokens push, datos de compra). Te
              recomendamos incluir tu propia política de privacidad dentro de tu
              app.
            </p>

            <h2>9. Menores de Edad</h2>
            <p>
              El Servicio no está dirigido a menores de 18 años. No recopilamos
              intencionalmente datos de menores. Si tomamos conocimiento de que
              hemos recopilado datos de un menor, los eliminaremos de inmediato.
            </p>

            <h2>10. Cambios en esta Política</h2>
            <p>
              Podemos actualizar esta Política de Privacidad periódicamente. Te
              notificaremos sobre cambios significativos por email o mediante un
              aviso en la plataforma. Te recomendamos revisar esta página
              regularmente.
            </p>

            <h2>11. Contacto</h2>
            <p>
              Para consultas sobre privacidad, escribinos a{" "}
              <a
                href="mailto:hola@saruapps.com"
                className="text-gray-950 underline underline-offset-4"
              >
                hola@saruapps.com
              </a>
              .
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
