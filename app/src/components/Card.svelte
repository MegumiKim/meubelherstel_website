<script lang="ts">
	import type { Project } from '$lib/queries/sanity';
	import { claim_space } from 'svelte/internal';
	import Image from './Image.svelte';
	export let project: Project;
	
	
</script>

<!-- <a
	class="outline-slate-300 relative overflow-hidden aspect-square max-h-80 sm:h-[400px]"
	href={`/work/${project.slug}`}
> -->

<a href={`/work/${project.slug}`} class="project-card">
	{#if project.image}
		<Image data={project.image} alt={project.image.altText}/>
	{:else}
	<Image data="/placeholder.jpg" alt={project.title}/>
	{/if}
	<h3 class="opacity-100 sm:opacity-0">
		{project.title}
	</h3>
</a>

<style>


.project-card{
	position: relative;
	overflow: hidden;
aspect-ratio: 1;

}

	h3{
		width: 100%;
		position: absolute;
		bottom: 0;
		padding: 1em 2em;
		min-height: 30%;
		text-align: center;
		background-color:rgb(255, 255, 255, .75);
		font-size:2rem;
		font-weight: bold;
		margin: auto;
		transition: opacity .5s;
	}

	a:hover > h3 {
	opacity: 1;
	}
</style>
