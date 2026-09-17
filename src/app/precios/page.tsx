import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PreciosContent } from "@/components/PreciosContent";

export const metadata = {
  title: "Precios — Saru Apps",
  description:
    "Planes y precios de Saru Apps. Empezá gratis y escalá a medida que tu app crece.",
};

export default function PreciosPage() {
  return (
    <>
      <Navbar />
      <PreciosContent />
      <Footer />
    </>
  );
}
