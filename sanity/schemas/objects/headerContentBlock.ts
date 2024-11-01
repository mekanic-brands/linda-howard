import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'headerContentBlock',
  title: 'Header Content Block',
  type: 'object',
  fields: [
    defineField({
      type: 'array',
      name: 'testimonials',
      title: 'Testimonials',
      of: [
        {
          type: 'object',
          fields: [
            {
              type: 'string',
              name: 'title',
              title: 'Title',
            },
            {
              type: 'text',
              name: 'quote',
              title: 'Quote',
            },
            {
              type: 'string',
              name: 'attribution',
              title: 'Attribution',
            },
          ],
        },
      ],
    }),
    defineField({
      type: 'image',
      name: 'bookCover',
      title: 'Book Cover',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Header Content Block',
      }
    },
  },
})
