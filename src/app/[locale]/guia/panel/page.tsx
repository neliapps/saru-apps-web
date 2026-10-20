import { GuiaArticleLayout } from "@/components/GuiaArticleLayout";
import { panelContent } from "@/content/guia/panel";
import { toLocale } from "@/i18n/config";
import { pageAlternates } from "@/i18n/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return { ...panelContent[toLocale(locale)].metadata, alternates: pageAlternates(toLocale(locale), "/guia/panel") };
}

export default async function Page({ params }: Props) {
  const locale = toLocale((await params).locale);

  return (
    <GuiaArticleLayout currentSlug="panel" locale={locale}>
      {panelContent[locale].body}
    </GuiaArticleLayout>
  );
}
