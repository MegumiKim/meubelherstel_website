<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let showMenu = false;
	let currentPage = $page.route.id;

	function toggleMenu() {
		showMenu = !showMenu;
	}

	// Indicate the current page in NAV item
	onMount(() => {
		// Subscribe to changes in the current page
		const unsubscribe = page.subscribe((value) => {
			currentPage = value.route.id;
		});
		return unsubscribe;
	});
</script>

<div class="flex flex-col align-middle justify-between">
	<button on:click={toggleMenu} class="sm:hidden text-right m-4 text-2xl">
		{#if showMenu}
			<i class="fa-solid fa-xmark" />
		{:else}
			<i class="fa-solid fa-bars" />
		{/if}
	</button>
	<nav
		class="text-gray-500 absolute sm:static top-10 right-0 p-4 bg-white gap-2 justify-center sm:gap-3 {showMenu
			? 'flex flex-col'
			: 'hidden'} sm:flex sm:flex-row sm:m-auto sm:py-0"
	>
		<a
			class="{currentPage === '/' ? 'font-extrabold' : ''}"
			href="/"
			on:click={toggleMenu}>HOME</a
		>
		<a
			class=" {currentPage === '/work' ? 'font-extrabold' : ''}"
			href="/work"
			on:click={toggleMenu}>PROJECTEN</a
		>
		<a
			class="{currentPage === '/contact' ? 'font-extrabold' : ''}"
			href="/contact"
			on:click={toggleMenu}>CONTACT</a
		>
	</nav>
</div>

<style>
	a:hover{
		outline: 1px solid gray;

	}
	a{
		padding: 0.5em;
	}
</style>