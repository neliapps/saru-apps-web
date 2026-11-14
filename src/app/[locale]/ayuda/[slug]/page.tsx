import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { prose } from "@/components/GuiaArticleLayout";
import { helpArticle, helpHasLocale, helpSlugs } from "@/content/ayuda";
import { locales, toLocale } from "@/i18n/config";
import { SITE_URL, pageAlternates } from "@/i18n/seo";

type Props = { params: Promise<{ locale: string; slug: string }> };

/* What Markdown adds to the guides' typography: notes, separators, code, images, and room
   for the fixed navbar when the dashboard links to a section */
const markdown = [
  "[&_blockquote]:my-8 [&_blockquote]:rounded-r-2xl [&_blockquote]:border-l-[3px] [&_blockquote]:border-accent [&_blockquote]:bg-card-light [&_blockquote]:px-6 [&_blockquote]:py-5 [&_blockquote_p]:mb-0",
  "[&_hr]:my-14 [&_hr]:border-line-light",
  "[&_code]:rounded-md [&_code]:bg-card-light [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-[15px]",
  "[&_table]:mb-0 [&_img]:my-8 [&_img]:h-auto",
  "[&_a[id]]:scroll-mt-[120px]",
].join(" ");

// /pt shows the Portuguese version when the article has one, the Spanish one otherwise
export function generateStaticParams() {
  return locales.flatMap((locale) => helpSlugs().map((slug) => ({ locale, slug })));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props) {
  const { locale: param, slug } = await params;
  const locale = toLocale(param);
  const article = helpArticle(slug, locale);
  if (!article) return {};
  const path = `/ayuda/${article.slug}`;
  return {
    title: `${article.title} — ${article.locale === "pt" ? "Ajuda" : "Ayuda"} Saru Apps`,
    description: article.summary,
    // Both languages only when the Portuguese version exists; otherwise /pt repeats the Spanish one
    alternates: helpHasLocale(article.slug, "pt") ? pageAlternates(locale, path) : { canonical: `${SITE_URL}${path}` },
  };
}

export default async function Page({ params }: Props) {
  const { locale, slug } = await params;
  const article = helpArticle(slug, toLocale(locale));
  if (!article) notFound();

  return (
    <>
      <Navbar />
      <main className="bg-white pb-24 pt-[120px] text-ink md:pt-[136px]">
        <article
          lang={article.locale === "pt" ? "pt-BR" : "es"}
          className={`mx-auto max-w-[760px] px-6 ${prose} ${markdown}`}
          dangerouslySetInnerHTML={{ __html: article.html }}
        />
      </main>
      <Footer />
    </>
  );
}
