import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import {
  ShoppingCart,
  PackageCheck,
  HandHeart,
  Repeat,
  Badge,
  AlertTriangle,
  Zap,
  Heart,
  Flame,
  Lock,
  ArrowRight,
  ArrowLeft,
  TrendingUp,
  Users,
  BarChart3,
} from "lucide-react";

export const metadata = {
  title: "Engagement y Ventas — Saru Apps",
  description:
    "Herramientas de engagement y conversion para tu app movil: carrito abandonado, back in stock, drops exclusivos, badges, quick add y mas. Converti visitantes en clientes recurrentes.",
};

const tools = [
  {
    icon: ShoppingCart,
    title: "Carrito abandonado",
    description:
      "Notificaciones automaticas cuando un cliente deja productos en el carrito. Recupera ventas que de otra forma se perderian.",
  },
  {
    icon: PackageCheck,
    title: "Back in stock",
    description:
      "Avisa automaticamente a los clientes cuando un producto que les interesaba vuelve a tener stock disponible.",
  },
  {
    icon: HandHeart,
    title: "Bienvenida automatica",
    description:
      "Envia un mensaje de bienvenida personalizado cuando un nuevo usuario instala tu app. Primera impresion perfecta.",
  },
  {
    icon: Repeat,
    title: "Repetir pedido",
    description:
      "Permite a tus clientes repetir un pedido anterior con un solo toque. Ideal para productos de consumo recurrente.",
  },
  {
    icon: Badge,
    title: "Badges de producto",
    description:
      "Etiquetas visuales como 'Nuevo', 'Mas vendido' o 'Edicion limitada' que destacan productos y generan urgencia.",
  },
  {
    icon: AlertTriangle,
    title: "Indicador bajo stock",
    description:
      "Muestra cuando quedan pocas unidades de un producto. Genera urgencia real y acelera la decision de compra.",
  },
  {
    icon: Zap,
    title: "Quick add to cart",
    description:
      "Agrega productos al carrito sin salir del listado. Menos friccion, mas productos por pedido.",
  },
  {
    icon: Heart,
    title: "Wishlist / favoritos",
    description:
      "Tus clientes guardan productos que les interesan y reciben alertas cuando bajan de precio o vuelven a tener stock.",
  },
  {
    icon: Flame,
    title: "Drops exclusivos",
    description:
      "Lanza productos con disponibilidad limitada solo para usuarios de tu app. Genera hype y descargas.",
  },
  {
    icon: Lock,
    title: "Productos exclusivos",
    description:
      "Ofrece productos que solo estan disponibles dentro de tu app. Un incentivo poderoso para instalar y comprar.",
  },
];

const impacts = [
  {
    icon: TrendingUp,
    title: "Mas conversion",
    description:
      "Cada herramienta reduce friccion y genera urgencia. Mas visitantes completan su compra.",
  },
  {
    icon: Users,
    title: "Clientes recurrentes",
    description:
      "Repetir pedido, wishlist y drops exclusivos hacen que tus clientes vuelvan una y otra vez.",
  },
  {
    icon: BarChart3,
    title: "Mayor ticket promedio",
    description:
      "Quick add, badges y bajo stock incentivan a agregar mas productos en cada pedido.",
  },
];

export default function EngagementPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.08),transparent)]" />
        <div className="relative max-w-[1280px] mx-auto px-6 pt-40 pb-24 md:pt-48 md:pb-32">
          <div className="text-center max-w-3xl mx-auto">
            <AnimatedSection>
              <a
                href="/producto"
                className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-600 transition-colors duration-200 mb-6"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Producto
              </a>
            </AnimatedSection>

            <AnimatedSection delay={0.05}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 text-gray-600 text-[13px] font-medium border border-gray-200/60 mb-8">
                Producto
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.08] tracking-[-0.03em] font-bold text-gray-950">
                Converti visitantes
                <br />
                en clientes recurrentes
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="mt-6 md:mt-8 text-base md:text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
                Herramientas de engagement y conversion pensadas para que cada
                visita a tu app se transforme en una venta. Automatizaciones,
                urgencia y exclusividad en un solo lugar.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://app.saruapps.com/register"
                  className="group relative inline-flex items-center gap-2 px-7 py-3.5 bg-gray-950 text-white text-[15px] font-medium rounded-full overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-gray-950/25"
                >
                  <span className="relative z-10">Empezar gratis</span>
                  <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-950 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm text-gray-400 uppercase tracking-widest font-medium">
              Herramientas
            </span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold tracking-tight text-gray-950">
              Todo lo que necesitas para
              <br />
              vender mas desde tu app
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Desde automatizaciones inteligentes hasta herramientas de urgencia
              y exclusividad. Cada una pensada para aumentar tus ventas.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {tools.map((tool, i) => (
              <AnimatedSection key={tool.title} delay={i * 0.06}>
                <div className="group relative h-full bg-white rounded-2xl border border-gray-100 p-6 hover:border-gray-200 hover:shadow-xl hover:shadow-gray-100/80 transition-all duration-500">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gray-950 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                      <tool.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-950 mb-1.5 font-display">
                        {tool.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section (dark bg) */}
      <section className="py-32 bg-gray-950 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-white/[0.015] rounded-full blur-3xl" />
        </div>
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
              Impacto
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight text-white">
              Cada herramienta esta
              <br />
              pensada para vender mas
            </h2>
            <p className="mt-6 text-lg text-white/70">
              No son funciones decorativas. Son herramientas de conversion
              probadas que impactan directamente en tus metricas.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {impacts.map((impact, i) => (
              <AnimatedSection key={impact.title} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6">
                    <impact.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold font-display mb-2">
                    {impact.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {impact.description}
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
            <div className="relative overflow-hidden rounded-3xl bg-gray-950 px-8 py-20 md:px-20 md:py-28">
              <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
              </div>
              <div className="absolute inset-0 opacity-[0.03]">
                <div
                  className="h-full w-full"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
              </div>

              <div className="relative text-center max-w-2xl mx-auto">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-8">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-white">
                  Activa tus herramientas
                  <br />
                  de conversion
                </h2>
                <p className="mt-6 text-lg text-white/70 max-w-lg mx-auto">
                  Crea tu app y empieza a convertir visitantes en clientes
                  recurrentes. Todas las herramientas listas para usar.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="https://app.saruapps.com/register"
                    className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-950 text-base font-medium rounded-full hover:bg-gray-100 transition-all duration-300 hover:shadow-2xl hover:shadow-white/10"
                  >
                    Empezar gratis
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                  <a
                    href="https://calendly.com/saruapps/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 text-white/70 text-base font-medium rounded-full border border-white/20 hover:border-white/40 hover:text-white transition-all duration-300"
                  >
                    Agendar una demo
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </>
  );
}
