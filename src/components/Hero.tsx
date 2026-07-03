"use client";

import { motion } from "framer-motion";

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
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
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
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
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
                  transition={{ duration: 1.2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
                />
              </svg>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 md:mt-8 text-base md:text-lg text-gray-500 max-w-xl mx-auto leading-relaxed"
          >
            Creá tu app móvil sin escribir una línea de código. Editor drag &
            drop, notificaciones push y herramientas de fidelización para
            aumentar tus ventas recurrentes.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#"
              className="group relative inline-flex items-center gap-2 px-7 py-3.5 bg-gray-950 text-white text-[15px] font-medium rounded-full overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-gray-950/25"
            >
              <span className="relative z-10">Crear mi app gratis</span>
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

        {/* App mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 md:mt-20 relative max-w-5xl mx-auto"
        >
          {/* Browser frame */}
          <div className="relative rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-gray-200/60 overflow-hidden">
            {/* Browser bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 bg-gray-50/60">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-300" />
                <div className="w-3 h-3 rounded-full bg-yellow-300" />
                <div className="w-3 h-3 rounded-full bg-green-300" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-12 py-1 rounded-md bg-gray-100 text-xs text-gray-400 font-mono">
                  app.saruapps.com
                </div>
              </div>
            </div>

            {/* App UI mockup */}
            <div className="p-6 md:p-8 bg-gradient-to-b from-gray-50 to-white">
              <div className="flex gap-6">
                {/* Sidebar */}
                <div className="w-48 bg-white rounded-xl border border-gray-100 p-4 space-y-1.5 shrink-0 hidden lg:block">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-7 h-7 rounded-lg bg-gray-950 flex items-center justify-center">
                      <span className="text-white text-[10px] font-bold">N</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">Mi App</span>
                  </div>
                  {["Inicio", "Productos", "Categorías", "Carrito", "Perfil"].map(
                    (item, i) => (
                      <div
                        key={item}
                        className={`px-3 py-2 rounded-lg text-[13px] ${
                          i === 0
                            ? "bg-gray-950 text-white font-medium"
                            : "text-gray-500"
                        }`}
                      >
                        {item}
                      </div>
                    )
                  )}
                  <div className="border-t border-gray-100 pt-3 mt-3">
                    <div className="px-3 py-1.5 text-[10px] text-gray-400 uppercase tracking-wider">
                      Engagement
                    </div>
                    {["Push Notifications", "Loyalty", "Cupones"].map((item) => (
                      <div
                        key={item}
                        className="px-3 py-2 rounded-lg text-[13px] text-gray-500"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Main content - Phone preview */}
                <div className="flex-1 flex items-center justify-center py-4 relative min-h-[360px] md:min-h-[420px]">
                  {/* Phone frame */}
                  <div className="w-[220px] md:w-[260px] bg-gray-950 rounded-[2.2rem] p-2 shadow-2xl relative z-10">
                    <div className="bg-white rounded-[1.8rem] overflow-hidden">
                      {/* Notch */}
                      <div className="flex justify-center pt-2">
                        <div className="w-20 h-5 bg-gray-950 rounded-full" />
                      </div>

                      {/* App content */}
                      <div className="px-3 pb-3">
                        {/* Hero banner */}
                        <div className="mt-3 rounded-xl bg-gradient-to-br from-gray-900 to-gray-700 p-3.5 text-white">
                          <p className="text-[9px] opacity-70 uppercase tracking-wider">Nueva Colección</p>
                          <p className="text-[13px] font-bold mt-0.5">
                            Hasta 40% OFF
                          </p>
                          <div className="mt-2 bg-white/20 rounded-full px-2.5 py-0.5 inline-block">
                            <span className="text-[8px] font-medium">
                              Comprar ahora →
                            </span>
                          </div>
                        </div>

                        {/* Product grid */}
                        <div className="mt-2.5 grid grid-cols-2 gap-1.5">
                          {[
                            { img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=200&h=200&fit=crop", name: "Blazer Oversize", price: "$45.900" },
                            { img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=200&h=200&fit=crop", name: "Campera Puffer", price: "$62.500" },
                            { img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=200&h=200&fit=crop", name: "Hoodie Essential", price: "$28.900" },
                            { img: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=200&h=200&fit=crop", name: "Jean Relaxed Fit", price: "$34.500" },
                          ].map((product, i) => (
                            <div key={i} className="space-y-1">
                              <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                                <img
                                  src={product.img}
                                  alt={product.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <p className="text-[8px] text-gray-700 font-medium truncate">{product.name}</p>
                              <p className="text-[8px] text-gray-950 font-bold">{product.price}</p>
                            </div>
                          ))}
                        </div>

                        {/* Bottom nav */}
                        <div className="mt-3 flex justify-around py-2 border-t border-gray-100">
                          {["⌂", "◎", "♡", "☰"].map((icon, i) => (
                            <span
                              key={i}
                              className={`text-xs ${
                                i === 0 ? "text-gray-900" : "text-gray-300"
                              }`}
                            >
                              {icon}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating elements */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute right-4 lg:right-12 top-6 bg-white rounded-xl shadow-lg shadow-gray-200/80 border border-gray-100 p-3 hidden md:flex items-center gap-2.5 z-20"
                  >
                    <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-sm">
                      📱
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-gray-900">
                        App publicada
                      </p>
                      <p className="text-[10px] text-gray-400">Hace 2 min</p>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                    className="absolute left-4 lg:left-12 bottom-12 bg-white rounded-xl shadow-lg shadow-gray-200/80 border border-gray-100 p-3 hidden md:flex items-center gap-2.5 z-20"
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-sm">
                      🔔
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-gray-900">
                        +324 push enviados
                      </p>
                      <p className="text-[10px] text-gray-400">Hoy</p>
                    </div>
                  </motion.div>
                </div>

                {/* Right panel */}
                <div className="w-48 space-y-3 shrink-0 hidden lg:block">
                  <div className="bg-white rounded-xl border border-gray-100 p-4">
                    <p className="text-xs font-semibold text-gray-900 mb-3">
                      Componentes
                    </p>
                    <div className="space-y-1.5">
                      {["Banner", "Productos", "Categorías", "Timer", "Video"].map(
                        (comp) => (
                          <div
                            key={comp}
                            className="flex items-center gap-2 px-2 py-1.5 rounded-lg bg-gray-50 text-[12px] text-gray-600 cursor-grab"
                          >
                            <span className="text-gray-300">⋮⋮</span>
                            {comp}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                  <div className="bg-white rounded-xl border border-gray-100 p-4">
                    <p className="text-xs font-semibold text-gray-900 mb-2">
                      Estilo
                    </p>
                    <div className="flex gap-1.5 mb-3">
                      {["#0a0a0a", "#6366f1", "#ec4899", "#f59e0b", "#10b981"].map(
                        (color) => (
                          <div
                            key={color}
                            className="w-5 h-5 rounded-full border border-gray-200"
                            style={{ backgroundColor: color }}
                          />
                        )
                      )}
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-[11px]">
                        <span className="text-gray-400">Radio</span>
                        <span className="text-gray-600">12px</span>
                      </div>
                      <div className="flex justify-between text-[11px]">
                        <span className="text-gray-400">Padding</span>
                        <span className="text-gray-600">16px</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom fade */}
          <div className="absolute -bottom-1 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
