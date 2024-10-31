import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'emailSignUpBlock',
  title: 'Email Sign Up Block',
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
      type: 'text',
    }),
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
    }),
    defineField({
      type: 'array',
      name: 'latestResources',
      title: 'Latest Resources',
      of: [
        {
          type: 'object',
          fields: [
            {
              type: 'string',
              name: 'resource',
              title: 'Resource',
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
