import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const articles = [
  { slug: "que-es", label: "Que es Saru Apps" },
  { slug: "planes", label: "Planes y precios" },
  { slug: "registro", label: "Registro y onboarding" },
  { slug: "tiendanube", label: "Conectar Tiendanube" },
  { slug: "configurar", label: "Configurar la app" },
  { slug: "editor", label: "Editor de contenido" },
  { slug: "productos", label: "Productos" },
  { slug: "notificaciones", label: "Notificaciones push" },
  { slug: "publicar", label: "Publicar la app" },
  { slug: "panel", label: "Panel en Tiendanube" },
  { slug: "analitica", label: "Analitica" },
  { slug: "app-nativa", label: "App nativa" },
  { slug: "seguridad", label: "Seguridad y privacidad" },
  { slug: "faq", label: "Preguntas frecuentes" },
];

export function GuiaArticleLayout({
  children,
  currentSlug,
}: {
  children: React.ReactNode;
  currentSlug: string;
}) {
  const currentIndex = articles.findIndex((a) => a.slug === currentSlug);
  const prev = currentIndex > 0 ? articles[currentIndex - 1] : null;
  const next =
    currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <a
            href="/guia"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-950 transition-colors duration-200 mb-8"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
            Volver a la guia
          </a>

          <div className="prose prose-gray max-w-none [&_h1]:text-3xl [&_h1]:md:text-4xl [&_h1]:font-bold [&_h1]:text-gray-950 [&_h1]:mb-6 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-gray-950 [&_h2]:mt-12 [&_h2]:mb-4 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-gray-900 [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:text-gray-600 [&_p]:text-[15px] [&_p]:leading-relaxed [&_p]:mb-4 [&_li]:text-gray-600 [&_li]:text-[15px] [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-5 [&_table]:w-full [&_table]:text-sm [&_th]:text-left [&_th]:py-3 [&_th]:px-4 [&_th]:bg-gray-50 [&_th]:font-semibold [&_th]:text-gray-900 [&_td]:py-3 [&_td]:px-4 [&_td]:border-b [&_td]:border-gray-100 [&_td]:text-gray-600">
            {children}
          </div>

          {/* Navigation between articles */}
          <div className="mt-16 pt-8 border-t border-gray-100 flex items-center justify-between gap-4">
            {prev ? (
              <a
                href={`/guia/${prev.slug}`}
                className="group flex flex-col items-start"
              >
                <span className="text-xs text-gray-400 mb-1">Anterior</span>
                <span className="text-sm font-medium text-gray-600 group-hover:text-gray-950 transition-colors">
                  {prev.label}
                </span>
              </a>
            ) : (
              <div />
            )}
            {next ? (
              <a
                href={`/guia/${next.slug}`}
                className="group flex flex-col items-end text-right"
              >
                <span className="text-xs text-gray-400 mb-1">Siguiente</span>
                <span className="text-sm font-medium text-gray-600 group-hover:text-gray-950 transition-colors">
                  {next.label}
                </span>
              </a>
            ) : (
              <div />
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
