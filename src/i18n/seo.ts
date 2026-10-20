import type { Metadata } from "next";
import { locales, localePath, type Locale } from "./config";

export const SITE_URL = "https://saruapps.com";

/** Every public page, as its Spanish (unprefixed) path */
export const PAGE_PATHS = [
  "/",
  "/precios",
  "/producto",
  "/producto/editor",
  "/producto/app-nativa",
  "/producto/notificaciones-push",
  "/producto/reels",
  "/producto/engagement",
  "/producto/sincronizacion",
  "/producto/analytics",
  "/sectores",
  "/partners",
  "/faq",
  "/blog",
  "/guia",
  "/guia/que-es",
  "/guia/registro",
  "/guia/tiendanube",
  "/guia/configurar",
  "/guia/panel",
  "/guia/editor",
  "/guia/productos",
  "/guia/notificaciones",
  "/guia/analitica",
  "/guia/app-nativa",
  "/guia/publicar",
  "/guia/planes",
  "/guia/seguridad",
  "/guia/faq",
  "/terminos",
  "/privacidad",
] as const;

const hreflang: Record<Locale, string> = { es: "es", pt: "pt-BR" };

function url(locale: Locale, path: string) {
  const p = localePath(locale, path);
  return p === "/" ? SITE_URL : `${SITE_URL}${p.replace(/\/$/, "")}`;
}

/** Absolute ES/PT URLs of a page, keyed by hreflang code (plus x-default) */
export function languageUrls(path: string): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const l of locales) languages[hreflang[l]] = url(l, path);
  languages["x-default"] = url("es", path);
  return languages;
}

/** Canonical and hreflang alternates for a page */
export function pageAlternates(locale: Locale, path: string): Metadata["alternates"] {
  return { canonical: url(locale, path), languages: languageUrls(path) };
}
