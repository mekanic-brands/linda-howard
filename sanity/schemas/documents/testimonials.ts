import { BookIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  //@ts-ignore
  icon: BookIcon,
  fields: [
     defineField({
      name: "position",
      type: "string",
      options: {
        list: [
          { title: "Left", value: "Left" },
          { title: "Right", value: "Right" },
        ],
      },
    }),
    defineField({
      type: 'array'
,     name: 'testimonialRow',
      title: 'Testimonial Row',
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
  ],
  preview: {
    select: {
      position: 'position',
    },

    prepare({ position }) {
      return {
        title: position,
      }
    },
  },
})
