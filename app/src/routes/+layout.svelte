<script>
	import '../app.css';
	import Nav from '../components/Nav.svelte';
</script>

<div class="container">
	<header class="header flex justify-between">
		<a class="header__title mt-4" href="/">meubelherstel</a>

		<Nav />
	</header>
	<main class="my-20 sm:my-10">
		<slot />
	</main>
	<footer class="footer text-slate-400 align-middle text-center flex flex-col gap-5">
		<p class="mx-auto flex gap-2">
			meubelherstel <a href="https://www.instagram.com/meubelherstel/"
				><i class="fa-brands fa-instagram" />
			</a>
		</p>

		<p class="footer__text text-center mx-auto">
			Website created by
			<a
				href="https://portfolio.megumi.no/"
				target="_blank"
				rel="noopener noreferrer"
				class="text-pink-600">Megumi</a
			>.
		</p>
	</footer>
</div>
