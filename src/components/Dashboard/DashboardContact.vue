<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <h2 class="text-2xl font-semibold text-gray-800 mb-4">
      Dashboard - Messages
    </h2>
    <div class="overflow-hidden border border-gray-200 rounded-lg">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              No.
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Name
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Email
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Message Description
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="(message, index) in messages" :key="index">
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">{{ message.id }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">{{ message.name }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">{{ message.email }}</div>
            </td>
            <td class="px-6 py-4 whitespace-wrap max-w-xs">
              <div
                class="text-sm text-gray-900 break-words"
                v-html="message.description"
              ></div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <button
                @click="editMessage(message)"
                class="text-blue-600 hover:text-blue-900"
              >
                Edit
              </button>
              <button
                @click="confirmDelete(message.id)"
                class="text-red-600 hover:text-red-900 ml-4"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Edit Modal -->
    <div v-if="showEditModal" class="fixed z-10 inset-0 overflow-y-auto">
      <div
        class="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0"
      >
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        ></span>
        <div
          class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-lg sm:w-full"
        >
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Edit Message
                </h3>
                <div class="mt-2">
                  <form @submit.prevent="updateMessage">
                    <div>
                      <label
                        for="name"
                        class="block text-sm font-medium text-gray-700"
                        >Name</label
                      >
                      <input
                        v-model="editForm.name"
                        type="text"
                        class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div class="mt-4">
                      <label
                        for="email"
                        class="block text-sm font-medium text-gray-700"
                        >Email</label
                      >
                      <input
                        v-model="editForm.email"
                        type="email"
                        class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div class="mt-4">
                      <label
                        for="description"
                        class="block text-sm font-medium text-gray-700"
                        >Description</label
                      >
                      <textarea
                        v-model="editForm.description"
                        class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-32 resize-none"
                      ></textarea>
                    </div>
                    <div class="mt-4">
                      <button
                        type="submit"
                        class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 sm:col-start-2 sm:text-sm"
                      >
                        Save
                      </button>
                      <button
                        @click="showEditModal = false"
                        type="button"
                        class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:col-start-1 sm:text-sm"
                      >
                        Cancel
                      </button>
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
      <div
        class="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0"
      >
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          ></span
        >
        <div
          class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-lg sm:w-full"
        >
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Confirm Delete
                </h3>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">
                    Are you sure you want to delete this message?
                  </p>
                </div>
                <div class="mt-4">
                  <button
                    @click="deleteConfirmed"
                    type="button"
                    class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 sm:text-sm"
                  >
                    Delete
                  </button>
                  <button
                    @click="showDeleteModal = false"
                    type="button"
                    class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:text-sm"
                  >
                    Cancel
                  </button>
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
import { API_BASE_URL } from '@/config'; // Ensure the correct path to the config file
import axios from 'axios';

export default {
  data() {
    return {
      messages: [],
      showEditModal: false,
      showDeleteModal: false,
      editForm: {
        id: null,
        name: "",
        email: "",
        description: "",
      },
      messageIdToDelete: null,
    };
  },
  mounted() {
    this.fetchMessages();
  },
  methods: {
    fetchMessages() {
      axios
        .get(`${API_BASE_URL}contacts`)
        .then((response) => {
          this.messages = response.data;
        })
        .catch((error) => {
          console.error("Error fetching messages:", error);
        });
    },
    editMessage(message) {
      this.editForm.id = message.id;
      this.editForm.name = message.name;
      this.editForm.email = message.email;
      this.editForm.description = message.description;
      this.showEditModal = true;
    },
    updateMessage() {
      axios
        .put(`${API_BASE_URL}contacts/${this.editForm.id}`, this.editForm)
        .then((response) => {
          const updatedMessage = response.data;
          const index = this.messages.findIndex(
            (msg) => msg.id === updatedMessage.id
          );
          if (index !== -1) {
            Object.assign(this.messages[index], updatedMessage);
          }
          this.showEditModal = false;
        })
        .catch((error) => {
          console.error("Error updating message:", error);
        });
    },
    confirmDelete(messageId) {
      this.messageIdToDelete = messageId;
      this.showDeleteModal = true;
    },
    deleteConfirmed() {
      axios
        .delete(`${API_BASE_URL}contacts/${this.messageIdToDelete}`)
        .then(() => {
          this.messages = this.messages.filter(
            (msg) => msg.id !== this.messageIdToDelete
          );
          this.showDeleteModal = false;
        })
        .catch((error) => {
          console.error("Error deleting message:", error);
        });
    },
  },
};
</script>

<style scoped>
/* Add any additional styles if needed */
</style>
