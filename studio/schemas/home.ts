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
      type: 'text',
      description: 'Tag line on the home page below the main image.',
    }),

    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'object',
      description: 'Features section on the front page below "about" section',
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
                  name: 'projectSlug',
                  title: 'Project slug',
                  type: 'string',
                  description: 'Slug of the project to link to. Example:small-roof-for-beehive',
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
