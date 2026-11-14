import type { GuiaArticleContent } from "./index";

export const registroContent: GuiaArticleContent = {
  es: {
    metadata: { title: "Registro y onboarding — Guía Saru Apps" },
    body: (
      <>
        <h1>Registro y onboarding</h1>

        <h2>Paso 1: Crear cuenta</h2>
        <p>
          El comerciante se registra en{" "}
          <strong>app.saruapps.com/register</strong> con email, nombre y
          contraseña. Después del registro, se redirige al wizard de onboarding.
        </p>

        <h2>Paso 2: Onboarding (4 pasos)</h2>
        <ol>
          <li>
            <strong>Conectar Tiendanube:</strong> Vincula su tienda de Tiendanube
            para sincronizar productos automáticamente
          </li>
          <li>
            <strong>Sincronización:</strong> Los productos de la tienda se
            sincronizan en unos segundos
          </li>
          <li>
            <strong>Elige el estilo de tu app:</strong> La app aparece con el
            logo, los colores, la tipografía y los banners de la tienda, y el
            comerciante elige uno de los cuatro estilos (Minimal, Boutique,
            Moderno o Vibrante)
          </li>
          <li>
            <strong>¡Tu app está lista!:</strong> Vista previa de la app en el
            teléfono, el nombre de la app y el WhatsApp del comerciante
            (opcional, para recibir soporte)
          </li>
        </ol>
        <p>
          Si instala Saru Apps desde la Tienda de Aplicaciones de Tiendanube, el
          comerciante no necesita registrarse ni conectar la tienda: la cuenta y
          la app se crean al instalar. Al hacer clic en{" "}
          <strong>Abrir el panel de Saru Apps</strong> en el admin de Tiendanube,
          el onboarding empieza sin iniciar sesión y salta el paso de conectar
          Tiendanube.
        </p>
      </>
    ),
  },
  pt: {
    metadata: { title: "Cadastro e onboarding — Guia Saru Apps" },
    body: (
      <>
        <h1>Cadastro e onboarding</h1>

        <h2>Passo 1: Criar conta</h2>
        <p>
          O lojista se cadastra em{" "}
          <strong>app.saruapps.com/register</strong> com e-mail, nome e
          senha. Depois do cadastro, ele é redirecionado para o assistente de
          onboarding.
        </p>

        <h2>Passo 2: Onboarding (4 passos)</h2>
        <ol>
          <li>
            <strong>Conectar a Nuvemshop:</strong> Vincula sua loja Nuvemshop
            para sincronizar os produtos automaticamente
          </li>
          <li>
            <strong>Sincronização:</strong> Os produtos da loja são
            sincronizados em alguns segundos
          </li>
          <li>
            <strong>Escolha o estilo do seu app:</strong> O app aparece com o
            logo, as cores, a tipografia e os banners da loja, e o lojista
            escolhe um dos quatro estilos (Minimal, Boutique, Moderno ou
            Vibrante)
          </li>
          <li>
            <strong>Seu app está pronto!:</strong> Pré-visualização do app no
            celular, o nome do app e o WhatsApp do lojista (opcional, para
            receber suporte)
          </li>
        </ol>
        <p>
          Se instalar a Saru Apps pela Loja de Aplicativos da Nuvemshop, o
          lojista não precisa se cadastrar nem conectar a loja: a conta e o app
          são criados na instalação. Ao clicar em{" "}
          <strong>Abrir o painel da Saru Apps</strong> no admin da Nuvemshop, o
          onboarding começa sem login e pula o passo de conectar a Nuvemshop.
        </p>
      </>
    ),
  },
};
