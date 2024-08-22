import groq from 'groq';
import { image } from './image.js';
import { contentBlocks } from './contentBlocks.ts';

//Query for project fields
export const work = groq`
  _id,
  _type,
  "slug": slug.current,
  title,
  projectCategory,
  "mainImage": gallery.images[0]{${image}},
`;

export const workBySlug = groq`
*[_type == "work" && slug.current == $slug][0]{
  date,
  location,
  description,
  "gallery": gallery.images[]{${image}},
  ${work}
  ${contentBlocks}
}
`;

// Pagination
const limit = 10; // Number of items per page
const page = 1; // Current page number (1-indexed)
const offset = (page - 1) * limit; // Offset for current page

// Query for fetching projects with pagination
export const worksQueryWithPagination = groq`
*[_type == "work"] | order(_updatedAt desc) [${offset}...${offset + limit}] {
  ${work}
}
`;
