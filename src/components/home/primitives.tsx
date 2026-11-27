"use client";

import { useTransform, type MotionValue } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import type { ReactNode } from "react";
import { isSignupUrl } from "@/i18n/signup";

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

/* ─── Tiendanube tile: marks links that sign up through Tiendanube OAuth ─── */

export function TiendanubeBadge({ className = "h-[22px] w-[22px]" }: { className?: string }) {
  return (
    <img
      src="/brand/tiendanube-isotipo.webp"
      alt=""
      aria-hidden="true"
      className={`shrink-0 rounded-[6px] ${className}`}
    />
  );
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
      {isSignupUrl(href) && <TiendanubeBadge />}
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
