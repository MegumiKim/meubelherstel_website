import type { PortableTextBlock } from '@portabletext/types';
import { createClient } from '@sanity/client';
import type { Slug } from '@sanity/types';
import groq from 'groq';
import { PUBLIC_SANITY_DATASET, PUBLIC_SANITY_PROJECT_ID } from '$env/static/public';
import { image } from './image';
import { worksQueryWithPagination, workBySlug } from './work';

if (!PUBLIC_SANITY_PROJECT_ID || !PUBLIC_SANITY_DATASET) {
	throw new Error('Did you forget to run sanity init --env?');
}

export const client = createClient({
	projectId: PUBLIC_SANITY_PROJECT_ID,
	dataset: PUBLIC_SANITY_DATASET,
	useCdn: false, // `false` if you want to ensure fresh data
	apiVersion: '2023-03-20' // date of setup
});

//fetch multiple works
export async function getAllWorks() {
	return await client.fetch(worksQueryWithPagination);
}
//fetch single work by slug
export async function getSingleWorkBySlug(slug: string) {
	return await client.fetch(workBySlug, {
		slug
	});
}

export async function getProject(slug: string): Promise<Project> {
	return await client.fetch(
		groq`*[_type == "project" && slug.current == $slug][0]{
			title, 
			description,
			_id,
			slug,
			location,
			date,
			category,
			'images': images[]{
				'url': asset->url,
				'altText': asset->altText
			}  
		}`,
		{
			slug
		}
	);
}

export async function getProjects(): Promise<Project[]> {
	return await client.fetch(
		groq`*[_type == "project"] {
			title,   
			'slug':slug.current,
			'image': images[0]{
				'url': asset->url,         
				'altText': asset->altText
			} 
		}`
	);
}

export async function getHome() {
	return await client.fetch(groq`*[_type == "home"]{
			title,
			tagline,
			'mainImage':mainImage.${image},
			featured{
			heading,
				service[]{
				title,
				projectSlug,
			'imageUrl':image.asset->url 
			}
			},
			${about}
			`);
}

export const about = groq`
about{
	title,
	body,
'image':mainImage.${image},
}}`;

export async function getContact(): Promise<Contact> {
	return await client.fetch(groq`*[_type == "contact"]{
		title,
		addressOne,
		addressTwo,
		email,
		phone,
		message
	}`);
}

export interface Project {
	_type: 'project';
	title: string;
	slug: Slug;
	category?: string;
	date?: string;
	location?: string;
	image?: { url: string; altText: string };
	images?: {
		_key: string;
		url: string;
		altText: string;
	}[];
	description?: PortableTextBlock[];
}
export interface About {
	// _type: 'about';
	title: string;
	body: PortableTextBlock[];
	image: string;
}

export interface Home {
	title: string;
	tagline: string;
	featured: {
		heading: string;
		mainImage: string; // Assuming mainImage is a string URL
		service: {
			title: string;
			projectSlug: string;
			imageUrl: string; // Assuming imageUrl is a string URL
		}[];
	}[];
}

export interface Contact {
	title: string;
	addressOne: string;
	addressTwo: string;
	email: string;
	phone: string;
	message: string;
}

export interface About {
	title: string;
	body: PortableTextBlock[];
	image: string;
}
