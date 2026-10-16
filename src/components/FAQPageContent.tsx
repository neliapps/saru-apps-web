"use client";

import { useState } from "react";
import { AccordionItem } from "./site/precios-shared";
import { useDictionary } from "@/i18n/DictionaryProvider";
import { faqContent } from "@/content/faq";

export function FAQPageContent() {
  const { locale } = useDictionary();
  const t = faqContent[locale];
  const categories = t.categories;
  const [activeCategory, setActiveCategory] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
      {/* Category navigation: plain text, the active one underlined in blue */}
      <nav className="lg:col-span-3" aria-label={t.categoriesAriaLabel}>
        <ul className="flex flex-wrap gap-x-6 gap-y-1 lg:sticky lg:top-28 lg:flex-col lg:gap-1">
          {categories.map((cat, i) => {
            const active = activeCategory === i;
            return (
              <li key={cat.slug}>
                <button
                  type="button"
                  onClick={() => {
                    setActiveCategory(i);
                    setOpenIndex(0);
                  }}
                  aria-pressed={active}
                  className={`min-h-[44px] py-2 text-left text-[16px] tracking-[-0.01em] underline-offset-[6px] transition-colors ${
                    active
                      ? "font-bold underline decoration-accent decoration-2"
                      : "font-medium hover:underline hover:decoration-line-light hover:decoration-2"
                  }`}
                >
                  {cat.name}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* FAQ list */}
      <div className="lg:col-span-9">
        <div key={activeCategory} className="border-t border-line-light">
          {categories[activeCategory].faqs.map((faq, i) => (
            <AccordionItem
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
