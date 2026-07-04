"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-gray-950 text-white rounded-2xl p-5 md:p-6 shadow-2xl border border-white/10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="text-sm text-white/80 flex-1">
              Usamos cookies esenciales para el funcionamiento del sitio y
              cookies analíticas para mejorar tu experiencia. Podés leer más en
              nuestra{" "}
              <a
                href="/privacidad"
                className="underline underline-offset-4 text-white hover:text-white/70 transition-colors"
              >
                Política de Privacidad
              </a>
              .
            </p>
            <div className="flex gap-3 shrink-0">
              <button
                onClick={reject}
                className="px-5 py-2 text-sm font-medium text-white/70 border border-white/20 rounded-full hover:border-white/40 hover:text-white transition-all duration-300"
              >
                Rechazar
              </button>
              <button
                onClick={accept}
                className="px-5 py-2 text-sm font-medium bg-white text-gray-950 rounded-full hover:bg-gray-100 transition-all duration-300"
              >
                Aceptar
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
