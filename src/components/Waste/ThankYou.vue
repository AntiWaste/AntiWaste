<!-- src/components/ThankYouPage.vue -->
<template>
    <div class="flex items-center justify-center h-screen bg-green-100">
      <div class="text-center">
        <h1 class="text-4xl font-bold mb-4">Thank You!</h1>
        <p class="text-lg text-gray-700">Your Waste has been posted successfully.</p>
        <router-link to="/waste-listing" class="mt-4 inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded">
          Go Back to WastePage
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ThankYouPage'
  };
  </script>
  
  <style scoped>
  /* Add any additional styles here */
  </style>
  