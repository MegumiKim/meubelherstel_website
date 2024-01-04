<script>
	import "../app.css"
	import Nav from "../components/Nav.svelte";

	</script>

<div class="container">
	<header class="header flex justify-between ">
		<a class="header__title mt-4" href="/">meubelherstel</a>

		<Nav />
	</header>
	<main class="my-10">
		<slot />
	</main>
	<footer class="footer text-slate-400 align-middle text-center flex flex-col">
		<p class="footer__text text-center mx-auto">
			meubelherstel 
		</p>
		<a href="https://www.instagram.com/meubelherstel/"><i class="fa-brands fa-instagram"></i></a>
	</footer>
</div>
