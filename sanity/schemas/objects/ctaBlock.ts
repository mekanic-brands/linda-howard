import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'ctaBlock',
  title: 'CTA Block',
  type: 'object',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'buttonLink',
      title: 'Button Link',
      type: 'object',
      fields: [
        {
          name: 'href',
          title: 'Href',
          type: 'string',
        },
        {
          name: 'label',
          title: 'Label',
          type: 'string',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      buttonLink: 'buttonLink',
      subtitle: 'subtitle',
    },
    prepare({ title, buttonLink, subtitle }) {
      return {
        title,
        subtitle,
        buttonLink,
      }
    },
  },
})
