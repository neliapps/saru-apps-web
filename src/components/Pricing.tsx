"use client";

import { useState } from "react";
import { AnimatedSection } from "./AnimatedSection";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    monthlyPrice: 49,
    currency: "USD",
    description: "Ideal para tiendas que están comenzando con su app móvil.",
    features: [
      "Web App (PWA) instalable",
      "Editor drag & drop",
      "Sincronización de productos con Tiendanube",
      "Notificaciones push (1.000/mes)",
      "Página de instalación compartible",
    ],
    cta: "Comenzar gratis",
    highlighted: false,
  },
  {
    name: "Growth",
    monthlyPrice: 149,
    currency: "USD",
    description: "Para marcas que buscan crecer y fidelizar clientes.",
    features: [
      "Todo lo de Starter",
      "Publicación en App Store y Google Play",
      "Editor drag & drop avanzado",
      "Notificaciones de carrito abandonado",
      "Programa de fidelización básico",
      "Cupones exclusivos para la app",
      "Notificaciones push (5.000/mes)",
    ],
    cta: "Comenzar gratis",
    highlighted: true,
  },
  {
    name: "Scale",
    monthlyPrice: 349,
    currency: "USD",
    description: "Para marcas en expansión que necesitan máximo rendimiento.",
    features: [
      "Todo lo de Growth",
      "Notificaciones push (20.000/mes)",
      "Notificaciones push segmentadas",
      "Campañas de marketing",
      "Inicio personalizado",
      "Drops exclusivos en la app",
      "Multidioma",
    ],
    cta: "Comenzar gratis",
    highlighted: false,
  },
  {
    name: "Enterprise",
    monthlyPrice: 0,
    currency: "",
    description: "Para grandes marcas con necesidades específicas.",
    features: [
      "Todo lo de Scale",
      "Notificaciones push ilimitadas",
      "Migración asistida",
      "Diseño personalizado",
      "API dedicada",
      "Integraciones custom",
      "Account manager dedicado",
      "SLA garantizado",
    ],
    cta: "Contactar ventas",
    href: "https://calendly.com/saruapps/30min",
    highlighted: false,
  },
];

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="precios" className="py-32 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm text-gray-400 uppercase tracking-widest font-medium">
            Precios
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight text-gray-950">
            Planes simples,
            <br />
            sin sorpresas
          </h2>
          <p className="mt-6 text-lg text-gray-500">
            Empezá gratis y escalá a medida que tu app crece. Sin contratos a
            largo plazo.
          </p>
        </AnimatedSection>

        {/* Billing toggle */}
        <AnimatedSection className="flex items-center justify-center mb-16">
          <div className="relative inline-flex items-center rounded-full bg-gray-100 p-1">
            {/* Sliding background */}
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
                      <span className="bg-white text-gray-950 text-xs font-bold px-4 py-1 rounded-full">
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
                              plan.highlighted ? "text-white/70" : "text-gray-500"
                            }`}
                          >
                            {plan.currency}
                          </span>
                          <span
                            className={`text-5xl font-bold font-display tracking-tight transition-all duration-300 ${
                              plan.highlighted ? "text-white" : "text-gray-950"
                            }`}
                          >
                            {displayPrice}
                          </span>
                          <span
                            className={`text-sm ${
                              plan.highlighted ? "text-white/70" : "text-gray-500"
                            }`}
                          >
                            /mes
                          </span>
                        </div>
                        {isAnnual && (
                          <p
                            className={`text-xs mt-1 ${
                              plan.highlighted ? "text-white/60" : "text-gray-400"
                            }`}
                          >
                            Facturado anualmente (USD {displayPrice! * 12}/año)
                          </p>
                        )}
                      </div>
                    )}
                  </div>

                  <a
                    href={plan.href || "https://app.saruapps.com/register"}
                    {...(plan.href ? { target: "_blank", rel: "noopener noreferrer" } : {})}
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
                            plan.highlighted ? "text-green-400" : "text-gray-400"
                          }`}
                        />
                        <span
                          className={`text-sm ${
                            plan.highlighted ? "text-white/80" : "text-gray-600"
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

        {/* Additional fees notice */}
        <AnimatedSection delay={0.3}>
          <div className="max-w-2xl mx-auto mt-16 rounded-2xl border border-gray-200 bg-gray-50 p-6 md:p-8">
            <p className="text-sm font-semibold text-gray-950 mb-1">
              Costos adicionales fuera del control de Saru Apps
            </p>
            <p className="text-xs text-gray-500 mb-5">
              Para publicar tu app en las tiendas, Apple y Google requieren una cuenta de desarrollador.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              {/* Apple */}
              <div className="flex items-center gap-3 flex-1 w-full sm:w-auto bg-white rounded-xl border border-gray-200 p-4">
                <div className="w-10 h-10 rounded-xl bg-gray-950 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-950">Apple Developer</p>
                  <p className="text-xs text-gray-500">99 USD / año</p>
                </div>
              </div>

              {/* Plus sign */}
              <span className="text-gray-300 text-xl font-light">+</span>

              {/* Google */}
              <div className="flex items-center gap-3 flex-1 w-full sm:w-auto bg-white rounded-xl border border-gray-200 p-4">
                <div className="w-10 h-10 rounded-xl bg-gray-950 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.4l2.834 1.64a1 1 0 0 1 0 1.726l-2.834 1.64-2.534-2.533 2.534-2.473zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-950">Google Play Console</p>
                  <p className="text-xs text-gray-500">25 USD / pago único</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
