import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'twoColContentBlock',
  title: 'Two Col Content Block',
  type: 'object',
  fields: [
    defineField({
      name: 'contentLeft',
      title: 'Content Left',
      type: 'array',
      of: [
        defineArrayMember({
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'H5', value: 'h5' },
            {title: 'DropCap', value: 'blockquote'}
          ],
          type: 'block',
        }),
      ],
    }),
    defineField({
      name: 'contentRight',
      title: 'Content Right',
      type: 'array',
      of: [
        defineArrayMember({
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'H5', value: 'h5' },
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
        title: 'Two Col Content Block',
      }
    },
  },
})
