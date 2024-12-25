<script>
  import About from '$lib/components/About.svelte';
  import Resume from '$lib/components/Resume.svelte';
  import Services from '$lib/components/Services.svelte';
  import Portfolio from '$lib/components/Portfolio.svelte';
  import Testimonial from '$lib/components/Testimonial.svelte';
  import Blog from '$lib/components/Blog.svelte';
</script>

<section id="about" class="w-full mb-6">
  <About />
</section>

<section id="blog" class="w-full mb-6">
  <Blog />
</section>


<section id="services" class="w-full mb-6">
  <Services />
</section>

<section id="portfolio" class="w-full mb-6">
  <Portfolio />
</section>

<section id="testimonials" class="w-full mb-6">
  <Testimonial />
</section>

<section id="resume" class="w-full mb-6">
  <Resume />
</section>
