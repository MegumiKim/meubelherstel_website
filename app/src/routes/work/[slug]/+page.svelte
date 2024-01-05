<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import type { Project } from '$lib/utils/sanity';
	
	export let data: Project;
const components = {};


</script>

<section class="post">
	{#if data}
	<div class="flex flex-col md:flex-row gap-5">
		{#if data.images?.length}
			<div class="flex-1">
				<img
					class="post__cover"
					src={data.images[0].url}
					alt="{data.title}"
				/>
			</div>

			<div class="flex-1 flex flex-wrap h-full gap-4">
				{#each data.images.slice(1) as image }
				<img src={image.url} alt={image.caption} class="w-1/4 object-cover h-1/3"/>
			{/each}
			</div>
		{/if}


	</div>
	<div class="post__container">
		<h1 class="post__title">{data.title}</h1>

			<div class="mt-5 max-w-screen-sm text-xl">
				<PortableText value={data.description} components={components} />
			</div>

 </div>

 	{:else}
 	<div class="mx-auto mt-28 pr-4 w-36"><img src="./wrench.svg" alt="loading" class="h-20  spinner"></div>
 {/if}
</section>
