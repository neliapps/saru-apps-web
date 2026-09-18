import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import {
  BarChart3,
  Users,
  TrendingUp,
  DollarSign,
  Eye,
  Bell,
  ShoppingCart,
  Target,
  Search,
  Route,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Analytics — Saru Apps",
  description:
    "Medi el rendimiento de tu app en tiempo real. Usuarios activos, conversiones, ingresos por push y mas metricas clave para tomar decisiones.",
};

const metrics = [
  {
    icon: Users,
    title: "Usuarios activos",
    description:
      "Cuantos usuarios usan tu app diaria, semanal y mensualmente. Identifica tendencias de crecimiento y retencion.",
  },
  {
    icon: TrendingUp,
    title: "Tasa de conversion",
    description:
      "Que porcentaje de visitas se convierten en compras. Compara con tu web y medi el impacto real de la app.",
  },
  {
    icon: DollarSign,
    title: "Ingresos por canal",
    description:
      "Cuanto factura tu app vs. tu web. Ve el revenue generado por push notifications, engagement y trafico organico.",
  },
  {
    icon: Eye,
    title: "Productos mas vistos",
    description:
      "Cuales son los productos que mas ven tus usuarios en la app. Optimiza tu catalogo con datos reales.",
  },
  {
    icon: Bell,
    title: "Efectividad de push",
    description:
      "Tasa de apertura, clics y conversiones de cada notificacion push. Medi que mensajes funcionan mejor.",
  },
  {
    icon: ShoppingCart,
    title: "Comportamiento de compra",
    description:
      "Frecuencia de compra, ticket promedio, productos por pedido y patron de recompra de tus clientes.",
  },
];

const impactItems = [
  {
    icon: Target,
    title: "Optimiza tus campanas push",
    description:
      "Analiza que horarios, mensajes y segmentos generan mejores resultados. Ajusta tus campanas en base a datos concretos, no suposiciones.",
  },
  {
    icon: Search,
    title: "Identifica tus productos estrella",
    description:
      "Descubri cuales son los productos mas vistos, mas agregados al carrito y mas comprados dentro de la app. Impulsa lo que funciona.",
  },
  {
    icon: Route,
    title: "Entende el recorrido del usuario",
    description:
      "Visualiza como navegan tus clientes dentro de la app. Desde la home hasta el checkout, identifica donde se pierden y donde convierten.",
  },
];

export default function AnalyticsPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.08),transparent)]" />
        <div className="relative max-w-[1280px] mx-auto px-6 pt-40 pb-24 md:pt-48 md:pb-32">
          <div className="text-center max-w-3xl mx-auto">
            <AnimatedSection>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 text-gray-600 text-[13px] font-medium border border-gray-200/60 mb-8">
                <BarChart3 className="w-3.5 h-3.5" />
                Producto
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.08] tracking-[-0.03em] font-bold text-gray-950">
                Decisiones basadas
                <br />
                en datos reales
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="mt-6 md:mt-8 text-base md:text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
                Medi el rendimiento de tu app en tiempo real. Usuarios
                activos, conversiones, ingresos y mas metricas clave para
                tomar mejores decisiones de negocio.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://app.saruapps.com/register"
                  className="group relative inline-flex items-center gap-2 px-7 py-3.5 bg-gray-950 text-white text-[15px] font-medium rounded-full overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-gray-950/25"
                >
                  <span className="relative z-10">Crear mi app gratis</span>
                  <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-950 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </a>
                <a
                  href="https://calendly.com/saruapps/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-gray-600 text-[15px] font-medium rounded-full border border-gray-200 hover:border-gray-300 hover:text-gray-900 transition-all duration-300"
                >
                  Ver como funciona
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Key metrics */}
      <section className="py-32 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-sm text-gray-400 uppercase tracking-widest font-medium">
              Metricas clave
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight text-gray-950">
              Todo lo que necesitas
              <br />
              medir, en un solo lugar
            </h2>
            <p className="mt-6 text-lg text-gray-500">
              Metricas claras, accionables y en tiempo real para entender como
              rinde tu app y donde mejorar.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {metrics.map((metric, i) => (
              <AnimatedSection key={metric.title} delay={i * 0.08}>
                <div className="group relative h-full bg-white rounded-2xl border border-gray-100 p-6 hover:border-gray-200 hover:shadow-xl hover:shadow-gray-100/80 transition-all duration-500">
                  <div className="mb-5">
                    <div className="w-10 h-10 rounded-xl bg-gray-950 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <metric.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-950 mb-2 font-display">
                    {metric.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {metric.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard preview */}
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
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm text-white/60 uppercase tracking-widest font-medium">
              Dashboard
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight text-white">
              Tu panel de analytics
            </h2>
            <p className="mt-6 text-lg text-white/70">
              Un dashboard completo con todas las metricas de tu app,
              actualizado en tiempo real.
            </p>
          </AnimatedSection>

          {/* Dashboard mockup */}
          <AnimatedSection delay={0.15}>
            <div className="max-w-5xl mx-auto rounded-2xl border border-white/10 bg-white/[0.03] p-4 md:p-6">
              {/* Top nav bar */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center">
                    <BarChart3 className="w-4 h-4 text-white/60" />
                  </div>
                  <span className="text-sm font-semibold text-white/80">Analytics</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-white/40 hidden sm:inline">Periodo:</span>
                  <div className="px-3 py-1 rounded-md bg-white/[0.06] border border-white/[0.08] text-[11px] text-white/60">
                    Ultimos 30 dias
                  </div>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {[
                  { label: "Usuarios activos", value: "3,847", change: "+18%", up: true },
                  { label: "Conversion", value: "4.2%", change: "+0.8%", up: true },
                  { label: "Ingresos app", value: "$142,500", change: "+32%", up: true },
                  { label: "Ticket promedio", value: "$8,420", change: "+5%", up: true },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl bg-white/[0.04] border border-white/[0.06] p-4"
                  >
                    <p className="text-[10px] text-white/40 uppercase tracking-wider font-medium">
                      {stat.label}
                    </p>
                    <p className="text-xl md:text-2xl font-bold font-display text-white mt-1">
                      {stat.value}
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      <ArrowUpRight className="w-3 h-3 text-green-400/80" />
                      <span className="text-[11px] text-green-400/80 font-medium">
                        {stat.change}
                      </span>
                      <span className="text-[10px] text-white/30">vs mes anterior</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Charts area */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Main chart */}
                <div className="md:col-span-2 rounded-xl bg-white/[0.04] border border-white/[0.06] p-5">
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-xs font-semibold text-white/80">Ingresos por dia</p>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-white" />
                        <span className="text-[10px] text-white/40">App</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-white/30" />
                        <span className="text-[10px] text-white/40">Web</span>
                      </div>
                    </div>
                  </div>
                  {/* Bar chart */}
                  <div className="flex items-end gap-[3px] md:gap-1 h-32 md:h-40">
                    {[
                      { app: 35, web: 25 },
                      { app: 45, web: 30 },
                      { app: 30, web: 28 },
                      { app: 55, web: 32 },
                      { app: 50, web: 25 },
                      { app: 65, web: 35 },
                      { app: 40, web: 30 },
                      { app: 70, web: 28 },
                      { app: 60, web: 33 },
                      { app: 55, web: 27 },
                      { app: 75, web: 35 },
                      { app: 80, web: 30 },
                      { app: 65, web: 28 },
                      { app: 90, web: 38 },
                    ].map((bar, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-[2px]">
                        <div
                          className="w-full rounded-sm bg-white/90"
                          style={{ height: `${bar.app}%` }}
                        />
                        <div
                          className="w-full rounded-sm bg-white/20"
                          style={{ height: `${bar.web}%` }}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-[9px] text-white/25">1 Sep</span>
                    <span className="text-[9px] text-white/25">7 Sep</span>
                    <span className="text-[9px] text-white/25">14 Sep</span>
                  </div>
                </div>

                {/* Side panels */}
                <div className="space-y-4">
                  {/* Top products */}
                  <div className="rounded-xl bg-white/[0.04] border border-white/[0.06] p-4">
                    <p className="text-xs font-semibold text-white/80 mb-3">
                      Productos top
                    </p>
                    <div className="space-y-2.5">
                      {[
                        { name: "Blazer Oversize", views: "847", pct: 85 },
                        { name: "Campera Puffer", views: "623", pct: 65 },
                        { name: "Hoodie Essential", views: "412", pct: 45 },
                        { name: "Jean Relaxed", views: "298", pct: 30 },
                      ].map((product, i) => (
                        <div key={product.name}>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-[11px] text-white/60">{product.name}</span>
                            <span className="text-[10px] text-white/40">
                              {product.views} vistas
                            </span>
                          </div>
                          <div className="w-full bg-white/[0.06] rounded-full h-1">
                            <div
                              className="bg-white/60 rounded-full h-1"
                              style={{ width: `${product.pct}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Push effectiveness */}
                  <div className="rounded-xl bg-white/[0.04] border border-white/[0.06] p-4">
                    <p className="text-xs font-semibold text-white/80 mb-3">
                      Push notifications
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { label: "Enviados", value: "12,430" },
                        { label: "Apertura", value: "38%" },
                        { label: "Clics", value: "2,841" },
                        { label: "Ventas", value: "$24.8k" },
                      ].map((stat) => (
                        <div
                          key={stat.label}
                          className="rounded-lg bg-white/[0.04] p-2 text-center"
                        >
                          <p className="text-sm font-bold text-white/80 font-display">
                            {stat.value}
                          </p>
                          <p className="text-[9px] text-white/30 mt-0.5">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Impact section */}
      <section className="py-32 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-sm text-gray-400 uppercase tracking-widest font-medium">
              Impacto
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight text-gray-950">
              Medi el impacto
              <br />
              de cada accion
            </h2>
            <p className="mt-6 text-lg text-gray-500">
              Cada decision informada con datos reales. Deja de adivinar y
              empeza a optimizar con metricas concretas.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {impactItems.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="h-full">
                  <div className="w-14 h-14 rounded-2xl bg-gray-950 flex items-center justify-center mb-6">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-950 mb-3 font-display">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.description}
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
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-white">
                  Empeza a medir
                  <br />
                  lo que importa
                </h2>
                <p className="mt-6 text-lg text-white/70 max-w-lg mx-auto">
                  Crea tu app y accede a metricas en tiempo real desde el
                  primer dia. Datos claros para decisiones inteligentes.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="https://app.saruapps.com/register"
                    className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-950 text-base font-medium rounded-full hover:bg-gray-100 transition-all duration-300 hover:shadow-2xl hover:shadow-white/10"
                  >
                    Crear mi app gratis
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
