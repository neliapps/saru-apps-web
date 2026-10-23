"use client";

import { useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { Label, TiendanubeBadge, Underline, ease } from "./home/primitives";
import { SectionHead } from "./site/blocks";
import { CtaBand } from "./site/precios-shared";
import { useDictionary } from "@/i18n/DictionaryProvider";
import { signupUrl } from "@/i18n/signup";
import { preciosContent } from "@/content/precios";

/* ─── Plan data (text lives in src/content/precios.ts, by index) ─── */

type PlanMeta = {
  name: string;
  monthlyPrice: number;
  currency: string;
  /** Defaults to the Tiendanube signup */
  href?: string;
  highlighted: boolean;
};

const planMeta: PlanMeta[] = [
  { name: "Starter", monthlyPrice: 49, currency: "USD", highlighted: false },
  { name: "Growth", monthlyPrice: 149, currency: "USD", highlighted: true },
  { name: "Scale", monthlyPrice: 349, currency: "USD", highlighted: false },
  { name: "Enterprise", monthlyPrice: 0, currency: "", href: "https://calendly.com/saruapps/30min", highlighted: false },
];

/* ─── Comparison cell renderer ─── */

function ComparisonCell({
  value,
  included,
  notIncluded,
}: {
  value: string | boolean;
  included: string;
  notIncluded: string;
}) {
  if (value === true) {
    return <Check className="mx-auto h-5 w-5" strokeWidth={1.75} aria-label={included} />;
  }
  if (value === false) {
    return <span className="mx-auto block h-[2px] w-3 rounded-full bg-current opacity-30" aria-label={notIncluded} />;
  }
  return <span className="text-[15px] font-semibold">{value}</span>;
}

/* ─── Store fee row (Apple / Google) ─── */

function StoreFee({ name, price, children }: { name: string; price: string; children: ReactNode }) {
  return (
    <div className="flex flex-1 items-center gap-4">
      <svg className="h-7 w-7 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        {children}
      </svg>
      <div>
        <p className="text-[16px] font-bold">{name}</p>
        <p className="text-[15px]">{price}</p>
      </div>
    </div>
  );
}

const planKeys = ["starter", "growth", "scale", "enterprise"] as const;

/* ─── Main component ─── */

export function PreciosContent() {
  const { locale } = useDictionary();
  const t = preciosContent[locale];
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <main>
      {/* ─── Hero (dark, compact) ─── */}
      <section className="section-dark grain overflow-clip">
        <div className="glow -right-[220px] -top-[160px]" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1280px] px-6 pb-16 pt-36 md:pb-20 md:pt-40">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="grid gap-8 lg:grid-cols-12 lg:items-end"
          >
            <div className="lg:col-span-7">
              <Label>{t.hero.label}</Label>
              <h1 className="mt-5 font-display text-[clamp(38px,5.4vw,76px)] font-extrabold leading-[1] tracking-[-0.045em]">
                {t.hero.title}{" "}
                <span className="relative inline-block">
                  <em className="accent pr-[0.04em]">{t.hero.accent}</em>
                  <Underline delay={0.5} />
                </span>
              </h1>
            </div>
            <p className="max-w-md text-[clamp(17px,1.4vw,20px)] italic leading-[1.5] lg:col-span-4 lg:col-start-9">
              {t.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Billing toggle + plan cards (light) ─── */}
      <section className="section-light grain overflow-x-clip">
        <div className="relative mx-auto max-w-[1280px] px-6 pb-24 pt-16 md:pb-32 md:pt-20">
          <AnimatedSection className="mb-12 flex justify-center md:mb-16">
            <div
              role="group"
              aria-label={t.billing.ariaLabel}
              className="relative inline-flex items-center rounded-xl border border-card-light-border bg-card-light p-1"
            >
              <div
                className={`absolute bottom-1 top-1 w-[calc(50%-4px)] rounded-lg bg-ink transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isAnnual ? "left-[calc(50%+2px)]" : "left-1"
                }`}
                aria-hidden="true"
              />
              <button
                type="button"
                onClick={() => setIsAnnual(false)}
                aria-pressed={!isAnnual}
                className={`relative z-10 min-h-[44px] rounded-lg px-7 text-[15px] font-semibold transition-colors duration-300 ${
                  !isAnnual ? "text-white" : "text-ink"
                }`}
              >
                {t.billing.monthly}
              </button>
              <button
                type="button"
                onClick={() => setIsAnnual(true)}
                aria-pressed={isAnnual}
                className={`relative z-10 flex min-h-[44px] items-center gap-2 rounded-lg px-7 text-[15px] font-semibold transition-colors duration-300 ${
                  isAnnual ? "text-white" : "text-ink"
                }`}
              >
                {t.billing.annual}
                <span className={`font-bold italic ${isAnnual ? "text-accent-light" : "text-accent-dark"}`}>
                  -20%
                </span>
              </button>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {planMeta.map((plan, i) => {
              const copy = t.plans[i];
              const isEnterprise = plan.monthlyPrice === 0;
              const displayPrice = isEnterprise
                ? null
                : isAnnual
                  ? Math.round(plan.monthlyPrice * 0.8)
                  : plan.monthlyPrice;
              const hl = plan.highlighted;

              return (
                <AnimatedSection key={plan.name} delay={i * 0.07}>
                  <div
                    className={`flex h-full flex-col rounded-[28px] border p-7 transition-transform duration-300 hover:-translate-y-0.5 ${
                      hl ? "border-ink bg-ink text-white" : "border-card-light-border bg-card-light text-ink"
                    }`}
                  >
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-display text-[clamp(22px,2vw,30px)] font-bold tracking-[-0.03em]">
                        {plan.name}
                      </h3>
                      {hl && <span className="text-[14px] font-semibold italic">{t.mostPopular}</span>}
                    </div>
                    <p className="mt-1 text-[16px] italic">{copy.description}</p>

                    <div className="mt-8 min-h-[92px]">
                      {isEnterprise ? (
                        <span className="font-display text-[clamp(32px,2.8vw,40px)] font-extrabold leading-none tracking-[-0.045em]">
                          {t.custom}
                        </span>
                      ) : (
                        <div>
                          <div className="flex items-baseline gap-1.5">
                            <span className="text-[15px] font-semibold">{plan.currency}</span>
                            <motion.span
                              key={displayPrice}
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.35, ease }}
                              className="font-display text-[clamp(48px,4.2vw,60px)] font-extrabold leading-none tracking-[-0.055em] tabular-nums"
                            >
                              {displayPrice}
                            </motion.span>
                            <span className="text-[15px] font-semibold">{t.billing.perMonth}</span>
                          </div>
                          {isAnnual && (
                            <p className="mt-2 text-[13px] italic">
                              {t.billing.billedAnnuallyPrefix}{" "}
                              {displayPrice! * 12}{t.billing.perYearSuffix}
                            </p>
                          )}
                        </div>
                      )}
                    </div>

                    <a
                      href={plan.href || signupUrl(locale)}
                      {...(plan.name === "Enterprise"
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className={`mt-6 flex min-h-[48px] items-center justify-center gap-2.5 rounded-lg text-[15px] font-bold transition-opacity duration-300 hover:opacity-85 ${
                        hl ? "bg-white text-ink" : "bg-ink text-white"
                      }`}
                    >
                      {!plan.href && <TiendanubeBadge />}
                      {copy.cta}
                    </a>

                    <ul className={`mt-8 space-y-3 border-t pt-7 ${hl ? "border-line-dark" : "border-line-light"}`}>
                      {copy.lead && (
                        <li className="flex items-start gap-3 text-[15px] leading-[1.45]">
                          <span className="font-bold">{copy.lead}</span>
                        </li>
                      )}
                      {copy.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-[15px] leading-[1.45]">
                          <Check className="mt-[2px] h-[18px] w-[18px] shrink-0" strokeWidth={1.75} aria-hidden="true" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          {/* ─── Notifications note ─── */}
          <AnimatedSection delay={0.2}>
            <p className="mt-12 text-center text-[15px] leading-[1.55]">
              <span className="font-bold">{t.notificationsNote.title}</span>{" "}
              <span className="italic">{t.notificationsNote.example}</span>
            </p>
          </AnimatedSection>

          {/* ─── Store fees (Apple / Google) ─── */}
          <AnimatedSection delay={0.2}>
            <div className="mt-12 grid gap-8 border-t border-line-light pt-10 md:grid-cols-12 md:items-center">
              <div className="md:col-span-5">
                <p className="text-[17px] font-bold">
                  {t.fees.title}
                </p>
                <p className="mt-2 max-w-md text-[15px] leading-[1.55]">
                  {t.fees.description}
                </p>
              </div>
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center md:col-span-7">
                <StoreFee name="Apple Developer" price={t.fees.apple}>
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </StoreFee>
                <span className="text-[22px] font-light leading-none" aria-hidden="true">+</span>
                <StoreFee name="Google Play Console" price={t.fees.google}>
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.4l2.834 1.64a1 1 0 0 1 0 1.726l-2.834 1.64-2.534-2.533 2.534-2.473zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                </StoreFee>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Comparison table (dark) ─── */}
      <section className="section-dark grain overflow-x-clip">
        <div className="glow -left-[260px] -top-[200px]" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1280px] px-6 py-24 md:py-32">
          <SectionHead
            label={t.comparison.label}
            title={t.comparison.title}
            subtitle={t.comparison.subtitle}
          />

          <AnimatedSection delay={0.1} className="mt-14 md:mt-20">
            <div className="-mx-6 overflow-x-auto px-6">
              <div className="min-w-[760px]" role="table" aria-label={t.comparison.ariaLabel}>
                {/* Header */}
                <div role="row" className="grid grid-cols-[minmax(220px,1.7fr)_repeat(4,minmax(120px,1fr))] border-b border-line-dark">
                  <div role="columnheader" className="py-5 pr-4 text-[15px] font-semibold">
                    {t.comparison.featureHeader}
                  </div>
                  {["Starter", "Growth", "Scale", "Enterprise"].map((name) => (
                    <div
                      key={name}
                      role="columnheader"
                      className={`px-4 py-5 text-center font-display text-[18px] font-bold tracking-[-0.02em] ${
                        name === "Growth" ? "rounded-t-2xl bg-white text-ink" : ""
                      }`}
                    >
                      {name}
                    </div>
                  ))}
                </div>

                {/* Rows */}
                {t.comparison.rows.map((row, i) => {
                  const last = i === t.comparison.rows.length - 1;
                  return (
                    <div
                      key={row.feature}
                      role="row"
                      className={`grid grid-cols-[minmax(220px,1.7fr)_repeat(4,minmax(120px,1fr))] ${
                        last ? "" : "border-b border-line-dark"
                      }`}
                    >
                      <div role="rowheader" className="flex items-center py-4 pr-4 text-[16px]">
                        {row.feature}
                      </div>
                      {planKeys.map((plan) => (
                        <div
                          key={plan}
                          role="cell"
                          className={`flex items-center justify-center px-4 py-4 text-center ${
                            plan === "growth" ? `bg-card-dark ${last ? "rounded-b-2xl" : ""}` : ""
                          }`}
                        >
                          <ComparisonCell value={row[plan]} included={t.comparison.included} notIncluded={t.comparison.notIncluded} />
                        </div>
                      ))}
                    </div>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── FAQ (light) ─── */}
      <section className="section-light grain">
        <div className="relative mx-auto max-w-[1280px] px-6 py-24 md:py-32">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <AnimatedSection className="lg:col-span-4">
              <Label>{t.faq.label}</Label>
              <h2 className="mt-4 font-display text-[clamp(34px,4.4vw,64px)] font-bold leading-[1.04] tracking-[-0.04em]">
                {t.faq.title} <em className="italic">{t.faq.italic}</em>
              </h2>
              <p className="mt-6 text-[17px] leading-[1.6]">
                {t.faq.notFound}{" "}
                <a
                  href="https://calendly.com/saruapps/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline decoration-2 underline-offset-4 transition-colors hover:decoration-accent"
                >
                  {t.faq.contact}
                </a>
              </p>
            </AnimatedSection>

            <AnimatedSection className="border-t border-line-light lg:col-span-8" delay={0.07}>
              <dl>
                {t.faq.items.map((faq) => (
                  <div key={faq.question} className="border-b border-line-light py-7">
                    <dt className="font-display text-[clamp(18px,1.5vw,21px)] font-bold leading-[1.3] tracking-[-0.02em]">
                      {faq.question}
                    </dt>
                    <dd className="mt-3 max-w-2xl text-[17px] leading-[1.6]">{faq.answer}</dd>
                  </div>
                ))}
              </dl>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── Bottom CTA (dark) ─── */}
      <CtaBand
        title={t.cta.title}
        accent={t.cta.accent}
        subtitle={t.cta.subtitle}
        primary={{ label: t.cta.primary, href: signupUrl(locale) }}
        secondary={{ label: t.cta.secondary, href: "https://calendly.com/saruapps/30min", external: true }}
      />
    </main>
  );
}
