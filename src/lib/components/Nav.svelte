<script>
  const navItems = [
    { name: 'About Me', shortName: 'A', href: '#about' },
    { name: 'Services', shortName: 'S', href: '#services' },
    { name: 'Portfolio', shortName: 'P', href: '#portfolio' },
    { name: 'Testimonial', shortName: 'T', href: '#testimonial' },
    { name: 'Resume', shortName: 'R', href: '#resume' },
    { name: 'Blog', shortName: 'B', href: '#blog' },
    { name: 'Full Bio', shortName: 'F', href: '/bio' },
  ];

  import { onMount } from 'svelte';
  
  let activeSection = 'about';

  function updateActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.scrollY;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        activeSection = sectionId;
      }
    });
  }

  onMount(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', updateActiveSection);
      return () => window.removeEventListener('scroll', updateActiveSection);
    }
  });
</script>

<nav class="z-10 sticky top-6 lg:h-fit w-full bg-boxDark backdrop-blur-[5px] rounded-lg px-4 py-3 lg:px-8 lg:py-8">
  <ul class="font-mono font-normal uppercase text-sm tracking-wider text-center lg:text-left space-x-4 lg:space-x-0 lg:space-y-4">
    {#each navItems as item}
      <li class="list-none inline-block lg:block">
        <a 
          class="section-link group inline-flex justify-center items-center lg:block lg:justify-normal relative w-9 h-9 border border-transparent border-dashed rounded-full lg:w-auto lg:h-auto lg:border-none lg:rounded-none text-white/70 lg:py-3 lg:pr-8 transition ease-linear duration-100 hover:text-white {activeSection === item.href.slice(1) ? 'active text-white' : ''}" 
          href={item.href}
        >
          <span class="hidden lg:inline-block">{item.name}</span>
          <span class="lg:hidden">{item.shortName}</span>
          <span class="nav-circle hidden lg:inline-block absolute top-1/2 right-4 -translate-y-1/2 w-[5px] h-[5px] before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-white before:w-[5px] before:h-[5px] before:rounded-full before:opacity-70 before:transition-all before:ease-out before:duration-200 group-hover:before:opacity-100"></span>
        </a>
      </li>
    {/each}
  </ul>
</nav>
