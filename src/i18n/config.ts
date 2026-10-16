export const locales = ["es", "pt"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

export function toLocale(value: string): Locale {
  return (locales as readonly string[]).includes(value) ? (value as Locale) : defaultLocale;
}

/** Internal link for a locale: Spanish has no prefix, Portuguese lives under /pt */
export function localePath(locale: Locale, path: string) {
  return locale === defaultLocale ? path : `/${locale}${path}`;
}
