<script lang="ts">
	// import { urlFor } from '$lib/utils/image';
	import type { Project } from '$lib/utils/sanity';

	export let project: Project;
	// console.log(project);
	
</script>

<a class=" outline-slate-300 hover:opacity-50 " href={`/work/${project.slug}`}>

	{#if project.image}

		<img
			class="max-w-full object-cover m-auto"
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


		<h3 class="font-bold my-3 text-xl text-center">
				{project.title}
		</h3>

</a>
