import { GuiaArticleLayout } from "@/components/GuiaArticleLayout";
import { seguridadContent } from "@/content/guia/seguridad";
import { toLocale } from "@/i18n/config";
import { pageAlternates } from "@/i18n/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return { ...seguridadContent[toLocale(locale)].metadata, alternates: pageAlternates(toLocale(locale), "/guia/seguridad") };
}

export default async function Page({ params }: Props) {
  const locale = toLocale((await params).locale);

  return (
    <GuiaArticleLayout currentSlug="seguridad" locale={locale}>
      {seguridadContent[locale].body}
    </GuiaArticleLayout>
  );
}
