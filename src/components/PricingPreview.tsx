"use client";

import { AnimatedSection } from "./AnimatedSection";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: 49,
    description: "Lanzá tu app mobile",
    features: ["App nativa iOS & Android", "Editor drag & drop", "1.000 push/mes"],
  },
  {
    name: "Growth",
    price: 149,
    description: "Herramientas para vender más",
    features: [
      "Todo lo de Starter",
      "Carrito abandonado y back in stock",
      "White label",
    ],
    highlighted: true,
  },
  {
    name: "Scale",
    price: 349,
    description: "Marketing avanzado y exclusividad",
    features: [
      "Todo lo de Growth",
      "50.000 push segmentados",
      "Drops y productos exclusivos",
    ],
  },
];

export function PricingPreview() {
  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-6">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm text-gray-500 uppercase tracking-widest font-medium">
            Precios
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight text-gray-950">
            Planes simples,
            <br />
            sin sorpresas
          </h2>
          <p className="mt-6 text-lg text-gray-500">
            Empezá gratis y escalá a medida que tu app crece.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <AnimatedSection key={plan.name} delay={i * 0.1}>
              <div
                className={`relative h-full rounded-2xl p-8 transition-all duration-500 ${
                  plan.highlighted
                    ? "bg-gray-950 text-white shadow-2xl shadow-gray-950/20 scale-[1.02]"
                    : "bg-white border border-gray-200"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-white text-gray-950 text-xs font-bold px-4 py-1 rounded-full">
                      Más popular
                    </span>
                  </div>
                )}

                <h3
                  className={`text-lg font-bold font-display ${
                    plan.highlighted ? "text-white" : "text-gray-950"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm mt-1 mb-4 ${
                    plan.highlighted ? "text-white/70" : "text-gray-500"
                  }`}
                >
                  {plan.description}
                </p>

                <div className="flex items-baseline gap-1 mb-6">
                  <span
                    className={`text-sm ${
                      plan.highlighted ? "text-white/70" : "text-gray-500"
                    }`}
                  >
                    USD
                  </span>
                  <span
                    className={`text-4xl font-bold font-display tracking-tight ${
                      plan.highlighted ? "text-white" : "text-gray-950"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm ${
                      plan.highlighted ? "text-white/70" : "text-gray-500"
                    }`}
                  >
                    /mes
                  </span>
                </div>

                <ul className="space-y-2.5 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5">
                      <Check
                        className={`w-4 h-4 shrink-0 ${
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
          ))}
        </div>

        <AnimatedSection delay={0.3} className="text-center mt-12">
          <a
            href="/precios"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-gray-950 text-white text-[15px] font-medium rounded-full transition-all duration-300 hover:bg-gray-800 hover:shadow-2xl hover:shadow-gray-950/25"
          >
            Ver todos los planes y comparar
            <ArrowRight className="w-4 h-4" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
