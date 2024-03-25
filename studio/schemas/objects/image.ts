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
  preview: {
    select: {
      media: 'image',
      alt: 'altText',
    },
    prepare({media, alt}) {
      return {
        media,
        alt,
      }
    },
  },
})
