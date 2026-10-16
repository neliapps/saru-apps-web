import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  ShoppingCart,
  PackageCheck,
  HandHeart,
  Repeat,
  Badge,
  AlertTriangle,
  Zap,
  Heart,
  Flame,
  Lock,
  TrendingUp,
  Users,
  BarChart3,
} from "lucide-react";
import { ProductScreen } from "@/components/home/phone";
import { Reveal, SectionHead } from "@/components/site/blocks";
import { HeroPhone, ModuloCTA, ModuloHero } from "@/components/site/producto-modulos";
import { productoEngagementContent } from "@/content/producto-engagement";
import { localePath, toLocale } from "@/i18n/config";

const toolIcons = [ShoppingCart, PackageCheck, HandHeart, Repeat, Badge, AlertTriangle, Zap, Heart, Flame, Lock];
const impactIcons = [TrendingUp, Users, BarChart3];

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return productoEngagementContent[toLocale(locale)].metadata;
}

export default async function EngagementPage({ params }: Props) {
  const locale = toLocale((await params).locale);
  const t = productoEngagementContent[locale];
  const tools = t.tools.items.map((item, i) => ({ ...item, icon: toolIcons[i] }));
  const impacts = t.impact.items.map((item, i) => ({ ...item, icon: impactIcons[i] }));

  return (
    <>
      <Navbar variant="dark" />

      {/* Hero */}
      <ModuloHero
        back={{ label: t.back, href: localePath(locale, "/producto") }}
        label={t.hero.label}
        title={t.hero.title}
        accent={t.hero.accent}
        subtitle={t.hero.subtitle}
        primary={{ label: t.hero.primary, href: "https://app.saruapps.com/register" }}
        secondary={{ label: t.hero.secondary, href: "https://calendly.com/saruapps/30min", external: true }}
      >
        <HeroPhone tilt={-3}>
          <ProductScreen />
        </HeroPhone>
      </ModuloHero>

      {/* Tools Grid */}
      <section className="section-light grain py-28 md:py-40">
        <div className="relative mx-auto max-w-[1280px] px-6">
          <SectionHead
            label={t.tools.label}
            title={t.tools.title}
            italic={t.tools.italic}
            subtitle={t.tools.subtitle}
          />

          <div className="mt-16 grid gap-x-16 md:mt-24 md:grid-cols-2">
            {tools.map((tool, i) => (
              <Reveal key={tool.title} delay={(i % 2) * 0.07}>
                <div className="flex h-full items-start gap-5 border-t border-line-light py-9">
                  <tool.icon className="mt-1 h-7 w-7 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                  <div>
                    <h3 className="font-display text-[clamp(22px,2vw,30px)] font-bold leading-[1.15] tracking-[-0.03em]">
                      {tool.title}
                    </h3>
                    <p className="mt-3 max-w-md text-[17px] leading-[1.6]">{tool.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section (dark bg) */}
      <section className="section-dark grain overflow-x-clip py-28 md:py-40">
        <div className="glow -left-[260px] top-[20%]" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1280px] px-6">
          <SectionHead
            label={t.impact.label}
            title={t.impact.title}
            italic={t.impact.italic}
            subtitle={t.impact.subtitle}
          />

          <div className="mt-16 border-b border-line-dark md:mt-24">
            {impacts.map((impact, i) => (
              <Reveal key={impact.title} delay={i * 0.07}>
                <div className="grid gap-4 border-t border-line-dark py-10 md:grid-cols-12 md:items-baseline md:gap-12">
                  <p
                    className="font-display text-[clamp(40px,4.4vw,64px)] font-bold italic leading-none tracking-[-0.05em] md:col-span-2"
                    aria-hidden="true"
                  >
                    0{i + 1}
                  </p>
                  <h3 className="flex items-center gap-3 font-display text-[clamp(22px,2vw,30px)] font-bold leading-[1.15] tracking-[-0.03em] md:col-span-4">
                    <impact.icon className="h-6 w-6 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                    {impact.title}
                  </h3>
                  <p className="text-[17px] leading-[1.6] md:col-span-6">{impact.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <ModuloCTA
        tone="light"
        title={t.cta.title}
        accent={t.cta.accent}
        subtitle={t.cta.subtitle}
        primary={{ label: t.cta.primary, href: "https://app.saruapps.com/register" }}
        secondary={{ label: t.cta.secondary, href: "https://calendly.com/saruapps/30min", external: true }}
      />

      <Footer />
    </>
  );
}
