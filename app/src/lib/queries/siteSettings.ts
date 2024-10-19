import groq from 'groq';
import { image } from './image.js';

export const siteSettingsQuery = groq`
*[_type == "site-settings"]{
    title,
    description,
    'image':image.${image}, 
    orgNumber, 
    phone,
    address,
    email,
    instagram,
}`;
