<script>
	import '../app.css';
	import Nav from '../components/Nav.svelte';
	import MetaTags from '../components/MetaTags.svelte';


	export let data;
	const siteSettings = data.siteSettings[0];

	const title = siteSettings.title || "meubelherstel";

	console.log(siteSettings);
</script>

<svelte:head>
{#if siteSettings}
<MetaTags {...siteSettings} />
{/if}
</svelte:head>
<div class="container">
	<header class="header flex justify-between">
		<a class="header__title mt-4" href="/">{title}</a>

		<Nav />
	</header>
	<main class="my-20 sm:my-10">
		<slot />
	</main>
	<footer class="footer text-slate-400 align-middle text-center flex flex-col gap-5">
		<p class="mx-auto flex gap-2">
			{title} <a href={siteSettings?.instagram}
				><i class="fa-brands fa-instagram" />
			</a>
		</p>

		<p class="footer__text text-center mx-auto">
			Website created by
			<a
				href="https://megumi-portfolio.vercel.app/"
				target="_blank"
				rel="noopener noreferrer"
				class="text-pink-600">Megumi</a
			>.
		</p>
	</footer>
</div>
