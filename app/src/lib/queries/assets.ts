import groq from 'groq';

//Reusable queries for components
export const image = groq`
  asset->{
  url,
  _type,
  altText,
  'dimensions':metadata.dimensions
}`;

export const video = groq`
  "type": _type,
  caption,
  'url': asset->url,
`;
