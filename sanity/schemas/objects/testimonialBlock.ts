import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'testimonialBlock',
  title: 'Testimonial Block',
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
      type: 'array',
      name: 'testimonialList',
      title: 'Testimonial List',
      of: [{ type: 'reference', to: [{ type: 'testimonials' }] }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },

    prepare() {
      return {
        title: 'Testimonial Block',
      }
    },
  },
})
