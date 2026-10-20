import { GuiaArticleLayout } from "@/components/GuiaArticleLayout";
import { editorContent } from "@/content/guia/editor";
import { toLocale } from "@/i18n/config";
import { pageAlternates } from "@/i18n/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return { ...editorContent[toLocale(locale)].metadata, alternates: pageAlternates(toLocale(locale), "/guia/editor") };
}

export default async function Page({ params }: Props) {
  const locale = toLocale((await params).locale);

  return (
    <GuiaArticleLayout currentSlug="editor" locale={locale}>
      {editorContent[locale].body}
    </GuiaArticleLayout>
  );
}
