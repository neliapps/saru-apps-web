import { GuiaArticleLayout } from "@/components/GuiaArticleLayout";
import { configurarContent } from "@/content/guia/configurar";
import { toLocale } from "@/i18n/config";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return configurarContent[toLocale(locale)].metadata;
}

export default async function Page({ params }: Props) {
  const locale = toLocale((await params).locale);

  return (
    <GuiaArticleLayout currentSlug="configurar" locale={locale}>
      {configurarContent[locale].body}
    </GuiaArticleLayout>
  );
}
