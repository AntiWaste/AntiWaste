<template>
  <div class="flex flex-col">
    <div class="m-10 text-3xl font-bold">Upcoming Events</div>

    <!-- Loading Indicator -->
    <div v-if="isLoading" class="text-center py-8">
      <p class="text-gray-600">Loading events...</p>
    </div>

    <!-- Event Grid -->
    <div v-else class="flex flex-wrap -mx-4">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 px-20 py-5">
        <div
          v-for="event in paginatedevents"
          :key="event.id"
          class="w-auto overflow-hidden rounded-xl border"
        >
          <!-- Event Image -->
          <img
            class="object-cover h-64 w-full"
            :src="event.photo"
            :alt="event.event_name + ' Image'"
          />

          <div class="p-4">
            <!-- Event Title -->
            <h3 class="text-lg font-semibold">{{ event.event_name }}</h3>

            <!-- Event Date -->
            <div class="flex items-center text-sm text-gray-600">
              <span class="mr-1">{{ event.date }}</span>
              <i class="text-red-500 mdi mdi-fire-circle text-sm"></i>
            </div>

            <!-- Event Location -->
            <p class="text-sm text-gray-600 mt-2">
              Location: {{ event.location }}
            </p>

            <!-- Event Description -->
            <div class="text-sm text-gray-600 mt-2 line-clamp-3">
              <span class="font-bold">Description: </span>{{ event.description }}
            </div>

            <!-- View Detail Button -->
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
    <div v-if="totalPages > 1" class="flex justify-center mt-5 mb-10">
      <button
        :disabled="currentPage === 1"
        @click="previousPage"
        class="px-4 py-2 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full mx-2 focus:outline-none"
      >
        Previous
      </button>
      <span class="text-gray-700">{{ currentPage }}</span>
      <button
        :disabled="currentPage === totalPages"
        @click="nextPage"
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

export default {
  name: "EventGrid",
  data() {
    return {
      isLoading: true,
      events: [], // Store fetched events
      currentPage: 1,
      eventsPerPage: 8,
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
      return this.filteredevents.slice(startIndex, startIndex + this.eventsPerPage);
    },
  },
  mounted() {
    this.fetchEvents();
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
        });
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage -= 1;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage += 1;
      }
    },
  },
};
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
