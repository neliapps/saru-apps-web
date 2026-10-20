import { GuiaArticleLayout } from "@/components/GuiaArticleLayout";
import { analiticaContent } from "@/content/guia/analitica";
import { toLocale } from "@/i18n/config";
import { pageAlternates } from "@/i18n/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return { ...analiticaContent[toLocale(locale)].metadata, alternates: pageAlternates(toLocale(locale), "/guia/analitica") };
}

export default async function Page({ params }: Props) {
  const locale = toLocale((await params).locale);

  return (
    <GuiaArticleLayout currentSlug="analitica" locale={locale}>
      {analiticaContent[locale].body}
    </GuiaArticleLayout>
  );
}
