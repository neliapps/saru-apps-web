import { GuiaArticleLayout } from "@/components/GuiaArticleLayout";
import { queEsContent } from "@/content/guia/que-es";
import { toLocale } from "@/i18n/config";
import { pageAlternates } from "@/i18n/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return { ...queEsContent[toLocale(locale)].metadata, alternates: pageAlternates(toLocale(locale), "/guia/que-es") };
}

export default async function Page({ params }: Props) {
  const locale = toLocale((await params).locale);

  return (
    <GuiaArticleLayout currentSlug="que-es" locale={locale}>
      {queEsContent[locale].body}
    </GuiaArticleLayout>
  );
}
