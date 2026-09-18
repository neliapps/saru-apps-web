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
      <div className="max-w-[1280px] mx-auto px-6">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-sm text-gray-500 uppercase tracking-widest font-medium">
            Producto
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight text-gray-950">
            Todo lo que necesitás
            <br />
            para vender desde tu app
          </h2>
          <p className="mt-6 text-lg text-gray-500">
            Herramientas poderosas para crear, personalizar y hacer crecer tu
            canal de ventas móvil.
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
            className="inline-flex items-center gap-2 px-7 py-3.5 text-gray-600 text-[15px] font-medium rounded-full border border-gray-200 hover:border-gray-300 hover:text-gray-900 transition-all duration-300"
          >
            Ver todas las funcionalidades
            <ArrowRight className="w-4 h-4" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
