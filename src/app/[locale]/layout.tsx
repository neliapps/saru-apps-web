import type { Metadata } from "next";
import Script from "next/script";
import { CookieBanner } from "@/components/CookieBanner";
import { DictionaryProvider } from "@/i18n/DictionaryProvider";
import { getDictionary } from "@/i18n/getDictionary";
import { locales } from "@/i18n/config";
import type { Locale } from "@/i18n/config";
import "../globals.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const m = dict.metadata;

  return {
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
    <html lang={locale === "pt" ? "pt-BR" : "es"}>
      <body>
        <DictionaryProvider dictionary={dict} locale={locale as Locale}>
          {children}
          <CookieBanner />
        </DictionaryProvider>
        <Script id="brevo-conversations" strategy="afterInteractive">{`
          (function(d, w, c) {
            w.BrevoConversationsID = '6a59f1d9f62a55a5c908887c';
            w[c] = w[c] || function() {
              (w[c].q = w[c].q || []).push(arguments);
            };
            var s = d.createElement('script');
            s.async = true;
            s.src = 'https://conversations-widget.brevo.com/brevo-conversations.js';
            if (d.head) d.head.appendChild(s);
          })(document, window, 'BrevoConversations');
        `}</Script>
      </body>
    </html>
  );
}
