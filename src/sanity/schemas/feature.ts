import { defineType, defineField } from "sanity";

export const featureType = defineType({
  name: "feature",
  title: "Feature",
  type: "document",
  fields: [
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
      name: "icon",
      title: "Icono (nombre de Lucide)",
      type: "string",
      description:
        "Nombre del icono de lucide-react: MousePointerClick, Smartphone, Bell, Heart, ShoppingBag, BarChart3",
    }),
    defineField({
      name: "visual",
      title: "Visual (tipo de ilustracion)",
      type: "string",
      options: {
        list: [
          { title: "Editor", value: "editor" },
          { title: "Phone", value: "phone" },
          { title: "Push", value: "push" },
          { title: "Engagement", value: "engagement" },
          { title: "Sync", value: "sync" },
          { title: "Analytics", value: "analytics" },
        ],
      },
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
    select: { title: "title", order: "order" },
    prepare: ({ title, order }) => ({
      title: title || "Feature",
      subtitle: order != null ? `Orden: ${order}` : undefined,
    }),
  },
});
