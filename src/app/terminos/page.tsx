import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Términos y Condiciones — Saru Apps",
};

export default function Terminos() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-display text-4xl font-bold text-gray-950 mb-2">
            Términos y Condiciones
          </h1>
          <p className="text-sm text-gray-400 mb-12">
            Última actualización: 4 de julio de 2026
          </p>

          <div className="prose prose-gray max-w-none [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-gray-950 [&_h2]:mt-10 [&_h2]:mb-4 [&_p]:text-gray-600 [&_p]:text-sm [&_p]:leading-relaxed [&_p]:mb-4 [&_li]:text-gray-600 [&_li]:text-sm [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-5">
            <h2>1. Aceptación de los Términos</h2>
            <p>
              Al acceder y utilizar la plataforma Saru Apps (en adelante, "el
              Servicio"), operada a través de saruapps.com y app.saruapps.com,
              aceptás estos Términos y Condiciones en su totalidad. Si no estás
              de acuerdo con alguna parte, no debés utilizar el Servicio.
            </p>

            <h2>2. Descripción del Servicio</h2>
            <p>
              Saru Apps es una plataforma SaaS que permite a comercios con
              tiendas en Tiendanube crear, personalizar y publicar aplicaciones
              móviles (PWA y nativas) sin necesidad de programar. El Servicio
              incluye:
            </p>
            <ul>
              <li>Editor visual drag & drop para diseñar la app</li>
              <li>Sincronización automática de productos con Tiendanube</li>
              <li>Envío de notificaciones push</li>
              <li>Generación de Web App (PWA) instalable</li>
              <li>
                Publicación en App Store y Google Play (según el plan
                contratado)
              </li>
            </ul>

            <h2>3. Registro y Cuenta</h2>
            <p>
              Para utilizar el Servicio, debés crear una cuenta proporcionando
              información veraz y actualizada. Sos responsable de mantener la
              confidencialidad de tus credenciales de acceso y de todas las
              actividades realizadas bajo tu cuenta.
            </p>

            <h2>4. Planes y Precios</h2>
            <p>Saru Apps ofrece los siguientes planes de suscripción:</p>
            <ul>
              <li>
                <strong>Starter (USD $49/mes):</strong> Web App (PWA) instalable,
                editor drag & drop, sincronización de productos, 1.000
                notificaciones push/mes.
              </li>
              <li>
                <strong>Growth (USD $149/mes):</strong> Todo lo de Starter más
                publicación en App Store y Google Play, editor avanzado,
                notificaciones de carrito abandonado, programa de fidelización,
                5.000 notificaciones push/mes.
              </li>
              <li>
                <strong>Scale (USD $349/mes):</strong> Todo lo de Growth más
                20.000 notificaciones push/mes, notificaciones segmentadas,
                campañas de marketing, inicio personalizado, multidioma.
              </li>
              <li>
                <strong>Enterprise (personalizado):</strong> Todo lo de Scale
                más notificaciones push ilimitadas, migración asistida, diseño
                personalizado, API dedicada, account manager dedicado, SLA
                garantizado.
              </li>
            </ul>
            <p>
              Podés crear tu cuenta gratis, diseñar tu app completa y ver una
              preview. El cobro comienza únicamente cuando decidís publicar tu
              app. Los precios pueden ser actualizados con un aviso previo de 30
              días.
            </p>
            <p>
              Si elegís la facturación anual, se aplica un descuento del 20%
              sobre el precio mensual.
            </p>

            <h2>5. Facturación y Pagos</h2>
            <p>
              Las suscripciones se facturan de forma mensual o anual según la
              modalidad elegida. El pago se realiza de forma anticipada y no es
              reembolsable salvo lo indicado en la sección de cancelación. Nos
              reservamos el derecho de suspender el Servicio en caso de falta de
              pago.
            </p>

            <h2>6. Cancelación</h2>
            <p>
              Podés cancelar tu suscripción en cualquier momento desde tu panel
              de control. La cancelación será efectiva al finalizar el período de
              facturación vigente. No se realizan reembolsos proporcionales por
              el tiempo no utilizado del período en curso.
            </p>

            <h2>7. Uso Aceptable</h2>
            <p>Te comprometés a no utilizar el Servicio para:</p>
            <ul>
              <li>
                Actividades ilegales o que violen derechos de terceros
              </li>
              <li>
                Distribuir contenido malicioso, fraudulento o engañoso
              </li>
              <li>
                Enviar notificaciones push con contenido spam o no solicitado
              </li>
              <li>
                Intentar acceder a sistemas o datos de otros usuarios
              </li>
              <li>
                Sobrecargar intencionalmente la infraestructura del Servicio
              </li>
            </ul>

            <h2>8. Propiedad Intelectual</h2>
            <p>
              La plataforma Saru Apps, incluyendo su código, diseño, marca y
              documentación, es propiedad exclusiva de Saru Apps. El contenido
              que subas a la plataforma (logos, imágenes, textos) sigue siendo de
              tu propiedad. Nos otorgás una licencia limitada para mostrar dicho
              contenido dentro de tu app publicada.
            </p>

            <h2>9. Costos de Terceros</h2>
            <p>
              La publicación en tiendas de apps requiere cuentas de
              desarrollador independientes:
            </p>
            <ul>
              <li>Apple Developer Program: USD $99/año</li>
              <li>Google Play Console: USD $25 (pago único)</li>
            </ul>
            <p>
              Estos costos son ajenos a Saru Apps y están sujetos a los términos
              de Apple y Google respectivamente.
            </p>

            <h2>10. Disponibilidad del Servicio</h2>
            <p>
              Nos esforzamos por mantener el Servicio disponible las 24 horas,
              pero no garantizamos un uptime del 100%. Podremos realizar
              mantenimientos programados y notificaremos con anticipación cuando
              sea posible. No somos responsables por interrupciones causadas por
              terceros (proveedores de hosting, Tiendanube, Apple, Google).
            </p>

            <h2>11. Limitación de Responsabilidad</h2>
            <p>
              Saru Apps no será responsable por daños indirectos, incidentales o
              consecuentes derivados del uso del Servicio. Nuestra
              responsabilidad total estará limitada al monto pagado por el
              usuario en los últimos 12 meses.
            </p>

            <h2>12. Modificaciones</h2>
            <p>
              Nos reservamos el derecho de modificar estos Términos en cualquier
              momento. Los cambios serán notificados por email y/o mediante un
              aviso en la plataforma. El uso continuado del Servicio después de
              la notificación constituye la aceptación de los nuevos términos.
            </p>

            <h2>13. Contacto</h2>
            <p>
              Para consultas sobre estos Términos, podés contactarnos en{" "}
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
