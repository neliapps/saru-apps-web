import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturesPreview } from "@/components/FeaturesPreview";
import { HowItWorks } from "@/components/HowItWorks";
import { Integrations } from "@/components/Integrations";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { homeJsonLd } from "@/content/home-jsonld";
import { toLocale } from "@/i18n/config";

type Props = { params: Promise<{ locale: string }> };

export default async function Home({ params }: Props) {
  const jsonLd = homeJsonLd[toLocale((await params).locale)];
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar variant="dark" />
      <Hero />
      <FeaturesPreview />
      <HowItWorks />
      <Integrations />
      <CTA />
      <Footer />
    </>
  );
}
