import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturesPreview } from "@/components/FeaturesPreview";
import { HowItWorks } from "@/components/HowItWorks";
import { Integrations } from "@/components/Integrations";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturesPreview />
      <HowItWorks />
      <Integrations />
      <CTA />
      <Footer />
    </>
  );
}
