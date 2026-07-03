"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";

export function LogoCloud() {
  return (
    <section className="py-20 border-t border-gray-100">
      <div className="max-w-[1280px] mx-auto px-6">
        <AnimatedSection className="text-center">
          <p className="text-sm text-gray-400 uppercase tracking-widest font-medium mb-12">
            Marcas que confían en Saru Apps
          </p>
        </AnimatedSection>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex items-center gap-16 whitespace-nowrap"
          >
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex items-center gap-16">
                {[
                  "Moda Urbana",
                  "Casa & Deco",
                  "Sport Life",
                  "Natural Beauty",
                  "Tech Store",
                  "Pet Shop BA",
                  "Gourmet Club",
                  "Kids World",
                ].map((brand) => (
                  <div
                    key={`${setIndex}-${brand}`}
                    className="flex items-center gap-2 text-gray-300 hover:text-gray-400 transition-colors duration-300"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-300">
                      {brand[0]}
                    </div>
                    <span className="text-lg font-semibold tracking-tight">
                      {brand}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
