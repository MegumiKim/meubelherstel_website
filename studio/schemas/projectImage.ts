import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projectImage',
  title: 'Image',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
        accept: 'image/*',
      },
    }),
    defineField({
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: 'Describe the image.',
    }),
  ],
  preview: {
    select: {
      media: 'image',
      alt: 'alt',
    },
    prepare({media, alt}) {
      return {
        media,
        alt,
      }
    },
  },
})
