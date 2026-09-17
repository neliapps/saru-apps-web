import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import {
  Smartphone,
  Zap,
  Bell,
  WifiOff,
  Link2,
  Sparkles,
  ShoppingCart,
  ArrowLeft,
  ArrowRight,
  Check,
} from "lucide-react";

export const metadata = {
  title: "App Nativa iOS & Android — Saru Apps",
  description:
    "Tu app publicada en App Store y Google Play. Experiencia nativa real con React Native: rendimiento, push notifications, deep linking y checkout nativo de Tiendanube.",
};

const nativeFeatures = [
  {
    icon: Zap,
    title: "Rendimiento nativo",
    description:
      "Construida con React Native. Animaciones fluidas a 60fps, tiempos de carga instantaneos y navegacion nativa.",
  },
  {
    icon: Bell,
    title: "Push notifications",
    description:
      "Notificaciones nativas del sistema operativo. Aparecen en la pantalla de bloqueo como cualquier otra app.",
  },
  {
    icon: WifiOff,
    title: "Offline-ready",
    description:
      "La app funciona sin conexion. Los productos y el catalogo se cachean localmente para una experiencia sin interrupciones.",
  },
  {
    icon: Link2,
    title: "Deep linking",
    description:
      "Enlaces directos a productos, colecciones o pantallas especificas. Ideal para campanas de marketing y redes sociales.",
  },
  {
    icon: Sparkles,
    title: "Animaciones fluidas",
    description:
      "Transiciones y micro-interacciones nativas. Tu app se siente premium, como las mejores apps del mercado.",
  },
  {
    icon: ShoppingCart,
    title: "Checkout nativo de Tiendanube",
    description:
      "El proceso de compra usa el checkout oficial de Tiendanube. Seguro, confiable y con todos los medios de pago.",
  },
];

const publishingSteps = [
  {
    number: "01",
    title: "Disena tu app",
    description:
      "Usa el editor drag & drop para armar cada pantalla. Personaliza colores, tipografias y componentes.",
  },
  {
    number: "02",
    title: "Nosotros la publicamos",
    description:
      "Nuestro equipo se encarga de todo el proceso de revision y publicacion en App Store y Google Play.",
  },
  {
    number: "03",
    title: "Tus clientes la descargan",
    description:
      "Tu app queda disponible para que tus clientes la descarguen desde la tienda de aplicaciones.",
  },
];

export default function AppNativaPage() {
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
                <Smartphone className="w-3.5 h-3.5" />
                App Nativa
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.08] tracking-[-0.03em] font-bold text-gray-950">
                Tu app en App Store
                <br />
                y Google Play
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="mt-6 md:mt-8 text-base md:text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
                Una app nativa de verdad. No un webview disfrazado. Construida
                con React Native para maxima velocidad, fluidez y experiencia
                de usuario.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Nativa de verdad */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div>
                <span className="text-sm text-gray-400 uppercase tracking-widest font-medium">
                  Tecnologia
                </span>
                <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold tracking-tight text-gray-950">
                  Nativa de verdad
                </h2>
                <p className="mt-6 text-gray-500 leading-relaxed">
                  Muchas plataformas dicen ofrecer una "app" pero en realidad
                  envuelven tu sitio web en un contenedor. Eso es un webview: lento,
                  limitado y con mala experiencia.
                </p>
                <p className="mt-4 text-gray-500 leading-relaxed">
                  Saru Apps construye tu app con React Native, la misma tecnologia
                  que usan Facebook, Instagram y Shopify. Cada pantalla, cada
                  animacion y cada interaccion es nativa del sistema operativo.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-red-400 text-lg font-bold">X</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-950">Webview (otros)</p>
                      <p className="text-sm text-gray-500 mt-0.5">
                        Tu web dentro de un wrapper. Lento, sin push reales, sin acceso offline.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-950">React Native (Saru Apps)</p>
                      <p className="text-sm text-gray-500 mt-0.5">
                        Componentes nativos reales. 60fps, push del OS, cache local y deep linking.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="flex justify-center">
                {/* Phone mockup */}
                <div className="relative">
                  <div className="w-[260px] md:w-[300px] bg-gray-950 rounded-[2.5rem] p-2.5 shadow-2xl">
                    <div className="bg-white rounded-[2rem] overflow-hidden">
                      <div className="flex justify-center pt-2.5">
                        <div className="w-24 h-6 bg-gray-950 rounded-full" />
                      </div>
                      <div className="px-4 pb-4">
                        {/* App header */}
                        <div className="mt-4 flex items-center justify-between mb-4">
                          <div className="w-8 h-8 rounded-lg bg-gray-950 flex items-center justify-center">
                            <span className="text-white text-[10px] font-bold">S</span>
                          </div>
                          <div className="w-20 h-2 rounded bg-gray-200" />
                          <div className="w-6 h-6 rounded-full bg-gray-100" />
                        </div>
                        {/* Hero banner */}
                        <div className="rounded-xl bg-gradient-to-br from-gray-900 to-gray-700 p-4 text-white">
                          <p className="text-[10px] opacity-70 uppercase tracking-wider">
                            Exclusivo App
                          </p>
                          <p className="text-[15px] font-bold mt-1">Hasta 40% OFF</p>
                          <div className="mt-2.5 bg-white/20 rounded-full px-3 py-1 inline-block">
                            <span className="text-[9px] font-medium">Ver ofertas</span>
                          </div>
                        </div>
                        {/* Products */}
                        <div className="mt-3 grid grid-cols-2 gap-2">
                          {[1, 2, 3, 4].map((n) => (
                            <div key={n}>
                              <div className="aspect-square rounded-lg bg-gray-100" />
                              <div className="mt-1.5 w-3/4 h-2 rounded bg-gray-200" />
                              <div className="mt-1 w-1/2 h-2 rounded bg-gray-100" />
                            </div>
                          ))}
                        </div>
                        {/* Bottom nav */}
                        <div className="mt-4 flex justify-around py-2.5 border-t border-gray-100">
                          {["Inicio", "Buscar", "Favoritos", "Perfil"].map(
                            (label, i) => (
                              <div key={label} className="text-center">
                                <div
                                  className={`w-5 h-5 rounded-md mx-auto mb-0.5 ${
                                    i === 0 ? "bg-gray-950" : "bg-gray-100"
                                  }`}
                                />
                                <span
                                  className={`text-[7px] ${
                                    i === 0 ? "text-gray-900 font-bold" : "text-gray-400"
                                  }`}
                                >
                                  {label}
                                </span>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating badges */}
                  <div className="absolute -left-4 top-16 bg-white rounded-xl shadow-lg shadow-gray-200/80 border border-gray-100 px-3 py-2 hidden md:block">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center">
                        <Zap className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-[11px] font-semibold text-gray-900">60 fps</span>
                    </div>
                  </div>

                  <div className="absolute -right-4 bottom-24 bg-white rounded-xl shadow-lg shadow-gray-200/80 border border-gray-100 px-3 py-2 hidden md:block">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center">
                        <Smartphone className="w-3 h-3 text-blue-600" />
                      </div>
                      <span className="text-[11px] font-semibold text-gray-900">React Native</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-6">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm text-gray-400 uppercase tracking-widest font-medium">
              Capacidades
            </span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold tracking-tight text-gray-950">
              Todo lo que tu app puede hacer
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Una app nativa viene con ventajas que un sitio web simplemente no
              puede ofrecer.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nativeFeatures.map((feature, i) => (
              <AnimatedSection key={feature.title} delay={i * 0.08}>
                <div className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-gray-200 hover:shadow-lg hover:shadow-gray-100/80 transition-all duration-500 h-full">
                  <div className="w-10 h-10 rounded-xl bg-gray-950 flex items-center justify-center mb-4">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-base font-bold text-gray-950 mb-1.5 font-display">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Publishing Process */}
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
              Publicacion
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight text-white">
              De tu editor a las tiendas
              <br />
              en 3 pasos
            </h2>
            <p className="mt-6 text-lg text-white/70">
              Vos diseinas. Nosotros nos encargamos de publicar.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connection line */}
            <div className="absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent hidden md:block" />

            {publishingSteps.map((step, i) => (
              <AnimatedSection key={step.number} delay={i * 0.12}>
                <div className="relative group text-center">
                  <div className="relative z-10 mb-5 inline-flex">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-500">
                      <span className="text-xl font-bold font-display text-white/80">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold font-display mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* White Label Note */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-6">
                <Smartphone className="w-7 h-7 text-gray-950" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-gray-950">
                Tu marca, no la nuestra
              </h2>
              <p className="mt-6 text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
                Saru Apps es invisible para tus clientes. Tu app lleva tu logo,
                tus colores, tu nombre. Tus clientes solo ven tu marca cuando
                abren la app.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Developer Accounts Note */}
      <section className="py-12 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-2xl mx-auto rounded-2xl border border-gray-200 bg-gray-50 p-6 md:p-8">
              <p className="text-sm font-semibold text-gray-950 mb-1">
                Cuentas de desarrollador requeridas
              </p>
              <p className="text-xs text-gray-500 mb-5">
                Para publicar tu app en las tiendas, Apple y Google requieren una
                cuenta de desarrollador propia.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <div className="flex items-center gap-3 flex-1 w-full sm:w-auto bg-white rounded-xl border border-gray-200 p-4">
                  <div className="w-10 h-10 rounded-xl bg-gray-950 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-950">
                      Apple Developer
                    </p>
                    <p className="text-xs text-gray-500">99 USD / anio</p>
                  </div>
                </div>

                <span className="text-gray-300 text-xl font-light">+</span>

                <div className="flex items-center gap-3 flex-1 w-full sm:w-auto bg-white rounded-xl border border-gray-200 p-4">
                  <div className="w-10 h-10 rounded-xl bg-gray-950 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.4l2.834 1.64a1 1 0 0 1 0 1.726l-2.834 1.64-2.534-2.533 2.534-2.473zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-950">
                      Google Play Console
                    </p>
                    <p className="text-xs text-gray-500">25 USD / pago unico</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
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
                  Tu app en las tiendas
                </h2>
                <p className="mt-6 text-lg text-white/70 max-w-lg mx-auto">
                  Crea tu app y nosotros nos encargamos de publicarla en App Store
                  y Google Play. Sin complicaciones tecnicas.
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
