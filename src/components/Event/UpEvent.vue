<template>
  <div class="flex flex-col">
    <div class="m-10 text-3xl font-bold">Upcoming Events</div>
    <div class="flex flex-wrap -mx-4">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 px-20 py-5">
        <div
          v-for="event in paginatedevents"
          :key="event.id"
          class="w-auto overflow-hidden rounded-xl border"
        >
          <img
            class="object-cover h-64 w-full"
            :src="event.photo"
            alt="event Image"
          />

          <div class="p-4">
            <h3 class="text-lg font-semibold">{{ event.event_name }}</h3>
            <div class="flex events-center text-sm text-gray-600">
              <span class="mr-1">{{ event.date }}</span>
              <i class="text-red-500 mdi mdi-fire-circle text-sm"></i>
            </div>
            <p class="text-sm text-gray-600 mt-2">
              Location: {{ event.location }}
            </p>
            <div class="text-sm text-gray-600 mt-2">
              <span class="font-bold">Description: </span>{{ event.description }}
            </div>
            <div>
              <router-link :to="'/event-detail/' + event.id">
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
  </div>
</template>
<script>
import { API_BASE_URL } from "@/config";
import axios from "axios";
// import LoadingSpinner from "../LoadingSpinner.vue"; // Ensure correct path to your LoadingSpinner component

export default {
  name: "eventGrid",
  // components: {
  //   LoadingSpinner,
  // },
  data() {
    return {
      isLoading: true,
      events: [], // Store fetched events
      currentPage: 1,
      eventsPerPage: 8,
      searchQuery: "", // Store search query
      filteredevents: [], // Store filtered events
    };
  },
  computed: {
    // Calculate total pages based on filtered events count and eventsPerPage
    totalPages() {
      return Math.ceil(this.filteredevents.length / this.eventsPerPage);
    },
    // Calculate paginated events based on currentPage and eventsPerPage
    paginatedevents() {
      const startIndex = (this.currentPage - 1) * this.eventsPerPage;
      return this.filteredevents.slice(
        startIndex,
        startIndex + this.eventsPerPage
      );
    },
  },
  mounted() {
    this.fetchEvents(); // Corrected method name
  },
  methods: {
    fetchEvents() {
      axios
        .get(`${API_BASE_URL}events`)
        .then((response) => {
          this.events = response.data;
          this.filteredevents = this.events; // Initialize filteredevents with all events
          this.isLoading = false;
        })
        .catch((error) => {
          console.error("Error fetching events:", error);
          this.isLoading = false;
          // Handle error state or show error message to user
        });
    },
    filterByAll() {
      this.filteredevents = this.events; // Reset to all events
    },
    filterByRecentlyViewed() {
      // Example: Filter by events with rating greater than 4.0
      this.filteredevents = this.events.filter((event) => event.rating > 4.0);
    },
    filterByFavorites() {
      // Example: Filter by events with 'favorite' flag set
      this.filteredevents = this.events.filter((event) => event.favorite);
    },
    searchEvents() {
      if (this.searchQuery.trim() === "") {
        this.filteredevents = this.events; // Reset to all events if search query is empty
      } else {
        // Filter events based on searchQuery
        this.filteredevents = this.events.filter((event) =>
          event.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
    },
    navigateBack() {
      this.$router.go(-1); // Navigate back to previous page
    },
  },
};
</script>