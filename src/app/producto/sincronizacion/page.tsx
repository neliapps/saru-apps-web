import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import {
  ShoppingBag,
  Package,
  FolderTree,
  ClipboardList,
  DollarSign,
  CreditCard,
  Zap,
  Shield,
  RefreshCw,
  ArrowRight,
  Check,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sincronizacion con Tiendanube — Saru Apps",
  description:
    "Productos, stock, precios y pedidos se sincronizan automaticamente con tu tienda Tiendanube. Todo siempre actualizado en tiempo real.",
};

const syncItems = [
  {
    icon: Package,
    title: "Productos",
    description:
      "Nombre, descripcion, precio, imagenes, variantes y stock. Todo se importa y se mantiene sincronizado automaticamente.",
  },
  {
    icon: FolderTree,
    title: "Categorias",
    description:
      "Tus categorias de Tiendanube se crean como secciones dentro de la app, manteniendo la misma estructura de tu tienda.",
  },
  {
    icon: ClipboardList,
    title: "Pedidos",
    description:
      "Los pedidos realizados desde la app aparecen directo en tu panel de Tiendanube, sin pasos extra ni importaciones manuales.",
  },
  {
    icon: DollarSign,
    title: "Precios y stock",
    description:
      "Cuando actualizas un precio o el stock en Tiendanube, se refleja en la app en tiempo real. Sin demoras, sin inconsistencias.",
  },
  {
    icon: CreditCard,
    title: "Checkout",
    description:
      "Tu app usa el checkout nativo de Tiendanube. Tus clientes pagan con los mismos medios de pago y la misma experiencia confiable.",
  },
];

const connectionSteps = [
  {
    number: "01",
    title: "Instala Saru Apps desde Tiendanube",
    description:
      "Accede a tu panel de Tiendanube, busca Saru Apps en la seccion de aplicaciones y hace clic en instalar.",
  },
  {
    number: "02",
    title: "Autoriza los permisos (OAuth)",
    description:
      "Tiendanube te pide autorizar los permisos necesarios. Saru Apps solo accede a lo que necesita: productos, categorias y pedidos.",
  },
  {
    number: "03",
    title: "Sincronizacion automatica en segundos",
    description:
      "En cuanto autorizas, todos tus productos, categorias y configuraciones se importan automaticamente. Listo para usar.",
  },
];

export default function SincronizacionPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.08),transparent)]" />
        <div className="relative max-w-[1280px] mx-auto px-6 pt-40 pb-24 md:pt-48 md:pb-32">
          <div className="text-center max-w-3xl mx-auto">
            <AnimatedSection>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 text-gray-600 text-[13px] font-medium border border-gray-200/60 mb-8">
                <ShoppingBag className="w-3.5 h-3.5" />
                Producto
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.08] tracking-[-0.03em] font-bold text-gray-950">
                Tu tienda y tu app,
                <br />
                siempre sincronizadas
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="mt-6 md:mt-8 text-base md:text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
                Productos, categorias, precios y pedidos se sincronizan
                automaticamente entre tu tienda Tiendanube y tu app. Edita en
                un lugar, se actualiza en todos.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://app.saruapps.com/register"
                  className="group relative inline-flex items-center gap-2 px-7 py-3.5 bg-gray-950 text-white text-[15px] font-medium rounded-full overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-gray-950/25"
                >
                  <span className="relative z-10">Conectar mi tienda</span>
                  <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-950 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </a>
                <a
                  href="https://calendly.com/saruapps/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-gray-600 text-[15px] font-medium rounded-full border border-gray-200 hover:border-gray-300 hover:text-gray-900 transition-all duration-300"
                >
                  Ver como funciona
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What syncs */}
      <section className="py-32 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-sm text-gray-400 uppercase tracking-widest font-medium">
              Sincronizacion
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight text-gray-950">
              Todo lo que se sincroniza
              <br />
              automaticamente
            </h2>
            <p className="mt-6 text-lg text-gray-500">
              No necesitas importar ni exportar nada. La integracion con
              Tiendanube se encarga de mantener todo actualizado.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {syncItems.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.08}>
                <div className="group relative h-full bg-white rounded-2xl border border-gray-100 p-6 hover:border-gray-200 hover:shadow-xl hover:shadow-gray-100/80 transition-all duration-500">
                  <div className="mb-5">
                    <div className="w-10 h-10 rounded-xl bg-gray-950 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-950 mb-2 font-display">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How connection works */}
      <section className="py-32 bg-gray-950 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-white/[0.015] rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative max-w-[1280px] mx-auto px-6">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-sm text-white/60 uppercase tracking-widest font-medium">
              Conexion
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight text-white">
              Conecta tu tienda
              <br />
              en 3 simples pasos
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-4xl mx-auto">
            {connectionSteps.map((step, i) => (
              <AnimatedSection key={step.number} delay={i * 0.12}>
                <div className="relative group">
                  <div className="relative z-10 mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-500">
                      <span className="text-xl font-bold font-display text-white/80">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold font-display mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {step.description}
                  </p>
                  {i === 2 && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white/60 bg-white/5 rounded-full px-3 py-1 mt-4">
                      <span className="w-1 h-1 rounded-full bg-green-400" />
                      Integracion en 30 segundos
                    </span>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Sync visual diagram */}
          <AnimatedSection delay={0.2}>
            <div className="max-w-lg mx-auto">
              <div className="flex items-center justify-center gap-6 md:gap-10">
                {/* Tiendanube side */}
                <div className="bg-white/[0.05] rounded-2xl border border-white/10 p-5 md:p-6 text-center flex-1 max-w-[180px]">
                  <img
                    src="/tiendanube-icon.svg"
                    alt="Tiendanube"
                    className="w-12 h-12 mx-auto mb-3 object-contain"
                  />
                  <p className="text-sm text-white font-semibold">Tiendanube</p>
                  <p className="text-[11px] text-white/40 mt-1">Tu tienda online</p>
                  <div className="mt-3 space-y-1.5">
                    {["Productos", "Categorias", "Pedidos"].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-1.5 text-[10px] text-white/50 bg-white/[0.04] rounded-md px-2 py-1"
                      >
                        <Check className="w-2.5 h-2.5 text-green-400/60" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sync arrows */}
                <div className="flex flex-col items-center gap-2 shrink-0">
                  <div className="flex items-center gap-1">
                    <span className="text-white/20 text-xl animate-pulse">&#8594;</span>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-green-400/10 border border-green-400/20">
                    <span className="text-[10px] text-green-400/80 font-medium">
                      Sync en tiempo real
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-white/20 text-xl animate-pulse">&#8592;</span>
                  </div>
                </div>

                {/* Saru Apps side */}
                <div className="bg-white/[0.05] rounded-2xl border border-white/10 p-5 md:p-6 text-center flex-1 max-w-[180px]">
                  <img
                    src="/favicon.png"
                    alt="Saru Apps"
                    className="w-12 h-12 mx-auto mb-3 object-contain"
                  />
                  <p className="text-sm text-white font-semibold">Saru Apps</p>
                  <p className="text-[11px] text-white/40 mt-1">Tu app movil</p>
                  <div className="mt-3 space-y-1.5">
                    {["Catalogo", "Secciones", "Checkout"].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-1.5 text-[10px] text-white/50 bg-white/[0.04] rounded-md px-2 py-1"
                      >
                        <Check className="w-2.5 h-2.5 text-green-400/60" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Real-time changes */}
      <section className="py-32 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <AnimatedSection>
              <span className="text-sm text-gray-400 uppercase tracking-widest font-medium">
                Tiempo real
              </span>
              <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold tracking-tight text-gray-950">
                Cambios en tiempo real
                <br />
                via webhooks
              </h2>
              <p className="mt-6 text-gray-500 leading-relaxed">
                Cuando editas un producto en Tiendanube (cambias el precio,
                actualizas el stock, modificas una descripcion), el cambio se
                refleja instantaneamente en tu app.
              </p>
              <p className="mt-4 text-gray-500 leading-relaxed">
                Usamos webhooks para recibir notificaciones de cada cambio en
                tu tienda. No hay polling, no hay demoras. La sincronizacion
                es inmediata y bidireccional.
              </p>
              <div className="mt-8 space-y-3">
                {[
                  "Actualizacion instantanea de precios",
                  "Stock siempre preciso entre ambos canales",
                  "Nuevos productos aparecen automaticamente",
                  "Pedidos unificados en un solo panel",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-gray-950 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 md:p-8">
                {/* Webhook event mockup */}
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-4 h-4 text-gray-400" />
                  <p className="text-xs font-semibold text-gray-900 uppercase tracking-wider">
                    Webhook events
                  </p>
                </div>
                <div className="space-y-3">
                  {[
                    {
                      event: "product/updated",
                      detail: "Blazer Oversize — precio actualizado",
                      time: "Hace 2s",
                      status: "synced",
                    },
                    {
                      event: "product/created",
                      detail: "Campera Puffer Negra — nuevo producto",
                      time: "Hace 1m",
                      status: "synced",
                    },
                    {
                      event: "order/created",
                      detail: "Pedido #1847 — $45.900",
                      time: "Hace 3m",
                      status: "synced",
                    },
                    {
                      event: "product/updated",
                      detail: "Hoodie Essential — stock actualizado",
                      time: "Hace 5m",
                      status: "synced",
                    },
                    {
                      event: "category/updated",
                      detail: "Nueva Temporada — categoria editada",
                      time: "Hace 8m",
                      status: "synced",
                    },
                  ].map((event, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-xl p-4 border border-gray-100 flex items-start gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-green-400 mt-1.5 shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <code className="text-[11px] font-mono text-gray-950 font-semibold">
                            {event.event}
                          </code>
                          <span className="text-[10px] text-gray-400 shrink-0">
                            {event.time}
                          </span>
                        </div>
                        <p className="text-[12px] text-gray-500 mt-0.5">
                          {event.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Security note */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto rounded-2xl border border-gray-200 bg-white p-6 md:p-8 flex flex-col md:flex-row items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center shrink-0">
                <Shield className="w-6 h-6 text-gray-500" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-950 mb-2">
                  Conexion segura via OAuth 2.0
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  La integracion usa el protocolo OAuth 2.0 de Tiendanube.
                  Nunca almacenamos tus credenciales. Vos controlas los permisos
                  y podes revocar el acceso en cualquier momento desde tu panel
                  de Tiendanube.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <AnimatedSection>
            <div className="relative overflow-hidden rounded-3xl bg-gray-950 px-8 py-20 md:px-20 md:py-28">
              <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
              </div>
              <div className="absolute inset-0 opacity-[0.03]">
                <div
                  className="h-full w-full"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
              </div>

              <div className="relative text-center max-w-2xl mx-auto">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-8">
                  <RefreshCw className="w-8 h-8 text-white" />
                </div>
                <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-white">
                  Conecta tu tienda
                  <br />
                  en segundos
                </h2>
                <p className="mt-6 text-lg text-white/70 max-w-lg mx-auto">
                  Instala Saru Apps desde Tiendanube y tus productos se
                  sincronizan automaticamente. Sin configuracion manual.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="https://app.saruapps.com/register"
                    className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-950 text-base font-medium rounded-full hover:bg-gray-100 transition-all duration-300 hover:shadow-2xl hover:shadow-white/10"
                  >
                    Empezar gratis
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                  <a
                    href="https://calendly.com/saruapps/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 text-white/70 text-base font-medium rounded-full border border-white/20 hover:border-white/40 hover:text-white transition-all duration-300"
                  >
                    Agendar una demo
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </>
  );
}
