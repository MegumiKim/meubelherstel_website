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

		<section class="flex flex-col sm:flex-row gap-3">
			<div class="flex-1">
				{#if aboutData?.image}
				<Image data={aboutData.image} alt={aboutData.title} />
				{/if}
			</div>
			{#if aboutData?.body}
			<div class="flex-1">
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

