"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import {
  Smartphone,
  MousePointerClick,
  Bell,
  Heart,
  ShoppingBag,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: MousePointerClick,
    title: "Editor Drag & Drop",
    description:
      "Diseñá cada pantalla de tu app arrastrando componentes. Banners, grillas de productos, carruseles, timers y más. Sin código, sin límites.",
    visual: "editor",
  },
  {
    icon: Smartphone,
    title: "App nativa iOS & Android",
    description:
      "Tu app se publica en App Store y Google Play. Experiencia nativa real, no un simple webview. Rápida, fluida y profesional.",
    visual: "phone",
  },
  {
    icon: Bell,
    title: "Notificaciones Push",
    description:
      "Enviá notificaciones push segmentadas a tus clientes. Alertá sobre ofertas, nuevos productos o recuperá carritos abandonados.",
    visual: "push",
  },
  {
    icon: Heart,
    title: "Programa de Fidelización",
    description:
      "Creá un programa de puntos y recompensas. Tus clientes acumulan puntos con cada compra y los canjean por descuentos exclusivos.",
    visual: "loyalty",
  },
  {
    icon: ShoppingBag,
    title: "Sincronización con Tiendanube",
    description:
      "Productos, stock, precios y pedidos se sincronizan automáticamente con tu tienda Tiendanube. Todo siempre actualizado.",
    visual: "sync",
  },
  {
    icon: BarChart3,
    title: "Analytics en tiempo real",
    description:
      "Medí el rendimiento de tu app. Usuarios activos, conversiones, ingresos por push y más métricas clave para tomar decisiones.",
    visual: "analytics",
  },
];

function FeatureVisual({ type }: { type: string }) {
  if (type === "editor") {
    return (
      <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
        <div className="flex gap-3">
          <div className="w-32 space-y-2 shrink-0">
            <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">
              Componentes
            </p>
            {["Banner Hero", "Grilla 2x2", "Carrusel", "Countdown", "CTA"].map(
              (item, i) => (
                <motion.div
                  key={item}
                  whileHover={{ scale: 1.02, x: 4 }}
                  className={`px-2.5 py-1.5 rounded-md text-[11px] font-medium cursor-grab transition-colors ${
                    i === 0
                      ? "bg-gray-950 text-white"
                      : "bg-white text-gray-600 border border-gray-200"
                  }`}
                >
                  <span className="text-gray-300 mr-1">⋮⋮</span> {item}
                </motion.div>
              )
            )}
          </div>
          <div className="flex-1 bg-white rounded-lg border-2 border-dashed border-gray-200 p-3 flex items-center justify-center min-h-[140px]">
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-2">
                <MousePointerClick className="w-5 h-5 text-gray-400" />
              </div>
              <p className="text-[11px] text-gray-400">
                Arrastrá componentes aquí
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "phone") {
    return (
      <div className="flex justify-center">
        <div className="w-[160px] bg-gray-950 rounded-[1.8rem] p-1.5">
          <div className="bg-white rounded-[1.5rem] overflow-hidden">
            <div className="h-4 flex items-center justify-center">
              <div className="w-12 h-1.5 bg-gray-200 rounded-full" />
            </div>
            <div className="px-3 pb-3 space-y-2">
              <div className="h-16 rounded-lg bg-gradient-to-br from-gray-900 to-gray-600" />
              <div className="grid grid-cols-2 gap-1.5">
                <div className="aspect-square rounded bg-gray-100" />
                <div className="aspect-square rounded bg-gray-200" />
                <div className="aspect-square rounded bg-gray-200" />
                <div className="aspect-square rounded bg-gray-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "push") {
    return (
      <div className="space-y-2">
        {[
          { title: "🛍️ ¡Oferta flash!", body: "50% en toda la tienda. Solo hoy.", time: "Ahora" },
          { title: "🛒 Olvidaste algo", body: "Tu carrito te espera con envío gratis.", time: "2h" },
          { title: "✨ Nueva colección", body: "Llegó lo nuevo de temporada.", time: "5h" },
        ].map((notif, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm flex items-start gap-3"
          >
            <div className="w-8 h-8 rounded-lg bg-gray-950 flex items-center justify-center shrink-0">
              <span className="text-white text-[10px] font-bold">N</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start">
                <p className="text-[11px] font-semibold text-gray-900">
                  {notif.title}
                </p>
                <span className="text-[9px] text-gray-400 shrink-0">
                  {notif.time}
                </span>
              </div>
              <p className="text-[10px] text-gray-500 mt-0.5">{notif.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    );
  }

  if (type === "loyalty") {
    return (
      <div className="bg-gradient-to-br from-gray-950 to-gray-800 rounded-xl p-4 text-white">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-[10px] opacity-60 uppercase tracking-wider">
              Programa de puntos
            </p>
            <p className="text-xl font-bold mt-1">2,450 pts</p>
          </div>
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
            <Heart className="w-4 h-4" />
          </div>
        </div>
        <div className="w-full bg-white/10 rounded-full h-1.5 mb-2">
          <div className="bg-white rounded-full h-1.5 w-3/4" />
        </div>
        <p className="text-[10px] opacity-60">
          550 pts más para tu próxima recompensa
        </p>
        <div className="grid grid-cols-3 gap-2 mt-4">
          {["10% OFF", "Envío free", "Gift"].map((reward) => (
            <div
              key={reward}
              className="bg-white/10 rounded-lg p-2 text-center"
            >
              <p className="text-[10px] font-medium">{reward}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === "sync") {
    return (
      <div className="flex items-center justify-center gap-4">
        <div className="bg-white rounded-xl border border-gray-200 p-3 text-center">
          <img
            src="/tiendanube-icon.svg"
            alt="Tiendanube"
            className="w-10 h-10 mx-auto mb-2 object-contain"
          />
          <p className="text-[10px] text-gray-600 font-medium">Tiendanube</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <motion.div
            animate={{ x: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <span className="text-gray-300 text-lg">→</span>
          </motion.div>
          <span className="text-[9px] text-gray-400">Sync</span>
          <motion.div
            animate={{ x: [0, -8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
          >
            <span className="text-gray-300 text-lg">←</span>
          </motion.div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-3 text-center">
          <img src="/favicon.png" alt="Saru Apps" className="w-10 h-10 mx-auto mb-2 object-contain" />
          <p className="text-[10px] text-gray-600 font-medium">Saru Apps</p>
        </div>
      </div>
    );
  }

  // analytics
  return (
    <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
      <div className="flex justify-between items-center mb-3">
        <p className="text-[11px] font-semibold text-gray-900">Últimos 7 días</p>
        <span className="text-[10px] text-green-600 font-medium">↑ 24%</span>
      </div>
      <div className="flex items-end gap-1 h-16">
        {[40, 55, 35, 60, 80, 65, 90].map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className={`flex-1 rounded-sm ${
              i === 6 ? "bg-gray-950" : "bg-gray-200"
            }`}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2 mt-3">
        {[
          { label: "Usuarios", value: "1,234" },
          { label: "Conversión", value: "4.2%" },
          { label: "Ingresos", value: "$8,450" },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-xs font-bold text-gray-900">{stat.value}</p>
            <p className="text-[9px] text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Features() {
  return (
    <section id="funcionalidades" className="py-32 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-sm text-gray-400 uppercase tracking-widest font-medium">
            Funcionalidades
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
              <div className="group relative h-full bg-white rounded-2xl border border-gray-100 p-6 hover:border-gray-200 hover:shadow-xl hover:shadow-gray-100/80 transition-all duration-500">
                <div className="mb-5">
                  <div className="w-10 h-10 rounded-xl bg-gray-950 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-950 mb-2 font-display">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  {feature.description}
                </p>
                <FeatureVisual type={feature.visual} />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
