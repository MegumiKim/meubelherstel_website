<script lang="ts">
	import type { Project } from '$lib/queries/sanity';
	import Image from './Image.svelte';
	export let project: Project;
	console.log(project);
	
	
</script>

<a
	class="outline-slate-300 relative overflow-hidden aspect-square max-h-80 sm:h-[400px]"
	href={`/work/${project.slug}`}
>
	{#if project.image}
	<div class="">
		<Image data={project.image} alt={project.image.altText}/>
	</div>
	{:else}
	<Image data="/placeholder.jpg" alt={project.title}/>
	{/if}
	<h3
		class="sm:hidden w-full absolute bottom-0 px-5 bg-white bg-opacity-70 font-bold my-3 text-2xl text-center"
	>
		{project.title}
	</h3>
</a>

<!-- <style>
	a:hover > h3 {
		display: block;
	}
</style> -->
