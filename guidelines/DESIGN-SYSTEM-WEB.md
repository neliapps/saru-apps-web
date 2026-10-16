# Rediseño visual de saruapps.com: brief para el agente

> **Tu tarea:** aplicar la nueva identidad visual de Saru Apps a la web de marketing que ya existe
> (`web-saru-apps`: Next 15 + Tailwind v4 + framer-motion). **El contenido y la estructura ya están
> definidos: no los cambies.** Esto es solo una capa de diseño: color, tipografía, fondos, componentes,
> detalles gráficos y movimiento.
>
> **No hagas un rediseño de cero ni un único commit gigante.** Trabajá por etapas (ver §10), con
> commits chicos y verificando en el navegador cada página en desktop (1440px) y mobile (390px).

---

## 0. Qué podés y qué no podés tocar

**No toques:**
- Textos, títulos, orden de las secciones, páginas, rutas, links, precios, formularios, SEO, metadata
  ni la lógica de los componentes.
- El contenido de los diccionarios (`src/dictionaries/es.json` y `pt.json`).

**Sí podés tocar:**
- Estilos, clases de Tailwind, `globals.css`, tokens, wrappers visuales y fondos de sección.
- Elementos decorativos (`aria-hidden`), animaciones e íconos (estilo y uso, no el significado).
- **Marcar una palabra o frase de acento en títulos existentes**, sin cambiar el texto. Ver §3.

Si un cambio visual te obliga a tocar contenido, no lo hagas: dejalo anotado en tu resumen final.

---

## 1. La identidad en una línea

Minimalista y premium: **negro, blanco y un solo azul**. Inter con contraste de pesos e italic,
el producto siempre visible en un iPhone y algunos detalles "hechos a mano" que la alejan del look
genérico de plantilla o de IA.

---

## 2. Color

Completá el sistema de color con estos tokens (el acento `#2F6BFF` ya está aplicado; quedan restos del índigo anterior, como `rgba(120,119,198,…)` en algunos fondos, que hay que reemplazar). En Tailwind v4, en `globals.css`:

```css
@theme inline {
  --font-display: var(--font-inter), "Inter", system-ui, sans-serif;
  --font-body: var(--font-inter), "Inter", system-ui, sans-serif;

  --color-ink: #0A0A0A;          /* negro de marca: fondos oscuros y texto sobre claro */
  --color-paper: #FFFFFF;        /* blanco: fondos claros y texto sobre oscuro */
  --color-paper-2: #F4F5F8;      /* final del degradé de los fondos claros */

  --color-accent: #2F6BFF;       /* azul de acento (familia Tiendanube, más luminoso) */
  --color-accent-dark: #0B46D8;  /* texto azul chico sobre blanco, hover */
  --color-accent-light: #A8C3FF;

  --color-line-dark: rgb(255 255 255 / 0.14);
  --color-line-light: rgb(0 0 0 / 0.12);
  --color-card-dark: rgb(255 255 255 / 0.05);
  --color-card-dark-border: rgb(255 255 255 / 0.12);
  --color-card-light: #F4F4F5;
  --color-card-light-border: rgb(0 0 0 / 0.06);
}
::selection { background: #2F6BFF; color: #fff; }
```

**Reglas:**
- **Texto siempre pleno:** blanco `#FFFFFF` sobre oscuro y negro `#0A0A0A` sobre claro.
  - Eliminá los grises de texto (`text-neutral-500`, `text-gray-*`, `opacity-70` sobre texto, etc.).
  - La jerarquía se arma con tamaño, peso e italic, no con gris.
  - Excepciones: placeholders de inputs y textos legales del footer, que pueden usar 60% de opacidad.
- **Un solo color de acento, en sólido.** Nunca degradados en texto.
- **Sin neón, halos ni glow** alrededor de textos, botones o tarjetas.
- **Un foco de azul por sección:** la palabra acento y el resplandor de fondo, en la misma zona.
  No repartas azul en íconos, bordes y botones a la vez.

---

## 3. Tipografía

**Solo Inter.** Se carga con `next/font/google` en `src/app/[locale]/layout.tsx` (fuente variable,
todos los pesos, normal e italic) y se expone como la variable CSS `--font-inter`:

```ts
const inter = Inter({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-inter", display: "swap" });
```

No agregues otras familias (nada de Satoshi, General Sans ni Montserrat).

| Uso | Estilo | Tamaño | Interlineado | Tracking |
|---|---|---|---|---|
| H1 del hero | 700 | `clamp(44px, 6.5vw, 96px)` | 1.04 | -0.035em |
| H2 de sección | 700 | `clamp(34px, 4.5vw, 64px)` | 1.06 | -0.035em |
| H3 / título de tarjeta | 700 | `clamp(22px, 2.2vw, 30px)` | 1.15 | -0.02em |
| **Acento** | **700 italic + azul** | hereda | hereda | hereda |
| Variante sin color | 700 italic, mismo color del texto | hereda | | |
| Bajada debajo del H1/H2 | **400 italic** | `clamp(18px, 1.6vw, 22px)` | 1.45 | 0 |
| Cuerpo | 400 | 17px | 1.6 | 0 |
| Énfasis en cuerpo | 700 | | | |
| Etiqueta de sección | 600, **sentence case** | 16px | | -0.01em |

**Acento en títulos existentes, sin cambiar el texto:** en cada H1 y H2 envolvé **una** palabra o
frase final, la que tiene la promesa, en `<em className="accent">`:

```css
.accent { font-style: italic; color: var(--color-accent); }
```

Ejemplo: "Tu tienda Tiendanube, *ahora en app nativa*." El acento va como máximo una vez por título y
no en todos los títulos: alterná con títulos sin acento o con la variante italic sin color.

**Prohibido:**
- Eyebrows en mayúsculas con tracking amplio ("FEATURES", "CÓMO FUNCIONA").
  - Si existen como texto, pasalos a sentence case en 600, sin color, sin pill y sin punto delante.
- Titulares con palabra viuda: usá `text-wrap: balance` en h1, h2 y h3, y `text-wrap: pretty` en párrafos.

---

## 4. Fondos y ritmo de secciones

**Las secciones alternan oscuro y claro** a lo largo de cada página. Así la página tiene ritmo y no
queda un bloque blanco infinito. El hero y el CTA final van oscuros, y el resto alterna.

**Sección oscura (`.section-dark`):**
- `#0A0A0A` liso.
- Un **resplandor azul** difuso detrás del elemento protagonista, que suele ser el mockup:

  ```css
  .glow { position:absolute; width:720px; height:720px; border-radius:50%; pointer-events:none;
    background: radial-gradient(circle at 45% 45%, rgb(47 107 255 / .95), transparent 62%),
                radial-gradient(circle at 60% 60%, rgb(11 70 216 / .8), transparent 60%);
    filter: blur(110px); opacity: .4; }
  ```

**Sección clara (`.section-light`):**
- `background: radial-gradient(120% 90% at 50% 0%, #FFFFFF 0%, #F4F5F8 100%)`.
- Lavado azul pálido detrás del protagonista: el mismo `.glow` con `opacity: .25` y colores más
  claros (`rgb(140 175 255 / .7)`).

**Grano de papel en ambas** (le saca el look de pantalla plana):

```css
.grain::after { content:""; position:absolute; inset:0; pointer-events:none; opacity:.07; mix-blend-mode:overlay;
  background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.5  0 0 0 0 0.5  0 0 0 0 0.5  0 0 0 1 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>"); }
.section-light.grain::after { opacity:.12; mix-blend-mode:multiply; }
```

**Prohibido:**
- Cuadrículas, retículas, patrones de puntos o líneas.
- Degradados violeta, cian o arcoíris, "aurora", blobs de colores.
- El efecto de borde giratorio (`@property --angle` / `spin`), si se usa para bordes animados con
  degradado: sacalo.

---

## 5. Componentes: cómo restylear lo que ya existe

**Navbar**
- Fondo del color de la sección de arriba. Con scroll, `backdrop-blur` y borde inferior
  `--color-line-*`, sin sombra.
- Logo: blanco sobre oscuro y negro sobre claro.

**Botones y CTA**
- **El CTA va como texto, no como botón con fondo:** texto en bold 700, del mismo color que el texto
  de la sección, seguido de una flecha →.
- Área clickeable de 44px de alto como mínimo (con padding).
- Hover: la flecha se mueve 4px y aparece un subrayado dibujado a mano (§6) en azul.
- Sin sombras, sin degradados y sin píldoras con fondo de color.
- **Excepción:** en `PreciosContent` y formularios, si hace falta un botón por usabilidad,
  usá uno sólido: negro sobre claro o blanco sobre oscuro, con texto pleno y `rounded-lg` (8px), como
  el resto del sitio. Nunca azul
  degradado.

**Tarjetas** (FeaturesPreview, PreciosContent, FAQPageContent, Integrations)
- Sobre oscuro: `bg-card-dark`, borde `card-dark-border`, `backdrop-blur-xl`,
  `shadow-[inset_0_1px_0_rgba(255,255,255,.18)]` y radio 28 a 32px.
- Sobre claro: `bg-card-light`, borde `card-light-border`, sin sombra y radio 28 a 32px.
- **Íconos (lucide):**
  - **Sacalos de los círculos o cuadrados de color.** Van sueltos, en trazo de 1.75px, 24 a 28px,
    del color del texto.
  - Si una tarjeta no necesita ícono, quitalo. Una grilla de 3 tarjetas con ícono, título y texto
    es el patrón más "IA" que hay.
- Si la grilla de features tiene muchas tarjetas iguales, rompé la monotonía: tamaños distintos
  estilo bento, una tarjeta con mockup y alternancia de fondos.

**FAQ (acordeón):** pregunta en H3 700 y respuesta en cuerpo regular. Divisores `--color-line-*`.
Indicador `+`/`−` del color del texto. Sin rótulos tipo "Respuesta".

**HowItWorks:** número grande en **700 italic azul** (01, 02…), barra de progreso fina segmentada con
el paso activo en azul y título del paso en H3.

**Pricing:** respetá exactamente los textos y precios existentes. Solo restyle:
- tarjetas según el fondo
- el plan destacado se diferencia por fondo invertido (negro sobre una sección clara), nunca con
  borde de degradado ni glow
- checks de lucide sueltos, sin círculo

**CookieBanner:** tarjeta del tema contrario a la página, compacta, con CTA de texto.

**Footer:** oscuro, texto blanco pleno, links en 500, divisores `--color-line-dark` y logo blanco.

---

## 6. El "toque humano": detalles gráficos (`aria-hidden`)

De 1 a 2 por sección, no más. Que señalen algo o muestren producto, no que decoren.

- **Subrayado a mano** bajo la palabra acento del H1, y como hover de los CTA. SVG con un trazo
  irregular azul de 5 a 7px y un segundo trazo más corto debajo:

  ```html
  <svg viewBox="0 0 300 24" preserveAspectRatio="none" class="absolute left-0 -bottom-2 w-full h-4" aria-hidden="true">
    <path d="M2 14 C 80 6, 180 20, 298 9" stroke="#2F6BFF" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M40 20 C 120 16, 200 22, 270 17" stroke="#2F6BFF" stroke-width="4" fill="none" stroke-linecap="round"/>
  </svg>
  ```

- **Círculo a mano** alrededor de una palabra clave: elipse irregular que no cierra perfecto y se pasa un poco.
- **Sticker con cinta:**
  - etiqueta rectangular rotada entre -6° y +6°, texto 700 italic
  - fondo blanco sobre oscuro, negro sobre claro y azul sólido cuando va encima de un mockup
  - tira de "cinta" semitransparente arriba
  - Ejemplos: "Sin tarjeta", "Cero código", "¡Volvió!".
- **Fragmentos de UI real** apoyados sobre el borde de un mockup:
  - switch de iOS verde encendido ("Carrito abandonado")
  - globo rojo de notificación sobre un ícono de app
  - chip blanco con ícono de línea y texto ("1 producto esperando")
  - cursor arrastrando un bloque punteado azul (drag & drop)
  - sobre de email con "99+"
- **Conexión Tiendanube ↔ Saru Apps:** isotipo de Tiendanube, línea punteada curva e isotipo de Saru
  en un cuadrado negro. Va en la sección de integraciones o sincronización.

---

## 7. Mockups de iPhone (el producto es el protagonista)

- Donde haya capturas o mockups, mostralos dentro de un **iPhone dibujado**:
  - marco negro con bisel
  - Dynamic Island y barra de estado
  - radio grande y sombra profunda sobre oscuro, suave sobre claro
- Inclinación permitida entre -6° y +6°. También se pueden superponer dos teléfonos.
- **Pantallas de referencia** (copiá la estructura de `content/templates/components/app-screens.js` e
  `iphone.css`):
  - **Inicio** de "tu tienda": header, banner "Nueva colección", chips y grilla de productos.
  - **Producto**: con "Quedan 2 en tu talle".
  - **Favoritos**.
  - **Mis pedidos**: con "Repetir pedido".
  - **Carrito**: con barra de envío gratis.
  - **Pantalla bloqueada** con notificaciones push estilo iOS.
- La UI interna es blanca y negra, estilo iOS, con productos genéricos y sin marcas reales.
- En mobile el teléfono puede cortarse por abajo con un fade hacia el fondo de la sección.

---

## 8. Movimiento (framer-motion)

- Entrada de secciones: `opacity 0→1`, `y 16→0`, 0.5s, `ease-out`, escalonado de 0.07s entre hijos,
  `once: true`.
- Los subrayados y círculos a mano se dibujan al entrar (`pathLength 0→1`, 0.7s).
- Las notificaciones de los mockups entran deslizando desde arriba, de a una.
- Hover sutil: flechas que se mueven 4px y tarjetas que suben 2px. Sin escalas grandes ni rotaciones.
- Respetá `prefers-reduced-motion` (ya está en `globals.css`).
- Nada de parallax exagerado, partículas, cursores custom ni bordes animados.

---

## 9. Checklist anti look "hecho con IA"

Antes de cerrar, recorré cada página y eliminá:
- [ ] Índigo o violeta, degradados de color, auroras, glow en textos, botones o bordes.
- [ ] Textos grises (salvo legales y placeholders).
- [ ] Eyebrows en mayúsculas con tracking, puntitos delante de etiquetas, pills de sección.
- [ ] Íconos dentro de círculos o cuadrados de color.
- [ ] Grillas monótonas de tarjetas idénticas con ícono, título y texto.
- [ ] Botones-píldora con degradado o sombra de color.
- [ ] Cuadrículas o patrones de fondo.
- [ ] Más de un foco de azul por sección.
- [ ] Emojis decorativos en la UI (en mockups de notificaciones sí).

---

## 10. Cómo trabajar (en este orden)

1. **Leé** `src/app/globals.css`, `layout.tsx` y `src/components/*`.
   - Mirá el commit revertido `fa5a761` para no repetir un rediseño completo que cambie contenido.
2. **Tokens y base:** `@theme`, fuentes (italic y 800), `.accent`, `.section-dark`, `.section-light`,
   `.glow`, `.grain`, selección y scrollbar en negro y azul. Commit.
3. **Componentes compartidos:** Navbar, CTA, Footer, AnimatedSection, CookieBanner. Commit.
4. **Home, sección por sección:** Hero, FeaturesPreview, HowItWorks, Integrations y CTA,
   alternando fondos. Commit por grupo.
5. **Resto de páginas:** producto, precios, sectores, partners, faq, guía y blog, legales.
6. **Detalles humanos y mockups** (§6 y §7) donde sumen: hero, cómo funciona, notificaciones,
   integraciones y CTA final.
7. **Verificación:**
   - `npm run build` sin errores.
   - Revisión visual en 1440px y 390px de cada página, sin desbordes, sin texto gris y con la
     alternancia correcta.
   - Contraste: `#2F6BFF` sobre blanco da ~4.4:1, así que en texto chico sobre blanco usá
     `--color-accent-dark`.
8. **Resumen final:** qué cambiaste por componente, qué dejaste sin tocar y cualquier lugar donde el
   diseño pediría un cambio de contenido (para que lo decida el equipo).

---

## 11. Assets

Están en `repos/Martin/content/brand/`. Copiá a `public/` los que uses.

| Archivo | Uso |
|---|---|
| `logo-white.png` / `logo-black.png` | logo horizontal transparente (blanco sobre oscuro, negro sobre claro) |
| `isotipo-white.png` | isotipo (favicon, ícono de app en mockups) |
| `recursos/tiendanube-isotipo.png`, `tiendanube-logo.svg` | solo para indicar la integración |
| `recursos/mockup-app-3-telefonos.png` | 3 teléfonos con app de tienda, transparente, sin marcas |
| `recursos/productos/*.png` | fotos de producto genéricas para las pantallas de los mockups |
| `../templates/components/app-screens.js`, `iphone.css` | referencia de las pantallas y el iPhone en CSS |
| `../output/d*/01.png` | posts de Instagram: referencia visual del estilo final |
