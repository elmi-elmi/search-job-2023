<template>
  <main class="flex flex-col bg-yellow-200 h-screen pt-10 pb-20">
    <section>
      <div class="grid grid-cols-12">
        <div class="col-span-1 col-start-1 ">col 1</div>
        <div class="col-span-5 col-start-2 ">
          <the-headline />
          <job-search-form/>
        </div>

        <div class="col-span-5 col-start-7 ">col 3</div>
        <div class="col-span-2 col-start-12 ">col 4</div>
      </div>
    </section>
  </main>
</template>
<script>
import TheHeadline from './TheHeadline.vue'
import JobSearchForm from './JobSearchForm.vue';

export default {
  name: 'TheHero',
  components: { TheHeadline, JobSearchForm }
}
</script>
