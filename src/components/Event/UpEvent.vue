<template>
  <div class="flex flex-col">
    <div>
      <div class="m-10 text-3xl font-bold">Upcoming Events</div>
      <div class="flex flex-wrap -mx-4">
        <div v-for="event in events" :key="event.id" class="w-full sm:w-1/2 md:w-1/3 p-4">
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <div class="relative">
              <img
                class="w-full h-48 object-cover rounded-lg"
                :src="`/storage/${event.photo}`"
                alt="Event Image"
              />
              <div
                class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity"
              >
                <router-link :to="`/event-detail/${event.id}`">
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
import { API_BASE_URL } from '@/config'; // Adjust the base URL as per your setup
import axios from 'axios';

export default {
  data() {
    return {
      events: [],
      page: 1,
      totalPages: 10, // Assuming an initial number of pages
      eventName: '',
      eventLocation: '',
      eventStartTime: '',
      eventEndTime: '',
      eventDate: '',
      eventDescription: '',
      eventPhoto: null,
    };
  },
  methods: {
    formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  },
    fetchEvents(page = 1) {
      axios.get(`${API_BASE_URL}events?page=${page}`)
        .then(response => {
          console.log('API Response:', response.data); // Log response for debugging
          this.events = response.data.data;
          this.totalPages = response.data.meta.last_page;
          this.page = page;
        })
        .catch(error => {
          console.error('Error fetching events:', error);
          // Handle specific error scenarios
          if (error.response) {
            console.error('Server error details:', error.response.data);
          } else if (error.request) {
            console.error('Request made but no response received:', error.request);
          } else {
            console.error('Error setting up the request:', error.message);
          }
        });
    },
    createEvent() {
      let formData = new FormData();
      formData.append('event_name', this.eventName);
      formData.append('location', this.eventLocation);
      formData.append('start_time', this.eventStartTime);
      formData.append('end_time', this.eventEndTime);
      formData.append('date', this.eventDate);
      formData.append('description', this.eventDescription);
      formData.append('photo', this.eventPhoto);

      axios.post(`${API_BASE_URL}events`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(response => {
        console.log('Event created:', response.data);
        this.fetchEvents();
      })
      .catch(error => {
        console.error('Error creating event:', error);
        // Handle specific error scenarios
        if (error.response) {
          console.error('Server error details:', error.response.data);
        } else if (error.request) {
          console.error('Request made but no response received:', error.request);
        } else {
          console.error('Error setting up the request:', error.message);
        }
      });
    },
  },
  created() {
    this.fetchEvents(); // Fetch events when the component is created
  },
};
</script>

