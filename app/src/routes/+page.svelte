<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import About from '../components/About.svelte';
	import Image from '../components/Image.svelte';

	export let data;
	let home = data.data[0];
	const components = {};

	
</script>

<div>
	<section>
		<div class="relative">
	<Image data={home.mainImage} alt={home.title} />
			<!-- <img
				src={home.mainImage ? home.mainImage : '/tools.jpg'}
				alt=""
			/> -->
			<h1
				class="text-xl sm:text-5xl font-extrabold my-5 sm:m-0 sm:absolute sm:bottom-0 sm:bg-white sm:p-4 bg-opacity-10"
			>
				{home.title}
			</h1>
		</div>
		{#if home?.tagline}
			<div class="text-center my-10 sm:my-20 text-xl sm:text-2xl font-light">
				<PortableText value={home.tagline} {components} />
			</div>
		{/if}
	</section>

	<section>
		<About />
	</section>

	<section>
		<div class="sm:mt-20">
			{#if home?.featured}
				<h2 class="text-2xl text-center font-extrabold my-5">{home.featured.heading}</h2>
				<div class="flex flex-col sm:flex-row w-full justify-center gap-8 my-10">
					{#each home.featured.service as item}
						<a
							class="relative rounded-xl overflow-hidden flex-grow min-w-0"
							href={item.projectSlug ? `/work/${item.projectSlug}` : '/work'}
						>
							<div class="absolute inset-0 bg-slate-600 opacity-60 z-10" />
							<img
								src={item.imageUrl}
								alt={item.title}
								class="w-full h-20 sm:h-40 object-cover rounded-xl -z-10"
							/>
							<!-- <Image data={item.imageUrl} alt={item.title} /> -->
							<div
								class="absolute inset-0 flex items-center justify-center text-white text-xl z-20 font-bold"
							>
								<div class="px-5 text-center">{item.title}</div>
							</div>
						</a>
					{/each}
				</div>
			{/if}
		</div>
		<div class="flex flex-col sm:flex-row mt-20 gap-10 justify-center">
			<a
			href="/work"
			class="outline outline-1 px-10 py-2 text-xl text-center hover:bg-black hover:text-white rounded"
			>Projecten</a
		>
			<a
				href="/contact"
				class="outline outline-1 px-10 py-2 text-xl text-center hover:bg-black hover:text-white rounded"
				>Contact</a
			>

		</div>
	</section>
</div>

<style>
	h1 {
		border-radius: 0 15px 0 0;
	}

	img {
		object-fit: cover;
		height: 100%;
		width: 100%;
	}
</style>
