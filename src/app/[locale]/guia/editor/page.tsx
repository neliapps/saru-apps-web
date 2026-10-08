import { GuiaArticleLayout } from "@/components/GuiaArticleLayout";

export const metadata = {
  title: "Editor de contenido — Guia Saru Apps",
};

const bloques = [
  { nombre: "Banner personalizado", desc: "Imagen con link (banners promocionales)" },
  { nombre: "Video banner", desc: "Banner con video" },
  { nombre: "Carrusel de productos", desc: "Productos destacados en carrusel horizontal" },
  { nombre: "Grilla de productos", desc: "Productos en grilla (2 o 3 columnas)" },
  { nombre: "Colecciones en circulo", desc: "Categorias con imagen circular" },
  { nombre: "Carrusel de colecciones", desc: "Categorias en carrusel" },
  { nombre: "Grilla de colecciones", desc: "Categorias en grilla" },
  { nombre: "Bloque de texto", desc: "Texto libre con formato" },
  { nombre: "Espaciador", desc: "Espacio en blanco entre bloques" },
  { nombre: "Divisor", desc: "Linea separadora" },
  { nombre: "Cuenta regresiva", desc: "Timer para ofertas" },
  { nombre: "Barra de anuncio", desc: 'Texto destacado (ej: "Envio gratis en compras +$10.000")' },
  { nombre: "Preguntas frecuentes", desc: "Acordeon de FAQ" },
  { nombre: "Seccion de menu", desc: "Links de navegacion con iconos" },
];

export default function Page() {
  return (
    <GuiaArticleLayout currentSlug="editor">
      <h1>Editor de contenido</h1>
      <p>El editor drag &amp; drop permite disenar las paginas de la app.</p>

      <h2>Tipos de pagina</h2>
      <ul>
        <li>
          <strong>Inicio:</strong> la pagina principal que ven los clientes al
          abrir la app
        </li>
        <li>
          <strong>Producto:</strong> como se muestra cada producto individual
        </li>
        <li>
          <strong>Menu:</strong> el menu de navegacion/cuenta del usuario
        </li>
      </ul>

      <h2>Bloques disponibles</h2>
      <div className="overflow-x-auto mb-6">
        <table>
          <thead>
            <tr>
              <th>Bloque</th>
              <th>Descripcion</th>
            </tr>
          </thead>
          <tbody>
            {bloques.map((b) => (
              <tr key={b.nombre}>
                <td><strong>{b.nombre}</strong></td>
                <td>{b.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Bloques de pagina de producto (PDP)</h2>
      <ul>
        <li>Galeria de imagenes</li>
        <li>Info del producto (nombre, precio, precio promo)</li>
        <li>Selector de variantes</li>
        <li>Boton agregar al carrito</li>
        <li>Descripcion</li>
        <li>Filas de informacion (envio, devolucion, etc.)</li>
      </ul>
      <p>
        El comerciante puede arrastrar los bloques para reordenarlos, hacer
        click en cada uno para editar sus propiedades, y ver la vista previa en
        tiempo real.
      </p>
    </GuiaArticleLayout>
  );
}
