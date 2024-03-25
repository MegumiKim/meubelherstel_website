import groq from 'groq';
import { image } from './image.js';

export const contentBlocks = groq`
'contentBlocks': contentBlocks[]{
  _type == 'imageObject' => {
    'type': _type,
   'image':${image}
  },
  _type == 'richText' => {
    'type': _type,
    'text': text
  },
  _type == 'quote' => {
    'type': _type,
    quote,  
    by
  },

}
`;
