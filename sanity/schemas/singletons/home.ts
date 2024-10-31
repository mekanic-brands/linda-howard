import { HomeIcon, ImageIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  icon: HomeIcon as any,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'title',
      description: 'This field is the title of the website.',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'overview',
      description: 'Used for the <meta> description tag for SEO.',
      title: 'Description',
      type: 'array',
      of: [
        // Paragraphs
        defineArrayMember({
          lists: [],
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'Url',
                  },
                ],
              },
            ],
            decorators: [
              {
                title: 'Italic',
                value: 'em',
              },
              {
                title: 'Strong',
                value: 'strong',
              },
            ],
          },
          styles: [],
          type: 'block',
        }),
      ],
      validation: (rule) => rule.max(155).required(),
    }),
    defineField({
      type: 'array',
      name: 'body',
      title: 'Body',
      description:
        "This is where you can write the page's content. Including custom blocks for more a more visual display of information.",
      of: [
        // Paragraphs
        defineArrayMember({
          type: 'block',
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'Url',
                  },
                ],
              },
            ],
          },
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
          ],
        }),
        // Custom blocks
        defineArrayMember({
          name: 'testimonialBlock',
          type: 'testimonialBlock',
        }),
        defineArrayMember({
          name: 'ctaBlock',
          type: 'ctaBlock',
        }),
        defineArrayMember({
          name: 'aboutBlock',
          type: 'aboutBlock',
        }),
        defineArrayMember({
          name: 'genericHeaderBlock',
          type: 'genericHeaderBlock',
        }),
        defineArrayMember({
          name: 'fullWidthContentBlock',
          type: 'fullWidthContentBlock',
        }),
        defineArrayMember({
          name: 'pairingBlock',
          type: 'pairingBlock',
        }),
        defineArrayMember({
          name: 'morphologyBlock',
          type: 'morphologyBlock',
        }),
        defineArrayMember({
          name: 'textBlock',
          type: 'textBlock',
        }),
        defineArrayMember({
          name: 'logoBlock',
          type: 'logoBlock',
        }),
        defineArrayMember({
          name: 'accordionBlock',
          type: 'accordionBlock',
        }),
        defineArrayMember({
          name: 'twoColContentBlock',
          type: 'twoColContentBlock',
        }),
        defineField({
          type: 'image',
          icon: ImageIcon as any,
          name: 'image',
          title: 'Image',
          options: {
            hotspot: true,
          },
          preview: {
            select: {
              imageUrl: 'asset.url',
              title: 'caption',
            },
          },
          fields: [
            defineField({
              title: 'Caption',
              name: 'caption',
              type: 'string',
            }),
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alt text',
              description:
                'Alternative text for screenreaders. Falls back on caption if not set',
            }),
          ],
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
        subtitle: 'Home',
        title,
      }
    },
  },
})
