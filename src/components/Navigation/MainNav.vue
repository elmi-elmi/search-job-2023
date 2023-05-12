<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed top-0 left-0 h-16 bg-white w-full">
      <div class="h-full px-8 flex items-center border-solid border-brand-gray-1 border-b">
        <a :href="url" class="text-xl flex h-full items-center">{{ company }}</a>
        <div class="h-full pl-12">
          <ul class="flex h-full items-center">
            <li v-for="item in menuItems" :key="item" class="h-full ml-9 first:ml-0">
              <a href="" class="h-full flex items-center">{{ item }}</a>
            </li>
          </ul>
        </div>
        <div class="h-full ml-auto flex items-center">
          <profile-image v-if="isLoggedIn"></profile-image>
          <action-button v-else text="Sign in" type="primary" @click="loginUser"></action-button>
        </div>
      </div>
      <the-subnav v-if="isLoggedIn"></the-subnav>
    </div>
  </header>
</template>

<script>
import TheSubnav from '@/components/Navigation/TheSubnav.vue'
import ProfileImage from '@/components/Navigation/ProfileImage.vue'
import ActionButton from '@/components/Shared/ActionButton.vue'
export default {
  name: 'MainNav',
  name: 'MainNav', 
  components: { ActionButton, ProfileImage, TheSubnav },
  data() {
    return {
      company: 'Bobo Careers',
      url: 'https://career.googl.com',
      menuItems: ['Teams', 'Locations', 'Life at Bobo Corp', 'How we hire', 'Students', 'Jobs'],
      isLoggedIn: false
    }
  },
  computed: {
    headerHeightClass() {
      return {
        'h-16': !this.isLoggedIn,
        'h-32': this.isLoggedIn
      }
    }
  },
  methods: {
    loginUser() {
      this.isLoggedIn = true
    }
  }
}
</script>
