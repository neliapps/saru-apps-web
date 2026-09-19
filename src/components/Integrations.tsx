"use client";

import { AnimatedSection } from "./AnimatedSection";

const integrations = [
  {
    name: "Tiendanube",
    description:
      "Sincronizá productos, stock, precios y pedidos en tiempo real. Conectá tu tienda en un clic.",
    icon: "/tiendanube-icon.svg",
    features: ["Productos y categorías", "Stock en tiempo real", "Pedidos y clientes", "Checkout nativo"],
  },
  {
    name: "MarketingNube",
    description:
      "Potenciá tus campañas de marketing con la integración nativa de MarketingNube.",
    icon: "/tiendanube-icon.svg",
    features: ["Campañas automatizadas", "Segmentación de audiencias", "Email marketing", "Métricas unificadas"],
  },
];

export function Integrations() {
  return (
    <section className="py-32 bg-[#e3eeff]">
      <div className="max-w-[1200px] mx-auto px-6">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-[53px] md:text-[70px] lg:text-[80px] font-bold text-black tracking-[-2.44px] md:tracking-[-3.5px] leading-[1]">
            Conectá con tu ecosistema
          </h2>
          <p className="mt-6 text-[15px] text-[#5e5e5e]">
            Saru Apps se integra de forma nativa con las herramientas que ya usás
            para gestionar tu negocio.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {integrations.map((integration, i) => (
            <AnimatedSection key={integration.name} delay={i * 0.1}>
              <div className="h-full bg-white rounded-[22px] border border-[#171717] p-8">
                {/* Icon + Name */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <img
                      src={integration.icon}
                      alt={integration.name}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <h3 className="text-[21px] font-bold text-black font-display tracking-[-0.63px]">
                    {integration.name}
                  </h3>
                </div>

                <p className="text-[15px] text-[#5e5e5e] leading-relaxed mb-6">
                  {integration.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 gap-2">
                  {integration.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2.5"
                    >
                      <svg
                        className="w-4 h-4 text-[#171717] shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-[13px] text-[#171717] font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
