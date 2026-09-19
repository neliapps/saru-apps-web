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

const features = [
  {
    icon: MousePointerClick,
    title: "Editor Drag & Drop",
    description:
      "Diseñá cada pantalla arrastrando componentes. Sin código, sin límites.",
    href: "/producto/editor",
  },
  {
    icon: Smartphone,
    title: "App Nativa iOS & Android",
    description:
      "Publicá en App Store y Google Play. Experiencia nativa real.",
    href: "/producto/app-nativa",
  },
  {
    icon: Bell,
    title: "Notificaciones Push",
    description:
      "Enviá mensajes segmentados directo al celular de tus clientes.",
    href: "/producto/notificaciones-push",
  },
  {
    icon: Heart,
    title: "Engagement y Ventas",
    description:
      "Carrito abandonado, drops exclusivos, badges y más herramientas de conversión.",
    href: "/producto/engagement",
  },
  {
    icon: ShoppingBag,
    title: "Sincronización Tiendanube",
    description:
      "Productos, stock, precios y pedidos siempre actualizados.",
    href: "/producto/sincronizacion",
  },
  {
    icon: BarChart3,
    title: "Analytics en tiempo real",
    description:
      "Métricas clave para tomar decisiones basadas en datos.",
    href: "/producto/analytics",
  },
];

export function FeaturesPreview() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-display text-[53px] md:text-[70px] lg:text-[80px] font-bold text-black tracking-[-2.44px] md:tracking-[-3.5px] leading-[1]">
            Todo lo que necesitás
            <br />
            para vender desde tu app
          </h2>
          <p className="mt-6 text-[15px] text-[#5e5e5e]">
            Herramientas poderosas para crear, personalizar y hacer crecer tu
            canal de ventas móvil.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <AnimatedSection key={feature.title} delay={i * 0.08}>
              <a
                href={feature.href}
                className="group relative h-full bg-white rounded-[22px] border border-[#d2d2d7] p-6 hover:border-[#171717] transition-colors duration-300 block cursor-pointer"
              >
                <div className="mb-5">
                  <feature.icon className="w-6 h-6 text-[#171717]" />
                </div>
                <h3 className="text-[21px] font-bold text-[#000000] font-display tracking-[-0.63px] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[15px] text-[#5e5e5e] leading-relaxed mb-4">
                  {feature.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#3b82f6] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Conocer más
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </a>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3} className="text-center mt-16">
          <a
            href="/producto"
            className="inline-flex items-center gap-2 text-[15px] font-medium text-[#3b82f6] hover:underline transition-all duration-300"
          >
            Ver todas las funcionalidades
            <ArrowRight className="w-4 h-4" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
