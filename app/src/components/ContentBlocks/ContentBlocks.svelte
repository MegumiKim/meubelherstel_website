<script>
	import Image from '../Image.svelte';
	import RichText from './RichText.svelte';
	import Quote from './Quote.svelte';
	import Caption from '../Caption.svelte';

	// import { classNames } from '../lib/utils/classNames.js';

	export let blocks = [];
	const blockTypes = {
		richText: RichText,
		quote: Quote,
	};

	
</script>

<div class="grid grid-cols-6 md:grid-cols-12 text-xl font-light gap-10 mt-24">

	{#each blocks || [] as {type, ...data }}
		{#if type === 'richText' }
		<div class="col col-span-full md:col-span-8">
			<svelte:component this={blockTypes[type]} {...data} />
		</div>

		{:else if type === 'imageObject'}
		<div class="col col-span-6 md:col-span-6 ">
			<Caption caption={data.caption}>
				<Image data={data.image} alt={data.image.altText} />
			</Caption>
		</div>
		{:else if type === 'quote'}
		<div class="col col-span-full ">
			<svelte:component this={blockTypes[type]} {...data} />
		</div>
		{/if}

		{/each}

</div>

