<script lang="ts">
	// import { urlFor } from '$lib/utils/image';
	import type { Project } from '$lib/utils/sanity';

	export let project: Project;
	// console.log(project);
	
</script>

<div class="outline outline-1 outline-slate-300 max-h-56">

	{#if project.image}

		<img
			class="max-w-full max-h-full object-cover m-auto"
			src={(project.image.url)}
			alt="{project.title}"
		/>
	{:else}
	<img
	class="max-w-full max-h-full object-cover m-auto"
	src='/logo.svg'
	alt="{project.title}"
/>
	{/if}

	<div class="">
		<h3 class="font-bold my-3">
			<a class="card__link" href={`/work/${project.slug}`}>
				{project.title}
			</a>
		</h3>
	</div>
</div>
