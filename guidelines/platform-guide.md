# Saru Apps - Guia Completa de la Plataforma

## Que es Saru Apps

Saru Apps es una plataforma SaaS que permite a comerciantes de Tiendanube crear, personalizar y publicar aplicaciones moviles nativas (iOS y Android) sin programar. La plataforma tiene tres componentes principales:

1. **Panel de administracion** (Dashboard) — donde el comerciante configura y gestiona su app
2. **Backend API** — maneja la logica de negocio, sincronizacion y notificaciones
3. **App movil nativa** (React Native) — app para publicar en App Store y Google Play

---

## Planes y precios

**Todos los planes incluyen la app nativa para iOS y Android**, publicada en App Store y Google Play (en las cuentas del comerciante). La fuente de verdad de planes y features es `src/components/PreciosContent.tsx`.

| Plan | Precio | Que incluye |
|------|--------|-------------|
| **Starter** | USD $49/mes | App nativa iPhone y Android publicada por nosotros, sin la marca Saru Apps, editor de todas las pantallas, sincronización automática con Tiendanube, búsqueda, favoritos, cuenta del cliente con pedidos y seguimiento, cupones, notificaciones automáticas (carrito abandonado, vuelta de stock, estado del pedido, bienvenida), 1.500 notificaciones de campañas/mes, 1 drop activo, banner de descarga y link con QR, analítica de 30 días, soporte por email |
| **Growth** | USD $149/mes | Todo lo de Starter + 10.000 notificaciones de campañas/mes, 3 drops activos, reels de productos (hasta 20 publicados), segundo recordatorio de carrito abandonado, aviso de poco stock, agregar rápido, repetir pedido, indicador de poco stock, recomendados en el carrito, barra de envío gratis, analítica de 90 días con ventas por notificación, soporte por WhatsApp |
| **Scale** | USD $349/mes | Todo lo de Growth + 40.000 notificaciones de campañas/mes, drops ilimitados, reels de productos ilimitados, precios mayoristas (B2B), login obligatorio, soporte prioritario y puesta en marcha |
| **Enterprise** | A medida | Todo lo de Scale + notificaciones a medida, account manager, integraciones a medida |

Facturacion anual con 20% de descuento. La cuenta y el diseno de la app son gratis; el cobro empieza al publicar.

---

## Registro y onboarding

### Paso 1: Crear cuenta

El comerciante se registra en `app.saruapps.com/register` con email, nombre y contrasena. Despues del registro, se redirige al wizard de onboarding.

### Paso 2: Onboarding (4 pasos)

1. **Tu negocio**: Pais, facturacion mensual, pedidos por mes, y si quiere publicar en App Store/Google Play
2. **Objetivos**: Que busca con la app (mas ventas, fidelizar, push, presencia en stores, campanas, imagen de marca)
3. **Plan recomendado**: Basado en las respuestas, el sistema recomienda el plan ideal.
4. **Conectar Tiendanube**: Vincula su tienda de Tiendanube para sincronizar productos automaticamente

---

## Conectar Tiendanube

### Como funciona la conexion

1. El comerciante hace click en "Conectar Tiendanube" (en Integraciones o en el onboarding)
2. Se abre la pagina de autorizacion de Tiendanube donde acepta los permisos
3. Tiendanube redirige de vuelta al dashboard con un codigo de autorizacion
4. El backend intercambia el codigo por un token de acceso
5. Se registran los webhooks automaticamente (para sincronizar productos en tiempo real)
6. Se hace la primera sincronizacion: productos, categorias y paginas
7. Se crean las paginas por defecto (Inicio, Producto, Menu)

### Que se sincroniza

- **Productos**: nombre, descripcion, precio, precio promocional, imagenes, variantes, stock, categorias
- **Categorias**: se crean como secciones en la app
- **Paginas**: paginas estaticas de la tienda (terminos, politicas, etc.)

### Sincronizacion en tiempo real

Cuando el comerciante modifica un producto en Tiendanube (crea, edita o elimina), un webhook notifica automaticamente al backend y se actualiza en la app sin intervencion manual.

---

## Configurar la app

### Branding (Configurar App)

En esta seccion el comerciante define:

- **Nombre de la app**: el nombre que ven los clientes
- **Logo**: imagen PNG o JPG (recomendado 512x512px)
- **Color primario**: se aplica al header, botones principales y tabs
- **Color secundario**: acentos y separadores

Hay una **vista previa en tiempo real** que muestra como se ve la app en un celular.

### Editor de contenido (Diseno)

El editor drag & drop permite disenar las paginas de la app:

**Tipos de pagina:**
- **Inicio**: la pagina principal que ven los clientes al abrir la app
- **Producto**: como se muestra cada producto individual
- **Menu**: el menu de navegacion/cuenta del usuario

**Bloques disponibles:**

| Bloque | Descripcion |
|--------|-------------|
| Banner personalizado | Imagen con link (banners promocionales) |
| Video banner | Banner con video |
| Carrusel de productos | Productos destacados en carrusel horizontal |
| Grilla de productos | Productos en grilla (2 o 3 columnas) |
| Colecciones en circulo | Categorias con imagen circular |
| Carrusel de colecciones | Categorias en carrusel |
| Grilla de colecciones | Categorias en grilla |
| Bloque de texto | Texto libre con formato |
| Espaciador | Espacio en blanco entre bloques |
| Divisor | Linea separadora |
| Cuenta regresiva | Timer para ofertas |
| Barra de anuncio | Texto destacado (ej: "Envio gratis en compras +$10.000") |
| Preguntas frecuentes | Acordeon de FAQ |
| Seccion de menu | Links de navegacion con iconos |

**Bloques de pagina de producto (PDP):**
- Galeria de imagenes
- Info del producto (nombre, precio, precio promo)
- Selector de variantes
- Boton agregar al carrito
- Descripcion
- Filas de informacion (envio, devolucion, etc.)

El comerciante puede arrastrar los bloques para reordenarlos, hacer click en cada uno para editar sus propiedades, y ver la vista previa en tiempo real.

---

## Productos

La seccion de productos muestra todos los productos sincronizados desde Tiendanube:

- Lista con imagenes, precios y stock
- Busqueda y filtro por categoria
- Boton "Sincronizar" para forzar una sincronizacion manual
- Los productos son de solo lectura (se gestionan desde Tiendanube)
- Los productos inactivos en Tiendanube no aparecen en la app

---

## Notificaciones push

### Como funcionan

Las notificaciones push permiten al comerciante comunicarse directamente con los clientes que tienen la app instalada.

### Crear una notificacion

1. Ir a Notificaciones > Crear campana
2. Escribir titulo y mensaje
3. Opcionalmente agregar imagen y deep link (ej: link a un producto especifico)
4. Elegir enviar ahora o programar para mas tarde
5. Ver la vista previa de como se ve en iOS y Android

### Limites por plan

- **Starter**: 1.500 campañas/mes
- **Growth**: 10.000 campañas/mes
- **Scale**: 40.000 campañas/mes
- **Enterprise**: a medida (las notificaciones automáticas no cuentan para el límite)

### Como llegan las notificaciones

- **App nativa (iOS/Android)**: via Firebase Cloud Messaging (FCM)
- Al tocar la notificacion, el cliente es dirigido al contenido relevante (producto, categoria, etc.)

---

## Publicar la app

### Checklist de publicacion (4 pasos)

1. **Conectar Tiendanube** — vincular la tienda para sincronizar productos
2. **Configurar el branding** — nombre, logo y colores
3. **Disenar el contenido** — armar las paginas con el editor
4. **Publicar** — hacer la app accesible para los clientes

### App nativa (todos los planes)

Para publicar en App Store y Google Play, el comerciante necesita:

1. **Crear una cuenta de Google Play Developer** (USD $25, pago unico)
2. **Crear una cuenta de Apple Developer** (USD $99/ano)
3. **Invitar a Saru Apps** como administrador o App Manager en ambas cuentas
4. El equipo de Saru Apps compila y publica la app en las cuentas del comerciante


---

## Panel embebido en Tiendanube

Saru Apps se integra directamente en el panel de administracion de Tiendanube. Cuando un comerciante instala la app desde el App Store de Tiendanube, aparece en el menu lateral de su admin.

Desde ahi puede ver:

- Estado de la app (publicada/borrador)
- Estadisticas rapidas (productos, paginas, notificaciones)
- Accesos directos al editor, configuracion, notificaciones y productos
- Link de la app para compartir
- Boton para abrir el panel completo de Saru Apps

---

## Analitica

El dashboard de analitica muestra:

- **Visitas**: paginas vistas en la app
- **Productos mas vistos**: ranking de productos por visitas
- **Busquedas**: que buscan los clientes en la app
- **Eventos**: agregar al carrito, ver producto, buscar
- **Periodo**: filtro por rango de fechas

---

## App movil nativa (React Native)

La app nativa esta construida con React Native + Expo y ofrece una experiencia completa de tienda:

### Pantallas

- **Inicio**: productos destacados, banners, bloques dinamicos del page builder
- **Categorias**: navegacion por categoria
- **Busqueda**: busqueda en tiempo real con sugerencias
- **Favoritos**: lista de deseos (almacenada localmente)
- **Carrito**: carrito de compras con cantidades y variantes
- **Perfil**: menu de cuenta, pedidos, configuracion
- **Detalle de producto**: galeria, variantes, agregar al carrito

### Checkout

El checkout redirige a la pagina de checkout nativa de Tiendanube. Esto garantiza compatibilidad con todos los medios de pago configurados por el comerciante.

### Theming dinamico

La app carga los colores y branding desde el backend, asi que cada comerciante tiene su app con sus colores y logo.

### Notificaciones push

- Se registra automaticamente para push al abrir la app
- Soporta deep linking: al tocar la notificacion, abre el producto o seccion correspondiente
- Android: Firebase Cloud Messaging (FCM)
- iOS: Apple Push Notification Service (APNs) via FCM

---

## Seguridad y privacidad

### Autenticacion

- Autenticacion basada en JWT (JSON Web Tokens)
- Tokens almacenados en cookies HttpOnly + localStorage
- Contrasenas hasheadas con bcrypt
- Sesiones con expiracion configurable (por defecto 7 dias)

### Proteccion de datos

- **CORS**: solo permite requests desde dominios autorizados
- **Rate limiting**: proteccion contra abuso en endpoints de API y autenticacion
- **HTTPS**: obligatorio para todas las comunicaciones
- **Webhooks de privacidad**: implementados segun requisitos de Tiendanube (store/redact, customers/redact, customers/data_request)

### Cumplimiento GDPR

- Webhook `store/redact`: cuando una tienda desinstala la app, se eliminan todos sus datos
- Webhook `customers/redact`: cuando se solicita la eliminacion de datos de un cliente
- Webhook `customers/data_request`: cuando se solicita una copia de los datos de un cliente

---

## Preguntas frecuentes

### Generales

**Necesito saber programar?**
No. Todo se configura desde el panel de Saru Apps con un editor visual drag & drop.

**Puedo probar antes de pagar?**
Si, podes crear tu cuenta y configurar tu app gratis. Solo necesitas un plan activo para publicarla.

### Tiendanube

**Que pasa si modifico un producto en Tiendanube?**
Los cambios se sincronizan automaticamente en tu app en segundos, gracias a los webhooks.

**Puedo desconectar mi tienda?**
Si, podes desconectar en cualquier momento desde la seccion de Integraciones. Tu app seguira funcionando con los productos ya sincronizados.

**Funciona con cualquier plan de Tiendanube?**
Si, Saru Apps es compatible con todos los planes de Tiendanube.

### Publicacion

**Cuanto tarda en publicarse mi app?**
El proceso de revision en App Store puede tardar 3-7 dias y en Google Play unas horas.

**Puedo despublicar mi app?**
Si, podes despublicar en cualquier momento desde la seccion Publicar.

**Que necesito para publicar en App Store y Google Play?**
Necesitas cualquier plan activo de Saru Apps, una cuenta de Apple Developer ($99/ano) y una cuenta de Google Play Developer ($25 una vez). Nosotros nos encargamos de compilar y subir la app a tus cuentas.

### Notificaciones

**Como reciben las notificaciones mis clientes?**
Los clientes que instalen tu app reciben notificaciones push automaticamente cuando las envias desde el panel.

**Puedo programar notificaciones?**
Si, podes programar notificaciones para que se envien en una fecha y hora especifica.

**Que es un deep link?**
Es un link especial que lleva al cliente directamente a un producto, categoria o seccion especifica dentro de tu app cuando toca la notificacion.

### Cuenta y facturacion

**Puedo cambiar de plan?**
Si, podes cambiar de plan en cualquier momento desde la seccion Plan en el dashboard.

**Como cancelo mi suscripcion?**
Contactanos a ventas@saruapps.com para gestionar la cancelacion.
