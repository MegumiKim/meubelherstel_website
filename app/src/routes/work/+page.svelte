<script lang="ts">

	import Card from '../../components/Card.svelte';
	import Spinner from '../../components/Spinner.svelte';

	export let data;
let projects = data.data || [];

</script>

<section class="">
	<h1 class="font-extrabold text-5xl">Projecten</h1>
	{#if projects.length}
		<div class="grid sm:grid-cols-3 mt-10 gap-5 justify-center sm:justify-start">
			{#each projects as project}
				<Card {project} />
			{/each}
		</div>
	{:else}
 		<Spinner />
	{/if}
</section>

