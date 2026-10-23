import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FAQPageContent } from "@/components/FAQPageContent";
import { PageHero, Reveal } from "@/components/site/blocks";
import { CtaBand } from "@/components/site/precios-shared";
import { faqContent } from "@/content/faq";
import { toLocale } from "@/i18n/config";
import { pageAlternates } from "@/i18n/seo";
import { signupUrl } from "@/i18n/signup";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return { ...faqContent[toLocale(locale)].metadata, alternates: pageAlternates(toLocale(locale), "/faq") };
}

export default async function FAQPage({ params }: Props) {
  const locale = toLocale((await params).locale);
  const t = faqContent[locale];

  return (
    <>
      <Navbar variant="dark" />
      <main>
        <PageHero
          label={t.hero.label}
          title={t.hero.title}
          accent={t.hero.accent}
          subtitle={
            <>
              {t.hero.subtitleBefore}{" "}
              <a
                href="https://calendly.com/saruapps/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold not-italic underline decoration-1 underline-offset-4 transition-colors hover:decoration-2"
              >
                {t.hero.subtitleLink}
              </a>
              {t.hero.subtitleAfter}
            </>
          }
        />

        <section className="section-light grain">
          <div className="relative mx-auto max-w-[1280px] px-6 py-20 md:py-28">
            <Reveal>
              <FAQPageContent />
            </Reveal>
          </div>
        </section>

        <CtaBand
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
