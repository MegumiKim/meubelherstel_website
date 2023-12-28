<script lang="ts">
	import { onMount } from 'svelte';
	import { getHome } from '$lib/utils/sanity';


  export let homeData = {
    image:"",
    text: ""
  };

  onMount(async () => {
    try {
      const data = await getHome();
      if (data) {
      homeData = data[0]
        console.log(data);
      }
    } catch (error) {
      console.error(error);
    }
  });
  
</script>


<div class="relative">
  <img src={homeData.image? homeData.image: "/tools.jpg"} alt="" class="w-full m-auto object-cover md:max-h-96 mainImage">
  <h1 class="text-5xl font-extrabold my-5 sm:m-0 sm:absolute sm:bottom-0 sm:bg-white sm:p-3 bg-opacity-10">WOODWORK</h1>
</div>

<style>
h1{
  border-radius: 0 15px 0 0;
}
</style>