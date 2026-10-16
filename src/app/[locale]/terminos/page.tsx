import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DocsHero } from "@/components/site/docs-hero";
import { docsProse } from "@/components/site/docs-prose";
import { terminosContent } from "@/content/terminos";
import { toLocale } from "@/i18n/config";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return terminosContent[toLocale(locale)].metadata;
}

export default async function Terminos({ params }: Props) {
  const locale = toLocale((await params).locale);
  const t = terminosContent[locale];

  return (
    <>
      <Navbar variant="dark" />
      <main>
        <DocsHero title={t.hero.title} meta={t.hero.meta} />
        <section className="section-light grain">
          <div className="relative mx-auto max-w-[760px] px-6 py-20 md:py-28">
          <div className={docsProse}>{t.body}</div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
