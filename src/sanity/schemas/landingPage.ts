import { defineType, defineField } from "sanity";

export const landingPageType = defineType({
  name: "landingPage",
  title: "Landing Page",
  type: "document",
  fields: [
    defineField({
      name: "featuresTitle",
      title: "Funcionalidades - Titulo",
      type: "string",
    }),
    defineField({
      name: "featuresSubtitle",
      title: "Funcionalidades - Subtitulo",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "howItWorksTitle",
      title: "Como funciona - Titulo",
      type: "string",
    }),
    defineField({
      name: "howItWorksSubtitle",
      title: "Como funciona - Subtitulo",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "pricingTitle",
      title: "Precios - Titulo",
      type: "string",
    }),
    defineField({
      name: "pricingSubtitle",
      title: "Precios - Subtitulo",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "faqTitle",
      title: "FAQ - Titulo",
      type: "string",
    }),
    defineField({
      name: "inlineCta1",
      title: "Inline CTA 1 (entre Features y HowItWorks)",
      type: "string",
    }),
    defineField({
      name: "inlineCta2",
      title: "Inline CTA 2 (entre HowItWorks y Pricing)",
      type: "string",
    }),
  ],
  preview: {
    prepare: () => ({ title: "Landing Page" }),
  },
});
