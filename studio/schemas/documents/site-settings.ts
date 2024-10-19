import {CogIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'site-settings',
  title: 'Site Settings',
  type: 'document',
  icon: CogIcon,
  preview: {
    select: {
      title: 'title',
    },
    prepare() {
      return {
        // TODO: Hack for showing static value
        title: 'Site Settings',
      }
    },
  },

  groups: [
    {
      name: 'site',
      title: 'Site',
      default: true,
    },
    {
      name: 'seo',
      title: 'SEO',
    },
    {
      name: 'header',
      title: 'Header',
    },
    {
      name: 'footer',
      title: 'Footer',
    },
  ],

  fields: [
    defineField({
      name: 'title',
      type: 'string',
      group: 'site',
      title: 'Site Title',
      description: 'Title of the site which appears in the browser tab.',
      initialValue: 'Meubelherstel',
      validation: (rule) => rule.max(20).error('Site title cannot exceed 20 characters'),
    }),
    defineField({
      name: 'description',
      type: 'text',
      group: 'seo',
      title: 'Description',
      description: 'Description of the page for search engines. Max 160 characters.',
      rows: 3,
      validation: (rule) =>
        rule.required().max(160).error('Site description cannot exceed 160 characters'),
    }),
    defineField({
      name: 'image',
      type: 'imageObject',
      group: 'seo',
      title: 'Thumbnail image',
      description: 'Thumbnail image that appears when sharing the website link',
      validation: (rule) => rule.required(),
    }),

    //
    // Header
    //
    // defineField({
    //   name: 'navHeader',
    //   type: 'array',
    //   group: 'header',
    //   title: 'Navigation',
    //   of: [{type: 'navigationItem'}],
    // }),

    //
    // Footer
    //
    // defineField({
    //   name: 'copyright',
    //   type: 'string',
    //   group: 'footer',
    //   title: 'Footer Copyright',
    //   description: 'Copy right text to display in the footer',
    // }),
    defineField({
      name: 'orgNumber',
      type: 'string',
      group: 'footer',
      title: 'Oganization number',
      description: 'Organization number to display in the footer',
    }),
    defineField({
      name: 'phone',
      type: 'string',
      group: 'footer',
      title: 'Phone number',
      // description: 'Phone number to display in the footer',
    }),
    defineField({
      name: 'address',
      type: 'string',
      group: 'footer',
      title: 'Address',
      // description: 'Address of the clinic to display in the footer',
    }),
    defineField({
      name: 'email',
      type: 'email',
      group: 'footer',
      title: 'email',
    }),
    defineField({
      name: 'instagram',
      type: 'url',
      group: 'footer',
      title: 'Social Media URL',
      description: 'URL to the Instagram page',
    }),
  ],
})
