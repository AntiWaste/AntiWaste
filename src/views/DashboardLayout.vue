<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Sidebar -->
    <div class="fixed max-sm:hidden md:relative md:translate-x-0 z-40 flex flex-col w-64 bg-gray-800">
      <div class="flex items-center justify-center h-16 bg-green-900">
        <span class="text-white font-bold uppercase">Antiwaste Dashboard</span>
      </div>
      <div class="flex flex-col flex-1 overflow-y-auto">
        <nav class="flex-1 px-2 py-4 bg-gray-800">
          <router-link to="/" class="flex items-center px-4 py-2 text-gray-100 hover:text-green-700">
            <ViewGridAddIcon class="h-6 w-6 mr-2"/>
            Dashboard
          </router-link>
          <router-link to="/user-info" class="flex items-center px-4 py-2 mt-2 text-gray-100 hover:text-green-700">
            <UsersIcon class="h-6 w-6 mr-2"/>
            User
          </router-link>
          <router-link to="/recycle-info" class="flex items-center px-4 py-2 mt-2 text-gray-100 hover:text-green-700">
            <LightBulbIcon class="h-6 w-6 mr-2"/>
            Recycle
          </router-link>
          <router-link to="/waste-info" class="flex items-center px-4 py-2 mt-2 text-gray-100 hover:text-green-700">
            <TrashIcon class="h-6 w-6 mr-2"/>
            Waste 
          </router-link>
          <router-link to="/event-info" class="flex items-center px-4 py-2 mt-2 text-gray-100 hover:text-green-700">
            <LibraryIcon class="h-6 w-6 mr-2"/>
            Event 
          </router-link>
  
          <router-link to="/contact-info" class="flex items-center px-4 py-2 mt-2 text-gray-100 hover:text-green-700">
            <PhoneIcon class="h-6 w-6 mr-2"/>
            Contact
          </router-link>
          <router-link to="/product-info" class="flex items-center px-4 py-2 mt-2 text-gray-100 hover:text-green-700">
            <ShoppingCartIcon class="h-6 w-6 mr-2"/>
            Product 
          </router-link>
          <router-link to="/" class="flex items-center px-4 py-2 mt-2 text-gray-100 hover:text-green-700">
            <ChevronDoubleLeftIcon class="h-6 w-6 mr-2"/>
            Back to Homepage
          </router-link>
          <!-- <router-link to="/" class="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
            <CogIcon class="h-6 w-6 mr-2"/>
            Settings
          </router-link> -->
        </nav>
      </div>
    </div>

    <!-- Main content -->
    <div class="flex flex-col flex-1 overflow-y-auto">
      <div class="flex items-center justify-between h-16 bg-white border-b border-gray-200 px-4">
        <button @click="toggleSidebar" class="text-gray-500 focus:outline-none focus:text-gray-700 md:hidden">
          <MenuIcon class="h-6 w-6"/>
        </button>
        <div class="flex items-center">
          <input class="mx-4 w-full border rounded-md px-4 py-2" type="text" placeholder="Search" />
        </div>
        <div class="flex items-center pr-4">
          <router-link to="/register">
      <button 
        class="flex items-center text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700" 
        @click.prevent="confirmLogout"
      >
        <LogoutIcon class="h-6 w-6"/>
      </button>
    </router-link>
        </div>
      </div>
      <div class="p-4">
        <router-view>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script>
import {
LogoutIcon,
ChevronDoubleLeftIcon,
LibraryIcon,
LightBulbIcon,
TrashIcon,
ShoppingCartIcon,
// CogIcon,
MenuIcon,
PhoneIcon,
UsersIcon,
ViewGridAddIcon
} from '@heroicons/vue/solid';

export default {
  components: {
    ViewGridAddIcon,
    UsersIcon,
    ShoppingCartIcon,
    ChevronDoubleLeftIcon,
    LightBulbIcon,
    TrashIcon,
    PhoneIcon,
    LibraryIcon,
    // CogIcon,
    MenuIcon,
    LogoutIcon
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
    confirmLogout() {
      if (confirm("Do you want to logout your account?")) {
        // Clear any authentication tokens or user data here
        // localStorage.removeItem('token'); // Example of token removal
        this.$router.push('/register');
      }
    }
  }
};
</script>

