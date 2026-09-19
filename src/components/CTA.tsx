"use client";

import { AnimatedSection } from "./AnimatedSection";

export function CTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-[53px] md:text-[70px] font-bold text-black tracking-tight leading-[1]">
              Lanzá tu app hoy
            </h2>
            <p className="mt-6 text-[17px] md:text-[19px] text-[#5e5e5e] max-w-lg mx-auto leading-relaxed">
              Creá la app de tu tienda Tiendanube en minutos. Empezá gratis, sin
              tarjeta de crédito.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://app.saruapps.com/register"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#3b82f6] text-white text-[15px] font-medium rounded-full transition-opacity duration-300 hover:opacity-90"
              >
                Empezar gratis
              </a>
              <a
                href="https://calendly.com/saruapps/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-[#171717] text-[15px] font-medium rounded-full border border-[#171717] transition-opacity duration-300 hover:opacity-70"
              >
                Agendar una demo
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
