<template>
  <div class="max-w-6xl mx-auto px-4 max-sm:px-6 lg:px-8 py-8">
    <h2 class="text-2xl font-semibold text-gray-800 mb-4">Dashboard - Event Management</h2>
    <div class="overflow-hidden border border-gray-200 rounded-lg">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              No.
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Location
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Description
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="(event, index) in events" :key="event.id">
            <td class="px-6 py-4">
              <div class="text-sm text-gray-900">{{ index + 1 }}</div>
            </td>
            <td class="px-6 py-4">
              <div class="text-sm text-gray-900">{{ event.event_name }}</div>
            </td>
            <td class="px-6 py-4">
              <div class="text-sm text-gray-900">{{ event.event_date }}</div>
            </td>
            <td class="px-6 py-4">
              <div class="text-sm text-gray-900">{{ event.event_location }}</div>
            </td>
            <td class="px-6 py-4 max-w-xs">
              <div class="text-sm text-gray-900 break-words">{{ event.event_description }}</div>
            </td>
            <td class="px-6 py-4">
              <button @click="editEvent(event)" class="text-green-600 hover:text-green-900">Edit</button>
              <button @click="confirmDelete(event.id)" class="text-red-600 hover:text-red-900 ml-4">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Edit Modal -->
    <div v-if="showEditModal" class="fixed z-10 inset-0 overflow-y-auto">
      <div class="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center max-sm:block max-sm:p-0">
        <div class="fixed inset-0" aria-hidden="true">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all max-sm:my-8 max-sm:align-middle max-sm:max-w-lg max-sm:w-full">
          <div class="bg-white px-4 pt-5 pb-4 max-sm:p-6 max-sm:pb-4">
            <div class="max-sm:flex max-sm:items-start">
              <div class="mt-3 text-center max-sm:mt-0 max-sm:ml-4 max-sm:text-left">
                <h3 class="text-lg text-center font-medium text-gray-900">Edit Event</h3>
                <div class="mt-2">
                  <form @submit.prevent="updateEvent">
                    <div>
                      <label for="edit-event-name" class="block text-sm font-medium text-gray-700">Name</label>
                      <input v-model="editForm.event_name" type="text" id="edit-event-name" class="mt-1 block w-full shadow-sm max-sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div class="mt-4">
                      <label for="edit-event-date" class="block text-sm font-medium text-gray-700">Date</label>
                      <input v-model="editForm.event_date" type="date" id="edit-event-date" class="mt-1 block w-full shadow-sm max-sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div class="mt-4">
                      <label for="edit-event-location" class="block text-sm font-medium text-gray-700">Location</label>
                      <input v-model="editForm.event_location" type="text" id="edit-event-location" class="mt-1 block w-full shadow-sm max-sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div class="mt-4">
                      <label for="edit-event-description" class="block text-sm font-medium text-gray-700">Description</label>
                      <textarea v-model="editForm.event_description" id="edit-event-description" class="mt-1 block w-full shadow-sm max-sm:text-sm border-gray-300 rounded-md h-32 resize-none"></textarea>
                    </div>
                    <div class="mt-4">
                      <button type="submit" class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 max-sm:col-start-2 max-sm:text-sm">Save</button>
                      <button @click="showEditModal = false" type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 max-sm:mt-0 max-sm:col-start-1 max-sm:text-sm">Cancel</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Delete Confirmation Modal -->
    <div v-if="showDeleteModal" class="fixed z-10 inset-0 overflow-y-auto">
      <div class="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center max-sm:block max-sm:p-0">
        <div class="fixed inset-0" aria-hidden="true">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all max-sm:my-8 max-sm:align-middle max-sm:max-w-lg max-sm:w-full">
          <div class="bg-white px-4 pt-5 pb-4 max-sm:p-6 max-sm:pb-4">
            <div class="max-sm:flex max-sm:items-start">
              <div class="mt-3 text-center max-sm:mt-0 max-sm:ml-4 max-sm:text-left">
                <h3 class="text-lg leading-6 font-medium text-gray-900">Confirm Delete</h3>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">Are you sure you want to delete this event?</p>
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
import { API_BASE_URL } from '@/config';
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
        event_date: '',
        event_location: '',
        event_description: '',
      },
      eventToDelete: null,
    };
  },
  mounted() {
    this.fetchEvents();
  },
  methods: {
    fetchEvents() {
      axios.get(`${API_BASE_URL}events`)
        .then(response => {
          this.events = response.data;
        })
        .catch(error => {
          console.error('Error fetching events:', error);
        });
    },
    editEvent(event) {
      this.editForm = { ...event };
      this.showEditModal = true;
    },
    updateEvent() {
      axios.put(`${API_BASE_URL}events/${this.editForm.id}`, this.editForm)
        .then(response => {
          const updatedEvent = response.data;
          const index = this.events.findIndex(e => e.id === updatedEvent.id);
          if (index !== -1) {
            this.$set(this.events, index, updatedEvent);
          }
          this.showEditModal = false;
        })
        .catch(error => {
          console.error('Error updating event:', error);
        });
    },
    confirmDelete(eventId) {
      this.eventToDelete = eventId;
      this.showDeleteModal = true;
    },
    deleteConfirmed() {
      axios.delete(`${API_BASE_URL}events/${this.eventToDelete}`)
        .then(() => {
          this.events = this.events.filter(event => event.id !== this.eventToDelete);
          this.showDeleteModal = false;
        })
        .catch(error => {
          console.error('Error deleting event:', error);
        });
    },
  },
};
</script>

<style scoped>
/* Add scoped styles here if needed */
</style>
