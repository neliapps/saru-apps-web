import { defineType, defineField } from "sanity";

export const heroType = defineType({
  name: "hero",
  title: "Hero",
  type: "document",
  fields: [
    defineField({
      name: "badge",
      title: "Badge (etiqueta superior)",
      type: "string",
    }),
    defineField({
      name: "headlineLine1",
      title: "Titulo - linea 1",
      type: "string",
    }),
    defineField({
      name: "headlineLine2",
      title: "Titulo - linea 2 (subrayada)",
      type: "string",
    }),
    defineField({
      name: "subtitle",
      title: "Subtitulo",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "primaryCta",
      title: "CTA principal - texto",
      type: "string",
    }),
    defineField({
      name: "primaryCtaUrl",
      title: "CTA principal - URL",
      type: "url",
    }),
    defineField({
      name: "secondaryCta",
      title: "CTA secundario - texto",
      type: "string",
    }),
    defineField({
      name: "secondaryCtaUrl",
      title: "CTA secundario - URL",
      type: "url",
    }),
  ],
  preview: {
    select: { title: "headlineLine1" },
    prepare: ({ title }) => ({ title: title || "Hero" }),
  },
});
