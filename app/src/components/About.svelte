<script lang="ts">
	import { onMount } from 'svelte';
	import { getAbout, type About } from '$lib/queries/sanity';
	import { PortableText } from '@portabletext/svelte';

	export let aboutData = {
		image: '',
		body: [],
		title: ''
	};

	const components = {};

	onMount(async () => {
		try {
			const data = await getAbout();
			if (data) {
				aboutData = data[0];
			}
		} catch (error) {
			console.error(error);
		}
	});
</script>

<div class="">
	<section class="flex flex-col md:flex-row gap-5">
		<div class="flex-1 mx-auto mt-5 sm:my-auto">
			<img src={aboutData.image} alt={aboutData.title} class="w-full m-auto object-cover" />
		</div>
		<div class="flex-1 sm:px-5">
			<h2 class="text-2xl font-bold my-5 ">{aboutData.title}</h2>
			<div class="text-lg leading-snug font-light">
				<PortableText value={aboutData.body} {components} />
			</div>
		</div>
	</section>
</div>
