<template>
  <v-toolbar app class="hidden lg:flex px-4 py-2 bg-white shadow-md">
    <img :src="logo" alt="Logo" class="w-48" />
    <v-spacer></v-spacer>
    <v-toolbar-items class="bg-white">
      <router-link
        v-for="item in nav"
        :key="item.icon"
        :to="item.link"
        :title="item.title"
        class="no-underline text-center flex justify-center items-center px-5 text-gray-700 hover:text-green-500"
        :class="{ 'text-green-500 font-bold': activeLink === item.link }"
        @click="handleClick(item.link)"
      >
        {{ item.text }}
      </router-link>
    </v-toolbar-items>
    <div class="flex space-x-2">
      <router-link to="/login" class="btn-login">
        Login
      </router-link>
      <router-link to="/register" class="btn-register">
        Register
      </router-link>
    </div>
  </v-toolbar>
</template>

<script>
export default {
  name: 'NavTop',
  data() {
    return {
      dialog: false,
      logo: require('../assets/anti-waste-logo.png'),
      activeLink: '/',
      nav: [
        { icon: 'home', text: 'Home', link: '/', title: 'Go back home page' },
        { icon: 'info', text: 'Waste', link: '/waste', title: 'Learn more about waste and recycling' },
        { icon: 'assignment_turned_in', text: 'Recycle', link: '/recycle', title: 'Some stuff that needs doing' },
        { icon: 'email', text: 'Event', link: '/event', title: 'Subscribe to our newsletter' },
        { icon: 'email', text: 'Contact', link: '/contact', title: 'Get in touch with us!' },
      ],
    };
  },
  methods: {
    handleClick(link) {
      this.activeLink = link;
    },
  },
};
</script>

<style scoped>
.btn-login {
  @apply bg-green-500 text-white rounded-full px-5 py-2 text-sm font-semibold shadow hover:bg-green-600;
}

.btn-register {
  @apply border border-green-500 text-green-700 rounded-full px-5 py-2 text-sm font-semibold shadow hover:bg-green-100;
}
</style>
