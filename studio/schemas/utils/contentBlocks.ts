// This file contains the content blocks that are used in the CMS

// A helper function to filter out the content blocks that are not required
export function getContentBlocks(exclude: string[] = []) {
  return contentBlocks.filter((block) => !exclude.includes(block.name))
}

export const contentBlocks = [
  {
    name: 'richText',
    type: 'richText',
  },
  {
    name: 'quote',
    type: 'quote',
  },
  {
    name: 'imageObject',
    type: 'imageObject',
  },
]
