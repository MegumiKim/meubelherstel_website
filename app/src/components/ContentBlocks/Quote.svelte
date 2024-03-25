<script>
	export let quote = '';
	export let by = '';
</script>

<blockquote>
	<p>"{quote}"</p>
	{#if by}
		<footer>{by}</footer>
	{/if}
</blockquote>

<style>
	blockquote {
		font-size: 2em;
		font-style: italic;
		border-left: 10px solid #333;
		text-indent: 30px;
	}
	footer {
		margin-top: 2em;
		font-size: 0.5em;
	}
</style>
