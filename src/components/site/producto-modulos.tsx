"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, type MotionValue } from "framer-motion";
import { ArrowLeft, Check } from "lucide-react";
import { ArrowLink, Label, Underline, ease, useRange } from "../home/primitives";
import { PhoneFrame } from "../home/phone";

type Cta = { label: string; href: string; external?: boolean };

/* ─── Product sub-page hero: PageHero layout + optional back link ─── */

export function ModuloHero({
  back,
  label,
  title,
  accent,
  subtitle,
  primary,
  secondary,
  children,
}: {
  back?: { label: string; href: string };
  label?: string;
  title: string;
  accent?: string;
  subtitle?: ReactNode;
  primary?: Cta;
  secondary?: Cta;
  children?: ReactNode;
}) {
  return (
    <section className="section-dark grain overflow-clip">
      <div className="glow -right-[200px] top-[10%]" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-[1280px] items-center gap-14 px-6 pb-20 pt-36 md:pb-28 md:pt-44 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="lg:col-span-7"
        >
          {back && (
            <a
              href={back.href}
              className="group mb-6 inline-flex min-h-[44px] items-center gap-2 text-[15px] font-medium"
            >
              <ArrowLeft
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
                strokeWidth={1.75}
                aria-hidden="true"
              />
              {back.label}
            </a>
          )}
          {label && <Label>{label}</Label>}
          <h1 className="mt-5 font-display text-[clamp(38px,5.4vw,76px)] font-extrabold leading-[1] tracking-[-0.045em]">
            {title}
            {accent && (
              <>
                {" "}
                <span className="relative inline-block">
                  <em className="accent">{accent}</em>
                  <Underline delay={0.5} />
                </span>
              </>
            )}
          </h1>
          {subtitle && (
            <p className="mt-8 max-w-xl text-[clamp(17px,1.4vw,20px)] italic leading-[1.5]">{subtitle}</p>
          )}
          {(primary || secondary) && (
            <div className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-2">
              {primary && (
                <ArrowLink href={primary.href} external={primary.external}>
                  {primary.label}
                </ArrowLink>
              )}
              {secondary && (
                <ArrowLink href={secondary.href} external={secondary.external} weight="medium">
                  {secondary.label}
                </ArrowLink>
              )}
            </div>
          )}
        </motion.div>
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
            className="relative flex justify-center lg:col-span-5"
            aria-hidden="true"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}

/* ─── Tilted phone for heroes ─── */

export function HeroPhone({ children, dark = false, tilt = 3 }: { children: ReactNode; dark?: boolean; tilt?: number }) {
  return (
    <div style={{ transform: `rotate(${tilt}deg)` }}>
      <PhoneFrame dark={dark}>{children}</PhoneFrame>
    </div>
  );
}

/* ─── Final CTA: dark or light depending on the section rhythm ─── */

export function ModuloCTA({
  title,
  accent,
  subtitle,
  primary,
  secondary,
  tone = "dark",
}: {
  title: string;
  accent?: string;
  subtitle: ReactNode;
  primary: Cta;
  secondary?: Cta;
  tone?: "dark" | "light";
}) {
  return (
    <section className={`${tone === "dark" ? "section-dark border-b border-line-dark" : "section-light"} grain overflow-x-clip py-28 md:py-40`}>
      <div className="glow left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" aria-hidden="true" />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease }}
        className="relative mx-auto max-w-[1280px] px-6 text-center"
      >
        <h2 className="mx-auto max-w-4xl font-display text-[clamp(34px,4.4vw,64px)] font-bold leading-[1.04] tracking-[-0.04em]">
          {title}
          {accent && (
            <>
              {" "}
              <span className="relative inline-block">
                <em className="accent pr-[0.06em]">{accent}</em>
                <Underline delay={0.3} />
              </span>
            </>
          )}
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-[clamp(17px,1.4vw,20px)] italic leading-[1.5]">{subtitle}</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-2">
          <ArrowLink href={primary.href} external={primary.external}>
            {primary.label}
          </ArrowLink>
          {secondary && (
            <ArrowLink href={secondary.href} external={secondary.external} weight="medium">
              {secondary.label}
            </ArrowLink>
          )}
        </div>
      </motion.div>
    </section>
  );
}

/* ─── Tiendanube ↔ Saru Apps: the dotted line draws itself as you scroll ─── */

const DOTS = 22;

function Dot({ p, i }: { p: MotionValue<number>; i: number }) {
  const t = i / (DOTS - 1);
  const opacity = useRange(p, [t * 0.9, t * 0.9 + 0.08], [0.15, 1]);
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

type Side = { img: string; alt: string; name: string; sub: string; items: string[] };

function SideInfo({ side, align }: { side: Side; align: "left" | "right" }) {
  return (
    <div className={align === "right" ? "text-right" : ""}>
      <p className="text-[17px] font-bold">{side.name}</p>
      <p className="mt-1 text-[15px] italic">{side.sub}</p>
      <ul className={`mt-4 space-y-2 ${align === "right" ? "flex flex-col items-end" : ""}`}>
        {side.items.map((item) => (
          <li key={item} className="flex items-center gap-2 text-[15px] font-medium">
            <Check className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SyncConnection({ left, right, middle }: { left: Side; right: Side; middle: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start 90%", "center 50%"] });
  const rightScale = useRange(p, [0.85, 1], [0.85, 1]);

  return (
    <div ref={ref} className="mx-auto max-w-4xl">
      <div className="flex items-center justify-between gap-2">
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[24px] bg-white p-4 md:h-32 md:w-32 md:rounded-[32px] md:p-6">
          <img src={left.img} alt={left.alt} className="h-full w-full object-contain" />
        </div>
        <svg viewBox="0 0 600 80" className="h-auto min-w-0 flex-1" aria-hidden="true">
          {Array.from({ length: DOTS }, (_, i) => (
            <Dot key={i} p={p} i={i} />
          ))}
        </svg>
        <motion.div
          style={{ scale: rightScale }}
          className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[24px] border border-line-dark bg-ink p-5 md:h-32 md:w-32 md:rounded-[32px] md:p-8"
        >
          <img src={right.img} alt={right.alt} className="h-full w-full object-contain" />
        </motion.div>
      </div>
      <p className="mt-6 text-center text-[15px] font-semibold">{middle}</p>
      <div className="mt-10 grid grid-cols-2 gap-6 border-t border-line-dark pt-8">
        <SideInfo side={left} align="left" />
        <SideInfo side={right} align="right" />
      </div>
    </div>
  );
}
