import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FAQPageContent } from "@/components/FAQPageContent";

export const metadata = {
  title: "Preguntas Frecuentes — Saru Apps",
  description:
    "Todas las respuestas sobre cómo crear tu app móvil para Tiendanube con Saru Apps. Precios, funcionalidades, soporte y más.",
};

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm text-gray-400 uppercase tracking-widest font-medium">
              Centro de ayuda
            </span>
            <h1 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight text-gray-950">
              Preguntas frecuentes
            </h1>
            <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto">
              Todo lo que necesitás saber sobre Saru Apps. Si no encontrás tu
              respuesta,{" "}
              <a
                href="https://calendly.com/saruapps/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 underline underline-offset-4 hover:text-gray-600 transition-colors"
              >
                agendá una llamada con nosotros
              </a>
              .
            </p>
          </div>

          <FAQPageContent />

          {/* CTA */}
          <div className="mt-20 text-center bg-gray-50 rounded-2xl border border-gray-100 p-10 md:p-14">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-950">
              ¿Listo para crear tu app?
            </h2>
            <p className="mt-4 text-gray-500 max-w-lg mx-auto">
              Empezá gratis, diseñá tu app y publicala cuando estés listo. Sin
              compromiso.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://app.saruapps.com/register"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gray-950 text-white text-[15px] font-medium rounded-full transition-all duration-300 hover:bg-gray-800 hover:shadow-2xl hover:shadow-gray-950/25"
              >
                Empezar gratis
              </a>
              <a
                href="https://calendly.com/saruapps/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-gray-600 text-[15px] font-medium rounded-full border border-gray-200 hover:border-gray-300 hover:text-gray-900 transition-all duration-300"
              >
                Agendar una demo
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
