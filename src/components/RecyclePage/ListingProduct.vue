<template>
    <!-- Slideshow (Half Width) -->
    <div class="max-w-6xl mx-auto p-4">
      <!-- <vue-slick-carousel
        class="w-full"
        :dots="true"
        :autoplay="true"
        :autoplaySpeed="3000"
        :slidesToShow="1"
        :slidesToScroll="1"
      >
        <div v-for="item in slideshowItems" :key="item.id">
          <img
            :src="require(`../../assets/slideshow/${item.image}`)"
            alt="Slideshow Image"
            class="w-full h-64 object-cover rounded-lg"
          />
        </div>
      </vue-slick-carousel> -->
    </div>

    <div class="bg-green-100">
      <div class="px-4 py-2">
      
        <div class="max-w-6xl mx-auto flex items-center justify-between">
    
          <!-- Filter Menu -->
          <div class="flex items-center space-x-4">
            <button
              class="text-gray-700 hover:text-green-500 focus:outline-none"
              @click="filterByAll"
            >
              All
            </button>
            <button
              class="text-gray-700 hover:text-green-500 focus:outline-none"
              @click="filterByRecentlyViewed"
            >
              Recently Viewed
            </button>
            <button
              class="text-gray-700 hover:text-green-500 focus:outline-none"
              @click="filterByFavorites"
            >
              Favorites
            </button>
          </div>
          <!-- Search Bar -->
          <div class="flex items-center">
            <input
              type="text"
              class="w-64 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:border-green-500"
              placeholder="Search products..."
            />
            <button
              class="px-4 py-2 bg-green-500 text-white rounded-r-lg hover:bg-green-600 focus:outline-none"
            >
              Search
            </button>
          </div>
          <!-- Back Button -->
      <div >
        <button
          @click="navigateBack"
          class="bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full px-4 py-2 focus:outline-none"
        >
          Back
        </button>
      </div>
        </div>
      </div>
    </div>
  
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 px-20 py-5">
        <div v-for="item in items" :key="item.id" class="w-auto overflow-hidden rounded-xl border">
          <img
            class="object-cover h-64 w-full"
            :src="require(`../../assets/recycledproduct/${item.image}`)"
            alt="Product Image"
          />
  
          <div class="p-4">
            <h3 class="text-lg font-semibold">{{ item.title }}</h3>
            <div class="flex items-center text-sm text-gray-600">
              <span class="me-1">{{ item.store }}</span>
              <i class="text-red-500 mdi mdi-fire-circle text-sm"></i>
            </div>
            <div class="flex items-center mt-2">
              <!-- Replace with your actual rating component -->
              <div class="text-gray-600 ms-4">{{ item.rating }} ({{ item.reviews }})</div>
            </div>
            <p class="text-sm text-gray-600 mt-2">Location: {{ item.location }}</p>
            <p class="text-sm text-gray-600">Contact Number: {{ item.contact }}</p>
            <hr class="my-4">
            <div class="text-lg font-semibold">${{ item.price }}</div>
            <div>
              <router-link :to="'/product-detail/' + item.id">
                <button class="mt-2 px-4 py-2 text-sm text-green-600 border border-green-600 rounded-lg hover:bg-green-100 focus:outline-none">
                  View Detail
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
  
     
 
  </template>
  
  <script>
  
  export default {
    data() {
      return {
        loading: false,
        items: [
          {
            id: 1,
            title: "Toothbrush Holder",
            store: "Hannah's Store",
            rating: 4.5,
            reviews: 413,
            location: "Preah Vihear",
            contact: "012207047",
            price: 4.5,
            image: "image 34.png",
          },
          {
            id: 2,
            title: "Toothbrush Holder",
            store: "Hannah's Store",
            rating: 4.5,
            reviews: 413,
            location: "Preah Vihear",
            contact: "012207047",
            price: 4.5,
            image: "image 34.png",
          },
          {
            id: 3,
            title: "Toothbrush Holder",
            store: "Hannah's Store",
            rating: 4.5,
            reviews: 413,
            location: "Preah Vihear",
            contact: "012207047",
            price: 4.5,
            image: "image 34.png",
          },
          {
            id: 4,
            title: "Toothbrush Holder",
            store: "Hannah's Store",
            rating: 4.5,
            reviews: 413,
            location: "Preah Vihear",
            contact: "012207047",
            price: 4.5,
            image: "image 34.png",
          },
          {
            id: 5,
            title: "Toothbrush Holder",
            store: "Hannah's Store",
            rating: 4.5,
            reviews: 413,
            location: "Preah Vihear",
            contact: "012207047",
            price: 4.5,
            image: "image 34.png",
          },
          {
            id: 6,
            title: "Toothbrush Holder",
            store: "Hannah's Store",
            rating: 4.5,
            reviews: 413,
            location: "Preah Vihear",
            contact: "012207047",
            price: 4.5,
            image: "image 34.png",
          },
          // Add more items as needed
        ],
      };
    },
    methods: {
      filterByAll() {
        // Implement logic to filter by all products
        console.log("Filter by All");
      },
      filterByRecentlyViewed() {
        // Implement logic to filter by recently viewed products
        console.log("Filter by Recently Viewed");
      },
      filterByFavorites() {
        // Implement logic to filter by favorite products
        console.log("Filter by Favorites");
      },
      navigateBack() {
        // Navigate back to the previous page
        this.$router.go(-1); // This will go back one step in the browser history
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add scoped styles here */
  </style>
  