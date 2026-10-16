"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import type { ReactNode } from "react";

export const ease = [0.16, 1, 0.3, 1] as const;

/* Clamped scroll mapping. A function transform is never hardware-accelerated:
   accelerated scroll-linked opacity snaps back to its start value once the
   scroll leaves the input range, which made layers reappear mid-morph. */
export function useRange(
  v: MotionValue<number>,
  [a, b]: [number, number],
  [from, to]: [number, number]
) {
  return useTransform(v, (x) => {
    const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
    return from + (to - from) * t;
  });
}

/* ─── Text CTA: bold text + arrow, hand-drawn underline on hover ─── */

export function ArrowLink({
  href,
  children,
  external = false,
  weight = "bold",
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
  weight?: "bold" | "medium";
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group inline-flex min-h-[44px] items-center gap-2 py-2 text-[17px] ${
        weight === "bold" ? "font-bold" : "font-medium"
      }`}
    >
      <span className="relative">
        {children}
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
    </a>
  );
}

/* ─── Hand-drawn underline that draws itself ─── */

export function Underline({ delay = 0.6 }: { delay?: number }) {
  return (
    <svg
      viewBox="0 0 300 24"
      preserveAspectRatio="none"
      className="pointer-events-none absolute -bottom-[0.12em] left-0 h-[0.22em] w-full"
      aria-hidden="true"
    >
      <motion.path
        d="M2 14 C 80 6, 180 20, 298 9"
        stroke="#2F6BFF"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay, ease }}
      />
      <motion.path
        d="M40 20 C 120 16, 200 22, 270 17"
        stroke="#2F6BFF"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay + 0.45, ease }}
      />
    </svg>
  );
}

/* ─── Hand-drawn circle around a word (does not close perfectly) ─── */

export function HandCircle({ delay = 0.3 }: { delay?: number }) {
  return (
    <svg
      viewBox="0 0 300 120"
      preserveAspectRatio="none"
      className="pointer-events-none absolute -left-[9%] -top-[14%] h-[128%] w-[118%]"
      aria-hidden="true"
    >
      <motion.path
        d="M42 34 C 90 6, 230 2, 280 36 C 306 58, 268 104, 160 110 C 60 114, 6 92, 14 58 C 20 34, 70 18, 118 14"
        stroke="#2F6BFF"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 0.9, delay, ease }}
      />
    </svg>
  );
}

/* ─── Step detail: a check and a short fact, under a hairline ─── */

export function Detail({ children }: { children: ReactNode }) {
  return (
    <p className="flex max-w-md items-center gap-3 border-t border-line-dark pt-5 text-[16px] font-semibold">
      <Check className="h-5 w-5 shrink-0" strokeWidth={2} aria-hidden="true" />
      {children}
    </p>
  );
}

/* ─── Section label: sentence case, 600, no pill ─── */

export function Label({ children }: { children: ReactNode }) {
  return <p className="text-[16px] font-semibold tracking-[-0.01em]">{children}</p>;
}
