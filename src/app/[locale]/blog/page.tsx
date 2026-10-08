import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import {
  Newspaper,
  BookOpen,
  HelpCircle,
  ArrowRight,
  Mail,
} from "lucide-react";

export const metadata = {
  title: "Blog — Saru Apps",
  description:
    "Articulos, guias y recursos para ayudarte a sacar el maximo provecho de tu app movil para Tiendanube con Saru Apps.",
};

const links = [
  {
    icon: BookOpen,
    title: "Lee nuestra guia de la plataforma",
    description:
      "Todo lo que necesitas saber para crear, personalizar y publicar tu app.",
    href: "/guia",
  },
  {
    icon: HelpCircle,
    title: "Consulta las preguntas frecuentes",
    description:
      "Respuestas a las dudas mas comunes sobre Saru Apps.",
    href: "/faq",
  },
];

export default function Blog() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-6">
            <AnimatedSection className="text-center max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 text-gray-600 text-[13px] font-medium">
                Blog
              </span>
              <h1 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-950">
                Proximamente
              </h1>
              <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto">
                Estamos preparando articulos, guias y recursos para ayudarte a
                sacar el maximo provecho de tu app movil.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Illustration */}
        <section className="pb-16 bg-white">
          <div className="max-w-[1280px] mx-auto px-6">
            <AnimatedSection className="flex justify-center">
              <div className="w-32 h-32 rounded-full bg-gray-100 flex items-center justify-center">
                <Newspaper className="w-14 h-14 text-gray-400" />
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Meanwhile links */}
        <section className="pb-24 bg-white">
          <div className="max-w-xl mx-auto px-6">
            <AnimatedSection>
              <h2 className="text-center font-display text-xl font-semibold text-gray-950 mb-8">
                Mientras tanto
              </h2>
              <div className="space-y-4">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="group flex items-start gap-4 p-5 rounded-2xl border border-gray-100 bg-white hover:border-gray-200 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gray-50 group-hover:bg-gray-950 flex items-center justify-center shrink-0 transition-colors duration-300">
                      <link.icon className="w-[18px] h-[18px] text-gray-500 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[15px] font-semibold text-gray-950 mb-1">
                        {link.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {link.description}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-gray-950 mt-1 shrink-0 transition-all duration-300 group-hover:translate-x-1" />
                  </a>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="pb-32 bg-white">
          <div className="max-w-[1280px] mx-auto px-6">
            <AnimatedSection>
              <div className="text-center bg-gray-50 rounded-2xl border border-gray-100 p-10 md:p-16">
                <div className="w-12 h-12 rounded-xl bg-gray-200/60 flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-5 h-5 text-gray-500" />
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-950">
                  Suscribite para recibir novedades
                </h2>
                <p className="mt-4 text-gray-500 max-w-md mx-auto">
                  Se el primero en enterarte cuando publiquemos nuevos
                  articulos, guias y recursos.
                </p>
                <form
                  action="https://app.saruapps.com/register"
                  className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
                >
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    className="w-full sm:flex-1 px-5 py-3.5 rounded-full border border-gray-200 bg-white text-[15px] text-gray-950 placeholder:text-gray-400 focus:outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-100 transition-all duration-300"
                  />
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gray-950 text-white text-[15px] font-medium rounded-full transition-all duration-300 hover:bg-gray-800 hover:shadow-2xl hover:shadow-gray-950/25"
                  >
                    Suscribirme
                  </button>
                </form>
                <p className="mt-4 text-xs text-gray-400">
                  Sin spam. Podes darte de baja en cualquier momento.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
