import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'videoBlock',
  title: 'Video Block',
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
      type: 'array',
      name: 'videos',
      title: 'Videos',
      of: [
        {
          type: 'object',
          fields: [
            {
              type: 'string',
              name: 'videoID',
              title: 'Video ID',
            },
          ],
        },
      ],
    }),
    defineField({
      type: 'array',
      name: 'actions',
      title: 'Actions',
      of: [
        {
          type: 'object',
          name: 'buttonLink',
          title: 'Button Link',
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
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle,
      }
    },
  },
})
