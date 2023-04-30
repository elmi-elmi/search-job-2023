<template>
  <div class="w-full h-16 border-b border-solid border-brand-gray-1">
    <div v-if="onJobResultPage" class="flex items-center px-8 h-full">
      <font-awesome-icon :icon="['fas', 'search']" class="mr-3"> </font-awesome-icon>
      <span><span class="text-brand-green-1">1653</span> jobs matched</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TheSubnav',
  data() {
    return {
      onJobResultPage: true
    }
  }
}
</script>
