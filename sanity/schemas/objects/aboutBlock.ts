import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'aboutBlock',
  title: 'About Block',
  type: 'object',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        defineArrayMember({
          styles: [
            { title: 'Normal', value: 'normal' },
          ],
          type: 'block',
        }),
      ],
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
