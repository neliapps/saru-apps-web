import { defineType, defineField } from "sanity";

export const planType = defineType({
  name: "plan",
  title: "Plan de precios",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nombre del plan",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "monthlyPrice",
      title: "Precio mensual (USD). 0 = personalizado",
      type: "number",
    }),
    defineField({
      name: "currency",
      title: "Moneda",
      type: "string",
      initialValue: "USD",
    }),
    defineField({
      name: "description",
      title: "Descripcion",
      type: "string",
    }),
    defineField({
      name: "features",
      title: "Features incluidas",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "cta",
      title: "Texto del boton",
      type: "string",
    }),
    defineField({
      name: "href",
      title: "URL del boton (si es distinto al registro)",
      type: "url",
    }),
    defineField({
      name: "highlighted",
      title: "Destacado (mas popular)",
      type: "boolean",
      initialValue: false,
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
    select: { title: "name", price: "monthlyPrice", currency: "currency" },
    prepare: ({ title, price, currency }) => ({
      title: title || "Plan",
      subtitle: price ? `${currency} ${price}/mes` : "Personalizado",
    }),
  },
});
