<script>

  let blogPosts = [
    {
      id: 1,
      title: "Blog Post Title",
      date: "Nov 20",
      category: "Category",
      image: "/images/blog-img.png",
      slug: "blog-post-1"
    },
    {
      id: 2,
      title: "Blog Post Title",
      date: "Nov 20", 
      category: "Category",
      image: "/images/blog-img.png",
      slug: "blog-post-2"
    },
    {
      id: 3,
      title: "Blog Post Title",
      date: "Nov 20",
      category: "Category", 
      image: "/images/blog-img.png",
      slug: "blog-post-3"
    },
    {
      id: 4,
      title: "Blog Post Title",
      date: "Nov 20",
      category: "Category",
      image: "/images/blog-img.png",
      slug: "blog-post-4"
    }
  ];
</script>

<div id="blog" class="section bg-white dark:bg-boxDark rounded-lg px-6 py-8 md:px-8 md:py-10 lg:p-12 shadow-sectionBoxShadow hover:shadow-sectionBoxShadowHover transition ease-out duration-[160ms]">
  <div class="md:w-4/5 lg:w-3/4">
    <h6 class="font-mono font-medium uppercase text-sm tracking-wider relative pt-4 mb-5 dark:text-white before:content-['//'] before:pr-2 after:content-[attr(data-backdrop-text)] after:absolute after:top-0 after:left-0 after:font-poppins after:font-bold after:uppercase after:text-4xl after:opacity-15" data-backdrop-text="Blog">Blog</h6>
    <h2 class="text-3xl lg:text-4xl font-poppins font-semibold mb-3 lg:mb-4 dark:text-white">Latest Blog Posts</h2>
    <p class="text-pColor dark:text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p> 
  </div>
  <div class="mt-6 lg:mt-12 space-y-8 md:space-y-6">
    {#each blogPosts as post}
      <div class="md:flex md:items-center">
        <div class="overflow-hidden relative rounded-lg group">
          <a href="/blog/{post.slug}">
            <img class="md:max-w-[340px] transition ease-custom duration-500 group-hover:scale-105 group-hover:blur-[1.5px]" src={post.image} alt={post.title}>
            <div class="absolute top-4 left-4 bg-black/20 px-4 py-2 rounded-full text-white backdrop-blur-[5px] font-mono font-normal uppercase text-sm tracking-[0.5px]">
              {post.category}
            </div>
          </a>
        </div>
        <div class="mt-5 md:pl-7 md:mt-0">
          <span class="text-pColor dark:text-white/70">Posted on {post.date}</span>
          <h3 class="font-poppins font-semibold text-2xl lg:text-3xl mt-2">
            <a class="hover:underline dark:text-white" href="/blog/{post.slug}">{post.title}</a>
          </h3>
          <a class="inline-block border border-black border-dashed rounded-full px-6 py-3 mt-3 lg:mt-4 font-mono text-sm hover:bg-black hover:text-white transition ease-out duration-[120ms] dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black" href="/blog/{post.slug}">Read More</a>
        </div>
      </div>
    {/each}
  </div>
</div>
