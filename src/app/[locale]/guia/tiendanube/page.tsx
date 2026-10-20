import { GuiaArticleLayout } from "@/components/GuiaArticleLayout";
import { tiendanubeContent } from "@/content/guia/tiendanube";
import { toLocale } from "@/i18n/config";
import { pageAlternates } from "@/i18n/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return { ...tiendanubeContent[toLocale(locale)].metadata, alternates: pageAlternates(toLocale(locale), "/guia/tiendanube") };
}

export default async function Page({ params }: Props) {
  const locale = toLocale((await params).locale);

  return (
    <GuiaArticleLayout currentSlug="tiendanube" locale={locale}>
      {tiendanubeContent[locale].body}
    </GuiaArticleLayout>
  );
}
