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
    <div v-if="event" class="p-6 rounded-lg">
      <img
        v-if="event.photo"
        :src="`/storage/${event.photo}`"
        alt="Event Image"
        class="w-full h-128 object-cover rounded-lg"
      />
      <div class="mt-4">
        <h1 class="text-3xl font-bold text-green-600">{{ event.event_name }}</h1>
        <p class="text-gray-500 mt-2">Event Date: {{ formatDate(event.date) }}</p>
        <p class="text-gray-500 mt-2">Event Venue: {{ event.location }}</p>
        <p class="text-gray-700 mt-4">{{ event.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { API_BASE_URL } from '@/config'; // Adjust as per your setup

export default {
  data() {
    return {
      event: null,
    };
  },
  methods: {
    navigateBack() {
      this.$router.go(-1); // Navigate back to previous page
    },
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    },
    fetchEventDetails(eventId) {
      axios.get(`${API_BASE_URL}events/${eventId}`)
        .then(response => {
          this.event = response.data;
        })
        .catch(error => {
          console.error('Error fetching event details:', error);
        });
    },
  },
  created() {
    // Fetch event details when component is created
    const eventId = this.$route.params.id; // Assuming route parameter contains event ID
    this.fetchEventDetails(eventId);
  },
};
</script>

<style>
/* Add any additional styles here */
</style>
