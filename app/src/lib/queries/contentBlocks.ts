import groq from 'groq';
import { image, video } from './assets.js';

export const contentBlocks = groq`
'contentBlocks': contentBlocks[]{
  _type == 'imageObject' => {
    'type': _type,
   'image':${image}
  },
  _type == 'video' => {
    ${video}
    'controls': true,
    'loop': false,
    'muted': true  
  },
  _type == 'richText' => {
    'type': _type,
    'text': text
  },
  _type == 'quote' => {
    'type': _type,
    'title': title,
    'byline': byline
  },
  _type == 'gallery' => {
    'type': _type,
    images[]{
      ${image}
    },
    'display':display
  },
}
`;
