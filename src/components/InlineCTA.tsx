"use client";

import { AnimatedSection } from "./AnimatedSection";

export function InlineCTA({
  text = "Creá tu app gratis y publicala cuando estés listo.",
}: {
  text?: string;
}) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-6">
        <AnimatedSection className="text-center">
          <p className="text-lg text-gray-600 mb-6">{text}</p>
          <a
            href="https://app.saruapps.com/register"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-gray-950 text-white text-[15px] font-medium rounded-full transition-all duration-300 hover:bg-gray-800 hover:shadow-2xl hover:shadow-gray-950/25"
          >
            Crear mi app gratis
            <svg
              className="w-4 h-4"
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
        </AnimatedSection>
      </div>
    </section>
  );
}
