import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PreciosContent } from "@/components/PreciosContent";
import { buildPricingJsonLd, preciosContent } from "@/content/precios";
import { toLocale } from "@/i18n/config";
import { pageAlternates } from "@/i18n/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return { ...preciosContent[toLocale(locale)].metadata, alternates: pageAlternates(toLocale(locale), "/precios") };
}

export default async function PreciosPage({ params }: Props) {
  const locale = toLocale((await params).locale);
  const pricingJsonLd = buildPricingJsonLd(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd) }}
      />
      <Navbar variant="dark" />
      <PreciosContent />
      <Footer />
    </>
  );
}
