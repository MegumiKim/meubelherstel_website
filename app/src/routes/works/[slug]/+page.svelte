<script lang="ts">
import Spinner from '../../../components/Spinner.svelte';
import ContentBlocks from '../../../components/ContentBlocks/ContentBlocks.svelte';
import Carousel from '../../../components/ContentBlocks/Carousel.svelte';
export let data ={}
console.log(data);

</script>

<section class="post text-xl font-light">
	{#if data}
		<div class="lg:flex gap-10">
			<div class="project-images md:order-2">
				{#if data.gallery}
					<Carousel images={data.gallery} />
				{/if}
			</div>
			<div class="project-text md:order-1">
				<h1 class="post__title">{data.title}</h1>
				<div class="flex gap-10">
					{#if data.projectCategory}
						<p class="font-bold mb-5">{`# ${data.projectCategory}`}</p>
					{/if}
					{#if data.date}
						<p><i class="fa-regular fa-calendar" /> {data.date}</p>
					{/if}
					{#if data.date}
						<p><i class="fa-solid fa-location-dot" /> {data.location}</p>
					{/if}
				</div>
					<p>{data.description}</p>
			</div>
		</div>
		<ContentBlocks blocks={data.contentBlocks} />
	{:else}
		<Spinner />
	{/if}
</section>

<style>
	.project-text {
		flex: 2;
	}

	.project-images {
		flex: 3;
	}
</style>

