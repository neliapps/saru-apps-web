"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Plus, Minus, ArrowRight } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

/* ─── Plan data ─── */

type Plan = {
  name: string;
  monthlyPrice: number;
  currency: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  highlighted: boolean;
};

const plans: Plan[] = [
  {
    name: "Starter",
    monthlyPrice: 49,
    currency: "USD",
    description: "Lanzá tu app mobile",
    features: [
      "App nativa para iOS y Android",
      "Editor de contenido drag & drop",
      "Sincronización automática de productos",
      "Notificaciones push (1.000/mes)",
      "Buscador de productos",
      "Wishlist / favoritos",
      "Cuenta de cliente con historial",
      "Seguimiento de pedidos en tiempo real",
      "Categorías y colecciones",
      "Carrito de compras con cupones",
      "1 página personalizada",
      "Banner de instalación en tu tienda",
      "Vista previa antes de publicar",
      "Soporte por email",
    ],
    cta: "Registrate gratis",
    href: "https://app.saruapps.com/register",
    highlighted: false,
  },
  {
    name: "Growth",
    monthlyPrice: 149,
    currency: "USD",
    description: "Herramientas para vender más",
    features: [
      "Todo lo de Starter, más:",
      "Notificaciones push (10.000/mes)",
      "Notificación de carrito abandonado",
      "Notificación de back in stock",
      "Notificación de bienvenida automática",
      "Repetir pedido con un tap",
      "Badges de producto",
      "Indicador de bajo stock",
      "Quick add to cart",
      "Historial de productos visitados",
      "Sin marca Saru Apps (white label)",
      "3 páginas personalizadas",
    ],
    cta: "Registrate gratis",
    href: "https://app.saruapps.com/register",
    highlighted: true,
  },
  {
    name: "Scale",
    monthlyPrice: 349,
    currency: "USD",
    description: "Marketing avanzado y exclusividad",
    features: [
      "Todo lo de Growth, más:",
      "Notificaciones push (50.000/mes)",
      "Push segmentado por comportamiento",
      "Notificación de descuento en favoritos",
      "Drops exclusivos con cuenta regresiva",
      "Productos exclusivos de la app",
      "Recomendaciones cross-sell",
      "Barra de envío gratis",
      "Diseños programados por campaña",
      "Rich push (con imágenes)",
      "Precios mayoristas (B2B)",
      "Multiidioma",
      "Deep linking",
      "Páginas personalizadas ilimitadas",
    ],
    cta: "Registrate gratis",
    href: "https://app.saruapps.com/register",
    highlighted: false,
  },
  {
    name: "Enterprise",
    monthlyPrice: 0,
    currency: "",
    description: "Para grandes marcas",
    features: [
      "Todo lo de Scale, más:",
      "Push ilimitado",
      "Chat en la app",
      "QR code banner para desktop",
      "API dedicada",
      "Account manager exclusivo",
      "SLA garantizado",
      "Integraciones custom",
    ],
    cta: "Contactar ventas",
    href: "https://calendly.com/saruapps/30min",
    highlighted: false,
  },
];

/* ─── Comparison table data ─── */

type ComparisonRow = {
  feature: string;
  starter: string | boolean;
  growth: string | boolean;
  scale: string | boolean;
  enterprise: string | boolean;
};

const comparisonRows: ComparisonRow[] = [
  // Base — todos los planes
  { feature: "App nativa iOS & Android", starter: true, growth: true, scale: true, enterprise: true },
  { feature: "Editor drag & drop", starter: true, growth: true, scale: true, enterprise: true },
  { feature: "Sincronización de productos", starter: true, growth: true, scale: true, enterprise: true },
  { feature: "Buscador de productos", starter: true, growth: true, scale: true, enterprise: true },
  { feature: "Wishlist / favoritos", starter: true, growth: true, scale: true, enterprise: true },
  { feature: "Cuenta de cliente", starter: true, growth: true, scale: true, enterprise: true },
  { feature: "Seguimiento de pedidos", starter: true, growth: true, scale: true, enterprise: true },
  { feature: "Carrito con cupones", starter: true, growth: true, scale: true, enterprise: true },
  { feature: "Banner de instalación", starter: true, growth: true, scale: true, enterprise: true },
  // Varía por plan
  { feature: "Notificaciones push", starter: "1.000/mes", growth: "10.000/mes", scale: "50.000/mes", enterprise: "Ilimitadas" },
  { feature: "Páginas personalizadas", starter: "1", growth: "3", scale: "Ilimitadas", enterprise: "Ilimitadas" },
  // Growth+
  { feature: "Carrito abandonado", starter: false, growth: true, scale: true, enterprise: true },
  { feature: "Back in stock", starter: false, growth: true, scale: true, enterprise: true },
  { feature: "Bienvenida automática", starter: false, growth: true, scale: true, enterprise: true },
  { feature: "Repetir pedido", starter: false, growth: true, scale: true, enterprise: true },
  { feature: "Badges de producto", starter: false, growth: true, scale: true, enterprise: true },
  { feature: "Indicador de bajo stock", starter: false, growth: true, scale: true, enterprise: true },
  { feature: "Quick add to cart", starter: false, growth: true, scale: true, enterprise: true },
  { feature: "Historial de visitados", starter: false, growth: true, scale: true, enterprise: true },
  { feature: "White label", starter: false, growth: true, scale: true, enterprise: true },
  // Scale+
  { feature: "Push segmentado", starter: false, growth: false, scale: true, enterprise: true },
  { feature: "Descuento en favoritos", starter: false, growth: false, scale: true, enterprise: true },
  { feature: "Drops exclusivos", starter: false, growth: false, scale: true, enterprise: true },
  { feature: "Productos exclusivos", starter: false, growth: false, scale: true, enterprise: true },
  { feature: "Recomendaciones cross-sell", starter: false, growth: false, scale: true, enterprise: true },
  { feature: "Barra de envío gratis", starter: false, growth: false, scale: true, enterprise: true },
  { feature: "Diseños programados", starter: false, growth: false, scale: true, enterprise: true },
  { feature: "Rich push (imágenes)", starter: false, growth: false, scale: true, enterprise: true },
  { feature: "Precios mayoristas (B2B)", starter: false, growth: false, scale: true, enterprise: true },
  { feature: "Multiidioma", starter: false, growth: false, scale: true, enterprise: true },
  { feature: "Deep linking", starter: false, growth: false, scale: true, enterprise: true },
  // Enterprise
  { feature: "Chat en la app", starter: false, growth: false, scale: false, enterprise: true },
  { feature: "QR code banner desktop", starter: false, growth: false, scale: false, enterprise: true },
  { feature: "API dedicada", starter: false, growth: false, scale: false, enterprise: true },
  { feature: "Integraciones custom", starter: false, growth: false, scale: false, enterprise: true },
  { feature: "SLA garantizado", starter: false, growth: false, scale: false, enterprise: true },
  // Soporte
  { feature: "Soporte", starter: "Email", growth: "Email", scale: "Email", enterprise: "Account manager" },
];

/* ─── FAQ data ─── */

const pricingFaqs = [
  {
    question: "¿Puedo probar Saru Apps antes de pagar?",
    answer:
      "Sí. Podés crear tu cuenta gratis, diseñar tu app completa y ver una preview de cómo se vería. Solo pagás cuando decidís publicarla. No se requiere tarjeta de crédito para empezar.",
  },
  {
    question: "¿Hay costos de setup o configuración?",
    answer:
      "No. No hay costo de setup ni de configuración. Solo pagás el plan mensual o anual que elijas. Los únicos costos adicionales son las cuentas de desarrollador de Apple y Google, que son requeridas por las tiendas de apps.",
  },
  {
    question: "¿Cobran comisión por venta?",
    answer:
      "No. No tomamos comisión sobre tus ventas ni cobramos por notificación. Cada plan incluye un volumen de notificaciones push mensuales sin costo adicional.",
  },
  {
    question: "¿Puedo cambiar de plan en cualquier momento?",
    answer:
      "Sí, podés subir o bajar de plan cuando quieras. El cambio se aplica de forma inmediata y se prorratea el monto. No hay contratos a largo plazo ni permanencia mínima.",
  },
  {
    question: "¿Qué plan me conviene?",
    answer:
      "Starter es ideal para lanzar tu app nativa con las funcionalidades esenciales. Growth es para marcas que quieren herramientas de venta avanzadas como carrito abandonado, back in stock y white label. Scale es para marcas en expansión que necesitan push segmentados, drops exclusivos y multiidioma. Enterprise es para grandes marcas con necesidades específicas. Si tenés dudas, agendá una demo y te asesoramos.",
  },
  {
    question: "¿Qué pasa si cancelo mi suscripción?",
    answer:
      "Podés cancelar cuando quieras sin penalidades. Tu app seguirá activa hasta el final del período facturado. Después de eso, la app se despublica de las tiendas pero no perdés tu diseño ni configuración — podés reactivar en cualquier momento.",
  },
];

/* ─── FAQ Item sub-component ─── */

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="text-base font-medium text-gray-900 group-hover:text-gray-600 transition-colors duration-300 pr-8">
          {question}
        </span>
        <span className="shrink-0 w-8 h-8 rounded-full bg-gray-100 group-hover:bg-gray-200 flex items-center justify-center transition-all duration-300">
          {isOpen ? (
            <Minus className="w-4 h-4 text-gray-600" />
          ) : (
            <Plus className="w-4 h-4 text-gray-600" />
          )}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-500 text-sm leading-relaxed max-w-2xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Comparison cell renderer ─── */

function ComparisonCell({ value }: { value: string | boolean }) {
  if (value === true) {
    return (
      <Check className="w-4 h-4 text-gray-950 mx-auto" />
    );
  }
  if (value === false) {
    return <span className="text-gray-300">&mdash;</span>;
  }
  return (
    <span className="text-sm text-gray-700 font-medium">{value}</span>
  );
}

/* ─── Main component ─── */

export function PreciosContent() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="pt-32">
      {/* ─── Hero ─── */}
      <section className="pb-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <span className="text-sm text-gray-500 uppercase tracking-widest font-medium">
              Precios
            </span>
            <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-950">
              Planes simples,
              <br />
              sin sorpresas
            </h1>
            <p className="mt-6 text-lg text-gray-500 max-w-lg mx-auto">
              Empezá gratis y escalá a medida que tu app crece. Sin contratos a
              largo plazo.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Billing toggle ─── */}
      <section className="pb-4">
        <div className="max-w-[1280px] mx-auto px-6">
          <AnimatedSection className="flex items-center justify-center mb-16">
            <div className="relative inline-flex items-center rounded-full bg-gray-100 p-1">
              <div
                className={`absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-gray-950 shadow-lg transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isAnnual ? "left-[calc(50%+2px)]" : "left-1"
                }`}
              />
              <button
                onClick={() => setIsAnnual(false)}
                className={`relative z-10 px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  !isAnnual ? "text-white" : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Mensual
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`relative z-10 px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 flex items-center gap-2 ${
                  isAnnual ? "text-white" : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Anual
                <span
                  className={`text-[11px] font-bold px-2 py-0.5 rounded-full transition-all duration-300 ${
                    isAnnual
                      ? "bg-green-400 text-gray-950"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  -20%
                </span>
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Plan cards ─── */}
      <section className="pb-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {plans.map((plan, i) => {
              const isEnterprise = plan.monthlyPrice === 0;
              const displayPrice = isEnterprise
                ? null
                : isAnnual
                  ? Math.round(plan.monthlyPrice * 0.8)
                  : plan.monthlyPrice;

              return (
                <AnimatedSection key={plan.name} delay={i * 0.1}>
                  <div
                    className={`relative h-full rounded-2xl p-8 transition-all duration-500 ${
                      plan.highlighted
                        ? "bg-gray-950 text-white shadow-2xl shadow-gray-950/20 scale-[1.02]"
                        : "bg-white border border-gray-200 hover:border-gray-300 hover:shadow-lg"
                    }`}
                  >
                    {plan.highlighted && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="bg-white text-gray-950 text-xs font-bold px-4 py-1 rounded-full shadow-sm">
                          Más popular
                        </span>
                      </div>
                    )}

                    <div className="mb-6">
                      <h3
                        className={`text-lg font-bold font-display ${
                          plan.highlighted ? "text-white" : "text-gray-950"
                        }`}
                      >
                        {plan.name}
                      </h3>
                      <p
                        className={`text-sm mt-1 ${
                          plan.highlighted ? "text-white/70" : "text-gray-500"
                        }`}
                      >
                        {plan.description}
                      </p>
                    </div>

                    <div className="mb-8">
                      {isEnterprise ? (
                        <span
                          className={`text-2xl font-bold font-display ${
                            plan.highlighted ? "text-white" : "text-gray-950"
                          }`}
                        >
                          Personalizado
                        </span>
                      ) : (
                        <div>
                          <div className="flex items-baseline gap-1">
                            <span
                              className={`text-sm ${
                                plan.highlighted
                                  ? "text-white/70"
                                  : "text-gray-500"
                              }`}
                            >
                              {plan.currency}
                            </span>
                            <span
                              className={`text-5xl font-bold font-display tracking-tight transition-all duration-300 ${
                                plan.highlighted
                                  ? "text-white"
                                  : "text-gray-950"
                              }`}
                            >
                              {displayPrice}
                            </span>
                            <span
                              className={`text-sm ${
                                plan.highlighted
                                  ? "text-white/70"
                                  : "text-gray-500"
                              }`}
                            >
                              /mes
                            </span>
                          </div>
                          {isAnnual && (
                            <p
                              className={`text-xs mt-1 ${
                                plan.highlighted
                                  ? "text-white/60"
                                  : "text-gray-400"
                              }`}
                            >
                              Facturado anualmente (USD{" "}
                              {displayPrice! * 12}/año)
                            </p>
                          )}
                        </div>
                      )}
                    </div>

                    <a
                      href={plan.href}
                      {...(plan.name === "Enterprise"
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className={`block text-center py-3 rounded-full text-sm font-medium transition-all duration-300 mb-8 ${
                        plan.highlighted
                          ? "bg-white text-gray-950 hover:bg-gray-100"
                          : "bg-gray-950 text-white hover:bg-gray-800"
                      }`}
                    >
                      {plan.cta}
                    </a>

                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check
                            className={`w-4 h-4 mt-0.5 shrink-0 ${
                              plan.highlighted
                                ? "text-green-400"
                                : "text-gray-400"
                            }`}
                          />
                          <span
                            className={`text-sm ${
                              plan.highlighted
                                ? "text-white/80"
                                : "text-gray-600"
                            }`}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          {/* ─── Additional fees notice ─── */}
          <AnimatedSection delay={0.3}>
            <div className="max-w-2xl mx-auto mt-16 rounded-2xl border border-gray-200 bg-gray-50 p-6 md:p-8">
              <p className="text-sm font-semibold text-gray-950 mb-1">
                Costos adicionales fuera del control de Saru Apps
              </p>
              <p className="text-xs text-gray-500 mb-5">
                Para publicar tu app en las tiendas, Apple y Google requieren una
                cuenta de desarrollador.
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
                    <p className="text-xs text-gray-500">99 USD / año</p>
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
                    <p className="text-xs text-gray-500">25 USD / pago único</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Comparison table ─── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-6">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm text-gray-500 uppercase tracking-widest font-medium">
              Comparación
            </span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold tracking-tight text-gray-950">
              Compará los planes en detalle
            </h2>
            <p className="mt-6 text-gray-500">
              Todas las funcionalidades, plan por plan. Elegí el que mejor se
              adapte a tu negocio.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="overflow-x-auto -mx-6 px-6">
              <div className="min-w-[720px]">
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                  {/* Table header */}
                  <div className="grid grid-cols-5 border-b border-gray-100">
                    <div className="p-6">
                      <span className="text-sm font-semibold text-gray-400">
                        Funcionalidad
                      </span>
                    </div>
                    {["Starter", "Growth", "Scale", "Enterprise"].map(
                      (name) => (
                        <div
                          key={name}
                          className={`p-6 text-center ${
                            name === "Growth" ? "bg-gray-950" : ""
                          }`}
                        >
                          <span
                            className={`text-sm font-bold font-display ${
                              name === "Growth"
                                ? "text-white"
                                : "text-gray-950"
                            }`}
                          >
                            {name}
                          </span>
                        </div>
                      )
                    )}
                  </div>

                  {/* Table rows */}
                  {comparisonRows.map((row, i) => (
                    <div
                      key={row.feature}
                      className={`grid grid-cols-5 ${
                        i < comparisonRows.length - 1
                          ? "border-b border-gray-50"
                          : ""
                      }`}
                    >
                      <div className="px-6 py-4 flex items-center">
                        <span className="text-sm text-gray-700">
                          {row.feature}
                        </span>
                      </div>
                      {(
                        ["starter", "growth", "scale", "enterprise"] as const
                      ).map((plan) => (
                        <div
                          key={plan}
                          className={`px-6 py-4 flex items-center justify-center ${
                            plan === "growth" ? "bg-gray-950/[0.03]" : ""
                          }`}
                        >
                          <ComparisonCell value={row[plan]} />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-32 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <AnimatedSection className="lg:col-span-4">
              <span className="text-sm text-gray-500 uppercase tracking-widest font-medium">
                FAQ
              </span>
              <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold tracking-tight text-gray-950">
                Preguntas sobre
                <br />
                precios
              </h2>
              <p className="mt-4 text-gray-500">
                ¿No encontrás tu respuesta?{" "}
                <a
                  href="https://calendly.com/saruapps/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 underline underline-offset-4 hover:text-gray-600 transition-colors"
                >
                  Contactanos
                </a>
              </p>
            </AnimatedSection>

            <AnimatedSection className="lg:col-span-8" delay={0.1}>
              <div className="bg-white rounded-2xl border border-gray-100 px-8">
                {pricingFaqs.map((faq, i) => (
                  <FAQItem
                    key={i}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openFaq === i}
                    onToggle={() =>
                      setOpenFaq(openFaq === i ? null : i)
                    }
                  />
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── Bottom CTA ─── */}
      <section className="py-32 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <AnimatedSection>
            <div className="relative overflow-hidden rounded-3xl bg-gray-950 px-8 py-20 md:px-20 md:py-28">
              {/* Background effects */}
              <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
              </div>

              {/* Grid pattern */}
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
                  Lanzá tu app hoy
                </h2>
                <p className="mt-6 text-lg text-white/70 max-w-lg mx-auto">
                  Creá la app de tu tienda Tiendanube en minutos. Empezá gratis,
                  sin tarjeta de crédito.
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
    </main>
  );
}
