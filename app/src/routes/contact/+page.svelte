<script lang="ts">
	import type { Contact } from '$lib/utils/sanity.js';
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
		<!-- <form
			class="flex-1 flex flex-col gap-3 sm:max-w-[500px] text-lg"
			action="https://formsubmit.co/d726fb6880179208d9663c1c89832491"
			method="POST"
		>
			<label for="" class="text-gray-500"
				><span>Naam</span><input class="input h-8 mt-1" type="text" name="name" required /></label
			>
			<label for="" class="text-gray-500"
				><span>Email</span><input
					class="input h-8"
					type="email"
					name="email"
					required
				/></label
			>
			<label for="" class="text-gray-500"
				><span>Tel <small>(optioneel)</small></span><input
					class="input h-8"
					type="email"
					name="tel"
				/></label
			>
			<label for="" class="text-gray-500"
				><span>Bericht</span><textarea
					class="textarea p-2"
					name="message"
					cols="20"
					rows="7"
					required
				/></label
			>
			<input type="hidden" name="_next" value="https://meubelherstel.vercel.app/thankyou" />
			<input type="hidden" name="_captcha" value="false" />
			<button type="submit" class="btn btn-xl bg-slate-900 text-white py-4 rounded-[5px]">Versturen</button>
		</form> -->
	</div>
</div>

<style>
	.input{
		text-indent: 10px;
	}

	p{
		font-size: 1.1rem;
	}
</style>
