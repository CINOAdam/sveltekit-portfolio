<script>
  import Icon from '@iconify/svelte';
  
</script>

<header class="lg:flex lg:justify-between h-20 mb-6">
  <div class="flex h-[50px] items-center space-x-6 lg:order-2 justify-end lg:mt-4">

    <button 
      class="menu-btn group relative w-[50px] h-[50px] bg-boxDark rounded-b-lg"
      on:click={() => window.dispatchEvent(new CustomEvent('toggle-menu'))}
      aria-label="Toggle Menu"
    >
      <span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-1 h-1 rounded-full transition-all ease-linear duration-100 delay-100 group-hover:scale-[3]"></span>
      <span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 before:content-[''] before:absolute before:top-0 before:-left-[10px] before:bg-white before:w-1 before:h-1 before:rounded-full before:transition-all before:ease-linear before:duration-100 after:content-[''] after:absolute after:top-0 after:-right-[10px] after:bg-white after:w-1 after:h-1 after:rounded-full after:transition-all after:ease-linear after:duration-100 group-hover:before:left-0 group-hover:before:opacity-0 group-hover:after:right-0 group-hover:after:opacity-0"></span>
    </button>
  </div>
  <div class="py-7 lg:order-1 lg:py-0">
    <h1 class="text-5xl xl:text-7xl font-poppins font-semibold text-white flex items-center gap-3">
      Adam <span class="stroke-text opacity-70">Krüger</span>
    </h1>
  </div>
</header>

<style lang="postcss">
  .stroke-text {
    color: transparent;
    -webkit-text-stroke: 1px theme(colors.white);
  }
</style>
