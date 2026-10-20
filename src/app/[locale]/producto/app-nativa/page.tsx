import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHead, Reveal } from "@/components/site/blocks";
import { AppNativaPhones, ProductoCTA, ProductoSubHero } from "@/components/site/producto-blocks";
import { AppIcon, ScaledPhone, StoreScreen } from "@/components/home/phone";
import {
  Smartphone,
  Zap,
  Bell,
  WifiOff,
  Link2,
  Sparkles,
  ShoppingCart,
  Check,
  X,
} from "lucide-react";
import { productoAppNativaContent } from "@/content/producto-app-nativa";
import { localePath, toLocale } from "@/i18n/config";
import { pageAlternates } from "@/i18n/seo";

const featureIcons = [Zap, Bell, WifiOff, Link2, Sparkles, ShoppingCart];

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return { ...productoAppNativaContent[toLocale(locale)].metadata, alternates: pageAlternates(toLocale(locale), "/producto/app-nativa") };
}

export default async function AppNativaPage({ params }: Props) {
  const locale = toLocale((await params).locale);
  const t = productoAppNativaContent[locale];
  return (
    <>
      <Navbar variant="dark" />

      {/* Hero */}
      <ProductoSubHero
        back={{ label: t.back, href: localePath(locale, "/producto") }}
        label={t.hero.label}
        title={t.hero.title}
        accent={t.hero.accent}
        subtitle={t.hero.subtitle}
      >
        <AppNativaPhones />
      </ProductoSubHero>

      {/* Nativa de verdad */}
      <section className="section-light grain overflow-x-clip py-24 md:py-32">
        <div className="relative mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-16 px-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHead label={t.native.label} title={t.native.title} italic={t.native.italic} />
            <Reveal delay={0.07}>
              <p className="mt-8 max-w-xl text-[17px] leading-[1.6]">
                {t.native.p1}
              </p>
              <p className="mt-4 max-w-xl text-[17px] leading-[1.6]">
                {t.native.p2}
              </p>
            </Reveal>

            <Reveal delay={0.14} className="mt-10 max-w-xl">
              <div className="flex items-start gap-4 border-t border-line-light py-6">
                <X className="mt-0.5 h-6 w-6 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                <div>
                  <p className="text-[17px] font-semibold">{t.native.webviewTitle}</p>
                  <p className="mt-1 text-[17px] leading-[1.6]">
                    {t.native.webviewText}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 border-y border-line-light py-6">
                <Check className="mt-0.5 h-6 w-6 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                <div>
                  <p className="text-[17px] font-bold">{t.native.nativeTitle}</p>
                  <p className="mt-1 text-[17px] leading-[1.6]">
                    {t.native.nativeText}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="relative flex justify-center lg:col-span-5">
            <div className="glow left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" aria-hidden="true" />
            <div className="relative" aria-hidden="true">
              <div className="rotate-[2deg]">
                <ScaledPhone scale={0.82}>
                  <StoreScreen />
                </ScaledPhone>
              </div>

              {/* UI fragments resting on the phone edge */}
              <div className="absolute -left-6 top-16 flex items-center gap-2 rounded-full border border-card-light-border bg-white px-3.5 py-2 text-[13px] font-semibold shadow-[0_10px_30px_-12px_rgba(0,0,0,0.25)] sm:-left-10">
                <Zap className="h-4 w-4" strokeWidth={1.75} />
                60 fps
              </div>
              <div className="absolute -right-4 bottom-24 flex items-center gap-2 rounded-full border border-card-light-border bg-white px-3.5 py-2 text-[13px] font-semibold shadow-[0_10px_30px_-12px_rgba(0,0,0,0.25)] sm:-right-10">
                <Smartphone className="h-4 w-4" strokeWidth={1.75} />
                React Native
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Features */}
      <section className="section-dark grain overflow-x-clip py-28 md:py-40">
        <div className="glow -left-[320px] top-[30%]" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1280px] px-6">
          <SectionHead
            label={t.featuresSection.label}
            title={t.featuresSection.title}
            italic={t.featuresSection.italic}
            subtitle={t.featuresSection.subtitle}
          />

          <ul className="mt-16 grid grid-cols-1 gap-x-16 md:mt-20 lg:grid-cols-2">
            {t.features.map((feature, i) => {
              const Icon = featureIcons[i];
              return (
                <li key={feature.title} className="border-t border-line-dark">
                  <Reveal delay={(i % 2) * 0.07} className="grid grid-cols-[auto_1fr] gap-x-5 py-9 md:py-10">
                    <Icon className="mt-1 h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                    <div>
                      <h3 className="font-display text-[clamp(22px,2vw,30px)] font-bold leading-[1.15] tracking-[-0.03em]">
                        {feature.title}
                      </h3>
                      <p className="mt-3 max-w-lg text-[17px] leading-[1.6]">{feature.description}</p>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Publishing Process */}
      <section className="section-light grain overflow-x-clip py-28 md:py-40">
        <div className="relative mx-auto max-w-[1280px] px-6">
          <SectionHead
            label={t.publishing.label}
            title={t.publishing.title}
            italic={t.publishing.italic}
            subtitle={t.publishing.subtitle}
          />

          <ol className="mt-16 grid grid-cols-1 gap-x-10 md:mt-20 md:grid-cols-3">
            {t.publishingSteps.map((step, i) => (
              <li key={step.number} className="border-t border-line-light">
                <Reveal delay={i * 0.07} className="pb-8 pt-10">
                  <span
                    className="block font-display text-[clamp(64px,7vw,104px)] font-bold italic leading-[0.85] tracking-[-0.06em] text-accent"
                    aria-hidden="true"
                  >
                    {step.number}
                  </span>
                  <h3 className="mt-8 font-display text-[clamp(22px,2vw,30px)] font-bold leading-[1.15] tracking-[-0.03em]">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-[17px] leading-[1.6]">{step.description}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* White Label Note */}
      <section className="section-dark grain overflow-x-clip py-28 md:py-40">
        <div className="glow left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" aria-hidden="true" />
        <Reveal className="relative mx-auto max-w-3xl px-6 text-center">
          <div className="flex justify-center" aria-hidden="true">
            <AppIcon size={72} />
          </div>
          <h2 className="mt-10 font-display text-[clamp(34px,4.4vw,64px)] font-bold leading-[1.04] tracking-[-0.04em]">
            {t.whiteLabel.title} <em className="accent">{t.whiteLabel.accent}</em>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-[clamp(17px,1.4vw,20px)] italic leading-[1.5]">
            {t.whiteLabel.text}
          </p>
        </Reveal>
      </section>

      {/* Developer Accounts Note */}
      <section className="section-light grain overflow-x-clip py-20 md:py-28">
        <Reveal className="relative mx-auto max-w-[1280px] px-6">
          <div className="mx-auto max-w-2xl rounded-[28px] border border-card-light-border bg-card-light p-6 md:p-10">
            <p className="text-[17px] font-semibold">
              {t.developer.title}
            </p>
            <p className="mt-2 text-[17px] leading-[1.6]">
              {t.developer.text}
            </p>
            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-5">
              <div className="flex flex-1 items-center gap-4 rounded-[20px] bg-white p-5">
                <svg className="h-7 w-7 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div>
                  <p className="text-[16px] font-semibold">
                    {t.developer.appleName}
                  </p>
                  <p className="text-[15px]">{t.developer.applePrice}</p>
                </div>
              </div>

              <span className="self-center text-[22px] font-light" aria-hidden="true">+</span>

              <div className="flex flex-1 items-center gap-4 rounded-[20px] bg-white p-5">
                <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.4l2.834 1.64a1 1 0 0 1 0 1.726l-2.834 1.64-2.534-2.533 2.534-2.473zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                </svg>
                <div>
                  <p className="text-[16px] font-semibold">
                    {t.developer.googleName}
                  </p>
                  <p className="text-[15px]">{t.developer.googlePrice}</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <ProductoCTA
        title={t.cta.title}
        accent={t.cta.accent}
        subtitle={t.cta.subtitle}
        primary={{ label: t.cta.primary, href: "https://app.saruapps.com/register" }}
        secondary={{ label: t.cta.secondary, href: "https://calendly.com/saruapps/30min", external: true }}
      />

      <Footer />
    </>
  );
}
