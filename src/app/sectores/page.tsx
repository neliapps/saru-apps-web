import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import {
  TrendingUp,
  Heart,
  Bell,
  ArrowRight,
  Shirt,
  Gem,
  Sparkles,
  Dumbbell,
  Home,
  UtensilsCrossed,
  Laptop,
  PawPrint,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const metadata = {
  title: "Sectores — Saru Apps",
  description:
    "No importa que vendas, Saru Apps se adapta a tu negocio. Descubri como marcas de cada sector usan una app movil para vender mas en Tiendanube.",
};

const sectors: { icon: LucideIcon; name: string; description: string }[] = [
  {
    icon: Shirt,
    name: "Moda e Indumentaria",
    description:
      "Lookbooks, drops exclusivos y notificaciones de nueva temporada para tus clientes mas fieles.",
  },
  {
    icon: Gem,
    name: "Accesorios y Joyeria",
    description:
      "Catalogo visual premium y herramientas de engagement para compras recurrentes.",
  },
  {
    icon: Sparkles,
    name: "Belleza y Cosmetica",
    description:
      "Rutinas personalizadas, reposicion automatica y ofertas flash directo al celular.",
  },
  {
    icon: Dumbbell,
    name: "Deportes y Fitness",
    description:
      "Lanzamientos de edicion limitada y comunidad activa con notificaciones push.",
  },
  {
    icon: Home,
    name: "Hogar y Decoracion",
    description:
      "Inspiracion visual, colecciones por ambiente y recordatorios de restock.",
  },
  {
    icon: UtensilsCrossed,
    name: "Alimentos y Bebidas",
    description:
      "Pedidos recurrentes, suscripciones y promociones por temporada.",
  },
  {
    icon: Laptop,
    name: "Electronica",
    description:
      "Comparativas de productos, alertas de precio y soporte post-venta.",
  },
  {
    icon: PawPrint,
    name: "Mascotas",
    description:
      "Recordatorios de compra, suscripciones de alimento y tips de cuidado.",
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Mas ventas recurrentes",
    description:
      "Una app en el celular de tu cliente es un canal de venta 24/7 que no depende de algoritmos ni de la competencia.",
  },
  {
    icon: Heart,
    title: "Mayor fidelizacion",
    description:
      "Herramientas de engagement que incentivan la recompra y aumentan el lifetime value de cada cliente.",
  },
  {
    icon: Bell,
    title: "Comunicacion directa",
    description:
      "Notificaciones push con hasta 7x mas engagement que el email. Llega a tus clientes al instante.",
  },
];

export default function Sectores() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-6">
            <AnimatedSection className="text-center max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 text-gray-600 text-[13px] font-medium">
                Sectores
              </span>
              <h1 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-950">
                Una app para cada tipo de tienda
              </h1>
              <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto">
                No importa que vendas, Saru Apps se adapta a tu negocio.
                Descubri como marcas de tu sector usan una app para vender mas.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Sectors grid */}
        <section className="pb-32 bg-white">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {sectors.map((sector, i) => (
                <AnimatedSection key={sector.name} delay={i * 0.06}>
                  <div className="group bg-white rounded-2xl border border-gray-100 p-6 hover:border-gray-200 hover:shadow-lg transition-all duration-300 h-full cursor-pointer">
                    <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center mb-5">
                      <sector.icon className="w-6 h-6 text-gray-700" />
                    </div>
                    <h3 className="text-base font-semibold text-gray-950 mb-2">
                      {sector.name}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">
                      {sector.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-gray-500 group-hover:text-gray-950 transition-colors duration-300 cursor-pointer">
                      Conocer mas
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits - dark section */}
        <section className="py-32 bg-gray-950 text-white relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-white/[0.015] rounded-full blur-3xl" />
          </div>

          {/* Grid lines */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />
          </div>

          <div className="relative max-w-[1280px] mx-auto px-6">
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-20">
              <span className="text-sm text-white/60 uppercase tracking-widest font-medium">
                Beneficios
              </span>
              <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold tracking-tight text-white">
                Por que tu tienda necesita una app
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.map((benefit, i) => (
                <AnimatedSection key={benefit.title} delay={i * 0.1}>
                  <div className="rounded-2xl bg-white/[0.04] border border-white/[0.08] p-8 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center mb-6">
                      <benefit.icon className="w-5 h-5 text-white/70" />
                    </div>
                    <h3 className="text-lg font-bold font-display text-white mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 bg-white">
          <div className="max-w-[1280px] mx-auto px-6">
            <AnimatedSection>
              <div className="text-center bg-gray-50 rounded-2xl border border-gray-100 p-10 md:p-20">
                <h2 className="font-display text-2xl md:text-4xl font-bold text-gray-950">
                  Listo para crear la app de tu tienda?
                </h2>
                <p className="mt-4 text-gray-500 max-w-lg mx-auto">
                  Empeza gratis, diseña tu app y publicala cuando estes listo.
                  Sin compromiso, sin tarjeta de credito.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
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
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
