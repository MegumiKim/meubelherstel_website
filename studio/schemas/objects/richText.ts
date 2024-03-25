import {TextIcon} from '@sanity/icons'
// import link from './link'

export default {
  name: 'richText',
  type: 'object',
  title: 'Rich Text',
  icon: TextIcon,
  fields: [
    {
      name: 'text',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'Quote', value: 'blockquote'},
          ],
          marks: {
            // annotations: [link],
            decorators: [
              //removed decorations
            ],
          },
        },
      ],
    },
  ],
}
