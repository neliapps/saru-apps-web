"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { Check } from "lucide-react";
import { useDictionary } from "@/i18n/DictionaryProvider";
import { Label, ease, useRange } from "./home/primitives";

const DOTS = 22;

function Dot({ p, i }: { p: MotionValue<number>; i: number }) {
  const t = i / (DOTS - 1);
  const opacity = useRange(p, [t * 0.9, t * 0.9 + 0.08], [0.12, 1]);
  const scale = useRange(p, [t * 0.9, t * 0.9 + 0.08], [0.4, 1]);
  return (
    <motion.circle
      cx={8 + t * 584}
      cy={70 - Math.sin(t * Math.PI) * 52}
      r="4"
      fill="#2F6BFF"
      style={{ opacity, scale, transformBox: "fill-box", transformOrigin: "center" }}
    />
  );
}

/* Tiendanube ↔ Saru Apps: the dotted line draws itself as you scroll */
function Connection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start 90%", "center 50%"] });
  const rightScale = useRange(p, [0.85, 1], [0.85, 1]);

  return (
    <div ref={ref} className="mx-auto mt-16 flex max-w-4xl items-center justify-between gap-2 md:mt-24" aria-hidden="true">
      <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[24px] border border-card-light-border bg-white p-4 md:h-32 md:w-32 md:rounded-[32px] md:p-6">
        <img src="/brand/tiendanube-isotipo.png" alt="" className="h-full w-full object-contain" />
      </div>
      <svg viewBox="0 0 600 80" className="h-auto min-w-0 flex-1">
        {Array.from({ length: DOTS }, (_, i) => (
          <Dot key={i} p={p} i={i} />
        ))}
      </svg>
      <motion.div
        style={{ scale: rightScale }}
        className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[24px] bg-ink p-5 md:h-32 md:w-32 md:rounded-[32px] md:p-8"
      >
        <img src="/brand/isotipo-white.png" alt="" className="h-full w-full object-contain" />
      </motion.div>
    </div>
  );
}

type Integration = { name: string; description: string; features: string[] };

function Card({ item, wide = false, delay = 0 }: { item: Integration; wide?: boolean; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease }}
      whileHover={{ y: -2 }}
      className={`rounded-[30px] border border-card-light-border bg-card-light p-8 md:p-10 ${
        wide ? "md:col-span-3 md:grid md:grid-cols-2 md:items-end md:gap-12" : ""
      }`}
    >
      <div>
        <h3 className={`font-display font-bold leading-[1.05] tracking-[-0.035em] ${wide ? "text-[clamp(28px,3vw,42px)]" : "text-[26px]"}`}>
          {item.name}
        </h3>
        <p className="mt-4 max-w-md text-[17px] leading-[1.6]">{item.description}</p>
      </div>
      <ul className={`mt-8 grid gap-3 ${wide ? "sm:grid-cols-2 md:mt-0" : ""}`}>
        {item.features.map((f) => (
          <li key={f} className="flex items-center gap-3 text-[15px] font-medium">
            <Check className="h-5 w-5 shrink-0" strokeWidth={1.75} />
            {f}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function Integrations() {
  const { dict } = useDictionary();
  const t = dict.integrations;

  const [main, ...rest]: Integration[] = [
    { name: t.tiendanube, description: t.tiendanubeDesc, features: [t.tiendanubeF1, t.tiendanubeF2, t.tiendanubeF3, t.tiendanubeF4] },
    { name: t.pagonube, description: t.pagonubeDesc, features: [t.pagonubeF1, t.pagonubeF2, t.pagonubeF3, t.pagonubeF4] },
    { name: t.envionube, description: t.envionubeDesc, features: [t.envionubeF1, t.envionubeF2, t.envionubeF3, t.envionubeF4] },
    { name: t.marketingnube, description: t.marketingnubeDesc, features: [t.marketingnubeF1, t.marketingnubeF2, t.marketingnubeF3, t.marketingnubeF4] },
  ];

  return (
    <section className="section-light grain overflow-hidden py-28 md:py-40">
      <div className="relative mx-auto max-w-[1280px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease }}
          className="mx-auto max-w-3xl text-center"
        >
          <Label>{t.label}</Label>
          <h2 className="mt-4 font-display text-[clamp(34px,4.4vw,64px)] font-bold leading-[1.04] tracking-[-0.04em]">{t.title}</h2>
          <p className="mx-auto mt-6 max-w-xl text-[clamp(17px,1.4vw,20px)] italic leading-[1.5]">{t.subtitle}</p>
        </motion.div>

        <Connection />

        <div className="mt-16 grid gap-5 md:mt-24 md:grid-cols-3">
          <Card item={main} wide />
          {rest.map((item, i) => (
            <Card key={item.name} item={item} delay={0.07 * (i + 1)} />
          ))}
        </div>
      </div>
    </section>
  );
}
