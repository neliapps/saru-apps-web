import { GuiaArticleLayout } from "@/components/GuiaArticleLayout";
import { productosContent } from "@/content/guia/productos";
import { toLocale } from "@/i18n/config";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return productosContent[toLocale(locale)].metadata;
}

export default async function Page({ params }: Props) {
  const locale = toLocale((await params).locale);

  return (
    <GuiaArticleLayout currentSlug="productos" locale={locale}>
      {productosContent[locale].body}
    </GuiaArticleLayout>
  );
}
