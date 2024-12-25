<script>
  import Icon from '@iconify/svelte';
  
  const milestones = [
    {
      year: 2023,
      title: "AI Research Lead",
      description: "Led groundbreaking research in artificial intelligence and machine learning applications."
    },
    {
      year: 2020,
      title: "Senior Solutions Architect",
      description: "Designed and implemented large-scale cloud infrastructure solutions for enterprise clients."
    },
    {
      year: 2015,
      title: "Tech Innovation Award",
      description: "Received industry recognition for innovative approaches to system architecture."
    }
  ];

  const interests = [
    { icon: 'ph:brain-bold', name: 'Neuroscience' },
    { icon: 'ph:robot-bold', name: 'AI Ethics' },
    { icon: 'ph:music-notes-bold', name: 'Music Theory' },
    { icon: 'ph:book-bookmark-bold', name: 'Philosophy' },
    { icon: 'ph:mountains-bold', name: 'Hiking' }
  ];
</script>

<section class="section w-full bg-boxDark rounded-lg px-6 py-8 md:px-8 md:py-10 lg:p-12 shadow-sectionBoxShadow hover:shadow-sectionBoxShadowHover transition-all duration-200">
  <h6 class="backdrop-text relative font-mono font-medium uppercase text-sm tracking-wider mb-8" data-backdrop-text="BIOGRAPHY">
    <span class="text-white/70 mr-2">//</span>
    <span>Full Biography</span>
  </h6>

  <div class="space-y-8">
    <div class="prose prose-invert max-w-none">
      <p class="text-white/70 leading-relaxed">
        As a Solutions Architect with over 14 years of experience, I've dedicated my career to solving complex technical challenges and driving innovation in the tech industry. Being on the autism spectrum has given me a unique perspective on problem-solving and system design, allowing me to see patterns and solutions that others might miss.
      </p>
      
      <p class="text-white/70 leading-relaxed mt-4">
        My journey in technology began with a fascination for how systems work and interact. This curiosity, combined with my natural ability to focus intensely on complex problems, has led me to specialize in cloud architecture, machine learning, and artificial intelligence. I believe in the power of technology to improve lives and am particularly passionate about creating systems that are both efficient and accessible.
      </p>
    </div>

    <div>
      <h3 class="text-2xl font-poppins font-semibold mb-6 text-white">Key Milestones</h3>
      <div class="space-y-6">
        {#each milestones as milestone}
          <div class="group relative pl-8 before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-white/70 before:rounded-full before:group-hover:bg-white before:transition-colors before:duration-200">
            <div class="font-mono text-white/50 text-sm mb-1">{milestone.year}</div>
            <h4 class="text-lg font-semibold text-white mb-2">{milestone.title}</h4>
            <p class="text-white/70">{milestone.description}</p>
          </div>
        {/each}
      </div>
    </div>

    <div>
      <h3 class="text-2xl font-poppins font-semibold mb-6 text-white">Personal Interests</h3>
      <ul class="flex flex-wrap gap-3">
        {#each interests as interest}
          <li class="group list-none px-4 py-2 rounded-full border border-white/30 border-dashed text-white/70 hover:text-white transition-all duration-200 hover:scale-105 hover:border-white cursor-pointer">
            <Icon icon={interest.icon} class="inline-block w-4 h-4 mr-1 text-white/70 transition-colors duration-200 group-hover:text-white" />
            {interest.name}
          </li>
        {/each}
      </ul>
    </div>
  </div>
</section>

<style lang="postcss">
  .backdrop-text::after {
    content: attr(data-backdrop-text);
    position: absolute;
    top: -1.5rem;
    left: 0;
    font-size: 3.5rem;
    font-weight: 700;
    opacity: 0.05;
    font-family: theme('fontFamily.poppins'),serif;
    letter-spacing: 0.05em;
  }
</style>
