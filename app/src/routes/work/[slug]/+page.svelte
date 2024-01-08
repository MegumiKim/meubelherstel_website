<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import type { Project } from '$lib/utils/sanity';
	import Carousel from './Carousel.svelte' 

	export let data: Project;
const components = {};



</script>

<section class="post">
	{#if data}
	<div class="">
		{#if data.images?.length}
		<Carousel images={data.images}/>
		{/if}
	</div>
	<div class="post__container">
		<h1 class="post__title text-center">{data.title}</h1>
			<div class="mx-auto mt-5 max-w-screen-sm text-xl">
				<PortableText value={data.description} components={components} />
			</div>
 </div>

 	{:else}
 	<div class="mx-auto mt-28 pr-4 w-36"><img src="./wrench.svg" alt="loading" class="h-20  spinner"></div>
 {/if}
</section>
