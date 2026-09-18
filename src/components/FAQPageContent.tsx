"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ChevronRight } from "lucide-react";

const categories = [
  {
    name: "Qué es Saru Apps",
    slug: "que-es",
    faqs: [
      {
        q: "¿Qué es Saru Apps?",
        a: "Saru Apps es una plataforma no-code para crear apps móviles nativas exclusivamente para tiendas Tiendanube. Te permite diseñar, personalizar y publicar tu propia app en App Store y Google Play sin escribir una línea de código.",
      },
      {
        q: "¿Cuál es la diferencia entre una web mobile-friendly y una app nativa?",
        a: "Una web mobile-friendly es simplemente tu tienda adaptada a pantallas chicas. Una app nativa se instala en el celular del cliente, aparece en su pantalla de inicio, permite enviar notificaciones push y ofrece una experiencia mucho más rápida y fluida. Los dos canales se complementan: la web atrae tráfico nuevo y la app fideliza a tus mejores clientes.",
      },
      {
        q: "¿La app es un webview o es nativa de verdad?",
        a: "Es una app nativa real, no un webview empaquetado. Esto significa rendimiento superior, animaciones fluidas y acceso a funcionalidades del dispositivo como notificaciones push. La experiencia para tus clientes es indistinguible de las apps que usan todos los días.",
      },
      {
        q: "¿La app lleva branding de Saru Apps?",
        a: "No. Saru Apps es una solución white-label. Tu app lleva tu marca, tu logo, tus colores. Tus clientes nunca ven la marca Saru Apps.",
      },
    ],
  },
  {
    name: "Cómo funciona",
    slug: "como-funciona",
    faqs: [
      {
        q: "¿Necesito saber programar?",
        a: "No, para nada. La plataforma tiene un editor visual drag & drop que te permite diseñar cada pantalla de tu app arrastrando componentes: banners, grillas de productos, carruseles, timers y más. Es tan fácil como armar una presentación.",
      },
      {
        q: "¿Cuánto tiempo tarda en estar lista mi app?",
        a: "Podés tener tu app diseñada en cuestión de horas. La conexión con Tiendanube es instantánea. La publicación en las tiendas puede demorar entre 3 y 7 días hábiles por los procesos de revisión de Apple y Google.",
      },
      {
        q: "¿Saru Apps se encarga de publicar mi app?",
        a: "Sí. Nosotros hacemos todo el proceso de envío y publicación tanto en App Store como en Google Play. Vos te enfocás en tu negocio.",
      },
      {
        q: "¿Qué necesito antes de lanzar mi app?",
        a: "Solo necesitás una tienda activa en Tiendanube y cuentas de desarrollador en Apple ($99 USD/año) y Google Play ($25 USD, pago único). Si no las tenés, te ayudamos a crearlas.",
      },
      {
        q: "¿Puedo personalizar el diseño de mi app?",
        a: "Absolutamente. Podés personalizar colores, tipografías, layouts, banners y la estructura completa de cada pantalla. Tu app va a reflejar la identidad visual de tu marca al 100%.",
      },
    ],
  },
  {
    name: "Integración con Tiendanube",
    slug: "tiendanube",
    faqs: [
      {
        q: "¿La app funciona solo con Tiendanube?",
        a: "Sí, actualmente Saru Apps está diseñado exclusivamente para tiendas Tiendanube. Nos especializamos en esta plataforma para ofrecer la mejor integración posible.",
      },
      {
        q: "¿Cómo se conecta con mi tienda?",
        a: "La conexión es instantánea. Instalás Saru Apps desde el panel de Tiendanube y en un clic tus productos, categorías, precios y stock se importan automáticamente. Todo se mantiene sincronizado en tiempo real.",
      },
      {
        q: "¿Los pedidos desde la app aparecen en mi panel de Tiendanube?",
        a: "Sí. Todos los pedidos se sincronizan automáticamente con tu panel de Tiendanube. Los gestionás exactamente igual que los pedidos de tu tienda web. No hay duplicación ni complejidad adicional.",
      },
      {
        q: "¿Tengo que gestionar la app por separado?",
        a: "No. Saru Apps funciona como una extensión de tu tienda Tiendanube. Cada cambio que hacés en tus productos, precios o stock se refleja automáticamente en la app.",
      },
      {
        q: "¿La app usa el checkout de Tiendanube?",
        a: "Sí. Tu app usa el checkout nativo de Tiendanube, así que los medios de pago, cupones y configuración de envío que ya tenés funcionan exactamente igual.",
      },
    ],
  },
  {
    name: "Funcionalidades",
    slug: "funcionalidades",
    faqs: [
      {
        q: "¿Qué tipo de notificaciones push puedo enviar?",
        a: "Podés enviar notificaciones push segmentadas: ofertas flash, recordatorios de carrito abandonado, nuevos productos, campañas programadas y más. Cada plan incluye un volumen diferente de envíos mensuales.",
      },
      {
        q: "¿Qué herramientas de engagement incluye?",
        a: "Incluye notificaciones de carrito abandonado, alertas de back in stock, bienvenida automática, badges de producto, drops exclusivos con cuenta regresiva, repetir pedido con un tap y más. Las herramientas disponibles varían según el plan.",
      },
      {
        q: "¿La app tiene analytics?",
        a: "Sí. Tenés acceso a métricas de usuarios activos, conversiones, ingresos generados por push y más datos clave para tomar decisiones.",
      },
      {
        q: "¿Puedo enviar cupones exclusivos para la app?",
        a: "Sí. Podés crear cupones que solo funcionan dentro de la app para incentivar las descargas y compras desde el canal móvil. Disponible desde el plan Growth.",
      },
      {
        q: "¿Soporta múltiples idiomas?",
        a: "Sí, la funcionalidad de multidioma está disponible en el plan Scale y superiores.",
      },
    ],
  },
  {
    name: "Precios y planes",
    slug: "precios",
    faqs: [
      {
        q: "¿Cuánto cuesta Saru Apps?",
        a: "Tenemos 4 planes: Starter (USD $49/mes), Growth (USD $149/mes), Scale (USD $349/mes) y Enterprise (precio personalizado). Todos tienen un 20% de descuento en el plan anual. Podés ver el detalle en nuestra sección de precios.",
      },
      {
        q: "¿Puedo probar gratis?",
        a: "Sí. Podés crear tu cuenta gratis, diseñar tu app completa y ver una preview de cómo se vería. Solo pagás cuando decidís publicarla.",
      },
      {
        q: "¿Hay costos de setup o configuración?",
        a: "No. No hay costo de setup. Solo pagás el plan mensual o anual que elijas.",
      },
      {
        q: "¿Hay costos adicionales?",
        a: "Saru Apps no cobra costos adicionales. Los únicos costos extra son las cuentas de desarrollador de Apple ($99 USD/año) y Google Play ($25 USD, pago único), que son requeridas por las tiendas de apps.",
      },
      {
        q: "¿Cobran comisión por venta o por notificación?",
        a: "No. No tomamos comisión sobre tus ventas. Cada plan incluye un volumen de notificaciones push mensuales sin costo adicional.",
      },
      {
        q: "¿Puedo cambiar de plan o cancelar?",
        a: "Sí, podés cambiar de plan o cancelar cuando quieras. No hay contratos a largo plazo ni permanencia mínima.",
      },
      {
        q: "¿Qué plan me conviene?",
        a: "Starter es ideal para lanzar tu app nativa con las funcionalidades esenciales. Growth es para marcas que quieren herramientas de venta avanzadas como carrito abandonado, back in stock y white label. Scale es para marcas en expansión que necesitan push segmentados, drops exclusivos y multiidioma. Enterprise es para grandes marcas con necesidades específicas. Si tenés dudas, agendá una demo y te asesoramos.",
      },
    ],
  },
  {
    name: "Lanzamiento y soporte",
    slug: "soporte",
    faqs: [
      {
        q: "¿Saru Apps puede encargarse de todo el lanzamiento?",
        a: "Sí. Nuestro equipo te acompaña desde la configuración inicial hasta la publicación en las tiendas. Podés agendar una demo y te guiamos paso a paso.",
      },
      {
        q: "¿Qué tipo de soporte ofrecen?",
        a: "Ofrecemos soporte por email en todos los planes. El plan Growth incluye soporte por chat, y el plan Scale incluye soporte por videollamada. Enterprise tiene un account manager dedicado.",
      },
      {
        q: "¿Cómo puedo promocionar mi app para que mis clientes la descarguen?",
        a: "Te proporcionamos herramientas de marketing como códigos QR, links de descarga y una página de instalación compartible. También podés crear campañas en Meta y Google para impulsar las descargas.",
      },
      {
        q: "¿Qué pasa si ya tengo una app con otro proveedor?",
        a: "Podés migrar a Saru Apps. Tu app se publica en tus propias cuentas de desarrollador de Apple y Google, así que si algún día necesitás cambiar de proveedor, no perdés tus descargas.",
      },
      {
        q: "¿Qué pasa si necesito una funcionalidad que no tienen?",
        a: "Contactanos. Todas las funcionalidades que desarrollamos nacen de pedidos de nuestros clientes. Si es algo que beneficia a todos, lo incorporamos sin costo. Si es algo muy específico, lo evaluamos como proyecto custom.",
      },
    ],
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-[15px] font-medium text-gray-900 group-hover:text-gray-600 transition-colors duration-300 pr-8">
          {question}
        </span>
        <span className="shrink-0 w-7 h-7 rounded-full bg-gray-100 group-hover:bg-gray-200 flex items-center justify-center transition-all duration-300">
          {isOpen ? (
            <Minus className="w-3.5 h-3.5 text-gray-600" />
          ) : (
            <Plus className="w-3.5 h-3.5 text-gray-600" />
          )}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-gray-500 text-sm leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQPageContent() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
      {/* Sidebar navigation */}
      <nav className="lg:col-span-3">
        <div className="lg:sticky lg:top-28 space-y-1">
          {categories.map((cat, i) => (
            <button
              key={cat.slug}
              onClick={() => {
                setActiveCategory(i);
                setOpenIndex(0);
              }}
              className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === i
                  ? "bg-gray-950 text-white"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              {cat.name}
              <ChevronRight
                className={`w-4 h-4 transition-colors ${
                  activeCategory === i ? "text-white/60" : "text-gray-300"
                }`}
              />
            </button>
          ))}
        </div>
      </nav>

      {/* FAQ list */}
      <div className="lg:col-span-9">
        <div className="bg-white rounded-2xl border border-gray-100 px-6 md:px-8">
          {categories[activeCategory].faqs.map((faq, i) => (
            <FAQItem
              key={`${activeCategory}-${i}`}
              question={faq.q}
              answer={faq.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
