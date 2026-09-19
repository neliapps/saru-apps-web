"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Smartphone, Bell, TrendingUp, Zap, ShoppingCart, Star } from "lucide-react";
import { useRef } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

const products = [
  { img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=200&h=200&fit=crop", name: "Blazer Oversize", price: "$45.900" },
  { img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=200&h=200&fit=crop", name: "Campera Puffer", price: "$62.500" },
  { img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=200&h=200&fit=crop", name: "Hoodie Essential", price: "$28.900" },
  { img: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=200&h=200&fit=crop", name: "Jean Relaxed Fit", price: "$34.500" },
];

function MockupScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [3, -3]), { stiffness: 150, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-500, 500], [-3, 3]), { stiffness: 150, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative"
      style={{ perspective: 1200 }}
    >
      {/* Animated mesh gradient glow */}
      <div className="absolute -inset-20 opacity-60 pointer-events-none">
        <motion.div
          animate={{
            background: [
              "radial-gradient(ellipse 60% 40% at 30% 50%, rgba(99,102,241,0.15), transparent 70%), radial-gradient(ellipse 50% 60% at 70% 50%, rgba(236,72,153,0.1), transparent 70%)",
              "radial-gradient(ellipse 60% 40% at 70% 40%, rgba(99,102,241,0.15), transparent 70%), radial-gradient(ellipse 50% 60% at 30% 60%, rgba(236,72,153,0.1), transparent 70%)",
              "radial-gradient(ellipse 60% 40% at 50% 60%, rgba(99,102,241,0.12), transparent 70%), radial-gradient(ellipse 50% 60% at 50% 40%, rgba(168,85,247,0.1), transparent 70%)",
              "radial-gradient(ellipse 60% 40% at 30% 50%, rgba(99,102,241,0.15), transparent 70%), radial-gradient(ellipse 50% 60% at 70% 50%, rgba(236,72,153,0.1), transparent 70%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="w-full h-full rounded-full blur-3xl"
        />
      </div>

      {/* 3D tilting browser frame */}
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative rounded-2xl overflow-hidden"
      >
        {/* Animated gradient border */}
        <div
          className="absolute -inset-[1px] rounded-2xl opacity-50"
          style={{
            background: "conic-gradient(from var(--angle, 0deg), #e2e8f0 0%, #6366f1 15%, #ec4899 30%, #6366f1 45%, #e2e8f0 60%, #e2e8f0 100%)",
            animation: "spin 8s linear infinite",
          }}
        />
        <div className="relative rounded-2xl bg-white shadow-[0_20px_80px_-20px_rgba(0,0,0,0.15)] overflow-hidden">
          {/* Browser bar */}
          <div className="flex items-center gap-2 px-5 py-3.5 border-b border-gray-100 bg-gray-50/80">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57] shadow-[0_0_4px_rgba(255,95,87,0.4)]" />
              <div className="w-3 h-3 rounded-full bg-[#FEBC2E] shadow-[0_0_4px_rgba(254,188,46,0.4)]" />
              <div className="w-3 h-3 rounded-full bg-[#28C840] shadow-[0_0_4px_rgba(40,200,64,0.4)]" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="flex items-center gap-2 px-16 py-1.5 rounded-lg bg-white border border-gray-200/80 text-xs text-gray-500 font-mono shadow-inner shadow-gray-100/50">
                <svg className="w-3 h-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                app.saruapps.com
              </div>
            </div>
          </div>

          {/* App UI */}
          <div className="p-6 md:p-8 bg-gradient-to-b from-gray-50/80 to-white">
            <div className="flex gap-6">

              {/* ── Sidebar ── */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7, ease }}
                className="w-52 bg-white rounded-2xl border border-gray-100 p-5 shrink-0 hidden lg:block shadow-sm"
              >
                <div className="flex items-center gap-2.5 mb-6">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center shadow-md shadow-gray-900/20">
                    <span className="text-white text-[11px] font-bold">S</span>
                  </div>
                  <div>
                    <span className="text-sm font-bold text-gray-900 block leading-tight">Mi App</span>
                    <span className="text-[10px] text-gray-500">mitienda.com</span>
                  </div>
                </div>

                <div className="space-y-0.5">
                  {["Inicio", "Productos", "Categorías", "Carrito", "Perfil"].map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.85 + i * 0.04, ease }}
                      className={`px-3.5 py-2.5 rounded-xl text-[13px] transition-all duration-200 ${
                        i === 0
                          ? "bg-gray-950 text-white font-medium shadow-md shadow-gray-950/25"
                          : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                      }`}
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>

                <div className="border-t border-gray-100 pt-4 mt-4">
                  <div className="px-3.5 py-1.5 text-[10px] text-gray-500 uppercase tracking-wider font-medium">
                    Engagement
                  </div>
                  {["Push Notifications", "Engagement", "Drops"].map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 1.1 + i * 0.04, ease }}
                      className="px-3.5 py-2.5 rounded-xl text-[13px] text-gray-500 hover:bg-gray-50 hover:text-gray-700 transition-all duration-200"
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* ── Phone preview (center) ── */}
              <div className="flex-1 flex items-center justify-center py-4 relative min-h-[380px] md:min-h-[460px]">
                {/* Phone glow */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-[300px] h-[400px] bg-gradient-to-b from-indigo-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl" />
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.85, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.5, ease }}
                  className="w-[240px] md:w-[280px] bg-gradient-to-b from-gray-900 to-gray-950 rounded-[2.5rem] p-2.5 shadow-[0_25px_80px_-15px_rgba(0,0,0,0.35)] relative z-10"
                >
                  {/* Phone frame highlight */}
                  <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-white/[0.08] to-transparent pointer-events-none" />

                  <div className="bg-white rounded-[2rem] overflow-hidden relative">
                    {/* Dynamic Island */}
                    <div className="flex justify-center pt-2.5 pb-0.5">
                      <div className="w-24 h-6 bg-gray-950 rounded-full flex items-center justify-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-gray-800" />
                      </div>
                    </div>

                    {/* App content */}
                    <div className="px-3.5 pb-3.5">
                      {/* Hero banner */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.9, ease }}
                        className="mt-2 rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 p-4 text-white relative overflow-hidden"
                      >
                        <motion.div
                          animate={{ x: ["-100%", "200%"] }}
                          transition={{ duration: 3, delay: 1.8, repeat: 2, ease: "easeInOut" }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent skew-x-12"
                        />
                        <p className="text-[9px] opacity-60 uppercase tracking-widest relative">Nueva Colección</p>
                        <p className="text-[14px] font-bold mt-0.5 relative leading-tight">Hasta 40% OFF</p>
                        <div className="mt-2.5 bg-white rounded-full px-3 py-1 inline-flex items-center gap-1 relative">
                          <span className="text-[8px] font-semibold text-gray-900">Comprar ahora</span>
                          <svg className="w-2 h-2 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                        </div>
                      </motion.div>

                      {/* Products */}
                      <div className="mt-3 grid grid-cols-2 gap-2">
                        {products.map((product, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 1.0 + i * 0.1, ease }}
                            className="space-y-1"
                          >
                            <div className="aspect-square rounded-xl overflow-hidden bg-gray-100 relative">
                              <img src={product.img} alt={product.name} className="w-full h-full object-cover" />
                              {i === 0 && (
                                <span className="absolute top-1 left-1 bg-red-500 text-white text-[6px] font-bold px-1.5 py-0.5 rounded-full">-40%</span>
                              )}
                            </div>
                            <p className="text-[9px] text-gray-700 font-medium truncate">{product.name}</p>
                            <p className="text-[9px] text-gray-950 font-bold">{product.price}</p>
                          </motion.div>
                        ))}
                      </div>

                      {/* Bottom nav */}
                      <div className="mt-3.5 flex justify-around py-2.5 border-t border-gray-100">
                        {[
                          { icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2z" /></svg>, active: true },
                          { icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35" strokeLinecap="round"/></svg>, active: false },
                          { icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" strokeLinecap="round" strokeLinejoin="round"/></svg>, active: false },
                          { icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" strokeLinecap="round"/><circle cx="12" cy="7" r="4"/></svg>, active: false },
                        ].map((item, i) => (
                          <span key={i} className={item.active ? "text-gray-900" : "text-gray-300"}>
                            {item.icon}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* ── Floating cards ── */}

                {/* App published */}
                <motion.div
                  initial={{ opacity: 0, x: 60, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.5, ease }}
                  className="absolute right-2 lg:right-8 top-4 backdrop-blur-2xl bg-white/80 rounded-2xl shadow-[0_12px_40px_-8px_rgba(0,0,0,0.12)] border border-white/80 p-3.5 hidden md:flex items-center gap-3 z-20"
                >
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-md shadow-green-500/25">
                    <Smartphone className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold text-gray-900">App publicada</p>
                    <p className="text-[10px] text-gray-500">Hace 2 min</p>
                  </div>
                </motion.div>

                {/* Push sent */}
                <motion.div
                  initial={{ opacity: 0, x: -60, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.7, ease }}
                  className="absolute left-2 lg:left-8 bottom-16 backdrop-blur-2xl bg-white/80 rounded-2xl shadow-[0_12px_40px_-8px_rgba(0,0,0,0.12)] border border-white/80 p-3.5 hidden md:flex items-center gap-3 z-20"
                >
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center shadow-md shadow-blue-500/25">
                    <Bell className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold text-gray-900">+324 push enviados</p>
                    <p className="text-[10px] text-gray-500">Hoy</p>
                  </div>
                </motion.div>

                {/* Conversion metric */}
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.9, ease }}
                  className="absolute right-2 lg:right-12 bottom-20 backdrop-blur-2xl bg-white/80 rounded-2xl shadow-[0_12px_40px_-8px_rgba(0,0,0,0.12)] border border-white/80 p-3 hidden lg:flex items-center gap-2.5 z-20"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-400 to-violet-500 flex items-center justify-center shadow-md shadow-purple-500/25">
                    <TrendingUp className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-gray-900">+42%</p>
                    <p className="text-[9px] text-gray-500">Conversión</p>
                  </div>
                </motion.div>

                {/* Orders */}
                <motion.div
                  initial={{ opacity: 0, y: -30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: 2.1, ease }}
                  className="absolute left-2 lg:left-12 top-8 backdrop-blur-2xl bg-white/80 rounded-2xl shadow-[0_12px_40px_-8px_rgba(0,0,0,0.12)] border border-white/80 p-3 hidden lg:flex items-center gap-2.5 z-20"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-md shadow-amber-500/25">
                    <ShoppingCart className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-gray-900">87 pedidos</p>
                    <p className="text-[9px] text-gray-500">Esta semana</p>
                  </div>
                </motion.div>

                {/* Rating */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 2.3, ease }}
                  className="absolute left-1/2 -translate-x-1/2 -bottom-2 backdrop-blur-2xl bg-white/80 rounded-full shadow-[0_8px_30px_-6px_rgba(0,0,0,0.1)] border border-white/80 px-4 py-2 hidden md:flex items-center gap-2 z-20"
                >
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-gray-900">4.9</span>
                  <span className="text-[10px] text-gray-500">en App Store</span>
                </motion.div>
              </div>

              {/* ── Right panel ── */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8, ease }}
                className="w-52 space-y-3 shrink-0 hidden lg:block"
              >
                {/* Components */}
                <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
                  <p className="text-xs font-bold text-gray-900 mb-3">Componentes</p>
                  <div className="space-y-1.5">
                    {["Banner", "Productos", "Categorías", "Timer", "Video"].map((comp, i) => (
                      <motion.div
                        key={comp}
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 1.0 + i * 0.06, ease }}
                        whileHover={{ x: 4 }}
                        className={`flex items-center gap-2 px-3 py-2 rounded-xl text-[12px] cursor-grab transition-all duration-200 ${
                          i === 1
                            ? "bg-gray-950 text-white shadow-lg shadow-gray-950/25 scale-[1.02]"
                            : "bg-gray-50 text-gray-600 hover:bg-gray-100 hover:shadow-sm"
                        }`}
                      >
                        <span className={i === 1 ? "text-white/40" : "text-gray-300"}>⋮⋮</span>
                        {comp}
                        {i === 1 && <Zap className="w-3 h-3 text-yellow-400 ml-auto" />}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Style */}
                <motion.div
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 1.3, ease }}
                  className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm"
                >
                  <p className="text-xs font-bold text-gray-900 mb-3">Estilo</p>
                  <div className="flex gap-2 mb-4">
                    {["#0a0a0a", "#6366f1", "#ec4899", "#f59e0b", "#10b981"].map((color, i) => (
                      <motion.div
                        key={color}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 1.4 + i * 0.05, ease }}
                        className={`w-6 h-6 rounded-full transition-all duration-200 cursor-pointer hover:scale-110 ${
                          i === 0
                            ? "ring-2 ring-gray-950/30 ring-offset-2"
                            : "border border-gray-200"
                        }`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <div className="space-y-2.5">
                    {[
                      { label: "Radio", value: "12px" },
                      { label: "Padding", value: "16px" },
                      { label: "Font", value: "Inter" },
                    ].map((prop) => (
                      <div key={prop.label} className="flex justify-between text-[11px]">
                        <span className="text-gray-500">{prop.label}</span>
                        <span className="text-gray-800 font-medium bg-gray-50 px-2 py-0.5 rounded">{prop.value}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

            </div>
          </div>
        </div>
      </motion.div>

      {/* Drag cursor animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1, 1, 1, 0],
          x: [100, 60, 0, -50, -50],
          y: [10, 0, -15, -30, -30],
        }}
        transition={{ duration: 3, delay: 2.5, ease: "easeInOut" }}
        className="absolute top-[55%] right-[30%] z-30 pointer-events-none hidden lg:block"
      >
        <svg width="20" height="24" viewBox="0 0 20 24" fill="none">
          <path d="M4 0L4 16L8 12L12 20L15 18.5L11 10.5L16 10.5L4 0Z" fill="white" stroke="#0a0a0a" strokeWidth="1.5" />
        </svg>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute -bottom-1 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.08),transparent)]" />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage: "radial-gradient(circle, #d4d4d8 0.5px, transparent 0.5px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-6 pt-40 pb-24 md:pt-48 md:pb-32">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm text-gray-600 text-[13px] font-medium border border-gray-200/60 mb-8 shadow-sm">
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
                  stroke="#6366f1"
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-950 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>
            <a
              href="https://calendly.com/saruapps/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-gray-600 text-[15px] font-medium rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm hover:border-gray-300 hover:text-gray-900 transition-all duration-300"
            >
              Ver cómo funciona
            </a>
          </motion.div>
        </div>

        {/* Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease }}
          className="mt-16 md:mt-24 max-w-5xl mx-auto"
        >
          <MockupScene />
        </motion.div>
      </div>
    </section>
  );
}
