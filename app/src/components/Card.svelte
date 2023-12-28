<script lang="ts">
	// import { urlFor } from '$lib/utils/image';
	import type { Project } from '$lib/utils/sanity';

	export let project: Project;
	console.log(project);
	
</script>

<div class="card">

	{#if project.image}

		<img
			class=""
			src={(project.image.url)}
			alt="{project.title}"
		/>
	{:else}
	<img
	class=""
	src='/tools2.jpg'
	alt="{project.title}"
/>
	{/if}

	<div class="card__container">
		<h3 class="card__title">
			<a class="card__link" href={`/work/${project.slug}`}>
				{project.title}
			</a>
		</h3>
	</div>
</div>
