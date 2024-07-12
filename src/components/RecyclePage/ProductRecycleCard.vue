<template>
  <div class="grid grid-cols-2 md:grid-cols-3 gap-8 px-20 py-5">
    <div v-for="item in filteredItems" :key="item.id" class="w-auto overflow-hidden rounded-xl border">
      <img
        class="object-cover h-64 w-full"
        :src="item.img"
        alt="Product Image"
      />
      <div class="p-4">
        <h3 class="text-lg font-semibold">{{ item.name }}</h3>
        <div class="flex items-center text-sm text-gray-600">
          <span class="me-1">{{ item.owner_name }}</span>
          <i class="text-red-500 mdi mdi-fire-circle text-sm"></i>
        </div>
        <div class="flex items-center mt-2">
          <v-rating
            v-model="item.user_rating"
            color="amber"
            density="compact"
            half-increments
            @input="submitRating(item)"
            v-if="!item.rated && isAuthenticated"
          ></v-rating>
          <div v-else-if="item.rated" class="text-gray-600 ms-4">
            <v-rating
              v-model="item.user_rating"
              color="amber"
              density="compact"
              readonly
            ></v-rating>
          </div>
        </div>
        <p class="text-sm text-gray-600 mt-2">Location: {{ item.location }}</p>
        <p class="text-sm text-gray-600">Contact Number: {{ item.contact }}</p>
        <div class="mt-4">
          <p class="text-gray-600 text-sm mt-2 line-clamp-3">
            {{ item.description }}
          </p>
        </div>
        <div class="mt-4">
          <div class="text-lg font-semibold">${{ item.price }}</div>
          <div>
            <router-link v-if="isAuthenticated" :to="'/product-detail/' + product.id">
              <button
                class="mt-2 px-4 py-2 text-sm text-green-600 border border-green-600 rounded-lg hover:bg-green-100 focus:outline-none"
                @click="trackClick(product.id)"
              >
                View Detail
              </button>
            </router-link>
            <span v-else>
              <button class="mt-2 px-4 py-2 text-sm text-gray-400 border border-gray-400 rounded-lg cursor-not-allowed hover:bg-gray-100 focus:outline-none" disabled>
                Login/Register to View Detail
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <div
    class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
  >
    <div
      class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
    >
      <div
        v-for="item in filteredItems"
        :key="item.id"
        class="w-auto overflow-hidden rounded-xl border"
      >
        <div
          class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
        >
          <img
            :src="item.image"
            alt="product imageAlt"
            class="h-45 w-full object-contain object-center lg:h-full lg:w-full"
          />
        </div>
        <div class="p-4">
          <h3 class="text-lg font-semibold">{{ item.name }}</h3>
          <div class="flex items-center text-sm text-gray-600">
            <span class="me-1">{{ item.owner_name }}</span>
            <i class="text-red-500 mdi mdi-fire-circle text-sm"></i>
          </div>
          <div class="flex items-center mt-2">
            <v-rating
              v-model="item.user_rating"
              color="amber"
              density="compact"
              half-increments
              @input="submitRating(item)"
              v-if="!item.rated && isAuthenticated"
            ></v-rating>
            <div v-else-if="item.rated" class="text-gray-600 ms-4">
              <v-rating
                v-model="item.user_rating"
                color="amber"
                density="compact"
                readonly
              ></v-rating>
            </div>
          </div>
          <p class="text-sm text-gray-600 mt-2">
            Location: {{ item.location }}
          </p>
          <p class="text-sm text-gray-600">
            Contact Number: {{ item.contact_number }}
          </p>
          <div class="mt-4">
            <p class="text-gray-600 text-sm mt-2">
              {{ item.description }}
            </p>
          </div>
          <div class="mt-4">
            <div class="text-lg font-semibold">${{ item.price }}</div>
            <div>
              <router-link
                v-if="isAuthenticated"
                :to="'/product-detail/' + item.id"
              >
                <button
                  class="mt-2 px-4 py-2 text-sm text-green-600 border border-green-600 rounded-lg hover:bg-green-100 focus:outline-none"
                  @click="trackClick(item.id)"
                >
                  View Detail
                </button>
              </router-link>
              <span v-else>
                <button
                  class="mt-2 px-4 py-2 text-sm text-gray-400 border border-gray-400 rounded-lg cursor-not-allowed hover:bg-gray-100 focus:outline-none"
                  disabled
                >
                  Login/Register to View Detail
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { API_BASE_URL } from '@/config'; // Adjust the path as per your project structure
import axios from 'axios';

export default {
  data() {
    return {
      loading: false,
      items: [],
      userPostedItems: [],
      featuredItems: [],
      clickedItems: [],
      isAuthenticated: false, // Initialize isAuthenticated state
    };
  },
  computed: {
    filteredItems() {
      // Combine items, userPostedItems, featuredItems, and clickedItems, while avoiding duplicates
      const allItems = [
        ...this.items,
        ...this.userPostedItems,
        ...this.featuredItems,
        ...this.clickedItems,
      ];
      const uniqueItems = Array.from(
        new Set(allItems.map((item) => item.id))
      ).map((id) => allItems.find((item) => item.id === id));
      return uniqueItems;
    },
  },
  mounted() {
    this.checkAuthentication();
    this.fetchProducts();
    this.fetchUserPostedProducts();
    this.fetchFeaturedProducts();
    this.loadClickedItems();
  },
  methods: {
    checkAuthentication() {
      // Example: Check localStorage for a token to determine authentication status
      const token = localStorage.getItem('token');
      if (token) {
        // User is authenticated
        this.isAuthenticated = true;
      } else {
        // User is not authenticated
        this.isAuthenticated = false;
      }
    },
    fetchProducts() {
      axios
        .get(`${API_BASE_URL}products`)
        .then((response) => {
          console.log(response.data);
          // Assuming response.data is an array of products
          this.items = response.data.map((product) => ({
            ...product,
            user_rating: null,
            rated: false,
          }));
        })
        .catch((error) => {
          console.error('Error fetching products:', error);
        });
    },
    fetchUserPostedProducts() {
      axios
        .get(`${API_BASE_URL}user-products`)
        .then((response) => {
          this.userPostedItems = response.data.map((product) => ({
            ...product,
            user_rating: null,
            rated: false,
          }));
        })
        .catch((error) => {
          console.error('Error fetching user posted products:', error);
        });
    },
    fetchFeaturedProducts() {
      axios
        .get(`${API_BASE_URL}featured-products`)
        .then((response) => {
          this.featuredItems = response.data.map((product) => ({
            ...product,
            user_rating: null,
            rated: false,
          }));
        })
        .catch((error) => {
          console.error('Error fetching featured products:', error);
        });
    },
    loadClickedItems() {
      const clickedItems = JSON.parse(
        localStorage.getItem('clickedItems') || '[]'
      );
      this.clickedItems = clickedItems;
    },
    submitRating(item) {
      axios
        .post(`${API_BASE_URL}products/${item.id}/rate`, {
          rating: item.user_rating,
        })
        .then((response) => {
          // Update item's average_rating and set rated flag to true
          item.average_rating = response.data.average_rating;
          item.rated = true;
          // Optionally update other UI elements or show a success message
        })
        .catch((error) => {
          console.error('Error submitting rating:', error);
          // Handle error scenarios if needed
        });
    },
    trackClick(itemId) {
      let clickedItems = JSON.parse(
        localStorage.getItem('clickedItems') || '[]'
      );
      const itemIndex = clickedItems.findIndex((item) => item.id === itemId);
      if (itemIndex === -1) {
        const clickedItem = this.items.find((item) => item.id === itemId);
        if (clickedItem) {
          clickedItem.clicks = 1;
          clickedItems.push(clickedItem);
        }
      } else {
        clickedItems[itemIndex].clicks += 1;
      }
      localStorage.setItem('clickedItems', JSON.stringify(clickedItems));
      this.clickedItems = clickedItems;
    },
  },
};
</script>
