import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero, SectionHead, Reveal } from "@/components/site/blocks";
import { ProductoCTA, ProductoLinkRow } from "@/components/site/producto-blocks";
import { HomeScreen, ScaledPhone } from "@/components/home/phone";
import { productoContent } from "@/content/producto";
import { localePath, toLocale } from "@/i18n/config";
import { pageAlternates } from "@/i18n/seo";
import { signupUrl } from "@/i18n/signup";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return { ...productoContent[toLocale(locale)].metadata, alternates: pageAlternates(toLocale(locale), "/producto") };
}

export default async function ProductoPage({ params }: Props) {
  const locale = toLocale((await params).locale);
  const t = productoContent[locale];
  return (
    <>
      <Navbar variant="dark" />

      {/* Hero */}
      <PageHero
        label={t.hero.label}
        title={t.hero.title}
        accent={t.hero.accent}
        subtitle={t.hero.subtitle}
      >
        <div className="rotate-[3deg]" aria-hidden="true">
          <div className="sm:hidden">
            <ScaledPhone scale={0.8}>
              <HomeScreen />
            </ScaledPhone>
          </div>
          <div className="hidden sm:block">
            <ScaledPhone scale={0.92}>
              <HomeScreen />
            </ScaledPhone>
          </div>
        </div>
      </PageHero>

      {/* Features: editorial numbered list */}
      <section className="section-light grain overflow-x-clip py-24 md:py-32">
        <div className="relative mx-auto max-w-[1280px] px-6">
          <ul>
            {t.features.map((feature, i) => (
              <ProductoLinkRow
                key={feature.title}
                index={String(i + 1).padStart(2, "0")}
                title={feature.title}
                description={feature.description}
                href={localePath(locale, feature.href)}
                cta={t.featureCta}
                delay={(i % 3) * 0.07}
              />
            ))}
          </ul>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-dark grain overflow-x-clip py-28 md:py-40">
        <div className="glow -left-[320px] top-[20%]" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1280px] px-6">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-32">
                <SectionHead
                  label={t.howItWorks.label}
                  title={t.howItWorks.title}
                  italic={t.howItWorks.italic}
                  subtitle={t.howItWorks.subtitle}
                />
              </div>
            </div>
            <ol className="lg:col-span-7">
              {t.steps.map((step, i) => (
                <li key={step.number} className="border-t border-line-dark last:border-b">
                  <Reveal delay={i * 0.07} className="grid grid-cols-[auto_1fr] items-baseline gap-x-6 py-10 md:gap-x-10 md:py-12">
                    <span
                      className="w-[1.6em] font-display text-[clamp(56px,6vw,88px)] font-bold italic leading-[0.85] tracking-[-0.06em] text-accent"
                      aria-hidden="true"
                    >
                      {step.number}
                    </span>
                    <div>
                      <h3 className="font-display text-[clamp(22px,2vw,30px)] font-bold leading-[1.15] tracking-[-0.03em]">
                        {step.title}
                      </h3>
                      <p className="mt-3 max-w-md text-[17px] leading-[1.6]">{step.description}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* CTA */}
      <ProductoCTA
        tone="light"
        title={t.cta.title}
        accent={t.cta.accent}
        subtitle={t.cta.subtitle}
        primary={{ label: t.cta.primary, href: signupUrl(locale) }}
        secondary={{ label: t.cta.secondary, href: "https://calendly.com/saruapps/30min", external: true }}
      />

      <Footer />
    </>
  );
}
