import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import {
  DollarSign,
  Headphones,
  Presentation,
  ClipboardCheck,
  Share2,
  Wallet,
  Building2,
  User,
  Settings,
  Megaphone,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Partners — Saru Apps",
  description:
    "Suma una nueva fuente de ingresos ofreciendo apps moviles a tus clientes de Tiendanube. Programa de partners para agencias, freelancers y consultores.",
};

const benefits = [
  {
    icon: DollarSign,
    title: "Comisiones recurrentes",
    description:
      "Ganas una comision mensual por cada cliente que refieras mientras mantenga su suscripcion activa.",
  },
  {
    icon: Headphones,
    title: "Soporte dedicado",
    description:
      "Acceso a un canal directo con nuestro equipo para resolver dudas tecnicas y comerciales.",
  },
  {
    icon: Presentation,
    title: "Material de ventas",
    description:
      "Te damos presentaciones, demos y recursos para que puedas vender Saru Apps con confianza.",
  },
];

const steps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Aplica al programa",
    description:
      "Completa el formulario y te contactamos en 48hs para darte acceso al programa.",
  },
  {
    number: "02",
    icon: Share2,
    title: "Referi clientes",
    description:
      "Comparti tu link de referido con tus clientes de Tiendanube que necesiten una app.",
  },
  {
    number: "03",
    icon: Wallet,
    title: "Cobra comisiones",
    description:
      "Recibi pagos mensuales por cada cliente activo que hayas referido.",
  },
];

const audiences = [
  {
    icon: Building2,
    title: "Agencias de ecommerce",
    description:
      "Ofrecele a tus clientes un servicio adicional de alto valor y diferencia a tu agencia de la competencia.",
  },
  {
    icon: User,
    title: "Freelancers y consultores",
    description:
      "Suma una nueva linea de ingresos recurrentes a tu portfolio de servicios para Tiendanube.",
  },
  {
    icon: Settings,
    title: "Implementadores de Tiendanube",
    description:
      "Complementa tus servicios de implementacion con una app movil nativa para cada tienda.",
  },
  {
    icon: Megaphone,
    title: "Agencias de marketing digital",
    description:
      "Da un canal de comunicacion directa a tus clientes con push notifications y programa de fidelizacion.",
  },
];

export default function Partners() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-6">
            <AnimatedSection className="text-center max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 text-gray-600 text-[13px] font-medium">
                Partners
              </span>
              <h1 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-950">
                Crece junto a Saru Apps
              </h1>
              <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto">
                Suma una nueva fuente de ingresos ofreciendo apps moviles a tus
                clientes de Tiendanube. Programa de partners para agencias,
                freelancers y consultores de ecommerce.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Benefits */}
        <section className="pb-32 bg-white">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {benefits.map((benefit, i) => (
                <AnimatedSection key={benefit.title} delay={i * 0.1}>
                  <div className="bg-white rounded-2xl border border-gray-100 p-8 hover:border-gray-200 hover:shadow-lg transition-all duration-300 h-full">
                    <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6">
                      <benefit.icon className="w-5 h-5 text-gray-600" />
                    </div>
                    <h3 className="text-lg font-semibold font-display text-gray-950 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-32 bg-gray-950 text-white relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-white/[0.015] rounded-full blur-3xl" />
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
                Como funciona
              </span>
              <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold tracking-tight text-white">
                Empeza a ganar en 3 pasos
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              {/* Connection line */}
              <div className="absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent hidden md:block" />

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

        {/* Who is it for */}
        <section className="py-32 bg-white">
          <div className="max-w-[1280px] mx-auto px-6">
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 text-gray-600 text-[13px] font-medium">
                Para quien es
              </span>
              <h2 className="mt-6 font-display text-3xl md:text-4xl font-bold tracking-tight text-gray-950">
                Ideal para profesionales del ecommerce
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {audiences.map((audience, i) => (
                <AnimatedSection key={audience.title} delay={i * 0.08}>
                  <div className="bg-white rounded-2xl border border-gray-100 p-8 hover:border-gray-200 hover:shadow-lg transition-all duration-300 h-full flex gap-5">
                    <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center shrink-0">
                      <audience.icon className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-gray-950 mb-2">
                        {audience.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {audience.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-32 bg-white">
          <div className="max-w-[1280px] mx-auto px-6">
            <AnimatedSection>
              <div className="text-center bg-gray-50 rounded-2xl border border-gray-100 p-10 md:p-20">
                <h2 className="font-display text-2xl md:text-4xl font-bold text-gray-950">
                  Unite al programa de Partners
                </h2>
                <p className="mt-4 text-gray-500 max-w-lg mx-auto">
                  Empeza a generar ingresos recurrentes ofreciendo apps moviles
                  a tus clientes de Tiendanube.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="https://calendly.com/saruapps/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-gray-950 text-white text-[15px] font-medium rounded-full transition-all duration-300 hover:bg-gray-800 hover:shadow-2xl hover:shadow-gray-950/25"
                  >
                    Aplicar al programa
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="https://calendly.com/saruapps/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 text-gray-600 text-[15px] font-medium rounded-full border border-gray-200 hover:border-gray-300 hover:text-gray-900 transition-all duration-300"
                  >
                    Mas informacion
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
