import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero, Reveal } from "@/components/site/blocks";
import { CtaBand } from "@/components/site/precios-shared";
import { IntegrationCard } from "@/components/site/integration-card";
import { integracionesContent } from "@/content/integraciones";
import { localePath, toLocale } from "@/i18n/config";
import { pageAlternates } from "@/i18n/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return { ...integracionesContent[toLocale(locale)].metadata, alternates: pageAlternates(toLocale(locale), "/integraciones") };
}

export default async function Integraciones({ params }: Props) {
  const locale = toLocale((await params).locale);
  const t = integracionesContent[locale];
  const items = t.categories.flatMap((c) => c.items);
  const summary = t.summary
    .replace("{available}", String(items.filter((i) => i.status === "available").length))
    .replace("{soon}", String(items.filter((i) => i.status === "soon").length));

  return (
    <>
      <Navbar variant="dark" />
      <main>
        <PageHero label={t.hero.label} title={t.hero.title} accent={t.hero.accent} subtitle={t.hero.subtitle} />

        <section className="section-light grain">
          <div className="relative mx-auto max-w-[1280px] px-6 py-20 md:py-28">
            {/* Categories, to jump to one */}
            <p className="text-[15px] font-semibold">{summary}</p>
            <nav aria-label={t.categoriesLabel} className="mt-5 flex flex-wrap gap-2">
              {t.categories.map((c) => (
                <a
                  key={c.id}
                  href={`#${c.id}`}
                  className="rounded-full border border-line-light px-4 py-2 text-[14px] font-medium transition-colors hover:border-ink"
                >
                  {c.name}
                </a>
              ))}
            </nav>

            {t.categories.map((c) => (
              <section
                key={c.id}
                id={c.id}
                aria-labelledby={`${c.id}-title`}
                className="mt-16 grid scroll-mt-[120px] gap-8 border-t border-line-light pt-12 md:mt-20 lg:grid-cols-12"
              >
                <div className="lg:col-span-4">
                  <h2 id={`${c.id}-title`} className="font-display text-[clamp(28px,3vw,40px)] font-bold leading-[1.05] tracking-[-0.035em]">
                    {c.name}
                  </h2>
                  <p className="mt-3 max-w-sm text-[16px] leading-[1.6]">{c.intro}</p>
                </div>
                <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
                  {c.items.map((item, i) => (
                    <li key={item.name}>
                      <Reveal delay={(i % 2) * 0.06} className="h-full">
                        <IntegrationCard item={item} labels={t.labels} href={item.href && localePath(locale, item.href)} />
                      </Reveal>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </section>

        <CtaBand
          title={t.cta.title}
          accent={t.cta.accent}
          suffix={t.cta.suffix}
          subtitle={t.cta.subtitle}
          primary={{ label: t.cta.primary, href: "https://calendly.com/saruapps/30min", external: true }}
          secondary={{ label: t.cta.secondary, href: localePath(locale, "/precios") }}
        />
      </main>
      <Footer />
    </>
  );
}
