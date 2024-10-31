import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'introBlock',
  title: 'Intro Block',
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
      name: 'sectionOutline',
      title: 'Section Outline',
      type: 'object',
      fields: [
        {
          name: 'headline',
          title: 'Headline',
          type: 'string',
        },
        {
          name: 'outlineItems',
          title: 'Outline Items',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  type: 'number',
                  name: 'outlineNumber',
                  title: 'Outline Number',
                },
                {
                  type: 'string',
                  name: 'outlineLabel',
                  title: 'Outline Label',
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'sectionContent',
      title: 'Section Content',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'sectionNumber',
              title: 'Section Number',
              type: 'number',
            },
            {
              name: 'sectionIntro',
              title: 'Section Intro',
              type: 'text',
            },
            {
              name: 'sectionExcerpt',
              title: 'Section Excerpt',
              type: 'array',
              of: [
                defineArrayMember({
                  styles: [
                    { title: 'Normal', value: 'normal' },
                  ],
                  type: 'block',
                }),
              ],
            },
            {
              name: 'sectionLabel',
              title: 'Section Label',
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
