import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'morphologyBlock',
  title: 'Morphology Block',
  type: 'object',
  fields: [
    defineField({
      type: 'text',
      name: 'title',
      title: 'Title',
    }),
    defineField({
      type: 'object',
      name: 'leftApple',
      title: 'Left Apple',
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
    }),
    defineField({
      type: 'object',
      name: 'centerApple',
      title: 'Center Apple',
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
    }),
    defineField({
      type: 'object',
      name: 'rightApple',
      title: 'Right Apple',
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
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title,
      }
    },
  },
})
