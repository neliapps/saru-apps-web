"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";

export function CTA() {
  return (
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
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-8"
              >
                <span className="text-3xl">🚀</span>
              </motion.div>

              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-white">
                Lanzá tu app hoy
              </h2>
              <p className="mt-6 text-lg text-white/70 max-w-lg mx-auto">
                Unite a las marcas que ya están vendiendo desde su propia app
                móvil. Empezá gratis, sin tarjeta de crédito.
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
  );
}
