<script lang="ts">
import Image from './Image.svelte';

	export let aboutData = {
		title: '',
		body: '',
		image: {
			url: '',
		},
	};


</script>

{#if aboutData}

		<section class="flex flex-col sm:flex-row gap-3 max-w-[400px] sm:max-w-[800px]">
	
				<div class="img-wrapper">
					{#if aboutData?.image}
					<Image data={aboutData.image} alt={aboutData.title} />
					{/if}
				</div>
				{#if aboutData?.body}
				<div class="text-wrapper">
						<h2
							class="text-xl font-bold mb-3"
						>
							{aboutData.title}
						</h2>
						<p class="font-ligh">{aboutData.body}</p>
					</div>
				{/if}

		</section>

{/if}

<style>

	section{
		margin: auto;
/* max-width: 800px; */
	}


.img-wrapper{
	max-width: 400px;
	border-radius: 5%;
	overflow: hidden;

}

.text-wrapper{
	max-width: 400px;
}

</style>