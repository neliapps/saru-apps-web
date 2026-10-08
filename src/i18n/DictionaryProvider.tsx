"use client";

import { createContext, useContext, useMemo } from "react";
import type { Locale } from "./config";
import { defaultLocale } from "./config";

type DictionaryContextType = {
  dict: Record<string, any>;
  locale: Locale;
  localePath: (path: string) => string;
};

const DictionaryContext = createContext<DictionaryContextType>({
  dict: {},
  locale: defaultLocale,
  localePath: (p) => p,
});

export function DictionaryProvider({
  dictionary,
  locale,
  children,
}: {
  dictionary: Record<string, any>;
  locale: Locale;
  children: React.ReactNode;
}) {
  const value = useMemo(
    () => ({
      dict: dictionary,
      locale,
      localePath: (path: string) =>
        locale === defaultLocale ? path : `/${locale}${path}`,
    }),
    [dictionary, locale]
  );

  return (
    <DictionaryContext.Provider value={value}>
      {children}
    </DictionaryContext.Provider>
  );
}

export function useDictionary() {
  return useContext(DictionaryContext);
}
