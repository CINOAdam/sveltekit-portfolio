<script>
  import Icon from '@iconify/svelte';
</script>

<div class="section bg-white dark:bg-boxDark rounded-lg px-6 py-8 md:px-8 md:py-10 lg:p-12 shadow-sectionBoxShadow hover:shadow-sectionBoxShadowHover transition ease-out duration-[160ms] mb-6">
  <div class="md:w-4/5 lg:w-3/4">
    <h6 class="font-mono font-medium uppercase text-sm tracking-wider relative pt-4 mb-5 dark:text-white before:content-['//'] before:pr-2 after:content-[attr(data-backdrop-text)] after:absolute after:top-0 after:left-0 after:font-poppins after:font-bold after:uppercase after:text-4xl after:opacity-15" data-backdrop-text="Services">Services</h6>
    <h2 class="text-3xl lg:text-4xl font-poppins font-semibold mb-3 lg:mb-4 dark:text-white">What I Do</h2>
    <p class="text-pColor dark:text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p> 
  </div>
  <div class="mt-6 lg:mt-10 divide-y divide-dashed divide-black/20 dark:divide-white/20">
    <!-- Services box 1 -->
    <div class="md:flex py-6 lg:py-8 space-y-2.5 md:space-y-0">
      <div class="md:min-w-[90px]">
        <span class="font-mono font-semibold text-5xl stroke-text">01</span>
      </div>
      <div class="md:min-w-[270px] dark:text-white">
        <div class="flex flex-col">
          <Icon icon="ph:code-bold" class="w-8 h-8 mb-2 text-white" />
          <div class="font-mono font-medium text-sm uppercase tracking-[0.5px]">Web & Mobile Development</div>
        </div>
      </div>
      <div>
        <p class="text-pColor dark:text-white/70 leading-7">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
      </div>
    </div>
    <!-- Services box 2 -->
    <div class="md:flex py-6 lg:py-8 space-y-2.5 md:space-y-0">
      <div class="md:min-w-[90px]">
        <span class="font-mono font-semibold text-5xl stroke-text">02</span>
      </div>
      <div class="md:min-w-[270px] dark:text-white">
        <div class="flex flex-col">
          <Icon icon="ph:laptop-bold" class="w-8 h-8 mb-2 text-white" />
          <div class="font-mono font-medium text-sm uppercase tracking-[0.5px]">Digital Marketing</div>
        </div>
      </div>
      <div>
        <p class="text-pColor dark:text-white/70 leading-7">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
      </div>
    </div>
    <!-- Services box 3 -->
    <div class="md:flex py-6 lg:py-8 space-y-2.5 md:space-y-0">
      <div class="md:min-w-[90px]">
        <span class="font-mono font-semibold text-5xl stroke-text">03</span>
      </div>
      <div class="md:min-w-[270px] dark:text-white">
        <div class="flex flex-col">
          <Icon icon="ph:gear-six-bold" class="w-8 h-8 mb-2 text-white" />
          <div class="font-mono font-medium text-sm uppercase tracking-[0.5px]">Branding & Strategy</div>
        </div>
      </div>
      <div>
        <p class="text-pColor dark:text-white/70 leading-7">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat</p>
      </div>
    </div>
    <!-- Services box 4 -->
    <div class="md:flex py-6 lg:py-8 space-y-2.5 md:space-y-0">
      <div class="md:min-w-[90px]">
        <span class="font-mono font-semibold text-5xl stroke-text">04</span>
      </div>
      <div class="md:min-w-[270px] dark:text-white">
        <div class="flex flex-col">
          <Icon icon="ph:users-three-bold" class="w-8 h-8 mb-2 text-white" />
          <div class="font-mono font-medium text-sm uppercase tracking-[0.5px]">User Testing & Personas</div>
        </div>
      </div>
      <div>
        <p class="text-pColor dark:text-white/70 leading-7">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
      </div>
    </div>
  </div>
</div>
