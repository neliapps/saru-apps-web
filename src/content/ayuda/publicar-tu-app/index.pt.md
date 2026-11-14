---
title: Como publicar seu app na App Store e no Google Play
slug: publicar-tu-app
url: /pt/ayuda/publicar-tu-app
category: Publicação
summary: Passo a passo para publicar seu app com a sua marca, nas suas próprias contas da Apple e do Google. O que você precisa fazer, o que nós fazemos, quanto custa e quanto tempo leva.
updated: 2026-11-14
---

# Como publicar seu app na App Store e no Google Play

Seu app é publicado **com a sua marca e nas suas próprias contas** da Apple e do Google. Assim o app é seu: aparece no seu nome nas lojas, as avaliações e os downloads ficam na sua conta, e ele cumpre as regras da Apple, que não permite que uma plataforma publique apps de clientes em uma conta própria.

Você cria as contas seguindo este guia. **A construção do app, o envio para as lojas e a revisão ficam com a gente.**

![Página de publicação no painel da Saru Apps](img/panel-publicar.png)

## Resumo

| Etapa | Quem faz | Tempo |
|---|---|---|
| 1. Requisitos: contas da Apple, do Google e do Firebase | Você, com este guia | De 2 dias a 3 semanas, dependendo do seu ponto de partida |
| 2. Ficha do app: nome, descrição, ícone | Você, no painel | 20 minutos |
| 3. Construção e versão de teste | Nós | 2 a 5 dias úteis |
| 4. Revisão da Apple e do Google | As lojas (nós respondemos) | 1 a 7 dias |
| 5. Publicado | | |

### Quanto custa

| Item | Custo | A quem se paga |
|---|---|---|
| Conta Apple Developer | USD 99 por ano | Apple |
| Conta do Google Play | USD 25, uma única vez | Google |
| Número D-U-N-S (apenas empresas) | Grátis | Dun & Bradstreet |
| Projeto do Firebase | Grátis | Google |
| Publicação e atualizações | **Sem custo extra** | Incluído no seu plano da Saru Apps |

Você pode completar os requisitos e a ficha sem pagar nada. O plano da Saru Apps só é necessário quando você toca em **Construir meu app**.

---

<a id="tipo-de-cuenta"></a>
## Passo 0: Escolha em nome de quem o app será publicado

No painel, em **Publicar**, a primeira coisa é escolher o tipo de conta. Ele precisa coincidir com a forma como você cria as contas da Apple e do Google.

![Seletor de tipo de conta](img/panel-tipo-de-cuenta.png)

| | Empresa (recomendado) | Pessoa física |
|---|---|---|
| Para quem | LTDA, SLU, SA ou outra sociedade | MEI, autônomos |
| Nome que aparece como vendedor | O da sua empresa | Seu nome pessoal (na App Store) |
| Número D-U-N-S | Sim (grátis) | Não |
| Teste prévio no Google | Não | Sim: 12 pessoas durante 14 dias |
| Tempo total estimado | 1 a 2 semanas, se você já tiver o D-U-N-S | 3 a 4 semanas |

**Qual é melhor para mim?** Se você tem uma sociedade, escolha **Empresa**: é mais rápido e nas lojas aparece a sua empresa. Se você fatura como pessoa física, escolha **Pessoa física**; funciona do mesmo jeito, só demora mais por causa do teste que o Google exige.

> Mais adiante, você pode passar de pessoa física para empresa sem perder o app: a Apple permite migrar a conta e o Google permite transferir o app para outra conta.

---

<a id="duns"></a>
## Passo 1: Número D-U-N-S (apenas empresas)

O D-U-N-S é um número de 9 dígitos que identifica a sua empresa. A Apple e o Google pedem esse número para verificar se a empresa existe. **É grátis.**

1. Acesse a [busca de D-U-N-S da Apple](https://developer.apple.com/enroll/duns-lookup/) e faça login com seu Apple ID (o mesmo que você vai usar para a conta de desenvolvedor).
2. Preencha os dados da sua empresa exatamente como aparecem no registro oficial (razão social, endereço, telefone).
3. **Se a sua empresa já tem número**, a Apple envia para você por e-mail em minutos.
4. **Se não tem**, você pode solicitar na mesma busca. A Dun & Bradstreet pode ligar ou escrever para você para verificar os dados. Leva de alguns dias a umas duas semanas.

<!-- CAPTURA PENDENTE: busca de D-U-N-S da Apple (developer.apple.com/enroll/duns-lookup) com o formulário de dados da empresa. Requer login com um Apple ID. -->

Quando tiver o número, ative **Já tenho o número D-U-N-S** no painel.

**Dicas**
- Use exatamente a razão social registrada, não o nome fantasia.
- Se a busca não encontrar a sua empresa, confira se o endereço coincide com o do registro antes de solicitar um número novo.

---

<a id="apple-developer"></a>
## Passo 2: Conta Apple Developer

Custa **USD 99 por ano**. Você precisa de um Apple ID com a autenticação de dois fatores ativada.

### 2.1 Crie a conta

1. Acesse [developer.apple.com/programs/enroll](https://developer.apple.com/programs/enroll/) e toque em **Start your enrollment**.
2. Faça login com seu Apple ID. Recomendamos usar um Apple ID da empresa (por exemplo, com o e-mail da sua loja), e não um pessoal que outra pessoa usa.
3. Escolha o tipo de entidade:
   - **Empresa**: *Company / Organization*. Pede a razão social, o número D-U-N-S, o site e um e-mail do mesmo domínio do seu site (por exemplo, `contato@minhaloja.com` se o seu site é `minhaloja.com`). Você precisa ser o titular ou ter poderes para assinar em nome da empresa.
   - **Pessoa física**: *Individual / Sole Proprietor*. Pede seus dados pessoais e pode pedir uma foto do seu documento. **Importante:** o nome e o sobrenome do seu Apple ID precisam ser o seu nome legal, exatamente como aparece no seu documento. Se você usar um apelido ou o nome da sua loja, a Apple demora mais para aprovar.
4. Envie a solicitação. A Apple analisa em **24 a 48 horas** (às vezes, ligam para você).
5. Quando chegar o e-mail de aprovação, pague os USD 99 pela sua conta.

![Inscrição no Apple Developer Program](img/apple-enroll.png)

<a id="clave-api-apple"></a>
### 2.2 Crie a chave da API (para podermos publicar)

Com esta chave, podemos construir e enviar seu app **sem que você compartilhe sua senha**. Você pode revogá-la quando quiser.

1. Acesse o [App Store Connect](https://appstoreconnect.apple.com/) → **Usuários e acesso** → aba **Integrações** → **App Store Connect API**.
2. Na primeira vez, você precisa tocar em **Solicitar acesso** e aceitar os termos. Só o titular da conta pode fazer isso. A Apple costuma aprovar na hora.
3. Em **Chaves da equipe**, toque em **+** (Gerar chave de API).
4. Nome: `Saru Apps`. Acesso: **Administrador**. Toque em **Gerar**.
   - Precisa ser uma **chave da equipe** com acesso **Administrador**. As chaves "individuais" ou com outro acesso não permitem assinar o app.
5. Baixe o arquivo **.p8** (ele se chama `AuthKey_XXXXXXXXXX.p8`). **A Apple só deixa baixar uma vez**: guarde-o em um lugar seguro.
6. Anote o **Issuer ID**, que aparece acima da lista de chaves, e o **Key ID** da chave que você criou.

<!-- CAPTURA PENDENTE: App Store Connect > Usuários e acesso > Integrações > App Store Connect API, com o botão "+" e a coluna Key ID destacados. Requer uma conta Apple Developer. -->

<a id="clave-notificaciones-apple"></a>
### 2.3 Crie a chave de notificações (APNs)

As notificações push no iPhone precisam de uma chave separada.

1. Acesse [Certificates, Identifiers & Profiles → Keys](https://developer.apple.com/account/resources/authkeys/list) e toque em **+**.
2. Nome: `Notificacoes`. Marque **Apple Push Notifications service (APNs)** e toque em **Configure**: escolha o ambiente **Sandbox & Production** e o escopo **Team Scoped (All Topics)**. Salve.
3. Toque em **Continue** → **Register** → **Download**. De novo: o .p8 só pode ser baixado **uma vez**.
4. Anote o **Key ID** desta chave.

<!-- CAPTURA PENDENTE: developer.apple.com > Certificates, Identifiers & Profiles > Keys > Register a New Key, com "Apple Push Notifications service (APNs)" marcado. Requer uma conta Apple Developer. -->

### 2.4 Preencha os dados no painel

1. Encontre seu **Team ID** em [developer.apple.com/account](https://developer.apple.com/account) → **Membership details** (são 10 caracteres).
2. No painel, em **Publicar → Requisitos → Conta Apple Developer**, preencha o Team ID, o Issuer ID e os dois Key ID, e envie os dois arquivos .p8. Se os arquivos mantiverem o nome original (`AuthKey_XXXXXXXXXX.p8`), o Key ID é preenchido sozinho.
3. Toque em **Verificar com a Apple**. Testamos a chave com a Apple na hora e avisamos se faltar algo.

![Formulário de chaves da Apple no painel](img/panel-apple.png)

**Se a verificação falhar**

| Mensagem | O que fazer |
|---|---|
| "A Apple recusou a chave" | Confira o Issuer ID e se o arquivo .p8 corresponde ao Key ID que você digitou. |
| "A chave não tem acesso Admin" | Crie outra chave da equipe, desta vez com acesso **Administrador**, e envie. |
| "Você enviou a mesma chave duas vezes" | A de notificações é outra chave, criada em *Certificates, Identifiers & Profiles → Keys* (passo 2.3). |

Guardamos as chaves **criptografadas** e só as usamos para construir, assinar e enviar seu app.

---

<a id="google-play"></a>
## Passo 3: Conta do Google Play

Custa **USD 25, uma única vez**.

### 3.1 Crie a conta

1. Acesse [play.google.com/console/signup](https://play.google.com/console/signup) com a conta Google que vai ser dona do app. Recomendamos uma conta da empresa, e não uma pessoal.
2. Escolha o tipo de conta:
   - **Empresa**: *An organization or business*. Pede o D-U-N-S, o site e os dados de contato da empresa.
   - **Pessoa física**: a opção de conta pessoal. Pede seus dados pessoais.
3. Escreva o **nome do desenvolvedor**: é o que seus clientes veem no Google Play. Use o nome da sua marca.
4. Preencha os dados de contato. O e-mail e o telefone do desenvolvedor **são públicos**; os de contato com o Google são privados.
5. Pague os USD 25.
6. O Google verifica sua identidade (documento ou dados da empresa). Pode levar alguns dias. As contas pessoais também precisam confirmar no app **Google Play Console** que têm acesso a um celular Android.

<!-- CAPTURA PENDENTE: Google Play Console > cadastro > escolha entre a conta pessoal e "An organization or business". Requer login com uma conta Google. -->

### 3.2 Convide a gente para a sua conta

Você não precisa criar o app no Play Console: a gente cria.

1. No Play Console, acesse **Usuários e permissões** → **Convidar novos usuários**.
2. Escreva o e-mail da **nossa equipe**. Ele aparece no painel, com um botão para copiar.
3. Em **Permissões da conta**, marque **Administrador**.
4. Toque em **Convidar usuário**.
5. Repita o mesmo com o e-mail de **publicação automática**, que também aparece no painel.

![E-mails para convidar no Google Play](img/panel-google.png)

<!-- CAPTURA PENDENTE: Play Console > Usuários e permissões > Convidar novos usuários, com o campo de e-mail e a permissão "Administrador". Requer uma conta do Google Play. -->

No painel, ative **Já criei a conta e convidei os dois e-mails**. Verificamos o acesso quando enviamos a primeira versão.

<a id="prueba-cerrada-google"></a>
### 3.3 Apenas pessoas físicas: o teste fechado de 14 dias

O Google exige que as **contas pessoais novas** testem o app antes de publicá-lo: **pelo menos 12 pessoas** precisam ficar com ele instalado durante **14 dias seguidos**.

Como fazemos:

1. Quando a versão de teste estiver pronta, damos a você um **link de convite** no painel.
2. Compartilhe com clientes, amigos ou família. Cada pessoa entra com a própria conta Google, aceita o convite e baixa o app no Google Play.
3. Depois dos 14 dias, pedimos ao Google o acesso à produção. O Google faz algumas perguntas sobre o teste; respondemos junto com você.

**Dicas**
- Convide **mais de 12 pessoas** (por exemplo, 20). Se em algum momento ficarem menos de 12, os 14 dias começam de novo.
- Apresente como um **beta exclusivo**: "teste nosso app antes de todo mundo". Muitos clientes gostam, e isso traz seus primeiros usuários.

As contas de empresa não têm esse requisito.

---

<a id="firebase"></a>
## Passo 4: Projeto do Firebase

O Firebase é o serviço do Google que usamos para enviar as **notificações push** do seu app. **É grátis.** O projeto fica no seu nome.

1. Acesse o [console do Firebase](https://console.firebase.google.com/) com sua conta Google (pode ser a mesma do Google Play).
2. Toque em **Criar um projeto** e dê a ele o nome da sua loja. O Google Analytics é opcional: você pode desativá-lo.
3. Quando o projeto estiver pronto, toque na engrenagem ⚙ → **Configurações do projeto** → aba **Usuários e permissões**.
4. Toque em **Adicionar membro**, escreva o e-mail da **nossa equipe** (está no painel) e escolha o papel **Proprietário**.
5. Volte para a aba **Geral** e copie o **ID do projeto** (por exemplo, `minha-loja-1a2b3`).
6. No painel, cole o ID em **Projeto do Firebase** e toque em **Salvar**.

![Projeto do Firebase no painel](img/panel-firebase.png)

<!-- CAPTURA PENDENTE: Firebase > Configurações do projeto > Usuários e permissões > Adicionar membro, com o papel "Proprietário". Requer login com uma conta Google. -->

Nós registramos seu app de iPhone e de Android no projeto e carregamos a chave de notificações da Apple. Você não precisa fazer mais nada.

---

<a id="ficha"></a>
## Passo 5: A ficha do app

Em **Publicar**, toque na etapa **Ficha do app** e preencha o que seus clientes veem nas lojas.

![Ficha do app no painel](img/panel-ficha.png)

| Campo | Limite | Dica |
|---|---|---|
| Nome | 30 caracteres | O nome da sua loja. É o que aparece embaixo do ícone. |
| Subtítulo (App Store) | 30 caracteres | O que você vende ou o que te diferencia: "Moda urbana com frete grátis". |
| Descrição curta (Google Play) | 80 caracteres | Uma frase que convide a baixar. |
| Descrição | 4000 caracteres | O que você vende e por que comprar pelo app: novidades primeiro, ofertas exclusivas, acompanhamento de pedidos. As primeiras linhas são as mais lidas. |
| Palavras-chave (App Store) | 100 caracteres | Separadas por vírgulas e sem espaços: `camisetas,moletons,moda,roupas`. Não repita palavras do nome. |
| Categoria | | Para a maioria das lojas, **Compras**. |
| Ícone | 1024 × 1024 px | Quadrado, sem transparência e sem cantos arredondados (cada loja arredonda). Que fique legível em tamanho pequeno. |
| E-mail de suporte | | As lojas mostram para que seus clientes possam te escrever. |
| Site | | O da sua loja. |
| Identificador do app | | Veja abaixo. |

### O identificador do app

É um código único que identifica seu app nas lojas, no formato do seu domínio ao contrário: se a sua loja é `minhaloja.com.br`, o identificador é `br.com.minhaloja.app`. Sugerimos um a partir do seu domínio.

- Só letras minúsculas, números e pontos.
- **Não dá para mudar depois de publicar.** Confira com atenção.
- Precisa ser da sua marca.

### O que a gente faz por você

- **Política de privacidade**: geramos com base no que seu app realmente faz e publicamos em uma página pública. As duas lojas exigem.
- **Página para excluir a conta**: o Google exige um link onde seus clientes possam pedir a exclusão da conta. Além disso, eles podem excluí-la pelo app em *Perfil → Minha conta → Excluir conta*.
- **Formulários de privacidade**: preenchemos os questionários de dados da Apple ("Privacidade do app") e do Google ("Segurança dos dados").
- **Capturas de tela**: tiramos do seu app real nos tamanhos que cada loja pede. Toque em **Gerar capturas** e, se depois mudar o design, gere de novo.
- **Acesso para o revisor**: a Apple testa o app antes de aprová-lo. Damos um usuário de teste para que ela possa fazer login sem esperar o código por e-mail.

---

<a id="enviar"></a>
## Passo 6: Construir seu app

Em **Publicar**, toque na etapa **Enviar e testar**: ali você vê se falta algo. Quando estiver tudo completo, faltam dois passos.

![Etapa de envio no painel](img/panel-enviar.png)

<a id="app-store-connect"></a>
### Crie o app no App Store Connect

A Apple não permite que uma plataforma crie o app por você, então você mesmo faz esta etapa. Leva dois minutos, e no painel mostramos exatamente o que preencher:

1. Acesse [App Store Connect → Apps](https://appstoreconnect.apple.com/apps), toque em **+** e escolha **Novo app**.
2. **Plataforma**: iOS. **Nome**: o da sua ficha. **Idioma principal**: Português (Brasil).
3. **ID do pacote**: escolha o identificador do seu app. Nós já o registramos na sua conta, então ele aparece na lista. **SKU**: o mesmo identificador.
4. **Acesso de usuários**: Acesso total. Toque em **Criar**.
5. No painel, toque em **Já criei, verificar**. Confirmamos com a Apple que o app existe.

<!-- CAPTURA PENDENTE: App Store Connect > Apps > Novo app, com o formulário completo (plataforma, nome, idioma, ID do pacote, SKU). Requer uma conta Apple Developer. -->

> Se outro app da App Store já usa esse nome, a Apple pede outro. Você pode adicionar uma palavra, por exemplo "Loja Mora Moda", e usar o mesmo nome na ficha.

### Toque em Construir meu app

Se você ainda não tem um plano ativo, nesta etapa você escolhe um. **A publicação não tem custo extra.**

Daqui em diante, é com a gente, e **avisamos você por e-mail a cada etapa**.

<a id="version-de-prueba"></a>
## Passo 7: A versão de teste

Em 2 a 5 dias úteis, enviamos a versão de teste para você instalar no seu celular antes que qualquer outra pessoa veja:

- **iPhone**: instale o app **TestFlight** pela App Store e abra o link que aparece no painel.
- **Android**: abra o link do painel no seu celular, aceite o convite e baixe o app pelo Google Play.

Revise com calma: suas páginas, produtos, carrinho e notificações. Depois, em **Publicar**:

![Versão de teste pronta no painel](img/panel-estado.png)


- **Aprovar e enviar para revisão**, se estiver tudo certo.
- **Pedir alterações**, se quiser ajustar algo. Conte o que você quer mudar e enviamos uma versão nova.

> As mudanças de design e de páginas que você fizer no painel, e as de produtos na Nuvemshop, **aparecem na hora** no app, inclusive na versão de teste. Não precisa pedir uma versão nova por isso.

<a id="revision"></a>
## Passo 8: Revisão das lojas

Enviamos o app para a Apple e para o Google. No painel, você vê o status de cada loja.

| Loja | Tempo habitual |
|---|---|
| App Store | 1 a 3 dias |
| Google Play | De algumas horas a 7 dias (a primeira vez costuma demorar mais) |

Se uma loja rejeitar o app ou pedir uma alteração, **a gente resolve** e te conta o motivo no painel. Se precisarmos de algo seu (por exemplo, um dado da ficha), escrevemos para você.

Quando o app é aprovado, o status muda para **Publicado** e você recebe um e-mail. A partir daí, seus clientes podem baixá-lo.

---

<a id="despues"></a>
## Depois de publicar

- **Suas mudanças aparecem na hora.** Páginas, banners, produtos, cores e notificações são atualizados no app sem passar pelas lojas.
- **As melhorias do app ficam com a gente.** Quando adicionamos funções novas, atualizamos seu app sem que você precise fazer nada.
- **Renove sua conta da Apple todos os anos.** Se a assinatura vencer, a Apple tira o app da App Store até você renovar. Recomendamos ativar a renovação automática.
- **Não revogue as chaves da Apple nem remova nossos convites** no Google Play e no Firebase: precisamos deles para atualizar seu app.
- **Mudar o nome ou o ícone** exige uma versão nova nas lojas: escreva para a gente e nós preparamos.

---

<a id="preguntas-frecuentes"></a>
## Perguntas frequentes

**Por que tenho que criar minhas próprias contas?**
A Apple só aceita apps de lojas publicados na conta do dono da marca. Além disso, assim o app é seu: se um dia você deixar a Saru Apps, o app, as avaliações e os downloads continuam no seu nome.

**Tenho que compartilhar minha senha?**
Não. Com a Apple, usamos uma chave da API que você pode revogar quando quiser. No Google Play e no Firebase, você convida a gente com a sua conta, sem compartilhar senhas.

**Posso publicar sendo MEI ou pessoa física?**
Sim. Escolha **Pessoa física** ao começar. Na App Store aparece seu nome pessoal como vendedor, e o Google pede um teste de 14 dias com 12 pessoas antes de publicar.

**Quanto tempo leva tudo?**
Se você já tem uma empresa com D-U-N-S, de 1 a 2 semanas a partir da criação das contas; se precisar solicitar o D-U-N-S, some de alguns dias a umas duas semanas. Como pessoa física, de 3 a 4 semanas.

**Quanto custa?**
USD 99 por ano para a Apple e USD 25 uma única vez para o Google. A publicação não tem custo extra na Saru Apps: você só precisa do seu plano ativo.

**O que acontece se a Apple ou o Google rejeitarem o app?**
É comum na primeira revisão, e a gente resolve. Contamos o motivo no painel e, se precisarmos de algo seu, escrevemos para você.

**Já tenho um app publicado com outra plataforma. Posso passá-lo para a Saru Apps?**
Sim, e você mantém os downloads e as avaliações. Escreva para [hola@saruapps.com](mailto:hola@saruapps.com) antes de começar, e explicamos os passos.

**Precisa de ajuda?**
Escreva para [hola@saruapps.com](mailto:hola@saruapps.com) e a gente responde.
