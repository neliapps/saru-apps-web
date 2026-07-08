import { GuiaArticleLayout } from "@/components/GuiaArticleLayout";

export const metadata = {
  title: "Seguridad y privacidad — Guia Saru Apps",
};

export default function Page() {
  return (
    <GuiaArticleLayout currentSlug="seguridad">
      <h1>Seguridad y privacidad</h1>

      <h2>Autenticacion</h2>
      <ul>
        <li>Autenticacion basada en JWT (JSON Web Tokens)</li>
        <li>Tokens almacenados en cookies HttpOnly + localStorage</li>
        <li>Contrasenas hasheadas con bcrypt</li>
        <li>Sesiones con expiracion configurable (por defecto 7 dias)</li>
      </ul>

      <h2>Proteccion de datos</h2>
      <ul>
        <li>
          <strong>CORS:</strong> solo permite requests desde dominios autorizados
        </li>
        <li>
          <strong>Rate limiting:</strong> proteccion contra abuso en endpoints de
          API y autenticacion
        </li>
        <li>
          <strong>HTTPS:</strong> obligatorio para todas las comunicaciones
        </li>
        <li>
          <strong>Webhooks de privacidad:</strong> implementados segun requisitos
          de Tiendanube (store/redact, customers/redact, customers/data_request)
        </li>
      </ul>

      <h2>Cumplimiento GDPR</h2>
      <ul>
        <li>
          <strong>store/redact:</strong> cuando una tienda desinstala la app, se
          eliminan todos sus datos
        </li>
        <li>
          <strong>customers/redact:</strong> cuando se solicita la eliminacion de
          datos de un cliente
        </li>
        <li>
          <strong>customers/data_request:</strong> cuando se solicita una copia
          de los datos de un cliente
        </li>
      </ul>
    </GuiaArticleLayout>
  );
}
