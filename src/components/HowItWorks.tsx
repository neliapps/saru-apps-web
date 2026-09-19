"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { Star } from "lucide-react";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const steps = [
  {
    number: "01",
    title: "Conect\u00e1 tu Tiendanube",
    description:
      "Instal\u00e1 Saru Apps desde el panel de Tiendanube. En un clic, tus productos, categor\u00edas y configuraci\u00f3n se importan autom\u00e1ticamente.",
    detail: "Integraci\u00f3n en 30 segundos",
  },
  {
    number: "02",
    title: "Dise\u00f1\u00e1 tu app",
    description:
      "Us\u00e1 nuestro editor visual para personalizar cada pantalla. Arrastr\u00e1 componentes, eleg\u00ed colores, tipograf\u00edas y arm\u00e1 la experiencia ideal para tus clientes.",
    detail: "Sin necesidad de c\u00f3digo",
  },
  {
    number: "03",
    title: "Activ\u00e1 engagement",
    description:
      "Configur\u00e1 notificaciones push, carrito abandonado, drops exclusivos y herramientas de engagement. Convert\u00ed compradores ocasionales en clientes recurrentes.",
    detail: "Aument\u00e1 tus ventas +35%",
  },
  {
    number: "04",
    title: "Public\u00e1 y crec\u00e9",
    description:
      "Nosotros nos encargamos de publicar tu app en App Store y Google Play. Vos enfocate en vender, nosotros en la tecnolog\u00eda.",
    detail: "iOS & Android",
  },
];

const stepColors = [
  {
    gradient: "from-blue-500/20 to-indigo-500/20",
    border: "border-blue-400/20",
    hoverGlow: "group-hover:shadow-blue-500/10",
    textColor: "text-blue-300",
    badgeBg: "bg-blue-500/10",
    accent: "blue",
  },
  {
    gradient: "from-purple-500/20 to-violet-500/20",
    border: "border-purple-400/20",
    hoverGlow: "group-hover:shadow-purple-500/10",
    textColor: "text-purple-300",
    badgeBg: "bg-purple-500/10",
    accent: "purple",
  },
  {
    gradient: "from-pink-500/20 to-rose-500/20",
    border: "border-pink-400/20",
    hoverGlow: "group-hover:shadow-pink-500/10",
    textColor: "text-pink-300",
    badgeBg: "bg-pink-500/10",
    accent: "pink",
  },
  {
    gradient: "from-emerald-500/20 to-green-500/20",
    border: "border-emerald-400/20",
    hoverGlow: "group-hover:shadow-emerald-500/10",
    textColor: "text-emerald-300",
    badgeBg: "bg-emerald-500/10",
    accent: "emerald",
  },
];

/* ─── Step Scene Illustrations ─────────────────────────────── */

function StepScene({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-4 mb-6 overflow-hidden relative">
        {/* Connection flow: Tiendanube -> line -> Saru */}
        <div className="flex items-center justify-between mb-4">
          {/* Tiendanube icon */}
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-400/15 flex items-center justify-center">
            <img src="/tiendanube-icon.svg" alt="" className="w-5 h-5 opacity-70" />
          </div>

          {/* Animated connecting line with traveling dots */}
          <div className="flex-1 mx-3 relative h-[2px]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 via-indigo-500/30 to-blue-500/20" />
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-400/80"
              style={{ filter: "blur(1px)" }}
              animate={{ left: ["0%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 0.5 }}
            />
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-indigo-400/60"
              animate={{ left: ["0%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.7, repeatDelay: 0.5 }}
            />
          </div>

          {/* Saru icon */}
          <motion.div
            animate={{ boxShadow: ["0 0 0px rgba(99,102,241,0)", "0 0 16px rgba(99,102,241,0.2)", "0 0 0px rgba(99,102,241,0)"] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-400/15 flex items-center justify-center"
          >
            <span className="text-[10px] font-bold text-indigo-300">SA</span>
          </motion.div>
        </div>

        {/* Stat cards that light up sequentially */}
        <div className="grid grid-cols-3 gap-1.5 mb-3">
          {["142 productos", "8 categor\u00edas", "34 pedidos"].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0.3, scale: 0.97 }}
              animate={{ opacity: [0.3, 1, 0.3], scale: [0.97, 1, 0.97] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.6 }}
              className="rounded-lg bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/[0.08] p-2 text-center"
            >
              <span className="text-[8px] text-white/50 font-medium">{item}</span>
            </motion.div>
          ))}
        </div>

        {/* Connect button with pulsing green glow */}
        <motion.div
          animate={{
            boxShadow: [
              "0 0 0px rgba(74,222,128,0)",
              "0 0 20px rgba(74,222,128,0.2)",
              "0 0 0px rgba(74,222,128,0)",
            ],
          }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="rounded-lg bg-gradient-to-r from-green-500/15 to-emerald-500/15 border border-green-400/25 p-2 flex items-center justify-center gap-2"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <svg className="w-3.5 h-3.5 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M21 12a9 9 0 11-6.219-8.56" />
            </svg>
          </motion.div>
          <span className="text-[9px] text-green-400 font-semibold">Sincronizando...</span>
        </motion.div>
      </div>
    );
  }

  if (index === 1) {
    return (
      <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-4 mb-6 overflow-hidden relative">
        <div className="flex gap-3 items-start">
          {/* Draggable component */}
          <div className="w-[40%] space-y-1.5 relative">
            <span className="text-[7px] text-white/25 uppercase tracking-wider font-medium">Componentes</span>
            {[
              { name: "Banner", active: false },
              { name: "Productos", active: true },
              { name: "Categor\u00edas", active: false },
              { name: "Timer", active: false },
            ].map((comp) => (
              <motion.div
                key={comp.name}
                animate={comp.active ? { x: [0, 18, 0], opacity: [1, 0.5, 1] } : {}}
                transition={{ duration: 3, repeat: Infinity, ease }}
                className={`rounded-md px-2 py-1.5 text-[8px] flex items-center gap-1.5 ${
                  comp.active
                    ? "bg-gradient-to-r from-purple-500/15 to-violet-500/15 text-white/80 border border-purple-400/20"
                    : "text-white/30 bg-white/[0.02]"
                }`}
              >
                <span className="text-white/20 text-[6px]">::</span>
                {comp.name}
              </motion.div>
            ))}
            {/* Color palette */}
            <div className="flex gap-1.5 pt-2 mt-2 border-t border-white/[0.06]">
              {[
                { color: "#fff", ring: true },
                { color: "#818cf8", ring: false },
                { color: "#ec4899", ring: false },
                { color: "#f59e0b", ring: false },
              ].map((c, i) => (
                <motion.div
                  key={c.color}
                  whileHover={{ scale: 1.3 }}
                  className={`w-3.5 h-3.5 rounded-full ${c.ring ? "ring-1 ring-white/30 ring-offset-1 ring-offset-gray-950" : ""}`}
                  style={{ backgroundColor: c.color, opacity: i === 0 ? 0.9 : 0.5 }}
                />
              ))}
            </div>
          </div>

          {/* Phone frame center */}
          <div className="flex-1 flex justify-center">
            <div className="w-[76px] bg-gradient-to-b from-white/10 to-white/[0.05] rounded-[12px] p-[3px] shadow-lg shadow-purple-500/5">
              <div className="bg-gray-950 rounded-[10px] overflow-hidden">
                <div className="h-2.5 flex justify-center items-end">
                  <div className="w-7 h-1 bg-white/10 rounded-full" />
                </div>
                <div className="px-1 pb-1.5 space-y-1">
                  <motion.div
                    animate={{ opacity: [0.2, 0.8, 0.2] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="h-6 rounded-[4px] bg-gradient-to-r from-purple-500/25 to-violet-500/25 border border-purple-400/10"
                  />
                  {/* Content appearing */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: [0, 1, 1, 0], height: ["0px", "24px", "24px", "0px"] }}
                    transition={{ duration: 4, repeat: Infinity, ease }}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-2 gap-[2px]">
                      <div className="aspect-square rounded-[2px] bg-white/[0.08]" />
                      <div className="aspect-square rounded-[2px] bg-white/[0.06]" />
                      <div className="aspect-square rounded-[2px] bg-white/[0.06]" />
                      <div className="aspect-square rounded-[2px] bg-white/[0.08]" />
                    </div>
                  </motion.div>
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
      { label: "Carrito abandonado", borderColor: "border-l-blue-400", delay: 0 },
      { label: "Oferta exclusiva", borderColor: "border-l-orange-400", delay: 0.4 },
      { label: "Pedido confirmado", borderColor: "border-l-green-400", delay: 0.8 },
    ];

    return (
      <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-4 mb-6 overflow-hidden relative">
        {/* Notification cards stacking in */}
        <div className="space-y-1.5 mb-3">
          {notifications.map((n, i) => (
            <motion.div
              key={n.label}
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: [40, 0, 0, 40], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: n.delay, ease }}
              className={`rounded-lg bg-white/[0.04] border border-white/[0.08] border-l-2 ${n.borderColor} px-3 py-2 flex items-center gap-2`}
            >
              <div className="w-5 h-5 rounded bg-white/[0.06] shrink-0" />
              <div>
                <div className="text-[8px] text-white/60 font-medium">{n.label}</div>
                <div className="w-12 h-0.5 rounded bg-white/10 mt-0.5" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats row with count-up appearance */}
        <div className="grid grid-cols-3 gap-1.5">
          {[
            { label: "Enviados", value: "12,430" },
            { label: "Apertura", value: "38%" },
            { label: "Ventas", value: "+52%" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0.4 }}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
              className="rounded-lg bg-gradient-to-b from-white/[0.05] to-transparent border border-white/[0.06] py-2 text-center"
            >
              <span className="text-[10px] text-white/80 font-bold block">{stat.value}</span>
              <span className="text-[7px] text-white/30">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  // Step 4: Publish and grow
  return (
    <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-4 mb-6 overflow-hidden relative">
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
            gradientFrom: "from-blue-500/15",
            gradientTo: "to-cyan-500/15",
          },
          {
            store: "Google Play",
            icon: (
              <svg className="w-4 h-4 text-white/60" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.4l2.834 1.64a1 1 0 0 1 0 1.726l-2.834 1.64-2.534-2.533 2.534-2.473zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
              </svg>
            ),
            gradientFrom: "from-green-500/15",
            gradientTo: "to-emerald-500/15",
          },
        ].map((item, i) => (
          <motion.div
            key={item.store}
            initial={{ opacity: 0.6 }}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.8 }}
            className="rounded-lg bg-white/[0.04] border border-white/[0.06] p-2.5 flex items-center gap-2.5"
          >
            <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${item.gradientFrom} ${item.gradientTo} border border-white/[0.08] flex items-center justify-center shrink-0`}>
              {item.icon}
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[8px] text-white/40 font-medium block">{item.store}</span>
              <span className="text-[9px] text-white/70 font-semibold">Mi Tienda App</span>
            </div>
            <div className="flex items-center gap-1">
              <motion.div
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                className="w-1.5 h-1.5 rounded-full bg-green-400"
              />
              <span className="text-[7px] text-green-400/80 font-medium">Publicada</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stats counters */}
      <div className="flex gap-1.5 mb-2">
        {[
          { label: "Descargas", val: "1,847" },
          { label: "Rating", val: "4.8" },
          { label: "Activos", val: "923" },
        ].map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0.5 }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
            className="flex-1 rounded-lg bg-gradient-to-b from-white/[0.05] to-transparent border border-white/[0.06] py-2 text-center"
          >
            <span className="text-[10px] text-white/80 font-bold block">{s.val}</span>
            <span className="text-[6px] text-white/30">{s.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Star rating row */}
      <div className="flex items-center justify-center gap-0.5">
        {[1, 2, 3, 4, 5].map((s) => (
          <motion.div
            key={s}
            initial={{ opacity: 0.3 }}
            animate={{ opacity: [0.3, s <= 4 ? 0.9 : 0.5, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: s * 0.15 }}
          >
            <Star className="w-2.5 h-2.5 text-yellow-400 fill-yellow-400/60" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ─── Main Component ─────────────────────────────────────── */

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="py-32 bg-gray-950 text-white relative overflow-hidden"
    >
      {/* ── Animated mesh gradient aurora ──────────────── */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%]"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          style={{
            background:
              "conic-gradient(from 0deg at 50% 50%, rgba(99,102,241,0.06) 0deg, transparent 60deg, rgba(168,85,247,0.05) 120deg, transparent 180deg, rgba(236,72,153,0.04) 240deg, transparent 300deg, rgba(99,102,241,0.06) 360deg)",
          }}
        />
        <motion.div
          className="absolute -top-1/3 -right-1/3 w-[150%] h-[150%]"
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          style={{
            background:
              "conic-gradient(from 180deg at 50% 50%, rgba(16,185,129,0.04) 0deg, transparent 90deg, rgba(99,102,241,0.05) 180deg, transparent 270deg, rgba(16,185,129,0.04) 360deg)",
          }}
        />
      </div>

      {/* ── Radial glow centered on section ────────────── */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(99,102,241,0.06) 0%, transparent 70%)",
        }}
      />

      {/* ── Grid lines (more visible) ──────────────────── */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-6">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-24">
          <span className="text-sm text-white/60 uppercase tracking-widest font-medium">
            C\u00f3mo funciona
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight text-white">
            De tu tienda a una app
            <br />
            en 4 simples pasos
          </h2>
          <p className="mt-6 text-lg text-white/70">
            No necesit\u00e1s experiencia t\u00e9cnica. Nuestro proceso est\u00e1 dise\u00f1ado para
            que puedas lanzar tu app en tiempo r\u00e9cord.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* ── Animated gradient connection line ──────── */}
          <div className="absolute top-12 left-[12.5%] right-[12.5%] h-px hidden lg:block overflow-hidden">
            {/* Base line */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/15 to-emerald-500/10" />
            {/* Shimmer traveling along */}
            <motion.div
              className="absolute top-0 h-full w-24"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.5), rgba(236,72,153,0.4), transparent)",
              }}
              animate={{ left: ["-96px", "100%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
            />
          </div>

          {steps.map((step, i) => {
            const colors = stepColors[i];
            return (
              <AnimatedSection key={step.number} delay={i * 0.12}>
                <div className={`relative group`}>
                  {/* Step number with gradient background */}
                  <div className="relative z-10 mb-5">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colors.gradient} ${colors.border} border flex items-center justify-center transition-all duration-500 group-hover:shadow-lg ${colors.hoverGlow}`}
                    >
                      <span className={`text-xl font-bold font-display ${colors.textColor}`}>
                        {step.number}
                      </span>
                    </motion.div>
                  </div>

                  <h3 className="text-lg font-bold font-display mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-5">
                    {step.description}
                  </p>

                  {/* Scene illustration */}
                  <StepScene index={i} />

                  {/* Detail badge with gradient background and pulsing dot */}
                  <span className={`inline-flex items-center gap-1.5 text-xs font-medium text-white/70 ${colors.badgeBg} rounded-full px-3 py-1.5 border border-white/[0.06]`}>
                    <motion.span
                      animate={{ scale: [1, 1.5, 1], opacity: [0.8, 1, 0.8] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-1.5 h-1.5 rounded-full bg-green-400"
                    />
                    {step.detail}
                  </span>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
