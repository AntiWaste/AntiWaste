<template>
  <div class="bg-green-100 py-8">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <button
        @click="navigateBack"
        class="bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full px-4 py-2 focus:outline-none mb-4"
      >
        Back
      </button>

      <div v-if="event" class="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md">
        <div class="flex flex-col md:flex-row -mx-4">
          <!-- Event Image -->
          <div class="md:flex-1 px-4">
            <div class="h-64 md:h-auto rounded-lg overflow-hidden bg-gray-300 dark:bg-gray-700 mb-4">
              <img
                class="w-full h-full object-cover"
                :src="event.photo"
                alt="Event Image"
              />
            </div>
          </div>

          <!-- Event Details -->
          <div class="md:flex-1 px-4">
            <h2 class="text-2xl font-bold text-gray-800 mb-2">
              {{ event.event_name }}
            </h2>
            <div class="mt-4">
              <span class="font-bold text-gray-700">Description: </span>
              <p class="text-gray-600 text-sm mt-2">
                {{ event.description }}
              </p>
            </div>
            <div class="flex items-center text-sm">
              <span class="text-lg font-bold mt-4"> Event Date: {{ event.date }}</span>
              <i class="text-red-500 mdi mdi-fire-circle text-sm"></i>
            </div>
            <p class="text-lg font-bold">
              Location: {{ event.location }}
            </p>

            
          </div>
        </div>
      </div>

      <!-- Loading Spinner -->
      <LoadingSpinner v-if="event === null" />
    </div>
  </div>
</template>

<script>
import LoadingSpinner from '@/components/LoadingSpinner.vue';
import { API_BASE_URL } from '@/config';
import axios from 'axios';

export default {
  components: {
    LoadingSpinner,
  },
  data() {
    return {
      event: null,
      isLoggedIn: false,
    };
  },
  mounted() {
    this.fetchEvent();
    this.checkLoginStatus();
  },
  methods: {
    fetchEvent() {
      const eventId = this.$route.params.id;
      axios.get(`${API_BASE_URL}events/${eventId}`)
        .then(response => {
          console.log('Event details:', response.data);
          this.event = response.data;
        })
        .catch(error => {
          console.error('Error fetching event:', error);
        });
    },
    checkLoginStatus() {
      const token = localStorage.getItem('token');
      this.isLoggedIn = !!token;
    },
    navigateBack() {
      this.$router.go(-1);
    },
    formatDate(dateString) {
      // Implement your date formatting logic here if needed
      return dateString; // Example: You can format using moment.js or native methods
    },
  },
};
</script>

<style scoped>
/* Add any custom scoped styles here */
</style>
