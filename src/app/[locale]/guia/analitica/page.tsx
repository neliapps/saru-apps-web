import { GuiaArticleLayout } from "@/components/GuiaArticleLayout";
import { analiticaContent } from "@/content/guia/analitica";
import { toLocale } from "@/i18n/config";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return analiticaContent[toLocale(locale)].metadata;
}

export default async function Page({ params }: Props) {
  const locale = toLocale((await params).locale);

  return (
    <GuiaArticleLayout currentSlug="analitica" locale={locale}>
      {analiticaContent[locale].body}
    </GuiaArticleLayout>
  );
}
