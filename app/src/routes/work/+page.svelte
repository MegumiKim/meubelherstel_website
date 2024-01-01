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
        console.log(data);
      }
    } catch (error) {
      console.error(error);
    }
  });
  
</script>

<section>
  <h1 class="font-extrabold text-5xl my-10">WORK</h1>
	{#if projects.length}
		<div class="grid grid-cols-1 sm:grid-cols-3 gap-5">
      {#each projects as project}
        <Card {project} />
      {/each}
    </div>
	{:else}
    <p>No Project :-/</p>
	{/if}
</section>
