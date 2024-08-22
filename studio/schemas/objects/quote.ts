import {defineField, defineType} from 'sanity'
import {RocketIcon} from '@sanity/icons'
export default defineType({
  name: 'quote',
  type: 'object',
  title: 'Quote',
  icon: RocketIcon,
  fields: [
    defineField({
      name: 'quote',
      type: 'text',
      title: 'Quote',
    }),
    defineField({
      name: 'by',
      type: 'string',
      title: 'By',
    }),
  ],
})
