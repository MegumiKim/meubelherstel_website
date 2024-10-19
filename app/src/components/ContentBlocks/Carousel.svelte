<script lang="ts">
	import Image from "../Image.svelte";

	export let images = [];
	
	let currentIndex = 0;

	function next() {
		currentIndex = (currentIndex + 1) % images.length;
	}
	function prev() {
		currentIndex = (currentIndex - 1 + images.length) % images.length;
	}
</script>

<div>
	<div class="carousel-container">
		{#each images as image, i (image.asset.url)}
			<div class="carousel-slide" style="transform: translateX({i - currentIndex}00%)">
				<Image data={image.asset} alt={image.asset.altText ? image.altText:"project details"}/>
			</div>
		{/each}

		{#if images.length > 1}
			<button on:click={prev}><i class="fa-solid fa-circle-chevron-left md:static" /></button>
			<button on:click={next}><i class="fa-solid fa-circle-chevron-right md:static" /></button>
		{/if}
	</div>
	{#if images.length > 1}
		<div class="flex-1 gap-4 my-5 slide-nav">
			{#each images as image, i}
				<button on:click={() => (currentIndex = i)} class="nav-image {i === currentIndex ? 'active' : ''}">
						<Image data={image.asset} alt={image.asset.altText ? image.asset.altText:"project details"}
						/>
				</button>
			{/each}
		</div>
	{/if}
</div>

<style>
	.carousel-container {
		display: flex;
		overflow: hidden;
		position: relative;
		align-items: center;
		max-width: 100%;
		max-height: 500px;
		margin: auto;
		border-radius: 10px;
	}

	.carousel-slide {
		width: 100%;
		margin-right: -100%;
		transition: transform 0.5s ease-in-out;
	}

	.slide-nav {
		max-height: 80px;
		display: flex;
		justify-items: start;
	}
	.nav-image {
		opacity: 50%;
		cursor: pointer;
		aspect-ratio: 1/1;
		max-width: 100px;
	}

	.active {
		opacity: 100%;
	}

	.fa-solid {
		color: white;
		/* margin: 0 0.5em; */
	}

	.fa-circle-chevron-left {
		position: absolute;
		top: 45%;
		left: 5%;
		font-size: xx-large;
	background: #000;
	border-radius: 50%;
	}
	.fa-circle-chevron-right {
		position: absolute;
		top: 45%;
		right: 5%;
		font-size: xx-large;
		background: #000;
		overflow: hidden;
		border-radius: 50%;
	}

	@media (min-width: 800px) {

		.nav-image {
			max-height: 100px;
		}
	}
</style>
