//code snippet: https://www.sanity.io/schemas/image-gallery-dea386ba

import {ImagesIcon} from '@sanity/icons'

export default {
  name: 'gallery',
  type: 'object',
  title: 'Gallery',
  icon: ImagesIcon,
  fields: [
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [
        {
          name: 'image',
          type: 'image',
          title: 'Image',
          options: {
            hotspot: true,
          },
        },
      ],
      options: {
        layout: 'grid',
      },
    },
  ],
  preview: {
    select: {
      images: 'images',
      image: 'images[0]',
    },
    prepare(selection) {
      const {images, image} = selection

      return {
        title: `Gallery block of ${Object.keys(images).length} items`,
        media: image,
      }
    },
  },
}
