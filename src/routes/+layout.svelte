<script>
  export const prerender = true;
  export const ssr = true;
  import '../app.postcss';
  import PageLayout from '$lib/components/PageLayout.svelte';
  import { getStores } from '$app/stores';

  const { page } = getStores();
</script>

{#if $page.url.pathname === '/bio'}
  <div class="min-h-screen bg-black text-white overflow-x-hidden">
    <div class="container max-w-[1320px] mx-auto px-5 xl:px-3">
      <div class="py-7 mb-6">
        <a href="/" class="inline-block group">
          <h1 class="text-5xl xl:text-7xl font-poppins font-semibold text-white flex items-center gap-3 transition-opacity duration-200 group-hover:opacity-80">
            Adam <span class="stroke-text opacity-70">Krüger</span>
          </h1>
        </a>
      </div>
      
      <div class="min-h-[calc(100vh-5rem)] pt-6">
        <slot />
      </div>
    </div>
  </div>
{:else}
  <PageLayout>
    <slot />
  </PageLayout>
{/if}

<style lang="postcss">
  .stroke-text {
    color: transparent;
    -webkit-text-stroke: 1px theme(colors.white);
  }
</style>
