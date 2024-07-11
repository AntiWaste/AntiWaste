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
              Discover Sustainable Solutions - Explore Our Range of Eco-Friendly Wastes
            </div>
            <router-link to="/waste-form">
              <button
                class="mt-2 px-4 py-2 font-bold bg-green-600 border rounded-lg text-white hover:bg-green-800 hover:text-white focus:outline-none"
              >
                Sell Your Waste Now
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
                :class="{ 'text-green-500 font-bold': activeFilter === 'All' }"
                @click="filterByAll"
                class="text-gray-700 hover:text-green-500 focus:outline-none transition-colors duration-200"
              >
                All
              </button>
              <button
                v-for="(category, index) in categories"
                :key="index"
                :class="{ 'text-green-500 font-bold': activeFilter === category.title }"
                @click="filterByCategory(category.title)"
                class="text-gray-700 hover:text-green-500 focus:outline-none transition-colors duration-200"
              >
                {{ category.title }}
              </button>
            </div>
            <!-- Search Bar -->
            <div class="flex items-center">
              <input
                v-model="searchQuery"
                type="text"
                class="w-64 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:border-green-500"
                placeholder="Search wastes..."
              />
              <button
                @click="searchWastes"
                class="px-4 py-2 bg-green-500 text-white rounded-r-lg hover:bg-green-600 focus:outline-none"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Grid of Wastes -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 px-20 py-5">
        <div
          v-for="item in paginatedItems"
          :key="item.id"
          class="w-auto overflow-hidden rounded-xl border"
        >
          <img
            v-if="item.photo && item.photo.length > 0"
            class="object-cover h-64 w-full"
            :src="getPhotoUrl(item.photo)"
            alt="Waste Image"
          />
          <div v-else class="object-cover h-64 w-full bg-gray-200 flex items-center justify-center text-gray-500">
            No Image Available
          </div>
          <div class="p-4">
            <h3 class="text-lg font-semibold">{{ item.name }}</h3>
            <div class="flex items-center text-sm text-gray-600">
              <span class="me-1">{{ item.owner }}</span>
              <i class="text-red-500 mdi mdi-fire-circle text-sm"></i>
            </div>
            <p class="text-sm text-gray-600 mt-2">Location: {{ item.location }}</p>
            <p class="text-sm text-gray-600">Contact Number: {{ item.contact_number }}</p>
            <hr class="my-4">
            <div class="text-lg font-semibold">${{ item.price }}</div>
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
        <span class="px-4 py-2 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full mx-2 focus:outline-none">{{ currentPage }}</span>
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
import { API_BASE_URL } from "@/config";
import axios from "axios";
import LoadingSpinner from "../LoadingSpinner.vue";

export default {
  name: "WasteListing",
  components: {
    LoadingSpinner,
  },
  data() {
    return {
      isLoading: true,
      categories: [
        { id: 1, title: 'Glass Bottles' },
        { id: 2, title: 'Plastics' },
        { id: 3, title: 'Metals' },
        { id: 4, title: 'Papers' },
        { id: 5, title: 'E-Waste' },
        { id: 6, title: 'Textiles' },
      ],
      wasteItems: [], // Store fetched wastes
      currentPage: 1,
      itemsPerPage: 8,
      searchQuery: "", // Store search query
      filteredItems: [], // Store filtered items
      activeFilter: 'All', // Track active filter category
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
      return this.filteredItems.slice(startIndex, startIndex + this.itemsPerPage);
    },
  },
  mounted() {
    this.fetchWastes();
  },
  methods: {
    fetchWastes() {
      axios
        .get(`${API_BASE_URL}wastes`)
        .then((response) => {
          console.log(response.data); // Log the response data to inspect it
          this.wasteItems = response.data;
          this.filteredItems = this.wasteItems; // Initialize filteredItems with all items
          this.isLoading = false;
        })
        .catch((error) => {
          console.error("Error fetching wastes:", error);
          this.isLoading = false;
        });
    },
    filterByAll() {
      this.filteredItems = this.wasteItems; // Reset to all items
      this.activeFilter = 'All';
    },
    filterByCategory(categoryTitle) {
      // Filter items based on selected category title
      this.filteredItems = this.wasteItems.filter(item => item.categories.includes(categoryTitle));
      this.activeFilter = categoryTitle;
    },
    searchWastes() {
      if (this.searchQuery.trim() === "") {
        this.filteredItems = this.wasteItems; // Reset to all items if search query is empty
      } else {
        // Filter items based on searchQuery
        this.filteredItems = this.wasteItems.filter((item) =>
          item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
    },
    navigateBack() {
      this.$router.go(-1); // Navigate back to previous page
    },
    getPhotoUrl(photo) {
      // Return the photo URL directly assuming photo is a direct URL string
      return photo;
    }
  },
};
</script>


