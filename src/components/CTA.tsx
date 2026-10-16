"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { useDictionary } from "@/i18n/DictionaryProvider";
import { ArrowLink, HandCircle, ease, useRange } from "./home/primitives";

export function CTA() {
  const { dict } = useDictionary();
  const t = dict.cta;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const scale = useRange(p, [0, 1], [0.82, 1]);
  const y = useRange(p, [0, 1], [60, 0]);
  const glowScale = useRange(p, [0, 1], [0.5, 1.15]);

  return (
    <section className="section-dark grain overflow-hidden border-b border-line-dark py-32 md:py-48">
      <motion.div
        className="glow left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ scale: glowScale }}
        aria-hidden="true"
      />
      <div ref={ref} className="relative mx-auto max-w-[1280px] px-6 text-center">
        <motion.h2
          style={{ scale, y }}
          className="font-display text-[clamp(52px,9vw,140px)] font-extrabold leading-[0.92] tracking-[-0.055em]"
        >
          {t.title}{" "}
          <span className="relative inline-block">
            <em className="accent pr-[0.06em]">{t.titleAccent}</em>
            <HandCircle delay={0.2} />
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease }}
          className="mx-auto mt-10 max-w-xl text-[clamp(17px,1.4vw,20px)] italic leading-[1.5]"
        >
          {t.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-2"
        >
          <ArrowLink href="https://app.saruapps.com/register">{t.ctaPrimary}</ArrowLink>
          <ArrowLink href="https://calendly.com/saruapps/30min" external weight="medium">
            {t.ctaSecondary}
          </ArrowLink>
        </motion.div>
      </div>
    </section>
  );
}
