import { CogIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: CogIcon as any,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'logo',
      title: 'Logo',
      description: '',
      type: 'image',
      options: {
        hotspot: true,
      },
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
      type: 'text',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      description: '',
      type: 'string',
    }),
    defineField({
      name: 'socialNetworks',
      title: 'Social Networks',
      description: 'List of social network icons and links',
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
              type: 'url',
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
