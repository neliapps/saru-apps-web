import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";
import type { Locale } from "@/i18n/config";

/**
 * Help articles for merchants, published at /ayuda/<slug>: the dashboard links to them,
 * sometimes to a section (/ayuda/publicar-tu-app#firebase), so the ids in the Markdown stay.
 * Each one is src/content/ayuda/<slug>/index.md, written in the app repo (docs/ayuda) and
 * copied here; index.pt.md is its Portuguese version, with the same ids. Images go in
 * public/ayuda/<slug>/img and serve both languages.
 */
export interface HelpArticle {
  slug: string;
  title: string;
  summary: string;
  html: string;
  /** The language it's written in: Spanish when there's no version for the locale yet */
  locale: Locale;
}

const DIR = path.join(process.cwd(), "src/content/ayuda");

export function helpSlugs(): string[] {
  return fs.readdirSync(DIR).filter((name) => fs.existsSync(path.join(DIR, name, "index.md")));
}

/** Whether the article has its own version in that language */
export function helpHasLocale(slug: string, locale: Locale): boolean {
  return locale === "es" || fs.existsSync(path.join(DIR, slug, `index.${locale}.md`));
}

export function helpArticle(slug: string, locale: Locale = "es"): HelpArticle | null {
  if (!/^[a-z0-9-]+$/.test(slug)) return null;
  const written: Locale = helpHasLocale(slug, locale) ? locale : "es";
  const file = path.join(DIR, slug, written === "es" ? "index.md" : `index.${written}.md`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const front = raw.match(/^---\n([\s\S]*?)\n---\n/);
  const meta: Record<string, string> = {};
  for (const line of front?.[1].split("\n") ?? []) {
    const colon = line.indexOf(":");
    if (colon > 0) meta[line.slice(0, colon).trim()] = line.slice(colon + 1).trim();
  }
  // Images sit next to the article: img/x.png → /ayuda/<slug>/img/x.png
  const markdown = raw.slice(front?.[0].length ?? 0).replace(/\]\(img\//g, `](/ayuda/${slug}/img/`);
  const html = marked
    .parse(markdown, { async: false, gfm: true })
    // Wide tables scroll sideways on phones instead of squeezing their columns
    .replace(/<table>/g, '<div class="mb-8 overflow-x-auto"><table class="min-w-[560px]">')
    .replace(/<\/table>/g, "</table></div>")
    // Sized images keep their space while loading, so a link to a section lands on it
    .replace(/<img src="([^"]+)"/g, (tag, src: string) => {
      const size = pngSize(path.join(process.cwd(), "public", src));
      return size ? `${tag} width="${size.width}" height="${size.height}" loading="lazy"` : tag;
    });
  return { slug, title: meta.title ?? slug, summary: meta.summary ?? "", html, locale: written };
}

/** Width and height from a PNG's header (null for other files). */
function pngSize(file: string): { width: number; height: number } | null {
  if (!file.endsWith(".png") || !fs.existsSync(file)) return null;
  const header = Buffer.alloc(24);
  const fd = fs.openSync(file, "r");
  fs.readSync(fd, header, 0, 24, 0);
  fs.closeSync(fd);
  return { width: header.readUInt32BE(16), height: header.readUInt32BE(20) };
}
