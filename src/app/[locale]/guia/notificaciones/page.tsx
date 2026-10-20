import { GuiaArticleLayout } from "@/components/GuiaArticleLayout";
import { notificacionesContent } from "@/content/guia/notificaciones";
import { toLocale } from "@/i18n/config";
import { pageAlternates } from "@/i18n/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return { ...notificacionesContent[toLocale(locale)].metadata, alternates: pageAlternates(toLocale(locale), "/guia/notificaciones") };
}

export default async function Page({ params }: Props) {
  const locale = toLocale((await params).locale);

  return (
    <GuiaArticleLayout currentSlug="notificaciones" locale={locale}>
      {notificacionesContent[locale].body}
    </GuiaArticleLayout>
  );
}
