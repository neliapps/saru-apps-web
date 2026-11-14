---
title: Cómo publicar tu app en App Store y Google Play
slug: publicar-tu-app
url: /ayuda/publicar-tu-app
category: Publicación
summary: Paso a paso para publicar tu app con tu marca, desde tus propias cuentas de Apple y Google. Qué tienes que hacer tú, qué hacemos nosotros, cuánto cuesta y cuánto tarda.
updated: 2026-11-14
---

# Cómo publicar tu app en App Store y Google Play

Tu app se publica **con tu marca y desde tus propias cuentas** de Apple y Google. Así la app es tuya: aparece a tu nombre en las tiendas, las reseñas y las descargas quedan en tu cuenta, y cumple las reglas de Apple, que no permite que una plataforma publique apps de sus clientes desde una cuenta propia.

Tú creas las cuentas siguiendo esta guía. **La construcción de la app, el envío a las tiendas y la revisión los hacemos nosotros.**

![Página de publicación en el panel de Saru Apps](img/panel-publicar.png)

## Resumen

| Etapa | Quién la hace | Tiempo |
|---|---|---|
| 1. Requisitos: cuentas de Apple, Google y Firebase | Tú, con esta guía | De 2 días a 3 semanas, según tu punto de partida |
| 2. Ficha de la app: nombre, descripción, ícono | Tú, en el panel | 20 minutos |
| 3. Construcción y versión de prueba | Nosotros | 2 a 5 días hábiles |
| 4. Revisión de Apple y Google | Las tiendas (nosotros respondemos) | 1 a 7 días |
| 5. Publicada | | |

### Cuánto cuesta

| Concepto | Costo | A quién se paga |
|---|---|---|
| Cuenta de Apple Developer | USD 99 por año | Apple |
| Cuenta de Google Play | USD 25, una sola vez | Google |
| Número D-U-N-S (solo empresas) | Gratis | Dun & Bradstreet |
| Proyecto de Firebase | Gratis | Google |
| Publicación y actualizaciones | **Sin costo extra** | Incluido en tu plan de Saru Apps |

Puedes hacer los requisitos y la ficha sin pagar nada. El plan de Saru Apps solo se necesita cuando tocas **Construir mi app**.

---

<a id="tipo-de-cuenta"></a>
## Paso 0: Elige a nombre de quién se publica

En el panel, en **Publicar**, lo primero es elegir el tipo de cuenta. Tiene que coincidir con cómo creas las cuentas de Apple y Google.

![Selector de tipo de cuenta](img/panel-tipo-de-cuenta.png)

| | Empresa (recomendado) | Persona física |
|---|---|---|
| Para quién | SRL, SA, SAS, LTDA, SLU u otra sociedad | Monotributistas, autónomos, MEI |
| Nombre que figura como vendedor | El de tu empresa | Tu nombre personal (en App Store) |
| Número D-U-N-S | Sí (gratis) | No |
| Prueba previa en Google | No | Sí: 12 personas durante 14 días |
| Tiempo total estimado | 1 a 2 semanas, si ya tienes el D-U-N-S | 3 a 4 semanas |

**¿Cuál me conviene?** Si tienes una sociedad, elige **Empresa**: es más rápido y en las tiendas figura tu empresa. Si facturas como persona física, elige **Persona física**; funciona igual, solo tarda más por la prueba que exige Google.

> Más adelante puedes pasar de persona física a empresa sin perder la app: Apple permite migrar la cuenta y Google permite transferir la app a otra cuenta.

---

<a id="duns"></a>
## Paso 1: Número D-U-N-S (solo empresas)

El D-U-N-S es un número de 9 dígitos que identifica a tu empresa. Apple y Google lo piden para verificar que la empresa existe. **Es gratis.**

1. Entra al [buscador de D-U-N-S de Apple](https://developer.apple.com/enroll/duns-lookup/) e inicia sesión con tu Apple ID (el mismo que vas a usar para la cuenta de desarrollador).
2. Completa los datos de tu empresa tal como figuran en el registro oficial (razón social, dirección, teléfono).
3. **Si tu empresa ya tiene número**, Apple te lo manda por email en minutos.
4. **Si no tiene**, desde el mismo buscador puedes pedirlo. Dun & Bradstreet puede llamarte o escribirte para verificar los datos. Tarda de unos días a un par de semanas.

<!-- CAPTURA PENDIENTE: buscador de D-U-N-S de Apple (developer.apple.com/enroll/duns-lookup) con el formulario de datos de la empresa. Requiere iniciar sesión con un Apple ID. -->

Cuando tengas el número, en el panel activa **Ya tengo el número D-U-N-S**.

**Consejos**
- Usa exactamente la razón social registrada, no el nombre de fantasía.
- Si el buscador no encuentra tu empresa, revisa que la dirección coincida con la del registro antes de pedir un número nuevo.

---

<a id="apple-developer"></a>
## Paso 2: Cuenta de Apple Developer

Cuesta **USD 99 por año**. Necesitas un Apple ID con verificación en dos pasos activada.

### 2.1 Crea la cuenta

1. Entra a [developer.apple.com/programs/enroll](https://developer.apple.com/programs/enroll/) y toca **Start your enrollment**.
2. Inicia sesión con tu Apple ID. Te recomendamos usar un Apple ID de la empresa (por ejemplo, con el email de tu tienda), no uno personal que use otra persona.
3. Elige el tipo de entidad:
   - **Empresa**: *Company / Organization*. Te pide razón social, número D-U-N-S, sitio web y un email del mismo dominio que tu sitio (por ejemplo, `hola@mitienda.com` si tu sitio es `mitienda.com`). Tienes que ser el titular o tener poder para firmar en nombre de la empresa.
   - **Persona física**: *Individual / Sole Proprietor*. Te pide tus datos personales y puede pedirte una foto de tu documento. **Importante:** el nombre y apellido de tu Apple ID tienen que ser tu nombre legal, tal como figura en tu documento. Si usas un apodo o el nombre de tu tienda, Apple demora la aprobación.
4. Envía la solicitud. Apple la revisa en **24 a 48 horas** (a veces te llaman por teléfono).
5. Cuando te llegue el email de aprobación, paga los USD 99 desde tu cuenta.

![Inscripción en el Apple Developer Program](img/apple-enroll.png)

<a id="clave-api-apple"></a>
### 2.2 Crea la clave de la API (para que podamos publicar)

Con esta clave podemos construir y enviar tu app **sin que compartas tu contraseña**. Puedes revocarla cuando quieras.

1. Entra a [App Store Connect](https://appstoreconnect.apple.com/) → **Usuarios y acceso** → pestaña **Integraciones** → **App Store Connect API**.
2. La primera vez tienes que tocar **Solicitar acceso** y aceptar los términos. Solo lo puede hacer el titular de la cuenta. Apple suele aprobarlo al momento.
3. En **Claves de equipo**, toca **+** (Generar clave de API).
4. Nombre: `Saru Apps`. Acceso: **Admin**. Toca **Generar**.
   - Tiene que ser una **clave de equipo** con acceso **Admin**. Las claves "individuales" o con otro acceso no permiten firmar la app.
5. Descarga el archivo **.p8** (se llama `AuthKey_XXXXXXXXXX.p8`). **Apple lo deja descargar una sola vez**: guárdalo en un lugar seguro.
6. Anota el **Issuer ID**, que aparece arriba de la lista de claves, y el **Key ID** de la clave que creaste.

<!-- CAPTURA PENDIENTE: App Store Connect > Usuarios y acceso > Integraciones > App Store Connect API, con el botón "+" y la columna Key ID marcados. Requiere una cuenta de Apple Developer. -->

<a id="clave-notificaciones-apple"></a>
### 2.3 Crea la clave de notificaciones (APNs)

Las notificaciones push en iPhone necesitan una clave aparte.

1. Entra a [Certificates, Identifiers & Profiles → Keys](https://developer.apple.com/account/resources/authkeys/list) y toca **+**.
2. Nombre: `Notificaciones`. Marca **Apple Push Notifications service (APNs)** y toca **Configure**: elige el entorno **Sandbox & Production** y el alcance **Team Scoped (All Topics)**. Guarda.
3. Toca **Continue** → **Register** → **Download**. Otra vez: el .p8 se descarga **una sola vez**.
4. Anota el **Key ID** de esta clave.

<!-- CAPTURA PENDIENTE: developer.apple.com > Certificates, Identifiers & Profiles > Keys > Register a New Key, con "Apple Push Notifications service (APNs)" marcado. Requiere una cuenta de Apple Developer. -->

### 2.4 Carga los datos en el panel

1. Busca tu **Team ID** en [developer.apple.com/account](https://developer.apple.com/account) → **Membership details** (son 10 caracteres).
2. En el panel, en **Publicar → Requisitos → Cuenta de Apple Developer**, completa Team ID, Issuer ID y los dos Key ID, y sube los dos archivos .p8. Si los archivos conservan el nombre original (`AuthKey_XXXXXXXXXX.p8`), el Key ID se completa solo.
3. Toca **Verificar con Apple**. Probamos la clave con Apple en el momento y te decimos si falta algo.

![Formulario de claves de Apple en el panel](img/panel-apple.png)

**Si la verificación falla**

| Mensaje | Qué hacer |
|---|---|
| "Apple rechazó la clave" | Revisa el Issuer ID y que el archivo .p8 corresponda al Key ID que escribiste. |
| "La clave no tiene acceso Admin" | Crea otra clave de equipo, esta vez con acceso **Admin**, y súbela. |
| "Subiste la misma clave dos veces" | La de notificaciones es otra clave, creada en *Certificates, Identifiers & Profiles → Keys* (paso 2.3). |

Guardamos las claves **cifradas** y solo las usamos para construir, firmar y enviar tu app.

---

<a id="google-play"></a>
## Paso 3: Cuenta de Google Play

Cuesta **USD 25, una sola vez**.

### 3.1 Crea la cuenta

1. Entra a [play.google.com/console/signup](https://play.google.com/console/signup) con la cuenta de Google que va a ser dueña de la app. Te recomendamos una cuenta de la empresa, no una personal.
2. Elige el tipo de cuenta:
   - **Empresa**: *Una organización o empresa*. Te pide el D-U-N-S, el sitio web y los datos de contacto de la empresa.
   - **Persona física**: la opción de cuenta personal. Te pide tus datos personales.
3. Escribe el **nombre de desarrollador**: es el que ven tus clientes en Google Play. Usa el nombre de tu marca.
4. Completa los datos de contacto. El email y el teléfono de desarrollador **son públicos**; los de contacto con Google son privados.
5. Paga los USD 25.
6. Google verifica tu identidad (documento o datos de la empresa). Puede tardar unos días. Las cuentas personales también tienen que confirmar desde la app **Google Play Console** que tienen acceso a un teléfono Android.

<!-- CAPTURA PENDIENTE: Google Play Console > registro > elección entre la cuenta personal y "Una organización o empresa". Requiere iniciar sesión con una cuenta de Google. -->

### 3.2 Invítanos a tu cuenta

No hace falta que crees la app en Play Console: la creamos nosotros.

1. En Play Console, entra a **Usuarios y permisos** → **Invitar usuarios nuevos**.
2. Escribe el email de **nuestro equipo**. Lo ves en el panel, con un botón para copiarlo.
3. En **Permisos de la cuenta**, marca **Administrador**.
4. Toca **Invitar usuario**.
5. Repite lo mismo con el email de **publicación automática**, que también figura en el panel.

![Emails para invitar en Google Play](img/panel-google.png)

<!-- CAPTURA PENDIENTE: Play Console > Usuarios y permisos > Invitar usuarios nuevos, con el campo de email y el permiso "Administrador". Requiere una cuenta de Google Play. -->

En el panel, activa **Ya creé la cuenta e invité a los dos emails**. Verificamos el acceso cuando subimos la primera versión.

<a id="prueba-cerrada-google"></a>
### 3.3 Solo personas físicas: la prueba cerrada de 14 días

Google exige que las **cuentas personales nuevas** prueben la app antes de publicarla: **al menos 12 personas** tienen que tenerla instalada durante **14 días seguidos**.

Cómo lo hacemos:

1. Cuando la versión de prueba está lista, te damos un **link de invitación** en el panel.
2. Compártelo con clientes, amigos o familia. Cada persona entra con su cuenta de Google, acepta la invitación y descarga la app desde Google Play.
3. Después de los 14 días, pedimos a Google el acceso a producción. Google hace algunas preguntas sobre la prueba; las respondemos contigo.

**Consejos**
- Invita a **más de 12 personas** (por ejemplo, 20). Si en algún momento quedan menos de 12, los 14 días vuelven a empezar.
- Preséntalo como una **beta exclusiva**: "prueba nuestra app antes que nadie". A muchos clientes les gusta y te da tus primeros usuarios.

Las cuentas de empresa no tienen este requisito.

---

<a id="firebase"></a>
## Paso 4: Proyecto de Firebase

Firebase es el servicio de Google que usamos para enviar las **notificaciones push** de tu app. **Es gratis.** El proyecto queda a tu nombre.

1. Entra a la [consola de Firebase](https://console.firebase.google.com/) con tu cuenta de Google (puede ser la misma de Google Play).
2. Toca **Crear un proyecto** y ponle el nombre de tu tienda. Google Analytics es opcional: puedes desactivarlo.
3. Cuando el proyecto esté listo, toca el engranaje ⚙ → **Configuración del proyecto** → pestaña **Usuarios y permisos**.
4. Toca **Agregar miembro**, escribe el email de **nuestro equipo** (está en el panel) y elige el rol **Propietario**.
5. Vuelve a la pestaña **General** y copia el **ID del proyecto** (por ejemplo, `mi-tienda-1a2b3`).
6. En el panel, pega el ID en **Proyecto de Firebase** y toca **Guardar**.

![Proyecto de Firebase en el panel](img/panel-firebase.png)

<!-- CAPTURA PENDIENTE: Firebase > Configuración del proyecto > Usuarios y permisos > Agregar miembro, con el rol "Propietario". Requiere iniciar sesión con una cuenta de Google. -->

Nosotros registramos tu app de iPhone y de Android en el proyecto y cargamos la clave de notificaciones de Apple. No tienes que hacer nada más.

---

<a id="ficha"></a>
## Paso 5: La ficha de la app

En **Publicar**, toca la etapa **Ficha de la app** y carga lo que tus clientes ven en las tiendas.

![Ficha de la app en el panel](img/panel-ficha.png)

| Campo | Límite | Consejo |
|---|---|---|
| Nombre | 30 caracteres | El nombre de tu tienda. Es lo que aparece debajo del ícono. |
| Subtítulo (App Store) | 30 caracteres | Qué vendes o qué te diferencia: "Moda urbana con envío gratis". |
| Descripción corta (Google Play) | 80 caracteres | Una frase que invite a descargar. |
| Descripción | 4000 caracteres | Qué vendes y por qué comprar desde la app: novedades primero, ofertas exclusivas, seguimiento de pedidos. Los primeros renglones son los más leídos. |
| Palabras clave (App Store) | 100 caracteres | Separadas por comas y sin espacios: `camisetas,sudaderas,moda,ropa`. No repitas palabras del nombre. |
| Categoría | | Para la mayoría de las tiendas, **Compras**. |
| Ícono | 1024 × 1024 px | Cuadrado, sin transparencias y sin bordes redondeados (cada tienda los redondea). Que se lea bien en tamaño pequeño. |
| Email de soporte | | Las tiendas lo muestran para que tus clientes te escriban. |
| Sitio web | | El de tu tienda. |
| Identificador de la app | | Ver abajo. |

### El identificador de la app

Es un código único que identifica tu app en las tiendas, con el formato de tu dominio al revés: si tu tienda es `mitienda.com.ar`, el identificador es `ar.com.mitienda.app`. Te sugerimos uno a partir de tu dominio.

- Solo letras minúsculas, números y puntos.
- **No se puede cambiar después de publicar.** Revísalo bien.
- Tiene que ser de tu marca.

### Lo que hacemos por ti

- **Política de privacidad**: la generamos según lo que tu app realmente hace y la publicamos en una página pública. Las dos tiendas la exigen.
- **Página para borrar la cuenta**: Google exige un link donde tus clientes puedan pedir que se borre su cuenta. Además, desde la app pueden borrarla en *Perfil → Mi cuenta → Eliminar cuenta*.
- **Formularios de privacidad**: completamos los cuestionarios de datos de Apple ("Privacidad de la app") y de Google ("Seguridad de los datos").
- **Capturas de pantalla**: las sacamos de tu app real en los tamaños que pide cada tienda. Toca **Generar capturas** y, si después cambias el diseño, genéralas de nuevo.
- **Acceso para el revisor**: Apple prueba la app antes de aprobarla. Le damos un usuario de prueba para que pueda iniciar sesión sin esperar el código por email.

---

<a id="enviar"></a>
## Paso 6: Construir tu app

En **Publicar**, toca la etapa **Enviar y probar**: ahí ves si falta algo. Cuando esté todo completo, quedan dos pasos.

![Paso de envío en el panel](img/panel-enviar.png)

<a id="app-store-connect"></a>
### Crea la app en App Store Connect

Apple no permite que una plataforma cree la app por ti, así que este paso lo haces tú. Son dos minutos, y en el panel te mostramos exactamente qué poner:

1. Entra a [App Store Connect → Apps](https://appstoreconnect.apple.com/apps), toca **+** y elige **Nueva app**.
2. **Plataforma**: iOS. **Nombre**: el de tu ficha. **Idioma principal**: Español.
3. **ID de paquete**: elige el identificador de tu app. Ya lo registramos en tu cuenta, así que aparece en la lista. **SKU**: el mismo identificador.
4. **Acceso de usuarios**: Acceso completo. Toca **Crear**.
5. En el panel toca **Ya la creé, verificar**. Comprobamos con Apple que la app exista.

<!-- CAPTURA PENDIENTE: App Store Connect > Apps > Nueva app, con el formulario completo (plataforma, nombre, idioma, ID de paquete, SKU). Requiere una cuenta de Apple Developer. -->

> Si el nombre ya lo usa otra app de la App Store, Apple te pide otro. Puedes agregar una palabra, por ejemplo "Mora Indumentaria Tienda", y usar el mismo nombre en la ficha.

### Toca Construir mi app

Si todavía no tienes un plan activo, en este paso eliges uno. **La publicación no tiene costo extra.**

Desde aquí trabajamos nosotros, y **te avisamos por email en cada paso**.

<a id="version-de-prueba"></a>
## Paso 7: La versión de prueba

En 2 a 5 días hábiles te mandamos la versión de prueba para que la instales en tu teléfono antes de que la vea nadie:

- **iPhone**: instala la app **TestFlight** desde la App Store y abre el link que te aparece en el panel.
- **Android**: abre el link del panel desde tu teléfono, acepta la invitación y descarga la app desde Google Play.

Revísala con calma: tus páginas, productos, carrito y notificaciones. Después, en **Publicar**:

![Versión de prueba lista en el panel](img/panel-estado.png)


- **Aprobar y enviar a revisión**, si está todo bien.
- **Pedir cambios**, si quieres ajustar algo. Cuéntanos qué y te mandamos una nueva versión.

> Los cambios de diseño y páginas que hagas en el panel, y los de productos en Tiendanube, **se ven al instante** en la app, también en la versión de prueba. No hace falta pedir una versión nueva por eso.

<a id="revision"></a>
## Paso 8: Revisión de las tiendas

Enviamos la app a Apple y a Google. En el panel ves el estado de cada tienda.

| Tienda | Tiempo habitual |
|---|---|
| App Store | 1 a 3 días |
| Google Play | De unas horas a 7 días (la primera vez suele tardar más) |

Si una tienda rechaza la app o pide un cambio, **nos ocupamos nosotros** y te contamos el motivo en el panel. Si necesitamos algo de ti (por ejemplo, un dato de la ficha), te escribimos.

Cuando la app se aprueba, el estado pasa a **Publicada** y te llega un email. Desde ese momento tus clientes pueden descargarla.

---

<a id="despues"></a>
## Después de publicar

- **Tus cambios se ven al instante.** Páginas, banners, productos, colores y notificaciones se actualizan en la app sin pasar por las tiendas.
- **Las mejoras de la app las hacemos nosotros.** Cuando sumamos funciones nuevas, actualizamos tu app sin que hagas nada.
- **Renueva tu cuenta de Apple todos los años.** Si la membresía vence, Apple saca la app de la App Store hasta que la renueves. Te recomendamos activar la renovación automática.
- **No revoques las claves de Apple ni borres nuestras invitaciones** en Google Play y Firebase: las necesitamos para actualizar tu app.
- **Cambiar el nombre o el ícono** requiere una versión nueva en las tiendas: escríbenos y la preparamos.

---

<a id="preguntas-frecuentes"></a>
## Preguntas frecuentes

**¿Por qué tengo que crear mis propias cuentas?**
Apple solo acepta apps de tiendas publicadas desde la cuenta del dueño de la marca. Además, así la app es tuya: si algún día dejas Saru Apps, la app, sus reseñas y sus descargas siguen a tu nombre.

**¿Tengo que compartir mi contraseña?**
No. Con Apple usamos una clave de la API que puedes revocar cuando quieras. En Google Play y Firebase nos invitas con tu cuenta, sin compartir contraseñas.

**¿Puedo publicar siendo monotributista o persona física?**
Sí. Elige **Persona física** al empezar. En App Store figura tu nombre personal como vendedor, y Google pide una prueba de 14 días con 12 personas antes de publicar.

**¿Cuánto tarda todo?**
Si ya tienes una empresa con D-U-N-S, entre 1 y 2 semanas desde que creas las cuentas; si tienes que pedir el D-U-N-S, súmale de unos días a un par de semanas. Como persona física, entre 3 y 4 semanas.

**¿Cuánto cuesta?**
USD 99 por año a Apple y USD 25 una sola vez a Google. La publicación no tiene costo extra en Saru Apps: solo necesitas tu plan activo.

**¿Qué pasa si Apple o Google rechazan la app?**
Es común en la primera revisión y lo resolvemos nosotros. Te contamos el motivo en el panel y, si necesitamos algo de ti, te escribimos.

**Ya tengo una app publicada con otra plataforma. ¿Puedo pasarla a Saru Apps?**
Sí, y conservas las descargas y las reseñas. Escríbenos a [hola@saruapps.com](mailto:hola@saruapps.com) antes de empezar y te explicamos los pasos.

**¿Necesito ayuda?**
Escríbenos a [hola@saruapps.com](mailto:hola@saruapps.com) y te respondemos.
