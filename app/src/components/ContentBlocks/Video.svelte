<script>
	// Default settings is when used as GIF replacement
	// Good read:
	// https://web.dev/articles/lazy-loading-video

	export let controls = false;
	export let preload = 'metadata';
	export let autoplay = true;
	export let loop = true;
	export let muted = true;
	export let playsinline = true;
	export let asset = {};
</script>

<video {preload} {controls} {autoplay} {muted} {loop} {playsinline}>
	<source src={asset.url} type="video/mp4" />
</video>
