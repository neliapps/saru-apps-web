import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { prose } from "@/components/GuiaArticleLayout";
import { helpArticle, helpSlugs } from "@/content/ayuda";
import { locales } from "@/i18n/config";
import { SITE_URL } from "@/i18n/seo";

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

// Only in Spanish for now: /pt shows the same article (the dashboard links here in both languages)
export function generateStaticParams() {
  return locales.flatMap((locale) => helpSlugs().map((slug) => ({ locale, slug })));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props) {
  const article = helpArticle((await params).slug);
  if (!article) return {};
  return {
    title: `${article.title} — Ayuda Saru Apps`,
    description: article.summary,
    alternates: { canonical: `${SITE_URL}/ayuda/${article.slug}` },
  };
}

export default async function Page({ params }: Props) {
  const article = helpArticle((await params).slug);
  if (!article) notFound();

  return (
    <>
      <Navbar />
      <main className="bg-white pb-24 pt-[120px] text-ink md:pt-[136px]">
        <article
          lang="es"
          className={`mx-auto max-w-[760px] px-6 ${prose} ${markdown}`}
          dangerouslySetInnerHTML={{ __html: article.html }}
        />
      </main>
      <Footer />
    </>
  );
}
