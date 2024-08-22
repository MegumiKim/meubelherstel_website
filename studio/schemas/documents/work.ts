import {defineType, defineField} from 'sanity'
import {getContentBlocks} from '../utils/contentBlocks.js'

//Validations of each field need to be reviewed

export default defineType({
  name: 'work',
  type: 'document',
  title: 'Work',
  groups: [
    {
      name: 'project',
      title: 'Project',
      default: true,
    },
    {
      name: 'content',
      title: 'Content',
    },
    {
      name: 'seo',
      title: 'Seo',
    },
  ],
  fieldsets: [
    // Fieldset for thumbnail
    {
      name: 'thumbnail',
      title: 'Thumbnail',
    },
  ],
  fields: [
    //
    // Project fields
    //
    defineField({
      name: 'title',
      type: 'string',
      group: 'project',
      title: 'Project Title',
      description: 'Required, max 50 characters',
      validation: (Rule) => [
        Rule.required().max(50).error('A title is required (max 50 characters)'),
      ],
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      group: 'project',
      title: 'Slug',
      description: 'creates a route to the project-specific page',
      options: {source: 'title'},
      validation: (Rule) =>
        Rule.required().error(`A slug is required to generate a page on the website`),
    }),
    defineField({
      name: 'projectCategory',
      type: 'string',
      group: 'project',
      title: 'Category',
      description: 'Project category ex: Reparatie, Remake',
    }),
    defineField({
      name: 'description',
      type: 'text',
      group: 'project',
      title: 'Description',
      description: 'Short Description of the project',
      rows: 7,
    }),
    defineField({
      name: 'location',
      type: 'string',
      group: 'project',
      title: 'Location',
      description: 'Location of the project',
    }),
    defineField({
      name: 'date',
      type: 'date',
      group: 'project',
      title: 'Date',
      description: 'Date of the project',
    }),
    {
      name: 'gallery',
      type: 'gallery',
      group: 'project',
      title: 'Image Gallery',
      description: 'Upload project images',
      options: {selectionType: 'multiple', layout: 'grid'},
    },
    // defineField({
    //   name: 'image',
    //   type: 'image',
    //   group: 'project',
    //   fieldset: 'thumbnail',
    //   description:
    //     'Main image for the project. This will be used as the thumbnail for the project page.',
    //   validation: (Rule) => [Rule.required().error('A image required')],
    // }),

    //
    // Content fields
    //

    // Flexible content blocks
    defineField({
      name: 'contentBlocks',
      type: 'array',
      group: 'content',
      title: 'Content blocks',
      description: 'Add content blocks to the project page',
      of: getContentBlocks(),
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'gallery.images[0]',
    },
    prepare({title, media}) {
      return {
        title,
        media,
      }
    },
  },
})
