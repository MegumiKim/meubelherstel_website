<script>
	import { createImageAttributes } from "$lib/utils/image";

	export let data;
	export let alt;
  export let loading = 'lazy'
	// export let width;

	// console.log(data);

	const { imageUrl, srcSet, sizes } = createImageAttributes(data);
</script>

<img 
  src={imageUrl} 
  srcset={srcSet} 
  sizes={`'${sizes}'`} 
  {loading} 
  {alt} 
  />


  <style>
    img {
      object-fit: cover;
      /* height: auto; */
      height: 100%;
     width: 100%;
    }
  </style>