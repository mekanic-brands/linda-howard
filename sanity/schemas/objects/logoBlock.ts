import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'logoBlock',
  title: 'Logo Block',
  type: 'object',
  fields: [
    defineField({
      type: 'string',
      name: 'content',
      title: 'Content',
    }),
    defineField({
      type: 'array',
      name: 'logos',
      title: 'Logos',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
            },
            {
              name: 'linkUrl',
              title: 'Link URL',
              type: 'url',
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      content: 'content',
    },

    prepare({ content }) {
      return {
        title: content,
      }
    },
  },
})
