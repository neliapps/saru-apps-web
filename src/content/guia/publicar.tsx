import type { GuiaArticleContent } from "./index";

const linkClass =
  "font-medium text-ink underline decoration-accent decoration-2 underline-offset-4";

export const publicarContent: GuiaArticleContent = {
  es: {
    metadata: {
      title: "Publicar la app — Guía Saru Apps",
      description:
        "Guía completa para publicar tu app en App Store y Google Play. Creá tus cuentas de desarrollador, invitá a Saru Apps y nosotros nos encargamos del resto.",
    },
    body: (
      <>
        <h1>Publicar la app</h1>
        <p>
          Para publicar tu app en App Store y Google Play, necesitás crear tus
          cuentas de desarrollador en Apple y Google, darnos acceso y nosotros nos
          encargamos de todo el proceso técnico de compilación y publicación.
        </p>

        <h2>Resumen del proceso</h2>
        <ol>
          <li>
            <strong>Obtener un número D-U-N-S</strong> (si tu negocio es una
            empresa/organización)
          </li>
          <li>
            <strong>Crear tu cuenta de Apple Developer</strong> (USD $99/año)
          </li>
          <li>
            <strong>Crear tu cuenta de Google Play Developer</strong> (USD $25,
            pago único)
          </li>
          <li>
            <strong>Invitar a Saru Apps</strong> a ambas cuentas
          </li>
          <li>
            <strong>Saru Apps compila y publica</strong> tu app en ambas tiendas
          </li>
        </ol>
        <p>
          Una vez completados estos pasos, tu app estará disponible para que tus
          clientes la descarguen. A continuación te explicamos cada paso en
          detalle.
        </p>

        {/* ─── D-U-N-S ─── */}
        <h2>Paso 1: Obtener un número D-U-N-S</h2>
        <p>
          El número D-U-N-S (Data Universal Numbering System) es un identificador
          único de 9 dígitos asignado por Dun &amp; Bradstreet que identifica a tu
          empresa. Apple lo requiere para crear una cuenta de desarrollador como
          empresa u organización.
        </p>

        <h3>Cómo verificar si ya tenés uno</h3>
        <ol>
          <li>
            Visitá la herramienta de búsqueda de Apple en{" "}
            <a
              href="https://developer.apple.com/enroll/duns-lookup/"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              developer.apple.com/enroll/duns-lookup
            </a>
          </li>
          <li>Buscá tu organización por nombre</li>
          <li>
            Si tu empresa aparece, recibirás un email de Apple con tu número D-U-N-S
            en minutos
          </li>
        </ol>

        <h3>Cómo solicitar uno nuevo (gratis)</h3>
        <p>
          Si tu organización no aparece en la búsqueda, podés solicitar un número
          D-U-N-S de forma gratuita:
        </p>
        <ol>
          <li>Completá el formulario con la información de tu empresa</li>
          <li>
            Proporcioná: nombre legal de la entidad, dirección, información de
            contacto
          </li>
          <li>
            Un representante de Dun &amp; Bradstreet puede contactarte para
            verificar datos adicionales (tipo de negocio, cantidad de empleados)
          </li>
          <li>Tené a mano tus documentos de registro comercial</li>
        </ol>
        <p className="callout">
          <strong>Importante:</strong> si tu negocio opera como persona física o
          autónomo, es posible que necesites registrarte como entidad jurídica antes
          de inscribirte en el programa de Apple Developer.
        </p>

        {/* ─── Apple Developer ─── */}
        <h2>Paso 2: Crear tu cuenta de Apple Developer</h2>
        <p>
          La cuenta de Apple Developer te permite publicar apps en el App Store.
          Tiene un costo anual de USD $99 con renovación automática.
        </p>

        <h3>Requisitos previos</h3>
        <ul>
          <li>Número D-U-N-S activo (ver paso anterior)</li>
          <li>Apple ID (podés crear uno gratis en apple.com)</li>
          <li>
            Email de trabajo que coincida con el dominio de tu sitio web (ej:
            nombre@tutienda.com)
          </li>
        </ul>

        <h3>Proceso paso a paso</h3>
        <ol>
          <li>
            Ingresá a{" "}
            <a
              href="https://developer.apple.com/programs/enroll/"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              developer.apple.com/programs/enroll
            </a>
          </li>
          <li>Hacé clic en &quot;Start your enrollment&quot;</li>
          <li>
            Si te lo solicita, seleccioná &quot;Continue enrollment on the
            web&quot;
          </li>
          <li>
            Elegí <strong>Company / Organization</strong> como tipo de cuenta
          </li>
          <li>Ingresá el nombre legal de tu empresa y tu número D-U-N-S</li>
          <li>
            Completá la información que se carga automáticamente de tu perfil
            D&amp;B: sitio web, teléfono, y confirmación de autoridad para firmar
          </li>
          <li>
            Apple verificará tu identidad en 24-48 horas por teléfono o email
          </li>
          <li>
            Una vez verificado, Apple te enviará las instrucciones de pago (USD
            $99) a tu dashboard de Apple Developer
          </li>
          <li>
            Realizá el pago. El procesamiento puede tardar hasta 24 horas
          </li>
        </ol>

        {/* ─── Google Play ─── */}
        <h2>Paso 3: Crear tu cuenta de Google Play Developer</h2>
        <p>
          La cuenta de Google Play Console te permite publicar apps en Google Play.
          Tiene un costo único de USD $25.
        </p>

        <h3>Requisitos previos</h3>
        <ul>
          <li>Cuenta de Gmail (podés crear una gratis)</li>
          <li>Verificación en 2 pasos activada en tu cuenta de Google</li>
          <li>Número D-U-N-S de tu empresa</li>
        </ul>

        <h3>Proceso paso a paso</h3>
        <ol>
          <li>
            Ingresá a{" "}
            <a
              href="https://play.google.com/console/signup"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              play.google.com/console/signup
            </a>
          </li>
          <li>Iniciá sesión con tu cuenta de Gmail</li>
          <li>
            Seleccioná <strong>Empresa / Organización</strong> como tipo de cuenta
          </li>
          <li>Ingresá el nombre de tu empresa como nombre de desarrollador</li>
          <li>Creá un perfil de pagos y completá los datos de tu organización</li>
          <li>
            Proporcioná la información de D-U-N-S, tamaño de la organización,
            teléfono y sitio web
          </li>
          <li>
            Ingresá los datos de contacto del desarrollador (esta información será
            pública en Google Play)
          </li>
          <li>
            En la pregunta sobre apps pagas, seleccioná <strong>No</strong> (Saru
            Apps no soporta apps pagas, tu app será gratuita y monetizás con tus
            productos)
          </li>
          <li>Aceptá los términos y condiciones</li>
          <li>Realizá el pago de USD $25</li>
          <li>
            Una vez dentro de la consola, creá tu app: ingresá el nombre,
            seleccioná tipo &quot;App&quot; (no &quot;Juego&quot;), elegí precio
            &quot;Gratis&quot; y confirmá las declaraciones
          </li>
        </ol>
        <p className="callout">
          <strong>Nota:</strong> Google puede solicitar verificación adicional de
          tu identidad. Revisá tu email regularmente después de crear la cuenta.
        </p>

        {/* ─── Invitar a Saru Apps ─── */}
        <h2>Paso 4: Invitar a Saru Apps a tus cuentas</h2>
        <p>
          Una vez que tengas ambas cuentas creadas y verificadas, necesitás
          invitarnos para que podamos compilar y publicar tu app. El proceso es
          simple y tarda menos de 5 minutos.
        </p>

        <h3>Invitar a Saru Apps a Apple Developer</h3>
        <ol>
          <li>
            Ingresá a{" "}
            <a
              href="https://appstoreconnect.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              App Store Connect
            </a>
          </li>
          <li>
            Andá a la sección <strong>Usuarios y acceso</strong>
          </li>
          <li>
            Hacé clic en el botón <strong>+</strong> para agregar un nuevo usuario
          </li>
          <li>
            Completá los datos que te enviamos por email al iniciar el proceso de
            publicación (nombre, email y rol)
          </li>
          <li>
            Asigná el rol de <strong>Admin</strong>
          </li>
          <li>
            Hacé clic en <strong>Siguiente</strong> para enviar la invitación
          </li>
        </ol>
        <p className="callout">
          <strong>Importante:</strong> si tu cuenta de Apple Developer está
          registrada como &quot;Individual / Sole Proprietor&quot;, necesitás
          convertirla a &quot;Company / Organization&quot; para poder invitar
          usuarios.
        </p>

        <h3>Invitar a Saru Apps a Google Play Console</h3>
        <ol>
          <li>
            Ingresá a{" "}
            <a
              href="https://play.google.com/console"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              Google Play Console
            </a>
          </li>
          <li>
            En el menú lateral, andá a{" "}
            <strong>Usuarios y permisos</strong>
          </li>
          <li>
            Hacé clic en el ícono de tres puntos y seleccioná{" "}
            <strong>Invitar nuevos usuarios</strong>
          </li>
          <li>
            Ingresá el email que te proporcionamos al iniciar el proceso de
            publicación
          </li>
          <li>
            Desplazate hacia abajo, hacé clic en <strong>Agregar app</strong>,
            seleccioná tu app y aplicá los cambios
          </li>
        </ol>
        <p>
          Podés invitarnos incluso si tu cuenta aún está en proceso de
          verificación por parte de Google.
        </p>

        {/* ─── Qué pasa después ─── */}
        <h2>Paso 5: Nosotros nos encargamos del resto</h2>
        <p>
          Una vez que recibamos acceso a tus cuentas de Apple y Google, nuestro
          equipo se encarga de:
        </p>
        <ul>
          <li>Compilar tu app con tu diseño, branding y configuración</li>
          <li>Preparar las capturas de pantalla y descripción para las tiendas</li>
          <li>Enviar la app a revisión en App Store y Google Play</li>
          <li>Gestionar cualquier feedback o solicitud de cambio de las tiendas</li>
          <li>Notificarte cuando tu app esté publicada y lista para descargar</li>
        </ul>

        <h3>Tiempos estimados de publicación</h3>
        <table>
          <thead>
            <tr>
              <th>Tienda</th>
              <th>Tiempo de revisión</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Google Play</td>
              <td>Unas pocas horas a 3 días</td>
            </tr>
            <tr>
              <td>App Store</td>
              <td>3 a 7 días hábiles</td>
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
              <td>Pago único</td>
            </tr>
            <tr>
              <td>Número D-U-N-S</td>
              <td>Gratis</td>
              <td>—</td>
            </tr>
          </tbody>
        </table>
        <p>
          Estos costos son de Apple y Google, no de Saru Apps. Son necesarios para
          que tu app se publique en tus propias cuentas de desarrollador, lo que
          significa que vos sos el dueño de tu app y tus descargas.
        </p>
      </>
    ),
  },
  pt: {
    metadata: {
      title: "Publicar o app — Guia Saru Apps",
      description:
        "Guia completo para publicar seu app na App Store e no Google Play. Crie suas contas de desenvolvedor, convide a Saru Apps e nós cuidamos do resto.",
    },
    body: (
      <>
        <h1>Publicar o app</h1>
        <p>
          Para publicar seu app na App Store e no Google Play, você precisa criar
          suas contas de desenvolvedor na Apple e no Google, nos dar acesso e nós
          cuidamos de todo o processo técnico de compilação e publicação.
        </p>

        <h2>Resumo do processo</h2>
        <ol>
          <li>
            <strong>Obter um número D-U-N-S</strong> (se o seu negócio for uma
            empresa/organização)
          </li>
          <li>
            <strong>Criar sua conta Apple Developer</strong> (USD $99/ano)
          </li>
          <li>
            <strong>Criar sua conta Google Play Developer</strong> (USD $25,
            pagamento único)
          </li>
          <li>
            <strong>Convidar a Saru Apps</strong> para as duas contas
          </li>
          <li>
            <strong>A Saru Apps compila e publica</strong> seu app nas duas lojas
          </li>
        </ol>
        <p>
          Depois de concluir esses passos, seu app estará disponível para seus
          clientes baixarem. A seguir explicamos cada passo em
          detalhe.
        </p>

        {/* ─── D-U-N-S ─── */}
        <h2>Passo 1: Obter um número D-U-N-S</h2>
        <p>
          O número D-U-N-S (Data Universal Numbering System) é um identificador
          único de 9 dígitos atribuído pela Dun &amp; Bradstreet que identifica sua
          empresa. A Apple o exige para criar uma conta de desenvolvedor como
          empresa ou organização.
        </p>

        <h3>Como verificar se você já tem um</h3>
        <ol>
          <li>
            Acesse a ferramenta de busca da Apple em{" "}
            <a
              href="https://developer.apple.com/enroll/duns-lookup/"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              developer.apple.com/enroll/duns-lookup
            </a>
          </li>
          <li>Busque sua organização pelo nome</li>
          <li>
            Se sua empresa aparecer, você receberá um e-mail da Apple com seu
            número D-U-N-S em minutos
          </li>
        </ol>

        <h3>Como solicitar um novo (grátis)</h3>
        <p>
          Se sua organização não aparecer na busca, você pode solicitar um número
          D-U-N-S gratuitamente:
        </p>
        <ol>
          <li>Preencha o formulário com as informações da sua empresa</li>
          <li>
            Informe: razão social, endereço e informações de
            contato
          </li>
          <li>
            Um representante da Dun &amp; Bradstreet pode entrar em contato para
            verificar dados adicionais (tipo de negócio, número de funcionários)
          </li>
          <li>Tenha em mãos os documentos de registro da sua empresa</li>
        </ol>
        <p className="callout">
          <strong>Importante:</strong> se o seu negócio opera como pessoa física
          ou autônomo, talvez seja necessário se registrar como pessoa jurídica
          antes de se inscrever no programa Apple Developer.
        </p>

        {/* ─── Apple Developer ─── */}
        <h2>Passo 2: Criar sua conta Apple Developer</h2>
        <p>
          A conta Apple Developer permite publicar apps na App Store.
          Ela tem um custo anual de USD $99 com renovação automática.
        </p>

        <h3>Pré-requisitos</h3>
        <ul>
          <li>Número D-U-N-S ativo (veja o passo anterior)</li>
          <li>Apple ID (você pode criar um grátis em apple.com)</li>
          <li>
            E-mail de trabalho que corresponda ao domínio do seu site (ex.:
            nome@sualoja.com)
          </li>
        </ul>

        <h3>Passo a passo</h3>
        <ol>
          <li>
            Acesse{" "}
            <a
              href="https://developer.apple.com/programs/enroll/"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              developer.apple.com/programs/enroll
            </a>
          </li>
          <li>Clique em &quot;Start your enrollment&quot;</li>
          <li>
            Se for solicitado, selecione &quot;Continue enrollment on the
            web&quot;
          </li>
          <li>
            Escolha <strong>Company / Organization</strong> como tipo de conta
          </li>
          <li>Informe a razão social da sua empresa e seu número D-U-N-S</li>
          <li>
            Complete as informações carregadas automaticamente do seu perfil
            D&amp;B: site, telefone e confirmação de autoridade para assinar
          </li>
          <li>
            A Apple vai verificar sua identidade em 24-48 horas por telefone ou e-mail
          </li>
          <li>
            Depois da verificação, a Apple enviará as instruções de pagamento (USD
            $99) para o seu dashboard do Apple Developer
          </li>
          <li>
            Faça o pagamento. O processamento pode levar até 24 horas
          </li>
        </ol>

        {/* ─── Google Play ─── */}
        <h2>Passo 3: Criar sua conta Google Play Developer</h2>
        <p>
          A conta do Google Play Console permite publicar apps no Google Play.
          Ela tem um custo único de USD $25.
        </p>

        <h3>Pré-requisitos</h3>
        <ul>
          <li>Conta do Gmail (você pode criar uma grátis)</li>
          <li>Verificação em duas etapas ativada na sua conta do Google</li>
          <li>Número D-U-N-S da sua empresa</li>
        </ul>

        <h3>Passo a passo</h3>
        <ol>
          <li>
            Acesse{" "}
            <a
              href="https://play.google.com/console/signup"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              play.google.com/console/signup
            </a>
          </li>
          <li>Faça login com sua conta do Gmail</li>
          <li>
            Selecione <strong>Empresa / Organização</strong> como tipo de conta
          </li>
          <li>Informe o nome da sua empresa como nome de desenvolvedor</li>
          <li>Crie um perfil de pagamentos e preencha os dados da sua organização</li>
          <li>
            Informe os dados de D-U-N-S, tamanho da organização,
            telefone e site
          </li>
          <li>
            Informe os dados de contato do desenvolvedor (essas informações serão
            públicas no Google Play)
          </li>
          <li>
            Na pergunta sobre apps pagos, selecione <strong>Não</strong> (a Saru
            Apps não suporta apps pagos; seu app será gratuito e você monetiza com
            seus produtos)
          </li>
          <li>Aceite os termos e condições</li>
          <li>Faça o pagamento de USD $25</li>
          <li>
            Já dentro do console, crie seu app: informe o nome,
            selecione o tipo &quot;App&quot; (não &quot;Jogo&quot;), escolha o
            preço &quot;Gratuito&quot; e confirme as declarações
          </li>
        </ol>
        <p className="callout">
          <strong>Observação:</strong> o Google pode solicitar uma verificação
          adicional da sua identidade. Confira seu e-mail regularmente depois de
          criar a conta.
        </p>

        {/* ─── Convidar a Saru Apps ─── */}
        <h2>Passo 4: Convidar a Saru Apps para suas contas</h2>
        <p>
          Depois que as duas contas estiverem criadas e verificadas, você precisa
          nos convidar para que possamos compilar e publicar seu app. O processo
          é simples e leva menos de 5 minutos.
        </p>

        <h3>Convidar a Saru Apps no Apple Developer</h3>
        <ol>
          <li>
            Acesse o{" "}
            <a
              href="https://appstoreconnect.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              App Store Connect
            </a>
          </li>
          <li>
            Vá até a seção <strong>Usuários e Acesso</strong>
          </li>
          <li>
            Clique no botão <strong>+</strong> para adicionar um novo usuário
          </li>
          <li>
            Preencha os dados que enviamos por e-mail ao iniciar o processo de
            publicação (nome, e-mail e função)
          </li>
          <li>
            Atribua a função de <strong>Admin</strong>
          </li>
          <li>
            Clique em <strong>Avançar</strong> para enviar o convite
          </li>
        </ol>
        <p className="callout">
          <strong>Importante:</strong> se sua conta Apple Developer estiver
          registrada como &quot;Individual / Sole Proprietor&quot;, você precisa
          convertê-la para &quot;Company / Organization&quot; para poder convidar
          usuários.
        </p>

        <h3>Convidar a Saru Apps no Google Play Console</h3>
        <ol>
          <li>
            Acesse o{" "}
            <a
              href="https://play.google.com/console"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              Google Play Console
            </a>
          </li>
          <li>
            No menu lateral, vá até{" "}
            <strong>Usuários e permissões</strong>
          </li>
          <li>
            Clique no ícone de três pontos e selecione{" "}
            <strong>Convidar novos usuários</strong>
          </li>
          <li>
            Informe o e-mail que fornecemos ao iniciar o processo de
            publicação
          </li>
          <li>
            Role para baixo, clique em <strong>Adicionar app</strong>,
            selecione seu app e aplique as alterações
          </li>
        </ol>
        <p>
          Você pode nos convidar mesmo que sua conta ainda esteja em processo de
          verificação pelo Google.
        </p>

        {/* ─── O que acontece depois ─── */}
        <h2>Passo 5: Nós cuidamos do resto</h2>
        <p>
          Assim que recebermos acesso às suas contas da Apple e do Google, nossa
          equipe cuida de:
        </p>
        <ul>
          <li>Compilar seu app com seu design, branding e configuração</li>
          <li>Preparar as capturas de tela e a descrição para as lojas</li>
          <li>Enviar o app para revisão na App Store e no Google Play</li>
          <li>Gerenciar qualquer feedback ou solicitação de alteração das lojas</li>
          <li>Avisar você quando seu app estiver publicado e pronto para baixar</li>
        </ul>

        <h3>Prazos estimados de publicação</h3>
        <table>
          <thead>
            <tr>
              <th>Loja</th>
              <th>Tempo de revisão</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Google Play</td>
              <td>Algumas horas a 3 dias</td>
            </tr>
            <tr>
              <td>App Store</td>
              <td>3 a 7 dias úteis</td>
            </tr>
          </tbody>
        </table>
        <p>
          Depois de aprovado, seu app aparece imediatamente nas lojas e seus
          clientes podem baixá-lo. Vamos enviar os links de download para
          que você possa compartilhá-los com seu público.
        </p>

        <h2>Resumo de custos</h2>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Custo</th>
              <th>Frequência</th>
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
              <td>Pagamento único</td>
            </tr>
            <tr>
              <td>Número D-U-N-S</td>
              <td>Grátis</td>
              <td>—</td>
            </tr>
          </tbody>
        </table>
        <p>
          Esses custos são da Apple e do Google, não da Saru Apps. Eles são
          necessários para que seu app seja publicado nas suas próprias contas de
          desenvolvedor, o que significa que você é o dono do seu app e dos seus
          downloads.
        </p>
      </>
    ),
  },
};
