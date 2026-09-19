"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const products = [
  { img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=200&h=200&fit=crop", name: "Blazer Oversize", price: "$45.900" },
  { img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=200&h=200&fit=crop", name: "Campera Puffer", price: "$62.500" },
  { img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=200&h=200&fit=crop", name: "Hoodie Essential", price: "$28.900" },
  { img: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=200&h=200&fit=crop", name: "Jean Relaxed Fit", price: "$34.500" },
];

export function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 pt-40 pb-20">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[#5e5e5e] text-[13px] font-normal border border-[#d2d2d7] mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Exclusivo para Tiendanube
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease }}
            className="font-display text-[53px] sm:text-[70px] md:text-[93px] font-bold tracking-[-2.44px] md:tracking-[-4.65px] leading-[1] text-black text-center"
          >
            Tu tienda Tiendanube, ahora en una app
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25, ease }}
            className="mt-6 md:mt-8 text-[15px] md:text-[19px] text-[#5e5e5e] max-w-xl mx-auto leading-relaxed text-center"
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
              Agendar demo
            </a>
          </motion.div>
        </div>

        {/* Phone mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease }}
          className="mt-16 md:mt-24 flex justify-center"
        >
          <div className="w-[280px] bg-black rounded-[22px] p-2">
            <div className="bg-white rounded-[18px] overflow-hidden">
              {/* Dynamic Island */}
              <div className="flex justify-center pt-2.5 pb-0.5">
                <div className="w-24 h-6 bg-black rounded-full flex items-center justify-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-gray-800" />
                </div>
              </div>

              {/* App content */}
              <div className="px-3.5 pb-3.5">
                {/* Hero banner */}
                <div className="mt-2 rounded-2xl bg-gray-900 p-4 text-white relative overflow-hidden">
                  <p className="text-[9px] opacity-60 uppercase tracking-widest">Nueva Colección</p>
                  <p className="text-[14px] font-bold mt-0.5 leading-tight">Hasta 40% OFF</p>
                  <div className="mt-2.5 bg-white rounded-full px-3 py-1 inline-flex items-center gap-1">
                    <span className="text-[8px] font-semibold text-gray-900">Comprar ahora</span>
                    <svg className="w-2 h-2 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {/* Products */}
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {products.map((product, i) => (
                    <div key={i} className="space-y-1">
                      <div className="aspect-square rounded-xl overflow-hidden bg-gray-100 relative">
                        <img src={product.img} alt={product.name} className="w-full h-full object-cover" />
                        {i === 0 && (
                          <span className="absolute top-1 left-1 bg-red-500 text-white text-[6px] font-bold px-1.5 py-0.5 rounded-full">-40%</span>
                        )}
                      </div>
                      <p className="text-[9px] text-gray-700 font-medium truncate">{product.name}</p>
                      <p className="text-[9px] text-gray-950 font-bold">{product.price}</p>
                    </div>
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
