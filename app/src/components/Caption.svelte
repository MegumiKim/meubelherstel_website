
<script>
  	export let caption = '';
</script>
<figure>
	<slot />
		<figcaption>
      {caption}
		</figcaption>				
</figure>

<style>
figcaption{
	font-size: 0.7em;
	text-align: end;
}
</style>