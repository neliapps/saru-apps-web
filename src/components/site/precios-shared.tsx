"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";
import { ArrowLink, Underline, ease } from "../home/primitives";

/* ─── Accordion row: question 700, answer regular, hairline dividers, +/− indicator ─── */

export function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
  tone = "light",
}: {
  question: string;
  answer: ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  tone?: "light" | "dark";
}) {
  const line = tone === "dark" ? "border-line-dark" : "border-line-light";
  return (
    <div className={`border-b ${line}`}>
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          className="group flex min-h-[44px] w-full items-start justify-between gap-8 py-6 text-left"
        >
          <span className="font-display text-[clamp(18px,1.5vw,21px)] font-bold leading-[1.3] tracking-[-0.02em]">
            {question}
          </span>
          {/* + morphs into − : the vertical bar collapses */}
          <span className="relative mt-[0.35em] h-4 w-4 shrink-0" aria-hidden="true">
            <span className="absolute left-0 top-1/2 h-[2px] w-4 -translate-y-1/2 rounded-full bg-current" />
            <span
              className={`absolute left-1/2 top-0 h-4 w-[2px] -translate-x-1/2 rounded-full bg-current transition-transform duration-300 ${
                isOpen ? "scale-y-0" : "scale-y-100"
              }`}
            />
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pb-7 pr-10 text-[17px] leading-[1.6]">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Closing CTA band: title with accent phrase, italic subtitle, text CTAs ─── */

type Cta = { label: string; href: string; external?: boolean };

export function CtaBand({
  tone = "dark",
  title,
  accent,
  suffix,
  subtitle,
  primary,
  secondary,
}: {
  tone?: "dark" | "light";
  title: string;
  accent?: string;
  /** Text right after the accent (e.g. a closing question mark) */
  suffix?: string;
  subtitle?: ReactNode;
  primary: Cta;
  secondary?: Cta;
}) {
  return (
    <section className={`${tone === "dark" ? "section-dark" : "section-light"} grain overflow-x-clip py-28 md:py-40`}>
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
                <em className="accent pr-[0.04em]">{accent}</em>
                <Underline delay={0.3} />
              </span>
            </>
          )}
          {suffix}
        </h2>
        {subtitle && (
          <p className="mx-auto mt-8 max-w-xl text-[clamp(17px,1.4vw,20px)] italic leading-[1.5]">{subtitle}</p>
        )}
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

/* ─── Thin segment that fills in blue when it enters the viewport (step progress) ─── */

export function StepBar({ delay = 0, tone = "dark" }: { delay?: number; tone?: "dark" | "light" }) {
  return (
    <span className={`relative block h-[3px] w-full overflow-hidden rounded-full ${tone === "dark" ? "bg-line-dark" : "bg-line-light"}`} aria-hidden="true">
      <motion.span
        className="absolute inset-0 origin-left rounded-full bg-accent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay, ease }}
      />
    </span>
  );
}

/* ─── Decorative recurring bars: one bar per month, the current one in blue ─── */

export function RecurringBars({ count = 12 }: { count?: number }) {
  return (
    <div className="flex h-28 items-end gap-[6px]" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => {
        const last = i === count - 1;
        return (
          <motion.span
            key={i}
            className={`block flex-1 origin-bottom rounded-[4px] ${last ? "bg-accent" : "bg-ink"}`}
            style={{ height: `${28 + (i / (count - 1)) * 72}%` }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.05, ease }}
          />
        );
      })}
    </div>
  );
}
