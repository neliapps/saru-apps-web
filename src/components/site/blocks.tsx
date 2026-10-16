"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { ArrowLink, Label, Underline, ease } from "../home/primitives";

type Cta = { label: string; href: string; external?: boolean };

/* ─── Dark page hero: label, big title with optional accent, subtitle, text CTAs, optional visual ─── */

export function PageHero({
  label,
  title,
  accent,
  subtitle,
  primary,
  secondary,
  children,
}: {
  label?: string;
  title: string;
  /** Final phrase of the title, rendered italic blue with a hand-drawn underline */
  accent?: string;
  subtitle?: ReactNode;
  primary?: Cta;
  secondary?: Cta;
  /** Visual on the right (phone, illustration). Decorative: wrap it in aria-hidden if so */
  children?: ReactNode;
}) {
  const withVisual = Boolean(children);
  return (
    <section className="section-dark grain overflow-clip">
      <div className="glow -right-[200px] top-[10%]" aria-hidden="true" />
      <div
        className={`relative mx-auto max-w-[1280px] px-6 pb-20 pt-36 md:pb-28 md:pt-44 ${
          withVisual ? "grid items-center gap-14 lg:grid-cols-12" : ""
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className={withVisual ? "lg:col-span-7" : "max-w-4xl"}
        >
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
        {withVisual && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
            className="relative flex justify-center lg:col-span-5"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}

/* ─── Section heading: label + title (+ italic variant) + subtitle ─── */

export function SectionHead({
  label,
  title,
  italic,
  subtitle,
  align = "left",
  className = "",
}: {
  label?: string;
  title: string;
  /** Trailing phrase in italic, same color as the text (the no-color accent variant) */
  italic?: string;
  subtitle?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease }}
      className={`${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}
    >
      {label && <Label>{label}</Label>}
      <h2 className="mt-4 font-display text-[clamp(34px,4.4vw,64px)] font-bold leading-[1.04] tracking-[-0.04em]">
        {title}
        {italic && (
          <>
            {" "}
            <em className="italic">{italic}</em>
          </>
        )}
      </h2>
      {subtitle && (
        <p className={`mt-6 max-w-xl text-[clamp(17px,1.4vw,20px)] italic leading-[1.5] ${align === "center" ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

/* ─── Staggered reveal for grids/lists ─── */

export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
