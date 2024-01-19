<script lang="ts">
	import type { Project } from '$lib/utils/sanity';
	export let project: Project;
</script>

<a
	class="outline-slate-300 max-h-80 sm:h-[400px] relative overflow-hidden sm:aspect-square"
	href={`/work/${project.slug}`}
>
	{#if project.image}
		<img
			class="object-cover w-full h-full align-middle rounded"
			src={project.image.url}
			alt={project.image.caption ? project.image.caption : project.title}
		/>
	{:else}
		<img
			class="object-cover w-full h-full align-middle rounded"
			src="/placeholder.jpg"
			alt={project.title}
		/>
	{/if}
	<h3
		class="sm:hidden absolute bottom-0 px-5 bg-white bg-opacity-70 font-bold my-3 text-2xl text-center"
	>
		{project.title}
	</h3>
</a>

<style>
	a:hover > h3 {
		display: block;
	}
</style>
