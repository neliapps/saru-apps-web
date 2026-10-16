import { GuiaArticleLayout } from "@/components/GuiaArticleLayout";
import { appNativaContent } from "@/content/guia/app-nativa";
import { toLocale } from "@/i18n/config";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return appNativaContent[toLocale(locale)].metadata;
}

export default async function Page({ params }: Props) {
  const locale = toLocale((await params).locale);

  return (
    <GuiaArticleLayout currentSlug="app-nativa" locale={locale}>
      {appNativaContent[locale].body}
    </GuiaArticleLayout>
  );
}
