<script>
  import Icon from '@iconify/svelte';
  import { onDestroy } from 'svelte';
  
  const skills = [
    { icon: 'ph:cloud', name: 'AWS', percentage: 100 },
    { icon: 'ph:code-bold', name: 'Python', percentage: 98 },
    { icon: 'ph:database', name: 'SQL/NoSQL', percentage: 95 },
    { icon: 'ph:terminal', name: 'Shell Scripting', percentage: 90 },
    { icon: 'ph:code', name: 'GO', percentage: 75 },
    { icon: 'ph:books-fill', name: 'Machine Learning', percentage: 75 },
    { icon: 'ph:share-network-bold', name: 'Agentic Systems', percentage: 50 },
  ];

  const stats = [
    { value: 14, label: 'Years of Experience', suffix: '+' },
    { value: 50, label: 'Hours of Working', suffix: 'k' },
    { value: 100, label: 'Projects Done', suffix: '+' }
  ];

  const texts = ["Hi There!", "I'm Adam", "Problem Solver and Solutions Architect", "Autistic", "Backend Engineer", "Svelte Lover", "AI Enthusiast", "Open Source Contributor", "Consultant"];
  let currentIndex = $state(0);
  let showCursor = $state(true);
  
  const typerText = $derived(texts[currentIndex]);

  $effect(() => {
    // Typing effect
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % texts.length;
    }, 3000);

    // Cursor blink effect
    const cursorInterval = setInterval(() => {
      showCursor = !showCursor;
    }, 500);

    return () => {
      clearInterval(interval);
      clearInterval(cursorInterval);
    };
  });
</script>

<div class="section w-full bg-boxDark rounded-lg px-6 py-8 md:px-8 md:py-10 lg:p-12 shadow-sectionBoxShadow hover:shadow-sectionBoxShadowHover transition-all duration-200">
  <div class="lg:flex lg:space-x-12 items-start">
    <div class="relative h-fit mb-6 lg:mb-0">
      <div class="group relative">
        <img 
          class="min-w-52 min-h-52 max-w-72 max-h-72 rounded-full transition-transform duration-300 group-hover:scale-105" 
          src="/images/profile.jpg" 
          alt="Christina Gray"
        />
        <div class="absolute inset-0 rounded-full ring-1 ring-white/20 group-hover:ring-white/40 transition-all duration-300"></div>
      </div>
      <div class="absolute bottom-4 left-2 bg-black/60 px-4 py-2 rounded-full shadow-lg backdrop-blur-[5px] text-white font-mono font-normal uppercase text-sm tracking-wider border border-white/10 hover:border-white/30 transition-colors duration-200">
        {typerText}{showCursor ? '|' : ''}
      </div>
    </div>
    
    <div>
      <h6 class="backdrop-text relative font-mono font-medium uppercase text-sm tracking-wider mb-8" data-backdrop-text="ABOUT ME">
        <span class="text-white/70 mr-2">//</span>
        <span>About Me</span>
      </h6>
      
      <h2 class="text-4xl font-poppins font-semibold mb-2 text-white">
        Sr. Solutions Architect. <br/>AI Enthusiast
      </h2>
      
      <ul class="flex flex-wrap gap-3 mb-4">
        {#each skills as skill}
          <li class="group list-none px-4 py-2 rounded-full border border-white/30 border-dashed text-white/70 hover:text-white transition-all duration-200 hover:scale-105 hover:border-white cursor-pointer">
            <Icon icon={skill.icon} class="inline-block w-4 h-4 mr-1 text-white/70 transition-colors duration-200 group-hover:text-white" />
            {skill.name}
            <div class="inline-block font-mono text-sm">
              ({skill.percentage}%)
            </div>
          </li>
        {/each}
      </ul>
      
      <p class="text-white/70">
        I'm a passionate and driven Senior Solutions Architect with over 14 years of experience in the IT industry. My focus is on designing and delivering exceptional systems and products, with a strong emphasis on security and cost-efficiency. I thrive on challenges, especially those involving machine learning and artificial intelligence. As an autistic individual, I embrace and take pride in my unique perspective.      </p>
    </div>
  </div>
  
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
    {#each stats as stat}
      <div class="flex items-center group hover:scale-105 transition-transform duration-200">
        <div class="pe-2">
          <div class="font-mono font-semibold text-6xl stroke-text group-hover:text-white/90 transition-colors duration-200">
            {stat.value}
          </div>
        </div>
        <div class="text-white/90">
          <span class="block text-2xl font-normal mb-1 group-hover:text-white transition-colors duration-200">{stat.suffix}</span>
          <p class="font-mono font-medium text-sm uppercase tracking-[0.5px] group-hover:text-white transition-colors duration-200">
            {stat.label}
          </p>
        </div>
      </div>
    {/each}
  </div>
</div>

<style lang="postcss">
  .stroke-text {
    color: transparent;
    -webkit-text-stroke: 1px theme(colors.white / 70%);
  }

  .backdrop-text::after {
    content: attr(data-backdrop-text);
    position: absolute;
    top: -1.5rem;
    left: 0;
    font-size: 3.5rem;
    font-weight: 700;
    opacity: 0.05;
    font-family: theme('fontFamily.poppins');
    letter-spacing: 0.05em;
  }
</style>
