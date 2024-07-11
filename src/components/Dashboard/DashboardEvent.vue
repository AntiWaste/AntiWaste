<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <h2 class="text-2xl font-semibold text-gray-800 mb-4">Dashboard - Event Management</h2>

    <!-- Event Table -->
    <div class="overflow-x-auto border border-gray-200 rounded-lg">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No.</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event Name</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Photo</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="(event, index) in events" :key="index">
  <td class="px-6 py-4 whitespace-nowrap"><div class="text-sm text-gray-900">{{ event.id }}</div></td>
  <td class="px-6 py-4 whitespace-nowrap"><div class="text-sm text-gray-900">{{ event.event_name }}</div></td>
  <td class="px-6 py-4 whitespace-wrap max-w-xs break-words"><div class="text-sm text-gray-900">{{ event.description }}</div></td>
  <td class="px-6 py-4 whitespace-nowrap"><div class="text-sm text-gray-900">{{ event.date }}</div></td>
  <td class="px-6 py-4 whitespace-nowrap"><div class="text-sm text-gray-900">{{ event.location }}</div></td>
  <td class="px-6 py-4 whitespace-nowrap">
              <img :src="event.photo" alt="Product Photo" class="h-12 w-12 object-cover rounded-full" />
            </td>
  <td class="px-6 py-4 whitespace-nowrap">
    <button @click="editEvent(event)" class="text-green-600 hover:text-green-900">Edit</button>
    <button @click="confirmDelete(event.id)" class="text-red-600 hover:text-red-900 ml-4">Delete</button>
  </td>
</tr>
        </tbody>
      </table>
    </div>

    <div v-if="showEditModal" class="fixed z-10 inset-0 overflow-y-auto">
      <div class="flex items-center justify-center min-h-screen">
        <div class="fixed inset-0 transition-opacity">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div class="bg-white rounded-lg shadow-xl transform transition-all max-w-lg w-full">
          <div class="bg-white px-4 pt-5 pb-4">
            <div class="max-sm:flex max-sm:items-start">
              <div class="mt-3 text-center max-sm:mt-0 max-sm:ml-4 max-sm:text-left">
                <h3 class="text-lg leading-6 font-medium text-gray-900">Edit Event</h3>
                <div class="mt-2">
          <form @submit.prevent="updateEvent">
            <div class="mb-4">
              <label for="event_name" class="block text-sm font-medium text-gray-700">Event Name</label>
              <input v-model="editForm.event_name" type="text" class="mt-1 block w-full shadow-sm max-sm:text-sm border-gray-300 rounded-md" />
            </div>
            <div class="mb-4">
              <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
              <textarea v-model="editForm.description" rows="4" class="mt-1 block w-full shadow-sm max-sm:text-sm border-gray-300 rounded-md h-32 resize-none"></textarea>
            </div>
            <div class="mb-4">
              <label for="date" class="block text-sm font-medium text-gray-700">Date</label>
              <input v-model="editForm.date" type="text" class="mt-1 block w-full shadow-sm max-sm:text-sm border-gray-300 rounded-md" />
            </div>
            <div class="mb-4">
              <label for="location" class="block text-sm font-medium text-gray-700">Location</label>
              <input v-model="editForm.location" type="text" class="mt-1 block w-full shadow-sm max-sm:text-sm border-gray-300 rounded-md" />
            </div>
            <div class="mb-4">
              <label for="photo" class="block text-sm font-medium text-gray-700">Photo URL</label>
              <input v-model="editForm.photo" type="text" class="mt-1 block w-full shadow-sm max-sm:text-sm border-gray-300 rounded-md" />
            </div>
            <div class="m">
              <button type="submit" class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 max-sm:text-sm">Save</button>
              <button @click="showEditModal = false" type="button" class="ml-4 inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 max-sm:text-sm">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
    </div>

    

    <div v-if="showDeleteModal" class="fixed z-10 inset-0 overflow-y-auto">
      <div class="flex items-center justify-center min-h-screen">
        <div class="fixed inset-0 transition-opacity">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div class="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-lg w-full">
          <div class="bg-white px-4 pt-5 pb-4">
            <div class="max-sm:flex max-sm:items-start">
              <div class="mt-3 text-center max-sm:mt-0 max-sm:ml-4 max-sm:text-left">
                <h3 class="text-lg leading-6 font-medium text-gray-900">Confirm Delete</h3>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">Are you sure you want to delete this message?</p>
                </div>
                <div class="mt-4">
                  <button @click="deleteConfirmed" type="button" class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 max-sm:text-sm">Delete</button>
                  <button @click="showDeleteModal = false" type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 max-sm:mt-0 max-sm:text-sm">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { API_BASE_URL } from '@/config'; // Adjust import based on your configuration
import axios from 'axios';

export default {
  data() {
    return {
      events: [],
      showEditModal: false,
      showDeleteModal: false,
      editForm: {
        id: null,
        event_name: '',
        description: '',
        date: '',
        location: '',
        photo: '',
      },
      eventToDelete: null,
    };
  },
  mounted() {
    this.fetchEvents();
  },
  methods: {
    async fetchEvents() {
      try {
        const response = await axios.get(`${API_BASE_URL}events`);
        this.events = response.data;
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    },
    editEvent(event) {
  if (event && event.id) {
    this.editForm.id = event.id;
    this.editForm.event_name = event.event_name;
    this.editForm.description = event.description;
    this.editForm.date = event.date;
    this.editForm.location = event.location;
    this.editForm.photo = event.photo;
    this.showEditModal = true;
  }
},
async updateEvent() {
  try {
    const response = await axios.put(`${API_BASE_URL}events/${this.editForm.id}`, this.editForm);
    const updatedEventIndex = this.events.findIndex(ev => ev.id === this.editForm.id);
    if (updatedEventIndex !== -1) {
      this.events[updatedEventIndex] = response.data.event; // Update the specific event in the events array
      this.showEditModal = false; // Close the edit modal after successful update
    }
  } catch (error) {
    console.error('Error updating event:', error);
  }
},
    confirmDelete(eventId) {
      this.eventToDelete = eventId;
      this.showDeleteModal = true;
    },
    async deleteConfirmed() {
      try {
        await axios.delete(`${API_BASE_URL}events/${this.eventToDelete}`);
        this.events = this.events.filter(event => event.id !== this.eventToDelete);
        this.showDeleteModal = false;
      } catch (error) {
        console.error('Error deleting event:', error);
      }
    },
  },
};
</script>

<style scoped>
/* Add any scoped styles specific to your component here */
</style>
