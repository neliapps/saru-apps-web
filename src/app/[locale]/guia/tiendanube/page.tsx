import { GuiaArticleLayout } from "@/components/GuiaArticleLayout";
import { tiendanubeContent } from "@/content/guia/tiendanube";
import { toLocale } from "@/i18n/config";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return tiendanubeContent[toLocale(locale)].metadata;
}

export default async function Page({ params }: Props) {
  const locale = toLocale((await params).locale);

  return (
    <GuiaArticleLayout currentSlug="tiendanube" locale={locale}>
      {tiendanubeContent[locale].body}
    </GuiaArticleLayout>
  );
}
