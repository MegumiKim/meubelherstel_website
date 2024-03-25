import groq from 'groq';
import { image } from './image.js';
import { contentBlocks } from './contentBlocks.js';

//Thumbnail query
export const thumbnail = groq`
'thumbnail':image.${image},
`;

//Query for project fields
export const projectFields = groq`
  _id,
  _type,
  title,
  "date": _updatedAt,
  "slug": slug.current,
  subtitle,
  ${thumbnail}
`;

export const projectQueryBySlug = groq`
*[_type == "project" && slug.current == $slug]{
  ${projectFields},
  ${contentBlocks}
}[0]
`;

// Pagination
const limit = 10; // Number of items per page
const page = 1; // Current page number (1-indexed)
const offset = (page - 1) * limit; // Offset for current page

// Query for fetching projects with pagination
export const projectQuery = groq`
*[_type == "project"] | order(_updatedAt desc) [${offset}...${offset + limit}] {
  ${projectFields}
}
`;
