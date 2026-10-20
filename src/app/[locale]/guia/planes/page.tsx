import { GuiaArticleLayout } from "@/components/GuiaArticleLayout";
import { planesContent } from "@/content/guia/planes";
import { toLocale } from "@/i18n/config";
import { pageAlternates } from "@/i18n/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return { ...planesContent[toLocale(locale)].metadata, alternates: pageAlternates(toLocale(locale), "/guia/planes") };
}

export default async function Page({ params }: Props) {
  const locale = toLocale((await params).locale);

  return (
    <GuiaArticleLayout currentSlug="planes" locale={locale}>
      {planesContent[locale].body}
    </GuiaArticleLayout>
  );
}
