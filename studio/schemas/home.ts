import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title on the home page',
    }),

    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      description: 'Main image on the home page',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'tagline',
      title: 'Tag line',
      type: 'blockContent',
      description: 'Tag line or whatever you want to say on the home page.',
    }),

    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'object',
      description: 'Featured section in home page',
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
        },
        {
          name: 'service',
          title: 'Service',
          type: 'array',
          of: [
            {
              name: 'service',
              title: 'Service',
              type: 'object',
              fields: [
                {
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                },
                {
                  name: 'image',
                  title: 'Image',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
})
