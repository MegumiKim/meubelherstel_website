import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  groups: [
    {
      name: 'hero',
      title: 'Hero Section',
      default: true,
    },
    {
      name: 'about',
      title: 'About',
    },
    {
      name: 'featured',
      title: 'Featured',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'hero',
      description: 'Title on the home page',
    }),

    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      group: 'hero',
      description: 'Main image on the home page',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'tagline',
      title: 'Tag line',
      type: 'text',
      group: 'hero',
      description: 'Catchy tag line to capture the attention of the visitor',
      rows: 3,
    }),

    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'object',
      group: 'featured',
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
    defineField({name: 'about', title: 'About', type: 'about', group: 'about'}),
  ],
})
