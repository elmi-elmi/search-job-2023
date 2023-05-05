<template>
  <h1 class="mb-14 text-8xl font-bold tracking-tighter">
    <span :class="actionClasses">{{ action }}</span>
    <br />
    for everyone
  </h1>
  <h2 class="text-3xl font-light">Find your next job at Bobo Corp.</h2>
</template>

<script>
import nextElementInList from '@/utils/nextElementInList.js';
export default {
  name: 'TheHealine',
  data() {
    return {
      action: 'Build',
      actions: ['Build', 'Code', 'Create', 'Design'],
      intervalId: null
    }
  },
  computed: {
    actionClasses() {
      return {
        [this.action.toLowerCase()]: true
      }
    }
  },
  created() {
    this.changeHeadline()
  },
  beforeUnmount() {
    clearInterval(this.intervalId)
  },
  methods: {
    changeHeadline() {
      this.intervalId = setInterval(() => {
        this.action = nextElementInList(this.actions, this.action)
      }, 3000)
    }
  }
}
</script>

<style scoped>
.build {
  color: #1a73e8;
}
.code {
  color: #d93025;
}
.design {
  color: #f9ab00;
}
.create {
  color: #34a853;
}
</style>
