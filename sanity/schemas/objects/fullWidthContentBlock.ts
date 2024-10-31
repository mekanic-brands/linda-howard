import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'fullWidthContentBlock',
  title: 'Full Width Content Block',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'array',
      of: [
        defineArrayMember({
          styles: [
            {title: 'Normal', value: 'normal'},
          ],
          type: 'block',
        }),
      ],
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        defineArrayMember({
          styles: [
            { title: 'Normal', value: 'normal' },
            {title: 'DropCap', value: 'blockquote'}
          ],
          type: 'block',
        }),
      ],
    }),
  ],
  
  preview: {
    prepare({}) {
      return {
        title: 'Full Width Content Block',
      }
    },
  },
})
