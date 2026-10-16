import type { ReactNode } from "react";
import type { Locale } from "@/i18n/config";

const linkClass =
  "font-medium text-ink underline decoration-accent decoration-2 underline-offset-4";

type LegalContent = {
  metadata: { title: string; description: string };
  hero: { title: string; meta: string };
  body: ReactNode;
};

const es: LegalContent = {
  metadata: {
    title: "Política de Privacidad — Saru Apps",
    description:
      "Cómo Saru Apps recopila, usa, comparte y protege tu información y la de los usuarios de tu app.",
  },
  hero: {
    title: "Política de Privacidad",
    meta: "Última actualización: 4 de julio de 2026",
  },
  body: (
    <>
      <h2>1. Información que Recopilamos</h2>
      <p>
        En Saru Apps recopilamos la información necesaria para brindarte el Servicio. Esto
        incluye:
      </p>
      <ul>
        <li>
          <strong>Datos de registro:</strong> nombre, dirección de email y contraseña
          (almacenada de forma encriptada).
        </li>
        <li>
          <strong>Datos de la tienda:</strong> información de tu tienda Tiendanube (nombre,
          productos, categorías, pedidos) obtenida mediante la integración autorizada por vos.
        </li>
        <li>
          <strong>Datos de uso:</strong> interacciones con la plataforma, páginas visitadas,
          funcionalidades utilizadas.
        </li>
        <li>
          <strong>Datos de dispositivos:</strong> tokens de notificaciones push de los usuarios
          finales de tu app (almacenados de forma anónima, sin datos personales del usuario
          final).
        </li>
        <li>
          <strong>Datos de pago:</strong> procesados por terceros (Stripe o MercadoPago). No
          almacenamos números de tarjeta.
        </li>
      </ul>

      <h2>2. Cómo Usamos tu Información</h2>
      <p>Utilizamos la información recopilada para:</p>
      <ul>
        <li>Proveer, mantener y mejorar el Servicio</li>
        <li>Sincronizar productos y pedidos con tu tienda Tiendanube</li>
        <li>Enviar notificaciones push a los usuarios de tu app (según tu configuración)</li>
        <li>
          Comunicarte actualizaciones del Servicio, cambios en los términos o información de
          facturación
        </li>
        <li>Detectar y prevenir fraude o uso indebido</li>
        <li>Generar estadísticas agregadas y anónimas de uso</li>
      </ul>

      <h2>3. Compartición de Datos</h2>
      <p>
        No vendemos ni compartimos tu información personal con terceros para fines
        publicitarios. Compartimos datos únicamente con:
      </p>
      <ul>
        <li>
          <strong>Tiendanube:</strong> para la sincronización de tu tienda (mediante OAuth, con
          los permisos que vos autorizás).
        </li>
        <li>
          <strong>Firebase (Google):</strong> para el envío de notificaciones push.
        </li>
        <li>
          <strong>Cloudinary:</strong> para el almacenamiento de imágenes que subís a la
          plataforma.
        </li>
        <li>
          <strong>Proveedores de hosting:</strong> para la infraestructura del Servicio.
        </li>
        <li>
          <strong>Autoridades legales:</strong> cuando sea requerido por ley o proceso judicial.
        </li>
      </ul>

      <h2>4. Cookies</h2>
      <p>Utilizamos cookies para:</p>
      <ul>
        <li>
          <strong>Cookies esenciales:</strong> autenticación y funcionamiento del dashboard
          (httpOnly, seguras).
        </li>
        <li>
          <strong>Cookies de preferencias:</strong> recordar tu configuración y preferencias de
          uso.
        </li>
        <li>
          <strong>Cookies analíticas:</strong> entender cómo se utiliza la plataforma para
          mejorar el Servicio (pueden ser desactivadas).
        </li>
      </ul>
      <p>
        Podés gestionar tus preferencias de cookies desde el banner que aparece al visitar el
        sitio o desde la configuración de tu navegador.
      </p>

      <h2>5. Seguridad</h2>
      <p>Implementamos medidas de seguridad para proteger tu información:</p>
      <ul>
        <li>Contraseñas encriptadas con bcrypt</li>
        <li>Autenticación mediante JWT con cookies httpOnly</li>
        <li>Conexiones cifradas mediante HTTPS/TLS</li>
        <li>Arquitectura multitenant con aislamiento de datos por comercio</li>
        <li>Rate limiting para prevenir ataques</li>
        <li>Tokens de dispositivo protegidos contra reasignación</li>
      </ul>

      <h2>6. Retención de Datos</h2>
      <p>
        Conservamos tus datos mientras tu cuenta esté activa. Si cancelás tu cuenta,
        eliminaremos tu información personal dentro de los 90 días siguientes, excepto aquella
        que debamos retener por obligaciones legales o fiscales.
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
        <a href="mailto:hola@saruapps.com" className={linkClass}>
          hola@saruapps.com
        </a>
        .
      </p>

      <h2>8. Usuarios Finales de tu App</h2>
      <p>
        Como comercio que publica una app a través de Saru Apps, sos responsable de informar a
        tus usuarios finales sobre la recopilación de datos (tokens push, datos de compra). Te
        recomendamos incluir tu propia política de privacidad dentro de tu app.
      </p>

      <h2>9. Menores de Edad</h2>
      <p>
        El Servicio no está dirigido a menores de 18 años. No recopilamos intencionalmente datos
        de menores. Si tomamos conocimiento de que hemos recopilado datos de un menor, los
        eliminaremos de inmediato.
      </p>

      <h2>10. Cambios en esta Política</h2>
      <p>
        Podemos actualizar esta Política de Privacidad periódicamente. Te notificaremos sobre
        cambios significativos por email o mediante un aviso en la plataforma. Te recomendamos
        revisar esta página regularmente.
      </p>

      <h2>11. Contacto</h2>
      <p>
        Para consultas sobre privacidad, escribinos a{" "}
        <a href="mailto:hola@saruapps.com" className={linkClass}>
          hola@saruapps.com
        </a>
        .
      </p>
    </>
  ),
};

const pt: LegalContent = {
  metadata: {
    title: "Política de Privacidade — Saru Apps",
    description:
      "Como a Saru Apps coleta, usa, compartilha e protege as suas informações e as dos usuários do seu app.",
  },
  hero: {
    title: "Política de Privacidade",
    meta: "Última atualização: 4 de julho de 2026",
  },
  body: (
    <>
      <h2>1. Informações que Coletamos</h2>
      <p>
        Na Saru Apps, coletamos as informações necessárias para prestar o Serviço a você. Isso
        inclui:
      </p>
      <ul>
        <li>
          <strong>Dados de cadastro:</strong> nome, endereço de e-mail e senha (armazenada de
          forma criptografada).
        </li>
        <li>
          <strong>Dados da loja:</strong> informações da sua loja Nuvemshop (nome, produtos,
          categorias, pedidos) obtidas por meio da integração autorizada por você.
        </li>
        <li>
          <strong>Dados de uso:</strong> interações com a plataforma, páginas visitadas,
          funcionalidades utilizadas.
        </li>
        <li>
          <strong>Dados de dispositivos:</strong> tokens de notificações push dos usuários
          finais do seu app (armazenados de forma anônima, sem dados pessoais do usuário final).
        </li>
        <li>
          <strong>Dados de pagamento:</strong> processados por terceiros (Stripe ou
          MercadoPago). Não armazenamos números de cartão.
        </li>
      </ul>

      <h2>2. Como Usamos suas Informações</h2>
      <p>Utilizamos as informações coletadas para:</p>
      <ul>
        <li>Fornecer, manter e melhorar o Serviço</li>
        <li>Sincronizar produtos e pedidos com sua loja Nuvemshop</li>
        <li>
          Enviar notificações push aos usuários do seu app (de acordo com a sua configuração)
        </li>
        <li>
          Comunicar a você atualizações do Serviço, alterações nos termos ou informações de
          faturamento
        </li>
        <li>Detectar e prevenir fraudes ou uso indevido</li>
        <li>Gerar estatísticas agregadas e anônimas de uso</li>
      </ul>

      <h2>3. Compartilhamento de Dados</h2>
      <p>
        Não vendemos nem compartilhamos suas informações pessoais com terceiros para fins
        publicitários. Compartilhamos dados exclusivamente com:
      </p>
      <ul>
        <li>
          <strong>Nuvemshop:</strong> para a sincronização da sua loja (por meio de OAuth, com as
          permissões que você autoriza).
        </li>
        <li>
          <strong>Firebase (Google):</strong> para o envio de notificações push.
        </li>
        <li>
          <strong>Cloudinary:</strong> para o armazenamento das imagens que você envia para a
          plataforma.
        </li>
        <li>
          <strong>Provedores de hospedagem:</strong> para a infraestrutura do Serviço.
        </li>
        <li>
          <strong>Autoridades legais:</strong> quando exigido por lei ou processo judicial.
        </li>
      </ul>

      <h2>4. Cookies</h2>
      <p>Utilizamos cookies para:</p>
      <ul>
        <li>
          <strong>Cookies essenciais:</strong> autenticação e funcionamento do dashboard
          (httpOnly, seguros).
        </li>
        <li>
          <strong>Cookies de preferências:</strong> lembrar suas configurações e preferências de
          uso.
        </li>
        <li>
          <strong>Cookies analíticos:</strong> entender como a plataforma é utilizada para
          melhorar o Serviço (podem ser desativados).
        </li>
      </ul>
      <p>
        Você pode gerenciar suas preferências de cookies pelo banner exibido ao visitar o site ou
        pelas configurações do seu navegador.
      </p>

      <h2>5. Segurança</h2>
      <p>Implementamos medidas de segurança para proteger suas informações:</p>
      <ul>
        <li>Senhas criptografadas com bcrypt</li>
        <li>Autenticação via JWT com cookies httpOnly</li>
        <li>Conexões criptografadas via HTTPS/TLS</li>
        <li>Arquitetura multitenant com isolamento de dados por loja</li>
        <li>Rate limiting para prevenir ataques</li>
        <li>Tokens de dispositivo protegidos contra reatribuição</li>
      </ul>

      <h2>6. Retenção de Dados</h2>
      <p>
        Mantemos seus dados enquanto sua conta estiver ativa. Se você cancelar sua conta,
        excluiremos suas informações pessoais em até 90 dias, exceto aquelas que devamos reter
        por obrigações legais ou fiscais.
      </p>

      <h2>7. Seus Direitos</h2>
      <p>Você tem direito a:</p>
      <ul>
        <li>Acessar seus dados pessoais armazenados</li>
        <li>Solicitar a correção de dados inexatos</li>
        <li>Solicitar a exclusão da sua conta e dos seus dados</li>
        <li>Exportar seus dados em um formato legível</li>
        <li>Revogar o acesso à sua loja Nuvemshop a qualquer momento</li>
      </ul>
      <p>
        Para exercer esses direitos, entre em contato pelo e-mail{" "}
        <a href="mailto:hola@saruapps.com" className={linkClass}>
          hola@saruapps.com
        </a>
        .
      </p>

      <h2>8. Usuários Finais do seu App</h2>
      <p>
        Como loja que publica um app por meio da Saru Apps, você é responsável por informar seus
        usuários finais sobre a coleta de dados (tokens push, dados de compra). Recomendamos
        incluir sua própria política de privacidade dentro do seu app.
      </p>

      <h2>9. Menores de Idade</h2>
      <p>
        O Serviço não é destinado a menores de 18 anos. Não coletamos intencionalmente dados de
        menores. Caso tomemos conhecimento de que coletamos dados de um menor, eles serão
        excluídos imediatamente.
      </p>

      <h2>10. Alterações nesta Política</h2>
      <p>
        Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre
        alterações significativas por e-mail ou por meio de um aviso na plataforma. Recomendamos
        que você revise esta página regularmente.
      </p>

      <h2>11. Contato</h2>
      <p>
        Para dúvidas sobre privacidade, escreva para{" "}
        <a href="mailto:hola@saruapps.com" className={linkClass}>
          hola@saruapps.com
        </a>
        .
      </p>
    </>
  ),
};

export const privacidadContent: Record<Locale, LegalContent> = { es, pt };
