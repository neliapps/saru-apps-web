import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import {
  MousePointerClick,
  Smartphone,
  Bell,
  Heart,
  ShoppingBag,
  BarChart3,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Producto — Saru Apps",
  description:
    "Conoce todas las herramientas de Saru Apps: editor drag & drop, app nativa iOS y Android, notificaciones push, fidelizacion, sincronizacion con Tiendanube y analytics en tiempo real.",
};

const features = [
  {
    icon: MousePointerClick,
    title: "Editor Drag & Drop",
    description:
      "Disena cada pantalla de tu app arrastrando componentes visuales. Sin codigo, sin limites.",
    href: "/producto/editor",
  },
  {
    icon: Smartphone,
    title: "App Nativa iOS & Android",
    description:
      "Tu app publicada en App Store y Google Play. Experiencia nativa real, no un webview.",
    href: "/producto/app-nativa",
  },
  {
    icon: Bell,
    title: "Notificaciones Push",
    description:
      "Envia mensajes directos al celular de tus clientes. Ofertas, carritos abandonados y mas.",
    href: "/producto/notificaciones-push",
  },
  {
    icon: Heart,
    title: "Fidelizacion",
    description:
      "Programa de puntos y recompensas para convertir compradores en clientes recurrentes.",
    href: "/producto/fidelizacion",
  },
  {
    icon: ShoppingBag,
    title: "Sincronizacion Tiendanube",
    description:
      "Productos, stock, precios y pedidos siempre actualizados automaticamente con tu tienda.",
    href: "/producto/sincronizacion",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description:
      "Metricas en tiempo real: usuarios activos, conversiones, ingresos por push y mas.",
    href: "/producto/analytics",
  },
];

const steps = [
  {
    number: "01",
    title: "Conecta tu Tiendanube",
    description:
      "Instala Saru Apps y tus productos se importan automaticamente.",
  },
  {
    number: "02",
    title: "Disena tu app",
    description:
      "Usa el editor visual para personalizar cada pantalla sin codigo.",
  },
  {
    number: "03",
    title: "Activa engagement",
    description:
      "Configura push, fidelizacion y cupones exclusivos para la app.",
  },
  {
    number: "04",
    title: "Publica y crece",
    description:
      "Nosotros publicamos tu app en App Store y Google Play.",
  },
];

export default function ProductoPage() {
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
                Producto
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.08] tracking-[-0.03em] font-bold text-gray-950">
                Todo lo que necesitas
                <br />
                para vender desde tu app
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="mt-6 md:mt-8 text-base md:text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
                Herramientas para crear, personalizar y hacer crecer tu canal de
                ventas movil. Sin codigo, sin complicaciones.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Feature Cards Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <AnimatedSection key={feature.title} delay={i * 0.08}>
                <a
                  href={feature.href}
                  className="group relative h-full flex flex-col bg-white rounded-2xl border border-gray-100 p-6 hover:border-gray-200 hover:shadow-xl hover:shadow-gray-100/80 transition-all duration-500"
                >
                  <div className="mb-5">
                    <div className="w-12 h-12 rounded-full bg-gray-950 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-950 mb-2 font-display">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-1">
                    {feature.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-950 group-hover:gap-2.5 transition-all duration-300">
                    Conocer mas
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
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
              Como funciona
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight text-white">
              De tu tienda a una app
              <br />
              en 4 pasos
            </h2>
            <p className="mt-6 text-lg text-white/70">
              No necesitas experiencia tecnica. Nuestro proceso esta disenado
              para que lances tu app en minutos.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <div className="absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent hidden lg:block" />

            {steps.map((step, i) => (
              <AnimatedSection key={step.number} delay={i * 0.12}>
                <div className="relative group">
                  <div className="relative z-10 mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-500">
                      <span className="text-xl font-bold font-display text-white/80">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold font-display mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {step.description}
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
                <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-white">
                  Lanza tu app hoy
                </h2>
                <p className="mt-6 text-lg text-white/70 max-w-lg mx-auto">
                  Crea la app de tu tienda Tiendanube en minutos. Empieza
                  gratis, sin tarjeta de credito.
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
