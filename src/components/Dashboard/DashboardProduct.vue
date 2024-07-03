<template>
    <div>
      <h1 class="text-2xl font-bold mb-4">Product Listing</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <!-- Loop through products and display each -->
        <div v-for="product in products" :key="product.id" class="bg-white shadow-md rounded-md p-4">
          <h2 class="text-lg font-semibold">{{ product.name }}</h2>
          <p class="text-gray-600">${{ product.price }}</p>
          <p class="text-gray-700 mt-2">{{ product.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>

  
  export default {
    data() {
      return {
        products: [
          { id: 1, name: 'Product A', price: 19.99, description: 'Description for Product A' },
          { id: 2, name: 'Product B', price: 29.99, description: 'Description for Product B' },
          { id: 3, name: 'Product C', price: 39.99, description: 'Description for Product C' },
          { id: 4, name: 'Product D', price: 49.99, description: 'Description for Product D' },
          { id: 5, name: 'Product E', price: 59.99, description: 'Description for Product E' },
          { id: 6, name: 'Product F', price: 69.99, description: 'Description for Product F' }
        ]
      };
    },
    // If you want to use imported data later, you can assign it to the products array.
    created() {
      // For example, if productsData is an array of products fetched from an API.
      // this.products = productsData;
    }
  };
  </script>
  
  <style scoped>
  /* Add your scoped styles here */
  </style>
  