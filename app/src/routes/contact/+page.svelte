<script lang="ts">
	import type { Contact } from '$lib/queries/sanity.js';
import ContactForm from '../../components/ContactForm.svelte';
	export let data: { data: Contact[] };
	const contact = data.data?.[0];
</script>

<div>
	<h1 class="text-5xl font-extrabold mb-10">Contact</h1>

	<div class="flex flex-col sm:flex-row w-full gap-10">
		{#if contact}
			<div class="flex-1 space-y-6">
				<h2 class="font-extrabold text-xl">{contact.title}</h2>
				{#if contact.addressOne}
					<div>
						<h3 class="font-bold text-xl">Adres</h3>
						<p>{contact.addressOne}</p>
						<p>{contact.addressTwo ? contact.addressTwo : ''}</p>
					</div>
				{/if}

				{#if contact.phone}
					<div>
						<h3 class="font-bold text-xl">Tel</h3>
						<p>{contact.phone}</p>
					</div>
				{/if}

				{#if contact.email}
					<div>
						<h3 class="font-bold text-xl">email</h3>
						<p>{contact.email}</p>
					</div>
				{/if}
				<p class="font-bold">{contact.message}</p>
			</div>
		{/if}

		<ContactForm />
	</div>
</div>

<style>


	p{
		font-size: 1.1rem;
	}
</style>
