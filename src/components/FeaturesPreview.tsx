"use client";

import { useEffect, useRef, useState, type ComponentType } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useDictionary } from "@/i18n/DictionaryProvider";
import { ArrowLink, Label, ease } from "./home/primitives";
import {
  AnalyticsScreen,
  EditorScreen,
  LockScreen,
  PhoneFrame,
  ProductScreen,
  ScaledPhone,
  StoreScreen,
  SyncScreen,
} from "./home/phone";

type Feature = {
  title: string;
  description: string;
  href: string;
  Screen: ComponentType;
  dark?: boolean;
};

function FeatureRow({
  feature,
  index,
  active,
  onActive,
}: {
  feature: Feature;
  index: number;
  active: boolean;
  onActive: (i: number) => void;
}) {
  const { dict } = useDictionary();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-48% 0px -48% 0px" });

  useEffect(() => {
    if (inView) onActive(index);
  }, [inView, index, onActive]);

  return (
    <div ref={ref} className="relative border-t border-line-light py-14 lg:flex lg:min-h-[58vh] lg:flex-col lg:justify-center lg:py-20">
      <motion.span
        className="absolute -top-px left-0 h-[3px] w-full origin-left bg-accent"
        initial={false}
        animate={{ scaleX: active ? 1 : 0 }}
        transition={{ duration: 0.6, ease }}
        aria-hidden="true"
      />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease }}
      >
        <p className={`text-[16px] font-bold italic tabular-nums transition-colors duration-500 ${active ? "text-accent-dark" : ""}`}>
          {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="mt-3 font-display text-[clamp(26px,2.8vw,40px)] font-bold leading-[1.05] tracking-[-0.035em]">
          {feature.title}
        </h3>
        <p className="mt-5 max-w-md text-[17px] leading-[1.6]">{feature.description}</p>
        <div className="mt-4">
          <ArrowLink href={feature.href}>{dict.features.conocerMas}</ArrowLink>
        </div>
      </motion.div>

      {/* Mobile: the phone sits in the row, cropped with a fade */}
      <div
        className="mt-10 flex justify-center lg:hidden"
        style={{ maskImage: "linear-gradient(to bottom, #000 70%, transparent)", WebkitMaskImage: "linear-gradient(to bottom, #000 70%, transparent)" }}
        aria-hidden="true"
      >
        <div className="h-[340px] overflow-hidden">
          <ScaledPhone scale={0.8} dark={feature.dark}>
            <feature.Screen />
          </ScaledPhone>
        </div>
      </div>
    </div>
  );
}

export function FeaturesPreview() {
  const { dict, localePath } = useDictionary();
  const t = dict.features;
  const [active, setActive] = useState(0);

  const features: Feature[] = [
    { title: t.editor, description: t.editorDesc, href: localePath("/producto/editor"), Screen: EditorScreen },
    { title: t.appNativa, description: t.appNativaDesc, href: localePath("/producto/app-nativa"), Screen: StoreScreen },
    { title: t.push, description: t.pushDesc, href: localePath("/producto/notificaciones-push"), Screen: LockScreen, dark: true },
    { title: t.engagement, description: t.engagementDesc, href: localePath("/producto/engagement"), Screen: ProductScreen },
    { title: t.sincronizacion, description: t.sincronizacionDesc, href: localePath("/producto/sincronizacion"), Screen: SyncScreen },
    { title: t.analytics, description: t.analyticsDesc, href: localePath("/producto/analytics"), Screen: AnalyticsScreen },
  ];
  const current = features[active];

  return (
    <section className="section-light grain overflow-x-clip">
      <div className="relative mx-auto max-w-[1280px] px-6 pt-28 md:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease }}
          className="grid gap-6 lg:grid-cols-12"
        >
          <div className="lg:col-span-9">
            <Label>{t.label}</Label>
            <h2 className="mt-4 font-display text-[clamp(34px,4.4vw,64px)] font-bold leading-[1.04] tracking-[-0.04em]">
              {t.title} <em className="italic">{t.titleLine2}</em>
            </h2>
          </div>
          <p className="max-w-md self-end text-[clamp(17px,1.4vw,20px)] italic leading-[1.5] lg:col-span-5 lg:col-start-8">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="mt-16 grid lg:mt-24 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            {features.map((f, i) => (
              <FeatureRow key={f.title} feature={f} index={i} active={i === active} onActive={setActive} />
            ))}
          </div>

          {/* Desktop: sticky phone, the screen follows the row you are reading */}
          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-[72px] flex h-[calc(100vh-72px)] items-center justify-center" aria-hidden="true">
              <div className="glow left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
              <div className="relative">
                <PhoneFrame dark={current.dark}>
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.div
                      key={active}
                      className="absolute inset-0"
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -40 }}
                      transition={{ duration: 0.45, ease }}
                    >
                      <current.Screen />
                    </motion.div>
                  </AnimatePresence>
                </PhoneFrame>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-line-light py-14 md:py-20">
          <ArrowLink href={localePath("/producto")}>{t.verTodas}</ArrowLink>
        </div>
      </div>
    </section>
  );
}
