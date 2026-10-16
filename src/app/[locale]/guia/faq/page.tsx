import { GuiaArticleLayout } from "@/components/GuiaArticleLayout";
import { faqContent } from "@/content/guia/faq";
import { toLocale } from "@/i18n/config";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return faqContent[toLocale(locale)].metadata;
}

export default async function Page({ params }: Props) {
  const locale = toLocale((await params).locale);

  return (
    <GuiaArticleLayout currentSlug="faq" locale={locale}>
      {faqContent[locale].body}
    </GuiaArticleLayout>
  );
}
