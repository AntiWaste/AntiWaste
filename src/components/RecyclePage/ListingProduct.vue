<template>
  <div class="w-full p-4">
    <template v-if="isLoading">
      <LoadingSpinner />
    </template>
    <template v-else>
      <!-- Back Button -->
      <div class="px-5 pb-2">
        <button
          @click="navigateBack"
          class="bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full px-4 py-2 focus:outline-none"
        >
          Back
        </button>
      </div>
      <!-- Welcome Banner -->
      <v-card max-height="230">
        <v-img
          class="text-white flex justify-center items-center"
          height="230"
          src="../../assets/recycledproduct/image_cover.jpg"
          cover
        >
          <div class="flex flex-col justify-center items-center">
            <div class="text-4xl font-bold mb-3">
              Discover Sustainable Solutions - Explore Our Range of Eco-Friendly
              Products
            </div>
            <router-link to="/product-post">
              <button
                class="mt-2 px-4 py-2 font-bold bg-green-600 border rounded-lg text-white hover:bg-green-800 hover:text-white focus:outline-none"
              >
                Sell Your Product Now
              </button>
            </router-link>
          </div>
        </v-img>
      </v-card>

      <!-- Filter and Search Bar -->
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
                v-model="searchQuery"
                type="text"
                class="w-64 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:border-green-500"
                placeholder="Search products..."
              />
              <button
                @click="searchProducts"
                class="px-4 py-2 bg-green-500 text-white rounded-r-lg hover:bg-green-600 focus:outline-none"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Product Grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 px-20 py-5">
        <div
          v-for="item in paginatedItems"
          :key="item.id"
          class="w-auto overflow-hidden rounded-xl border"
        >
          <img
            class="object-cover h-64 w-full"
            :src="item.image_url"
            alt="Product Image"
          />

          <div class="p-4">
            <h3 class="text-lg font-semibold">{{ item.productName }}</h3>
            <div class="flex items-center text-sm text-gray-600">
              <span class="me-1">{{ item.owner }}</span>
              <!-- Replace with your actual rating component -->
              <i class="text-red-500 mdi mdi-fire-circle text-sm"></i>
            </div>
            <div class="flex items-center mt-2">
              <!-- Replace with your actual rating component -->
              <div class="text-gray-600 ms-4">
                {{ item.rating }} ({{ item.reviews }})
              </div>
            </div>
            <p class="text-sm text-gray-600 mt-2">
              Location: {{ item.location }}
            </p>
            <p class="text-sm text-gray-600">
              Contact Number: {{ item.contactNumber }}
            </p>
            <hr class="my-4" />
            <div class="text-lg font-semibold">${{ item.price }}</div>
            <div>
              <router-link :to="'/product-detail/' + item.id">
                <button
                  class="mt-2 px-4 py-2 text-sm text-green-600 border border-green-600 rounded-lg hover:bg-green-100 focus:outline-none"
                >
                  View Detail
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- Pagination Controls -->
      <div class="flex justify-center mt-5">
        <button
          :disabled="currentPage === 1"
          @click="currentPage -= 1"
          class="px-4 py-2 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full mx-2 focus:outline-none"
        >
          Previous
        </button>
        <span class="text-gray-700">{{ currentPage }}</span>
        <button
          :disabled="currentPage === totalPages"
          @click="currentPage += 1"
          class="px-4 py-2 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full mx-2 focus:outline-none"
        >
          Next
        </button>
      </div>
    </template>
  </div>
</template>

<script>
import axios from "axios";
import LoadingSpinner from "../LoadingSpinner.vue";
import { API_BASE_URL } from "@/config";

export default {
  name: "WelcomeCard",
  components: {
    LoadingSpinner,
  },
  data() {
    return {
      isLoading: true,
      items: [], // Store fetched products
      currentPage: 1,
      itemsPerPage: 8,
      searchQuery: "", // Store search query
      filteredItems: [], // Store filtered items
    };
  },
  computed: {
    // Calculate total pages based on filtered items count and itemsPerPage
    totalPages() {
      return Math.ceil(this.filteredItems.length / this.itemsPerPage);
    },
    // Calculate paginated items based on currentPage and itemsPerPage
    paginatedItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      return this.filteredItems.slice(
        startIndex,
        startIndex + this.itemsPerPage
      );
    },
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      axios
        .get(`${API_BASE_URL}products`)
        .then((response) => {
          this.items = response.data;
          this.filteredItems = this.items; // Initialize filteredItems with all items
          this.isLoading = false;
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
          this.isLoading = false;
        });
    },
    navigateBack() {
      this.$router.go(-1); // Navigate back to previous page
    },
  },
};
</script>

<style scoped>
/* Add any component-specific styles here if necessary */
</style>
