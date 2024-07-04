<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <h2 class="text-2xl font-semibold text-gray-800 mb-4">Dashboard - Messages</h2>
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
              Email
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Message Description
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
              <div class="text-sm text-gray-900">{{ message.email }}</div>
            </td>
            <td class="px-6 py-4 whitespace-wrap max-w-xs">
              <div class="text-sm text-gray-900 break-words" v-html="message.description"></div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <button @click="editMessage(message)" class="text-blue-600 hover:text-blue-900">Edit</button>
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
                      <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                      <input v-model="editForm.email" type="email" class="mt-1 block w-full shadow-sm max-sm:text-sm border-gray-300 rounded-md" />
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
        { id: 1, name: "John Doe", email: "john.doe@example.com", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { id: 2, name: "Jane Smith", email: "jane.smith@example.com", description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas." },
        { id: 3, name: "Mike Johnson", email: "mike.johnson@example.com", description: "Nullam ac urna eu felis dapibus condimentum sit amet a augue." },
        { id: 4, name: "Emily Brown", email: "emily.brown@example.com", description: "Fusce efficitur nisi vel felis vehicula, a feugiat magna rutrum." },
      ],
      showEditModal: false,
      showDeleteModal: false,
      editForm: {
        id: null,
        name: '',
        email: '',
        description: '',
      },
      messageIdToDelete: null,
    };
  },
  methods: {
    editMessage(message) {
      this.editForm.id = message.id;
      this.editForm.name = message.name;
      this.editForm.email = message.email;
      this.editForm.description = message.description;
      this.showEditModal = true;
    },
    updateMessage() {
      // Logic to update message
      const index = this.messages.findIndex(msg => msg.id === this.editForm.id);
      if (index !== -1) {
        this.messages[index].name = this.editForm.name;
        this.messages[index].email = this.editForm.email;
        this.messages[index].description = this.editForm.description;
      }
      this.showEditModal = false;
    },
    confirmDelete(messageId) {
      this.messageIdToDelete = messageId;
      this.showDeleteModal = true;
    },
    deleteConfirmed() {
      this.messages = this.messages.filter(message => message.id !== this.messageIdToDelete);
      this.showDeleteModal = false;
    }
  }
};
</script>

<style scoped>
/* Add scoped styles here if needed */
</style>
