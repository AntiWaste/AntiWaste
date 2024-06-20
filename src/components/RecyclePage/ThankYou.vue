<!-- src/components/ThankYouPage.vue -->
<template>
    <div class="flex items-center justify-center h-screen bg-gray-100">
      <div class="text-center">
        <h1 class="text-4xl font-bold mb-4">Thank You!</h1>
        <p class="text-lg text-gray-700">Your product has been posted successfully.</p>
        <router-link to="/listing-product" class="mt-4 inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-2 px-4 rounded">
          Go to Shoppage
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
  