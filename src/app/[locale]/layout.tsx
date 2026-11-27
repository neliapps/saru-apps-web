import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { BrevoChat } from "@/components/BrevoChat";
import { CookieBanner } from "@/components/CookieBanner";
import { DictionaryProvider } from "@/i18n/DictionaryProvider";
import { getDictionary } from "@/i18n/getDictionary";
import { locales } from "@/i18n/config";
import type { Locale } from "@/i18n/config";
import { SITE_URL } from "@/i18n/seo";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-inter",
  display: "swap",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const m = dict.metadata;

  return {
    metadataBase: new URL(SITE_URL),
    title: m.title,
    description: m.description,
    keywords: [
      "app móvil",
      locale === "pt" ? "nuvemshop" : "tiendanube",
      "ecommerce",
      "mobile app builder",
      "drag and drop",
      "engagement",
    ],
    icons: { icon: "/favicon.png", apple: "/favicon.png" },
    openGraph: {
      title: m.ogTitle,
      description: m.ogDescription,
      type: "website",
      siteName: "Saru Apps",
      locale: locale === "pt" ? "pt_BR" : "es_AR",
    },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <html lang={locale === "pt" ? "pt-BR" : "es"} className={inter.variable}>
      <body>
        <DictionaryProvider dictionary={dict} locale={locale as Locale}>
          {children}
          <CookieBanner />
        </DictionaryProvider>
        <BrevoChat />
      </body>
    </html>
  );
}
