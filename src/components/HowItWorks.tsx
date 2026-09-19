"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { Star } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const steps = [
  {
    number: "01",
    title: "Conectá tu Tiendanube",
    description:
      "Instalá Saru Apps desde el panel de Tiendanube. En un clic, tus productos, categorías y configuración se importan automáticamente.",
    detail: "Integración en 30 segundos",
  },
  {
    number: "02",
    title: "Diseñá tu app",
    description:
      "Usá nuestro editor visual para personalizar cada pantalla. Arrastrá componentes, elegí colores, tipografías y armá la experiencia ideal para tus clientes.",
    detail: "Sin necesidad de código",
  },
  {
    number: "03",
    title: "Activá engagement",
    description:
      "Configurá notificaciones push, carrito abandonado, drops exclusivos y herramientas de engagement. Convertí compradores ocasionales en clientes recurrentes.",
    detail: "Aumentá tus ventas +35%",
  },
  {
    number: "04",
    title: "Publicá y crecé",
    description:
      "Nosotros nos encargamos de publicar tu app en App Store y Google Play. Vos enfocate en vender, nosotros en la tecnología.",
    detail: "iOS & Android",
  },
];

/* ── Step Scene Illustrations ─────────────────────────────── */

function StepScene({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 mb-6 overflow-hidden">
        {/* Connection flow: Tiendanube -> line -> Saru */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center">
            <img src="/tiendanube-icon.svg" alt="" className="w-5 h-5 opacity-70" />
          </div>

          {/* Simple connecting line */}
          <div className="flex-1 mx-3 relative h-px">
            <div className="absolute inset-0 bg-white/10" />
          </div>

          <div className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center">
            <span className="text-[10px] font-bold text-white/60">SA</span>
          </div>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-3 gap-1.5 mb-3">
          {["142 productos", "8 categorías", "34 pedidos"].map((item) => (
            <div
              key={item}
              className="rounded-lg border border-white/10 bg-white/[0.03] p-2 text-center"
            >
              <span className="text-[8px] text-white/50 font-medium">{item}</span>
            </div>
          ))}
        </div>

        {/* Connect indicator */}
        <div className="rounded-lg border border-white/10 p-2 flex items-center justify-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
          <span className="text-[9px] text-white/50 font-medium">Conectado</span>
        </div>
      </div>
    );
  }

  if (index === 1) {
    return (
      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 mb-6 overflow-hidden">
        <div className="flex gap-3 items-start">
          {/* Draggable component list */}
          <div className="w-[40%] space-y-1.5">
            <span className="text-[7px] text-white/25 uppercase tracking-wider font-medium">Componentes</span>
            {[
              { name: "Banner", active: false },
              { name: "Productos", active: true },
              { name: "Categorías", active: false },
              { name: "Timer", active: false },
            ].map((comp) => (
              <div
                key={comp.name}
                className={`rounded-md px-2 py-1.5 text-[8px] flex items-center gap-1.5 ${
                  comp.active
                    ? "text-white/80 border border-white/20 bg-white/[0.05]"
                    : "text-white/30 bg-white/[0.02]"
                }`}
              >
                <span className="text-white/20 text-[6px]">::</span>
                {comp.name}
              </div>
            ))}
            {/* Color palette */}
            <div className="flex gap-1.5 pt-2 mt-2 border-t border-white/[0.06]">
              {["#fff", "#818cf8", "#ec4899", "#f59e0b"].map((color, i) => (
                <div
                  key={color}
                  className="w-3.5 h-3.5 rounded-full"
                  style={{ backgroundColor: color, opacity: i === 0 ? 0.9 : 0.5 }}
                />
              ))}
            </div>
          </div>

          {/* Phone frame */}
          <div className="flex-1 flex justify-center">
            <div className="w-[76px] border border-white/10 rounded-[12px] p-[3px]">
              <div className="bg-black rounded-[10px] overflow-hidden">
                <div className="h-2.5 flex justify-center items-end">
                  <div className="w-7 h-1 bg-white/10 rounded-full" />
                </div>
                <div className="px-1 pb-1.5 space-y-1">
                  <div className="h-6 rounded-[4px] border border-white/10 bg-white/[0.04]" />
                  <div className="grid grid-cols-2 gap-[2px]">
                    <div className="aspect-square rounded-[2px] bg-white/[0.06]" />
                    <div className="aspect-square rounded-[2px] bg-white/[0.04]" />
                    <div className="aspect-square rounded-[2px] bg-white/[0.04]" />
                    <div className="aspect-square rounded-[2px] bg-white/[0.06]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (index === 2) {
    const notifications = [
      { label: "Carrito abandonado" },
      { label: "Oferta exclusiva" },
      { label: "Pedido confirmado" },
    ];

    return (
      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 mb-6 overflow-hidden">
        {/* Notification cards */}
        <div className="space-y-1.5 mb-3">
          {notifications.map((n) => (
            <div
              key={n.label}
              className="rounded-lg border border-white/10 px-3 py-2 flex items-center gap-2"
            >
              <div className="w-5 h-5 rounded bg-white/[0.06] shrink-0" />
              <div>
                <div className="text-[8px] text-white/60 font-medium">{n.label}</div>
                <div className="w-12 h-0.5 rounded bg-white/10 mt-0.5" />
              </div>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-1.5">
          {[
            { label: "Enviados", value: "12,430" },
            { label: "Apertura", value: "38%" },
            { label: "Ventas", value: "+52%" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg border border-white/10 py-2 text-center"
            >
              <span className="text-[10px] text-white/80 font-bold block">{stat.value}</span>
              <span className="text-[7px] text-white/30">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Step 4: Publish and grow
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 mb-6 overflow-hidden">
      {/* Store cards */}
      <div className="space-y-2 mb-3">
        {[
          {
            store: "App Store",
            icon: (
              <svg className="w-4 h-4 text-white/60" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
            ),
          },
          {
            store: "Google Play",
            icon: (
              <svg className="w-4 h-4 text-white/60" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.4l2.834 1.64a1 1 0 0 1 0 1.726l-2.834 1.64-2.534-2.533 2.534-2.473zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
              </svg>
            ),
          },
        ].map((item) => (
          <div
            key={item.store}
            className="rounded-lg border border-white/10 p-2.5 flex items-center gap-2.5"
          >
            <div className="w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center shrink-0">
              {item.icon}
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[8px] text-white/40 font-medium block">{item.store}</span>
              <span className="text-[9px] text-white/70 font-semibold">Mi Tienda App</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
              <span className="text-[7px] text-white/50 font-medium">Publicada</span>
            </div>
          </div>
        ))}
      </div>

      {/* Stats counters */}
      <div className="flex gap-1.5 mb-2">
        {[
          { label: "Descargas", val: "1,847" },
          { label: "Rating", val: "4.8" },
          { label: "Activos", val: "923" },
        ].map((s) => (
          <div
            key={s.label}
            className="flex-1 rounded-lg border border-white/10 py-2 text-center"
          >
            <span className="text-[10px] text-white/80 font-bold block">{s.val}</span>
            <span className="text-[6px] text-white/30">{s.label}</span>
          </div>
        ))}
      </div>

      {/* Star rating row */}
      <div className="flex items-center justify-center gap-0.5">
        {[1, 2, 3, 4, 5].map((s) => (
          <Star
            key={s}
            className={`w-2.5 h-2.5 ${s <= 4 ? "text-white/60 fill-white/40" : "text-white/20 fill-white/10"}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ── Main Component ─────────────────────────────────────── */

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="py-32 bg-[#000000] text-white relative overflow-hidden"
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="font-display text-[53px] md:text-[70px] font-bold text-white tracking-[-2.44px] md:tracking-[-3.5px] leading-[1]">
            De tu tienda a una app
            <br />
            en 4 simples pasos
          </h2>
          <p className="mt-6 text-[15px] text-white/60">
            No necesitás experiencia técnica. Nuestro proceso está diseñado para
            que puedas lanzar tu app en tiempo récord.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {/* Simple connection line */}
          <div className="absolute top-12 left-[12.5%] right-[12.5%] h-px hidden lg:block bg-white/10" />

          {steps.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 0.12}>
              <div className="relative">
                {/* Step number */}
                <div className="mb-5">
                  <div className="w-14 h-14 rounded-[22px] border border-white/10 flex items-center justify-center">
                    <span className="text-xl font-bold font-display text-white/80">
                      {step.number}
                    </span>
                  </div>
                </div>

                <h3 className="text-[21px] font-bold font-display text-white tracking-[-0.63px] mb-2">
                  {step.title}
                </h3>
                <p className="text-white/60 text-[15px] leading-relaxed mb-5">
                  {step.description}
                </p>

                {/* Scene illustration */}
                <StepScene index={i} />

                {/* Detail badge */}
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white/50 rounded-full px-3 py-1.5 border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  {step.detail}
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
