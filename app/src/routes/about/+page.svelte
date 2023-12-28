<script lang="ts">
	import { onMount } from 'svelte';
	import { getAbout, type About } from '$lib/utils/sanity';
	import { PortableText} from '@portabletext/svelte';

  export let aboutData = {
    image:"",
    text: ""
  };

  onMount(async () => {
    try {
      const data = await getAbout();
      if (data) {
      aboutData = data[0]
      }
    } catch (error) {
      console.error(error);
      aboutData ={
        image:"/tools.jpg",
        text: "Welcome"
      }
    }
  });
  
</script>


<div class="container">
<h1 class="text-5xl font-extrabold">About</h1>
<section class="flex flex-col md:flex-row gap-5">
  <div class="flex-1 m-auto"><img src={aboutData.image} alt="" class="w-full m-auto object-cover"></div>
  <div class="flex-1 px-10">
    <h2 class="text-xl font-bold my-5">{aboutData.title}</h2>
    <PortableText value={aboutData.body} />
  </div>
</section>
</div>
