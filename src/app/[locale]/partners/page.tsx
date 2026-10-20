import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PageHero, SectionHead } from "@/components/site/blocks";
import { CtaBand, RecurringBars, StepBar } from "@/components/site/precios-shared";
import { Building2, User, Settings, Megaphone } from "lucide-react";
import { partnersContent } from "@/content/partners";
import { toLocale } from "@/i18n/config";
import { pageAlternates } from "@/i18n/seo";

const audienceIcons = [Building2, User, Settings, Megaphone];

const h3 = "font-display text-[clamp(22px,2vw,30px)] font-bold leading-[1.15] tracking-[-0.03em]";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return { ...partnersContent[toLocale(locale)].metadata, alternates: pageAlternates(toLocale(locale), "/partners") };
}

export default async function Partners({ params }: Props) {
  const locale = toLocale((await params).locale);
  const t = partnersContent[locale];
  const { steps } = t;
  const audiences = t.audiences.map((audience, i) => ({ ...audience, icon: audienceIcons[i] }));
  const [lead, ...rest] = t.benefits;
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
        />

        {/* Benefits: bento, the recurring commission gets the big tile */}
        <section className="section-light grain">
          <div className="relative mx-auto max-w-[1280px] px-6 py-24 md:py-32">
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
              <AnimatedSection className="lg:col-span-7 lg:row-span-2">
                <div className="flex h-full flex-col justify-between gap-12 rounded-[28px] border border-card-light-border bg-card-light p-8 md:p-12">
                  <div>
                    <h3 className={h3}>{lead.title}</h3>
                    <p className="mt-4 max-w-md text-[17px] leading-[1.6]">{lead.description}</p>
                  </div>
                  <RecurringBars />
                </div>
              </AnimatedSection>
              {rest.map((benefit, i) => (
                <AnimatedSection key={benefit.title} delay={(i + 1) * 0.07} className="lg:col-span-5">
                  <div className="h-full rounded-[28px] border border-card-light-border bg-card-light p-8 md:p-10">
                    <h3 className={h3}>{benefit.title}</h3>
                    <p className="mt-4 text-[17px] leading-[1.6]">{benefit.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* How it works: three numbered steps with a segmented progress line */}
        <section className="section-dark grain overflow-x-clip">
          <div className="relative mx-auto max-w-[1280px] px-6 py-24 md:py-32">
            <SectionHead label={t.stepsHead.label} title={t.stepsHead.title} />

            <ol className="mt-14 grid grid-cols-1 gap-12 md:mt-20 md:grid-cols-3 md:gap-8">
              {steps.map((step, i) => (
                <li key={step.number}>
                  <AnimatedSection delay={i * 0.07}>
                    <StepBar delay={0.2 + i * 0.35} />
                    <p className="mt-8 font-display text-[clamp(40px,4vw,56px)] font-bold italic leading-none tracking-[-0.04em] tabular-nums">
                      {step.number}
                    </p>
                    <h3 className={`mt-6 ${h3}`}>{step.title}</h3>
                    <p className="mt-4 max-w-sm text-[17px] leading-[1.6]">{step.description}</p>
                  </AnimatedSection>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Who is it for: editorial list with loose icons */}
        <section className="section-light grain">
          <div className="relative mx-auto max-w-[1280px] px-6 py-24 md:py-32">
            <SectionHead label={t.audiencesHead.label} title={t.audiencesHead.title} italic={t.audiencesHead.italic} />

            <div className="mt-14 grid grid-cols-1 gap-x-16 md:mt-20 md:grid-cols-2">
              {audiences.map((audience, i) => (
                <AnimatedSection key={audience.title} delay={(i % 2) * 0.07}>
                  <div className="flex h-full gap-6 border-t border-line-light py-9">
                    <audience.icon className="mt-1 h-7 w-7 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                    <div>
                      <h3 className={h3}>{audience.title}</h3>
                      <p className="mt-3 max-w-md text-[17px] leading-[1.6]">{audience.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <CtaBand
          title={t.cta.title}
          accent={t.cta.accent}
          subtitle={t.cta.subtitle}
          primary={{ label: t.cta.primary, href: "https://calendly.com/saruapps/30min", external: true }}
          secondary={{ label: t.cta.secondary, href: "https://calendly.com/saruapps/30min", external: true }}
        />
      </main>
      <Footer />
    </>
  );
}
