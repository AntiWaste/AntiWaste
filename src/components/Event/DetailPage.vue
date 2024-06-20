<template>
    <div class="container mx-auto p-6">
    <!-- Back Button -->
    <div class="px-5 pb-2">
          <button
            @click="navigateBack"
            class="bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full px-4 py-2 focus:outline-none"
          >
            Back
          </button>
        </div>
      <div class=" p-6 rounded-lg">
        <img
          class="w-full h-128 object-cover rounded-lg"
          src="https://socialcompass.jp/wp-content/uploads/2023/06/01-1.jpeg"
          alt="Event Image"
        />
        <div class="mt-4">
          <h1 class="text-3xl font-bold text-green-600">Waste Summit Cambodia</h1>
          <p class="text-gray-500 mt-2">Event Date: June 25, 2025</p>
          <p class="text-gray-500 mt-2">Event Venue: Kompong Cham</p>
          <p class="text-gray-700 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

          </p>
          <p class="text-gray-700 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
      };
    },
    methods: {
      navigateBack() {
        this.$router.go(-1); // Navigate back to previous page
      },
  }
  };
  
  </script>
  
  <style>
  /* Add any additional styles here */
  </style>
  