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
            <tr v-for="(message, index) in messages" :key="index">
              <td class="px-6 py-4">
                <div class="text-sm text-gray-900">{{ message.id }}</div>
              </td>
              <td class="px-6 py-4">
                <div class="text-sm text-gray-900">{{ message.name }}</div>
              </td>
              <td class="px-6 py-4">
                <div class="text-sm text-gray-900">{{ message.date }}</div>
              </td>
              <td class="px-6 py-4">
                <div class="text-sm text-gray-900">{{ message.location }}</div>
              </td>
              <td class="px-6 py-4 max-w-xs">
                <div class="text-sm text-gray-900 break-words">{{ message.description }}</div>
              </td>
              <td class="px-6 py-4">
                <button @click="editMessage(message)" class="text-green-600 hover:text-green-900">Edit</button>
                <button @click="confirmDelete(message.id)" class="text-red-600 hover:text-red-900 ml-4">Delete</button>
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
                  <h3 class="text-lg text-center font-medium text-gray-900">Edit Message</h3>
                  <div class="mt-2">
                    <form @submit.prevent="updateMessage">
                      <div>
                        <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                        <input v-model="editForm.name" type="text" class="mt-1 block w-full shadow-sm max-sm:text-sm border-gray-300 rounded-md" />
                      </div>
                      <div class="mt-4">
                        <label for="date" class="block text-sm font-medium text-gray-700">Date</label>
                        <input v-model="editForm.date" type="text" class="mt-1 block w-full shadow-sm max-sm:text-sm border-gray-300 rounded-md" />
                      </div>
                      <div class="mt-4">
                        <label for="location" class="block text-sm font-medium text-gray-700">Location</label>
                        <input v-model="editForm.location" type="text" class="mt-1 block w-full shadow-sm max-sm:text-sm border-gray-300 rounded-md" />
                      </div>
                      <div class="mt-4">
                        <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
                        <textarea v-model="editForm.description" class="mt-1 block w-full shadow-sm max-sm:text-sm border-gray-300 rounded-md h-32 resize-none"></textarea>
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
  export default {
    data() {
      return {
        messages: [
          { id: 1, name: "Event 1", date: "10 Jun 2024", location: "Phnom Penh", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
          { id: 2, name: "Event 2", date: "11 Jun 2024", location: "Siem Reap", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
          { id: 3, name: "Event 3", date: "12 Jun 2024", location: "Battambang", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
          { id: 4, name: "Event 4", date: "13 Jun 2024", location: "Kampong Cham", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
        ],
        showEditModal: false,
        showDeleteModal: false,
        editForm: {
          id: null,
          name: '',
          date: '',
          location: '',
          description: '',
        },
      };
    },
    methods: {
      editMessage(message) {
        this.editForm = { ...message };
        this.showEditModal = true;
      },
      updateMessage() {
        const index = this.messages.findIndex(msg => msg.id === this.editForm.id);
        if (index !== -1) {
          this.messages.splice(index, 1, { ...this.editForm });
        }
        this.showEditModal = false;
      },
      confirmDelete(messageId) {
        this.messageToDelete = messageId;
        this.showDeleteModal = true;
      },
      deleteConfirmed() {
        this.messages = this.messages.filter(message => message.id !== this.messageToDelete);
        this.showDeleteModal = false;
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add scoped styles here if needed */
  </style>
  