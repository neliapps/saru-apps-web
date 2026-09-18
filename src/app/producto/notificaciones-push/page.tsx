import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import {
  Bell,
  Zap,
  ShoppingCart,
  Sparkles,
  Calendar,
  Users,
  ArrowLeft,
  Check,
} from "lucide-react";

export const metadata = {
  title: "Notificaciones Push — Saru Apps",
  description:
    "Envia notificaciones push a tus clientes desde tu app. Ofertas, carritos abandonados, nuevos productos y campanas programadas. Hasta 7x mas engagement que el email.",
};

const notificationTypes = [
  {
    icon: Zap,
    title: "Ofertas y promociones flash",
    description:
      "Lanza ofertas relampago y llega al celular de tus clientes al instante. Ideal para liquidaciones y fechas especiales.",
    example: {
      title: "Oferta flash!",
      body: "50% en toda la tienda. Solo por 24 horas.",
      time: "Ahora",
    },
  },
  {
    icon: ShoppingCart,
    title: "Carrito abandonado",
    description:
      "Notificaciones automaticas cuando un cliente deja productos en el carrito. Recupera ventas que de otra forma se perderian.",
    example: {
      title: "Olvidaste algo",
      body: "Tu carrito te espera con envio gratis.",
      time: "2h",
    },
    tag: "Automatico",
  },
  {
    icon: Sparkles,
    title: "Nuevos productos / colecciones",
    description:
      "Notifica a tus clientes cada vez que agregas productos nuevos o lanzas una coleccion. Genera trafico instantaneo.",
    example: {
      title: "Nueva coleccion",
      body: "Llego lo nuevo de temporada. Se la primera en verlo.",
      time: "5h",
    },
  },
  {
    icon: Calendar,
    title: "Campanas programadas",
    description:
      "Programa tus notificaciones para el dia y la hora ideal. Planea con anticipacion tus campanas de marketing.",
    example: {
      title: "Hot Sale empieza manana",
      body: "Descuentos de hasta 60%. Activa las alertas.",
      time: "Programado",
    },
  },
  {
    icon: Users,
    title: "Segmentacion por comportamiento",
    description:
      "Envia notificaciones a segmentos especificos: compradores frecuentes, inactivos, por ubicacion o por historial.",
    example: {
      title: "Exclusivo para VIPs",
      body: "Acceso anticipado a la nueva coleccion.",
      time: "Segmentado",
    },
  },
];

const volumeByPlan = [
  {
    plan: "Starter",
    volume: "1,000 / mes",
    highlighted: false,
  },
  {
    plan: "Growth",
    volume: "10.000 / mes",
    highlighted: true,
  },
  {
    plan: "Scale",
    volume: "50.000 / mes",
    highlighted: false,
  },
  {
    plan: "Enterprise",
    volume: "Ilimitadas",
    highlighted: false,
  },
];

export default function NotificacionesPushPage() {
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
                <Bell className="w-3.5 h-3.5" />
                Notificaciones Push
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.08] tracking-[-0.03em] font-bold text-gray-950">
                Llega directo al celular
                <br />
                de tus clientes
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="mt-6 md:mt-8 text-base md:text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
                Las notificaciones push aparecen en la pantalla de bloqueo de
                tus clientes. Sin filtros de spam, sin algoritmos. Comunicacion
                directa con tu audiencia.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Types of Notifications */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm text-gray-400 uppercase tracking-widest font-medium">
              Tipos de notificacion
            </span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold tracking-tight text-gray-950">
              Un mensaje para cada momento
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Desde ofertas instantaneas hasta flujos automaticos. Cada
              notificacion puede impulsar una venta.
            </p>
          </AnimatedSection>

          <div className="space-y-6">
            {notificationTypes.map((type, i) => (
              <AnimatedSection key={type.title} delay={i * 0.08}>
                <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 hover:border-gray-200 hover:shadow-lg hover:shadow-gray-100/80 transition-all duration-500">
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10 items-center">
                    {/* Content */}
                    <div className="lg:col-span-3">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-gray-950 flex items-center justify-center shrink-0">
                          <type.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1.5">
                            <h3 className="text-lg font-bold text-gray-950 font-display">
                              {type.title}
                            </h3>
                            {type.tag && (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-green-50 text-green-700 text-[11px] font-medium">
                                {type.tag}
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-500 leading-relaxed">
                            {type.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Notification Preview */}
                    <div className="lg:col-span-2">
                      <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-gray-950 flex items-center justify-center shrink-0">
                            <span className="text-white text-[10px] font-bold">
                              S
                            </span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start">
                              <p className="text-[12px] font-semibold text-gray-900">
                                {type.example.title}
                              </p>
                              <span className="text-[10px] text-gray-400 shrink-0 ml-2">
                                {type.example.time}
                              </span>
                            </div>
                            <p className="text-[11px] text-gray-500 mt-0.5">
                              {type.example.body}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section (dark bg) */}
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
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-sm text-white/60 uppercase tracking-widest font-medium">
                Por que push
              </span>
              <h2 className="mt-6 font-display text-5xl md:text-7xl font-bold tracking-tight text-white">
                7x
              </h2>
              <p className="mt-4 text-xl md:text-2xl text-white/80 font-medium max-w-lg mx-auto">
                mas engagement que el email
              </p>
              <p className="mt-6 text-base text-white/50 max-w-md mx-auto leading-relaxed">
                Las notificaciones push tienen tasas de apertura promedio del
                20-30%, comparado con el 2-5% del email marketing tradicional.
              </p>

              <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                {[
                  { value: "~30%", label: "Tasa de apertura push" },
                  { value: "~3%", label: "Tasa de apertura email" },
                  { value: "90%", label: "Entrega instantanea" },
                ].map((stat, i) => (
                  <AnimatedSection key={stat.label} delay={i * 0.1}>
                    <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
                      <p className="text-3xl font-bold font-display text-white">
                        {stat.value}
                      </p>
                      <p className="text-sm text-white/50 mt-1">{stat.label}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Volume by Plan */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm text-gray-400 uppercase tracking-widest font-medium">
              Volumen
            </span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold tracking-tight text-gray-950">
              Notificaciones por plan
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Cada plan incluye un volumen de notificaciones push mensuales.
              Escala a medida que tu audiencia crece.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {volumeByPlan.map((item, i) => (
              <AnimatedSection key={item.plan} delay={i * 0.1}>
                <div
                  className={`relative rounded-2xl p-6 text-center transition-all duration-500 ${
                    item.highlighted
                      ? "bg-gray-950 text-white shadow-2xl shadow-gray-950/20 scale-[1.02]"
                      : "bg-white border border-gray-200 hover:border-gray-300 hover:shadow-lg"
                  }`}
                >
                  {item.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-white text-gray-950 text-xs font-bold px-4 py-1 rounded-full">
                        Mas popular
                      </span>
                    </div>
                  )}
                  <p
                    className={`text-sm font-medium mb-3 ${
                      item.highlighted ? "text-white/70" : "text-gray-500"
                    }`}
                  >
                    {item.plan}
                  </p>
                  <div className="flex items-center justify-center gap-1.5 mb-2">
                    <Bell
                      className={`w-5 h-5 ${
                        item.highlighted ? "text-white/60" : "text-gray-400"
                      }`}
                    />
                    <p
                      className={`text-2xl font-bold font-display ${
                        item.highlighted ? "text-white" : "text-gray-950"
                      }`}
                    >
                      {item.volume}
                    </p>
                  </div>
                  <a
                    href="/precios"
                    className={`inline-flex text-xs font-medium transition-colors duration-200 ${
                      item.highlighted
                        ? "text-white/60 hover:text-white"
                        : "text-gray-400 hover:text-gray-600"
                    }`}
                  >
                    Ver plan completo
                  </a>
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
                  <Bell className="w-7 h-7 text-white" />
                </div>
                <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-white">
                  Empieza a enviar push
                </h2>
                <p className="mt-6 text-lg text-white/70 max-w-lg mx-auto">
                  Crea tu app y llega directo al celular de tus clientes.
                  Las primeras 1,000 notificaciones estan incluidas en todos los
                  planes.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="https://app.saruapps.com/register"
                    className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-950 text-base font-medium rounded-full hover:bg-gray-100 transition-all duration-300 hover:shadow-2xl hover:shadow-white/10"
                  >
                    Crear mi app gratis
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
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
