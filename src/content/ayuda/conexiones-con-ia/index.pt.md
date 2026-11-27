---
title: Como gerenciar seu app pelo Claude ou pelo ChatGPT
slug: conexiones-con-ia
url: /pt/ayuda/conexiones-con-ia
category: Integrações
summary: Conecte a Saru Apps ao Claude ou ao ChatGPT e gerencie seu app conversando. Pergunte como ele está indo ou peça para agendar uma campanha ou preparar uma página em rascunho. Como conectar, o que ela pode fazer e o que não.
updated: 2026-11-27
---

# Como gerenciar seu app pelo Claude ou pelo ChatGPT

Conecte sua conta da Saru Apps ao Claude ou ao ChatGPT e gerencie seu app conversando. Pergunte como seu app foi nesta semana. Peça para agendar uma campanha para sexta-feira ou para preparar uma página de Black Friday com os produtos em oferta.

**A IA consulta e prepara.** O que não tem volta é você quem faz, pelo painel: enviar uma campanha na hora e publicar uma página.

![Conexões com IA no painel da Saru Apps](img/panel-conexiones-pt.png)

## Resumo

| | Claude | ChatGPT |
|---|---|---|
| Planos | Todos, inclusive o gratuito | Business, Enterprise e Edu. No Pro, só consulta |
| Onde se adiciona | Na web, no app para computador ou no celular | Em chatgpt.com, pelo navegador |
| Quem adiciona | Você. Em uma organização, primeiro quem a administra | No Business, quem administra o espaço de trabalho |

Na Saru Apps não tem custo extra e funciona em todos os planos. Cada ação respeita o que o seu plano inclui.

---

<a id="que-puedes-pedirle"></a>
## O que você pode pedir

**Consultar:**

- Como seu app está indo: vendas, pedidos e visitas dos últimos 7, 30 ou 90 dias, comparados com o período anterior. Também os produtos mais vistos e mais adicionados aos favoritos, e o que mais se busca.
- Suas campanhas, com os resultados, e quantas notificações ainda restam neste mês.
- Quantas pessoas cumprem certas condições, por exemplo, as que não compram há 60 dias. Ela nunca vê quem são.
- Seus produtos, suas categorias, suas páginas, a configuração do app e o programa de pontos.

**Preparar:**

- **Agendar uma campanha** para todas as pessoas que têm seu app ou, no plano Scale, para um segmento. Sempre com pelo menos 10 minutos de antecedência. Também pode alterá-la ou cancelá-la se faltarem mais de 10 minutos para o envio.
- **Enviar um teste** para o seu celular. Ele chega só para você e para a sua equipe, nunca para os seus clientes.
- **Criar uma página em rascunho**, por exemplo uma página inicial para uma data especial. Ela te dá um link para ver a página no celular. Também pode alterar os rascunhos dela.
- **Alterar a configuração do app**: ativar ou desativar funções, como a barra de frete grátis ou a verificação de idade, e o banner de download da sua loja.

> **Experimente pedir:** "Como meu app foi nesta semana comparado com a anterior?" · "Agende uma campanha para sexta às 19h com o cupom VOLTA15" · "Monte uma página inicial de Black Friday com os produtos em oferta"

<a id="que-no-hace"></a>
## O que a IA não faz

- **Não envia campanhas na hora.** Ela agenda com pelo menos 10 minutos de antecedência. Até o horário do envio, você vê as campanhas em **Notificações** com a etiqueta **Pelo Claude** (ou **Pelo ChatGPT**) e pode alterá-las ou cancelá-las. No horário, elas saem sozinhas, como as que você agenda.
- **Não publica páginas.** O que ela prepara fica em rascunho em **Design**, e seus clientes não veem até você publicar.
- **Não vê os dados pessoais dos seus clientes**: nem nomes, nem e-mails, nem telefones. Ela trabalha com quantidades.
- **Não altera** o design, o desconto exclusivo do app nem o programa de pontos. Isso se faz no painel.

---

<a id="claude"></a>
## Como conectar o Claude

Funciona em todos os planos do Claude. No plano gratuito, o Claude permite um só conector personalizado.

1. No Claude (na web, no app para computador ou no celular), abra **Personalizar › Conectores**, toque em **+ Adicionar** e escolha **Adicionar conector personalizado**.
2. Dê o nome **Saru Apps** e cole este endereço: `https://api.saruapps.com/mcp`. Você também pode copiá-lo no painel, em **Integrações › Conexões com IA**.
3. Toque em **Conectar**. A Saru Apps vai abrir: entre com seu usuário se ela pedir, revise o que a IA vai poder fazer e toque em **Permitir**.

![A tela para permitir a conexão](img/permitir-pt.png)

Pronto: nas suas conversas, o Claude usa a Saru Apps quando você pergunta sobre o seu app. Na configuração do conector, o Claude deixa você escolher para cada ação se ele a faz sem perguntar, se pede aprovação antes ou se não a usa.

> **Se você usa o Claude em uma organização** (planos Team ou Enterprise), quem a administra adiciona o conector para todos e depois cada pessoa conecta a própria conta.

<a id="chatgpt"></a>
## Como conectar o ChatGPT

Segundo a ajuda do ChatGPT, os planos **Business**, **Enterprise** e **Edu** podem adicionar conectores próprios com todas as ações. No **Pro**, o ChatGPT só pode consultar: não agenda campanhas nem prepara páginas. O conector é adicionado em chatgpt.com, pelo navegador. No Business, só quem administra o espaço de trabalho pode adicioná-lo.

1. Em chatgpt.com, abra **Plugins**, toque em **+** e escolha **Adicionar servidor MCP personalizado**.
2. Dê o nome **Saru Apps**. Em **Conexão**, cole o endereço `https://api.saruapps.com/mcp`. Se pedir para escolher a autenticação, escolha **OAuth**.
3. Leia o aviso, marque **Entendo e quero continuar** e toque em **Criar como plugin**.
4. O ChatGPT abre a Saru Apps para conectar a sua conta: entre com seu usuário se ela pedir e toque em **Permitir**.

Para usar, em uma conversa nova digite **@** e escolha **Saru Apps**. O ChatGPT usa o plugin só na mensagem em que você o escolhe: se depois pedir outra coisa sobre o seu app, mencione-o de novo.

---

<a id="panel"></a>
## O que você vê no painel

Em **Integrações › Conexões com IA** você vê as IAs que conectou, desde quando, se só consultam ou também preparam, e o que fizeram por último, como "Agendou a campanha Black Friday".

As campanhas e as páginas que uma IA prepara levam o nome dela, por exemplo **Pelo Claude**, em **Notificações** e em **Design**.

Só a pessoa dona da conta pode conectar uma IA e ver as conexões.

<a id="desconectar"></a>
## Como desconectar

Em **Integrações › Conexões com IA**, toque em **Desconectar** ao lado da IA. A partir desse momento, ela deixa de ver e preparar coisas no seu app.

O que ela já preparou fica como está: as campanhas agendadas continuam agendadas e os rascunhos continuam em **Design**. Se não quiser que uma campanha saia, cancele-a em **Notificações**.

Trocar a senha da Saru Apps também desconecta todas as IAs.

---

<a id="preguntas-frecuentes"></a>
## Perguntas frequentes

**Tem algum custo?**
Na Saru Apps não tem custo extra e funciona em todos os planos. O que você paga ao Claude ou ao ChatGPT depende do seu plano com eles. O Claude permite conectar também no plano gratuito.

**Respeita o meu plano da Saru Apps?**
Sim. Cada ação tem os mesmos limites que no painel: as campanhas contam para as notificações do mês, e as campanhas para um segmento são do plano Scale. Se você pedir algo que o seu plano não inclui, a IA avisa.

**A IA vê os dados dos meus clientes?**
Não. Ela vê quantidades, como quantas pessoas, quantos pedidos ou quanto você vendeu, mas nunca nomes, e-mails ou telefones.

**Ela pode enviar uma campanha sem que eu veja?**
Pode agendar, mas nunca enviar na hora. Cada campanha que ela agenda tem pelo menos 10 minutos de antecedência e aparece em **Notificações** com a etiqueta, então você pode alterá-la ou cancelá-la. Se preferir revisar antes, no Claude você pode fazer com que ele peça aprovação antes de agendar.

**Tem algum limite?**
Cada conexão pode fazer até 60 alterações e enviar 10 testes por hora. Se passar 60 dias sem uso, o Claude ou o ChatGPT pedem que você conecte de novo.

**Precisa de ajuda?**
Escreva para [hola@saruapps.com](mailto:hola@saruapps.com) e a gente responde.
