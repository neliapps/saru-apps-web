import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { guiaContent } from "@/content/guia";
import { localePath, toLocale } from "@/i18n/config";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return guiaContent[toLocale(locale)].metadata;
}

export default async function Guia({ params }: Props) {
  const locale = toLocale((await params).locale);
  const t = guiaContent[locale];

  return (
    <>
      <Navbar />
      <main className="bg-white pb-24 pt-[120px] text-ink md:pt-[136px]">
        <div className="mx-auto max-w-[1200px] px-6">
          <header className="max-w-[720px]">
            <h1 className="font-display text-[clamp(32px,3.6vw,44px)] font-extrabold leading-[1.1] tracking-[-0.035em]">
              {t.title}
            </h1>
            <p className="mt-5 text-[19px] leading-[1.6]">
              {t.subtitle}
            </p>
          </header>

          <ul className="mt-14 grid border-t border-line-light md:grid-cols-2 md:gap-x-16">
            {t.articles.map((article) => (
              <li key={article.slug} className="border-b border-line-light">
                <a
                  href={localePath(locale, `/guia/${article.slug}`)}
                  className="group flex items-start justify-between gap-6 py-6"
                >
                  <div>
                    <h2 className="text-[19px] font-semibold leading-[1.35] tracking-[-0.01em] decoration-accent decoration-2 underline-offset-4 group-hover:underline">
                      {article.title}
                    </h2>
                    <p className="mt-1.5 text-[16px] leading-[1.6]">
                      {article.description}
                    </p>
                  </div>
                  <ArrowRight
                    className="mt-1 h-5 w-5 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
