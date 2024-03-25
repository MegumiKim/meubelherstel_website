import about from '../about.js'
import home from '../home.ts'
import contact from '../contact.ts'
import projectImage from '../projectImage.ts'
import gallery from '../objects/gallery.ts'
import media from '../objects/media.ts'
import quote from '../objects/quote.ts'
import richText from '../objects/richText.ts'
import project from '../project.ts'
import work from '../documents/work.ts'
import blockContent from '../blockContent.ts'
import image from '../objects/image.js'

export const schemaTypes = [
  //
  // Objects
  //
  gallery,
  quote,
  richText,
  media,
  projectImage,
  blockContent,
  image,
  //
  // Documents
  project,
  work,
  about,
  home,
  contact,
]
