<script lang="ts">
	import { onMount } from 'svelte';
	import { getProjects, type Project } from '$lib/utils/sanity';
	import Card from '../../components/Card.svelte';

  export let projects:Project[] = []

  onMount(async () => {
    try {
      const data = await getProjects();
      if (data) {
      projects = data
      }
    } catch (error) {
      console.error(error);
    }
  });
  
</script>

<section class="">
  <h1 class="font-extrabold text-5xl">Projecten</h1>
	{#if projects.length}
		<div class="flex flex-wrap mt-10 gap-5">
      {#each projects as project}
          <Card {project} />
      {/each}
    </div>
	{:else}
    <div class="mx-auto mt-28 pr-4 w-36"><img src="./wrench.svg" alt="loading" class="h-20  spinner"></div>
	{/if}
</section>

<style>
  .spinner{
  animation: spin 3s linear infinite; 
  transform-origin: calc(100% - 1rem) 1rem;

  }
  @keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>