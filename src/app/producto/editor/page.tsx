import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import {
  MousePointerClick,
  Image,
  Video,
  LayoutGrid,
  Circle,
  Tag,
  Timer,
  Minus,
  Pointer,
  Code,
  Eye,
  Layers,
  ArrowLeft,
} from "lucide-react";

export const metadata = {
  title: "Editor Drag & Drop — Saru Apps",
  description:
    "Disena cada pantalla de tu app arrastrando componentes visuales. Banner, carrusel, grillas, countdown y mas. Sin codigo, sin limites.",
};

const blocks = [
  {
    icon: Image,
    title: "Banner personalizado",
    description: "Imagenes a pantalla completa con texto, botones y enlaces a productos o colecciones.",
  },
  {
    icon: Video,
    title: "Video banner",
    description: "Reproduce videos de YouTube o archivos propios como hero de la pantalla.",
  },
  {
    icon: LayoutGrid,
    title: "Carrusel de productos",
    description: "Slider horizontal con productos destacados, ofertas o novedades.",
  },
  {
    icon: LayoutGrid,
    title: "Grilla de productos",
    description: "Muestra productos en formato grilla de 2 o 3 columnas con imagen, precio y nombre.",
  },
  {
    icon: Circle,
    title: "Colecciones en circulo",
    description: "Categorias o colecciones en formato circular, ideal para navegacion rapida.",
  },
  {
    icon: Tag,
    title: "Categorias",
    description: "Lista visual de categorias con imagen de portada y acceso directo al catalogo.",
  },
  {
    icon: Timer,
    title: "Timer / Countdown",
    description: "Cuenta regresiva para ofertas flash, lanzamientos o eventos especiales.",
  },
  {
    icon: Minus,
    title: "Separadores",
    description: "Espaciado visual entre secciones. Personaliza grosor, color y margen.",
  },
  {
    icon: Pointer,
    title: "Botones CTA",
    description: "Botones de accion que enlazan a productos, colecciones, WhatsApp o URLs externas.",
  },
];

const benefits = [
  {
    icon: Code,
    title: "Sin codigo",
    description:
      "No necesitas saber programar. Todo se configura visualmente desde el panel.",
  },
  {
    icon: Eye,
    title: "Vista previa en tiempo real",
    description:
      "Ve como queda cada cambio al instante en la previsualizacion del celular.",
  },
  {
    icon: Layers,
    title: "Componentes ilimitados",
    description:
      "Agrega todos los bloques que necesites. No hay limites de secciones por pantalla.",
  },
];

export default function EditorPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.08),transparent)]" />
        <div className="relative max-w-[1280px] mx-auto px-6 pt-40 pb-24 md:pt-48 md:pb-32">
          <div className="text-center max-w-3xl mx-auto">
            <AnimatedSection>
              <a
                href="/producto"
                className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-600 transition-colors duration-200 mb-6"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Producto
              </a>
            </AnimatedSection>

            <AnimatedSection delay={0.05}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 text-gray-600 text-[13px] font-medium border border-gray-200/60 mb-8">
                <MousePointerClick className="w-3.5 h-3.5" />
                Editor Drag & Drop
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.08] tracking-[-0.03em] font-bold text-gray-950">
                Disena tu app
                <br />
                arrastrando componentes
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="mt-6 md:mt-8 text-base md:text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
                Editor visual para armar cada pantalla de tu app. Arrastra
                bloques, personaliza estilos y ve el resultado en tiempo real.
                Sin escribir una linea de codigo.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Editor Visual Mock-up */}
      <section className="pb-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <AnimatedSection>
            <div className="relative rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-gray-200/60 overflow-hidden">
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 bg-gray-50/60">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-300" />
                  <div className="w-3 h-3 rounded-full bg-yellow-300" />
                  <div className="w-3 h-3 rounded-full bg-green-300" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-12 py-1 rounded-md bg-gray-100 text-xs text-gray-400 font-mono">
                    app.saruapps.com/editor
                  </div>
                </div>
              </div>

              {/* Editor UI */}
              <div className="p-6 md:p-8 bg-gradient-to-b from-gray-50 to-white">
                <div className="flex gap-6">
                  {/* Left Sidebar - Components */}
                  <div className="w-48 bg-white rounded-xl border border-gray-100 p-4 space-y-1.5 shrink-0 hidden lg:block">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-7 h-7 rounded-lg bg-gray-950 flex items-center justify-center">
                        <MousePointerClick className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span className="text-sm font-semibold text-gray-900">
                        Componentes
                      </span>
                    </div>
                    {[
                      "Banner Hero",
                      "Grilla 2x2",
                      "Carrusel",
                      "Countdown",
                      "CTA",
                      "Video",
                      "Categorias",
                    ].map((item, i) => (
                      <div
                        key={item}
                        className={`flex items-center gap-2 px-2.5 py-2 rounded-lg text-[12px] font-medium cursor-grab transition-colors ${
                          i === 0
                            ? "bg-gray-950 text-white"
                            : "bg-white text-gray-600 border border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <span className={i === 0 ? "text-gray-400" : "text-gray-300"}>
                          :::
                        </span>
                        {item}
                      </div>
                    ))}
                  </div>

                  {/* Center - Phone Preview */}
                  <div className="flex-1 flex items-center justify-center py-4 relative min-h-[360px] md:min-h-[420px]">
                    <div className="w-[220px] md:w-[260px] bg-gray-950 rounded-[2.2rem] p-2 shadow-2xl relative z-10">
                      <div className="bg-white rounded-[1.8rem] overflow-hidden">
                        <div className="flex justify-center pt-2">
                          <div className="w-20 h-5 bg-gray-950 rounded-full" />
                        </div>
                        <div className="px-3 pb-3">
                          {/* Banner */}
                          <div className="mt-3 rounded-xl bg-gradient-to-br from-gray-900 to-gray-600 p-3.5 text-white border-2 border-dashed border-blue-400/40">
                            <p className="text-[9px] opacity-70 uppercase tracking-wider">
                              Nueva Coleccion
                            </p>
                            <p className="text-[13px] font-bold mt-0.5">
                              Hasta 40% OFF
                            </p>
                            <div className="mt-2 bg-white/20 rounded-full px-2.5 py-0.5 inline-block">
                              <span className="text-[8px] font-medium">
                                Comprar ahora
                              </span>
                            </div>
                          </div>
                          {/* Product grid */}
                          <div className="mt-2.5 grid grid-cols-2 gap-1.5">
                            {[1, 2, 3, 4].map((n) => (
                              <div key={n}>
                                <div className="aspect-square rounded-lg bg-gray-100" />
                                <div className="mt-1 w-3/4 h-1.5 rounded bg-gray-200" />
                                <div className="mt-0.5 w-1/2 h-1.5 rounded bg-gray-100" />
                              </div>
                            ))}
                          </div>
                          {/* Bottom nav */}
                          <div className="mt-3 flex justify-around py-2 border-t border-gray-100">
                            {["H", "S", "F", "M"].map((icon, i) => (
                              <span
                                key={i}
                                className={`text-[10px] font-bold ${
                                  i === 0 ? "text-gray-900" : "text-gray-300"
                                }`}
                              >
                                {icon}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Sidebar - Style Panel */}
                  <div className="w-48 space-y-3 shrink-0 hidden lg:block">
                    <div className="bg-white rounded-xl border border-gray-100 p-4">
                      <p className="text-xs font-semibold text-gray-900 mb-3">
                        Estilo
                      </p>
                      <div className="flex gap-1.5 mb-4">
                        {["#0a0a0a", "#6366f1", "#ec4899", "#f59e0b", "#10b981"].map(
                          (color) => (
                            <div
                              key={color}
                              className="w-5 h-5 rounded-full border border-gray-200"
                              style={{ backgroundColor: color }}
                            />
                          )
                        )}
                      </div>
                      <div className="space-y-2.5">
                        <div className="flex justify-between text-[11px]">
                          <span className="text-gray-400">Radio</span>
                          <span className="text-gray-600">12px</span>
                        </div>
                        <div className="flex justify-between text-[11px]">
                          <span className="text-gray-400">Padding</span>
                          <span className="text-gray-600">16px</span>
                        </div>
                        <div className="flex justify-between text-[11px]">
                          <span className="text-gray-400">Tipografia</span>
                          <span className="text-gray-600">Satoshi</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl border border-gray-100 p-4">
                      <p className="text-xs font-semibold text-gray-900 mb-2">
                        Propiedades
                      </p>
                      <div className="space-y-2.5">
                        <div className="flex justify-between text-[11px]">
                          <span className="text-gray-400">Tipo</span>
                          <span className="text-gray-600">Banner Hero</span>
                        </div>
                        <div className="flex justify-between text-[11px]">
                          <span className="text-gray-400">Enlace</span>
                          <span className="text-gray-600">Coleccion</span>
                        </div>
                        <div className="flex justify-between text-[11px]">
                          <span className="text-gray-400">Altura</span>
                          <span className="text-gray-600">Auto</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Available Blocks */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-6">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm text-gray-400 uppercase tracking-widest font-medium">
              Bloques
            </span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold tracking-tight text-gray-950">
              Bloques disponibles
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Arma cada pantalla combinando los bloques que necesites. Arrastra,
              ordena y personaliza.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {blocks.map((block, i) => (
              <AnimatedSection key={block.title} delay={i * 0.06}>
                <div className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-gray-200 hover:shadow-lg hover:shadow-gray-100/80 transition-all duration-500 h-full">
                  <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center mb-4">
                    <block.icon className="w-5 h-5 text-gray-600" />
                  </div>
                  <h3 className="text-base font-bold text-gray-950 mb-1.5 font-display">
                    {block.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {block.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <AnimatedSection key={benefit.title} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-gray-950 flex items-center justify-center mx-auto mb-5">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-950 mb-2 font-display">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">
                    {benefit.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
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
                  <MousePointerClick className="w-7 h-7 text-white" />
                </div>
                <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-white">
                  Empieza a disenar tu app
                </h2>
                <p className="mt-6 text-lg text-white/70 max-w-lg mx-auto">
                  Abre el editor, arrastra componentes y crea la app perfecta
                  para tu tienda. Sin codigo, sin complicaciones.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="https://app.saruapps.com/register"
                    className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-950 text-base font-medium rounded-full hover:bg-gray-100 transition-all duration-300 hover:shadow-2xl hover:shadow-white/10"
                  >
                    Crear mi app gratis
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
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
