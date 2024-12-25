<script>
  let currentTestimonial = 0;
  
  const testimonials = [
    {
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean massa. Cum sociis natoque penatibus et magnis",
      author: "Sandra Radford",
      role: "Project Manager",
      rating: 5,
      avatar: "/images/testimonial-avatar.jpg"
    },
    {
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      author: "John Smith",
      role: "Developer",
      rating: 5,
      avatar: "/images/testimonial-avatar.jpg"
    }
  ];

  function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  }

  function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  }
</script>

<section class="py-16 px-4">
  <div class="max-w-4xl mx-auto">
    <h2 class="text-2xl font-bold mb-8">
      <span class="text-gray-500 dark:text-gray-400">// </span>
      WHAT PEOPLE SAY
    </h2>

    <div class="relative bg-gray-900 rounded-lg p-8">
      <div class="flex mb-4">
        {#each Array(testimonials[currentTestimonial].rating) as _, i}
          <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        {/each}
      </div>

      <p class="text-gray-300 mb-8 text-lg">
        {testimonials[currentTestimonial].text}
      </p>

      <div class="flex items-center">
        <img 
          src={testimonials[currentTestimonial].avatar} 
          alt={testimonials[currentTestimonial].author}
          class="w-[70px] h-[70px] rounded-full mr-4"
        />
        <div>
          <h3 class="font-bold text-xl mb-1">{testimonials[currentTestimonial].author}</h3>
          <p class="text-gray-400">{testimonials[currentTestimonial].role}</p>
        </div>
      </div>

      <div class="absolute right-8 bottom-8 flex gap-2">
        <button 
          on:click={prevTestimonial}
          class="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gray-800 transition-colors"
          aria-label="Previous testimonial"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          on:click={nextTestimonial}
          class="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gray-800 transition-colors"
          aria-label="Next testimonial"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</section>
