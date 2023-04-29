<template>
  <button :class="buttonClass">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'ActionButton',
  props: {
    text: {
      type: String,
      default: 'Button'
    },
    type: {
      type: String,
      default: 'primary'
    }
  },
  computed: {
    buttonClass() {
      return { [this.type]: true }
    }
  }
}
</script>

<style scoped>
button {
  @apply border-0 rounded py-3 px-5 font-medium;
}
.primary {
  @apply bg-brand-blue-1  text-white hover:shadow-blue;
}
.secondary {
  @apply bg-transparent text-brand-blue-1 hover:bg-brand-blue-2 hover:text-white;
}
</style>
