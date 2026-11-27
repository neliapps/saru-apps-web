---
title: Cómo manejar tu app desde Claude o ChatGPT
slug: conexiones-con-ia
url: /ayuda/conexiones-con-ia
category: Integraciones
summary: Conecta Saru Apps a Claude o a ChatGPT y maneja tu app conversando. Pregúntale cómo le va o pídele que programe una campaña o prepare una página en borrador. Cómo conectarla, qué puede hacer y qué no.
updated: 2026-11-27
---

# Cómo manejar tu app desde Claude o ChatGPT

Conecta tu cuenta de Saru Apps a Claude o a ChatGPT y maneja tu app conversando. Pregúntale cómo le fue a tu app esta semana. Pídele que programe una campaña para el viernes o que te prepare una página de Black Friday con los productos en oferta.

**La IA consulta y prepara.** Lo que no tiene vuelta atrás lo haces tú desde el panel: enviar una campaña al instante y publicar una página.

![Conexiones con IA en el panel de Saru Apps](img/panel-conexiones.png)

## Resumen

| | Claude | ChatGPT |
|---|---|---|
| Planes | Todos, también el gratuito | Business, Enterprise y Edu. En Pro, solo consulta |
| Dónde se agrega | En la web, la app de escritorio o el celular | En chatgpt.com, desde el navegador |
| Quién lo agrega | Tú. En una organización, primero quien la administra | En Business, quien administra el espacio de trabajo |

En Saru Apps no tiene costo extra y funciona en todos los planes. Cada acción respeta lo que incluye tu plan.

---

<a id="que-puedes-pedirle"></a>
## Qué puedes pedirle

**Consultar:**

- Cómo le va a tu app: ventas, pedidos y visitas de los últimos 7, 30 o 90 días, comparados con el período anterior. También los productos más vistos y más agregados a favoritos, y lo que más se busca.
- Tus campañas, con sus resultados, y cuántas notificaciones te quedan este mes.
- Cuántas personas cumplen ciertas condiciones, por ejemplo, las que no compran hace 60 días. Nunca ve quiénes son.
- Tus productos, tus categorías, tus páginas, la configuración de la app y el programa de puntos.

**Preparar:**

- **Programar una campaña** para todas las personas que tienen tu app o, en el plan Scale, para un segmento. Siempre con al menos 10 minutos de margen. También puede cambiarla o cancelarla si faltan más de 10 minutos para el envío.
- **Enviarte una prueba** a tu teléfono. Solo te llega a ti y a tu equipo, nunca a tus clientes.
- **Crear una página en borrador**, por ejemplo una página de inicio para una fecha especial. Te da un link para verla en tu teléfono. También puede cambiar sus borradores.
- **Cambiar la configuración de la app**: activar o desactivar funciones, como la barra de envío gratis o la verificación de edad, y el banner de descarga de tu tienda.

> **Prueba pedirle:** "¿Cómo le fue a mi app esta semana comparada con la anterior?" · "Programa una campaña para el viernes a las 19 con el cupón VUELVE15" · "Prepárame una página de inicio de Black Friday con los productos en oferta"

<a id="que-no-hace"></a>
## Lo que la IA no hace

- **No envía campañas al instante.** Las programa con al menos 10 minutos de margen. Hasta la hora del envío las ves en **Notificaciones** con la etiqueta **Desde Claude** (o **Desde ChatGPT**), y puedes cambiarlas o cancelarlas. A esa hora salen solas, igual que las que programas tú.
- **No publica páginas.** Lo que prepara queda en borrador en **Diseño**, y tus clientes no lo ven hasta que lo publicas tú.
- **No ve los datos personales de tus clientes**: ni nombres, ni emails, ni teléfonos. Trabaja con cantidades.
- **No cambia** el diseño, el descuento exclusivo de la app ni el programa de puntos. Eso se hace en el panel.

---

<a id="claude"></a>
## Cómo conectar Claude

Funciona en todos los planes de Claude. En el plan gratuito, Claude permite un solo conector personalizado.

1. En Claude (en la web, la app de escritorio o el celular), abre **Personalizar › Conectores**, toca **+ Agregar** y elige **Agregar conector personalizado**.
2. Ponle de nombre **Saru Apps** y pega esta dirección: `https://api.saruapps.com/mcp`. También puedes copiarla desde el panel, en **Integraciones › Conexiones con IA**.
3. Toca **Conectar**. Se abre Saru Apps: inicia sesión si te lo pide, revisa lo que va a poder hacer y toca **Permitir**.

![La pantalla para permitir la conexión](img/permitir.png)

Listo: en tus chats, Claude usa Saru Apps cuando le preguntas por tu app. En la configuración del conector, Claude te deja elegir para cada acción si la hace sin preguntarte, si te pide aprobación antes o si no la usa.

> **Si usas Claude en una organización** (planes Team o Enterprise), quien la administra agrega el conector para todos y después cada persona conecta su cuenta.

<a id="chatgpt"></a>
## Cómo conectar ChatGPT

Según la ayuda de ChatGPT, los planes **Business**, **Enterprise** y **Edu** pueden agregar conectores propios con todas sus acciones. En **Pro**, ChatGPT solo puede consultar: no programa campañas ni prepara páginas. El conector se agrega desde chatgpt.com, en el navegador. En Business, solo quien administra el espacio de trabajo puede agregarlo.

1. En chatgpt.com, abre **Complementos**, toca **+** y elige **Agregar servidor MCP personalizado**.
2. Ponle de nombre **Saru Apps**. En **Conexión**, pega la dirección `https://api.saruapps.com/mcp`. Si te pide elegir la autenticación, elige **OAuth**.
3. Lee la advertencia, marca **Entiendo y quiero continuar** y toca **Crear como complemento**.
4. ChatGPT abre Saru Apps para conectar tu cuenta: inicia sesión si te lo pide y toca **Permitir**.

Para usarlo, en un chat nuevo escribe **@** y elige **Saru Apps**. ChatGPT lo usa solo en el mensaje donde lo eliges: si después le pides otra cosa de tu app, vuelve a mencionarlo.

---

<a id="panel"></a>
## Lo que ves en el panel

En **Integraciones › Conexiones con IA** ves las IAs que conectaste, desde cuándo, si solo consultan o también preparan, y lo último que hicieron, como "Programó la campaña Black Friday".

Las campañas y las páginas que prepara una IA llevan su nombre, por ejemplo **Desde Claude**, en **Notificaciones** y en **Diseño**.

Solo la persona dueña de la cuenta puede conectar una IA y ver sus conexiones.

<a id="desconectar"></a>
## Cómo desconectarla

En **Integraciones › Conexiones con IA**, toca **Desconectar** junto a la IA. Desde ese momento deja de ver y preparar cosas en tu app.

Lo que ya preparó queda como está: las campañas programadas siguen programadas y los borradores siguen en **Diseño**. Si no quieres que una campaña salga, cancélala en **Notificaciones**.

Cambiar tu contraseña de Saru Apps también desconecta todas las IAs.

---

<a id="preguntas-frecuentes"></a>
## Preguntas frecuentes

**¿Cuesta algo?**
En Saru Apps no tiene costo extra y funciona en todos los planes. Lo que pagas de Claude o de ChatGPT depende de tu plan con ellos. Claude permite conectarlo también en su plan gratuito.

**¿Respeta mi plan de Saru Apps?**
Sí. Cada acción tiene los mismos límites que en el panel: las campañas cuentan para las notificaciones del mes, y las campañas para un segmento son del plan Scale. Si le pides algo que tu plan no incluye, la IA te lo dice.

**¿La IA ve los datos de mis clientes?**
No. Ve cantidades, como cuántas personas, cuántos pedidos o cuánto vendiste, pero nunca nombres, emails ni teléfonos.

**¿Puede enviar una campaña sin que yo la vea?**
Puede programarla, pero nunca enviarla al instante. Cada campaña que programa tiene al menos 10 minutos de margen y aparece en **Notificaciones** con su etiqueta, así que puedes cambiarla o cancelarla. Si prefieres revisarlas antes, en Claude puedes hacer que te pida aprobación antes de programar.

**¿Tiene algún límite?**
Cada conexión puede hacer hasta 60 cambios y enviar 10 pruebas por hora. Si pasan 60 días sin usarla, Claude o ChatGPT te piden que la conectes de nuevo.

**¿Necesitas ayuda?**
Escríbenos a [hola@saruapps.com](mailto:hola@saruapps.com) y te respondemos.
