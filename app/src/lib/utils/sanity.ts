import type { PortableTextBlock } from '@portabletext/types';
import { createClient } from '@sanity/client';
import type { ImageAsset, Slug } from '@sanity/types';
import groq from 'groq';
import { PUBLIC_SANITY_DATASET, PUBLIC_SANITY_PROJECT_ID } from '$env/static/public';

if (!PUBLIC_SANITY_PROJECT_ID || !PUBLIC_SANITY_DATASET) {
	throw new Error('Did you forget to run sanity init --env?');
}

export const client = createClient({
	projectId: PUBLIC_SANITY_PROJECT_ID,
	dataset: PUBLIC_SANITY_DATASET,
	useCdn: false, // `false` if you want to ensure fresh data
	apiVersion: '2023-03-20' // date of setup
});

export async function getProject(slug: string): Promise<Project> {
	return await client.fetch(
		groq`*[_type == "project" && slug.current == $slug][0]{
title, 
description,
_id,
slug,
'images': images[]{
	'url': asset->url,
	'caption': caption
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
				'caption': caption
			} 
		}`
	);
}

export async function getHome() {
	return await client.fetch(groq`*[_type == "home"]{
		title,
			tagline,
			featured{
			heading,
			'mainImage':mainImage.asset -> url,
			service[]{
				title,
			'imageUrl':image.asset->url 
			}
			}}
			`);
}

export async function getAbout() {
	return await client.fetch(groq`*[_type == "about"]{
		title,
			body,
		'image':mainImage.asset -> url
	}`);
}

export async function getContact() {
	return await client.fetch(groq`*[_type == "contact"]{
		title,
			addressOne,
			addressTwo,
			email,
			phone,
			message
	}`);
}

// export interface Post {
// 	_type: 'post';
// 	_createdAt: string;
// 	title?: string;
// 	slug: Slug;
// 	excerpt?: string;
// 	mainImage?: ImageAsset;
// 	body: PortableTextBlock[];
// }
export interface Project {
	_type: 'project';
	title: string;
	slug: Slug;
	image?: { url: string };
	images?: {
		_key: string;
		url: string;
		caption: string;
	}[];
	description?: PortableTextBlock[];
}
export interface About {
	_type: 'about';
	title?: string;
	mainImage?: ImageAsset;
	body: PortableTextBlock[];
}
// export interface Home {
// 	// _type: 'post';
// 	_createdAt: string;
// 	title?: string;
// 	slug: Slug;
// 	excerpt?: string;
// 	mainImage?: ImageAsset;
// 	body: PortableTextBlock[];
// }
