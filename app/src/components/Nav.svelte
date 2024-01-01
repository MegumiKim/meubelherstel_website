<script>
  let showMenu = false;
  
  function toggleMenu(){
    showMenu=!showMenu
  }
  
  </script>
  
  <div class="flex flex-col align-middle justify-between ">
    

    <button on:click={toggleMenu} class="sm:hidden text-right m-2">
      {#if showMenu}
      <i class="fa-solid fa-xmark"></i>
    {:else}
      <i class="fa-solid fa-bars"></i>
    {/if}
    </button>
    <nav class="text-gray-500 absolute sm:static top-10 right-0 p-4 bg-white gap-2 justify-center sm:gap-3 {showMenu? 'flex flex-col': 'hidden'} sm:flex sm:flex-row sm:m-auto sm:py-0 ">
      <a class=" hover:outline px-2 outline-1" href="/">HOME</a>
      <a class=" hover:outline px-2 outline-1" href="/work">WORK</a>
      <a class=" hover:outline px-2 outline-1" href="/contact">CONTACT</a>
    </nav>
  </div>
