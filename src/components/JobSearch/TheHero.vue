<template>
  <main class="flex flex-col  h-screen pt-10 pb-20">
    <section>
      <div class="grid grid-cols-12">
        <div class="col-span-1 col-start-1 ">col 1</div>
        <div class="col-span-5 col-start-2 ">
          <the-headline />
          <job-search-form/>
        </div>

        <div class="col-span-5 col-start-7  self-center justify-self-center ">
          <img
            class="h-80 w-80 object-contain"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png"
          />
        </div>
        <div class="col-span-2 col-start-12 ">col 4</div>
      </div>
    </section>
  </main>
</template>
<script>
import TheHeadline from '@/components/JobSearch/TheHeadline.vue'
import JobSearchForm from '@/components/JobSearch/JobSearchForm.vue';

export default {
  name: 'TheHero',
  components: { TheHeadline, JobSearchForm }
}
</script>
