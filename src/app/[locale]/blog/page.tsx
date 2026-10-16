import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { DocsHero } from "@/components/site/docs-hero";
import { Reveal } from "@/components/site/blocks";
import { blogContent } from "@/content/blog";
import { localePath, toLocale } from "@/i18n/config";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return blogContent[toLocale(locale)].metadata;
}

export default async function Blog({ params }: Props) {
  const locale = toLocale((await params).locale);
  const t = blogContent[locale];

  return (
    <>
      <Navbar variant="dark" />
      <main>
        <DocsHero
          label={t.hero.label}
          title={t.hero.title}
          subtitle={t.hero.subtitle}
        />

        <section className="section-light grain">
          <div className="relative mx-auto max-w-[760px] px-6 py-20 md:py-28">
            {/* Meanwhile links: editorial list */}
            <Reveal>
              <h2 className="font-display text-[clamp(26px,2.6vw,34px)] font-bold leading-[1.15] tracking-[-0.03em]">
                {t.meanwhile}
              </h2>
            </Reveal>
            <ul className="mt-8 border-t border-line-light">
              {t.links.map((link, i) => (
                <li key={link.href} className="border-b border-line-light">
                  <Reveal delay={i * 0.07}>
                    <a
                      href={localePath(locale, link.href)}
                      className="group flex items-start justify-between gap-6 py-7"
                    >
                      <div>
                        <h3 className="text-[clamp(20px,1.8vw,24px)] font-bold leading-[1.25] tracking-[-0.02em] decoration-accent decoration-2 underline-offset-4 group-hover:underline">
                          {link.title}
                        </h3>
                        <p className="mt-2 text-[17px] leading-[1.7]">
                          {link.description}
                        </p>
                      </div>
                      <ArrowRight
                        className="mt-1.5 h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                    </a>
                  </Reveal>
                </li>
              ))}
            </ul>

            {/* Newsletter */}
            <Reveal className="mt-20">
              <div className="rounded-[28px] border border-card-light-border bg-card-light p-8 md:p-12">
                <h2 className="font-display text-[clamp(26px,2.6vw,34px)] font-bold leading-[1.15] tracking-[-0.03em]">
                  {t.newsletter.title}
                </h2>
                <p className="mt-4 max-w-md text-[17px] italic leading-[1.6]">
                  {t.newsletter.subtitle}
                </p>
                <form
                  action="https://app.saruapps.com/register"
                  className="mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
                >
                  <input
                    type="email"
                    placeholder={t.newsletter.placeholder}
                    className="w-full rounded-lg border border-line-light bg-white px-4 py-3.5 text-[16px] text-ink placeholder:text-ink/50 focus:border-ink focus:outline-none sm:flex-1"
                  />
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-lg bg-ink px-6 py-3.5 text-[16px] font-semibold text-white transition-colors duration-300 hover:bg-ink/85 sm:w-auto"
                  >
                    {t.newsletter.button}
                  </button>
                </form>
                <p className="mt-4 text-[13px] text-ink/60">
                  {t.newsletter.note}
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
