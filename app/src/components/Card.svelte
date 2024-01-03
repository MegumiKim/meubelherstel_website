<script lang="ts">
	import type { Project } from '$lib/utils/sanity';
	export let project: Project;
	// console.log(project);
	
</script>

<a class=" outline-slate-300 sm:h-[300px] relative overflow-hidden" href={`/work/${project.slug}`}>

	{#if project.image}
			<img
				class="object-cover w-full h-full align-middle rounded"
				src={(project.image.url)}
				alt="{project.title}"
			/>
	{:else}
	<img
	class="max-w-full object-cover m-auto"
	src='/tools2.jpg'
	alt="{project.title}"
/>
	{/if}
		<h3 class="sm:hidden absolute bottom-0 px-5 bg-white bg-opacity-70 font-bold my-3 text-2xl text-center">
				{project.title}
		</h3>
</a>

<style>
	a:hover > h3{
display: block;
	}
</style>