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
          <li>Las sesiones del panel duran 24 horas</li>
          <li>
            Los clientes inician sesión en la app con su email y un código de un
            solo uso que reciben por email
          </li>
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
            <strong>Webhooks de privacidad:</strong> implementados según los
            requisitos de Tiendanube para la LGPD (store/redact, customers/redact,
            customers/data_request)
          </li>
          <li>
            <strong>Webhooks firmados:</strong> cada webhook de Tiendanube se
            verifica con su firma y se rechaza si no la tiene
          </li>
        </ul>

        <h2>Pedidos de privacidad (LGPD)</h2>
        <ul>
          <li>
            <strong>store/redact:</strong> después de que una tienda desinstala
            la app, se borran sus productos, sus categorías, los datos de sus
            clientes (contactos, dispositivos, favoritos, carritos y avisos de
            stock) y los eventos. Se conservan la cuenta de Saru Apps y el diseño
            de la app, para que una reinstalación siga donde quedó. Si la tienda
            volvió a instalar la app, no se borra nada.
          </li>
          <li>
            <strong>customers/redact:</strong> cuando un cliente pide borrar sus
            datos, se borra lo que la app de la tienda guarda de esa persona, igual que
            cuando elimina su cuenta desde la app. Los eventos de sus pedidos
            conservan los totales, sin el email.
          </li>
          <li>
            <strong>customers/data_request:</strong> cuando un cliente pide una
            copia de sus datos, el comercio recibe un email con los datos que
            Saru Apps guarda de ese cliente.
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
          <li>As sessões do painel duram 24 horas</li>
          <li>
            Os clientes entram no app com o e-mail e um código de uso único que
            recebem por e-mail
          </li>
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
            os requisitos da Nuvemshop para a LGPD (store/redact,
            customers/redact, customers/data_request)
          </li>
          <li>
            <strong>Webhooks assinados:</strong> cada webhook da Nuvemshop tem a
            assinatura verificada e é rejeitado se não a tiver
          </li>
        </ul>

        <h2>Solicitações de privacidade (LGPD)</h2>
        <ul>
          <li>
            <strong>store/redact:</strong> depois que uma loja desinstala o app,
            são excluídos seus produtos, suas categorias, os dados dos seus
            clientes (contatos, dispositivos, favoritos, carrinhos e avisos de
            estoque) e os eventos. A conta da Saru Apps e o design do app são
            mantidos, para que uma nova instalação continue de onde parou. Se a
            loja instalou o app de novo, nada é excluído.
          </li>
          <li>
            <strong>customers/redact:</strong> quando um cliente pede a exclusão
            dos seus dados, é excluído o que o app da loja guarda sobre essa pessoa, como
            quando ele exclui a conta pelo app. Os eventos dos pedidos mantêm os
            totais, sem o e-mail.
          </li>
          <li>
            <strong>customers/data_request:</strong> quando um cliente pede uma
            cópia dos seus dados, o lojista recebe um e-mail com os dados que a
            Saru Apps guarda sobre esse cliente.
          </li>
        </ul>
      </>
    ),
  },
};
