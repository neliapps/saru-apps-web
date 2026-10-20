import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LayoutGrid, ShoppingBag, Layers, Tag, Volume2, Eye } from "lucide-react";
import { ReelsScreen } from "@/components/home/phone";
import { ArrowLink } from "@/components/home/primitives";
import { Reveal, SectionHead } from "@/components/site/blocks";
import { HeroPhone, ModuloCTA, ModuloHero } from "@/components/site/producto-modulos";
import { productoReelsContent } from "@/content/producto-reels";
import { localePath, toLocale } from "@/i18n/config";
import { pageAlternates } from "@/i18n/seo";

const detailIcons = [LayoutGrid, ShoppingBag, Layers, Tag, Volume2, Eye];

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return { ...productoReelsContent[toLocale(locale)].metadata, alternates: pageAlternates(toLocale(locale), "/producto/reels") };
}

export default async function ReelsPage({ params }: Props) {
  const locale = toLocale((await params).locale);
  const t = productoReelsContent[locale];
  const details = t.details.items.map((item, i) => ({ ...item, icon: detailIcons[i] }));

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
        primary={{ label: t.hero.primary, href: "https://app.saruapps.com/register" }}
        secondary={{ label: t.hero.secondary, href: "https://calendly.com/saruapps/30min", external: true }}
      >
        <HeroPhone dark tilt={3}>
          <ReelsScreen />
        </HeroPhone>
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

      {/* Details (dark) */}
      <section className="section-dark grain overflow-x-clip py-28 md:py-40">
        <div className="glow -left-[260px] top-[20%]" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1280px] px-6">
          <SectionHead
            label={t.details.label}
            title={t.details.title}
            italic={t.details.italic}
            subtitle={t.details.subtitle}
          />

          <div className="mt-16 grid gap-x-16 md:mt-24 md:grid-cols-2">
            {details.map((item, i) => (
              <Reveal key={item.title} delay={(i % 2) * 0.07}>
                <div className="flex h-full items-start gap-5 border-t border-line-dark py-9">
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
        </div>
      </section>

      {/* Availability by plan */}
      <section className="section-light grain py-28 md:py-40">
        <div className="relative mx-auto max-w-[1280px] px-6">
          <SectionHead label={t.plans.label} title={t.plans.title} italic={t.plans.italic} />

          <div className="mt-16 grid gap-5 md:mt-20 md:grid-cols-3">
            {t.plans.items.map((item, i) => (
              <Reveal key={item.plan} delay={i * 0.07}>
                <div
                  className={`h-full rounded-[28px] border p-8 ${
                    i === 0 ? "border-ink bg-ink text-white" : "border-card-light-border bg-card-light"
                  }`}
                >
                  <p className="font-display text-[clamp(22px,2vw,30px)] font-bold tracking-[-0.03em]">{item.plan}</p>
                  <p className="mt-3 text-[17px] leading-[1.5]">{item.value}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10">
            <ArrowLink href={localePath(locale, "/precios")}>{t.plans.link}</ArrowLink>
          </div>
        </div>
      </section>

      {/* CTA */}
      <ModuloCTA
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
