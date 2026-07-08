import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Guia de la Plataforma — Saru Apps",
  description:
    "Todo lo que necesitas saber sobre Saru Apps: como funciona, planes, editor, notificaciones push, publicacion y mas.",
};

const articles = [
  {
    slug: "que-es",
    title: "Que es Saru Apps",
    description: "Conoce la plataforma, sus componentes y como funciona.",
  },
  {
    slug: "planes",
    title: "Planes y precios",
    description: "Compara los planes Starter, Growth, Scale y Enterprise.",
  },
  {
    slug: "registro",
    title: "Registro y onboarding",
    description: "Como crear tu cuenta y completar el proceso de configuracion inicial.",
  },
  {
    slug: "tiendanube",
    title: "Conectar Tiendanube",
    description: "Vincula tu tienda para sincronizar productos automaticamente.",
  },
  {
    slug: "configurar",
    title: "Configurar la app",
    description: "Define el nombre, logo y colores de tu app.",
  },
  {
    slug: "editor",
    title: "Editor de contenido",
    description: "Usa el editor drag & drop para disenar las paginas de tu app.",
  },
  {
    slug: "productos",
    title: "Productos",
    description: "Gestiona y visualiza los productos sincronizados desde Tiendanube.",
  },
  {
    slug: "notificaciones",
    title: "Notificaciones push",
    description: "Envia mensajes directos a los clientes que tienen tu app instalada.",
  },
  {
    slug: "publicar",
    title: "Publicar la app",
    description: "Publica tu PWA o app nativa en App Store y Google Play.",
  },
  {
    slug: "panel",
    title: "Panel en Tiendanube",
    description: "Accede a Saru Apps desde el panel de administracion de Tiendanube.",
  },
  {
    slug: "analitica",
    title: "Analitica",
    description: "Mide visitas, productos mas vistos, busquedas y eventos.",
  },
  {
    slug: "app-nativa",
    title: "App nativa",
    description: "Detalles de la app React Native: pantallas, checkout y theming.",
  },
  {
    slug: "seguridad",
    title: "Seguridad y privacidad",
    description: "Autenticacion, proteccion de datos y cumplimiento GDPR.",
  },
  {
    slug: "faq",
    title: "Preguntas frecuentes",
    description: "Respuestas a las preguntas mas comunes sobre la plataforma.",
  },
];

export default function Guia() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-950 mb-4">
            Guia de la Plataforma
          </h1>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl">
            Todo lo que necesitas saber para crear, personalizar y publicar la
            app movil de tu tienda Tiendanube con Saru Apps.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {articles.map((article) => (
              <a
                key={article.slug}
                href={`/guia/${article.slug}`}
                className="group p-6 rounded-2xl border border-gray-100 bg-white hover:border-gray-200 hover:shadow-sm transition-all duration-200"
              >
                <h2 className="text-base font-semibold text-gray-950 group-hover:text-gray-700 transition-colors mb-1.5">
                  {article.title}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {article.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
