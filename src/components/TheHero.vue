<template>
  <main class="flex flex-col bg-yellow-200 h-screen pt-10 pb-20">
    <section>
      <div class="grid grid-cols-12">
        <div class="col-span-1 col-start-1 border border-blue-100">col 1</div>
        <div class="col-span-5 col-start-2 border border-blue-100">
          <the-headline />
        </div>
        <div class="col-span-5 col-start-7 border border-blue-100">col 3</div>
        <div class="col-span-2 col-start-12 border border-blue-100">col 4</div>
      </div>
    </section>
  </main>
</template>
<script>
import TheHeadline from './TheHeadline.vue'
export default {
  name: 'TheHero',
  components: { TheHeadline }
}
</script>
