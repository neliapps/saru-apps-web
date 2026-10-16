"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDictionary } from "@/i18n/DictionaryProvider";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const { dict, localePath } = useDictionary();
  const t = dict.cookie;

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
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 24, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 z-50 w-full p-4 sm:max-w-[420px] md:p-6"
        >
          <div className="rounded-[20px] border border-card-light-border bg-white p-5 text-ink shadow-[0_24px_60px_-20px_rgba(0,0,0,0.45)]">
            <p className="text-[14px] leading-[1.5]">
              {t.text}{" "}
              <a href={localePath("/privacidad")} className="font-semibold underline decoration-accent decoration-2 underline-offset-4">
                {t.policy}
              </a>
              .
            </p>
            <div className="mt-4 flex items-center justify-end gap-2">
              <button onClick={reject} className="min-h-[40px] px-4 text-[14px] font-medium hover:underline underline-offset-4">
                {t.reject}
              </button>
              <button onClick={accept} className="min-h-[40px] rounded-lg bg-ink px-5 text-[14px] font-semibold text-white hover:bg-ink/85">
                {t.accept}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
