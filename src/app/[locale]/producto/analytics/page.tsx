import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  BarChart3,
  Users,
  TrendingUp,
  DollarSign,
  Eye,
  Bell,
  ShoppingCart,
  Target,
  Search,
  Route,
  ArrowUpRight,
} from "lucide-react";
import { AnalyticsScreen } from "@/components/home/phone";
import { Reveal, SectionHead } from "@/components/site/blocks";
import { HeroPhone, ModuloCTA, ModuloHero } from "@/components/site/producto-modulos";
import { productoAnalyticsContent } from "@/content/producto-analytics";
import { toLocale } from "@/i18n/config";

const metricIcons = [Users, TrendingUp, DollarSign, Eye, Bell, ShoppingCart];
const impactIcons = [Target, Search, Route];

const revenueBars = [
  { app: 35, web: 25 },
  { app: 45, web: 30 },
  { app: 30, web: 28 },
  { app: 55, web: 32 },
  { app: 50, web: 25 },
  { app: 65, web: 35 },
  { app: 40, web: 30 },
  { app: 70, web: 28 },
  { app: 60, web: 33 },
  { app: 55, web: 27 },
  { app: 75, web: 35 },
  { app: 80, web: 30 },
  { app: 65, web: 28 },
  { app: 90, web: 38 },
];

const panel = "rounded-[20px] border border-card-dark-border bg-card-dark";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return productoAnalyticsContent[toLocale(locale)].metadata;
}

export default async function AnalyticsPage({ params }: Props) {
  const locale = toLocale((await params).locale);
  const t = productoAnalyticsContent[locale];
  const d = t.dashboard;
  const metrics = t.metrics.items.map((item, i) => ({ ...item, icon: metricIcons[i] }));
  const impactItems = t.impact.items.map((item, i) => ({ ...item, icon: impactIcons[i] }));

  return (
    <>
      <Navbar variant="dark" />

      {/* Hero */}
      <ModuloHero
        label={t.hero.label}
        title={t.hero.title}
        accent={t.hero.accent}
        subtitle={t.hero.subtitle}
        primary={{ label: t.hero.primary, href: "https://app.saruapps.com/register" }}
        secondary={{ label: t.hero.secondary, href: "https://calendly.com/saruapps/30min", external: true }}
      >
        <HeroPhone tilt={-3}>
          <AnalyticsScreen />
        </HeroPhone>
      </ModuloHero>

      {/* Key metrics */}
      <section className="section-light grain py-28 md:py-40">
        <div className="relative mx-auto max-w-[1280px] px-6">
          <SectionHead
            label={t.metrics.label}
            title={t.metrics.title}
            italic={t.metrics.italic}
            subtitle={t.metrics.subtitle}
          />

          <div className="mt-16 border-b border-line-light md:mt-24">
            {metrics.map((metric, i) => (
              <Reveal key={metric.title} delay={(i % 3) * 0.07}>
                <div className="grid gap-4 border-t border-line-light py-10 md:grid-cols-12 md:items-baseline md:gap-12">
                  <h3 className="font-display text-[clamp(30px,3.6vw,52px)] font-extrabold leading-[1] tracking-[-0.045em] md:col-span-7">
                    {metric.title}
                  </h3>
                  <p className="max-w-md text-[17px] leading-[1.6] md:col-span-5">{metric.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard preview */}
      <section className="section-dark grain overflow-x-clip py-28 md:py-40">
        <div className="glow left-1/2 top-[45%] -translate-x-1/2" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1280px] px-6">
          <SectionHead
            label={d.label}
            title={d.title}
            subtitle={d.subtitle}
            align="center"
          />

          {/* Dashboard mockup */}
          <Reveal delay={0.07} className="mt-16 md:mt-24">
            <div className="mx-auto max-w-5xl rounded-[28px] border border-card-dark-border bg-card-dark p-4 shadow-[inset_0_1px_0_rgba(255,255,255,.18)] backdrop-blur-xl md:p-6">
              {/* Top nav bar */}
              <div className="mb-6 flex items-center justify-between border-b border-line-dark pb-4">
                <div className="flex items-center gap-3">
                  <BarChart3 className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                  <span className="text-[15px] font-semibold">{d.appTitle}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="hidden text-[12px] font-medium sm:inline">{d.periodLabel}</span>
                  <div className="rounded-lg border border-line-dark px-3 py-1 text-[12px] font-semibold">
                    {d.period}
                  </div>
                </div>
              </div>

              {/* Stats row */}
              <div className="mb-4 grid grid-cols-2 gap-3 md:grid-cols-4">
                {d.stats.map((stat) => (
                  <div key={stat.label} className={`${panel} p-4`}>
                    <p className="text-[12px] font-semibold">{stat.label}</p>
                    <p className="mt-1 font-display text-[clamp(20px,2.2vw,30px)] font-extrabold tracking-[-0.04em]">
                      {stat.value}
                    </p>
                    <div className="mt-1 flex flex-wrap items-center gap-1">
                      <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
                      <span className="text-[12px] font-bold">{stat.change}</span>
                      <span className="text-[11px]">{d.vsPrevious}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Charts area */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {/* Main chart */}
                <div className={`${panel} p-5 md:col-span-2`}>
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-[13px] font-semibold">{d.revenueTitle}</p>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-white" aria-hidden="true" />
                        <span className="text-[11px] font-medium">{d.legendApp}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-white/30" aria-hidden="true" />
                        <span className="text-[11px] font-medium">{d.legendWeb}</span>
                      </div>
                    </div>
                  </div>
                  {/* Bar chart */}
                  <div className="flex h-32 items-end gap-[3px] md:h-40 md:gap-1" aria-hidden="true">
                    {revenueBars.map((bar, i) => (
                      <div key={i} className="flex h-full flex-1 flex-col justify-end gap-[2px]">
                        <div
                          className={`w-full rounded-[3px] ${i === revenueBars.length - 1 ? "bg-accent" : "bg-white"}`}
                          style={{ height: `${bar.app * 0.62}%` }}
                        />
                        <div className="w-full rounded-[3px] bg-white/25" style={{ height: `${bar.web * 0.62}%` }} />
                      </div>
                    ))}
                  </div>
                  <div className="mt-2 flex justify-between text-[10px] font-medium">
                    {d.dates.map((date) => (
                      <span key={date}>{date}</span>
                    ))}
                  </div>
                </div>

                {/* Side panels */}
                <div className="space-y-4">
                  {/* Top products */}
                  <div className={`${panel} p-4`}>
                    <p className="mb-3 text-[13px] font-semibold">{d.topProductsTitle}</p>
                    <div className="space-y-2.5">
                      {d.topProducts.map((product) => (
                        <div key={product.name}>
                          <div className="mb-1 flex items-center justify-between">
                            <span className="text-[12px] font-medium">{product.name}</span>
                            <span className="text-[11px]">{product.views} {d.views}</span>
                          </div>
                          <div className="h-1 w-full rounded-full bg-white/10" aria-hidden="true">
                            <div className="h-1 rounded-full bg-white" style={{ width: `${product.pct}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Push effectiveness */}
                  <div className={`${panel} p-4`}>
                    <p className="mb-3 text-[13px] font-semibold">{d.pushTitle}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {d.pushStats.map((stat) => (
                        <div key={stat.label} className="rounded-[12px] border border-line-dark p-2 text-center">
                          <p className="font-display text-[15px] font-extrabold tracking-[-0.02em]">{stat.value}</p>
                          <p className="mt-0.5 text-[10px] font-medium">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Impact section */}
      <section className="section-light grain py-28 md:py-40">
        <div className="relative mx-auto max-w-[1280px] px-6">
          <SectionHead
            label={t.impact.label}
            title={t.impact.title}
            italic={t.impact.italic}
            subtitle={t.impact.subtitle}
          />

          <div className="mt-16 border-b border-line-light md:mt-24">
            {impactItems.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.07}>
                <div className="grid gap-4 border-t border-line-light py-10 md:grid-cols-12 md:items-start md:gap-12">
                  <h3 className="flex items-center gap-4 font-display text-[clamp(22px,2vw,30px)] font-bold leading-[1.15] tracking-[-0.03em] md:col-span-5">
                    <item.icon className="h-7 w-7 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                    {item.title}
                  </h3>
                  <p className="max-w-xl text-[17px] leading-[1.6] md:col-span-7">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <ModuloCTA
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
