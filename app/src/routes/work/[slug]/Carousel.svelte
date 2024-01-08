<script lang="ts">
  let currentIndex = 0;
  let touchStartX = 0;

  export let images:{url:string,caption:string}[];
  

  function next() {
    currentIndex = (currentIndex + 1) % images.length; 
  }

  function prev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  }


  function handleTouchStart(event) {
    touchStartX = event.touches[0].clientX;
  }

  function handleTouchMove(event) {
    const touchX = event.touches[0].clientX;
    const deltaX = touchX - touchStartX;

    // Adjust the sensitivity based on your needs
    if (deltaX > 50) {
      prev();
    } else if (deltaX < -50) {
      next();
    }
  }
</script>

<div>
  <div class="carousel-container"
  on:touchstart={handleTouchStart}
  on:touchmove={handleTouchMove}
  >
    {#each images as image, i (image.url)}
      <div class="carousel-slide" style="transform: translateX({i - currentIndex}00%)">
        <img src={image.url} alt={image.caption}>
      </div>
    {/each}
      <button on:click={prev}><i class="fa-solid fa-circle-chevron-left"></i></button>
      <button on:click={next}><i class="fa-solid fa-circle-chevron-right"></i></button>

  </div>
  <div class="flex-1 flex  gap-4 my-5 justify-center">
    {#each images as image, i }
    <button  on:click={() => (currentIndex = i)}>
      <img src={image.url} alt={image.caption} class="nav-image {i === currentIndex ? 'active' : ''}"
      />
    </button>
  {/each}
  </div>
</div>

<style>
  .carousel-container {
    display: flex;
    overflow: hidden;
    position: relative;
  }

  .carousel-slide {
   width: 100%;
    margin-right: -100%;
    transition: transform 0.5s ease-in-out;
  }

  img{
    margin: auto;
    max-width: 100%;
    max-height: 300px;
  }
  
  .nav-image{
    max-height: 50px;
    opacity: 50%;
    cursor: pointer;
    justify-content: start;
  }

  .active{
    opacity: 100%;
  }

  .fa-solid{
    display: none;
  }
  .fa-circle-chevron-left{
    position: absolute;
    bottom: 50%;
    left: 15%;
    font-size: xx-large;

  }
  .fa-circle-chevron-right{
    position: absolute;
    bottom: 50%;
    right: 15%;
    font-size: xx-large;
  }

  @media (min-width: 800px) {
    .fa-solid{
    display: block;
  }

  img{
    max-height: 500px;
  }

  .nav-image{
    max-height: 100px;
  }
  }
</style>