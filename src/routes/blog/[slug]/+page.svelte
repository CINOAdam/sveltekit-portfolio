<script>

  // This would typically come from a database or CMS
  const blogPost = {
    title: "Blog Post Title",
    date: "Nov 20, 2023",
    category: "Category",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/images/blog-img.png"
  };
</script>

<div class="container max-w-[1320px] mx-auto px-5 xl:px-3">
  <div class="bg-white dark:bg-boxDark rounded-lg px-6 py-8 md:px-8 md:py-10 lg:p-12 shadow-sectionBoxShadow">
    <div class="max-w-3xl mx-auto">
      <div class="mb-8">
        <span class="text-pColor dark:text-white/70">Posted on {blogPost.date}</span>
        <h1 class="text-4xl lg:text-5xl font-poppins font-semibold mt-4 mb-6 dark:text-white">{blogPost.title}</h1>
        <div class="inline-block bg-black/20 px-4 py-2 rounded-full text-white backdrop-blur-[5px] font-mono font-normal uppercase text-sm tracking-[0.5px]">
          {blogPost.category}
        </div>
      </div>
      
      <div class="mb-8">
        <img src={blogPost.image} alt={blogPost.title} class="w-full rounded-lg">
      </div>
      
      <div class="prose prose-lg dark:prose-invert max-w-none">
        <p class="text-pColor dark:text-white/70">{blogPost.content}</p>
      </div>
      
      <div class="mt-8">
        <a href="/" class="inline-block border border-black border-dashed rounded-full px-6 py-3 font-mono text-sm hover:bg-black hover:text-white transition ease-out duration-[120ms] dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black">
          Back to Home
        </a>
      </div>
    </div>
  </div>
</div>
