<script>
	import Image from '../Image.svelte';
	import RichText from './RichText.svelte';
	import Quote from './Quote.svelte';

	// import { classNames } from '../lib/utils/classNames.js';

	export let blocks = [];
	const blockTypes = {
		richText: RichText,
		quote: Quote,
		// imageObject: Image,
	};
</script>

<div class="grid grid-cols-6 md:grid-cols-12 text-xl font-light gap-10 my-5">

	{#each blocks || [] as {type, ...data }}
		{#if type === 'richText' }
		<div class="col col-span-full md:col-span-8">
			<svelte:component this={blockTypes[type]} {...data} />
		</div>

		{:else if type === 'imageObject'}
		<div class="col col-span-6 md:col-span-6 ">
			<Image data={data.image} alt={data.image.altText} />
		</div>
		{:else if type === 'quote'}
		<div class="col col-span-full sm:col-start-2 ">
			<svelte:component this={blockTypes[type]} {...data} />
		</div>
		{/if}

		{/each}

</div>

