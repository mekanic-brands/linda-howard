import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'genericHeaderBlock',
  title: 'Hero Header Block',
  type: 'object',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
    }),
    defineField({
      type: 'string',
      name: 'subtitle',
      title: 'Subtitle',
    }),
    defineField({
      name: 'featureImage',
      title: 'Feature Image',
      description: '',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
    },
    prepare({ title }) {
      return {
        title: 'Hero Header',
        subtitle: title,
      }
    },
  },
})
