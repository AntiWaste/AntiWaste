<template>
  <div>
    <!-- Desktop navigation -->
    <div class="max-sm:hidden">
    <v-toolbar app class=" md:flex px-4 bg-white">
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
        <router-link to="/login" class="bg-green-500 text-white rounded-full px-5 py-2 text-sm font-semibold hover:bg-green-600">
          Login
        </router-link>
        <router-link to="/register" class="border border-green-500 text-green-700 rounded-full px-5 py-2 text-sm font-semibold hover:bg-green-100">
          Register
        </router-link>
      </div>
    </v-toolbar>
  </div>

    <!-- Mobile navigation -->
    <div app dense class="flex md:hidden justify-center items-center bg-white">
      <div class="p-2"><v-app-bar-nav-icon @click="drawer = !drawer" ></v-app-bar-nav-icon></div>
      <img :src="logo" alt="Logo" class="w-32" />
      <v-spacer></v-spacer>
      <div class="flex space-x-2">
        <template v-if="isLoggedIn">
          <router-link to="/profile" class="btn-profile bg-green-500 text-white rounded-full px-5 py-2 text-sm font-semibold hover:bg-green-600">
            Profile
          </router-link>
          <v-btn @click="logout" class="btn-logout border border-red-500 text-red-700 rounded-full px-5 py-2 text-sm font-semibold hover:bg-red-100">
            Logout
          </v-btn>
        </template>
        <div>
          <router-link to="/login" class=" bg-green-500 text-white rounded-full px-5 py-2 text-sm font-semibold hover:bg-green-600">
            Login
          </router-link>
          <router-link to="/register" class=" border border-green-500 text-green-700 rounded-full px-5 py-2 text-sm font-semibold hover:bg-green-100">
            Register
          </router-link>
        </div>
      </div>
    </div>

    <!-- Drawer for mobile -->
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list dense>
        <v-list-item
          v-for="item in nav"
          class="flex justify-center"
          :key="item.icon"
          :to="item.link"
          @click="handleClick(item.link); drawer = false"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title :class="{ 'text-green-500 font-bold': activeLink === item.link }">
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'NavTop',
  data() {
    return {
      drawer: false,
      dialog: false,
      logo: require('../assets/anti-waste-logo.png'),
      activeLink: '/',
      isLoggedIn: false, // Adjust this based on your authentication state
      nav: [
        { icon: 'home', text: 'Home', link: '/', title: 'Go back home page' },
        { icon: 'info', text: 'Waste', link: '/waste', title: 'Learn more about waste and recycling' },
        { icon: 'assignment_turned_in', text: 'Recycle', link: '/recycle', title: 'Some stuff that needs doing' },
        { icon: 'event', text: 'Event', link: '/event', title: 'Subscribe to our newsletter' },
        { icon: 'contact_mail', text: 'Contact', link: '/contact', title: 'Get in touch with us!' },
      ],
    };
  },
  methods: {
    handleClick(link) {
      this.activeLink = link;
    },
    logout() {
      // Implement logout logic here
      this.isLoggedIn = false;
    },
    checkAuthStatus() {
      // Replace with real authentication status check
      // Example: return !!this.$store.state.user;
      return false; // Default to not logged in
    },
  },
  created() {
    // Check user's authentication status when component is created
    this.isLoggedIn = this.checkAuthStatus();
  },
  
};
</script>
