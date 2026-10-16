import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHead, Reveal } from "@/components/site/blocks";
import { ProductoCTA, ProductoSubHero } from "@/components/site/producto-blocks";
import { EditorScreen, HomeScreen, PhoneFrame, ScaledPhone } from "@/components/home/phone";
import {
  Image,
  Video,
  LayoutGrid,
  Circle,
  Tag,
  Timer,
  Minus,
  Pointer,
  GripVertical,
} from "lucide-react";
import { productoEditorContent } from "@/content/producto-editor";
import { localePath, toLocale } from "@/i18n/config";

const blockIcons = [Image, Video, LayoutGrid, LayoutGrid, Circle, Tag, Timer, Minus, Pointer];

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return productoEditorContent[toLocale(locale)].metadata;
}

export default async function EditorPage({ params }: Props) {
  const locale = toLocale((await params).locale);
  const t = productoEditorContent[locale];
  return (
    <>
      <Navbar variant="dark" />

      {/* Hero */}
      <ProductoSubHero
        back={{ label: t.back, href: localePath(locale, "/producto") }}
        label={t.hero.label}
        title={t.hero.title}
        accent={t.hero.accent}
        subtitle={t.hero.subtitle}
      >
        <div className="-rotate-[3deg]">
          <div className="sm:hidden">
            <ScaledPhone scale={0.8}>
              <EditorScreen />
            </ScaledPhone>
          </div>
          <div className="hidden sm:block">
            <PhoneFrame>
              <EditorScreen />
            </PhoneFrame>
          </div>
        </div>
      </ProductoSubHero>

      {/* Editor Visual Mock-up */}
      <section className="section-light grain overflow-x-clip py-24 md:py-32">
        <div className="glow left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1280px] px-6">
          <Reveal>
            <div
              className="overflow-hidden rounded-[28px] border border-card-light-border bg-card-light"
              aria-hidden="true"
            >
              {/* Browser bar */}
              <div className="flex items-center gap-4 border-b border-line-light px-5 py-4">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-ink/15" />
                  <span className="h-3 w-3 rounded-full bg-ink/15" />
                  <span className="h-3 w-3 rounded-full bg-ink/15" />
                </div>
                <div className="flex flex-1 justify-center">
                  <span className="rounded-lg bg-white px-6 py-1 text-[12px] font-medium md:px-12">
                    app.saruapps.com/editor
                  </span>
                </div>
              </div>

              {/* Editor UI */}
              <div className="flex gap-6 p-5 md:p-8">
                {/* Left sidebar - components */}
                <div className="hidden w-52 shrink-0 space-y-1.5 rounded-[20px] bg-white p-4 lg:block">
                  <p className="mb-4 text-[14px] font-semibold">{t.mockup.components}</p>
                  {t.mockup.componentItems.map((item, i) => (
                    <div
                      key={item}
                      className={`flex items-center gap-2 rounded-lg px-2.5 py-2 text-[13px] font-medium ${
                        i === 0 ? "bg-ink text-white" : "border border-line-light bg-white"
                      }`}
                    >
                      <GripVertical className="h-3.5 w-3.5" strokeWidth={1.75} />
                      {item}
                    </div>
                  ))}
                </div>

                {/* Center - phone preview */}
                <div className="flex flex-1 justify-center py-4">
                  <ScaledPhone scale={0.78}>
                    <HomeScreen />
                  </ScaledPhone>
                </div>

                {/* Right sidebar - style panel */}
                <div className="hidden w-52 shrink-0 space-y-3 lg:block">
                  <div className="rounded-[20px] bg-white p-4">
                    <p className="mb-3 text-[14px] font-semibold">{t.mockup.style}</p>
                    <div className="mb-4 flex gap-1.5">
                      {["#0a0a0a", "#2F6BFF", "#ffffff", "#d4d4d8", "#f4f4f5"].map((color) => (
                        <span
                          key={color}
                          className="h-5 w-5 rounded-full border border-line-light"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                    <dl className="space-y-2.5 text-[12px]">
                      <div className="flex justify-between">
                        <dt>{t.mockup.radius}</dt>
                        <dd className="font-semibold">12px</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt>{t.mockup.padding}</dt>
                        <dd className="font-semibold">16px</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt>{t.mockup.typography}</dt>
                        <dd className="font-semibold">Inter</dd>
                      </div>
                    </dl>
                  </div>

                  <div className="rounded-[20px] bg-white p-4">
                    <p className="mb-2 text-[14px] font-semibold">{t.mockup.properties}</p>
                    <dl className="space-y-2.5 text-[12px]">
                      <div className="flex justify-between">
                        <dt>{t.mockup.type}</dt>
                        <dd className="font-semibold">{t.mockup.typeValue}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt>{t.mockup.link}</dt>
                        <dd className="font-semibold">{t.mockup.linkValue}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt>{t.mockup.height}</dt>
                        <dd className="font-semibold">{t.mockup.heightValue}</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Available Blocks */}
      <section className="section-dark grain overflow-x-clip py-28 md:py-40">
        <div className="glow -right-[320px] -top-[200px]" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1280px] px-6">
          <SectionHead
            label={t.blocksSection.label}
            title={t.blocksSection.title}
            italic={t.blocksSection.italic}
            subtitle={t.blocksSection.subtitle}
          />

          <ul className="mt-16 grid grid-cols-1 gap-x-10 md:mt-20 md:grid-cols-2 lg:grid-cols-3">
            {t.blocks.map((block, i) => {
              const Icon = blockIcons[i];
              return (
                <li key={block.title} className="border-t border-line-dark">
                  <Reveal delay={(i % 3) * 0.07} className="py-8 md:py-10">
                    <div className="flex items-center gap-3">
                      <Icon className="h-6 w-6 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                      <h3 className="font-display text-[22px] font-bold leading-[1.15] tracking-[-0.03em]">
                        {block.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-[17px] leading-[1.6]">{block.description}</p>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-light grain overflow-x-clip py-24 md:py-32">
        <div className="relative mx-auto grid max-w-[1280px] grid-cols-1 px-6 md:grid-cols-3">
          {t.benefits.map((benefit, i) => (
            <Reveal
              key={benefit.title}
              delay={i * 0.07}
              className="border-t border-line-light py-10 md:border-l md:border-t-0 md:px-8 md:py-4 md:first:border-l-0 md:first:pl-0"
            >
              <span className="font-display text-[17px] font-semibold tabular-nums" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-[clamp(22px,2vw,30px)] font-bold leading-[1.15] tracking-[-0.03em]">
                {benefit.title}
              </h3>
              <p className="mt-3 max-w-xs text-[17px] leading-[1.6]">{benefit.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <ProductoCTA
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
