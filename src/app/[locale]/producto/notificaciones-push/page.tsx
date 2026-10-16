import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Zap, ShoppingCart, Sparkles, Calendar, Users, Check } from "lucide-react";
import { LockScreen, PushCard } from "@/components/home/phone";
import { ArrowLink, Label } from "@/components/home/primitives";
import { Reveal, SectionHead } from "@/components/site/blocks";
import { HeroPhone, ModuloCTA, ModuloHero } from "@/components/site/producto-modulos";
import { productoPushContent } from "@/content/producto-push";
import { localePath, toLocale } from "@/i18n/config";

const typeIcons = [Zap, ShoppingCart, Sparkles, Calendar, Users];

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return productoPushContent[toLocale(locale)].metadata;
}

export default async function NotificacionesPushPage({ params }: Props) {
  const locale = toLocale((await params).locale);
  const t = productoPushContent[locale];
  const notificationTypes = t.types.items.map((item, i) => ({ ...item, icon: typeIcons[i] }));

  return (
    <>
      <Navbar variant="dark" />

      {/* Hero */}
      <ModuloHero
        back={{ label: t.back, href: localePath(locale, "/producto") }}
        label={t.hero.label}
        title={t.hero.title}
        accent={t.hero.accent}
        subtitle={t.hero.subtitle}
      >
        <HeroPhone dark tilt={3}>
          <LockScreen />
        </HeroPhone>
      </ModuloHero>

      {/* Types of Notifications */}
      <section className="section-light grain py-28 md:py-40">
        <div className="relative mx-auto max-w-[1280px] px-6">
          <SectionHead
            label={t.types.label}
            title={t.types.title}
            subtitle={t.types.subtitle}
          />

          <div className="mt-16 border-b border-line-light md:mt-24">
            {notificationTypes.map((type, i) => (
              <Reveal key={type.title} delay={i * 0.07}>
                <div className="grid items-center gap-8 border-t border-line-light py-10 md:py-12 lg:grid-cols-12 lg:gap-12">
                  <div className="flex items-start gap-5 lg:col-span-7">
                    <type.icon className="mt-1 h-7 w-7 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                    <div>
                      <h3 className="font-display text-[clamp(22px,2vw,30px)] font-bold leading-[1.15] tracking-[-0.03em]">
                        {type.title}
                      </h3>
                      {type.tag && (
                        <p className="mt-2 flex items-center gap-2 text-[15px] font-semibold">
                          <Check className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                          {type.tag}
                        </p>
                      )}
                      <p className="mt-3 max-w-xl text-[17px] leading-[1.6]">{type.description}</p>
                    </div>
                  </div>

                  {/* Notification Preview */}
                  <div className="lg:col-span-5">
                    <div className="mx-auto max-w-[360px] rounded-[28px] bg-ink p-3 lg:mr-0">
                      <PushCard
                        title={type.example.title}
                        body={type.example.body}
                        time={type.example.time}
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

      {/* Stats Section (dark bg) */}
      <section className="section-dark grain overflow-x-clip py-28 md:py-40">
        <div className="glow left-1/2 top-[8%] -translate-x-1/2" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1280px] px-6">
          <Reveal className="mx-auto max-w-3xl text-center">
            <Label>{t.stats.label}</Label>
            <h2 className="mt-6 font-display text-[clamp(88px,10vw,150px)] font-extrabold italic leading-[0.85] tracking-[-0.06em] text-accent">
              7x
            </h2>
            <p className="mt-6 font-display text-[clamp(22px,2vw,30px)] font-bold leading-[1.15] tracking-[-0.03em]">
              {t.stats.headline}
            </p>
            <p className="mx-auto mt-6 max-w-md text-[17px] leading-[1.6]">
              {t.stats.body}
            </p>
          </Reveal>

          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 sm:grid-cols-3 md:mt-24">
            {t.stats.items.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.07}>
                <div className="border-t border-line-dark py-8 sm:px-6 sm:first:pl-0">
                  <p className="font-display text-[clamp(40px,4.4vw,64px)] font-extrabold leading-none tracking-[-0.045em]">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-[16px] font-semibold">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Volume by Plan */}
      <section className="section-light grain py-28 md:py-40">
        <div className="relative mx-auto max-w-[1280px] px-6">
          <SectionHead
            label={t.volume.label}
            title={t.volume.title}
            subtitle={t.volume.subtitle}
          />

          <div className="mt-16 border-b border-line-light md:mt-24">
            {t.volume.items.map((item, i) => (
              <Reveal key={item.plan} delay={i * 0.07}>
                <div
                  className={`grid grid-cols-2 items-center gap-x-6 gap-y-2 px-6 py-7 md:grid-cols-12 md:px-8 ${
                    item.highlighted
                      ? "rounded-[28px] bg-ink text-white"
                      : "border-t border-line-light"
                  }`}
                >
                  <div className="md:col-span-4">
                    <h3 className="font-display text-[clamp(22px,2vw,30px)] font-bold leading-[1.15] tracking-[-0.03em]">
                      {item.plan}
                    </h3>
                    {item.highlighted && <p className="mt-1 text-[15px] font-semibold">{t.volume.popular}</p>}
                  </div>
                  <p className="text-right font-display text-[clamp(26px,2.8vw,40px)] font-extrabold leading-none tracking-[-0.04em] md:col-span-5 md:text-left">
                    {item.volume}
                  </p>
                  <div className="col-span-2 md:col-span-3 md:text-right">
                    <ArrowLink href={localePath(locale, "/precios")} weight="medium">
                      {t.volume.seePlan}
                    </ArrowLink>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <ModuloCTA
        title={t.cta.title}
        subtitle={t.cta.subtitle}
        primary={{ label: t.cta.primary, href: "https://app.saruapps.com/register" }}
        secondary={{ label: t.cta.secondary, href: "https://calendly.com/saruapps/30min", external: true }}
      />

      <Footer />
    </>
  );
}
