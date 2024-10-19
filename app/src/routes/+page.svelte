<script lang="ts">
	import About from '../components/About.svelte';
	import Image from '../components/Image.svelte';


	export let data;
	let home = data.data[0];

	console.log(home.featured.service);
	let about = home.about || {
		title: '',
		body: '',
		image: {
			url: '',
		},
	};
	const components = {};

	let scrollY = 0;
	function onScroll(){
		scrollY = window.scrollY
	}

</script>

<svelte:window on:scroll={onScroll} />
<div>
	<section class="welcome">
		<div class="parallax" style="transform: translateY({scrollY * 0.5}px)" >
			<Image data={home.mainImage} alt={home.title} />
		</div>
		<h1
			class="text-xl sm:text-5xl font-extrabold my-5 m-0 absolute bg-white p-4 "
		>
			{home.title}
		</h1>
	</section>
	<div class="text-center my-10 sm:my-20 text-xl sm:text-2xl font-light tagline">
		<p>{home.tagline ||"" }</p>
	</div>
		<About aboutData={about}/>
	<section class="featured">
		<div class="sm:mt-20">
			{#if home?.featured}
				<h2 class="text-2xl text-center font-extrabold my-5">{home.featured.heading}</h2>
				<div class="flex flex-col sm:flex-row w-full justify-center gap-8 my-10">
					{#each home.featured.service as item}
						<a
							class="relative featured-item"
							href={item.projectSlug ? `/work/${item.projectSlug}` : '/work'}
						>
							<div class="absolute inset-0 bg-slate-600 opacity-60 z-10" />
							<Image data={item.image} alt={item.title} />
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
		margin: 0;
		bottom: -1px;
	}

	.welcome{
		overflow-y: hidden;
		position: relative;
		margin-top: 0;
	}

	.parallax{
z-index: -1;
	}

	.featured-item{
		width: 200px;
		height: 200px;
		margin: auto;
		border-radius: 50%;
		overflow: hidden;
	}

section{
	margin-top: 5em;
}
</style>
