import type { GuiaArticleContent } from "./index";

export const tiendanubeContent: GuiaArticleContent = {
  es: {
    metadata: {
      title: "Conectar Tiendanube — Guía Saru Apps",
      description:
        "Cómo conectar tu tienda Tiendanube con Saru Apps. Dos caminos: desde el marketplace o desde la web.",
    },
    body: (
      <>
        <h1>Conectar Tiendanube</h1>
        <p>
          Hay dos formas de conectar tu tienda Tiendanube con Saru Apps. Podés
          instalar la app desde el marketplace de Tiendanube o registrarte
          directamente en nuestra web. En ambos casos, la conexión es automática y
          tus productos se sincronizan en segundos.
        </p>

        {/* ─── Camino 1 ─── */}
        <h2>Camino 1: Desde el Marketplace de Tiendanube</h2>

        <h3>Paso 1 — Encontrar la app en el marketplace</h3>
        <p>
          Buscá &quot;Saru Apps&quot; en el marketplace de Tiendanube
          (tiendanube.com/tienda-aplicaciones-nube) y hacé clic en{" "}
          <strong>Instalar</strong>.
        </p>

        <h3>Paso 2 — Autorizar permisos</h3>
        <p>
          Tiendanube muestra la pantalla de autorización OAuth. Vas a ver los
          permisos que la app solicita (productos, pedidos, clientes, etc.) y
          hacés clic en <strong>Aceptar</strong>.
        </p>
        <img
          src="/guia/tiendanube-permisos.png"
          alt="Pantalla de permisos de Tiendanube para instalar Saru Apps"
          className="my-8 w-full rounded-2xl border border-card-light-border"
        />

        <h3>Paso 3 — Crear cuenta</h3>
        <p>
          Como sos un merchant nuevo, se te muestra una página de confirmación
          con:
        </p>
        <ul>
          <li>Nombre de la tienda (detectado automáticamente)</li>
          <li>Email de la tienda (detectado automáticamente)</li>
          <li>URL de la tienda</li>
          <li>Checkbox de Términos y Condiciones + Política de Privacidad</li>
          <li>
            Botón <strong>&quot;Crear cuenta y conectar tienda&quot;</strong>
          </li>
        </ul>
        <p>
          Si ya tenés cuenta en Saru Apps, podés hacer clic en &quot;Ya tengo
          cuenta — Iniciar sesión&quot; para vincular tu tienda a tu cuenta
          existente.
        </p>
        <img
          src="/guia/confirm-signup.png"
          alt="Pantalla de confirmación de cuenta de Saru Apps"
          className="my-8 mx-auto w-full max-w-lg rounded-2xl border border-card-light-border"
        />

        <h3>Paso 4 — Cuenta creada + sincronización automática</h3>
        <p>Al aceptar los términos, todo sucede automáticamente:</p>
        <ol>
          <li>Se crea tu cuenta en Saru Apps</li>
          <li>Se conecta tu tienda de Tiendanube</li>
          <li>Se registran los webhooks (productos, pedidos)</li>
          <li>Se inicia la sincronización de productos en background</li>
          <li>
            Se importa el diseño de tu tienda (logo, colores, idioma)
          </li>
          <li>Se crea tu app automáticamente con los datos de la tienda</li>
          <li>Se envía un email de bienvenida con link para crear contraseña</li>
          <li>Se te redirige al panel de administración dentro de Tiendanube</li>
        </ol>

        {/* ─── Camino 2 ─── */}
        <h2>Camino 2: Desde la web de Saru Apps (registro directo)</h2>

        <h3>Paso 1 — Registro</h3>
        <p>
          Andá a{" "}
          <a
            href="https://app.saruapps.com/register"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-ink underline decoration-accent decoration-2 underline-offset-4"
          >
            app.saruapps.com/register
          </a>{" "}
          y completá el formulario:
        </p>
        <ul>
          <li>Nombre</li>
          <li>Email</li>
          <li>Contraseña (mínimo 8 caracteres)</li>
        </ul>
        <p>Hacé clic en &quot;Crear cuenta&quot; para continuar.</p>

        <h3>Paso 2 — Onboarding: conectar Tiendanube</h3>
        <p>
          Después del registro, se te redirige automáticamente al onboarding. Vas
          a ver una pantalla que explica lo que va a pasar:
        </p>
        <ul>
          <li>Sincronizar productos y categorías</li>
          <li>Importar logo, colores y branding</li>
          <li>Generar el diseño automáticamente</li>
        </ul>
        <p>
          Hacé clic en <strong>&quot;Conectar Tiendanube&quot;</strong> para
          continuar.
        </p>
        <img
          src="/guia/onboarding-conectar.png"
          alt="Pantalla de onboarding de Saru Apps para conectar Tiendanube"
          className="my-8 w-full rounded-2xl border border-card-light-border"
        />

        <h3>Paso 3 — Autorizar en Tiendanube</h3>
        <p>Al hacer clic en &quot;Conectar Tiendanube&quot;:</p>
        <ol>
          <li>Se te redirige a Tiendanube para autorizar los permisos</li>
          <li>Aceptás los permisos (productos, pedidos, clientes, etc.)</li>
          <li>Tiendanube te redirige de vuelta a Saru Apps</li>
        </ol>

        {/* ─── Qué se sincroniza ─── */}
        <h2>Qué se sincroniza</h2>
        <ul>
          <li>
            <strong>Productos:</strong> nombre, descripción, precio, precio
            promocional, imágenes, variantes, stock, categorías
          </li>
          <li>
            <strong>Categorías:</strong> se crean como secciones en la app
          </li>
          <li>
            <strong>Páginas:</strong> páginas estáticas de la tienda (términos,
            políticas, etc.)
          </li>
          <li>
            <strong>Branding:</strong> logo, colores e idioma de la tienda
          </li>
        </ul>

        {/* ─── Sync en tiempo real ─── */}
        <h2>Sincronización en tiempo real</h2>
        <p>
          Una vez conectada la tienda, cualquier cambio que hagas en Tiendanube se
          refleja automáticamente en tu app. Cuando creás, editás o eliminás un
          producto, un webhook notifica al backend de Saru Apps y la app se
          actualiza sin intervención manual.
        </p>
        <p>
          Esto incluye cambios de precio, stock, imágenes, variantes y
          categorías. No necesitás hacer nada — la sincronización es continua y
          en tiempo real.
        </p>
      </>
    ),
  },
  pt: {
    metadata: {
      title: "Conectar a Nuvemshop — Guia Saru Apps",
      description:
        "Como conectar sua loja Nuvemshop à Saru Apps. Dois caminhos: pelo marketplace ou pelo site.",
    },
    body: (
      <>
        <h1>Conectar a Nuvemshop</h1>
        <p>
          Há duas formas de conectar sua loja Nuvemshop à Saru Apps. Você pode
          instalar o app pelo marketplace da Nuvemshop ou se cadastrar
          diretamente no nosso site. Em ambos os casos, a conexão é automática e
          seus produtos são sincronizados em segundos.
        </p>

        {/* ─── Caminho 1 ─── */}
        <h2>Caminho 1: Pelo Marketplace da Nuvemshop</h2>

        <h3>Passo 1 — Encontrar o app no marketplace</h3>
        <p>
          Busque &quot;Saru Apps&quot; no marketplace da Nuvemshop
          (nuvemshop.com.br/loja-aplicativos-nuvem) e clique em{" "}
          <strong>Instalar</strong>.
        </p>

        <h3>Passo 2 — Autorizar permissões</h3>
        <p>
          A Nuvemshop mostra a tela de autorização OAuth. Você vai ver as
          permissões que o app solicita (produtos, pedidos, clientes etc.) e
          clicar em <strong>Aceitar</strong>.
        </p>
        <img
          src="/guia/tiendanube-permisos.png"
          alt="Tela de permissões da Nuvemshop para instalar a Saru Apps"
          className="my-8 w-full rounded-2xl border border-card-light-border"
        />

        <h3>Passo 3 — Criar conta</h3>
        <p>
          Como você é um lojista novo, aparece uma página de confirmação
          com:
        </p>
        <ul>
          <li>Nome da loja (detectado automaticamente)</li>
          <li>E-mail da loja (detectado automaticamente)</li>
          <li>URL da loja</li>
          <li>Checkbox de Termos e Condições + Política de Privacidade</li>
          <li>
            Botão <strong>&quot;Criar conta e conectar loja&quot;</strong>
          </li>
        </ul>
        <p>
          Se você já tem conta na Saru Apps, pode clicar em &quot;Já tenho
          conta — Entrar&quot; para vincular sua loja à sua conta
          existente.
        </p>
        <img
          src="/guia/confirm-signup.png"
          alt="Tela de confirmação de conta da Saru Apps"
          className="my-8 mx-auto w-full max-w-lg rounded-2xl border border-card-light-border"
        />

        <h3>Passo 4 — Conta criada + sincronização automática</h3>
        <p>Ao aceitar os termos, tudo acontece automaticamente:</p>
        <ol>
          <li>Sua conta na Saru Apps é criada</li>
          <li>Sua loja Nuvemshop é conectada</li>
          <li>Os webhooks são registrados (produtos, pedidos)</li>
          <li>A sincronização de produtos é iniciada em background</li>
          <li>
            O design da sua loja é importado (logo, cores, idioma)
          </li>
          <li>Seu app é criado automaticamente com os dados da loja</li>
          <li>Um e-mail de boas-vindas é enviado com link para criar sua senha</li>
          <li>Você é redirecionado ao painel de administração dentro da Nuvemshop</li>
        </ol>

        {/* ─── Caminho 2 ─── */}
        <h2>Caminho 2: Pelo site da Saru Apps (cadastro direto)</h2>

        <h3>Passo 1 — Cadastro</h3>
        <p>
          Acesse{" "}
          <a
            href="https://app.saruapps.com/register"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-ink underline decoration-accent decoration-2 underline-offset-4"
          >
            app.saruapps.com/register
          </a>{" "}
          e preencha o formulário:
        </p>
        <ul>
          <li>Nome</li>
          <li>E-mail</li>
          <li>Senha (mínimo de 8 caracteres)</li>
        </ul>
        <p>Clique em &quot;Criar conta&quot; para continuar.</p>

        <h3>Passo 2 — Onboarding: conectar a Nuvemshop</h3>
        <p>
          Depois do cadastro, você é redirecionado automaticamente ao onboarding.
          Você vai ver uma tela que explica o que vai acontecer:
        </p>
        <ul>
          <li>Sincronizar produtos e categorias</li>
          <li>Importar logo, cores e branding</li>
          <li>Gerar o design automaticamente</li>
        </ul>
        <p>
          Clique em <strong>&quot;Conectar Nuvemshop&quot;</strong> para
          continuar.
        </p>
        <img
          src="/guia/onboarding-conectar.png"
          alt="Tela de onboarding da Saru Apps para conectar a Nuvemshop"
          className="my-8 w-full rounded-2xl border border-card-light-border"
        />

        <h3>Passo 3 — Autorizar na Nuvemshop</h3>
        <p>Ao clicar em &quot;Conectar Nuvemshop&quot;:</p>
        <ol>
          <li>Você é redirecionado à Nuvemshop para autorizar as permissões</li>
          <li>Você aceita as permissões (produtos, pedidos, clientes etc.)</li>
          <li>A Nuvemshop redireciona você de volta à Saru Apps</li>
        </ol>

        {/* ─── O que é sincronizado ─── */}
        <h2>O que é sincronizado</h2>
        <ul>
          <li>
            <strong>Produtos:</strong> nome, descrição, preço, preço
            promocional, imagens, variantes, estoque, categorias
          </li>
          <li>
            <strong>Categorias:</strong> viram seções no app
          </li>
          <li>
            <strong>Páginas:</strong> páginas estáticas da loja (termos,
            políticas etc.)
          </li>
          <li>
            <strong>Branding:</strong> logo, cores e idioma da loja
          </li>
        </ul>

        {/* ─── Sync em tempo real ─── */}
        <h2>Sincronização em tempo real</h2>
        <p>
          Depois que a loja é conectada, qualquer alteração que você fizer na
          Nuvemshop é refletida automaticamente no seu app. Quando você cria,
          edita ou exclui um produto, um webhook notifica o backend da Saru Apps
          e o app é atualizado sem intervenção manual.
        </p>
        <p>
          Isso inclui alterações de preço, estoque, imagens, variantes e
          categorias. Você não precisa fazer nada — a sincronização é contínua e
          em tempo real.
        </p>
      </>
    ),
  },
};
