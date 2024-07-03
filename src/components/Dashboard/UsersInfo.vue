<template>
    <div>
      <h1 class="text-2xl font-bold mb-4">User Information</h1>
      <div v-if="user">
        <div class="overflow-hidden border border-gray-200 rounded-md shadow-md">
          <table class="min-w-full divide-y divide-gray-200">
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-6 py-3 text-left text-sm font-semibold text-gray-900">Name:</td>
                <td class="px-6 py-3 text-left text-sm text-gray-500">{{ user.name }}</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-left text-sm font-semibold text-gray-900">Email:</td>
                <td class="px-6 py-3 text-left text-sm text-gray-500">{{ user.email }}</td>
              </tr>
              <!-- Add more rows for additional user information -->
            </tbody>
          </table>
        </div>
      </div>
      <div v-else>
        <p class="text-gray-500">No user information available. Please log in or register.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: null // Placeholder for user data
      };
    },
    created() {
      // Simulate fetching user data from backend or localStorage
      this.user = {
        name: 'John Doe', // Replace with actual user data
        email: 'john.doe@example.com' // Replace with actual user data
        // Add more fields as needed
      };
    }
  };
  </script>