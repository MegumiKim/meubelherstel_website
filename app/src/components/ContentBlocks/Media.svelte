<script>
	export let caption = '';
	export let description;
</script>

<figure>
	<slot />
	{#if caption}
		<figcaption>
			{#if caption}
				{caption}
			{/if}
			<span>
				{#if description}
					{description}
				{/if}
			</span>
		</figcaption>
	{/if}
</figure>

<style lang="scss">
	@use 'sass:math';
	$border-radius: 16px;

	figure {
		:global(video),
		:global(img) {
			border-radius: $border-radius;
		}

		> figcaption {
			padding-left: math.div($border-radius, 2);
		}
	}
</style>
