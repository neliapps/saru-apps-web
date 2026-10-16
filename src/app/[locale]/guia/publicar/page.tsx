import { GuiaArticleLayout } from "@/components/GuiaArticleLayout";
import { publicarContent } from "@/content/guia/publicar";
import { toLocale } from "@/i18n/config";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return publicarContent[toLocale(locale)].metadata;
}

export default async function Page({ params }: Props) {
  const locale = toLocale((await params).locale);

  return (
    <GuiaArticleLayout currentSlug="publicar" locale={locale}>
      {publicarContent[locale].body}
    </GuiaArticleLayout>
  );
}
