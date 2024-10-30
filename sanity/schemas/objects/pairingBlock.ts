import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'pairingBlock',
  title: 'Pairing Block',
  type: 'object',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
    }),
    defineField({
      type: 'text',
      name: 'subtitle',
      title: ' Subtitle',
    }),
    defineField({
      type: 'array',
      name: 'cards',
      title: 'Cards',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              type: 'string',
              name: 'label',
              title: 'Label',
            }),
            defineField({
              name: 'image',
              title: 'Image',
              description: '',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      cards: 'cards',
    },
    prepare({ title, cards }) {
      return {
        title,
        subtitle: cards ? `${cards.length} items` : 'No items',
      }
    },
  },
})
