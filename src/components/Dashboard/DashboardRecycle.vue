<template>
  <div class="max-w-6xl mx-auto px-4 max-max-sm:px-6 lg:px-8 py-8">
    <h2 class="text-2xl font-semibold text-gray-800 mb-4">Dashboard - Recycle Product Management</h2>
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
              Description
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Owner
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
              Photo
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
            <td class="px-6 py-4 whitespace-wrap max-w-xs break-words">
              <div class="text-sm text-gray-900">{{ message.description }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">{{ message.owner }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">{{ message.price }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">{{ message.contact }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">{{ message.location }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <img :src="message.photo" alt="Product Photo" class="h-12 w-12 object-cover rounded-full" />
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
    <div v-if="showEditModal" class="fixed z-10 inset-0 overflow-y-auto">
      <div class="flex items-center justify-center min-h-screen">
        <div class="fixed inset-0 transition-opacity">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div class="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-lg w-full">
          <div class="bg-white px-4 pt-5 pb-4">
            <div class="max-sm:flex max-sm:items-start">
              <div class="mt-3 text-center max-sm:mt-0 max-sm:ml-4 max-sm:text-left">
                <h3 class="text-lg leading-6 font-medium text-gray-900">Edit Message</h3>
                <div class="mt-2">
                  <form @submit.prevent="updateMessage">
                    <div>
                      <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                      <input v-model="editForm.name" type="text" class="mt-1 block w-full shadow-sm max-sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div class="mt-4">
                      <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
                      <textarea v-model="editForm.description" rows="4" class="mt-1 block w-full shadow-sm max-sm:text-sm border-gray-300 rounded-md h-32 resize-none"></textarea>
                    </div>
                    <div class="mt-4">
                      <label for="owner" class="block text-sm font-medium text-gray-700">Owner</label>
                      <input v-model="editForm.owner" type="text" class="mt-1 block w-full shadow-sm max-sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div class="mt-4">
                      <label for="price" class="block text-sm font-medium text-gray-700">Price</label>
                      <input v-model="editForm.price" type="text" class="mt-1 block w-full shadow-sm max-sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div class="mt-4">
                      <label for="contact" class="block text-sm font-medium text-gray-700">Contact</label>
                      <input v-model="editForm.contact" type="text" class="mt-1 block w-full shadow-sm max-sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div class="mt-4">
                      <label for="location" class="block text-sm font-medium text-gray-700">Location</label>
                      <input v-model="editForm.location" type="text" class="mt-1 block w-full shadow-sm max-sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div class="mt-4">
                      <label for="photo" class="block text-sm font-medium text-gray-700">Photo URL</label>
                      <input v-model="editForm.photo" type="text" class="mt-1 block w-full shadow-sm max-sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div class="mt-4">
                      <button type="submit" class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 max-sm:text-sm">Save</button>
                      <button @click="showEditModal = false" type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 max-sm:mt-0 max-sm:text-sm">Cancel</button>
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
export default {
  data() {
    return {
      messages: [
        { id: 1, name: "Bottle", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", owner: "Jennie", price: "20000 riel", contact: "098765432", location: "Phnom Penh", photo: "https://via.placeholder.com/150" },
        { id: 2, name: "Can", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", owner: "Lisa", price: "15000 riel", contact: "098765433", location: "Phnom Penh", photo: "https://via.placeholder.com/150" },
        // Add more messages as needed
      ],
      showEditModal: false,
      showDeleteModal: false,
      editForm: {
        id: null,
        name: '',
        description: '',
        owner: '',
        price: '',
        contact: '',
        location: '',
        photo: '',
      },
      messageToDelete: null,
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
        this.$set(this.messages, index, { ...this.editForm });
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
.break-words {
  word-break: break-word;
}
</style>
