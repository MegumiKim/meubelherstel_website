<script lang="ts">
	import { onMount } from 'svelte';
	import { getProjects, type Project } from '$lib/utils/sanity';
	import Card from '../../components/Card.svelte';
	import Spinner from '../../components/Spinner.svelte';

	export let projects: Project[] = [];

	onMount(async () => {
		try {
			const data = await getProjects();
			if (data) {
				projects = data;
			}
		} catch (error) {
			console.error(error);
		}
	});
</script>

<section class="">
	<h1 class="font-extrabold text-5xl">Projecten</h1>
	{#if projects.length}
		<div class="flex flex-wrap mt-10 gap-5 justify-center sm:justify-start">
			{#each projects as project}
				<Card {project} />
			{/each}
		</div>
	{:else}
 		<Spinner />
	{/if}
</section>

