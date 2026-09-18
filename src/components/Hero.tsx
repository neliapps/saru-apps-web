"use client";

import { motion } from "framer-motion";
import { Smartphone, Bell, TrendingUp, Zap } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const products = [
  { img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=200&h=200&fit=crop", name: "Blazer Oversize", price: "$45.900" },
  { img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=200&h=200&fit=crop", name: "Campera Puffer", price: "$62.500" },
  { img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=200&h=200&fit=crop", name: "Hoodie Essential", price: "$28.900" },
  { img: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=200&h=200&fit=crop", name: "Jean Relaxed Fit", price: "$34.500" },
];

const sidebarItems = ["Inicio", "Productos", "Categorías", "Carrito", "Perfil"];
const engagementItems = ["Push Notifications", "Engagement", "Drops"];
const components = ["Banner", "Productos", "Categorías", "Timer", "Video"];
const colors = ["#0a0a0a", "#6366f1", "#ec4899", "#f59e0b", "#10b981"];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.08),transparent)]" />

      <div className="relative max-w-[1280px] mx-auto px-6 pt-40 pb-24 md:pt-48 md:pb-32">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 text-gray-600 text-[13px] font-medium border border-gray-200/60 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Exclusivo para Tiendanube
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-[-0.03em] font-bold text-gray-950"
          >
            Tu tienda Tiendanube,
            <br />
            <span className="relative inline-block">
              ahora en una app
              <svg
                className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-3"
                viewBox="0 0 300 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M2 8C50 3 100 2 150 4C200 6 250 3 298 7"
                  stroke="#0a0a0a"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 0.5, ease }}
                />
              </svg>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25, ease }}
            className="mt-6 md:mt-8 text-base md:text-lg text-gray-500 max-w-xl mx-auto leading-relaxed"
          >
            Creá tu app móvil sin escribir una línea de código. Editor drag &
            drop, notificaciones push y herramientas de engagement para
            aumentar tus ventas recurrentes.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35, ease }}
            className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="https://app.saruapps.com/register"
              className="group relative inline-flex items-center gap-2 px-7 py-3.5 bg-gray-950 text-white text-[15px] font-medium rounded-full overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-gray-950/25"
            >
              <span className="relative z-10">Empezar gratis</span>
              <svg
                className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-950 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>
            <a
              href="https://calendly.com/saruapps/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-gray-600 text-[15px] font-medium rounded-full border border-gray-200 hover:border-gray-300 hover:text-gray-900 transition-all duration-300"
            >
              Ver cómo funciona
            </a>
          </motion.div>
        </div>

        {/* ═══════════════════════════════════════════════ */}
        {/* APP MOCKUP — Enhanced with staggered animations */}
        {/* ═══════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease }}
          className="mt-16 md:mt-20 relative max-w-5xl mx-auto"
        >
          {/* Glow behind mockup */}
          <div className="absolute -inset-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(99,102,241,0.06),transparent)] pointer-events-none" />

          {/* Browser frame */}
          <div className="relative rounded-2xl border border-gray-200/80 bg-white shadow-[0_8px_60px_-12px_rgba(0,0,0,0.12)] overflow-hidden">
            {/* Browser bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 bg-gray-50/80">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <div className="w-3 h-3 rounded-full bg-[#28C840]" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="flex items-center gap-2 px-12 py-1 rounded-lg bg-white border border-gray-200/60 text-xs text-gray-500 font-mono">
                  <svg className="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  app.saruapps.com
                </div>
              </div>
            </div>

            {/* App UI mockup */}
            <div className="p-6 md:p-8 bg-gradient-to-b from-gray-50/80 to-white">
              <div className="flex gap-6">

                {/* ── Sidebar ── */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7, ease }}
                  className="w-48 bg-white rounded-xl border border-gray-100 p-4 space-y-1 shrink-0 hidden lg:block shadow-sm"
                >
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-7 h-7 rounded-lg bg-gray-950 flex items-center justify-center">
                      <span className="text-white text-[10px] font-bold">S</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">Mi App</span>
                  </div>
                  {sidebarItems.map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.8 + i * 0.05, ease }}
                      className={`px-3 py-2 rounded-lg text-[13px] transition-colors duration-200 ${
                        i === 0
                          ? "bg-gray-950 text-white font-medium"
                          : "text-gray-500 hover:bg-gray-50"
                      }`}
                    >
                      {item}
                    </motion.div>
                  ))}
                  <div className="border-t border-gray-100 pt-3 mt-3">
                    <div className="px-3 py-1.5 text-[10px] text-gray-500 uppercase tracking-wider">
                      Engagement
                    </div>
                    {engagementItems.map((item, i) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 1.1 + i * 0.05, ease }}
                        className="px-3 py-2 rounded-lg text-[13px] text-gray-500 hover:bg-gray-50 transition-colors duration-200"
                      >
                        {item}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* ── Phone preview (center) ── */}
                <div className="flex-1 flex items-center justify-center py-4 relative min-h-[360px] md:min-h-[420px]">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6, ease }}
                    className="w-[220px] md:w-[260px] bg-gray-950 rounded-[2.2rem] p-2 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] relative z-10"
                  >
                    <div className="bg-white rounded-[1.8rem] overflow-hidden">
                      {/* Dynamic Island */}
                      <div className="flex justify-center pt-2">
                        <div className="w-20 h-5 bg-gray-950 rounded-full" />
                      </div>

                      {/* App content */}
                      <div className="px-3 pb-3">
                        {/* Hero banner with gradient animation */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.9, ease }}
                          className="mt-3 rounded-xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 p-3.5 text-white relative overflow-hidden"
                        >
                          {/* Shimmer effect */}
                          <motion.div
                            animate={{ x: ["-100%", "200%"] }}
                            transition={{ duration: 3, delay: 1.5, repeat: 2, ease: "easeInOut" }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent skew-x-12"
                          />
                          <p className="text-[9px] opacity-70 uppercase tracking-wider relative">Nueva Colección</p>
                          <p className="text-[13px] font-bold mt-0.5 relative">Hasta 40% OFF</p>
                          <div className="mt-2 bg-white/20 rounded-full px-2.5 py-0.5 inline-block relative">
                            <span className="text-[8px] font-medium">Comprar ahora →</span>
                          </div>
                        </motion.div>

                        {/* Product grid — staggered entrance */}
                        <div className="mt-2.5 grid grid-cols-2 gap-1.5">
                          {products.map((product, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, y: 15 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.4, delay: 1.0 + i * 0.1, ease }}
                              className="space-y-1"
                            >
                              <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                                <img
                                  src={product.img}
                                  alt={product.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <p className="text-[8px] text-gray-700 font-medium truncate">{product.name}</p>
                              <p className="text-[8px] text-gray-950 font-bold">{product.price}</p>
                            </motion.div>
                          ))}
                        </div>

                        {/* Bottom nav */}
                        <div className="mt-3 flex justify-around py-2 border-t border-gray-100">
                          {[
                            <svg key="home" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2z" /></svg>,
                            <svg key="search" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>,
                            <svg key="heart" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>,
                            <svg key="user" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
                          ].map((icon, i) => (
                            <span key={i} className={i === 0 ? "text-gray-900" : "text-gray-300"}>
                              {icon}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* ── Floating cards (glassmorphism + slide-in) ── */}
                  <motion.div
                    initial={{ opacity: 0, x: 40, y: -10 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.4, ease }}
                    className="absolute right-4 lg:right-12 top-6 backdrop-blur-xl bg-white/90 rounded-xl shadow-[0_8px_32px_-8px_rgba(0,0,0,0.1)] border border-white/60 p-3 hidden md:flex items-center gap-2.5 z-20"
                  >
                    <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center">
                      <Smartphone className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-gray-900">
                        App publicada
                      </p>
                      <p className="text-[10px] text-gray-500">Hace 2 min</p>
                    </div>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -40, y: 10 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.6, ease }}
                    className="absolute left-4 lg:left-12 bottom-12 backdrop-blur-xl bg-white/90 rounded-xl shadow-[0_8px_32px_-8px_rgba(0,0,0,0.1)] border border-white/60 p-3 hidden md:flex items-center gap-2.5 z-20"
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                      <Bell className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-gray-900">
                        +324 push enviados
                      </p>
                      <p className="text-[10px] text-gray-500">Hoy</p>
                    </div>
                  </motion.div>

                  {/* Floating metric card */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.8, ease }}
                    className="absolute right-4 lg:right-16 bottom-16 backdrop-blur-xl bg-white/90 rounded-lg shadow-[0_8px_32px_-8px_rgba(0,0,0,0.1)] border border-white/60 p-2.5 hidden lg:flex items-center gap-2 z-20"
                  >
                    <div className="w-6 h-6 rounded-full bg-purple-50 flex items-center justify-center">
                      <TrendingUp className="w-3 h-3 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold text-gray-900">+42%</p>
                      <p className="text-[8px] text-gray-500">Conversión</p>
                    </div>
                  </motion.div>
                </div>

                {/* ── Right panel ── */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8, ease }}
                  className="w-48 space-y-3 shrink-0 hidden lg:block"
                >
                  {/* Components panel */}
                  <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
                    <p className="text-xs font-semibold text-gray-900 mb-3">
                      Componentes
                    </p>
                    <div className="space-y-1.5">
                      {components.map((comp, i) => (
                        <motion.div
                          key={comp}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 1.0 + i * 0.06, ease }}
                          whileHover={{ x: 3, backgroundColor: "rgb(249 250 251)" }}
                          className={`flex items-center gap-2 px-2 py-1.5 rounded-lg text-[12px] cursor-grab transition-shadow duration-200 ${
                            i === 1
                              ? "bg-gray-950 text-white shadow-md shadow-gray-950/20"
                              : "bg-gray-50 text-gray-600 hover:shadow-sm"
                          }`}
                        >
                          <span className={i === 1 ? "text-white/40" : "text-gray-300"}>⋮⋮</span>
                          {comp}
                          {i === 1 && (
                            <Zap className="w-3 h-3 text-yellow-400 ml-auto" />
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Style panel */}
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 1.3, ease }}
                    className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm"
                  >
                    <p className="text-xs font-semibold text-gray-900 mb-2">
                      Estilo
                    </p>
                    <div className="flex gap-1.5 mb-3">
                      {colors.map((color, i) => (
                        <motion.div
                          key={color}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3, delay: 1.4 + i * 0.05, ease }}
                          className={`w-5 h-5 rounded-full border transition-all duration-200 ${
                            i === 0
                              ? "border-gray-950 ring-2 ring-gray-950/20 ring-offset-1"
                              : "border-gray-200 hover:scale-110"
                          }`}
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-[11px]">
                        <span className="text-gray-500">Radio</span>
                        <span className="text-gray-700 font-medium">12px</span>
                      </div>
                      <div className="flex justify-between text-[11px]">
                        <span className="text-gray-500">Padding</span>
                        <span className="text-gray-700 font-medium">16px</span>
                      </div>
                      <div className="flex justify-between text-[11px]">
                        <span className="text-gray-500">Font</span>
                        <span className="text-gray-700 font-medium">Inter</span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

              </div>
            </div>
          </div>

          {/* Animated drag cursor */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 1, 1, 0],
              x: [120, 80, 0, -60, -60],
              y: [20, 0, -20, -40, -40],
            }}
            transition={{ duration: 3, delay: 2, ease: "easeInOut" }}
            className="absolute top-[55%] right-[28%] z-30 pointer-events-none hidden lg:block"
          >
            <svg width="20" height="24" viewBox="0 0 20 24" fill="none">
              <path d="M4 0L4 16L8 12L12 20L15 18.5L11 10.5L16 10.5L4 0Z" fill="white" stroke="#0a0a0a" strokeWidth="1.5" />
            </svg>
          </motion.div>

          {/* Bottom fade */}
          <div className="absolute -bottom-1 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
