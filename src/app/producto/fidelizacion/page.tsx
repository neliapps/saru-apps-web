import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import {
  Heart,
  Gift,
  Percent,
  Truck,
  Package,
  CalendarClock,
  TrendingUp,
  Users,
  Sparkles,
  ArrowRight,
  Star,
  Check,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Programa de Fidelizacion — Saru Apps",
  description:
    "Crea un programa de puntos y recompensas para tu app movil. Tus clientes acumulan puntos con cada compra y los canjean por descuentos exclusivos.",
};

const rewards = [
  {
    icon: Percent,
    title: "% de descuento",
    description:
      "Ofrece 10%, 15%, 20% o el porcentaje que quieras como recompensa canjeable por puntos.",
  },
  {
    icon: Truck,
    title: "Envio gratis",
    description:
      "Permite que tus clientes canjeen puntos por envio gratis en su proximo pedido.",
  },
  {
    icon: Package,
    title: "Producto gratis",
    description:
      "Regala productos exclusivos a los clientes mas fieles cuando alcanzan cierto nivel de puntos.",
  },
  {
    icon: CalendarClock,
    title: "Acceso anticipado",
    description:
      "Da acceso exclusivo a nuevas colecciones o lanzamientos antes que nadie.",
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Aumenta la frecuencia de compra",
    description:
      "Los clientes con programa de puntos compran con mas frecuencia porque tienen un incentivo claro para volver.",
  },
  {
    icon: Users,
    title: "Reduci el costo de adquisicion",
    description:
      "Retener un cliente existente es hasta 5x mas barato que adquirir uno nuevo. La fidelizacion optimiza tu inversion.",
  },
  {
    icon: Sparkles,
    title: "Crea comunidad de marca",
    description:
      "Un programa de recompensas genera sentido de pertenencia. Tus clientes se sienten parte de algo exclusivo.",
  },
];

export default function FidelizacionPage() {
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
                <Heart className="w-3.5 h-3.5" />
                Producto
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.08] tracking-[-0.03em] font-bold text-gray-950">
                Converti compradores
                <br />
                en clientes recurrentes
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="mt-6 md:mt-8 text-base md:text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
                Crea un programa de puntos y recompensas dentro de tu app.
                Tus clientes acumulan puntos con cada compra y los canjean
                por beneficios exclusivos que los hacen volver.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://app.saruapps.com/register"
                  className="group relative inline-flex items-center gap-2 px-7 py-3.5 bg-gray-950 text-white text-[15px] font-medium rounded-full overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-gray-950/25"
                >
                  <span className="relative z-10">Activa tu programa de fidelizacion</span>
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

      {/* How it works */}
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
              Puntos que se convierten
              <br />
              en lealtad real
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              {
                number: "01",
                title: "Tus clientes compran desde la app",
                description:
                  "Cada compra que tus clientes realizan a traves de la app suma puntos automaticamente a su cuenta.",
              },
              {
                number: "02",
                title: "Acumulan puntos automaticamente",
                description:
                  "Sin pasos extra ni codigos. El sistema asigna puntos segun el monto de cada compra de forma transparente.",
              },
              {
                number: "03",
                title: "Canjean por recompensas exclusivas",
                description:
                  "Cuando alcanzan el umbral, eligen entre las recompensas que vos configuraste: descuentos, envio gratis y mas.",
              },
            ].map((step, i) => (
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

          {/* Loyalty card visual */}
          <AnimatedSection delay={0.2}>
            <div className="max-w-md mx-auto">
              <div className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] rounded-2xl border border-white/10 p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-wider font-medium">
                      Programa de puntos
                    </p>
                    <p className="text-4xl font-bold font-display mt-2 text-white">
                      2,450 <span className="text-lg text-white/60">pts</span>
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Progress bar */}
                <div className="mb-2">
                  <div className="flex justify-between text-xs text-white/40 mb-2">
                    <span>Nivel Plata</span>
                    <span>Nivel Oro</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-gradient-to-r from-white to-white/80 rounded-full h-2 w-[75%] transition-all duration-1000" />
                  </div>
                  <p className="text-xs text-white/40 mt-2">
                    550 pts mas para tu proxima recompensa
                  </p>
                </div>

                {/* Reward tiers */}
                <div className="grid grid-cols-3 gap-3 mt-6">
                  {[
                    { label: "10% OFF", pts: "1,000 pts", unlocked: true },
                    { label: "Envio gratis", pts: "2,000 pts", unlocked: true },
                    { label: "Gift exclusivo", pts: "3,000 pts", unlocked: false },
                  ].map((reward) => (
                    <div
                      key={reward.label}
                      className={`rounded-xl p-3 text-center border transition-all duration-300 ${
                        reward.unlocked
                          ? "bg-white/10 border-white/20"
                          : "bg-white/[0.03] border-white/[0.06] opacity-60"
                      }`}
                    >
                      <p className="text-sm font-semibold text-white">{reward.label}</p>
                      <p className="text-[10px] text-white/40 mt-1">{reward.pts}</p>
                      {reward.unlocked && (
                        <div className="flex items-center justify-center gap-1 mt-1.5">
                          <div className="w-1 h-1 rounded-full bg-green-400" />
                          <span className="text-[9px] text-green-400/80">Desbloqueado</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Rewards types */}
      <section className="py-32 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-sm text-gray-400 uppercase tracking-widest font-medium">
              Recompensas
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight text-gray-950">
              Crea las recompensas
              <br />
              que tu marca necesita
            </h2>
            <p className="mt-6 text-lg text-gray-500">
              Configura los tipos de recompensa, los puntos necesarios y los
              niveles del programa. Todo desde el panel de Saru Apps.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {rewards.map((reward, i) => (
              <AnimatedSection key={reward.title} delay={i * 0.08}>
                <div className="group relative h-full bg-white rounded-2xl border border-gray-100 p-6 hover:border-gray-200 hover:shadow-xl hover:shadow-gray-100/80 transition-all duration-500">
                  <div className="mb-5">
                    <div className="w-10 h-10 rounded-xl bg-gray-950 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <reward.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-950 mb-2 font-display">
                    {reward.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {reward.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-6">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-sm text-gray-400 uppercase tracking-widest font-medium">
              Beneficios
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight text-gray-950">
              Por que implementar
              <br />
              un programa de fidelizacion
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, i) => (
              <AnimatedSection key={benefit.title} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-gray-950 flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-950 mb-3 font-display">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Plan note */}
          <AnimatedSection delay={0.3}>
            <div className="max-w-xl mx-auto mt-20">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 text-center">
                <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center mx-auto mb-4">
                  <Star className="w-5 h-5 text-gray-500" />
                </div>
                <p className="text-sm font-semibold text-gray-950 mb-2">
                  Disponible desde el plan Growth
                </p>
                <p className="text-sm text-gray-500 mb-5">
                  El programa de fidelizacion esta incluido a partir del plan Growth.
                  Actualiza tu plan para empezar a fidelizar clientes.
                </p>
                <a
                  href="/#precios"
                  className="inline-flex items-center gap-2 text-sm font-medium text-gray-950 hover:text-gray-700 transition-colors duration-300"
                >
                  Ver planes y precios
                  <ArrowRight className="w-4 h-4" />
                </a>
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
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-8">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-white">
                  Activa tu programa
                  <br />
                  de fidelizacion
                </h2>
                <p className="mt-6 text-lg text-white/70 max-w-lg mx-auto">
                  Empeza a recompensar a tus clientes hoy. Configura tu programa
                  de puntos en minutos y convertir compradores en fans de tu marca.
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
