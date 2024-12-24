<script>
  import Icon from '@iconify/svelte';
  
  let isVisible = $state(false);

  $effect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('toggle-menu', () => {
        isVisible = !isVisible;
      });
    }
  });
</script>

<div class="toggle-menu z-20 fixed top-0 right-0 translate-x-3 w-96 h-full bg-boxDark px-10 py-12 {isVisible ? 'visible opacity-100' : 'invisible opacity-0'} transition-all ease-out duration-[160ms]">
  <div class="mt-6">
    <span class="block font-mono font-normal uppercase text-sm tracking-[0.5px] text-white mb-2">Email:</span>
    <h4 class="font-poppins font-medium text-2xl text-white">adam@revelry-inc.com</h4>
  </div>
  
  <ul class="space-x-2 mt-4">
      <li class="list-none inline-block">
        <button 
          class="inline-flex justify-center items-center bg-white/15 w-10 h-10 rounded-full text-white transition ease-out duration-[120ms] hover:bg-white/20" 
          aria-label="Open BlueSky Profile"
          onclick={() => window.open(`https://bsky.app/profile/thetiz.bsky.social`, '_blank')}
        >
          <Icon icon=ph:butterfly class="w-5 h-5" />
        </button>
      </li>
      <li class="list-none inline-block">
        <button 
          class="inline-flex justify-center items-center bg-white/15 w-10 h-10 rounded-full text-white transition ease-out duration-[120ms] hover:bg-white/20" 
          aria-label="Open GitHub Profile"
          onclick={() => window.open(`https://github.com/CINOAdam`, '_blank')}
        >
          <Icon icon=ph:github-logo-duotone class="w-5 h-5" />
        </button>
      </li>
  </ul>
  

  

  <button 
    class="menu-close absolute top-4 right-4 inline-flex justify-center items-center bg-white/15 w-10 h-10 rounded-full text-white text-xl transition ease-out duration-150 hover:bg-white/20"
    onclick={() => isVisible = false}
    aria-label="Close menu"
  >
    <Icon icon="ph:x-bold" class="w-6 h-6" />
  </button>
</div>
