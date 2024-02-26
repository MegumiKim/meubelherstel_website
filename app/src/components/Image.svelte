<script>
	import { createImageAttributes } from "$lib/utils/image";

	export let data;
	export let alt= '';
  export let loading = 'lazy'


	const { imageUrl, srcSet, sizes } = createImageAttributes(data.url);
  console.log('imageUrl', imageUrl);
  
</script>

<img 
  src={imageUrl} 
  srcset={srcSet} 
  sizes={`'${sizes}'`} 
  {alt} 
  />


  <style>
    img {
      object-fit: cover;
      height: 100%;
     width: 100%;
    }
  </style>