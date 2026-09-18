import { defineType, defineField } from "sanity";

export const howItWorksStepType = defineType({
  name: "howItWorksStep",
  title: "Paso (Como funciona)",
  type: "document",
  fields: [
    defineField({
      name: "number",
      title: "Numero (01, 02, etc.)",
      type: "string",
    }),
    defineField({
      name: "title",
      title: "Titulo",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "description",
      title: "Descripcion",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "detail",
      title: "Detalle / badge",
      type: "string",
    }),
    defineField({
      name: "order",
      title: "Orden",
      type: "number",
    }),
  ],
  orderings: [
    {
      title: "Orden",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", number: "number" },
    prepare: ({ title, number }) => ({
      title: `${number || "?"} - ${title || "Paso"}`,
    }),
  },
});
