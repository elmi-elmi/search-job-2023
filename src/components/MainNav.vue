<template>
  <header class="w-full text-sm bg-blue-50">
    <div class="fixed top-0 left-0 h-16 bg-red-50 w-full">
      <div class="h-full px-8 flex items-center text-xl border-solid border-brand-gray-1 border-b">
        <a href="/">{{ company }}</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MainNav',
  data() {
    return {
      company: 'Boobo Careers'
    }
  }
}
</script>
