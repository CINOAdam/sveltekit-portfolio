<script>
  import Header from './Header.svelte';
  import Nav from './Nav.svelte';
  import MenuOverlay from './MenuOverlay.svelte';

  let menuOverlay;

  function handleClickOutside(event) {
    const isClickInside = menuOverlay?.contains(event.target);
    const isMenuButton = event.target.closest('.menu-btn');
    
    if (!isClickInside && !isMenuButton) {
      window.dispatchEvent(new CustomEvent('toggle-menu', { detail: { close: true } }));
    }
  }

  $effect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('click', handleClickOutside);
      return () => window.removeEventListener('click', handleClickOutside);
    }
  });
</script>

<div class="min-h-screen bg-black text-white overflow-x-hidden">
  <div class="container max-w-[1320px] mx-auto px-5 xl:px-3">
    <Header />
    
    <div class="space-y-6 lg:flex lg:space-x-12 lg:space-y-0 min-h-[calc(100vh-5rem)] pt-6">
      <div class="lg:w-1/4 min-w-[280px]">
        <Nav />
      </div>
      <div class="lg:w-3/4 space-y-6 pb-12 flex-1">
        <slot />
      </div>
    </div>
    
    <MenuOverlay bind:this={menuOverlay} />
  </div>
</div>

<!-- Background Decorational Lines -->
<div class="-z-[1] fixed top-0 left-0 overflow-hidden w-full h-full">
  <div class="absolute top-0 left-0 w-1/4 lg:w-1/5 h-full border-r border-white/15 before:content-[''] before:z-[1] before:absolute before:-top-20 before:-right-[1px] before:w-[1px] before:h-20 before:bg-gradient-to-b before:from-transparent before:to-white/50 before:animate-bgLine"></div>
  <div class="absolute top-0 left-0 w-2/4 lg:w-2/5 h-full border-r border-white/15 before:content-[''] before:z-[1] before:absolute before:-top-20 before:-right-[1px] before:w-[1px] before:h-20 before:bg-gradient-to-b before:from-transparent before:to-white/50 before:animate-bgLine before:animation-delay-2000"></div>
  <div class="absolute top-0 left-0 w-3/4 lg:w-3/5 h-full border-r border-white/15 before:content-[''] before:z-[1] before:absolute before:-top-20 before:-right-[1px] before:w-[1px] before:h-20 before:bg-gradient-to-b before:from-transparent before:to-white/50 before:animate-bgLine before:animation-delay-6000"></div>
  <div class="hidden lg:block absolute top-0 left-0 w-4/5 h-full border-r border-white/15 before:content-[''] before:z-[1] before:absolute before:-top-20 before:-right-[1px] before:w-[1px] before:h-20 before:bg-gradient-to-b before:from-transparent before:to-white/50 before:animate-bgLine before:animation-delay-4000"></div>
</div>
