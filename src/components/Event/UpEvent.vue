<template>
  <div class="flex flex-col">
    <div>
      <div class="m-10 text-3xl font-bold">Upcoming Events</div>
      <div class="flex flex-wrap -mx-4">
        <div v-for="event in events" :key="event.id" class="w-full sm:w-1/2 md:w-1/3 p-4">
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <div class="relative">
              <img
                v-if="event.photo"
                :src="`${API_BASE_URL}/storage/${event.photo}`"
                class="w-full h-48 object-cover rounded-lg"
                alt="Event Image"
              />
              <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
                  <router-link :to="'/event-detail/' + event.id">
                  <button class="text-white bg-red-500 px-4 py-2 rounded">
                    See more info
                  </button>
                </router-link>
              </div>
            </div>
            <div class="mt-4">
              <h2 class="text-xl font-bold text-green-600">{{ event.event_name }}</h2>
              <p class="text-gray-500">{{ formatDate(event.date) }}</p>
              <p class="text-gray-700">{{ event.description }}</p>
              <p class="text-gray-700">{{ event.location }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-6 mb-10">
        <div class="flex justify-center space-x-2">
          <button
            v-for="pageNum in totalPages"
            :key="pageNum"
            @click="fetchEvents(pageNum)"
            :class="{'bg-green-500 text-white': pageNum === page, 'bg-white text-green-500': pageNum !== page}"
            class="px-4 py-2 rounded-full border border-green-500"
          >
            {{ pageNum }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { API_BASE_URL } from '@/config';
import axios from 'axios';

export default {
  data() {
    return {
      events: [],
      page: 1,
      totalPages: 1,
    };
  },
  methods: {
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    },
    async fetchEvents(page = 1) {
      try {
        const response = await axios.get(`${API_BASE_URL}events`);
        if (response.data && response.data.data) {
          this.events = response.data.data;
          this.totalPages = response.data.meta.last_page;
          this.page = page;
        } else {
          console.error('Unexpected API response structure:', response.data);
        }
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    },
  },
  created() {
    this.fetchEvents();
  },
};
</script>
