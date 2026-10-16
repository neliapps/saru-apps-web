"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { ArrowLink, Label, Underline, ease } from "../home/primitives";
import { ProductScreen, HomeScreen, ScaledPhone } from "../home/phone";

type Cta = { label: string; href: string; external?: boolean };

/* ─── Product subpage hero: PageHero layout + a back link to /producto ─── */

export function ProductoSubHero({
  back,
  label,
  title,
  accent,
  subtitle,
  children,
}: {
  back: { label: string; href: string };
  label: string;
  title: string;
  accent?: string;
  subtitle?: ReactNode;
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
          <a
            href={back.href}
            className="group -ml-1 inline-flex min-h-[44px] items-center gap-2 py-2 pl-1 text-[16px] font-medium"
          >
            <ArrowLeft
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
              strokeWidth={2}
              aria-hidden="true"
            />
            {back.label}
          </a>
          <div className="mt-6">
            <Label>{label}</Label>
          </div>
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

/* ─── Closing CTA: big title, italic subtitle, two text CTAs ─── */

export function ProductoCTA({
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
  secondary: Cta;
  tone?: "dark" | "light";
}) {
  return (
    <section className={`${tone === "dark" ? "section-dark" : "section-light"} grain overflow-x-clip py-32 md:py-44`}>
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
              <em className="accent">{accent}</em>
            </>
          )}
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-[clamp(17px,1.4vw,20px)] italic leading-[1.5]">{subtitle}</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-2">
          <ArrowLink href={primary.href} external={primary.external}>
            {primary.label}
          </ArrowLink>
          <ArrowLink href={secondary.href} external={secondary.external} weight="medium">
            {secondary.label}
          </ArrowLink>
        </div>
      </motion.div>
    </section>
  );
}

/* ─── Editorial row that is itself a link (no nested <a>) ─── */

export function ProductoLinkRow({
  index,
  title,
  description,
  href,
  cta,
  delay = 0,
}: {
  index: string;
  title: string;
  description: string;
  href: string;
  cta: string;
  delay?: number;
}) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease }}
      className="border-t border-line-light last:border-b"
    >
      <a
        href={href}
        className="group grid grid-cols-[auto_1fr] gap-x-6 gap-y-4 py-10 transition-transform duration-300 md:grid-cols-12 md:items-baseline md:gap-x-8 md:py-12"
      >
        <span className="font-display text-[17px] font-semibold tabular-nums md:col-span-1" aria-hidden="true">
          {index}
        </span>
        <h3 className="font-display text-[clamp(22px,2vw,30px)] font-bold leading-[1.15] tracking-[-0.03em] md:col-span-4">
          {title}
        </h3>
        <p className="col-start-2 text-[17px] leading-[1.6] md:col-span-4 md:col-start-auto">{description}</p>
        <span className="col-start-2 inline-flex min-h-[44px] items-center gap-2 text-[17px] font-bold md:col-span-3 md:col-start-auto md:justify-self-end">
          <span className="relative">
            {cta}
            <svg
              viewBox="0 0 300 24"
              preserveAspectRatio="none"
              className="scribble pointer-events-none absolute -bottom-2 left-0 h-3 w-full"
              aria-hidden="true"
            >
              <path d="M2 14 C 80 6, 180 20, 298 9" pathLength={1} stroke="#2F6BFF" strokeWidth="5" fill="none" strokeLinecap="round" />
            </svg>
          </span>
          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.25} aria-hidden="true" />
        </span>
      </a>
    </motion.li>
  );
}

/* ─── App nativa hero: two overlapping phones, slightly tilted ─── */

function PhonePair({ scale, offset }: { scale: number; offset: number }) {
  const w = 300 * scale;
  const h = 618 * scale;
  return (
    <div className="relative" style={{ width: w + offset, height: h + 40 * scale }}>
      <div className="absolute left-0 top-0 -rotate-[5deg]">
        <ScaledPhone scale={scale}>
          <ProductScreen />
        </ScaledPhone>
      </div>
      <div className="absolute rotate-[4deg]" style={{ left: offset, top: 40 * scale }}>
        <ScaledPhone scale={scale}>
          <HomeScreen />
        </ScaledPhone>
      </div>
    </div>
  );
}

export function AppNativaPhones() {
  return (
    <>
      <div className="sm:hidden">
        <PhonePair scale={0.7} offset={100} />
      </div>
      <div className="hidden sm:block lg:hidden">
        <PhonePair scale={0.85} offset={150} />
      </div>
      <div className="hidden lg:block">
        <PhonePair scale={0.88} offset={170} />
      </div>
    </>
  );
}
