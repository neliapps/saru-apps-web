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
  Tag,
  ShoppingCart,
  Sparkles,
  Zap,
  GripVertical,
} from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const features = [
  {
    icon: MousePointerClick,
    title: "Editor Drag & Drop",
    description:
      "Dise\u00f1\u00e1 cada pantalla de tu app arrastrando componentes. Banners, grillas de productos, carruseles, timers y m\u00e1s. Sin c\u00f3digo, sin l\u00edmites.",
    visual: "editor",
  },
  {
    icon: Smartphone,
    title: "App nativa iOS & Android",
    description:
      "Tu app se publica en App Store y Google Play. Experiencia nativa real, no un simple webview. R\u00e1pida, fluida y profesional.",
    visual: "phone",
  },
  {
    icon: Bell,
    title: "Notificaciones Push",
    description:
      "Envi\u00e1 notificaciones push segmentadas a tus clientes. Alert\u00e1 sobre ofertas, nuevos productos o recuper\u00e1 carritos abandonados.",
    visual: "push",
  },
  {
    icon: Heart,
    title: "Engagement y Ventas",
    description:
      "Carrito abandonado, back in stock, drops exclusivos, badges de producto y m\u00e1s herramientas para convertir y retener clientes.",
    visual: "engagement",
  },
  {
    icon: ShoppingBag,
    title: "Sincronizaci\u00f3n con Tiendanube",
    description:
      "Productos, stock, precios y pedidos se sincronizan autom\u00e1ticamente con tu tienda Tiendanube. Todo siempre actualizado.",
    visual: "sync",
  },
  {
    icon: BarChart3,
    title: "Analytics en tiempo real",
    description:
      "Med\u00ed el rendimiento de tu app. Usuarios activos, conversiones, ingresos por push y m\u00e1s m\u00e9tricas clave para tomar decisiones.",
    visual: "analytics",
  },
];

/* ------------------------------------------------------------------ */
/*  FEATURE VISUALS                                                    */
/* ------------------------------------------------------------------ */

function EditorVisual() {
  const components = ["Banner Hero", "Grilla 2x2", "Carrusel", "Countdown", "CTA"];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100/80 rounded-xl p-4 border border-gray-200/60">
      <div className="flex gap-3">
        {/* Component list */}
        <div className="w-32 space-y-1.5 shrink-0">
          <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">
            Componentes
          </p>
          {components.map((item, i) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.03, x: 4 }}
              className={`px-2.5 py-1.5 rounded-lg text-[11px] font-medium cursor-grab transition-all duration-300 flex items-center gap-1.5 ${
                i === 0
                  ? "bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg shadow-gray-900/20"
                  : "bg-white text-gray-600 border border-gray-200/80 hover:border-gray-300 hover:shadow-sm"
              }`}
            >
              <GripVertical className="w-3 h-3 opacity-40" />
              {item}
              {i === 0 && (
                <motion.div
                  className="ml-auto w-1.5 h-1.5 rounded-full bg-white/60"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Drop zone */}
        <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-xl border-2 border-dashed border-gray-300/70 p-3 flex items-center justify-center min-h-[140px] relative overflow-hidden">
          {/* Subtle grid inside drop zone */}
          <div
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #9ca3af 0.5px, transparent 0.5px)",
              backgroundSize: "16px 16px",
            }}
          />

          {/* Animated dragging cursor + component */}
          <motion.div
            className="relative z-10 flex flex-col items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-gradient-to-r from-gray-900 to-gray-800 text-white text-[10px] font-medium px-3 py-1.5 rounded-lg shadow-xl shadow-gray-900/30 flex items-center gap-1.5"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <GripVertical className="w-3 h-3 opacity-50" />
              Banner Hero
            </motion.div>
            <motion.div
              className="mt-2"
              animate={{ y: [0, -3, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <MousePointerClick className="w-5 h-5 text-gray-400" />
            </motion.div>
            <p className="text-[10px] text-gray-400 mt-2">
              Arrastr\u00e1 componentes aqu\u00ed
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function PhoneVisual() {
  return (
    <div className="flex justify-center relative py-2">
      {/* Glow behind phone */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative">
        {/* Phone frame */}
        <div className="w-[170px] bg-gradient-to-b from-gray-900 to-gray-950 rounded-[1.8rem] p-1.5 shadow-2xl shadow-gray-900/40 ring-1 ring-white/10">
          <div className="bg-white rounded-[1.5rem] overflow-hidden">
            {/* Dynamic island */}
            <div className="h-5 flex items-center justify-center relative">
              <div className="w-16 h-[5px] bg-gray-950 rounded-full" />
            </div>

            <div className="px-3 pb-3 space-y-2">
              {/* Banner with shimmer */}
              <div className="h-16 rounded-lg bg-gradient-to-br from-gray-900 to-gray-700 relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1.5,
                    ease: "easeInOut",
                  }}
                />
              </div>

              {/* Product grid with colored squares */}
              <div className="grid grid-cols-2 gap-1.5">
                {[
                  "bg-gradient-to-br from-rose-100 to-rose-200",
                  "bg-gradient-to-br from-sky-100 to-sky-200",
                  "bg-gradient-to-br from-amber-100 to-amber-200",
                  "bg-gradient-to-br from-emerald-100 to-emerald-200",
                ].map((color, i) => (
                  <div key={i} className={`aspect-square rounded-md ${color}`}>
                    <div className="w-full h-[60%] rounded-t-md opacity-50" />
                    <div className="px-1 pt-1">
                      <div className="h-1 w-3/4 bg-gray-300/50 rounded-full" />
                      <div className="h-1 w-1/2 bg-gray-300/30 rounded-full mt-0.5" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Floating badges */}
        <motion.div
          className="absolute -left-4 top-8 bg-white/90 backdrop-blur-sm border border-gray-200/80 rounded-full px-2.5 py-1 flex items-center gap-1.5 shadow-lg shadow-gray-900/10"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, ease }}
        >
          <svg className="w-3 h-3 text-gray-800" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 21.99C7.78997 22.03 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.09 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
          </svg>
          <span className="text-[9px] font-semibold text-gray-700">iOS</span>
        </motion.div>

        <motion.div
          className="absolute -right-5 top-16 bg-white/90 backdrop-blur-sm border border-gray-200/80 rounded-full px-2.5 py-1 flex items-center gap-1.5 shadow-lg shadow-gray-900/10"
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, ease }}
        >
          <svg className="w-3 h-3 text-gray-800" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
          </svg>
          <span className="text-[9px] font-semibold text-gray-700">Android</span>
        </motion.div>
      </div>
    </div>
  );
}

function PushVisual() {
  const notifications = [
    {
      Icon: Tag,
      title: "Oferta flash!",
      body: "50% en toda la tienda. Solo hoy.",
      time: "Ahora",
      gradient: "from-blue-500 to-blue-600",
      borderColor: "border-l-blue-500",
    },
    {
      Icon: ShoppingCart,
      title: "Olvidaste algo",
      body: "Tu carrito te espera con env\u00edo gratis.",
      time: "2h",
      gradient: "from-orange-500 to-orange-600",
      borderColor: "border-l-orange-500",
    },
    {
      Icon: Sparkles,
      title: "Nueva colecci\u00f3n",
      body: "Lleg\u00f3 lo nuevo de temporada.",
      time: "5h",
      gradient: "from-purple-500 to-purple-600",
      borderColor: "border-l-purple-500",
    },
  ];

  return (
    <div className="space-y-2.5">
      {notifications.map((notif, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.18, duration: 0.5, ease }}
          className={`bg-white/80 backdrop-blur-sm rounded-xl p-3 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-start gap-3 border-l-[3px] ${notif.borderColor}`}
        >
          <div
            className={`w-8 h-8 rounded-lg bg-gradient-to-br ${notif.gradient} flex items-center justify-center shrink-0 shadow-sm`}
          >
            <notif.Icon className="w-4 h-4 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start">
              <p className="text-[11px] font-semibold text-gray-900">
                {notif.title}
              </p>
              <span className="text-[9px] text-gray-400 shrink-0 ml-2">
                {notif.time}
              </span>
            </div>
            <p className="text-[10px] text-gray-500 mt-0.5 leading-relaxed">
              {notif.body}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function EngagementVisual() {
  const tools = [
    {
      Icon: ShoppingCart,
      label: "Carrito abandonado",
      badge: "Autom\u00e1tico",
      gradient: "from-orange-500 to-amber-500",
      glow: "shadow-orange-500/20",
      progress: 78,
      progressColor: "bg-gradient-to-r from-orange-400 to-amber-400",
    },
    {
      Icon: Bell,
      label: "Back in stock",
      badge: "Push",
      gradient: "from-blue-500 to-cyan-500",
      glow: "shadow-blue-500/20",
      progress: 62,
      progressColor: "bg-gradient-to-r from-blue-400 to-cyan-400",
    },
    {
      Icon: Zap,
      label: "Drops exclusivos",
      badge: "Cuenta regresiva",
      gradient: "from-purple-500 to-violet-500",
      glow: "shadow-purple-500/20",
      progress: 91,
      progressColor: "bg-gradient-to-r from-purple-400 to-violet-400",
    },
  ];

  return (
    <div className="space-y-2.5">
      {tools.map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.12, duration: 0.4, ease }}
          className="group/card bg-white/80 backdrop-blur-sm rounded-xl p-3 border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2.5">
              <motion.div
                whileHover={{ scale: 1.15 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className={`w-7 h-7 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-md ${item.glow}`}
              >
                <item.Icon className="w-3.5 h-3.5 text-white" />
              </motion.div>
              <span className="text-[11px] font-semibold text-gray-900">
                {item.label}
              </span>
            </div>
            <span className="text-[9px] font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 border border-gray-200/60">
              {item.badge}
            </span>
          </div>
          {/* Progress bar */}
          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              className={`h-full rounded-full ${item.progressColor}`}
              initial={{ width: 0 }}
              whileInView={{ width: `${item.progress}%` }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.8, ease }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function SyncVisual() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-center gap-3">
        {/* Tiendanube card */}
        <div className="bg-white rounded-xl border border-gray-200/80 p-3 text-center shadow-sm">
          <img
            src="/tiendanube-icon.svg"
            alt="Tiendanube"
            className="w-10 h-10 mx-auto mb-1.5 object-contain"
          />
          <p className="text-[10px] text-gray-600 font-medium">Tiendanube</p>
        </div>

        {/* Animated connection line */}
        <div className="relative w-20 h-8 flex items-center">
          {/* Base line */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-blue-300 via-indigo-400 to-violet-400 rounded-full" />

          {/* Traveling dots */}
          {[0, 1, 2].map((dot) => (
            <motion.div
              key={dot}
              className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 shadow-sm shadow-indigo-500/40"
              animate={{ left: ["0%", "100%"] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                delay: dot * 0.6,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Reverse traveling dots */}
          {[0, 1].map((dot) => (
            <motion.div
              key={`rev-${dot}`}
              className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 opacity-60"
              animate={{ left: ["100%", "0%"] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: dot * 0.8 + 0.3,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Saru Apps card */}
        <div className="bg-white rounded-xl border border-gray-200/80 p-3 text-center shadow-sm">
          <img
            src="/favicon.png"
            alt="Saru Apps"
            className="w-10 h-10 mx-auto mb-1.5 object-contain"
          />
          <p className="text-[10px] text-gray-600 font-medium">Saru Apps</p>
        </div>
      </div>

      {/* Stat badges */}
      <div className="flex items-center justify-center gap-2">
        {[
          { value: "142", label: "productos" },
          { value: "8", label: "categor\u00edas" },
          { value: "34", label: "pedidos" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-gray-50 border border-gray-200/60 rounded-lg px-2.5 py-1.5 text-center"
          >
            <span className="text-[11px] font-bold text-gray-900">
              {stat.value}
            </span>
            <span className="text-[9px] text-gray-400 ml-1">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AnalyticsVisual() {
  const barHeights = [40, 55, 35, 60, 80, 65, 90];
  const days = ["L", "M", "X", "J", "V", "S", "D"];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100/80 rounded-xl p-4 border border-gray-200/60 relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #9ca3af 1px, transparent 1px), linear-gradient(to bottom, #9ca3af 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative z-10">
        <div className="flex justify-between items-center mb-3">
          <p className="text-[11px] font-semibold text-gray-900">
            \u00DAltimos 7 d\u00edas
          </p>
          <div className="flex items-center gap-1">
            <svg
              className="w-3 h-3 text-emerald-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
            <span className="text-[10px] text-emerald-600 font-semibold">
              24%
            </span>
          </div>
        </div>

        {/* Bar chart */}
        <div className="flex items-end gap-1.5 h-20">
          {barHeights.map((h, i) => {
            const isLast = i === barHeights.length - 1;
            return (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full relative">
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: `${(h / 100) * 80}px` }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.6, ease }}
                    className={`w-full rounded-sm ${
                      isLast
                        ? "bg-gradient-to-t from-indigo-600 to-purple-500"
                        : "bg-gradient-to-t from-gray-300 to-gray-200"
                    }`}
                    style={{ minHeight: 0 }}
                  />
                  {/* Glow on last bar */}
                  {isLast && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 }}
                      className="absolute -inset-1 bg-indigo-500/15 rounded blur-md -z-10"
                      style={{ height: `${(h / 100) * 80 + 8}px` }}
                    />
                  )}
                </div>
                <span className="text-[8px] text-gray-400 font-medium">
                  {days[i]}
                </span>
              </div>
            );
          })}
        </div>

        {/* Metric cards */}
        <div className="grid grid-cols-3 gap-2 mt-3">
          {[
            { label: "Usuarios", value: "1,234", trend: "+12%" },
            { label: "Conversi\u00f3n", value: "4.2%", trend: "+0.8%" },
            { label: "Ingresos", value: "$8,450", trend: "+24%" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/70 backdrop-blur-sm rounded-lg p-2 border border-gray-200/40 text-center"
            >
              <p className="text-xs font-bold text-gray-900">{stat.value}</p>
              <p className="text-[9px] text-gray-400">{stat.label}</p>
              <p className="text-[8px] text-emerald-500 font-semibold mt-0.5">
                {stat.trend}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function FeatureVisual({ type }: { type: string }) {
  switch (type) {
    case "editor":
      return <EditorVisual />;
    case "phone":
      return <PhoneVisual />;
    case "push":
      return <PushVisual />;
    case "engagement":
      return <EngagementVisual />;
    case "sync":
      return <SyncVisual />;
    case "analytics":
      return <AnalyticsVisual />;
    default:
      return null;
  }
}

/* ------------------------------------------------------------------ */
/*  MAIN FEATURES COMPONENT                                            */
/* ------------------------------------------------------------------ */

export function Features() {
  return (
    <section id="funcionalidades" className="relative py-32 bg-white overflow-hidden">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #d4d4d8 0.5px, transparent 0.5px)",
          backgroundSize: "24px 24px",
        }}
      />
      {/* Radial fade so the grid fades at edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent_40%,white_100%)]" />

      <div className="relative max-w-[1280px] mx-auto px-6">
        {/* Section header */}
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-sm text-gray-500 text-sm uppercase tracking-widest font-medium border border-gray-200/60 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
            Funcionalidades
          </span>
          <h2 className="mt-6 font-display text-4xl md:text-5xl font-bold tracking-tight text-gray-950">
            Todo lo que necesit\u00e1s
            <br />
            para vender desde tu app
          </h2>
          <p className="mt-6 text-lg text-gray-500 leading-relaxed">
            Herramientas poderosas para crear, personalizar y hacer crecer tu
            canal de ventas m\u00f3vil.
          </p>
        </AnimatedSection>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <AnimatedSection key={feature.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.35, ease }}
                className="group relative h-full rounded-2xl overflow-hidden"
              >
                {/* Gradient border layer */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 opacity-100 group-hover:from-gray-300 group-hover:via-indigo-200 group-hover:to-purple-200 transition-all duration-700" />

                {/* Card inner */}
                <div className="relative m-[1px] h-[calc(100%-2px)] bg-white rounded-[15px] p-6 transition-shadow duration-500 group-hover:shadow-xl group-hover:shadow-gray-200/80">
                  {/* Hover glow */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-indigo-100/0 rounded-full blur-3xl transition-all duration-700 group-hover:bg-indigo-100/40" />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-5">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center shadow-lg shadow-gray-900/20 group-hover:scale-110 group-hover:shadow-gray-900/30 transition-all duration-500">
                        <feature.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    {/* Text */}
                    <h3 className="text-lg font-bold text-gray-950 mb-2 font-display">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-5">
                      {feature.description}
                    </p>

                    {/* Visual */}
                    <FeatureVisual type={feature.visual} />
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
