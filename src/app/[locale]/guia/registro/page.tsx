import { GuiaArticleLayout } from "@/components/GuiaArticleLayout";
import { registroContent } from "@/content/guia/registro";
import { toLocale } from "@/i18n/config";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return registroContent[toLocale(locale)].metadata;
}

export default async function Page({ params }: Props) {
  const locale = toLocale((await params).locale);

  return (
    <GuiaArticleLayout currentSlug="registro" locale={locale}>
      {registroContent[locale].body}
    </GuiaArticleLayout>
  );
}
