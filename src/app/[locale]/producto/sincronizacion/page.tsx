import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Package,
  FolderTree,
  ClipboardList,
  DollarSign,
  CreditCard,
  Zap,
  Shield,
  Check,
} from "lucide-react";
import { SyncScreen } from "@/components/home/phone";
import { Detail, Label } from "@/components/home/primitives";
import { Reveal, SectionHead } from "@/components/site/blocks";
import { HeroPhone, ModuloCTA, ModuloHero, SyncConnection } from "@/components/site/producto-modulos";
import { productoSincronizacionContent } from "@/content/producto-sincronizacion";
import { toLocale } from "@/i18n/config";

const syncIcons = [Package, FolderTree, ClipboardList, DollarSign, CreditCard];

/* Bento spans for the 5 sync items: one wide + one narrow, then a row of three */
const syncSpans = ["md:col-span-4", "md:col-span-2", "md:col-span-2", "md:col-span-2", "md:col-span-2"];

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return productoSincronizacionContent[toLocale(locale)].metadata;
}

export default async function SincronizacionPage({ params }: Props) {
  const locale = toLocale((await params).locale);
  const t = productoSincronizacionContent[locale];
  const syncItems = t.sync.items.map((item, i) => ({ ...item, icon: syncIcons[i] }));
  const connectionSteps = t.connection.steps;
  const webhookEvents = t.realtime.events;

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
        <HeroPhone tilt={3}>
          <SyncScreen />
        </HeroPhone>
      </ModuloHero>

      {/* What syncs */}
      <section className="section-light grain py-28 md:py-40">
        <div className="relative mx-auto max-w-[1280px] px-6">
          <SectionHead
            label={t.sync.label}
            title={t.sync.title}
            italic={t.sync.italic}
            subtitle={t.sync.subtitle}
          />

          <div className="mt-16 grid gap-5 md:mt-24 md:grid-cols-6">
            {syncItems.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 0.07} className={syncSpans[i]}>
                <div
                  className={`flex h-full flex-col rounded-[28px] border border-card-light-border bg-card-light p-8 transition-transform duration-300 hover:-translate-y-0.5 md:p-10 ${
                    i === 0 ? "md:min-h-[300px] md:justify-between" : ""
                  }`}
                >
                  <item.icon className="h-7 w-7" strokeWidth={1.75} aria-hidden="true" />
                  <div className="mt-8">
                    <h3 className="font-display text-[clamp(22px,2vw,30px)] font-bold leading-[1.15] tracking-[-0.03em]">
                      {item.title}
                    </h3>
                    <p className={`mt-3 text-[17px] leading-[1.6] ${i === 0 ? "max-w-md" : ""}`}>{item.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How connection works */}
      <section className="section-dark grain overflow-x-clip py-28 md:py-40">
        <div className="glow left-1/2 bottom-[-10%] -translate-x-1/2" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1280px] px-6">
          <SectionHead label={t.connection.label} title={t.connection.title} italic={t.connection.italic} align="center" />

          <div className="mx-auto mt-16 grid max-w-5xl gap-x-10 md:mt-24 md:grid-cols-3">
            {connectionSteps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.07}>
                <div className="border-t border-line-dark py-10">
                  <p
                    className="font-display text-[clamp(56px,5vw,80px)] font-bold italic leading-[0.85] tracking-[-0.06em]"
                    aria-hidden="true"
                  >
                    {step.number}
                  </p>
                  <h3 className="mt-6 font-display text-[clamp(22px,2vw,30px)] font-bold leading-[1.15] tracking-[-0.03em]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[17px] leading-[1.6]">{step.description}</p>
                  {i === 2 && (
                    <div className="mt-6">
                      <Detail>{t.connection.detail}</Detail>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          {/* Sync visual diagram */}
          <div className="mt-16 md:mt-24">
            <SyncConnection
              left={{ img: "/brand/tiendanube-isotipo.png", ...t.connection.diagram.left }}
              right={{ img: "/brand/isotipo-white.png", ...t.connection.diagram.right }}
              middle={t.connection.diagram.middle}
            />
          </div>
        </div>
      </section>

      {/* Real-time changes */}
      <section className="section-light grain py-28 md:py-40">
        <div className="relative mx-auto grid max-w-[1280px] items-center gap-16 px-6 lg:grid-cols-2">
          <Reveal>
            <Label>{t.realtime.label}</Label>
            <h2 className="mt-4 font-display text-[clamp(34px,4.4vw,64px)] font-bold leading-[1.04] tracking-[-0.04em]">
              {t.realtime.title} <em className="italic">{t.realtime.italic}</em>
            </h2>
            <p className="mt-6 text-[17px] leading-[1.6]">
              {t.realtime.p1}
            </p>
            <p className="mt-4 text-[17px] leading-[1.6]">
              {t.realtime.p2}
            </p>
            <ul className="mt-8 border-b border-line-light">
              {t.realtime.bullets.map((item) => (
                <li key={item} className="flex items-center gap-3 border-t border-line-light py-4 text-[16px] font-semibold">
                  <Check className="h-5 w-5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.07}>
            <div className="rounded-[28px] border border-card-light-border bg-card-light p-6 md:p-8">
              {/* Webhook event mockup */}
              <div className="mb-5 flex items-center gap-2">
                <Zap className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                <p className="text-[16px] font-semibold">{t.realtime.webhookTitle}</p>
              </div>
              <div className="space-y-2.5">
                {webhookEvents.map((event, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-[18px] bg-white p-4">
                    <span
                      className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${i === 0 ? "bg-accent" : "bg-ink"}`}
                      aria-hidden="true"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <code className="font-mono text-[12px] font-semibold">{event.event}</code>
                        <span className="shrink-0 text-[12px] font-medium">{event.time}</span>
                      </div>
                      <p className="mt-0.5 text-[14px]">{event.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Security note */}
      <section className="section-dark grain py-20 md:py-28">
        <div className="relative mx-auto max-w-[1280px] px-6">
          <Reveal>
            <div className="mx-auto flex max-w-3xl flex-col items-start gap-6 rounded-[28px] border border-card-dark-border bg-card-dark p-8 shadow-[inset_0_1px_0_rgba(255,255,255,.18)] backdrop-blur-xl md:flex-row md:p-10">
              <Shield className="h-7 w-7 shrink-0" strokeWidth={1.75} aria-hidden="true" />
              <div>
                <p className="font-display text-[clamp(22px,2vw,30px)] font-bold leading-[1.15] tracking-[-0.03em]">
                  {t.security.title}
                </p>
                <p className="mt-3 text-[17px] leading-[1.6]">
                  {t.security.body}
                </p>
              </div>
            </div>
          </Reveal>
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
