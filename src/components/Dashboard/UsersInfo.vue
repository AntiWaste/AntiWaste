<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <h2 class="text-2xl font-semibold text-gray-800 mb-4">Dashboard - User Information</h2>
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
              Role
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="(user, index) in users" :key="index">
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">{{ user.id }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">{{ user.name }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">{{ user.email }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">{{ user.role }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <button @click="editUser(user)" class="text-green-600 hover:text-green-900">Edit</button>
              <button @click="confirmDelete(user.id)" class="text-red-600 hover:text-red-900 ml-4">Delete</button>
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
                <h3 class="text-lg text-center font-medium text-gray-900">Edit User</h3>
                <div class="mt-2">
                  <form @submit.prevent="updateUser">
                    <div>
                      <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                      <input v-model="editForm.name" type="text" class="mt-1 block w-full shadow-sm max-sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div class="mt-4">
                      <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                      <input v-model="editForm.email" type="email" class="mt-1 block w-full shadow-sm max-sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div class="mt-4">
                      <label for="role" class="block text-sm font-medium text-gray-700">Role</label>
                      <input v-model="editForm.role" type="text" class="mt-1 block w-full shadow-sm max-sm:text-sm border-gray-300 rounded-md" />
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
                  <p class="text-sm text-gray-500">Are you sure you want to delete this user?</p>
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
import { API_BASE_URL } from '@/config'; // Adjust the path as per your project structure
import axios from 'axios';

export default {
  data() {
    return {
      users: [],
      showEditModal: false,
      showDeleteModal: false,
      editForm: {
        id: null,
        name: '',
        email: '',
        role: '',
      },
      userIdToDelete: null,
    };
  },
  mounted() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      axios.get(`${API_BASE_URL}users`)
        .then(response => {
          this.users = response.data;
        })
        .catch(error => {
          console.error('Error fetching users:', error);
        });
    },
    editUser(user) {
      this.editForm.id = user.id;
      this.editForm.name = user.name;
      this.editForm.email = user.email;
      this.editForm.role = user.role;
      this.showEditModal = true;
    },
    updateUser() {
      axios.put(`${API_BASE_URL}users/${this.editForm.id}`, this.editForm)
        .then(response => {
          const updatedUser = response.data;
          const index = this.users.findIndex(u => u.id === updatedUser.id);
          if (index !== -1) {
            this.$set(this.users, index, updatedUser);
          }
          this.showEditModal = false;
        })
        .catch(error => {
          console.error('Error updating user:', error);
        });
    },
    confirmDelete(userId) {
      this.userIdToDelete = userId;
      this.showDeleteModal = true;
    },
    deleteConfirmed() {
      axios.delete(`${API_BASE_URL}users/${this.userIdToDelete}`)
        .then(() => {
          this.users = this.users.filter(user => user.id !== this.userIdToDelete);
          this.showDeleteModal = false;
        })
        .catch(error => {
          console.error('Error deleting user:', error);
        });
    },
  },
};
</script>