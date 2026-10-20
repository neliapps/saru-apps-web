import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { PAGE_PATHS, languageUrls } from "@/i18n/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGE_PATHS.flatMap((path) => {
    const languages = languageUrls(path);
    const depth = path === "/" ? 0 : path.split("/").length - 1;
    const priority = path === "/" ? 1 : path === "/precios" ? 0.9 : depth === 1 ? 0.8 : 0.6;

    return locales.map((locale) => ({
      url: languages[locale === "pt" ? "pt-BR" : "es"],
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority,
      alternates: { languages },
    }));
  });
}
