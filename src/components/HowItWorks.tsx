"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";

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
      "Configurá notificaciones push, programa de puntos y cupones exclusivos para la app. Convertí compradores ocasionales en clientes recurrentes.",
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

function StepScene({ index }: { index: number }) {
  if (index === 0) {
    // Mini Tiendanube dashboard connecting
    return (
      <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-3 mb-6 overflow-hidden">
        {/* Mini browser bar */}
        <div className="flex items-center gap-1.5 mb-3">
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
          </div>
          <div className="flex-1 h-4 rounded bg-white/[0.04] flex items-center justify-center">
            <span className="text-[7px] text-white/20 font-mono">mitienda.tiendanube.com/admin</span>
          </div>
        </div>
        {/* Dashboard content */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <img src="/tiendanube-icon.svg" alt="" className="w-5 h-5 opacity-60" />
            <div className="flex-1">
              <div className="w-16 h-1.5 rounded-full bg-white/10" />
              <div className="w-10 h-1 rounded-full bg-white/[0.05] mt-1" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            {["142 productos", "8 categorías", "34 pedidos"].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0.3 }}
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                className="rounded-md bg-white/[0.04] border border-white/[0.06] p-1.5 text-center"
              >
                <span className="text-[7px] text-white/40">{item}</span>
              </motion.div>
            ))}
          </div>
          {/* Connect button */}
          <motion.div
            animate={{ boxShadow: ["0 0 0px rgba(74,222,128,0)", "0 0 12px rgba(74,222,128,0.15)", "0 0 0px rgba(74,222,128,0)"] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="rounded-lg bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/20 p-1.5 flex items-center justify-center gap-1.5"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <svg className="w-3 h-3 text-green-400/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M21 12a9 9 0 11-6.219-8.56" />
              </svg>
            </motion.div>
            <span className="text-[8px] text-green-400/80 font-semibold">Sincronizando con Saru Apps...</span>
          </motion.div>
        </div>
      </div>
    );
  }

  if (index === 1) {
    // Mini editor with phone preview
    return (
      <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-3 mb-6 overflow-hidden">
        <div className="flex gap-2">
          {/* Component sidebar */}
          <div className="w-[45%] space-y-1">
            <span className="text-[7px] text-white/25 uppercase tracking-wider font-medium">Componentes</span>
            {[
              { name: "Banner", active: false },
              { name: "Productos", active: true },
              { name: "Categorías", active: false },
              { name: "Timer", active: false },
            ].map((comp, i) => (
              <motion.div
                key={comp.name}
                animate={comp.active ? { x: [0, 3, 0] } : {}}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className={`rounded px-1.5 py-1 text-[8px] flex items-center gap-1 cursor-grab ${
                  comp.active
                    ? "bg-white/10 text-white/70 border border-white/10"
                    : "text-white/30 hover:text-white/40"
                }`}
              >
                <span className="text-white/20 text-[6px]">⋮⋮</span>
                {comp.name}
              </motion.div>
            ))}
            {/* Color picker mini */}
            <div className="flex gap-1 pt-1.5 mt-1.5 border-t border-white/[0.05]">
              {["#fff", "#6366f1", "#ec4899", "#f59e0b"].map((c, i) => (
                <div
                  key={c}
                  className={`w-3 h-3 rounded-full border ${i === 0 ? "border-white/30" : "border-white/10"}`}
                  style={{ backgroundColor: c, opacity: 0.6 }}
                />
              ))}
            </div>
          </div>
          {/* Phone preview */}
          <div className="flex-1 flex justify-center">
            <div className="w-[72px] bg-white/[0.08] rounded-[10px] p-[3px]">
              <div className="bg-gray-950 rounded-[8px] overflow-hidden">
                <div className="h-2 flex justify-center items-end">
                  <div className="w-6 h-1 bg-white/10 rounded-full" />
                </div>
                <div className="px-1 pb-1 space-y-0.5">
                  <motion.div
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="h-5 rounded-[3px] bg-gradient-to-r from-indigo-500/20 to-purple-500/20"
                  />
                  <div className="grid grid-cols-2 gap-[2px]">
                    <div className="aspect-square rounded-[2px] bg-white/[0.06]" />
                    <div className="aspect-square rounded-[2px] bg-white/[0.08]" />
                    <div className="aspect-square rounded-[2px] bg-white/[0.08]" />
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
    // Phone with push notification sliding in
    return (
      <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-3 mb-6 overflow-hidden">
        <div className="flex items-center gap-3">
          {/* Stats column */}
          <div className="flex-1 space-y-1.5">
            {[
              { label: "Push enviados", value: "12,430", trend: "+24%" },
              { label: "Tasa apertura", value: "38%", trend: "+8%" },
              { label: "Ventas x push", value: "$2,840", trend: "+52%" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0.5 }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                className="rounded-lg bg-white/[0.03] border border-white/[0.06] px-2 py-1.5"
              >
                <div className="flex justify-between items-center">
                  <span className="text-[7px] text-white/30">{stat.label}</span>
                  <span className="text-[7px] text-green-400/60 font-medium">{stat.trend}</span>
                </div>
                <span className="text-[10px] text-white/70 font-bold">{stat.value}</span>
              </motion.div>
            ))}
          </div>
          {/* Phone with notification */}
          <div className="w-[72px] shrink-0">
            <div className="bg-white/[0.08] rounded-[10px] p-[3px]">
              <div className="bg-gray-950 rounded-[8px] overflow-hidden relative">
                <div className="h-2 flex justify-center items-end">
                  <div className="w-6 h-1 bg-white/10 rounded-full" />
                </div>
                <div className="px-1 pb-1 space-y-0.5 opacity-30">
                  <div className="h-5 rounded-[3px] bg-white/10" />
                  <div className="grid grid-cols-2 gap-[2px]">
                    <div className="aspect-square rounded-[2px] bg-white/10" />
                    <div className="aspect-square rounded-[2px] bg-white/10" />
                  </div>
                </div>
                {/* Push notification overlay */}
                <motion.div
                  animate={{ y: ["-100%", "0%"] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-1 left-0.5 right-0.5"
                >
                  <div className="bg-white/[0.12] backdrop-blur-md rounded-[4px] p-1 border border-white/10">
                    <div className="flex items-center gap-1">
                      <div className="w-2.5 h-2.5 rounded bg-white/20 shrink-0" />
                      <div>
                        <div className="w-10 h-0.5 rounded-full bg-white/30" />
                        <div className="w-7 h-0.5 rounded-full bg-white/15 mt-0.5" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Step 4: App Store / Play Store listing
  return (
    <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-3 mb-6 overflow-hidden">
      {/* Store listing cards */}
      <div className="space-y-2">
        {[
          { store: "App Store", icon: (
            <svg className="w-3.5 h-3.5 text-white/50" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
          ), status: "Publicada" },
          { store: "Google Play", icon: (
            <svg className="w-3.5 h-3.5 text-white/50" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.4l2.834 1.64a1 1 0 0 1 0 1.726l-2.834 1.64-2.534-2.533 2.534-2.473zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
            </svg>
          ), status: "Publicada" },
        ].map((item, i) => (
          <motion.div
            key={item.store}
            initial={{ opacity: 0.6 }}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.8 }}
            className="rounded-lg bg-white/[0.04] border border-white/[0.06] p-2 flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-white/10 to-white/[0.03] border border-white/[0.08] flex items-center justify-center shrink-0">
              {item.icon}
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[8px] text-white/50 font-medium block">{item.store}</span>
              <span className="text-[9px] text-white/70 font-semibold">Mi Tienda App</span>
            </div>
            <div className="flex items-center gap-1">
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                className="w-1.5 h-1.5 rounded-full bg-green-400/60"
              />
              <span className="text-[7px] text-green-400/60 font-medium">{item.status}</span>
            </div>
          </motion.div>
        ))}
      </div>
      {/* Download stats */}
      <div className="mt-2 flex gap-1.5">
        {[
          { label: "Descargas", val: "1,847" },
          { label: "Rating", val: "4.8" },
          { label: "Activos", val: "923" },
        ].map((s) => (
          <div key={s.label} className="flex-1 rounded-md bg-white/[0.03] border border-white/[0.05] py-1.5 text-center">
            <span className="text-[9px] text-white/60 font-bold block">{s.val}</span>
            <span className="text-[6px] text-white/25">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="py-32 bg-gray-950 text-white relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-white/[0.015] rounded-full blur-3xl" />
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
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-24">
          <span className="text-sm text-gray-500 uppercase tracking-widest font-medium">
            Cómo funciona
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight">
            De tu tienda a una app
            <br />
            en 4 simples pasos
          </h2>
          <p className="mt-6 text-lg text-gray-400">
            No necesitás experiencia técnica. Nuestro proceso está diseñado para
            que puedas lanzar tu app en tiempo récord.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connection line */}
          <div className="absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent hidden lg:block" />

          {steps.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 0.12}>
              <div className="relative group">
                {/* Step number */}
                <div className="relative z-10 mb-5">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-500"
                  >
                    <span className="text-xl font-bold font-display text-white/80">
                      {step.number}
                    </span>
                  </motion.div>
                </div>

                <h3 className="text-lg font-bold font-display mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {step.description}
                </p>

                {/* Scene illustration */}
                <StepScene index={i} />

                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white/60 bg-white/5 rounded-full px-3 py-1">
                  <span className="w-1 h-1 rounded-full bg-green-400" />
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
