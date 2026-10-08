"use client";

import { AnimatedSection } from "./AnimatedSection";
import {
  MousePointerClick,
  Smartphone,
  Bell,
  Heart,
  ShoppingBag,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import { useDictionary } from "@/i18n/DictionaryProvider";

export function FeaturesPreview() {
  const { dict, localePath } = useDictionary();
  const t = dict.features;

  const features = [
    { icon: MousePointerClick, title: t.editor, description: t.editorDesc, href: localePath("/producto/editor") },
    { icon: Smartphone, title: t.appNativa, description: t.appNativaDesc, href: localePath("/producto/app-nativa") },
    { icon: Bell, title: t.push, description: t.pushDesc, href: localePath("/producto/notificaciones-push") },
    { icon: Heart, title: t.engagement, description: t.engagementDesc, href: localePath("/producto/engagement") },
    { icon: ShoppingBag, title: t.sincronizacion, description: t.sincronizacionDesc, href: localePath("/producto/sincronizacion") },
    { icon: BarChart3, title: t.analytics, description: t.analyticsDesc, href: localePath("/producto/analytics") },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-sm text-gray-500 uppercase tracking-widest font-medium">
            {t.label}
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight text-gray-950">
            {t.title}
            <br />
            {t.titleLine2}
          </h2>
          <p className="mt-6 text-lg text-gray-500">
            {t.subtitle}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <AnimatedSection key={feature.title} delay={i * 0.08}>
              <a
                href={feature.href}
                className="group relative h-full bg-white rounded-2xl border border-gray-100 p-6 hover:border-gray-200 hover:shadow-xl hover:shadow-gray-100/80 transition-all duration-500 block"
              >
                <div className="mb-5">
                  <div className="w-10 h-10 rounded-xl bg-gray-950 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-950 mb-2 font-display">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  {feature.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 group-hover:text-gray-950 transition-colors duration-300">
                  {t.conocerMas}
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </a>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3} className="text-center mt-16">
          <a
            href={localePath("/producto")}
            className="inline-flex items-center gap-2 px-7 py-3.5 text-gray-600 text-[15px] font-medium rounded-full border border-gray-200 hover:border-gray-300 hover:text-gray-900 transition-all duration-300"
          >
            {t.verTodas}
            <ArrowRight className="w-4 h-4" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
