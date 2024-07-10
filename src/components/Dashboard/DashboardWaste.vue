<template>
  <div class="max-w-6xl mx-auto px-4 max-sm:px-6 lg:px-8 py-8">
    <h2 class="text-2xl font-semibold text-gray-800 mb-4">Dashboard - Waste Management</h2>
    <div class="overflow-x-auto border border-gray-200 rounded-lg">
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
              Categories
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Owner
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Amount
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Contact Number
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Location
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
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
              <div class="text-sm text-gray-900">{{ message.categories }}</div>
            </td>
            <td class="px-6 py-4 whitespace-wrap max-w-xs break-words">
              <div class="text-sm text-gray-900">{{ message.description }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">{{ message.owner }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">{{ message.item_amount }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">{{ message.price }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">{{ message.contact_number }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">{{ message.location }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <button @click="editMessage(message)" class="text-green-600 hover:text-green-900">Edit</button>
              <button @click="confirmDelete(message.id)" class="text-red-600 hover:text-red-900 ml-4">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Edit Modal -->
    <div v-if="showEditModal" class="fixed z-0 inset-0 overflow-y-auto">
      <div class="flex justify-center pt-4 px-4 pb-20 text-center max-sm:block max-sm:p-0">
        <div class="fixed inset-0" aria-hidden="true">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all max-sm:my-8 max-sm:align-middle max-sm:max-w-lg max-sm:w-full">
          <div class="bg-white px-4 pt-5 pb-4 max-sm:p-6 max-sm:pb-4">
            <div class="max-sm:flex max-sm:items-start md:flex md:items-center">
              <div class="mt-3 text-center max-sm:mt-0 max-sm:ml-4 max-sm:text-left">
                <h3 class="text-lg text-center font-medium text-gray-900">Edit Message</h3>
                <div class="mt-2">
                  <form @submit.prevent="updateMessage">
                    <div>
                      <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                      <input v-model="editForm.name" type="text" class="mt-1 block w-full shadow-sm max-sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div class="mt-4">
                      <label for="categories" class="block text-sm font-medium text-gray-700">Categories</label>
                      <input v-model="editForm.categories" type="text" class="mt-1 block w-full shadow-sm max-sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div class="mt-4">
                      <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
                      <textarea v-model="editForm.description" rows="4" class="mt-1 block w-full shadow-sm max-sm:text-sm border-gray-300 rounded-md h-32 resize-none"></textarea>
                    </div>
                    <div class="mt-4">
                      <label for="owner" class="block text-sm font-medium text-gray-700">owner</label>
                      <input v-model="editForm.owner" type="text" class="mt-1 block w-full shadow-sm max-sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div class="mt-4">
                      <label for="item_amount" class="block text-sm font-medium text-gray-700">item_amount</label>
                      <input v-model="editForm.item_amount" type="text" class="mt-1 block w-full shadow-sm max-sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div class="mt-4">
                      <label for="price" class="block text-sm font-medium text-gray-700">Price</label>
                      <input v-model="editForm.price" type="text" class="mt-1 block w-full shadow-sm max-sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div class="mt-4">
                      <label for="contact_number" class="block text-sm font-medium text-gray-700">contact_number</label>
                      <input v-model="editForm.contact_number" type="text" class="mt-1 block w-full shadow-sm max-sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div class="mt-4">
                      <label for="location" class="block text-sm font-medium text-gray-700">Location</label>
                      <input v-model="editForm.location" type="text" class="mt-1 block w-full shadow-sm max-sm:text-sm border-gray-300 rounded-md" />
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
      <div class="flex items-center justify-center pt-4 px-4 pb-20 text-center max-sm:block max-sm:p-0">
        <div class="fixed inset-0 " aria-hidden="true">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all max-sm:my-8 max-sm:align-middle max-sm:max-w-lg max-sm:w-full">
          <div class="bg-white px-4 pt-5 pb-4 max-sm:p-6 max-sm:pb-4">
            <div class="text-center">
              <h3 class="text-lg font-medium text-gray-900">Confirm Delete</h3>
              <div class="mt-2">
                <p class="text-sm text-gray-500">Are you sure you want to delete this message?</p>
              </div>
            </div>
            <div class="mt-5 sm:mt-6">
              <button @click="deleteMessage(messageToDelete)" class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 max-sm:text-sm">Delete</button>
              <button @click="showDeleteModal = false" type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 max-sm:mt-0 max-sm:text-sm">Cancel</button>
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
      messages: [],
      showEditModal: false,
      showDeleteModal: false,
      editForm: {
        id: null,
        name: '',
        categories: '',
        owner: '',
        item_amount: '',
        price: '',
        contact_number: '',
        location: '',
        description: '',
      },
      messageToDelete: null,
    };
  },
  created() {
    this.fetchMessages();
  },
  methods: {
    fetchMessages() {
      axios.get(`${API_BASE_URL}wastes`)
        .then(response => {
          this.messages = response.data;
        })
        .catch(error => {
          console.error('Error fetching messages:', error);
        });
    },
    editMessage(message) {
      this.editForm.id = message.id;
      this.editForm.name = message.name;
      this.editForm.categories = message.categories;
      this.editForm.owner = message.owner;
      this.editForm.item_amount = message.item_amount;
      this.editForm.price = message.price;
      this.editForm.contact_number = message.contact_number;
      this.editForm.location = message.location;
      this.editForm.description = message.description;
      this.showEditModal = true;
    },
    updateMessage() {
      axios.put(`${API_BASE_URL}wastes/${this.editForm.id}`, {
        name: this.editForm.name,
        categories: this.editForm.categories,
        owner: this.editForm.owner,
        item_amount: this.editForm.item_amount,
        price: this.editForm.price,
        contact_number: this.editForm.contact_number,
        location: this.editForm.location,
        description: this.editForm.description,
      })
      .then(response => {
        console.log('Message updated successfully:', response.data);
        this.showEditModal = false;
        this.fetchMessages(); // Refresh messages after update
      })
      .catch(error => {
        console.error('Error updating message:', error);
      });
    },
    confirmDelete(messageId) {
      this.messageToDelete = messageId;
      this.showDeleteModal = true;
    },
    deleteMessage(messageId) {
      axios.delete(`${API_BASE_URL}wastes/${messageId}`)
        .then(response => {
          console.log('Message deleted successfully:', response.data);
          this.showDeleteModal = false;
          this.fetchMessages(); // Refresh messages after deletion
        })
        .catch(error => {
          console.error('Error deleting message:', error);
        });
    },
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
