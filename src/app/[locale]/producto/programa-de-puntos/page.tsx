import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CalendarClock, ChartColumn, Coins, Gift, Hourglass, Percent, SlidersHorizontal, Smartphone, TicketPercent } from "lucide-react";
import { PointsRedeemCard, PointsScreen, PushCard } from "@/components/home/phone";
import { ArrowLink } from "@/components/home/primitives";
import { Reveal, SectionHead } from "@/components/site/blocks";
import { HeroPhone, ModuloCTA, ModuloHero } from "@/components/site/producto-modulos";
import { productoPuntosContent } from "@/content/producto-puntos";
import { localePath, toLocale } from "@/i18n/config";
import { pageAlternates } from "@/i18n/seo";
import { signupUrl } from "@/i18n/signup";

const noticeIcons = [Coins, Smartphone, Hourglass];
const ruleIcons = [Percent, SlidersHorizontal, TicketPercent, CalendarClock, Gift, ChartColumn];

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return {
    ...productoPuntosContent[toLocale(locale)].metadata,
    alternates: pageAlternates(toLocale(locale), "/producto/programa-de-puntos"),
  };
}

export default async function ProgramaDePuntosPage({ params }: Props) {
  const locale = toLocale((await params).locale);
  const t = productoPuntosContent[locale];
  const notices = t.notices.items.map((item, i) => ({ ...item, icon: noticeIcons[i] }));
  const rules = t.rules.items.map((item, i) => ({ ...item, icon: ruleIcons[i] }));

  return (
    <>
      <Navbar variant="dark" />

      {/* Hero: the shopper's points in the app, and the cart switch that spends them */}
      <ModuloHero
        back={{ label: t.back, href: localePath(locale, "/producto") }}
        label={t.hero.label}
        title={t.hero.title}
        accent={t.hero.accent}
        subtitle={t.hero.subtitle}
        primary={{ label: t.hero.primary, href: signupUrl(locale) }}
        secondary={{ label: t.hero.secondary, href: "https://calendly.com/saruapps/30min", external: true }}
      >
        <div className="relative">
          <HeroPhone tilt={-3}>
            <PointsScreen />
          </HeroPhone>
          <PointsRedeemCard />
        </div>
      </ModuloHero>

      {/* How it works: three numbered steps */}
      <section className="section-light grain overflow-x-clip py-28 md:py-40">
        <div className="relative mx-auto max-w-[1280px] px-6">
          <SectionHead
            label={t.steps.label}
            title={t.steps.title}
            italic={t.steps.italic}
            subtitle={t.steps.subtitle}
          />

          <ol className="mt-16 grid gap-x-12 md:mt-24 md:grid-cols-3">
            {t.steps.items.map((step, i) => (
              <li key={step.title} className="border-t border-line-light">
                <Reveal delay={i * 0.07} className="py-10">
                  <span
                    className="block font-display text-[clamp(56px,6vw,88px)] font-bold italic leading-[0.85] tracking-[-0.06em] text-accent"
                    aria-hidden="true"
                  >
                    0{i + 1}
                  </span>
                  <h3 className="mt-8 font-display text-[clamp(22px,2vw,30px)] font-bold leading-[1.15] tracking-[-0.03em]">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-md text-[17px] leading-[1.6]">{step.description}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Automatic notices (dark): each with the push it sends */}
      <section className="section-dark grain overflow-x-clip py-28 md:py-40">
        <div className="glow -right-[260px] top-[30%]" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1280px] px-6">
          <SectionHead
            label={t.notices.label}
            title={t.notices.title}
            italic={t.notices.italic}
            subtitle={t.notices.subtitle}
          />

          <div className="mt-16 border-b border-line-dark md:mt-24">
            {notices.map((notice, i) => (
              <Reveal key={notice.title} delay={i * 0.07}>
                <div className="grid items-center gap-8 border-t border-line-dark py-10 md:py-12 lg:grid-cols-12 lg:gap-12">
                  <div className="flex items-start gap-5 lg:col-span-7">
                    <notice.icon className="mt-1 h-7 w-7 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                    <div>
                      <h3 className="font-display text-[clamp(22px,2vw,30px)] font-bold leading-[1.15] tracking-[-0.03em]">
                        {notice.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-[17px] leading-[1.6]">{notice.description}</p>
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="mx-auto max-w-[360px] lg:mr-0">
                      <PushCard
                        title={notice.example.title}
                        body={notice.example.body}
                        time={notice.example.time}
                        animated={false}
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The merchant's rules */}
      <section className="section-light grain py-28 md:py-40">
        <div className="relative mx-auto max-w-[1280px] px-6">
          <SectionHead
            label={t.rules.label}
            title={t.rules.title}
            italic={t.rules.italic}
            subtitle={t.rules.subtitle}
          />

          <div className="mt-16 grid gap-x-16 md:mt-24 md:grid-cols-2">
            {rules.map((item, i) => (
              <Reveal key={item.title} delay={(i % 2) * 0.07}>
                <div className="flex h-full items-start gap-5 border-t border-line-light py-9">
                  <item.icon className="mt-1 h-7 w-7 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                  <div>
                    <h3 className="font-display text-[clamp(22px,2vw,30px)] font-bold leading-[1.15] tracking-[-0.03em]">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-md text-[17px] leading-[1.6]">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-1 border-t border-line-light pt-8">
            <p className="text-[17px] font-semibold">{t.rules.plan}</p>
            <ArrowLink href={localePath(locale, "/precios")}>{t.rules.link}</ArrowLink>
          </div>
        </div>
      </section>

      {/* CTA */}
      <ModuloCTA
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
