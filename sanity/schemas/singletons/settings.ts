import { CogIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: CogIcon as any,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'header',
      title: 'Header',
      type: 'object',
      fields: [
        {
          name: 'logo',
          title: 'Logo',
          description: '',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'mobileLogo',
          title: 'Mobile Logo',
          description: '',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'buttonLink',
          title: 'Primary Button',
          type: 'object',
          fields: [
            {
              name: 'href',
              title: 'Link',
              type: 'string',
            },
            {
              name: 'label',
              title: 'Label',
              type: 'string',
            },
          ],
        },
        {
          name: 'secondaryButtonLink',
          title: 'Secondary Button',
          type: 'object',
          fields: [
            {
              name: 'href',
              title: 'Link',
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
    defineField({
      name: 'ogImage',
      title: 'Og Image',
      description: '',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'mediaContact',
      title: 'Media Contact',
      description: '',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
        },
        {
          name: 'email',
          title: 'Email',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'socialNetworks',
      title: 'Social Networks',
      description: 'List of social network icons and links',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'items',
          title: 'Items',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'icon',
                  title: 'Icon',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                },
                {
                  name: 'link',
                  title: 'Link',
                  type: 'string',
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'robots',
      title: 'robots',
      description: 'Robots.txt',
      type: 'text',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Settings',
      }
    },
  },
})
