import { defineType, defineField } from "sanity";

export const ctaType = defineType({
  name: "cta",
  title: "CTA final",
  type: "document",
  fields: [
    defineField({
      name: "headline",
      title: "Titulo",
      type: "string",
    }),
    defineField({
      name: "subtitle",
      title: "Subtitulo",
      type: "text",
      rows: 2,
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
    select: { title: "headline" },
    prepare: ({ title }) => ({ title: title || "CTA" }),
  },
});
