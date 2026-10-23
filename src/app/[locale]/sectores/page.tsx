import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PageHero, SectionHead } from "@/components/site/blocks";
import { CtaBand } from "@/components/site/precios-shared";
import { HomeScreen, LockScreen, ScaledPhone } from "@/components/home/phone";
import { sectoresContent } from "@/content/sectores";
import { toLocale } from "@/i18n/config";
import { pageAlternates } from "@/i18n/seo";
import { signupUrl } from "@/i18n/signup";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return { ...sectoresContent[toLocale(locale)].metadata, alternates: pageAlternates(toLocale(locale), "/sectores") };
}

export default async function Sectores({ params }: Props) {
  const locale = toLocale((await params).locale);
  const t = sectoresContent[locale];
  const { sectors, benefits } = t;

  return (
    <>
      <Navbar variant="dark" />
      <main>
        {/* Hero */}
        <PageHero
          label={t.hero.label}
          title={t.hero.title}
          accent={t.hero.accent}
          subtitle={t.hero.subtitle}
        >
          <div className="relative rotate-[4deg]" aria-hidden="true">
            <ScaledPhone scale={0.82}>
              <HomeScreen />
            </ScaledPhone>
          </div>
        </PageHero>

        {/* Sectors: editorial numbered list */}
        <section className="section-light grain">
          <div className="relative mx-auto max-w-[1280px] px-6 py-24 md:py-32">
            <ol className="grid grid-cols-1 gap-x-16 md:grid-cols-2">
              {sectors.map((sector, i) => (
                <li key={sector.name}>
                  <AnimatedSection delay={(i % 2) * 0.07} className="h-full">
                    <div className="group grid h-full grid-cols-[3rem_1fr] gap-x-4 border-t border-line-light py-9 md:grid-cols-[4rem_1fr]">
                      <span className="pt-[0.35em] text-[16px] font-bold italic tabular-nums" aria-hidden="true">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="font-display text-[clamp(22px,2vw,30px)] font-bold leading-[1.15] tracking-[-0.03em]">
                          {sector.name}
                        </h3>
                        <p className="mt-3 max-w-md text-[17px] leading-[1.6]">
                          {sector.description}
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Benefits: bento, two editorial rows + a card with the push mockup */}
        <section className="section-dark grain overflow-x-clip">
          <div className="glow -right-[180px] top-[30%]" aria-hidden="true" />
          <div className="relative mx-auto max-w-[1280px] px-6 py-24 md:py-32">
            <SectionHead label={t.benefitsHead.label} title={t.benefitsHead.title} italic={t.benefitsHead.italic} />

            <div className="mt-14 grid grid-cols-1 gap-10 md:mt-20 lg:grid-cols-12 lg:gap-12">
              <div className="flex flex-col lg:col-span-7">
                {benefits.slice(0, 2).map((benefit, i) => (
                  <AnimatedSection key={benefit.title} delay={i * 0.07}>
                    <div className="border-t border-line-dark py-10 md:py-14">
                      <h3 className="font-display text-[clamp(22px,2vw,30px)] font-bold leading-[1.15] tracking-[-0.03em]">
                        {benefit.title}
                      </h3>
                      <p className="mt-4 max-w-lg text-[17px] leading-[1.6]">{benefit.description}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              {benefits.slice(2).map((benefit) => (
                <AnimatedSection key={benefit.title} delay={0.14} className="lg:col-span-5">
                  <div className="flex h-full flex-col overflow-hidden rounded-[28px] border border-card-dark-border bg-card-dark shadow-[inset_0_1px_0_rgba(255,255,255,.18)] backdrop-blur-xl">
                    <div className="p-8 md:p-10">
                      <h3 className="font-display text-[clamp(22px,2vw,30px)] font-bold leading-[1.15] tracking-[-0.03em]">
                        {benefit.title}
                      </h3>
                      <p className="mt-4 text-[17px] leading-[1.6]">{benefit.description}</p>
                    </div>
                    <div
                      className="mt-auto flex h-[340px] justify-center overflow-hidden"
                      style={{
                        maskImage: "linear-gradient(to bottom, #000 65%, transparent)",
                        WebkitMaskImage: "linear-gradient(to bottom, #000 65%, transparent)",
                      }}
                      aria-hidden="true"
                    >
                      <ScaledPhone scale={0.72} dark>
                        <LockScreen />
                      </ScaledPhone>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <CtaBand
          tone="light"
          title={t.cta.title}
          accent={t.cta.accent}
          suffix={t.cta.suffix}
          subtitle={t.cta.subtitle}
          primary={{ label: t.cta.primary, href: signupUrl(locale) }}
          secondary={{ label: t.cta.secondary, href: "https://calendly.com/saruapps/30min", external: true }}
        />
      </main>
      <Footer />
    </>
  );
}
