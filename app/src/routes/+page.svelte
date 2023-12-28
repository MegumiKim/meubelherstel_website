<script lang="ts">
	// import Card from '../components/Card.svelte';
	// import Welcome from '../components/Welcome.svelte';
	// import type { PageData } from './$types';

	export let data;
	let home = data.data[0]
	console.log(home.featured);
	
</script>

<section>

	<div class="relative">
		<img src={home.image? home.image: "/tools.jpg"} alt="" class="w-full m-auto object-cover md:max-h-96 mainImage">
		<h1 class="text-5xl font-extrabold my-5 sm:m-0 sm:absolute sm:bottom-0 sm:bg-white sm:p-3 bg-opacity-10">{home.title}</h1>
	

	</div>
	<div class="flex w-full justify-center gap-10 my-20 ">
		{#if home?.featured.length}

		{#each home.featured as feature }
			<div class="relative">
				<div class="opacity-10 bg-slate-600 z-10 w-full h-full absolute"></div>
				<img src={feature.imageUrl} alt={feature.title} class="w-full max-h-44 rounded-lg -z-10">
				<div class="absolute top-[50%] text-center z-20">{feature.title}</div>
			</div>
		{/each}
		{/if}
	</div>

	<!-- {#if home.posts.length}
		{#each data.posts as post}
			<Card {post} />
		{/each}
	{:else}
		<Welcome />
	{/if} -->
</section>

<style>
	h1{
		border-radius: 0 15px 0 0;
	}
	</style>