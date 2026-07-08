import { GuiaArticleLayout } from "@/components/GuiaArticleLayout";

export const metadata = {
  title: "Preguntas frecuentes — Guia Saru Apps",
};

export default function Page() {
  return (
    <GuiaArticleLayout currentSlug="faq">
      <h1>Preguntas frecuentes</h1>

      <h2>Generales</h2>

      <p><strong>Que es una PWA?</strong></p>
      <p>
        Una Progressive Web App (PWA) es una app que funciona desde el navegador
        pero se puede instalar en la pantalla de inicio del celular como si
        fuera una app nativa. No requiere descarga desde App Store o Google
        Play.
      </p>

      <p><strong>Necesito saber programar?</strong></p>
      <p>
        No. Todo se configura desde el panel de Saru Apps con un editor visual
        drag &amp; drop.
      </p>

      <p><strong>Puedo probar antes de pagar?</strong></p>
      <p>
        Si, podes crear tu cuenta y configurar tu app gratis. Solo necesitas un
        plan activo para publicarla.
      </p>

      <h2>Tiendanube</h2>

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

      <h2>Publicacion</h2>

      <p><strong>Cuanto tarda en publicarse mi app?</strong></p>
      <p>
        La PWA se publica al instante. Para app nativa, el proceso de revision
        en App Store puede tardar 3-7 dias y en Google Play unas horas.
      </p>

      <p><strong>Puedo despublicar mi app?</strong></p>
      <p>
        Si, podes despublicar en cualquier momento desde la seccion Publicar.
      </p>

      <p>
        <strong>Que necesito para publicar en App Store y Google Play?</strong>
      </p>
      <p>
        Necesitas el plan Growth o superior, una cuenta de Apple Developer
        ($99/ano) y una cuenta de Google Play Developer ($25 una vez). Nosotros
        nos encargamos de compilar y subir la app a tus cuentas.
      </p>

      <h2>Notificaciones</h2>

      <p><strong>Como reciben las notificaciones mis clientes?</strong></p>
      <p>
        Los clientes que instalen tu app (PWA o nativa) reciben notificaciones
        push automaticamente cuando las envias desde el panel.
      </p>

      <p><strong>Puedo programar notificaciones?</strong></p>
      <p>
        Si, podes programar notificaciones para que se envien en una fecha y
        hora especifica.
      </p>

      <p><strong>Que es un deep link?</strong></p>
      <p>
        Es un link especial que lleva al cliente directamente a un producto,
        categoria o seccion especifica dentro de tu app cuando toca la
        notificacion.
      </p>

      <h2>Cuenta y facturacion</h2>

      <p><strong>Puedo cambiar de plan?</strong></p>
      <p>
        Si, podes cambiar de plan en cualquier momento desde la seccion Plan en
        el dashboard.
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
    </GuiaArticleLayout>
  );
}
