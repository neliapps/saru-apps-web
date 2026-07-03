"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "¿Necesito saber programar para crear mi app?",
    answer:
      "No, para nada. Saru Apps tiene un editor visual drag & drop que te permite diseñar cada pantalla de tu app sin escribir una sola línea de código. Es tan fácil como armar una presentación.",
  },
  {
    question: "¿La app funciona solo con Tiendanube?",
    answer:
      "Sí, actualmente Saru Apps está diseñado exclusivamente para tiendas Tiendanube. Nos especializamos en esta plataforma para ofrecer la mejor integración posible: sincronización automática de productos, pedidos, stock y más.",
  },
  {
    question: "¿Cuánto tiempo tarda en estar lista mi app?",
    answer:
      "Podés tener tu app lista en cuestión de horas. La conexión con Tiendanube es instantánea, y el editor te permite diseñar tu app rápidamente. La publicación en las tiendas de apps puede demorar entre 3 y 7 días hábiles por los procesos de revisión de Apple y Google.",
  },
  {
    question: "¿Qué pasa con los pedidos realizados desde la app?",
    answer:
      "Todos los pedidos realizados desde la app se sincronizan automáticamente con tu panel de Tiendanube. Los gestionás exactamente igual que los pedidos de tu tienda web. No hay duplicación ni complejidad adicional.",
  },
  {
    question: "¿Puedo personalizar el diseño de mi app?",
    answer:
      "Absolutamente. Podés personalizar colores, tipografías, layouts, banners, y la estructura completa de cada pantalla. Tu app va a reflejar la identidad visual de tu marca al 100%.",
  },
  {
    question: "¿Cómo funcionan las notificaciones push?",
    answer:
      "Podés enviar notificaciones push segmentadas desde nuestro panel. Programá envíos, segmentá por comportamiento de compra, o automatizá notificaciones para carritos abandonados, nuevos productos y ofertas especiales.",
  },
  {
    question: "¿Puedo probar antes de pagar?",
    answer:
      "Sí, ofrecemos un período de prueba gratuito para que puedas explorar todas las funcionalidades, diseñar tu app y ver cómo funciona antes de comprometerte con un plan.",
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
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="text-base font-medium text-gray-900 group-hover:text-gray-600 transition-colors duration-300 pr-8">
          {question}
        </span>
        <span className="shrink-0 w-8 h-8 rounded-full bg-gray-100 group-hover:bg-gray-200 flex items-center justify-center transition-all duration-300">
          {isOpen ? (
            <Minus className="w-4 h-4 text-gray-600" />
          ) : (
            <Plus className="w-4 h-4 text-gray-600" />
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
            <p className="pb-6 text-gray-500 text-sm leading-relaxed max-w-2xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <AnimatedSection className="lg:col-span-4">
            <span className="text-sm text-gray-400 uppercase tracking-widest font-medium">
              FAQ
            </span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold tracking-tight text-gray-950">
              Preguntas
              <br />
              frecuentes
            </h2>
            <p className="mt-4 text-gray-500">
              ¿No encontrás tu respuesta?{" "}
              <a
                href="#"
                className="text-gray-900 underline underline-offset-4 hover:text-gray-600 transition-colors"
              >
                Contactanos
              </a>
            </p>
          </AnimatedSection>

          <AnimatedSection className="lg:col-span-8" delay={0.1}>
            <div className="bg-white rounded-2xl border border-gray-100 px-8">
              {faqs.map((faq, i) => (
                <FAQItem
                  key={i}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === i}
                  onToggle={() =>
                    setOpenIndex(openIndex === i ? null : i)
                  }
                />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
