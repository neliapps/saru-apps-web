"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";

const ease = [0.16, 1, 0.3, 1] as const;

const integrations = [
  {
    name: "Tiendanube",
    description:
      "Sincronizá productos, stock, precios y pedidos en tiempo real. Conectá tu tienda en un clic.",
    icon: "/tiendanube-icon.svg",
    features: ["Productos y categorías", "Stock en tiempo real", "Pedidos y clientes", "Checkout nativo"],
    color: "from-blue-500/10 to-indigo-500/10",
    borderColor: "group-hover:border-blue-200",
    glowColor: "bg-blue-500/5",
  },
  {
    name: "MarketingNube",
    description:
      "Potenciá tus campañas de marketing con la integración nativa de MarketingNube.",
    icon: "/tiendanube-icon.svg",
    features: ["Campañas automatizadas", "Segmentación de audiencias", "Email marketing", "Métricas unificadas"],
    color: "from-purple-500/10 to-pink-500/10",
    borderColor: "group-hover:border-purple-200",
    glowColor: "bg-purple-500/5",
  },
];

export function Integrations() {
  return (
    <section className="py-32 bg-gray-50 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage: "radial-gradient(circle, #d4d4d8 0.5px, transparent 0.5px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-transparent to-gray-50" />

      <div className="relative max-w-[1280px] mx-auto px-6">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-sm text-gray-600 text-[13px] font-medium border border-gray-200/60 mb-6">
            Integraciones
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-gray-950">
            Conectá con tu ecosistema
          </h2>
          <p className="mt-6 text-lg text-gray-500">
            Saru Apps se integra de forma nativa con las herramientas que ya usás
            para gestionar tu negocio.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {integrations.map((integration, i) => (
            <AnimatedSection key={integration.name} delay={i * 0.1}>
              <div className={`group relative h-full rounded-2xl overflow-hidden`}>
                {/* Gradient border */}
                <div className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-br ${integration.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className={`relative h-full bg-white rounded-2xl border border-gray-200 ${integration.borderColor} p-8 transition-all duration-500 hover:shadow-xl hover:shadow-gray-200/50`}>
                  {/* Glow */}
                  <div className={`absolute top-0 right-0 w-40 h-40 ${integration.glowColor} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="relative">
                    {/* Icon + Name */}
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="w-14 h-14 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center p-2.5"
                      >
                        <img
                          src={integration.icon}
                          alt={integration.name}
                          className="w-full h-full object-contain"
                        />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-950 font-display">
                          {integration.name}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm text-gray-500 leading-relaxed mb-6">
                      {integration.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-2">
                      {integration.features.map((feature, j) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, y: 8 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.2 + j * 0.05, ease }}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50 group-hover:bg-gray-100/80 transition-colors duration-300"
                        >
                          <svg className="w-3.5 h-3.5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-[12px] text-gray-700 font-medium">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
