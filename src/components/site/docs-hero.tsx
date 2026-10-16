"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { Label, ease } from "../home/primitives";

/* Compact dark hero for reading pages (blog, legal): label, title, optional subtitle / meta line */
export function DocsHero({
  label,
  title,
  subtitle,
  meta,
}: {
  label?: string;
  title: string;
  subtitle?: ReactNode;
  /** Small secondary line (e.g. last-updated date) */
  meta?: ReactNode;
}) {
  return (
    <section className="section-dark grain overflow-clip">
      <div className="glow -right-[260px] -top-[320px]" aria-hidden="true" />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease }}
        className="relative mx-auto max-w-[1280px] px-6 pb-14 pt-32 md:pb-20 md:pt-40"
      >
        <div className="max-w-[760px]">
          {label && <Label>{label}</Label>}
          <h1
            className={`${label ? "mt-4" : ""} font-display text-[clamp(38px,5vw,64px)] font-extrabold leading-[1.02] tracking-[-0.045em]`}
          >
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 max-w-xl text-[clamp(17px,1.4vw,20px)] italic leading-[1.5]">{subtitle}</p>
          )}
          {meta && <p className="mt-6 text-[14px] text-white/70">{meta}</p>}
        </div>
      </motion.div>
    </section>
  );
}
