<template>
  <div>
    <!-- Desktop navigation -->
    <div class="max-sm:hidden">
      <v-toolbar app class="md:flex px-4 bg-white">
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
          <router-link
            v-if="isAdmin"
            to="/dashboard"
            title="Admin Dashboard"
            class="no-underline text-center flex justify-center items-center px-5 text-gray-700 hover:text-green-500"
            :class="{ 'text-green-500 font-bold': activeLink === '/dashboard' }"
            @click="handleClick('/dashboard')"
          >
            Dashboard
          </router-link>
        </v-toolbar-items>
        <div class="flex space-x-2">
          <v-btn
            v-if="isAuthenticated"
            @click="handleLogout"
            class="btn-logout border border-red-500 text-red-700 rounded-full px-5 py-2 text-sm font-semibold hover:bg-red-100"
          >
            Logout
          </v-btn>
          <router-link
            v-if="!isAuthenticated"
            to="/login"
            class="bg-green-500 text-white rounded-full px-5 py-2 text-sm font-semibold hover:bg-green-600"
          >
            Login
          </router-link>
          <router-link
            v-if="!isAuthenticated"
            to="/register"
            class="border border-green-500 text-green-700 rounded-full px-5 py-2 text-sm font-semibold hover:bg-green-100"
          >
            Register
          </router-link>
        </div>
      </v-toolbar>
    </div>

    <!-- Mobile navigation -->
    <div app dense class="flex md:hidden justify-center items-center bg-white">
      <div class="p-2">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      </div>
      <img :src="logo" alt="Logo" class="w-32" />
      <v-spacer></v-spacer>
      <div class="flex space-x-2">
        <template v-if="isAuthenticated">
          <router-link
            to="/profile"
            class="btn-profile bg-green-500 text-white rounded-full px-5 py-2 text-sm font-semibold hover:bg-green-600"
          >
            Profile
          </router-link>
          <v-btn
            @click="handleLogout"
            class="btn-logout border border-red-500 text-red-700 rounded-full px-5 py-2 text-sm font-semibold hover:bg-red-100"
          >
            Logout
          </v-btn>
        </template>
        <template v-else>
          <router-link
            to="/login"
            class="bg-green-500 text-white rounded-full px-5 py-2 text-sm font-semibold hover:bg-green-600"
          >
            Login
          </router-link>
          <router-link
            to="/register"
            class="border border-green-500 text-green-700 rounded-full px-5 py-2 text-sm font-semibold hover:bg-green-100"
          >
            Register
          </router-link>
        </template>
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
            <v-list-item-title
              :class="{ 'text-green-500 font-bold': activeLink === item.link }"
            >
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-if="isAdmin"
          class="flex justify-center"
          to="/dashboard"
          @click="handleClick('/dashboard'); drawer = false"
        >
          <v-list-item-icon>
            <v-icon>dashboard</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title
              :class="{ 'text-green-500 font-bold': activeLink === '/dashboard' }"
            >
              Dashboard
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'NavTop',
  data() {
    return {
      drawer: false,
      logo: require('../assets/anti-waste-logo.png'),
      activeLink: '/',
      nav: [
        { icon: 'home', text: 'Home', link: '/', title: 'Go back home page' },
        { icon: 'info', text: 'Waste', link: '/waste', title: 'Learn more about waste and recycling' },
        { icon: 'assignment_turned_in', text: 'Recycle', link: '/recycle', title: 'Some stuff that needs doing' },
        { icon: 'event', text: 'Event', link: '/event', title: 'Subscribe to our newsletter' },
        { icon: 'contact_mail', text: 'Contact', link: '/contact', title: 'Get in touch with us!' },
        { icon: 'dashboard', text: 'Dashboard', link: '/dashboard-layout', title: 'Manage your user' },
      ],
    };
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'user', 'isAdmin']),
  },
  methods: {
    ...mapActions(['logout']),
    handleClick(link) {
      this.activeLink = link;
    },
    handleLogout() {
      this.logout();
    },
  },
};
</script>

<style scoped>
/* Add any scoped styles here */
</style>
