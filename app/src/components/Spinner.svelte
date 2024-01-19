<div class="mx-auto mt-28 pr-4 w-36">
  <img src="./wrench.svg" alt="loading" class="h-20 spinner" />
</div>

<style>
	.spinner {
		animation: spin 3s linear infinite;
		transform-origin: calc(100% - 1rem) 1rem;
	}
	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
