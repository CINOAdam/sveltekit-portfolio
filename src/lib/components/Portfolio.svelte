<script>
  
  let portfolioItems = [
    {
      title: "iShop",
      category: "category-1",
      categoryLabel: "Web App",
      image: "/images/Ishop.jpg",
      link: "/portfolio/ishop"
    },
    {
      title: "Color Picker",
      category: "category-2", 
      categoryLabel: "Design",
      image: "/images/color.jpg",
      link: "/portfolio/color-picker"
    },
    {
      title: "Beer Finder",
      category: "category-1",
      categoryLabel: "Web App", 
      image: "/images/beer1.jpg",
      link: "/portfolio/beer-finder"
    },
    {
      title: "Profile Card",
      category: "category-2",
      categoryLabel: "Design",
      image: "/images/profile.jpg",
      link: "/portfolio/profile-card"
    }
  ];

  let activeFilter = 'all';

  function filterItems(category) {
    activeFilter = category;
  }

  $: filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);
</script>

<div id="portfolio" class="section bg-white dark:bg-boxDark rounded-lg px-6 py-8 md:px-8 md:py-10 lg:p-12 shadow-sectionBoxShadow hover:shadow-sectionBoxShadowHover transition ease-out duration-[160ms]">
  <div class="md:w-4/5 lg:w-3/4">
    <h6 class="font-mono font-medium uppercase text-sm tracking-wider relative pt-4 mb-5 dark:text-white before:content-['//'] before:pr-2 after:content-[attr(data-backdrop-text)] after:absolute after:top-0 after:left-0 after:font-poppins after:font-bold after:uppercase after:text-4xl after:opacity-15" data-backdrop-text="Portfolio">Portfolio</h6>
    <h2 class="text-3xl lg:text-4xl font-poppins font-semibold mb-3 lg:mb-4 dark:text-white">My Latest Works</h2>
    <p class="text-pColor dark:text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p> 
  </div>
  <div class="mt-6 lg:mt-12">
    <ul class="space-x-2">
      <li class="list-none inline-block">
        <button 
          type="button"
          class="font-mono text-sm px-4 py-2 border border-black border-dashed rounded-full hover:bg-black hover:text-white transition ease-linear duration-100 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black {activeFilter === 'all' ? 'bg-black text-white dark:bg-white dark:text-black' : ''}"
          on:click={() => filterItems('all')}
          on:keydown={(e) => e.key === 'Enter' && filterItems('all')}>
          Show All
        </button>
      </li>
      <li class="list-none inline-block">
        <button 
          type="button"
          class="font-mono text-sm px-4 py-2 border border-black border-dashed rounded-full hover:bg-black hover:text-white transition ease-linear duration-100 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black {activeFilter === 'category-1' ? 'bg-black text-white dark:bg-white dark:text-black' : ''}"
          on:click={() => filterItems('category-1')}
          on:keydown={(e) => e.key === 'Enter' && filterItems('category-1')}>
          Web App
        </button>
      </li>
      <li class="list-none inline-block">
        <button 
          type="button"
          class="font-mono text-sm px-4 py-2 border border-black border-dashed rounded-full hover:bg-black hover:text-white transition ease-linear duration-100 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black {activeFilter === 'category-2' ? 'bg-black text-white dark:bg-white dark:text-black' : ''}"
          on:click={() => filterItems('category-2')}
          on:keydown={(e) => e.key === 'Enter' && filterItems('category-2')}>
          Design
        </button>
      </li>
    </ul>
    <div class="portfolio-grid grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
      {#each filteredItems as item}
        <div class="portfolio-item {item.category}">
          <div class="relative overflow-hidden group rounded-lg after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-t after:from-black/30 after:to-transparent after:opacity-0 after:transition after:ease-out after:duration-[160ms] hover:after:opacity-100">
            <img class="transition ease-custom duration-500 group-hover:scale-105 group-hover:blur-[1.4px]" src={item.image} alt={item.title}>
            <div class="z-[1] absolute top-4 right-4 bg-black/20 px-4 py-2 rounded-full backdrop-blur-[5px] text-white font-mono font-normal text-sm uppercase tracking-[0.5px]">
              {item.categoryLabel}
            </div>
            <div class="z-[1] absolute bottom-0 left-0 w-full px-7 pb-6 invisible opacity-0 translate-y-2 group-hover:translate-y-0 group-hover:visible group-hover:opacity-100 group-hover:mb-0 transition ease-out duration-[160ms]">
              <a class="font-poppins font-semibold text-3xl lg:text-4xl tracking-[0.5px] portfolio-stroke-text transition-all ease-linear duration-100" href={item.link}>{item.title}</a>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  :global(.portfolio-stroke-text) {
    color: transparent;
    -webkit-text-stroke: 1px white;
  }
  
  :global(.portfolio-stroke-text:hover) {
    color: white;
  }
  
  :global(.ease-custom) {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
</style>
