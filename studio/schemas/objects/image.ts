import {ImageIcon} from '@sanity/icons'
import {defineType} from 'sanity'

export default defineType({
  name: 'imageObject',
  type: 'image',
  title: 'Image',
  icon: ImageIcon,
  options: {
    hotspot: true,
    accept: 'image/png, image/jpeg',
  },
  fields: [
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
    },
  ],
  preview: {
    select: {
      title: 'altText',
      media: 'image',
    },
    prepare({title, media}) {
      return {
        title: title || 'Image',
        media: media || ImageIcon,
      }
    },
  },
})
