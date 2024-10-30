import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'accordionBlock',
  title: 'Accordion Block',
  type: 'object',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
    }),
    defineField({
      type: 'array',
      name: 'items',
      title: 'Items',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              type: 'string',
              name: 'title',
              title: 'Item Title',
            }),
            defineField({
              type: 'text',
              name: 'content',
              title: 'Item Content',
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      items: 'items',
    },
    prepare({ title, items }) {
      return {
        title,
        subtitle: items ? `${items.length} items` : 'No items',
      }
    },
  },
})
