import { ArrowLeft, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { guiaContent } from "@/content/guia";
import { localePath, type Locale } from "@/i18n/config";


/* Flat documentation typography: ink text, contained scale, 17px body at 1.7 */
const prose = [
  "text-ink",
  // Headings
  "[&_h1]:font-display [&_h1]:text-[clamp(32px,3.6vw,44px)] [&_h1]:font-extrabold [&_h1]:leading-[1.1] [&_h1]:tracking-[-0.035em] [&_h1]:mb-6",
  "[&_h2]:font-display [&_h2]:text-[24px] [&_h2]:font-bold [&_h2]:leading-[1.25] [&_h2]:tracking-[-0.02em] [&_h2]:mt-14 [&_h2]:mb-4",
  "[&_h3]:font-display [&_h3]:text-[19px] [&_h3]:font-semibold [&_h3]:leading-[1.35] [&_h3]:tracking-[-0.01em] [&_h3]:mt-10 [&_h3]:mb-3",
  // Body
  "[&_p]:text-[17px] [&_p]:leading-[1.7] [&_p]:mb-5",
  "[&_li]:text-[17px] [&_li]:leading-[1.7] [&_li]:mb-2 [&_li]:pl-1 [&_li]:marker:text-ink",
  "[&_ul]:mb-6 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-6 [&_ol]:list-decimal [&_ol]:pl-6",
  "[&_strong]:font-semibold",
  // Links: ink, underlined in accent
  "[&_a]:font-medium [&_a]:text-ink [&_a]:underline [&_a]:decoration-accent [&_a]:decoration-2 [&_a]:underline-offset-4",
  // Tables
  "[&_table]:w-full [&_table]:border-collapse [&_table]:text-[16px] [&_table]:leading-[1.6]",
  "[&_th]:bg-card-light [&_th]:text-left [&_th]:align-bottom [&_th]:font-semibold [&_th]:px-4 [&_th]:py-3 [&_th]:border-b [&_th]:border-line-light",
  "[&_td]:align-top [&_td]:px-4 [&_td]:py-3 [&_td]:border-b [&_td]:border-line-light [&_tbody_tr:last-child_td]:border-b-0",
  "[&_th+th]:border-l [&_td+td]:border-l",
  // Images
  "[&_img]:rounded-2xl [&_img]:border [&_img]:border-card-light-border",
  // Callouts / notes
  "[&_.callout]:my-8 [&_.callout]:rounded-r-2xl [&_.callout]:border-l-[3px] [&_.callout]:border-accent [&_.callout]:bg-card-light [&_.callout]:px-6 [&_.callout]:py-5",
].join(" ");

export function GuiaArticleLayout({
  children,
  currentSlug,
  locale,
}: {
  children: React.ReactNode;
  currentSlug: string;
  locale: Locale;
}) {
  const t = guiaContent[locale];
  const articles = t.articles;
  const currentIndex = articles.findIndex((a) => a.slug === currentSlug);
  const prev = currentIndex > 0 ? articles[currentIndex - 1] : null;
  const next =
    currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;

  return (
    <>
      <Navbar />
      <main className="bg-white pb-24 pt-[120px] text-ink md:pt-[136px]">
        <div className="mx-auto grid max-w-[1200px] gap-16 px-6 lg:grid-cols-[232px_minmax(0,1fr)]">
          {/* Sidebar (desktop only) */}
          <aside className="hidden lg:block">
            <nav aria-label={t.layout.sidebarLabel} className="sticky top-[112px]">
              <ul className="border-l border-line-light">
                {articles.map((a) => {
                  const active = a.slug === currentSlug;
                  return (
                    <li key={a.slug}>
                      <a
                        href={localePath(locale, `/guia/${a.slug}`)}
                        aria-current={active ? "page" : undefined}
                        className={`-ml-px block border-l-2 py-1.5 pl-4 text-[15px] leading-[1.45] transition-colors duration-200 ${
                          active
                            ? "border-accent font-semibold"
                            : "border-transparent hover:border-ink"
                        }`}
                      >
                        {a.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </aside>

          <div className="min-w-0 max-w-[720px]">
            <a
              href={localePath(locale, "/guia")}
              className="group mb-10 inline-flex min-h-[44px] items-center gap-2 text-[15px] font-medium"
            >
              <ArrowLeft
                className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5"
                strokeWidth={1.75}
                aria-hidden="true"
              />
              <span className="underline-offset-4 group-hover:underline">{t.layout.back}</span>
            </a>

            <article className={prose}>{children}</article>

            {/* Navigation between articles */}
            <nav
              aria-label={t.layout.navLabel}
              className="mt-20 grid gap-4 sm:grid-cols-2"
            >
              {prev ? (
                <a
                  href={localePath(locale, `/guia/${prev.slug}`)}
                  className="group flex flex-col items-start gap-1 rounded-2xl border border-line-light p-5 transition-colors duration-200 hover:border-ink"
                >
                  <span className="inline-flex items-center gap-1.5 text-[14px] font-medium">
                    <ArrowLeft className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                    {t.layout.prev}
                  </span>
                  <span className="text-[17px] font-semibold">{prev.title}</span>
                </a>
              ) : (
                <div className="hidden sm:block" />
              )}
              {next ? (
                <a
                  href={localePath(locale, `/guia/${next.slug}`)}
                  className="group flex flex-col items-end gap-1 rounded-2xl border border-line-light p-5 text-right transition-colors duration-200 hover:border-ink"
                >
                  <span className="inline-flex items-center gap-1.5 text-[14px] font-medium">
                    {t.layout.next}
                    <ArrowRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <span className="text-[17px] font-semibold">{next.title}</span>
                </a>
              ) : (
                <div className="hidden sm:block" />
              )}
            </nav>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
