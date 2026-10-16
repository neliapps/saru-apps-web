import type { GuiaArticleContent } from "./index";

export const seguridadContent: GuiaArticleContent = {
  es: {
    metadata: { title: "Seguridad y privacidad — Guía Saru Apps" },
    body: (
      <>
        <h1>Seguridad y privacidad</h1>

        <h2>Autenticación</h2>
        <ul>
          <li>Autenticación basada en JWT (JSON Web Tokens)</li>
          <li>Tokens almacenados en cookies HttpOnly + localStorage</li>
          <li>Contraseñas hasheadas con bcrypt</li>
          <li>Sesiones con expiración configurable (por defecto 7 días)</li>
        </ul>

        <h2>Protección de datos</h2>
        <ul>
          <li>
            <strong>CORS:</strong> solo permite requests desde dominios autorizados
          </li>
          <li>
            <strong>Rate limiting:</strong> protección contra abuso en endpoints de
            API y autenticación
          </li>
          <li>
            <strong>HTTPS:</strong> obligatorio para todas las comunicaciones
          </li>
          <li>
            <strong>Webhooks de privacidad:</strong> implementados según requisitos
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
            <strong>customers/redact:</strong> cuando se solicita la eliminación de
            datos de un cliente
          </li>
          <li>
            <strong>customers/data_request:</strong> cuando se solicita una copia
            de los datos de un cliente
          </li>
        </ul>
      </>
    ),
  },
  pt: {
    metadata: { title: "Segurança e privacidade — Guia Saru Apps" },
    body: (
      <>
        <h1>Segurança e privacidade</h1>

        <h2>Autenticação</h2>
        <ul>
          <li>Autenticação baseada em JWT (JSON Web Tokens)</li>
          <li>Tokens armazenados em cookies HttpOnly + localStorage</li>
          <li>Senhas com hash bcrypt</li>
          <li>Sessões com expiração configurável (padrão de 7 dias)</li>
        </ul>

        <h2>Proteção de dados</h2>
        <ul>
          <li>
            <strong>CORS:</strong> só permite requests de domínios autorizados
          </li>
          <li>
            <strong>Rate limiting:</strong> proteção contra abuso nos endpoints da
            API e de autenticação
          </li>
          <li>
            <strong>HTTPS:</strong> obrigatório para todas as comunicações
          </li>
          <li>
            <strong>Webhooks de privacidade:</strong> implementados de acordo com
            os requisitos da Nuvemshop (store/redact, customers/redact,
            customers/data_request)
          </li>
        </ul>

        <h2>Conformidade com o GDPR</h2>
        <ul>
          <li>
            <strong>store/redact:</strong> quando uma loja desinstala o app,
            todos os seus dados são excluídos
          </li>
          <li>
            <strong>customers/redact:</strong> quando é solicitada a exclusão dos
            dados de um cliente
          </li>
          <li>
            <strong>customers/data_request:</strong> quando é solicitada uma cópia
            dos dados de um cliente
          </li>
        </ul>
      </>
    ),
  },
};
