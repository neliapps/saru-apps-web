"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { ArrowRight, RefreshCw } from "lucide-react";
import { useDictionary } from "@/i18n/DictionaryProvider";
import { Label, Sticker, ease, useRange } from "./home/primitives";
import { EditorScreen, LockScreen, ScaledPhone, StoreScreen } from "./home/phone";

type Step = { number: string; title: string; description: string; detail: string };

function useSteps(): Step[] {
  const { dict } = useDictionary();
  const t = dict.howItWorks;
  return [
    { number: "01", title: t.step1Title, description: t.step1Desc, detail: t.step1Detail },
    { number: "02", title: t.step2Title, description: t.step2Desc, detail: t.step2Detail },
    { number: "03", title: t.step3Title, description: t.step3Desc, detail: t.step3Detail },
    { number: "04", title: t.step4Title, description: t.step4Desc, detail: t.step4Detail },
  ];
}

/* ─── Step visuals ─── */

function ConnectVisual() {
  const { dict } = useDictionary();
  const dots = Array.from({ length: 14 }, (_, i) => i / 13);
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex items-center gap-4 md:gap-6">
        <div className="flex h-24 w-24 items-center justify-center rounded-[28px] bg-white p-5 md:h-28 md:w-28">
          <img src="/brand/tiendanube-isotipo.png" alt="" className="h-full w-full object-contain" />
        </div>
        <svg viewBox="0 0 200 60" className="h-14 w-36 md:w-52" aria-hidden="true">
          {dots.map((d, i) => (
            <motion.circle
              key={i}
              cx={6 + d * 188}
              cy={30 - Math.sin(d * Math.PI) * 22}
              r="3.2"
              fill="#2F6BFF"
              initial={{ opacity: 0.15 }}
              animate={{ opacity: [0.15, 1, 0.15] }}
              transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.08 }}
            />
          ))}
        </svg>
        <div className="flex h-24 w-24 items-center justify-center rounded-[28px] border border-line-dark bg-ink p-6 md:h-28 md:w-28">
          <img src="/brand/isotipo-white.png" alt="" className="h-full w-full object-contain" />
        </div>
      </div>
      <span className="inline-flex items-center gap-2 text-[15px] font-semibold">
        <motion.span animate={{ rotate: 360 }} transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}>
          <RefreshCw className="h-4 w-4" strokeWidth={2} />
        </motion.span>
        {dict.howItWorks.sincronizando}
      </span>
    </div>
  );
}

function StepVisual({ index, scale }: { index: number; scale: number }) {
  if (index === 0) return <ConnectVisual />;
  const screens = [null, EditorScreen, LockScreen, StoreScreen];
  const Screen = screens[index]!;
  return (
    <ScaledPhone scale={scale} dark={index === 2}>
      <Screen />
    </ScaledPhone>
  );
}

/* ─── Desktop: pinned, steps travel horizontally ─── */

function StepPanel({ step, index, p }: { step: Step; index: number; p: MotionValue<number> }) {
  const center = (index + 1) / 4;
  const numberX = useTransform(p, (v) => Math.max(-1, Math.min(1, (v - center) / 0.25)) * -80);
  const visualY = useTransform(p, (v) => Math.max(-1, Math.min(1, (v - center) / 0.25)) * -40);
  const rotations = [-4, 3, -3, 5];

  return (
    <div className="flex h-full w-screen shrink-0 items-center px-[7vw]">
      <div className="grid w-full grid-cols-12 items-center gap-8">
        <div className="col-span-6">
          <motion.p
            style={{ x: numberX }}
            className="font-display text-[clamp(96px,11vw,176px)] font-bold italic leading-[0.85] tracking-[-0.06em] text-accent"
            aria-hidden="true"
          >
            {step.number}
          </motion.p>
          <h3 className="mt-8 font-display text-[clamp(28px,2.6vw,40px)] font-bold leading-[1.05] tracking-[-0.035em]">
            {step.title}
          </h3>
          <p className="mt-5 max-w-md text-[17px] leading-[1.6]">{step.description}</p>
          <div className="mt-8">
            <Sticker tone="light" rotate={rotations[index]} className="text-[15px]">
              {step.detail}
            </Sticker>
          </div>
        </div>
        <motion.div style={{ y: visualY }} className="col-span-6 flex justify-center" aria-hidden="true">
          <StepVisual index={index} scale={0.82} />
        </motion.div>
      </div>
    </div>
  );
}

function Segment({ p, i }: { p: MotionValue<number>; i: number }) {
  const fill = useRange(p, [i / 4 + 0.02, (i + 1) / 4 - 0.02], [0, 1]);
  return (
    <span className="relative h-[3px] w-16 overflow-hidden bg-white/20">
      <motion.span className="absolute inset-0 origin-left bg-accent" style={{ scaleX: fill }} />
    </span>
  );
}

function Horizontal({ steps }: { steps: Step[] }) {
  const { dict } = useDictionary();
  const t = dict.howItWorks;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(p, [0, 1], ["0vw", "-400vw"]);
  const hintO = useRange(p, [0, 0.06], [1, 0]);

  return (
    <div ref={ref} className="relative h-[480vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="glow right-[8%] top-1/2 -translate-y-1/2" aria-hidden="true" />
        <motion.div style={{ x }} className="relative flex h-full w-[500vw]">
          <div className="flex h-full w-screen shrink-0 items-center px-[7vw]">
            <div className="max-w-5xl">
              <Label>{t.label}</Label>
              <h2 className="mt-5 font-display text-[clamp(40px,5vw,76px)] font-extrabold leading-[1] tracking-[-0.045em]">
                {t.title}
                <br />
                <em className="accent">{t.titleLine2}</em>
              </h2>
              <p className="mt-8 max-w-xl text-[clamp(17px,1.4vw,20px)] italic leading-[1.5]">{t.subtitle}</p>
              <motion.span style={{ opacity: hintO }} className="mt-12 inline-flex" aria-hidden="true">
                <motion.span animate={{ x: [0, 10, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}>
                  <ArrowRight className="h-8 w-8" strokeWidth={1.75} />
                </motion.span>
              </motion.span>
            </div>
          </div>
          {steps.map((s, i) => (
            <StepPanel key={s.number} step={s} index={i} p={p} />
          ))}
        </motion.div>

        <div className="absolute bottom-10 left-[7vw] flex items-center gap-2" aria-hidden="true">
          {steps.map((s, i) => (
            <Segment key={s.number} p={p} i={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Mobile / reduced motion: stacked ─── */

function Vertical({ steps }: { steps: Step[] }) {
  const { dict } = useDictionary();
  const t = dict.howItWorks;
  return (
    <div className="relative mx-auto max-w-[1280px] px-6 py-28">
      <div className="glow -right-[360px] top-0" aria-hidden="true" />
      <div className="relative">
        <Label>{t.label}</Label>
        <h2 className="mt-4 font-display text-[clamp(34px,7vw,56px)] font-extrabold leading-[1] tracking-[-0.045em]">
          {t.title} <em className="accent">{t.titleLine2}</em>
        </h2>
        <p className="mt-6 text-[18px] italic leading-[1.45]">{t.subtitle}</p>
      </div>
      <div className="relative mt-16">
        {steps.map((s, i) => (
          <motion.div
            key={s.number}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease }}
            className="border-t border-line-dark py-14"
          >
            <p className="font-display text-[88px] font-bold italic leading-[0.85] tracking-[-0.06em] text-accent" aria-hidden="true">
              {s.number}
            </p>
            <h3 className="mt-6 font-display text-[26px] font-bold leading-[1.05] tracking-[-0.035em]">{s.title}</h3>
            <p className="mt-4 text-[17px] leading-[1.6]">{s.description}</p>
            <div className="mt-6">
              <Sticker tone="light" rotate={i % 2 ? 3 : -3} className="text-[14px]">
                {s.detail}
              </Sticker>
            </div>
            <div
              className="mt-10 flex justify-center"
              style={
                i === 0
                  ? undefined
                  : { maskImage: "linear-gradient(to bottom, #000 70%, transparent)", WebkitMaskImage: "linear-gradient(to bottom, #000 70%, transparent)" }
              }
              aria-hidden="true"
            >
              <div className={i === 0 ? "" : "h-[320px] overflow-hidden"}>
                <StepVisual index={i} scale={0.75} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function HowItWorks() {
  const steps = useSteps();
  const reduce = useReducedMotion();

  return (
    <section id="como-funciona" className="section-dark grain overflow-x-clip">
      {reduce ? (
        <Vertical steps={steps} />
      ) : (
        <>
          <div className="hidden lg:block">
            <Horizontal steps={steps} />
          </div>
          <div className="lg:hidden">
            <Vertical steps={steps} />
          </div>
        </>
      )}
    </section>
  );
}
