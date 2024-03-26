<script>
	// further customization https://github.com/portabletext/svelte-portabletext/
	// Prop warning solution : https://github.com/portabletext/svelte-portabletext/issues/10
	import { PortableText } from '@portabletext/svelte';
	import CustomDefaultListItem from './CustomDefaultListItem.svelte';
	export let text;
</script>

<PortableText
	value={text}
	components={{
		listItem: {
			normal: CustomDefaultListItem //<-- suppress "unknown prop" warning
		}
	}}
/>
