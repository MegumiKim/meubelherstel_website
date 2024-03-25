import {ImageIcon} from '@sanity/icons'
import {defineType} from 'sanity'
import {PlayIcon} from '@sanity/icons'

export default defineType({
  name: 'media',
  type: 'object',
  title: 'Media',
  description: 'Upload an image or video',
  icon: ImageIcon,

  fields: [
    {
      name: 'type',
      type: 'string',
      title: 'Type',
      initialValue: 'image',
      options: {
        list: [
          {title: 'Image', value: 'image'},
          {title: 'Video', value: 'video'},
        ],
        layout: 'radio',
      },
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      hidden: ({parent}) => parent?.type !== 'image',
      options: {
        hotspot: true,
        accept: 'image/png, image/jpeg',
      },
    },
    {
      name: 'video',
      type: 'file',
      title: 'Video',
      hidden: ({parent}) => parent?.type !== 'video',
      options: {
        accept: 'video/mp4',
      },
    },

    {
      name: 'caption',
      type: 'string',
      description: 'Optional',
    },

    {
      name: 'orientation',
      type: 'string',
      title: 'Orientation',
      validation: (Rule) => Rule.required(),
      description: 'How do you want to display?',
      options: {
        list: [
          {title: 'Landscape (default)', value: 'landscape'},
          {title: 'Portrait', value: 'portrait'},
        ],
        layout: 'radio',
      },
    },
    {
      name: 'displaySize',
      type: 'string',
      title: 'Display Size',
      validation: (Rule) => Rule.required(),
      description: 'How large do you want to display?',
      options: {
        list: [
          {title: 'Normal (default)', value: 'normal'},
          {title: 'Large', value: 'large'},
        ],
        layout: 'radio',
      },
    },
  ],
  preview: {
    select: {
      media: 'image',
      caption: 'caption',
      altText: 'altText',
    },
    prepare({media, caption}) {
      return {
        title: caption || 'Media Asset',
        media: media || PlayIcon,
      }
    },
  },
})
