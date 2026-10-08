"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { useDictionary } from "@/i18n/DictionaryProvider";

const ease = [0.16, 1, 0.3, 1] as const;

const integrationStyles = [
  { color: "from-blue-500/10 to-indigo-500/10", borderColor: "group-hover:border-blue-200", glowColor: "bg-blue-500/5" },
  { color: "from-green-500/10 to-emerald-500/10", borderColor: "group-hover:border-green-200", glowColor: "bg-green-500/5" },
  { color: "from-cyan-500/10 to-teal-500/10", borderColor: "group-hover:border-cyan-200", glowColor: "bg-cyan-500/5" },
  { color: "from-purple-500/10 to-pink-500/10", borderColor: "group-hover:border-purple-200", glowColor: "bg-purple-500/5" },
];

export function Integrations() {
  const { dict } = useDictionary();
  const t = dict.integrations;

  const integrations = [
    { name: t.tiendanube, description: t.tiendanubeDesc, icon: "/tiendanube-icon.svg", features: [t.tiendanubeF1, t.tiendanubeF2, t.tiendanubeF3, t.tiendanubeF4] },
    { name: t.pagonube, description: t.pagonubeDesc, icon: "/tiendanube-icon.svg", features: [t.pagonubeF1, t.pagonubeF2, t.pagonubeF3, t.pagonubeF4] },
    { name: t.envionube, description: t.envionubeDesc, icon: "/tiendanube-icon.svg", features: [t.envionubeF1, t.envionubeF2, t.envionubeF3, t.envionubeF4] },
    { name: t.marketingnube, description: t.marketingnubeDesc, icon: "/tiendanube-icon.svg", features: [t.marketingnubeF1, t.marketingnubeF2, t.marketingnubeF3, t.marketingnubeF4] },
  ];

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
            {t.label}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-gray-950">
            {t.title}
          </h2>
          <p className="mt-6 text-lg text-gray-500">
            {t.subtitle}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {integrations.map((integration, i) => {
            const style = integrationStyles[i];
            return (
              <AnimatedSection key={integration.name} delay={i * 0.1}>
                <div className="group relative h-full rounded-2xl overflow-hidden">
                  <div className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-br ${style.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className={`relative h-full bg-white rounded-2xl border border-gray-200 ${style.borderColor} p-8 transition-all duration-500 hover:shadow-xl hover:shadow-gray-200/50`}>
                    <div className={`absolute top-0 right-0 w-40 h-40 ${style.glowColor} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                    <div className="relative">
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
